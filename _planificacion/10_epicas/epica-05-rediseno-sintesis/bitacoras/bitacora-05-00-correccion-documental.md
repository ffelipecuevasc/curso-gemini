# Bitácora 05-00 · Corrección documental de la épica 05

- **Fecha:** 2026-11-19
- **Agente:** Antigravity (Gemini 3.1 Pro)
- **Rama:** correccion/epica-05-ajustes-documentales (sugerida; la crea el desarrollador)
- **Estado final:** En revisión

## Resumen

Corrección documental de la épica 05 previa a iniciar la iteración 05-01, sin cambios en código ni en documentos protegidos. Se reemplaza el criterio «INP < 200 ms» por «INP informativo, sin bloquear; referencia: TBT» en la definición y en las iteraciones 05-07 y 05-08; se adelanta la aplicación de P-009 a antes de la 05-01; se suma P-011 a la 05-04; se explicita en la 05-04 que el cuerpo del bloque vive solo en el modal «Ver detalle» dejando `BloqueClase` temporalmente austero hasta la 05-05; y se agrega en la 05-08 el riesgo de medir Lighthouse sobre la URL publicada solo al cierre.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/definicion-epica-05.md` | Precondiciones (P-009 antes de la 05-01; P-010 y P-011 antes de la 05-04) y criterio de término (INP informativo, sin bloquear; referencia: TBT). |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/iteracion-05-01-afordancias-estados.md` | Agrega «P-009 aplicada» a «Depende de». |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/iteracion-05-04-modales.md` | Agrega P-011 a «Depende de» y «Tareas del desarrollador»; reescribe la afirmación «una sola vez» y la línea 37 (cuerpo solo en modal, página austera hasta la 05-05); agrega el riesgo de la vista austera temporal. |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/iteracion-05-07-efectos.md` | Criterio de aceptación: cambia «INP < 200 ms en Lighthouse» a «INP informativo, sin bloquear; referencia: TBT». |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/iteracion-05-08-verificacion.md` | Punto de partida y criterio de aceptación con «INP informativo, sin bloquear; referencia: TBT»; riesgo de medir Lighthouse solo en la 05-08. |
| `_planificacion/00_producto/registro-pendientes.md` | Dependencia de 05-01 (`cierre de la épica 04, P-009`), fila `18.1` de tipo `Corrección` en `En revisión`, actualización de P-009/P-010/P-011 y retiro del ajuste INP de «Decisiones por tomar», e historial del 2026-11-19. |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/bitacoras/bitacora-05-00-correccion-documental.md` | Esta bitácora breve con las decisiones del desarrollador y los antes/después. |

## Verificación

- `Select-String -Path "_planificacion\10_epicas\epica-05*\*.*" -Pattern "INP < 200"`: 0 coincidencias.
- `Select-String -Path "_planificacion\10_epicas\epica-05*\*.*" -Pattern "INP"`: 4 coincidencias en los documentos de la épica (definición l. 95, 05-07 l. 51, 05-08 l. 16 y l. 45), todas con «INP informativo, sin bloquear; referencia: TBT».
- `git status --short`: ningún documento protegido (`AGENTS.md`, `DESIGN.md`, `README.md`, `_planificacion/README.md`, `_planificacion/plantillas/`, `.claude/`) ni `registro-archivo.md` modificado.

## Criterios de aceptación

- [x] «INP < 200 ms» reemplazado por «INP informativo, sin bloquear; referencia: TBT» en `definicion-epica-05.md` (l. 95), `iteracion-05-07-efectos.md` (l. 51) e `iteracion-05-08-verificacion.md` (l. 16 y l. 45).
- [x] P-011 agregada a «Depende de» (l. 6) y a «Tareas del desarrollador» (l. 56) de `iteracion-05-04-modales.md`.
- [x] P-009 requerida antes de la 05-01 en `iteracion-05-01-afordancias-estados.md` (l. 6), `definicion-epica-05.md` (l. 84) y `registro-pendientes.md` (fila 05-01).
- [x] `iteracion-05-04-modales.md` explicita en las líneas 31 y 37 que el cuerpo completo vive solo dentro del modal «Ver detalle» y que `BloqueClase` deja la página temporalmente austera hasta la 05-05, con su riesgo (l. 74).
- [x] `iteracion-05-08-verificacion.md` incluye el riesgo de que Lighthouse se mida sobre la URL publicada solo en esa iteración (l. 54).

## Decisiones tomadas

- **2026-11-18 / 2026-11-19 (desarrollador) · INP informativo:** Lighthouse de laboratorio no mide INP; se usa TBT como referencia y el criterio pasa a «INP informativo, sin bloquear; referencia: TBT».
- **2026-11-19 (desarrollador) · P-009 completa antes de la 05-01:** la propuesta P-009 (`DESIGN.md`) se aplica completa antes de iniciar la 05-01 (porque la 05-01 ya introduce los estados de botones y tokens de hover/presionado de la sección 5.1 de `DESIGN.md`), y P-010 y P-011 antes de la 05-04.
- **2026-11-19 (desarrollador) · Cuerpo del bloque en la 05-04:** desde la 05-04 el cuerpo completo del bloque vive únicamente dentro del modal «Ver detalle»; `BloqueClase` deja de mostrarlo en la página, que queda temporalmente austera (título, minutos y botones) hasta que la 05-05 incorpore las tarjetas con la síntesis.
- **2026-11-19 (desarrollador) · Medición de Lighthouse en la 05-08:** sin medición temprana obligatoria sobre la URL publicada antes de la 05-08; si Rendimiento no llega a 95, se detectará al final.

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
- **`iteracion-05-08-verificacion.md` (l. 54, nueva):**
  - Después: `- Que Lighthouse solo se mida sobre la URL publicada en esta iteración (sin medición temprana en las iteraciones previas): si Rendimiento no llega a 95, recién se sabrá al final de la épica.`

## Pendientes y riesgos

- Hallazgos menores en secciones no solicitadas para editar:
  1. `definicion-epica-05.md` (l. 70) menciona `(propuestas P-009 y P-010)` al hablar de editar `AGENTS.md`, `DESIGN.md` y `README.md` (omite P-011).
  2. `iteracion-05-04-modales.md` (l. 88, sección «Datos requeridos · Del desarrollador») dice `Aceptación de la RDA-011 y aplicación de P-009 y P-010` (omite P-011), y la línea 73 en «Riesgos» conserva «Que la página quede muy alta mientras la 05-05 no reubique el contenido», aunque al retirar el cuerpo de `BloqueClase` en la 05-04 la página ya no será tan alta con JavaScript activo (sí lo será sin JavaScript).
  3. `iteracion-05-01-afordancias-estados.md` (l. 74, «Datos requeridos · Del desarrollador») sigue diciendo «Ninguno», aunque «Depende de» ahora exige «P-009 aplicada».
  4. `propuestas-documentos-protegidos.md` (l. 199, texto de P-009) dice «Se aplica antes de la 05-04», mientras que ahora P-009 se aplica antes de la 05-01.
  5. `iteracion-05-06-portada-ruta.md` (l. 59) e `iteracion-05-07-efectos.md` (l. 37, 43 y 53) siguen pidiendo Lighthouse móvil local sobre `pnpm preview`, en convivencia con el riesgo de la 05-08 sobre medir Lighthouse solo al final.
  6. `AGENTS.md` (l. 106, documento protegido) sigue listando «e INP menor a 200 ms» en la regla técnica 5.

## Revisión

- **Resultado frente al objetivo:** los 5 puntos de corrección documental quedaron aplicados exactamente en los archivos indicados y reflejados en `registro-pendientes.md`.
- **Qué aprendimos:** adelantar P-009 a la 05-01 evita que los nuevos estilos de botones contradigan `DESIGN.md`, y retirar el cuerpo de `BloqueClase` desde la 05-04 garantiza que el HTML no duplique contenido ni siquiera en el paso intermedio.
- **Qué cambia para lo que sigue:** antes de abrir la 05-01, el desarrollador debe aplicar la P-009 en `DESIGN.md`.

## Commit sugerido

`Corrección: ajusta definición e iteraciones 05-01, 05-04, 05-07 y 05-08 de la épica 05 (INP informativo, P-009 antes de 05-01, P-011 y cuerpo en modal en 05-04, riesgo en 05-08)`
