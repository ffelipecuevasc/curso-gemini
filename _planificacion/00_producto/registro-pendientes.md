# Registro de pendientes

**Backlog y fuente única de verdad del trabajo pendiente.** Si discrepa con cualquier otro documento de planificación sobre el estado del trabajo, prevalece este archivo.

- **Última actualización:** 2026-11-17
- **Iteración activa:** ninguna (01-02 en revisión; próxima: 01-03)
- **Próximo hito:** cerrar la épica 01 con layout, navegación, modos y modelo de contenido; luego, sitio publicado con ruta, instructor y Unidad 1 antes de la clase 1
- **Entrega comprometida:** `PENDIENTE_CLIENTE` (fecha de la clase 1)
- **Flujo de ramas vigente:** una rama por iteración (`iteracion/XX-YY-descripcion-corta`), aprobada por el desarrollador

> Cada campo del encabezado ocupa una sola línea. El detalle va en las bitácoras y el historial, no aquí.

---

## 1. Estado de épicas e iteraciones

Solo las épicas abiertas. Al cerrar una épica, sus filas pasan a `registro-archivo.md` y la épica queda resumida en la sección 2.

| Iteración | Nombre | Épica | Estado | Depende de | Bitácoras |
| :-------- | :----- | :---- | :----- | :--------- | :-------- |
| 01-01 | Andamiaje del proyecto | 01 | Terminada | — | [bitacora-01-01](../10_epicas/epica-01-fundacion/bitacoras/bitacora-01-01.md) |
| 01-02 | Tokens de diseño y fuentes | 01 | En revisión | 01-01 | [bitacora-01-02](../10_epicas/epica-01-fundacion/bitacoras/bitacora-01-02.md) |
| 01-03 | Layout, navegación y modos | 01 | Pendiente | 01-02 | — |
| 01-04 | Modelo de contenido | 01 | Pendiente | 01-01 | — |
| 01-05 | Transición animada del cambio de modo | 01 | Pendiente | 01-03, P-001 | — |

## 2. Épicas cerradas

Una fila por épica cerrada, con enlace a su bitácora de cierre.

| Épica | Nombre | Cerrada | Bitácora de cierre |
| :---- | :----- | :------ | :----------------- |
| — | — | — | — |

## 3. Backlog

Lo comprometido que falta construir, ordenado por prioridad. Un elemento asignado a una iteración muestra su número; al cerrar la iteración se actualizan su fila y las de este backlog. Los terminados se quedan al final hasta que su épica se cierra; entonces pasan a `registro-archivo.md`.

| Prioridad | Elemento | Tipo | Especificación | Iteración | Estado |
| :-------- | :------- | :--- | :------------- | :-------- | :----- |
| 1 | Proyecto Astro + Tailwind v4 + PNPM estricto compilando | Técnico | — | 01-01 | Terminada |
| 2 | Tokens de `DESIGN.md`, modos claro y oscuro, fuentes autoalojadas | Técnico | — | 01-02 | En revisión |
| 3 | Layout con salto al contenido, navegación en píldoras, menú móvil, botón de modo y pie con redes | Funcionalidad | — | 01-03 | Pendiente |
| 4 | Colecciones de contenido con esquemas validados | Técnico | — | 01-04 | Pendiente |
| 4 | Transición animada del cambio de modo | Mejora | — | 01-05 | Pendiente |
| 5 | Portada con íconos SVG de Gemini y Google y redes | Funcionalidad | — | 02-01 | Pendiente |
| 6 | Ruta del curso: 4 unidades de 0 % a 100 % en mosaico | Funcionalidad | — | 02-02 | Pendiente |
| 7 | Sección del instructor | Funcionalidad | — | 02-03 | Pendiente |
| 8 | Componentes de unidad: prompt con «Copiar», «Profundiza», recurso externo y descarga | Funcionalidad | — | 03-01 | Pendiente |
| 9 | Contenido de la Unidad 1 | Funcionalidad | — | 03-02 | Pendiente |
| 10 | Configuración de Cloudflare Workers y guardia de marcadores `PENDIENTE_` | Técnico | — | 04-01 | Pendiente |
| 11 | Cloudflare Web Analytics y metadatos para compartir | Funcionalidad | — | 04-02 | Pendiente |
| 12 | Contenido de la Unidad 2 | Funcionalidad | — | 03-03 | Pendiente |
| 13 | Contenido de la Unidad 3 | Funcionalidad | — | 03-04 | Pendiente |
| 14 | Contenido de la Unidad 4 | Funcionalidad | — | 03-05 | Pendiente |
| 15 | Verificación final de rendimiento y accesibilidad en la URL publicada | Técnico | — | 04-03 | Pendiente |

## 4. Datos pendientes del cliente

Mientras falten, se usa `PENDIENTE_CLIENTE` donde corresponda.

| Dato | Hallazgo | Necesario para | Estado |
| :--- | :------- | :------------- | :----- |
| Fechas de las 4 clases (define el hito de publicación) | — | Planificación de 03 y 04 | Pendiente |
| Redacción del respaldo de Google a la formación, si se quiere mencionar en el sitio (sin logos de Google como sello) | — | 02-01 | Pendiente |
| Autorización para publicar en un sitio público el kit de marca de GTD (HEX y tipografía aproximados) y el logo de GTD que usa la U2 | — | 03-03 | Pendiente |
| HEX y tipografía oficiales de GTD, si se confirman antes de la clase 2 | — | 03-03 | Pendiente |

## 5. Decisiones por tomar

Decisiones del desarrollador que bloquean o condicionan trabajo. Mientras falten, se usa `PENDIENTE_DESARROLLADOR`.

| Tema | RDA o hallazgo | Responsable |
| :--- | :------------- | :---------- |
| Texto de «Profundiza en tu tiempo» de cada bloque: el documento del curso lista los temas, pero no la teoría escrita | — | Desarrollador |
| Videos oficiales de Google en YouTube para cada unidad (el documento del curso no trae enlaces a videos) | — | Desarrollador |
| Archivos de descarga finales: dataset CSV, `plantillas-alumnos.zip`, informe de Deep Research de respaldo, paquete de fuentes de la U3, `optimizador-prompts/SKILL.md`, `gtd-visual.zip` con el logo y plantillas de skills de la U4 | — | Desarrollador |
| Imagen de la insignia oficial de Gemini Certified Educator para la sección del instructor | — | Desarrollador |
| Nombres completos de las certificaciones AWS y Anthropic, si se listan | — | Desarrollador |
| Nombre del Worker (define la URL `nombre.subdominio.workers.dev`) y token de Web Analytics | RDA-005 | Desarrollador |
| Licencia del contenido del sitio (hoy «todos los derechos reservados») | — | Desarrollador |
| Zona horaria de las fechas de la documentación (se asumió America/Santiago) | — | Desarrollador |

## 6. Propuestas fuera de alcance

Ideas detectadas durante el trabajo que no forman parte de lo comprometido, incluidos los documentos nuevos que un agente crea necesarios (nunca se crean sin aprobación). Se registran aquí y no se implementan. Si se aprueba una, pasa al backlog con una fila de historial.

| Propuesta | Origen | Fecha |
| :-------- | :----- | :---- |
| Guardar en el navegador las casillas marcadas de «Terminado cuando…» | Planificación inicial | 2026-11-17 |
| Mostrar los logotipos de Capacita Tu Futuro y GTD en el pie, con autorización del cliente | Planificación inicial | 2026-11-17 |
| Fijar los finales de línea (`.gitattributes` con `eol=lf` o `endOfLine` en `.prettierrc`): hoy `pnpm format` convierte a LF archivos que Git guarda con CRLF | Iteración 01-02 | 2026-11-17 |

## 7. Historial

Una fila por cambio, en una sola línea, con enlace a la bitácora que tiene el detalle. Nada se borra: si un cambio queda sin efecto, se agrega una fila que lo dice. Cuando el historial pasa de 50 filas, las más antiguas se mueven a `registro-archivo.md`.

| Fecha | Cambio |
| :---- | :----- |
| 2026-11-17 | Creación de la documentación del proyecto: nivel pequeño, 4 épicas y 15 iteraciones previstas. |
| 2026-11-17 | Iteración 01-01 en revisión: proyecto Astro + Tailwind v4 + PNPM estricto compilando; se agrega 01-05 al registro. [Bitácora](../10_epicas/epica-01-fundacion/bitacoras/bitacora-01-01.md) |
| 2026-11-17 | Iteración 01-01 terminada, aprobada por el desarrollador. |
| 2026-11-17 | Iteración 01-02 en revisión: tokens de `DESIGN.md` con modo oscuro y fuentes de Fontsource (RDA-006, propuesta P-002). [Bitácora](../10_epicas/epica-01-fundacion/bitacoras/bitacora-01-02.md) |
