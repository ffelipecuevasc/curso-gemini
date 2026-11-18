# Bitácora 04-04 · Rendimiento, accesibilidad y verificación final

- **Fecha:** 2026-11-18
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/04-04-verificacion-final
- **Estado final:** En revisión (ajustes aplicados en la segunda pasada; falta medir la URL publicada después del merge)

## Resumen

- Se midió Lighthouse móvil, con la mediana de 3 corridas, en local, en local sin Web Analytics y en la URL publicada.
- **Las metas no se cumplen todavía.**
  - Accesibilidad da 98 en todas las corridas, por `heading-order`: el salto de `h2` a `h4` en las fichas.
  - Rendimiento publicado da 94, con un TBT de 257 ms. El tiempo se va en estilo y layout de la página larga, no en scripts.
- Primera pasada: no se hizo ningún ajuste, y los dos propuestos esperaron la decisión del desarrollador.
- **Segunda pasada (ajustes aprobados el 2026-11-18):**
  - Los títulos de las fichas pasan a `h3`: 0 saltos y Accesibilidad local 100.
  - `content-visibility` se aplicó, se midió y **se revirtió**, porque empeoró Rendimiento (93), TBT (302 ms) y Accesibilidad (92).
- No hay dependencias nuevas, y `package.json`, `pnpm-lock.yaml`, `astro.config.mjs` y `wrangler.jsonc` no cambian.

**Precondición:** rama `iteracion/04-04-verificacion-final` sobre `8545162` (04-03 integrada), con el árbol limpio.

## Archivos creados, modificados o eliminados

| Archivo | Cambio |
| :------ | :----- |
| `src/components/SeccionUnidad.astro` | Segunda pasada: los 6 `<h4>` pasan a `<h3>` con las mismas clases, y no cambian ni el contenido ni el orden |
| `src/styles/global.css` | Segunda pasada: regla `content-visibility` agregada y revertida (idéntico al original, `cmp` 0) |
| `iteracion-04-03-analytics-metadatos.md` | Terminada; los criterios de visitas y de 360 px / ambos modos, con lo dicho por el desarrollador |
| `iteracion-04-04-verificacion-final.md` | En revisión; criterios con las mediciones |
| `definicion-epica-04.md` | 04-03 Terminada, 04-04 En revisión |
| `registro-pendientes.md` | Encabezado, estados, filas 17 y 18, decisiones e historial |

## Equipo y versiones

- Windows 10 Pro 10.0.19045, Node.js v24.16.0 y pnpm 12.21.0.
- Google Chrome 157.0.8103.79, sin interfaz (`--headless=new`), con `CHROME_PATH` apuntando al Chrome del equipo.
- Lighthouse 13.6.0 con `pnpm dlx lighthouse@13.6.0`. `pnpm view lighthouse version` da `13.6.0`, la última estable, y su `engines` pide `node >=22.19`, compatible con `>=24.16.0`. No se agregó al repositorio.
- Perfil móvil por defecto: CPU ×4, RTT 150 ms y 1,6 Mbps. El índice de referencia del equipo (benchmarkIndex) va de 1740 a 1894.
- Scripts del scratchpad: `lighthouse.sh` hace 3 corridas por caso, `resumir-lh.mjs` calcula las notas y la mediana, y `detalle-lh.mjs` saca las causas.

## Mediciones

Mediana de 3 corridas en móvil. Las notas van en orden Rendimiento / Accesibilidad / Buenas prácticas / SEO.

| Caso | Notas (mediana) | Corridas de Rendimiento | LCP | CLS | TBT |
| :--- | :-------------- | :---------------------- | :-- | :-- | :-- |
| Local (`pnpm preview`, puerto 4329) | 98 / 98 / 96 / 100 | 98, 99, 92 | 1,33 s | 0 | 142 ms |
| Local sin Web Analytics (`--blocked-url-patterns="*cloudflareinsights*"`) | 96 / 98 / 100 / 100 | 94, 97, 96 | 1,33 s | 0 | 201 ms |
| Publicada (`https://curso-gemini.felipe-cuevas.workers.dev/`, `main` actual) | 94 / 98 / 100 / 100 | 94, 94, 91 | 1,58 s | 0 | 257 ms |

INP no se mide en laboratorio, así que TBT sirve de referencia. El servidor de `pnpm preview` se apagó al terminar (comprobado: conexión rechazada).

**Peso de `dist/index.html`:** 249 986 B y 51 439 B gzip, frente a 249 616 B y 50 905 B: +370 B y +534 B gzip, por el beacon, el `<link rel="icon">` y la licencia de la 04-03.

**Títulos:** `index.html` tiene 1 `h1`, 6 `h2`, 31 `h3` y 22 `h4`. Hay 4 saltos de `h2` a `h4`, uno por ficha, en «Objetivo», el primer subtítulo de `SeccionUnidad.astro`.

**Regresiones:**
- `pnpm build`: código 0, 0 `warn`, limpieza con 6 SVG y guardia con 0 marcadores.
- `pnpm astro check`: 0/0/0.
- 24 de 24 prompts, 1 `h1` y 5 `<script>` (4 propios y el beacon).
- El desborde en 360 px no se midió: Lighthouse no lo informa y no hay una herramienta de navegador en el repositorio.

## Hallazgos

1. **Accesibilidad 98 (en las 9 corridas):** la auditoría `heading-order` falla en 4 nodos, los `<h4>` «Objetivo» que siguen al `h2` de cada unidad. Es la única falla de Accesibilidad.
2. **Buenas prácticas 96, solo en local:** la auditoría `errors-in-console` registra que el beacon no puede enviar datos a `https://cloudflareinsights.com/cdn-cgi/rum` desde `http://localhost:4329`, porque CORS lo bloquea. En la URL publicada y en local sin Web Analytics da 100. Es un efecto de medir en `localhost`, no un problema del sitio.
3. **Rendimiento publicado 94 (bajo 95):** LCP y CLS cumplen. Lo que resta es el TBT (247 a 357 ms).
   - En el hilo principal, estilo y layout toman de 693 a 898 ms, y la evaluación de scripts solo de 38 a 132 ms.
   - La tarea larga mayor, de 276 a 352 ms, es del documento. El beacon toma unos 69 ms y una tarea de 75 ms.
   - Sin Web Analytics, la mediana local baja a 96 en vez de subir: la diferencia queda dentro de la variación entre corridas (92 a 99). **El script de Web Analytics no es la causa.**
   - La causa medida es el costo de estilo y layout de una sola página con las 4 unidades completas (unos 250 KB de HTML).

## Ajustes propuestos (esperan la decisión del desarrollador)

1. **Títulos, para que Accesibilidad llegue a 100.** Cambiar a `h3` los 6 `h4` de `src/components/SeccionUnidad.astro` (líneas 88, 92, 100, 168, 179 y 183: Objetivo, Mini-proyecto, Descargas, Recursos, Entregable y «Terminado cuando…»), con las mismas clases.
   - No cambia nada visible, porque el tamaño lo dan las clases.
   - Los 6 son hermanos de los `h3` de los bloques, no hijos de ellos. Con `h4`, «Recursos» y «Entregable» quedaban colgando del último bloque.
   - Es lo de menor impacto: no toca contenido ni CSS.
2. **Rendimiento, para el TBT.** Agregar `content-visibility: auto` y `contain-intrinsic-size` a las 4 secciones de unidad, en CSS y sin tocar el HTML. Así el navegador no calcula el layout de las unidades fuera de la pantalla en la carga.
   - Es la opción de menor impacto para la causa medida: no pliega contenido ni divide la página.
   - Riesgos: las anclas `#unidad-N` y la barra de desplazamiento podrían moverse un poco mientras se calcula el tamaño real; se revisaría con teclado y midiendo CLS.
   - La alternativa más pesada es plegar los bloques en `<details>`. Cambia la lectura y no se propone.

Después de cada ajuste aprobado: volver a medir en local, revisar 360 px y ambos modos, hacer merge a `main` y volver a medir la URL publicada.

## Ajustes aplicados (segunda pasada, 2026-11-18)

Se usó el mismo método: Lighthouse 13.6.0 con `pnpm dlx`, Chrome 157 del equipo, perfil móvil y 3 corridas con su mediana sobre `pnpm preview` (puerto 4329), que se apagó después de cada serie (conexión rechazada). Cada ajuste se midió por separado.

| Caso | Notas (mediana) | Corridas de Rendimiento | LCP | CLS | TBT |
| :--- | :-------------- | :---------------------- | :-- | :-- | :-- |
| Línea base local (primera pasada) | 98 / 98 / 96 / 100 | 98, 99, 92 | 1,33 s | 0 | 142 ms |
| Ajuste 1: títulos en `h3` | **98 / 100 / 96 / 100** | 98, 87, 99 | 1,26 s | 0 | 154 ms |
| Ajuste 1 + 2: `content-visibility` (revertido) | 93 / 92 / 96 / 100 | 93, 86, 95 | 1,10 s | 0 | 302 ms |

**Ajuste 1, títulos.**
- `sed` en `SeccionUnidad.astro` cambia `<h4 class="font-display text-xl font-semibold">…</h4>` por `<h3 …>…</h3>` en las 6 líneas, y el diff solo toca esas 6.
- `index.html` queda con 1 `h1`, 6 `h2`, 53 `h3` y 0 `h4`, sin ningún salto de nivel. Antes tenía 1, 6, 31 y 22: los 22 `h4` venían de esos 6 subtítulos repetidos en las 4 unidades.
- `heading-order` deja de fallar y Accesibilidad da 100 en las 3 corridas.
- La regla base de `global.css` ya da `font-display` y `text-wrap: balance` a los `h3`, y las clases fijan el tamaño, así que el aspecto no debería cambiar. Eso no se comprobó en un navegador.
- La corrida 2 dio 87 por un TBT de 471 ms, un caso aislado. Las otras dos dieron 98 y 99.

**Ajuste 2, `content-visibility` (revertido).**
- `DESIGN.md` no dice nada de `content-visibility` ni de `contain-intrinsic-size`, así que no había choque.
- El estilo de las secciones de unidad son clases de Tailwind en el HTML de `SeccionUnidad.astro`. Para no tocar el HTML, la regla fue a `@layer components` de `global.css`: `section[id^="unidad-"] { content-visibility: auto; contain-intrinsic-size: auto 3000px; }`, con los selectores `unidad-1` a `unidad-4` comprobados en `dist/`.
- Resultado: CLS se mantuvo en 0 y LCP bajó a 1,10 s, pero Rendimiento bajó a 93 y el TBT subió a 302 ms. Estilo y layout tomaron de 855 a 1144 ms, contra 693 a 898 ms antes.
- Accesibilidad cayó a 92, con dos auditorías nuevas que fallan:
  - `color-contrast`: 1 nodo con 1,57:1, `#00131d` sobre `#003b51`.
  - `target-size`: 3 objetivos «parcialmente tapados (112 × 4 px)».
- Ambas aparecen porque axe evalúa contenido que el navegador no dibujó y calcula mal los fondos y los solapes.
- Como Rendimiento no mejoró y Accesibilidad empeoró, se revirtió copiando el respaldo del scratchpad (`global.css.antes`). `cmp` da 0 y `dist/_astro/*.css` ya no tiene `content-visibility`.

**Regresiones finales (con el ajuste 1 solo):**
- `pnpm build`: código 0, 0 `warn`, limpieza con 6 SVG y guardia con 0 marcadores.
- `pnpm astro check`: 0/0/0.
- 24 de 24 prompts, 1 `h1` y 5 `<script>`.
- `dist/index.html` pesa 249 986 B (el mismo largo, porque `h3` y `h4` miden igual) y 51 423 B gzip (−16 B).
- `git diff --stat` de `package.json`, `pnpm-lock.yaml`, `astro.config.mjs` y `wrangler.jsonc` vacío.

**Qué queda para Rendimiento:**
- El TBT publicado (257 ms antes de los ajustes) sigue viniendo del layout de la página completa, y `content-visibility` no lo resolvió.
- Si la medición publicada después del merge sigue bajo 95, la opción que queda es más profunda: plegar o dividir el contenido de las unidades. Cambia la lectura y requiere una decisión nueva.
- En local, la mediana con el ajuste 1 da 98.

## Decisiones tomadas

- No se ajustó nada por cuenta propia, como pidió el desarrollador. En la segunda pasada solo se aplicaron los 2 ajustes aprobados.
- `content-visibility` se revirtió según la regla que fijó el desarrollador: si Rendimiento no mejora, se revierte.
- Los 6 subtítulos pasan a `h3` con las mismas clases, sin tocar el contenido ni el orden.
- El peso del HTML se mantiene. El aumento de 370 B no explica el TBT, que viene del layout de toda la página y no de la descarga (LCP 1,33 a 1,58 s).
- La 04-03 queda Terminada con lo que dijo el desarrollador el 2026-11-18: 360 px y ambos modos, la 404 en producción y las visitas en Web Analytics.

## Criterios de aceptación

Ver la iteración: 2 de 6 marcados (peso y jerarquía, en la segunda pasada). Los de Lighthouse local y publicado, la jerarquía, las regresiones y el término de la épica quedan sin marcar, cada uno con su motivo.

## Pasos del desarrollador

1. Revisión manual con `pnpm build` y `pnpm preview`:
   - Los subtítulos de las 4 unidades (Objetivo, Mini-proyecto, Descargas, Recursos, Entregable y «Terminado cuando…») se ven igual que antes, en 360 px y en escritorio y en ambos modos.
   - Las píldoras U1 a U4 llevan con el teclado (Tab y Enter) a `#unidad-N` en la posición correcta.
   - La barra de desplazamiento se mueve de forma normal.
   - En 360 px no hay desborde horizontal.
2. Hacer el commit con el mensaje sugerido y el merge a `main`.
3. Esperar a que Cloudflare Workers Builds termine el despliegue y confirmarlo en el panel.
4. Pedir la medición de la URL publicada, con el mismo método.
5. Entregar las fechas de las 4 clases del cliente, para fijar el hito.
6. Pedir el cierre de la épica 04 en un prompt aparte.

## Pendientes y riesgos

- La nota de Rendimiento varía hasta 7 puntos entre corridas en este equipo. Las medianas cerca de 95 pueden cambiar de lado.
- Faltan las fechas de las clases (campo «Entrega comprometida» del registro, dato del cliente) y el cierre de la épica 04.

## Revisión

- **Resultado frente al objetivo:** medido completo. Las metas no se cumplen todavía: Accesibilidad 98 en todos los casos y Rendimiento publicado 94.
- **Qué aprendimos:**
  - Medir sin Web Analytics descartó el script como causa.
  - El costo está en el layout de la página única, no en los bytes ni en el JavaScript.
  - En `localhost`, Buenas prácticas baja por CORS del beacon, así que esa nota se juzga en la URL publicada.
- **Segunda pasada:**
  - `content-visibility` no es gratis en una página de anclas: empeoró el TBT y confundió a axe con contenido sin dibujar. Medir cada ajuste por separado permitió conservar el de los títulos y descartar este.
  - Accesibilidad local llegó a 100.
- **Qué cambia para lo que sigue:** se mide la URL publicada después del merge. Si Rendimiento sigue bajo 95, se decide entre plegar o dividir el contenido, y luego se cierra la épica.

## Commit sugerido

- Primera pasada (commit c962a64): `Épica 4 - Iteración 04-04: mide Lighthouse móvil en local, sin Web Analytics y publicado (94/98/100/100), y propone ajustar títulos y content-visibility`
- Segunda pasada: `Épica 4 - Iteración 04-04: pasa a h3 los 6 subtítulos de las fichas (Accesibilidad local 100) y revierte content-visibility por empeorar TBT y Accesibilidad`
