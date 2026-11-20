# Bitácora 05-03 · Síntesis de U3 y U4

- **Fecha:** 2026-11-19
- **Agente:** Antigravity (Gemini 3.1 Pro)
- **Rama:** iteracion/05-03-sintesis-u3-u4
- **Estado final:** Terminada

## Resumen

Se cierra documentalmente la iteración 05-02 como `Terminada` (commit `9eef372` en `main`) y se completa la síntesis aprobada de las unidades 3 y 4 a partir del archivo aprobado por el desarrollador (`contenido-aprobado-05-03.md`): `objetivoBreve` en `u3.yaml` y `u4.yaml`, `sintesis` (`resumen`, `haras` y `claves`) en los 14 bloques de U3 y U4, y `descripcion` en los 16 prompts de U3 y U4. Se retira o reescribe en segunda persona el material de conducción de la clase aprobado (ítems M-01 a M-20, incluyendo el cambio de `"Vitrina y cierre"` a `"Cierre"` en `u3/cierre.md` y el retiro completo de `"Demo Day"` en `u4/bloque-5.md` y `u4.yaml`). Finalmente, `bloque.sintesis`, `unidad.objetivoBreve` y `prompt.descripcion` pasan a ser obligatorios en `src/content.config.ts`, comprobando con una prueba revertida que `pnpm build` falla si falta `sintesis`.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `src/content.config.ts` | Vuelve obligatorios `prompt.descripcion`, `bloque.sintesis` y `unidad.objetivoBreve` (quita `.optional()`). |
| `src/content/unidades/u3.yaml` | Agrega `objetivoBreve` aprobado (19 palabras). |
| `src/content/unidades/u4.yaml` | Agrega `objetivoBreve` aprobado (20 palabras) y retira «Demo Day» en `miniProyecto.titulo` (`"Mi caja de herramientas IA"`) y `entregable` (`"…; proyecto integrador terminado"`, M-19). |
| `src/content/bloques/u3/bloque-0.md` | Agrega `sintesis` aprobada. |
| `src/content/bloques/u3/bloque-1.md` | Agrega `sintesis` y `descripcion` de los 2 prompts (`deep-research`, `fast-research`), y cambia encabezados a `**Conceptos clave**` y `**Práctica**` (M-01, M-02). |
| `src/content/bloques/u3/bloque-2.md` | Agrega `sintesis` y `descripcion` de los 6 prompts, cambia encabezados a `**Conceptos clave**` y `**Práctica**` (M-03, M-04) y reescribe `(cada participante usa al menos 4)` como `(usa al menos 4)` (M-05). |
| `src/content/bloques/u3/bloque-3.md` | Agrega `sintesis` y `descripcion` de `resumen-en-audio`, cambia encabezados a `**Conceptos clave:**` y `**Práctica**` (M-06, M-07) y reescribe la oración sobre límites del plan en segunda persona (M-20). |
| `src/content/bloques/u3/bloque-4.md` | Agrega `sintesis` y `descripcion` de `estilo-gtd`, y cambia encabezados a `**Conceptos clave**` y `**Práctica**` (M-08, M-09). |
| `src/content/bloques/u3/bloque-5.md` | Agrega `sintesis` y `descripcion` de los 2 prompts (`guion-curso-interno`, `banco-de-preguntas`), y cambia encabezados a `**Conceptos clave:**` y `**Práctica**` (M-10, M-11). |
| `src/content/bloques/u3/cierre.md` | Cambia `titulo` a `"Cierre"` (M-12), agrega `sintesis` aprobada y retira la viñeta «3 participantes al azar…» (M-13, opción A). |
| `src/content/bloques/u4/bloque-0.md` | Agrega `sintesis` aprobada. |
| `src/content/bloques/u4/bloque-1.md` | Agrega `sintesis` aprobada y cambia encabezados a `**Conceptos clave**` y `**Práctica**` (M-14). |
| `src/content/bloques/u4/bloque-2.md` | Agrega `sintesis` y `descripcion` de los 3 prompts (`prompt-a-la-rapida`, `regla-propia-ingles`, `regla-propia-tono`), y cambia encabezados a `**Conceptos clave:**` y `**Práctica**` (M-15). |
| `src/content/bloques/u4/bloque-3.md` | Agrega `sintesis` y `descripcion` de `presentacion-gtd-visual`, y cambia encabezados a `**Conceptos clave:**` y `**Práctica**` (M-16). |
| `src/content/bloques/u4/bloque-4.md` | Agrega `sintesis` aprobada, cambia encabezados a `**Conceptos clave**` y `**Práctica.**` y pasa las instrucciones de tercera persona y pre-trabajo docente a segunda persona (M-17). |
| `src/content/bloques/u4/bloque-5.md` | Cambia `titulo` a `"Proyecto integrador"` y elimina la línea «Demo Day (10 min)…» (M-19), agrega `sintesis` aprobada, cambia encabezados sin minutos y pasa `su puesto` a `tu puesto` (M-18). |
| `src/content/bloques/u4/cierre.md` | Agrega `sintesis` aprobada. |
| `_planificacion/00_producto/registro-pendientes.md` | Paso 0: cierra la 05-02 (fila `05-02` y fila `20` del backlog) como `Terminada`. Cierre 05-03: pasa la 05-03 y la fila `21` del backlog a `En revisión`, actualiza `Iteración activa` y agrega línea al historial manteniendo 50 filas. |
| `_planificacion/00_producto/registro-archivo.md` | Archiva las 2 filas más antiguas del historial de `registro-pendientes.md` (una en Paso 0 y una al cerrar la 05-03) al final de la sección 3, sin editar líneas previas. |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/definicion-epica-05.md` | Pasa `05-02` a `Terminada` y `05-03` a `En revisión`. |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/iteracion-05-02-sintesis-u1-u2.md` | Pasa `Estado` a `Terminada` (Paso 0). |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/bitacoras/bitacora-05-02.md` | Pasa `Estado final` a `Terminada` (Paso 0). |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/iteracion-05-03-sintesis-u3-u4.md` | Pasa `Estado` a `En revisión`, copia «Contenido aprobado» literal y marca los criterios de aceptación. |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/bitacoras/bitacora-05-03.md` | Esta bitácora. |

## Verificación

### 1. Prueba de obligatoriedad en el esquema (`src/content.config.ts`)

Al quitar temporalmente `sintesis` de `src/content/bloques/u4/cierre.md`, `pnpm build` falló con código 1 y el mensaje:

```text
[InvalidContentEntryDataError] bloques → u4/cierre data does not match collection schema.

  sintesis**: **sintesis: Required
```

Tras restaurar `sintesis` en `u4/cierre.md`, `pnpm build` volvió a pasar con código 0.

### 2. Compilación, tipos y regresiones

- `pnpm build`: código 0, 0 advertencias (`2 page(s) built in 2.35s`, `Limpieza de SVG: 6 sin referencia borrados (41030 B)`, `Guardia de marcadores: 0 marcadores en dist/`).
- `pnpm astro check`: `0 errors`, `0 warnings`, `0 hints` (27 archivos).
- **JavaScript propio:** 4 etiquetas `<script>` propias más la etiqueta de Web Analytics en `dist/index.html` (`406 + 986 + 848 + 561 = 2801 B` sin comprimir, `0` archivos `.js` externos), idéntico a la 05-02 (**0 B de JavaScript nuevo**).
- **Cobertura completa del modelo de síntesis (4 unidades, 26 bloques, 24 prompts):**
  - Unidades con `objetivoBreve`: **4/4** (`u1` a `u4`).
  - Bloques con `sintesis` (`resumen`, `haras`, `claves`): **26/26** (5 en U1 + 7 en U2 + 7 en U3 + 7 en U4).
  - Prompts con `descripcion`: **24/24** (3 en U1 + 5 en U2 + 12 en U3 + 4 en U4).
- **Coincidencia con `contenido-aprobado-05-03.md` y límites de palabras:**
  - `0` diferencias entre los textos cargados en U3 y U4 y el archivo aprobado.
  - `0` campos fuera de límite (`objetivoBreve` ≤ 20, `resumen` ≤ 25, `haras` ≤ 12, `claves` 1–2 de ≤ 10, `prompt.descripcion` ≤ 30).
- **Palabras visibles por tarjeta de unidad (`objetivoBreve` + títulos de bloque + `haras` + `claves` ≤ 300):**
  - **U1:** `17 + 35 + 56 + 89 =` **197/300 palabras**.
  - **U2:** `20 + 36 + 80 + 133 =` **269/300 palabras**.
  - **U3:** `19 + 49 + 69 + 116 =` **253/300 palabras**.
  - **U4:** `20 + 42 + 69 + 115 =` **246/300 palabras**.
- **Prompts y minutos:**
  - Los **24 prompts** conservan su `id`, `titulo` y `texto` idénticos carácter por carácter a `main` (`24/24`).
  - Los minutos de cada unidad suman exactamente **120** (`U1: 118 + 2 = 120`, `U2: 120`, `U3: 115 + 5 = 120`, `U4: 120`).
- **Ausencia de material de conducción en `dist/index.html`, `src/` y `dist/`:**
  - `"al azar"` en `dist/index.html`: **0**.
  - `"Vitrina"` en `dist/index.html`: **0**.
  - `"semáforo"` / `"semaforo"` en `dist/index.html`: **0**.
  - `"Pregunta para el grupo"` en `dist/index.html`: **0**.
  - `"Microcharla ("` en `dist/index.html`: **0**.
  - `"Demo Day"` en `src/` y en `dist/`: **0 apariciones**.

### 3. Conteo de palabras por unidad antes y después (separando síntesis y detalle)

Medido por script con `texto.trim().split(/\s+/).filter(Boolean).length`:

| Unidad | Cuerpos `.md` antes (detalle) | Cuerpos `.md` después (detalle) | Δ cuerpos `.md` | Palabras visibles en tarjeta (`objetivoBreve` + títulos + `haras` + `claves`) | Total palabras de síntesis (`objetivoBreve` + `resumen` + `haras` + `claves` + `prompt.descripcion`) | Archivos completos (`.yaml` + `.md`) antes | Archivos completos (`.yaml` + `.md`) después |
| :----- | :---------------------------- | :------------------------------ | :-------------- | :---------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :----------------------------------------- | :------------------------------------------- |
| **U1** *(05-02)* | 1.371 | 1.254 | −117 | **197 / 300** | 354 | 1.998 | 2.264 |
| **U2** *(05-02)* | 1.375 | 1.328 | −47 | **269 / 300** | 527 | 2.054 | 2.580 |
| **U3** *(05-03)* | 1.668 | 1.635 | **−33** | **253 / 300** | 616 | 2.637 | 3.272 |
| **U4** *(05-03)* | 1.416 | 1.355 | **−61** | **246 / 300** | 432 | 1.939 | 2.351 |
| **Total 4 unidades** | **5.830** | **5.572** | **−258** | — | **1.929** | **8.628** | **10.467** |

## Criterios de aceptación

- [x] Los 26 bloques tienen `sintesis` y las 4 unidades tienen `objetivoBreve` (`26/26` y `4/4`); quitar uno hace fallar `pnpm build` (prueba en `u4/cierre.md` anotada arriba y revertida).
- [x] Cada texto cargado coincide con «Contenido aprobado» (`0` diferencias verificadas por script contra `contenido-aprobado-05-03.md`).
- [x] Las palabras visibles por tarjeta de unidad (`objetivoBreve` + títulos de bloque + `haras` + `claves`) suman como máximo 300 (`U1 = 197`, `U2 = 269`, `U3 = 253`, `U4 = 246`).
- [x] `dist/index.html` no contiene «al azar», «Pregunta para el grupo», «semáforo», «Vitrina», «Microcharla (» ni «Demo Day» (`0` apariciones de cada término).
- [x] Los 24 prompts siguen idénticos a su fuente (`24/24` comparados contra `main`) y los minutos de cada unidad siguen sumando 120.
- [x] Regresiones: `pnpm build` sin advertencias con la guardia; `pnpm astro check` 0/0/0; 0 B de JavaScript nuevo.

## Diferencias entre lo planificado y lo encontrado (incluye lección aprendida de la Fase 1)

- **Error en el borrador de la Fase 1 (frases de origen y descripciones de prompts inventadas):** al redactar la respuesta de la Fase 1 tras una compactación de contexto, el agente no releyó directamente los archivos de `src/content/bloques/u3/` y `u4/` antes de construir el script de conteo y terminó citando «frases de origen» inexistentes en `main` (un caso comercial B2B ficticio y uso de Gemini CLI/Antigravity en vez de la Ley 21.719 en U3 y las skills en la interfaz web de Gemini en U4), además de proponer un ítem M-20 sobre líneas que no existían en `u4/bloque-0.md` ni `u4/cierre.md`. **Regla preventiva para no repetirlo:** nunca redactar síntesis, citas ni propuestas de edición desde un resumen de memoria o compactación; siempre leer o extraer por script el texto literal de los archivos en disco antes de proponer cualquier tabla. El desarrollador rechazó el borrador de textos de la Fase 1 y entregó `contenido-aprobado-05-03.md`, cuyos textos se verificaron contra cada bloque de `main` y se cargaron literalmente.
- **Retiro de «Demo Day» (M-19):** el desarrollador decidió retirar por completo «Demo Day» de `u4/bloque-5.md` (`titulo: "Proyecto integrador"` y eliminación de la viñeta `- **Demo Day (10 min):**…`) y de `u4.yaml` (`miniProyecto.titulo: "Mi caja de herramientas IA"` y `entregable` con `"proyecto integrador terminado"` en lugar de `"presentado"`), dejando `0` apariciones de `"Demo Day"` en `src/` y `dist/`.

## Decisiones tomadas

- Se cargan literalmente los textos de `contenido-aprobado-05-03.md` para U3 y U4.
- Se retira «Demo Day» en `u4/bloque-5.md` y `u4.yaml` (M-19) y «Vitrina» en `u3/cierre.md` (M-12, M-13).
- `prompt.descripcion`, `bloque.sintesis` y `unidad.objetivoBreve` quedan como campos obligatorios en `src/content.config.ts`.

## Pendientes y riesgos

- Revisión final de la rama `iteracion/05-03-sintesis-u3-u4` por el desarrollador para pasar la 05-03 a `Terminada`.
- Antes de iniciar la `05-04`, queda pendiente en `registro-pendientes.md` (sección 5) que el desarrollador aplique la propuesta **P-013** en `DESIGN.md`.
- Se listan en el reporte de cierre (sin editar) las menciones obsoletas de `RDA-011 (propuesta)`, `RDA-012 (propuesta)` y tareas ya cumplidas (RDA-011, P-009, P-010 y P-011) detectadas en `definicion-epica-05.md` y en las iteraciones `05-04` a `05-08`.
