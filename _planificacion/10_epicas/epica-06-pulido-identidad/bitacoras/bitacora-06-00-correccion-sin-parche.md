# Bitácora 06-00 · Corrección documental: épica 06 sin el parche de la vista previa

- **Fecha:** 2026-11-22
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** correccion/epica-06-sin-parche (pedida por el desarrollador, creada desde `main` en `0e223b0`)
- **Estado final:** En revisión

## Resumen

Corrección solo documental, sin cambios en `src/` ni en documentos protegidos. Según lo que dijo el desarrollador el 2026-11-22, la RDA-013 queda aceptada, y la rama `vista-previa-epica-06` y su parche `vista-previa-epica-06.patch` ya no existen. La épica 06 deja de usar el parche como fuente: cada iteración implementa desde su «Alcance y entregables» y mide su línea base en su Fase 1 (tarea 1). Las cifras de la vista previa (823; 816, 816, 818 y 791; +8 px) quedan como referencia histórica que no se puede reproducir. El criterio de Lighthouse de la épica y de la 06-06 pasa a «mediana de 3 corridas, con tolerancia de 2 puntos por categoría respecto del cierre de la épica 05; CLS < 0,1».

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `_planificacion/00_producto/decisiones.md` | RDA-013 «Aceptada» en el índice y en el cuerpo, con «Fecha de aceptación: 2026-11-22»; la actualización de la RDA-008 ya no dice «(propuesta)». El contenido de la RDA no cambia. |
| `_planificacion/10_epicas/epica-06-pulido-identidad/definicion-epica-06.md` | Párrafo de la vista previa sin rama ni parche como fuente; 3 decisiones del 2026-11-22; regla común «sin vista previa como fuente, línea base en la Fase 1»; precondición de la RDA-013 con su fecha; «+8 px» marcado como referencia histórica; criterio de Lighthouse con la redacción nueva. |
| `iteracion-06-01-trama-puntos.md` | Tarea 2: «con los valores de «Alcance y entregables»» en lugar de «como en el parche de la vista previa». |
| `iteracion-06-02-portada-ruta.md` | El conteo de 20 bloques y 24 prompts pasa a referencia histórica. La tarea 1 (Fase 1) suma el alto de las unidades y ese conteo. Las tareas y los datos del desarrollador ya no piden aceptar la RDA-013. |
| `iteracion-06-03-cabecera-unidad.md` | Las cifras 823; 816, 816, 818 y 791 quedan como referencia histórica y los criterios se comparan contra la tarea 1. «(la vista previa lo dejó fijo)» se quita. La tarea 1 se rotula como Fase 1. |
| `iteracion-06-04-tarjetas-bloque.md` | El conteo de botones de la vista previa queda como referencia histórica y la tarea 1 se rotula como Fase 1. |
| `iteracion-06-06-verificacion.md` | El criterio de aceptación de Lighthouse y la tarea 7 usan la redacción nueva. |
| `_planificacion/00_producto/registro-pendientes.md` | Última actualización 2026-11-22. El próximo hito ya no pide aceptar la RDA-013. «Decisiones por tomar» deja solo P-023 a P-027. Se agrega la fila 26.1 (`Corrección`, En revisión) y una fila de historial; las 2 filas más antiguas pasan al archivo (quedan 50). |
| `_planificacion/00_producto/registro-archivo.md` | Recibe las 2 filas de historial del 2026-11-17 (02-06 terminada con cierre de la épica 02, y 03-01 en revisión). |
| `bitacoras/bitacora-06-00-correccion-sin-parche.md` | Esta bitácora. |

## Verificación

- Paso 0, `grep -n -i -E "parche|vista previa|823|816|818|791|\+8 ?px"` sobre el registro, `decisiones.md` y la épica 06: 4 coincidencias en el registro, 3 de ellas históricas de la 04-02 y la 05-05 (sin cambios); 4 en la definición (l. 17, 49, 68, 90); 3 en la 06-01 (l. 35, 36, 41); 2 en la 06-02 (l. 19, 34); 3 en la 06-03 (l. 19, 28, 32); 2 en la 06-04 (l. 21, 33); 1 en la 06-05 (l. 31). `decisiones.md` no tenía ninguna.
- `grep -rn "parche" _planificacion/10_epicas/epica-06-*`: 3 coincidencias. Todas dicen que el parche ya no existe o que no es fuente (definición l. 17 y l. 71; 06-02 l. 19). Ninguna lo usa como referencia de implementación.
- `grep -n "RDA-013" decisiones.md`: índice l. 19 «Aceptada»; cuerpo l. 178 «Estado: Aceptada» y l. 179 «Fecha de aceptación: 2026-11-22».
- Conteo de filas del historial (`awk` desde «## 7.»): 50.
- `git diff --name-only`: 9 archivos, todos en `_planificacion/`, más esta bitácora sin seguimiento.
- `pnpm build`: termina bien, «Guardia de marcadores: 0 marcadores en dist/», 0 líneas con «warn».
- `pnpm astro check`: 0 errores, 0 advertencias, 0 sugerencias (37 archivos).

## Criterios de aceptación

- [x] RDA-013 aceptada en el índice y en el cuerpo, con su fecha de aceptación (grep).
- [x] Ninguna referencia al parche como fuente en la épica 06 (grep: 3 coincidencias, todas aclaratorias).
- [x] Criterio de Lighthouse con la redacción nueva en la definición y en la 06-06 (criterio y tarea 7).
- [x] Registro al día e historial en 50 filas (conteo con awk).
- [x] Ninguna P-0xx marcada como aplicada.

## Diferencias entre lo planificado y lo encontrado

- Las iteraciones no tienen una sección «Fase 1». Se interpretó como la tarea 1 de línea base, se rotuló así en la 06-02, la 06-03 y la 06-04, y la definición lo explica.
- La 06-02 no medía el alto de las unidades. Como el pedido dice que las cifras se vuelven a medir en la Fase 1 de la 06-02, su tarea 1 ahora mide también ese alto y el conteo de bloques y prompts. No cambia su alcance ni sus criterios.
- Se conservan las menciones a la vista previa que solo registran fechas de aprobación («Aprobado por el desarrollador el 2026-11-21 en la vista previa») o decisiones del desarrollador. Son hechos históricos y no dependen del parche.

## Decisiones tomadas

- Número de backlog 26.1, siguiendo el antecedente de la épica 05 (18.1 a 18.3, correcciones antes de su primera iteración).
- La RDA-013 registra la aceptación en una línea nueva, «Fecha de aceptación», y conserva su «Fecha» original (2026-11-21).

## Pendientes y riesgos

- P-023 a P-027 siguen pendientes. La 06-01 no puede empezar sin la P-023.
- Con el parche fuera, la 06-03 ya no tiene una cifra de alto comprobada para la cabecera nueva. Su riesgo de alto en 1366 × 657 se mide recién en su tarea 1 y en sus criterios.

## Revisión

- **Resultado frente al objetivo:** la épica 06 ya no depende de un artefacto que no existe, y la RDA-013 deja de bloquear la 06-02.
- **Qué aprendimos:** una vista previa local no puede ser fuente de una épica si no se versiona. Sus cifras sirven solo como referencia hasta que una iteración las vuelve a medir.
- **Qué cambia para lo que sigue:** la 06-01 empieza cuando se aplique la P-023. Lighthouse de la 06-06 se mide con la mediana de 3 corridas y una tolerancia de 2 puntos.

## Commit sugerido

`Corrección: acepta la RDA-013, quita el parche de la vista previa como fuente de la épica 06 y ajusta el criterio de Lighthouse (mediana de 3, tolerancia de 2 puntos)`
