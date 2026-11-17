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

## 3. Historial archivado

| Fecha | Cambio |
| :---- | :----- |
| — | — |
