# Bitácora 06-02 · Portada y ruta con firma

- **Fecha:** 2026-11-22
- **Agente:** Claude Code (Opus 5.5)
- **Rama:** `iteracion/06-02-portada-ruta`
- **Estado final:** En revisión

## Resumen

La portada tiene ahora:

- Un `h1` más firme (`.titulo-portada`).
- El lema en Sora 600 y `--color-primario` (`.lema-portada`).
- La ficha «4 clases · 8 horas · 20 bloques · 24 prompts», calculada al compilar, con nombre accesible «El curso en cifras».
- El botón y las redes, con los logos de Google, GTD Telsur y Capacita Tu Futuro debajo, tras una línea de 1 px.

La estrella de Gemini va junto al `h2` «Ruta del curso». Cada tarjeta de la ruta muestra el número de la unidad en grande, el mini-proyecto completo y «Clase n de 4 · 120 min», sin barra de avance (RDA-013).

En 1440 × 900 todo cabe sin desplazarse. En 1366 × 657 la ruta se desplaza; el desarrollador eligió la opción A.

Antes de empezar se cumplieron las precondiciones: la 06-01 quedó terminada (dicho por el desarrollador) y la P-024 se comprobó aplicada con `grep`.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `src/components/Portada.astro` | Título, lema, ficha calculada, botón, redes y logos con línea de 1 px en la columna de texto; la estrella sale de la portada |
| `src/components/RutaCurso.astro` | Estrella de Gemini junto al `h2` (56, 96 y 112 px), con el mismo SVG; pasa `clases` a cada tarjeta; `id="ruta"` intacto |
| `src/components/BloqueUnidad.astro` | Número grande (`.numero-ruta`, «Unidad» solo para lectores de pantalla), mini-proyecto sin `line-clamp`, pie «Clase n de N · min», sin `BarraAvance` |
| `src/styles/global.css` | `.titulo-portada`, `.lema-portada`, `.ficha-curso` (separador «·» con texto alternativo vacío desde 640 px) y `.numero-ruta` |
| `_planificacion/10_epicas/epica-06-pulido-identidad/iteracion-06-01-trama-puntos.md` | Terminada |
| `_planificacion/10_epicas/epica-06-pulido-identidad/iteracion-06-02-portada-ruta.md` | En revisión, criterio ajustado (opción A), decisión registrada, P-024 cumplida |
| `_planificacion/10_epicas/epica-06-pulido-identidad/definicion-epica-06.md` | 06-01 Terminada, 06-02 En revisión, criterio de término de la portada y decisiones del 2026-11-22 |
| `_planificacion/00_producto/propuestas-documentos-protegidos.md` | P-024 «Aplicada 2026-11-22» en la tabla y en su línea Estado |
| `_planificacion/00_producto/registro-pendientes.md` | Iteración activa 06-02, 06-01 Terminada, backlog 27 y 28, próximo hito, historial en 50 filas |
| `_planificacion/00_producto/registro-archivo.md` | Recibe la fila más antigua del historial (03-03 en revisión) |

## Fase 1 (línea base) y medición

Conteo del agente en `src/content/bloques/`: 20 bloques con número mayor que 0 (23 con número, contados los 3 bloques 0) y 24 prompts. Coincide con la ficha.

Alto en Edge headless sobre `pnpm preview`: se midió primero el código de `HEAD` y luego el de la 06-02, con un script fuera del repositorio. Claro y oscuro dan las mismas cifras. «Fin» se mide desde el borde superior de la ventana.

| Medida | 1440 × 900 | 1366 × 657 | 390 × 844 |
| :----- | :--------- | :--------- | :-------- |
| Alto de la portada (antes → ahora) | 806 → 750 | 806 → 750 | 1483 → 1497 |
| Fin de la última tarjeta (antes → ahora) | 807 → 803 (cabe) | 807 → 803 (no cabe, ventana 657) | 1544 → 1610 |
| Fin del botón principal (antes → ahora) | 570 → 602 | 570 → 602 (cabe) | 456 → 514 |
| Alto del `h1` (antes → ahora) | 180 → 266 | 180 → 266 | 135 → 125 |
| Mini-proyecto de la U3 completo | no → sí | no → sí | sí → sí |
| Estrella en la fila del `h2` | sí | sí | sí |
| Alto de las unidades (antes = ahora) | 823 × 4 | 808 / 808 / 810 / 783 | — |

Las mediciones del agente no reemplazan las del desarrollador.

## Verificación

- `pnpm build`: sin advertencias; guardia con 0 marcadores.
- `pnpm astro check`: 0 errores, 0 advertencias, 0 sugerencias.
- `dist/index.html`:
  - 1 `h1`; `id="inicio"`, `id="ruta"` e `id="unidad-1"`, una vez cada uno.
  - 54 `<dialog>` y 24 `data-copiar` únicos. Los componentes de prompts no cambiaron.
  - 0 barras de avance en la portada.
  - Ficha: `<li>4 clases</li><li>8 horas</li><li>20 bloques</li><li>24 prompts</li>`.
  - «Ley 21.719 en GTD» completo y 4 pies «Clase n de 4 · 120 min».
- JavaScript propio: 1774 B gzip (6 etiquetas), sin cambios.
- `git diff --stat -- src/assets`: vacío.
- Nombre accesible de cada tarjeta: `aria-labelledby` = número (con «Unidad » solo para lectores de pantalla) + título; `aria-describedby` = mini-proyecto + pie.

## Criterios de aceptación

- [x] En 1440 × 900 se ven título, lema, ficha, botón y las 4 tarjetas sin desplazarse (fin 803 ≤ 900). En 1366 × 657 cabe la columna de texto (602) y la ruta se desplaza (803). Criterio ajustado por la opción A. Faltan las capturas del desarrollador.
- [x] La ficha coincide con el conteo manual: 4, 8, 20 y 24.
- [x] Mini-proyecto de la U3 completo en los 3 anchos medidos. Los demás anchos los revisa el desarrollador.
- [x] En 390 × 844 la estrella está en la fila de «Ruta del curso».
- [x] 0 barras de avance en la portada; `git diff --stat -- src/assets` vacío.
- [x] 1 `h1`, `id="ruta"` conservado y anclas presentes.
- [ ] Regresiones: build, check y JS cumplen. Falta confirmar con Lighthouse que el LCP no empeora (queda para la 06-06).

## Diferencias entre lo planificado y lo encontrado

- En 1366 × 657 la ruta no cabe. Ya no cabía antes (807 px). B+C solo ganaba unos 60 px. El desarrollador eligió la opción A y ajustó el criterio en la iteración y en la definición de la épica.
- El build falla si `duracionTotalMin` no da horas enteras, para que la ficha nunca muestre un decimal sin revisión.

## No se pudo verificar

- Capturas, teclado y los anchos 360, 640, 1024 y 1366 en un navegador real.
- El LCP con Lighthouse.

## Tareas del desarrollador

1. Tomar capturas de 1440 × 900, 1366 × 657 y 390 × 844 en claro y oscuro: ficha, logos bajo la línea, estrella junto a «Ruta del curso», número grande y pie «Clase n de 4».
2. Revisar 360, 640, 1024, 1366 y 1440 px en ambos modos: el mini-proyecto de la U3 completo y la ficha en 2 columnas bajo 640 px, con «·» desde 640 px.
3. Recorrer con el teclado (Tab) el botón, las redes y las 4 tarjetas: foco visible y, con lector de pantalla, «Unidad 1, …» como nombre de la tarjeta.

## Tareas para la 06-06

- Medir el LCP con Lighthouse: el `h1` pasa de 180 a 266 px de alto en escritorio. Confirmar que el elemento LCP sigue siendo el `h1` y que no empeora.
- Proponer una sola P-028 para `DESIGN.md` con dos notas: 1366 × 657 como pantalla con desplazamiento de la ruta (opción A) y la excepción de contraste AAA → AA en oscuro sobre el centro del punto de la trama (06-01).

## Decisiones tomadas

- Opción A en 1366 × 657 (desarrollador, 2026-11-22), sin reducir la estrella, el título ni los espaciados.
- `BarraAvance.astro` se conserva hasta la 06-03, que lo borra.

## Pendientes y riesgos

- La P-025 sigue pendiente y va antes de la 06-03.
- LCP sin medir (tarea de la 06-06).

## Revisión

- **Resultado frente al objetivo:** cumplido. La portada tiene título firme, lema como segunda voz, ficha calculada y ruta con número grande y sin barras. 1366 × 657 queda con desplazamiento por decisión del desarrollador.
- **Qué aprendimos:** el mini-proyecto completo y el número grande hacen crecer las tarjetas tanto como lo que se ganó al quitar la estrella absoluta. En 1366 × 657 la ruta no cabe ni antes ni después del cambio.
- **Qué cambia para lo que sigue:** la 06-03 borra `BarraAvance.astro` (ya no se usa en la portada) y mide el alto de las unidades contra estas cifras (823 × 4 y 808/808/810/783).

## Commit sugerido

`Épica 6 - Iteración 06-02: portada con título firme, lema, ficha del curso calculada y logos; ruta con estrella, número grande, mini-proyecto completo y sin barras`
