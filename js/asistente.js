// Asistente de NovaRise Games: responde dudas frecuentes sin IA, sin cookies y sin enviar nada a ningún servidor.
// Para añadir o cambiar respuestas, edita la lista INT (palabras clave y respuestas en español e inglés).
(function(){
  const root=document.documentElement, LANG=(root.lang||'es').slice(0,2)==='en'?'en':'es', BASE=root.dataset.base||'';
  const HOME=LANG==='en'?BASE+'en/':BASE;
  const U={
    demoRL:BASE+'demo/', demoTB:BASE+'tidebound/demo/',
    pRL:HOME+(LANG==='en'?'realms-of-legend/':'reinos-de-leyenda/'), pTB:HOME+'tidebound/',
    itchRL:'https://novarisegames.itch.io/reinos-de-leyenda', itchTB:'https://novarisegames.itch.io/tidebound', itch:'https://novarisegames.itch.io',
    cronos:HOME+'#cronos', faq:HOME+'#faq', comunidad:HOME+(LANG==='en'?'community/':'comunidad/'), prensa:HOME+(LANG==='en'?'press/':'prensa/'),
    privacidad:HOME+(LANG==='en'?'privacy/':'privacidad/'), mail:'mailto:novarisegames26@gmail.com',
    fb:'https://www.facebook.com/novarisegames', ig:'https://www.instagram.com/novarise_games/', tt:'https://www.tiktok.com/@novarise_games'
  };
  const L=(es,en)=>LANG==='en'?en:es;
  // Intenciones: k = palabras clave (sin tildes), r = respuesta, b = botones [texto, enlace]
  const INT=[
    {id:'hola',k:['hola','buenas','buenos dias','buenas tardes','hey','hello','hi','good morning'],
     r:L('¡Hola! 👋 Soy el asistente de NovaRise Games. Pregúntame lo que quieras sobre nuestros juegos: demos gratis, precio, cómo comprar, en qué dispositivos se juegan…','Hi! 👋 I\'m the NovaRise Games assistant. Ask me anything about our games: free demos, price, how to buy, which devices they run on…')},
    {id:'demo',k:['demo','gratis','gratuito','probar','prueba','jugar gratis','free','try','trial','sin pagar'],
     r:L('Los dos juegos tienen <b>demo gratis en el navegador</b>, sin registrarte ni descargar nada:<br>• <b>Reinos de Leyenda</b>: los primeros 5 días de partida.<br>• <b>Tidebound</b>: 8 minutos en alta mar.','Both games have a <b>free browser demo</b>, no sign-up and nothing to download:<br>• <b>Realms of Legend</b>: the first 5 in-game days.<br>• <b>Tidebound</b>: 8 minutes at sea.'),
     b:[[L('▶ Demo de Reinos','▶ Realms demo'),U.demoRL],[L('▶ Demo de Tidebound','▶ Tidebound demo'),U.demoTB]]},
    {id:'precio',k:['precio','cuesta','cuanto','vale','coste','barato','caro','dolares','euros','price','cost','how much','expensive','cheap'],
     r:L('Cada juego completo cuesta <b>1,99 $</b> en itch.io. Es un <b>pago único</b>: las actualizaciones futuras están incluidas.','Each full game costs <b>$1.99</b> on itch.io. It\'s a <b>one-time payment</b>: future updates are included.'),
     b:[[L('Comprar Reinos','Buy Realms'),U.itchRL],[L('Comprar Tidebound','Buy Tidebound'),U.itchTB]]},
    {id:'comprar',k:['comprar','compra','adquirir','donde compro','como compro','itch','buy','purchase','get the game','descargar juego completo'],
     r:L('La compra se hace en nuestra página de <b>itch.io</b>. Al pagar, el juego queda en tu cuenta de itch.io (o te llega un enlace por correo si compras sin cuenta) y puedes jugarlo o descargarlo cuando quieras.','You buy it on our <b>itch.io</b> page. After paying, the game is added to your itch.io account (or you get a link by email if you buy without an account) and you can play or download it whenever you want.'),
     b:[['Reinos de Leyenda · 1,99 $',U.itchRL],['Tidebound · 1,99 $',U.itchTB]]},
    {id:'pago',k:['paypal','tarjeta','metodo de pago','metodos de pago','forma de pago','pagar con','visa','mastercard','payment','credit card','pay with'],
     r:L('Aceptamos los métodos que ofrece itch.io: <b>tarjeta de crédito o débito y PayPal</b>.','We accept the methods itch.io offers: <b>credit or debit card and PayPal</b>.')},
    {id:'updates',k:['actualizacion','actualizaciones','pagar otra vez','pagar de nuevo','update','updates','pay again','nueva version','parche'],
     r:L('No tendrás que pagar otra vez: es un pago único y las nuevas versiones que publiquemos en itch.io estarán disponibles en tu compra. Si sigues a NovaRise Games en itch.io, te avisará de cada actualización.','You won\'t pay again: it\'s a one-time payment and new versions we publish on itch.io are available with your purchase. Follow NovaRise Games on itch.io to be notified of each update.'),
     b:[[L('Seguir en itch.io','Follow on itch.io'),U.itch]]},
    {id:'rl',k:['reinos','leyenda','estrategia','por turnos','heroes','heroe','castillo','mapas','realms','legend','strategy','turn based','heroes'],
     r:L('<b>Reinos de Leyenda</b> es estrategia fantástica por turnos: 7 reinos, 14 héroes, 39 criaturas y 7 mapas, con una campaña de 6 misiones. Está en acceso anticipado y cuesta 1,99 $.','<b>Realms of Legend</b> is turn-based fantasy strategy: 7 realms, 14 heroes, 39 creatures and 7 maps, with a 6-mission campaign. It\'s in early access and costs $1.99.'),
     b:[[L('Ver el juego','See the game'),U.pRL],[L('▶ Demo gratis','▶ Free demo'),U.demoRL]]},
    {id:'tb',k:['tidebound','barco','barcos','mar','kraken','leviatan','pirata','piratas','naval','ship','sea','pirate','leviathan'],
     r:L('<b>Tidebound</b> es supervivencia en alta mar: tu barco dispara solo, tú navegas, recoges madera y lo evolucionas a través de 7 épocas, de una canoa a una nave del futuro. Jefes: el Kraken y el Leviatán. Cuesta 1,99 $.','<b>Tidebound</b> is survival on the open sea: your ship fires on its own, you sail, collect wood and evolve it through 7 eras, from a canoe to a ship of the future. Bosses: the Kraken and the Leviathan. It costs $1.99.'),
     b:[[L('Ver el juego','See the game'),U.pTB],[L('▶ Demo gratis','▶ Free demo'),U.demoTB]]},
    {id:'cronos',k:['cronos','city','ciudad','proximo juego','nuevo juego','proximamente','next game','upcoming','new game','en desarrollo'],
     r:L('<b>Cronos City</b> es nuestro tercer juego: construyes una ciudad y la haces avanzar a través de las eras. Está en desarrollo, todavía sin fecha ni precio. Te avisaremos en redes y en itch.io.','<b>Cronos City</b> is our third game: you build a city and lead it through the ages. It\'s in development, with no date or price yet. We\'ll announce it on social media and itch.io.'),
     b:[[L('Ver Cronos City','See Cronos City'),U.cronos]]},
    {id:'disp',k:['movil','celular','tablet','ipad','iphone','android','ordenador','pc','mac','portatil','navegador','chrome','safari','firefox','edge','requisitos','instalar','descargar','funciona en','mobile','phone','computer','browser','requirements','install','download','windows','linux'],
     r:L('Se juegan <b>en el navegador</b>, sin instalar nada: Chrome, Edge, Firefox o Safari actualizados, en ordenador, tablet o móvil. Si compras el juego, también puedes descargarlo desde itch.io.','They run <b>in your browser</b>, nothing to install: up-to-date Chrome, Edge, Firefox or Safari, on desktop, tablet or phone. If you buy a game, you can also download it from itch.io.')},
    {id:'idioma',k:['idioma','idiomas','ingles','espanol','castellano','portugues','frances','traduccion','language','languages','english','spanish','portuguese','french'],
     r:L('<b>Reinos de Leyenda</b>: español, inglés, portugués y francés.<br><b>Tidebound</b>: español e inglés.','<b>Realms of Legend</b>: Spanish, English, Portuguese and French.<br><b>Tidebound</b>: Spanish and English.')},
    {id:'ctrl',k:['control','controles','mando','teclado','tactil','raton','gamepad','joystick','xbox','playstation','keyboard','mouse','touch','controller'],
     r:L('<b>Reinos de Leyenda</b> se juega con ratón o pantalla táctil.<br><b>Tidebound</b> admite teclado (WASD o flechas), mando y pantalla táctil.','<b>Realms of Legend</b> is played with mouse or touch.<br><b>Tidebound</b> supports keyboard (WASD or arrows), gamepad and touch.')},
    {id:'save',k:['guardar','guardado','partida guardada','progreso','perder la partida','save','saving','progress'],
     r:L('El progreso se <b>guarda automáticamente en tu navegador</b>. Si borras los datos del navegador o cambias de dispositivo, la partida no se conserva.','Progress is <b>saved automatically in your browser</b>. If you clear your browser data or switch devices, the save won\'t carry over.')},
    {id:'ea',k:['terminado','acabado','completo','acceso anticipado','early access','finished','complete','beta'],
     r:L('Reinos de Leyenda está en <b>acceso anticipado</b>: ya puedes jugar la campaña de 6 misiones y seguimos añadiendo contenido, equilibrando y corrigiendo errores. Si lo compras ahora, recibes cada versión nueva sin pagar más.','Realms of Legend is in <b>early access</b>: you can already play the 6-mission campaign, and we keep adding content, balancing and fixing bugs. Buy it now and you get every new version at no extra cost.')},
    {id:'ayuda',k:['reembolso','devolucion','devolver','no me llega','no funciona','no carga','error','bug','fallo','problema','ayuda','soporte','refund','not working','broken','help','support','issue','crash'],
     r:L('Siento el problema. Escríbenos a <b>novarisegames26@gmail.com</b> contando qué juego, qué dispositivo y navegador usas y qué pasa, y te respondemos lo antes posible. Los pagos y reembolsos los gestiona itch.io.','Sorry about that. Email us at <b>novarisegames26@gmail.com</b> with the game, your device and browser, and what happens, and we\'ll reply as soon as we can. Payments and refunds are handled by itch.io.'),
     b:[[L('✉ Escribir un correo','✉ Send an email'),U.mail]]},
    {id:'contacto',k:['contacto','contactar','email','correo','escribir','hablar con','contact','mail','write to'],
     r:L('Puedes escribirnos a <b>novarisegames26@gmail.com</b>. También estamos en Facebook, Instagram y TikTok.','You can email us at <b>novarisegames26@gmail.com</b>. We\'re also on Facebook, Instagram and TikTok.'),
     b:[[L('✉ Escribir un correo','✉ Send an email'),U.mail]]},
    {id:'redes',k:['redes','facebook','instagram','tiktok','seguir','siganme','social','follow','novedades','noticias','news'],
     r:L('¡Síguenos para ver arte, novedades y avances! Publicamos varias veces por semana.','Follow us for art, news and sneak peeks! We post several times a week.'),
     b:[['Facebook',U.fb],['Instagram',U.ig],['TikTok',U.tt]]},
    {id:'prensa',k:['prensa','periodista','youtuber','streamer','kit de prensa','presskit','press','journalist','review','analisis'],
     r:L('En el <b>kit de prensa</b> tienes logos, capturas, portadas y datos de los juegos. Para claves o entrevistas, escríbenos.','Our <b>press kit</b> has logos, screenshots, covers and game facts. For keys or interviews, email us.'),
     b:[[L('Kit de prensa','Press kit'),U.prensa],[L('✉ Correo','✉ Email'),U.mail]]},
    {id:'creadores',k:['escaparate','mi juego','publicar mi juego','creador','creadores','desarrollador','indie dev','showcase','my game','developer','submit'],
     r:L('Si haces juegos indie, puedes proponer el tuyo <b>gratis</b> en nuestro escaparate de creadores.','If you make indie games, you can submit yours <b>for free</b> to our creator showcase.'),
     b:[[L('Escaparate de creadores','Creator showcase'),U.comunidad]]},
    {id:'estudio',k:['quienes sois','quien eres','estudio','novarise','sobre vosotros','empresa','who are you','about','studio'],
     r:L('NovaRise Games es un <b>estudio independiente de videojuegos</b> de España. Hemos publicado Reinos de Leyenda y Tidebound, y estamos creando Cronos City.','NovaRise Games is an <b>independent game studio</b> from Spain. We\'ve released Realms of Legend and Tidebound, and we\'re building Cronos City.')},
    {id:'privacidad',k:['cookies','privacidad','datos personales','privacy','tracking'],
     r:L('La web <b>no usa cookies</b>. Este asistente funciona dentro de tu navegador y no guarda ni envía lo que escribes.','This site uses <b>no cookies</b>. This assistant runs inside your browser and doesn\'t store or send what you type.'),
     b:[[L('Política de privacidad','Privacy policy'),U.privacidad]]},
    {id:'ia',k:['eres una ia','eres un bot','inteligencia artificial','chatgpt','robot','are you ai','are you a bot','human'],
     r:L('Soy un asistente automático sencillo, sin inteligencia artificial: respondo a las dudas más habituales. Para cualquier otra cosa, escribe a novarisegames26@gmail.com y te responde una persona.','I\'m a simple automatic assistant, not an AI: I answer the most common questions. For anything else, email novarisegames26@gmail.com and a person will reply.'),
     b:[[L('✉ Escribir un correo','✉ Send an email'),U.mail]]},
    {id:'gracias',k:['gracias','genial','perfecto','vale','ok','adios','hasta luego','thanks','thank you','great','bye'],
     r:L('¡A ti! Si quieres, prueba una demo gratis. ¡Que disfrutes! 🎮','You\'re welcome! Feel free to try a free demo. Have fun! 🎮')}
  ];
  const CHIPS=L(
    [['¿Cómo juego gratis?','demo'],['¿Cuánto cuesta?','precio'],['¿Cómo compro?','comprar'],['¿Funciona en el móvil?','disp'],['Idiomas','idioma'],['Contactar','contacto']],
    [['How do I play for free?','demo'],['How much is it?','precio'],['How do I buy?','comprar'],['Does it work on mobile?','disp'],['Languages','idioma'],['Contact','contacto']]);
  const norm=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9ñ\s]/g,' ').replace(/\s+/g,' ').trim();
  function lev(a,b){if(Math.abs(a.length-b.length)>1)return 9;const d=[...Array(b.length+1).keys()];for(let i=1;i<=a.length;i++){let p=d[0];d[0]=i;for(let j=1;j<=b.length;j++){const t=d[j];d[j]=Math.min(d[j]+1,d[j-1]+1,p+(a[i-1]===b[j-1]?0:1));p=t}}return d[b.length]}
  function match(q){
    const n=' '+norm(q)+' ', words=n.trim().split(' ');
    let best=null,bs=0;
    INT.forEach(it=>{let s=0;it.k.forEach(k0=>{const k=norm(k0);
      if(k.includes(' ')){ if(n.includes(' '+k+' ')) s+=3; }
      else if(n.includes(' '+k+' ')) s+=2;
      else if(k.length>=4 && words.some(w=>w.length>=4&&(w.startsWith(k)||k.startsWith(w)&&w.length>=5))) s+=1.5;
      else if(k.length>=5 && words.some(w=>w.length>=5&&lev(w,k)<=1)) s+=1;});
      if(it.id==='hola'||it.id==='gracias') s*=.6;
      if(s>bs){bs=s;best=it}});
    return bs>=1?best:null;
  }
  // ---- interfaz ----
  const ico='<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M8.5 12h.01M12 12h.01M15.5 12h.01"/></svg>';
  const w=document.createElement('div'); w.className='asis'; w.innerHTML=`
    <button class="asis-fab" type="button" aria-expanded="false" aria-controls="asisPanel" aria-label="${L('Abrir el asistente','Open the assistant')}">${ico}<span>${L('¿Dudas?','Questions?')}</span></button>
    <div class="asis-panel" id="asisPanel" role="dialog" aria-label="${L('Asistente de NovaRise Games','NovaRise Games assistant')}" hidden>
      <div class="asis-head"><img src="${BASE}assets/logo/simbolo-192.png" alt="" width="36" height="36"><div><b>${L('Asistente NovaRise','NovaRise assistant')}</b><small>${L('Respuestas automáticas · sin IA','Automatic answers · no AI')}</small></div><button type="button" class="asis-x" aria-label="${L('Cerrar','Close')}">×</button></div>
      <div class="asis-log" aria-live="polite"></div>
      <div class="asis-chips"></div>
      <form class="asis-form"><input type="text" maxlength="200" placeholder="${L('Escribe tu pregunta…','Type your question…')}" aria-label="${L('Tu pregunta','Your question')}" autocomplete="off"><button type="submit" aria-label="${L('Enviar','Send')}">➤</button></form>
    </div>`;
  document.body.appendChild(w);
  const fab=w.querySelector('.asis-fab'), panel=w.querySelector('.asis-panel'), log=w.querySelector('.asis-log'), chips=w.querySelector('.asis-chips'), form=w.querySelector('form'), inp=form.querySelector('input');
  const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const ext=u=>/^https?:/.test(u)?' target="_blank" rel="noopener"':'';
  const gc=ev=>{try{window.goatcounter&&window.goatcounter.count&&window.goatcounter.count({path:ev,title:ev+' ('+LANG+')',event:true})}catch(_){}};
  function say(html,who,btns){const m=document.createElement('div');m.className='asis-msg '+who;m.innerHTML=html+(btns&&btns.length?'<div class="asis-btns">'+btns.map(b=>`<a href="${b[1]}"${ext(b[1])}>${b[0]}</a>`).join('')+'</div>':'');log.appendChild(m);log.scrollTop=log.scrollHeight}
  function showChips(){chips.innerHTML=CHIPS.map(c=>`<button type="button" data-i="${c[1]}">${c[0]}</button>`).join('')}
  function answer(it){setTimeout(()=>say(it.r,'bot',it.b),250)}
  function ask(q){q=q.trim();if(!q)return;say(esc(q),'me');const it=match(q);
    if(it){answer(it);gc('asistente-respondida')}
    else{gc('asistente-sin-respuesta');setTimeout(()=>say(L('No estoy seguro de haberte entendido 🤔 Prueba con otras palabras o elige un tema. Si es algo concreto, escríbenos y te responde una persona.','I\'m not sure I understood 🤔 Try other words or pick a topic. For anything specific, email us and a person will reply.'),'bot',[[L('✉ novarisegames26@gmail.com','✉ novarisegames26@gmail.com'),U.mail],[L('Preguntas frecuentes','FAQ'),U.faq]]),250)}}
  let started=false;
  function open(){panel.hidden=false;fab.setAttribute('aria-expanded','true');w.classList.add('on');
    if(!started){started=true;say(INT[0].r,'bot');showChips();gc('asistente-abierto')}
    setTimeout(()=>inp.focus({preventScroll:true}),50)}
  function close(){panel.hidden=true;fab.setAttribute('aria-expanded','false');w.classList.remove('on');fab.focus()}
  fab.onclick=()=>panel.hidden?open():close();
  w.querySelector('.asis-x').onclick=close;
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden)close()});
  form.onsubmit=e=>{e.preventDefault();ask(inp.value);inp.value=''};
  chips.onclick=e=>{const b=e.target.closest('button');if(!b)return;const it=INT.find(x=>x.id===b.dataset.i);say(esc(b.textContent),'me');answer(it)};
})();
