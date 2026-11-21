# Épica 05 · Rediseño visual y síntesis del contenido

- **Estado:** En curso
- **Objetivo:** que cada unidad quepa en una pantalla de escritorio (incluido un notebook corporativo de 1366 × 768), con lo esencial a la vista y el detalle en modales, y que el sitio dé un salto de calidad visual (estados de interacción claros, profundidad y movimiento con propósito) sin salir de la paleta ni de las tipografías de felipecuevas.dev (RDA-004).

## Por qué existe esta épica

Diagnóstico del 2026-11-18, hecho con la skill Impeccable sobre el sitio publicado (`https://curso-gemini.felipe-cuevas.workers.dev/`, 1440 × 900) y el repositorio en el commit `b30d648`:

1. **Demasiado texto en una sola página.** Los bloques y fichas de las 4 unidades suman unas 8.800 palabras (U1 ≈ 2.000, U2 ≈ 2.050, U3 ≈ 2.600, U4 ≈ 1.900; `wc -w` sobre `src/content/bloques/` y `src/content/unidades/`): unos 38 minutos de lectura. En escritorio, el control de la barra de desplazamiento mide unos 25 px. Cada unidad muestra todo abierto a la vez: ficha, tabla de bloques, el texto completo de cada bloque, sus tablas y una lista de hasta 25 recursos.
2. **Material de conducción de la clase publicado.** Hay textos pensados para el relator y no para el participante: la columna «Pregunta para el grupo» (U1 · 2), «Vitrina: 3 personas al azar…» (U1 · 5, U2 y U3 · cierre, U4 · 5), «Los rojos del semáforo se resuelven aquí» (U1 · 3) y los minutos de cada subpunto («2.1 Qué es un LLM (4 min)»). Inflan el texto y contradicen la regla de contenido del proyecto (la página es para los asistentes).
3. **Los botones no parecen botones.** Tailwind v4 cambió el estilo base y los `<button>` usan `cursor: default`; el proyecto no lo sobrescribe en ninguna parte (`grep cursor src/` solo encuentra el `<summary>` de «Profundiza»). Además, el hover del botón de modo, del botón del menú y de «Copiar» pasa de `superficie-2` (#ECF0FF) a `superficie` (#E4F3FF): dos celestes casi iguales, de modo que el cambio no se ve. Las tarjetas de la ruta solo subrayan el título al pasar el mouse.
4. **Sistema visual plano por regla.** `DESIGN.md` prohíbe sombras, degradados y apariciones al desplazarse (secciones 1, 4 y 7). El resultado se ve correcto pero sin jerarquía de profundidad ni respuesta al usuario.
5. **La portada no adelanta el curso.** El hero muestra título, lema y logos; la ruta (los 4 bloques de color, lo más atractivo del sitio) queda bajo el pliegue.

## Alcance

1. Estados de interacción visibles en todos los controles: cursor, hover, presionado y foco, con un cambio de color perceptible y el botón de modo con su acción visible.
2. Modelo de contenido con síntesis por bloque (`sintesis`: resumen, «Qué harás» y hasta 2 claves) y por unidad (`objetivoBreve`), con límites de palabras validados por Zod al compilar (RDA-012).
3. Síntesis de los 26 bloques de U1 a U4, redactada por el agente y aprobada por el desarrollador, y retiro del material de conducción de la clase del texto publicado.
4. Sistema de modales sobre `<dialog>` nativo (RDA-011): prompt con descripción y copiado en un clic, detalle completo del bloque, recursos de la unidad y descargas.
5. Sección de unidad en una pantalla: cabecera de color y cuadrícula de tarjetas de bloque con botones que abren los modales.
6. Portada y ruta del curso en un solo pantallazo, e instructor compacto.
7. Capa de efectos «con propósito»: sombras teñidas por unidad, transición de tarjeta a modal con View Transitions, barra de avance guiada por el desplazamiento, aparición escalonada sutil y brillo que sigue al cursor en las tarjetas; todo con `prefers-reduced-motion`.
8. Verificación final de rendimiento, accesibilidad y presupuesto de alto y de palabras.

## Fuera de alcance

- Cambiar la paleta, las tipografías o el estilo «Moderno y creativo» (RDA-004).
- Contenido nuevo del curso: la síntesis resume lo que ya existe; ningún dato, cifra ni enlace se agrega.
- Borrar el texto completo de los bloques: se conserva y se muestra en el modal «Ver detalle».
- Dependencias nuevas (librerías de animación, de modales o de carruseles).
- Guardar en el navegador las casillas de «Terminado cuando…» (sigue como propuesta fuera de alcance del registro).
- Parallax, fondos animados y efectos sobre los logotipos de Google, Gemini y Chrome.

## Iteraciones

| Iteración | Nombre | Estado |
| :-------- | :----- | :----- |
| 05-01 | [Afordancias y estados de interacción](iteracion-05-01-afordancias-estados.md) | Terminada |
| 05-02 | [Modelo de síntesis y síntesis de U1 y U2](iteracion-05-02-sintesis-u1-u2.md) | Terminada |
| 05-03 | [Síntesis de U3 y U4](iteracion-05-03-sintesis-u3-u4.md) | Terminada |
| 05-04 | [Sistema de modales](iteracion-05-04-modales.md) | Terminada |
| 05-05 | [La unidad en una pantalla](iteracion-05-05-unidad-una-pantalla.md) | Terminada |
| 05-06 | [Portada y ruta en un pantallazo](iteracion-05-06-portada-ruta.md) | En revisión |
| 05-07 | [Capa de efectos con propósito](iteracion-05-07-efectos.md) | Pendiente |
| 05-08 | [Pulido y verificación final del rediseño](iteracion-05-08-verificacion.md) | Pendiente |

> Iteraciones generadas el 2026-11-18 a pedido del desarrollador, antes del cierre de la épica 04, para que el trabajo continúe sin pausa cuando esta termine. Ninguna se empieza mientras la épica 04 tenga iteraciones abiertas.

Orden y dependencias:

```text
05-01 ──► 05-02 ──► 05-03 ──► 05-04 ──► 05-05 ──┐
  │                                              ├──► 05-07 ──► 05-08
  └────────────────────────────► 05-06 ──────────┘
```

- La 05-01 va primero porque es el arreglo más visible, no depende de contenido y deja los estados que reutilizan los modales y las tarjetas.
- La síntesis (05-02 y 05-03) va antes de los modales y de la unidad: los modales muestran el `resumen` y la `descripcion`, y sin los textos cortos no se puede comprobar que la unidad cabe en una pantalla.
- Los modales (05-04) van antes de la sección de unidad (05-05), porque la unidad nueva solo es posible si el detalle tiene dónde vivir.
- La portada (05-06) solo depende de la 05-01; se puede hacer antes de la 05-02 si conviene, siempre que no se mezcle con otra iteración.
- Los efectos (05-07) van al final: se aplican sobre la estructura ya estable, y así se mide su costo de rendimiento una sola vez.

## Decisiones de la épica

- 2026-11-18: la documentación de la épica se genera antes del cierre de la 04; la ejecución empieza después del cierre (decisión del desarrollador).
- 2026-11-18: nivel de efectos «con propósito»: sombras teñidas por unidad, transición de tarjeta a modal con View Transitions, barra de avance por desplazamiento, aparición escalonada sutil y brillo que sigue al cursor en las tarjetas. Sin parallax, sin fondos animados y sin efectos sobre logotipos (decisión del desarrollador).
- 2026-11-18: síntesis «resumen visible + detalle en modal»: el agente redacta el resumen (va en el modal), «Qué harás» y las claves (van en la tarjeta) de cada bloque; el texto completo se conserva en el modal «Ver detalle»; el desarrollador aprueba cada síntesis antes de publicarla (decisión del desarrollador).
- 2026-11-18: modales sobre `<dialog>` nativo con un script mínimo y respaldo sin JavaScript, según RDA-011. El desarrollador delega la elección técnica en la opción más profesional para el stack y se encarga de editar `AGENTS.md`, `DESIGN.md` y `README.md` (propuestas P-009, P-010 y P-011: P-009 antes de la 05-01; las otras dos antes de la 05-04).
- La verificación de Lighthouse de la 04-04 queda como línea base; la 05-08 la repite sobre el sitio rediseñado y la compara.

## Reglas comunes de la épica

- Ninguna iteración cambia la paleta, las tipografías ni los radios de `DESIGN.md`; los tokens nuevos (sombras, duraciones, curvas) se derivan de los colores existentes.
- Todo efecto tiene una versión sin movimiento con `prefers-reduced-motion: reduce`, y todo comportamiento con script tiene una versión que se puede leer sin JavaScript (RDA-007).
- Cada texto de síntesis se publica solo después de la aprobación del desarrollador y se registra en la sección «Contenido aprobado» de su iteración.
- Ninguna iteración agrega dependencias.
- Presupuesto de JavaScript propio de la épica: 3 KB gzip en total (hoy, unos 1,05 KB gzip: 852 B en la bitácora 01-05 más 198 B en la 03-02).

## Precondiciones

- Épica 04 cerrada (04-02, 04-03 y 04-04 `Terminada`).
- Propuestas P-009 (`DESIGN.md`), P-010 (`AGENTS.md`) y P-011 (`README.md`) aplicadas por el desarrollador antes de la iteración que las necesita: P-009 se aplica antes de la 05-01 y P-010 y P-011 antes de la 05-04.
- RDA-011 y RDA-012 aceptadas por el desarrollador antes de la 05-02 (RDA-012) y la 05-04 (RDA-011).

## Criterio de término

- En escritorio, con ventanas de 1440 × 900 y de 1366 × 657 (notebook corporativo de 1366 × 768 con la barra del navegador), cada `section` de unidad mide como máximo el alto de la ventana menos el encabezado, medido con `getBoundingClientRect()` en la consola en ambos modos.
- La página completa mide como máximo 7 alturas de ventana en 1440 × 900 (`document.documentElement.scrollHeight / innerHeight ≤ 7`).
- Cada unidad muestra como máximo 300 palabras fuera de los modales, títulos incluidos (conteo con el fragmento de consola de la 05-08).
- Cero textos de conducción de la clase en `dist/index.html` (búsqueda de «al azar», «Pregunta para el grupo», «semáforo» y del patrón `\(\d+ min\)` dentro de los textos de bloque).
- Todos los botones y enlaces muestran `cursor: pointer` y un cambio de estado visible al pasar el mouse.
- JavaScript propio total ≤ 3 KB gzip.
- Lighthouse móvil sobre la URL publicada: 95 o más en Rendimiento y 100 en Accesibilidad, Buenas prácticas y SEO; CLS < 0,1 e INP informativo, sin bloquear; referencia: TBT.

## Cierre

- **Bitácora de cierre:** —
