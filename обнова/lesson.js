/* DeutschWeg — lesson.js (topic-driven) */

/* ---- LOAD TOPIC FROM URL ---- */
function getTopic(){
  // Read from hash first (preview may rewrite ?query), then fallback to ?t=
  let id = 'kochen';
  const h = location.hash.replace(/^#/, '');
  const hm = h.match(/t=([\w-]+)/);
  if(hm) id = hm[1];
  else {
    const qm = location.search.match(/[?&]t=([\w-]+)/);
    if(qm) id = qm[1];
  }
  return window.TOPICS[id] || window.TOPICS.kochen;
}
const T = getTopic();

/* ---- FILL HERO ---- */
(function initHero(){
  const hero = document.getElementById('lessonHero');
  hero.style.background = `linear-gradient(135deg, ${T.color || 'var(--sun)'}, ${T.color === 'var(--pink)' ? 'var(--peach)' : 'var(--peach)'})`;
  document.getElementById('heroEmoji').textContent = T.emoji;
  document.getElementById('heroChip').textContent = `THEMA ${T.num} · ${T.level}`;
  document.getElementById('heroWords').textContent = `${T.vocab.length} Wörter`;
  // title: first word of name, then <em>rest</em>
  const parts = T.name.split(' ');
  const first = parts[0], rest = parts.slice(1).join(' ');
  document.getElementById('heroTitle').innerHTML = `${first}${rest ? '<br><em>' + rest + '</em>' : ''} ${T.emoji}`;
  document.getElementById('heroTag').textContent = T.tagline;
  document.title = `DeutschWeg — ${T.name} · ${T.level}`;
  document.getElementById('footerMeta').textContent = `${T.name} · ${T.vocab.length} Wörter · ${T.level}`;
})();

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
const vocab = T.vocab.slice();
const grid = document.getElementById('vocabGrid');
grid.innerHTML = vocab.map(v => `
  <div class="vocab-card" onclick="this.classList.toggle('open')">
    <button class="vocab-audio" onclick="event.stopPropagation(); speak('${v.w.replace(/'/g, "\\'")}')">🔊</button>
    <div class="vocab-art">${v.art}</div>
    <div class="vocab-word">${v.w}</div>
    <div class="vocab-ua">${v.ua}</div>
    <div class="vocab-ex">« ${v.ex} »</div>
  </div>`).join('');

/* ---- 2. FLIP ---- */
let lIdx = 0;
const lInner = document.getElementById('lFlipInner');
const flipCounter = document.getElementById('flipCounter');
function renderL(){
  const v = vocab[lIdx];
  document.getElementById('lFront').textContent = v.art + ' ' + v.w;
  document.getElementById('lBack').textContent = v.ua;
  document.getElementById('lEx').textContent = '«' + v.ex + '»';
  flipCounter.textContent = `${lIdx+1} / ${vocab.length}`;
  lInner.classList.remove('flipped');
}
function lNext(){ lIdx = (lIdx+1) % vocab.length; renderL(); }
function lPrev(){ lIdx = (lIdx-1+vocab.length) % vocab.length; renderL(); }
function lShuffle(){ vocab.sort(() => Math.random()-0.5); lIdx = 0; renderL(); }
document.getElementById('lFlipStage').addEventListener('click', () => lInner.classList.toggle('flipped'));
renderL();

/* ---- 3. DRAG & DROP ---- */
const pool = document.getElementById('dndPool');
const zones = document.querySelectorAll('.dnd-zone');
function renderPool(){
  const words = [...vocab].sort(() => Math.random()-0.5);
  pool.innerHTML = words.map(v => `<span class="dnd-chip" draggable="true" data-art="${v.art}">${v.w}</span>`).join('');
  attachDrag();
  document.getElementById('dndScore').textContent = '';
  zones.forEach(z => z.querySelectorAll('.dnd-chip').forEach(c => c.remove()));
}
function attachDrag(){
  document.querySelectorAll('.dnd-chip').forEach(c => {
    c.addEventListener('dragstart', e => { c.classList.add('dragging'); e.dataTransfer.setData('text/plain', c.textContent); e.dataTransfer.effectAllowed='move'; setTimeout(()=>c.style.opacity='.1',0); });
    c.addEventListener('dragend', () => { c.classList.remove('dragging'); c.style.opacity=''; });
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
  z.addEventListener('drop', e => { e.preventDefault(); z.classList.remove('over'); const d = document.querySelector('.dnd-chip.dragging'); if(d) z.appendChild(d); });
});
pool.addEventListener('dragover', e => e.preventDefault());
pool.addEventListener('drop', e => { e.preventDefault(); const d = document.querySelector('.dnd-chip.dragging'); if(d) pool.appendChild(d); });
function dndCheck(){
  let r = 0, tot = 0;
  zones.forEach(z => z.querySelectorAll('.dnd-chip').forEach(c => {
    tot++;
    if(c.dataset.art === z.dataset.art){ c.classList.remove('wrong'); c.classList.add('correct'); r++; }
    else { c.classList.remove('correct'); c.classList.add('wrong'); }
  }));
  document.getElementById('dndScore').textContent = `✓ ${r} / ${tot} richtig ${r===tot && tot>0 ? '— perfekt! 🎉' : ''}`;
}
function dndReset(){ renderPool(); }
renderPool();

/* ---- 4. TEXT ---- */
document.getElementById('textTitle').innerHTML = T.textTitle.replace(/(\w+)$/, '<em>$1</em>');
document.getElementById('textBox').innerHTML = T.text.map(p => `<p>${p}</p>`).join('');
document.getElementById('uaLine').textContent = T.textUa;
function toggleTrans(){
  const l = document.getElementById('uaLine');
  l.style.display = l.style.display === 'none' ? 'block' : 'none';
}

/* ---- 5. GRAMMATIK ---- */
(function initGram(){
  if(!T.grammar) return;
  const g = T.grammar;
  document.getElementById('gramTitle').innerHTML = g.title.replace(/^(\S+)\s+(.*)/, '$1 <em>$2</em>');
  document.getElementById('gramIntro').textContent = g.intro;
  document.getElementById('gramRules').innerHTML = g.rules.map((r,i) => `
    <div class="gram-rule">
      <div class="gram-rule-num">${String(i+1).padStart(2,'0')}</div>
      <div class="gram-rule-body">
        <h4>${r.head}</h4>
        <p>${r.body}</p>
        <ul>${r.ex.map(x => `<li>${x}</li>`).join('')}</ul>
      </div>
    </div>`).join('');
  document.getElementById('gramTip').innerHTML = g.tip;
  const mq = document.getElementById('gramMiniQuiz');
  mq.innerHTML = g.miniQuiz.map((m,i) => `
    <div class="gram-mq-row">
      <span class="gram-mq-q">${m.q}</span>
      <input class="gram-mq-in" data-a="${m.a.toLowerCase()}" placeholder="…">
      <span class="gram-mq-fb"></span>
    </div>`).join('');
  mq.querySelectorAll('.gram-mq-in').forEach(inp => {
    inp.addEventListener('input', () => {
      const fb = inp.nextElementSibling;
      const v = inp.value.trim().toLowerCase();
      if(!v){ fb.textContent = ''; inp.classList.remove('ok','bad'); return; }
      if(v === inp.dataset.a){ fb.textContent = '✓'; inp.classList.add('ok'); inp.classList.remove('bad'); }
      else { fb.textContent = ''; inp.classList.remove('ok'); }
    });
    inp.addEventListener('blur', () => {
      const v = inp.value.trim().toLowerCase();
      if(v && v !== inp.dataset.a){ inp.classList.add('bad'); inp.nextElementSibling.textContent = '→ ' + inp.dataset.a; }
    });
  });
})();

/* ---- 6. DIALOG ---- */
document.getElementById('dialogTitle').innerHTML = T.dialogTitle.replace(/^(\w+)\s+(.*)/, '$1 <em>$2</em>');
document.getElementById('dialog').innerHTML = T.dialog.map(d => `
  <div class="dialog-line${d.r ? ' right' : ''}">
    <div class="dialog-avatar">${d.s}</div>
    <div class="dialog-bubble">
      <p>${d.t}</p>
      <span class="ua" style="display:none">${d.ua}</span>
    </div>
  </div>`).join('');
function toggleDialogUa(){
  document.querySelectorAll('#dialog .ua').forEach(u => {
    u.style.display = (u.style.display === 'none' || !u.style.display) ? 'block' : 'none';
  });
}

/* ---- 7. QUIZ ---- */
const quiz = T.quiz;
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
