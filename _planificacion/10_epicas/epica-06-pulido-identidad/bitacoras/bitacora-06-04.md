# Bitácora 06-04 · Tarjetas de bloque y ticket de entrega

- **Fecha:** 2026-11-22
- **Agente:** Claude Code (Opus 5.5)
- **Rama:** iteracion/06-04-tarjetas-bloque
- **Estado final:** En revisión

## Resumen

Cada tarjeta de bloque tiene ahora una marca recta de 40 × 6 px del color de su unidad en lugar del borde superior de 6 px, y todos sus bordes son de 1 px en `--color-linea`. «Ver detalle» pasó a ser un enlace de texto con flecha, y su capa `.cubre-tarjeta` hace que toda la tarjeta abra el detalle. Queda un solo botón de contorno visible: «Ver prompt» o «Prompts (n)», a la derecha y por encima de la capa. «Terminado cuando…» se ve como un ticket de entrega, con borde discontinuo, fondo `--color-superficie` y sin sombra ni subida. No hay JavaScript nuevo y `modal.ts` no cambió.

Paso 0: el desarrollador dio por terminada la 06-03 el 2026-11-22, tras una revisión visual sin observaciones. Aceptó que la U4 crezca 42 px en 1024 × 768, sin tocar la cabecera. El desarrollador aplicó la P-026 en `DESIGN.md` (comprobado con `grep`: «Marca de 40 × 6 px»), y ahora figura como aplicada. La P-027 sigue pendiente.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `src/components/TarjetaBloque.astro` | Marca `.marca-unidad` (`aria-hidden`); número y minutos en 14 px y `text-texto-2`; botón «Ver detalle» propio (`data-abrir-modal`, `aria-haspopup`, `aria-controls`, contexto `sr-only`, `hidden js:inline-flex`) con flecha SVG (`aria-hidden`) y `<span class="cubre-tarjeta">`; botón de prompts envuelto en `relative z-10 ml-auto`. |
| `src/components/TarjetaTerminado.astro` | `border-t-linea` → `tarjeta-entrega`. |
| `src/lib/colores-unidad.ts` | `franjaTarjeta` sin `border-t-u1` a `border-t-u4` ni `oscuro:border-t-borde-u3`; conserva `--tinte`, `--sombra` y `--halo`. |
| `src/styles/global.css` | `.tarjeta` sin `border-t-[6px]`; nuevas `.marca-unidad`, `.enlace-tarjeta`, `.cubre-tarjeta`, `.flecha-tarjeta` (3 px solo con `prefers-reduced-motion: no-preference`) y `.tarjeta-entrega` (con `::after` oculto). |
| `_planificacion/…` | Iteraciones 06-03 y 06-04, definición, registro, archivo y P-026. |

## Verificación

Medí en Edge headless por CDP sobre `pnpm preview`, con un script fuera del repositorio y con movimiento reducido. Claro y oscuro dan las mismas cifras.

| Medición | Antes (Fase 1) | Después |
| :------- | :------------- | :------ |
| Unidades en 1440 × 900 (px) | 823 / 823 / 823 / 823 | 823 / 823 / 823 / 823 |
| Unidades en 1366 × 657 (px) | 798 / 798 / 800 / 773 | 780 / 780 / 782 / 755 (−18) |
| `.tarjeta .boton-contorno` | 37 (máx. 2 por tarjeta) | 17 (máx. 1): 13 de prompts y 4 de «Terminado cuando… (n)» |
| `dialog` · `h1` | 54 · 1 | 54 · 1 |

- **Capa clicable (precisión 1 del desarrollador):** en el DOM compilado, el botón y el pie dan `position: static`, `transform: none`, `translate: none`, `z-index: auto` e `isolation: auto`. La capa mide 401 × 283 en una tarjeta de 403 × 285, es decir, la tarjeta menos su borde. `::before` y `::after` tienen `pointer-events: none`. Con `elementFromPoint`, el centro del botón de prompts devuelve `modal-u1-bloque-4-prompts`; un punto sobre el texto de la tarjeta devuelve `modal-u1-bloque-4-detalle`.
- **Foco (precisión 2):** el botón usa el `:focus-visible` global (2 px `--color-foco`, separación de 3 px). Contraste del anillo: 4,62:1 sobre `--color-fondo` y 4,09:1 sobre `--color-superficie` en claro; 12,43:1 y 10,97:1 en oscuro, todos ≥ 3:1. Ni la tarjeta ni la cuadrícula tienen `overflow` que lo recorte. La tarjeta de bloque sigue subiendo con `:has(:focus-visible)`.
- **Sin JavaScript (precisión 3):** en `dist/index.html` hay 20 `class="enlace-tarjeta hidden js:inline-flex"` y 20 `cubre-tarjeta`, cada una dentro de su botón. Sin JS, el botón está oculto y la capa también, así que no quedan zonas clicables.
- **Colores:** la marca de la U3 en oscuro calcula `rgb(0, 176, 232)` (`--color-borde-u3`), con 7,54:1 sobre `--color-fondo`. El número de bloque calcula 14 px en `--color-texto-2`. El enlace tiene 6,35:1 en claro y 10,14:1 en oscuro.
- `pnpm build`: sin advertencias; «Guardia de marcadores: 0 marcadores en dist/».
- `pnpm astro check`: 0 errores, 0 advertencias, 0 sugerencias.
- **JavaScript propio** (gzip nivel 9 de las 6 etiquetas en línea concatenadas): 1774 B, sin cambios.
- `git diff --stat -- src/assets`: vacío.

## Criterios de aceptación

- [x] Máximo 1 botón de contorno por tarjeta: 17 en 24 tarjetas, máx. 1.
- [x] El clic fuera del botón de prompts abre el detalle y el del botón abre los prompts: comprobado con `elementFromPoint` (clic simulado, no real).
- [x] Sin JS no hay zonas clicables sin función: botón y capa con `hidden js:inline-flex` en `dist`.
- [x] Marca de la U3 en oscuro = `--color-borde-u3`, con 7,54:1.
- [x] 1440 × 900: 823 = 900 − 77 en las 4 unidades.
- [x] Regresiones: build con guardia sin advertencias, check 0/0/0, 0 B de JS nuevo. La flecha solo se mueve dentro de `prefers-reduced-motion: no-preference` (revisión del CSS).

## Diferencias entre lo planificado y lo encontrado

- «Ver detalle» es un `<button>` escrito en `TarjetaBloque.astro` y no un `BotonModal`, porque su apariencia (enlace con flecha y capa) es otra. Conserva los mismos atributos y el mismo nombre accesible.
- El origen de la transición no requirió cambios: `abre.closest(".tarjeta")` ya devuelve la tarjeta.
- El borde discontinuo se declara de 1,5 px, pero con una escala de pantalla de 1 Chrome lo dibuja de 1 px (redondeo a píxel físico). Con escala 2 o más se ve de 1,5 px.
- `.tarjeta-entrega` usa `!important` en `box-shadow` y `translate`, porque esas reglas de `.tarjeta` viven fuera de capa, dentro de `@supports`.
- La 1366 × 657 baja 18 px por unidad (el borde de 6 px pasa a 1 px y el número baja a 14 px).

## No se pudo verificar

- Teclado, lector de pantalla, clic real, transición de tarjeta a modal y revisión de 360 a 1440 px: quedan a cargo del desarrollador, como se acordó.

## Revisión manual del desarrollador

- Tab llega a «Ver detalle» y al botón de prompts. El anillo de foco se ve completo, también sobre la trama, y la tarjeta sube.
- El lector anuncia «Ver detalle de «título»» y no anuncia la capa.
- La transición sale desde la tarjeta. El ticket de «Terminado cuando…» no sube ni tiene sombra.
- No se puede seleccionar el texto de la tarjeta con el ratón (riesgo aceptado; el texto completo está en el modal).

## Decisiones tomadas

- El botón de prompts va envuelto en un `<span class="relative z-10 ml-auto">`, para no tocar `BotonModal`.
- Ninguna RDA nueva.

## Pendientes y riesgos

- La P-027 debe aplicarse antes de la 06-05.

## Revisión

- **Resultado frente al objetivo:** cumplido. Cada tarjeta tiene una sola acción visible y se abre entera, y la entrega se distingue de los bloques.
- **Qué aprendimos:** en el DOM compilado basta con comprobar `position`, `transform` y `z-index` del botón y del pie para asegurar que la capa absoluta cubra la tarjeta.
- **Qué cambia para lo que sigue:** la 06-05 debe revisar que la transición de tarjeta a modal siga saliendo desde la tarjeta con el modal nuevo.

## Commit sugerido

`Épica 6 - Iteración 06-04: tarjeta de bloque con marca de 40 × 6 px, enlace «Ver detalle» que cubre la tarjeta y un solo botón de prompts; «Terminado cuando…» como ticket discontinuo`
