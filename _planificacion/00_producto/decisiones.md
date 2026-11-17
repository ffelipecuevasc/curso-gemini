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
