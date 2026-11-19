# Bitácora 05-02 · Modelo de síntesis y síntesis de U1 y U2

- **Fecha:** 2026-11-19
- **Agente:** Antigravity (Gemini 3.1 Pro)
- **Rama:** iteracion/05-02-sintesis-u1-u2
- **Estado final:** En revisión

## Resumen

Se acepta la RDA-012 en `decisiones.md` y se implementa en `src/content.config.ts` el validador `maxPalabras(max, campo)` junto con los campos opcionales `bloque.sintesis` (`resumen` ≤ 25, `haras` ≤ 12, `claves` de 1 o 2 frases de ≤ 10 palabras), `prompt.descripcion` (≤ 30 palabras) y `unidad.objetivoBreve` (≤ 20 palabras). Tras las 3 pruebas de esquema y la aprobación del desarrollador ítem por ítem (con 6 reemplazos literales y las decisiones M-01 a M-17), se cargan las síntesis de los 12 bloques de U1 y U2, las 8 descripciones de sus prompts y los 2 `objetivoBreve`, se retira del cuerpo Markdown el material de conducción de la clase aprobado y se cambia el `titulo` de `u2/cierre.md` a `"Cierre"`.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `src/content.config.ts` | Agrega `contarPalabras`, `maxPalabras(max, campo)`, `prompt.descripcion` (≤ 30), `bloque.sintesis` (`resumen` ≤ 25, `haras` ≤ 12, `claves` 1–2 de ≤ 10) y `unidad.objetivoBreve` (≤ 20), opcionales en la 05-02 (RDA-012). |
| `src/content/unidades/u1.yaml` | Agrega `objetivoBreve` aprobado (17 palabras). |
| `src/content/unidades/u2.yaml` | Agrega `objetivoBreve` aprobado (20 palabras). |
| `src/content/bloques/u1/bloque-1.md` | Agrega `sintesis` aprobada y retira «con el semáforo» (M-01). |
| `src/content/bloques/u1/bloque-2.md` | Agrega `sintesis` aprobada, retira minutos por subpunto (M-03), nota de demostración de 30 s (M-04) y columna «Pregunta para el grupo» (M-05), y cambia «Mini-prueba (2 min):» por «Preguntas de autoevaluación:» (M-06, opción A); mantiene `tipo` (M-02). |
| `src/content/bloques/u1/bloque-3.md` | Agrega `sintesis` aprobada, retira `(5 min)` de «Mapa», cambia «Demostración de 1 minuto» a «Demostración en clase» y reescribe «Verificación de cuenta» en trato de tú sin `(5 min, ejercicio E1)` ni «Los rojos del semáforo se resuelven aquí» (M-07). |
| `src/content/bloques/u1/bloque-4.md` | Agrega `sintesis` y `descripcion` de los 2 prompts (`basico`, `intermedio`), y retira los minutos de 4.1 y 4.3 (M-08). |
| `src/content/bloques/u1/bloque-5.md` | Cambia `tipo` a `"Recorrido + práctica individual"` (M-09), agrega `sintesis` y `descripcion` de `plantilla-prompt-maestro`, retira minutos de 5.1 y 5.2, columna `Min` y fila `Cierre · Vitrina: 3 personas al azar…`, y pasa la tabla a segunda persona (`Paso` / `Qué haces`, M-10). |
| `src/content/bloques/u2/bloque-0.md` | Agrega `sintesis` aprobada y cambia «Todos descargan…» a «Descarga…» (M-11). |
| `src/content/bloques/u2/bloque-1.md` | Agrega `sintesis` y `descripcion` de `carril-base`, y cambia encabezados a `**Conceptos clave**` y `**Práctica (carril base):**` sin minutos (M-12). |
| `src/content/bloques/u2/bloque-2.md` | Agrega `sintesis` y `descripcion` de `deep-research`, cambia encabezados a `**Conceptos clave**` y `**Práctica**` y reemplaza las etiquetas de cronómetro por pasos numerados 1 a 3 (M-13). |
| `src/content/bloques/u2/bloque-3.md` | Agrega `sintesis` y `descripcion` de `identidad-visual-gtd`, y cambia encabezados sin minutos en el cuerpo (M-14). |
| `src/content/bloques/u2/bloque-4.md` | Agrega `sintesis` y `descripcion` de los 2 prompts (`presentacion-con-marca`, `iterar-en-canvas`) y quita `(17 min)` de `**Práctica**` (M-15). |
| `src/content/bloques/u2/bloque-5.md` | Agrega `sintesis` aprobada y quita `(27 min)` de `**Práctica**` (M-16). |
| `src/content/bloques/u2/cierre.md` | Cambia `titulo` de `"Vitrina y cierre"` a `"Cierre"`, agrega `sintesis` aprobada y retira la viñeta de «3 participantes al azar…» (M-17). |
| `_planificacion/00_producto/decisiones.md` | Pasa RDA-012 a `Aceptada` en el índice y en su sección. |
| `_planificacion/00_producto/registro-pendientes.md` | Retira RDA-012 de «Decisiones por tomar», actualiza estado de la 05-02 y de la fila 20 del backlog a `En revisión`, agrega línea de historial y archiva las 8 filas más antiguas para dejar 50. |
| `_planificacion/00_producto/registro-archivo.md` | Recibe las 8 filas más antiguas del historial de `registro-pendientes.md` (sin editar lo ya archivado). |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/definicion-epica-05.md` | Actualiza `RDA-012 (propuesta)` a `RDA-012` y pasa la fila `05-02` a `En revisión`. |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/iteracion-05-02-sintesis-u1-u2.md` | Estado `En revisión`, `RDA-012`, sección «Contenido aprobado» completa y criterios marcados con evidencia. |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/iteracion-05-03-sintesis-u3-u4.md` | Actualiza `RDA-012 (propuesta)` a `RDA-012`. |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/bitacoras/bitacora-05-02.md` | Esta bitácora. |

## Verificación

### 1. Pruebas del validador `maxPalabras` en `pnpm build` (ejecutadas y revertidas en Fase 1)

1. **Fuera de límite 1 (`sintesis.resumen` de 26 palabras en `u1/bloque-1.md`):** `pnpm build` falló con código 1 y el mensaje:
   `[InvalidContentEntryDataError] bloques → u1/bloque-1 data does not match collection schema.`
   `sintesis.resumen: «sintesis.resumen» supera el límite de 25 palabras (tiene 26)`
2. **Fuera de límite 2 (`sintesis.claves.0` de 11 palabras en `u1/bloque-1.md` y `objetivoBreve` de 21 palabras en `u1.yaml`):** `pnpm build` falló con código 1 y los mensajes:
   `sintesis.claves.0: «sintesis.claves» supera el límite de 10 palabras (tiene 11)`
   `objetivoBreve: «objetivoBreve» supera el límite de 20 palabras (tiene 21)`
3. **Caso válido (`sintesis` dentro del límite en `u1/bloque-1.md` y `objetivoBreve` de 17 palabras en `u1.yaml`):** `pnpm build` terminó con código 0 (`2 page(s) built`, `0 marcadores en dist/`).

### 2. Compilación, tipos y regresiones (Fase 2)

- `pnpm build`: código 0, 0 advertencias (`2 page(s) built in 2.24s`, `Limpieza de SVG: 6 sin referencia borrados (41030 B)`, `Guardia de marcadores: 0 marcadores en dist/`).
- `pnpm astro check`: `0 errors`, `0 warnings`, `0 hints` (27 archivos).
- **JavaScript propio:** 4 etiquetas `<script>` en `dist/index.html`, **2801 B** sin comprimir y **1119 B gzip** (nivel 9), idéntico a la 05-01 (**0 B de JavaScript nuevo**).
- **Prompts:** 24 de 24 `<code id="prompt-...-texto">` en `dist/index.html` idénticos carácter por carácter a su fuente en `src/content/bloques/u1/` a `u4/`.
- **Suma de minutos por unidad:**
  - U1: bloques = 118 + `holguraMin` = 2 → **120 min** (`duracionMin: 120`).
  - U2: bloques = 120 + `holguraMin` = 0 → **120 min** (`duracionMin: 120`).
  - U3: bloques = 115 + `holguraMin` = 5 → **120 min** (`duracionMin: 120`).
  - U4: bloques = 120 + `holguraMin` = 0 → **120 min** (`duracionMin: 120`).
- **Comparación con «Contenido aprobado»:** 59 de 59 textos (`objetivoBreve`, `resumen`, `haras`, `claves`, `descripcion` de prompts y `titulo: "Cierre"` de `u2/cierre.md`) coinciden literalmente entre los archivos de `src/content/` y la sección «Contenido aprobado» de `iteracion-05-02-sintesis-u1-u2.md`.
- **Ausencia de material de conducción en `dist/index.html` (secciones `#unidad-1` y `#unidad-2`):**
  - `«al azar»`: **0** en U1–U2 (quedan 2 en U3 y U4, que se retiran en la 05-03).
  - `«Pregunta para el grupo»`: **0** en U1–U2 (0 en todo `dist/index.html`).
  - `«semáforo»`: **0** en U1–U2 (0 en todo `dist/index.html`).
  - `«Vitrina»`: **0** en U1–U2 (quedan 2 en U3 · cierre, que se atienden en la 05-03).

### 3. Conteo de palabras de U1 y U2 antes y después

Medido con el mismo contador de palabras por espacios (`texto.trim().split(/\s+/).filter(Boolean).length`):

| Unidad | Cuerpos `.md` antes (visible en bloques) | Cuerpos `.md` después (visible en bloques) | Diferencia en cuerpos | Archivos completos (`.md` + `.yaml`) antes | Archivos completos (`.md` + `.yaml`) después (incluye `sintesis`, `descripcion` y `objetivoBreve` en frontmatter) |
| :----- | :--------------------------------------- | :----------------------------------------- | :-------------------- | :----------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| **U1** | 1.371 palabras | 1.254 palabras | **−117 palabras** | 1.998 palabras | 2.264 palabras |
| **U2** | 1.375 palabras | 1.328 palabras | **−47 palabras** | 2.054 palabras | 2.580 palabras |
| **Total U1 + U2** | **2.746 palabras** | **2.582 palabras** | **−164 palabras** | **4.052 palabras** | **4.844 palabras** |

## Criterios de aceptación

- [x] `pnpm build` falla con un mensaje en español cuando un `resumen` pasa de 25 palabras, una clave de 10 o un `objetivoBreve` de 20 (3 pruebas anotadas en esta bitácora y revertidas).
- [x] Los 12 bloques de U1 y U2 tienen `sintesis` completa, y U1 y U2 tienen `objetivoBreve` (12/12 bloques y 2/2 unidades verificados por script).
- [x] Cada texto cargado coincide con «Contenido aprobado» (59/59 textos idénticos en comparación literal).
- [x] `dist/index.html` no contiene «al azar», «Pregunta para el grupo» ni «semáforo» en U1 y U2, ni tampoco «Vitrina» (0 ocurrencias en `#unidad-1` y `#unidad-2`).
- [x] Los 24 prompts del sitio siguen idénticos a su fuente (24/24) y los minutos de cada unidad siguen sumando 120.
- [x] Regresiones: `pnpm build` sin advertencias con la guardia (`0 marcadores en dist/`); `pnpm astro check` 0/0/0; 0 B de JavaScript nuevo (2801 B / 1119 B gzip).

## Diferencias entre lo planificado y lo encontrado

- En Zod 4 (`astro/zod`), dentro de `superRefine` sobre un `z.string()`, `ctx.path` no está definido, por lo que `maxPalabras(max, campo)` recibe explícitamente la ruta del campo (`"sintesis.resumen"`, `"sintesis.haras"`, `"sintesis.claves"`, `"prompt.descripcion"`, `"objetivoBreve"`) y emite el mensaje en español junto a la ruta nativa que reporta Astro (`InvalidContentEntryDataError`).
- Además de la lista inicial de material de conducción de la iteración, se detectaron y corrigieron con aprobación del desarrollador: «con el semáforo» en `u1/bloque-1.md` (M-01), «demostración de 30 segundos con una foto o un PDF» en `u1/bloque-2.md` (M-04), `tipo: "Recorrido de 5 min + práctica de 60 min"` en `u1/bloque-5.md` (M-09), «Todos descargan…» en `u2/bloque-0.md` (M-11) y el título `"Vitrina y cierre"` → `"Cierre"` en `u2/cierre.md` (M-17).

## Decisiones tomadas

- [RDA-012](../../../00_producto/decisiones.md) aceptada por el desarrollador el 2026-11-19.
- En los bloques de U2 con reparto `microcharlaMin` y `practicaMin`, los encabezados del cuerpo Markdown `**Microcharla (3 min)**` pasan a `**Conceptos clave**` (o título descriptivo en `u2/bloque-3.md`) y `**Práctica (N min)**` pasa a `**Práctica**`, conservando intactos los minutos en el frontmatter.
- En `u2/cierre.md`, `titulo` pasa de `"Vitrina y cierre"` a `"Cierre"`, eliminando toda mención a «Vitrina» en U1 y U2.

## Pendientes y riesgos

- Revisión del desarrollador para dar por `Terminada` la 05-02 antes de iniciar la ejecución de la 05-03.

## Revisión

- **Resultado frente al objetivo:** el modelo de contenido valida los límites de palabras de `sintesis`, `prompt.descripcion` y `unidad.objetivoBreve` al compilar, los 12 bloques y las 2 fichas de U1 y U2 tienen cargada su síntesis aprobada, y el texto publicado de U1 y U2 quedó libre de material de conducción de la clase.
- **Qué aprendimos:** revisar todos los bloques con búsqueda de términos y patrones de tiempo permitió encontrar menciones de relator fuera de la lista inicial (`u1/bloque-1.md`, `u1/bloque-5.md` frontmatter, `u2/bloque-0.md` y el título de `u2/cierre.md`) que habrían dejado «semáforo» y «Vitrina» en `dist/index.html`.
- **Qué cambia para lo que sigue (preparación de la 05-03):**
  1. **RDA-012 ya está `Aceptada`:** se actualizó `RDA-012 (propuesta)` a `RDA-012` en `iteracion-05-03-sintesis-u3-u4.md`. Sus campos `Depende de: 05-02` y `Datos requeridos` (aprobación de cada síntesis y de cada retiro por el desarrollador) están alineados y no requieren datos del cliente.
  2. **Pauta para el material de conducción en U3 y U4:** al presentar la lista de retiro en la 05-03, conviene aplicar el mismo criterio aprobado en la 05-02: cambiar `**Microcharla (N min)**` a `**Conceptos clave**`, quitar `(N min)` de `**Práctica (N min)**`, pasar instrucciones en tercera persona plural («Todos…», «Cada uno…») a segunda persona (`tú`) y proponer cambiar `titulo: "Vitrina y cierre"` de `u3/cierre.md` a `"Cierre"` para que tampoco quede «Vitrina» en U3.
  3. **Presupuesto de 300 palabras visibles por unidad en la 05-03:** en U1 (`objetivoBreve` + títulos de bloque + `haras` + `claves`) las palabras visibles para la futura tarjeta suman **193 palabras** y en U2 suman **239 palabras** (ambas muy por debajo del tope de 300 palabras que verificará el criterio 3 de la 05-03 en las 4 unidades).

## Commit sugerido

`Épica 5 - Iteración 05-02: agrega esquema de síntesis con límites de palabras (RDA-012), carga síntesis aprobada de U1 y U2 y retira material de conducción`
