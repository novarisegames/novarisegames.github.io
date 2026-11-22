/* Página del escaparate de creadores (ES: /comunidad/, EN: /en/community/) */
(function(){
  const LANG = (document.documentElement.lang||'es').slice(0,2)==='en' ? 'en' : 'es';
  const BASE = document.documentElement.dataset.base || '';
  const MAIL = 'novarisegames26@gmail.com';
  const tr = (o,k) => (LANG==='en' && o[k+'_en']!=null) ? o[k+'_en'] : o[k];
  const T = {
    es:{ visit:'Ver el juego →', added:'Añadido el', subj:'Propuesta para el escaparate',
         ok:'Se ha abierto tu programa de correo con la propuesta. Si no se ha abierto, copia el texto de abajo y envíalo a '+MAIL+'.',
         copied:'¡Texto copiado! Pégalo en un correo a '+MAIL+'.', copyFail:'No se ha podido copiar. Selecciona el texto y cópialo a mano.',
         need:'Rellena los campos obligatorios y acepta las normas.' },
    en:{ visit:'See the game →', added:'Added on', subj:'Creator showcase submission',
         ok:'Your email app has opened with the submission. If it did not, copy the text below and send it to '+MAIL+'.',
         copied:'Text copied! Paste it into an email to '+MAIL+'.', copyFail:'Could not copy. Select the text and copy it manually.',
         need:'Please fill in the required fields and accept the rules.' }
  }[LANG];
  const esc = s => String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const count = ev => { try{ window.goatcounter && window.goatcounter.count && window.goatcounter.count({path:ev,title:ev+' ('+LANG+')',event:true}); }catch(_){} };

  // Escaparate
  const grid = document.getElementById('cmGrid'), empty = document.getElementById('cmEmpty');
  const games = window.COMUNIDAD || [];
  if(!games.length){ empty.hidden = false; grid.hidden = true; }
  else {
    const fmt = f => { try{ return new Date(f+'T12:00:00').toLocaleDateString(LANG==='en'?'en-GB':'es-ES',{day:'numeric',month:'long',year:'numeric'}); }catch(_){ return f; } };
    grid.innerHTML = games.map(g => `
      <article class="cm-card">
        <a class="cm-art" href="${esc(g.enlace)}" target="_blank" rel="noopener nofollow ugc" data-cm="${esc(g.nombre)}">
          ${g.imagen ? `<img src="${esc(BASE+g.imagen)}" alt="${esc(g.nombre)}" loading="lazy" width="630" height="500">` : `<span class="cm-noimg">${esc(g.nombre)}</span>`}
        </a>
        <div class="cm-body">
          <h3>${esc(g.nombre)}</h3>
          <p class="cm-by">${LANG==='en'?'by':'de'} ${esc(g.creador)}</p>
          <p>${esc(tr(g,'texto'))}</p>
          <div class="meta">${[tr(g,'genero'),tr(g,'plataforma'),tr(g,'precio')].filter(Boolean).map(c=>`<span class="chip">${esc(c)}</span>`).join('')}</div>
          <div class="cm-foot">
            <a class="follow" href="${esc(g.enlace)}" target="_blank" rel="noopener nofollow ugc" data-cm="${esc(g.nombre)}">${T.visit}</a>
            ${g.fecha?`<small>${T.added} ${esc(fmt(g.fecha))}</small>`:''}
          </div>
        </div>
      </article>`).join('');
    grid.addEventListener('click', e => { const a=e.target.closest('a[data-cm]'); if(a) count('comunidad-visita-'+a.dataset.cm.toLowerCase().replace(/[^a-z0-9]+/g,'-')); });
  }

  // Formulario de propuesta (genera un correo; la web no guarda nada)
  const form = document.getElementById('cmForm'), out = document.getElementById('cmOut'), txt = document.getElementById('cmText'), msg = document.getElementById('cmMsg');
  const L = LANG==='en'
    ? {game:'Game',creator:'Creator / studio',link:'Link',genre:'Genre',platform:'Platform',price:'Price',desc:'Description',image:'Cover image',email:'Contact email',note:'Cover image: attach it to this email (630×500 ideal) or paste a link above.'}
    : {game:'Juego',creator:'Creador / estudio',link:'Enlace',genre:'Género',platform:'Plataforma',price:'Precio',desc:'Descripción',image:'Imagen de portada',email:'Correo de contacto',note:'Imagen de portada: adjúntala a este correo (630×500 ideal) o pega un enlace arriba.'};
  function build(){
    const v = id => (document.getElementById(id).value||'').trim();
    return [
      `${L.game}: ${v('cmNombre')}`,
      `${L.creator}: ${v('cmCreador')}`,
      `${L.link}: ${v('cmEnlace')}`,
      `${L.genre}: ${v('cmGenero')}`,
      `${L.platform}: ${v('cmPlataforma')}`,
      `${L.price}: ${v('cmPrecio')}`,
      `${L.image}: ${v('cmImagen')||'—'}`,
      `${L.email}: ${v('cmEmail')}`,
      '',
      `${L.desc}:`,
      v('cmTexto'),
      '',
      L.note,
      LANG==='en' ? 'I confirm I am the creator of this game (or have the rights to present it) and I accept the showcase rules.' : 'Confirmo que soy el creador de este juego (o tengo derechos para presentarlo) y acepto las normas del escaparate.'
    ].join('\n');
  }
  form.addEventListener('submit', e => {
    e.preventDefault();
    if(!form.checkValidity()){ msg.textContent = T.need; msg.className='cm-msg err'; form.reportValidity && form.reportValidity(); return; }
    const body = build(); txt.value = body; out.hidden = false;
    const nombre = (document.getElementById('cmNombre').value||'').trim();
    const href = 'mailto:'+MAIL+'?subject='+encodeURIComponent(T.subj+': '+nombre)+'&body='+encodeURIComponent(body);
    msg.textContent = T.ok; msg.className='cm-msg ok';
    count('comunidad-propuesta');
    try{ window.location.href = href; }catch(_){}
  });
  document.getElementById('cmCopy').addEventListener('click', async () => {
    try{ await navigator.clipboard.writeText(txt.value); msg.textContent = T.copied; msg.className='cm-msg ok'; }
    catch(_){ txt.focus(); txt.select(); msg.textContent = T.copyFail; msg.className='cm-msg err'; }
  });
})();
