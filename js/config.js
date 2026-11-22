/* =========================================================
   CONFIGURACIÓN — edita solo esta parte
   Los campos terminados en _en son la versión en inglés
   (se usan en /en/). Si falta uno, se muestra el texto en español.
   ========================================================= */

/* Tienda: todos los botones de compra de la web llevan a este enlace */
window.TIENDA = {
  url: "https://novarisegames.itch.io/reinos-de-leyenda",
  precio: "1,99 $"
};

/* Diario de desarrollo (sección «Novedades»). La más reciente, arriba.
   fecha: "AAAA-MM-DD" (opcional) · etiqueta: texto corto, p. ej. "v0.4" o "Demo" */
window.NOVEDADES = [
  { fecha:"2026-11-22", etiqueta:"Demo", etiqueta_en:"Demo",
    titulo:"Demo gratuita en la web", titulo_en:"Free demo on the website",
    texto:"Ya puedes jugar gratis los primeros 5 días de Reinos de Leyenda directamente en el navegador, sin registrarte ni instalar nada.",
    texto_en:"You can now play the first 5 days of Realms of Legend for free, right in your browser, with no sign-up and nothing to install." },
  { fecha:"2026-11-22", etiqueta:"Web", etiqueta_en:"Website",
    titulo:"Nueva web de NovaRise Games", titulo_en:"New NovaRise Games website",
    texto:"Estrenamos casa: toda la información de Reinos de Leyenda, sus héroes y nuestros próximos proyectos en un solo sitio, en español e inglés.",
    texto_en:"We have a new home: everything about Realms of Legend, its heroes and our upcoming projects in one place, in Spanish and English." },
  { etiqueta:"Acceso anticipado", etiqueta_en:"Early access",
    titulo:"Reinos de Leyenda, en acceso anticipado en itch.io", titulo_en:"Realms of Legend is in early access on itch.io",
    texto:"El juego ya está a la venta por 1,99 $ con la campaña de 6 misiones, 7 reinos, 14 héroes y 39 criaturas. Y seguimos trabajando en él.",
    texto_en:"The game is on sale for $1.99 with a 6-mission campaign, 7 realms, 14 heroes and 39 creatures. And we keep working on it." }
];

/* Añade aquí cada nuevo proyecto. status: "live" | "early" | "dev" | "soon"
   Usa "imagen" con la ruta de una imagen propia, o "arte" para una ilustración provisional. */
window.PROYECTOS = [
  { titulo:"Reinos de Leyenda", titulo_en:"Realms of Legend",
    texto:"Estrategia fantástica por turnos. Ya jugable en acceso anticipado por 1,99 $, y sigue creciendo.",
    texto_en:"Turn-based fantasy strategy. Playable now in early access for $1.99, and still growing.",
    status:"early", chips:["Estrategia","Por turnos","Navegador"], chips_en:["Strategy","Turn-based","Browser"],
    imagen:"assets/img/portada/portada-es.webp", imagen_en:"assets/img/portada/portada-en.webp", accion:"comprar" },
  { titulo:"Próximo proyecto", titulo_en:"Next project",
    texto:"Algo nuevo se está gestando en el estudio. Cuando esté listo, lo verás aquí primero.",
    texto_en:"Something new is brewing at the studio. When it's ready, you'll see it here first.",
    status:"soon", chips:["Por anunciar"], chips_en:["To be announced"], arte:"misterio", accion:"avisar" }
];

/* Reinos del juego: color de acento y nombre oficial en inglés */
window.REINOS = {
  "Alba Violeta":      "#b98cff",
  "Torre Azul":        "#5d8dff",
  "Fortaleza Bermeja": "#e5483d",
  "Corona de Hielo":   "#9fe3ff",
  "Ceniza Ardiente":   "#ff7a2f",
  "Puerto Sur":        "#4fb3e8",
  "Oasis Dorado":      "#f0c94a"
};
window.REINOS_EN = {
  "Alba Violeta":"Violet Dawn", "Torre Azul":"Blue Tower", "Fortaleza Bermeja":"Crimson Fortress",
  "Corona de Hielo":"Crown of Ice", "Ceniza Ardiente":"Burning Ash", "Puerto Sur":"South Harbor", "Oasis Dorado":"Golden Oasis"
};

/* Héroes que aparecen en la galería. Las imágenes están en assets/img/heroes/
   (archivo.webp para la miniatura y archivo-grande.webp para el visor).
   bio: frase opcional que se muestra al abrir el retrato. */
window.HEROES = [
  { nombre:"Aldric",  clase:"Guardabosques", clase_en:"Ranger", reino:"Alba Violeta", img:"guardabosques-flores",
    bio:"Criado entre los bosques violeta, conoce cada sendero del reino y nunca se pierde.",
    bio_en:"Raised among the violet woods, he knows every trail of the realm and never gets lost." },
  { nombre:"Elowen",  clase:"Guardabosques", clase_en:"Ranger", reino:"Alba Violeta", img:"arquera-elfica" },
  { nombre:"Selene",  clase:"Archimaga", clase_en:"Archmage", reino:"Torre Azul", img:"archimaga-azul",
    bio:"Estudió siglos en la Torre Azul; prefiere un buen conjuro a una espada.",
    bio_en:"She studied for centuries in the Blue Tower; she prefers a good spell to a sword." },
  { nombre:"Roland",  clase:"Caballero", clase_en:"Knight", reino:"Fortaleza Bermeja", img:"caballero-leon",
    bio:"Jinete leal de la guardia roja, cree que el honor se demuestra a caballo.",
    bio_en:"Loyal rider of the red guard, he believes honor is proven on horseback." },
  { nombre:"Brienne", clase:"Caballera", clase_en:"Knight", reino:"Fortaleza Bermeja", img:"guerrera-leon" },
  { nombre:"Isolde",  clase:"Hechicera de escarcha", clase_en:"Frost sorceress", reino:"Corona de Hielo", img:"reina-de-hielo",
    bio:"Hechicera de las cumbres heladas: su susurro congela el aliento.",
    bio_en:"Sorceress of the frozen peaks: her whisper freezes the breath." },
  { nombre:"Bjorn",   clase:"Hechicero de escarcha", clase_en:"Frost sorcerer", reino:"Corona de Hielo", img:"guerrero-del-norte" },
  { nombre:"Kharn",   clase:"Señor de la guerra", clase_en:"Warlord", reino:"Ceniza Ardiente", img:"senor-volcanico",
    bio:"Veterano del volcán, manda con el hierro y el miedo.",
    bio_en:"Veteran of the volcano, he rules with iron and fear." },
  { nombre:"Marea",   clase:"Capitana corsaria", clase_en:"Corsair captain", reino:"Puerto Sur", img:"marea-guardiana" },
  { nombre:"Amon",    clase:"Hechicero del desierto", clase_en:"Desert sorcerer", reino:"Oasis Dorado", img:"rey-del-desierto",
    bio:"Sabio del desierto que lee el destino en la arena.",
    bio_en:"Desert sage who reads destiny in the sand." }
];

/* Capturas de la sección "Así se juega". Las imágenes están en assets/img/capturas/
   (archivo.webp para la miniatura y archivo-grande.webp para la vista grande). */
window.CAPTURAS = [
  { img:"mapa-exploracion",
    texto:"Explorando el mapa con Aldric, el Guardabosques: recursos, hechizos y el diario de cada día.",
    texto_en:"Exploring the map with Aldric the Ranger: resources, spells and the daily log." },
  { img:"mapa-tutorial",
    texto:"El tutorial guiado enseña a capturar minas para conseguir recursos cada día.",
    texto_en:"The guided tutorial teaches you to capture mines to earn resources every day." }
];
/* ========================================================= */
