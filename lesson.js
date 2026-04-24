/* DeutschWeg — lesson.js (data-driven) */

/* ---- RESOLVE TOPIC ---- */
const params = new URLSearchParams(location.search);
const slug = params.get('topic') || 'kochen';
const LESSON = (window.LESSONS || {})[slug];

if(!LESSON){
  alert('Тема не знайдена: ' + slug);
  location.href = 'index.html';
  throw new Error('Unknown topic: ' + slug);
}

/* ---- HERO / META ---- */
document.title = `DeutschWeg — ${LESSON.title} · ${LESSON.level}`;
document.getElementById('heroEmoji').textContent = LESSON.emoji;
document.getElementById('heroChipMain').textContent = `THEMA ${LESSON.idx} · ${LESSON.level}`;
document.getElementById('heroChipDuration').textContent = LESSON.duration;
document.getElementById('heroChipWords').textContent = `${LESSON.vocab.length} Wörter`;
document.getElementById('heroTitle').innerHTML = LESSON.titleHtml || LESSON.title;
document.getElementById('heroIntro').textContent = LESSON.intro;
document.getElementById('footTopicMeta').textContent =
  `${LESSON.title} · ${LESSON.vocab.length} Wörter · ${LESSON.level}`;

/* ---- TABS ---- */
document.querySelectorAll('.ltab').forEach(t => t.addEventListener('click', () => {
  document.querySelectorAll('.ltab').forEach(x => x.classList.remove('active'));
  document.querySelectorAll('.lpane').forEach(x => x.classList.remove('active'));
  t.classList.add('active');
  document.getElementById(t.dataset.p).classList.add('active');
  window.scrollTo({top: 0, behavior: 'smooth'});
}));
function nextTab(){
  const cur = document.querySelector('.ltab.active');
  const nxt = cur.nextElementSibling;
  if(nxt && nxt.classList.contains('ltab')) nxt.click();
}

/* ---- IDIOM-KINO (flip card carousel, lesson-conditional) ---- */
if(LESSON.idioms && LESSON.idioms.length){
  const tab = document.getElementById('tabKino');
  if(tab) tab.style.display = '';
  const card = document.getElementById('kinoCard');
  const counter = document.getElementById('kinoCounter');
  let kIdx = 0;
  function renderKino(){
    const it = LESSON.idioms[kIdx];
    document.getElementById('kinoEmoji').textContent = it.emoji;
    document.getElementById('kinoPhrase').textContent = it.de;
    document.getElementById('kinoLit').textContent = '«' + it.lit + '»';
    document.getElementById('kinoMeaning').textContent = it.meaning;
    document.getElementById('kinoExample').textContent = '« ' + it.example + ' »';
    document.getElementById('kinoWhen').textContent = it.when;
    document.getElementById('kinoUa').textContent = '🇺🇦 ' + it.ua;
    counter.textContent = `${kIdx+1} / ${LESSON.idioms.length}`;
    card.classList.remove('flipped');
  }
  window.kinoNext = () => { kIdx = (kIdx+1) % LESSON.idioms.length; renderKino(); };
  window.kinoPrev = () => { kIdx = (kIdx-1+LESSON.idioms.length) % LESSON.idioms.length; renderKino(); };
  window.kinoRandom = () => { let n = kIdx; while(LESSON.idioms.length > 1 && n === kIdx) n = Math.floor(Math.random()*LESSON.idioms.length); kIdx = n; renderKino(); };
  if(card) card.addEventListener('click', () => card.classList.toggle('flipped'));
  renderKino();
}

/* ---- MEMORY ANCHORS (silent sensory triggers) ---- */
if(LESSON.memoryAnchors){
  const box = document.getElementById('memoryAnchors');
  if(box){
    const m = LESSON.memoryAnchors;
    box.innerHTML = `
      <div class="anchors-title">${m.title}</div>
      <div class="anchors-hint">${m.hint}</div>
      <div class="anchors-grid">
        ${m.items.map(a => `<div class="anchor-chip"><span class="anchor-emoji">${a.emoji}</span><span>${a.de}</span></div>`).join('')}
      </div>
    `;
    box.style.display = 'block';
  }
}

/* ---- VOCAB GRID ---- */
const vocab = LESSON.vocab;
const grid = document.getElementById('vocabGrid');
if(grid){
  grid.innerHTML = vocab.map(v => `
    <div class="vocab-card" onclick="this.classList.toggle('open')">
      <button class="vocab-audio" onclick="event.stopPropagation(); speak('${v.w.replace(/'/g,"\\'")}')">🔊</button>
      <div class="vocab-art">${v.art}</div>
      <div class="vocab-word">${v.w}</div>
      <div class="vocab-ua">${v.ua}</div>
      <div class="vocab-ex">« ${v.ex} »</div>
    </div>`).join('');
}

/* ---- FLIP ---- */
let lIdx = 0;
const lInner = document.getElementById('lFlipInner');
const lFront = document.getElementById('lFront');
const lBack = document.getElementById('lBack');
const lExEl = document.getElementById('lEx');
const flipCounter = document.getElementById('flipCounter');
function renderL(){
  const v = vocab[lIdx];
  lFront.textContent = (v.art && v.art !== '—' ? v.art + ' ' : '') + v.w;
  lBack.textContent = v.ua;
  lExEl.textContent = '«' + v.ex + '»';
  flipCounter && (flipCounter.textContent = `${lIdx+1} / ${vocab.length}`);
  lInner.classList.remove('flipped');
}
function lNext(){ lIdx = (lIdx+1) % vocab.length; renderL(); }
function lPrev(){ lIdx = (lIdx-1+vocab.length) % vocab.length; renderL(); }
function lShuffle(){ vocab.sort(() => Math.random()-0.5); lIdx = 0; renderL(); }
document.getElementById('lFlipStage')?.addEventListener('click', () => lInner.classList.toggle('flipped'));
renderL();

/* ---- DRAG & DROP (only der/die/das nouns) ---- */
const dndItems = vocab.filter(v => v.art === 'der' || v.art === 'die' || v.art === 'das');
const pool = document.getElementById('dndPool');
const zones = document.querySelectorAll('.dnd-zone');
function renderPool(){
  if(!pool) return;
  const words = [...dndItems].sort(() => Math.random()-0.5);
  pool.innerHTML = words.map(v => `<span class="dnd-chip" draggable="true" data-art="${v.art}">${v.w}</span>`).join('');
  attachDrag();
}
function attachDrag(){
  document.querySelectorAll('.dnd-chip').forEach(c => {
    c.addEventListener('dragstart', e => {
      c.classList.add('dragging');
      e.dataTransfer.setData('text/plain', c.outerHTML);
      e.dataTransfer.effectAllowed = 'move';
      setTimeout(() => c.style.opacity = '.1', 0);
    });
    c.addEventListener('dragend', () => { c.classList.remove('dragging'); c.style.opacity = ''; });
    c.addEventListener('click', () => {
      const order = ['der','die','das'];
      const parent = c.parentElement;
      if(parent.classList.contains('dnd-zone')){
        const cur = parent.dataset.art;
        const nxt = order[(order.indexOf(cur)+1) % 3];
        document.querySelector(`.dnd-zone[data-art="${nxt}"]`).appendChild(c);
      } else {
        document.querySelector(`.dnd-zone[data-art="${order[0]}"]`).appendChild(c);
      }
    });
  });
}
zones.forEach(z => {
  z.addEventListener('dragover', e => { e.preventDefault(); z.classList.add('over'); });
  z.addEventListener('dragleave', () => z.classList.remove('over'));
  z.addEventListener('drop', e => {
    e.preventDefault();
    z.classList.remove('over');
    const drag = document.querySelector('.dnd-chip.dragging');
    if(drag) z.appendChild(drag);
  });
});
pool?.addEventListener('dragover', e => e.preventDefault());
pool?.addEventListener('drop', e => {
  e.preventDefault();
  const drag = document.querySelector('.dnd-chip.dragging');
  if(drag) pool.appendChild(drag);
});
function dndCheck(){
  let right = 0, total = 0;
  zones.forEach(z => {
    z.querySelectorAll('.dnd-chip').forEach(c => {
      total++;
      if(c.dataset.art === z.dataset.art){ c.classList.remove('wrong'); c.classList.add('correct'); right++; }
      else { c.classList.remove('correct'); c.classList.add('wrong'); }
    });
  });
  document.getElementById('dndScore').textContent =
    `✓ ${right} / ${total} richtig ${right === total && total > 0 ? '— perfekt! 🎉' : ''}`;
}
function dndReset(){ renderPool(); document.getElementById('dndScore').textContent = ''; }
renderPool();

/* ---- SPRECHÜBUNG ---- */
const sprechPool = LESSON.speakQuestions || [];
function sprechShuffle(){
  const list = document.getElementById('sprechList');
  if(!list || !sprechPool.length) return;
  const shuffled = [...sprechPool].sort(() => Math.random()-0.5).slice(0, 5);
  list.innerHTML = shuffled.map(q => `<li>${q}</li>`).join('');
}
function sprechReadAll(){
  const lis = document.querySelectorAll('#sprechList li');
  if(!lis.length) return;
  let i = 0;
  speechSynthesis.cancel();
  const step = () => {
    if(i >= lis.length) return;
    const u = new SpeechSynthesisUtterance(lis[i].textContent);
    u.lang = 'de-DE';
    u.onend = () => { i++; step(); };
    speechSynthesis.speak(u);
  };
  step();
}
sprechShuffle();

/* ---- READING ---- */
const textBody = document.getElementById('textBody');
if(textBody && LESSON.reading){
  textBody.innerHTML = LESSON.reading.paragraphs.map(p => `<p>${p}</p>`).join('');
  const uaLine = document.getElementById('uaLine');
  if(uaLine && LESSON.reading.uaSummary) uaLine.textContent = LESSON.reading.uaSummary;
}
function toggleTrans(){
  const l = document.getElementById('uaLine');
  if(!l) return;
  l.style.display = l.style.display === 'none' ? 'block' : 'none';
}

/* ---- DIALOG ---- */
const dialogEl = document.getElementById('dialog');
if(dialogEl && LESSON.dialog){
  dialogEl.innerHTML = LESSON.dialog.map((d, i) => {
    const right = i % 2 === 1 ? ' right' : '';
    return `<div class="dialog-line${right}">
      <div class="dialog-avatar">${d.who}</div>
      <div class="dialog-bubble">
        <p>${d.de}</p>
        <span class="ua" style="display:none">${d.ua}</span>
      </div>
    </div>`;
  }).join('');
}
function toggleDialogUa(){
  document.querySelectorAll('#dialog .ua').forEach(u => {
    u.style.display = (u.style.display === 'none' || !u.style.display) ? 'block' : 'none';
  });
}
function playDialog(){
  const lines = LESSON.dialog || [];
  if(!lines.length) return;
  let i = 0;
  const next = () => {
    if(i >= lines.length) return;
    const u = new SpeechSynthesisUtterance(lines[i].de);
    u.lang = 'de-DE';
    u.onend = () => { i++; next(); };
    speechSynthesis.speak(u);
  };
  speechSynthesis.cancel();
  next();
}

/* ---- GRAMMAR ---- */
if(LESSON.grammar){
  const chipEl = document.getElementById('grammarChip');
  const bodyEl = document.getElementById('grammarBody');
  if(chipEl) chipEl.textContent = LESSON.grammar.chip || '';
  if(bodyEl) bodyEl.innerHTML = LESSON.grammar.html || '<p>—</p>';
}

/* ---- QUIZ ---- */
const quiz = LESSON.quiz || [];
let qI = 0, qScore = 0;
function renderQuiz(){
  if(qI >= quiz.length){
    document.getElementById('quizCard').style.display = 'none';
    document.getElementById('quizDone').style.display = 'block';
    document.getElementById('quizScore').textContent = `${qScore} / ${quiz.length}`;
    return;
  }
  document.getElementById('quizProg').textContent = `Frage ${qI+1} / ${quiz.length}`;
  document.getElementById('quizQ').textContent = quiz[qI].q;
  document.getElementById('quizFb').textContent = '';
  document.getElementById('quizFb').className = 'quiz-feedback';
  const opts = document.getElementById('quizOpts');
  opts.innerHTML = quiz[qI].opts.map((o,i) => `<button class="quiz-opt" data-i="${i}">${o}</button>`).join('');
  opts.querySelectorAll('.quiz-opt').forEach(b => b.addEventListener('click', () => {
    const i = +b.dataset.i;
    const correct = i === quiz[qI].a;
    if(correct){
      b.classList.add('right');
      qScore++;
      document.getElementById('quizFb').textContent = '✅ Nice! Nächste →';
      document.getElementById('quizFb').classList.add('show');
    } else {
      b.classList.add('wrong');
      opts.children[quiz[qI].a].classList.add('right');
      document.getElementById('quizFb').textContent = '❌ Fast! Die richtige Antwort ist grün.';
      document.getElementById('quizFb').classList.add('show');
    }
    opts.querySelectorAll('.quiz-opt').forEach(x => x.disabled = true);
    setTimeout(() => { qI++; renderQuiz(); }, 1400);
  }));
}
renderQuiz();
