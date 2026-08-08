/* ====== ليالي روقاندو — الطبقة الأونلاين (Ably) ======
   يُنصح بتقييد المفتاح (Capabilities) على Publish + Subscribe فقط. */
const ABLY_KEY = "WEHAHQ.bruQUA:vAIAvC_vW30OpzTdVNjArNMSC1zTTjdvdtvmw52o-10";
const ROOM_CHARS = "ABCDEFGHJKMNPQRSTUVWXYZ";

window.online = (function(){
  let ably = null;
  let channel = null;
  let role = null;      /* "host" أو "player" */
  let code = "";
  let name = "";
  let team = "sakara";
  let myId = "";
  const players = {};   /* clientId -> {name, team} */

  /* حالة اللاعب (بازر وكويز) */
  let quizStateP = null;
  let quizCountP = null;
  let buzzStateP = { active:false, locked:null, pressed:false };
  let buzzCountP = null;
  let initTimer = null;

  const $ = (id)=>document.getElementById(id);
  const overlay = ()=>$("onlineOverlay");
  const teamName = (t)=> t==="sakara" ? "السكارى" : "المساطيل";
  const keyOk = ()=> ABLY_KEY && ABLY_KEY.indexOf("PASTE_")===-1;
  const ablyLoaded = ()=> typeof Ably !== "undefined";

  function show(err){
    const e = $("onlineErr");
    if(e) e.textContent = err || "";
  }

  function publish(msg){
    if(channel && ably) channel.publish("msg", msg);
  }
  function link(){
    return location.origin + location.pathname + "?room=" + code;
  }
  function genCode(){
    let s = "";
    for(let i=0;i<4;i++) s += ROOM_CHARS[Math.floor(Math.random()*ROOM_CHARS.length)];
    return s;
  }
  function pgBox(inner){
    return `<div class="pg-box">${inner}</div>`;
  }

  /* ---------- شاشات الدخول ---------- */
  function renderHome(){
    overlay().innerHTML = `
      <div class="oo-card">
        <div class="oo-logo">ليالي روقاندو</div>
        <div class="oo-sub">العبها مع فريقك أونلاين من أي موبايل</div>
        <button class="oo-role" onclick="online.openHost()"><strong>منسق اللعبة</strong><small>يتحكم بالجولات والأسئلة والعجلة</small></button>
        <button class="oo-role" onclick="online.openPlayer()"><strong>لاعب</strong><small>ينضم لفريق ويجيب من موبايله</small></button>
        <button class="btn btn-ghost" onclick="online.enterLocal()">لعب محلي</button>
        <div class="oo-err" id="onlineErr"></div>
        ${ keyOk() && ablyLoaded() ? "" : '<div class="oo-link">ملاحظة: يحتاج مفتاح Ably — افتح online.js وأضف المفتاح في ABLY_KEY</div>' }
      </div>`;
  }
  function openHost(){
    overlay().innerHTML = `
      <div class="oo-card">
        <div class="oo-logo">منسق اللعبة</div>
        <div class="oo-sub">أنشئ غرفة وشارك الرابط مع الفريقين</div>
        <input class="oo-field" id="ooRoom" placeholder="كود الغرفة (مثال: RQKD)" value="">
        <button class="btn btn-gold btn-block" onclick="online.startHost()">إنشاء الغرفة</button>
        <button class="btn btn-ghost btn-block" onclick="online.back()">رجوع</button>
        <div class="oo-err" id="onlineErr"></div>
      </div>`;
    setTimeout(()=>$("ooRoom").focus(), 50);
  }
  function openPlayer(){
    const urlRoom = new URLSearchParams(location.search).get("room") || "";
    overlay().innerHTML = `
      <div class="oo-card">
        <div class="oo-logo">لاعب</div>
        <div class="oo-sub">انضم لفريقك وابدأ</div>
        <input class="oo-field" id="ooName" placeholder="اسمك">
        <input class="oo-field" id="ooRoom" placeholder="كود الغرفة" value="${urlRoom.toUpperCase()}">
        <div class="oo-team-row">
          <button class="oo-team-btn" id="ooT-sakara" onclick="online.pickTeam('sakara')">السكارى</button>
          <button class="oo-team-btn" id="ooT-masateel" onclick="online.pickTeam('masateel')">المساطيل</button>
        </div>
        <button class="btn btn-gold btn-block" onclick="online.startPlayer()">انضم</button>
        <button class="btn btn-ghost btn-block" onclick="online.back()">رجوع</button>
        <div class="oo-err" id="onlineErr"></div>
      </div>`;
    pickTeam("sakara");
  }
  function pickTeam(t){
    team = t;
    document.querySelectorAll(".oo-team-btn").forEach(b=>b.className="oo-team-btn");
    $("ooT-"+t).classList.add(t==="sakara" ? "active-sakara" : "active-masateel");
  }
  function back(){
    role = null;
    renderHome();
  }
  function enterLocal(){
    overlay().classList.add("hidden");
  }

  /* ---------- اتصال المنسق ---------- */
  const api = {
    get connected(){ return role==="host" && ably !== null; },
    publishScore(){ publish({type:"score", sakara:+$("scoreSakara").textContent, masateel:+$("scoreMasateel").textContent}); },
    publishNight(){
      const n = window.getNight();
      publish({type:"night", on:n.on, round:n.round, roundName:window.getRoundName(n.round), status:$("nightStatus").textContent});
    },
    publishQuiz(o){ publish({type:"quiz", ...o}); },
    publishBuzz(o){ publish({type:"buzz", ...o}); },
    publishWheel(text){ publish({type:"wheel", text}); },
    publishFinal(o){ publish({type:"final", ...o}); publish({type:"confetti"}); },
    publishConfetti(){ publish({type:"confetti"}); },
    disconnect(){ teardown(); }
  };

  function startHost(){
    if(!keyOk() || !ablyLoaded()){ show("المفتاح أو اتصال Ably غير جاهز — راجع online.js"); return; }
    let c = ($("ooRoom").value || "").trim().toUpperCase();
    if(!c) c = genCode();
    connectHost(c);
  }
  function connectHost(c){
    code = c;
    try{
      ably = new Ably.Realtime({ key:ABLY_KEY, clientId:"h-"+c+"-"+Math.random().toString(36).slice(2,8) });
    }catch(e){ show("تعذر الاتصال: " + e.message); return; }
    myId = ably.auth.clientId;
    role = "host";
    window.onlineHost = api;
    channel = ably.channels.get("room-" + c);
    channel.attach();
    channel.presence.enter({ role:"host", name:"المنسق", team:null, id:myId });
    channel.subscribe("msg", m=>hostOnMsg(m.data));
    channel.presence.subscribe(["enter","update","leave"], m=>{
      const d = m.member && m.member.data ? m.member.data : null;
      const id = d && d.id ? d.id : (m.member ? m.member.clientId : "");
      if(d && d.role === "player"){
        if(m.action === "leave") delete players[id];
        else players[id] = { name:d.name, team:d.team };
      }
      renderHostPlayers();
      scheduleInit();
    });
    overlay().classList.add("hidden");
    document.body.classList.add("online-host");
    showHostBar();
    setTimeout(publishInit, 400);
  }

  function hostOnMsg(msg){
    switch(msg.type){
      case "playerAnswer": hostPlayerAnswer(msg); break;
      case "buzzPress": hostBuzzPress(msg); break;
      case "buzzAnswer": hostBuzzAnswer(msg); break;
    }
  }

  function scheduleInit(){
    clearTimeout(initTimer);
    initTimer = setTimeout(publishInit, 250);
  }
  function publishInit(){
    const n = window.getNight();
    publish({
      type:"init",
      night:{ on:n.on, round:n.round, roundName:window.getRoundName(n.round) },
      scores:{ sakara:+$("scoreSakara").textContent, masateel:+$("scoreMasateel").textContent },
      wheel:$("wheelResult").textContent,
      players:Object.values(players)
    });
  }

  function showHostBar(){
    const bar = $("hostBar");
    bar.hidden = false;
    $("hbRoom").textContent = code;
    $("hbLink").textContent = link();
    renderHostPlayers();
  }
  function renderHostPlayers(){
    const p = Object.values(players);
    const s = p.filter(x=>x.team==="sakara").map(x=>x.name);
    const m = p.filter(x=>x.team==="masateel").map(x=>x.name);
    $("hbPlayers").textContent = `السكارى (${s.length}): ${s.join("، ") || "—"} | المساطيل (${m.length}): ${m.join("، ") || "—"}`;
  }
  function copyLink(){
    const t = link();
    if(navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t);
    const el = $("hbLink");
    if(el){ el.textContent = "تم النسخ"; setTimeout(()=>el.textContent = t, 2000); }
  }

  /* ---------- رسائل اللاعبين للمنسق ---------- */
  function hostPlayerAnswer(msg){
    if(!window.quizBusy()) return;
    window.clearQuizTimer();
    const item = window.quizItem(msg.ci, msg.li);
    const res = window.evalQuiz(msg.ci, msg.li, msg.index, msg.value);
    addPoints(msg.team, res.gained);
    const btns = document.querySelectorAll(".quiz-answer");
    btns.forEach(b=>{ b.disabled = true; b.onclick = null; });
    btns[res.correctIndex].classList.add("correct");
    if(!res.correct) btns[msg.index].classList.add("wrong");
    const fb = res.correct
      ? `${msg.name} أجاب صحيحاً! +${msg.value} لفريق ${teamName(msg.team)}.`
      : `${msg.name} أجاب خطأً! -${Math.floor(msg.value/2)}. الصحيحة: ${item.options[res.correctIndex]}`;
    $("quizFeedback").textContent = fb;
    document.querySelectorAll(".team-pick").forEach(b=>b.classList.remove("lock"));
    const bar = $("quizTimerBar");
    bar.style.transition = "none"; bar.style.width = "100%";
    $("quizTimerNum").classList.remove("danger");
    $("quizTimerNum").textContent = window.QUIZ_TIME;
    publish({type:"quiz", action:"result", question:item.q, options:item.options, index:msg.index, correctIndex:res.correctIndex, correct:res.correct, gained:res.gained, feedback:fb});
  }

  function hostBuzzPress(msg){
    const st = window.getBuzzState();
    if(!st.active || st.turn) return;
    buzz(msg.team);
    $("buzzFeedback").textContent = `${msg.name} من فريق ${teamName(msg.team)} ضغط الزر! الإجابة عنده...`;
    publish({type:"buzz", action:"locked", name:msg.name, team:msg.team, question:window.buzzQuestionText(), options:window.buzzData().options});
  }

  function hostBuzzAnswer(msg){
    const st = window.getBuzzState();
    if(!st.active || st.turn !== msg.team) return;
    window.clearBuzzTimer();
    window.setBuzzInactive();
    const { correctIndex, options } = window.buzzData();
    const correct = msg.index === correctIndex;
    const gained = correct ? 20 : -10;
    addPoints(msg.team, gained);
    const btns = document.querySelectorAll(".buzz-opt");
    btns.forEach(b=>{ b.disabled = true; });
    btns[correctIndex].classList.add("correct");
    if(!correct) btns[msg.index].classList.add("wrong");
    const el = $("buzzTimer");
    el.textContent = window.BUZZ_TIME;
    el.classList.remove("danger");
    document.querySelectorAll(".buzz-buzzer").forEach(b=>b.classList.remove("hit"));
    const fb = correct
      ? `إجابة صحيحة! +20 نقطة لفريق ${teamName(msg.team)}.`
      : `إجابة خاطئة! -10. الصحيحة: ${options[correctIndex]}`;
    $("buzzFeedback").textContent = fb;
    publish({type:"buzz", action:"result", question:window.buzzQuestionText(), options, index:msg.index, correctIndex, correct, gained, feedback:fb});
  }

  /* ---------- اتصال اللاعب ---------- */
  function startPlayer(){
    if(!keyOk() || !ablyLoaded()){ show("المفتاح أو اتصال Ably غير جاهز — راجع online.js"); return; }
    const nm = ($("ooName").value || "").trim();
    const c = ($("ooRoom").value || "").trim().toUpperCase();
    if(!nm){ show("اكتب اسمك أولاً"); return; }
    if(!c){ show("اكتب كود الغرفة"); return; }
    connectPlayer(c, nm, team);
  }
  function connectPlayer(c, nm, tm){
    code = c; name = nm; team = tm;
    try{
      ably = new Ably.Realtime({ key:ABLY_KEY, clientId:"p-"+c+"-"+Math.random().toString(36).slice(2,8) });
    }catch(e){ show("تعذر الاتصال: " + e.message); return; }
    myId = ably.auth.clientId;
    role = "player";
    channel = ably.channels.get("room-" + c);
    channel.attach();
    channel.presence.enter({ role:"player", name, team, id:myId });
    channel.subscribe("msg", m=>playerOnMsg(m.data));
    overlay().classList.add("hidden");
    document.body.classList.add("player-mode");
    $("pRoom").textContent = c;
    $("pName").textContent = name;
    const badge = $("pTeam");
    badge.textContent = teamName(team);
    badge.className = "player-team-badge " + (team==="sakara" ? "t-sakara" : "t-masateel");
    $("pGame").innerHTML = pgBox('<div class="pg-note">بانتظار تعليمات المنسق...</div>');
  }

  function playerOnMsg(msg){
    switch(msg.type){
      case "init":
        applyNight(msg.night);
        applyScore(msg.scores);
        if(msg.wheel) applyWheel(msg.wheel);
        break;
      case "night": applyNight(msg); break;
      case "score": applyScore(msg); break;
      case "quiz": applyQuiz(msg); break;
      case "buzz": applyBuzz(msg); break;
      case "wheel": applyWheel(msg.text); break;
      case "final": applyFinal(msg); break;
      case "confetti": if(window.spawnConfetti) window.spawnConfetti(); break;
    }
  }

  function applyNight(msg){
    $("pRound").textContent = msg.on
      ? `الجولة ${msg.round+1}/4: ${msg.roundName}`
      : "بانتظار بدء الليلة...";
    if(!msg.on){
      if(quizCountP){ clearInterval(quizCountP); quizCountP = null; }
      if(buzzCountP){ clearInterval(buzzCountP); buzzCountP = null; }
      quizStateP = null;
      buzzStateP = { active:false, locked:null, pressed:false };
      $("pGame").innerHTML = pgBox('<div class="pg-note">بانتظار تعليمات المنسق...</div>');
    }
  }
  function applyScore(msg){
    $("pSakara").textContent = msg.sakara;
    $("pMasateel").textContent = msg.masateel;
  }
  function applyWheel(text){
    $("pGame").innerHTML = pgBox(`<div class="pg-note">عجلة الحظ: ${text}</div>`);
  }

  /* ---------- الكويز على الموبايل ---------- */
  function applyQuiz(msg){
    const area = $("pGame");
    if(quizCountP){ clearInterval(quizCountP); quizCountP = null; }
    quizStateP = null;
    if(msg.action === "ask"){
      quizStateP = { ci:msg.ci, li:msg.li, value:msg.value, team:msg.team, answered:false };
      if(msg.team === team){
        area.innerHTML = pgBox(`
          <div class="pg-timer" id="pgTimer">${msg.time}</div>
          <div class="pg-q">${msg.question}</div>
          ${msg.options.map((o,i)=>`<button class="pg-opt" onclick="online.answerQ(${i})">${o}</button>`).join("")}
          <div class="pg-note">أنت تجيب الآن... أمامك ${msg.time} ثانية</div>`);
        let left = msg.time;
        quizCountP = setInterval(()=>{
          left--;
          const el = $("pgTimer");
          if(el){ el.textContent = left; el.classList.toggle("danger", left<=5); }
          if(left<=0){ clearInterval(quizCountP); quizCountP = null; }
        },1000);
      }else{
        area.innerHTML = pgBox(`<div class="pg-q">سؤال لفريق ${teamName(msg.team)}...</div><div class="pg-note">ترقب النتيجة</div>`);
      }
    }else if(msg.action === "result"){
      area.innerHTML = pgBox(`
        <div class="pg-q">${msg.question}</div>
        ${msg.options.map((o,i)=>`<button class="pg-opt ${i===msg.correctIndex?"correct":""} ${!msg.correct && i===msg.index?"wrong":""}" disabled>${o}</button>`).join("")}
        <div class="pg-feedback">${msg.feedback}</div>`);
    }else if(msg.action === "timeup"){
      area.innerHTML = pgBox('<div class="pg-feedback">انتهى الوقت! صفر نقطة.</div>');
    }else if(msg.action === "reset"){
      area.innerHTML = pgBox('<div class="pg-note">لوحة الأسئلة جاهزة... المنسق يختار سؤالاً</div>');
    }
  }
  function answerQ(i){
    const q = quizStateP;
    if(!q || q.answered) return;
    q.answered = true;
    if(quizCountP){ clearInterval(quizCountP); quizCountP = null; }
    publish({ type:"playerAnswer", ci:q.ci, li:q.li, index:i, value:q.value, name, team });
    $("pGame").innerHTML = pgBox('<div class="pg-note">انتظر النتيجة...</div>');
  }

  /* ---------- معركة السرعة على الموبايل ---------- */
  function applyBuzz(msg){
    const area = $("pGame");
    if(buzzCountP){ clearInterval(buzzCountP); buzzCountP = null; }
    buzzStateP = { active:false, locked:null, pressed:false };
    if(msg.action === "ask"){
      buzzStateP = { active:true, locked:null, pressed:false, question:msg.question, options:msg.options };
      area.innerHTML = pgBox(`
        <div class="pg-q">${msg.question}</div>
        <button class="pg-buzz press-${team}" onclick="online.buzzP()">${teamName(team)}</button>
        <div class="pg-note">اضغط الزر بسرعة لتفوز بالإجابة!</div>`);
    }else if(msg.action === "locked"){
      buzzStateP.locked = msg.name;
      if(msg.name === name){
        area.innerHTML = pgBox(`
          <div class="pg-timer" id="pgTimer">10</div>
          <div class="pg-q">${buzzStateP.question}</div>
          ${buzzStateP.options.map((o,i)=>`<button class="pg-opt" onclick="online.answerB(${i})">${o}</button>`).join("")}
          <div class="pg-note">أنت الفائز بالبازر... أجب خلال 10 ثوانٍ</div>`);
        let left = 10;
        buzzCountP = setInterval(()=>{
          left--;
          const el = $("pgTimer");
          if(el){ el.textContent = left; el.classList.toggle("danger", left<=3); }
          if(left<=0){ clearInterval(buzzCountP); buzzCountP = null; }
        },1000);
      }else{
        area.innerHTML = pgBox(`
          <div class="pg-q">${buzzStateP.question}</div>
          <div class="pg-note">${msg.name} من فريق ${teamName(msg.team)} فاز بالبازر... يجيب الآن</div>`);
      }
    }else if(msg.action === "result"){
      area.innerHTML = pgBox(`
        <div class="pg-q">${msg.question}</div>
        ${msg.options.map((o,i)=>`<button class="pg-opt ${i===msg.correctIndex?"correct":""} ${!msg.correct && i===msg.index?"wrong":""}" disabled>${o}</button>`).join("")}
        <div class="pg-feedback">${msg.feedback}</div>`);
    }else if(msg.action === "timeout"){
      area.innerHTML = pgBox('<div class="pg-feedback">انتهى الوقت! صفر نقطة.</div>');
    }
  }
  function buzzP(){
    const b = buzzStateP;
    if(!b.active || b.locked || b.pressed) return;
    b.pressed = true;
    publish({ type:"buzzPress", name, team });
    $("pGame").innerHTML = pgBox('<div class="pg-note">تم التسجيل... أنتظر لتُعرف النتيجة</div>');
  }
  function answerB(i){
    const b = buzzStateP;
    if(!b.active || b.locked !== name) return;
    if(buzzCountP){ clearInterval(buzzCountP); buzzCountP = null; }
    publish({ type:"buzzAnswer", index:i, name, team });
    $("pGame").innerHTML = pgBox('<div class="pg-note">انتظر النتيجة...</div>');
  }

  /* ---------- الختام على الموبايل ---------- */
  function applyFinal(msg){
    $("pGame").innerHTML = `
      <div class="pg-final"><div class="pg-final-inner">
        <div class="pg-final-title">ختام الليلة</div>
        <div class="pg-final-winner">${msg.winner}</div>
        <div class="pg-final-score">${msg.scoreText}</div>
        <button class="btn btn-gold" onclick="online.pBackToRoom()">متابعة</button>
      </div></div>`;
    if(window.spawnConfetti) window.spawnConfetti();
  }
  function pBackToRoom(){
    const f = document.querySelector(".pg-final");
    if(f) f.remove();
    $("pGame").innerHTML = pgBox('<div class="pg-note">بانتظار تعليمات المنسق...</div>');
  }

  /* ---------- إنهاء ---------- */
  function teardown(){
    if(quizCountP){ clearInterval(quizCountP); quizCountP = null; }
    if(buzzCountP){ clearInterval(buzzCountP); buzzCountP = null; }
    if(channel){
      try{ channel.presence.leave(); }catch(e){}
      try{ channel.unsubscribe(); }catch(e){}
    }
    if(ably){ try{ ably.close(); }catch(e){} }
    ably = null; channel = null; role = null;
    window.onlineHost = null;
    document.body.classList.remove("online-host", "player-mode");
    const bar = $("hostBar");
    if(bar) bar.hidden = true;
    Object.keys(players).forEach(k=>delete players[k]);
    renderHome();
    overlay().classList.remove("hidden");
  }
  function disconnect(){
    teardown();
  }

  /* ---------- تشغيل ---------- */
  function init(){
    renderHome();
    if(new URLSearchParams(location.search).get("room")) openPlayer();
  }

  return {
    init, openHost, openPlayer, enterLocal, back, pickTeam,
    startHost, startPlayer, copyLink, disconnect,
    answerQ, buzzP, answerB, pBackToRoom
  };
})();

window.online.init();
