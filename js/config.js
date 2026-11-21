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

/* Añade aquí cada nuevo proyecto. status: "live" | "dev" | "soon" */
window.PROYECTOS = [
  { titulo:"Reinos de Leyenda", texto:"Aventura épica de fantasía. Nuestro primer gran lanzamiento.", status:"live", chips:["Aventura","Fantasía","PC"], arte:"reinos", accion:"comprar" },
  { titulo:"Proyecto Astra", texto:"Exploración espacial y supervivencia entre estrellas lejanas.", status:"dev", chips:["Exploración","Ciencia ficción"], arte:"astra", accion:"avisar" },
  { titulo:"Próximo proyecto", texto:"Algo nuevo se está gestando en el estudio. Muy pronto, más detalles.", status:"soon", chips:["Por anunciar"], arte:"misterio", accion:"avisar" }
];
/* ========================================================= */
