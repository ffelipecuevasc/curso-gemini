# Bitácora 02-06 · Bloques y prompts de la Unidad 3 y la Unidad 4

- **Fecha:** 2026-11-17
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/02-06-bloques-u3-u4
- **Estado final:** Terminada

## Resumen

Los 14 bloques de la U3 y la U4 tienen su cuerpo «Para la clase», copiado literal con las omisiones aprobadas, y 16 prompts literales en sus datos. `recursos.yaml` suma 14 recursos (7 oficiales de la U3, la colección comunitaria marcada «no oficial» y 6 de la U4), referenciados desde las fichas. Con esto, las 4 unidades quedan completas en las colecciones: 26 bloques, 24 prompts y 41 recursos. Antes de empezar se cerró la 02-05: registro, criterio, borrado de `sh.exe.stackdump`, `*.stackdump` en `.gitignore` y las dos notas en `definicion-epica-03.md`. Se comprobó que la rama es `iteracion/02-06-bloques-u3-u4` y que `main` contiene `f264f2e`.

## Archivos creados, modificados o eliminados

| Archivo | Cambio |
| :------ | :----- |
| `src/content/bloques/u3/*.md` (7) | Cuerpo; prompts en los bloques 1 a 5 |
| `src/content/bloques/u4/*.md` (7) | Cuerpo; prompts en los bloques 2 y 3 |
| `src/content/recursos.yaml` | +14 recursos (41 en total) |
| `src/content/unidades/u3.yaml` · `u4.yaml` | `recursos` con 8 y 6 referencias |
| `sh.exe.stackdump` | Eliminado (autorizado; con `rm`, sin git) |
| `.gitignore` | `*.stackdump` |
| `iteracion-02-05-bloques-u1-u2.md` · `iteracion-02-06-bloques-u3-u4.md` | Cierre de la 02-05; estado y evidencia de la 02-06 |
| `definicion-epica-02.md` | Enlace a la bitácora de cierre |
| `definicion-epica-03.md` | Notas sobre `comprobarReferencias()` y el prompt `identidad-visual-gtd` |
| `registro-pendientes.md` | Cierre de la 02-05, estado de la 02-06, backlog, decisiones e historial |

## Propuesta aprobada (tarea 1)

Presentada en el chat y aprobada por el desarrollador el 2026-11-17 con AskUserQuestion:

1. **Textos de la U3 sin campo** («Enfoque de la herramienta», «Carril alternativo», «Advertencia de contenido» con su «no es asesoría legal» y la tabla «Pieza del kit»): todos al inicio del cuerpo del bloque 0, en el orden del documento.
2. **Colección comunitaria no oficial:** entra como recurso de la U3 con el título «Colección comunitaria de prompts de presentaciones (no oficial)» y el sitio `github.com`.
3. **Ejemplos cortos entre comillas** (U3 · 3 y U4 · 2 y 3): se cargan todos como prompts y siguen también en el cuerpo.
4. **Resto** (prompts, no escritos, omisiones y fuentes): aprobado sin cambios.

### Prompts cargados (16)

| Bloque | id · título | Origen |
| :----- | :---------- | :----- |
| U3 · 1 | `deep-research` · Deep Research | Práctica, paso 2 |
| U3 · 1 | `fast-research` · Fast Research | Práctica, paso 4 |
| U3 · 2 | `plantilla-estilo-personalizado` · Plantilla para el estilo Personalizado | Bloque de código (8 líneas) |
| U3 · 2 | `sintesis-por-audiencia`, `pregunta-precisa`, `comparacion-entre-fuentes`, `vacios-y-contradicciones`, `caso-aplicado` | Banco de prompts; el título es la etiqueta en cursiva del documento |
| U3 · 3 | `resumen-en-audio` · Resumen en audio | Práctica, paso 1 |
| U3 · 4 | `estilo-gtd` · Prompt de estilo GTD | Bloque de código (12 líneas) |
| U3 · 5 | `guion-curso-interno` · Guion del curso interno | Bloque de código del paso 1, sin la sangría de la lista (5 líneas) |
| U3 · 5 | `banco-de-preguntas` · Banco de preguntas | Práctica, paso 3 |
| U4 · 2 | `prompt-a-la-rapida` · Prompt a la rápida; `regla-propia-ingles` · Regla propia · versión en inglés; `regla-propia-tono` · Regla propia · tono | Práctica, pasos 2 y 5 |
| U4 · 3 | `presentacion-gtd-visual` · Presentación | Práctica, paso 2 |

Los títulos de las dos reglas de U4 · 2 combinan «regla propia» del documento con una palabra que las distingue. Si prefieres otro título, se cambia en el YAML.

### Prompts nombrados pero no escritos

- **U3:** los carriles extra de los bloques 1 a 5 son instrucciones sin texto de prompt.
- **U4:** los carriles extra de los bloques 2 a 5. El contenido de `optimizador-prompts/SKILL.md`, `gtd-visual.zip` y las plantillas del bloque 4 son descargas de la épica 03, no prompts.

### Omisiones por bloque

| Bloque | Omitido |
| :----- | :------ |
| U3 (unidad) | «Materiales que deben estar en el LMS antes de la clase», «Distribución de la clase», «Orquestación del tiempo», «Si te atrasas», «Profundiza en el LMS (U3)», «Pendientes y verificaciones de la U3» (su «no constituye asesoría legal» queda cubierto por la Advertencia del bloque 0) |
| U3 · 2 | «**Plantilla para el estilo Personalizado** (en el LMS)» y su código (pasa a `prompts`) |
| U3 · 4 | «**Prompt de estilo GTD** (en el LMS)» y su código (pasa a `prompts`); «`VERIFICAR` en la prueba previa qué formatos de descarga ofrece hoy la presentación con Google AI Plus.» |
| U3 · 5 | El código del paso 1 (pasa a `prompts`); queda «1. Prompt en el chat:» |
| U3 · cierre | «El instructor destaca un uso para el estudio (…) y uno para la capacitación (…).» |
| U4 (unidad) | «Materiales…», «Distribución de la clase», «Si te atrasas», «Profundiza en el LMS (U4)», «Pendientes y verificaciones de la U4» |
| U4 · 0 a 5 y cierre | Nada |

### Recursos (14, todos `tipo: documento`)

- **U3 (8):** Crear un cuaderno · Agregar o descubrir fuentes · Usar el chat · Generar una presentación · Cocreación de presentaciones y videos · Nuevas herramientas de estudio e informes interactivos · Deep Research y más tipos de fuentes · Colección comunitaria de prompts de presentaciones (no oficial).
- **U4 (6):** Crear y administrar skills en las apps de Gemini · Skills en la app de Gemini y Workspace, y qué sigue para Gems · Transición de Gems a skills · Anuncio de skills · Formato SKILL.md en Gemini Enterprise (sin comillas invertidas, RDA-009) · Crear skills en Gemini CLI.

## «Profundiza en el LMS» para la épica 03

- **U3:**
  - guías oficiales «Crear un cuaderno», «Agregar o descubrir fuentes» y «Usar el chat»;
  - Fast Research vs. Deep Research;
  - catálogo de Studio con ejemplos del instructor;
  - guía de presentaciones (formatos, cocreación, revisión y prompts de estilo);
  - estrategia para grandes volúmenes (cuadernos temáticos);
  - usos en GTD.
- **U4:**
  - guía «Crear y administrar skills» y la página de transición de Gems a skills;
  - el estándar `SKILL.md` y sus buenas prácticas;
  - galería de skills del curso con código comentado;
  - cómo migrar un Gem propio a skill;
  - ideas de skills para GTD.

## Implementación

- El mismo método de la 02-05: un script temporal en el scratchpad copia rangos de líneas del documento, quita solo las frases aprobadas y comprueba que cada bloque de código esté entre sus cercas antes de cargarlo.
- Los recursos nuevos se agregaron al final de `recursos.yaml`, sin tocar los 27 de la 02-05.

## Verificación

- `pnpm astro check`: 0 errores, 0 advertencias. `pnpm build`: «Complete!», con solo la advertencia aceptada de `descargas.yaml`.
- **Prompts de las 4 unidades** (comando temporal en Node, no guardado; mismo criterio que la 02-05): **24 de 24 iguales**.
- **Cuerpos:**
  - 26 de 26 bloques con cuerpo.
  - U3 y U4 suman 189 líneas no vacías: 188 existen tal cual en el documento y la otra es U3 · 4 «Regla de marca», que solo pierde la frase `VERIFICAR` aprobada.
- **Recursos:**
  - 41 en total; la URL de cada uno empieza con `https://` y aparece en el documento.
  - Ninguno queda sin referencia en una ficha.
  - Solo uno es de GitHub, titulado «… (no oficial)».
  - La validación de `comprobarReferencias()` corre en el build y no falló.
- `grep -rlE "PENDIENTE_|VERIFICAR" src/content dist`: 0 archivos.
- **Hash frente a `HEAD`:**
  - `git archive HEAD` en el scratchpad, con `pnpm install --frozen-lockfile --prefer-offline`; el primer intento con `--offline` falló porque faltaba un paquete en el almacén.
  - `pnpm build` en esa copia: SHA-256 de `dist/index.html` `c5bc939e68820d358ae990e51acbcffdf9f5b7c1a93e74f9d118336f2683a5ca`, **idéntico** al de la rama.
- `dist/index.html`: 1 `h1`, 6 `h2`, 5 `h3`, 3 scripts.

## Criterios de aceptación

Ver la iteración: 7 de 7 marcados con evidencia.

## Decisiones tomadas

- Los briefs de U3 · 0 y U4 · 0 quedan en el cuerpo y no como prompts, como en la 02-05.
- «Borrador para validación del área legal de GTD» (U3 · 5) es un texto para anotar en el archivo, no un prompt; queda en el cuerpo.
- No hay cambios para documentos protegidos; no se registró P-007.

## Pendientes y riesgos

- **Prompt de estilo GTD (`estilo-gtd`) e `identidad-visual-gtd`:** llevan los HEX aproximados de GTD. Mostrarlos en el sitio público depende de la autorización del cliente, que sigue abierta. Es un riesgo para la épica 03.
- **Colección comunitaria:** enlazarla no copia contenido, pero su licencia sigue por confirmar.
- **Ley 21.719:** la fecha de entrada en vigencia del bloque 0 de la U3 (1 de diciembre de 2026) debe confirmarse en bcn.cl antes de la clase, según el documento.

## Revisión

- **Resultado frente al objetivo:** cumplido y medido; las 4 unidades están completas en las colecciones y la página no cambió (hash idéntico al de `HEAD`).
- **Qué aprendimos:** `git archive` más una instalación con `--prefer-offline` en el scratchpad permite comparar contra `HEAD` sin tocar la rama. La comprobación independiente línea a línea confirmó la carga a la primera.
- **Qué cambia para lo que sigue:** la épica 03 ya no carga contenido. Hay un ID de prompt repetido entre unidades (`deep-research`, en U2 · 2 y U3 · 1; medido con `uniq -d`), así que los componentes deben anteponer la unidad y el bloque si usan el ID en el DOM.

## Commit sugerido

`Épica 2 - Iteración 02-06: carga los bloques, 16 prompts literales y 14 recursos de la U3 y la U4, y cierra la épica 02 con las 4 unidades completas en las colecciones`
