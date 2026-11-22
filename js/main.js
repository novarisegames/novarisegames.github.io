const ARTES_DEF = () => ({
  reinos:`<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="pa" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a1240"/><stop offset=".7" stop-color="#c4603f"/><stop offset="1" stop-color="#f2b66a"/></linearGradient></defs><rect width="320" height="200" fill="url(#pa)"/><circle cx="160" cy="140" r="60" fill="#ffd98a" opacity=".5"/><g fill="#170c1e"><rect x="120" y="100" width="80" height="100"/><rect x="108" y="80" width="22" height="120"/><polygon points="105,80 119,50 133,80"/><rect x="190" y="80" width="22" height="120"/><polygon points="187,80 201,50 215,80"/><rect x="148" y="64" width="24" height="136"/><polygon points="145,64 160,20 175,64"/></g><path d="M0 170 L80 150 L160 175 L240 150 L320 168 V200 H0Z" fill="#100816"/><text x="160" y="190" text-anchor="middle" font-family="Cinzel,serif" font-weight="900" font-size="15" fill="#ffd98a" letter-spacing="2">REINOS DE LEYENDA</text></svg>`,
  astra:`<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice"><defs><radialGradient id="pb" cx=".7" cy=".3" r=".8"><stop offset="0" stop-color="#2a4fa0"/><stop offset="1" stop-color="#05061a"/></radialGradient></defs><rect width="320" height="200" fill="url(#pb)"/><g fill="#fff"><circle cx="30" cy="30" r="1"/><circle cx="90" cy="60" r="1.3"/><circle cx="260" cy="150" r="1"/><circle cx="200" cy="30" r="1.2"/><circle cx="50" cy="160" r="1"/><circle cx="140" cy="20" r=".8"/></g><circle cx="220" cy="80" r="44" fill="#38d6ff" opacity=".85"/><ellipse cx="220" cy="80" rx="72" ry="14" fill="none" stroke="#c9f4ff" stroke-width="2" opacity=".7"/><path d="M60 140 l30 -10 l10 -20 l8 22 l26 6 l-26 6 l-8 22 l-10 -20z" fill="#e3e8ff"/></svg>`,
  olas:`<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="po" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b2a4a"/><stop offset=".55" stop-color="#11507a"/><stop offset="1" stop-color="#0a2238"/></linearGradient></defs><rect width="320" height="200" fill="url(#po)"/><circle cx="48" cy="40" r="18" fill="#ffe3a3" opacity=".9"/><path d="M0 120 q20 -14 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 V200 H0Z" fill="#1a6f9e" opacity=".8"/><path d="M0 142 q20 -14 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 V200 H0Z" fill="#145a84"/><path d="M0 166 q20 -14 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 V200 H0Z" fill="#0d3f60"/><g fill="none" stroke="#bfefff" stroke-width="2" opacity=".6"><path d="M30 120 q10 -7 20 0"/><path d="M190 142 q10 -7 20 0"/><path d="M110 166 q10 -7 20 0"/></g><text x="160" y="96" text-anchor="middle" font-family="Cinzel,serif" font-weight="700" font-size="26" fill="#eaf8ff" letter-spacing="3">TIDEBOUND</text></svg>`,
  misterio:`<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice"><rect width="320" height="200" fill="#0d0b18"/><circle cx="160" cy="100" r="80" fill="#7b5cff" opacity=".18"/><circle cx="160" cy="100" r="46" fill="#7b5cff" opacity=".25"/><g transform="translate(160 100) scale(2.2) translate(-20 -20)"><path d="M20 2 L23.5 16.5 L38 20 L23.5 23.5 L20 38 L16.5 23.5 L2 20 L16.5 16.5Z" fill="#c9b8ff"/></g><text x="160" y="182" text-anchor="middle" font-family="Sora,sans-serif" font-size="11" fill="#8f86b8" letter-spacing="4">${LANG==='en'?'COMING SOON':'PRÓXIMAMENTE'}</text></svg>`
});
// Idioma y textos de la interfaz
const LANG = (document.documentElement.lang||'es').slice(0,2)==='en' ? 'en' : 'es';
const BASE = document.documentElement.dataset.base || '';   // '../' en /en/
const T = {
  es:{ live:"Disponible", early:"Acceso anticipado", dev:"En desarrollo", soon:"Próximamente",
       buy:"Comprar ahora →", follow:"Seguir a NovaRise Games →", all:"Todos", view:"Ver a", of:"de",
       shot:"Ver captura", },
  en:{ live:"Available", early:"Early access", dev:"In development", soon:"Coming soon",
       buy:"Buy now →", follow:"Follow NovaRise Games →", all:"All", view:"View", of:"of",
       shot:"View screenshot", }
}[LANG];
const tr = (o,k) => (LANG==='en' && o[k+'_en']!=null) ? o[k+'_en'] : o[k];
const reinoN = r => LANG==='en' ? ((window.REINOS_EN||{})[r]||r) : r;
const ST = { live:[T.live,"st-live"], early:[T.early,"st-live"], dev:[T.dev,"st-dev"], soon:[T.soon,"st-soon"] };

const ARTES = ARTES_DEF();

// Proyectos
const grid = document.getElementById('projGrid');
PROYECTOS.forEach(p=>{
  const [lbl,cls] = ST[p.status];
  const el = document.createElement('article');
  el.className='proj reveal';
  const img = tr(p,'imagen');
  const arte = img ? `<img src="${BASE+img}" alt="${tr(p,'titulo')}" loading="lazy">` : (ARTES[p.arte]||ARTES.misterio);
  el.innerHTML = `<div class="art">${arte}<span class="status ${cls}">${lbl}</span></div>
    <div class="body"><h4>${tr(p,'titulo')}</h4><p>${tr(p,'texto')}</p>
    <div class="meta">${(tr(p,'chips')||[]).map(c=>`<span class="chip">${c}</span>`).join('')}</div>
    ${p.enlaces ? `<div class="proj-links">${p.enlaces.map((l,k)=>`<a class="follow${k?' sec':''}" href="${l.ancla?l.url:(l.interno?BASE+l.url:l.url)}"${(l.interno||l.ancla)?'':' target="_blank" rel="noopener"'}>${tr(l,'texto')} →</a>`).join('')}</div>`
                : `<button class="follow" data-act="${p.accion}">${p.accion==='comprar'?T.buy:T.follow}</button>`}</div>`;
  grid.appendChild(el);
});
grid.addEventListener('click',e=>{
  const b=e.target.closest('.follow'); if(!b) return;
  if(b.dataset.act==='comprar') window.open(window.TIENDA.url,'_blank','noopener');
  else document.getElementById('seguir').scrollIntoView({behavior:'smooth',block:'center'});
});

// Visor de imágenes (héroes y capturas)
const lb=document.getElementById('lightbox'), lbImg=document.getElementById('lbImg'), lbFig=lb.querySelector('figure');
let lbList=[], hi=0;
function showLb(i){
  hi=(i+lbList.length)%lbList.length; const it=lbList[hi];
  lbImg.src=it.src; lbImg.alt=it.title||it.sub||'';
  document.getElementById('lbName').textContent=it.title||'';
  document.getElementById('lbRealm').textContent=it.sub||'';
  const bio=document.getElementById('lbBio'); bio.textContent=it.bio||''; bio.style.display=it.bio?'':'none';
  const multi=lbList.length>1;
  document.getElementById('lbPrev').style.display=multi?'':'none';
  document.getElementById('lbNext').style.display=multi?'':'none';
}
function openLb(list,i,wide){ lbList=list; lbFig.classList.toggle('wide',!!wide); showLb(i); lb.classList.add('open'); document.body.style.overflow='hidden'; }
function closeLb(){ lb.classList.remove('open'); document.body.style.overflow=''; }
document.getElementById('lbClose').onclick=closeLb;
document.getElementById('lbPrev').onclick=()=>showLb(hi-1);
document.getElementById('lbNext').onclick=()=>showLb(hi+1);
lb.addEventListener('click',e=>{ if(e.target===lb) closeLb(); });
document.addEventListener('keydown',e=>{
  if(!lb.classList.contains('open')) return;
  if(e.key==='Escape') closeLb();
  if(e.key==='ArrowLeft') showLb(hi-1);
  if(e.key==='ArrowRight') showLb(hi+1);
});

// Galería de héroes con filtro por reino
const heroGrid=document.getElementById('heroGrid'), heroFilters=document.getElementById('heroFilters'), HB=BASE+'assets/img/heroes/';
const HEROS=window.HEROES||[], RE=window.REINOS||{};
let heroList=[];
function renderHeroes(reino){
  const vis=HEROS.filter(h=>!reino||h.reino===reino);
  heroList=vis.map(h=>({src:HB+h.img+'-grande.webp',title:h.nombre,sub:tr(h,'clase')+' · '+reinoN(h.reino),bio:tr(h,'bio')}));
  heroGrid.innerHTML='';
  vis.forEach((h,i)=>{
    const b=document.createElement('button');
    b.className='hero-tile'; b.type='button'; b.style.setProperty('--rc',RE[h.reino]||'var(--gold)');
    b.setAttribute('aria-label',T.view+' '+h.nombre+', '+tr(h,'clase')+' '+T.of+' '+reinoN(h.reino));
    b.innerHTML=`<img src="${HB+h.img}.webp" alt="${h.nombre}" loading="lazy" width="560" height="560"><div class="cap"><em>${reinoN(h.reino)}</em><strong>${h.nombre}</strong><span>${tr(h,'clase')}</span></div>`;
    b.onclick=()=>openLb(heroList,i);
    heroGrid.appendChild(b);
  });
  heroFilters.querySelectorAll('button').forEach(f=>f.classList.toggle('on',(f.dataset.r||'')===(reino||'')));
}
const reinosUsados=[...new Set(HEROS.map(h=>h.reino))];
heroFilters.innerHTML=`<button type="button" data-r="">${T.all}</button>`+reinosUsados.map(r=>`<button type="button" data-r="${r}" style="--rc:${RE[r]||'var(--gold)'}"><i></i>${reinoN(r)}</button>`).join('');
heroFilters.addEventListener('click',e=>{const b=e.target.closest('button'); if(b) renderHeroes(b.dataset.r);});
renderHeroes('');

// Tidebound: épocas y jefes
const TBB=BASE+'assets/img/tidebound/';
const eraGrid=document.getElementById('eraGrid'), bossGrid=document.getElementById('bossGrid');
if(eraGrid){
  const ER=window.TB_ERAS||[], JF=window.TB_JEFES||[];
  const eraList=ER.map((e,i)=>({src:TBB+e.img+'-grande.webp',title:(i+1)+' · '+tr(e,'nombre'),sub:'',bio:tr(e,'texto')}));
  ER.forEach((e,i)=>{
    const li=document.createElement('li'); li.className='reveal';
    li.innerHTML=`<button type="button" class="era"><img src="${TBB+e.img}.webp" alt="${tr(e,'nombre')}: ${tr(e,'texto')}" loading="lazy" width="640" height="360"><span class="era-n">${i+1}</span><span class="era-cap"><strong>${tr(e,'nombre')}</strong><small>${tr(e,'texto')}</small></span></button>`;
    li.querySelector('button').onclick=()=>openLb(eraList,i,true);
    eraGrid.appendChild(li);
  });
  const bossList=JF.map(j=>({src:TBB+j.img+'-grande.webp',title:tr(j,'nombre'),sub:'',bio:tr(j,'texto')}));
  JF.forEach((j,i)=>{
    const b=document.createElement('button'); b.type='button'; b.className='boss reveal';
    b.innerHTML=`<img src="${TBB+j.img}.webp" alt="${tr(j,'nombre')}" loading="lazy" width="640" height="360"><span class="cap"><strong>${tr(j,'nombre')}</strong><small>${tr(j,'texto')}</small></span>`;
    b.onclick=()=>openLb(bossList,i,true); bossGrid.appendChild(b);
  });
}

// Mapas
const mapGrid=document.getElementById('mapGrid'), MB=BASE+'assets/img/mapas/', MAPS=window.MAPAS||[];
if(mapGrid){
  const mapList=MAPS.map(m=>({src:MB+m.img+'-grande.webp',title:tr(m,'nombre'),sub:'',bio:tr(m,'texto')}));
  MAPS.forEach((m,i)=>{
    const b=document.createElement('button'); b.type='button'; b.className='map-tile reveal';
    b.setAttribute('aria-label',tr(m,'nombre'));
    b.innerHTML=`<img src="${MB+m.img}.webp" alt="${tr(m,'nombre')}" loading="lazy" width="600" height="600">${tr(m,'etiqueta')?`<em class="map-tag${m.etiqueta==='Original'?' orig':''}">${tr(m,'etiqueta')}</em>`:''}<div class="cap"><strong>${tr(m,'nombre')}</strong><span>${tr(m,'texto')}</span></div>`;
    b.onclick=()=>openLb(mapList,i,true);
    mapGrid.appendChild(b);
  });
  if(!MAPS.length) document.getElementById('mapas').style.display='none';
}

// Capturas "Así se juega"
const CB=BASE+'assets/img/capturas/', CAPS=window.CAPTURAS||[];
const capList=CAPS.map(c=>({src:CB+c.img+'-grande.webp',title:'',sub:tr(c,'texto')}));
const shotImg=document.getElementById('shotImg'), shotCap=document.getElementById('shotCap'), thumbs=document.getElementById('thumbs');
let ci=0;
function showShot(i){
  ci=i; const c=CAPS[i];
  shotImg.src=CB+c.img+'-grande.webp'; shotImg.alt=tr(c,'texto'); shotCap.textContent=tr(c,'texto');
  thumbs.querySelectorAll('.thumb').forEach((t,k)=>t.classList.toggle('on',k===i));
}
CAPS.forEach((c,i)=>{
  const t=document.createElement('button'); t.type='button'; t.className='thumb';
  t.setAttribute('aria-label',T.shot+' '+(i+1));
  t.innerHTML=`<img src="${CB+c.img}.webp" alt="" loading="lazy">`;
  t.onclick=()=>showShot(i); thumbs.appendChild(t);
});
if(CAPS.length){ showShot(0); if(CAPS.length<2) thumbs.style.display='none'; }
else document.getElementById('jugabilidad').style.display='none';
document.getElementById('shotMain').onclick=()=>openLb(capList,ci,true);

// Novedades (diario de desarrollo)
const newsList=document.getElementById('newsList');
if(newsList){
  const NEWS=window.NOVEDADES||[];
  const fmt=f=>{ try{ return new Date(f+'T12:00:00').toLocaleDateString(LANG==='en'?'en-GB':'es-ES',{day:'numeric',month:'long',year:'numeric'}); }catch(_){ return f; } };
  newsList.innerHTML=NEWS.map(n=>`<li class="reveal"><div class="tl-meta">${n.fecha?`<time datetime="${n.fecha}">${fmt(n.fecha)}</time>`:''}${tr(n,'etiqueta')?`<span class="tl-tag">${tr(n,'etiqueta')}</span>`:''}</div><h4>${tr(n,'titulo')}</h4><p>${tr(n,'texto')}</p></li>`).join('');
  if(!NEWS.length) document.getElementById('novedades').style.display='none';
}

// Tienda: todos los botones de compra apuntan al enlace de config.js
if(window.TIENDA&&window.TIENDA.url) document.querySelectorAll('a[data-buy]').forEach(a=>a.href=window.TIENDA.url);


// Navegación
const nav=document.getElementById('nav');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>30),{passive:true});
const links=document.getElementById('links');
document.getElementById('burger').onclick=()=>links.classList.toggle('open');
links.addEventListener('click',e=>{ if(e.target.closest('a')) links.classList.remove('open'); });

// Menús desplegables para elegir juego (demos y compra)
const closeDD=()=>document.querySelectorAll('.dd.open').forEach(x=>{x.classList.remove('open');x.querySelector('.dd-btn').setAttribute('aria-expanded','false');});
document.querySelectorAll('.dd').forEach(dd=>{
  const b=dd.querySelector('.dd-btn');
  b.addEventListener('click',e=>{ e.stopPropagation(); const abrir=!dd.classList.contains('open'); closeDD(); if(abrir){ dd.classList.add('open'); b.setAttribute('aria-expanded','true'); } });
});
document.addEventListener('click',e=>{ if(!e.target.closest('.dd')) closeDD(); });
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeDD(); });
document.getElementById('yr').textContent=new Date().getFullYear();

// Animaciones de entrada
const io=new IntersectionObserver(es=>es.forEach(x=>{ if(x.isIntersecting){ x.target.classList.add('in'); io.unobserve(x.target);} }),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Cielo estrellado
(function(){
  const c=document.getElementById('stars'), x=c.getContext('2d'); let W,H,S=[];
  function size(){ W=c.width=c.offsetWidth*devicePixelRatio; H=c.height=c.offsetHeight*devicePixelRatio;
    S=Array.from({length:140},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.4*devicePixelRatio+.3,p:Math.random()*6.28,s:.005+Math.random()*.02})); }
  function draw(){ x.clearRect(0,0,W,H); S.forEach(s=>{ s.p+=s.s; x.globalAlpha=.35+Math.sin(s.p)*.35; x.fillStyle='#fff'; x.beginPath(); x.arc(s.x,s.y,s.r,0,6.28); x.fill(); }); requestAnimationFrame(draw); }
  size(); addEventListener('resize',size); draw();
})();
