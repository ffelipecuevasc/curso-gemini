# Iteración 02-04 · Instructor

- **Épica:** 02 · Portada, ruta del curso e instructor
- **Estado:** En revisión
- **Rama sugerida:** iteracion/02-04-instructor
- **Depende de:** 02-03
- **RDA relacionadas:** RDA-003, RDA-004

## Objetivo

Mostrar en `#instructor` la presentación de Felipe Cuevas con el texto del documento del curso, la certificación de Gemini destacada primero y los enlaces de sus redes.

## Punto de partida

- La trayectoria vive en `unidades-del-curso.md`, Unidad 1, «Bloque 1 · Bienvenida y encuadre del bootcamp», lista «Presentación del instructor», y la fuente oficial de la certificación en «Fuentes oficiales», apartado «Instructor».
- `Redes.astro` ya tiene los enlaces a felipecuevas.dev y LinkedIn.
- `index.astro` genera la sección `#instructor` vacía.

## Alcance y entregables

- Colección `instructor` (cargador `file`, `src/content/instructor.yaml`) con esquema estricto: nombre, formación, certificación destacada (nombre, nombre en inglés, emisor, descripción, emisión, vigencia, enlace oficial `https://` e insignia opcional), trayectoria (lista) y comunidad. Así el texto no queda escrito a mano en el componente (`AGENTS.md`, regla técnica 6).
- `src/components/Instructor.astro`: `section#instructor` con `aria-labelledby`, `h2` «Instructor», la certificación primero, la trayectoria y `Redes`.
- `index.astro` usa `Instructor` en lugar de la sección vacía.

## Contenido aprobado (copiar tal cual)

Del documento del curso. Se quitan las marcas Markdown y la indicación «Se destaca primero, mostrando la insignia oficial», que es una instrucción de diseño y no texto para publicar.

- **Francisco Felipe Cuevas Cerón**, Ingeniero Informático (INACAP), con Diplomado en Andragogía y Formación Profesional (Universidad de Chile, 2025–2026).
- **Educador certificado de Gemini** (*Gemini Certified Educator*, Google for Education). Certifica las habilidades, competencias y conocimientos para usar la IA de Google en la educación. Emitida el 13-10-2026 y válida hasta el 13-10-2029.
- Más de 12 años en docencia y formación técnica. Docente universitario en IPLACEX (2024 a la fecha) y antes en INACAP (2012–2020), Duoc UC e IACC.
- Más de 300 profesionales formados en bootcamps de reconversión laboral (Talento Digital para Chile, SENCE). Según felipecuevas.dev, suma más de 2.000 estudiantes formados y más de 150 módulos aprobados como relator REUF.
- Instructor certificado de IA con Gemini en programas corporativos para Capacita Tu Futuro (más de 50 ejecutivos y colaboradores, octubre de 2026) y Skillnest (junio a agosto de 2026).
- Más de 10 certificaciones profesionales vigentes de Oracle, AWS, Python Institute y Anthropic. Entre ellas: OCI AI Associate, OCI AI Agents Associate, OCI Developer Professional, Oracle Cloud Essentials (Oracle Cloud Infrastructure) y Python PCEP.
- Fundador de la comunidad Pulso Devs.
- **Enlace oficial de la certificación:** «Certificaciones Gemini de Google for Education», https://blog.google/products-and-platforms/products/education/gemini-certifications-education/

## Decisiones del desarrollador

- 2026-11-17: la certificación de Gemini va primero (`DESIGN.md`, sección 5, componente Instructor).
- La certificación es un logro del instructor: se presenta como certificación personal, no como respaldo de Google al curso ni al sitio (`AGENTS.md`, regla de contenido 6).

## Tareas

1. Crear el esquema `instructor` en `src/content.config.ts` (fechas como texto literal del documento; enlace con la regla `https://` existente; insignia opcional).
2. Cargar `src/content/instructor.yaml` con el contenido aprobado, sin agregar ni resumir nada.
3. Crear `Instructor.astro`: nombre como `h3`, formación debajo, bloque destacado de la certificación (con la insignia si existe, usando el componente de imagen de Astro con `width`, `height` y `alt` «Insignia de Gemini Certified Educator»), trayectoria en lista y `Redes`. El enlace oficial abre en pestaña nueva con `rel="noopener noreferrer"` y texto oculto «(se abre en una pestaña nueva)».
4. Si la insignia no está en el repositorio al empezar, la sección se construye sin imagen, el campo queda vacío y la fila de la insignia sigue abierta en el registro. Ningún `PENDIENTE_` queda visible en el HTML.
5. Reemplazar la sección vacía de `#instructor` en `index.astro`.
6. Ejecutar `pnpm build` y `pnpm astro check`, revisar con `pnpm preview` en 360 px y escritorio, en ambos modos y con teclado; escribir la bitácora y actualizar el registro.

## Tareas del desarrollador

1. Opcional, antes de empezar: dejar la imagen oficial de la insignia de Gemini Certified Educator en `src/assets/instructor/` con nombre ASCII (por ejemplo `insignia-gemini-certified-educator.png`). Si no está, la iteración sigue sin ella.

## Criterios de aceptación

- [x] El texto de la sección coincide con el contenido aprobado (comparación línea a línea en la bitácora) y no incluye «Se destaca primero, mostrando la insignia oficial».
- [x] La certificación de Gemini aparece antes que el resto de la trayectoria.
- [x] Un `https` faltante en el enlace oficial o un campo obligatorio faltante hace fallar `pnpm build` (comprobado y revertido).
- [x] Si hay insignia: se sirve optimizada por Astro con `width`, `height` y `alt`. Si no hay: no hay `<img>` roto ni marcador visible (búsqueda de `PENDIENTE_` en `dist/`: 0).
- [ ] Los enlaces externos abren en pestaña nueva con `rel="noopener noreferrer"` y lo anuncian; se alcanzan con el teclado.
- [x] Un solo `h1` en la página; `#instructor` con `h2` y el nombre como `h3`.
- [ ] Sin desborde en 360 px, en ambos modos; `pnpm build` y `pnpm astro check` sin errores ni advertencias nuevas; 0 B de JavaScript nuevo.

Evidencia (detalle en [bitacora-02-04](bitacoras/bitacora-02-04.md)):

- Texto: comparación línea a línea del texto de `dist/index.html` contra el documento: 8 de 8 líneas iguales; «Se destaca» aparece 0 veces.
- Orden: en `dist/index.html`, el bloque de la certificación va después del nombre y la formación y antes de la lista de trayectoria.
- Fallas comprobadas y revertidas: sin `comunidad` → `comunidad: Required`; con `http://` → `certificacion.enlace.url: La URL debe empezar con https://`; ambas con «Command failed»; el YAML restaurado es idéntico (`cmp`) y el build vuelve a «Complete!».
- Sin insignia en `src/assets/instructor/` (la carpeta no existe): 0 `<img>` en `#instructor`; `grep -rl PENDIENTE_ dist`: 0 archivos.
- Títulos: 1 `h1`, 6 `h2`, 1 `h3` en `#instructor` (el nombre).
- Sin marcar: enlaces (atributos y texto oculto medidos en los 3 enlaces, falta comprobar el teclado) y 360 px en ambos modos (sin navegador). `pnpm build` (solo las 2 advertencias aceptadas), `astro check` (0/0/0) y 0 `<script>` nuevos sí se midieron.

## Fuera de alcance

- Nombres completos de las certificaciones AWS y Anthropic (siguen pendientes; no se completan).
- Fotografía del instructor (no está pedida).

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Insignia de Gemini Certified Educator (opcional; ya registrada en «Decisiones por tomar»).
