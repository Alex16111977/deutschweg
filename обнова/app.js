/* DeutschWeg — home app.js */

/* ---------- theme ---------- */
const themeBtns = document.querySelectorAll('.theme-btn');
const savedTheme = localStorage.getItem('dw-theme') || 'light';
setTheme(savedTheme);
themeBtns.forEach(b => b.addEventListener('click', () => setTheme(b.dataset.t)));
function setTheme(t){
  document.body.dataset.theme = t;
  themeBtns.forEach(b => b.classList.toggle('active', b.dataset.t === t));
  localStorage.setItem('dw-theme', t);
}

/* ---------- reveal on scroll ---------- */
const io = new IntersectionObserver((es) => {
  es.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.12 });
document.querySelectorAll('.section, .card').forEach(el => { el.classList.add('reveal'); io.observe(el); });

/* ---------- speak ---------- */
function speak(t){
  try{
    const u = new SpeechSynthesisUtterance(t);
    u.lang = 'de-DE';
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  }catch(e){}
}
function saveWord(btn){ btn.textContent = '✓ gespeichert'; btn.style.background = 'var(--mint)'; }
function share(w){ navigator.clipboard && navigator.clipboard.writeText(w); alert('„' + w + '" — kopiert! 📋'); }

/* ---------- SWIPE DECK ---------- */
const swipeWords = [
  { art:'die', w:'Fernweh', ua:'туга за мандрами', ex:'Ich hab Fernweh!', emoji:'🌍' },
  { art:'der', w:'Feierabend', ua:'кінець робочого дня', ex:'Endlich Feierabend! 🍻', emoji:'🍻' },
  { art:'die', w:'Gemütlichkeit', ua:'затишок', ex:'Ah, deutsche Gemütlichkeit…', emoji:'🕯' },
  { art:'der', w:'Kummerspeck', ua:'«жир від смутку»', ex:'Nach dem Stress — Kummerspeck!', emoji:'🍫' },
  { art:'die', w:'Schadenfreude', ua:'зловтіха', ex:'Kleine Schadenfreude ist okay.', emoji:'😈' },
  { art:'das', w:'Zuckerbrot', ua:'пряник (метод)', ex:'Zuckerbrot und Peitsche.', emoji:'🍭' }
];
let swIdx = 0;
const stage = document.getElementById('swipeStage');
function renderSwipe(){
  if(!stage) return;
  stage.innerHTML = '';
  for(let i=0;i<3;i++){
    const wd = swipeWords[(swIdx+i) % swipeWords.length];
    const card = document.createElement('div');
    card.className = 'swipe-card';
    card.dataset.pos = i;
    card.innerHTML = `
      <div class="swipe-emoji">${wd.emoji}</div>
      <div>
        <div class="swipe-word"><span class="art">${wd.art}</span> ${wd.w}</div>
        <div class="swipe-ua">${wd.ua}</div>
        <div class="swipe-ex">${wd.ex}</div>
      </div>
      <span class="swipe-badge know">KENN ICH</span>
      <span class="swipe-badge skip">SKIP</span>`;
    stage.appendChild(card);
  }
  addSwipeListeners();
}
function addSwipeListeners(){
  const top = stage.querySelector('[data-pos="0"]');
  if(!top) return;
  let sx=0, sy=0, dx=0, dragging=false;
  const onDown = (e) => { dragging=true; top.classList.add('swipe-grab'); const p = e.touches? e.touches[0]:e; sx=p.clientX; sy=p.clientY; };
  const onMove = (e) => {
    if(!dragging) return;
    const p = e.touches? e.touches[0]:e;
    dx = p.clientX - sx;
    const dy = p.clientY - sy;
    const rot = dx/20;
    top.style.transform = `translate(${dx}px, ${dy}px) rotate(${rot}deg)`;
    const yes = top.querySelector('.swipe-badge.know');
    const no  = top.querySelector('.swipe-badge.skip');
    if(dx > 20){ yes.style.opacity = Math.min(1, dx/120); no.style.opacity = 0; }
    else if(dx < -20){ no.style.opacity = Math.min(1, -dx/120); yes.style.opacity = 0; }
    else { yes.style.opacity = 0; no.style.opacity = 0; }
  };
  const onUp = () => {
    if(!dragging) return;
    dragging=false; top.classList.remove('swipe-grab');
    if(dx > 100) fling(1);
    else if(dx < -100) fling(-1);
    else top.style.transform='';
  };
  top.addEventListener('pointerdown', onDown);
  window.addEventListener('pointermove', onMove);
  window.addEventListener('pointerup', onUp);
}
function fling(dir){
  const top = stage.querySelector('[data-pos="0"]');
  if(!top) return;
  top.classList.add(dir > 0 ? 'out-right' : 'out-left');
  setTimeout(() => { swIdx++; renderSwipe(); }, 260);
}
renderSwipe();
document.getElementById('swYes')?.addEventListener('click', () => fling(1));
document.getElementById('swNo')?.addEventListener('click', () => fling(-1));

/* ---------- FLIP ---------- */
const flipCards = [
  { f:'der Kater', b:'кіт / похмілля', ex:'«Nach der Party hatte ich einen Kater.»' },
  { f:'die Eselsbrücke', b:'мнемоніка', ex:'«Das ist eine gute Eselsbrücke!»' },
  { f:'das Fingerspitzen­gefühl', b:'тонке чуття', ex:'«Sie hat Fingerspitzengefühl.»' },
  { f:'die Torschluss­panik', b:'паніка поспіху', ex:'«Mit 30 kam die Torschlusspanik.»' },
];
let flipIdx = 0;
const fi = document.getElementById('flipInner');
const fDots = document.getElementById('flipDots');
function renderFlip(){
  const ff = document.getElementById('flipFront');
  if(!ff) return;
  ff.textContent = flipCards[flipIdx].f;
  document.getElementById('flipBack').textContent = flipCards[flipIdx].b;
  document.getElementById('flipEx').textContent = flipCards[flipIdx].ex;
  if(fDots) fDots.innerHTML = flipCards.map((_,i)=>`<span class="flip-dot ${i===flipIdx?'active':''}"></span>`).join('');
}
renderFlip();
fi?.parentElement.addEventListener('click', (e) => {
  if(fi.classList.contains('flipped')){
    fi.classList.remove('flipped');
    setTimeout(() => { flipIdx = (flipIdx+1) % flipCards.length; renderFlip(); }, 600);
  } else {
    fi.classList.add('flipped');
  }
});

/* ---------- JOKE ---------- */
const jokes = [
  { q:'Warum nimmt der Bäcker keinen Schirm mit?', a:'Weil er Brötchen hat — und Brötchen regnet\'s nicht! 🥐☔' },
  { q:'Was sagt ein Mathematiker, wenn er verliebt ist?', a:'«Du bist meine Konstante im Chaos!» 💘' },
  { q:'Was ist grün und fährt durch die Stadt?', a:'Ein Rudel Gurken auf Klassenfahrt. 🥒🚌' },
  { q:'Wieso war der Computer müde?', a:'Er hatte einen harten Drive hinter sich. 💾' }
];
let jIdx = 0, jRev = false;
const jBub = document.getElementById('jokeBubble');
const jPun = document.getElementById('jokePunch');
document.querySelector('.c-comic')?.addEventListener('click', () => {
  if(!jRev){ jBub.textContent = jokes[jIdx].a; jPun.textContent = '👇 nochmal tappen für neuen Witz'; jRev = true; }
  else { jIdx = (jIdx+1) % jokes.length; jBub.textContent = jokes[jIdx].q; jPun.textContent = '👆 Tap für die Antwort'; jRev = false; }
});

/* ---------- TYPE RACE ---------- */
const raceWords = [
  { w:'Schmetterling', ua:'метелик' }, { w:'Eichhörnchen', ua:'білка' },
  { w:'Entschuldigung', ua:'вибачення' }, { w:'Streichholz', ua:'сірник' },
  { w:'Tschüss', ua:'бувай' }, { w:'Geschwindigkeit', ua:'швидкість' }
];
let rIdx = 0, rScore = 0, rStart = 0, rTimerId, rTime = 8;
const rTarget = document.getElementById('raceTarget');
const rUa = document.getElementById('raceUa');
const rInput = document.getElementById('raceInput');
const rTimer = document.getElementById('raceTimer');
const rWpm = document.getElementById('raceWpm');
const rScoreEl = document.getElementById('raceScore');
function newRace(){
  if(!rTarget) return;
  const w = raceWords[rIdx % raceWords.length];
  rTarget.textContent = w.w; rUa.textContent = w.ua;
  rInput.value = ''; rInput.className = 'race-input';
  rStart = Date.now(); rTime = 8;
  clearInterval(rTimerId);
  rTimerId = setInterval(() => {
    rTime = Math.max(0, 8 - (Date.now()-rStart)/1000);
    rTimer.textContent = `⏱ ${rTime.toFixed(1)}s`;
    if(rTime <= 0){ clearInterval(rTimerId); rInput.classList.add('bad'); }
  }, 100);
}
rInput?.addEventListener('input', () => {
  const target = raceWords[rIdx % raceWords.length].w;
  if(rInput.value === target){
    clearInterval(rTimerId);
    rScore++;
    const dur = (Date.now()-rStart)/1000;
    const wpm = Math.round((target.length/5)/(dur/60));
    rWpm.textContent = `${wpm} wpm`;
    rScoreEl.textContent = `${rScore} / 5`;
    rIdx++;
    setTimeout(newRace, 600);
  }
});
newRace();

/* ---------- MEME ---------- */
const memes = [
  { top:'WENN DU ENDLICH', bot:'DATIV RICHTIG BENUTZT', face:'🥹' },
  { top:'ICH: ICH VERSTEHE DEUTSCH', bot:'DER KELLNER AUF BAYERISCH:', face:'💀' },
  { top:'3 ARTIKEL:', bot:'DER DIE DAS — AM ENDE IMMER FALSCH', face:'🤡' },
  { top:'WENN SIE SAGT «15 MIN»', bot:'UND DU 2 STD LERNST', face:'📈' },
  { top:'DEUTSCHE KOMPOSITA:', bot:'DONAUDAMPFSCHIFFFAHRTSGESELLSCHAFT', face:'🚢' }
];
let mIdx = 0;
function nextMeme(){
  mIdx = (mIdx+1) % memes.length;
  document.getElementById('memeTop').textContent = memes[mIdx].top;
  document.getElementById('memeBottom').textContent = memes[mIdx].bot;
  document.getElementById('memeFace').textContent = memes[mIdx].face;
}

/* ---------- STORIES MODAL ---------- */
const storyData = [
  { emoji:'🔥', title:'+12 Tage Streak', body:'Du bist on fire! 🎉 Die nächsten 3 Tage — und du bist in den Top 5%.', color:'#FF3B8A' },
  { emoji:'🥐', title:'Wort des Tages: Fernweh', body:'«die Fernweh» — туга за мандрами. Це почуття, коли все тіло тягне кудись у незвідане.', color:'#2D5EFF' },
  { emoji:'🎭', title:'Slang: krass', body:'«Krass!» = «нереально/офігенно». Young-German slang для реакції на ВСЕ.', color:'#C4F83C', ink:true },
  { emoji:'🤣', title:'Witz des Tages', body:'Was macht ein Pirat am Computer?\n\n— Er drückt die Enter-Taste! 🏴‍☠', color:'#FFD60A', ink:true },
  { emoji:'🎵', title:'Song mit Text', body:'Heute lernst du mit AnnenMayKantereit — «Barfuß am Klavier». 3 neue Wörter pro Minute.', color:'#7CE8B7', ink:true },
  { emoji:'📰', title:'Nachrichten easy', body:'Berlin: ÖPNV-Ticket jetzt nur 29€. Was heißt ÖPNV? → Öffentlicher Personennahverkehr. 🚌', color:'#C9B8FF', ink:true },
  { emoji:'💡', title:'Lern-Tipp', body:'Schreib 3 Post-its auf deutsche Dinge in deiner Wohnung. Tür. Kühlschrank. Spiegel. Das wars.', color:'#FFB38A', ink:true },
  { emoji:'🇩🇪', title:'Kultur-Fakt', body:'«Pünktlich wie die Maurer» — deutsche Redewendung. Um 7 ist um 7. Nicht 7:01.', color:'#FF3B8A' }
];
const modal = document.getElementById('storyModal');
const modalProg = document.getElementById('modalProg');
const modalContent = document.getElementById('modalContent');
const modalInner = modal?.querySelector('.modal');
if(modal){
let storyI = 0, storyTimer;
document.querySelectorAll('.story').forEach((el,i) => el.addEventListener('click', () => openStory(i)));
function openStory(i){
  storyI = i;
  modal.classList.add('open');
  renderStory();
}
function renderStory(){
  const s = storyData[storyI];
  const c = s.color;
  modalInner.style.background = `linear-gradient(160deg, ${c}, ${s.ink?'#0B0B0A':'#11102A'})`;
  modalInner.style.color = s.ink ? '#0B0B0A' : '#fff';
  modalContent.innerHTML = `
    <div style="font-size:96px;line-height:1;margin-top:40px">${s.emoji}</div>
    <div>
      <div style="font-family:'Space Grotesk';font-weight:700;font-size:36px;line-height:1.05;margin-bottom:14px;letter-spacing:-0.02em">${s.title}</div>
      <div style="font-size:17px;line-height:1.5;white-space:pre-line;opacity:.95">${s.body}</div>
    </div>`;
  modalProg.innerHTML = storyData.map((_,i)=>`<span class="${i<storyI?'done':(i===storyI?'active':'')}"></span>`).join('');
  clearTimeout(storyTimer);
  storyTimer = setTimeout(nextStory, 5000);
}
function nextStory(){
  if(storyI < storyData.length-1){ storyI++; renderStory(); }
  else closeStory();
}
function prevStory(){ if(storyI>0){ storyI--; renderStory(); } }
function closeStory(){ modal.classList.remove('open'); clearTimeout(storyTimer); }
document.getElementById('storyClose').addEventListener('click', closeStory);
document.getElementById('navLeft').addEventListener('click', prevStory);
document.getElementById('navRight').addEventListener('click', nextStory);
modal.addEventListener('click', (e) => { if(e.target === modal) closeStory(); });
} // end if(modal)
