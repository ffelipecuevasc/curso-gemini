# Bitácora 03-05 · Pendientes de la Unidad 3 y la Unidad 4

- **Fecha:** 2026-11-17
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/03-05-pendientes-u3-u4
- **Estado final:** En revisión

## Resumen

La U3 y la U4 quedaron completas:
- **«Profundiza en tu tiempo»** en 7 bloques (U3 · 0 a 4 y U4 · 1 y 4); la página tiene 16 en total.
- **1 video de la U3** entregado por el desarrollador.
- **Las 4 plantillas `SKILL.md`** de `plantillas-alumnos/` como descargas de la U4.

La regex de `archivo` acepta ahora `SKILL.md` en mayúsculas solo donde lo permite la P-007. La U4 no lleva videos (ausencia acordada). Con esto termina la carga y presentación de las 4 unidades. El cierre de la épica 03 está en [bitacora-03-cierre](bitacora-03-cierre.md).

**Precondición:** se detuvo 2 veces, por la rama (`main`) y por `AGENTS.md` sin commitear. La tercera vez se cumplió: rama `iteracion/03-05-pendientes-u3-u4`, `main` con `e1a1d15` (la 03-04), árbol limpio sobre `bc70739` (P-007 aplicada) y los 4 `SKILL.md` en `git ls-files`.

**Cierre previo:**
- La 03-04 quedó «Terminada», con 3 criterios «dicho por el desarrollador».
- La P-007 quedó «Aplicada (2026-11-17, commit bc70739)», con su texto propuesto actualizado al aplicado. Se confirmó en `AGENTS.md`, regla de contenido 5.
- **El desarrollador ratificó el recorte del diccionario del dataset** que se hizo en la 03-04 (sin los patrones ni la línea del instructor).

## Archivos creados, modificados o eliminados

| Archivo | Cambio |
| :------ | :----- |
| `src/content.config.ts` | Regex `rutaDescarga`: minúsculas, salvo `SKILL.md` en `optimizador-prompts/` y `plantillas-alumnos/<carpeta>/` |
| `src/content/bloques/u3/bloque-0.md` a `bloque-4.md` | `profundiza.recursos` |
| `src/content/bloques/u4/bloque-1.md` · `bloque-4.md` | `profundiza.recursos` |
| `src/content/recursos.yaml` | +1 video (47 recursos) |
| `src/content/unidades/u3.yaml` | El video también en `recursos` (9) |
| `src/content/descargas.yaml` · `src/content/unidades/u4.yaml` | 4 plantillas y sus referencias en la U4 |
| `propuestas-documentos-protegidos.md` | P-007 Aplicada, con el texto aplicado |
| `iteracion-03-04-pendientes-u1-u2.md` | Cierre: Terminada |
| `iteracion-03-05-pendientes-u3-u4.md` | Estado, decisiones, tareas desbloqueadas, criterios y evidencia |
| `definicion-epica-03.md` | 03-04 Terminada, 03-05 En revisión, épica en revisión y enlace al cierre |
| `registro-pendientes.md` | Estados, backlog, decisiones (sale la P-007), ausencias acordadas e historial |

## Asignación aprobada (tarea 1)

Propuesta en el chat y aprobada por el desarrollador el 2026-11-17 con AskUserQuestion. Los temas salen de «Profundiza en el LMS» del documento (U3, líneas 674 a 680; U4, líneas 842 a 847) y de la bitácora 02-06.

| Bloque | `profundiza.recursos` | Razón |
| :----- | :-------------------- | :---- |
| U3 · 0 | `video-inside-notebooklm` | «Enfoque de la herramienta»; el video presenta la herramienta |
| U3 · 1 | `crear-cuaderno`, `agregar-descubrir-fuentes`, `deep-research-tipos-fuentes` | Las guías «Crear un cuaderno» y «Agregar o descubrir fuentes»; Fast Research frente a Deep Research |
| U3 · 2 | `usar-chat-cuaderno` | La guía «Usar el chat» |
| U3 · 3 | `nuevas-herramientas-estudio` | El catálogo de Studio y los informes interactivos |
| U3 · 4 | `generar-presentacion-cuaderno`, `cocreacion-presentaciones-videos`, `coleccion-comunitaria-prompts-presentaciones` | La guía de presentaciones (formatos, cocreación y prompts de estilo) |
| U4 · 1 | `crear-administrar-skills`, `transicion-gems-skills`, `skills-app-gemini-workspace`, `anuncio-skills` | La guía de skills y la transición de Gems a skills |
| U4 · 4 | `formato-skill-md-gemini-enterprise`, `crear-skills-gemini-cli` | El estándar `SKILL.md` y la descripción que decide la activación |

U3 · 5, el cierre de la U3 y U4 · 0, 2, 3, 5 y el cierre quedan sin «Profundiza»: sus temas («Usos en GTD», galería de skills, migrar un Gem, ideas para GTD) no tienen recurso.

**Video de la U3** (`tipo: video`, sitio `www.youtube.com`): «Inside NotebookLM | Raiza Martin and Steven Johnson» (Google DeepMind), https://www.youtube.com/watch?v=mccQdu5afZw. Va en U3 · 0 y en la ficha de la U3. **Nota de nombres:** el título dice «NotebookLM», mientras el curso usa «Gemini Notebook» (ex-NotebookLM, según el mapa de la U1 · 3). Se dejó el título tal como lo muestra YouTube.

**Descargas de la U4**, con los títulos de la columna «Opción» de la tabla del bloque 4 (líneas 797 a 802 del documento):

| ID | Título | Archivo | Peso |
| :- | :----- | :------ | :--- |
| `plantilla-analista-planillas` | Analista de planillas | `/descargas/plantillas-alumnos/analista-planillas/SKILL.md` | 1 903 B · 1,9 KB |
| `plantilla-resumen-ejecutivo` | Resumen ejecutivo | `/descargas/plantillas-alumnos/resumen-ejecutivo/SKILL.md` | 1 378 B · 1,3 KB |
| `plantilla-mi-semana-laboral` | Mi semana laboral | `/descargas/plantillas-alumnos/mi-semana-laboral/SKILL.md` | 2 099 B · 2,0 KB |
| `plantilla-en-blanco` | Libre | `/descargas/plantillas-alumnos/plantilla-en-blanco/SKILL.md` | 727 B · 0,7 KB |

«Libre» es literal del documento y lo eligió el desarrollador. El agente advirtió que es poco descriptivo.

**Revisión del contenido:** el agente leyó los 4 `SKILL.md` completos antes de publicarlos. Son material para participantes: no traen soluciones del instructor, marcadores ni datos reales.

**Ausencias acordadas:**
- `optimizador-prompts/SKILL.md`: no existe en `public/`.
- `gtd-visual.zip` y el paquete de fuentes de la U3.
- Videos de la U4.

## Los 4 archivos se llaman igual al descargarse

Las 4 plantillas bajan como `SKILL.md`. En la tarjeta, la línea «SKILL.md · Markdown · x KB» es igual en las 4 y solo cambian el título y el peso. El navegador guardará `SKILL.md`, `SKILL (1).md` y así sucesivamente. Las propuestas no se implementaron, porque el desarrollador pidió no cambiar el nombre:

1. **Mostrar la ruta en la tarjeta** (por ejemplo «analista-planillas/SKILL.md»), cambiando solo `TarjetaDescarga.astro`. Es la más simple y no toca el archivo.
2. **Una instrucción visible en la ficha de la U4**, antes de las tarjetas, como «Guarda cada plantilla en una carpeta con su nombre antes de subirla». Necesita un texto aprobado por el desarrollador.
3. **Un `.zip` por plantilla** (`analista-planillas.zip` con `SKILL.md` adentro), como `gtd-visual.zip`. Necesita que el desarrollador entregue los archivos.

Se recomienda la 1, combinada con la 2.

## Implementación

- **Regex:** `^\/descargas\/(?:[a-z0-9-]+(?:\/[a-z0-9-]+)*\.[a-z0-9]+|(?:optimizador-prompts|plantillas-alumnos\/[a-z0-9-]+)\/SKILL\.md)$`. Los nombres comunes siguen en minúsculas, y la alternativa `SKILL.md` exige una de esas dos carpetas exactas. El mensaje de error nombra la excepción.
- La carga la hizo un script temporal (`cargar0305.py`) con el método de la 03-04. Los cuerpos de los bloques no se tocaron.

## Verificación

- `pnpm prettier --write` sobre `content.config.ts`. `pnpm astro check`: 0 errores, 0 advertencias, 0 sugerencias. `pnpm build`: «Complete!» con 0 líneas `WARN`.
- **Pruebas reversibles de la regex** (`pruebas0305.sh` en el scratchpad). Las 4 fallaron con `archivo: El archivo debe vivir en /descargas/ con nombre en ASCII, minúsculas y guiones (solo SKILL.md de optimizador-prompts/ y plantillas-alumnos/<carpeta>/ va en mayúsculas)` y «Command failed», y `descargas.yaml` quedó restaurado idéntico (`cmp`):
  1. `plantillas-alumnos/analista-planillas/README.md`: otro nombre en mayúsculas.
  2. `otra-carpeta/SKILL.md`: `SKILL.md` fuera de las carpetas permitidas.
  3. `plantillas-alumnos/SKILL.md`: sin carpeta de plantilla.
  4. `Dataset-ficticio-…csv`: mayúscula en un nombre común.
- **«Profundiza»** (`medir0304.js`): 16 `<details>` en la página; 16 de 16 bloques iguales a sus archivos (cerrados, mismos recursos y mismo orden); 55 enlaces para 55 referencias.
- **Videos:** 6 en total, todos con `https://`, 2 apariciones cada uno y siempre con `target="_blank"` y `rel="noopener noreferrer"`.
- **Recursos por unidad:** U1 25, U2 12, U3 9 y U4 6, todos con atributos y texto oculto.
- **Descargas** (`medir0305.js`, cada tarjeta buscada por su `href`): **6 de 6** con su título y el peso igual a `fs.statSync`. Una primera medición buscaba el texto por nombre de archivo y dio «coincide false» en 3 plantillas: tomaba siempre la primera tarjeta `SKILL.md`. Es el mismo problema de la sección anterior, y no un error de la página.
- **Regresiones** (`medir0302.js`):
  - 24 de 24 prompts idénticos, con 0 IDs repetidos.
  - El prompt de marca sigue en su paso.
  - 1 `h1`, 6 `h2`, 31 `h3` y 22 `h4`.
  - 0 `PENDIENTE_` y 0 `VERIFICAR`.
  - JavaScript: 4 etiquetas, 1080 B gzip: **0 B nuevos**.
- `dist/index.html` mide 249 160 B (50 748 B gzip y 38 143 B brotli). Sin servidores levantados.

## Criterios de aceptación

Ver la iteración: 1 de 4 marcados con evidencia. Sin marcar:
- Videos y descargas: medidos; falta abrirlos y descargarlos en el navegador.
- Regresiones: todo medido salvo 360 px.
- El criterio de cierre de la épica: el criterio de término incluye comprobaciones en el navegador de esta iteración.

## No se pudo verificar · pasos para el desarrollador

Ejecuta `pnpm build` y `pnpm preview`.

1. **U3 y U4 en 360 px y en escritorio, en ambos modos:** `document.documentElement.scrollWidth === 360`; las 4 tarjetas de la U4 se apilan sin desbordar.
2. **Teclado:** `Tab` llega a cada «Profundiza» de la U3 y la U4; `Enter` y `Espacio` lo abren y lo cierran.
3. **Video:** «Inside NotebookLM…» abre en una pestaña nueva desde U3 · 0 y desde la ficha.
4. **Descargas:** las 4 plantillas bajan como `SKILL.md`, con 1 903, 1 378, 2 099 y 727 B. Fíjate en cómo las nombra tu navegador (sección «Los 4 archivos se llaman igual»).

## Decisiones tomadas

- El video va también en la ficha de la U3, como los de la U1.
- La P-007 sale de «Decisiones por tomar» porque ya está aplicada.
- No hay cambios nuevos para documentos protegidos en esta iteración. La posible P-008 se plantea en la propuesta de la épica 04.

## Pendientes y riesgos

- **Nombres iguales de las plantillas:** ver las 3 propuestas de arriba.
- **«Libre»** es un título poco descriptivo; se puede cambiar en el YAML.
- **El video dice «NotebookLM»** mientras el curso usa «Gemini Notebook».
- **`index.html` de 249 KB:** se mide en la épica 04.

## Revisión

- **Resultado frente al objetivo:** cumplido en los datos y medido; falta la revisión en el navegador.
- **Qué aprendimos:**
  - Una excepción de nombres se valida mejor como alternativa exacta en la regex que relajando la regla general; las 4 pruebas lo confirman.
  - Medir por `href` y no por texto evita falsos resultados cuando los nombres se repiten.
- **Qué cambia para lo que sigue:** la épica 04 publica el sitio. Ver la propuesta en la bitácora de cierre.

## Commit sugerido

`Épica 3 - Iteración 03-05: agrega «Profundiza» a U3 y U4, el video de la U3 y las 4 plantillas SKILL.md con la regex de la P-007, y cierra la épica 03`
