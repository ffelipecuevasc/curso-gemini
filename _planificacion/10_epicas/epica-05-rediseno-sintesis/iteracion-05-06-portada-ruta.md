# Iteración 05-06 · Portada y ruta en un pantallazo

- **Épica:** 05 · Rediseño visual y síntesis del contenido
- **Estado:** Pendiente
- **Rama sugerida:** iteracion/05-06-portada-ruta
- **Depende de:** 05-01 y propuesta P-009 aplicada
- **Especificación:** —
- **RDA relacionadas:** RDA-004, RDA-008

## Objetivo

Que el primer pantallazo muestre el curso completo: título, lema y las 4 unidades como protagonistas, y que el instructor ocupe un espacio compacto, para que la página entera mida como máximo 7 pantallas.

## Punto de partida

- `Portada.astro`: título (`h1`), lema, botón «Ver la ruta», logo de Gemini y de Google sobre un círculo `superficie`, logos de GTD y Capacita Tu Futuro aparte, y las redes abajo a la izquierda. En 1440 × 900 la ruta queda bajo el pliegue (captura del 2026-11-18).
- `RutaCurso.astro` y `BloqueUnidad.astro`: mosaico de 4 bloques de color con número, título, mini-proyecto y avance en texto.
- `Instructor.astro`: sección propia con nombre, títulos, trayectoria y redes.

## Alcance y entregables

- **Portada y ruta fusionadas en una sola sección** (el `h1` sigue siendo el título del curso y la sección de ruta conserva su `id="ruta"` y su `h2`, para no romper anclas ni la navegación):
  - Columna de texto: título, lema y botón principal «Empezar por la Unidad 1» (ancla a `#unidad-1`), con las redes debajo.
  - Columna visual: el logo de Gemini sin modificar (regla 6 de contenido de `AGENTS.md`) y, en primer plano, las 4 tarjetas de unidad en mosaico 2 × 2, cada una con número, título, mini-proyecto y una barra de avance visual de su tramo (RDA-008) además del texto.
  - Logos de Google, GTD y Capacita Tu Futuro en una franja discreta al pie de la sección, como hoy pide `DESIGN.md`.
  - En móvil, el texto va primero y las 4 tarjetas se apilan en 1 columna (2 columnas desde 640 px).
- **Instructor compacto:** una franja con nombre, la certificación de Gemini primero, un resumen de la trayectoria tomado literal del documento del curso, y un botón «Ver trayectoria completa» que abre un modal (componente de la 05-04, si ya existe; si no, `<details>`) con el resto.
- Ningún texto nuevo salvo el botón «Empezar por la Unidad 1»; el resumen de la trayectoria se aprueba como «Contenido aprobado».

## Contenido aprobado (copiar tal cual)

> Se completa durante la iteración con el texto del botón y el resumen de la trayectoria que apruebe el desarrollador.

- …

## Tareas

1. Medir y anotar en la bitácora el alto de la portada, de la ruta y del instructor en 1440 × 900, 1366 × 657 y 360 × 740 (línea base).
2. Rehacer `Portada.astro` y `RutaCurso.astro` como una sola sección visual, conservando `id`, `h1`, `h2` y anclas.
3. Agregar la barra de avance visual en `BloqueUnidad.astro`, con el texto del tramo para lectores de pantalla.
4. Proponer al desarrollador el texto del botón y el resumen de la trayectoria; cargar solo lo aprobado.
5. Rehacer `Instructor.astro` en formato compacto con el modal o `<details>` de trayectoria completa.
6. Revisar la navegación del encabezado («Ruta» e «Instructor»), la píldora activa y el salto al contenido.
7. Ejecutar `pnpm build`, `pnpm astro check` y las regresiones; revisar en 360, 640, 1024, 1366 y 1440 px, ambos modos y teclado.
8. Escribir la bitácora y actualizar el registro.

## Tareas del desarrollador

1. Aprobar el texto del botón y el resumen de la trayectoria.
2. Confirmar si la insignia de Gemini Certified Educator ya está disponible (sigue en «Decisiones por tomar»); si llega, se usa el campo `insignia` del esquema.

## Criterios de aceptación

- [ ] En 1440 × 900 y 1366 × 657, el título, el lema, el botón principal y las 4 tarjetas de unidad completas se ven sin desplazarse (captura en la bitácora).
- [ ] La sección del instructor mide como máximo una altura de ventana en 1440 × 900.
- [ ] Los logotipos de Google, Gemini y Chrome conservan sus SVG originales sin cambios (comparación de los archivos y del marcado con `git diff`).
- [ ] Las anclas `#inicio`, `#ruta`, `#unidad-1` a `#unidad-4` e `#instructor` siguen funcionando desde el encabezado.
- [ ] 1 `h1`; cada `section` con `aria-labelledby`; contraste AA de las tarjetas sobre su color.
- [ ] Regresiones: `pnpm build` sin advertencias con la guardia; `pnpm astro check` 0/0/0; 0 B de JavaScript nuevo; LCP sin empeorar respecto de la medición de la 04-04 (Lighthouse móvil sobre `pnpm preview`).

## Riesgos

- Que poner las 4 tarjetas en el primer pantallazo aumente el LCP: el elemento LCP sigue siendo el `h1` de texto; las tarjetas no llevan imágenes.
- Que en 1366 × 657 no quepan las 4 tarjetas con su mini-proyecto: el mini-proyecto se acorta con `line-clamp` a 2 líneas y se muestra completo en la sección de la unidad.

## Fuera de alcance

- Efectos y sombras de las tarjetas (05-07).
- Cambiar los logotipos o agregar los logos de GTD y Capacita al pie (sigue como propuesta fuera de alcance).

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Aprobación del texto del botón y del resumen de la trayectoria.
