# Registro de pendientes

**Backlog y fuente única de verdad del trabajo pendiente.** Si discrepa con cualquier otro documento de planificación sobre el estado del trabajo, prevalece este archivo.

- **Última actualización:** 2026-11-17
- **Iteración activa:** ninguna; la próxima es la 03-01 (pendiente)
- **Próximo hito:** épica 03 (las 4 unidades presentadas en la página); luego, sitio publicado con ruta, instructor y Unidad 1 antes de la clase 1
- **Entrega comprometida:** `PENDIENTE_CLIENTE` (fecha de la clase 1)
- **Flujo de ramas vigente:** una rama por iteración (`iteracion/XX-YY-descripcion-corta`), aprobada por el desarrollador

> Cada campo del encabezado ocupa una sola línea. El detalle va en las bitácoras y el historial, no aquí.

---

## 1. Estado de épicas e iteraciones

Solo las épicas abiertas. Al cerrar una épica, sus filas pasan a `registro-archivo.md` y la épica queda resumida en la sección 2.

| Iteración | Nombre | Épica | Estado | Depende de | Bitácoras |
| :-------- | :----- | :---- | :----- | :--------- | :-------- |
| 03-01 | Sección de unidad y texto de los bloques | 03 | Pendiente | 02-06 | — |
| 03-02 | Prompts con «Copiar» y recursos externos | 03 | Pendiente | 03-01 | — |
| 03-03 | Descargas y «Profundiza» | 03 | Pendiente | 03-02 | — |
| 03-04 | Pendientes de la Unidad 1 y la Unidad 2 | 03 | Pendiente | 03-03 | — |
| 03-05 | Pendientes de la Unidad 3 y la Unidad 4 | 03 | Pendiente | 03-04 | — |

## 2. Épicas cerradas

Una fila por épica cerrada, con enlace a su bitácora de cierre.

| Épica | Nombre | Cerrada | Bitácora de cierre |
| :---- | :----- | :------ | :----------------- |
| 01 | Fundación y sistema de diseño | 2026-11-17 | [bitacora-01-cierre](../10_epicas/epica-01-fundacion/bitacoras/bitacora-01-cierre.md) |
| 02 | Portada, ruta del curso e instructor | 2026-11-17 | [bitacora-02-cierre](../10_epicas/epica-02-portada-ruta-instructor/bitacoras/bitacora-02-cierre.md) |

## 3. Backlog

Lo comprometido que falta construir, ordenado por prioridad. Un elemento asignado a una iteración muestra su número; al cerrar la iteración se actualizan su fila y las de este backlog. Los terminados se quedan al final hasta que su épica se cierra; entonces pasan a `registro-archivo.md`.

| Prioridad | Elemento | Tipo | Especificación | Iteración | Estado |
| :-------- | :------- | :--- | :------------- | :-------- | :----- |
| 11 | Sección de unidad: ficha, tabla de bloques y texto «Para la clase» de las 4 unidades con un solo componente | Funcionalidad | — | 03-01 | Pendiente |
| 12 | Prompts con «Copiar» (IDs con unidad y bloque) y recursos externos de cada unidad | Funcionalidad | — | 03-02 | Pendiente |
| 13 | Descargas con formato y peso medidos del archivo (RDA-010) y «Profundiza» plegable | Funcionalidad | — | 03-03 | Pendiente |
| 14 | Pendientes de la Unidad 1 y la Unidad 2 (descargas, videos, «Profundiza») | Funcionalidad | — | 03-04 | Pendiente |
| 15 | Pendientes de la Unidad 3 y la Unidad 4 (descargas, videos, «Profundiza») | Funcionalidad | — | 03-05 | Pendiente |
| 16 | Configuración de Cloudflare Workers y guardia de marcadores `PENDIENTE_` | Técnico | — | 04-01 | Pendiente |
| 17 | Cloudflare Web Analytics y metadatos para compartir | Funcionalidad | — | 04-02 | Pendiente |
| 18 | Verificación final de rendimiento y accesibilidad en la URL publicada | Técnico | — | 04-03 | Pendiente |

## 4. Datos pendientes del cliente

Mientras falten, se usa `PENDIENTE_CLIENTE` donde corresponda.

| Dato | Hallazgo | Necesario para | Estado |
| :--- | :------- | :------------- | :----- |
| Fechas de las 4 clases (define el hito de publicación) | — | Planificación de 03 y 04 | Pendiente |
| Redacción del respaldo de Google a la formación, si se quiere mencionar en el sitio (sin logos de Google como sello) | — | Mención futura (la 02-01 no lo menciona) | Pendiente |
| Autorización para publicar en un sitio público el kit de marca de GTD (HEX y tipografía aproximados) y el logo de GTD, que se muestra en el hero desde la 02-01 (riesgo asumido por el desarrollador) y que usan la U2, la U3 (prompt de estilo GTD) y la U4 (`gtd-visual`) | — | 02-01 y 03-02 a 03-05 (se muestra desde la 03-02 bajo responsabilidad del desarrollador; queda como riesgo) | Pendiente |
| HEX y tipografía oficiales de GTD, si se confirman antes de la clase 2 | — | 03-02 | Pendiente |

## 5. Decisiones por tomar

Decisiones del desarrollador que bloquean o condicionan trabajo. Mientras falten, se usa `PENDIENTE_DESARROLLADOR`.

| Tema | RDA o hallazgo | Responsable |
| :--- | :------------- | :---------- |
| Texto de «Profundiza en tu tiempo» de cada bloque: el documento del curso lista los temas, pero no la teoría escrita · Opcional desde 2026-11-17: «Profundiza» usa los recursos oficiales ya cargados y el texto no bloquea nada | — | Desarrollador |
| Videos oficiales de Google en YouTube para cada unidad (el documento del curso no trae enlaces a videos) · Bloquea la tarea 3 de la 03-04 y la 03-05 | — | Desarrollador |
| Archivos de descarga finales: dataset CSV, `plantillas-alumnos.zip`, informe de Deep Research de respaldo, paquete de fuentes de la U3, `optimizador-prompts/SKILL.md`, `gtd-visual.zip` con el logo (`src/assets/iconos/gtd-telsur.svg`) y plantillas de skills de la U4 · Un primer archivo real es tarea del desarrollador en la 03-03; el resto bloquea la tarea 4 de la 03-04 y la 03-05 | — | Desarrollador |
| Imagen de la insignia oficial de Gemini Certified Educator para la sección del instructor · La 02-04 se construyó sin ella; el campo `insignia` del esquema está listo para recibirla | 02-04 | Desarrollador |
| Nombres completos de las certificaciones AWS y Anthropic, si se listan · La 02-04 publica solo el texto del documento, sin detallarlas | 02-04 | Desarrollador |
| Nombre del Worker (define la URL `nombre.subdominio.workers.dev`) y token de Web Analytics | RDA-005 | Desarrollador |
| Licencia del contenido del sitio (hoy «todos los derechos reservados») | — | Desarrollador |
| Zona horaria de las fechas de la documentación (se asumió America/Santiago) | — | Desarrollador |
| Advertencias aceptadas del cargador `file`: la de `recursos.yaml` desapareció en la 02-05; la de `descargas.yaml` sigue hasta la épica 03 (primera descarga) | 02-02 · 02-05 | Desarrollador |
| `PENDIENTE_DESARROLLADOR` · Prompts de la U1 nombrados pero no escritos: el «Avanzado» completo de la escalera (bloque 4) y la ronda 3 del laboratorio (bloque 5) | 02-05 | Desarrollador |
| `PENDIENTE_DESARROLLADOR` · Prompts de la U2 nombrados pero no escritos: «Prompt base» del dashboard (bloque 5), «Prompts base de cada hito» y los carriles extra de los bloques 1 a 5 | 02-05 | Desarrollador |
| `PENDIENTE_DESARROLLADOR` · Prompts de la U3 nombrados pero no escritos: los carriles extra de los bloques 1 a 5 (instrucciones sin texto de prompt) | 02-06 | Desarrollador |
| `PENDIENTE_DESARROLLADOR` · Prompts de la U4 nombrados pero no escritos: los carriles extra de los bloques 2 a 5 (el contenido de las skills y plantillas son descargas de la épica 03) | 02-06 | Desarrollador |

## 6. Propuestas fuera de alcance

Ideas detectadas durante el trabajo que no forman parte de lo comprometido, incluidos los documentos nuevos que un agente crea necesarios (nunca se crean sin aprobación). Se registran aquí y no se implementan. Si se aprueba una, pasa al backlog con una fila de historial.

| Propuesta | Origen | Fecha |
| :-------- | :----- | :---- |
| Guardar en el navegador las casillas marcadas de «Terminado cuando…» | Planificación inicial | 2026-11-17 |
| Mostrar los logotipos de Capacita Tu Futuro y GTD en el pie, con autorización del cliente · Los logos de GTD y Capacita pasan al hero en la 02-01 (decisión del desarrollador); en el pie siguen siendo propuesta | Planificación inicial | 2026-11-17 |
| Agregar `_planificacion/00_producto/unidades-del-curso.md` a la lista de documentos permitidos (hoy vive ahí sin estar en la lista), o indicar dónde debe estar · Aprobada: propuesta P-004 | Iteración 01-04 | 2026-11-17 |

## 7. Historial

Una fila por cambio, en una sola línea, con enlace a la bitácora que tiene el detalle. Nada se borra: si un cambio queda sin efecto, se agrega una fila que lo dice. Cuando el historial pasa de 50 filas, las más antiguas se mueven a `registro-archivo.md`.

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
| 2026-11-17 | Iteración 02-05 terminada: el desarrollador comprobó el hash de dist/index.html (idéntico a HEAD); se elimina sh.exe.stackdump y se agrega *.stackdump a .gitignore. |
| 2026-11-17 | Iteración 02-06 en revisión: bloques de U3 y U4 con 16 prompts (24 de 24 iguales en las 4 unidades) y 14 recursos; hash idéntico a HEAD; cierre de la épica 02 y propuesta de la 03 por aprobar. [Bitácora](../10_epicas/epica-02-portada-ruta-instructor/bitacoras/bitacora-02-06.md) · [Cierre](../10_epicas/epica-02-portada-ruta-instructor/bitacoras/bitacora-02-cierre.md) |
| 2026-11-17 | Iteración 02-06 terminada y épica 02 cerrada (aprobada por el desarrollador); sus filas pasan a `registro-archivo.md`. Épica 03: 5 iteraciones generadas (03-01 a 03-05); backlog renumerado (los antiguos 11, 12, 15, 16 y 17 pasan a 11 a 15; Cloudflare y la verificación final, a 16 a 18). [Cierre](../10_epicas/epica-02-portada-ruta-instructor/bitacoras/bitacora-02-cierre.md) |
