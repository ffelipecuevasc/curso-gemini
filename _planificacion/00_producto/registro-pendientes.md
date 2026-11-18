# Registro de pendientes

**Backlog y fuente única de verdad del trabajo pendiente.** Si discrepa con cualquier otro documento de planificación sobre el estado del trabajo, prevalece este archivo.

- **Última actualización:** 2026-11-17
- **Iteración activa:** ninguna (siguen la corrección 15.1 y la 04-01, pendientes)
- **Próximo hito:** épica 04: sitio publicado en `workers.dev`, con Web Analytics y las metas de Lighthouse, antes de la clase 1
- **Entrega comprometida:** `PENDIENTE_CLIENTE` (fecha de la clase 1)
- **Flujo de ramas vigente:** una rama por iteración (`iteracion/XX-YY-descripcion-corta`), aprobada por el desarrollador

> Cada campo del encabezado ocupa una sola línea. El detalle va en las bitácoras y el historial, no aquí.

---

## 1. Estado de épicas e iteraciones

Solo las épicas abiertas. Al cerrar una épica, sus filas pasan a `registro-archivo.md` y la épica queda resumida en la sección 2.

| Iteración | Nombre | Épica | Estado | Depende de | Bitácoras |
| :-------- | :----- | :---- | :----- | :--------- | :-------- |
| 04-01 | [Guardia de marcadores y limpieza de la compilación](../10_epicas/epica-04-publicacion-calidad/iteracion-04-01-guardia-marcadores.md) | 04 | Pendiente | 03-05, corrección 15.1 | — |
| 04-02 | [Configuración de Cloudflare Workers](../10_epicas/epica-04-publicacion-calidad/iteracion-04-02-cloudflare-workers.md) | 04 | Pendiente | 04-01 | — |
| 04-03 | [Web Analytics y metadatos para compartir](../10_epicas/epica-04-publicacion-calidad/iteracion-04-03-analytics-metadatos.md) | 04 | Pendiente | 04-02 | — |
| 04-04 | [Rendimiento, accesibilidad y verificación final](../10_epicas/epica-04-publicacion-calidad/iteracion-04-04-verificacion-final.md) | 04 | Pendiente | 04-03 | — |

## 2. Épicas cerradas

Una fila por épica cerrada, con enlace a su bitácora de cierre.

| Épica | Nombre | Cerrada | Bitácora de cierre |
| :---- | :----- | :------ | :----------------- |
| 01 | Fundación y sistema de diseño | 2026-11-17 | [bitacora-01-cierre](../10_epicas/epica-01-fundacion/bitacoras/bitacora-01-cierre.md) |
| 02 | Portada, ruta del curso e instructor | 2026-11-17 | [bitacora-02-cierre](../10_epicas/epica-02-portada-ruta-instructor/bitacoras/bitacora-02-cierre.md) |
| 03 | Unidades del curso | 2026-11-17 | [bitacora-03-cierre](../10_epicas/epica-03-unidades/bitacoras/bitacora-03-cierre.md) |

## 3. Backlog

Lo comprometido que falta construir, ordenado por prioridad. Un elemento asignado a una iteración muestra su número; al cerrar la iteración se actualizan su fila y las de este backlog. Los terminados se quedan al final hasta que su épica se cierra; entonces pasan a `registro-archivo.md`.

| Prioridad | Elemento | Tipo | Especificación | Iteración | Estado |
| :-------- | :------- | :--- | :------------- | :-------- | :----- |
| 15.1 | Plantillas con el mismo nombre al descargar: ruta visible en la tarjeta (por ejemplo «analista-planillas/SKILL.md») y texto en la ficha de la U4 para guardar cada plantilla en su carpeta (texto aprobado por el desarrollador, campo opcional `notaDescargas` de la ficha) · Rama `correccion/plantillas-descargas`, antes de la 04-01 | Corrección | — | — | En revisión |
| 16 | Guardia de marcadores `PENDIENTE_` y `VERIFICAR` en `pnpm build` y limpieza de los SVG sin referencia en `dist/_astro/` | Técnico | — | 04-01 | Pendiente |
| 16 | Configuración de Cloudflare Workers (`wrangler.jsonc`) y primera publicación por el desarrollador | Técnico | — | 04-02 | Pendiente |
| 17 | Cloudflare Web Analytics, metadatos para compartir, ícono, `robots.txt`, página 404 y licencia del contenido | Funcionalidad | — | 04-03 | Pendiente |
| 18 | Verificación final de rendimiento y accesibilidad en local y en la URL publicada | Técnico | — | 04-04 | Pendiente |

## 4. Datos pendientes del cliente

Mientras falten, se usa `PENDIENTE_CLIENTE` donde corresponda.

| Dato | Hallazgo | Necesario para | Estado |
| :--- | :------- | :------------- | :----- |
| Fechas de las 4 clases (define el hito de publicación) | — | Hito de la épica 04 (04-04) | Pendiente |
| Redacción del respaldo de Google a la formación, si se quiere mencionar en el sitio (sin logos de Google como sello) | — | Mención futura (la 02-01 no lo menciona) | Pendiente |
| Autorización para publicar en un sitio público el kit de marca de GTD (HEX y tipografía aproximados) y el logo de GTD, que se muestra en el hero desde la 02-01 (riesgo asumido por el desarrollador) y que usan la U2, la U3 (prompt de estilo GTD) y la U4 (`gtd-visual`) | — | 02-01 y 03-02 a 03-05 (se muestra desde la 03-02 bajo responsabilidad del desarrollador; queda como riesgo) | Pendiente |
| HEX y tipografía oficiales de GTD, si se confirman antes de la clase 2 | — | 03-02 | Pendiente |

## 5. Decisiones por tomar

Decisiones del desarrollador que bloquean o condicionan trabajo. Mientras falten, se usa `PENDIENTE_DESARROLLADOR`.

| Tema | RDA o hallazgo | Responsable |
| :--- | :------------- | :---------- |
| Texto de «Profundiza en tu tiempo» de cada bloque: el documento del curso lista los temas, pero no la teoría escrita · Opcional desde 2026-11-17: «Profundiza» usa los recursos oficiales ya cargados y el texto no bloquea nada | — | Desarrollador |
| Videos oficiales de Google en YouTube para cada unidad (el documento del curso no trae enlaces a videos) · U1: 5 videos cargados en la 03-04; U2: sin videos (ausencia acordada); U3: 1 video cargado en la 03-05; U4: sin videos (ausencia acordada) | — | Desarrollador |
| Archivos de descarga finales: dataset CSV, `plantillas-alumnos.zip`, informe de Deep Research de respaldo, paquete de fuentes de la U3, `optimizador-prompts/SKILL.md`, `gtd-visual.zip` con el logo (`src/assets/iconos/gtd-telsur.svg`) y plantillas de skills de la U4 · Publicados el dataset CSV (03-03) y su diccionario editado para participantes (03-04); de la U1 y la U2, el resto (`plantillas-alumnos.zip`, informe de Deep Research de respaldo) queda como ausencia acordada en la 03-04; en la 03-05 se publican las 4 plantillas de `plantillas-alumnos/` (U4) y quedan como ausencia acordada `optimizador-prompts/SKILL.md`, `gtd-visual.zip` y el paquete de fuentes de la U3 | — | Desarrollador |
| Imagen de la insignia oficial de Gemini Certified Educator para la sección del instructor · La 02-04 se construyó sin ella; el campo `insignia` del esquema está listo para recibirla | 02-04 | Desarrollador |
| Nombres completos de las certificaciones AWS y Anthropic, si se listan · La 02-04 publica solo el texto del documento, sin detallarlas | 02-04 | Desarrollador |
| Nombre del Worker (define la URL `nombre.subdominio.workers.dev`), para la 04-02, y token de Web Analytics, para la 04-03 | RDA-005 | Desarrollador |
| Cómo ejecutar Wrangler sin `npx`: dependencia de desarrollo con RDA nueva o `pnpm dlx` (se propone en la 04-02) | RDA-002 | Desarrollador |
| Licencia del contenido del sitio (hoy «todos los derechos reservados»), para la 04-03 | — | Desarrollador |
| Zona horaria de las fechas de la documentación (se asumió America/Santiago) | — | Desarrollador |
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
| 2026-11-17 | Iteración 03-01 en revisión: las 4 unidades muestran su ficha, la tabla de bloques y el texto de los 26 bloques con `render()`; h2 desde las fichas (4 de 4); 0 B de JS nuevo; se corrigen criterios de la 03-01, la línea base de la 03-02 y la 03-05; P-007 pendiente; falta revisión en navegador. [Bitácora](../10_epicas/epica-03-unidades/bitacoras/bitacora-03-01.md) |
| 2026-11-17 | Iteración 03-01 terminada: el desarrollador revisó en el navegador 360 px y el teclado en las tablas, sin observaciones. |
| 2026-11-17 | Iteración 03-02 en revisión: 24 prompts con «Copiar» (24 de 24 idénticos, IDs únicos), marcador de `identidad-visual-gtd` en U2 · 3 y 41 recursos por unidad; JS +198 B gzip (4 etiquetas); falta revisión en navegador. [Bitácora](../10_epicas/epica-03-unidades/bitacoras/bitacora-03-02.md) |
| 2026-11-17 | Iteración 03-02 terminada: el desarrollador probó en el navegador el copiado con teclado, el botón sin JavaScript y 360 px en ambos modos, sin observaciones. |
| 2026-11-17 | Iteración 03-03 en revisión: RDA-010 (formato y peso medidos del archivo), tarjeta del dataset CSV en la U2 (25,4 KB = statSync), «Profundiza» con `<details>` y validación de sus recursos; desaparece la última advertencia del build; 0 B de JS nuevo. [Bitácora](../10_epicas/epica-03-unidades/bitacoras/bitacora-03-03.md) |
| 2026-11-17 | Iteración 03-03 terminada: el desarrollador probó en el navegador la descarga, «Profundiza» con teclado y 360 px, sin observaciones; ratificó `src/lib/node-minimo.d.ts` (RDA-010). |
| 2026-11-17 | Iteración 03-04 en revisión: «Profundiza» en 9 bloques de U1 y U2 (40 enlaces), 5 videos de la U1, diccionario del dataset publicado sin los patrones del instructor; U2 sin videos (ausencia acordada); 0 B de JS nuevo. [Bitácora](../10_epicas/epica-03-unidades/bitacoras/bitacora-03-04.md) |
| 2026-11-17 | Iteración 03-04 terminada: el desarrollador probó en el navegador videos, descargas y 360 px, sin observaciones; ratificó el recorte del diccionario. |
| 2026-11-17 | P-007 aplicada por el desarrollador en `AGENTS.md` (commit bc70739), ampliada a los `SKILL.md` de `plantillas-alumnos/`; sale de «Decisiones por tomar». |
| 2026-11-17 | Iteración 03-05 en revisión: «Profundiza» en 7 bloques de U3 y U4 (16 en la página), 1 video de la U3 y las 4 plantillas `SKILL.md` de la U4 con la regex de la P-007; cierre de la épica 03 y propuesta de la 04 por aprobar. [Bitácora](../10_epicas/epica-03-unidades/bitacoras/bitacora-03-05.md) · [Cierre](../10_epicas/epica-03-unidades/bitacoras/bitacora-03-cierre.md) |
| 2026-11-17 | Iteración 03-05 terminada y épica 03 cerrada (prueba en navegador dicha por el desarrollador); sus filas pasan a `registro-archivo.md`. Épica 04: 4 iteraciones generadas (04-01 a 04-04) y corrección 15.1 registrada. [Cierre](../10_epicas/epica-03-unidades/bitacoras/bitacora-03-cierre.md) |
| 2026-11-17 | Corrección 15.1 en revisión: las 4 plantillas muestran su ruta («analista-planillas/SKILL.md» y otras 3; las 2 tarjetas del dataset no cambian; pesos = `statSync`) y la U4 lleva la nota aprobada (campo `notaDescargas`, contraste 18,90:1 en ambos modos); build con 0 WARN, check sin errores, 24 de 24 prompts, 4 scripts, JS idéntico, 1 h1, 0 marcadores; falta revisión en navegador. |
