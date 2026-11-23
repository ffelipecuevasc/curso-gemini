# Bitácora 06-06 · Verificación final del pulido (fase A, local)

- **Fecha:** 2026-11-22
- **Agente:** Claude Code (Opus 5.5)
- **Rama:** iteracion/06-06-verificacion (desde `main` en `103c745`)
- **Estado final:** Terminada (2026-11-22). Fase A en local; fase B en la rama `iteracion/06-06-cierre`, sobre la URL publicada (`main` en `d9ce2c0`), con la [bitácora de cierre](bitacora-06-cierre.md).

## Resumen

Paso 0: el desarrollador dio por terminada la 06-05 (dicho por él) y decidió que la meta del bloque 0 diga «Antes de empezar · {minutos} min · Unidad {unidad}». Apliqué ese único cambio en `ModalesBloque.astro`. Después medí en local lo que el agente puede medir: comprobaciones en `dist`, Lighthouse móvil y escritorio (mediana de 3), Lighthouse móvil con y sin la trama, Impeccable 4.10.0 sobre los archivos tocados en la épica y accesibilidad por código. Las diferencias entre `DESIGN.md` y el sitio quedaron reunidas en una sola propuesta, la P-028. Las mediciones en navegador (alto de las unidades, palabras, botones por tarjeta) quedan para el desarrollador, con los fragmentos de abajo.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `src/components/ModalesBloque.astro` | La meta usa una `etiqueta`: «Cierre» (sin número), «Antes de empezar» (número 0) o «Bloque n». |
| `_planificacion/00_producto/propuestas-documentos-protegidos.md` | P-028 nueva (`Pendiente`), con 4 pares de texto actual y propuesto. |
| `_planificacion/00_producto/registro-pendientes.md` y `registro-archivo.md` | Iteración activa, 06-05 y 06-06, backlog 31 y 32, «Decisiones por tomar» (sale el bloque 0 y entra la P-028), historial y una fila archivada. |
| `…/definicion-epica-06.md`, `…/iteracion-06-05-modales.md`, `…/iteracion-06-06-verificacion.md` | Estados y decisiones del 2026-11-22. |

## Verificación

### Método

- Equipo: Windows 10 Pro 10.0.19045, Node 24.16.0 y PNPM 12.21.0.
- Lighthouse 13.6.0 con `pnpm dlx` y Google Chrome sin interfaz (`--headless=new`, `CHROME_PATH`). Perfil móvil por defecto y escritorio con `--preset=desktop`.
- 3 corridas por caso, alternadas en 3 rondas (preview móvil, preview escritorio, copia con trama y copia sin trama), y su mediana.
- `pnpm preview --port 4333` para el sitio. Para comparar la trama, dos copias de `dist/` en el scratchpad, servidas por el mismo servidor estático de Node (4334 con trama y 4335 sin ella). La copia sin trama tiene una sola diferencia en el CSS compilado: se quitó `background-image` y `background-size` de la regla `body`.
- Al terminar, los 3 servidores se apagaron y los puertos 4333 a 4335 rechazan la conexión.

### Lighthouse local (mediana de 3)

| Caso | Corridas (Rendimiento · LCP s · TBT ms · benchmarkIndex) | Mediana R / A / BP / SEO | LCP | CLS | TBT |
| :--- | :--- | :--- | :-- | :-- | :-- |
| Móvil, `pnpm preview` | 97 · 1,17 · 186 · 1124 / 91 · 2,48 · 290 · 1373 / 93 · 1,29 · 306 · 1880 | **93 / 100 / 96 / 100** | 1,29 s | 0,0001 | 290 ms |
| Escritorio, `pnpm preview` | 100 · 0,55 · 0 · 1244 / 100 · 0,31 · 0 · 1313 / 100 · 0,37 · 16 · 1150 | **100 / 100 / 96 / 100** | 0,37 s | 0,0117 | 0 ms |
| Móvil, copia con trama | 86 · 2,83 · 243 / 92 · 2,72 · 27 / 91 · 2,74 · 123 | 91 / 100 / 96 / 100 | 2,74 s | 0,0001 | 123 ms |
| Móvil, copia sin trama | 80 · 4,23 · 144 / 77 · 4,09 · 253 / 88 · 2,73 · 202 | 80 / 100 / 96 / 100 | 4,09 s | 0,0001 | 202 ms |

- El elemento LCP es el `h1` («Gemini & Google Suite en el Entorno Laboral») en las 12 corridas.
- Buenas prácticas da 96 por el error CORS del beacon en localhost, igual que en la 05-08.
- **Trama:** sin ella, la mediana no sube; baja (80 contra 91), por la variación del LCP entre corridas. La trama no cuesta más de 2 puntos de Rendimiento, así que **no se propone la trama como SVG**. La copia se sirve sin compresión, por eso su LCP es más alto que el de `pnpm preview`. Lo que vale es la comparación entre las dos copias, no su valor absoluto.

### Tabla comparada con la 05-08

| Medida | 05-08 | 06-06 fase A | Diferencia | Criterio |
| :----- | :---- | :----------- | :--------- | :------- |
| Lighthouse móvil local (R / A / BP / SEO) | 95 / 100 / 96 / 100 | 93 / 100 / 96 / 100 | −2 / 0 / 0 / 0 | Dentro de la tolerancia de 2 |
| LCP móvil local | 2,62 s | 1,29 s | −1,33 s | Mejora |
| TBT móvil local | 224 ms | 290 ms | +66 ms | Informativo |
| Lighthouse escritorio local | 100 / 100 / 96 / 100 | 100 / 100 / 96 / 100 | 0 | Igual |
| CLS (móvil / escritorio) | 0,0002 / 0,0002 | 0,0001 / 0,0117 | — | < 0,1 |
| Lighthouse móvil publicado | 98 / 100 / 100 / 100 (LCP 1,51 s, CLS 0, TBT 165 ms) | 99 / 100 / 100 / 100 (LCP 1,43 s, CLS 0, TBT 71 ms), fase B | +1 / 0 / 0 / 0 | Cumple (tolerancia de 2) |
| Lighthouse escritorio publicado | — | 100 / 100 / 100 / 100 (LCP 0,47 s, CLS 0,0117, TBT 0 ms), fase B | — | Informativo |
| JavaScript propio | 1774 B gzip | 1774 B gzip | 0 | Sin cambios |
| `dist/index.html` | 346 277 B (61 883 gzip) | 355 655 B (61 703 gzip) | +9378 B (−180 gzip) | Informativo |
| `<dialog>` · `h1` · prompts | 54 · 1 · 24 de 24 | 54 · 1 · 24 de 24 | 0 | Igual |
| `id` · repetidos | 300 · 0 | 300 · 0 | 0 | Igual |
| Unidades en 1440 × 900 | ≤ 823 (05-05) | 823 / 823 / 823 / 823 (F1, desarrollador) | 0 | Aprobado (F1) |
| Unidades en 1366 × 657 | 808/808/810/783 (Fase 1 de la 06-03) | 778 / 778 / 780 / 754, disponible 580 (F1, desarrollador) | −30 / −30 / −30 / −29 | Aprobado (F1); U1 = 778 / 580 ≈ 1,34 pantallas (`DESIGN.md`: «unos 1,4») |
| Página completa (pantallas) | ≤ 7 en 1440 × 900 (05-08, sin cifra) | 5,26 en 1440 × 900; en 1366 × 657, sin cifra (F2, desarrollador) | — | Aprobado en 1440 × 900 (F2) |
| Palabras por unidad (U1 a U4) | 261 / 235 / 236 / 226 (05-05, script que excluye el texto solo para lectores); 05-08: sin cifras | 294 / 316 / 354 / 305 (F3, desarrollador, `innerText`) | Métodos distintos: no comparable | Desviación aceptada por el desarrollador: U2 +16, U3 +54 (18 %), U4 +5 sobre 300 (RDA-012) |
| Botones de contorno por tarjeta | hasta 2 (37 en total) | total 17, máximo 1 (F4, desarrollador, 1440 × 900 claro) | −20 | Aprobado (F4) |
| Meta del bloque 0 | — | «Antes de empezar · 5 min · Unidad 2» (F5, desarrollador) | — | Aprobado (F5) |
| Sin JS, movimiento reducido, impresión | — | `getAnimations()` = 0 e impresión sin trama (F6, desarrollador) | — | Aprobado (F6) |
| Teclado y lector | — | Bien en todo, sin observaciones (F7, desarrollador) | — | Verificado por el desarrollador (2026-11-22) |

Las cifras F1 a F7 las dio el desarrollador el 2026-11-22; el agente no las midió. La columna «05-08» de las palabras viene de la 05-05, medida con otro método: no sirve para afirmar una regresión.

### Comprobaciones en `dist` (script de Node fuera del repositorio)

- «Avance del curso»: 0. «Detalle ·»: 0. «Bloque 0 ·»: 0.
- Metas: 3 «Antes de empezar · 5 min · Unidad 2/3/4» y 3 «Cierre» (10, 10 y 5 min). En total, 39 de 39 modales de bloque con meta y 0 «n min» sueltos.
- Citas: 1 regla `.contenido-bloque blockquote` en el CSS compilado, **sin `border-left`**: fondo `--color-superficie`, texto `--color-texto`, radio `1rem 1rem 1rem .375rem`.
- 1 `h1`, 54 `<dialog>` y 24 de 24 prompts idénticos a su fuente YAML.
- `pnpm build`: sin advertencias; guardia con 0 marcadores. `pnpm astro check`: 0/0/0.

### Impeccable 4.10.0

`pnpm dlx impeccable@4.10.0 detect --json`, con la salida en el scratchpad, sobre los 10 archivos tocados en la épica: `Portada`, `BloqueUnidad`, `CabeceraUnidad`, `SeccionUnidad`, `TarjetaBloque`, `TarjetaTerminado`, `Modal`, `ModalesBloque`, `colores-unidad.ts` y `global.css`. Resultado: `[]`, **0 hallazgos** (al abrir la épica había 1, `side-tab`). Recordatorio de la 05-08: en `.astro`, `.css` y `.ts` el detector solo aplica reglas de expresiones regulares. `git status` no mostró archivos nuevos.

### Accesibilidad por código y HTML

- **Encabezados:** 108 en total (1 `h1`, 6 `h2`, 44 `h3` y 57 `h4`), sin saltos de nivel.
- **Secciones:** 0 `section` sin `aria-labelledby`. El primer enlace es «Saltar al contenido principal».
- **Nombres accesibles:** 134 botones, 0 sin nombre; 0 `img` sin `alt`; 0 `svg` sin `aria-hidden` ni `role`. Los 54 modales tienen `aria-labelledby`; los 26 de detalle tienen además `aria-describedby` con su entradilla (54 atributos en total).
- **Enlaces externos:** 114 con `target="_blank"`, 0 sin `rel="noopener noreferrer"`.
- **Foco:** 9 reglas `:focus-visible` en el CSS compilado. La meta y la entradilla no son enfocables, y el botón «Cerrar» sigue siendo de 44 px.
- **Sin JavaScript:** 3 reglas `html:not([data-js])`. Los modales se muestran como bloques, con su meta y su entradilla adentro, y los botones que los abren quedan ocultos (RDA-011).
- **Movimiento reducido:** 9 bloques `prefers-reduced-motion`. La 06-05 y la 06-06 no agregaron animaciones.
- **Impresión:** 1 `@media print`, que quita la trama.

### Comparación de `DESIGN.md` con el sitio

Las cuatro diferencias se reúnen en la **P-028**. Los textos actuales los comprobé con un script: los 4 coinciden literalmente con `DESIGN.md`.

1. **Portada y ruta:** en 1440 × 900 todo cabe; en 1366 × 657 la ruta se desplaza (opción A).
2. **2.3 Contraste:** en oscuro, sobre el centro de un punto, `--color-enlace` da 6,63:1 y `--color-primario` 4,93:1. Pasan de AAA a AA.
3. **Modal:** la meta «Antes de empezar» del bloque 0 y «Cierre» del cierre.
4. **Tarjeta de bloque:** el borde del ticket se declara de 1,5 px y se dibuja de 1 px en pantallas de escala 1.

Ninguna otra diferencia: tokens, tarjeta, cabecera, modal (720 px, `min(85dvh, 760px)`), cita y trama coinciden con lo que piden las P-023 a P-027.

## Criterios de aceptación

- [x] Cada criterio de término de la definición, marcado con su evidencia: en la [bitácora de cierre](bitacora-06-cierre.md). Los altos (F1 y F2) los dio el desarrollador; las palabras (F3) quedan como desviación aceptada y el teclado y el lector (F7), verificados por el desarrollador, sin observaciones (2026-11-22, dicho por él; el agente no lo verificó).
- [x] Lighthouse móvil sobre la URL publicada (fase B, mediana de 3): 99/100/100/100, LCP 1,43 s, CLS 0, TBT 71 ms, frente a 98/100/100/100 de la 05-08. El LCP es el `h1` en las 3 corridas.
- [x] Impeccable sin hallazgos sin resolver: `[]`.
- [x] Sin JavaScript, la página se lee completa en modo claro: por CSS y HTML (3 reglas, botones ocultos) y F6 del desarrollador.
- [x] `DESIGN.md` describe el sitio o hay propuesta para cada diferencia: P-028 con 4 cambios.
- [x] Regresiones: build sin advertencias con la guardia, check 0/0/0, 24 de 24 prompts y 1 `h1`.

## Diferencias entre lo planificado y lo encontrado

- La comparación con la 05-08 se hace contra su lectura **local** (95). El 98 de la 05-08 es la lectura publicada y se compara en la fase B.
- La medición sin trama dio peor Rendimiento que con trama. Es ruido del equipo, no un efecto de la trama: el LCP varía entre 2,7 y 4,2 s con el mismo HTML.
- La tarea «repetir la crítica de diseño» no se hizo: el desarrollador acotó Impeccable a `detect --json`.

## No se pudo verificar

- Altos de las unidades, alto total, palabras por unidad y botones por tarjeta en navegador: los mide el desarrollador con F1 a F4.
- Teclado, lector de pantalla, sin JavaScript, movimiento reducido e impresión en navegador: a cargo del desarrollador (F6 aprobado; F7 verificado por el desarrollador, sin observaciones, 2026-11-22).
- Lighthouse sobre la URL publicada: fase B.

## Revisión manual del desarrollador

Con `pnpm build && pnpm preview`, en 1440 × 900 y 1366 × 657, en claro y oscuro:

**F1 · Alto de cada unidad.** Esperado: en 1440 × 900, `alto` ≤ `disponible` (823). En 1366 × 657, cerca de 780/780/782/755 (06-04).
`[1,2,3,4].map(n=>({unidad:n,alto:Math.round(document.getElementById('unidad-'+n).getBoundingClientRect().height),disponible:innerHeight-document.querySelector('.encabezado-sitio').offsetHeight}))`

**F2 · Página completa.** Esperado: ≤ 7 en 1440 × 900.
`+(document.documentElement.scrollHeight/innerHeight).toFixed(2)`

**F3 · Palabras por unidad** (modales cerrados). Esperado: ≤ 300 cada una.
`[1,2,3,4].map(n=>[n,document.getElementById('unidad-'+n).innerText.split(/\s+/).filter(w=>/[\p{L}\d]/u.test(w)).length])`

**F4 · Botones de contorno por tarjeta.** Esperado: total 17 y máximo 1.
`(()=>{const t=[...document.querySelectorAll('.tarjeta')].map(e=>[...e.querySelectorAll('.boton-contorno')].filter(b=>b.checkVisibility()).length);return {total:t.reduce((a,b)=>a+b,0),max:Math.max(...t)}})()`

**F5 · Modales.** Abre el detalle de U2 «Antes de empezar» (desde la píldora de la cabecera): la meta dice «Antes de empezar · 5 min · Unidad 2».

**F6 · Sin JavaScript, movimiento reducido (`document.getAnimations().length` = 0) e impresión sin trama.**

**F7 · Teclado y lector**, de punta a punta, incluidas la tarjeta clicable y la entradilla como descripción del modal.

## Decisiones tomadas

- Del desarrollador (2026-11-22): 06-05 terminada; meta «Antes de empezar» para el bloque 0.
- Del agente: comparar la trama con dos copias servidas por el mismo servidor, para que solo cambie el CSS; no proponer la trama como SVG, porque no cuesta Rendimiento.
- Ninguna RDA nueva.

## Pendientes y riesgos

- Fase B: merge del desarrollador, Lighthouse móvil publicado (mediana de 3, tolerancia de 2 frente a 98/100/100/100) y bitácora de cierre de la épica.
- P-028 pendiente.
- La nota local de Rendimiento sigue dependiendo de la carga del equipo (91 a 97 con el mismo código).

## Revisión

- **Resultado frente al objetivo:** en local, el pulido cumple lo que el agente puede medir: Lighthouse dentro de la tolerancia, LCP en el `h1`, CLS mínimo, 0 hallazgos de Impeccable, JS sin cambios y la propuesta para que `DESIGN.md` describa el sitio. Faltan las mediciones en navegador y la lectura publicada.
- **Qué aprendimos:** para aislar el costo de un estilo, sirve más comparar dos copias del mismo `dist` en el mismo servidor que comparar contra una referencia antigua. Aun así, 3 corridas no bastan para separar diferencias de pocos puntos del ruido del equipo.
- **Qué cambia para lo que sigue:** la fase B solo mide la URL publicada y cierra la épica; la P-028 debe estar decidida antes del cierre.

## Commit sugerido

`Épica 6 - Iteración 06-06 (fase A): meta «Antes de empezar» en el bloque 0, Lighthouse local 93/100/96/100 y 100/100/96/100, Impeccable sin hallazgos y P-028 para DESIGN.md`
