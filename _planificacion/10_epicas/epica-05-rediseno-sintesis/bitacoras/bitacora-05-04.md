# Bitácora 05-04 · Sistema de modales

- **Fecha:** 2026-11-19
- **Agente:** Claude Code (Sonnet 5.5)
- **Rama:** iteracion/05-04-modales
- **Estado final:** Terminada

## Resumen

Se crea el sistema de modales sobre `<dialog>` nativo (RDA-011): `Modal.astro` (botón que abre y `<dialog>`), `src/scripts/modal.ts` (un oyente delegado) y los estilos en `global.css`. El cuerpo de cada bloque, sus prompts, «Profundiza», los recursos y las descargas pasan a vivir solo dentro de 45 modales (26 de detalle, 13 de prompts, 4 de recursos y 2 de descargas). La página queda temporalmente austera hasta la 05-05: título, minutos y botones. «Copiar» se reutiliza dentro del modal de prompts, con descripción, botón grande e ícono que cambia por 2 s. Sin JavaScript (o sin `showModal`) cada `<dialog>` se muestra en su lugar como un bloque normal.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `src/components/Modal.astro` | Nuevo. Botón `[data-abrir-modal]` (solo con JS) y `<dialog>` con franja del color de la unidad, título h3/h4, «Cerrar» de 44 px, cuerpo con desplazamiento propio y `closedby="any"`. |
| `src/scripts/modal.ts` | Nuevo. Oyente delegado: `showModal()`, cierre al hacer clic en el fondo sin `closedby` y devolución del foco; sin `showModal` marca `data-sin-dialogo`. |
| `src/components/BloqueClase.astro` | Título, minutos y dos `Modal` (detalle y prompts); el marcador `data-prompt` pasa a una línea que remite a la sección de prompts. |
| `src/components/SeccionUnidad.astro` | Descargas y recursos pasan a modales; los recursos van en dos grupos con su cantidad. |
| `src/components/Prompt.astro` | Prop `descripcion` (RDA-012), botón «Copiar» más grande con ícono de copiar y de check (SVG en línea) que cambia con `data-copiado` por 2 s. |
| `src/styles/global.css` | Clases `.boton-contorno`, `.boton-icono`, `.modal`, `.modal-cabecera` y `.modal-cuerpo` (con `@apply`), bloqueo de scroll con `html:has(dialog[open])` y `scrollbar-gutter: stable`, y reglas «Modales sin JavaScript». |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/iteracion-05-04-modales.md` | `En revisión`, «Contenido aprobado», decisiones del 2026-11-19 y criterios con su medición. |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/definicion-epica-05.md` | Fila 05-04 en `En revisión`. |
| `_planificacion/00_producto/decisiones.md` | RDA-011: resultado de la 05-04 en «Consecuencias»; «(propuesta P-010)» pasa a «(P-010, aplicada)». |
| `_planificacion/00_producto/registro-pendientes.md` y `registro-archivo.md` | Fila 05-04 y fila 22 en `En revisión`, historial en 50 filas. |

## Verificación

Script `verificar.mjs` sobre `dist/index.html` (en el directorio temporal de la sesión; lee el HTML compilado y los `.md` de `src/content/bloques/`):

- `pnpm build`: sin errores ni advertencias; guardia de marcadores: 0 en `dist/`; limpieza de SVG: 6 sin referencia (igual que antes).
- `pnpm astro check`: 0 errores, 0 advertencias, 0 sugerencias (`closedby="any"` pasa sin suprimir tipos).
- Modales por tipo: 45 `<dialog>` = detalle 26, prompts 13, recursos 4, descargas 2.
- `id` repetidos: `matchAll(/\sid="..."/)` sobre el HTML: 284 `id`, 0 repetidos; 45 botones `data-abrir-modal` y 45 `aria-controls`, todos con su `<dialog>`.
- Prompts: 24 de 24 `<code id="prompt-…-texto">` idénticos (tras decodificar entidades) al `texto` del frontmatter; 24 `<code>` en el HTML, uno por prompt.
- Línea del marcador de U2 · 3: aparece exacta en un `<p>` y no queda ningún `data-prompt` en el HTML.
- Sin JavaScript: los 45 botones que abren y los 24 de copiar llevan `hidden`; los 45 formularios «Cerrar» los oculta el CSS (`html:not([data-js]) [data-cerrar]`); la regla `html:not([data-js]) dialog[data-modal]` los muestra como bloque. Revisado en el CSS compilado, no en pantalla.
- Contenido duplicado: textos largos repetidos solo en enlaces de recursos (el mismo recurso en «Recursos de la unidad» y en «Profundiza», y los enlaces a felipecuevas.dev y LinkedIn); ningún texto de bloque ni de prompt está repetido.
- Encabezados: 1 `h1`; 0 saltos de nivel con JS (sin contar los `<dialog>`) y 0 sin JS (todo visible); dentro de los modales hay 6 `h3` (unidad) y 45 `h4`.
- JavaScript propio (4 etiquetas antes, 5 ahora; gzip nivel 9 de las etiquetas concatenadas): 1119 B → **1295 B** (+176 B). `modal.ts` solo pesa 274 B gzip (493 B); el cambio de `Prompt.astro` suma 12 B. Límites: +1024 B nuevos y 2252 B totales.
- `<script>`: 5 propios + 1 de Web Analytics.
- Peso del HTML: `dist/index.html` pasa de 255 659 B (51 302 B gzip) a 327 567 B (58 780 B gzip): +71 908 B y +7 478 B gzip, por los 45 `<dialog>` y sus botones. Antes de extraer las clases a `global.css` eran 381 840 B (60 355 B gzip).

## Criterios de aceptación

- [x] 45 `<dialog>` por tipo y ningún `id` repetido (medido arriba).
- [ ] Teclado: Tab, Enter, foco dentro, Esc y foco de vuelta (lo prueba el desarrollador; ver procedimiento).
- [ ] «Copiar» copia el prompt exacto y anuncia «Copiado»: el texto de los 24 `<code>` es idéntico a su fuente (medido); el clic y el anuncio los prueba el desarrollador.
- [x] Sin JavaScript no hay botones sin función ni contenido duplicado (por script sobre HTML y CSS; la lectura visual la confirma el desarrollador).
- [ ] Página de fondo fija y CLS 0 al abrir y cerrar (lo prueba el desarrollador).
- [x] JavaScript nuevo +176 B gzip (≤ 1 KB) y total 1295 B gzip (≤ 2,2 KB).
- [ ] Contraste AA del contenido del modal y del fondo (lo prueba el desarrollador).
- [x] Regresiones: build sin advertencias con la guardia, check 0/0/0, 1 `h1` y 5 `<script>` propios más el de Web Analytics.

## Prueba del desarrollador

Dicho por el desarrollador el 2026-11-19: probó los modales en el navegador y no tuvo observaciones. No lo verificó el agente. Con eso se marcan los criterios de teclado, copiado, fondo fijo y CLS, y contraste, y la iteración queda `Terminada` (commit `ff80db4`, ya en `main`).

## Procedimiento para el desarrollador (`pnpm preview`, no verificado por el agente)

1. **Teclado.** En 1440 px, Tab hasta «Ver detalle» del bloque 1 de la U1 y Enter. Esperado: se abre el modal, el foco queda en «Cerrar» o dentro del modal, Tab no sale de él, Esc lo cierra y el foco vuelve a «Ver detalle» (Chrome y Firefox o Safari).
2. **Cierre.** Abre un modal y haz clic fuera: se cierra y el foco vuelve al botón. Pulsa «Cerrar» (Enter y clic): igual.
3. **Copiar.** Abre «Prompts (n)» de U3 · bloque 2 (6 prompts) y pulsa «Copiar» del primero. Esperado: el botón dice «Copiado» y cambia a un check por 2 s y luego vuelve; pega en un editor y compara con el cuadro. Un lector de pantalla anuncia «Copiado».
4. **Fondo fijo y CLS.** Con un modal abierto, la rueda del mouse solo desplaza el cuerpo del modal. Al abrir y cerrar, el contenido de la página no se corre (la barra de desplazamiento sigue reservada). En DevTools > Rendimiento, CLS 0.
5. **360 px.** El modal es una hoja que sale desde abajo, ocupa todo el ancho, con «Cerrar» de 44 px y sin desborde horizontal; el modal de U3 · bloque 2 desplaza dentro de su cuerpo.
6. **Ambos modos.** Repite 1 y 3 en modo claro y oscuro: texto legible, franja del color de la unidad visible, fondo del modal con desenfoque. En U3 oscuro la franja `#003B51` sobre `#00131D` se ve apagada: mira si basta.
7. **Detalle de U2 · bloque 3.** Esperado: la línea «El prompt «Identidad visual GTD (usar siempre)» está en la sección de prompts de este bloque.» y, en el botón «Ver prompt», ese prompt.
8. **Recursos y descargas.** «Recursos (25)» de U1 muestra «Documentos (n)» y «Videos (n)»; U2 y U4 tienen «Descargas (n)» con la nota y las tarjetas; U1 y U3 no tienen botón de descargas.
9. **Sin JavaScript.** En DevTools > Configuración > Depurador > «Desactivar JavaScript» y recarga: no hay botones que abren ni de copiar, ni «Cerrar», y el detalle, los prompts, los recursos y las descargas se leen en la página, una sola vez.
10. **Lector de pantalla (recomendado, NVDA o VoiceOver).** Al abrir se anuncia el título del modal y su descripción; los botones se leen «Ver detalle de «título»».

## Decisiones tomadas

- Modal.astro contiene el botón y el `<dialog>` para no repetir el marcado, el `aria-controls` ni el `data-abrir-modal` en cuatro lugares. El contenedor de botones es `flex flex-wrap`; sin JS el `<dialog>` ocupa su propia fila (`width: 100%`).
- `data-sin-dialogo` (aprobado por el desarrollador el 2026-11-19): sin `showModal`, `modal.ts` marca `<html>` y el CSS muestra el contenido como sin JS. Ya está en la RDA-011.
- La franja del color de la unidad es un borde superior de 10 px y no un fondo completo del encabezado, porque el foco `#007EA7` sería invisible sobre la U1 (`#007EA7`) en modo claro.
- Para no repetir ~70 KB de utilidades en 45 modales se llevaron a `global.css`, con `@apply`, las clases `.modal`, `.boton-contorno` y similares. `TarjetaDescarga.astro` no se tocó y sigue con sus utilidades.
- Los íconos de «Copiar» y de check son SVG de línea en línea, como el resto de la interfaz (`DESIGN.md`, sección 6): no hay archivos nuevos ni dependencias.
- La línea del marcador la arma `BloqueClase.astro` con el título del prompt; el `.md` de U2 · 3 no cambia.

## Pendientes y riesgos

- El HTML crece 72 KB (+7,5 KB gzip) con los 45 `<dialog>`: se mide en Lighthouse en la 05-07 y la 05-08, cuando Rendimiento debe llegar a 95. Si pesa, se puede renderizar el encabezado del modal una sola vez con `<template>` y JS, pero rompe el respaldo sin JS, así que no se hizo.
- En navegadores sin `color-mix`, `::backdrop` queda con el blanco al 70 % que genera Tailwind, también en modo oscuro.
- Choques con la 05-05 (sin editar): `Modal.astro` une botón y `<dialog>`, y la 05-05 pide los modales «debajo de la cuadrícula» en el modo sin JS y las tarjetas con botones; hará falta separar botón y `<dialog>` (por ejemplo, una prop que no dibuje el botón). La tarea 4 de la 05-05 propone retirar `BloqueClase.astro`, pero hoy ahí vive el armado de los modales de detalle y prompts: conviene moverlo a `TarjetaBloque.astro` o conservarlo. Los `id` son `modal-u<N>-bloque-<n>-detalle|prompts`, `modal-u<N>-bloque-0-detalle` y `modal-u<N>-cierre-detalle` para las píldoras, y `modal-u<N>-recursos|descargas`; «Sobre la unidad» necesita un `id` nuevo (por ejemplo `modal-u<N>-sobre`).
- Ctrl+F no encuentra el texto de un modal cerrado (consecuencia de la RDA-011): la 05-05 lo compensa con la síntesis visible.

## Revisión

- **Resultado frente al objetivo:** el detalle, los prompts, los recursos y las descargas se abren en modales y, sin JavaScript, se leen en la página, con 45 `<dialog>`, 0 `id` repetidos, 24 de 24 prompts idénticos y +176 B gzip de JavaScript. Falta la prueba en navegador.
- **Qué aprendimos:** repetir utilidades de Tailwind en 45 modales agregó 126 KB al HTML; extraerlas a clases con `@apply` recuperó 54 KB.
- **Qué cambia para lo que sigue:** la 05-05 debe separar botón y `<dialog>` en `Modal.astro` y decidir qué hace con `BloqueClase.astro`; la medición de Lighthouse debe incluir el peso del HTML.

## Commit sugerido

`Épica 5 - Iteración 05-04: agrega Modal.astro y modal.ts con 45 modales de detalle, prompts, recursos y descargas, copiado con ícono y respaldo sin JavaScript`
