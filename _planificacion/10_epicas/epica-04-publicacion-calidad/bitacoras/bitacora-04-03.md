# Bitácora 04-03 · Web Analytics y metadatos para compartir

- **Fecha:** 2026-11-18
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/04-03-analytics-metadatos
- **Estado final:** En revisión

## Resumen

- El layout carga una sola vez el script de Cloudflare Web Analytics, con `defer` y el token del sitio. Es el único recurso de terceros (RDA-005).
- Hay una página 404 con el layout del sitio, que Cloudflare sirve con `not_found_handling: "404-page"`. También hay `robots.txt`, y el pie lleva la licencia.
- El ícono **no se agregó**. El desarrollador pidió el SVG de Gemini y eso contradice la regla 6 de `AGENTS.md` y la tarea 4 de esta iteración. Queda en «Decisiones por tomar».
- No hay dependencias nuevas, y `package.json`, `pnpm-lock.yaml` y `astro.config.mjs` no cambian.

**Precondición:** rama `iteracion/04-03-analytics-metadatos` sobre `b30d648` (04-02 integrada), con el árbol limpio.

## Archivos creados, modificados o eliminados

| Archivo | Cambio |
| :------ | :----- |
| `src/layouts/Base.astro` | Script de Web Analytics con `is:inline`, `defer` y `data-cf-beacon`, al final del `head` |
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
- **Ícono detenido.** La regla 6 de `AGENTS.md` dice que los logotipos de Google y Gemini identifican las herramientas que se enseñan y no se presentan como sello. La tarea 4 de la 04-03 dice que no se usan como ícono del sitio. Un favicon de Gemini haría que la pestaña pareciera un sitio de Google. La recomendación es un `favicon.svg` propio, por ejemplo un círculo con `#007EA7` y «G&G» en blanco. Si el desarrollador mantiene el de Gemini, primero hay que cambiar la tarea 4 y registrar una propuesta para la regla 6.

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
- **No verificado:** ambos modos y 360 px en un navegador.

## Criterios de aceptación

Ver la iteración: 4 de 6 marcados con evidencia. Quedan sin marcar las visitas en el panel (del desarrollador, después del merge) y las regresiones, porque falta la revisión en el navegador.

## Pasos del desarrollador

1. Decidir el ícono (ver «Decisiones tomadas»).
2. En `pnpm preview`, revisar la portada y la 404 en 360 px y en escritorio, en ambos modos, y la línea de licencia del pie.
3. Hacer merge a `main`. Workers Builds publica.
4. Abrir `https://curso-gemini.felipe-cuevas.workers.dev/no-existe` y comprobar que se ve la 404 del sitio, con «Volver a la portada».
5. Visitar el sitio y, en el panel de Cloudflare Web Analytics, confirmar que registra visitas. Avisar la fecha.

## Cómo revertir

- Revertir el commit en `main`: eso dispara un despliegue nuevo sin el beacon ni la 404.
- O, en el panel del Worker, Deployments, volver a la versión anterior.

## Pendientes y riesgos

- El ícono, detenido por la regla 6.
- El beacon podría bajar la nota de Rendimiento. Se mide en la 04-04 (RDA-005).
- El enlace de la marca del encabezado apunta a `#inicio`, que no existe en la 404. Es menor, y en la 404 la vuelta a la portada la da el botón.

## Revisión

- **Resultado frente al objetivo:** cumplido salvo el ícono, y medido en local. Faltan el navegador y la comprobación en producción.
- **Qué aprendimos:** `astro preview` ya sirve `404.html` en las rutas inexistentes, así que la 404 se puede probar sin Wrangler.
- **Qué cambia para lo que sigue:** la 04-04 mide Lighthouse con el beacon incluido y debe partir con el ícono resuelto.

## Commit sugerido

`Épica 4 - Iteración 04-03: agrega Web Analytics con defer, la página 404 con not_found_handling, robots.txt y la licencia del pie; el ícono queda detenido por la regla 6`
