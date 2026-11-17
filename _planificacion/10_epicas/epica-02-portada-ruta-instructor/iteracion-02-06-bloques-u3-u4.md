# Iteración 02-06 · Bloques y prompts de la Unidad 3 y la Unidad 4

- **Épica:** 02 · Portada, ruta del curso e instructor
- **Estado:** Terminada
- **Rama sugerida:** iteracion/02-06-bloques-u3-u4
- **Depende de:** 02-05
- **RDA relacionadas:** RDA-003, RDA-009

## Objetivo

Cargar en los archivos de bloque de la U3 y la U4 su texto «Para la clase», sus prompts literales y sus recursos externos, con las mismas reglas de la 02-05, y dejar las 4 unidades completas en las colecciones.

## Punto de partida

- La U1 y la U2 quedaron cargadas en la 02-05, con su propuesta aprobada, su lista de omisiones y su comando temporal de comparación de prompts (descrito en la bitácora 02-05).
- La U3 trae dos prompts en bloques de código (configuración del chat y estilo GTD para presentaciones); la U4 trabaja con skills cuyos archivos (`optimizador-prompts/SKILL.md`, `gtd-visual.zip`) son descargas de la épica 03.
- Entre las fuentes de la U3 hay una colección comunitaria **no oficial** con licencia por confirmar.

## Alcance y entregables

- Cuerpo Markdown de cada bloque de la U3 y la U4 («Para la clase»), incluidos «Vitrina y cierre» y «Cierre del bootcamp» según el tratamiento aprobado en la 02-02.
- `prompts` de cada bloque, con texto literal.
- Recursos oficiales de la U3 y la U4 en `recursos.yaml`, referenciados en sus fichas.
- Omisiones y prompts no escritos en la bitácora y en el registro.
- Como es la última iteración de la épica: cierre de la épica 02 y propuesta de las iteraciones de la épica 03 (`_planificacion/README.md`, sección 4.4).

## Decisiones del desarrollador

- Las mismas de la 02-05 (2026-11-17): copia literal sin reescribir, omisión de lo que es solo para el instructor, y «Profundiza», videos y descargas en la épica 03.
- 2026-11-17: la épica 03 solo presenta el contenido y completa lo pendiente; no vuelve a cargar unidades.
- 2026-11-17: los textos de la U3 para participantes que no tienen campo («Enfoque de la herramienta», «Carril alternativo», «Advertencia de contenido» —con su «no es asesoría legal», que no puede perderse— y la tabla «Pieza del kit») se cargan en el cuerpo Markdown del bloque de la U3 que corresponda, sin cambiar el modelo.

## Tareas

1. Proponer en el chat, antes de escribir: prompts de la U3 y la U4, prompts nombrados pero no escritos, omisiones por bloque y asignación de fuentes oficiales a la U3 y la U4. Para la colección comunitaria no oficial, proponer si entra como recurso (y con qué título que diga «no oficial») o si queda fuera hasta confirmar su licencia. Esperar la aprobación y anotarla en la bitácora.
2. Escribir el cuerpo de cada bloque de la U3.
3. Cargar los `prompts` de la U3.
4. Escribir el cuerpo de cada bloque de la U4.
5. Cargar los `prompts` de la U4.
6. Cargar los recursos aprobados y referenciarlos en las fichas de la U3 y la U4.
7. Repetir el comando temporal de comparación para las 4 unidades (N de N prompts iguales) y la búsqueda de `PENDIENTE_` y `VERIFICAR` en `src/content/`; registrar los prompts no escritos, ejecutar `pnpm build` y `pnpm astro check`, escribir la bitácora y actualizar el registro.
8. Cerrar la épica 02: bitácora de cierre con el criterio de término comprobado y la propuesta de iteraciones de la épica 03 (presentación del contenido ya cargado más lo pendiente: descargas, videos y «Profundiza»), y esperar la aprobación del desarrollador antes de generarlas.

## Criterios de aceptación

- [x] La propuesta de la tarea 1 está aprobada por el desarrollador y anotada en la bitácora.
- [x] Cada bloque de las 4 unidades tiene cuerpo; el de la U3 y la U4 coincide con el documento salvo las omisiones aprobadas (lista en la bitácora).
- [x] Los prompts de las 4 unidades son idénticos al documento (comando y resultado en la bitácora: N de N iguales).
- [x] Cada recurso tiene URL `https://` del documento y está referenciado por al menos una ficha; ningún recurso no oficial entra sin decir «no oficial» en su título.
- [x] Búsqueda de `PENDIENTE_` y `VERIFICAR` en `src/content/`: 0 coincidencias.
- [x] `pnpm build` y `pnpm astro check` sin errores ni advertencias nuevas; la página se ve igual que al cerrar la 02-05.
- [x] El criterio de término de la épica 02 está comprobado con evidencia en la bitácora de cierre, y la propuesta de la épica 03 está entregada sin generar archivos de iteración.

Evidencia (detalle en [bitacora-02-06](bitacoras/bitacora-02-06.md) y [bitacora-02-cierre](bitacoras/bitacora-02-cierre.md)):

- Propuesta aprobada el 2026-11-17 (4 respuestas, anotadas en la bitácora).
- 26 de 26 bloques con cuerpo; U3 + U4: 189 líneas, 188 idénticas al documento y 1 que solo pierde la frase `VERIFICAR` aprobada.
- Comando temporal en Node: 24 de 24 prompts iguales al documento (8 de U1 y U2 + 16 de U3 y U4).
- 41 recursos, 41 con `https://` presente en el documento, 0 sin referencia; el único no oficial se titula «… (no oficial)».
- `grep -rlE "PENDIENTE_|VERIFICAR" src/content dist`: 0.
- `astro check` 0/0; `pnpm build` «Complete!» solo con la advertencia aceptada de `descargas.yaml`; SHA-256 de `dist/index.html` idéntico al de `HEAD` compilado aparte (`c5bc939e…83a5ca`).
- Propuesta de la épica 03 entregada en el chat; no se generaron archivos de iteración.

## Riesgos

- El prompt de estilo GTD de la U3 lleva los HEX aproximados del kit de marca de GTD. Cargarlo en el contenido no lo publica, pero **mostrarlo** en el sitio público depende de la autorización del cliente que sigue abierta en el registro. La propuesta de la épica 03 debe decirlo.
- Ver los riesgos de la 02-05 (decisión editorial y documento que cambia).

## Fuera de alcance

- Mostrar los bloques en la página, descargas, videos y textos de «Profundiza» (épica 03).
- Prompts que el documento no escribe.

## Datos requeridos

### Del cliente

- Ninguno para cargar. La autorización del kit de marca de GTD se necesita para mostrar el contenido en la épica 03.

### Del desarrollador

- Aprobación de la propuesta de la tarea 1 y de la propuesta de la épica 03.
