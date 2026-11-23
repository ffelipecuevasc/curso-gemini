# Iteración 06-04 · Tarjetas de bloque y ticket de entrega

- **Épica:** 06 · Pulido de identidad: portada, unidades y modales
- **Estado:** En revisión
- **Rama sugerida:** iteracion/06-04-tarjetas-bloque
- **Depende de:** 06-03 y propuesta P-026 aplicada
- **Especificación:** —
- **RDA relacionadas:** RDA-007, RDA-011

## Objetivo

Que cada tarjeta de bloque tenga una sola acción visible además de abrirse entera, y que «Terminado cuando…» se lea como la entrega de la unidad y no como otro bloque.

## Punto de partida

- `TarjetaBloque.astro`: número y minutos, título (`h3`), «Qué harás», la primera clave y 1 o 2 `BotonModal` de contorno («Ver detalle» y «Ver prompt» o «Prompts (n)»).
- `.tarjeta` en `global.css` (05-05): `border-t-[6px]` del color de la unidad sobre un radio de 28 px, lo que dibuja una curva en el borde superior.
- `TarjetaTerminado.astro`: misma `.tarjeta` con `border-t-linea`, el entregable y el botón «Terminado cuando… (n)».
- Profundidad, subida y brillo (05-07): `.tarjeta::before` (brillo) y `::after` (sombra amplia) ya ocupados; la subida con teclado depende de `.tarjeta:has(:focus-visible)`.
- Script de modales (05-04): abre cualquier `[data-abrir-modal]` y hace la transición desde la tarjeta de origen.
- Conteo de la vista previa: de 2 botones de contorno por tarjeta con prompts a 1 (referencia histórica, no reproducible: se vuelve a contar en la Fase 1, tarea 1).

## Alcance y entregables

- **Marca de la unidad:** se quita el borde superior de 6 px (todos los bordes quedan en 1 px `--color-linea`) y se agrega una marca recta de 40 × 6 px con radio completo en `var(--tinte)`, antes del número del bloque (`aria-hidden`).
- **Tarjeta clicable:** «Ver detalle» deja de ser una píldora y pasa a enlace de texto en `--color-enlace`, peso 500, con una flecha SVG de línea (`aria-hidden`) que se mueve 3 px con el hover de la tarjeta. Dentro del botón va un `<span class="cubre-tarjeta">` en posición absoluta que cubre la tarjeta, así toda la tarjeta abre el detalle. Sigue siendo un `<button>` con `data-abrir-modal`, `aria-haspopup="dialog"`, `aria-controls` y el contexto solo para lectores de pantalla; sin JavaScript queda oculto como hoy (RDA-011).
- **Un solo botón visible:** «Ver prompt» o «Prompts (n)» se queda como `BotonModal` de contorno, alineado a la derecha y por encima de la capa clicable (`relative z-10`).
- **Ticket de entrega:** «Terminado cuando…» lleva borde de 1,5 px discontinuo (`--color-texto-2` al 45 %), fondo `--color-superficie`, sin sombra ni subida.
- El número y los minutos del bloque pasan a 14 px en `--color-texto-2`.

## Contenido aprobado (copiar tal cual)

> Aprobado por el desarrollador el 2026-11-21 en la vista previa.

- Enlace de la tarjeta: «Ver detalle» (con la flecha como ícono, no como carácter).
- Los textos de los botones de prompts y de «Terminado cuando… (n)» no cambian.

## Tareas

1. Fase 1 (línea base, antes de tocar el código): medir el alto de cada unidad en 1440 × 900 y 1366 × 657 y contar los botones de contorno visibles.
2. Rehacer el pie de `TarjetaBloque.astro` con el enlace, la capa clicable y el botón de prompts.
3. Agregar la marca de la unidad y quitar el borde superior grueso; `franjaTarjeta` (`src/lib/colores-unidad.ts`) conserva `--tinte`, `--sombra` y `--halo`, y se quitan las clases `border-t-uN` que ya no se usan.
4. Aplicar `.tarjeta-entrega` en `TarjetaTerminado.astro`.
5. Probar con teclado: Tab llega a «Ver detalle» y al botón de prompts de cada tarjeta, la tarjeta sube con el foco y Enter abre el modal correcto; la transición sale desde la tarjeta.
6. Probar con lector de pantalla que el nombre del botón sigue siendo «Ver detalle de «título»» y que la capa clicable no se anuncia.
7. Ejecutar `pnpm build`, `pnpm astro check` y las regresiones; revisar en 360, 640, 1024, 1366 y 1440 px, ambos modos y sin JavaScript.
8. Escribir la bitácora y actualizar el registro.

## Tareas del desarrollador

1. Aplicar la P-026 antes de empezar.

## Criterios de aceptación

- [x] Como máximo 1 botón de contorno visible por tarjeta de bloque (`document.querySelectorAll('.tarjeta .boton-contorno')` contra la cantidad de tarjetas).
- [x] Un clic en cualquier punto de la tarjeta, fuera del botón de prompts, abre el detalle; un clic en el botón de prompts abre los prompts.
- [x] Sin JavaScript, la tarjeta no tiene zonas clicables sin función y el contenido de los `<dialog>` se lee debajo (RDA-011).
- [x] La marca de la U3 en oscuro usa `--color-borde-u3` y se distingue del fondo.
- [x] En 1440 × 900, cada unidad sigue midiendo como máximo el alto de la ventana menos el encabezado.
- [x] Regresiones: `pnpm build` sin advertencias con la guardia; `pnpm astro check` 0/0/0; 0 B de JavaScript nuevo; con `prefers-reduced-motion: reduce` la flecha no se mueve.

> Evidencia en [bitacora-06-04](bitacoras/bitacora-06-04.md). El clic se comprobó con `elementFromPoint` en Edge headless. El teclado, el lector de pantalla, el clic real, la transición y la revisión de 360 a 1440 px quedan a cargo del desarrollador.

## Riesgos

- Que la capa clicable impida seleccionar el texto de la tarjeta: el texto completo está en el modal; se acepta y se anota.
- Que la transición de tarjeta a modal tome como origen el botón y no la tarjeta: se revisa el selector de origen del script de la 05-04 sin cambiar su peso.

## Fuera de alcance

- Mosaico proporcional a los minutos y cambios de la cuadrícula 3 × 2.
- «Copiar prompt» directo en la tarjeta.
- Guardar las casillas de «Terminado cuando…».

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Aplicación de la P-026.
