/* DeutschWeg — shared JS for extra pages */

/* theme sync across pages */
(function(){
  const t = localStorage.getItem('dw-theme') || 'light';
  document.body.dataset.theme = t;
  document.querySelectorAll('.theme-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.t === t);
    b.addEventListener('click', () => {
      document.body.dataset.theme = b.dataset.t;
      localStorage.setItem('dw-theme', b.dataset.t);
      document.querySelectorAll('.theme-btn').forEach(x => x.classList.toggle('active', x.dataset.t === b.dataset.t));
    });
  });
})();

/* TTS */
function speak(t){
  try{
    const u = new SpeechSynthesisUtterance(t);
    u.lang = 'de-DE';
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  }catch(e){}
}

/* ===== THEMEN ===== */
function renderThemen(topics){
  const grid = document.getElementById('themenGrid');
  if(!grid) return;
  let q = '', f = 'all', s = 'all', view = 'grid';

  function render(){
    const filtered = topics.filter(t => {
      if(q && !(t.name.toLowerCase().includes(q) || t.gram.toLowerCase().includes(q))) return false;
      if(f !== 'all' && t.level !== f) return false;
      if(s !== 'all' && t.status !== s) return false;
      return true;
    });
    grid.className = 'themen-grid' + (view === 'list' ? ' list' : '');
    grid.style.gridTemplateColumns = view === 'list' ? '1fr' : '';
    grid.innerHTML = filtered.map((t,i) => `
      <a class="theme-tile ${t.status} ${view==='list'?'list-view':''}" href="lesson.html#t=${t.id}" style="background: ${t.color}">
        <div class="tt-badge">${t.status === 'done' ? '✓ durch' : t.status === 'new' ? '✨ NEU' : '🔥 offen'}</div>
        <div class="tt-top">
          <div>
            <div class="tt-num">THEMA ${String(i+1).padStart(2,'0')}</div>
            <div class="tt-emoji">${t.emoji}</div>
          </div>
        </div>
        <div class="tt-name">${t.name}</div>
        <div class="tt-gram">${t.gram}</div>
        <div class="tt-meta">
          <span class="tt-chip">${t.level}</span>
          <span class="tt-chip">${t.words} Wörter</span>
        </div>
        <div class="tt-bar"><div style="width:${t.prog}%"></div></div>
      </a>`).join('');
    document.getElementById('emptyState').style.display = filtered.length ? 'none' : 'block';
  }

  document.getElementById('search')?.addEventListener('input', e => { q = e.target.value.toLowerCase(); render(); });
  document.querySelectorAll('#levelChips .chip').forEach(c => c.addEventListener('click', () => {
    document.querySelectorAll('#levelChips .chip').forEach(x => x.classList.remove('active'));
    c.classList.add('active'); f = c.dataset.f; render();
  }));
  document.querySelectorAll('#statusChips .chip').forEach(c => c.addEventListener('click', () => {
    document.querySelectorAll('#statusChips .chip').forEach(x => x.classList.remove('active'));
    c.classList.add('active'); s = c.dataset.s; render();
  }));
  document.querySelectorAll('#viewToggle .view-btn').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('#viewToggle .view-btn').forEach(x => x.classList.remove('active'));
    b.classList.add('active'); view = b.dataset.v; render();
  }));
  render();
}

/* ===== PROFILE ===== */
function renderHeatmap(){
  const wrap = document.getElementById('heatmap');
  if(!wrap) return;
  const weeks = 16;
  const cells = weeks * 7;
  let html = '';
  // seed: recent weeks denser
  for(let i=0;i<cells;i++){
    const wk = Math.floor(i/7);
    const recent = wk >= weeks - 3;
    const r = Math.random();
    let lvl = 0;
    if(recent){
      if(r > 0.12) lvl = 1 + Math.floor(Math.random()*4);
    } else {
      if(r > 0.35) lvl = 1 + Math.floor(Math.random()*3);
    }
    html += `<div class="hm-cell ${lvl? 'l'+lvl:''}" title="${lvl? lvl*8+' min':'0 min'}"></div>`;
  }
  wrap.innerHTML = html;
}

const avatars = ['🦊','🐸','🐙','🦁','🐧','🐺','🐼','🐨','🦄','🐵','🦉','🐳'];
function cycleAvatar(){
  const el = document.getElementById('avatar');
  if(!el) return;
  const i = (avatars.indexOf(el.textContent.trim()) + 1) % avatars.length;
  el.textContent = avatars[i];
  el.style.animation = 'none';
  el.offsetWidth;
  el.style.animation = '';
}

/* ===== WÖRTER ===== */
let wordsCache = [];
function renderWordTable(words){
  wordsCache = words.slice();
  const wrap = document.getElementById('wordTable');
  if(!wrap) return;
  let q = '', f = 'all', m = 'all';
  function render(){
    const filtered = wordsCache.filter(w => {
      if(q && !(w.w.toLowerCase().includes(q) || w.ua.toLowerCase().includes(q))) return false;
      if(f !== 'all' && f !== 'verb' && w.art !== f) return false;
      if(m !== 'all' && w.status !== m) return false;
      return true;
    });
    wrap.innerHTML = `
      <div class="word-row head">
        <div>ART</div>
        <div>WORT</div>
        <div>ÜBERSETZUNG</div>
        <div>THEMA</div>
        <div>STATUS</div>
        <div></div>
      </div>` + filtered.map(w => `
      <div class="word-row">
        <div class="wr-art ${w.art}">${w.art}</div>
        <div class="wr-word">${w.w}</div>
        <div class="wr-ua">${w.ua}</div>
        <div class="wr-topic">${w.topic}</div>
        <div class="wr-status ${w.status}">${w.status}</div>
        <div class="wr-actions">
          <button class="wr-mini" title="hören" onclick="speak('${w.w}')">🔊</button>
          <button class="wr-mini" title="fav">⭐</button>
        </div>
      </div>`).join('');
  }
  document.getElementById('wSearch')?.addEventListener('input', e => { q = e.target.value.toLowerCase(); render(); });
  document.querySelectorAll('.chip[data-f]').forEach(c => c.addEventListener('click', () => {
    document.querySelectorAll('.chip[data-f]').forEach(x => x.classList.remove('active'));
    c.classList.add('active'); f = c.dataset.f; render();
  }));
  document.querySelectorAll('.chip[data-m]').forEach(c => c.addEventListener('click', () => {
    document.querySelectorAll('.chip[data-m]').forEach(x => x.classList.remove('active'));
    c.classList.add('active'); m = c.dataset.m; render();
  }));
  render();
}
function shuffleWords(){
  wordsCache.sort(() => Math.random()-0.5);
  const wrap = document.getElementById('wordTable');
  const ev = new Event('input');
  // re-render by calling via the search input listener path isn't trivial; just re-render manually:
  const searchInput = document.getElementById('wSearch');
  searchInput && searchInput.dispatchEvent(ev);
}

/* SRS */
const srsQueue = [
  { art:'die', w:'Mahlzeit',  ua:'прийом їжі',    ex:'«Das Mittagessen ist die wichtigste Mahlzeit des Tages.»' },
  { art:'der', w:'Kummerspeck', ua:'жир від смутку', ex:'«Nach der Trennung — pure Kummerspeck.»' },
  { art:'die', w:'Fernweh',   ua:'туга за мандрами', ex:'«Ich hab schon wieder Fernweh!»' },
  { art:'das', w:'Gericht',   ua:'страва',       ex:'«Mein Lieblingsgericht ist Pasta.»' },
  { art:'der', w:'Feierabend', ua:'кінець роб. дня', ex:'«Endlich Feierabend — Prost! 🍻»' },
];
let srsI = 0;
function srsReveal(){
  document.getElementById('srsAnswer').classList.add('show');
  document.getElementById('srsReveal').style.display = 'none';
  document.getElementById('srsRate').style.display = 'grid';
}
function srsNext(rating){
  srsI = (srsI + 1) % srsQueue.length;
  const w = srsQueue[srsI];
  document.getElementById('srsArt').textContent = w.art;
  document.getElementById('srsWord').textContent = w.w;
  document.querySelector('.srs-ua').textContent = w.ua;
  document.querySelector('.srs-ex').textContent = w.ex;
  document.getElementById('srsAnswer').classList.remove('show');
  document.getElementById('srsReveal').style.display = '';
  document.getElementById('srsRate').style.display = 'none';
  document.getElementById('srsCount').textContent = `${srsI + 1} / 18`;
}

/* view toggles for woerter list */
document.querySelectorAll('.view-toggle .view-btn').forEach(b => {
  if(b.closest('#viewToggle')) return; // handled in themen
  b.addEventListener('click', () => {
    b.parentElement.querySelectorAll('.view-btn').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
  });
});
