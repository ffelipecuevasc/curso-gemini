# Bitácora 02-04 · Instructor

- **Fecha:** 2026-11-17
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/02-04-instructor
- **Estado final:** En revisión

## Resumen

La sección `#instructor` muestra la presentación de Felipe Cuevas desde la nueva colección `instructor`: nombre como `h3`, formación, la certificación de Gemini destacada antes de la trayectoria, la trayectoria en lista y `Redes`. No hay insignia en el repositorio (`src/assets/instructor/` no existe), así que la sección se construye sin imagen. Antes de empezar se comprobó que la rama es `iteracion/02-04-instructor`, que `main` contiene `88948fc` (corrección de la ruta) y que la 02-03 está «Terminada»; se dejó la fila 7.1 con la nota del desarrollador y su línea de historial.

## Archivos creados, modificados o eliminados

| Archivo | Cambio |
| :------ | :----- |
| `src/content.config.ts` | Esquema estricto `instructor` (fechas como texto, enlace con `urlSegura`, insignia opcional con `image()`) y su colección |
| `src/content/instructor.yaml` | Nuevo: texto aprobado, literal |
| `src/components/Instructor.astro` | Nuevo: `section#instructor` |
| `src/pages/index.astro` | Usa `Instructor` en lugar de la sección vacía |
| `iteracion-02-04-instructor.md` | Estado y criterios con evidencia |
| `registro-pendientes.md` | Fila 7.1, estado de la 02-04, backlog, pendientes e historial |

## Implementación

- **Esquema:** `nombre`, `formacion`, `certificacion` (`nombre`, `nombreIngles`, `emisor`, `descripcion`, `emision`, `vigencia`, `enlace` con `titulo` y `url`, `insignia` opcional), `trayectoria` (al menos 1) y `comunidad`. Todo con `strictObject`.
- **Certificación como logro personal:** va dentro de la presentación del instructor, sin logo de Google y sin texto que la ligue al curso o al sitio. Bloque en `bg-superficie` con la forma de `DESIGN.md` (`rounded-bloque rounded-bl-esquina`). El nombre en inglés lleva `lang="en"`.
- **Insignia:** si se agrega en el YAML, se dibuja con `<Image>` de Astro (`width` y `height` 120, `alt` «Insignia de Gemini Certified Educator»). Hoy el campo no está y no se genera `<img>`.
- **Enlaces:** el oficial abre en pestaña nueva con `rel="noopener noreferrer"`, texto oculto «(se abre en una pestaña nueva)» y alto mínimo de 44 px (`min-h-11`). `Redes.astro` se reusó sin cambios.
- **Etiquetas de interfaz** (no son datos): los paréntesis, «Emitida el … y válida hasta el …» y «Enlace oficial de la certificación:», todos tomados del documento.
- Solo tokens de `DESIGN.md`; 0 `<script>`.

## Comparación línea a línea del texto

Texto del documento (sin marcas Markdown) frente al texto extraído de `#instructor` en `dist/index.html`:

| # | Documento | Sitio | Resultado |
| :- | :-------- | :---- | :-------- |
| 1 | Francisco Felipe Cuevas Cerón, Ingeniero Informático (INACAP), con Diplomado en Andragogía y Formación Profesional (Universidad de Chile, 2025–2026). | `h3` «Francisco Felipe Cuevas Cerón» y párrafo «Ingeniero Informático (INACAP), con Diplomado en Andragogía y Formación Profesional (Universidad de Chile, 2025–2026).» | Igual; la coma pasa a ser el corte entre título y párrafo |
| 2 | Educador certificado de Gemini (Gemini Certified Educator, Google for Education). Certifica las habilidades, competencias y conocimientos para usar la IA de Google en la educación. Emitida el 13-10-2026 y válida hasta el 13-10-2029. ~~Se destaca primero, mostrando la insignia oficial.~~ | «Educador certificado de Gemini (Gemini Certified Educator, Google for Education)» · «Certifica las habilidades, competencias y conocimientos para usar la IA de Google en la educación.» · «Emitida el 13-10-2026 y válida hasta el 13-10-2029.» | Igual, en 3 párrafos; sin la instrucción de diseño; el punto tras el paréntesis no se muestra porque el título queda solo en su línea |
| 3 | Más de 12 años en docencia y formación técnica. Docente universitario en IPLACEX (2024 a la fecha) y antes en INACAP (2012–2020), Duoc UC e IACC. | Idéntico | Igual |
| 4 | Más de 300 profesionales formados en bootcamps de reconversión laboral (Talento Digital para Chile, SENCE). Según felipecuevas.dev, suma más de 2.000 estudiantes formados y más de 150 módulos aprobados como relator REUF. | Idéntico | Igual |
| 5 | Instructor certificado de IA con Gemini en programas corporativos para Capacita Tu Futuro (más de 50 ejecutivos y colaboradores, octubre de 2026) y Skillnest (junio a agosto de 2026). | Idéntico | Igual |
| 6 | Más de 10 certificaciones profesionales vigentes de Oracle, AWS, Python Institute y Anthropic. Entre ellas: OCI AI Associate, OCI AI Agents Associate, OCI Developer Professional, Oracle Cloud Essentials (Oracle Cloud Infrastructure) y Python PCEP. | Idéntico | Igual; AWS y Anthropic sin detallar |
| 7 | Fundador de la comunidad Pulso Devs. | Idéntico | Igual |
| 8 | Enlace oficial de la certificación: «Certificaciones Gemini de Google for Education», https://blog.google/products-and-platforms/products/education/gemini-certifications-education/ | «Enlace oficial de la certificación: Certificaciones Gemini de Google for Education» con ese `href` | Igual |

La línea «Enlaces: www.felipecuevas.dev · www.linkedin.com/in/ffelipecuevasc/» la cubre `Redes.astro` con el mismo texto. La línea `PENDIENTE_DESARROLLADOR` de AWS y Anthropic no se publica: es una nota de trabajo.

**Revisión final:** 8 de 8 líneas iguales, sin agregados ni resúmenes; «Se destaca» aparece 0 veces en `dist/index.html`.

## Verificación

- `pnpm prettier --write` sobre los 3 archivos de código. `pnpm astro check`: 0 errores, 0 advertencias, 0 sugerencias.
- `pnpm build`: «Complete!», con solo las 2 advertencias del cargador `file` aceptadas en la 02-02.
- **Prueba reversible 1, campo obligatorio faltante:** `sed` borró la línea `comunidad:` del YAML → `[InvalidContentEntryDataError] instructor → felipe-cuevas data does not match collection schema. comunidad: Required` y `Command failed`.
- **Prueba reversible 2, enlace sin https:** `sed` cambió `https://blog` por `http://blog` → `certificacion.enlace.url: La URL debe empezar con https://` y `Command failed`.
- Tras ambas, el YAML se restauró desde una copia en el scratchpad: `cmp` idéntico y `pnpm build` en «Complete!».
- **HTML generado (`dist/index.html`):** 1 `h1`, 6 `h2`, 1 `h3` en `#instructor`; 0 `<img>` en `#instructor`; 3 enlaces externos en la sección (certificación, sitio y LinkedIn), los 3 con `target="_blank"`, `rel="noopener noreferrer"` y el texto oculto; la certificación va antes de la trayectoria.
- **JavaScript:** 0 `<script>` en `Instructor.astro`; `dist/index.html` sigue con 3 scripts.
- `grep -rl PENDIENTE_ dist`: 0 archivos. Sin servidores levantados.

## Criterios de aceptación

Ver la iteración: 5 de 7 marcados con evidencia. Sin marcar: enlaces (falta el recorrido con teclado) y 360 px en ambos modos (sin navegador).

## No se pudo verificar · pasos para el desarrollador

Ejecuta `pnpm build` y `pnpm preview`, y abre la URL local en `#instructor`.

1. **360 px** (DevTools, modo dispositivo): sin barra horizontal (`document.documentElement.scrollWidth === 360` en la consola); el nombre y la URL de LinkedIn no se salen; el bloque de la certificación queda en una columna.
2. **Escritorio:** el texto queda en un ancho de lectura (`max-w-prose`), alineado a la izquierda.
3. **Modo claro y oscuro:** el bloque de la certificación se distingue del fondo (`superficie`) y el enlace se ve con el color de enlace y subrayado.
4. **Teclado:** desde el menú «Instructor», `Tab` recorre el enlace de la certificación, felipecuevas.dev y LinkedIn, con anillo de foco visible en ambos modos; `Enter` abre cada uno en pestaña nueva.
5. **Recomendado:** con NVDA, el enlace oficial se lee como «Certificaciones Gemini de Google for Education (se abre en una pestaña nueva)».

## Decisiones tomadas

- La comunidad va como último punto de la lista de trayectoria, igual que en el documento.
- La sección conserva `min-h-svh`, como las demás.
- `SchemaContext` tipa el esquema para usar `image()` sin dependencias nuevas.
- No hace falta proponer cambios a documentos protegidos: `DESIGN.md` (sección 5, fila Instructor) ya describe lo construido. No se registró P-007.

## Pendientes y riesgos

- Insignia de Gemini Certified Educator: sigue abierta en «Decisiones por tomar». Para agregarla, deja el archivo en `src/assets/instructor/` y suma `insignia: ../assets/instructor/<archivo>` en el YAML.
- Nombres de las certificaciones AWS y Anthropic: siguen abiertos; no se completaron.
- El comentario inicial de `RutaCurso.astro` todavía dice «3 desde 1024 px», aunque la corrección 7.1 dejó 4 columnas. No se tocó por estar fuera de alcance.

## Revisión

- **Resultado frente al objetivo:** cumplido en el código y medido en el HTML generado; queda la revisión visual y con teclado del desarrollador.
- **Qué aprendimos:** Prettier puede mover un `)` a otra línea después de una expresión, pero Astro no deja espacio entre la expresión y el `)` (se comprobó en el HTML: «Google for Education)»). En Windows, una falla de esquema termina con un `Assertion failed` de libuv además del error de Astro; el mensaje útil va antes.
- **Qué cambia para lo que sigue:** la 02-05 carga bloques y prompts de la U1 y la U2; con eso debería desaparecer la advertencia de `recursos.yaml`.

## Commit sugerido

`Épica 2 - Iteración 02-04: agrega la sección del instructor desde la colección instructor, con la certificación de Gemini primero y sin insignia`
