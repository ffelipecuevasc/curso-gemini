# Bitácora 03-03 · Descargas y «Profundiza»

- **Fecha:** 2026-11-17
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/03-03-descargas-profundiza
- **Estado final:** En revisión

## Resumen

Las descargas muestran ahora el formato y el peso medidos del archivo real al compilar (RDA-010). La primera es el dataset CSV de la U2, que aparece en su ficha. «Profundiza en tu tiempo» queda listo como `<details>` nativo, cerrado y sin JavaScript, y se dibuja solo en los bloques que tengan `profundiza`. Hoy ninguno lo tiene: la asignación es de la 03-04 y la 03-05. El build ya no emite advertencias.

Antes de empezar se comprobó:
- que la rama es `iteracion/03-03-descargas-profundiza`;
- que `main` contiene `6dc0dfc` (la 03-02 y el dataset);
- que el árbol estaba limpio;
- que `public/descargas/dataset-ficticio-solicitudes-gtd-t3-2026.csv` existe (26 015 B) y está en git.

Se cerró la 03-02 con la revisión en navegador del desarrollador.

## Archivos creados, modificados o eliminados

| Archivo | Cambio |
| :------ | :----- |
| `src/lib/descargas.ts` | Nuevo: mapa de extensiones, peso con coma decimal y errores de compilación |
| `src/lib/node-minimo.d.ts` | Nuevo: tipos mínimos de `node:fs`, `node:path` y `process` (sin `@types/node`) |
| `src/components/TarjetaDescarga.astro` | Nuevo: título, «archivo · formato · peso» y botón de contorno «Descargar» con `download` |
| `src/components/Profundiza.astro` | Nuevo: `<details>` con `summary` «Profundiza en tu tiempo», texto opcional y `RecursoExterno` |
| `src/content.config.ts` | Esquema `descarga`: `id`, `titulo`, `archivo`; sin `formato` ni `pesoKB` |
| `src/content/descargas.yaml` | Entrada `dataset-ficticio-solicitudes` |
| `src/content/unidades/u2.yaml` | `descargas: [dataset-ficticio-solicitudes]` |
| `src/lib/unidades.ts` | `comprobarProfundiza()` valida los recursos de «Profundiza» de cada bloque |
| `src/components/SeccionUnidad.astro` | Apartado «Descargas» (`h4`) tras el mini-proyecto |
| `src/components/BloqueClase.astro` | `Profundiza` al final del bloque, si existe |
| `decisiones.md` | RDA-010, su fila en el índice y la nota en la RDA-003 |
| `iteracion-03-02-prompts-recursos.md` | Cierre: Terminada; 3 criterios «dicho por el desarrollador» |
| `iteracion-03-03-descargas-profundiza.md` | Estado, criterios y evidencia |
| `definicion-epica-03.md` | 03-02 Terminada, 03-03 En revisión, RDA-010 registrada |
| `registro-pendientes.md` | Estados, backlog, «Decisiones por tomar» (sale la fila de advertencias) e historial |

## Implementación

- **Título de la descarga:** «Dataset ficticio del curso», tal como lo nombra el documento (`unidades-del-curso.md:272`, U2, «Materiales…», punto 2). La tarjeta también muestra el nombre del archivo, como pide `DESIGN.md` (sección 5).
- **Peso:** 1 KB = 1024 B, con `toLocaleString("es-CL")` a un decimal; desde 1024 KB, en MB.
- **Ubicación:** «Descargas» va justo después del mini-proyecto y antes de la tabla, porque `DESIGN.md` (principio 1) pide que lo que se descarga se vea antes que la teoría.
- **Enlace:** el botón de contorno es un `<a download>` con nombre accesible «Descargar Dataset ficticio del curso (CSV, 25,4 KB)». Lo visible es «Descargar», al inicio del nombre.
- **«Profundiza»:** `<details>` sin `open` y sin animación (`DESIGN.md`, sección 7). El `summary` tiene un alto mínimo de 44 px. El fondo es `superficie`, como indica la tabla 2.1.
- **Tipos de Node:** `astro check` falló con `Cannot find name 'node:fs'` (3 errores), porque el proyecto no tiene `@types/node`. Instalarlo sería una dependencia nueva para 3 funciones, así que se declararon solo esas firmas en `src/lib/node-minimo.d.ts` (RDA-010).

## Verificación

- `pnpm prettier --write` sobre los 7 archivos de código. `pnpm astro check`: 0 errores, 0 advertencias, 0 sugerencias.
- `pnpm build`: «Complete!» con **0 líneas `WARN`**; la advertencia de `descargas.yaml` desapareció.
- **Peso medido frente a `statSync`** (Node):
  - `fs.statSync("public/descargas/dataset-ficticio-solicitudes-gtd-t3-2026.csv").size` = 26 015 B → «25,4 KB».
  - `dist/index.html` contiene «dataset-ficticio-solicitudes-gtd-t3-2026.csv · CSV · 25,4 KB»: **coincide**.
  - `dist/descargas/` trae el mismo archivo (26 015 B).
  - El enlace es `<a href="/descargas/dataset-ficticio-solicitudes-gtd-t3-2026.csv" download …>`.
- **Pruebas reversibles** (`pruebas0303.sh` en el scratchpad). Cada una terminó con «Command failed» y con el archivo restaurado idéntico (`cmp`):
  1. Archivo inexistente (`…-no-existe.csv` en `descargas.yaml`) → `La descarga «/descargas/dataset-ficticio-solicitudes-gtd-t3-2026-no-existe.csv» no existe en public/descargas/dataset-ficticio-solicitudes-gtd-t3-2026-no-existe.csv`.
  2. Extensión desconocida (`.xyz`) → `La descarga «/descargas/dataset-ficticio-solicitudes-gtd-t3-2026.xyz» tiene la extensión «.xyz», que no está en el mapa de formatos de src/lib/descargas.ts`.
  3. Recurso inexistente en «Profundiza» (entrada temporal en U1 · 2) → `[ERROR] [content] Invalid content reference: entry "u1/bloque-2" in collection "bloques" (field: profundiza.recursos[1]) references "recurso-que-no-existe" in collection "recursos", but that entry does not exist.`
- **Hallazgo de la prueba 3:** en los bloques (cargador `glob`), Astro ya valida las referencias y falla antes de llegar a `comprobarProfundiza()`. En las fichas (02-05) no pasaba lo mismo. La comprobación propia queda como segunda red, con un mensaje en español.
- **«Profundiza» temporal válido:** se agregaron `que-es-un-llm` y `tokens` en U1 · 2 y luego se revirtió (`cmp`). El build dio «Complete!», con 1 `<details>` sin `open`, el `summary` «Profundiza en tu tiempo» y 2 recursos, dentro de `#bloque-u1-bloque-2`. En la página final quedan 0 `<details>`.
- **Regresiones** (`medir0302.js` de la 03-02):
  - 24 de 24 prompts idénticos, con 24 IDs únicos y 0 repetidos en la página.
  - El prompt de marca sigue en su paso.
  - 1 `h1`, 6 `h2`, 31 `h3` y 21 `h4` (los 20 de antes más «Descargas» en la U2).
  - 0 `PENDIENTE_` y 0 `VERIFICAR`.
  - JavaScript: 4 etiquetas `<script>` (423 + 799 + 879 + 592 B), 1080 B gzip, igual que en la 03-02: **0 B nuevos**.
- **Contraste sobre `superficie`** (tarjeta y «Profundiza»):

  | Par | Claro | Oscuro | Mínimo exigido |
  | :-- | :---- | :----- | :------------- |
  | Texto | 16,71:1 | 16,69:1 | 4,5:1 |
  | `texto-2` | 10,64:1 | 14,75:1 | 4,5:1 |
  | Enlaces | 5,61:1 | 8,95:1 | 4,5:1 |
  | Borde del botón | 4,09:1 | 6,65:1 | 3:1 (no es texto) |
  | Foco | 4,09:1 | 10,97:1 | 3:1 |

## Criterios de aceptación

Ver la iteración: 3 de 6 marcados con evidencia. Sin marcar:
- La tarjeta: el peso está medido, pero falta comprobar en el navegador que el enlace descarga el archivo.
- «Profundiza» con el teclado: necesita navegador.
- Regresiones: todo está medido salvo 360 px.

## No se pudo verificar · pasos para el desarrollador

Ejecuta `pnpm build` y `pnpm preview`.

1. **Descarga:** en `#unidad-2`, «Descargas» → «Descargar». Debe bajar `dataset-ficticio-solicitudes-gtd-t3-2026.csv` de 26 015 B. Prueba también con `Tab` + `Enter`.
2. **«Profundiza»:** hoy no aparece en la página (ningún bloque lo tiene). Para probarlo, agrega temporalmente en el frontmatter de `src/content/bloques/u1/bloque-2.md`, antes del segundo `---`:
   ```yaml
   profundiza:
     recursos:
       - que-es-un-llm
   ```
   Compila y revisa que aparezca cerrado, que se abra y se cierre con `Enter` y `Espacio`, y que el foco se vea. Después revierte el cambio.
3. **360 px**, en ambos modos: `document.documentElement.scrollWidth === 360`; la tarjeta apila el título y el botón; el nombre largo del archivo se corta en varias líneas sin desbordar.

## Decisiones tomadas

- Tipos de Node locales en lugar de `@types/node` (ver la RDA-010).
- `comprobarProfundiza()` se mantiene aunque Astro ya valide las referencias de los bloques: cuesta 10 líneas y su mensaje está en español.
- Se quitó de «Decisiones por tomar» la fila de las advertencias del cargador `file`, porque ya no queda ninguna.
- No hay cambios para documentos protegidos.

## Pendientes y riesgos

- Falta asignar «Profundiza» bloque por bloque: es la tarea 1 de la 03-04 y la 03-05, con aprobación.
- El resto de las descargas sigue bloqueado hasta que lleguen los archivos (registro, «Decisiones por tomar»).
- `index.html` mide 195 180 B. Sigue recomendado Lighthouse móvil antes de publicar.

## Revisión

- **Resultado frente al objetivo:** cumplido en el código y medido; falta la prueba en el navegador de la descarga, de «Profundiza» con el teclado y de 360 px.
- **Qué aprendimos:**
  - Medir el archivo al compilar evita pesos desactualizados y detecta archivos faltantes.
  - En Astro 7 el cargador `glob` valida las referencias de los bloques, cosa que el `file` de las fichas no hizo en la 02-05.
  - Los tipos de Node se pueden cubrir con una declaración mínima.
- **Qué cambia para lo que sigue:** la 03-04 solo carga datos (`profundiza.recursos`, videos y descargas); los componentes ya están. La línea base de JS sigue en 1080 B gzip.

## Commit sugerido

`Épica 3 - Iteración 03-03: muestra descargas con formato y peso medidos del archivo (RDA-010), agrega «Profundiza» con details y cierra la 03-02`
