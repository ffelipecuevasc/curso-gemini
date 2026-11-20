# Registro de pendientes

**Backlog y fuente única de verdad del trabajo pendiente.** Si discrepa con cualquier otro documento de planificación sobre el estado del trabajo, prevalece este archivo.

- **Última actualización:** 2026-11-19
- **Iteración activa:** 05-05 · La unidad en una pantalla (en revisión)
- **Próximo hito:** épica 05: rediseño visual y síntesis, con Rendimiento publicado ≥ 95 (05-08)
- **Entrega comprometida:** `PENDIENTE_CLIENTE` (fecha de la clase 1)
- **Flujo de ramas vigente:** una rama por iteración (`iteracion/XX-YY-descripcion-corta`), aprobada por el desarrollador; publicación continua desde `main` con Workers Builds en `https://curso-gemini.felipe-cuevas.workers.dev/`

> Cada campo del encabezado ocupa una sola línea. El detalle va en las bitácoras y el historial, no aquí.

---

## 1. Estado de épicas e iteraciones

Solo las épicas abiertas. Al cerrar una épica, sus filas pasan a `registro-archivo.md` y la épica queda resumida en la sección 2.

| Iteración | Nombre | Épica | Estado | Depende de | Bitácoras |
| :-------- | :----- | :---- | :----- | :--------- | :-------- |
| 05-01 | [Afordancias y estados de interacción](../10_epicas/epica-05-rediseno-sintesis/iteracion-05-01-afordancias-estados.md) | 05 | Terminada | cierre de la épica 04, P-009 | [bitacora-05-01](../10_epicas/epica-05-rediseno-sintesis/bitacoras/bitacora-05-01.md) |
| 05-02 | [Modelo de síntesis y síntesis de U1 y U2](../10_epicas/epica-05-rediseno-sintesis/iteracion-05-02-sintesis-u1-u2.md) | 05 | Terminada | 05-01, RDA-012 | [bitacora-05-02](../10_epicas/epica-05-rediseno-sintesis/bitacoras/bitacora-05-02.md) |
| 05-03 | [Síntesis de U3 y U4](../10_epicas/epica-05-rediseno-sintesis/iteracion-05-03-sintesis-u3-u4.md) | 05 | Terminada | 05-02 | [bitacora-05-03](../10_epicas/epica-05-rediseno-sintesis/bitacoras/bitacora-05-03.md) |
| 05-04 | [Sistema de modales](../10_epicas/epica-05-rediseno-sintesis/iteracion-05-04-modales.md) | 05 | Terminada | 05-03 | [bitacora-05-04](../10_epicas/epica-05-rediseno-sintesis/bitacoras/bitacora-05-04.md) |
| 05-05 | [La unidad en una pantalla](../10_epicas/epica-05-rediseno-sintesis/iteracion-05-05-unidad-una-pantalla.md) | 05 | En revisión | 05-04 | [bitacora-05-05](../10_epicas/epica-05-rediseno-sintesis/bitacoras/bitacora-05-05.md) |
| 05-06 | [Portada y ruta en un pantallazo](../10_epicas/epica-05-rediseno-sintesis/iteracion-05-06-portada-ruta.md) | 05 | Pendiente | 05-01, P-009 | — |
| 05-07 | [Capa de efectos con propósito](../10_epicas/epica-05-rediseno-sintesis/iteracion-05-07-efectos.md) | 05 | Pendiente | 05-05, 05-06 | — |
| 05-08 | [Pulido y verificación final del rediseño](../10_epicas/epica-05-rediseno-sintesis/iteracion-05-08-verificacion.md) | 05 | Pendiente | 05-07 | — |

## 2. Épicas cerradas

Una fila por épica cerrada, con enlace a su bitácora de cierre.

| Épica | Nombre | Cerrada | Bitácora de cierre |
| :---- | :----- | :------ | :----------------- |
| 01 | Fundación y sistema de diseño | 2026-11-17 | [bitacora-01-cierre](../10_epicas/epica-01-fundacion/bitacoras/bitacora-01-cierre.md) |
| 02 | Portada, ruta del curso e instructor | 2026-11-17 | [bitacora-02-cierre](../10_epicas/epica-02-portada-ruta-instructor/bitacoras/bitacora-02-cierre.md) |
| 03 | Unidades del curso | 2026-11-17 | [bitacora-03-cierre](../10_epicas/epica-03-unidades/bitacoras/bitacora-03-cierre.md) |
| 04 | Publicación, medición y calidad | 2026-11-18 | [bitacora-04-cierre](../10_epicas/epica-04-publicacion-calidad/bitacoras/bitacora-04-cierre.md) |

## 3. Backlog

Lo comprometido que falta construir, ordenado por prioridad. Un elemento asignado a una iteración muestra su número; al cerrar la iteración se actualizan su fila y las de este backlog. Los terminados se quedan al final hasta que su épica se cierra; entonces pasan a `registro-archivo.md`.

| Prioridad | Elemento | Tipo | Especificación | Iteración | Estado |
| :-------- | :------- | :--- | :------------- | :-------- | :----- |
| 18.1 | Ajustes documentales de la épica 05 antes de abrir la 05-01: INP informativo (referencia: TBT) en definición, 05-07 y 05-08, y propuesta P-012 (`AGENTS.md`); P-009 antes de la 05-01; P-011 y cuerpo del bloque solo en el modal «Ver detalle» (página temporalmente austera con JS hasta la 05-05) en la 05-04; riesgo de no medir Lighthouse al cerrar la 05-05 en la 05-08 · Rama `correccion/epica-05-ajustes-documentales` | Corrección | — | — | Terminada |
| 18.2 | Cierre documental de P-009 a P-012 y RDA-011 aceptada · Rama `correccion/epica-05-cierre-propuestas` | Corrección | — | — | Terminada |
| 18.3 | Corrección documental previa a la 05-04: cierre de la 05-03, P-013 aplicada, menciones obsoletas de RDA-011 y RDA-012 y tareas ya cumplidas de la 05-04, y decisión del estado intermedio austero · Rama `correccion/epica-05-previa-05-04` | Corrección | — | — | Terminada |
| 19 | Estados de interacción visibles: `cursor: pointer`, hover con contraste perceptible, botón de modo con su acción visible | Corrección | — | 05-01 | Terminada |
| 20 | Síntesis por bloque y por unidad con límites de palabras (RDA-012) y síntesis aprobada de U1 y U2; retiro del material de conducción de la clase | Funcionalidad | — | 05-02 | Terminada |
| 21 | Síntesis aprobada de U3 y U4 y campos de síntesis obligatorios | Funcionalidad | — | 05-03 | Terminada |
| 22 | Modales sobre `<dialog>` nativo para prompts, detalle, recursos y descargas (RDA-011) | Funcionalidad | — | 05-04 | Terminada |
| 23 | Sección de unidad en una pantalla de escritorio con tarjetas de bloque | Funcionalidad | — | 05-05 | En revisión |
| 24 | Portada y ruta en el primer pantallazo e instructor compacto | Funcionalidad | — | 05-06 | Pendiente |
| 25 | Efectos con propósito: sombras teñidas, transición de tarjeta a modal, barra de avance, aparición escalonada y brillo | Funcionalidad | — | 05-07 | Pendiente |
| 26 | Verificación final del rediseño en local y en la URL publicada, comparada con la 04-04 | Técnico | — | 05-08 | Pendiente |

## 4. Datos pendientes del cliente

Mientras falten, se usa `PENDIENTE_CLIENTE` donde corresponda.

| Dato | Hallazgo | Necesario para | Estado |
| :--- | :------- | :------------- | :----- |
| Fechas de las 4 clases (define el hito de publicación) | — | Hito de publicación y entrega comprometida (pasa de la épica 04 a la 05) | Pendiente |
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
| Zona horaria de las fechas de la documentación (se asumió America/Santiago) | — | Desarrollador |
| `PENDIENTE_DESARROLLADOR` · Prompts de la U1 nombrados pero no escritos: el «Avanzado» completo de la escalera (bloque 4) y la ronda 3 del laboratorio (bloque 5) | 02-05 | Desarrollador |
| `PENDIENTE_DESARROLLADOR` · Prompts de la U2 nombrados pero no escritos: «Prompt base» del dashboard (bloque 5), «Prompts base de cada hito» y los carriles extra de los bloques 1 a 5 | 02-05 | Desarrollador |
| `PENDIENTE_DESARROLLADOR` · Prompts de la U3 nombrados pero no escritos: los carriles extra de los bloques 1 a 5 (instrucciones sin texto de prompt) | 02-06 | Desarrollador |
| `PENDIENTE_DESARROLLADOR` · Prompts de la U4 nombrados pero no escritos: los carriles extra de los bloques 2 a 5 (el contenido de las skills y plantillas son descargas de la épica 03) | 02-06 | Desarrollador |
| Rendimiento publicado ≥ 95 en la épica 05 (05-08): la épica 04 cerró con 87 como excepción aceptada (línea base en la bitácora de cierre) | [bitacora-04-cierre](../10_epicas/epica-04-publicacion-calidad/bitacoras/bitacora-04-cierre.md) | Desarrollador |
| Aplicar la propuesta P-014 (`DESIGN.md`, secciones 5 y 5.1: variante «Terminado cuando…» del modal, sexta tarjeta con modal y botón sobre el color de la unidad) | P-014 | Desarrollador |
| Qué hacer con el alto de la unidad (no cabe en una pantalla según el agente) y con las 6 palabras de más de la U1, tras medir en el navegador (ver opciones en la bitácora 05-05) | [bitacora-05-05](../10_epicas/epica-05-rediseno-sintesis/bitacoras/bitacora-05-05.md) | Desarrollador |

## 6. Propuestas fuera de alcance

Ideas detectadas durante el trabajo que no forman parte de lo comprometido, incluidos los documentos nuevos que un agente crea necesarios (nunca se crean sin aprobación). Se registran aquí y no se implementan. Si se aprueba una, pasa al backlog con una fila de historial.

| Propuesta | Origen | Fecha |
| :-------- | :----- | :---- |
| Guardar en el navegador las casillas marcadas de «Terminado cuando…» | Planificación inicial | 2026-11-17 |
| Mostrar los logotipos de Capacita Tu Futuro y GTD en el pie, con autorización del cliente · Los logos de GTD y Capacita pasan al hero en la 02-01 (decisión del desarrollador); en el pie siguen siendo propuesta | Planificación inicial | 2026-11-17 |
| Agregar `_planificacion/00_producto/unidades-del-curso.md` a la lista de documentos permitidos (hoy vive ahí sin estar en la lista), o indicar dónde debe estar · Aprobada: propuesta P-004 | Iteración 01-04 | 2026-11-17 |
| Preview Builds de Workers Builds para las ramas · Bloqueadas: Cloudflare exige que el comando de vista previa llame a `npx`, y el proyecto usa solo PNPM | Iteración 04-02 | 2026-11-18 |

## 7. Historial

Una fila por cambio, en una sola línea, con enlace a la bitácora que tiene el detalle. Nada se borra: si un cambio queda sin efecto, se agrega una fila que lo dice. Cuando el historial pasa de 50 filas, las más antiguas se mueven a `registro-archivo.md`.

| Fecha | Cambio |
| :---- | :----- |
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
| 2026-11-17 | Corrección 15.1 terminada (dicho por el desarrollador; commit 6a31229 en `main`). Decisiones de la épica 04: Wrangler con `pnpm dlx` y versión fija, 04-03 sin canónica ni Open Graph, prioridades 16 (04-01) y 16.1 (04-02). |
| 2026-11-17 | Iteración 04-01 en revisión: guardia de marcadores en todos los archivos de texto de `dist/` (4 de 4 pruebas fallan, `cmp` 0) y limpieza de los 6 SVG sin referencia (41 030 B) tras `astro build`; hash de `index.html` idéntico; P-008 pendiente. [Bitácora](../10_epicas/epica-04-publicacion-calidad/bitacoras/bitacora-04-01.md) |
| 2026-11-18 | Iteración 04-01 terminada: el desarrollador revisó 360 px en el navegador sin observaciones. P-008 aplicada por el desarrollador en `AGENTS.md` (commit 6f5ff74); sale de «Decisiones por tomar». |
| 2026-11-18 | Iteración 04-02 en revisión: `wrangler.jsonc` del Worker `curso-gemini` (solo `dist/`), `pnpm dlx wrangler@4.164.0` y `deploy --dry-run` con código 0, 0 secretos, hash idéntico; salen la versión de Wrangler y el nombre del Worker; falta el primer despliegue del desarrollador. [Bitácora](../10_epicas/epica-04-publicacion-calidad/bitacoras/bitacora-04-02.md) |
| 2026-11-18 | Iteración 04-02 terminada: el desarrollador dijo que el Worker está publicado en `https://curso-gemini.felipe-cuevas.workers.dev/`; `curl` dio 200 y 1 `h1`. |
| 2026-11-18 | Iteración 04-03 en revisión: beacon de Web Analytics con `defer` (único recurso externo), 404 con `not_found_handling`, `robots.txt` y la licencia «Todos los derechos reservados.» en el pie; salen el token y la licencia de las decisiones; el ícono queda detenido. [Bitácora](../10_epicas/epica-04-publicacion-calidad/bitacoras/bitacora-04-03.md) |
| 2026-11-18 | Iteración 04-03: ícono del sitio con el glifo `school-outline` de Material Symbols Light (Apache-2.0) en blanco sobre `#007EA7`, enlazado 1 vez en `index.html` y `404.html`; sale la decisión del ícono; sigue en revisión. [Bitácora](../10_epicas/epica-04-publicacion-calidad/bitacoras/bitacora-04-03.md) |
| 2026-11-18 | Iteración 04-03 terminada: el desarrollador revisó 360 px y ambos modos, la 404 en producción y las visitas en Web Analytics. |
| 2026-11-18 | Iteración 04-04 en revisión: Lighthouse 13.6.0 móvil (mediana de 3): local 98/98/96/100, sin Web Analytics 96/98/100/100, publicada 94/98/100/100; 2 ajustes propuestos a la espera de decisión; faltan el cierre de la épica 04 y las fechas de las clases del cliente. [Bitácora](../10_epicas/epica-04-publicacion-calidad/bitacoras/bitacora-04-04.md) |
| 2026-11-18 | Iteración 04-04: ajustes aprobados por el desarrollador. Títulos de las fichas en `h3`: 0 saltos y Accesibilidad local 100 (98/100/96/100). `content-visibility` aplicado, medido (93/92/96/100, TBT 302 ms) y revertido con `cmp`. Sigue en revisión hasta medir la URL publicada. [Bitácora](../10_epicas/epica-04-publicacion-calidad/bitacoras/bitacora-04-04.md) |
| 2026-11-18 | Iteración 04-04: URL publicada medida después del merge (`main` e120465): 87/100/100/100, con LCP 1,58 s, CLS 0 y TBT 496 ms. Rendimiento sigue bajo 95 y espera decisión. [Bitácora](../10_epicas/epica-04-publicacion-calidad/bitacoras/bitacora-04-04.md) |
| 2026-11-18 | Épica 05 (rediseño visual y síntesis) planificada a pedido del desarrollador antes del cierre de la 04: definición, 8 iteraciones (05-01 a 05-08), RDA-011 y RDA-012 propuestas y propuestas P-009 a P-011; backlog 19 a 26. No se empieza hasta cerrar la épica 04. [Definición](../10_epicas/epica-05-rediseno-sintesis/definicion-epica-05.md) |
| 2026-11-18 | Reconciliación del registro: se restauran desde d947746 los estados de la 04-02 a la 04-04, el backlog 16.1 a 18 y 7 filas de historial que fd81fc4 había pisado; se conserva lo de la épica 05. |
| 2026-11-18 | Iteración 04-04 terminada y épica 04 cerrada con una excepción aceptada por el desarrollador: Rendimiento publicado 87 (meta 95), que se atiende en la 05-08; sus filas pasan a `registro-archivo.md` y las 4 filas más antiguas del historial también. [Cierre](../10_epicas/epica-04-publicacion-calidad/bitacoras/bitacora-04-cierre.md) |
| 2026-11-19 | Corrección 18.1 en revisión: ajustes documentales de la épica 05 (INP informativo con referencia TBT en definición, 05-07 y 05-08; P-009 antes de 05-01; P-011 y cuerpo solo en modal en 05-04; riesgo de no medir Lighthouse al cerrar la 05-05 en la 05-08); sale el ajuste INP de «Decisiones por tomar». [Bitácora](../10_epicas/epica-05-rediseno-sintesis/bitacoras/bitacora-05-00-correccion-documental.md) |
| 2026-11-19 | Corrección 18.1 (segunda pasada): cierra hallazgos en definición, 05-01, 05-04, 05-08 (sin Lighthouse al cerrar la 05-05; se mantienen las lecturas locales de 05-06 y 05-07) y P-009, y registra la propuesta P-012 (`AGENTS.md`, regla 5). [Bitácora](../10_epicas/epica-05-rediseno-sintesis/bitacoras/bitacora-05-00-correccion-documental.md) |
| 2026-11-19 | Corrección 18.1 (tercera pasada): incluye la 05-01 en las iteraciones que contradicen `DESIGN.md` sin la P-009 (`propuestas-documentos-protegidos.md`, sección P-009) y verifica con `grep` que no quedan restos de «antes de la 05-04», «INP < 200» ni «sin medición temprana». [Bitácora](../10_epicas/epica-05-rediseno-sintesis/bitacoras/bitacora-05-00-correccion-documental.md) |
| 2026-11-19 | Corrección 18.2 en revisión: cierre documental tras aplicar P-009 a P-012 (salen de «Decisiones por tomar» y se alinea la primera viñeta del punto 8 de la P-009 con `DESIGN.md`) y RDA-011 aceptada en `decisiones.md`. [Bitácora](../10_epicas/epica-05-rediseno-sintesis/bitacoras/bitacora-05-00-correccion-documental.md) |
| 2026-11-19 | Iteración 05-01 en revisión: tokens `--color-hover-suave` y `--color-presionado`, regla base de `cursor: pointer`, estados de botones (principal, secundario e ícono), botón de modo sin `aria-pressed` con nombre accesible sincronizado, globo CSS y giro de 20°, tarjetas de la ruta con `-translate-y-1`, JS +68 B gzip y propuesta P-013 pendiente. [Bitácora](../10_epicas/epica-05-rediseno-sintesis/bitacoras/bitacora-05-01.md) |
| 2026-11-19 | Iteración 05-01 terminada: el desarrollador confirmó en `pnpm preview` (360 px, 1024 px y escritorio, ambos modos, mouse y teclado) los estados, el globo del botón de modo y el revelado circular; correcciones 18.1 y 18.2 terminadas en `main`; P-013 queda para antes de la 05-04. [Bitácora](../10_epicas/epica-05-rediseno-sintesis/bitacoras/bitacora-05-01.md) |
| 2026-11-19 | Iteración 05-02 en revisión: RDA-012 aceptada, validador `maxPalabras` y campos opcionales `sintesis`, `prompt.descripcion` y `unidad.objetivoBreve` en el esquema, síntesis aprobada cargada en los 12 bloques y 2 fichas de U1 y U2, retiro del material de conducción (M-01 a M-17) y título «Cierre» en U2; 0 B de JS nuevo; se archivan las 8 filas más antiguas del historial. [Bitácora](../10_epicas/epica-05-rediseno-sintesis/bitacoras/bitacora-05-02.md) |
| 2026-11-19 | Iteración 05-02 terminada, aprobada por el desarrollador en `main` (`9eef372`); la fila más antigua del historial pasa a `registro-archivo.md`. [Bitácora](../10_epicas/epica-05-rediseno-sintesis/bitacoras/bitacora-05-02.md) |
| 2026-11-19 | Iteración 05-03 en revisión: síntesis aprobada cargada en los 14 bloques, 16 prompts y 2 fichas de U3 y U4, retiro del material de conducción (M-01 a M-20, incluidos «Vitrina» en U3 y «Demo Day» en U4) y campos `sintesis`, `objetivoBreve` y `prompt.descripcion` obligatorios en el esquema; sale de «Decisiones por tomar» la aprobación de síntesis; 0 B de JS nuevo; la fila más antigua del historial pasa a `registro-archivo.md`. [Bitácora](../10_epicas/epica-05-rediseno-sintesis/bitacoras/bitacora-05-03.md) |
| 2026-11-19 | Corrección 18.3 en revisión: 05-03 terminada (aprobada por el desarrollador en `main`, `c3fe114`), P-013 aplicada (comprobada con `grep` en `DESIGN.md`) y fuera de «Decisiones por tomar», retiro de «(propuesta)» de RDA-011 y RDA-012 y de las tareas ya cumplidas de la 05-04, 05-05 y 05-07, y decisión de publicar el estado intermedio austero entre la 05-04 y la 05-05; la fila más antigua del historial pasa a `registro-archivo.md`. [Bitácora](../10_epicas/epica-05-rediseno-sintesis/bitacoras/bitacora-05-00-correccion-previa-05-04.md) |
| 2026-11-19 | Iteración 05-04 en revisión: `Modal.astro` y `modal.ts` (+176 B gzip de JS, 1295 B en total), 45 `<dialog>` (26 detalle, 13 prompts, 4 recursos y 2 descargas) con 0 `id` repetidos y 24 de 24 prompts idénticos, «Copiar» con descripción e ícono, respaldo sin JavaScript (`data-sin-dialogo`) y HTML de 255 659 B a 327 567 B; falta la prueba en navegador; la fila más antigua del historial pasa a `registro-archivo.md`. [Bitácora](../10_epicas/epica-05-rediseno-sintesis/bitacoras/bitacora-05-04.md) |
| 2026-11-19 | Iteración 05-04 terminada (`ff80db4` en `main`) y corrección 18.3 terminada: el desarrollador probó los modales en el navegador sin observaciones (dicho por él, no verificado por el agente); la fila más antigua del historial pasa a `registro-archivo.md`. [Bitácora](../10_epicas/epica-05-rediseno-sintesis/bitacoras/bitacora-05-04.md) |
| 2026-11-20 | Iteración 05-05 en revisión: cabecera, 6 tarjetas y 53 modales (con «Sobre la unidad» y «Terminado cuando…»), `Modal.astro` sin botón, `BotonModal.astro`, `ModalesBloque.astro` y `--alto-encabezado` de 77 px; 0 B de JS nuevo y HTML +11 KB; **no cabe en una pantalla** (986 a 1090 px contra 823 en 1440 × 900) y la U1 pasa de 300 palabras (306), según el agente; P-014 pendiente; falta la medición del desarrollador; la fila más antigua del historial pasa a `registro-archivo.md`. [Bitácora](../10_epicas/epica-05-rediseno-sintesis/bitacoras/bitacora-05-05.md) |
