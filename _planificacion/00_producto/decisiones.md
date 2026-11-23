# Registro de Decisiones Arquitectónicas (RDA)

Consolidado de las decisiones técnicas del proyecto. Reglas en `_planificacion/README.md` (sección 5.3) y plantilla en `_planificacion/plantillas/rda.md`.

| RDA | Título | Estado |
| :-- | :----- | :----- |
| RDA-001 | Nivel de proceso | Aceptada |
| RDA-002 | Sitio estático con Astro, Tailwind CSS v4 y PNPM en Cloudflare Workers | Aceptada |
| RDA-003 | Contenido del curso en colecciones de contenido | Aceptada |
| RDA-004 | Identidad visual de felipecuevas.dev, estilo Moderno y creativo | Aceptada |
| RDA-005 | Medición con Cloudflare Web Analytics por script | Aceptada |
| RDA-006 | Fuentes autoalojadas desde paquetes de Fontsource | Aceptada |
| RDA-007 | Sin JavaScript, el sitio se muestra en modo claro | Aceptada |
| RDA-008 | Avance de cada unidad en cuatro tramos iguales | Aceptada |
| RDA-009 | Un archivo `.md` por bloque, en su propia colección | Aceptada |
| RDA-010 | Formato y peso de las descargas medidos del archivo al compilar | Aceptada |
| RDA-011 | Modales sobre `<dialog>` nativo con script mínimo y respaldo sin JavaScript | Aceptada |
| RDA-012 | Síntesis por bloque y por unidad en el modelo de contenido, con límites de palabras | Aceptada |
| RDA-013 | Sin barras de avance: la ruta y las unidades muestran su lugar en el curso | Aceptada (reemplazada parcialmente por RDA-014) |
| RDA-014 | Recorrido de la página: instructor antes de las unidades, ruta como índice y unidades en salas | Aceptada |

---

## RDA-001 · Nivel de proceso

- **Fecha:** 2026-11-17
- **Estado:** Aceptada

**Contexto:** el proceso de trabajo (especificaciones, contrato de la API, auditorías, plan técnico) se ajusta a la complejidad del proyecto para no crear documentos que no aportan.
**Decisión:** nivel **pequeño**. Factores: una sola página estática, sin backend, sin autenticación, sin datos personales ni formularios, una única integración liviana (el script de Web Analytics) y despliegue de recursos estáticos; la exigencia está en la calidad (rendimiento, accesibilidad AA y volumen de contenido), que se cubre con las reglas técnicas y la definición de terminado de `AGENTS.md`. Componentes activos: `AGENTS.md`, `DESIGN.md` breve, `README.md`, `.claude/`, `producto.md`, registro con backlog, RDA, épicas con iteraciones y bitácoras.
**Alternativas consideradas:** nivel mediano, con especificaciones por funcionalidad y auditoría antes de cerrar cada épica; se descartó porque el sitio no tiene lógica de negocio ni varios caminos posibles que especificar.
**Consecuencias:** quedan fuera a propósito las especificaciones, las auditorías, el plan técnico obligatorio, el contrato OpenAPI y la línea base de producción. El nivel se revisa si aparece un factor nuevo: cuentas de usuario, guardar el avance en un servidor, formularios, datos personales o una integración nueva.

---

## RDA-002 · Sitio estático con Astro, Tailwind CSS v4 y PNPM en Cloudflare Workers

- **Fecha:** 2026-11-17
- **Estado:** Aceptada

**Contexto:** la página debe destacar por rendimiento y accesibilidad, tiene mucho contenido repetido (4 unidades con bloques, prompts y recursos) y se publica gratis en Cloudflare.
**Decisión:** Astro con salida estática y TypeScript estricto, Tailwind CSS v4 con los tokens en `@theme`, y PNPM en modo estricto. El resultado de `pnpm build` (`dist/`) se publica en Cloudflare Workers como recursos estáticos, configurados en `wrangler.jsonc`, con la URL gratuita `*.workers.dev`. Sin framework de componentes interactivos: los tres comportamientos con script (modo, copiar y menú) se escriben sin dependencias.
**Alternativas consideradas:** HTML y JavaScript a mano con Vite y Tailwind (más trabajo para mantener el contenido repetido y sin validación del contenido); Cloudflare Pages (Cloudflare recomienda Workers con recursos estáticos para proyectos nuevos, y el desarrollador eligió Workers).
**Consecuencias:** casi cero JavaScript enviado y contenido validado al compilar. Hay que vigilar que ninguna dependencia nueva agregue scripts al cliente y mantener `wrangler.jsonc` alineado con la carpeta de salida.

---

## RDA-003 · Contenido del curso en colecciones de contenido

- **Fecha:** 2026-11-17
- **Estado:** Aceptada

**Contexto:** el contenido sale de `unidades-del-curso.md`, que el desarrollador sigue ajustando, y cada unidad repite la misma estructura (bloques, minutos, prompts, recursos, lista de terminado).
**Decisión:** el contenido vive en colecciones de contenido de Astro en `src/content/`, con un esquema Zod por tipo (unidad, bloque, prompt, recurso, descarga). Los componentes solo leen esas colecciones; no llevan textos del curso escritos a mano. Los prompts se guardan como texto literal, para copiarlos tal cual.
**Alternativas consideradas:** escribir el contenido directo en los componentes (rápido al inicio, pero mezcla diseño y contenido y no valida nada); un CMS externo (agrega una integración y un servicio que el proyecto no necesita).
**Consecuencias:** corregir un prompt o un enlace es editar un archivo de contenido. El esquema debe definirse antes de cargar las unidades, y un contenido que no cumple el esquema hace fallar la compilación.
**Actualización 2026-11-17 (03-03):** los campos `formato` y `pesoKB` de la descarga los reemplaza la RDA-010; el esquema de descarga queda con `id`, `titulo` y `archivo`.

---

## RDA-004 · Identidad visual de felipecuevas.dev, estilo Moderno y creativo

- **Fecha:** 2026-11-17
- **Estado:** Aceptada

**Contexto:** el curso es de Felipe Cuevas; el cliente final es GTD vía Capacita Tu Futuro, y el kit de marca de GTD tiene colores aproximados y tipografía sin confirmar.
**Decisión:** el sitio usa la identidad visual de felipecuevas.dev (paleta Orient y dorado; Sora, Work Sans e IBM Plex Mono) en el estilo Moderno y creativo, con modo claro y oscuro y selector, y redes pequeñas en la esquina inferior izquierda de la portada. Los logotipos de Gemini y Google aparecen en la portada para identificar las herramientas del curso. El detalle vive en `DESIGN.md`.
**Alternativas consideradas:** marca GTD (pendientes de confirmación del cliente y de autorización de uso); diseño neutro con acentos GTD. Se compararon cuatro estilos de la identidad en vistas previas (Minimalista, Moderno, Tecnológico y Vibrante) y el desarrollador eligió Moderno y creativo.
**Consecuencias:** el sitio no depende de datos de marca del cliente. La paleta GTD solo aparece como contenido del curso (kit de marca de la U2), no como diseño del sitio.

---

## RDA-005 · Medición con Cloudflare Web Analytics por script

- **Fecha:** 2026-11-17
- **Estado:** Aceptada

**Contexto:** el desarrollador quiere medir las visitas sin cookies ni datos personales, y el sitio se publica en una URL `workers.dev`, que no pasa por un dominio propio administrado en Cloudflare.
**Decisión:** Cloudflare Web Analytics con su script de medición (beacon) y el token del sitio, insertado una sola vez en el layout, con `defer`. Es la única excepción a la regla de no cargar recursos de terceros en tiempo de ejecución. El token lo crea y entrega el desarrollador; no es un secreto, porque viaja en el HTML.
**Alternativas consideradas:** sin medición; Google Analytics (usa cookies y pesa más); la activación automática de Web Analytics (requiere que el tráfico pase por un dominio administrado en Cloudflare).
**Consecuencias:** un script externo pequeño y diferido. Hay que confirmar en el panel de Cloudflare que el sitio registra visitas después de publicar, y revisar que el script no baje la nota de Rendimiento.

---

## RDA-006 · Fuentes autoalojadas desde paquetes de Fontsource

- **Fecha:** 2026-11-17
- **Estado:** Aceptada

**Contexto:** `DESIGN.md` pide Sora (600, 700), Work Sans (400, 500) e IBM Plex Mono (400, 500) en `woff2`, con subconjunto latino, autoalojadas y sin Google Fonts ni otro origen externo en tiempo de ejecución.
**Decisión:** los `woff2` salen de `@fontsource/sora`, `@fontsource/work-sans` y `@fontsource/ibm-plex-mono` 5.3.0, instalados como dependencias de desarrollo con versión exacta. Los `@font-face` se escriben a mano en `src/styles/global.css` (solo `woff2`, subconjunto latino, los pesos de `DESIGN.md` y `font-display: swap`) y no se importan los CSS de Fontsource. Vite emite los archivos a `dist/_astro/` con un hash en el nombre. La precarga de Sora 700 y Work Sans 400 obtiene esa ruta con `?url` en el frontmatter, y el `<link rel="preload">` lleva `crossorigin`. Las fuentes tienen licencia SIL OFL 1.1.
**Alternativas consideradas:** copiar los `woff2` oficiales a `public/fuentes/` sin dependencias (cero paquetes, pero las actualizaciones son a mano, los nombres no llevan hash, lo que impide guardarlos en caché de forma indefinida, y la procedencia del archivo no queda registrada); importar los CSS de Fontsource (traen todos los subconjuntos y el respaldo `woff`, que no se necesitan).
**Consecuencias:** las fuentes quedan versionadas en `pnpm-lock.yaml`, con nombres con hash que admiten caché larga, y no envían JavaScript. `public/fuentes/` deja de existir (propuesta P-002 para `README.md`). Hay que vigilar que, si se actualiza Fontsource, los nombres de archivo de `global.css` y de la precarga sigan existiendo: después de actualizar, se revisa que `dist/_astro/` tenga los seis `woff2` y que la precarga apunte a ellos.

---

## RDA-007 · Sin JavaScript, el sitio se muestra en modo claro

- **Fecha:** 2026-11-17
- **Estado:** Aceptada

**Contexto:** el modo oscuro se aplica con `data-modo="oscuro"`, que pone el script en línea del `<head>` según la elección guardada o `prefers-color-scheme` (iteración 01-03). Sin JavaScript, ese atributo no existe.
**Decisión:** sin JavaScript el sitio queda en modo claro. No se duplican los tokens oscuros en una consulta `@media (prefers-color-scheme: dark)`.
**Alternativas consideradas:** repetir los 13 tokens oscuros bajo `prefers-color-scheme` para seguir al sistema sin script; se descartó porque duplica la paleta en dos lugares que hay que mantener iguales, para un caso marginal.
**Consecuencias:** sin JavaScript el contenido se lee completo y con los contrastes de `DESIGN.md`, siempre en claro. Agregar la consulta de medios requiere una RDA nueva.

---

## RDA-008 · Avance de cada unidad en cuatro tramos iguales

- **Fecha:** 2026-11-17
- **Estado:** Aceptada

**Contexto:** el esquema de `unidades` exige `avance.desde` y `avance.hasta` (0–100), y el documento de unidades del curso no trae esos valores (bitácora 01-04).
**Decisión:** el desarrollador fija cuatro tramos iguales: U1 0–25, U2 25–50, U3 50–75 y U4 75–100. Se cargan en el YAML de cada unidad en la épica 03 y los muestra la ruta del curso de la épica 02.
**Alternativas consideradas:** tramos proporcionales a los minutos de cada clase; no aportan nada porque las 4 clases duran lo mismo, y los tramos iguales se leen más fácil.
**Consecuencias:** el dato deja de estar pendiente. El contenido de prueba (`prueba.yaml`) no cambia; se reemplaza en la épica 03.

**Actualización 2026-11-17:** el contenido de prueba se reemplazó en la 02-02, no en la épica 03. Los tramos ya están cargados en `src/content/unidades/u1.yaml` a `u4.yaml`.

**Actualización 2026-11-21:** la RDA-013 deja de mostrar los tramos de la RDA-008 como barras; los tramos siguen en el esquema y en los YAML de las unidades, sin mostrarse.

---

## RDA-009 · Un archivo `.md` por bloque, en su propia colección

- **Fecha:** 2026-11-17
- **Estado:** Aceptada

**Contexto:** cada bloque necesita un texto «Para la clase» con listas, negritas y prompts, y el esquema de la 01-04 guardaba los bloques y los prompts dentro del YAML de cada unidad, sin un lugar para ese texto. Además, `reference()` no hace fallar el build si la entrada referida no existe (bitácora 01-04).
**Decisión:** la colección `unidades` (YAML) guarda solo la ficha: título completo, clase, duración, nivel, avance (RDA-008), objetivo, mini-proyecto, entregable, `holguraMin` opcional, «Terminado cuando…», recursos y descargas. La colección nueva `bloques` usa el cargador `glob` sobre `src/content/bloques/<unidad>/bloque-<n>.md`: el frontmatter trae `unidad` (referencia), `numero`, `titulo`, `minutos`, `tipo` o `microcharlaMin` + `practicaMin`, `prompts` (texto literal) y `profundiza`; el cuerpo Markdown es el texto «Para la clase», que se muestra con `render()` sin dependencias nuevas. La fila de cierre de U2 a U4 («Vitrina y cierre», «Cierre del bootcamp») es `<unidad>/cierre.md`, con `cierre: true` y sin número; la holgura de U1 y U3 es `holguraMin` en la unidad, no un bloque. Los campos de texto simple se guardan sin `**` ni comillas invertidas. `src/lib/unidades.ts` resuelve cada unidad con `getEntry` y lanza un error si un bloque apunta a una unidad inexistente, si se repite un número de bloque, si hay más de un cierre, si una unidad queda sin bloques o si bloques + holgura no suman `duracionMin`; `index.astro` lo ejecuta al compilar.
**Alternativas consideradas:** el texto de cada bloque como campo de varias líneas en el YAML de la unidad (un archivo enorme, sin resaltado de Markdown y con riesgo de errores de sangría); darle al cierre el número 6 (agrega un dato que el documento no trae); un campo `cierre` en la unidad (quedaría sin cuerpo para su texto); omitir la holgura (se pierde la comprobación de que los minutos suman 120).
**Consecuencias:** cada bloque se edita en su archivo y la compilación detecta errores al traspasar las tablas. Las comprobaciones entre colecciones solo corren si una página llama a `obtenerUnidadesConBloques()`; si `index.astro` deja de hacerlo, se pierden. Mientras `recursos.yaml` y `descargas.yaml` estén vacíos, `pnpm build` emite dos advertencias `No items found`, aceptadas por el desarrollador hasta la épica 03.

---

## RDA-010 · Formato y peso de las descargas medidos del archivo al compilar

- **Fecha:** 2026-11-17
- **Estado:** Aceptada

**Contexto:** `AGENTS.md` (regla técnica 7) exige que cada enlace de descarga muestre el formato y el peso del archivo. La RDA-003 los dejaba como campos escritos a mano (`formato`, `pesoKB`), que se desactualizan en cuanto el desarrollador cambia un archivo y no avisan si el archivo falta.
**Decisión:** el esquema de descarga guarda solo `id`, `titulo` y `archivo` (ruta en `/descargas/`, ASCII y minúsculas). `src/lib/descargas.ts` calcula al compilar el formato (mapa de extensiones) y el peso (`fs.statSync` sobre `public/` más la ruta, 1 KB = 1024 B, con coma decimal: «25,4 KB»). Un archivo que no existe o una extensión fuera del mapa hacen fallar `pnpm build`. Los tipos de Node que usa van en `src/lib/node-minimo.d.ts`, sin agregar `@types/node`.
**Alternativas consideradas:** mantener `formato` y `pesoKB` escritos a mano (se desactualizan y no detectan un archivo faltante); agregar `@types/node` (una dependencia para tres funciones); medir en el navegador con una petición `HEAD` (agrega JavaScript y no falla al compilar).
**Consecuencias:** cambiar un archivo de descarga actualiza su peso en el siguiente build, sin tocar el contenido. Una extensión nueva se agrega a propósito al mapa. Como Astro copia `public/` a `dist/` sin cambios, el peso mostrado es el del archivo publicado. Si el proyecto llega a instalar `@types/node`, `node-minimo.d.ts` se borra.
**Ratificación 2026-11-17:** el desarrollador ratificó `src/lib/node-minimo.d.ts` (tipos mínimos de Node sin `@types/node`).

---

## RDA-011 · Modales sobre `<dialog>` nativo con script mínimo y respaldo sin JavaScript

- **Fecha:** 2026-11-18
- **Estado:** Aceptada

**Contexto:** la épica 05 necesita que cada unidad quepa en una pantalla de escritorio, así que el detalle de los bloques, los prompts, los recursos y las descargas tienen que mostrarse bajo demanda. `AGENTS.md` (regla técnica 2) permite solo tres comportamientos con script, y la RDA-007 exige que el sitio se lea sin JavaScript. El desarrollador delegó la elección técnica en la opción más profesional para el stack (2026-11-18).
**Decisión:** un componente `Modal.astro` sobre `<dialog>` nativo, abierto con `showModal()` por un único oyente delegado en `src/scripts/modal.ts` (objetivo: menos de 1 KB gzip). El navegador aporta el foco atrapado, el fondo inerte y el cierre con Esc; el script agrega el cierre al hacer clic en el fondo donde no exista `closedby="any"` y la devolución del foco al botón que abrió. El bloqueo del desplazamiento de la página es CSS (`html:has(dialog[open])`). Los botones que abren se muestran solo con JavaScript (variante `js:`); sin JavaScript, o si el navegador no tiene `showModal`, el contenido de cada `<dialog>` se muestra en su lugar como un bloque normal. El contenido existe una sola vez en el HTML. Pasa a ser el cuarto comportamiento con script del sitio, y los efectos de la 05-07 (brillo con el puntero y transición de tarjeta a modal) se suman como mejoras decorativas, prescindibles y sin contenido (P-010, aplicada).
**Alternativas consideradas:** invocaciones declarativas (`<button commandfor command="show-modal">`), que abren sin JavaScript pero tienen soporte reciente en navegadores corporativos; se pueden agregar después sin cambiar el marcado. El atributo `popover`, que no es modal (no deja el fondo inerte ni atrapa el foco). Una librería de modales, que agrega una dependencia para algo que el navegador ya resuelve. Mantener todo en la página con `<details>`, que no resuelve el alto de la unidad.
**Consecuencias:** el sitio pasa a tener cuatro comportamientos con script y un presupuesto total de 3 KB gzip para la épica 05. Ctrl+F no encuentra el texto de un modal cerrado; se compensa con la síntesis visible en las tarjetas. Hay que vigilar que todo `id` de modal sea único y que la jerarquía de encabezados sea correcta con y sin JavaScript.
**Resultado de la 05-04 (2026-11-19):** sin `showModal`, el script marca `<html data-sin-dialogo>` y el CSS muestra el contenido igual que sin JavaScript (decisión del desarrollador). Los 45 modales (26 de detalle, 13 de prompts, 4 de recursos y 2 de descargas) agrandan `dist/index.html` de 255 659 B a 327 567 B (51 302 B a 58 780 B gzip) aunque el contenido es el mismo: se vigila en la medición de la 05-08. El script costó +176 B gzip de JavaScript propio (1295 B gzip en total).

---

## RDA-012 · Síntesis por bloque y por unidad en el modelo de contenido, con límites de palabras

- **Fecha:** 2026-11-18
- **Estado:** Aceptada

**Contexto:** las 4 unidades suman unas 8.800 palabras en la página (diagnóstico de la épica 05), y la RDA-009 guarda solo el texto completo de cada bloque. Para que una unidad quepa en una pantalla, cada bloque necesita una versión corta, y esa versión no puede crecer sin control con el tiempo.
**Decisión:** se agregan al esquema de `bloques` el objeto `sintesis` (`resumen` de hasta 25 palabras, que se ve en el modal; `haras`, verbo + producto, de hasta 12 palabras; y `claves`, 1 o 2 frases de hasta 10 palabras, que se ven en la tarjeta), al esquema de prompt el campo `descripcion` (hasta 30 palabras) y al de `unidades` el campo `objetivoBreve` (hasta 20 palabras). Un validador `maxPalabras(n)` hace fallar `pnpm build` con un mensaje en español si se pasa un límite. Los campos son opcionales durante la 05-02 y obligatorios desde la 05-03. El cuerpo Markdown de cada bloque se conserva como «detalle» y se muestra en su modal; el material de conducción de la clase se retira de él con la aprobación del desarrollador. Cada síntesis la redacta el agente solo con información del propio bloque o de la ficha, y se publica solo después de que el desarrollador la aprueba.
**Alternativas consideradas:** recortar el texto de raíz (se pierde la teoría que los participantes pueden necesitar); generar el resumen automáticamente al compilar con las primeras frases (los primeros párrafos de los bloques son de contexto, no de acción); límites por caracteres (las palabras se entienden mejor al redactar y al revisar).
**Consecuencias:** el texto visible por unidad queda acotado por esquema, y cada bloque nuevo necesita su síntesis para compilar. Se duplica en parte el contenido (síntesis y detalle), así que un cambio en el detalle obliga a revisar su síntesis; la bitácora de cada cambio de contenido debe decir si la revisó.
**Actualización 2026-11-20 (05-05):** para que la unidad quepa en una pantalla, la tarjeta muestra solo la primera clave; la segunda se muestra en el modal de detalle, tras el resumen, con la etiqueta «Otra idea clave:» (decisión del desarrollador). El esquema sigue aceptando 1 o 2 claves.

---

## RDA-013 · Sin barras de avance: la ruta y las unidades muestran su lugar en el curso

- **Fecha:** 2026-11-21
- **Estado:** Aceptada
- **Fecha de aceptación:** 2026-11-22

**Contexto:** la crítica de diseño del 2026-11-21 (skill Impeccable) mostró que las barras «0 % → 25 %» de la ruta y de las cabeceras de unidad (RDA-008, 05-06) se leen como el avance del participante, pero son el tramo fijo de cada unidad y el sitio no guarda ningún estado. Es la única señal de estado de la página y no se cumple.
**Decisión:** se quitan las barras de avance de la ruta y de las cabeceras de unidad, y se borra `BarraAvance.astro`. En su lugar, cada tarjeta de la ruta y cada cabecera muestran «Clase n de 4 · 120 min» en IBM Plex Mono, con el número de clases tomado de `curso.yaml`, y el número de la unidad en grande. El campo `avance` (RDA-008) se conserva en el esquema y en los YAML, sin mostrarse. La barra de lectura de 3 px bajo el encabezado se conserva, porque sí refleja el desplazamiento real.
**Alternativas consideradas:** guardar el avance por bloque en `localStorage` (da un estado real, pero agrega JavaScript, casillas que el participante debe marcar y un caso borde por navegador; queda como propuesta fuera de alcance, junto con las casillas de «Terminado cuando…»); dejar las barras con otro texto («25 % del curso»), que sigue pareciendo progreso; borrar también el campo `avance` del esquema (cambio de esquema sin beneficio visible; se puede hacer después).
**Consecuencias:** la página deja de prometer un estado que no tiene. Se pierde la lectura visual de «cuarto del curso»; la compensa el número grande de cada unidad y «Clase n de 4». El campo `avance` queda sin uso visible: si en el futuro se guarda el avance del participante, esta RDA se reemplaza.

Reemplazada parcialmente por RDA-014 (formato de la ruta).

---

## RDA-014 · Recorrido de la página: instructor antes de las unidades, ruta como índice y unidades en salas

- **Fecha:** 2026-11-23
- **Estado:** Aceptada
- **Reemplaza parcialmente:** RDA-013 (formato de la ruta: «Clase n de 4 · 120 min» en cada tarjeta)

**Contexto:** en la revisión de diseño del 2026-11-22 y 2026-11-23 (skill Impeccable, con vistas previas aprobadas por el desarrollador), el instructor estaba al final de la página y los participantes llegaban al contenido sin saber quién dicta el curso. Además, la ruta de 4 tarjetas de color sólido (694 px de los 750 px de la portada) le quitaba el protagonismo al título, y las unidades quedaban pegadas entre sí (unos 25 px) y sin una superficie propia.
**Decisión:** el orden de la página pasa a portada → instructor → unidades → pie, y la navegación lo sigue. El botón principal de la portada lleva al instructor y el de la credencial del instructor lleva a la Unidad 1. La ruta pasa a un índice de 4 filas con el color solo en el cuadrado del número; cada fila muestra «Clase n» y una nota única dice «Cada clase · 120 min». Cada unidad vive en una sala teñida con su color (tokens `--color-sala-uN`), con `--espacio-unidades` entre una y otra. El campo nuevo `cifras` de `instructor.yaml` alimenta las 3 cifras de la credencial.
**Alternativas consideradas:** para el instructor, una franja oscura a todo el ancho y un mosaico de 3 bloques; para la ruta, un mosaico 2 × 2 compacto y una franja de 4 capítulos al pie de la portada; para las unidades, una franja teñida a todo el ancho y un marco de color sólido. El detalle está en la iteración 06-07.
**Consecuencias:** la portada cabe completa también en 1366 × 657. El instructor gana peso y se lee antes del curso. Cada unidad suma unos 20 px de relleno (la sala) que deben caber en los ~41 px libres de «una unidad en una pantalla». En modo oscuro, las salas de la U2 y la U3 se parecen y las distingue su cabecera. El esquema de `instructor` suma un campo obligatorio.
**Actualización 2026-11-23 (06-07):** medido en 1366 × 657, cabe la ruta completa, pero no la portada completa: la columna de texto termina en 756 px. Además, la U1 crece +39 px y no +24, por una línea más en una tarjeta. En 1440 × 900 cabe todo, y la U1 mide 818,6 de 823. Las dos diferencias son desviaciones aceptadas por el desarrollador (P-030 para `DESIGN.md`; detalle en la bitácora 06-07).
