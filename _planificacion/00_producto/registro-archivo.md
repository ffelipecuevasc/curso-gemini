# Registro archivado

Filas que salen de `registro-pendientes.md` al cerrar una épica o cuando el historial pasa de 50 filas (`_planificacion/README.md`, sección 5.2). Lo archivado no se edita.

## 1. Iteraciones de épicas cerradas

### Épica 01 · Fundación y sistema de diseño (cerrada el 2026-11-17)

| Iteración | Nombre | Épica | Estado | Depende de | Bitácoras |
| :-------- | :----- | :---- | :----- | :--------- | :-------- |
| 01-01 | Andamiaje del proyecto | 01 | Terminada | — | [bitacora-01-01](../10_epicas/epica-01-fundacion/bitacoras/bitacora-01-01.md) |
| 01-02 | Tokens de diseño y fuentes | 01 | Terminada | 01-01 | [bitacora-01-02](../10_epicas/epica-01-fundacion/bitacoras/bitacora-01-02.md) |
| 01-03 | Layout, navegación y modos | 01 | Terminada | 01-02 | [bitacora-01-03](../10_epicas/epica-01-fundacion/bitacoras/bitacora-01-03.md) |
| 01-04 | Modelo de contenido | 01 | Terminada | 01-01 | [bitacora-01-04](../10_epicas/epica-01-fundacion/bitacoras/bitacora-01-04.md) |
| 01-05 | Transición animada del cambio de modo | 01 | Terminada | 01-03, P-001 | [bitacora-01-05](../10_epicas/epica-01-fundacion/bitacoras/bitacora-01-05.md) · [bitacora-01-cierre](../10_epicas/epica-01-fundacion/bitacoras/bitacora-01-cierre.md) |

### Épica 02 · Portada, ruta del curso e instructor (cerrada el 2026-11-17)

| Iteración | Nombre | Épica | Estado | Depende de | Bitácoras |
| :-------- | :----- | :---- | :----- | :--------- | :-------- |
| 02-01 | Portada | 02 | Terminada | 01-05 | [bitacora-02-01](../10_epicas/epica-02-portada-ruta-instructor/bitacoras/bitacora-02-01.md) |
| 02-02 | Fichas de las unidades y modelo de bloques | 02 | Terminada | 02-01 | [bitacora-02-02](../10_epicas/epica-02-portada-ruta-instructor/bitacoras/bitacora-02-02.md) |
| 02-03 | Ruta del curso | 02 | Terminada | 02-02 | [bitacora-02-03](../10_epicas/epica-02-portada-ruta-instructor/bitacoras/bitacora-02-03.md) |
| 02-04 | Instructor | 02 | Terminada | 02-03 | [bitacora-02-04](../10_epicas/epica-02-portada-ruta-instructor/bitacoras/bitacora-02-04.md) |
| 02-05 | Bloques y prompts de la Unidad 1 y la Unidad 2 | 02 | Terminada | 02-04 | [bitacora-02-05](../10_epicas/epica-02-portada-ruta-instructor/bitacoras/bitacora-02-05.md) |
| 02-06 | Bloques y prompts de la Unidad 3 y la Unidad 4 | 02 | Terminada | 02-05 | [bitacora-02-06](../10_epicas/epica-02-portada-ruta-instructor/bitacoras/bitacora-02-06.md) · [bitacora-02-cierre](../10_epicas/epica-02-portada-ruta-instructor/bitacoras/bitacora-02-cierre.md) |

### Épica 03 · Unidades del curso (cerrada el 2026-11-17)

| Iteración | Nombre | Épica | Estado | Depende de | Bitácoras |
| :-------- | :----- | :---- | :----- | :--------- | :-------- |
| 03-01 | Sección de unidad y texto de los bloques | 03 | Terminada | 02-06 | [bitacora-03-01](../10_epicas/epica-03-unidades/bitacoras/bitacora-03-01.md) |
| 03-02 | Prompts con «Copiar» y recursos externos | 03 | Terminada | 03-01 | [bitacora-03-02](../10_epicas/epica-03-unidades/bitacoras/bitacora-03-02.md) |
| 03-03 | Descargas y «Profundiza» | 03 | Terminada | 03-02 | [bitacora-03-03](../10_epicas/epica-03-unidades/bitacoras/bitacora-03-03.md) |
| 03-04 | Pendientes de la Unidad 1 y la Unidad 2 | 03 | Terminada | 03-03 | [bitacora-03-04](../10_epicas/epica-03-unidades/bitacoras/bitacora-03-04.md) |
| 03-05 | Pendientes de la Unidad 3 y la Unidad 4 | 03 | Terminada | 03-04 | [bitacora-03-05](../10_epicas/epica-03-unidades/bitacoras/bitacora-03-05.md) · [bitacora-03-cierre](../10_epicas/epica-03-unidades/bitacoras/bitacora-03-cierre.md) |

### Épica 04 · Publicación, medición y calidad (cerrada el 2026-11-18)

| Iteración | Nombre | Épica | Estado | Depende de | Bitácoras |
| :-------- | :----- | :---- | :----- | :--------- | :-------- |
| 04-01 | Guardia de marcadores y limpieza de la compilación | 04 | Terminada | 03-05, corrección 15.1 | [bitacora-04-01](../10_epicas/epica-04-publicacion-calidad/bitacoras/bitacora-04-01.md) |
| 04-02 | Configuración de Cloudflare Workers y publicación desde GitHub | 04 | Terminada | 04-01, P-008 | [bitacora-04-02](../10_epicas/epica-04-publicacion-calidad/bitacoras/bitacora-04-02.md) |
| 04-03 | Web Analytics y metadatos para compartir | 04 | Terminada | 04-02 | [bitacora-04-03](../10_epicas/epica-04-publicacion-calidad/bitacoras/bitacora-04-03.md) |
| 04-04 | Rendimiento, accesibilidad y verificación final | 04 | Terminada | 04-03 | [bitacora-04-04](../10_epicas/epica-04-publicacion-calidad/bitacoras/bitacora-04-04.md) · [bitacora-04-cierre](../10_epicas/epica-04-publicacion-calidad/bitacoras/bitacora-04-cierre.md) |

## 2. Backlog terminado

### Épica 01

| Prioridad | Elemento | Tipo | Especificación | Iteración | Estado |
| :-------- | :------- | :--- | :------------- | :-------- | :----- |
| 1 | Proyecto Astro + Tailwind v4 + PNPM estricto compilando | Técnico | — | 01-01 | Terminada |
| 2 | Tokens de `DESIGN.md`, modos claro y oscuro, fuentes autoalojadas | Técnico | — | 01-02 | Terminada |
| 3 | Layout con salto al contenido, navegación en píldoras, menú móvil, botón de modo y pie con redes | Funcionalidad | — | 01-03 | Terminada |
| 3 | Fijar los finales de línea con `.gitattributes` (`* text=auto eol=lf`) | Técnico | — | 01-03 | Terminada |
| 4 | Colecciones de contenido con esquemas validados | Técnico | — | 01-04 | Terminada |
| 4 | Transición animada del cambio de modo | Mejora | — | 01-05 | Terminada |

### Épica 02

| Prioridad | Elemento | Tipo | Especificación | Iteración | Estado |
| :-------- | :------- | :--- | :------------- | :-------- | :----- |
| 5 | Portada con el lema, Gemini como logo principal, Google, GTD y Capacita en segundo plano, y las redes con los íconos de Chrome y LinkedIn; SVG guardados como archivos individuales en `src/assets/iconos/` | Funcionalidad | — | 02-01 | Terminada |
| 6 | Fichas reales de las 4 unidades con un `.md` por bloque (RDA-009) y sin contenido de prueba | Técnico | — | 02-02 | Terminada |
| 7 | Ruta del curso: 4 unidades de 0 % a 100 % en mosaico, enlazadas a sus secciones | Funcionalidad | — | 02-03 | Terminada |
| 7.1 | Ruta del curso en 4 columnas desde 1024 px (P-006 en `DESIGN.md`, sección 4) | Corrección | — | — | Terminada (dicho por el desarrollador, revisión en navegador sin observaciones) |
| 8 | Sección del instructor | Funcionalidad | — | 02-04 | Terminada |
| 9 | Texto «Para la clase», prompts y recursos de la Unidad 1 y la Unidad 2 | Funcionalidad | — | 02-05 | Terminada |
| 10 | Texto «Para la clase», prompts y recursos de la Unidad 3 y la Unidad 4 | Funcionalidad | — | 02-06 | Terminada |

### Épica 03

| Prioridad | Elemento | Tipo | Especificación | Iteración | Estado |
| :-------- | :------- | :--- | :------------- | :-------- | :----- |
| 11 | Sección de unidad: ficha, tabla de bloques y texto «Para la clase» de las 4 unidades con un solo componente | Funcionalidad | — | 03-01 | Terminada |
| 12 | Prompts con «Copiar» (IDs con unidad y bloque) y recursos externos de cada unidad | Funcionalidad | — | 03-02 | Terminada |
| 13 | Descargas con formato y peso medidos del archivo (RDA-010) y «Profundiza» plegable | Funcionalidad | — | 03-03 | Terminada |
| 14 | Pendientes de la Unidad 1 y la Unidad 2 (descargas, videos, «Profundiza») | Funcionalidad | — | 03-04 | Terminada |
| 15 | Pendientes de la Unidad 3 y la Unidad 4 (descargas, videos, «Profundiza») | Funcionalidad | — | 03-05 | Terminada |

### Épica 04

| Prioridad | Elemento | Tipo | Especificación | Iteración | Estado |
| :-------- | :------- | :--- | :------------- | :-------- | :----- |
| 15.1 | Plantillas con el mismo nombre al descargar: ruta visible en la tarjeta (por ejemplo «analista-planillas/SKILL.md») y texto en la ficha de la U4 para guardar cada plantilla en su carpeta (texto aprobado por el desarrollador, campo opcional `notaDescargas` de la ficha) · Rama `correccion/plantillas-descargas`, antes de la 04-01 | Corrección | — | — | Terminada |
| 16 | Guardia de marcadores `PENDIENTE_` y `VERIFICAR` en `pnpm build` (todos los archivos de texto de `dist/`) y limpieza de los SVG sin referencia en `dist/_astro/` | Técnico | — | 04-01 | Terminada |
| 16.1 | Configuración de Cloudflare Workers (`wrangler.jsonc` del Worker `curso-gemini`, `pnpm dlx wrangler@4.164.0`) y publicación continua desde `main` con Workers Builds, conectada por el desarrollador después del merge | Técnico | — | 04-02 | Terminada |
| 17 | Cloudflare Web Analytics, ícono, `robots.txt`, página 404 y licencia del contenido (sin canónica ni Open Graph) · Ícono: glifo `school-outline` de Material Symbols Light sobre `#007EA7` | Funcionalidad | — | 04-03 | Terminada |
| 18 | Verificación final de rendimiento y accesibilidad en local y en la URL publicada · Antes de los ajustes, la publicada dio 94/98/100/100. Títulos en `h3`: local 98/100/96/100. `content-visibility` revertido, porque empeoró la medición (93/92). Publicada después del merge: 87/100/100/100 (Rendimiento bajo 95 por TBT; excepción aceptada por el desarrollador el 2026-11-18, se atiende en la 05-08) | Técnico | — | 04-04 | Terminada |

## 3. Historial archivado

| Fecha | Cambio |
| :---- | :----- |
| 2026-11-17 | Creación de la documentación del proyecto: nivel pequeño, 4 épicas y 15 iteraciones previstas. |
| 2026-11-17 | Iteración 01-01 en revisión: proyecto Astro + Tailwind v4 + PNPM estricto compilando; se agrega 01-05 al registro. [Bitácora](../10_epicas/epica-01-fundacion/bitacoras/bitacora-01-01.md) |
| 2026-11-17 | Iteración 01-01 terminada, aprobada por el desarrollador. |
| 2026-11-17 | Iteración 01-02 en revisión: tokens de `DESIGN.md` con modo oscuro y fuentes de Fontsource (RDA-006, propuesta P-002). [Bitácora](../10_epicas/epica-01-fundacion/bitacoras/bitacora-01-02.md) |
| 2026-11-17 | Iteración 01-02 terminada, aprobada por el desarrollador. |
| 2026-11-17 | Propuesta de `.gitattributes` aprobada: pasa al backlog como tarea 8 de la 01-03. |
| 2026-11-17 | Iteración 01-03 en revisión: layout, navegación sin «Recursos» (P-003), menú móvil, botón de modo, pie con redes y `.gitattributes`; JS de 806 B gzip. [Bitácora](../10_epicas/epica-01-fundacion/bitacoras/bitacora-01-03.md) |
| 2026-11-17 | Iteración 01-03 terminada: el desarrollador comprobó en el navegador los cinco criterios pendientes. RDA-007: sin JavaScript, modo claro. |
| 2026-11-17 | Iteración 01-04 en revisión: 4 colecciones con esquemas Zod estrictos y contenido de prueba; 0 B de JS nuevo. [Bitácora](../10_epicas/epica-01-fundacion/bitacoras/bitacora-01-04.md) |
| 2026-11-17 | Iteración 01-04 terminada, aprobada por el desarrollador (commit y push hechos). |
| 2026-11-17 | RDA-008: avance de las unidades en cuatro tramos iguales; sale de «Decisiones por tomar». Propuesta P-004: el documento de unidades pasa a la lista permitida. |
| 2026-11-17 | Iteración 01-05 en revisión: revelado circular del cambio de modo con View Transitions; JS 852 B gzip. Cierre de la épica 01 preparado. [Bitácora](../10_epicas/epica-01-fundacion/bitacoras/bitacora-01-05.md) · [Cierre](../10_epicas/epica-01-fundacion/bitacoras/bitacora-01-cierre.md) |
| 2026-11-17 | Iteración 01-05 terminada (revisión en navegador hecha por el desarrollador). Épica 01 cerrada; sus filas pasan a `registro-archivo.md`. Iteraciones de la épica 02 aprobadas, sin detallar. [Cierre](../10_epicas/epica-01-fundacion/bitacoras/bitacora-01-cierre.md) |
| 2026-11-17 | Traspaso a la épica 02: 6 iteraciones generadas (02-01 a 02-06). La carga de las 4 unidades pasa a la épica 02 (un `.md` por bloque, RDA-009 por registrar en la 02-02) y la épica 03 queda solo para presentarlas y completar lo pendiente; backlog renumerado. |
| 2026-11-17 | Se ajusta la 02-01: Gemini como logo principal, GTD y Capacita en segundo plano, Chrome y LinkedIn en las redes y recoloreo permitido salvo Gemini, Google y Chrome; propuesta P-005 pendiente. |
| 2026-11-17 | Iteración 02-01 en revisión: portada con lema y logos (Gemini, Google; GTD y Capacita aparte) y redes con Chrome y LinkedIn; salen de «Decisiones por tomar» los SVG y la P-005, ya resueltos. [Bitácora](../10_epicas/epica-02-portada-ruta-instructor/bitacoras/bitacora-02-01.md) |
| 2026-11-17 | Iteración 02-01 terminada: el desarrollador revisó la portada en el navegador (teclado, 360 px y escritorio, ambos modos, logo de GTD) sin observaciones. |
| 2026-11-17 | Iteración 02-02 en revisión: 4 fichas y 26 bloques `.md` (RDA-009) validados al compilar; sin contenido de prueba; 2 advertencias de cargador vacío aceptadas hasta la 03. [Bitácora](../10_epicas/epica-02-portada-ruta-instructor/bitacoras/bitacora-02-02.md) |
| 2026-11-17 | Iteración 02-02 terminada: aprobada por el desarrollador; 2 advertencias del cargador file aceptadas hasta que haya contenido. |
| 2026-11-17 | Iteración 02-03 en revisión: mosaico de las 4 unidades en `#ruta` desde las colecciones; la validación RDA-009 pasa a `RutaCurso`; 0 B de JS nuevo; falta revisión en navegador. [Bitácora](../10_epicas/epica-02-portada-ruta-instructor/bitacoras/bitacora-02-03.md) |
| 2026-11-17 | Iteración 02-03 terminada: el desarrollador revisó la ruta en el navegador (teclado, foco, borde de la U3, 360/640/1024 px, ambos modos) sin observaciones; acepta la esquina asimétrica en los 4 bloques. |
| 2026-11-17 | Corrección: la ruta pasa a 4 columnas desde 1024 px (`lg:grid-cols-4`), según la P-006 aplicada en `DESIGN.md` (commit 9c39f9b); `pnpm build` y `astro check` sin cambios en advertencias; falta revisión en navegador. |
| 2026-11-17 | Corrección de la ruta en 4 columnas terminada: dicho por el desarrollador, revisión en navegador sin observaciones. |
| 2026-11-17 | Iteración 02-04 en revisión: `#instructor` desde la colección `instructor`, certificación de Gemini primero, sin insignia (no está en el repo); 0 B de JS nuevo; falta revisión en navegador. [Bitácora](../10_epicas/epica-02-portada-ruta-instructor/bitacoras/bitacora-02-04.md) |
| 2026-11-17 | Iteración 02-04 terminada: el desarrollador revisó el instructor en el navegador sin observaciones; corregido el comentario de RutaCurso.astro (4 columnas). |
| 2026-11-17 | Iteración 02-05 en revisión: cuerpos de los 13 bloques de U1 y U2, 8 prompts literales (8 de 8 iguales) y 27 recursos; las fichas fallan al compilar si referencian un recurso inexistente; falta comparar el hash con HEAD. [Bitácora](../10_epicas/epica-02-portada-ruta-instructor/bitacoras/bitacora-02-05.md) |
