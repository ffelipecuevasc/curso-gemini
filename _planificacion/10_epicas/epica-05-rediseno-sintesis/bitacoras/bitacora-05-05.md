# Bitácora 05-05 · La unidad en una pantalla

- **Fecha:** 2026-11-20
- **Agente:** Claude Code (Sonnet 5.5)
- **Rama:** iteracion/05-05-unidad-una-pantalla
- **Estado final:** En revisión

## Resumen

Paso 0: se cierra la 05-04 como `Terminada` (prueba en navegador dicha por el desarrollador el 2026-11-19, sin observaciones; no la verificó el agente) y la corrección 18.3. Después se rehace la sección de unidad: cabecera con el color de la unidad (`CabeceraUnidad.astro`), cuadrícula de 6 tarjetas (`TarjetaBloque.astro` × 5 y `TarjetaTerminado.astro`) y todo el detalle en 53 modales. `Modal.astro` queda solo con el `<dialog>`, `BotonModal.astro` dibuja el botón, `BloqueClase.astro` pasa a `ModalesBloque.astro` (`git mv`, aprobado) y `src/lib/modales.ts` da el mismo `id` a botón y modal. 0 B de JavaScript nuevo. **La unidad no cabe en una pantalla** según la medición del agente (secciones de 986 a 1090 px contra 823 px disponibles en 1440 × 900), y la U1 pasa de 300 palabras visibles (306). Las decisiones quedan en el desarrollador, que mide primero.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `src/components/CabeceraUnidad.astro` | Nuevo. Bloque de color, `h2`, `objetivoBreve`, barra del tramo (RDA-008) y botones: píldoras «Antes de empezar» y «Cierre», «Sobre la unidad», «Recursos (n)» y «Descargas (n)». |
| `src/components/TarjetaBloque.astro` | Nuevo. Número y minutos, `h3`, «Qué harás», hasta 2 claves y botones «Ver detalle» y de prompts. |
| `src/components/TarjetaTerminado.astro` | Nuevo. Entregable y botón «Terminado cuando… (n)». |
| `src/components/BotonModal.astro` | Nuevo. Botón que abre un modal (`contorno` y `sobre-color`), solo con JavaScript. |
| `src/components/ModalesBloque.astro` | Renombrado de `BloqueClase.astro` (`git mv`). Dibuja solo los `<dialog>` de detalle y de prompts de un bloque. |
| `src/components/Modal.astro` | Sin botón: solo el `<dialog>`; la franja sale de `src/lib/colores-unidad.ts`. |
| `src/components/SeccionUnidad.astro` | Rehecha: cabecera, cuadrícula y, debajo, los 8 modales de la unidad más los de cada bloque. Sin tabla de bloques ni ficha. |
| `src/lib/modales.ts`, `src/lib/colores-unidad.ts` | Nuevos. `id` de modales y etiquetas de prompts; clases de color por unidad. |
| `src/styles/global.css` | `--alto-encabezado` (4,8125 rem = 77 px), clases `.seccion-unidad`, `.cabecera-unidad`, `.titulo-unidad`, `.cuadricula-bloques`, `.tarjeta`, `.boton-sobre-color` y la regla de alto (solo con JavaScript, desde 1024 × 640). |
| `src/layouts/Base.astro` | `scroll-pt-24` → `scroll-pt-[var(--alto-encabezado)]`. |
| `_planificacion/…` | Iteración 05-05 (estado, decisiones, contenido aprobado, criterios), definición, registro, registro-archivo, propuesta P-014; Paso 0: 05-04, 18.3 y fila 22 en `Terminada`. |

## Verificación

Scripts en el directorio temporal de la sesión sobre `dist/index.html`; las mediciones de alto son del agente en Edge headless (modo claro) y **no reemplazan** las tuyas.

- `pnpm build`: sin advertencias; guardia en 0 marcadores. `pnpm astro check`: 0 errores, 0 advertencias, 0 sugerencias.
- Modales: 53 `<dialog>` (26 detalle, 13 prompts, 4 recursos, 2 descargas, 4 «sobre», 4 «terminado»); 298 `id`, 0 repetidos; 53 botones que abren, todos con su `<dialog>`; 0 `aria-controls` huérfanos.
- Prompts: 24 de 24 idénticos a su fuente; la línea de U2 · 3 exacta y 0 marcadores `data-prompt`.
- Encabezados: 1 `h1`; 0 saltos de nivel con JavaScript y 0 sin él (h2 → h3 de las tarjetas → h3 y h4 de los modales). Todas las `section` con `aria-labelledby`.
- Sin JavaScript: los 53 botones que abren y los 24 de copiar llevan `hidden`; los 53 «Cerrar» los oculta el CSS; los `<dialog>` quedan como bloques bajo la cuadrícula. Texto repetido: solo enlaces de recursos (unidad y «Profundiza») y 1 clave que repite una frase del cuerpo del bloque (consecuencia de la RDA-012).
- JavaScript propio: 1295 B gzip, igual que al cerrar la 05-04 (0 B nuevos); 5 `<script>` propios más el de Web Analytics.
- Peso: `dist/index.html` 327 567 B → 338 599 B (+11 032 B); gzip 58 780 → 60 517 B (+1 737 B). Salen la ficha y la tabla; entran 26 tarjetas, 4 cabeceras y 8 modales nuevos.
- Palabras visibles fuera de los modales (sin texto solo para lectores de pantalla): U1 306, U2 283, U3 283, U4 268 por script; Edge headless: 305, 283, 283, 267.

### Alto (Edge headless, 05-04 contra 05-05; px)

| Medición | 05-04 (línea base) | 05-05 |
| :------- | :----------------- | :---- |
| Encabezado, 1440 y 1366 px | 77 | 77 |
| U1 / U2 / U3 / U4 en 1440 × 900 | 2712 / 3495 / 3455 / 3347 | 1090 / 1056 / 986 / 1007 |
| U1 / U2 / U3 / U4 en 1366 × 657 | iguales (contenedor de 1100 px) | iguales |
| Disponible (`innerHeight` − 77) | 823 en 1440 × 900 y 580 en 1366 × 657 | igual |
| 500 × 740 (mínimo de Edge; 360 px lo mides tú) | 3321 / 4072 / 4235 / 4108 | 2279 / 2402 / 2330 / 2335 (≤ 3,3 ventanas) |
| 1024 × 700 | — | 1138 / 1131 / 1059 / 1031 |
| Cabecera de la unidad / tarjeta | — | 230 a 263 / 341 a 389 |

Causa: con tarjetas de 340 px de ancho, «Qué harás» ocupa 2 o 3 líneas, cada clave 2, y el botón 44 px; dos filas suman unos 730 px más la cabecera. El encabezado real mide **77 px, no 69**: las píldoras (`lg:p-1` más `min-h-11`) suman 8 px que el cálculo por marcado no consideró; `--alto-encabezado` ya usa 77.

## Criterios de aceptación

Ver `iteracion-05-05-unidad-una-pantalla.md`. Marcados con evidencia: texto de 16 px y objetivos táctiles, sin JavaScript y regresiones. Sin marcar: alto en 1440 × 900 y 1366 × 657 (no cumple en la medición del agente), 360 px, clics de las tarjetas y palabras (U1 306 de 300).

## Procedimiento para el desarrollador (`pnpm preview`; no verificado por el agente)

Cada fragmento se pega en la consola del navegador. Resultado esperado = lo que midió el agente en Edge headless; el tuyo manda.

1. **Alto del encabezado** (esperado 77): `document.querySelector('header').offsetHeight`
2. **Alto de cada unidad y botones dentro de la ventana** (1440 × 900 y 1366 × 657, claro y oscuro; esperado del agente: `cabe: false`, `alto` 986 a 1090, `disponible` 823 y 580):
   `[...document.querySelectorAll('section[id^="unidad-"]')].map(s=>{s.scrollIntoView({behavior:'instant'});const h=document.querySelector('header').offsetHeight,r=s.getBoundingClientRect(),fuera=[...s.querySelectorAll('button')].filter(b=>!b.closest('dialog')&&b.offsetParent).filter(b=>{const q=b.getBoundingClientRect();return q.top<h||q.bottom>innerHeight}).length;return{id:s.id,alto:Math.round(r.height),disponible:innerHeight-h,cabe:r.height<=innerHeight-h,botonesFuera:fuera}})`
3. **Palabras visibles por unidad** (sin `dialog`, sin texto solo para lectores de pantalla; esperado 305, 283, 283, 267):
   `[...document.querySelectorAll('section[id^="unidad-"]')].map(s=>{const c=s.cloneNode(true);c.querySelectorAll('dialog,.sr-only,[aria-hidden="true"]').forEach(n=>n.remove());c.querySelectorAll('*').forEach(n=>n.append(' '));return [s.id,(c.textContent.match(/[\p{L}\p{N}][\p{L}\p{N}'’.,%:«»()…-]*/gu)||[]).length]})`
4. **360 × 740** (límite 4; esperado ≤ 3,3 a 500 px): `[...document.querySelectorAll('section[id^="unidad-"]')].map(s=>({id:s.id,ventanas:+(s.getBoundingClientRect().height/innerHeight).toFixed(2)}))`
5. **Objetivos táctiles menores de 44 px** (esperado `[]`): `[...document.querySelectorAll('section[id^="unidad-"] button')].filter(b=>!b.closest('dialog')&&b.offsetParent).map(b=>Math.round(b.getBoundingClientRect().height)).filter(h=>h<44)`
6. **Teclado** (1440 px): Tab recorre cabecera y tarjetas en orden; cada botón abre su modal; Esc cierra y el foco vuelve al botón. En la cabecera, el foco se ve (contorno del color del texto del bloque) en U1 a U4.
7. **Hover y presionado de la cabecera:** al pasar el puntero, el botón invierte los colores del bloque (fondo = color del texto) en las 4 unidades y ambos modos; al presionar, se achica un poco.
8. **Modales nuevos:** «Sobre la unidad» (objetivo, mini-proyecto y nivel; sin entregable), «Terminado cuando… (n)» (casillas que se marcan y se pierden al recargar), píldoras «Antes de empezar · 5 min» y «Cierre · N min» (U2 a U4; U1 no las tiene).
9. **Anclas:** «U1» a «U4» del encabezado y las tarjetas de la ruta dejan el título de la unidad bajo el encabezado; revisa también la píldora activa (`aria-current`), porque las secciones son más cortas que antes.
10. **Sin JavaScript** (DevTools > Depurador > Desactivar JavaScript): sin botones que abren ni de copiar; tarjetas con su texto y, debajo, «Sobre la unidad», los modales de cada bloque, «Terminado cuando…», recursos y descargas, una sola vez; la unidad no se estira a la pantalla.
11. **360, 640 y 1024 px, ambos modos:** sin desplazamiento horizontal; la franja de la U3 en oscuro se ve (usa el borde claro).

## Decisiones tomadas

- Las 5 del desarrollador (2026-11-20) están en la iteración: sexta tarjeta con modal (P-014), renombre a `ModalesBloque.astro`, entregable solo en la tarjeta, **no** compactar pantallas bajas (medir primero) y `scroll-pt-[var(--alto-encabezado)]`.
- **Desviación aprobada:** `scroll-padding-top` global en `<html>` en lugar de `scroll-margin-top` por sección. Con la sección en `min-height` solo desde 1024 × 640 y el encabezado de 77 px, un solo valor sirve a las 4 unidades y a `#ruta` e `#instructor`; mantener `scroll-pt-24` y `scroll-margin-top` duplicaría el desfase.
- `--alto-encabezado` = 77 px, medido en Edge headless (el cálculo por marcado daba 69). **Ojo en móvil:** a 500 px de ancho el encabezado mide 81 px (con el menú cerrado), 4 px más que el desfase de 77 px, así que el borde superior de la sección queda 4 px bajo el encabezado al navegar a una ancla; el valor que aprobaste es el de escritorio. Se comprueba en 360 px (punto 9) y, si molesta, se corrige con un valor propio bajo 1024 px.
- La regla de alto es solo `min-height` (no `max-height`): el texto no se recorta si no cabe. Va bajo `html[data-js]` y desde 1024 × 640.
- Las clases repetidas (tarjeta, cabecera, cuadrícula, botones) viven en `global.css` con `@apply`, como en la 05-04; los colores por unidad, en `src/lib/colores-unidad.ts`. `BloqueUnidad.astro` (ruta) conserva su mapa propio hasta la 05-06.
- `.boton-sobre-color` usa `--bloque` y `--sobre-bloque` (variables que publica el bloque de color) en lugar de `currentColor`: con `currentColor` el hover no puede conocer el color del fondo original, y en U1 el foco `#007EA7` sería invisible sobre el bloque.
- En la tarjeta de U3, la franja superior usa en modo oscuro el borde claro (`oscuro:border-t-borde-u3`); `#003B51` sobre `#00131D` se perdía.
- El texto «Bloque» de la tarjeta y «Qué harás» son solo para lectores de pantalla, para no sumar palabras visibles; el recuento los excluye.
- La información de tipo de bloque, reparto microcharla/práctica y `holguraMin` ya no se muestra en la página (salía en la tabla); queda en el contenido, sin uso.
- `Modal.astro` sigue exigiendo `unidad` (color de la franja): el modal del instructor de la 05-06 necesita una franja neutra.

## Pendientes y riesgos

- **No cabe en una pantalla ni en 1440 × 900** (986 a 1090 px contra 823) **y menos en 1366 × 657** (580). Opciones, sin hacer nada de esto por cuenta propia: (a) ancho del contenedor de la unidad mayor que 1100 px, que cambia `DESIGN.md`; (b) una sola clave por tarjeta, que cambia contenido aprobado; (c) interlínea menor en tarjetas, que sale de la regla de 1,6; (d) la compactación de pantallas bajas que rechazaste; (e) dejar la unidad en 1,2 ventanas y corregir los criterios. Cualquiera de ellas necesita tu decisión con tus mediciones.
- **U1 supera las 300 palabras** (306): hay que quitar unas 6 palabras de interfaz o de contenido.
- El HTML creció 11 KB (1,7 KB gzip): se vigila en la 05-07 y la 05-08.
- **P-014 pendiente** de aplicar en `DESIGN.md`.
- Las secciones dejaron de ser largas: puede cambiar qué píldora marca el observador del encabezado; se revisa en el procedimiento (punto 9).

## Ajuste de alto (2026-11-20, segundo commit)

Decisión del desarrollador: tres palancas en orden, midiendo tras cada una. Altos medidos por el agente en Edge headless (no probados en tu navegador); disponible = `innerHeight` − 77 px del encabezado. Claro y oscuro dieron lo mismo en todas las mediciones.

| Paso | 1440 × 900 (U1/U2/U3/U4), claro y oscuro | Disponible | ¿Caben? | 1366 × 657 (U1/U2/U3/U4) | Disponible |
| :--- | :--------------------------------------- | :--------- | :------ | :----------------------- | :--------- |
| Inicio | 1090 / 1056 / 986 / 1007 | 823 | No | 1090 / 1056 / 986 / 1007 | 580 |
| 1. Espaciado | 1010 / 976 / 906 / 927 | 823 | No | 1010 / 976 / 906 / 927 | 580 |
| 2. + ancho hasta 1280 px | 904 / 904 / 906 / 879 | 823 | No | 904 / 904 / 906 / 879 | 580 |
| 3. + una clave | 823 / 823 / 823 / 823 (alto natural 783 a 810; la sección toma el mínimo de 823) | 823 | **Sí**, 0 botones fuera | 808 / 808 / 810 / 783 | 580 |

- **Palanca 1:** cabecera `px-5 py-4` y `gap-3`; cuadrícula `mt-3 gap-3`; tarjeta `gap-1.5`, `pt-3 pb-4`, sin `space-y-1` en las claves ni `pt-1` en los botones; sección `padding-block: 0.75rem`. La interlínea del texto sigue en 1,6 (`DESIGN.md`, sección 3); los `h3` ya usaban `leading-snug`. Texto mínimo 16 px y botones de 44 px sin cambios.
- **Palanca 2:** `.seccion-unidad` con `xl:max-w-[1280px]` (desde 1280 px de ancho). Contradice `DESIGN.md` §4: propuesta **P-015**, pendiente.
- **Palanca 3:** `TarjetaBloque.astro` muestra solo `sintesis.claves[0]`. **La segunda clave no se borró del contenido, pero hoy no se ve en ningún lugar**: no está en el modal de detalle (que muestra `resumen`, cuerpo y «Profundiza») y no se tocaron los modales. Afecta la síntesis aprobada en la 05-03 (U3 y U4) y en la 05-02 (U1 y U2), donde cada bloque tiene 2 claves, y la RDA-012 («1 o 2 frases… que se ven en la tarjeta»). Si quieres que se vea, la opción es mostrarla en el modal de detalle (cambio de modal, requiere tu aprobación). P-015 incluye la fila «Tarjeta de bloque».
- **Palabras:** U1 261, U2 235, U3 236, U4 226 (script); 260, 235, 236, 225 en Edge headless. Todas bajo 300: no hacen falta recortes.
- **Regresiones:** build sin advertencias, guardia en 0; `astro check` 0/0/0; 53 `<dialog>`, 298 `id` sin repetir; 24 de 24 prompts idénticos; 1 `h1`, 0 saltos; JS 1295 B gzip (0 B nuevos); diff sin `DESIGN.md`, `AGENTS.md` ni `README.md`.
- **Peso:** `dist/index.html` 338 599 B → 336 990 B (60 517 → 60 086 B gzip).
- **Margen:** en 1440 × 900 el alto natural deja 13 a 40 px libres; un título de bloque o una clave más larga puede volver a romperlo.

Los fragmentos de consola del procedimiento (puntos 1 a 5) siguen vigentes; esperado ahora en 1440 × 900: `cabe: true` y `botonesFuera: 0` en las 4 unidades.

## Cierre de la revisión (2026-11-20, tercer commit)

- **Segunda clave:** `ModalesBloque.astro` la muestra en el modal de detalle, tras el resumen, en un párrafo con «Otra idea clave:» (25 de 26 bloques; el que tiene una sola clave no muestra nada). La primera sigue solo en la tarjeta: sin JavaScript no hay texto duplicado.
- **1366 × 657:** se documenta como ≈ 1,4 pantallas (decisión del desarrollador); sin más compactación.
- **P-014 y P-015 siguen `Pendiente`:** `grep` en `DESIGN.md` de esta rama (`a7f6b56`, árbol limpio) no encuentra «1280», «primera clave», la variante «Terminado cuando…» del modal ni la fila «Secundario sobre el color de la unidad». El `DESIGN.md` con las propuestas aplicadas no está en la rama.
- **Verificación:** build sin advertencias, guardia en 0; `astro check` 0/0/0; 53 `<dialog>`, 298 `id` sin repetir; 24 de 24 prompts idénticos; 1 `h1`, 0 saltos con y sin JavaScript; texto repetido solo en enlaces de recursos; JS 1295 B gzip (0 B nuevos).
- **Peso:** `dist/index.html` 336 990 B → 340 390 B (60 086 → 60 536 B gzip).
- **Alto en 1440 × 900** (Edge headless, medido por el agente): sin cambios, porque la clave nueva está dentro de un modal.

| Modo | U1 / U2 / U3 / U4 | Disponible | Botones fuera |
| :--- | :---------------- | :--------- | :------------ |
| Claro | 823 / 823 / 823 / 823 | 823 | 0 |
| Oscuro | 823 / 823 / 823 / 823 | 823 | 0 |

- **Iteración 05-06:** se agregó la sección «Ajustes tras la 05-05» con los 8 choques y se sumó la 05-05 a «Depende de».
- **RDA-012:** actualización con la consecuencia (primera clave en la tarjeta, segunda en el modal de detalle).

## Revisión de la 05-06 (sin editar): lo que choca con lo construido

1. **Mini-proyecto completo «en la sección de la unidad»** (Riesgos): ya no está en la página; solo vive en el modal «Sobre la unidad». El `line-clamp` de la tarjeta de ruta lo deja sin versión completa visible.
2. **Barra de avance** (Alcance y tarea 3): `CabeceraUnidad.astro` ya dibuja una (pista `aria-hidden`, segmento con `margin-left` y `width` en %, texto con `sr-only`). Conviene extraerla a un `BarraAvance.astro` y que la usen la cabecera y `BloqueUnidad.astro`, para no duplicarla.
3. **Colores por unidad:** `BloqueUnidad.astro` repite el mapa que ya existe en `src/lib/colores-unidad.ts` (`bloqueUnidad`); debería importarlo.
4. **Modal del instructor:** `Modal.astro` exige `unidad` y pinta la franja con ella; hace falta una franja neutra o `unidad` opcional. El botón sale de `BotonModal.astro` (variante `contorno`), y el `id` conviene en `src/lib/modales.ts`.
5. **Objetivo «la página entera mida como máximo 7 pantallas»:** hoy la página mide 7046 px en 1440 × 900 (7,8 pantallas) y 6803 px en 1366 × 657 (10,4), con la portada y el instructor sin cambiar; depende de lo que se decida sobre el alto de las unidades.
6. **Alto del encabezado:** `--alto-encabezado` (77 px) ya existe y sirve para que la portada fusionada use `100dvh` menos el encabezado; ojo con la tarea 1 (medición del alto de portada, ruta e instructor): el script de Edge headless de la sesión sirve de ejemplo.
7. **«Depende de»:** menciona 05-01 y P-009; si reutiliza `BarraAvance`, `colores-unidad.ts` y `Modal`, también depende de la 05-05.
8. **Navegación:** la píldora activa del encabezado observa `#ruta`, `#unidad-N` e `#instructor`; con secciones más cortas hay que repetir el criterio de anclas y de `aria-current`.

## Revisión

- **Resultado frente al objetivo:** la estructura pedida (cabecera, 6 tarjetas, 8 modales de unidad, píldoras, sin tabla y sin JavaScript nuevo) está construida y verificada por script, pero el objetivo de ver cada unidad en una pantalla no se cumple con el diseño y el contenido aprobados: faltan entre 160 y 270 px en 1440 × 900 y más de 400 en 1366 × 657.
- **Qué aprendimos:** medir con un navegador real (Edge headless) cambió dos supuestos del plan, el alto del encabezado y el recuento de palabras (el texto solo para lectores de pantalla y la concatenación de `textContent`); conviene medir antes de estimar por marcado.
- **Qué cambia para lo que sigue:** la decisión sobre el alto de la unidad condiciona la 05-06 (7 pantallas) y los criterios de la 05-08; la 05-06 debe reutilizar `BarraAvance`, `colores-unidad.ts` y el modal.

## Commit sugerido

`Épica 5 - Iteración 05-05: rehace la unidad con cabecera y 6 tarjetas, separa botón y modal, agrega modales de unidad y de Terminado cuando y propone P-014; cierra la 05-04`
