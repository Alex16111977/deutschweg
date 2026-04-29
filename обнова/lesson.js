/* DeutschWeg — lesson.js (new-design, data-driven from LESSONS) */

/* ---- RESOLVE TOPIC (support both ?topic= and #t=/?t= for backwards compat) ---- */
function getSlug(){
  const params = new URLSearchParams(location.search);
  if(params.get('topic')) return params.get('topic');
  if(params.get('t'))     return params.get('t');
  const hm = location.hash.replace(/^#/, '').match(/t=([\w-]+)/);
  if(hm) return hm[1];
  return 'kochen';
}
const slug = getSlug();
const LESSON = (window.LESSONS || {})[slug];
if(!LESSON){
  alert('Тема не знайдена: ' + slug);
  location.href = 'themen.html';
  throw new Error('Unknown topic: ' + slug);
}

/* ---- HERO ---- */
(function initHero(){
  const hero = document.getElementById('lessonHero');
  const topicColor = getTopicColor(slug);
  if(hero) hero.style.background = `linear-gradient(135deg, ${topicColor}, var(--peach))`;
  document.title = `DeutschWeg — ${LESSON.title} · ${LESSON.level}`;
  document.getElementById('heroEmoji').textContent  = LESSON.emoji;
  document.getElementById('heroChip').textContent   = `THEMA ${LESSON.idx} · ${LESSON.level}`;
  document.getElementById('heroDuration').textContent = LESSON.duration;
  document.getElementById('heroWords').textContent  = `${LESSON.vocab.length} Wörter`;
  document.getElementById('heroTitle').innerHTML    = LESSON.titleHtml || LESSON.title;
  document.getElementById('heroTag').textContent    = LESSON.intro || '';
  const footerMeta = document.getElementById('footerMeta');
  if(footerMeta) footerMeta.textContent = `${LESSON.title} · ${LESSON.vocab.length} Wörter · ${LESSON.level}`;
})();

function getTopicColor(s){
  const map = {
    kochen:'var(--sun)', umwelt:'var(--mint)', reisen:'var(--lilac)',
    freizeit:'var(--peach)', beruf:'var(--lime)', arbeit:'var(--lime)',
    technik:'var(--blue)', tech:'var(--blue)', freunde:'var(--pink)',
    familie:'var(--sun)', gesundheit:'var(--mint)', gesund:'var(--mint)',
    medien:'var(--lilac)', erinnerungen:'var(--lilac)'
  };
  return map[s] || 'var(--sun)';
}

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

/* ---- 1. VOCAB GRID ---- */
const vocab = LESSON.vocab.slice();
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

/* ---- 2. FLIP ---- */
let lIdx = 0;
const lInner       = document.getElementById('lFlipInner');
const lFrontEl     = document.getElementById('lFront');
const lBackEl      = document.getElementById('lBack');
const lExEl        = document.getElementById('lEx');
const flipCounter  = document.getElementById('flipCounter');
function renderL(){
  const v = vocab[lIdx];
  lFrontEl.textContent = (v.art && v.art !== '—' ? v.art + ' ' : '') + v.w;
  lBackEl.textContent  = v.ua;
  lExEl.textContent    = '«' + v.ex + '»';
  if(flipCounter) flipCounter.textContent = `${lIdx+1} / ${vocab.length}`;
  lInner.classList.remove('flipped');
}
function lNext(){ lIdx = (lIdx+1) % vocab.length; renderL(); }
function lPrev(){ lIdx = (lIdx-1+vocab.length) % vocab.length; renderL(); }
function lShuffle(){ vocab.sort(() => Math.random()-0.5); lIdx = 0; renderL(); }
document.getElementById('lFlipStage')?.addEventListener('click', () => lInner.classList.toggle('flipped'));
renderL();

/* ---- 3. DRAG & DROP (only der/die/das nouns) ---- */
const dndItems = vocab.filter(v => v.art === 'der' || v.art === 'die' || v.art === 'das');
const pool  = document.getElementById('dndPool');
const zones = document.querySelectorAll('.dnd-zone');
function renderPool(){
  if(!pool) return;
  const words = [...dndItems].sort(() => Math.random()-0.5);
  pool.innerHTML = words.map(v => `<span class="dnd-chip" draggable="true" data-art="${v.art}">${v.w}</span>`).join('');
  attachDrag();
  const scoreEl = document.getElementById('dndScore');
  if(scoreEl) scoreEl.textContent = '';
}
function attachDrag(){
  document.querySelectorAll('.dnd-chip').forEach(c => {
    c.addEventListener('dragstart', e => {
      c.classList.add('dragging');
      e.dataTransfer.setData('text/plain', c.textContent);
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
  z.addEventListener('dragover',  e => { e.preventDefault(); z.classList.add('over'); });
  z.addEventListener('dragleave', () => z.classList.remove('over'));
  z.addEventListener('drop',      e => {
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
  zones.forEach(z => z.querySelectorAll('.dnd-chip').forEach(c => {
    total++;
    if(c.dataset.art === z.dataset.art){ c.classList.remove('wrong'); c.classList.add('correct'); right++; }
    else { c.classList.remove('correct'); c.classList.add('wrong'); }
  }));
  document.getElementById('dndScore').textContent =
    `✓ ${right} / ${total} richtig ${right === total && total > 0 ? '— perfekt! 🎉' : ''}`;
}
function dndReset(){ renderPool(); }
renderPool();

/* ---- 4. SPRECHÜBUNG ---- */
const sprechPool = LESSON.speakQuestions || [];
function sprechShuffle(){
  const list = document.getElementById('sprechList');
  if(!list || !sprechPool.length){
    if(list) list.innerHTML = '<li style="list-style:none">—</li>';
    return;
  }
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

/* ---- 5. READING ---- */
const textBody = document.getElementById('textBody');
if(textBody && LESSON.reading){
  textBody.innerHTML = LESSON.reading.paragraphs.map(p => `<p>${p}</p>`).join('');
  const uaLine = document.getElementById('uaLine');
  if(uaLine && LESSON.reading.uaSummary) uaLine.textContent = LESSON.reading.uaSummary;
}
const textTitleEl = document.getElementById('textTitle');
if(textTitleEl) textTitleEl.innerHTML = 'Kurzer <em>Text</em>';
function toggleTrans(){
  const l = document.getElementById('uaLine');
  if(!l) return;
  l.style.display = l.style.display === 'none' ? 'block' : 'none';
}

/* inline reading questions (Teil 1) */
(function renderReadingQ(){
  const t1 = LESSON.leseverstehen?.teil1;
  const box = document.getElementById('readingQuestions');
  if(!t1 || !box) return;
  box.innerHTML = `
    <div class="rq-wrap">
      <div class="lv-teil-head" style="margin-bottom:16px">
        <span class="lv-badge">Verständnisfragen</span>
        <h3 class="lv-title" style="margin-top:8px">Richtig oder Falsch?</h3>
        <p class="lv-instr">${t1.instruction}</p>
      </div>
      ${t1.statements.map((s,i)=>`
        <div class="rf-item" id="rq${i}" data-correct="${s.correct}">
          <span class="rf-num">${i+1}.</span>
          <span class="rf-text">${s.s}</span>
          <div class="rf-btns">
            <button class="rf-btn" onclick="answerRQ(${i},true)">✓ Richtig</button>
            <button class="rf-btn" onclick="answerRQ(${i},false)">✗ Falsch</button>
          </div>
        </div>`).join('')}
      <div class="lv-actions">
        <button class="btn pink" onclick="checkRQ()">Auswerten ✓</button>
        <button class="word-btn" onclick="resetRQ()">🔄 Reset</button>
        <span class="tiny-note" id="rqScore"></span>
      </div>
    </div>`;
})();

const rqState = {};
function answerRQ(i, val){
  rqState[i] = val;
  const item = document.getElementById(`rq${i}`);
  item.querySelectorAll('.rf-btn').forEach(b => b.classList.remove('selected'));
  item.querySelectorAll('.rf-btn')[val ? 0 : 1].classList.add('selected');
  item.classList.remove('rf-correct','rf-wrong');
}
function checkRQ(){
  const stmts = LESSON.leseverstehen?.teil1?.statements;
  if(!stmts) return;
  let ok = 0;
  stmts.forEach((s,i) => {
    const item = document.getElementById(`rq${i}`);
    if(!item) return;
    item.classList.remove('rf-correct','rf-wrong');
    if(rqState[i] === undefined) return;
    if(rqState[i] === s.correct){ item.classList.add('rf-correct'); ok++; }
    else item.classList.add('rf-wrong');
  });
  document.getElementById('rqScore').textContent =
    `✓ ${ok} / ${stmts.length}${ok===stmts.length ? ' — Perfekt! 🎉' : ''}`;
}
function resetRQ(){
  Object.keys(rqState).forEach(k => delete rqState[k]);
  document.querySelectorAll('[id^="rq"]').forEach(el => {
    el.classList.remove('rf-correct','rf-wrong');
    el.querySelectorAll('.rf-btn').forEach(b => b.classList.remove('selected'));
  });
  document.getElementById('rqScore').textContent = '';
}

/* ---- 6. DIALOG ---- */
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
  speechSynthesis.cancel();
  const next = () => {
    if(i >= lines.length) return;
    const u = new SpeechSynthesisUtterance(lines[i].de);
    u.lang = 'de-DE';
    u.onend = () => { i++; next(); };
    speechSynthesis.speak(u);
  };
  next();
}

/* ---- 7. GRAMMAR (rich HTML from LESSONS.grammar.html) ---- */
if(LESSON.grammar){
  const chipEl = document.getElementById('grammarChip');
  const bodyEl = document.getElementById('grammarBody');
  if(chipEl) chipEl.textContent = LESSON.grammar.chip || '';
  if(bodyEl) bodyEl.innerHTML    = LESSON.grammar.html || '<p>—</p>';
}

/* ---- 8. QUIZ ---- */
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
  document.getElementById('quizQ').textContent    = quiz[qI].q;
  document.getElementById('quizFb').textContent   = '';
  document.getElementById('quizFb').className     = 'quiz-feedback';
  const opts = document.getElementById('quizOpts');
  opts.innerHTML = quiz[qI].opts.map((o,i) => `<button class="quiz-opt" data-i="${i}">${o}</button>`).join('');
  opts.querySelectorAll('.quiz-opt').forEach(b => b.addEventListener('click', () => {
    const i = +b.dataset.i;
    if(i === quiz[qI].a){
      b.classList.add('right'); qScore++;
      document.getElementById('quizFb').textContent = '✅ Nice! Nächste →';
    } else {
      b.classList.add('wrong');
      opts.children[quiz[qI].a].classList.add('right');
      document.getElementById('quizFb').textContent = '❌ Fast! Die richtige Antwort ist grün.';
    }
    document.getElementById('quizFb').classList.add('show');
    opts.querySelectorAll('.quiz-opt').forEach(x => x.disabled = true);
    setTimeout(() => { qI++; renderQuiz(); }, 1400);
  }));
}
renderQuiz();

/* ---- 9. LESEVERSTEHEN ---- */
const rfState = {};

function renderLeseverstehen() {
  const lv = LESSON.leseverstehen;
  const lese1 = document.getElementById('lese1');
  const lese2 = document.getElementById('lese2');
  if (!lv || !lese1) return;

  // Teil 1 — Richtig / Falsch
  if (lv.teil1) {
    const t1 = lv.teil1;
    lese1.innerHTML = `
      <div class="lv-teil-head">
        <span class="lv-badge">Teil 1</span>
        <h3 class="lv-title">${t1.title}</h3>
        <p class="lv-instr">${t1.instruction}</p>
      </div>
      <div id="rfList">
        ${t1.statements.map((s, i) => `
          <div class="rf-item" id="rf${i}" data-correct="${s.correct}">
            <span class="rf-num">${i + 1}.</span>
            <span class="rf-text">${s.s}</span>
            <div class="rf-btns">
              <button class="rf-btn" onclick="answerRF(${i}, true)">✓ Richtig</button>
              <button class="rf-btn" onclick="answerRF(${i}, false)">✗ Falsch</button>
            </div>
          </div>`).join('')}
      </div>
      <div class="lv-actions">
        <button class="btn pink" onclick="checkRF()">Auswerten ✓</button>
        <button class="word-btn" onclick="resetRF()">🔄 Reset</button>
        <span class="tiny-note" id="rfScore"></span>
      </div>`;
  }

  // Teil 2 — Zuordnung
  if (lv.teil2 && lese2) {
    const t2 = lv.teil2;
    lese2.innerHTML = `
      <div class="lv-teil-head">
        <span class="lv-badge" style="background:var(--blue);color:#fff">Teil 2</span>
        <h3 class="lv-title">${t2.title}</h3>
        <p class="lv-instr">${t2.instruction}</p>
      </div>
      <div class="lv2-ads">
        ${t2.ads.map(ad => `
          <div class="lv2-ad">
            <div class="lv2-ad-id">${ad.id}</div>
            <p>${ad.text}</p>
          </div>`).join('')}
      </div>
      <div class="lv2-people">
        ${t2.people.map((p, i) => `
          <div class="lv2-person" id="lv2p${i}" data-answer="${p.answer}">
            <div class="lv2-person-name">👤 ${p.name}</div>
            <p class="lv2-person-desc">${p.desc}</p>
            <select class="lv2-select" id="lv2sel${i}">
              <option value="">— Anzeige wählen —</option>
              ${t2.ads.map(ad => `<option value="${ad.id}">Anzeige ${ad.id}</option>`).join('')}
            </select>
          </div>`).join('')}
      </div>
      <div class="lv-actions">
        <button class="btn pink" onclick="checkLV2()">Auswerten ✓</button>
        <button class="word-btn" onclick="resetLV2()">🔄 Reset</button>
        <span class="tiny-note" id="lv2Score"></span>
      </div>`;
  }
}

function answerRF(i, val) {
  rfState[i] = val;
  const item = document.getElementById(`rf${i}`);
  item.querySelectorAll('.rf-btn').forEach(b => b.classList.remove('selected'));
  item.querySelectorAll('.rf-btn')[val ? 0 : 1].classList.add('selected');
  item.classList.remove('rf-correct', 'rf-wrong');
}

function checkRF() {
  const t1 = LESSON.leseverstehen?.teil1;
  if (!t1) return;
  let correct = 0;
  t1.statements.forEach((s, i) => {
    const item = document.getElementById(`rf${i}`);
    if (!item) return;
    item.classList.remove('rf-correct', 'rf-wrong');
    if (rfState[i] === undefined) return;
    if (rfState[i] === s.correct) { item.classList.add('rf-correct'); correct++; }
    else item.classList.add('rf-wrong');
  });
  const total = t1.statements.length;
  document.getElementById('rfScore').textContent =
    `✓ ${correct} / ${total}${correct === total ? ' — Perfekt! 🎉' : ''}`;
}

function resetRF() {
  Object.keys(rfState).forEach(k => delete rfState[k]);
  renderLeseverstehen();
}

function checkLV2() {
  const t2 = LESSON.leseverstehen?.teil2;
  if (!t2) return;
  let correct = 0;
  t2.people.forEach((p, i) => {
    const sel  = document.getElementById(`lv2sel${i}`);
    const item = document.getElementById(`lv2p${i}`);
    if (!sel || !item) return;
    item.classList.remove('rf-correct', 'rf-wrong');
    if (!sel.value) return;
    if (sel.value === p.answer) { item.classList.add('rf-correct'); correct++; }
    else item.classList.add('rf-wrong');
  });
  const total = t2.people.length;
  document.getElementById('lv2Score').textContent =
    `✓ ${correct} / ${total}${correct === total ? ' — Genial! 🎉' : ''}`;
}

function resetLV2() { renderLeseverstehen(); }

renderLeseverstehen();
