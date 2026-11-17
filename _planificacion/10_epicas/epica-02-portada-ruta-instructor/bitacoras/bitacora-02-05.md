# Bitácora 02-05 · Bloques y prompts de la Unidad 1 y la Unidad 2

- **Fecha:** 2026-11-17
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/02-05-bloques-u1-u2
- **Estado final:** En revisión

## Resumen

Los 13 bloques de la U1 y la U2 tienen ahora su cuerpo «Para la clase», copiado literal del documento con las omisiones aprobadas. En sus datos van 8 prompts literales, y `recursos.yaml` tiene 27 fuentes oficiales referenciadas desde las fichas. `unidades.ts` ahora comprueba con `getEntry` que cada recurso y descarga de una ficha exista. Antes de empezar se cerró la 02-04 (registro, criterios y el comentario de `RutaCurso.astro`) y se comprobó que la rama es `iteracion/02-05-bloques-u1-u2` y que `main` contiene `122a677`. Se cargó la versión del documento que estaba en la rama al empezar.

## Archivos creados, modificados o eliminados

| Archivo | Cambio |
| :------ | :----- |
| `src/content/bloques/u1/bloque-1.md` a `bloque-5.md` | Cuerpo; prompts en el 4 y el 5 |
| `src/content/bloques/u2/bloque-0.md` a `bloque-5.md` y `cierre.md` | Cuerpo; prompts en el 1 al 4 |
| `src/content/recursos.yaml` | 27 recursos |
| `src/content/unidades/u1.yaml` · `u2.yaml` | `recursos` con 20 y 12 referencias |
| `src/lib/unidades.ts` | `comprobarReferencias()`: falla si una ficha referencia un recurso o una descarga inexistente |
| `src/components/RutaCurso.astro` | Solo el comentario: «4 desde 1024 px» (cierre de la 02-04) |
| `iteracion-02-04-instructor.md` · `iteracion-02-05-bloques-u1-u2.md` | Cierre de la 02-04; estado y evidencia de la 02-05 |
| `registro-pendientes.md` | Cierre de la 02-04, estado de la 02-05, backlog, decisiones e historial |

## Propuesta aprobada (tarea 1)

Presentada en el chat y aprobada por el desarrollador el 2026-11-17 con AskUserQuestion:

1. **Escalera de la U1 · 4:** se cargan Básico e Intermedio como prompts; el Avanzado queda solo en la tabla y se registra como no escrito.
2. **U1 · 1:** sin la presentación del instructor (ya está en `#instructor`); del párrafo de fuentes se quita solo la frase del respaldo de Google; se dejan las «Reglas del bootcamp».
3. **Recursos:** `titulo` = texto antes del paréntesis; `sitio` = dominio de la URL.
4. **Resto de la propuesta** (prompts, no escritos, omisiones y asignación de fuentes): aprobado sin cambios.

### Prompts cargados (8)

| Bloque | id · título | Origen en el documento |
| :----- | :---------- | :--------------------- |
| U1 · 4 | `basico` · Básico | Tabla 4.2, fila Básico |
| U1 · 4 | `intermedio` · Intermedio | Tabla 4.2, fila Intermedio |
| U1 · 5 | `plantilla-prompt-maestro` · Plantilla de prompt maestro | Bloque de código (27 líneas) |
| U2 · 1 | `carril-base` · Carril base | Práctica, paso 1 |
| U2 · 2 | `deep-research` · Deep Research | Práctica, minuto 0–4 |
| U2 · 3 | `identidad-visual-gtd` · Identidad visual GTD (usar siempre) | Bloque de código de marca, sin la sangría de la lista (8 líneas) |
| U2 · 4 | `presentacion-con-marca` · Presentación con marca en Canvas | Práctica, paso 1 |
| U2 · 4 | `iterar-en-canvas` · Iterar en Canvas | Práctica, paso 2 |

Los textos entre comillas latinas se cargan sin el punto que el documento pone fuera de las comillas.

### Prompts nombrados pero no escritos (en el registro, no en el contenido)

- **U1:** el «Avanzado» completo de la escalera (4.2), y la ronda 3 del laboratorio («Pedirle a Gemini que haga preguntas…»), que no trae texto.
- **U2:** el «Prompt base (en el LMS)» del dashboard (bloque 5, solo trae requisitos), los «Prompts base de cada hito» de «Materiales», y los carriles extra de los bloques 1 a 5, que son instrucciones sin texto de prompt.

### Omisiones por bloque

| Bloque | Omitido |
| :----- | :------ |
| Ficha U1 | «Si te atrasas…» (no pertenece a un bloque) |
| U1 · 1 | Presentación del instructor completa y su línea `PENDIENTE_DESARROLLADOR`; la frase «El respaldo de Google a la formación se menciona solo con la redacción que entregue Capacita Tu Futuro (…), y sin logos de Google.» |
| U1 · 2 | «Profundiza en el LMS» |
| U1 · 4 | «Al cierre de cada ronda, clínica en vivo con un voluntario.» |
| U1 · 5 | «Si el instructor tiene Pro o Ultra, muestra Argon como contraste.»; en la tabla, «; clínica en vivo con 2 voluntarios»; el título «Plantilla de prompt maestro» y su bloque de código (pasa a `prompts`) |
| U2 (unidad) | «Materiales que deben estar en el LMS antes de la clase», «Distribución de la clase», «Orquestación del tiempo», «Si te atrasas», «Profundiza en el LMS (U2)», «Pendientes y verificaciones de la U2» |
| U2 · 2 | «`VERIFICAR` el cupo exacto en la prueba previa.» |
| U2 · 3 | El bloque de código de marca (pasa a `prompts`); queda «Ejemplo de estructura:» al final del paso 1 |
| U2 · 4 | «`VERIFICAR` en la prueba previa cuánto respeta Canvas la paleta indicada.» |
| U2 · cierre | «El instructor destaca un acierto de marca y un error típico…» |

### Recursos (27, todos `tipo: documento`)

- **Ambas unidades (5):** Planes de Google AI en Chile, Google AI Plus, Gemini 4 Argon, Gemini 4 Carbon y Gemini 4 Hydrogen.
- **Solo U1 (15):** las de «Historia, fundamentos y prompts (U1)».
- **Solo U2 (7):** Acerca de los modelos de Gemini, Canvas, Generar presentaciones, Exportar respuestas, Generar y editar imágenes, Nano Banana Pro y Usar Deep Research.

## «Profundiza en el LMS» para la épica 03

- **U1 (bloque 2):** qué es un LLM, línea de tiempo con enlaces, tokens, alucinaciones, Principios de IA de Google, aviso de privacidad de las apps de Gemini y Privacy Hub de Workspace. Curso opcional: Google AI Essentials.
- **U2:**
  - ficha de modelos y niveles de razonamiento, con enlace a «About Gemini models» y la nota de que la lista cambia;
  - cómo funciona Deep Research y cómo verificar un informe;
  - Canvas (qué crea, cómo exportar y cómo compartir con seguridad);
  - guía de prompts para imágenes (Nano Banana) e infografías;
  - exportar respuestas a Docs y Hojas de cálculo;
  - galería de ejemplos resueltos (dashboard, presentación e infografía del instructor).

## Implementación

- **Carga sin transcripción manual:** un script temporal en el scratchpad (fuera del repositorio) copió rangos de líneas del documento y quitó solo las frases aprobadas, comprobando que cada una existía. En la primera pasada, el rango omitido de U2 · 3 se comió la línea «2. **Camino A:**…»: se restauraron los archivos generados desde `HEAD` con `git show`, se corrigió el rango y se volvió a ejecutar.
- **Prompts:** de una línea, como cadena YAML entre comillas; de varias, como bloque `|-`.
- **Referencias:** `comprobarReferencias()` resuelve con `getEntry` cada recurso y descarga de la ficha, porque `reference()` no falla solo (hallazgo de la 01-04, RDA-009). Corre en `obtenerUnidadesConBloques()`, a través de `RutaCurso`.

## Verificación

- `pnpm astro check`: 0 errores, 0 advertencias, 0 sugerencias.
- `pnpm build`: «Complete!», con una sola advertencia, la de `descargas.yaml`; la de `recursos.yaml` ya no aparece.
- **Prompts (comando temporal en Node, no guardado):** cada `texto` del frontmatter, leído con la librería `yaml`, se busca en el documento: los de una línea como `«texto»`, y los de varias como `` ```\ntexto\n``` `` (para el de marca, sin los 3 espacios de sangría de la lista). Resultado: **8 de 8 iguales**.
- **Cuerpos:** 13 de 13 bloques con cuerpo; 144 líneas no vacías, de las que 138 existen tal cual en el documento y 6 son las líneas a las que se les quitó una frase aprobada (U1 · 1, U1 · 4, U1 · 5 ×2, U2 · 2 y U2 · 4).
- **Prueba reversible del recurso inexistente:** `sed` cambió `- tokens` por `- tokens-inexistente` en `u1.yaml` → `[ERROR] Error: La unidad «u1» referencia «tokens-inexistente», que no existe en src/content/recursos.yaml` y `Command failed`. Restaurado desde una copia: `cmp` idéntico y `pnpm build` en «Complete!».
- `grep -rlE "PENDIENTE_|VERIFICAR" src/content dist`: 0 archivos.
- **Página:** `dist/index.html` tiene 1 `h1`, 6 `h2`, 5 `h3` y 3 scripts, igual que al cerrar la 02-04. Su SHA-256 es `c5bc939e…83a5ca`. **No se pudo comparar con `HEAD`:** el comando que compilaba `HEAD` en una copia del scratchpad fue rechazado y no se reintentó.

## Criterios de aceptación

Ver la iteración: 6 de 7 marcados con evidencia. Sin marcar: «la página se ve igual que al cerrar la 02-04», porque falta el hash de `HEAD`.

## No se pudo verificar · pasos para el desarrollador

1. Con la rama limpia en `HEAD` (antes de aplicar estos cambios, o en otra copia), ejecuta `pnpm build` y `sha256sum dist/index.html`; compara el resultado con `c5bc939e68820d358ae990e51acbcffdf9f5b7c1a93e74f9d118336f2683a5ca`. Deberían coincidir, porque los cuerpos, prompts y recursos todavía no se muestran.
2. Lee los cuerpos de `src/content/bloques/u1` y `u2` y confirma que lo omitido es lo que aprobaste.

## Decisiones tomadas

- Los bloques de código de prompts no quedan en el cuerpo: van a `prompts` y la épica 03 decide dónde mostrarlos.
- La comprobación de referencias cubre también `descargas`, con el mismo código y sin costo.
- No hay cambios para documentos protegidos; no se registró P-007.

## Pendientes y riesgos

- `sh.exe.stackdump` quedó sin seguimiento en la raíz tras la caída de Node en las pruebas de la 02-04; borrarlo requiere tu consulta.
- En U2 · 3, «Ejemplo de estructura:» queda al final del paso 1 sin el código; la épica 03 debe mostrar el prompt `identidad-visual-gtd` junto a ese paso.
- Los HEX de GTD del prompt de marca siguen siendo aproximados (dato del cliente pendiente).

## Revisión

- **Resultado frente al objetivo:** cumplido; el contenido de la U1 y la U2 está cargado y validado al compilar, y queda medir que la página no cambió.
- **Qué aprendimos:** copiar por rangos de líneas evita errores de transcripción, pero los rangos excluyentes deben comprobarse línea a línea (el error del paso 2 se vio al revisar la salida). Una comprobación independiente (cada línea del cuerpo existe en el documento) detecta este tipo de error.
- **Qué cambia para lo que sigue:** la 02-06 puede usar el mismo método para la U3 y la U4. Con su primera descarga, la épica 03 hará desaparecer la última advertencia.

## Commit sugerido

`Épica 2 - Iteración 02-05: carga los bloques, 8 prompts literales y 27 recursos oficiales de la U1 y la U2, y valida al compilar las referencias de las fichas`
