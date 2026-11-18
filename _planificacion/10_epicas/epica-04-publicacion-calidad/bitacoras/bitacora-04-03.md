# Bitácora 04-03 · Web Analytics y metadatos para compartir

- **Fecha:** 2026-11-18
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/04-03-analytics-metadatos
- **Estado final:** En revisión

## Resumen

- El layout carga una sola vez el script de Cloudflare Web Analytics, con `defer` y el token del sitio. Es el único recurso de terceros (RDA-005).
- Hay una página 404 con el layout del sitio, que Cloudflare sirve con `not_found_handling: "404-page"`. También hay `robots.txt`, y el pie lleva la licencia.
- El ícono del sitio es `public/favicon.svg`: el glifo `school-outline` de Material Symbols Light en blanco sobre un círculo `#007EA7`, sin logos de Google ni de Gemini. Se agregó en una segunda pasada, después de que se descartara el SVG de Gemini por la regla 6.
- No hay dependencias nuevas, y `package.json`, `pnpm-lock.yaml` y `astro.config.mjs` no cambian.

**Precondición:** rama `iteracion/04-03-analytics-metadatos` sobre `b30d648` (04-02 integrada), con el árbol limpio.

## Archivos creados, modificados o eliminados

| Archivo | Cambio |
| :------ | :----- |
| `src/layouts/Base.astro` | Script de Web Analytics con `is:inline`, `defer` y `data-cf-beacon`, al final del `head`; `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />` después de la descripción |
| `public/favicon.svg` | Nuevo: ícono del sitio (533 B) |
| `src/components/Pie.astro` | Línea de licencia |
| `src/pages/404.astro` | Nuevo: `h1` «Página no encontrada», texto y botón «Volver a la portada» (`/`) |
| `public/robots.txt` | Nuevo: `User-agent: *` y `Allow: /` |
| `wrangler.jsonc` | `"not_found_handling": "404-page"` dentro de `assets` (aprobado el 2026-11-18) |
| `iteracion-04-02-cloudflare-workers.md` | Terminada; último criterio con la URL dicha por el desarrollador |
| `iteracion-04-03-analytics-metadatos.md` | En revisión; criterios con evidencia |
| `definicion-epica-04.md` | 04-02 Terminada, 04-03 En revisión |
| `registro-pendientes.md` | Encabezado, estados, filas 16.1 y 17, decisiones e historial |

## Datos entregados por el desarrollador

- **URL publicada (04-02):** `https://curso-gemini.felipe-cuevas.workers.dev/`. El 2026-11-18, `curl` respondió 200 con 1 `h1` (`titulo-inicio`). Una ruta inexistente respondió 404, todavía sin la página del sitio, porque esta iteración no está en `main`.
- **Token:** viene del código que entregó Cloudflare. Ese código usa `type='module'`, pero se usó `defer`, como piden el mensaje del desarrollador y la RDA-005. El token no es secreto, porque viaja en el HTML (RDA-005).
- **Licencia del pie**, copiada literal:

```text
Todos los derechos reservados.
```

Va como una línea aparte después de «Material de capacitación con datos ficticios o públicos». No lleva nombre ni año, porque el pie no los tenía.

## Decisiones tomadas

- El script lleva `is:inline` para que Astro no intente empaquetar un archivo externo.
- La navegación de la 404 tiene un solo enlace, «Portada» (`/`), porque las anclas de la página única no existen en la 404.
- **Ícono, primera pasada:** se detuvo, porque el SVG de Gemini que se pidió contradice la regla 6 de `AGENTS.md` y la tarea 4.
- **Ícono, segunda pasada (decisión del desarrollador, 2026-11-18):** glifo `school-outline` de la colección `material-symbols-light` de Iconify, en blanco (`#FFFFFF`) sobre un círculo `#007EA7` (primario de `DESIGN.md`).
  - El trazo se descargó tal cual con `curl https://api.iconify.design/material-symbols-light/school-outline.svg`, con respuesta 200 y `viewBox` 0 0 24 24. Solo se cambió el relleno y se aplicó una transformación.
  - El `viewBox` es cuadrado (0 0 24 24), con un círculo de radio 12. El glifo va centrado en su caja (3,08 a 20,92 × 4,15 a 18,69) y escalado a 0,9, con un margen de unos 3,5 unidades hasta el borde del círculo.
  - No lleva texto ni fuentes. Lleva un comentario con el nombre del glifo, el autor y la licencia.
- **Licencia de la colección:** según la información de la colección en Iconify (`api.iconify.design/collection?prefix=material-symbols-light&info=true`), Material Symbols Light es de Google, con licencia Apache 2.0 (`Apache-2.0`, https://github.com/google/material-design-icons/blob/master/LICENSE). Apache 2.0 pide conservar el aviso de licencia al redistribuir, no una atribución visible en el sitio ni en un documento. El aviso va dentro del propio `favicon.svg`, así que no hace falta la P-009.
- **Regla 6:** el glifo es un birrete genérico de una colección de íconos, no un logotipo de Google ni de Gemini. No identifica ninguna herramienta ni sugiere respaldo.

## Verificación

- `pnpm build`: código 0, 0 líneas `warn`, `/404.html` generado, «Limpieza de SVG: 6 sin referencia borrados (41030 B)» y «Guardia de marcadores: 0 marcadores en dist/». `pnpm astro check`: 0 errores, 0 advertencias y 0 sugerencias.
- `medir-0403.mjs` (scratchpad), para `index.html` y `404.html`:
  - 1 beacon con `defer` y el token, y 1 solo `src`/`href` `http` en `<script>` o `<link>`.
  - `lang="es-CL"`, 1 `<title>`, 1 `description`, 0 `og:`, 0 `canonical` y la licencia presente.
  - `index.html` tiene 5 `<script>` (los 4 propios y el beacon) y 1 `h1`. `404.html` tiene 4 `<script>` (3 propios, sin el de copiar porque no hay prompts, y el beacon), 1 `h1`, el salto al contenido y `href="/"`.
  - `dist/robots.txt` y `dist/404.html` existen.
- `medir.mjs` (scratchpad): 24 de 24 prompts, 0 marcadores.
- `pnpm preview` en el puerto 4329: `/no-existe` responde 404 con «Página no encontrada» y `/robots.txt` responde 200. Después se apagó el servidor (comprobado: conexión rechazada).
- El hash de `dist/index.html` cambia a propósito, por el beacon y la licencia.
- **Ícono (segunda pasada):**
  - `pnpm build`: código 0, 0 `warn`, limpieza con 6 SVG (los mismos 41030 B de `dist/_astro/`) y guardia con 0 marcadores. `pnpm astro check`: 0/0/0.
  - `dist/favicon.svg` existe y es idéntico a `public/favicon.svg` (`cmp`). La limpieza no lo toca, porque solo revisa `dist/_astro/`.
  - 1 `<link rel="icon" type="image/svg+xml" href="/favicon.svg">` en `index.html` y otro en `404.html`.
  - Sigue habiendo 1 solo recurso externo (el beacon), con 0 `og:` y 0 `canonical`. 24 de 24 prompts, 1 `h1` en cada página, 5 `<script>` en `index.html` y 4 en `404.html`.
  - `git diff --stat` de `package.json`, `pnpm-lock.yaml` y `astro.config.mjs` vacío.
- **Legibilidad del ícono:** `rasterizar.mjs` (scratchpad) rasteriza el SVG con el sharp que ya trae Astro, a 16 y a 32 px, y lo amplía sin suavizado para mirarlo.
  - Con la escala 0,78 de la primera prueba, el trazo «Light» casi desaparecía a 16 px. Por eso se subió a 0,9.
  - A 32 px el birrete se lee con nitidez: el tablero, el cuerpo y la borla.
  - A 16 px se distingue la silueta del birrete blanco sobre el círculo, con un trazo de alrededor de 1 px.
- **No verificado:** ambos modos y 360 px en un navegador, y el ícono en la pestaña de un navegador real.

## Criterios de aceptación

Ver la iteración: 5 de 7 marcados con evidencia (en la segunda pasada se agregó el criterio del ícono). Quedan sin marcar las visitas en el panel (del desarrollador, después del merge) y las regresiones, porque falta la revisión en el navegador.

## Pasos del desarrollador

1. Mirar el ícono en la pestaña del navegador, en tema claro y oscuro.
2. En `pnpm preview`, revisar la portada y la 404 en 360 px y en escritorio, en ambos modos, y la línea de licencia del pie.
3. Hacer merge a `main`. Workers Builds publica.
4. Abrir `https://curso-gemini.felipe-cuevas.workers.dev/no-existe` y comprobar que se ve la 404 del sitio, con «Volver a la portada».
5. Visitar el sitio y, en el panel de Cloudflare Web Analytics, confirmar que registra visitas. Avisar la fecha.

## Cómo revertir

- Revertir el commit en `main`: eso dispara un despliegue nuevo sin el beacon ni la 404.
- O, en el panel del Worker, Deployments, volver a la versión anterior.

## Pendientes y riesgos

- Algunos navegadores y buscadores piden `/favicon.ico`, que no existe y devuelve la 404. Los navegadores actuales usan el `<link rel="icon">` SVG. Agregar un `.ico` quedaría como propuesta.
- El beacon podría bajar la nota de Rendimiento. Se mide en la 04-04 (RDA-005).
- El enlace de la marca del encabezado apunta a `#inicio`, que no existe en la 404. Es menor, y en la 404 la vuelta a la portada la da el botón.

## Revisión

- **Resultado frente al objetivo:** cumplido, ícono incluido, y medido en local. Faltan el navegador y la comprobación en producción.
- **Qué aprendimos:** `astro preview` ya sirve `404.html` en las rutas inexistentes, así que la 404 se puede probar sin Wrangler.
- **Qué cambia para lo que sigue:** la 04-04 mide Lighthouse con el beacon incluido y con el ícono ya resuelto.

## Commit sugerido

- Primera pasada (commit 20df10a): `Épica 4 - Iteración 04-03: agrega Web Analytics con defer, la página 404 con not_found_handling, robots.txt y la licencia del pie; el ícono queda detenido por la regla 6`
- Segunda pasada: `Épica 4 - Iteración 04-03: agrega el favicon.svg con el glifo school-outline de Material Symbols Light (Apache-2.0) sobre #007EA7, enlazado en el layout`
