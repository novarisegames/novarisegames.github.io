# NovaRise Games

Web oficial de **NovaRise Games**, estudio independiente de videojuegos. Aquí se promociona y se vende nuestro primer juego, **Reinos de Leyenda**, y aquí se irán publicando los proyectos futuros.

## Estructura

```
novarise-web/
├── index.html        # Página principal
├── css/
│   └── styles.css    # Estilos
├── js/
│   ├── config.js     # ← Enlace de compra, héroes, capturas y proyectos
│   └── main.js       # Lógica de la página
├── demo/             # Demo jugable (5 días) en https://…/novarise-web/demo/
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

## Verla en local

Abre `index.html` en el navegador, o arranca un servidor:

```bash
python3 -m http.server 8000
# y entra en http://localhost:8000
```

## Publicar con GitHub Pages

1. Sube el repositorio a GitHub.
2. Ve a **Settings → Pages**.
3. En *Source* elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
4. En un par de minutos la web estará en `https://TU-USUARIO.github.io/novarise-web/`.
5. (Opcional) En **Custom domain** añade tu dominio, por ejemplo `novarise.com`.

## Pendiente

- [x] Portada y retratos de héroes
- [x] Primeras capturas de partida
- [ ] Más capturas (batallas, ciudades), tráiler y logo de NovaRise Games
- [x] Demo jugable gratis
- [x] Compra a través de itch.io (1,99 $)
- [ ] Correo de contacto real
- [ ] Boletín propio (opcional; ahora se usa «Seguir en itch.io»)
- [ ] Páginas legales: aviso legal, privacidad, cookies, condiciones de venta
- [ ] Versión en inglés
- [ ] Dominio propio
