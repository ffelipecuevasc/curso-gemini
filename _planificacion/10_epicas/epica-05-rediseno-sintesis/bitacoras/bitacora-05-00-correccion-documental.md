# Bitácora 05-00 · Corrección documental de la épica 05

- **Fecha:** 2026-11-19
- **Agente:** Antigravity (Gemini 3.1 Pro)
- **Rama:** correccion/epica-05-ajustes-documentales (sugerida; la crea el desarrollador)
- **Estado final:** En revisión

## Resumen

Corrección documental de la épica 05 previa a iniciar la iteración 05-01, sin cambios en código ni en documentos protegidos. Se reemplaza el criterio «INP < 200 ms» por «INP informativo, sin bloquear; referencia: TBT» en la definición y en las iteraciones 05-07 y 05-08; se adelanta la aplicación de P-009 a antes de la 05-01; se suma P-011 a la 05-04; se explicita en la 05-04 que el cuerpo del bloque vive solo en el modal «Ver detalle» dejando `BloqueClase` temporalmente austero hasta la 05-05; se agrega en la 05-08 el riesgo de no medir Lighthouse al cerrar la 05-05 (manteniendo las lecturas locales de 05-06 y 05-07); y en la segunda pasada se registra la propuesta P-012 (`AGENTS.md`, regla 5).

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/definicion-epica-05.md` | Decisiones de la épica (P-009, P-010 y P-011), Precondiciones (P-009 antes de la 05-01; P-010 y P-011 antes de la 05-04) y criterio de término (INP informativo, sin bloquear; referencia: TBT). |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/iteracion-05-01-afordancias-estados.md` | Agrega «P-009 aplicada» a «Depende de» y «Aplicar la P-009 en `DESIGN.md` antes de empezar» en «Datos requeridos · Del desarrollador». |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/iteracion-05-04-modales.md` | Agrega P-011 a «Depende de», «Tareas del desarrollador» y «Datos requeridos · Del desarrollador»; reescribe la afirmación «una sola vez», la línea 37 (cuerpo solo en modal, página austera hasta la 05-05) y el riesgo de altura con/sin JS; agrega el riesgo de la vista austera temporal. |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/iteracion-05-07-efectos.md` | Criterio de aceptación: cambia «INP < 200 ms en Lighthouse» a «INP informativo, sin bloquear; referencia: TBT». |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/iteracion-05-08-verificacion.md` | Punto de partida y criterio de aceptación con «INP informativo, sin bloquear; referencia: TBT»; riesgo de no medir Lighthouse al cerrar la 05-05 (manteniendo 05-06 y 05-07 locales). |
| `_planificacion/00_producto/propuestas-documentos-protegidos.md` | Ajusta `P-009` («Se aplica antes de la 05-01») y registra `P-012` (`AGENTS.md`, sección 9, regla 5: INP informativo y referencia TBT, antes de la 05-08). |
| `_planificacion/00_producto/registro-pendientes.md` | Dependencia de 05-01 (`cierre de la épica 04, P-009`), fila `18.1` de tipo `Corrección` en `En revisión`, actualización de P-009/P-010/P-011, alta de P-012 y retiro del ajuste INP de «Decisiones por tomar», y dos filas de historial del 2026-11-19. |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/bitacoras/bitacora-05-00-correccion-documental.md` | Esta bitácora breve con las decisiones del desarrollador, los antes/después y la segunda pasada. |

## Verificación

- `Select-String -Path "_planificacion\10_epicas\epica-05*\*.*" -Pattern "INP < 200"` (excluyendo bitácoras): 0 coincidencias.
- `Select-String -Path "_planificacion\10_epicas\epica-05*\*.*" -Pattern "INP"`: 4 coincidencias en los documentos de la épica (definición l. 95, 05-07 l. 51, 05-08 l. 16 y l. 45), todas con «INP informativo, sin bloquear; referencia: TBT».
- `git status --short`: ningún documento protegido (`AGENTS.md`, `DESIGN.md`, `README.md`, `_planificacion/README.md`, `_planificacion/plantillas/`, `.claude/`) ni `registro-archivo.md` modificado.

## Criterios de aceptación

- [x] «INP < 200 ms» reemplazado por «INP informativo, sin bloquear; referencia: TBT» en `definicion-epica-05.md` (l. 95), `iteracion-05-07-efectos.md` (l. 51) e `iteracion-05-08-verificacion.md` (l. 16 y l. 45), y registrada la propuesta `P-012` para `AGENTS.md` (regla 5).
- [x] P-011 agregada a «Depende de» (l. 6), «Tareas del desarrollador» (l. 56) y «Datos requeridos · Del desarrollador» (l. 89) de `iteracion-05-04-modales.md`, y a «Decisiones de la épica» (l. 70) de `definicion-epica-05.md`.
- [x] P-009 requerida antes de la 05-01 en `iteracion-05-01-afordancias-estados.md` (l. 6 y l. 74), `definicion-epica-05.md` (l. 70 y l. 84), `propuestas-documentos-protegidos.md` (l. 200) y `registro-pendientes.md` (fila 05-01 y «Decisiones por tomar»).
- [x] `iteracion-05-04-modales.md` explicita en las líneas 31 y 37 que el cuerpo completo vive solo dentro del modal «Ver detalle» y que `BloqueClase` deja la página temporalmente austera hasta la 05-05, con sus riesgos de altura con/sin JS (l. 73) y vista austera (l. 74).
- [x] `iteracion-05-08-verificacion.md` incluye el riesgo de no medir Lighthouse al cerrar la 05-05, manteniendo las lecturas locales de 05-06 y 05-07 y la publicada en la 05-08 (l. 54).

## Decisiones tomadas

- **2026-11-18 / 2026-11-19 (desarrollador) · INP informativo:** Lighthouse de laboratorio no mide INP; se usa TBT como referencia y el criterio pasa a «INP informativo, sin bloquear; referencia: TBT».
- **2026-11-19 (desarrollador) · P-009 completa antes de la 05-01:** la propuesta P-009 (`DESIGN.md`) se aplica completa antes de iniciar la 05-01 (porque la 05-01 ya introduce los estados de botones y tokens de hover/presionado de la sección 5.1 de `DESIGN.md`), y P-010 y P-011 antes de la 05-04.
- **2026-11-19 (desarrollador) · Cuerpo del bloque en la 05-04:** desde la 05-04 el cuerpo completo del bloque vive únicamente dentro del modal «Ver detalle»; `BloqueClase` deja de mostrarlo en la página, que queda temporalmente austera (título, minutos y botones) hasta que la 05-05 incorpore las tarjetas con la síntesis.
- **2026-11-19 (desarrollador) · Medición de Lighthouse en la 05-08 (aclarada en segunda pasada):** no se mide Lighthouse al cerrar la 05-05; se mantienen las mediciones locales de la 05-06 (LCP) y la 05-07 (línea base y ≥ 95), y la medición sobre la URL publicada en la 05-08.

### Antes y después por archivo

- **`definicion-epica-05.md` (l. 84):**
  - Antes: `- Propuestas P-009 (`DESIGN.md`), P-010 (`AGENTS.md`) y P-011 (`README.md`) aplicadas por el desarrollador antes de la iteración que las necesita: las tres antes de la 05-04 (la P-009 también rige la 05-05, la 05-06 y la 05-07).`
  - Después: `- Propuestas P-009 (`DESIGN.md`), P-010 (`AGENTS.md`) y P-011 (`README.md`) aplicadas por el desarrollador antes de la iteración que las necesita: P-009 se aplica antes de la 05-01 y P-010 y P-011 antes de la 05-04.`
- **`definicion-epica-05.md` (l. 95):**
  - Antes: `- Lighthouse móvil sobre la URL publicada: 95 o más en Rendimiento y 100 en Accesibilidad, Buenas prácticas y SEO; CLS < 0,1 e INP < 200 ms.`
  - Después: `- Lighthouse móvil sobre la URL publicada: 95 o más en Rendimiento y 100 en Accesibilidad, Buenas prácticas y SEO; CLS < 0,1 e INP informativo, sin bloquear; referencia: TBT.`
- **`iteracion-05-01-afordancias-estados.md` (l. 6):**
  - Antes: `- **Depende de:** cierre de la épica 04`
  - Después: `- **Depende de:** cierre de la épica 04 y P-009 aplicada`
- **`iteracion-05-04-modales.md` (l. 6):**
  - Antes: `- **Depende de:** 05-01, 05-03, RDA-011 aceptada y propuestas P-009 y P-010 aplicadas`
  - Después: `- **Depende de:** 05-01, 05-03, RDA-011 aceptada y propuestas P-009, P-010 y P-011 aplicadas`
- **`iteracion-05-04-modales.md` (l. 31):**
  - Antes: `- Sin JavaScript: CSS `html:not([data-js]) dialog[data-modal]` muestra el contenido en su lugar como un bloque normal (`display: block; position: static`), sin el botón «Cerrar». El contenido existe una sola vez en el HTML: no se duplica.`
  - Después: `- Sin JavaScript: CSS `html:not([data-js]) dialog[data-modal]` muestra el contenido en su lugar como un bloque normal (`display: block; position: static`), sin el botón «Cerrar». Desde esta iteración el cuerpo completo del bloque, sus prompts, «Profundiza», los recursos y las descargas viven solo dentro de su `<dialog>` y se renderizan una sola vez en el HTML (no se duplican fuera del modal).`
- **`iteracion-05-04-modales.md` (l. 37):**
  - Antes: `- En esta iteración los botones que abren se ubican en la estructura actual de la sección (junto a cada bloque y al final de la unidad); la 05-05 los reubica en las tarjetas.`
  - Después: `- En esta iteración el cuerpo completo vive solo dentro del modal «Ver detalle»; `BloqueClase` deja de mostrarlo en la página, que queda temporalmente austera (título, minutos y botones que abren los modales, ubicados en la estructura actual junto a cada bloque y al final de la unidad) hasta que la 05-05 incorpore las tarjetas con la síntesis.`
- **`iteracion-05-04-modales.md` (l. 56):**
  - Antes: `1. Aceptar la RDA-011 y aplicar las propuestas P-009 (`DESIGN.md`) y P-010 (`AGENTS.md`) antes de empezar.`
  - Después: `1. Aceptar la RDA-011 y aplicar las propuestas P-009 (`DESIGN.md`), P-010 (`AGENTS.md`) y P-011 (`README.md`) antes de empezar.`
- **`iteracion-05-04-modales.md` (l. 74, nueva):**
  - Después: `- Que entre la 05-04 y la 05-05 cada bloque en la página se vea temporalmente austero (solo título, minutos y botones, sin cuerpo visible ni síntesis en tarjeta): es un estado intermedio acordado para no duplicar el cuerpo en el HTML; la 05-05 agrega la síntesis visible en las tarjetas.`
- **`iteracion-05-07-efectos.md` (l. 51):**
  - Antes: `- [ ] Ningún cuadro largo por los efectos: la grabación de Rendimiento con 10 s de movimiento del puntero sobre las tarjetas no muestra tareas de más de 50 ms; INP < 200 ms en Lighthouse.`
  - Después: `- [ ] Ningún cuadro largo por los efectos: la grabación de Rendimiento con 10 s de movimiento del puntero sobre las tarjetas no muestra tareas de más de 50 ms; INP informativo, sin bloquear; referencia: TBT.`
- **`iteracion-05-08-verificacion.md` (l. 16):**
  - Antes: `- Mediciones de la 04-04 (línea base de Lighthouse, LCP, CLS e INP sobre la URL publicada).`
  - Después: `- Mediciones de la 04-04 (línea base de Lighthouse, LCP, CLS y TBT sobre la URL publicada; INP informativo, sin bloquear; referencia: TBT).`
- **`iteracion-05-08-verificacion.md` (l. 45):**
  - Antes: `- [ ] Lighthouse móvil sobre la URL publicada: Rendimiento ≥ 95; Accesibilidad, Buenas prácticas y SEO = 100; LCP < 2,5 s, CLS < 0,1 e INP < 200 ms; tabla comparada con la 04-04.`
  - Después: `- [ ] Lighthouse móvil sobre la URL publicada: Rendimiento ≥ 95; Accesibilidad, Buenas prácticas y SEO = 100; LCP < 2,5 s, CLS < 0,1 e INP informativo, sin bloquear; referencia: TBT; tabla comparada con la 04-04.`
- **`iteracion-05-08-verificacion.md` (l. 54, nueva; reescrita en segunda pasada):**
  - Primera pasada: `- Que Lighthouse solo se mida sobre la URL publicada en esta iteración (sin medición temprana en las iteraciones previas): si Rendimiento no llega a 95, recién se sabrá al final de la épica.`
  - Segunda pasada: `- Que no haya medición de Lighthouse al cerrar la 05-05, cuando la unidad ya cabe en una pantalla: la primera lectura local es la de la 05-06 (LCP) y la línea base de la 05-07, y la publicada es la de esta iteración. Si Rendimiento no llega a 95, se sabrá recién en la 05-07 o la 05-08.`

## Segunda pasada

En la misma rama `correccion/epica-05-ajustes-documentales` (sobre el commit `bfc3b7c`), se cierran los 6 hallazgos detectados en la primera pasada y se aclara el alcance del riesgo de Lighthouse:

1. **`definicion-epica-05.md` (l. 70, «Decisiones de la épica»):**
   - Antes: `- 2026-11-18: modales sobre `<dialog>` nativo con un script mínimo y respaldo sin JavaScript, según RDA-011 (propuesta). El desarrollador delega la elección técnica en la opción más profesional para el stack y se encarga de editar `AGENTS.md`, `DESIGN.md` y `README.md` (propuestas P-009 y P-010).`
   - Después: `- 2026-11-18: modales sobre `<dialog>` nativo con un script mínimo y respaldo sin JavaScript, según RDA-011 (propuesta). El desarrollador delega la elección técnica en la opción más profesional para el stack y se encarga de editar `AGENTS.md`, `DESIGN.md` y `README.md` (propuestas P-009, P-010 y P-011: P-009 antes de la 05-01; las otras dos antes de la 05-04).`
2. **`iteracion-05-04-modales.md` (l. 89, «Datos requeridos · Del desarrollador»):**
   - Antes: `- Aceptación de la RDA-011 y aplicación de P-009 y P-010.`
   - Después: `- Aceptación de la RDA-011 y aplicación de P-009, P-010 y P-011.`
3. **`iteracion-05-04-modales.md` (l. 73, «Riesgos»):**
   - Antes: `- Que la página quede muy alta mientras la 05-05 no reubique el contenido: es esperable en esta iteración; el alto se mide al cerrar la 05-05.`
   - Después: `- Con el cuerpo solo en el modal, la página queda más corta y austera con JavaScript; solo sin JavaScript se ve alta mientras los `<dialog>` se muestran en su lugar como bloques normales: el alto en escritorio se mide al cerrar la 05-05.`
4. **`iteracion-05-01-afordancias-estados.md` (l. 74, «Datos requeridos · Del desarrollador»):**
   - Antes: `- Ninguno. Si el texto visible del botón de modo debe ser otro que «Cambiar a modo oscuro» / «Cambiar a modo claro», se acuerda antes de empezar.`
   - Después: `- Aplicar la P-009 en `DESIGN.md` antes de empezar. Si el texto visible del botón de modo debe ser otro que «Cambiar a modo oscuro» / «Cambiar a modo claro», se acuerda antes de empezar.`
5. **`propuestas-documentos-protegidos.md` (l. 200, `P-009 · Por qué`):**
   - Antes: `…Se aplica antes de la 05-04; la paleta, las tipografías y los radios no cambian.`
   - Después: `…Se aplica antes de la 05-01; la paleta, las tipografías y los radios no cambian.`
6. **`iteracion-05-08-verificacion.md` (l. 54, «Riesgos»):**
   - Antes: `- Que Lighthouse solo se mida sobre la URL publicada en esta iteración (sin medición temprana en las iteraciones previas): si Rendimiento no llega a 95, recién se sabrá al final de la épica.`
   - Después: `- Que no haya medición de Lighthouse al cerrar la 05-05, cuando la unidad ya cabe en una pantalla: la primera lectura local es la de la 05-06 (LCP) y la línea base de la 05-07, y la publicada es la de esta iteración. Si Rendimiento no llega a 95, se sabrá recién en la 05-07 o la 05-08.`
7. **`propuestas-documentos-protegidos.md` (l. 28 y l. 356–373, nueva `P-012`) y `registro-pendientes.md` (l. 86, «Decisiones por tomar»):**
   - Se registra `P-012` (`AGENTS.md`, sección 9, regla 5, `Pendiente`, para aplicar antes de la 05-08), reemplazando `LCP menor a 2,5 s, CLS menor a 0,1 e INP menor a 200 ms.` por `LCP menor a 2,5 s y CLS menor a 0,1. El INP es informativo y no bloquea: Lighthouse de laboratorio no lo mide y se usa el TBT como referencia.`, y se agrega su fila en «Decisiones por tomar».

## Pendientes y riesgos

- Todos los hallazgos de la primera pasada quedaron cerrados. Queda pendiente que el desarrollador aplique la `P-009` en `DESIGN.md` antes de abrir la `05-01`, `P-010` y `P-011` antes de la `05-04`, y `P-012` antes de la `05-08`.

## Revisión

- **Resultado frente al objetivo:** la planificación de la épica 05 y el registro de propuestas a documentos protegidos quedaron internamente consistentes de punta a punta.
- **Qué aprendimos:** distinguir entre las lecturas locales de Lighthouse (05-06 y 05-07) y la ausencia de lectura al cerrar la 05-05 evita contradicciones entre las tareas de la 05-06/05-07 y los riesgos de la 05-08.
- **Qué cambia para lo que sigue:** antes de abrir la 05-01, el desarrollador aplica P-009 en `DESIGN.md`; antes de la 05-08, aplica P-012 en `AGENTS.md`.

## Commit sugerido

`Corrección: segunda pasada documental de épica 05 (P-011 en definición y 05-04, P-009 en 05-01 y P-009, riesgos de altura en 05-04 y de Lighthouse sin 05-05 en 05-08, y P-012 de INP en AGENTS.md)`

