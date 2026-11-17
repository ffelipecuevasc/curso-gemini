# Iteración 02-05 · Bloques y prompts de la Unidad 1 y la Unidad 2

- **Épica:** 02 · Portada, ruta del curso e instructor
- **Estado:** Terminada
- **Rama sugerida:** iteracion/02-05-bloques-u1-u2
- **Depende de:** 02-04
- **RDA relacionadas:** RDA-003, RDA-009

## Objetivo

Cargar en los archivos de bloque de la U1 y la U2 su texto «Para la clase», sus prompts literales y los recursos externos de ambas unidades, para que la épica 03 solo tenga que presentarlos.

## Punto de partida

- Los archivos de bloque de las 4 unidades existen con sus datos y el cuerpo vacío (02-02). `recursos.yaml` y `descargas.yaml` están vacíos.
- En `unidades-del-curso.md`, la U1 trae su prompt maestro en un bloque de código; el resto de los prompts aparecen entre comillas latinas dentro de la práctica («pedir: «…»»). Algunos se nombran pero no se escriben (por ejemplo, «Prompt base (en el LMS)» del dashboard de la U2).
- Las «Fuentes oficiales» del final del documento están agrupadas por tema, con la unidad entre paréntesis en algunos títulos.

## Alcance y entregables

- Cuerpo Markdown de cada bloque de la U1 y la U2 («Para la clase»).
- `prompts` de cada bloque, con texto literal.
- `recursos.yaml` con los recursos oficiales que corresponden a la U1 y la U2, y su referencia en `recursos` de cada ficha.
- Lista de omisiones (texto solo para el instructor) y de prompts nombrados pero no escritos, en la bitácora y en el registro.

## Decisiones del desarrollador

- 2026-11-17: se copia literal lo que es para participantes y se omite lo que es solo para el instructor, sin reescribir. Se omiten, entre otros: «Si te atrasas…», indicaciones del tipo «El instructor destaca…», «clínica en vivo con un voluntario», las secciones «Materiales que deben estar en el LMS antes de la clase» y «Pendientes y verificaciones», y los marcadores `VERIFICAR` y `PENDIENTE_*` con la frase que los acompaña.
- 2026-11-17: «Profundiza en tu tiempo», videos y descargas se completan en la épica 03. Aquí no se cargan textos de «Profundiza»; la lista de temas «Profundiza en el LMS» de cada unidad se deja anotada en la bitácora para la épica 03.

## Tareas

1. Proponer en el chat, antes de escribir: la lista de prompts de la U1 y la U2 (bloque, título breve tomado del propio documento y texto), la lista de prompts nombrados pero no escritos, la lista de omisiones por bloque y la asignación de cada fuente oficial a la U1, la U2 o ambas (`tipo`, `titulo`, `sitio` y `url` de cada recurso). Esperar la aprobación y anotarla en la bitácora.
2. Escribir el cuerpo de cada bloque de la U1 con el texto literal aprobado (Markdown: negritas, listas y tablas como en el documento).
3. Cargar los `prompts` de la U1.
4. Escribir el cuerpo de cada bloque de la U2.
5. Cargar los `prompts` de la U2.
6. Cargar los recursos aprobados en `recursos.yaml` y referenciarlos en las fichas de la U1 y la U2.
7. Comprobar con un comando temporal (que no se guarda en el repositorio) que el texto de cada prompt es idéntico al del documento, y que ningún archivo de `src/content/` contiene `PENDIENTE_` ni `VERIFICAR`.
8. Registrar los prompts no escritos como `PENDIENTE_DESARROLLADOR` en «Decisiones por tomar» (una fila por unidad), ejecutar `pnpm build` y `pnpm astro check`, escribir la bitácora y actualizar el registro.

## Criterios de aceptación

- [x] La propuesta de la tarea 1 está aprobada por el desarrollador y anotada en la bitácora.
- [x] Cada bloque de la U1 y la U2 tiene cuerpo, y su texto coincide con el documento salvo las omisiones aprobadas (lista de omisiones por bloque en la bitácora).
- [x] Cada prompt cargado es idéntico al texto del documento (comando y resultado en la bitácora: N de N iguales).
- [x] Ningún prompt fue inventado ni completado: los nombrados pero no escritos están en el registro, no en el contenido.
- [x] Cada recurso tiene URL `https://` del documento y está referenciado al menos por una ficha; `pnpm build` falla si una ficha referencia un recurso inexistente (comprobado con `getEntry` y revertido).
- [x] Búsqueda de `PENDIENTE_` y `VERIFICAR` en `src/content/`: 0 coincidencias.
- [x] `pnpm build` y `pnpm astro check` sin errores ni advertencias nuevas; la página se ve igual que al cerrar la 02-04. (dicho por el desarrollador, 2026-11-17, hash idéntico)

Evidencia (detalle en [bitacora-02-05](bitacoras/bitacora-02-05.md)):

- Propuesta aprobada por el desarrollador el 2026-11-17 (4 respuestas, anotadas en la bitácora).
- Cuerpos: 13 de 13 bloques con cuerpo; 144 líneas, 138 idénticas a una línea del documento y 6 que solo pierden una frase aprobada.
- Prompts: comando temporal en Node, 8 de 8 iguales al documento.
- No escritos: el registro tiene una fila por unidad en «Decisiones por tomar».
- Recursos: 27 con `https://` del documento, todos referenciados (U1: 20, U2: 12, 5 en ambas). Con `tokens-inexistente` en `u1.yaml`, el build falla con «La unidad «u1» referencia «tokens-inexistente», que no existe en src/content/recursos.yaml»; revertido (`cmp` idéntico).
- `grep -rlE "PENDIENTE_|VERIFICAR" src/content dist`: 0.
- Sin marcar el último: `pnpm build` (sin la advertencia de `recursos.yaml`) y `astro check` (0/0/0) se midieron, pero «la página se ve igual» no: el build de `HEAD` en una copia aparte fue rechazado, así que no hay hash de comparación. Sí se midieron 1 `h1`, 6 `h2`, 5 `h3` y 3 scripts, igual que al cerrar la 02-04.

## Riesgos

- Separar lo que es para participantes de lo que es para el instructor es una decisión editorial. Por eso pasa por la aprobación de la tarea 1 y no se resuelve en silencio.
- El documento sigue cambiando (v5). Si cambia mientras corre la iteración, se carga la versión que esté en `main` al empezar y se anota en la bitácora.

## Fuera de alcance

- Mostrar los bloques en la página (épica 03).
- Textos de «Profundiza», videos y descargas (épica 03).
- Prompts que el documento no escribe.

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Aprobación de la propuesta de la tarea 1.
