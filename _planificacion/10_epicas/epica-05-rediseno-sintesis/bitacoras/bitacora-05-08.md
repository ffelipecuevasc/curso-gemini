# Bitácora 05-08 · Pulido y verificación final del rediseño

- **Fecha:** 2026-11-20
- **Agente:** Claude Code (Opus 5.5)
- **Rama:** iteracion/05-08-verificacion (desde `main` en `47b063b`)
- **Estado final:** Terminada (2026-11-20: el desarrollador hizo las mediciones C1 a C9 y la revisión del sitio en su notebook y en un teléfono, sin observaciones; dicho por él, no verificado por el agente)

## Resumen

Paso 0: 05-07 `Terminada` (pruebas manuales sin observaciones y fondo del modal sin fundido aceptado, dicho por el desarrollador y no verificado por el agente) y P-017 `Aplicada` (comprobada con `grep` en `DESIGN.md`). Luego se midió el criterio de término que puede medir el agente:
- Lighthouse móvil publicado: **98/100/100/100**, frente a 94 y 87 en la 04-04.
- Lighthouse local, móvil y escritorio.
- Detector de Impeccable 4.10.0: solo hallazgos informativos.
- Material de conducción: 0.
- Regresiones sin cambios.
- Comparación completa de `DESIGN.md` con el código: 5 propuestas nuevas (P-018 a P-022).

No se cambió código: el diff de `src/`, `public/` y la configuración contra `21e6c18` tiene 0 líneas.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `_planificacion/00_producto/propuestas-documentos-protegidos.md` | P-017 `Aplicada`; P-018 a P-022 nuevas (`Pendiente`). |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/definicion-epica-05.md` | Con fecha 2026-11-20: 1 clave en la tarjeta, 1774 B de JS, nota de 1366 × 657, 05-07 `Terminada`, 05-08 `En revisión` y enlace a la bitácora de cierre. Los criterios de término no cambian. |
| `…/iteracion-05-07-efectos.md`, `…/bitacoras/bitacora-05-07.md` | 05-07 `Terminada` (Paso 0). |
| `…/iteracion-05-08-verificacion.md` | `En revisión` y decisiones del desarrollador. |
| `…/bitacoras/bitacora-05-08.md` y `…/bitacoras/bitacora-05-cierre.md` | Nuevas. |
| `_planificacion/00_producto/registro-pendientes.md` | Paso 0 (fila 25, 05-07, P-017 fuera de «Decisiones por tomar»), fila 26, 05-08 e historial. |
| `_planificacion/00_producto/registro-archivo.md` | Una fila de historial, solo en el Paso 0 (límite de 50). Después no se movió ninguna fila, por indicación del desarrollador. |

## Método de medición

- Equipo: Windows 10 Pro 10.0.19045, Node 24.16.0 y PNPM 12.21.0.
- Navegador y herramienta: Google Chrome 157.0.8103.79 sin interfaz (`--headless=new`, con `CHROME_PATH`) y Lighthouse 13.6.0 con `pnpm dlx` (no se agregó al repositorio).
- Perfil: móvil por defecto (CPU ×4, RTT 150 ms y 1,6 Mbps); escritorio con `--preset=desktop`.
- 3 corridas por caso, alternadas, y su mediana.
- No se usó PageSpeed Insights ni ninguna clave.

## Mediciones

### Lighthouse móvil sobre la URL publicada (`main` 47b063b, con la 05-07)

| Corrida | Rendimiento / Accesibilidad / Buenas prácticas / SEO | LCP | CLS | TBT | benchmarkIndex |
| :------ | :---------------------- | :-- | :-- | :-- | :------------- |
| 1 | 95 / 100 / 100 / 100 | 1,54 s | 0 | 240 ms | 1866 |
| 2 | 98 / 100 / 100 / 100 | 1,51 s | 0 | 136 ms | 1307 |
| 3 | 98 / 100 / 100 / 100 | 1,51 s | 0 | 165 ms | 1685 |
| **Mediana** | **98 / 100 / 100 / 100** | **1,51 s** | **0** | **165 ms** | — |
| 04-04, primera lectura publicada | 94 / 98 / 100 / 100 | — | — | — | — |
| 04-04, después del merge (e120465) | 87 / 100 / 100 / 100 | 1,58 s | 0 | 496 ms | — |

El elemento LCP es el `h1` («Gemini & Google Suite en el Entorno Laboral») en las 3 corridas. El TBT viene sobre todo de «Estilo y diseño» (556 a 633 ms de trabajo del hilo principal) y de las tareas largas del documento (220 a 255 ms). La evaluación de scripts es de 120 a 154 ms y el beacon pesa de 68 a 86 ms.

### Lighthouse local sobre `pnpm preview` (puerto 4333)

| Caso | Corridas (Rendimiento · LCP s · TBT ms · benchmarkIndex) | Mediana: notas | LCP | CLS | TBT |
| :--- | :-------------------------------------------- | :------------- | :-- | :-- | :-- |
| Móvil con beacon | 95 · 2,63 · 146 · 1064 / 96 · 1,21 · 224 · 1416 / 91 · 2,62 · 285 · 1381 | 95 / 100 / 96 / 100 | 2,62 s | 0,0002 | 224 ms |
| Móvil sin beacon | 100 · 1,14 · 72 · 941 / 97 · 1,98 · 172 · 1426 / 97 · 1,99 · 167 · 1848 | 97 / 100 / 100 / 100 | 1,98 s | 0,0002 | 167 ms |
| Escritorio con beacon (informativo) | 100 · 0,73 · 0 · 1313 / 100 · 0,69 · 0 · 1380 / 100 · 0,30 · 0 · 1964 | 100 / 100 / 96 / 100 | 0,69 s | 0,0002 | 0 ms |

- El elemento LCP es el `h1` en las 9 corridas.
- Buenas prácticas da 96 con beacon por el error CORS del beacon en localhost; sin beacon da 100, igual que en la 04-04 y la 05-07.
- **Hallazgo:** con el **mismo código** que midió la 05-07 (`git diff 21e6c18` de `src/`, `public/` y configuración: 0 líneas), la mediana móvil con beacon bajó de 99 a 95 y una corrida dio 91, con LCP de 2,6 s en 2 de 3 corridas.
  - El benchmarkIndex del equipo bajó a entre 941 y 1848, contra 1425 a 2142 en la 05-07.
  - El desglose observado del LCP no cambió (TTFB de 19 a 24 ms; retraso de render de 453 a 575 ms).
  - La causa medida es la carga del equipo, no el sitio. La lectura que vale para el criterio es la publicada (98).

## Material de conducción en `dist/index.html`

`al azar` 0, `Pregunta para el grupo` 0, `semáforo` 0, `Vitrina` 0, `Demo Day` 0 y patrón `\(\d+ min\)` 0 (buscado con Node). Los 56 «N min» del texto visible son las duraciones de clase y de bloque («Bloque 1 · 5 min»), que `DESIGN.md` pide en tarjetas y cabeceras; no son minutos de subpuntos.

## Detector de Impeccable

- Paquete: `impeccable` 4.10.0. `pnpm view` da el repositorio `git+https://github.com/pbakaus/impeccable.git` y el mantenedor `paulbakaus`.
- Se ejecutó solo `pnpm dlx impeccable@4.10.0 detect --json`, desde el scratchpad, con la salida fuera del repositorio. `git status` no mostró archivos nuevos.
- **`src/`:** `[]`, 0 hallazgos. El detector advierte que en `.astro`, `.css` y `.ts` solo aplica reglas de expresiones regulares (34 archivos), así que no es una revisión completa. La configuración que sugiere (`.impeccable/config.json`) no se creó, porque escribiría en el proyecto.
- **URL de `pnpm preview`:** 1 hallazgo en 1280 × 800 y 5 en 390 × 844. Todos son `straggler` (una palabra sola en la última línea), de severidad **advisory**. Ninguno es de contraste, texto pequeño, diseño o accesibilidad.

| Hallazgo (selector · palabra sola) | Ancho | Decisión |
| :--- | :--- | :--- |
| Objetivo de la cabecera de la U1 · «prompts.» | 1280 y 390 | Justificado |
| `#ruta-u2-proyecto` · «GTD» | 390 | Justificado |
| Segundo `li` de la trayectoria (instructor) · «2026).» | 390 | Justificado |
| Nombre del curso en el pie · «Laboral» | 390 | Justificado |
| Aviso del pie · «públicos» | 390 | Justificado |

**Justificación común:** son avisos tipográficos que dependen del ancho. La corrección que sugiere el detector (`text-wrap: pretty` en el cuerpo) cambia cómo se cortan las líneas en toda la página, y el agente no puede medir en navegador que no altere el alto de las unidades en 1440 × 900. El texto viene del documento del curso, que no se reescribe para ajustar líneas. Queda como propuesta fuera de alcance en `registro-pendientes.md`.

## `cursor: pointer`

La regla base `button:not(:disabled),[role=button]:not(:disabled),summary,label[for]{cursor:pointer}` está 1 vez en el CSS compilado. Los enlaces usan el cursor del navegador. El fragmento C2 lo comprueba en pantalla.

## Comparación de `DESIGN.md` con el código

- **Tokens:** los 13 de color de 2.1 y 2.2, en claro y en oscuro, más los 4 colores de unidad con su texto encima y `--color-borde-u3` oscuro (`#00B0E8`): 0 diferencias. Comparación hecha con un script contra `@theme` y `[data-modo="oscuro"]`.
- **Diferencias confirmadas, cada una con su propuesta:**
  1. **P-018:** a la tabla 2.3 le falta `#5DC9FF` sobre `#00131D`. El agente calculó **10,14:1**, igual que el desarrollador (fórmula y controles en la propuesta).
  2. **P-019:** la fila «Pie» no nombra «Todos los derechos reservados.».
  3. **P-020:** las tarjetas de bloque usan 16 px en escritorio (decisión del desarrollador: excepción).
  4. **P-021:** la viñeta «Retícula» dice 4 columnas desde 1024 px; el sitio usa una ruta 2 × 2 y unidades en 3 columnas, como ya dicen las filas de la sección 5.
  5. **P-022:** en «Bloque de prompt», «Copiar» va arriba a la derecha solo desde 640 px, y el prompt usa 14 px (`text-sm`).
- **Sin diferencia:** encabezado, modal (720 px, `min(85dvh, 760px)`, fondo al 70 % con 4 px de desenfoque), tarjeta de descarga, logotipos de GTD y Capacita (2, dentro de `#inicio`), movimiento (P-017) e implementación de tokens.
- **Riesgo aparte, no es una diferencia:** falsa afordancia de `.tarjeta`. La tarjeta de bloque sube 4 px y aumenta su sombra al pasar el puntero sin ser clicable; los clics están en sus botones. `DESIGN.md` lo pide y el desarrollador lo decidió así (2026-11-20). Si en la revisión en notebook alguien intenta pinchar la tarjeta, la palanca es quitar la subida de `.tarjeta` y dejarla solo en `.tarjeta-ruta`.

## Verificación de regresiones (agente)

- `pnpm build`: sin advertencias, guardia en 0 marcadores. `pnpm astro check`: 0 errores, 0 advertencias, 0 sugerencias.
- Prompts: **24 de 24 idénticos a su fuente** (frontmatter YAML de `src/content/bloques/` contra `<code>` de `dist/index.html`, con las entidades decodificadas).
- 1 `h1`; 300 `id`, 0 repetidos; 54 `<dialog>`; 7 anclas presentes; 0 `section` sin `aria-labelledby`.
- JavaScript propio: 6 etiquetas, **1774 B gzip** (≤ 3072).
- `dist/index.html`: **346 277 B (61 883 B gzip)**. Es el mismo peso que la 05-07; en la 05-04 eran 327 567 B.
- Servidor de `pnpm preview` apagado: el puerto 4333 rechaza la conexión.

## Procedimiento para el desarrollador (`pnpm build && pnpm preview`, luego notebook y teléfono)

**C1 · Alto de cada unidad** (1440 × 900 y 1366 × 657, claro y oscuro). Esperado: en 1440 × 900, `alto` ≤ `disponible`; en 1366 × 657 no se cumple (decisión del desarrollador, ≈ 1,4 pantallas).
`[1,2,3,4].map(n=>({unidad:n,alto:Math.round(document.getElementById('unidad-'+n).getBoundingClientRect().height),disponible:innerHeight-document.querySelector('.encabezado-sitio').offsetHeight}))`

**C2 · Página completa.** Esperado: ≤ 7 en 1440 × 900; más de 7 en 1366 × 657.
`+(document.documentElement.scrollHeight/innerHeight).toFixed(2)`

**C3 · Palabras por unidad fuera de los modales** (con JavaScript, modales cerrados; incluye títulos y el texto para lectores de pantalla). Esperado: ≤ 300 cada una.
`[1,2,3,4].map(n=>[n,document.getElementById('unidad-'+n).innerText.split(/\s+/).filter(w=>/[\p{L}\d]/u.test(w)).length])`

**C4 · `cursor: pointer` y hover.** Esperado: `[]`. Después pasa el mouse por un botón de cada tipo y por las píldoras: el cambio se ve.
`[...document.querySelectorAll('a[href],button,summary')].filter(e=>e.checkVisibility()&&getComputedStyle(e).cursor!=='pointer').map(e=>e.outerHTML.slice(0,80))`

**C5 · Teclado.** Tab desde «Saltar al contenido principal» hasta el pie: foco visible en todo; «Ver detalle» abre, Esc cierra y el foco vuelve; un Tab sobre un botón de la tarjeta la sube, y un clic no la deja arriba.

**C6 · Lector de pantalla** (NVDA o VoiceOver). Un modal anuncia su título y su descripción; «Copiar» anuncia «Copiado».

**C7 · Sin JavaScript** (DevTools > Configuración > Desactivar JavaScript). Esperado: modo claro, contenido de los modales en su lugar, sin botones que no funcionen. El fragmento se ejecuta antes de desactivar JavaScript, para comparar los botones visibles:
`document.querySelectorAll('[data-abrir-modal]').length`

**C8 · Movimiento reducido** (Rendering > `prefers-reduced-motion: reduce`). Recorre la página, abre un modal y cambia de modo. Esperado: `0`.
`document.getAnimations().length`

**C9 · Notebook y teléfono.** Revisión del sitio publicado, en claro y en oscuro, con la fecha.

**Resultado del procedimiento (2026-11-20):** C1 a C9: cumplido, dicho por el desarrollador, sin observaciones y sin cifras entregadas; incluye la revisión en notebook y en teléfono. C1 y C2 se cumplen en 1440 × 900; en 1366 × 657 no (decisión del desarrollador). No verificado por el agente.

## Criterios de aceptación de la iteración

- [x] Cada criterio de término marcado con su evidencia: los del agente, con su medición, en la bitácora de cierre; C1 a C4: cumplido, dicho por el desarrollador (2026-11-20, sin cifras entregadas), en 1440 × 900 (en 1366 × 657, C1 y C2 no se cumplen por decisión del desarrollador).
- [x] Lighthouse móvil publicado: 98/100/100/100, LCP 1,51 s, CLS 0, TBT 165 ms (mediana de 3); tabla comparada con la 04-04.
- [x] Detector de Impeccable sin hallazgos sin resolver o sin justificar: 6 advisory, todos justificados.
- [x] Sin JavaScript, la página se lee completa en modo claro: cumplido, dicho por el desarrollador (C7, 2026-11-20).
- [x] `DESIGN.md` describe el sitio o hay una propuesta pendiente por diferencia: P-018 a P-022.
- [x] Regresiones: build sin advertencias, check 0/0/0, 24 de 24 prompts idénticos a su fuente y 1 `h1`.

## Decisiones tomadas

- Del desarrollador (2026-11-20): detector de Impeccable con versión fija y solo `detect`; 16 px en las tarjetas como excepción (P-020); notas de la definición sin cambiar los criterios de término.
- Del agente: justificar los 6 `straggler` en vez de aplicar `text-wrap: pretty`, para no arriesgar el alto en 1440 × 900 sin medirlo en navegador; separar en P-021 y P-022 las dos diferencias nuevas, en vez de sumarlas a la P-020.

## Pendientes y riesgos

- P-018 a P-022 aplicadas por el desarrollador (comprobadas con `grep` el 2026-11-21, en la corrección de cierre de la épica); P-022 deja los 14 px del prompt como excepción.
- El margen de Rendimiento móvil es fino: la peor corrida publicada dio 95, y en local, con el equipo cargado, hubo una de 91. Si baja de 95, la palanca que proponen los datos es el peso del HTML y el estilo de los 54 modales antes que el brillo (cuyo costo es solo al mover el puntero).
- El historial del registro quedó con 51 filas hasta el cierre de la épica; la corrección de cierre archivó la más antigua.
- Falsa afordancia de `.tarjeta` (ver la comparación de `DESIGN.md`).

## Revisión

- **Resultado frente al objetivo:** el criterio medible por el agente se cumple en la URL publicada. Faltan las mediciones en navegador (C1 a C9) y la confirmación del desarrollador.
- **Qué aprendimos:** la nota local depende mucho de la carga del equipo (con el mismo código, de 99 a 95). La lectura publicada y el benchmarkIndex de cada corrida son los que permiten interpretarla.
- **Qué cambia para lo que sigue:** al cerrar la épica, el desarrollador decide las P-018 a P-022 y si `text-wrap: pretty` entra en la épica siguiente.

## Commit sugerido

`Épica 5 - Iteración 05-08: mide Lighthouse publicado (98/100/100/100), corre Impeccable 4.10.0 (6 avisos justificados), propone P-018 a P-022 y cierra la 05-07 y la P-017`
