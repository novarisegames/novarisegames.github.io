/* =========================================================
   CONFIGURACIÓN — edita solo esta parte
   Pega en "pago" el enlace de pago de cada edición
   (por ejemplo, un Payment Link de Stripe, Gumroad, itch.io
   o Lemon Squeezy). Esas plataformas cobran y envían la
   descarga automáticamente tras el pago.
   ========================================================= */
window.EDICIONES = {
  estandar:   { nombre:"Estándar",           precio:"14,99 €", nota:"Juego completo",            pago:"" },
  legendaria: { nombre:"Edición Legendaria", precio:"24,99 €", nota:"Juego + extras exclusivos", pago:"" },
  mecenas:    { nombre:"Mecenas",            precio:"39,99 €", nota:"Apoya al estudio",          pago:"" }
};

/* Añade aquí cada nuevo proyecto. status: "live" | "dev" | "soon"
   Usa "imagen" con la ruta de una imagen propia, o "arte" para una ilustración provisional. */
window.PROYECTOS = [
  { titulo:"Reinos de Leyenda", texto:"Estrategia fantástica por turnos. Nuestro primer gran lanzamiento.", status:"live", chips:["Estrategia","Por turnos","Fantasía"], imagen:"assets/img/portada/portada-es.webp", accion:"comprar" },
  { titulo:"Proyecto Astra", texto:"Exploración espacial y supervivencia entre estrellas lejanas.", status:"dev", chips:["Exploración","Ciencia ficción"], arte:"astra", accion:"avisar" },
  { titulo:"Próximo proyecto", texto:"Algo nuevo se está gestando en el estudio. Muy pronto, más detalles.", status:"soon", chips:["Por anunciar"], arte:"misterio", accion:"avisar" }
];
/* Héroes que aparecen en la galería. Las imágenes están en assets/img/heroes/
   (archivo.webp para la miniatura y archivo-grande.webp para el visor). */
window.HEROES = [
  { nombre:"Caballero del León Dorado",   reino:"Reino del León",      img:"caballero-leon" },
  { nombre:"Reina de Hielo",              reino:"Reino Glacial",       img:"reina-de-hielo" },
  { nombre:"Señor de la Guerra Volcánico",reino:"Tierras de Fuego",    img:"senor-volcanico" },
  { nombre:"Archimaga del Castillo Azul", reino:"Castillo Azul",       img:"archimaga-azul" },
  { nombre:"Rey del Desierto",            reino:"Reino de las Arenas", img:"rey-del-desierto" },
  { nombre:"Marea, Guardiana de las Mareas", reino:"Reino del Mar",    img:"marea-guardiana" },
  { nombre:"Guerrero del Norte",          reino:"Reino del Norte",     img:"guerrero-del-norte" },
  { nombre:"Arquera Élfica",              reino:"Bosque Élfico",       img:"arquera-elfica" },
  { nombre:"Guerrera del León Dorado",    reino:"Reino del León",      img:"guerrera-leon" },
  { nombre:"Aldric, el Guardabosques",    reino:"Bosque Élfico",       img:"guardabosques-flores" },
  { nombre:"Guardabosques y su corcel",   reino:"Bosque Élfico",       img:"guardabosques-caballo" },
  { nombre:"Caballero ante el Castillo",  reino:"Reino del León",      img:"caballero-castillo" }
];

/* Capturas de la sección "Así se juega". Las imágenes están en assets/img/capturas/
   (archivo.webp para la miniatura y archivo-grande.webp para la vista grande). */
window.CAPTURAS = [
  { img:"mapa-exploracion", texto:"Explorando el mapa con Aldric, el Guardabosques: recursos, hechizos y el diario de cada día." },
  { img:"mapa-tutorial",    texto:"El tutorial guiado enseña a capturar minas para conseguir recursos cada día." }
];
/* ========================================================= */
