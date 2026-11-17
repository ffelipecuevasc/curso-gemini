# Bitácora 02-02 · Fichas de las unidades y modelo de bloques

- **Fecha:** 2026-11-17
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/02-02-fichas-unidades
- **Estado final:** En revisión

## Resumen

Se reemplazó el modelo de la 01-04 por el de la RDA-009. `unidades` guarda solo la ficha de cada unidad, y la colección nueva `bloques` tiene un `.md` por bloque, con el cuerpo vacío para el texto «Para la clase» de la 02-05 y la 02-06. Se cargaron las 4 fichas reales y 26 archivos de bloque, se creó `src/lib/unidades.ts` con las comprobaciones entre colecciones y se eliminó el contenido de prueba. Antes de empezar se cerró la parte documental de la 02-01 y se comprobó que la rama es `iteracion/02-02-fichas-unidades` y que `main` contiene `80866c1`.

## Modelo aprobado (tarea 1)

Lo aprobó el desarrollador en el chat el 2026-11-17, con estas tres respuestas:

- **Archivos de bloque:** `src/content/bloques/<unidad>/bloque-<n>.md` (id `u1/bloque-1`). `unidades`: `src/content/unidades/u1.yaml` a `u4.yaml`.
- **«Vitrina y cierre» (U2 y U3) y «Cierre del bootcamp» (U4):** archivo `<unidad>/cierre.md` con `cierre: true`, sin `numero`, uno como máximo por unidad y siempre al final. Microcharla «—» se carga como `microcharlaMin: 0`.
- **«Holgura» (U1: 2 min; U3: 5 min):** campo `holguraMin` de la unidad, que no se muestra como bloque. `src/lib/unidades.ts` exige que bloques + holgura sumen `duracionMin`.
- **Marcas Markdown:** en los campos de texto simple se quitan `**` y las comillas invertidas (`optimizador-prompts` → optimizador-prompts). Las comillas «» del título del mini-proyecto y el punto final del encabezado también se quitan, porque son formato del documento.
- **Origen de los títulos de bloque:** las tablas de cada unidad (lo pide la tarea 5). En U4, los bloques 2 y 3 llevan en la tabla un paréntesis que el encabezado no trae («(instalar, probar, entender)», «(archivos de referencia y flujos guiados)»); se usó el de la tabla.

## Archivos creados, modificados o eliminados

| Archivo | Cambio |
| :------ | :----- |
| `src/content.config.ts` | Colección `bloques` (cargador `glob`); `unidades` sin `bloques` ni `prompts`, con `holguraMin`; regla «`numero` o `cierre`» |
| `src/lib/unidades.ts` | Nuevo: `obtenerUnidadesConBloques()` con `getEntry` y las comprobaciones |
| `src/pages/index.astro` | Llama a `obtenerUnidadesConBloques()` en el frontmatter, sin mostrar nada |
| `src/content/unidades/u1.yaml` a `u4.yaml` | Nuevos: fichas reales |
| `src/content/bloques/u1/` a `u4/` | Nuevos: 26 archivos de bloque con el cuerpo vacío |
| `src/content/unidades/prueba.yaml` | Eliminado (autorizado por la iteración) |
| `src/content/recursos.yaml`, `descargas.yaml` | Sin la entrada de prueba: `[]` con su comentario de cabecera |
| `iteracion-02-01-portada.md` | Cierre: Terminada, dos criterios marcados y una nota de evidencia |
| `iteracion-02-02-fichas-unidades.md` | Estado y criterios con evidencia |
| `decisiones.md` | RDA-009 y actualización de la RDA-008 |
| `registro-pendientes.md` | Cierre de la 02-01, estado de la 02-02, backlog e historial |

## Comparación de bloques y minutos

Fuente: tablas «# / Bloque / Tipo / Min» (U1) y «Distribución de la clase» (U2 a U4) de `unidades-del-curso.md` v5. Carga: frontmatter de cada archivo.

| Unidad | Archivo | Título | Documento (min) | Cargado (min) | Tipo o microcharla + práctica |
| :----- | :------ | :----- | :-------------- | :------------ | :---------------------------- |
| U1 | `bloque-1` | Bienvenida y encuadre del bootcamp | 5 | 5 | Exposición |
| U1 | `bloque-2` | Fundamentos de IA generativa y uso responsable | 20 | 20 | Exposición interactiva + mini-prueba |
| U1 | `bloque-3` | Gemini en el ecosistema de Google | 10 | 10 | Demostración + verificación de cuenta |
| U1 | `bloque-4` | Ingeniería de prompts: fundamentos y ejercicios relámpago | 18 | 18 | Exposición + práctica guiada |
| U1 | `bloque-5` | Laboratorio: Gemini en tu trabajo y tu plantilla de prompt | 65 | 65 | Recorrido de 5 min + práctica de 60 min |
| U1 | `holguraMin` | Holgura | 2 | 2 | — |
| U2 | `bloque-0` | Repaso y brief del caso | 5 | 5 | 3 + 2 |
| U2 | `bloque-1` | Modelos y niveles de razonamiento → planilla | 15 | 15 | 3 + 12 |
| U2 | `bloque-2` | Deep Research → informe en Docs | 20 | 20 | 3 + 17 |
| U2 | `bloque-3` | Infografía con marca: imagen vs. código | 20 | 20 | 3 + 17 |
| U2 | `bloque-4` | Presentación con marca en Canvas | 20 | 20 | 3 + 17 |
| U2 | `bloque-5` | Dashboard interactivo con marca en Canvas | 30 | 30 | 3 + 27 |
| U2 | `cierre` | Vitrina y cierre | 10 | 10 | 0 + 10 |
| U3 | `bloque-0` | Repaso y brief del caso | 5 | 5 | 2 + 3 |
| U3 | `bloque-1` | Fuentes: archivos, URL, YouTube, Fast Research y Deep Research | 20 | 20 | 3 + 17 |
| U3 | `bloque-2` | Configurar el chat y conversar con el cuaderno | 20 | 20 | 3 + 17 |
| U3 | `bloque-3` | Studio: transformar fuentes en recursos de estudio | 20 | 20 | 3 + 17 |
| U3 | `bloque-4` | Presentaciones: configuración y el poder del prompt de diseño | 20 | 20 | 3 + 17 |
| U3 | `bloque-5` | Del cuaderno al curso interno: crear archivos desde el chat | 20 | 20 | 2 + 18 |
| U3 | `cierre` | Vitrina y cierre | 10 | 10 | 0 + 10 |
| U3 | `holguraMin` | Holgura | 5 | 5 | — |
| U4 | `bloque-0` | Repaso y brief del cierre | 5 | 5 | 2 + 3 |
| U4 | `bloque-1` | De Gems a Skills: qué son, por qué cambian y cómo se usan | 12 | 12 | 3 + 9 |
| U4 | `bloque-2` | Skill 1: optimizador-prompts (instalar, probar, entender) | 23 | 23 | 3 + 20 |
| U4 | `bloque-3` | Skill 2: gtd-visual (archivos de referencia y flujos guiados) | 25 | 25 | 3 + 22 |
| U4 | `bloque-4` | Crea tu propia skill | 25 | 25 | 3 + 22 |
| U4 | `bloque-5` | Proyecto integrador y Demo Day | 25 | 25 | 2 + 23 |
| U4 | `cierre` | Cierre del bootcamp | 5 | 5 | 0 + 5 |

Totales medidos con `grep '^minutos:'` + `awk` sobre los archivos: U1 5 archivos, 118 + 2 de holgura = 120; U2 7 archivos, 120; U3 7 archivos, 115 + 5 = 120; U4 7 archivos, 120. Coincide con los totales de las tablas (U2 18 + 102, U3 16 + 99 + 5, U4 16 + 104). El build lo vuelve a comprobar en cada compilación.

## Omisiones (solo para el instructor o fuera del modelo)

Se copió literal lo que es para participantes. No se cargaron:

- Del encabezado de cada unidad, el reparto «Exposición ~40 % / práctica ~60 % (excepción del curso)» (U1) y «Exposición ≤ 15 % (… min en microcharlas) / práctica ~85 %» (U2 a U4): es diseño de la clase.
- «Si te atrasas…» y «Orquestación del tiempo» de cada unidad: son indicaciones al instructor.
- La fila «Total» de las tablas de U2 a U4: se deriva de los bloques.
- De la U2, la tabla «Pieza / Herramienta / Hito» y «Materiales que deben estar en el LMS antes de la clase» (kit de marca con `PENDIENTE_CLIENTE`, dataset, etc.): el kit y los materiales son de la épica 03.
- De la U3, «Enfoque de la herramienta», «Carril alternativo», «Advertencia de contenido» y la tabla «Pieza del kit»: son para participantes, pero el modelo aprobado no tiene campos para ellas. Pueden ir en el texto de los bloques (02-06) o en un campo nuevo en la épica 03. La advertencia («no es asesoría legal») conviene no perderla.
- De la U4, «Materiales que deben estar en el LMS» (`PENDIENTE_DESARROLLADOR` del logo): épica 03.
- Las secciones «Profundiza en el LMS» y «Pendientes y verificaciones» de cada unidad: «Profundiza» es de la épica 03; los pendientes son para el instructor y traen marcadores.
- El texto de cada bloque (incluido el de los cierres): 02-05 y 02-06.

## Verificación

- `pnpm prettier --write` sobre los tres archivos de código. `pnpm astro check`: 0 errores, 0 advertencias, 0 sugerencias.
- `pnpm build`: «Complete!», con **2 advertencias nuevas**: `[WARN] [file-loader] No items found in ./src/content/recursos.yaml` y lo mismo en `descargas.yaml`. El desarrollador las aceptó hasta la épica 03 (ver «Decisiones tomadas»).
- Tres casos de falla (tarea 7), cada uno revertido con la edición inversa (no con `git checkout`, por lo aprendido en la 02-01):
  - `unidad: u9` en `u1/bloque-1.md` → `Error: El bloque «u1/bloque-1» apunta a la unidad «u9», que no existe en src/content/unidades/`.
  - `numero: 1` en `u1/bloque-2.md` → `Error: La unidad «u1» repite el número de bloque 1 (en «u1/bloque-2»)`.
  - `u9.yaml` copia de `u4.yaml` sin bloques → `Error: La unidad «u9» no tiene bloques en src/content/bloques/`.
  - Extra: `holguraMin: 3` en U1 → `Error: La unidad «u1» suma 121 min entre bloques y holgura, pero «duracionMin» es 120`.
  - Después de revertir, `head` confirma `unidad: u1` y `numero: 1`/`2`, `holguraMin: 2`, y `pnpm build` termina en «Complete!».
- Interfaz sin cambios: se compiló `HEAD` (`git archive HEAD` en una carpeta temporal, con `node_modules` enlazado) y se comparó `dist/index.html` con el de la rama: **SHA-256 idéntico**, 14 archivos en ambos `dist/`.
- `grep -rni prueba src/content`: 1 coincidencia, el tipo literal «Exposición interactiva + mini-prueba» del bloque 2 de U1 (dato del curso, no contenido de prueba); 0 si se excluye «mini-prueba».
- `grep -rnE "PENDIENTE_|VERIFICAR" src/content`: 0. `grep -rnE '\*\*|`' src/content`: 0.

## Criterios de aceptación

Ver la iteración: 7 de 8 marcados con su evidencia. Queda sin marcar «sin advertencias nuevas», por las 2 advertencias del cargador `file`.

## No se pudo verificar

- Revisión visual en `pnpm preview` (360 px, escritorio, ambos modos): no se hizo en un navegador. Como el HTML es idéntico byte a byte al de `HEAD` y los CSS y JS no cambiaron (mismo número de archivos), la página se ve igual a la que el desarrollador aprobó en la 02-01.

## Decisiones tomadas

- **Advertencias del cargador vacío:** el desarrollador eligió aceptarlas hasta la épica 03 (alternativas descartadas: quitar las colecciones y sus referencias del esquema, o usar un cargador en línea vacío).
- `index.astro` ejecuta `obtenerUnidadesConBloques()` sin usar el resultado, para que las comprobaciones corran en cada build desde ya; la 02-03 lo usará para la ruta.
- El bloque de cierre se ordena con `numero ?? Infinity`, así queda siempre al final.
- `prompts` se quitó del esquema de la unidad y pasó a cada bloque, sin el campo `bloque` que validar (la comprobación de la 01-04 desaparece con él).
- El objetivo de cada unidad empieza en minúscula («que cada participante…») porque así está en el documento; si la ruta lo muestra solo, la épica 03 decide cómo presentarlo, sin reescribir el dato.

## Pendientes y riesgos

- Las 2 advertencias desaparecen solo cuando la épica 03 cargue el primer recurso y la primera descarga.
- El mini-proyecto de la U3 dice que la Ley 21.719 «entra en vigencia el 1 de diciembre de 2026». El documento pide confirmarlo en bcn.cl antes de la clase; se copió literal.
- Si una página futura deja de llamar a `obtenerUnidadesConBloques()`, las comprobaciones entre colecciones dejan de correr (RDA-009).
- Los textos de la U3 para participantes que no tienen campo (advertencia legal, carril alternativo) quedan para la 02-06 o la épica 03.

## Revisión

- **Resultado frente al objetivo:** cumplido. Las 4 fichas y los 26 bloques están cargados con datos literales, validados al compilar y sin contenido de prueba. La única diferencia con la definición de terminado son las 2 advertencias aceptadas.
- **Qué aprendimos:** el cargador `file` advierte con un arreglo vacío y el `glob` no tiene problema con cuerpos vacíos. Las comprobaciones entre colecciones necesitan que una página las ejecute: el esquema por sí solo no ve las demás entradas. El hook del proyecto bloquea crear `.md` desde Bash incluso en `src/content/`, así que hay que crearlos con Write.
- **Qué cambia para lo que sigue:** la 02-03 obtiene unidades y bloques ordenados con `obtenerUnidadesConBloques()`. La 02-05 y la 02-06 escriben el cuerpo de cada `.md` y sus `prompts`, y deciden dónde van los textos de la U3 que no tienen campo.

## Commit sugerido

`Épica 2 - Iteración 02-02: carga las fichas reales de las 4 unidades y un .md por bloque (RDA-009), valida bloques y minutos al compilar y elimina el contenido de prueba`
