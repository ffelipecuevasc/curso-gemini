# Bitácora 01-04 · Modelo de contenido

- **Fecha:** 2026-11-17
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/01-04-modelo-contenido
- **Estado final:** Terminada

## Resumen

Se definieron 4 colecciones de contenido en `src/content.config.ts` (unidades, recursos, descargas y curso), con esquemas Zod 4 estrictos: un campo faltante, desconocido o con formato inválido detiene `pnpm build` y el mensaje nombra la ruta del campo. Hay una unidad ficticia de prueba, una entrada de prueba en recursos y otra en descargas, y los datos generales del curso (título, 4 clases, 480 min) tomados del documento de unidades (v5). No se crearon componentes ni secciones visuales, y el HTML compilado no cambia: 0 B de JavaScript nuevo.

## Modelo aprobado

Aprobado por el desarrollador en el chat («tal cual»), antes de escribirlo.

| Colección | Origen | Campos |
| :-------- | :----- | :----- |
| `unidades` | `src/content/unidades/*.yaml` | `numero` (1–4), `titulo`, `clase`, `duracionMin`, `nivel`, `avance` (`desde` < `hasta`, 0–100), `objetivo`, `miniProyecto` (`titulo`, `descripcion`), `entregable`, `bloques[]`, `prompts[]`, `terminadoCuando[]` (mínimo 1), `recursos[]` y `descargas[]` (referencias) |
| ↳ bloque | — | `numero` (desde 0, la U2 a U4 tienen bloque 0), `titulo`, `minutos`, y `tipo` (U1) o `microcharlaMin` + `practicaMin` (U2 a U4), que deben sumar `minutos`; `profundiza` opcional (`texto`, `recursos[]`) |
| ↳ prompt | — | `id`, `titulo`, `bloque` (debe existir en la unidad), `texto` literal |
| `recursos` | `src/content/recursos.yaml` | `id`, `tipo` (`documento` o `video`), `titulo`, `sitio`, `url` (solo `https://`) |
| `descargas` | `src/content/descargas.yaml` | `id`, `archivo` (`/descargas/…` en ASCII, minúsculas y guiones), `formato`, `pesoKB` |
| `curso` | `src/content/curso.yaml` | `id`, `titulo`, `clases`, `duracionTotalMin` |

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `src/content.config.ts` | Nuevo: 4 colecciones con cargadores `glob` y `file` y esquemas estrictos |
| `src/content/unidades/prueba.yaml` | Nuevo: unidad ficticia marcada como prueba, con un bloque de cada forma, un prompt y referencias |
| `src/content/recursos.yaml`, `src/content/descargas.yaml` | Nuevos: una entrada de prueba cada uno |
| `src/content/curso.yaml` | Nuevo: título, clases y duración total del curso |
| `iteracion-01-04-modelo-contenido.md` | Estado y criterios con evidencia |
| `iteracion-01-03-layout-navegacion-modos.md`, `bitacora-01-03.md` | Estado «Terminada» y criterios comprobados por el desarrollador |
| `decisiones.md` | RDA-007: sin JavaScript, el sitio se muestra en modo claro |
| `registro-pendientes.md` | Estados, backlog, decisión pendiente del avance, propuesta e historial |

## Verificación

- `pnpm format`: sin errores (formateó `src/content.config.ts`).
- `pnpm astro check`: 0 errores (10 archivos).
- `pnpm build`: «Complete!», sin advertencias; `dist/` con 0 archivos `.js` y ningún `PENDIENTE_` en `index.html`.
- Pruebas de rotura (cada una con el archivo restaurado después y comprobado con `cmp`):

| Cambio | Resultado de `pnpm build` |
| :----- | :------------------------ |
| Sin `objetivo` | Falla: `unidades → prueba … objetivo: Required` |
| URL `http://` | Falla: `recursos → prueba-documento … url: La URL debe empezar con https://` |
| `avance.hasta: 120` | Falla: `avance.hasta: Too big: expected number to be <=100` |
| `desde` 30 y `hasta` 25 | Falla: `avance: «avance.desde» debe ser menor que «avance.hasta»` |
| Prompt en el bloque 9 | Falla: `prompts.0.bloque: El prompt «prompt-de-prueba» apunta al bloque 9, que no existe en la unidad` |
| Referencia a un recurso inexistente | **Pasa** (ver «Pendientes y riesgos») |

- Tipos: con una lectura temporal de `getCollection("unidades")` en `index.astro`, `pnpm astro check` dio 0 errores; asignar `data.numero` a un `string` dio `ts(2322)`. La lectura se revirtió.

## Criterios de aceptación

- [x] Modelo aprobado y anotado en esta bitácora.
- [x] `pnpm build` falla nombrando el campo faltante y pasa con contenido válido.
- [x] Un recurso `http://` hace fallar la compilación.
- [x] Tipos disponibles al leer una colección desde `index.astro`.

## Diferencias entre lo planificado y lo encontrado

- El documento de unidades no trae el **% de avance** de cada unidad. El esquema lo exige; en la épica 03 hace falta el dato (registrado en «Decisiones por tomar»).
- Los bloques de U2 a U4 no tienen «tipo»: separan los minutos en microcharla y práctica. El esquema acepta las dos formas en vez de inventar un tipo.
- El cargador `file` deja el `id` de cada entrada dentro de los datos, así que los esquemas estrictos de recursos, descargas y curso lo declaran.
- La iteración no indica una ruta para el documento de unidades; quedó donde está, en `_planificacion/00_producto/`. Ese archivo no figura en la lista de documentos permitidos: se registró la propuesta.

## No se pudo verificar

- Nada pendiente: esta iteración no cambia la interfaz (el HTML compilado no usa las colecciones), así que no hay revisión en el navegador.

## Decisiones tomadas

- YAML para los datos: los prompts multilínea se escriben literales con `|`, sin escapar.
- `curso` como colección de una entrada, según el modelo aprobado.
- El contenido de prueba es ficticio y lo dice en su título y en un comentario; se reemplaza en la épica 03.

## Pendientes y riesgos

- **Referencias sin comprobar al compilar:** Astro no valida que exista el recurso o la descarga referida hasta que se resuelve con `getEntry`. Los componentes de la 03-01 deben lanzar un error si `getEntry` devuelve `undefined`, para que `pnpm build` falle.
- La entrada de prueba de descargas apunta a `/descargas/prueba.txt`, que no existe; el esquema no comprueba el archivo. La 03-01 puede agregar esa comprobación.
- % de avance de cada unidad: decisión del desarrollador.

## Revisión

- **Resultado frente al objetivo:** cumplido. Las unidades se pueden cargar como datos validados y tipados, y los cuatro criterios tienen evidencia ejecutada.
- **Qué aprendimos:** en Zod 4, `z.url({ protocol: /^https$/ })` basta para exigir `https://`; `reference()` no rompe el build por sí sola.
- **Qué cambia para lo que sigue:** la épica 03 borra `prueba.yaml` y las entradas de prueba al cargar la U1, y necesita el % de avance. La 01-05 no depende de esta iteración.

## Commit sugerido

`Épica 1 - Iteración 01-04: agrega colecciones de contenido con esquemas Zod estrictos y contenido de prueba; cierra la 01-03 y registra la RDA-007`
