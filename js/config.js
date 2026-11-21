/* =========================================================
   CONFIGURACIÓN — edita solo esta parte
   ========================================================= */

/* Tienda: todos los botones de compra de la web llevan a este enlace */
window.TIENDA = {
  url: "https://novarisegames.itch.io/reinos-de-leyenda",
  precio: "1,99 $"
};

/* Añade aquí cada nuevo proyecto. status: "live" | "early" | "dev" | "soon"
   Usa "imagen" con la ruta de una imagen propia, o "arte" para una ilustración provisional. */
window.PROYECTOS = [
  { titulo:"Reinos de Leyenda", texto:"Estrategia fantástica por turnos. Ya jugable en acceso anticipado por 1,99 $, y sigue creciendo.", status:"early", chips:["Estrategia","Por turnos","Navegador"], imagen:"assets/img/portada/portada-es.webp", accion:"comprar" },
  { titulo:"Proyecto Astra", texto:"Exploración espacial y supervivencia entre estrellas lejanas.", status:"dev", chips:["Exploración","Ciencia ficción"], arte:"astra", accion:"avisar" },
  { titulo:"Próximo proyecto", texto:"Algo nuevo se está gestando en el estudio. Muy pronto, más detalles.", status:"soon", chips:["Por anunciar"], arte:"misterio", accion:"avisar" }
];
/* Reinos del juego y su color de acento */
window.REINOS = {
  "Alba Violeta":      "#b98cff",
  "Torre Azul":        "#5d8dff",
  "Fortaleza Bermeja": "#e5483d",
  "Corona de Hielo":   "#9fe3ff",
  "Ceniza Ardiente":   "#ff7a2f",
  "Puerto Sur":        "#4fb3e8",
  "Oasis Dorado":      "#f0c94a"
};

/* Héroes que aparecen en la galería. Las imágenes están en assets/img/heroes/
   (archivo.webp para la miniatura y archivo-grande.webp para el visor). */
window.HEROES = [
  { nombre:"Aldric",      clase:"Guardabosques",         reino:"Alba Violeta",      img:"guardabosques-flores" },
  { nombre:"Elowen",      clase:"Guardabosques",         reino:"Alba Violeta",      img:"arquera-elfica" },
  { nombre:"Selene",      clase:"Archimaga",             reino:"Torre Azul",        img:"archimaga-azul" },
  { nombre:"Roland",      clase:"Caballero",             reino:"Fortaleza Bermeja", img:"caballero-leon" },
  { nombre:"Brienne",     clase:"Caballera",             reino:"Fortaleza Bermeja", img:"guerrera-leon" },
  { nombre:"Isolde",      clase:"Hechicera de escarcha", reino:"Corona de Hielo",   img:"reina-de-hielo" },
  { nombre:"Bjorn",       clase:"Hechicero de escarcha",  reino:"Corona de Hielo",   img:"guerrero-del-norte" },
  { nombre:"Kharn",       clase:"Señor de la guerra",    reino:"Ceniza Ardiente",   img:"senor-volcanico" },
  { nombre:"Marea",       clase:"Capitana corsaria",     reino:"Puerto Sur",        img:"marea-guardiana" },
  { nombre:"Amon",        clase:"Hechicero del desierto",reino:"Oasis Dorado",      img:"rey-del-desierto" }
];

/* Capturas de la sección "Así se juega". Las imágenes están en assets/img/capturas/
   (archivo.webp para la miniatura y archivo-grande.webp para la vista grande). */
window.CAPTURAS = [
  { img:"mapa-exploracion", texto:"Explorando el mapa con Aldric, el Guardabosques: recursos, hechizos y el diario de cada día." },
  { img:"mapa-tutorial",    texto:"El tutorial guiado enseña a capturar minas para conseguir recursos cada día." }
];
/* ========================================================= */
