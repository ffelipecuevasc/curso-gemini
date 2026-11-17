# Bitácora 02 (cierre) · Cierre de la Épica 02: Portada, ruta del curso e instructor

- **Fecha:** 2026-11-17
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/02-06-bloques-u3-u4
- **Estado final:** En revisión

## Resumen

La épica 02 entregó lo siguiente:

- La portada, con el lema y los logos.
- El modelo de un `.md` por bloque (RDA-009) con las fichas reales.
- La ruta del curso en mosaico.
- La sección del instructor con su colección.
- La carga completa de las 4 unidades: 26 bloques con su texto «Para la clase», 24 prompts idénticos al documento y 41 recursos validados al compilar.

La página muestra portada, ruta e instructor. Las unidades están cargadas, pero todavía no se muestran: eso le toca a la épica 03.

## Iteraciones de la épica

| Iteración | Nombre | Estado | Bitácoras |
| :-------- | :----- | :----- | :-------- |
| 02-01 | Portada | Terminada | [bitacora-02-01](bitacora-02-01.md) |
| 02-02 | Fichas de las unidades y modelo de bloques | Terminada | [bitacora-02-02](bitacora-02-02.md) |
| 02-03 | Ruta del curso | Terminada | [bitacora-02-03](bitacora-02-03.md) |
| 02-04 | Instructor | Terminada | [bitacora-02-04](bitacora-02-04.md) |
| 02-05 | Bloques y prompts de la Unidad 1 y la Unidad 2 | Terminada | [bitacora-02-05](bitacora-02-05.md) |
| 02-06 | Bloques y prompts de la Unidad 3 y la Unidad 4 | En revisión | [bitacora-02-06](bitacora-02-06.md) |

## Criterio de término

| Criterio | Cómo se comprobó | Resultado |
| :------- | :--------------- | :-------- |
| Portada, ruta e instructor se ven en 360 px y en escritorio, en ambos modos | Revisión en navegador del desarrollador, registrada en el historial del registro: 02-01 (portada), 02-03 y corrección 7.1 (ruta) y 02-04 (instructor), todas sin observaciones | Cumple (dicho por el desarrollador) |
| Un solo `h1` y cada sección con su `h2` | `dist/index.html` de esta rama: 1 `h1`, 6 `h2` (ruta, 4 unidades, instructor), cada `section` con `aria-labelledby` | Cumple (medido) |
| Cada bloque de la ruta lleva a su unidad con el teclado | 4 enlaces `#unidad-1` a `#unidad-4` medidos en la 02-03; recorrido con teclado hecho por el desarrollador al cerrar la 02-03 | Cumple (medido y dicho por el desarrollador) |
| Las 4 unidades en las colecciones con bloques, texto, prompts idénticos y recursos | 26 de 26 bloques con cuerpo; comando temporal: 24 de 24 prompts iguales; 41 recursos con `https` del documento y 0 sin referencia ([bitacora-02-06](bitacora-02-06.md)) | Cumple (medido) |
| Sin contenido de prueba ni `PENDIENTE_` o `VERIFICAR` en `src/content/` | Contenido de prueba eliminado en la 02-02; `grep -rlE "PENDIENTE_\|VERIFICAR" src/content dist`: 0 | Cumple (medido) |

## Hallazgos abiertos

Ninguno. El proyecto es de nivel pequeño y no tiene auditorías (RDA-001).

## Decisiones del desarrollador registradas

- 2026-11-17: P-005 y P-006 aplicadas en `DESIGN.md` (logos recoloreables, ruta en 4 columnas).
- 2026-11-17: esquina asimétrica en los 4 bloques de la ruta (02-03).
- 2026-11-17: 2 advertencias del cargador `file` aceptadas; la de `recursos.yaml` desapareció en la 02-05 y la de `descargas.yaml` sigue hasta la épica 03.
- 2026-11-17: propuestas editoriales de la 02-05 y la 02-06 aprobadas (omisiones, prompts, recursos, textos de la U3 en el bloque 0, colección «no oficial»).
- 2026-11-17: la instrucción «Se destaca primero, mostrando la insignia oficial» no se publica; el instructor se construye sin insignia hasta que llegue.

## Revisión al cierre

- **Resultado frente al criterio de término:** cumple los 5 puntos; 3 se midieron en esta rama y 2 dependen de la revisión del desarrollador ya registrada.
- **Qué aprendimos:**
  - La validación entre colecciones (`obtenerUnidadesConBloques()` y `comprobarReferencias()`) es lo que hace fallar el build ante errores de contenido; `reference()` solo no basta.
  - Copiar por rangos de líneas del documento, con una comprobación independiente línea a línea, evita errores de transcripción.
  - Comparar el hash contra `HEAD` en una copia hecha con `git archive` funciona.
- **Revisión como experto (Astro, Tailwind v4, TypeScript):**
  - **Bien:** esquemas estrictos con Zod, contenido fuera de los componentes, 0 B de JS nuevo en toda la épica (3 scripts, los permitidos) y componentes pequeños con props tipadas.
  - **Deuda técnica:**
    - Las comprobaciones entre colecciones dependen de que `RutaCurso` esté en la página.
    - El cuerpo Markdown de los bloques trae tablas y listas que necesitarán estilos propios con tokens, sin el plugin de tipografía.
    - El ID `deep-research` se repite entre la U2 y la U3, así que el DOM debe anteponer la unidad y el bloque.
    - Los textos con `«…»` dentro del cuerpo duplican algunos prompts; la épica 03 decide cómo mostrarlos.
  - **Sin sobreingeniería:** no se agregaron dependencias en toda la épica.
- **Qué cambia en el backlog o en las épicas siguientes:**
  - La épica 03 presenta las 4 unidades con un solo componente guiado por los datos, en lugar de una iteración por unidad.
  - Lo pendiente de cada unidad (descargas, videos y «Profundiza») se agrupa por pares de unidades.
  - Se propone una nueva numeración (ver abajo); el backlog cambia solo con la aprobación del desarrollador.

## Propuesta de la épica siguiente

Entregada en el chat el 2026-11-17, **pendiente de aprobación**. No se generaron archivos de iteración ni se archivaron filas.

| Iteración | Nombre | Objetivo |
| :-------- | :----- | :------- |
| 03-01 | Sección de unidad y texto de los bloques | Las 4 secciones de unidad muestran su ficha, la tabla de bloques y el texto «Para la clase» con `render()`, con estilos de Markdown basados en tokens |
| 03-02 | Prompts con «Copiar» y recursos externos | Cada prompt se muestra con su botón «Copiar» (script pequeño, IDs con prefijo de unidad y bloque) y cada unidad lista sus recursos; los prompts con marca GTD se muestran según la decisión del cliente |
| 03-03 | Descargas y «Profundiza» | Componentes de descarga (formato y peso medidos del archivo al compilar) y «Profundiza» plegable con `<details>`, sin JS |
| 03-04 | Pendientes de la Unidad 1 y la Unidad 2 | Textos de «Profundiza», videos y descargas de la U1 y la U2 con los archivos del desarrollador |
| 03-05 | Pendientes de la Unidad 3 y la Unidad 4 | Lo mismo para la U3 y la U4 (paquete de fuentes, `SKILL.md`, `gtd-visual.zip`, plantillas) |

## Pendientes y riesgos

- Mostrar los prompts y la tabla con la marca GTD depende de la autorización del cliente (registro, «Datos pendientes del cliente»).
- Para la 03-04 y la 03-05 faltan los textos de «Profundiza», los videos y los archivos de descarga, que son datos del desarrollador.
- La insignia y los nombres de las certificaciones AWS y Anthropic siguen abiertos.

## Commit sugerido

`Épica 2 - Cierre: las 4 unidades quedan completas en las colecciones y se propone la épica 03`
