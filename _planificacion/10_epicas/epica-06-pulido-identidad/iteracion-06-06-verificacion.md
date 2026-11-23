# Iteración 06-06 · Verificación final del pulido

- **Épica:** 06 · Pulido de identidad: portada, unidades y modales
- **Estado:** Terminada (2026-11-22; fase A local y fase B publicada; [bitácora](bitacoras/bitacora-06-06.md) y [cierre](bitacoras/bitacora-06-cierre.md))
- **Rama sugerida:** iteracion/06-06-verificacion
- **Depende de:** 06-04 y 06-05
- **Especificación:** —
- **RDA relacionadas:** RDA-004, RDA-007, RDA-011, RDA-013

## Objetivo

Comprobar con mediciones que el pulido cumple el criterio de término de la épica en local y en la URL publicada, sin perder lo logrado en la épica 05, y dejar `DESIGN.md` y el sitio describiendo lo mismo.

## Punto de partida

- Mediciones de la 05-08 (alto de las unidades, alto total, palabras por unidad, JavaScript propio de 1774 B gzip y Lighthouse sobre la URL publicada).
- Bitácoras 06-01 a 06-05 con sus mediciones parciales.
- Crítica de Impeccable del 2026-11-21: 24 de 36 en las heurísticas de Nielsen y 1 hallazgo del detector.

## Alcance y entregables

- Medición completa del criterio de término de `definicion-epica-06.md`, en local (`pnpm preview`) y en la URL publicada después del merge.
- Detector de Impeccable (`pnpm dlx impeccable@<versión fija> detect --json`, salida fuera del repositorio, como en la 05-08) sobre los componentes tocados en la épica.
- Repetición de la crítica de diseño para comparar el puntaje con el del 2026-11-21 (informativo, sin bloquear).
- Lista de diferencias entre `DESIGN.md` y la implementación; si las hay, propuestas en `propuestas-documentos-protegidos.md`.
- Bitácora de cierre de la épica 06.

## Tareas

1. Medir en `pnpm preview` el alto de cada unidad (1440 × 900 y 1366 × 657, ambos modos), el alto total de la página, las palabras visibles por unidad, el peso del JavaScript propio y los botones de contorno visibles por tarjeta.
2. Buscar en `dist/index.html` «Avance del curso», «Detalle ·» y `border-left` en los estilos compilados de las citas.
3. Revisar accesibilidad: teclado de punta a punta (incluida la tarjeta clicable), foco visible, árbol de encabezados, modales con lector de pantalla y contraste AA en todos los estados sobre la trama, en ambos modos.
4. Revisar sin JavaScript, con `prefers-reduced-motion: reduce` y en la vista de impresión.
5. Ejecutar el detector de Impeccable y Lighthouse móvil y escritorio sobre `pnpm preview`; corregir lo que falle dentro del alcance de la épica.
6. Comparar `DESIGN.md` con la implementación y registrar las propuestas que correspondan.
7. Repetir Lighthouse móvil sobre la URL publicada (después del merge del desarrollador): mediana de 3 corridas, comparada con el cierre de la épica 05 con tolerancia de 2 puntos por categoría; CLS < 0,1.
8. Escribir la bitácora, la bitácora de cierre de la épica y actualizar el registro.

## Tareas del desarrollador

1. Hacer merge a `main` para que Workers Builds publique el pulido.
2. Revisar el sitio en su notebook y en un teléfono, y confirmarlo con fecha.

## Criterios de aceptación

- [x] Cada criterio de término de `definicion-epica-06.md` está marcado con su medición en la bitácora de cierre. F3 (palabras) es una desviación aceptada y F7 (teclado y lector) queda no verificado.
- [x] Lighthouse móvil publicado (mediana de 3): 99/100/100/100, LCP 1,43 s, CLS 0, TBT 71 ms, frente a 98/100/100/100; tabla comparada en la bitácora 06-06.
- [x] Impeccable: `[]`.
- [x] Sin JavaScript: CSS y HTML, más F6 del desarrollador.
- [x] `DESIGN.md` describe el sitio publicado: P-028 aplicada.
- [x] Regresiones: build sin advertencias con la guardia, check 0/0/0, 24 de 24 prompts y 1 `h1` (local y publicado).

## Riesgos

- Que la trama de puntos baje la nota de Rendimiento por repintado: se mide con y sin la trama; si la diferencia pasa de 2 puntos, se prueba la trama como imagen SVG de 22 × 22 px en línea.

## Fuera de alcance

- Cambios de diseño nuevos que salgan de la crítica repetida: se registran como propuestas fuera de alcance.

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Merge a `main` y confirmación en notebook y teléfono.
