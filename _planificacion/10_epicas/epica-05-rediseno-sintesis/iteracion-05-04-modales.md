# Iteración 05-04 · Sistema de modales

- **Épica:** 05 · Rediseño visual y síntesis del contenido
- **Estado:** Terminada
- **Rama sugerida:** iteracion/05-04-modales
- **Depende de:** 05-01, 05-03 y P-013 aplicada
- **Especificación:** —
- **RDA relacionadas:** RDA-007, RDA-011, RDA-012

## Objetivo

Que el detalle de cada bloque, cada prompt, los recursos y las descargas de una unidad se abran en modales accesibles y bien diseñados, y que sin JavaScript ese mismo contenido se lea en la página.

## Punto de partida

- `Base.astro` marca `data-js` en `<html>` antes de pintar, y `global.css` define la variante `js:` (`@custom-variant js`). Con ella, los botones que solo funcionan con script se ocultan sin JavaScript (patrón de «Copiar» y del botón de modo).
- `Prompt.astro` copia el `textContent` del `<code>` con un script delegado sobre `[data-copiar]` y anuncia «Copiado» con `aria-live`.
- `BloqueClase.astro` muestra el cuerpo del bloque con `render()`, sus prompts y «Profundiza» (`<details>`).
- `SeccionUnidad.astro` lista los recursos de la unidad (hasta 25) y sus descargas al final de la sección.

## Alcance y entregables

- Componente `Modal.astro` (un componente, un archivo):
  - `<dialog>` con `id` único (`modal-u<unidad>-<bloque>-<tipo>[-<id>]`), `aria-labelledby` apuntando a su título y `aria-describedby` a su descripción, si la tiene.
  - Encabezado con franja del color de la unidad, título y botón «Cerrar» dentro de `<form method="dialog">` (cierra sin script una vez abierto), con `aria-label` «Cerrar» y objetivo táctil de 44 px.
  - Cuerpo con desplazamiento propio (`max-block-size: min(85dvh, 760px)`, `overscroll-behavior: contain`), ancho máximo de 720 px y hoja completa desde abajo en móvil (menos de 640 px).
  - `::backdrop` con el color `fondo` al 70 % y desenfoque de 4 px.
  - Atributo `closedby="any"` como mejora (cierre al tocar fuera donde el navegador lo soporte).
- Botón que abre: `<button type="button" data-abrir-modal="<id>" aria-haspopup="dialog" aria-controls="<id>">`, visible solo con JavaScript (`js:`).
- Script único y pequeño (`src/scripts/modal.ts`, cuarto comportamiento con script, RDA-011): un solo oyente delegado que llama a `showModal()`, cierra al hacer clic en el fondo donde `closedby` no exista y devuelve el foco al botón que abrió. El bloqueo del desplazamiento de la página es CSS (`html:has(dialog[open]) { overflow: hidden }`, con `scrollbar-gutter: stable` en `html` para que la página no salte), sin script.
- Sin JavaScript: CSS `html:not([data-js]) dialog[data-modal]` muestra el contenido en su lugar como un bloque normal (`display: block; position: static`), sin el botón «Cerrar». Desde esta iteración el cuerpo completo del bloque, sus prompts, «Profundiza», los recursos y las descargas viven solo dentro de su `<dialog>` y se renderizan una sola vez en el HTML (no se duplican fuera del modal).
- Cuatro variantes, todas desde el mismo componente:
  1. **Prompts del bloque:** un modal por bloque que tenga prompts; por cada prompt, su título, su `descripcion` (RDA-012) y el texto en un cuadro de IBM Plex Mono con su botón «Copiar» grande (reutiliza el script de `Prompt.astro`) y confirmación «Copiado» con cambio de ícono por 2 s.
  2. **Detalle del bloque:** `resumen`, minutos, el cuerpo con `render()` (ya sin material de conducción) y los recursos de «Profundiza».
  3. **Recursos de la unidad:** documentos y videos en dos grupos con su cantidad, con `RecursoExterno.astro`.
  4. **Descargas de la unidad:** las tarjetas de `TarjetaDescarga.astro` y la `notaDescargas`, si existe.
- En esta iteración el cuerpo completo vive solo dentro del modal «Ver detalle»; `BloqueClase` deja de mostrarlo en la página, que queda temporalmente austera (título, minutos y botones que abren los modales, ubicados en la estructura actual junto a cada bloque y al final de la unidad) hasta que la 05-05 incorpore las tarjetas con la síntesis.

## Contenido aprobado (copiar tal cual)

> Aprobado por el desarrollador el 2026-11-19. Cambio al cuerpo de un bloque en la página.

- **`u2/bloque-3.md` (único bloque con marcador `data-prompt`):** en el modal de detalle, el marcador `<div data-prompt="identidad-visual-gtd"></div>` se reemplaza por esta línea, sin cambios: «El prompt «Identidad visual GTD (usar siempre)» está en la sección de prompts de este bloque.». El prompt vive solo en el modal de prompts de ese bloque. El `.md` no cambia; el reemplazo lo hace `BloqueClase.astro` con el título del prompt.
- **Títulos de los modales:** «Detalle · <título del bloque>», «Prompts · <título del bloque>», «Recursos de la unidad» y «Descargas de la unidad».

## Decisiones del desarrollador

- 2026-11-18: base técnica de los modales delegada en «la opción más profesional para el stack»: `<dialog>` nativo con script mínimo y respaldo sin JavaScript (RDA-011). Se descartan las invocaciones declarativas (`commandfor`) como mecanismo principal porque su soporte en navegadores corporativos es reciente; se pueden agregar después como mejora sin cambiar el marcado.
- 2026-11-19: se acepta publicar en main el estado intermedio austero entre la 05-04 y la 05-05, porque no hay clases próximas.
- 2026-11-19: «Profundiza» se mantiene como `<details>` al final del modal de detalle; «Sobre la unidad» queda fuera de esta iteración (05-05); los botones llevan las etiquetas de la 05-05 («Ver detalle», «Ver prompt», «Prompts (n)», «Recursos (n)», «Descargas (n)»); se aprueba el patrón de `id` sin sufijo por prompt.
- 2026-11-19: se aprueba el respaldo `data-sin-dialogo`: sin `showModal`, `modal.ts` marca `<html data-sin-dialogo>` y el CSS muestra el contenido como sin JavaScript.
- 2026-11-19: los íconos de «Copiar» y «Copiado» son SVG de línea en línea, como el resto de la interfaz; sin dependencias nuevas.

## Tareas

1. Crear `Modal.astro` con las cuatro variantes, los estilos de `DESIGN.md` (P-009 aplicada) y el respaldo sin JavaScript.
2. Crear `src/scripts/modal.ts` con el oyente delegado, el cierre por clic en el fondo y la devolución del foco; comprobar su peso gzip.
3. Agregar el modal de prompts en cada bloque que tenga prompts (los 24 prompts) y conectar «Copiar» dentro del modal.
4. Agregar el modal de detalle para los 26 bloques.
5. Agregar los modales de recursos y descargas para las 4 unidades.
6. Revisar la jerarquía de encabezados con y sin JavaScript, y los `id` únicos (ninguno repetido en `dist/index.html`).
7. Ejecutar `pnpm build`, `pnpm astro check` y las regresiones; probar con teclado, lector de pantalla si es posible, 360 px y escritorio, ambos modos, y con JavaScript desactivado.
8. Escribir la bitácora y actualizar el registro (y la RDA-011, si su consecuencia cambió).

## Tareas del desarrollador

1. Probar los modales en el navegador corporativo de los participantes, si tiene acceso a uno.

## Criterios de aceptación

- [x] `dist/index.html` tiene un modal de prompts por cada bloque con prompts (24 prompts en total), 26 de detalle, 4 de recursos y los de descargas de las unidades que tienen descargas; ningún `id` repetido (comando anotado en la bitácora). Medido: 45 `<dialog>` (26 + 13 + 4 + 2), 284 `id`, 0 repetidos.
- [x] Con teclado: Tab llega al botón, Enter abre, el foco queda dentro del modal, Esc cierra y el foco vuelve al botón que abrió (comprobado en Chrome y en Firefox o Safari). Dicho por el desarrollador (2026-11-19): probó los modales en el navegador sin observaciones; no lo verificó el agente.
- [x] «Copiar» dentro del modal copia el prompt exacto (24 de 24 iguales a la fuente) y anuncia «Copiado». Medido: el texto de los 24 `<code>` de `dist/index.html` es idéntico a su fuente; el clic y el anuncio, dicho por el desarrollador (2026-11-19, sin observaciones).
- [x] Con JavaScript desactivado, todo el contenido de los modales se lee en la página, no aparece ningún botón que no funcione y no hay contenido duplicado. Comprobado por script sobre el HTML y el CSS compilados (45 botones que abren y 24 de copiar con `hidden`; reglas sin `data-js`); la lectura en pantalla la confirma el desarrollador.
- [x] Con un modal abierto, la página de fondo no se desplaza y no hay salto de diseño al abrir o cerrar (CLS 0 en la grabación de Rendimiento de DevTools). Dicho por el desarrollador (2026-11-19, sin observaciones); no lo verificó el agente.
- [x] JavaScript nuevo ≤ 1 KB gzip; JavaScript propio total ≤ 2,2 KB gzip. Medido: +176 B gzip nuevos (`modal.ts` 274 B solo) y 1295 B gzip en total.
- [x] Contraste AA del contenido del modal y del fondo en ambos modos. Dicho por el desarrollador (2026-11-19, sin observaciones); no lo verificó el agente.
- [x] Regresiones: `pnpm build` sin advertencias con la guardia; `pnpm astro check` 0/0/0; 1 `h1`; 5 etiquetas `<script>` propias más la de Web Analytics. Medido: build sin advertencias y guardia en 0; check 0/0/0; 1 `h1`; 5 propias + 1 de Web Analytics.

## Riesgos

- Que un navegador corporativo antiguo no soporte `<dialog>` (soportado desde 2022 en Chrome, Edge, Firefox y Safari): sin `HTMLDialogElement.prototype.showModal`, el script no marca el botón como funcional y el contenido se lee en la página como sin JavaScript.
- Con el cuerpo solo en el modal, la página queda más corta y austera con JavaScript; solo sin JavaScript se ve alta mientras los `<dialog>` se muestran en su lugar como bloques normales: el alto en escritorio se mide al cerrar la 05-05.
- Que entre la 05-04 y la 05-05 cada bloque en la página se vea temporalmente austero (solo título, minutos y botones, sin cuerpo visible ni síntesis en tarjeta): es un estado intermedio acordado para no duplicar el cuerpo en el HTML; la 05-05 agrega la síntesis visible en las tarjetas.

## Fuera de alcance

- La transición de tarjeta a modal (05-07).
- La nueva estructura de la sección de unidad (05-05).

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Ninguno.
