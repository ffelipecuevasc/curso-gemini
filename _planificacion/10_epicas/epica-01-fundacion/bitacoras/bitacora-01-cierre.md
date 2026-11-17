# Bitácora 01 (cierre) · Cierre de la Épica 01: Fundación y sistema de diseño

- **Fecha:** 2026-11-17
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/01-05-transicion-cambio-modo
- **Estado final:** En revisión

## Resumen

La épica deja el proyecto Astro + Tailwind v4 + PNPM estricto compilando, los tokens de `DESIGN.md` con modo claro y oscuro y fuentes autoalojadas, el layout común (salto al contenido, navegación en píldoras, menú móvil, botón de modo con revelado circular, pie con redes) y 4 colecciones de contenido con esquemas Zod estrictos. El JavaScript total es de 852 B con gzip. El cierre queda en revisión hasta que el desarrollador apruebe la 01-05.

## Iteraciones de la épica

| Iteración | Nombre | Estado | Bitácoras |
| :-------- | :----- | :----- | :-------- |
| 01-01 | Andamiaje del proyecto | Terminada | [bitacora-01-01](bitacora-01-01.md) |
| 01-02 | Tokens de diseño y fuentes | Terminada | [bitacora-01-02](bitacora-01-02.md) |
| 01-03 | Layout, navegación y modos | Terminada | [bitacora-01-03](bitacora-01-03.md) |
| 01-04 | Modelo de contenido | Terminada | [bitacora-01-04](bitacora-01-04.md) |
| 01-05 | Transición animada del cambio de modo | En revisión | [bitacora-01-05](bitacora-01-05.md) |

## Criterio de término

| Criterio | Cómo se comprobó | Resultado |
| :------- | :--------------- | :-------- |
| `pnpm build` y `pnpm astro check` sin errores | Ejecutados el 2026-11-17 en esta rama | Cumple |
| Página con tokens en claro y oscuro, en 360 px y escritorio, recorrible con teclado | Comprobado por el desarrollador en la 01-03; el revelado de la 01-05, pendiente de su revisión | Cumple (salvo la revisión de la 01-05) |
| Contenido de prueba inválido hace fallar `pnpm build` | Pruebas de rotura de la bitácora 01-04 | Cumple |

## Hallazgos abiertos

Ninguno (no hubo auditoría en esta épica).

## Decisiones del desarrollador registradas

- 2026-11-17: RDA-007, sin JavaScript el sitio se muestra en claro.
- 2026-11-17: RDA-008, avance de las unidades en cuatro tramos iguales.
- 2026-11-17: P-004, `unidades-del-curso.md` se versiona y pasa a la lista de documentos permitidos (la aplica el desarrollador).
- 2026-11-17: las referencias rotas a recursos y descargas se resuelven en la 03-01.

## Revisión al cierre

- **Resultado frente al criterio de término:** cumplido, con la revisión en navegador de la 01-05 pendiente.
- **Qué aprendimos:** las verificaciones visuales y de interacción no se pueden cerrar sin navegador, así que conviene que cada iteración de interfaz traiga sus pasos de revisión escritos. `reference()` de Astro no rompe el build por sí sola.
- **Qué cambia en el backlog o en las épicas siguientes:** la 03-01 incluye el error de compilación ante referencias inexistentes (ya en el backlog); la ruta de la 02-02 usa los tramos de la RDA-008.

## Propuesta de la épica siguiente

Propuesta presentada al desarrollador en el chat de la entrega de la 01-05; **pendiente de aprobación**. Los archivos de iteración de la épica 02 no se generan hasta entonces.

| Iteración | Objetivo | Backlog | Datos que necesita |
| :-------- | :------- | :------ | :----------------- |
| 02-01 Portada | Hero con el `h1`, la frase de propósito, el botón «Ver la ruta», los SVG de Gemini y Google y las redes | Prioridad 5 | Redacción del respaldo de Google (cliente), o acordar no mencionarlo |
| 02-02 Ruta del curso | Mosaico de las 4 unidades con su color, mini-proyecto y avance (RDA-008), enlazado a cada sección | Prioridad 6 | Títulos y mini-proyectos de las 4 unidades del documento del curso |
| 02-03 Instructor | Sección del instructor con la trayectoria del documento del curso | Prioridad 7 | Insignia de Gemini Certified Educator y nombres de certificaciones (desarrollador) |

**Revisión técnica del experto:** la ruta necesita datos de las 4 unidades, pero el esquema estricto de `unidades` exige la unidad completa (bloques, prompts, terminado), que es trabajo de la épica 03. Hay que decidir si la 02-02 carga los 4 YAML completos desde el documento del curso (adelanta la carga de contenido de la épica 03) o si la ruta se alimenta de un resumen dentro de `curso.yaml`. Se recomienda lo primero: una sola fuente por unidad, sin duplicar títulos. Ninguna iteración necesita dependencias nuevas.

## Pendientes y riesgos

- Revisión en navegador de la 01-05 (pasos en su bitácora).
- P-004, a cargo del desarrollador.
- Al aprobar la épica 02, las filas de la épica 01 pasan a `registro-archivo.md`.

## Commit sugerido

`Épica 1 - Cierre: cierra la épica 01 de fundación y propone las iteraciones de la épica 02`
