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
  /* المؤشر فوق (top = -90deg = 270deg في زوايا الكانفس) */
  const n = WHEEL_SEGMENTS.length, seg = 360/n;
  const norm = (((270 - deg) % 360) + 360) % 360;
  return Math.floor(norm / seg);
}
function resetWheel(){
  wheelAngle = 0;
  drawWheel(0);
  document.getElementById("wheelResult").textContent = "أدر العجلة واكتشف نصيبك";
}
drawWheel(0);

/* ---------- لوحة الأسئلة (عشوائية وغير محدودة) ----------
   كل فئة فيها 5 مستويات (10 → 50 نقطة من الأسهل للأصعب).
   كل مستوى يتضمن بنكاً من الأسئلة يُسحب منها عشوائياً،
   فلا تنتهي الأسئلة وتتكرر الخلايا كلما شئت. */
const QUIZ_TIME = 20;
const QUIZ_CATEGORIES = [
  {
    name:"ثقافة عامة",
    color:"#ffd23f",
    pools:[
      [
        { q:"ما عاصمة فرنسا؟", options:["باريس","لندن","روما","مدريد"], correct:0 },
        { q:"كم قارة في العالم؟", options:["7","5","6","8"], correct:0 },
        { q:"من اخترع المصباح الكهربائي العملي؟", options:["إديسون","نيوتن","غراهام بيل","أينشتاين"], correct:0 },
      ],
      [
        { q:"ما أكبر دولة عربية مساحةً؟", options:["الجزائر","السعودية","ليبيا","مصر"], correct:0 },
        { q:"من مؤلف رواية «الأمير الصغير»؟", options:["سانت إكزوبيري","فيكتور هوغو","جبران خليل جبران","نجيب محفوظ"], correct:0 },
        { q:"ما عاصمة اليابان؟", options:["طوكيو","بكين","سيول","بانكوك"], correct:0 },
      ],
      [
        { q:"ما النهر الذي يمر عبر بغداد؟", options:["دجلة","الفرات","النيل","العاصي"], correct:0 },
        { q:"من أول من وصل القطب الجنوبي؟", options:["أموندسن","سكوت","كوك","ماجلان"], correct:0 },
        { q:"ما أطول الجدران الدفاعية في العالم؟", options:["سور الصين العظيم","سور برلين","جدار هادريان","سور بابل"], correct:0 },
      ],
      [
        { q:"ما الدولة التي عاصمتها كيتو؟", options:["الإكوادور","البرازيل","كينيا","إندونيسيا"], correct:0 },
        { q:"في أي مدينة يقع مسجد قرطبة الكبير؟", options:["قرطبة","غرناطة","إشبيلية","طليطلة"], correct:0 },
        { q:"ما الدولة صاحبة أطول ساحل في العالم؟", options:["كندا","أستراليا","اليابان","إندونيسيا"], correct:0 },
      ],
      [
        { q:"من مؤسس الدولة الأيوبية؟", options:["صلاح الدين الأيوبي","نور الدين زنكي","محمود الغزنوي","طارق بن زياد"], correct:0 },
        { q:"ما المدينة الملقبة بـ«مدينة الضباب»؟", options:["لندن","سان فرانسيسكو","سيدني","دبي"], correct:0 },
        { q:"من أشهر القادة الفينيقيين؟", options:["حنبعل","الإسكندر","نابليون","قيصر"], correct:0 },
      ],
    ]
  },
  {
    name:"علمية",
    color:"#00e5ff",
    pools:[
      [
        { q:"كم عدد أجنحة النحلة؟", options:["4","2","6","3"], correct:0 },
        { q:"ما الغاز الذي نتنفسه للبقاء؟", options:["الأكسجين","ثاني أكسيد الكربون","النيتروجين","الهيدروجين"], correct:0 },
        { q:"كم كوكباً في المجموعة الشمسية؟", options:["8","9","7","10"], correct:0 },
      ],
      [
        { q:"ما العضو المسؤول عن ضخ الدم؟", options:["القلب","الرئة","الكبد","الكلية"], correct:0 },
        { q:"ما أصغر عظام جسم الإنسان؟", options:["عظم الركاب في الأذن","عظم الساق","عظم الرسغ","الترقوة"], correct:0 },
        { q:"ما العنصر الكيميائي الذي رمزه Fe؟", options:["الحديد","الفضة","الذهب","الفلور"], correct:0 },
      ],
      [
        { q:"كم عظمة في جسم الإنسان البالغ؟", options:["206","300","150","250"], correct:0 },
        { q:"ما سرعة الضوء تقريباً؟", options:["300 ألف كم/ث","100 ألف كم/ث","3 ملايين كم/ث","30 ألف كم/ث"], correct:0 },
        { q:"ما الكوكب الأكثر حرارة في مجموعتنا؟", options:["الزهرة","عطارد","المريخ","المشتري"], correct:0 },
      ],
      [
        { q:"ما الحمض الموجود في عصير الليمون؟", options:["حمض الستريك","حمض الكبريتيك","حمض الهيدروكلوريك","حمض الأسيتيك"], correct:0 },
        { q:"ماذا تسمى دراسة الفيروسات؟", options:["علم الفيروسات","علم الجراثيم","علم الطفيليات","علم المناعة"], correct:0 },
        { q:"ما أقرب نجم إلى الأرض بعد الشمس؟", options:["بروكسيما سنتوري","سيريوس","النسر الواقع","سهيل"], correct:0 },
      ],
      [
        { q:"ما الجسيمات التي تنقل الكهرباء في الأسلاك؟", options:["الإلكترونات","البروتونات","النيوترونات","الفوتونات"], correct:0 },
        { q:"ما أكبر حوت في العالم؟", options:["الحوت الأزرق","حوت العنبر","الأوركا","الحوت الأحدب"], correct:0 },
        { q:"ما الهرمون المسؤول عن سكر الدم؟", options:["الأنسولين","الأدرينالين","الثيروكسين","الميلاتونين"], correct:0 },
      ],
    ]
  },
  {
    name:"عامة",
    color:"#ff2d78",
    pools:[
      [
        { q:"كم ضلعاً في المثلث؟", options:["3","4","5","2"], correct:0 },
        { q:"ما اسم الشهر الرابع في السنة؟", options:["أبريل","مارس","يونيو","مايو"], correct:0 },
        { q:"كم ساعة في اليوم الواحد؟", options:["24","12","48","30"], correct:0 },
      ],
      [
        { q:"أي مدينة استضافت أولمبياد 2008؟", options:["بكين","لندن","ريو","سيدني"], correct:0 },
        { q:"كم دقيقة في مباراة كرة القدم العادية؟", options:["90","60","120","45"], correct:0 },
        { q:"ما العملة الرسمية في مصر؟", options:["الجنيه المصري","الليرة","الدينار","الدرهم"], correct:0 },
      ],
      [
        { q:"كم عدد ألوان قوس قزح؟", options:["7","6","8","5"], correct:0 },
        { q:"كم لاعباً داخل الملعب في كرة القدم؟", options:["11","10","12","9"], correct:0 },
        { q:"ما أكبر جزيرة في العالم؟", options:["غرينلاند","مدغشقر","بورنيو","أستراليا"], correct:0 },
      ],
      [
        { q:"ما الدولة صاحبة أكبر عدد سكان في العالم؟", options:["الهند","الصين","أمريكا","إندونيسيا"], correct:0 },
        { q:"كم عدد بطاقات لعب الورق الكامل؟", options:["52","48","54","60"], correct:0 },
        { q:"في أي سنة هبط الإنسان على القمر أول مرة؟", options:["1969","1972","1965","1980"], correct:0 },
      ],
      [
        { q:"كم عدد أحرف الأبجدية العربية؟", options:["28","29","27","30"], correct:0 },
        { q:"ما أقدم جامعة في العالم؟", options:["جامعة القرويين","الأزهر","بولونيا","أكسفورد"], correct:0 },
        { q:"ما السورة الملقبة بقلب القرآن؟", options:["يس","البقرة","الفاتحة","الرحمن"], correct:0 },
      ],
    ]
  },
  {
    name:"مسلسلات",
    color:"#a855f7",
    pools:[
      [
        { q:"كم شخصية رئيسية في مسلسل Friends؟", options:["6","4","5","7"], correct:0 },
        { q:"من نجم مسلسل Breaking Bad؟", options:["بريان كرانستون","ليوناردو دي كابريو","توم كروز","مورغان فريمان"], correct:0 },
        { q:"في مسلسل Stranger Things بمن تتمحور القصة؟", options:["أطفال تختفي الأشياء حولهم","محقق شرطة","رواد فضاء","مطعم عائلي"], correct:0 },
      ],
      [
        { q:"ما اسم المقهى في مسلسل Friends؟", options:["Central Perk","The Coffee House","Central Café","Bean House"], correct:0 },
        { q:"من تُلقب بأم التنانين في Game of Thrones؟", options:["دنيريس تارغارين","سيرسي لانيستر","آريا ستارك","سانسا ستارك"], correct:0 },
        { q:"من الشخصية التي يجسدها بنديكت كامبرباتش؟", options:["شيرلوك هولمز","البروفيسور موريارتي","دكتور واتسون","مايكروفت"], correct:0 },
      ],
      [
        { q:"من جسد الشهيد أحمد المنسي في مسلسل «الاختيار»؟", options:["أمير كرارة","محمد إمام","أحمد عز","كريم عبد العزيز"], correct:0 },
        { q:"ما جنسية مسلسل «الهيبة»؟", options:["لبنانية","مصرية","سورية","كويتية"], correct:0 },
        { q:"ما الجائزة التي يتنافس عليها المتسابقون في Squid Game؟", options:["45.6 مليار وون","مليون وون","100 مليون وون","10 آلاف وون"], correct:0 },
      ],
      [
        { q:"من مؤلف رواية لعبة العروش؟", options:["جورج ر.ر. مارتن","جي كي رولينغ","تولكين","ستيفن كينغ"], correct:0 },
        { q:"ما مسلسل نتفليكس عن الشطرنج؟", options:["غامبيت الملكة","الوزير","حصان الملك","مات الشاه"], correct:0 },
        { q:"من شريك والتر وايت في Breaking Bad؟", options:["جيسي بينكمان","سول غودمان","هانك شريدر","غوستافو فرينج"], correct:0 },
      ],
      [
        { q:"ما اسم المركبة الزمنية في Doctor Who؟", options:["التارديس","الميلينيوم فالكون","النوسترومو","سيرينيتي"], correct:0 },
        { q:"من الممثلة التي لعبت دور راشيل في Friends؟", options:["جينيفر أنيستون","كورتني كوكس","ليزا كودرو","مات لوبلان"], correct:0 },
        { q:"في أي مدينة تدور أحداث مسلسل «أمير الظل»؟", options:["دمشق","بيروت","القاهرة","عمّان"], correct:0 },
      ],
    ]
  },
  {
    name:"أفلام",
    color:"#ff9f1c",
    pools:[
      [
        { q:"من بطل فيلم Toy Story؟", options:["وودي","مايكي","دونالد","باباي"], correct:0 },
        { q:"في أي سنة صدر فيلم Titanic؟", options:["1997","1990","2001","1985"], correct:0 },
        { q:"من جسد دور جاك في Titanic؟", options:["ليوناردو دي كابريو","براد بيت","توم هانكس","جوني ديب"], correct:0 },
      ],
      [
        { q:"من نجم سلسلة Pirates of the Caribbean؟", options:["جوني ديب","كيانو ريفز","ويل سميث","روبرت داوني جونيور"], correct:0 },
        { q:"من الشرير المهرج في أفلام باتمان؟", options:["الجوكر","بين","البطريق","ريدلر"], correct:0 },
        { q:"ما فيلم الكرتون الشهير عن ملك الأسود؟", options:["الأسد الملك","الأسد والحارس","جمبو","الغابة المسحورة"], correct:0 },
      ],
      [
        { q:"من مخرج سلسلة Star Wars؟", options:["جورج لوكاس","ستيفن سبيلبيرغ","جيمس كاميرون","ريدلي سكوت"], correct:0 },
        { q:"ما اسم عائلة المافيا في The Godfather؟", options:["كورليوني","سوبرانو","كابوني","ريتشي"], correct:0 },
        { q:"من بطلات فيلم Frozen؟", options:["إلسا وآنا","مولان","ميريدا","بوكاهونتاس"], correct:0 },
      ],
      [
        { q:"من حصل على أوسكار عن فيلم Joker؟", options:["واكين فينيكس","روبرت داوني جونيور","جاريد ليتو","توم هاردي"], correct:0 },
        { q:"ما أول فيلم رسوم متحركة طويل من ديزني؟", options:["سنو وايت","بينوكيو","بامبي","الأقزام"], correct:0 },
        { q:"في أي مدينة تقع هوليوود؟", options:["لوس أنجلوس","نيويورك","لاس فيغاس","سان فرانسيسكو"], correct:0 },
      ],
      [
        { q:"من جسد هانيبال ليكتر في Silence of the Lambs؟", options:["أنتوني هوبكنز","آل باتشينو","جاك نيكلسون","داستن هوفمان"], correct:0 },
        { q:"من مخرج فيلم Pulp Fiction؟", options:["تارانتينو","مارتن سكورسيزي","فرانسيس فورد كوبولا","ديفيد فينشر"], correct:0 },
        { q:"في أي عام صدر أول فيلم ناطق؟", options:["1927","1915","1935","1945"], correct:0 },
      ],
    ]
  },
  {
    name:"موسيقى",
    color:"#39d98a",
    pools:[
      [
        { q:"كم عدد أوتار الكمان؟", options:["4","6","7","5"], correct:0 },
        { q:"من يلقب بملك البوب؟", options:["مايكل جاكسون","إلفيس بريسلي","فريدي ميركوري","بيونسيه"], correct:0 },
        { q:"ما الآلة التي تعزف بالمفاتيح؟", options:["البيانو","الكمان","الناي","الجيتار"], correct:0 },
      ],
      [
        { q:"من يلقب بفارس الأغنية الخليجية؟", options:["محمد عبده","طلال مداح","عوض الدوخي","عبادي الجوهر"], correct:0 },
        { q:"ما الفرقة البريطانية التي غنت Let It Be؟", options:["البيتلز","الرولينغ ستونز","الملكة","بينك فلويد"], correct:0 },
        { q:"من المطرب المصري الملقب بالرومانسي؟", options:["عمرو دياب","محمد حماقي","رامي صبري","حكيم"], correct:0 },
      ],
      [
        { q:"كم عدد النوتات الموسيقية الأساسية؟", options:["7","8","5","12"], correct:0 },
        { q:"من غنى «الليلة يا سمراء»؟", options:["وديع الصافي","فيروز","صباح فخري","نجاح سلام"], correct:0 },
        { q:"ما الدولة موطن موسيقى الفلامنكو؟", options:["إسبانيا","إيطاليا","البرتغال","المكسيك"], correct:0 },
      ],
      [
        { q:"من كتب أغنية Bohemian Rhapsody؟", options:["فريدي ميركوري","جون لينون","بول مكارتني","ديفيد بووي"], correct:0 },
        { q:"ما الفرقة الكورية التي غنت Dynamite؟", options:["بي تي إس","بلاك بينك","إكسو","سوبر جونيور"], correct:0 },
        { q:"من يلقب بموسيقار الأجيال؟", options:["محمد عبد الوهاب","رياض السنباطي","بليغ حمدي","عمر خورشيد"], correct:0 },
      ],
      [
        { q:"من مؤلف الفصول الأربعة (Four Seasons)؟", options:["فيفالدي","موتسارت","باخ","بيتهوفن"], correct:0 },
        { q:"من تلقب بملكة السول؟", options:["أريثا فرانكلين","ويتني هيوستن","بيونسيه","مارايا كاري"], correct:0 },
        { q:"ما الآلة ذات 88 مفتاحاً؟", options:["البيانو","الأرغن","الأكورديون","السنتور"], correct:0 },
      ],
    ]
  }
];

let cellLast = [];
let boardTimer = null;
let quizTeam = "sakara";
let currentQuiz = null;   /* السؤال الحالي (عشوائي) — يستخدمه المنسق والموبايل */
let quizDeadline = null;  /* اللحظة المطلقة (ms) التي ينتهي عندها مؤقت السؤال — تشترك بها كل الأجهزة */

/* سحب عشوائي لسؤال من بنك الفئة والمستوى مع تفادي تكرار نفس السؤال مرتين متتاليتين */
function pickQuizItem(ci, li){
  const pool = QUIZ_CATEGORIES[ci].pools[li] || [];
  if(!pool.length) return null;
  if(!cellLast[ci]) cellLast[ci] = [];
  let idx = Math.floor(Math.random()*pool.length);
  if(pool.length > 1 && idx === cellLast[ci][li]) idx = (idx + 1) % pool.length;
  cellLast[ci][li] = idx;
  const q = pool[idx];
  return { q:q.q, options:q.options, correct:q.correct, qid:ci+"-"+li+"-"+idx };
}

function buildBoard(){
  const board = document.getElementById("quizBoard");
  board.innerHTML = QUIZ_CATEGORIES.map((cat,ci)=>`
    <div class="quiz-col">
      <div class="quiz-cat-title" style="--cat-color:${cat.color}">${cat.name}</div>
      ${cat.pools.map((_,li)=>`
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
  if(boardTimer) return;
  const item = pickQuizItem(ci, li);
  if(!item) return;
  const value = (li+1)*10;
  currentQuiz = { q:item.q, options:item.options, correct:item.correct, qid:item.qid, value, open:true, catName:QUIZ_CATEGORIES[ci].name };
  renderQuiz(currentQuiz);
}

function renderQuiz(item, deadline){
  const value = item.value;
  item.team = item.team || quizTeam;
  const teamName = quizTeam==="sakara" ? "السكارى" : "المساطيل";
  const onlineOn = window.onlineHost && window.onlineHost.connected;
  document.getElementById("quizQuestion").textContent = item.q;
  document.getElementById("quizAnswers").innerHTML = item.options.map((o,i)=>
    onlineOn
      ? `<button class="quiz-answer" data-i="${i}" disabled>${o}</button>`
      : `<button class="quiz-answer" data-i="${i}" onclick="answerBoard(${i},${value})">${o}</button>`
  ).join("");
  const catLabel = item.catName || "";
  document.getElementById("quizFeedback").textContent = onlineOn
    ? `${catLabel} — ${value} نقطة — سؤال لفريق ${teamName}... بانتظار إجابة الموبايل`
    : `${catLabel} — ${value} نقطة — فريق ${teamName} أمامك ${QUIZ_TIME} ثانية!`;
  if(!deadline) deadline = Date.now() + QUIZ_TIME*1000;
  quizDeadline = deadline;
  startTimer(value, deadline);
  if(onlineOn) window.onlineHost.publishQuiz({action:"ask", qid:item.qid, value, catName:catLabel, question:item.q, options:item.options, correct:item.correct, team:quizTeam, time:QUIZ_TIME, deadline});
}

function startTimer(value, deadline){
  const bar = document.getElementById("quizTimerBar");
  const num = document.getElementById("quizTimerNum");
  document.querySelectorAll(".team-pick").forEach(b=>b.classList.add("lock"));
  bar.style.transition = "none";
  num.classList.remove("danger");
  const update = ()=>{
    const left = Math.max(0, Math.ceil((deadline - Date.now())/1000));
    num.textContent = left;
    bar.style.width = (left/QUIZ_TIME*100) + "%";
    bar.classList.toggle("danger", left<=5);
    return left;
  };
  update();
  if(deadline - Date.now() <= 0){ timeUp(); return; }
  boardTimer = setInterval(()=>{
    if(update() <= 0){
      clearInterval(boardTimer); boardTimer = null;
      timeUp();
    }
  },200);
}

function timeUp(){
  document.querySelectorAll(".quiz-answer").forEach(b=>b.onclick=null);
  document.querySelectorAll(".team-pick").forEach(b=>b.classList.remove("lock"));
  document.getElementById("quizTimerBar").classList.remove("danger");
  document.getElementById("quizTimerNum").classList.remove("danger");
  document.getElementById("quizFeedback").textContent = "انتهى الوقت! صفر نقطة.";
  quizDeadline = null;
  if(window.onlineHost && window.onlineHost.connected) window.onlineHost.publishQuiz({action:"timeup"});
}

function answerBoard(i,value){
  if(!boardTimer) return;
  clearInterval(boardTimer); boardTimer = null;
  quizDeadline = null;
  document.querySelectorAll(".team-pick").forEach(b=>b.classList.remove("lock"));
  document.getElementById("quizTimerBar").classList.remove("danger");
  document.getElementById("quizTimerNum").classList.remove("danger");
  const item = currentQuiz;
  const btns = document.querySelectorAll(".quiz-answer");
  btns.forEach(b=>b.onclick=null);
  if(i===item.correct){
    btns[i].classList.add("correct");
    addPoints(quizTeam, value);
    playCorrectSound();
    document.getElementById("quizFeedback").textContent = `إجابة صحيحة! +${value} لفريق ${quizTeam==="sakara" ? "السكارى" : "المساطيل"}.`;
  }else{
    btns[i].classList.add("wrong");
    btns[item.correct].classList.add("correct");
    addPoints(quizTeam, -Math.floor(value/2));
    document.getElementById("quizFeedback").textContent = `إجابة خاطئة! -${Math.floor(value/2)}. الصحيحة: ${item.options[item.correct]}`;
  }
}

function evalQuiz(ci,li,i,value){
  const item = currentQuiz;
  const correct = i === item.correct;
  const gained = correct ? value : -Math.floor(value/2);
  return { correct, correctIndex:item.correct, gained };
}

function resetBoard(){
  if(boardTimer){ clearInterval(boardTimer); boardTimer = null; }
  quizDeadline = null;
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
  { name:"تحديات فالون", widget:"games" },
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
  const idx = Math.floor(Math.random()*BUZZ_QUESTIONS.length);
  buzzState = { active:true, turn:null, timer:null, left:BUZZ_TIME, index:idx, used:[] };
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
    playCorrectSound();
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

/* ---------- تحديات فالون (The Tonight Show) ---------- */
const GAMES_CHALLENGES = [
  { title:"صندوق الكذب", how:"ضع غرضاً داخل صندوق مغلق. يصفه الفريق بأي وصف شاء — صحيح أو مضحك — والفريق الآخر يخمّن: حقيقة أم كذب؟ ثم يُفتح الصندوق." },
  { title:"هاشتاق الليلة", how:"يصرخ المنسق بهاشتاق غريب (مثل #الليمون_المتأخر). لكل فريق 30 ثانية لكتابة «تغريدة» مضحكة، والفريق المنافس يحكم على الأطرف." },
  { title:"الكلمات المهربة", how:"اكتب كلمات غريبة (بطيخ، موتوسيكل، جوز هند). كل لاعب يحاول إدخالها في حديثه العادي دون أن يلحظها الفريق الآخر." },
  { title:"اقرأ شفتيّ", how:"أحد أعضاء الفريق يضع سماعات بصوت عالٍ جداً. يقرأ المنسق عبارة دون صوت، ويحاول فريقه تخمينها من حركة الشفاه." },
  { title:"التخمين السريع", how:"كلمة تُرسم أو تُمثَّل في 30 ثانية، والفريق يخمّن أكبر عدد ممكن من الكلمات. الفريق الأسرع يفوز بالجولة." },
  { title:"التجميد", how:"موسيقى صاخبة... وفجأة تتوقف! من يتحرك أخيراً يخسر نقطة، ومن يثبت كالتمثال يفوز." },
];
function renderGamesChallenges(){
  const list = document.getElementById("gamesList");
  if(!list) return;
  list.innerHTML = GAMES_CHALLENGES.map((g,i)=>`
    <button class="games-chip" onclick="showGamesDetail(${i})">
      <span class="games-chip-num">${i+1}</span>
      <span>${g.title}</span>
    </button>
  `).join("");
}
function showGamesDetail(i){
  const g = GAMES_CHALLENGES[i];
  if(!g) return;
  const t = document.getElementById("gamesDetailTitle");
  const h = document.getElementById("gamesDetailHow");
  if(t) t.textContent = g.title;
  if(h) h.textContent = g.how;
  const d = document.getElementById("gamesDetail");
  if(d) d.hidden = false;
}
function closeGamesDetail(){
  const d = document.getElementById("gamesDetail");
  if(d) d.hidden = true;
}
function gamesWin(t){
  addPoints(t, 10);
  closeGamesDetail();
}

/* تشغيل */
renderGames();
renderGamesChallenges();
buildBoard();
renderNightRounds();
currentWidget();
pickWheelTeam("sakara");

/* تصدير الحالة للطبقة الأونلاين */
window.getNight = ()=>({on:night.on, round:night.round});
window.getRoundName = (i)=> i>=0 && i<NIGHT_ROUNDS.length ? NIGHT_ROUNDS[i].name : "الختام الكبير";
window.quizBusy = ()=> !!boardTimer;
window.clearQuizTimer = ()=>{ if(boardTimer){ clearInterval(boardTimer); boardTimer = null; } quizDeadline = null; };
window.currentQuiz = ()=> currentQuiz;
window.getQuizDeadline = ()=> quizDeadline;
window.playCorrectSound = playCorrectSound;
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
      score, night, nightScore,
      wheelResult:document.getElementById("wheelResult").textContent,
      quizDeadline, currentQuiz
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
    document.getElementById("scoreSakara").textContent = score.sakara;
    document.getElementById("scoreMasateel").textContent = score.masateel;
    if(s.wheelResult) document.getElementById("wheelResult").textContent = s.wheelResult;
    document.getElementById("nightNextBtn").textContent = night.on ? "الجولة الجاية ←" : "ابدأ الجولة الأولى";
    document.getElementById("nightNextBtn").style.display = night.on && night.round >= NIGHT_ROUNDS.length ? "none" : "inline-block";
    refreshNightChips();
    currentWidget();
    updateNightTotal();
    if(night.on) document.getElementById("nightStatus").textContent = `الجولة ${night.round+1}: ${NIGHT_ROUNDS[night.round].name}`;
    /* استئناف سؤال جارٍ: إن لم ينتهِ وقته نعيد عرضه ببقية الوقت */
    const dl = s.quizDeadline, cq = s.currentQuiz;
    if(dl && cq && cq.open && dl > Date.now()){
      currentQuiz = cq;
      quizDeadline = dl;
      if(cq.team) quizTeam = cq.team;
      document.querySelectorAll(".team-pick").forEach(b=>b.classList.remove("active"));
      const sel = document.querySelector(cq.team==="sakara" ? ".pick-sakara" : ".pick-masateel");
      if(sel) sel.classList.add("active");
      renderQuiz(cq, dl);
    }
    return true;
  }catch(e){ return false; }
};
window.clearHostState = function(){
  try{ localStorage.removeItem("rokando_host_state"); }catch(e){}
};

/* ---------- مشغل الأغنية ---------- */
const MUSIC_URL = "music/ya-zahia.m4a";   /* يا زاهية — طه سليمان (من يوتيوب) */
const bgMusic = document.getElementById("bgMusic");
let musicOn = false;
if(MUSIC_URL) bgMusic.src = MUSIC_URL;

/* صافرة الفوز: Not Like Us — تِشغل لما حد يجاوب صح */
const NOT_LIKE_US_URL = "music/not-like-us.m4a";   /* Not Like Us — كيندريك لامار (من يوتيوب) */
const sfxCorrect = document.getElementById("sfxCorrect");
if(NOT_LIKE_US_URL) sfxCorrect.src = NOT_LIKE_US_URL;
let musicWasOn = false;
function playCorrectSound(){
  if(!NOT_LIKE_US_URL) return;
  try{
    if(musicOn){ bgMusic.pause(); musicWasOn = true; }
    sfxCorrect.currentTime = 0;
    sfxCorrect.play().then(()=>{
      sfxCorrect.onended = ()=>{
        if(musicWasOn){
          musicWasOn = false;
          bgMusic.play().then(()=>{ musicOn = true; }).catch(()=>{});
        }
      };
    }).catch(()=>{});
  }catch(e){}
}

function toggleMusic(){
  const btn = document.getElementById("musicBtn");
  if(!MUSIC_URL){
    btn.title = "لم يُضف رابط الأغنية بعد — افتح script.js واكتبه في MUSIC_URL";
    btn.classList.add("no-src");
    setTimeout(()=>btn.classList.remove("no-src"), 1500);
    return;
  }
  if(musicOn){
    bgMusic.pause();
    musicOn = false;
  }else{
    bgMusic.play().then(()=>{ musicOn = true; }).catch(()=>{});
  }
  document.body.classList.toggle("music-playing", musicOn);
}
