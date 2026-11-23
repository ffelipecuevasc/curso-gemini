# Épica 07 · Ajustes de contenido por unidad

- **Estado:** Pendiente
- **Objetivo:** dejar el contenido de cada unidad alineado con lo que el instructor enseñará en vivo, con las decisiones tomadas en la preparación de cada clase: prácticas que faltaban, material de arranque descargable y datos vigentes de Google (cuenta, modelos, privacidad). Todo dentro del diseño que dejó la épica 06, sin cambiarlo.

## Por qué existe esta épica

Preparación de la Unidad 1 hecha por el desarrollador el 2026-11-22 en el proyecto Claude «Mini-LMS · Gemini & Google Suite», contrastando `unidades-del-curso.md` (v5), las guías de Capacita Tu Futuro y el sitio publicado. Hallazgos de la U1:

1. **La cuenta no es la que dice el sitio.** Los participantes trabajan con una cuenta empresarial del Workspace de Capacita Tu Futuro; el instructor demuestra con su cuenta personal Google AI Plus. El sitio pide a los participantes «Google AI Plus activo» (`u1.yaml`, `terminadoCuando[0]`) y habla de «cuenta personal» en los bloques 2 y 3.
2. **Nombres de modelos desactualizados.** El sitio nombra Flash-Lite y Argon. La página oficial de modelos (consultada el 2026-11-22) muestra en el selector Auto, Hydrogen, Neon y Carbon; Neon reemplazó a Argon el 2026-11-18.
3. **Privacidad desactualizada.** El bloque 2 se apoya en «Keep Activity»; hoy la cuenta personal usa «Historial» con un ajuste de entrenamiento aparte, y la cuenta empresarial se rige por el Privacy Hub de Workspace.
4. **Falta el prompt «Avanzado».** El bloque 4 publica solo `basico` e `intermedio`; el registro de pendientes lo tiene como `PENDIENTE_DESARROLLADOR`.
5. **El banco de tareas no tiene material.** Son 6 nombres sin texto de arranque, y `u1.yaml` tiene `descargas: []` aunque el dataset del curso ya existe en `public/descargas/`.
6. **No hay práctica de revisión** de las respuestas de Gemini, aunque «Terminado cuando…» la exige («Revisé las respuestas antes de usarlas»).
7. **No hay práctica para identificar oportunidades** de uso en el propio trabajo, que la Guía de la sesión 1 sí pide.

Las unidades 2 a 4 tendrán su propia preparación y sumarán una iteración cada una a esta épica.

## Alcance

1. Unidad 1: cuenta y modelos vigentes, privacidad vigente, prompt avanzado, Mapa de oportunidades, banco de tareas con material descargable, Revisión en 3 pasos y laboratorio con tiempos aprobados.
2. Unidades 2 a 4: una iteración por unidad, que se redacta después de su preparación (no se escribe por adelantado).

## Fuera de alcance

- Cualquier cambio de diseño: paleta, tipografías, radios, trama, tarjetas, modales, componentes nuevos o variantes visuales (RDA-004 y épica 06). El contenido nuevo usa los patrones que ya existen.
- Dependencias nuevas y JavaScript nuevo.
- Cambios de esquema en `src/content.config.ts`, salvo que una iteración lo justifique y el desarrollador lo apruebe antes.
- Generar los PDF descargables: los hace el desarrollador fuera del repositorio con la skill `capacita-tu-futuro-visual` y los entrega en `public/descargas/`.
- Material de la Guía de Capacita que el plan asigna a otra unidad (imágenes, video, Deep Research, Canvas y dashboards quedan en la U2).

## Iteraciones

| Iteración | Nombre | Estado |
| :-------- | :----- | :----- |
| 07-01 | [Unidad 1: cuenta, modelos y prácticas del laboratorio](iteracion-07-01-unidad-1.md) | Pendiente |
| 07-02 | Unidad 2 (se redacta tras su preparación) | Sin redactar |
| 07-03 | Unidad 3 (se redacta tras su preparación) | Sin redactar |
| 07-04 | Unidad 4 (se redacta tras su preparación) | Sin redactar |

## Precondiciones

- **La épica 06 debe estar cerrada** (todas sus iteraciones y su bitácora de cierre). Esta épica respeta el diseño que deja la 06; si se empieza antes, los cambios de contenido caerían sobre componentes que la 06 todavía está rehaciendo. Al 2026-11-22, los documentos sincronizados muestran las iteraciones 06-01 a 06-06 como «Pendiente» y las correcciones 26.1 y 26.2 en revisión; la sincronización puede ir atrasada respecto del repositorio.
- Para la 07-01: los dos PDF de la U1 (Mapa de oportunidades y Banco de tareas) deben existir en `public/descargas/`.

## Decisiones de la épica

- 2026-11-22 · Los participantes usan la cuenta empresarial del curso; el instructor demuestra con su cuenta personal Google AI Plus. El sitio habla a los participantes de su cuenta empresarial.
- 2026-11-22 · Los nombres de modelos son los de la página oficial de modelos de Gemini a la fecha de cada iteración, y el sitio insiste en que cambian cada pocos meses.
- 2026-11-22 · La privacidad se explica con la información vigente de Google (aviso de privacidad de las apps de Gemini para la cuenta personal; Privacy Hub de Workspace para la empresarial).
- 2026-11-22 · Se mantienen los niveles de prompt de v5.
- 2026-11-22 · Regla de datos: solo ficticios o públicos, también con la cuenta empresarial.
- 2026-11-22 · El diseño no cambia: el contenido nuevo reutiliza los componentes y estilos que dejó la épica 06.

## Reglas comunes de la épica

- Ninguna iteración cambia el diseño ni crea componentes visuales nuevos. Si un contenido no cabe en un patrón existente, el agente se detiene y lo propone al desarrollador.
- Ediciones mínimas: se cambia solo el texto afectado, sin reescribir bloques completos ni reordenar contenido que no está en el alcance.
- Los campos `sintesis` se proponen y se publican solo con aprobación del desarrollador (RDA-012). Los límites de palabras del esquema se respetan.
- Ningún dato nuevo sin fuente: lo que no está en `unidades-del-curso.md`, en estas iteraciones o en una fuente oficial que el desarrollador entregue, queda como pregunta al desarrollador (sin marcadores visibles en la página).
- Claude Code no hace commit, push ni merge.

## Criterio de término

- Las 4 iteraciones cerradas, `pnpm build` sin errores y sin marcadores `PENDIENTE_*`/`VERIFICAR` visibles.
- Capturas en 360 px y 1440 px, modo claro y oscuro, de cada unidad tocada, comparadas con las de la épica 06: sin cambios de diseño.

## Cierre

Al cerrar la épica se escribe `bitacoras/bitacora-07-cierre.md`, con la revisión al cierre.

- **Bitácora de cierre:** —