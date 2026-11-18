# Bitácora 03-04 · Pendientes de la Unidad 1 y la Unidad 2

- **Fecha:** 2026-11-17
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/03-04-pendientes-u1-u2
- **Estado final:** En revisión

## Resumen

La U1 y la U2 quedaron completas:
- **«Profundiza en tu tiempo»** en 9 bloques (U1 · 2 a 5 y U2 · 1 a 5), solo con recursos oficiales ya cargados.
- **5 videos de la U1** entregados por el desarrollador.
- **Diccionario del dataset** publicado en la U2, editado para los participantes.

La U2 no lleva videos (ausencia acordada). En la misma pasada se cerró la 03-03 con la revisión en navegador del desarrollador y se anotó en la RDA-010 su ratificación de `src/lib/node-minimo.d.ts`.

**Precondición:** la rama y `main` (`bf478ab`) estaban bien, pero el árbol tenía 2 elementos sin seguimiento en `public/descargas/` (`dataset-ficticio-diccionario.md` y `plantillas-alumnos/` con 4 carpetas vacías). Se detuvo el trabajo y se avisó. El desarrollador autorizó seguir así, usar el diccionario en la U2 y no tocar `plantillas-alumnos/`, que es de la 03-05. Ningún comando fue bloqueado por el hook de documentos en esta iteración.

## Archivos creados, modificados o eliminados

| Archivo | Cambio |
| :------ | :----- |
| `src/content/bloques/u1/bloque-2.md` a `bloque-5.md` | `profundiza.recursos` en el frontmatter |
| `src/content/bloques/u2/bloque-1.md` a `bloque-5.md` | `profundiza.recursos` en el frontmatter |
| `src/content/recursos.yaml` | +5 recursos `tipo: video` (46 en total) |
| `src/content/unidades/u1.yaml` | Los 5 videos también en `recursos` (25) |
| `src/content/descargas.yaml` · `src/content/unidades/u2.yaml` | Entrada `dataset-ficticio-diccionario` y su referencia en la U2 |
| `public/descargas/dataset-ficticio-diccionario.md` | Editado para los participantes (ver abajo); archivo del desarrollador, sin seguimiento en git |
| `decisiones.md` | RDA-010: ratificación de `node-minimo.d.ts` |
| `iteracion-03-03-descargas-profundiza.md` | Cierre: Terminada, con 3 criterios «dicho por el desarrollador» |
| `iteracion-03-04-pendientes-u1-u2.md` | Estado, decisiones, tareas desbloqueadas, criterios y evidencia |
| `definicion-epica-03.md` | 03-03 Terminada, 03-04 En revisión |
| `registro-pendientes.md` | Estados, backlog, «Decisiones por tomar» (videos y descargas) e historial |

## Asignación aprobada (tarea 1)

Propuesta en el chat y aprobada por el desarrollador el 2026-11-17 con AskUserQuestion («Apruebo todo»), con los videos también en la ficha de la U1. Los temas salen de «Profundiza en el LMS» del documento (U1, línea 126; U2, líneas 424 a 429) y de la bitácora 02-05.

| Bloque | `profundiza.recursos` | Razón |
| :----- | :-------------------- | :---- |
| U1 · 2 | `que-es-un-llm`, `introducing-gemini`, `bard-pasa-a-ser-gemini`, `io-2024-100-anuncios`, `tokens`, `alucinaciones-ia`, `principios-ia-google`, `aviso-privacidad-apps-gemini`, `privacy-hub-workspace`, `verificar-respuestas`, `google-ai-essentials`, `video-google-io-2024-keynote`, `video-gemini-multimodal`, `video-gemini-15-pro-codigo`, `video-project-astra` | La lista de «Profundiza en el LMS» del bloque 2, «Verificar respuestas» de la tabla 2.5 y los videos de la línea de tiempo, la multimodalidad y la ventana de contexto |
| U1 · 3 | `gemini-en-gmail`, `workspace-studio`, `planes-google-ai-chile`, `google-ai-plus`, `video-gemini-workspace` | El mapa del ecosistema y la verificación del plan |
| U1 · 4 | `prompting-guide-101`, `estrategias-diseno-prompts` | El marco de prompts |
| U1 · 5 | `gemini-4-argon`, `gemini-4-carbon`, `gemini-4-hydrogen` | La familia Gemini 4 del recorrido |
| U2 · 1 | `acerca-modelos-gemini`, `gemini-4-argon`, `gemini-4-carbon`, `gemini-4-hydrogen`, `google-ai-plus`, `planes-google-ai-chile`, `exportar-respuestas` | Ficha de modelos y niveles, selector según el plan, exportar a Hojas de cálculo |
| U2 · 2 | `deep-research`, `exportar-respuestas` | Deep Research y exportar a Docs |
| U2 · 3 | `generar-editar-imagenes`, `nano-banana-pro`, `canvas` | Imágenes, infografías y el camino B en Canvas |
| U2 · 4 | `presentaciones-app-gemini`, `canvas` | Presentaciones en Canvas |
| U2 · 5 | `canvas` | Apps de Canvas y compartir con seguridad |

U1 · 1, U2 · 0 y el cierre de la U2 quedan sin «Profundiza», porque el documento no les asigna temas. La «Galería de ejemplos resueltos» de la U2 no se carga porque no tiene recurso.

**Decisiones del desarrollador en la misma consulta:**
- **Video 4 (Project Astra):** va en U1 · 2 aunque sea del I/O 2025 y la línea de tiempo nombre Project Astra en la fila de mayo de 2024. El agente advirtió el riesgo de que se lea como I/O 2024 y el desarrollador lo aceptó.
- **Título del diccionario:** el del encabezado del archivo, «Dataset ficticio · Solicitudes de soporte GTD · T3 2026», porque `unidades-del-curso.md` no le da un título propio.
- **Videos de la U2:** ninguno (ausencia acordada).

### Videos cargados (5, `tipo: video`, sitio `www.youtube.com`)

Títulos tal como los entregó el desarrollador. Las «pistas» de su mensaje no se publicaron.

| ID | Título | URL |
| :- | :----- | :-- |
| `video-google-io-2024-keynote` | Google Keynote (Google I/O '24) | https://www.youtube.com/watch?v=XEzRZ35urlk |
| `video-gemini-multimodal` | The capabilities of multimodal AI \| Gemini Demo | https://www.youtube.com/watch?v=UIZAiXYceBI |
| `video-gemini-15-pro-codigo` | Problem solving across 100,633 lines of code \| Gemini 1.5 Pro Demo | https://www.youtube.com/watch?v=SSnsmqIj1MI |
| `video-project-astra` | Project Astra \| Exploring the Capabilities of a Universal AI Assistant | https://www.youtube.com/watch?v=JcDBFAm9PPI |
| `video-gemini-workspace` | Gemini in Workspace: New Ways to Create Faster | https://www.youtube.com/watch?v=8wtKHwlKMBQ |

## Edición del diccionario para los participantes

El agente leyó el archivo completo (35 líneas, 2 125 B) antes de publicarlo. Tenía material solo para el instructor, que le entregaba al participante la respuesta del ejercicio de la U2. El desarrollador autorizó editarlo (es su archivo).

- **Se quitó** la sección «Patrones incluidos a propósito (para que los participantes los descubran)», con sus 5 patrones resueltos (Biobío en agosto, Instalación y Consulta comercial, Empresas, WhatsApp y la relación del NPS).
- **Se quitó** el párrafo final «El instructor puede usar estos patrones para validar…».
- **Queda igual** el resto: título, aviso «DATOS FICTICIOS — material de capacitación», archivo, filas, uso y la tabla de 12 columnas. No se agregó ningún texto.
- **Resultado:** 1 398 B; en el archivo publicado, «Patrones» e «instructor puede» aparecen 0 veces.
- **Respaldo de la versión del instructor:** como el archivo no está en git, el original quedó en `C:\Users\ffeli\AppData\Local\Temp\claude\f46045e459ff66c5\a469299c-8bc5-4d96-a20f-d30c75e142d0\scratchpad\respaldo\dataset-ficticio-diccionario.md`. Esa carpeta es temporal, así que conviene que lo guardes en tus materiales de instructor, fuera de `public/`.

## Implementación

- La carga la hizo un script temporal en el scratchpad (`cargar0304.py`), que agrega `profundiza` antes del cierre del frontmatter y comprueba que ningún bloque lo tuviera ya. Los cuerpos de los bloques no se tocaron.
- Los videos van al final de `recursos.yaml`, sin tocar los 41 existentes. `RecursoExterno` ya muestra el ícono de video y el texto oculto «Video:».
- El diccionario usa `.md`, que ya estaba en el mapa de formatos de la RDA-010 («Markdown»).

## Verificación

- `pnpm astro check`: 0 errores, 0 advertencias, 0 sugerencias. `pnpm build`: «Complete!» con **0 líneas `WARN`**.
- **«Profundiza»** (comando temporal `medir0304.js`, fuera del repositorio):
  - 9 `<details>` en la página.
  - 9 de 9 bloques iguales a sus archivos: cerrados, con los mismos recursos y en el mismo orden (cada `href` comparado con la URL de su recurso).
  - 40 enlaces para 40 referencias.
  - Ningún `<details>` en bloques sin `profundiza`.
- **Videos:** los 5 con `https://`. Cada uno aparece 2 veces («Profundiza» y la ficha de la U1), siempre con `target="_blank"` y `rel="noopener noreferrer"`, y con su título visible; el texto oculto «Video:» aparece 10 veces. La ficha de la U1 lista 25 recursos.
- **Descargas** (peso frente a `fs.statSync`):

  | Archivo | `statSync` | En la página | `dist/` | ¿Coincide? |
  | :------ | :--------- | :----------- | :------ | :--------- |
  | `dataset-ficticio-solicitudes-gtd-t3-2026.csv` | 26 015 B | «CSV · 25,4 KB» | 26 015 B | Sí |
  | `dataset-ficticio-diccionario.md` | 1 398 B | «Markdown · 1,4 KB» | 1 398 B | Sí |

  Ambas tienen su enlace con `download`.
- **Regresiones** (`medir0302.js`):
  - 24 de 24 prompts idénticos, con 0 IDs repetidos.
  - El prompt de marca sigue en su paso.
  - 1 `h1`, 6 `h2`, 31 `h3` y 21 `h4`.
  - 0 `PENDIENTE_` y 0 `VERIFICAR`.
  - JavaScript: 4 etiquetas `<script>` (423 + 799 + 879 + 592 B), 1080 B gzip, igual que en la 03-03: **0 B nuevos**.
- Sin servidores levantados.

## Criterios de aceptación

Ver la iteración: 1 de 4 marcados con evidencia. Los otros 3 tienen medido todo lo que se puede medir fuera del navegador:
- **Videos:** atributos medidos; falta abrirlos.
- **Descargas:** peso medido; falta la descarga real.
- **Regresiones:** todo medido salvo 360 px.

## No se pudo verificar · pasos para el desarrollador

Ejecuta `pnpm build` y `pnpm preview`.

1. **U1 y U2 completas en 360 px y en escritorio, en ambos modos:** `document.documentElement.scrollWidth === 360`. Revisa sobre todo U1 · 2, el «Profundiza» más largo, con 15 enlaces: los títulos largos de los videos se cortan sin desbordar.
2. **Teclado:** `Tab` llega a cada «Profundiza en tu tiempo»; `Enter` y `Espacio` lo abren y lo cierran; el foco se ve en los enlaces de adentro.
3. **Videos:** cada uno abre YouTube en una pestaña nueva con el video correcto, desde «Profundiza» y desde la ficha de la U1.
4. **Descarga del diccionario:** en U2 → «Descargas», el segundo «Descargar» baja `dataset-ficticio-diccionario.md` de 1 398 B, sin la sección de patrones.

## Decisiones tomadas

- Los videos van también en la ficha de la U1 (aprobado), así que algunos enlaces se repiten en la página.
- `exportar-respuestas`, `canvas` y los recursos de Gemini 4 aparecen en más de un «Profundiza», porque cada bloque los usa.
- No hay cambios para documentos protegidos.

## Pendientes y riesgos

- **Project Astra** (I/O 2025) queda junto a la línea de tiempo que lo ubica en el I/O 2024. Lo aceptó el desarrollador; si genera confusión en clase, se mueve.
- **Diccionario fuera de git:** `dataset-ficticio-diccionario.md` y el CSV publicado sí deben entrar en el commit. La versión del instructor solo existe en el respaldo temporal.
- **`plantillas-alumnos/`:** sigue sin seguimiento y con 4 carpetas vacías, para la 03-05.
- **Ausencias acordadas de la U1 y la U2:** `plantillas-alumnos.zip` y el informe de Deep Research de respaldo (registro, «Decisiones por tomar»).

## Revisión

- **Resultado frente al objetivo:** cumplido en los datos y medido; falta la revisión en el navegador de 360 px, del teclado, de los videos y de la descarga.
- **Qué aprendimos:**
  - Comparar cada `href` con la URL de su recurso, en orden, prueba la asignación completa y no solo el conteo.
  - Un archivo del desarrollador puede traer texto solo para el instructor: leerlo entero antes de publicarlo evitó entregar la solución del ejercicio.
- **Qué cambia para lo que sigue:** la 03-05 repite el método con la U3 y la U4. `plantillas-alumnos/` y el video de la U3 entran ahí, y la 03-05 cierra la épica 03.

## Commit sugerido

`Épica 3 - Iteración 03-04: agrega «Profundiza» a 9 bloques de U1 y U2, 5 videos de la U1 y el diccionario del dataset sin los patrones, y cierra la 03-03`
