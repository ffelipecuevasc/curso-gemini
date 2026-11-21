# Bitácora 05-06 · Portada y ruta en un pantallazo

- **Fecha:** 2026-11-20
- **Agente:** Claude Code (Opus 5.5)
- **Rama:** iteracion/05-06-portada-ruta
- **Estado final:** En revisión

## Resumen

Paso 0: 05-05 `Terminada` (prueba en navegador dicha por el desarrollador, no verificada por el agente). P-014 y P-015 `Aplicada` tras comprobar `DESIGN.md` con `grep`. Luego: portada y ruta en una sola sección (`#ruta` anidada en `#inicio` con su `h2`, tarjetas 2 × 2 desde 640 px), `BarraAvance.astro` compartida por la ruta y la cabecera de unidad, `BloqueUnidad` con `colores-unidad.ts`, logos de Google, GTD y Capacita en una franja al pie, botón «Empezar por la Unidad 1» e instructor compacto con el modal «Trayectoria completa» (franja `--color-primario`, P-016 pendiente). 0 B de JavaScript nuevo.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `src/components/BarraAvance.astro` | Nuevo. Pista `aria-hidden` y texto del tramo; color del texto del contenedor. |
| `src/components/Portada.astro` | Dos columnas: texto (h1, lema, botón, redes) y Gemini detrás de la ruta; franja de logos al pie. |
| `src/components/RutaCurso.astro` | Sección anidada `#ruta` con `h2`, mosaico 1 columna / 2 × 2 desde 640 px. |
| `src/components/BloqueUnidad.astro` | Colores de `colores-unidad.ts`, título con `clamp()` (`.titulo-ruta`), mini-proyecto con `line-clamp-2`, `BarraAvance`. |
| `src/components/Instructor.astro` | Compacto: nombre, certificación, resumen (líneas 18 y 20), redes y botón; el resto en el modal. |
| `src/components/Modal.astro` | `unidad` opcional; sin ella, franja `border-primario`. |
| `src/components/CabeceraUnidad.astro` | Usa `BarraAvance`. |
| `src/lib/modales.ts` | `idModalInstructor`. |
| `src/styles/global.css` | `.tarjeta-ruta` y `.titulo-ruta`. |
| `src/pages/index.astro` | Sin `<RutaCurso />` propio (va dentro de la portada). |
| `_planificacion/…` | Iteración 05-06, definición, registro, archivo, propuestas (P-014 y P-015 aplicadas, P-016 nueva); Paso 0 de la 05-05. |

## Verificación

- `pnpm build`: sin advertencias, guardia en 0. `pnpm astro check`: 0/0/0.
- Anclas: `id="inicio"`, `ruta`, `unidad-1` a `unidad-4` e `instructor`, 1 vez cada una en `dist/index.html`.
- 54 `<dialog>` (53 + «Trayectoria completa»), 300 `id`, 0 repetidos; 0 `aria-controls` huérfanos.
- 24 de 24 prompts idénticos; 1 `h1`; 0 saltos de nivel con y sin JavaScript; 7 `section` con `aria-labelledby`.
- Sin JavaScript: 0 botones que abren visibles; texto repetido solo en enlaces de recursos (como antes).
- Textos aprobados presentes literalmente (`grep` en `dist/index.html`).
- JavaScript propio: 1295 B gzip (0 B nuevos).
- Logotipos: `git diff -- src/assets` vacío.
- Peso: `dist/index.html` 340 390 B → 341 888 B (60 536 → 60 950 B gzip).
- El `DESIGN.md` del diff es el que pegó el desarrollador (P-014 y P-015); el agente no lo editó.

## Observador del encabezado

El observador marca la sección que cruza la franja del 45 al 50 % del alto de la ventana. Con `#ruta` dentro de la portada, en el primer pantallazo la franja cae sobre la ruta en escritorio, así que «Ruta» queda marcada al cargar; `#inicio` no está en la navegación. Se consideró correcto y no se cambió el script (0 B nuevos). Lo confirmas en el punto 4.

## Procedimiento para el desarrollador (`pnpm preview`; no verificado por el agente)

1. **Primer pantallazo** (1440 × 900, 1366 × 657 y 360 × 740; claro y oscuro). Esperado: en escritorio se ven título, lema, botón y las 4 tarjetas completas. Fragmento:
   `(()=>{const s=document.getElementById('inicio'),h=document.querySelector('header').offsetHeight,t=[...s.querySelectorAll('#ruta li')].map(li=>li.getBoundingClientRect().bottom);return{altoPortada:Math.round(s.getBoundingClientRect().height),disponible:innerHeight-h,tarjetasVisibles:t.filter(b=>b<=innerHeight).length,botonVisible:document.querySelector('#inicio a[href="#unidad-1"]').getBoundingClientRect().bottom<=innerHeight}})()`
   Referencia del agente (captura en Edge headless, 1440 × 900): la portada con las 4 tarjetas mide unos 790 px. **En 1366 × 657 se espera que no quepan las 4 tarjetas completas** (la ruta sola mide unos 560 px más el título): se documenta la realidad, sin forzarlo.
2. **Pantallas totales** (objetivo de la iteración: ≤ 7): `+(document.documentElement.scrollHeight/innerHeight).toFixed(2)`. Esperado: ≈ 6 en 1440 × 900; más de 7 en 1366 × 657, porque cada unidad ocupa ≈ 1,4 pantallas.
3. **Instructor** (≤ 1 pantalla en 1440 × 900): `Math.round(document.getElementById('instructor').getBoundingClientRect().height)` contra `innerHeight`.
4. **Navegación:** Tab desde «Saltar al contenido», «Empezar por la Unidad 1» lleva a `#unidad-1`; las píldoras «Ruta», «U1» a «U4» e «Instructor» llevan a su ancla; al cargar la página queda marcada «Ruta», y al bajar, la unidad visible.
5. **Modal del instructor:** «Ver trayectoria completa» abre el modal con franja azul (`--color-primario`), formación, certificación, resto de la trayectoria y «Fundador de la comunidad Pulso Devs.»; Esc cierra y el foco vuelve. Sin JavaScript, el contenido se ve en su lugar.
6. **Tarjetas de la ruta:** título de U1 en 4 líneas o menos; mini-proyecto en 2 líneas como máximo (la U3 se corta con «…»; el texto completo está en «Sobre la unidad»); barra visible sobre cada color en ambos modos; contraste del texto sin cambios.
7. **LCP en Lighthouse móvil** (DevTools > Lighthouse > Móvil, sobre `pnpm preview`, 3 corridas, mediana). Esperado: el elemento LCP sigue siendo el `h1`; LCP no peor que en la 04-04 (local 98 en Rendimiento). Fragmento para ver el elemento: `new PerformanceObserver(l=>console.log(l.getEntries().at(-1).element)).observe({type:'largest-contentful-paint',buffered:true})`.

## Decisiones tomadas

- `#ruta` es una `section` anidada en `#inicio`: conserva `id`, `h2` y anclas, y la jerarquía queda `h1` → `h2`.
- Gemini va detrás de la ruta, arriba a la derecha (`-z-10`), sin cambiar el SVG; el círculo `superficie` sigue detrás.
- El `h1` baja de `lg:text-6xl` a `sm:text-5xl` en todas las pantallas anchas, para que la columna de texto quepa junto a la ruta.
- El resumen del instructor se elige por posición (0 y 2 de `trayectoria`, líneas 18 y 20 del YAML): si el YAML cambia de orden, cambia el resumen.
- La certificación (nombre, inglés y emisor) se ve en la franja; descripción, fechas, enlace e insignia van en el modal, para no duplicar texto sin JavaScript.

## Pendientes y riesgos

- P-016 pendiente (franja neutra del modal).
- 1366 × 657: probablemente no caben las 4 tarjetas completas en el primer pantallazo, y la página pasa de 7 pantallas por las unidades (≈ 1,4 cada una). Se documenta la realidad.
- El mini-proyecto de la U3 se corta con `line-clamp-2`.

## Revisión de la 05-07 (sin editar): lo que choca con lo construido

1. **«Depende de»** cita P-009 y P-010 (aplicadas): sin choque, pero podría sumar P-014 a P-016.
2. **Sombras de las tarjetas de la ruta y de bloque:** las tarjetas usan ahora las clases `.tarjeta-ruta` y `.tarjeta` de `global.css`; las sombras se agregan ahí, no en los componentes.
3. **Hover con subida de 4 px:** `.tarjeta-ruta` ya sube 4 px; `.tarjeta` (bloque) no tiene hover. Hay que agregarlo sin duplicar.
4. **Brillo con el cursor en «las tarjetas»:** las tarjetas de bloque no son enlaces ni botones (tienen botones dentro); conviene aclarar si el brillo va en `.tarjeta`, `.tarjeta-ruta` o ambas.
5. **De la tarjeta al modal:** los modales se abren desde botones dentro de la tarjeta, la cabecera y el instructor; el nombre de transición se asigna a la tarjeta que contiene el botón (`closest('.tarjeta')`), y en cabecera e instructor no hay tarjeta: definir qué se anima ahí.
6. **Barra de lectura con el color de la unidad visible:** necesita saber la unidad visible; el observador del encabezado ya la calcula, pero cambiarlo suma JavaScript.
7. **Aparición escalonada** con `view()`: hoy las unidades miden una pantalla; las tarjetas de la ruta están en el primer pantallazo y no deberían animarse al cargar (LCP).
8. **Peso de JavaScript:** el total es 1295 B gzip; el presupuesto de 3 KB deja unos 1,7 KB para brillo y transición.
9. **Confirmación de copiado:** el ícono de check ya existe (05-04) y cambia por 2 s con `data-copiado`; la animación `stroke-dashoffset` se agrega sobre ese SVG.

## Revisión

- **Resultado frente al objetivo:** portada, ruta e instructor quedaron compactos y enlazados, con 0 B de JavaScript nuevo; falta medir el primer pantallazo y las 7 pantallas en tu navegador.
- **Qué aprendimos:** reutilizar `Modal`, `BotonModal`, `BarraAvance` y `colores-unidad.ts` dejó la iteración casi sin código nuevo.
- **Qué cambia para lo que sigue:** la 05-07 debe trabajar sobre `.tarjeta` y `.tarjeta-ruta` y definir el origen de la transición cuando el modal no nace de una tarjeta.

## Commit sugerido

`Épica 5 - Iteración 05-06: fusiona portada y ruta, agrega BarraAvance, compacta el instructor con modal de trayectoria, propone P-016 y cierra 05-05, P-014 y P-015`
