# NovaRise

Web oficial de **NovaRise**, estudio independiente de videojuegos. Aquí se promociona y se vende nuestro primer juego, **Reinos de Leyenda**, y aquí se irán publicando los proyectos futuros.

## Estructura

```
novarise-web/
├── index.html        # Página principal
├── css/
│   └── styles.css    # Estilos
├── js/
│   ├── config.js     # ← Ediciones, precios, enlaces de pago, héroes y proyectos
│   └── main.js       # Lógica de la página
├── assets/img/
│   ├── portada/      # Portadas del juego (ES y EN)
│   ├── heroes/       # Retratos: nombre.webp (miniatura) y nombre-grande.webp (visor)
│   ├── capturas/     # Capturas de partida para "Así se juega"
│   └── banner-caballero.webp
└── .nojekyll         # Para que GitHub Pages sirva los archivos tal cual
```

## Tareas habituales

**Cambiar precios o activar los pagos**: edita `EDICIONES` en `js/config.js` y pega en `pago` el enlace de pago de cada edición (Stripe Payment Links, Gumroad, Lemon Squeezy o itch.io). Mientras el campo esté vacío, el botón de compra muestra un aviso de "modo demostración" y no cobra nada.

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
- [ ] Más capturas (batallas, ciudades), tráiler y logo de NovaRise
- [ ] Enlaces de pago en `js/config.js`
- [ ] Conectar el boletín (Mailchimp, Brevo…)
- [ ] Páginas legales: aviso legal, privacidad, cookies, condiciones de venta
- [ ] Versión en inglés
- [ ] Dominio propio
