# Iteración 05-08 · Pulido y verificación final del rediseño

- **Épica:** 05 · Rediseño visual y síntesis del contenido
- **Estado:** Pendiente
- **Rama sugerida:** iteracion/05-08-verificacion
- **Depende de:** 05-07
- **Especificación:** —
- **RDA relacionadas:** RDA-004, RDA-005, RDA-007, RDA-011, RDA-012

## Objetivo

Comprobar con mediciones que el rediseño cumple el criterio de término de la épica en local y en la URL publicada, corregir lo que falle y dejar `DESIGN.md` y el sitio describiendo lo mismo.

## Punto de partida

- Mediciones de la 04-04 (línea base de Lighthouse, LCP, CLS y TBT sobre la URL publicada; INP informativo, sin bloquear; referencia: TBT).
- Bitácoras 05-01 a 05-07 con sus mediciones parciales.

## Alcance y entregables

- Medición completa del criterio de término de la épica, en local (`pnpm preview`) y en la URL publicada después del merge.
- Revisión con el detector de la skill Impeccable (`impeccable detect --json`) sobre los componentes tocados en la épica, y corrección de sus hallazgos o justificación en la bitácora.
- Lista de diferencias entre `DESIGN.md` y la implementación; si las hay, propuestas en `propuestas-documentos-protegidos.md`.
- Bitácora de cierre de la épica 05.

## Tareas

1. Medir en `pnpm preview` el alto de cada unidad (1440 × 900 y 1366 × 657, ambos modos), el alto total de la página, las palabras visibles por unidad y el peso del JavaScript propio, con los fragmentos de consola de las iteraciones anteriores reunidos en la bitácora.
2. Buscar en `dist/index.html` el material de conducción («al azar», «Pregunta para el grupo», «semáforo», minutos entre paréntesis dentro de los bloques).
3. Revisar accesibilidad: teclado de punta a punta, foco visible, árbol de encabezados, modales con lector de pantalla (NVDA o VoiceOver, si es posible) y contraste AA en todos los estados, en ambos modos.
4. Revisar sin JavaScript y con `prefers-reduced-motion: reduce`.
5. Ejecutar el detector de Impeccable y Lighthouse móvil y escritorio sobre `pnpm preview`; corregir lo que falle dentro del alcance de la épica.
6. Comparar `DESIGN.md` con la implementación y registrar las propuestas que correspondan.
7. Repetir las mediciones de Lighthouse sobre la URL publicada (después del merge del desarrollador) y compararlas con la 04-04.
8. Escribir la bitácora, la bitácora de cierre de la épica y actualizar el registro.

## Tareas del desarrollador

1. Hacer merge a `main` para que Workers Builds publique el rediseño.
2. Revisar el sitio en su notebook y en un teléfono, y confirmarlo con fecha.

## Criterios de aceptación

- [ ] Cada criterio de término de `definicion-epica-05.md` está marcado con su medición, su comando o su captura en la bitácora.
- [ ] Lighthouse móvil sobre la URL publicada: Rendimiento ≥ 95; Accesibilidad, Buenas prácticas y SEO = 100; LCP < 2,5 s, CLS < 0,1 e INP informativo, sin bloquear; referencia: TBT; tabla comparada con la 04-04.
- [ ] El detector de Impeccable no informa hallazgos sin resolver o sin justificar.
- [ ] Sin JavaScript, la página se lee completa en modo claro (RDA-007) y no hay botones que no funcionen.
- [ ] `DESIGN.md` describe el sitio publicado, o hay una propuesta pendiente para cada diferencia.
- [ ] Regresiones: `pnpm build` sin advertencias con la guardia; `pnpm astro check` 0/0/0; 24 de 24 prompts idénticos a su fuente; 1 `h1`.

## Riesgos

- Que la nota de Rendimiento baje por los efectos: se quita primero el efecto de menor valor (brillo que sigue al cursor) y se vuelve a medir.
- Que no haya medición de Lighthouse al cerrar la 05-05, cuando la unidad ya cabe en una pantalla: la primera lectura local es la de la 05-06 (LCP) y la línea base de la 05-07, y la publicada es la de esta iteración. Si Rendimiento no llega a 95, se sabrá recién en la 05-07 o la 05-08.

## Fuera de alcance

- Funcionalidades nuevas: lo que aparezca se anota como propuesta en `registro-pendientes.md`.

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Merge a `main` y revisión en su notebook y en un teléfono.
