# Bitácora 01 (cierre) · Cierre de la Épica 01: Fundación y sistema de diseño

- **Fecha:** 2026-11-17
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/01-05-transicion-cambio-modo
- **Estado final:** Cerrada (2026-11-17)

## Resumen

La épica entregó:

- el proyecto Astro + Tailwind v4 + PNPM estricto compilando;
- los tokens de `DESIGN.md` con modo claro y oscuro, y las fuentes autoalojadas de Fontsource;
- el layout común: salto al contenido, navegación en píldoras, menú móvil, botón de modo con revelado circular y pie con redes;
- 4 colecciones de contenido (`unidades`, `recursos`, `descargas` y `curso`) con esquemas Zod estrictos.

El JavaScript total es de 852 B con gzip, frente a un límite de 3 KB.

## Iteraciones de la épica

| Iteración | Nombre | Estado | Bitácoras |
| :-------- | :----- | :----- | :-------- |
| 01-01 | Andamiaje del proyecto | Terminada | [bitacora-01-01](bitacora-01-01.md) |
| 01-02 | Tokens de diseño y fuentes | Terminada | [bitacora-01-02](bitacora-01-02.md) |
| 01-03 | Layout, navegación y modos | Terminada | [bitacora-01-03](bitacora-01-03.md) |
| 01-04 | Modelo de contenido | Terminada | [bitacora-01-04](bitacora-01-04.md) |
| 01-05 | Transición animada del cambio de modo | Terminada | [bitacora-01-05](bitacora-01-05.md) |

## Criterio de término

| Criterio | Cómo se comprobó | Resultado |
| :------- | :--------------- | :-------- |
| `pnpm build` y `pnpm astro check` sin errores | El agente los ejecutó el 2026-11-17 al cerrar | Cumple |
| Página con tokens en claro y oscuro, en 360 px y escritorio, recorrible con teclado | Comprobado por el desarrollador en el navegador (01-03 y 01-05, 2026-11-17) | Cumple |
| Contenido de prueba inválido hace fallar `pnpm build` | El agente ejecutó las pruebas de rotura de la bitácora 01-04 | Cumple |

## Lo construido y medido

| Aspecto | Medición | Quién |
| :------ | :------- | :---- |
| JavaScript total | 852 B gzip (3 scripts en línea); era 806 B en la 01-03 (Node) / 802 B (Python) | Agente |
| Esquemas | 5 pruebas de rotura fallan con el campo nombrado | Agente |
| Interacción (menú, modo, revelado, reducir movimiento, sin la API, foco, navegadores) | Todo correcto | Desarrollador |

## Hallazgos abiertos

Ninguno (no hubo auditoría en esta épica).

## Decisiones del desarrollador registradas

| RDA | Decisión |
| :-- | :------- |
| RDA-001 | Nivel de proceso pequeño |
| RDA-002 | Sitio estático con Astro, Tailwind CSS v4 y PNPM en Cloudflare Workers |
| RDA-003 | Contenido del curso en colecciones de contenido |
| RDA-004 | Identidad visual de felipecuevas.dev, estilo Moderno y creativo |
| RDA-005 | Medición con Cloudflare Web Analytics por script |
| RDA-006 | Fuentes autoalojadas desde paquetes de Fontsource |
| RDA-007 | Sin JavaScript, el sitio se muestra en modo claro |
| RDA-008 | Avance de cada unidad en cuatro tramos iguales (0–25, 25–50, 50–75, 75–100) |

Propuestas a documentos protegidos, todas aplicadas por el desarrollador:

| ID | Documento | Estado |
| :- | :-------- | :----- |
| P-001 | `DESIGN.md` · 7. Movimiento (revelado circular) | Aplicada |
| P-002 | `README.md` · 4. Organización del repositorio | Aplicada |
| P-003 | `DESIGN.md` · 5. Componentes (fila Encabezado) | Aplicada |
| P-004 | `AGENTS.md` · 3 y `.claude/hooks/documentos-permitidos.md` (`unidades-del-curso.md`) | Aplicada |

## Revisión al cierre

- **Resultado frente al criterio de término:** cumplido en sus tres puntos.
- **Qué aprendimos:**
  - La revisión en navegador depende del desarrollador. Funciona bien cuando la bitácora trae los pasos exactos.
  - `reference()` de Astro no rompe el build por sí sola.
  - Un `url()` dentro de un SVG en `data:` choca con Vite y Lightning CSS; hay que codificar sus paréntesis.
- **Qué cambia en el backlog o en las épicas siguientes:**
  - La 02-02 carga las 4 unidades completas.
  - La 03-01 hace fallar el build ante una referencia inexistente.
  - Ambos cambios ya están en el backlog.

## Propuesta de la épica siguiente

**Aprobada por el desarrollador el 2026-11-17; pendiente de detallar en el traspaso a la épica 02.** La épica 02 queda «Pendiente de iniciar».

| Iteración | Objetivo | Backlog | Datos que necesita |
| :-------- | :------- | :------ | :----------------- |
| 02-01 Portada | Hero con el `h1`, la frase de propósito, el botón «Ver la ruta», los SVG de Gemini y Google y las redes | Prioridad 5 | Redacción del respaldo de Google (cliente), o acordar no mencionarlo |
| 02-02 Ruta del curso | Mosaico de las 4 unidades con su color, mini-proyecto y avance (RDA-008), enlazado a cada sección | Prioridad 6 | Documento de unidades del curso |
| 02-03 Instructor | Sección del instructor con la trayectoria del documento del curso | Prioridad 7 | Insignia de Gemini Certified Educator y nombres de certificaciones (desarrollador) |

Decidido: la 02-02 carga las 4 unidades completas como YAML reales desde `unidades-del-curso.md` (una sola fuente por unidad). En esa misma iteración se eliminan `prueba.yaml` y las entradas ficticias de `recursos.yaml` y `descargas.yaml`.

## Pendientes que pasan a la épica 02 y siguientes

- **02-02:** cargar las 4 unidades reales y eliminar el contenido de prueba.
- **03-01:** error de compilación si una referencia a un recurso o una descarga no existe; comprobación de que el archivo de cada descarga existe.
- **Datos del cliente y decisiones del desarrollador:** siguen abiertos en `registro-pendientes.md` (secciones 4 y 5).

## Commit sugerido

`Épica 1 - Cierre: cierra la épica 01 de fundación, archiva sus filas del registro y deja aprobadas sin detallar las iteraciones de la épica 02`
