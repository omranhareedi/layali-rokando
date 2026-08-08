/* ====== ليالي روقاندو - الأكواد التفاعلية ====== */

/* ---------- بنك الألعاب ---------- */
const GAMES = [
  {
    title:"أسئلة وثقافة",
    desc:"حروب العقول",
    games:[
      "أسئلة سريعة: 10 أسئلة في 30 ثانية، كل إجابة صحيحة نقطة.",
      "الضاغط الأول: أول فريق يضغط الزر يجيب.",
      "حدّثني: وصف كلمة دون ذكرها ويخمّن الفريق.",
      "الحروف: حرف واحد، ويتناوب الفريقان بأسماء تبدأ به.",
      "الصورة الغامضة: صورة تتكشف تدريجياً... من يعرفها أولاً؟",
    ]
  },
  {
    title:"كلمة ولسان",
    desc:"ألعاب اللغة",
    games:[
      "أعاصير اللسان: كررها ثلاث مرات دون تردد.",
      "الهاتف المكسور: رسالة تنتقل وتتغير حتى آخر شخص.",
      "لا نعم ولا لا: 20 سؤالاً بلا هاتين الكلمتين.",
      "الكلمة الممنوعة: اشرح الكلمة دون 3 كلمات محددة.",
      "أكمل الجملة: كلمات متفرقة ويلفّق منها جملة.",
    ]
  },
  {
    title:"تحديات السرعة",
    desc:"دقيقة وتحدٍّ",
    games:[
      "دقيقة واحدة: تحديات صغيرة، كل تحدٍّ في دقيقة.",
      "معلقة الملعقة: سباق مع البيضة على الملعقة.",
      "الكرسي الموسيقي: من يبقى بلا كرسي يجيب عن سؤال عقاب.",
      "الوقوف على رجل: أجب وأنت على رجل واحدة.",
      "الرياضة الشجاعة: ليمونة كاملة... من ينهيها أولاً؟",
    ]
  },
  {
    title:"ذاكرة وتركيز",
    desc:"من يدّعي الحفظ",
    games:[
      "قائمة السوق: احفظها 30 ثانية ثم أجب عن الطلبات.",
      "البطاقات المتطابقة: ابحث عن الصور المطابقة قبل المنافس.",
      "أين كان؟: اعرضوا 15 شيئاً وغطوها... أين كان كل شيء؟",
      "العد الصحيح: صورة تظهر ثانية واحدة... كم مرة ظهر الشيء؟",
      "خمسة في الجيب: خمسة أشياء تُحفظ ويُعاد ترتيبها.",
    ]
  },
  {
    title:"تمثيل وضحك",
    desc:"خفة وضحك",
    games:[
      "الإيماءات: المؤدي يتحرك والفريق يخمّن.",
      "التقليد: قلد شخصية مشهورة والجمهور يحكم.",
      "المشهد المرتجل: 3 دقائق ارتجال على موضوع من الجمهور.",
      "من يضحك أولاً؟: أول من يضحك يخسر.",
      "أكمل الموقف: بداية موقف، ويكمله الفريق.",
    ]
  },
  {
    title:"غناء ومزيكا",
    desc:"نغمات ومفاجآت",
    games:[
      "غنّها: 5 ثوانٍ من الأغنية... من يعرفها يكمل.",
      "نصف الأغنية: كلمات من المنتصف والفريق يكملها.",
      "الرقصة المتجمدة: توقف الموسيقى... من يتحرك يخسر.",
      "الإيقاع: دقات إيقاع يعيدها الفريق بدقة.",
    ]
  },
  {
    title:"سرعة البديهة",
    desc:"ردود لا تتأخر",
    games:[
      "ردّ بالحرف: حرف معين وأول كلمة تبدأ به.",
      "الرد السريع: إجابات سريعة دون تردد.",
      "لماذا؟: أسباب مضحكة لمواقف عادية.",
      "خمّن السعر: اعرض شيئاً... الأقرب يفوز.",
    ]
  },
  {
    title:"ألعاب الجمهور",
    desc:"الجمهور حكَم ولاعب",
    games:[
      "كأس الجمهور: الجمهور يختار تحدياً لأي فريق.",
      "اصرخ بالإجابة: الجمهور يصرخ والفريق يسمع.",
      "التصويت الحاسم: الجمهور يختار من يحاول في الحاجز الأخير.",
      "متطوع من الجمهور: قرعة على أحدهم ينزل ويلعب ويأخذ جائزة.",
    ]
  },
  {
    title:"ألعاب جيمي فالون",
    desc:"من The Tonight Show",
    games:[
      "صندوق الكذب: صندوق مغلق... حقيقة أم كذب؟",
      "الكلمات المهربة: أدخل كلمات غريبة في حديثك دون أن يلاحظ الفريق.",
      "اقرأ شفتيّ: سماعات عالية... اقرأ الحركة.",
      "التلخيص: لخّص فيلماً في 5 ثوانٍ.",
      "كلمة المرور: كلمة سرية تُوصف بكلمة واحدة.",
      "الرقص المتجمد: توقف الموسيقى ومن يتحرك يخسر.",
    ]
  },
  {
    title:"ألعاب التكنولوجيا",
    desc:"شاشات وأجهزة",
    games:[
      "شاشة النار: لعبة صغيرة على الشاشة الكبيرة.",
      "الذكاء الاصطناعي يسأل: سؤال من الذكاء الاصطناعي.",
      "الواقع الافتراضي: تحدي سريع داخل الواقع الافتراضي.",
      "الريلز السريع: أسرع مقطع مضحك والجمهور يحكم.",
    ]
  },
  {
    title:"الحواجز الأخيرة",
    desc:"الحسم والكأس",
    games:[
      "الجولة الكبرى: 5 أسئلة حاسمة، أول من يصحح يفوز.",
      "عجلة الحظ: دورة واحدة تحدد المصير.",
      "الصندوق الغامض: صندوق من ثلاثة... ومفاجأة حاسمة.",
      "التحدي الحي: التحدي الأكبر في الحلقة.",
      "الدقيقة الأخيرة: تتجمع النقاط في آخر 60 ثانية والفائز بالكأس.",
    ]
  },
];

/* رسم بنك الألعاب */
function renderGames(){
  const grid = document.getElementById("catGrid");
  grid.innerHTML = GAMES.map((cat,i)=>`
    <div class="cat-card" id="cat-${i}">
      <div class="cat-head" onclick="toggleCat(${i})">
        <h3>${cat.title}</h3>
        <span class="cat-count">${cat.games.length} ألعاب</span>
        <span class="cat-toggle">+</span>
      </div>
      <div class="cat-body">
        <div class="cat-body-inner">
          <ul>${cat.games.map(g=>`<li>${g}</li>`).join("")}</ul>
        </div>
      </div>
    </div>
  `).join("");
}
function toggleCat(i){
  const card = document.getElementById("cat-"+i);
  const body = card.querySelector(".cat-body");
  const open = card.classList.toggle("open");
  body.style.maxHeight = open ? (body.scrollHeight + "px") : "0";
}
window.addEventListener("resize",()=>{
  document.querySelectorAll(".cat-card.open").forEach(card=>{
    card.querySelector(".cat-body").style.maxHeight = card.querySelector(".cat-body").scrollHeight + "px";
  });
});

/* ---------- لوحة النتائج ---------- */
let score = { sakara:0, masateel:0 };
function addPoints(team,n){
  score[team] = Math.max(0, score[team] + n);
  document.getElementById("scoreSakara").textContent = score.sakara;
  document.getElementById("scoreMasateel").textContent = score.masateel;
  if(typeof night !== "undefined" && night.on){
    nightScore[team] = Math.max(0, nightScore[team] + n);
    updateNightTotal();
  }
  if(window.onlineHost && window.onlineHost.connected) window.onlineHost.publishScore();
  const el = team==="sakara" ? "scoreSakara" : "scoreMasateel";
  const box = document.getElementById(el);
  box.style.transform = "scale(1.25)";
  setTimeout(()=>box.style.transform = "scale(1)", 180);
}
function resetScore(){
  score = { sakara:0, masateel:0 };
  document.getElementById("scoreSakara").textContent = 0;
  document.getElementById("scoreMasateel").textContent = 0;
}

/* ---------- الدوارة ---------- */
const WHEEL_SEGMENTS = [
  { label:"+10 نقطة", fill:"#ff2d78", color:"#fff" },
  { label:"+20 نقطة", fill:"#ffd23f", color:"#231603" },
  { label:"جاكبوت +50", fill:"#00e5ff", color:"#02303a" },
  { label:"سرقة 10 نقاط", fill:"#a855f7", color:"#fff" },
  { label:"تحدي أرنب -10", fill:"#ff4d4d", color:"#fff" },
  { label:"فرصة إضافية", fill:"#39d98a", color:"#02310f" },
];
const WHEEL_SCORE = {
  "+10 نقطة":10,
  "+20 نقطة":20,
  "جاكبوت +50":50,
  "سرقة 10 نقاط":"steal",
  "تحدي أرنب -10":-10,
  "فرصة إضافية":5,
};
let wheelTeam = "sakara";
function pickWheelTeam(t){
  wheelTeam = t;
  document.querySelectorAll(".wheel-pick").forEach(b=>b.classList.remove("active"));
  document.querySelector(t==="sakara" ? ".pick-sakara" : ".pick-masateel").classList.add("active");
}
let wheelAngle = 0, wheelSpinning = false;
const wheelCanvas = document.getElementById("wheelCanvas");
const wctx = wheelCanvas.getContext("2d");

function drawWheel(angle){
  const cx = 150, cy = 150, r = 138;
  wctx.clearRect(0,0,300,300);
  const n = WHEEL_SEGMENTS.length, seg = (Math.PI*2)/n;
  WHEEL_SEGMENTS.forEach((s,i)=>{
    const start = angle + i*seg;
    wctx.beginPath();
    wctx.moveTo(cx,cy);
    wctx.arc(cx,cy,r,start,start+seg);
    wctx.closePath();
    wctx.fillStyle = s.fill;
    wctx.fill();
    wctx.strokeStyle = "rgba(255,255,255,.35)";
    wctx.lineWidth = 2;
    wctx.stroke();
    wctx.save();
    wctx.translate(cx,cy);
    wctx.rotate(start + seg/2);
    wctx.textAlign = "right";
    wctx.fillStyle = s.color;
    wctx.font = "700 14px Cairo, sans-serif";
    wctx.fillText(s.label, r-14, 5);
    wctx.restore();
  });
  wctx.beginPath();
  wctx.arc(cx,cy,16,0,Math.PI*2);
  wctx.fillStyle = "#fff";
  wctx.fill();
  wctx.strokeStyle = "#231603";
  wctx.lineWidth = 3;
  wctx.stroke();
  /* مؤشر فوق */
  wctx.beginPath();
  wctx.moveTo(cx, 8); wctx.lineTo(cx-12, 34); wctx.lineTo(cx+12, 34);
  wctx.closePath();
  wctx.fillStyle = "#ffd23f";
  wctx.fill();
  wctx.strokeStyle = "#231603"; wctx.lineWidth = 2; wctx.stroke();
}
function spinWheel(){
  if(wheelSpinning) return;
  if(!widgetAllowed("wheel")) return;
  wheelSpinning = true;
  document.getElementById("wheelResult").textContent = "تدور العجلة...";
  const start = performance.now();
  const dur = 3000 + Math.random()*1500;
  const startAngle = wheelAngle;
  const extra = Math.random()*360 + 1080; /* على الأقل 3 لفات */
  function step(now){
    const t = Math.min(1,(now-start)/dur);
    const ease = 1 - Math.pow(1-t,3);
    wheelAngle = startAngle + extra*ease;
    drawWheel(wheelAngle*(Math.PI/180));
    if(t<1){
      requestAnimationFrame(step);
    }else{
      wheelSpinning = false;
      const idx = getWinnerIndex(wheelAngle);
      const label = WHEEL_SEGMENTS[idx].label;
      const val = WHEEL_SCORE[label];
      const teamName = wheelTeam==="sakara" ? "السكارى" : "المساطيل";
      if(val === "steal"){
        const opp = wheelTeam==="sakara" ? "masateel" : "sakara";
        addPoints(opp,-10);
        addPoints(wheelTeam,10);
        document.getElementById("wheelResult").textContent = `سرقة! +10 لفريق ${teamName} و-10 من الفريق الآخر`;
      }else{
        addPoints(wheelTeam, val);
        const sign = val >= 0 ? "+" : "";
        document.getElementById("wheelResult").textContent = `${label} (${sign}${val}) لفريق ${teamName}`;
      }
      if(window.onlineHost && window.onlineHost.connected) window.onlineHost.publishWheel(document.getElementById("wheelResult").textContent);
    }
  }
  requestAnimationFrame(step);
}
function getWinnerIndex(deg){
  /* المغير واقف فوق (top = -90deg) */
  const n = WHEEL_SEGMENTS.length, seg = 360/n;
  const norm = (((deg - 90) % 360) + 360) % 360;
  return Math.floor(norm / seg);
}
function resetWheel(){
  wheelAngle = 0;
  drawWheel(0);
  document.getElementById("wheelResult").textContent = "أدر العجلة واكتشف نصيبك";
}
drawWheel(0);

/* ---------- لوحة الأسئلة (كاتيجوريز بزمن) ---------- */
const QUIZ_TIME = 20;
const QUIZ_CATEGORIES = [
  {
    name:"ثقافة عامة",
    color:"#ffd23f",
    questions:[
      { q:"من بطل كأس العالم 2022؟", options:["فرنسا","الأرجنتين","البرازيل","ألمانيا"], correct:1 },
      { q:"ما أقرب كوكب إلى الشمس؟", options:["عطارد","الزهرة","الأرض","المريخ"], correct:0 },
      { q:"كم ثانية في الساعة؟", options:["3600","360","6000","60"], correct:0 },
      { q:"ما العنصر الذي رمزه O؟", options:["أكسجين","ذهب","فضة","حديد"], correct:0 },
      { q:"ما أكبر محيط في العالم؟", options:["الهندي","الأطلسي","الهادئ","المتجمد"], correct:2 },
    ]
  },
  {
    name:"سوداني",
    color:"#ff2d78",
    questions:[
      { q:"ما عاصمة السودان؟", options:["أم درمان","الخرطوم","بورتسودان","كسلا"], correct:1 },
      { q:"أين يلتقي النيلان الأبيض والأزرق؟", options:["عطبرة","كوستي","الخرطوم","دنقلا"], correct:2 },
      { q:"ما أكبر ولاية سودانية مساحةً؟", options:["الخرطوم","الشمالية","كسلا","سنار"], correct:1 },
      { q:"ما الاسم القديم للسودان؟", options:["كوش","داجو","النوبة الشرقية","بلاد الزنج"], correct:0 },
      { q:"من أول رئيس وزراء للسودان بعد الاستقلال؟", options:["إسماعيل الأزهري","الطاهر رحمة","جعفر نميري","عبد الله خليل"], correct:0 },
    ]
  },
  {
    name:"نجوم وفن",
    color:"#00e5ff",
    questions:[
      { q:"لأي فريق يلعب محمد صلاح؟", options:["ريال مدريد","ليفربول","برشلونة","مانشستر"], correct:1 },
      { q:"من المطربة الملقبة بالسيدة؟", options:["شادية","أم كلثوم","وردة","فيروز"], correct:1 },
      { q:"ما الجائزة الشهيرة في عالم الأفلام؟", options:["الأوسكار","الجرامي","الإيمي","التوني"], correct:0 },
      { q:"من نجم أغنية Shape of You؟", options:["إد شيران","جاستن بيبر","برونو مارس","دريك"], correct:0 },
      { q:"من مقدم برنامج The Tonight Show؟", options:["جيمي كيميل","جيمي فالون","جيمس كوردن","كونان"], correct:1 },
    ]
  },
  {
    name:"ألغاز ومقالب",
    color:"#a855f7",
    questions:[
      { q:"ما الشيء الذي كلما حفرت فيه زاد؟", options:["الحفر","الكراسي","الأكواب","الصحون"], correct:0 },
      { q:"ما الشجرة التي لا ظل لها؟", options:["السدرة","الأرزة","النخلة","الجميزة"], correct:2 },
      { q:"ما الشيء الذي يمر أمامك كل يوم ولا تراه؟", options:["أنفك","رجلك","أذنك","كفك"], correct:0 },
      { q:"ما الشيء الذي له أسنان ولا يأكل؟", options:["الشوكة","المشط","السكينة","الملعقة"], correct:1 },
      { q:"ما الشيء الذي كلما كبر قصُر؟", options:["الحبل","الكوباية","الشمعة","القلم"], correct:2 },
    ]
  }
];

let boardState = [];
let boardTimer = null;
let quizTeam = "sakara";

function buildBoard(){
  boardState = QUIZ_CATEGORIES.map(c=>c.questions.map(()=>true));
  const board = document.getElementById("quizBoard");
  board.innerHTML = QUIZ_CATEGORIES.map((cat,ci)=>`
    <div class="quiz-col">
      <div class="quiz-cat-title" style="--cat-color:${cat.color}">${cat.name}</div>
      ${cat.questions.map((_,li)=>`
        <button class="quiz-cell" data-c="${ci}" data-l="${li}" onclick="pickCell(${ci},${li})">${(li+1)*10}</button>
      `).join("")}
    </div>
  `).join("");
}

function pickQuizTeam(t){
  quizTeam = t;
  document.querySelectorAll(".team-pick").forEach(b=>b.classList.remove("active"));
  document.querySelector(t==="sakara" ? ".pick-sakara" : ".pick-masateel").classList.add("active");
}

function pickCell(ci,li){
  if(!widgetAllowed("quiz")) return;
  if(boardTimer || !boardState[ci][li]) return;
  boardState[ci][li] = false;
  const cell = document.querySelector(`.quiz-cell[data-c="${ci}"][data-l="${li}"]`);
  if(cell) cell.classList.add("used");
  const item = QUIZ_CATEGORIES[ci].questions[li];
  const value = (li+1)*10;
  const teamName = quizTeam==="sakara" ? "السكارى" : "المساطيل";
  const onlineOn = window.onlineHost && window.onlineHost.connected;
  document.getElementById("quizQuestion").textContent = item.q;
  document.getElementById("quizAnswers").innerHTML = item.options.map((o,i)=>
    onlineOn
      ? `<button class="quiz-answer" data-i="${i}" disabled>${o}</button>`
      : `<button class="quiz-answer" data-i="${i}" onclick="answerBoard(${ci},${li},${i},${value})">${o}</button>`
  ).join("");
  document.getElementById("quizFeedback").textContent = onlineOn
    ? `${QUIZ_CATEGORIES[ci].name} — ${value} نقطة — سؤال لفريق ${teamName}... بانتظار إجابة الموبايل`
    : `${QUIZ_CATEGORIES[ci].name} — ${value} نقطة — فريق ${teamName} أمامك ${QUIZ_TIME} ثانية!`;
  startTimer(value);
  if(onlineOn) window.onlineHost.publishQuiz({action:"ask", ci, li, value, catName:QUIZ_CATEGORIES[ci].name, question:item.q, options:item.options, team:quizTeam, time:QUIZ_TIME});
}

function startTimer(value){
  let left = QUIZ_TIME;
  const bar = document.getElementById("quizTimerBar");
  const num = document.getElementById("quizTimerNum");
  document.querySelectorAll(".team-pick").forEach(b=>b.classList.add("lock"));
  bar.classList.remove("danger");
  num.classList.remove("danger");
  bar.style.transition = "none";
  bar.style.width = "100%";
  num.textContent = left;
  requestAnimationFrame(()=>{
    bar.style.transition = `width ${QUIZ_TIME}s linear`;
    bar.style.width = "0%";
  });
  boardTimer = setInterval(()=>{
    left--;
    num.textContent = left;
    if(left<=5){ bar.classList.add("danger"); num.classList.add("danger"); }
    if(left<=0){
      clearInterval(boardTimer); boardTimer = null;
      timeUp();
    }
  },1000);
}

function timeUp(){
  document.querySelectorAll(".quiz-answer").forEach(b=>b.onclick=null);
  document.querySelectorAll(".team-pick").forEach(b=>b.classList.remove("lock"));
  document.getElementById("quizTimerBar").classList.remove("danger");
  document.getElementById("quizTimerNum").classList.remove("danger");
  document.getElementById("quizFeedback").textContent = "انتهى الوقت! صفر نقطة.";
  if(window.onlineHost && window.onlineHost.connected) window.onlineHost.publishQuiz({action:"timeup"});
}

function answerBoard(ci,li,i,value){
  if(!boardTimer) return;
  clearInterval(boardTimer); boardTimer = null;
  document.querySelectorAll(".team-pick").forEach(b=>b.classList.remove("lock"));
  document.getElementById("quizTimerBar").classList.remove("danger");
  document.getElementById("quizTimerNum").classList.remove("danger");
  const item = QUIZ_CATEGORIES[ci].questions[li];
  const btns = document.querySelectorAll(".quiz-answer");
  btns.forEach(b=>b.onclick=null);
  if(i===item.correct){
    btns[i].classList.add("correct");
    addPoints(quizTeam, value);
    document.getElementById("quizFeedback").textContent = `إجابة صحيحة! +${value} لفريق ${quizTeam==="sakara" ? "السكارى" : "المساطيل"}.`;
  }else{
    btns[i].classList.add("wrong");
    btns[item.correct].classList.add("correct");
    addPoints(quizTeam, -Math.floor(value/2));
    document.getElementById("quizFeedback").textContent = `إجابة خاطئة! -${Math.floor(value/2)}. الصحيحة: ${item.options[item.correct]}`;
  }
}

function evalQuiz(ci,li,i,value){
  const item = QUIZ_CATEGORIES[ci].questions[li];
  const correct = i === item.correct;
  const gained = correct ? value : -Math.floor(value/2);
  return { correct, correctIndex:item.correct, gained };
}

function resetBoard(){
  if(boardTimer){ clearInterval(boardTimer); boardTimer = null; }
  document.querySelectorAll(".team-pick").forEach(b=>b.classList.remove("lock"));
  document.getElementById("quizTimerBar").classList.remove("danger");
  document.getElementById("quizTimerNum").classList.remove("danger");
  document.getElementById("quizTimerBar").style.transition = "none";
  document.getElementById("quizTimerBar").style.width = "100%";
  document.getElementById("quizTimerNum").textContent = QUIZ_TIME;
  document.getElementById("quizAnswers").innerHTML = "";
  document.getElementById("quizQuestion").textContent = "اختر فئة وقيمة ليظهر السؤال";
  document.getElementById("quizFeedback").textContent = "";
  buildBoard();
  if(window.onlineHost && window.onlineHost.connected) window.onlineHost.publishQuiz({action:"reset"});
}

/* ---------- قائمة الجوال ---------- */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click",()=>navLinks.classList.toggle("open"));
document.querySelectorAll("#navLinks a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

/* ---------- نظام سير الليلة ---------- */
const NIGHT_ROUNDS = [
  { name:"لوحة الأسئلة", widget:"quiz" },
  { name:"عجلة الحظ", widget:"wheel" },
  { name:"معركة السرعة", widget:"buzz" },
  { name:"الختام الكبير", widget:null },
];
let night = { on:false, round:0 };
let nightScore = { sakara:0, masateel:0 };

function renderNightRounds(){
  document.getElementById("nightRounds").innerHTML = NIGHT_ROUNDS.map((r,i)=>`
    <div class="night-chip" id="nightChip-${i}">
      <span class="chip-num">${i+1}</span>
      <span class="chip-label">${r.name}</span>
    </div>
  `).join("");
  refreshNightChips();
}
function refreshNightChips(){
  document.querySelectorAll(".night-chip").forEach((chip,i)=>{
    chip.classList.toggle("done", night.on && i < night.round);
    chip.classList.toggle("current", night.on && i === night.round);
  });
}
function currentWidget(){
  const w = night.on ? NIGHT_ROUNDS[night.round].widget : null;
  document.querySelectorAll(".round-widget").forEach(card=>{
    card.classList.toggle("widget-locked", night.on && card.getAttribute("data-widget") !== w);
  });
  return w;
}
function widgetAllowed(w){
  return !night.on || (NIGHT_ROUNDS[night.round] && NIGHT_ROUNDS[night.round].widget === w);
}
function updateNightTotal(){
  document.getElementById("nightSakara").textContent = nightScore.sakara;
  document.getElementById("nightMasateel").textContent = nightScore.masateel;
}
function nextRound(){
  if(boardTimer){ clearInterval(boardTimer); boardTimer = null; }
  if(!night.on){
    night.on = true;
    night.round = 0;
    nightScore = { sakara:0, masateel:0 };
    document.getElementById("nightNextBtn").textContent = "الجولة الجاية ←";
    document.getElementById("nightNextBtn").style.display = "inline-block";
  }else{
    night.round++;
  }
  if(night.round >= NIGHT_ROUNDS.length){
    document.getElementById("nightNextBtn").style.display = "none";
    document.getElementById("nightStatus").textContent = "";
    finishNight();
    return;
  }
  refreshNightChips();
  currentWidget();
  updateNightTotal();
  document.getElementById("nightStatus").textContent = `الجولة ${night.round+1}: ${NIGHT_ROUNDS[night.round].name}`;
  if(window.onlineHost && window.onlineHost.connected) window.onlineHost.publishNight();
}
function resetNight(){
  if(boardTimer){ clearInterval(boardTimer); boardTimer = null; }
  if(buzzState.timer){ clearInterval(buzzState.timer); buzzState.timer = null; }
  night = { on:false, round:0 };
  nightScore = { sakara:0, masateel:0 };
  document.getElementById("nightNextBtn").textContent = "ابدأ الجولة الأولى";
  document.getElementById("nightNextBtn").style.display = "inline-block";
  document.getElementById("nightStatus").textContent = "استعدوا... ابدأوا الليلة!";
  refreshNightChips();
  currentWidget();
  updateNightTotal();
  resetBoard();
  resetWheel();
  resetBuzz();
  if(window.onlineHost && window.onlineHost.connected) window.onlineHost.publishNight();
}
function finishNight(){
  const a = nightScore.sakara, b = nightScore.masateel;
  const winner = document.getElementById("finalWinner");
  const scoreEl = document.getElementById("finalScore");
  if(a === b){
    winner.textContent = "تعادل مثير!";
    scoreEl.textContent = `السكارى ${a} — المساطيل ${b}... تبقى الكأس محفوظة`;
  }else{
    const name = a > b ? "فريق السكارى" : "فريق المساطيل";
    winner.textContent = "بطل الليلة: " + name;
    scoreEl.textContent = `${name} بـ ${Math.max(a,b)} نقطة (السكارى ${a} — المساطيل ${b})`;
  }
  document.getElementById("nightFinal").classList.add("open");
  spawnConfetti();
  if(window.onlineHost && window.onlineHost.connected) window.onlineHost.publishFinal({winner:winner.textContent, scoreText:scoreEl.textContent});
}
function closeFinal(){
  document.getElementById("nightFinal").classList.remove("open");
}
function spawnConfetti(){
  const colors = ["#ff2d78","#ffd23f","#00e5ff","#a855f7","#39d98a"];
  for(let i=0;i<90;i++){
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random()*100 + "vw";
    c.style.width = 6 + Math.random()*8 + "px";
    c.style.height = c.style.width;
    c.style.background = colors[Math.floor(Math.random()*colors.length)];
    c.style.animationDuration = (2.5 + Math.random()*2.5) + "s";
    c.style.animationDelay = (Math.random()*1.5) + "s";
    document.body.appendChild(c);
    setTimeout(()=>c.remove(), 7000);
  }
}

/* ---------- المعركة السريعة ---------- */
const BUZZ_TIME = 10;
const BUZZ_QUESTIONS = [
  { q:"عملة السودان؟", options:["الجنيه السوداني","الدولار","الدينار","الريال"], correct:0 },
  { q:"أطول نهر في العالم؟", options:["النيل","الأمازون","المسيسبي","الفرات"], correct:0 },
  { q:"ملك الغابة؟", options:["الأسد","النمر","الفيل","الفهد"], correct:0 },
  { q:"أكبر كوكب في المجموعة الشمسية؟", options:["المشتري","زحل","الأرض","المريخ"], correct:0 },
  { q:"أي شهر فيه 28 يوم؟", options:["كل الشهور","فبراير بس","يناير بس","مارس بس"], correct:0 },
  { q:"عملة اليابان؟", options:["الين","اليوان","الدرهم","الوون"], correct:0 },
  { q:"أول دولة وطأت القمر؟", options:["أمريكا","روسيا","الصين","فرنسا"], correct:0 },
  { q:"في المثلث كام رأس؟", options:["2","3","4","5"], correct:1 },
  { q:"أكبر صحراء في العالم؟", options:["الصحراء الكبرى","النفود","الربع الخالي","صحراء جوبي"], correct:0 },
  { q:"من المطربة الملقبة بالسيدة؟", options:["أم كلثوم","شادية","فيروز","وردة"], correct:0 },
];
let buzzState = { active:false, turn:null, timer:null, left:BUZZ_TIME, index:0, used:[] };

function startBuzz(){
  if(buzzState.active || !widgetAllowed("buzz")) return;
  let idx;
  do{ idx = Math.floor(Math.random()*BUZZ_QUESTIONS.length); }while(buzzState.used.length < BUZZ_QUESTIONS.length && buzzState.used.includes(idx));
  buzzState = { active:true, turn:null, timer:null, left:BUZZ_TIME, index:idx, used:buzzState.used.concat(idx) };
  const item = BUZZ_QUESTIONS[idx];
  document.getElementById("buzzQuestion").textContent = item.q;
  document.getElementById("buzzAnswers").innerHTML = item.options.map((o,i)=>
    `<button class="buzz-opt" data-i="${i}" onclick="buzzAnswer(${i})" disabled>${o}</button>`
  ).join("");
  document.getElementById("buzzFeedback").textContent = "من يضغط الزر أولاً يجيب!";
  document.getElementById("buzzTimer").textContent = BUZZ_TIME;
  document.getElementById("buzzTimer").classList.remove("danger");
  document.querySelectorAll(".buzz-buzzer").forEach(b=>b.classList.remove("hit"));
  if(window.onlineHost && window.onlineHost.connected){
    document.getElementById("buzzFeedback").textContent = "بانتظار ضغطة البازر من اللاعبين...";
    window.onlineHost.publishBuzz({action:"ask", question:item.q, options:item.options, correct:item.correct, time:BUZZ_TIME});
  }
}
function buzz(team){
  if(!buzzState.active || buzzState.turn || !widgetAllowed("buzz")) return;
  buzzState.turn = team;
  buzzState.left = BUZZ_TIME;
  document.getElementById("buzzTimer").textContent = BUZZ_TIME;
  document.querySelectorAll(".buzz-opt").forEach(b=>b.disabled = false);
  document.querySelectorAll(".buzz-buzzer").forEach(b=>b.classList.remove("hit"));
  document.querySelector(team==="sakara" ? ".buzz-sakara" : ".buzz-masateel").classList.add("hit");
  document.getElementById("buzzFeedback").textContent = (team==="sakara" ? "فريق السكارى" : "فريق المساطيل") + " ضغط الزر! اختر الإجابة خلال " + BUZZ_TIME + " ثوانٍ.";
  buzzState.timer = setInterval(()=>{
    buzzState.left--;
    const el = document.getElementById("buzzTimer");
    el.textContent = buzzState.left;
    el.classList.toggle("danger", buzzState.left <= 3);
    if(buzzState.left <= 0){
      clearInterval(buzzState.timer); buzzState.timer = null;
      buzzTimeout();
    }
  },1000);
}
function buzzTimeout(){
  document.querySelectorAll(".buzz-opt").forEach(b=>b.disabled = true);
  document.querySelectorAll(".buzz-buzzer").forEach(b=>b.classList.remove("hit"));
  document.getElementById("buzzFeedback").textContent = "انتهى الوقت! صفر نقطة.";
  if(window.onlineHost && window.onlineHost.connected) window.onlineHost.publishBuzz({action:"timeout"});
  buzzState.active = false;
}
function buzzAnswer(i){
  if(!buzzState.timer) return;
  clearInterval(buzzState.timer); buzzState.timer = null;
  const item = BUZZ_QUESTIONS[buzzState.index];
  const btns = document.querySelectorAll(".buzz-opt");
  btns.forEach(b=>b.disabled = true);
  document.querySelectorAll(".buzz-buzzer").forEach(b=>b.classList.remove("hit"));
  document.getElementById("buzzTimer").textContent = BUZZ_TIME;
  document.getElementById("buzzTimer").classList.remove("danger");
  if(i === item.correct){
    btns[i].classList.add("correct");
    addPoints(buzzState.turn, 20);
    document.getElementById("buzzFeedback").textContent = "إجابة صحيحة! +20 نقطة لفريق " + (buzzState.turn==="sakara" ? "السكارى" : "المساطيل");
  }else{
    btns[i].classList.add("wrong");
    btns[item.correct].classList.add("correct");
    addPoints(buzzState.turn, -10);
    document.getElementById("buzzFeedback").textContent = "إجابة خاطئة! -10. الصحيحة: " + item.options[item.correct];
  }
  buzzState.active = false;
}
function resetBuzz(){
  if(buzzState.timer){ clearInterval(buzzState.timer); buzzState.timer = null; }
  buzzState = { active:false, turn:null, timer:null, left:BUZZ_TIME, index:0, used:[] };
  document.getElementById("buzzQuestion").textContent = "اضغط «ابدأ المعركة»";
  document.getElementById("buzzAnswers").innerHTML = "";
  document.getElementById("buzzFeedback").textContent = "";
  document.getElementById("buzzTimer").textContent = BUZZ_TIME;
  document.getElementById("buzzTimer").classList.remove("danger");
  document.querySelectorAll(".buzz-buzzer").forEach(b=>b.classList.remove("hit"));
}

/* تشغيل */
renderGames();
buildBoard();
renderNightRounds();
currentWidget();
pickWheelTeam("sakara");

/* تصدير الحالة للطبقة الأونلاين */
window.getNight = ()=>({on:night.on, round:night.round});
window.getRoundName = (i)=> i>=0 && i<NIGHT_ROUNDS.length ? NIGHT_ROUNDS[i].name : "الختام الكبير";
window.quizBusy = ()=> !!boardTimer;
window.clearQuizTimer = ()=>{ if(boardTimer){ clearInterval(boardTimer); boardTimer = null; } };
window.evalQuiz = evalQuiz;
window.quizItem = (ci,li)=>({ q:QUIZ_CATEGORIES[ci].questions[li].q, options:QUIZ_CATEGORIES[ci].questions[li].options });
window.QUIZ_TIME = QUIZ_TIME;
window.getBuzzState = ()=>({active:buzzState.active, turn:buzzState.turn, index:buzzState.index});
window.setBuzzTurn = (t)=>{ buzzState.turn = t; };
window.clearBuzzTimer = ()=>{ if(buzzState.timer){ clearInterval(buzzState.timer); buzzState.timer = null; } };
window.setBuzzInactive = ()=>{ buzzState.active = false; };
window.buzzData = ()=>{ const it = BUZZ_QUESTIONS[buzzState.index]; return { correctIndex:it.correct, options:it.options }; };
window.buzzQuestionText = ()=> BUZZ_QUESTIONS[buzzState.index].q;
window.BUZZ_TIME = BUZZ_TIME;

/* حفظ حالة اللعبة (للمنسق) لتصمد عبر الريفرش */
window.saveHostState = function(){
  try{
    localStorage.setItem("rokando_host_state", JSON.stringify({
      score, night, nightScore, boardState,
      wheelResult:document.getElementById("wheelResult").textContent
    }));
  }catch(e){}
};
window.restoreHostState = function(){
  try{
    const s = JSON.parse(localStorage.getItem("rokando_host_state") || "null");
    if(!s) return false;
    score = s.score || { sakara:0, masateel:0 };
    night = s.night || { on:false, round:0 };
    nightScore = s.nightScore || { sakara:0, masateel:0 };
    boardState = s.boardState || [];
    document.getElementById("scoreSakara").textContent = score.sakara;
    document.getElementById("scoreMasateel").textContent = score.masateel;
    if(s.wheelResult) document.getElementById("wheelResult").textContent = s.wheelResult;
    document.getElementById("nightNextBtn").textContent = night.on ? "الجولة الجاية ←" : "ابدأ الجولة الأولى";
    document.getElementById("nightNextBtn").style.display = night.on && night.round >= NIGHT_ROUNDS.length ? "none" : "inline-block";
    refreshNightChips();
    currentWidget();
    updateNightTotal();
    if(night.on) document.getElementById("nightStatus").textContent = `الجولة ${night.round+1}: ${NIGHT_ROUNDS[night.round].name}`;
    document.querySelectorAll(".quiz-cell").forEach(cell=>{
      const ci = +cell.dataset.c, li = +cell.dataset.l;
      if(boardState[ci] && boardState[ci][li] === false) cell.classList.add("used");
    });
    return true;
  }catch(e){ return false; }
};
window.clearHostState = function(){
  try{ localStorage.removeItem("rokando_host_state"); }catch(e){}
};
