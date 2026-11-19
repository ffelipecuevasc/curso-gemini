# Iteración 05-01 · Afordancias y estados de interacción

- **Épica:** 05 · Rediseño visual y síntesis del contenido
- **Estado:** En revisión (2026-11-19)
- **Rama sugerida:** iteracion/05-01-afordancias-estados
- **Depende de:** cierre de la épica 04 y P-009 aplicada
- **Bitácora:** [bitacora-05-01](bitacoras/bitacora-05-01.md)
- **Especificación:** —
- **RDA relacionadas:** RDA-004, RDA-007, RDA-011

## Objetivo

Que todo lo que se puede pinchar lo parezca antes de pincharlo: cursor de mano, un cambio de color perceptible al pasar el mouse, respuesta al presionar y foco visible, empezando por el botón de modo.

## Punto de partida

Verificar leyendo los archivos antes de escribir:

- `src/styles/global.css` no define `cursor` para `button` ni `summary`; Tailwind v4 deja los botones con `cursor: default`. Solo `Profundiza.astro` usa `cursor-pointer`.
- `BotonModo.astro`, el botón del menú (`Encabezado.astro`, línea del botón «Menú»), las píldoras de navegación y «Copiar» (`Prompt.astro`) cambian en hover de `superficie-2` (#ECF0FF) a `superficie` (#E4F3FF) o a `superficie` sobre un grupo `superficie-2`: el cambio no se distingue a simple vista.
- El botón de modo solo dice «Modo oscuro» para lectores de pantalla (`sr-only`) y no tiene texto ni pista visible de su acción.
- Las tarjetas de la ruta (`BloqueUnidad.astro`) solo subrayan el título en hover.

## Alcance y entregables

- Regla base en `global.css` (capa `base`): `cursor: pointer` para `button:not(:disabled)`, `[role="button"]`, `summary` y `label[for]`; `cursor: not-allowed` para los deshabilitados.
- Estados de hover y presionado con contraste perceptible frente a su fondo (diferencia de luminancia relativa de al menos 1,3:1 entre reposo y hover, medida con los HEX de los tokens), definidos como tokens nuevos derivados de la paleta: `--color-hover-suave` y `--color-presionado` en claro y oscuro.
- Botón de modo: etiqueta accesible que dice la acción («Cambiar a modo oscuro» / «Cambiar a modo claro»), sincronizada con el modo; indicación visible al pasar el mouse o enfocar (etiqueta flotante con `title` no basta: se usa un texto visible en un globo CSS posicionado, sin JavaScript nuevo); anillo de borde `primario` en hover; ícono que gira 20° en hover (sin movimiento con `prefers-reduced-motion`).
- Píldoras de navegación: hover con fondo `superficie` sobre un grupo cuyo fondo pasa a ser `fondo` con borde de 1 px `linea`, o el contraste que dé el token nuevo; la píldora activa conserva `primario`.
- «Copiar», «Descargar» y el botón secundario: hover que rellena con `primario` y texto `sobre-primario` (mismo patrón que el botón principal), y estado presionado con `scale(0.97)`.
- Tarjetas de la ruta: hover que sube la tarjeta 4 px (`translate`) y subraya el título; la sombra queda para la 05-07.

## Decisiones del desarrollador

- 2026-11-18: el botón de modo debe sentirse como botón al pasar el mouse, sin necesidad de pincharlo (pedido del desarrollador al crear la épica).
- 2026-11-19: el grupo de las píldoras de navegación se mantiene en `--color-superficie-2` (`DESIGN.md`, fila «Encabezado»), el hover de cada píldora inactiva usa `--color-hover-suave` y la activa conserva `--color-primario`; como el nombre accesible del botón de modo cambia con el estado, se retira `aria-pressed`; se registra la propuesta P-013 (`Pendiente`) para `DESIGN.md` (secciones 2.1, 2.3 y 5).

## Tareas

1. Medir y anotar en la bitácora la diferencia de luminancia actual entre reposo y hover de cada control (línea base).
2. Agregar los tokens `--color-hover-suave` y `--color-presionado` (claro y oscuro) en `@theme` y bajo `[data-modo="oscuro"]`, derivados de la paleta, y la regla base de `cursor`.
3. Rehacer los estados de `BotonModo.astro`: etiqueta accesible sincronizada con el modo desde `src/scripts/modo.ts`, globo de texto visible en hover y foco, anillo y giro del ícono.
4. Ajustar los estados de las píldoras y del botón «Menú» en `Encabezado.astro`.
5. Ajustar «Copiar» (`Prompt.astro`), «Descargar» (`TarjetaDescarga.astro`) y el botón principal de la portada para que compartan los mismos estados de hover y presionado.
6. Agregar el desplazamiento en hover de las tarjetas de la ruta (`BloqueUnidad.astro`).
7. Ejecutar `pnpm build`, `pnpm astro check` y las regresiones; revisar con teclado y mouse en 360 px y escritorio, en ambos modos.
8. Escribir la bitácora y actualizar el registro.

## Criterios de aceptación

- [x] En `pnpm preview`, `getComputedStyle(el).cursor === "pointer"` para el botón de modo, «Menú», cada «Copiar», cada «Descargar», cada `<summary>` y cada tarjeta de la ruta (fragmento de consola anotado en la bitácora). Evidencia: comprobado en Chrome headless (CDP) sobre `pnpm preview`: 1/1 modo, 1/1 menú, 6/6 píldoras, 24/24 «Copiar», 6/6 «Descargar», 16/16 `<summary>`, 4/4 tarjetas de la ruta y 1/1 CTA de portada.
- [x] La diferencia de luminancia entre reposo y hover es de al menos 1,3:1 en el botón de modo, «Menú», las píldoras, «Copiar» y «Descargar», en ambos modos (tabla en la bitácora con los HEX y el cálculo). Evidencia: modo, «Menú» y píldoras (`superficie-2` → `hover-suave`) = 1,37:1 en claro y 1,53:1 en oscuro; «Copiar» (`superficie-2` → `primario`) = 4,07:1 en claro y 4,80:1 en oscuro; «Descargar» (`superficie` → `primario`) = 4,09:1 en claro y 6,65:1 en oscuro; principal (`primario` → `primario-hover`) = 1,37:1 en claro y 1,34:1 en oscuro.
- [x] El botón de modo muestra en hover y en foco un texto visible con su acción, y su nombre accesible dice «Cambiar a modo oscuro» en claro y «Cambiar a modo claro» en oscuro (árbol de accesibilidad de DevTools). Evidencia: árbol AX de Chrome CDP (`Accessibility.getPartialAXTree`) devuelve `role: "button"` y `name: "Cambiar a modo oscuro"` en claro y `name: "Cambiar a modo claro"` en oscuro (`aria-pressed: null`); en 1024 px el globo tiene `visibility: "visible"`, `opacity: "1"`, queda debajo del botón (`top: 67 >= bottom: 60`) y no solapa `#menu-principal` (`solapaNav: false`).
- [x] Con `prefers-reduced-motion: reduce` emulado, no hay giro, desplazamiento ni escala. Evidencia: en Chrome CDP con `prefers-reduced-motion: reduce`, `transitionProperty: "none"`, `rotate: "0deg"` en hover del ícono de modo, `scale: "1"` al presionar (`:active`) y `translate: "0px"` en hover de las tarjetas de la ruta.
- [x] Contraste AA de todos los textos en sus estados de hover (tabla en la bitácora). Evidencia: `texto` sobre `hover-suave` = 12,12:1 (claro, AAA) y 7,89:1 (oscuro, AAA); `sobre-primario` sobre `primario` = 4,62:1 (claro, AA en 16 px font-medium) y 7,54:1 (oscuro, AAA); `sobre-primario` sobre `primario-hover` = 6,35:1 (claro, AA) y 10,14:1 (oscuro, AAA); `texto` sobre `presionado` = 10,53:1 (claro, AAA) y 6,63:1 (oscuro, AA).
- [x] Regresiones: `pnpm build` sin advertencias con la guardia; `pnpm astro check` 0/0/0; JavaScript propio sin aumento mayor a 150 B gzip; 1 `h1`; navegación con teclado sin cambios. Evidencia: `pnpm build` con 0 advertencias y 0 marcadores; `pnpm astro check` 0/0/0; JS propio en 4 etiquetas `<script>` = 2801 B sin comprimir y 1119 B gzip nivel 9 (+68 B gzip frente a los 1051 B de línea base, bajo el tope de +150 B y bajo los 3 KB totales); 1 `h1`.

## Riesgos

- Que el globo de texto del botón de modo tape la navegación en pantallas medianas: se posiciona debajo del botón y se prueba en 1024 px.
- Que el giro del ícono choque con la transición circular del cambio de modo (01-05): el giro se quita al hacer clic.

## Fuera de alcance

- Sombras y brillo de las tarjetas (05-07).
- Cambios de estructura de la portada o de la unidad (05-05 y 05-06).

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Aplicar la P-009 en `DESIGN.md` antes de empezar. Si el texto visible del botón de modo debe ser otro que «Cambiar a modo oscuro» / «Cambiar a modo claro», se acuerda antes de empezar.

## Evidencia del desarrollador

- **Fecha y hora de las pruebas:** 2026-11-19 15:24
- **Commit desplegado:** — (rama local `iteracion/05-01-afordancias-estados`)

### Qué intentó el agente

| Dato | Qué intentó | Por qué no pudo |
| :--- | :---------- | :-------------- |
| Percepción visual subjetiva de las transiciones (giro de 20° y quiebre al hacer clic durante el revelado circular de View Transitions, escala `0.97` al presionar y elevación de 4 px de las tarjetas de la ruta) en ventana real | Verificó todas las propiedades computadas (`cursor`, `rotate`, `scale`, `translate`, `opacity`, `visibility`, `boundingClientRect` en 1024 px y 360 px, y árbol de accesibilidad) con Chrome headless vía protocolo CDP sobre `pnpm preview` | Un navegador headless comprueba los valores computados del DOM/CSS y el árbol AX, pero no reemplaza la inspección visual humana del movimiento en pantalla |

### Qué necesita del desarrollador

1. **Dato:** confirmación visual en el navegador con `pnpm preview` (360 px, 1024 px y escritorio, en modo claro y oscuro, con mouse y teclado) · **Para qué criterio:** revisión visual de los estados de hover/presionado, posición del globo del botón de modo en 1024 px y ausencia de choque entre el giro del ícono y el revelado circular del cambio de modo · **Cómo obtenerlo:** ejecutar `pnpm preview`, recorrer con `Tab` y con el puntero el encabezado (píldoras, botón de modo, botón «Menú» en 360 px), el botón «Ver la ruta», las 4 tarjetas de la ruta, un botón «Copiar» y un botón «Descargar» en ambos modos.
   - **Respuesta:** Todo funcionó perfectamente, probé en el navegador con `pnpm preview` (360 px, 1024 px y escritorio, en modo claro y oscuro, con mouse y teclado) y los estados hover/presionado se ven perfectos, la posición del globo del botón de modo en 1024 px se ve perfectamente y la ausencia de choque entre el giro del ícono y el revelado circular del cambio de modo se ve excelente.
