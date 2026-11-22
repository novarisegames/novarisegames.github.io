# NovaRise Games

🌐 **https://novarisegames.github.io/**

Web oficial de **NovaRise Games**, estudio independiente de videojuegos. Aquí se promociona y se vende nuestro primer juego, **Reinos de Leyenda**, y aquí se irán publicando los proyectos futuros.

## Estructura

```
novarisegames.github.io/
├── index.html        # Página principal (español)
├── en/index.html     # Versión en inglés (comparte css, js y assets)
├── css/
│   └── styles.css    # Estilos
├── js/
│   ├── config.js     # ← Enlace de compra, novedades, héroes, capturas y proyectos (ES + EN)
│   └── main.js       # Lógica de la página
├── demo/             # Demo jugable (5 días) en https://novarisegames.github.io/demo/
├── assets/img/
│   ├── portada/      # Portadas del juego (ES y EN)
│   ├── heroes/       # Retratos: nombre.webp (miniatura) y nombre-grande.webp (visor)
│   ├── capturas/     # Capturas de partida para "Así se juega"
│   └── banner-caballero.webp
└── .nojekyll         # Para que GitHub Pages sirva los archivos tal cual
```

## Tareas habituales

**Cambiar el precio o el enlace de compra**: edita `TIENDA` en `js/config.js`. Todos los botones de compra usan ese enlace (ahora, la página de itch.io). El precio que se muestra en los textos de `index.html` hay que cambiarlo también allí.

**Añadir un proyecto nuevo**: añade una entrada a `PROYECTOS` en `js/config.js`:

```js
{ titulo:"Mi nuevo juego", texto:"Descripción corta.", status:"dev",
  chips:["Género","Plataforma"], arte:"misterio", accion:"avisar" }
```

`status` puede ser `live` (disponible), `dev` (en desarrollo) o `soon` (próximamente).

**Añadir o cambiar un héroe**: el reino debe estar en `REINOS` (con su color). Guarda las imágenes en `assets/img/heroes/` y añade una entrada a `HEROES` en `js/config.js`:

```js
{ nombre:"Nombre", clase:"Clase", reino:"Torre Azul", img:"nombre-archivo" }
```

**Añadir una captura de partida**: guarda `nombre.webp` y `nombre-grande.webp` en `assets/img/capturas/` y añade una entrada a `CAPTURAS` en `js/config.js`:

```js
{ img:"nombre", texto:"Pie de foto de la captura." }
```

**Actualizar la demo**: sustituye los archivos de `demo/` por los de la nueva versión. La demo usa un service worker con caché (`sw.js`): cambia el nombre de la caché (`tr-v1` → `tr-v2`…) en cada versión nueva para que los jugadores que ya la abrieron reciban la actualización.

**Publicar una novedad**: añade una entrada al principio de `NOVEDADES` en `js/config.js`:

```js
{ fecha:"2026-12-01", etiqueta:"v0.4", titulo:"Título", titulo_en:"Title",
  texto:"Qué hay de nuevo.", texto_en:"What's new." },
```

**Versión en inglés**: los textos de `js/config.js` tienen su campo `_en` (si falta, se usa el español).
Los textos fijos de la página están en `en/index.html`: si cambias un texto en `index.html`,
cámbialo también allí. Los nombres oficiales en inglés de los reinos están en `REINOS_EN`.

## Verla en local

Abre `index.html` en el navegador, o arranca un servidor:

```bash
python3 -m http.server 8000
# y entra en http://localhost:8000
```

## Publicación

La web se publica sola con GitHub Pages desde la rama `main` de este repositorio
(`novarisegames/novarisegames.github.io`). Cada cambio que se sube a `main` aparece en
**https://novarisegames.github.io/** en uno o dos minutos.

- Web: https://novarisegames.github.io/
- Demo: https://novarisegames.github.io/demo/
- Tienda: https://novarisegames.itch.io/reinos-de-leyenda

Para usar un dominio propio (por ejemplo `novarisegames.com`), añádelo en **Settings → Pages → Custom domain**.

## Pendiente

- [x] Portada y retratos de héroes
- [x] Primeras capturas de partida
- [ ] Más capturas (batallas, ciudades), tráiler y logo de NovaRise Games
- [x] Demo jugable gratis
- [x] Compra a través de itch.io (1,99 $)
- [ ] Correo de contacto real
- [ ] Boletín propio (opcional; ahora se usa «Seguir en itch.io»)
- [ ] Páginas legales: aviso legal, privacidad, cookies, condiciones de venta
- [x] Versión en inglés (/en/)
- [x] Sección de novedades
- [ ] Dominio propio
