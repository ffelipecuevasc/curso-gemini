# Bitácora 06 (cierre) · Cierre de la Épica 06 reabierta: recorrido de la página y efectos de movimiento

- **Fecha:** 2026-11-23
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** cierre/epica-06 (aprobada por el desarrollador; creada desde `main`, `4aca802`, con el árbol limpio)
- **Estado final:** En revisión

> Complementa [bitacora-06-cierre](bitacora-06-cierre.md) (cierre del 2026-11-22, iteraciones 06-01 a 06-06), que no se edita. Esta bitácora cubre la reapertura: la 06-07, la 06-08 y la corrección 36.1.

## Resumen

La épica se reabrió el 2026-11-23 para dos iteraciones. La 06-07 cambió el recorrido de la página: el instructor como credencial después de la portada, la ruta como índice, las unidades en salas y el pie con la firma del OTEC (RDA-014). La 06-08 agregó 7 efectos de movimiento en CSS nativo, sin JavaScript nuevo. La corrección 36.1 sacó la fila de logos de la entrada E1, para cumplir la sección 7.4 de `DESIGN.md`. Sobre la URL publicada, Accesibilidad, Buenas prácticas y SEO quedan en 100, el CLS en 0 y el LCP en el `h1`. **Rendimiento móvil baja a 92**, frente a la referencia de 99 y a la meta de 95. El desarrollador lo aceptó como desviación y abrió una corrección de diagnóstico (backlog 37) que no bloquea la épica 07.

## Iteraciones de la épica (reapertura)

| Iteración | Nombre | Estado | Bitácoras |
| :-------- | :----- | :----- | :-------- |
| 06-07 | Recorrido de la página: instructor primero, ruta como índice, unidades en salas y firma del OTEC | Terminada (`b281ecf`) | [bitacora-06-07](bitacora-06-07.md) |
| 06-08 | Efectos de movimiento: entrada de la portada, unidades que se encienden y navegación continua | Terminada (`9d479e1`) | [bitacora-06-08](bitacora-06-08.md) · [bitacora-06-08-correccion-logos](bitacora-06-08-correccion-logos.md) |
| Corrección 36.1 | La fila de logos de la portada sin entrada E1 (P-033) | Terminada (`3bc7527`) | [bitacora-06-08-correccion-logos](bitacora-06-08-correccion-logos.md) |

Las iteraciones 06-01 a 06-06 se cerraron el 2026-11-22 ([cierre anterior](bitacora-06-cierre.md)).

## Lighthouse móvil publicado

**Referencia.** La medición publicada del cierre de la 06-07 no existe: el desarrollador movió el Lighthouse publicado de la 06-07 al cierre de la 06-08 (definición de la épica, decisión del 2026-11-23). La referencia es entonces la del cierre de la 06-06, 99/100/100/100, confirmada por el desarrollador el 2026-11-23. Entre esa medición y esta entraron la 06-07, la 07-01 y la 06-08, así que **la diferencia mezcla las tres**.

Método: Lighthouse 13.6.0 con `pnpm dlx`, Chrome sin interfaz y perfil móvil, 3 corridas sobre `https://curso-gemini.felipe-cuevas.workers.dev/`, después del merge de `4aca802`. Antes de medir comprobé que producción servía la corrección 36.1: la fila de logos sin clase de animación y 8 usos de `animate-entrada`. El benchmarkIndex fue de 1307 a 1855.

| Categoría | Referencia (cierre 06-06) | Cierre 06-08 (mediana de 3) | Diferencia |
| :-------- | :------------------------ | :-------------------------- | :--------- |
| Rendimiento | 99 | **92** (90, 92 y 93) | −7 |
| Accesibilidad | 100 | 100 | 0 |
| Buenas prácticas | 100 | 100 | 0 |
| SEO | 100 | 100 | 0 |
| LCP | 1,43 s, en el `h1` | 1,70 s, en el `h1` (3 de 3) | +0,27 s |
| CLS | 0 | 0 | 0 |
| TBT | 71 ms | 324 ms | +253 ms |

Los puntos se pierden casi todos en el TBT (puntaje de 0,71 a 0,78) y un poco en el FCP (de 0,91 a 0,95). En el desglose del hilo principal, el estilo y el diseño pasan de 413 a 606 ms en la referencia a 785 a 1092 ms ahora. La tarea larga más pesada (269 a 439 ms) ocurre hacia los 2 s de la carga y no tiene un script asociado: es trabajo de estilo del documento.

### Diagnóstico local (5 rondas alternadas)

Lighthouse 13.6.0 móvil, servidor estático mínimo, beacon bloqueado y las 3 versiones alternadas en cada ronda: la línea base de la 06-08 (`main` `f3529ea`, es decir, la 06-07 sin efectos), el `dist/` actual y el mismo `dist/` sin E1 (sin `motion-safe:animate-entrada` ni su desfase en el HTML). Es solo un diagnóstico: el código no cambió.

| Versión local | Rendimiento (mediana de 5) | Corridas | TBT (mediana) |
| :------------ | :------------------------- | :------- | :------------ |
| 06-07 sin efectos | 90 | 90, 76, 90, 82, 90 | 67 ms |
| Actual (06-08 con la corrección) | 86 | 81, 87, 88, 85, 86 | 199 ms |
| Actual sin E1 | 88 | 83, 88, 89, 88, 87 | 156 ms |

**Lectura del agente.** En local, la 06-08 completa cuesta unos 4 puntos. **E1 explica más o menos la mitad**, y el resto viene de los efectos que corren con el desplazamiento: E4 (credencial), E7 (salas) y E8 (número). El ruido es alto: corridas de 76 a 90 en una misma versión, y una tanda previa de 3 rondas (con E1 89, sin E1 82) dio el resultado al revés. Por eso animar E1 en 2 grupos recuperaría como mucho unos 2 puntos y no alcanzaría para volver a 97. La parte de la 06-07 y la 07-01 no se puede separar con estos datos: en local, la 06-07 sin efectos da 90, y la 06-06 había dado 93 (otra sesión, otra carga de la CPU).

## Criterio de término

| Criterio | Cómo se comprobó | Resultado |
| :------- | :--------------- | :-------- |
| Lighthouse móvil publicado a 2 puntos o menos de 99/100/100/100 | Mediana de 3 (tabla de arriba) | **No cumple en Rendimiento (92, −7). Desviación aceptada por el desarrollador el 2026-11-23** |
| Accesibilidad, Buenas prácticas y SEO publicados | Misma medición | Cumple: 100 / 100 / 100 |
| CLS < 0,1 y LCP en el `h1` | Misma medición: CLS 0 y LCP en el `h1` en 3 de 3 | Cumple |
| JavaScript propio sin crecer | `verificar.mjs` sobre el HTML publicado: 6 etiquetas, 1767 B gzip (1774 al cierre de la 06-06) | Cumple |
| HTML publicado | 1 `h1`, 55 `<dialog>`, 25 de 25 prompts idénticos a su fuente | Cumple (55 y 25 por la 07-01) |
| 0 barras de avance | «Avance del curso» = 0 en el HTML publicado; `BarraAvance.astro` no existe | Cumple |
| Portada en 1366 × 657 | P-030 aplicada en `4aca802`: cabe la ruta y la columna de texto se desplaza | Cumple (con el texto vigente de `DESIGN.md`) |
| Efectos de la 06-08 en los 3 motores, con reducir movimiento y al imprimir | [bitacora-06-08](bitacora-06-08.md), sección «Efectos» y «Comprobaciones» | Cumple; la píldora se desliza solo en Chromium |
| Ningún logo animado salvo la estrella de Gemini | Corrección 36.1: `getAnimations()` = 0 en la fila de logos, en 3 motores × 2 modos | Cumple |
| Estrella de Gemini | Valores finales `scale: 1` y `rotate: 0deg`, equivalentes a `none` por `fill-mode: both` (equivalencia aceptada por el desarrollador el 2026-11-23) | Cumple |
| `DESIGN.md` y `AGENTS.md` describen el sitio | P-029, P-030, P-031, P-032 y P-033 aplicadas, comprobadas con `grep` | Cumple |

## Hallazgos abiertos

| Hallazgo | Severidad | Decisión |
| :------- | :-------- | :------- |
| Rendimiento móvil publicado en 92 (meta 95; TBT 324 ms) | Media | Desviación aceptada por el desarrollador el 2026-11-23. Pasa al backlog como corrección 37, «Diagnóstico y reducción del costo de los efectos de la 06-08», Pendiente, sin bloquear la épica 07. Cuándo se hace queda en «Decisiones por tomar» (después de la clase de la U2) |
| Unidades más altas en el WebKit de Playwright para Windows (866 / 894 / 795 / 817 px en 1440 × 900; U1 y U2 ya en la línea base) | Baja | Propuesta fuera de alcance: comprobarlo en Safari real (Mac o iPhone) antes de abrir una corrección |
| La píldora salta en Firefox y WebKit en vez de deslizarse | Baja | Aceptado en la 06-08: queda bajo el enlace activo en los 3 motores |

## Decisiones del desarrollador registradas

- 2026-11-23: la 06-07 queda Terminada con su merge (`b281ecf`), y su Lighthouse publicado pasa al cierre de la 06-08.
- 2026-11-23: renumeración de las propuestas de la 06-08 (P-031 y P-032).
- 2026-11-23: la estrella de Gemini cumple: `1` y `0deg` equivalen a `none`.
- 2026-11-23: manda la sección 7.4 de `DESIGN.md`. La fila de logos no se anima (corrección 36.1, P-033).
- 2026-11-23: P-030 y P-032 aplicadas en `main` (`4aca802`).
- 2026-11-23: la referencia de Lighthouse es 99/100/100/100 (cierre de la 06-06).
- 2026-11-23: opción a. Se cierra la épica con la excepción de Rendimiento aceptada, igual que la épica 04. Accesibilidad, Buenas prácticas y SEO en 100, CLS 0 y LCP en el `h1` quedan como criterio cumplido.
- 2026-11-23: se registra la corrección 37 de rendimiento, Pendiente y sin bloquear la épica 07.
- 2026-11-23: ajustes a la épica 07 (abajo). La iteración 07-02 no se toca.

## Revisión al cierre

- **Resultado frente al criterio de término:** cumplido salvo Rendimiento publicado (92), aceptado como desviación. La página tiene un recorrido (portada, credencial, índice y salas) y movimiento que lo explica, sin JavaScript nuevo y con reducir movimiento respetado.
- **Qué aprendimos:**
  - Una medición de cierre que se posterga deja de aislar su iteración: al medir la 06-07, la 07-01 y la 06-08 juntas, ya no se puede atribuir la caída a una sola.
  - Los efectos en CSS puro no son gratis: entradas escalonadas y animaciones ligadas al desplazamiento cuestan recálculos de estilo en el hilo principal, y Lighthouse los cobra como TBT.
  - Lighthouse local en esta máquina tiene un ruido de unos 15 puntos. Para atribuir 2 a 4 puntos hacen falta 5 rondas alternadas o más, o el panel de rendimiento con trazas.
  - Cuando dos secciones de `DESIGN.md` se contradicen, conviene preguntar antes de implementar.
- **Qué cambia en el backlog o en las épicas siguientes:**
  - Backlog 37 nuevo (corrección de rendimiento, Pendiente) y su fila en «Decisiones por tomar».
  - La épica 07 compara sus capturas con `prefers-reduced-motion: reduce` emulado, para no capturar estados intermedios de los efectos.
  - Las filas de la reapertura (06-07, 06-08, 35, 36 y 36.1) pasan a `registro-archivo.md`.

## Épica siguiente: revisión de la 07-01 y la 07-02

La épica 07 ya existe y no se regenera (`_planificacion/README.md`, sección 4.4, paso 5). Revisión contra este cierre:

- **07-01 (En revisión):** no la afecta. Su contenido ya estaba en `main` antes de la 06-07 y desde entonces no cambió nada de la U1 (`git diff d50ccdb HEAD -- src/content` solo toca `instructor.yaml` y el esquema del instructor).
- **07-02 (Pendiente):** su dependencia («cierre de la épica 06») queda cumplida con este cierre. Su «Punto de partida» sigue igual: la U2 no cambió desde la 07-01. Todavía faltan en `public/descargas/` los 4 archivos de la U2 (`u2-cuaderno-practica.pdf`, `u2-informe-respaldo.pdf`, `kit-marca-gtd.md` y `gtd-telsur.png`); la iteración ya lo prevé al dejar la tarea 9 al final. El contenido de la iteración no se tocó.
- **Ajustes aplicados por decisión del desarrollador**, en `definicion-epica-07.md`:
  - las capturas de comparación se toman con `prefers-reduced-motion: reduce` emulado;
  - la 07-01 pasa a «En revisión» y la 07-02 queda «Pendiente»;
  - sale la nota del 2026-11-22 sobre el estado de la épica 06.
  - En el registro, la 07-02 pasa de «Sin redactar» a «Pendiente».
- **Riesgo:** la clase de la U2 es el 2026-11-25. Si la 07-02 no llega a tiempo, el Cuaderno de práctica cubre el vacío (riesgo ya previsto en la iteración).

## Pendientes y riesgos

- Corrección 37 (rendimiento), Pendiente: diagnóstico por efecto (E1, E4, E7 y E8) con el panel de rendimiento y Lighthouse publicado; después, la reducción que apruebe el desarrollador. Meta: 95 o más en Rendimiento móvil publicado sin perder los efectos que aporten.
- Safari real: alto de las unidades y tramos de `view()` (propuesta fuera de alcance).
- Lector de pantalla: la 06-07 y la 06-08 no cambiaron nombres accesibles, pero no se probó con NVDA ni VoiceOver después de la reapertura.
- El `astro preview` del puerto 4340 (PID 18700) sigue corriendo; no es de esta sesión.

## Commit sugerido

`Épica 6 - Cierre: Lighthouse publicado 92/100/100/100 aceptado como desviación, corrección 37 de rendimiento, P-030 a P-033 aplicadas y ajustes a la épica 07`
