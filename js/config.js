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
  { fecha:"2026-11-22", etiqueta:"Anuncio", etiqueta_en:"Announcement",
    titulo:"Presentamos Cronos City, nuestro próximo juego", titulo_en:"Introducing Cronos City, our next game",
    texto:"Ya estamos trabajando en nuestro tercer juego: construye tu ciudad, vive la vida de sus habitantes y conquista ciudades rivales a través de 10 eras, de la Prehistoria al futuro. Todavía no tiene fecha: síguenos en itch.io para enterarte primero.",
    texto_en:"We're already working on our third game: build your city, live the lives of its people and conquer rival cities across 10 eras, from prehistory to the future. No release date yet: follow us on itch.io to hear first." },
  { fecha:"2026-11-22", etiqueta:"Nuevo juego", etiqueta_en:"New game",
    titulo:"¡Tidebound ya está en itch.io!", titulo_en:"Tidebound is out on itch.io!",
    texto:"Nuestro segundo juego, por 1,99 $: supervivencia en alta mar. Tu barco dispara solo; tú navegas, recoges madera y mejoras tu navío. Se juega en el navegador con teclado, mando o pantalla táctil, y su demo gratuita ya se puede jugar desde esta web.",
    texto_en:"Our second game, for $1.99: survival on the open sea. Your ship fires on its own; you sail, collect wood and upgrade your vessel. Plays in the browser with keyboard, gamepad or touch, and its free demo is playable right here on this site." },
  { fecha:"2026-11-22", etiqueta:"Actualización", etiqueta_en:"Update",
    titulo:"¡Nuevos mapas para elegir!", titulo_en:"New maps to choose from!",
    texto:"Hemos añadido seis mapas nuevos de los siete reinos: cordilleras, archipiélagos, cañones, ríos y lagos. Ahora puedes escoger en cuál librar tu partida.",
    texto_en:"We've added six new maps of the seven realms: mountain ranges, archipelagos, canyons, rivers and lakes. You can now choose where to wage your war." },
  { fecha:"2026-11-22", etiqueta:"Demo", etiqueta_en:"Demo",
    titulo:"Demo gratuita en la web", titulo_en:"Free demo on the website",
    texto:"Ya puedes jugar gratis los primeros 5 días de Reinos de Leyenda directamente en el navegador, sin registrarte ni instalar nada.",
    texto_en:"You can now play the first 5 days of Realms of Legend for free, right in your browser, with no sign-up and nothing to install." },
  { fecha:"2026-11-22", etiqueta:"Web", etiqueta_en:"Website",
    titulo:"Nueva web de NovaRise Games", titulo_en:"New NovaRise Games website",
    texto:"Estrenamos casa: toda la información de Reinos de Leyenda, sus héroes y nuestros próximos proyectos en un solo sitio, en español e inglés.",
    texto_en:"We have a new home: everything about Realms of Legend, its heroes and our upcoming projects in one place, in Spanish and English." },
  { fecha:"2026-11-21", etiqueta:"Lanzamiento", etiqueta_en:"Launch",
    titulo:"¡Reinos de Leyenda ya está a la venta en itch.io!", titulo_en:"Realms of Legend is out now on itch.io!",
    texto:"Lanzamos el juego completo en acceso anticipado por 1,99 $: campaña de 6 misiones, 7 reinos, 14 héroes y 39 criaturas. Y seguimos trabajando en él.",
    texto_en:"We launched the full game in early access for $1.99: a 6-mission campaign, 7 realms, 14 heroes and 39 creatures. And we keep working on it." }
];

/* Añade aquí cada nuevo proyecto. status: "live" | "early" | "dev" | "soon"
   Usa "imagen" con la ruta de una imagen propia, o "arte" para una ilustración provisional.
   enlaces: enlaces de texto (Descubrir, Demo…). boton: botón principal al pie de la tarjeta.
   Cada uno: {texto, texto_en, url}; añade ancla:true para "#seccion" o interno:true para rutas de la web. */
window.PROYECTOS = [
  { titulo:"Reinos de Leyenda", titulo_en:"Realms of Legend",
    texto:"Estrategia fantástica por turnos. Ya jugable en acceso anticipado por 1,99&nbsp;$, y sigue creciendo.",
    texto_en:"Turn-based fantasy strategy. Playable now in early access for $1.99, and still growing.",
    status:"early", chips:["Estrategia","Por turnos","Navegador"], chips_en:["Strategy","Turn-based","Browser"],
    imagen:"assets/img/portada/portada-es.webp", imagen_en:"assets/img/portada/portada-en.webp",
    enlaces:[ {texto:"Descubrir", texto_en:"Discover", url:"#juego", ancla:true},
              {texto:"Demo gratis", texto_en:"Free demo", url:"demo/", interno:true} ],
    boton:{texto:"Comprar · 1,99 $", texto_en:"Buy · $1.99", url:"https://novarisegames.itch.io/reinos-de-leyenda"} },
  { titulo:"Tidebound", titulo_en:"Tidebound",
    texto:"Sobrevive en alta mar. Tu barco dispara solo: tú solo navega, recoge madera y mejora tu navío entre tormentas, noches cerradas y tesoros. Juego completo por 1,99&nbsp;$.",
    texto_en:"Survive on the open sea. Your ship fires on its own: just sail, collect wood and upgrade your vessel through storms, dark nights and treasure. Full game for $1.99.",
    status:"live", chips:["Supervivencia naval","Acción","Navegador"], chips_en:["Naval survival","Action","Browser"],
    imagen:"assets/img/tidebound/portada.webp", arte:"olas",
    enlaces:[ {texto:"Descubrir", texto_en:"Discover", url:"#tidebound", ancla:true},
              {texto:"Demo gratis", texto_en:"Free demo", url:"tidebound/demo/", interno:true} ],
    boton:{texto:"Comprar · 1,99 $", texto_en:"Buy · $1.99", url:"https://novarisegames.itch.io/tidebound"} },
  { titulo:"Cronos City", titulo_en:"Cronos City",
    texto:"Construye tu ciudad, vive la vida de sus habitantes y conquista ciudades rivales a través de 10 eras de la historia. En desarrollo.",
    texto_en:"Build your city, live the lives of its people and conquer rival cities across 10 eras of history. In development.",
    status:"dev", chips:["Construcción","Simulación","Estrategia"], chips_en:["City building","Simulation","Strategy"],
    imagen:"assets/img/cronos/cronos-portada.webp?v=3",
    enlaces:[ {texto:"Descubrir", texto_en:"Discover", url:"#cronos", ancla:true} ],
    boton:{texto:"Seguir el desarrollo", texto_en:"Follow development", url:"https://novarisegames.itch.io", sec:true} }
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

/* Mapas que se pueden escoger en el juego (sección «Elige tu mapa»).
   Imágenes en assets/img/mapas/ (archivo.webp miniatura, archivo-grande.webp visor). */
window.MAPAS = [
  { img:"tierras-rotas", nombre:"Tierras Rotas", nombre_en:"Broken Lands", etiqueta:"Original", etiqueta_en:"Original",
    texto:"El mapa original de Reinos de Leyenda: un reino dividido donde empieza la leyenda.",
    texto_en:"The original Realms of Legend map: a divided realm where the legend begins." },
  { img:"costa-de-los-faros", nombre:"Costa de los Faros", nombre_en:"Lighthouse Coast", etiqueta:"Nuevo", etiqueta_en:"New",
    texto:"Los faros vigilan la costa mientras un mar interior rodea el castillo central.",
    texto_en:"Lighthouses watch over the coast while an inland sea surrounds the central castle." },
  { img:"corona-de-cristal", nombre:"Corona de Cristal", nombre_en:"Crystal Crown", etiqueta:"Nuevo", etiqueta_en:"New",
    texto:"Ríos y cascadas descienden entre cuevas de cristal hasta el corazón del continente.",
    texto_en:"Rivers and waterfalls run past crystal caves down to the heart of the continent." },
  { img:"reinos-elementales", nombre:"Reinos Elementales", nombre_en:"Elemental Realms", etiqueta:"Nuevo", etiqueta_en:"New",
    texto:"Hielo, fuego, arena y bosque rodean una meseta central cercada por cañones y puentes de piedra.",
    texto_en:"Ice, fire, sand and forest surround a central plateau ringed by canyons and stone bridges." },
  { img:"confin-de-los-siete-reinos", nombre:"Confín de los Siete Reinos", nombre_en:"Edge of the Seven Realms", etiqueta:"Nuevo", etiqueta_en:"New",
    texto:"Caminos y arroyos unen los siete reinos hasta el último confín, con minas de oro en cada rincón.",
    texto_en:"Trails and streams link the seven realms to the farthest edge, with gold mines in every corner." },
  { img:"cordillera-blanca", nombre:"La Cordillera Blanca", nombre_en:"The White Ridge", etiqueta:"Nuevo", etiqueta_en:"New",
    texto:"Una gran cordillera nevada parte el continente en dos. Elegir por dónde cruzarla lo cambia todo.",
    texto_en:"A great snowy ridge splits the continent in two. Choosing where to cross changes everything." },
  { img:"archipielago", nombre:"El Archipiélago", nombre_en:"The Archipelago", etiqueta:"Nuevo", etiqueta_en:"New",
    texto:"Los siete reinos repartidos en islas unidas por puentes: quien controla los pasos, controla el mapa.",
    texto_en:"The seven realms spread across islands linked by bridges: whoever holds the crossings holds the map." }
];

/* Tidebound: las 7 épocas de barcos y los jefes (imágenes en assets/img/tidebound/) */
window.TB_ERAS = [
  { img:"era-prehistoria", nombre:"Prehistoria", nombre_en:"Prehistoric", texto:"Canoa de troncos con vela de piel", texto_en:"Log canoe with a hide sail" },
  { img:"era-antigua",     nombre:"Antigua",     nombre_en:"Ancient",     texto:"Galera de remos con espolón de bronce", texto_en:"Oared galley with a bronze ram" },
  { img:"era-medieval",    nombre:"Medieval",    nombre_en:"Medieval",    texto:"Coca fortificada con castillos de proa y popa", texto_en:"Fortified cog with fore and aft castles" },
  { img:"era-piratas",     nombre:"Piratas",     nombre_en:"Pirates",     texto:"Galeón de guerra cargado de cañones", texto_en:"War galleon bristling with cannons" },
  { img:"era-industrial",  nombre:"Industrial",  nombre_en:"Industrial",  texto:"Vapor de ruedas que desafía la tormenta", texto_en:"Paddle steamer that defies the storm" },
  { img:"era-moderna",     nombre:"Moderna",     nombre_en:"Modern",      texto:"Fragata con helipuerto entre el hielo", texto_en:"Frigate with a helipad among the ice" },
  { img:"era-futurista",   nombre:"Futurista",   nombre_en:"Futuristic",  texto:"Nave flotante de energía sobre el océano", texto_en:"Hovering energy ship above the ocean" }
];
window.TB_JEFES = [
  { img:"jefe-kraken",   nombre:"El Kraken",   nombre_en:"The Kraken",   texto:"¡El Kraken despierta! Sus tentáculos surgen del agua en plena noche.", texto_en:"The Kraken awakens! Its tentacles rise from the water in the dead of night." },
  { img:"jefe-leviatan", nombre:"El Leviatán", nombre_en:"The Leviathan", texto:"¡Un Leviatán se acerca! Una mole de roca y fuego bajo la tormenta.", texto_en:"A Leviathan approaches! A mass of rock and fire beneath the storm." }
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
