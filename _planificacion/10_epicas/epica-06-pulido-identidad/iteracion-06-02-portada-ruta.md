# Iteración 06-02 · Portada y ruta con firma

- **Épica:** 06 · Pulido de identidad: portada, unidades y modales
- **Estado:** Terminada
- **Rama sugerida:** iteracion/06-02-portada-ruta
- **Depende de:** 06-01, RDA-013 aceptada y propuesta P-024 aplicada
- **Especificación:** —
- **RDA relacionadas:** RDA-004, RDA-008, RDA-013

## Objetivo

Que el primer pantallazo tenga firma propia: un título firme, el lema como segunda voz, el curso en cifras y una ruta en la que el número de cada unidad es su marca, sin barras de avance.

## Punto de partida

- `Portada.astro`: título (`h1`, `text-4xl`/`text-5xl`), lema en `text-texto-2`, botón «Empezar por la Unidad 1», redes, estrella de Gemini en posición absoluta sobre la ruta y logos de Google, GTD y Capacita en una franja al pie de la sección.
- `RutaCurso.astro` y `BloqueUnidad.astro`: mosaico 2 × 2 con «Unidad n», título, mini-proyecto en 2 líneas (`line-clamp-2`) y `BarraAvance.astro`.
- `src/content/curso.yaml`: `titulo`, `lema`, `clases: 4`, `duracionTotalMin: 480`.
- Conteo hecho en la vista previa (2026-11-21): 20 bloques con número y 24 prompts en todo el curso. Sale del contenido y no del parche, pero es referencia histórica: se vuelve a contar en la Fase 1 (tarea 1) y lo comprueba el criterio de la ficha.

## Alcance y entregables

- **Columna de texto de la portada:**
  - Título (`h1`) con `.titulo-portada`: `clamp(2.5rem, 1.5rem + 3.2vw, 4rem)`, interlineado 1,04, tracking −0,03 em, Sora 700.
  - Lema con `.lema-portada`: Sora 600, `clamp(1.25rem, 1rem + 0.9vw, 1.625rem)`, en `--color-primario` (4,62:1 en claro y 7,54:1 en oscuro, texto grande).
  - Ficha del curso (`<ul aria-label="El curso en cifras">`) en IBM Plex Mono, con separador «·» desde 640 px y en 2 columnas sin separador en móvil. Clases y horas salen de `curso.yaml`; bloques y prompts se cuentan de las colecciones al compilar.
  - Botón principal, redes y, debajo, los logos de Google, GTD y Capacita separados por una línea de 1 px `--color-linea`.
- **Ruta del curso:** la estrella de Gemini sale de la posición absoluta y va junto al `h2` «Ruta del curso» (alineada a la derecha, 56 px en móvil, 96 px desde 640 px y 112 px desde 1024 px), así en móvil deja de quedar huérfana.
- **Tarjeta de la ruta (`BloqueUnidad.astro`):** número de la unidad en Sora 700 (`clamp(2.75rem, 2rem + 2vw, 3.5rem)`, cifras tabulares) con «Unidad» solo para lectores de pantalla, título, mini-proyecto completo (sin `line-clamp`) y «Clase n de 4 · 120 min» en IBM Plex Mono al pie.
- Sin `BarraAvance` en la portada; el componente se borra en la 06-03.

## Contenido aprobado (copiar tal cual)

> Aprobado por el desarrollador el 2026-11-21 en la vista previa.

- Ficha del curso: «4 clases · 8 horas · 20 bloques · 24 prompts» (valores calculados; si el contenido cambia, cambian los números, no el formato).
- Nombre accesible de la ficha: «El curso en cifras».
- Pie de cada tarjeta de la ruta: «Clase {clase} de {clases} · {duracionMin} min».

## Decisiones del desarrollador

- 2026-11-21: quitar las barras de avance (RDA-013).
- 2026-11-21: el `h1` sigue siendo el título del curso (`DESIGN.md`, sección 3, regla 2); el lema no pasa a `h1`.
- 2026-11-22: opción A en 1366 × 657: la columna de texto cabe y la ruta se desplaza (la última tarjeta termina hacia los 803 px; antes, 807 px). No se reducen la estrella, el título ni los espaciados.

## Tareas

1. Fase 1 (línea base, antes de tocar el código): medir y anotar el alto de la portada en 1440 × 900, 1366 × 657 y 390 × 844, el alto de cada unidad en 1440 × 900 y 1366 × 657 (fragmento de la 05-08) y contar en `src/content/bloques/` los bloques con número y los prompts.
2. Rehacer la columna de texto de `Portada.astro` con la ficha calculada (`obtenerUnidadesConBloques()`, bloques con `numero > 0` y suma de `prompts.length`).
3. Mover la estrella de Gemini a `RutaCurso.astro`, junto al `h2`, sin tocar el SVG.
4. Rehacer `BloqueUnidad.astro` con el número grande, el mini-proyecto completo y «Clase n de 4»; recibir `clases` desde `RutaCurso.astro`.
5. Agregar las clases `.titulo-portada`, `.lema-portada`, `.ficha-curso` y `.numero-ruta` en `global.css`.
6. Revisar el nombre accesible de cada tarjeta de la ruta (`aria-labelledby` = «Unidad n» + título) con el árbol de accesibilidad.
7. Ejecutar `pnpm build`, `pnpm astro check` y las regresiones; revisar en 360, 640, 1024, 1366 y 1440 px, ambos modos y teclado.
8. Escribir la bitácora y actualizar el registro.

## Tareas del desarrollador

1. ~~Aplicar la P-024 antes de empezar (RDA-013 aceptada el 2026-11-22).~~ Cumplida: P-024 aplicada el 2026-11-22 (comprobada con `grep`).

## Criterios de aceptación

- [ ] En 1440 × 900, título, lema, ficha, botón principal y las 4 tarjetas completas se ven sin desplazarse; en 1366 × 657 cabe la columna de texto y la ruta se desplaza (la última tarjeta termina hacia los 803 px).
- [ ] La ficha muestra los valores calculados y coincide con un conteo manual de `src/content/bloques/` (bloques con número y prompts).
- [ ] El mini-proyecto de la U3 se ve completo («…Ley 21.719 en GTD») en todos los anchos.
- [ ] En 390 × 844, la estrella de Gemini va en la misma fila que «Ruta del curso».
- [ ] 0 barras de avance en la portada; los logotipos conservan sus SVG (`git diff --stat -- src/assets` vacío).
- [ ] 1 `h1`; el `h2` de la ruta conserva `id="ruta"`; las anclas `#inicio`, `#ruta` y `#unidad-1` funcionan.
- [ ] Regresiones: `pnpm build` sin advertencias con la guardia; `pnpm astro check` 0/0/0; 0 B de JavaScript nuevo; LCP sin empeorar (el elemento LCP sigue siendo el `h1`).

## Riesgos

- Que el título más grande empuje la ruta bajo el pliegue en 1366 × 657: la ruta está en la otra columna; si la columna de texto queda más alta que la ruta, baja el tope del `clamp()` a 3,5 rem.
- Que el lema en `--color-primario` compita con el botón principal: el botón es la única superficie llena; el lema es texto.

## Fuera de alcance

- Línea de metro o riel lateral de la ruta.
- Textos nuevos en la portada fuera de la ficha.

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Aplicación de la P-024 (RDA-013 aceptada el 2026-11-22).
