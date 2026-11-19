# Iteración 05-02 · Modelo de síntesis y síntesis de U1 y U2

- **Épica:** 05 · Rediseño visual y síntesis del contenido
- **Estado:** En revisión
- **Rama sugerida:** iteracion/05-02-sintesis-u1-u2
- **Depende de:** 05-01 y RDA-012 aceptada
- **Especificación:** —
- **RDA relacionadas:** RDA-003, RDA-009, RDA-012

## Objetivo

Que cada bloque y cada unidad tengan una versión corta validada al compilar, y que los 12 bloques de U1 y U2 la tengan escrita y aprobada, sin material de conducción de la clase en el texto publicado.

## Punto de partida

- `src/content.config.ts`: el esquema `bloque` tiene `titulo`, `minutos`, `tipo` o `microcharlaMin` + `practicaMin`, `prompts` (`id`, `titulo`, `texto`) y `profundiza`; el cuerpo Markdown es el texto «Para la clase». El esquema `unidad` tiene `objetivo` (unas 45 palabras en la U1) y `miniProyecto.descripcion`.
- U1 tiene 5 bloques (`bloque-1` a `bloque-5`); U2 tiene 7 (`bloque-0` a `bloque-5` y `cierre`).
- Conteo actual: U1 ≈ 1.991 palabras y U2 ≈ 2.046 palabras (`cat src/content/bloques/uN/*.md src/content/unidades/uN.yaml | wc -w`).
- Material de conducción detectado en U1 y U2 (lista para revisar con el desarrollador, no para borrar sin aprobación):
  - U1 · 2: columna «Pregunta para el grupo» de la tabla de uso responsable; «Mini-prueba (2 min)»; minutos de cada subpunto («2.1 … (4 min)»).
  - U1 · 3: «Los rojos del semáforo se resuelven aquí»; «(5 min, ejercicio E1)».
  - U1 · 4: «(6 min)», «(12 min, individuales)».
  - U1 · 5: fila «Cierre · Vitrina: 3 personas al azar…»; minutos de cada tramo.
  - U2 · cierre: «3 participantes al azar muestran…».
  - U2 · 1 a 5: «Microcharla (3 min)» y «Práctica (17 min)» como encabezados de minutos.

## Alcance y entregables

- Esquema (RDA-012), en `src/content.config.ts`:
  - `bloque.sintesis` (opcional en esta iteración): `resumen` (máximo 25 palabras), `haras` (verbo en segunda persona + producto, máximo 12 palabras) y `claves` (1 o 2 frases de máximo 10 palabras cada una). En la tarjeta del bloque se ven «Qué harás» y las claves; el `resumen` abre el modal «Ver detalle».
  - `prompt.descripcion` (opcional): para qué sirve el prompt y cuándo usarlo, máximo 30 palabras.
  - `unidad.objetivoBreve` (opcional en esta iteración): máximo 20 palabras.
  - Un validador `maxPalabras(n)` reutilizable que cuenta palabras separadas por espacios y hace fallar `pnpm build` con un mensaje en español que dice el campo, el límite y el conteo.
- Síntesis de los 12 bloques de U1 y U2, de los prompts de esas unidades (`descripcion`) y de `objetivoBreve` de U1 y U2, redactada por el agente y aprobada por el desarrollador.
- Cuerpo Markdown de los bloques de U1 y U2 sin el material de conducción que el desarrollador apruebe retirar. El resto del cuerpo se conserva tal cual: pasa a ser el «detalle» que mostrará el modal (05-04).

## Contenido aprobado (copiar tal cual)

> Aprobado por el desarrollador el 2026-11-19.

### 1. Unidades (`objetivoBreve`, máx. 20 palabras)

- `u1.yaml`:
  - `objetivoBreve`: `"Entiende cómo funciona la IA generativa, ubica Gemini en Google y guarda tu plantilla reutilizable de prompts."` (17 palabras)
- `u2.yaml`:
  - `objetivoBreve`: `"Domina modelos, Deep Research y Canvas en Gemini para producir seis piezas de comunicación con la identidad visual de GTD."` (20 palabras)

### 2. Bloques y prompts de la Unidad 1

- `u1/bloque-1.md`:
  - `resumen`: `"El curso se diseñó con documentación oficial de Google, prioriza la práctica individual, deja la teoría en el LMS y pide un entregable por clase."` (25 palabras)
  - `haras`: `"Conocerás las reglas del bootcamp y sus fuentes oficiales de consulta."` (11 palabras)
  - `claves`:
    - `"Material basado en documentación oficial de Google."` (7 palabras)
    - `"Práctica primero y un entregable por clase."` (7 palabras)
- `u1/bloque-2.md`:
  - `resumen`: `"Qué es un LLM, la evolución hasta Gemini 4, los tokens, las diferencias de privacidad entre cuentas y cómo revisar alucinaciones y sesgos."` (23 palabras)
  - `haras`: `"Distinguirás alucinaciones, sesgos, tareas delegables y reglas de la cuenta personal."` (11 palabras)
  - `claves`:
    - `"Un LLM predice texto probable; no sabe si es cierto."` (10 palabras)
    - `"En cuenta personal usa solo datos ficticios o públicos."` (9 palabras)
- `u1/bloque-3.md`:
  - `resumen`: `"Ubica la app de Gemini, el panel en Workspace, Gemini Notebook, AI Studio y Workspace Studio, y comprueba tu sesión con Google AI Plus activo."` (25 palabras)
  - `haras`: `"Verificarás tu sesión en Gemini con Google AI Plus y sus herramientas."` (12 palabras)
  - `claves`:
    - `"La app de Gemini en gemini.google.com es la herramienta principal."` (10 palabras)
    - `"Con Google AI Plus, el selector ofrece Flash-Lite e Hydrogen."` (10 palabras)
- `u1/bloque-4.md`:
  - `resumen`: `"El marco Persona, Tarea, Contexto y Formato de Google y la escalera de prompts básico, intermedio y avanzado, con tres rondas sobre un caso."` (24 palabras)
  - `haras`: `"Escribirás tres versiones de un prompt subiendo de básico a avanzado."` (11 palabras)
  - `claves`:
    - `"Marco oficial: Persona, Tarea, Contexto y Formato."` (7 palabras)
    - `"El nivel avanzado suma restricciones, criterios, ejemplos y preguntas previas."` (10 palabras)
  - `prompts`:
    - `basico.descripcion`: `"Prompt de nivel básico con solo tarea y producto para pedir un correo por retraso de proyecto y compararlo con los niveles intermedio y avanzado."` (25 palabras)
    - `intermedio.descripcion`: `"Prompt de nivel intermedio que suma persona, contexto, objetivo y audiencia para pedir al gerente que apruebe la nueva fecha de entrega."` (22 palabras)
- `u1/bloque-5.md`:
  - `resumen`: `"Recorre la app de Gemini y los modelos Flash-Lite e Hydrogen, resuelve tres tareas con la rúbrica de 0 a 10 y guarda tu plantilla."` (25 palabras)
  - `haras`: `"Resolverás tres tareas laborales y guardarás tu plantilla de prompt maestro."` (11 palabras)
  - `claves`:
    - `"Evalúa tus prompts de 0 a 10; meta: 8 puntos."` (10 palabras)
    - `"Tu plantilla será la base del Optimizador de prompts."` (9 palabras)
  - `prompts`:
    - `plantilla-prompt-maestro.descripcion`: `"Estructura reutilizable con rol, contexto, tarea, audiencia, formato, restricciones, ejemplo y preguntas previas para guardar en Drive y usar en todo el curso."` (23 palabras)

### 3. Bloques y prompts de la Unidad 2

- `u2/bloque-0.md`:
  - `resumen`: `"Repaso del marco Persona, Tarea, Contexto y Formato y presentación del caso trimestral ficticio de GTD, con el dataset y el kit de marca."` (24 palabras)
  - `haras`: `"Descargarás el dataset ficticio y prepararás el caso trimestral de GTD."` (11 palabras)
  - `claves`:
    - `"Todos los prompts usan tu plantilla de la U1."` (9 palabras)
    - `"Un mismo caso trimestral de GTD conecta toda la clase."` (10 palabras)
- `u2/bloque-1.md`:
  - `resumen`: `"Compara Flash-Lite e Hydrogen con niveles de razonamiento bajo, medio y alto sobre el CSV ficticio y exporta la tabla comparativa a Hojas de cálculo."` (25 palabras)
  - `haras`: `"Compararás tres configuraciones de modelo y exportarás la tabla a planilla."` (11 palabras)
  - `claves`:
    - `"Rápido para redactar; profundo para analizar, calcular o decidir."` (9 palabras)
    - `"Verifica las cifras contra el CSV antes de exportar."` (9 palabras)
  - `prompts`:
    - `carril-base.descripcion`: `"Pide identificar en el CSV ficticio los tres problemas principales del trimestre y proponer una acción justificada con cifras para comparar modelos y niveles."` (24 palabras)
- `u2/bloque-2.md`:
  - `resumen`: `"Lanza Deep Research sobre un tema público para GTD, edita su plan, verifica tres afirmaciones en sus fuentes citadas y exporta el informe a Docs."` (25 palabras)
  - `haras`: `"Generarás un informe con Deep Research, verificarás fuentes y exportarás a Docs."` (12 palabras)
  - `claves`:
    - `"Revisa y ajusta el plan antes de lanzar la investigación."` (10 palabras)
    - `"Confirma al menos tres afirmaciones abriendo sus fuentes originales."` (9 palabras)
  - `prompts`:
    - `deep-research.descripcion`: `"Tema público de ejemplo para lanzar Deep Research sobre adopción de fibra óptica y servicios digitales para pymes en Chile con datos, regulación y oportunidades."` (25 palabras)
- `u2/bloque-3.md`:
  - `resumen`: `"Compara crear una infografía como imagen con Nano Banana o en código HTML y SVG con Canvas, aplicando la paleta GTD sin inventar el logotipo."` (25 palabras)
  - `haras`: `"Crearás una infografía del trimestre con la paleta GTD y cifras revisadas."` (12 palabras)
  - `claves`:
    - `"La IA nunca genera el logo: usa el SVG oficial."` (10 palabras)
    - `"En Canvas con código obtienes colores HEX exactos y editables."` (10 palabras)
  - `prompts`:
    - `identidad-visual-gtd.descripcion`: `"Bloque reutilizable de identidad visual GTD con paleta HEX, tipografía Montserrat, código SVG oficial del logo, estilo y contraste AA para pegar en tus prompts."` (25 palabras)
- `u2/bloque-4.md`:
  - `resumen`: `"Genera en Canvas una presentación de ocho diapositivas con el informe y el dataset, itera una diapositiva y expórtala a Presentaciones para aplicar marca."` (24 palabras)
  - `haras`: `"Crearás una presentación de ocho diapositivas y la exportarás a Presentaciones."` (11 palabras)
  - `claves`:
    - `"Pide diapositivas de forma explícita con Canvas activado."` (8 palabras)
    - `"Aplica colores del tema y logo oficial en Google Presentaciones."` (10 palabras)
  - `prompts`:
    - `presentacion-con-marca.descripcion`: `"Pide en Canvas una presentación de ocho diapositivas para la gerencia con contexto de mercado, tres hallazgos con cifras, acciones y paleta GTD sin logo."` (25 palabras)
    - `iterar-en-canvas.descripcion`: `"Instrucción breve para iterar una diapositiva específica en Canvas y convertirla en un gráfico de barras antes de exportar a Google Presentaciones."` (22 palabras)
- `u2/bloque-5.md`:
  - `resumen`: `"Construye en Canvas un dashboard web de una página con el CSV, indicadores, gráficos y filtros interactivos, verifica tres cifras y aplica la marca GTD."` (25 palabras)
  - `haras`: `"Construirás un dashboard interactivo en Canvas con filtros y marca GTD."` (11 palabras)
  - `claves`:
    - `"Incluye el rótulo de datos ficticios y comprueba tres cifras."` (10 palabras)
    - `"No cargues datos reales en una app con enlace público."` (10 palabras)
- `u2/cierre.md`:
  - `titulo`: `"Cierre"` (pasa de `"Vitrina y cierre"` a `"Cierre"`)
  - `resumen`: `"Revisa las piezas creadas, reflexiona sobre qué te habría tomado un día entero y qué verificaste tú, y conoce el adelanto de la Unidad 3."` (25 palabras)
  - `haras`: `"Revisarás tu kit de comunicación y lo que verificaste en cada pieza."` (12 palabras)
  - `claves`:
    - `"Evalúa qué pieza te ahorró más tiempo y qué verificaste."` (10 palabras)
    - `"La Unidad 3 trabajará solo con tus propias fuentes."` (9 palabras)

### 4. Material de conducción (decisiones M-01 a M-17 y cambio de título)

- **M-01** (`u1/bloque-1.md`): aprobado reescribir sin «con el semáforo» → `**Reglas del bootcamp:** práctica primero, teoría en el LMS, trabajo individual y un entregable por clase.`
- **M-02** (`u1/bloque-2.md`, `tipo`): sin cambio; se conserva `tipo: "Exposición interactiva + mini-prueba"`.
- **M-03** (`u1/bloque-2.md`): aprobado retirar los minutos entre paréntesis de los 5 subpuntos (`**2.1 Qué es un LLM.**`, `**2.2 Línea de tiempo**`, `**2.3 Multimodalidad y tokens.**`, `**2.4 Cuenta personal vs. cuenta empresarial.**`, `**2.5 Uso responsable**`).
- **M-04** (`u1/bloque-2.md`): aprobado retirar `; demostración de 30 segundos con una foto o un PDF` → `Gemini entiende y combina texto, imágenes, audio, video y código.`
- **M-05** (`u1/bloque-2.md`): aprobado retirar la tercera columna (`Pregunta para el grupo`) de la tabla de uso responsable.
- **M-06** (`u1/bloque-2.md`): aprobada la opción A → `**Preguntas de autoevaluación:** ¿alucinación o sesgo?, ¿lo hago yo o lo delego?, ¿esto lo pego en la cuenta personal?`
- **M-07** (`u1/bloque-3.md`): aprobado con la precisión de dejar `Demostración en clase` en la fila 2 de la tabla (`**Mapa**`; celda `Demostración en clase`; `**Verificación de cuenta:** confirma en gemini.google.com que tienes la sesión iniciada con la cuenta del curso, que el plan **Google AI Plus** está activo (se ve en el selector de modelos: Flash-Lite e Hydrogen) y que ves «Herramientas» → Canvas, Deep Research y Crear imágenes.`).
- **M-08** (`u1/bloque-4.md`): aprobado reescribir sin minutos → `**4.1 Fundamentos**` y `**4.3 Ejercicios relámpago:** tres rondas individuales, una por nivel, con el mismo caso.`
- **M-09** (`u1/bloque-5.md`, `tipo`): aprobado cambiar a `tipo: "Recorrido + práctica individual"`.
- **M-10** (`u1/bloque-5.md`): aprobado cambiar a `**5.1 Recorrido por la app**` y `**5.2 Práctica individual**`, quitar la columna `Min` y la fila `Cierre · Vitrina: 3 personas al azar…`, y redactar la tabla con columnas `Paso` y `Qué haces` en segunda persona.
- **M-11** (`u2/bloque-0.md`): aprobado cambiar `Todos descargan el dataset ficticio y el kit de marca.` por `Descarga el dataset ficticio y el kit de marca.`
- **M-12** (`u2/bloque-1.md`): aprobado cambiar a `**Conceptos clave**` y `**Práctica (carril base):**`.
- **M-13** (`u2/bloque-2.md`): aprobado cambiar a `**Conceptos clave**`, `**Práctica**` y pasos numerados (`1. **Lanzar Deep Research**…`, `2. **Mientras corre:** preparar el **bloque de marca** del hito 3.`, `3. **Al terminar el informe:** verificar 3 afirmaciones…`).
- **M-14** (`u2/bloque-3.md`): aprobado cambiar a `**Dos caminos para una infografía** (la diferencia importa cuando hay una marca de por medio):` y `**Práctica**`.
- **M-15** (`u2/bloque-4.md`): aprobado cambiar `**Práctica (17 min)**` a `**Práctica**`.
- **M-16** (`u2/bloque-5.md`): aprobado cambiar `**Práctica (27 min)**` a `**Práctica**`.
- **M-17** (`u2/cierre.md`): aprobado retirar `- 3 participantes al azar muestran su dashboard o su presentación (60 a 90 segundos cada uno).` y cambiar `titulo` de `"Vitrina y cierre"` a `"Cierre"`.

## Decisiones del desarrollador

- 2026-11-18: síntesis «resumen visible + detalle en modal», redactada por el agente y aprobada por el desarrollador; el texto completo se conserva.
- 2026-11-19: acepta la RDA-012 tal cual; aprueba las síntesis de U1 y U2 (con 6 reemplazos literales), las decisiones M-01 a M-17 (M-06 opción A, M-07 con «Demostración en clase», M-02 sin cambio, M-09 aprobado) y el cambio de `titulo` de `u2/cierre.md` a `"Cierre"`.

## Tareas

1. Agregar `maxPalabras`, `sintesis`, `descripcion` y `objetivoBreve` al esquema como campos opcionales; comprobar con 3 pruebas (un campo dentro del límite y dos fuera) que el build pasa o falla con el mensaje esperado, y revertir las pruebas.
2. Redactar el borrador de síntesis de los 5 bloques de U1, de sus prompts y de `objetivoBreve`, solo con información que ya está en el bloque o en la ficha, y presentarlo al desarrollador en una tabla (bloque · resumen · «Qué harás» · claves).
3. Hacer lo mismo para los 7 bloques de U2.
4. Presentar la lista de material de conducción de U1 y U2 (punto de partida) con la propuesta de retiro o de reescritura para participantes, y esperar la aprobación ítem por ítem.
5. Cargar en los `.md` y `.yaml` solo lo aprobado, y copiarlo en «Contenido aprobado».
6. Retirar del cuerpo el material de conducción aprobado; comprobar que los minutos del frontmatter no cambian (las sumas de la RDA-009 siguen pasando).
7. Ejecutar `pnpm build`, `pnpm astro check` y las regresiones; contar palabras antes y después.
8. Escribir la bitácora y actualizar el registro.

## Tareas del desarrollador

1. Aceptar la RDA-012 antes de empezar.
2. Aprobar o corregir cada síntesis y cada retiro de material de conducción.

## Criterios de aceptación

- [x] `pnpm build` falla con un mensaje en español cuando un `resumen` pasa de 25 palabras, una clave de 10 o un `objetivoBreve` de 20 (3 pruebas anotadas en la bitácora y revertidas): `sintesis.resumen: «sintesis.resumen» supera el límite de 25 palabras (tiene 26)`, `sintesis.claves.0: «sintesis.claves» supera el límite de 10 palabras (tiene 11)` y `objetivoBreve: «objetivoBreve» supera el límite de 20 palabras (tiene 21)`; caso válido (17 palabras en `objetivoBreve`) compiló con código 0.
- [x] Los 12 bloques de U1 y U2 tienen `sintesis` completa, y U1 y U2 tienen `objetivoBreve` (búsqueda con script en Node: 12/12 bloques con `sintesis.resumen`, `sintesis.haras` y `sintesis.claves`; 2/2 unidades con `objetivoBreve`).
- [x] Cada texto cargado coincide con «Contenido aprobado» (comparación literal en Node: 59/59 textos verificados entre los `.md`/`.yaml` y «Contenido aprobado»).
- [x] `dist/index.html` no contiene «al azar», «Pregunta para el grupo» ni «semáforo» en U1 y U2, salvo los que el desarrollador decidió conservar (0 ocurrencias en `#unidad-1` y `#unidad-2` de «al azar», «Pregunta para el grupo», «semáforo» y «Vitrina»).
- [x] Los 24 prompts del sitio siguen idénticos a su fuente (comparación de los 24 `<code id="prompt-...-texto">` en `dist/index.html` contra sus `.md`: 24/24 idénticos) y los minutos de cada unidad siguen sumando 120 (U1: 118 + 2 = 120; U2: 120 + 0 = 120; U3: 115 + 5 = 120; U4: 120 + 0 = 120).
- [x] Regresiones: `pnpm build` sin advertencias con la guardia (`0 marcadores en dist/`); `pnpm astro check` 0/0/0 (27 archivos); 0 B de JavaScript nuevo (4 etiquetas `<script>`, 2801 B sin comprimir / 1119 B gzip nivel 9, idéntico a la 05-01); la página se ve igual que antes salvo el texto retirado.

## Riesgos

- Que un resumen agregue un dato que no estaba en la fuente: cada síntesis cita en la tabla de borrador la frase del bloque de la que sale.
- Que la revisión de 12 síntesis no quepa en 30 minutos: se presentan por unidad, en dos entregas dentro de la misma iteración.

## Fuera de alcance

- Mostrar la síntesis en la página (05-05) y los modales (05-04).
- U3 y U4 (05-03).

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Aceptación de la RDA-012.
- Aprobación de cada síntesis y de cada retiro.
