# Bitácora 05 (cierre) · Cierre de la Épica 05: Rediseño visual y síntesis del contenido

- **Fecha:** 2026-11-20
- **Agente:** Claude Code (Opus 5.5)
- **Rama:** iteracion/05-08-verificacion
- **Estado final:** En revisión

> La épica **no está cerrada**. El desarrollador la cierra después de revisar el sitio en su notebook y en un teléfono. Hasta entonces, las filas de la épica siguen en `registro-pendientes.md`.

## Resumen

La épica dejó cada unidad en una pantalla de 1440 × 900, con cabecera de color, 6 tarjetas y el detalle en 54 modales `<dialog>` (RDA-011). Agregó síntesis validada por esquema para los 26 bloques (RDA-012), retiró el material de conducción de la clase, fusionó la portada con la ruta, compactó el instructor y sumó estados de interacción visibles y una capa de efectos con versión quieta. El sitio publicado pasó de 87 a **98** en Rendimiento móvil, con 100 en Accesibilidad, Buenas prácticas y SEO, y 1774 B gzip de JavaScript propio.

## Iteraciones de la épica

| Iteración | Nombre | Estado | Bitácoras |
| :-------- | :----- | :----- | :-------- |
| 05-01 | Afordancias y estados de interacción | Terminada | [bitacora-05-01](bitacora-05-01.md) |
| 05-02 | Modelo de síntesis y síntesis de U1 y U2 | Terminada | [bitacora-05-02](bitacora-05-02.md) |
| 05-03 | Síntesis de U3 y U4 | Terminada | [bitacora-05-03](bitacora-05-03.md) |
| 05-04 | Sistema de modales | Terminada | [bitacora-05-04](bitacora-05-04.md) |
| 05-05 | La unidad en una pantalla | Terminada | [bitacora-05-05](bitacora-05-05.md) |
| 05-06 | Portada y ruta en un pantallazo | Terminada | [bitacora-05-06](bitacora-05-06.md) |
| 05-07 | Capa de efectos con propósito | Terminada | [bitacora-05-07](bitacora-05-07.md) |
| 05-08 | Pulido y verificación final del rediseño | En revisión | [bitacora-05-08](bitacora-05-08.md) |

Correcciones documentales de la épica: [bitacora-05-00-correccion-documental](bitacora-05-00-correccion-documental.md) y [bitacora-05-00-correccion-previa-05-04](bitacora-05-00-correccion-previa-05-04.md).

## Criterio de término

| Criterio | Cómo se comprobó | Resultado |
| :------- | :--------------- | :-------- |
| Cada unidad mide como máximo la ventana menos el encabezado (1440 × 900 y 1366 × 657, ambos modos) | 05-05: 823 de 823 px en 1440 × 900, medido por el agente en Edge headless. Repetición con el fragmento C1 de la bitácora 05-08: lo hace el desarrollador | Cumplido en 1440 × 900; en 1366 × 657 no (decisión del desarrollador). Falta la confirmación con C1 |
| Página completa ≤ 7 alturas en 1440 × 900 | 05-06: ≈ 6, medido por el desarrollador. Fragmento C2 | Cumplido en 1440 × 900; en 1366 × 657 no (decisión del desarrollador). Falta la confirmación con C2 |
| ≤ 300 palabras por unidad fuera de los modales | 05-05: U1 261 palabras (agente). Fragmento C3 para las 4 unidades | Por confirmar (C3) |
| Cero textos de conducción en `dist/index.html` | Búsqueda en 05-08: «al azar», «Pregunta para el grupo», «semáforo», «Vitrina», «Demo Day» y `\(\d+ min\)`: 0 | Cumple |
| `cursor: pointer` y cambio visible al pasar el mouse | Regla base en el CSS compilado (1 vez, 05-08); fragmento C4 y revisión visual del desarrollador | Regla presente; falta la confirmación con C4 |
| JavaScript propio ≤ 3 KB gzip | Etiquetas en línea concatenadas, gzip nivel 9 (05-08) | Cumple: 1774 B |
| Lighthouse móvil publicado: Rendimiento ≥ 95; Accesibilidad, Buenas prácticas y SEO = 100; CLS < 0,1; INP informativo (referencia: TBT) | Lighthouse 13.6.0, mediana de 3, sobre `https://curso-gemini.felipe-cuevas.workers.dev/` en `47b063b` (05-08) | Cumple: 98 / 100 / 100 / 100, LCP 1,51 s, CLS 0, TBT 165 ms |

## Hallazgos abiertos

| Hallazgo | Severidad | Decisión |
| :------- | :-------- | :------- |
| P-018 a P-022: diferencias entre `DESIGN.md` y el sitio | Baja (documental) | Pendientes de aplicar por el desarrollador |
| 6 avisos `straggler` de Impeccable (palabra sola en la última línea) | Advisory | Justificados en la bitácora 05-08; `text-wrap: pretty` como propuesta fuera de alcance |
| Falsa afordancia de `.tarjeta` (sube sin ser clicable) | Baja | Riesgo aceptado por el desarrollador (2026-11-20, bitácora 05-07); se revisa en notebook |
| 1366 × 657: unidad de ≈ 1,4 pantallas y página de más de 7 | Media | Decisión del desarrollador (05-05): documentar la realidad |
| Margen de Rendimiento fino (peor corrida publicada 95; en local, con el equipo cargado, 91) | Media | Vigilar; la primera palanca medida es el peso del HTML y el estilo de los modales |

## Decisiones del desarrollador registradas

- 2026-11-18: nivel de efectos «con propósito»; síntesis con resumen visible y detalle en modal; modales sobre `<dialog>` (RDA-011).
- 2026-11-20 (05-05): una clave por tarjeta y la segunda en el modal (RDA-012); 1366 × 657 se documenta como ≈ 1,4 pantallas.
- 2026-11-20 (05-06): modal «Trayectoria completa» con franja `--color-primario` (P-016).
- 2026-11-20 (05-07): origen de la transición en la tarjeta o el botón (P-017); ambas tarjetas suben 4 px; fondo del modal sin fundido durante la transición.
- 2026-11-20 (05-08): detector de Impeccable con versión fija y solo `detect`; 16 px en las tarjetas como excepción (P-020).

## Revisión al cierre

- **Resultado frente al criterio de término:** los criterios que mide el agente se cumplen en la URL publicada (Rendimiento 98, que antes era 87). Los de alto y palabras se cumplen en 1440 × 900 según las mediciones de la 05-05 y la 05-06, y falta repetirlos con C1 a C4. En 1366 × 657 no se cumplen, por decisión del desarrollador.
- **Qué aprendimos:**
  - Partir el contenido en síntesis y modales resolvió a la vez el alto de las unidades y el rendimiento: el TBT publicado bajó de 496 a 165 ms.
  - Hay que revisar el CSS compilado, porque el minificador convirtió `animation-timeline` en una declaración inválida (05-07).
  - La nota local depende de la carga del equipo: con el mismo código bajó de 99 a 95.
- **Qué cambia en el backlog o en las épicas siguientes:** el backlog no tiene elementos comprometidos fuera de la épica 05. Siguen abiertos los datos del cliente (fechas de clase, autorización de la marca GTD) y las decisiones `PENDIENTE_DESARROLLADOR` de prompts no escritos. Se suma la propuesta fuera de alcance de `text-wrap: pretty`.

## Propuesta de la épica siguiente

No hay épica 06 definida. La propuesta se presenta cuando el desarrollador confirme el cierre, según la sección 4.4 de `_planificacion/README.md`. Candidatos que salen del registro: prompts pendientes de U1 a U4 (cuando el desarrollador los entregue), descargas en ausencia acordada y, si se aprueba, el ajuste tipográfico con `text-wrap: pretty` medido contra el alto de las unidades.

## Pendientes y riesgos

- Confirmación del desarrollador en notebook y teléfono, con fecha, y mediciones C1 a C9 de la bitácora 05-08.
- Aplicar o descartar P-018 a P-022.
- Al cerrar: mover las filas de la épica a `registro-archivo.md`, dejar la épica en «Épicas cerradas» y archivar la fila de historial que sobra (hoy son 51).

## Commit sugerido

`Épica 5 - Cierre: rediseño publicado con Rendimiento 98/100/100/100, unidad en una pantalla en 1440 × 900, 54 modales y efectos con versión quieta; propuestas P-018 a P-022`
