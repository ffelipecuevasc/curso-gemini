# Iteración 02-01 · Portada

- **Épica:** 02 · Portada, ruta del curso e instructor
- **Estado:** Terminada
- **Rama sugerida:** iteracion/02-01-portada
- **Depende de:** 01-05 y P-005 aplicada por el desarrollador
- **RDA relacionadas:** RDA-003, RDA-004, RDA-007

## Objetivo

Reemplazar la portada provisoria por el hero: título del curso, lema, botón «Ver la ruta», el logo de Gemini como protagonista, los de Google, GTD Telsur y Capacita Tu Futuro en un segundo plano, y las redes con los íconos de Chrome y LinkedIn, todos guardados como archivos SVG individuales.

## Punto de partida

- `src/pages/index.astro` tiene una sección `#inicio` con solo el `h1` escrito a mano y seis secciones vacías (`ruta`, `unidad-1` … `unidad-4`, `instructor`) que deben conservar su `id`.
- `src/content/curso.yaml` tiene `titulo`, `clases` y `duracionTotalMin`; el esquema `curso` de `src/content.config.ts` es estricto.
- `src/components/Redes.astro` tiene hoy un ícono web propio y el de LinkedIn de la identidad (sección 5 de `DESIGN.md`); lo usan la portada y el pie (`Pie.astro`).
- `iconos-svg.txt` **no** se guarda en el repositorio: el desarrollador pega cada SVG como archivo propio (ver «Tareas del desarrollador»).
- `DESIGN.md` (secciones 5 y 6) dice hoy que el hero lleva solo los íconos de Gemini y Google, que las redes usan los íconos de la identidad y que los logos de Gemini y Google no se recolorean. La propuesta **P-005** cambia las dos primeras cosas; la tercera se mantiene.

## Alcance y entregables

- `src/assets/iconos/` con los seis SVG que pega el desarrollador. Se usan seis: Gemini, Google, GTD Telsur y Capacita Tu Futuro en el hero; Chrome y LinkedIn en las redes.
- Recoloreo de los SVG que lo necesitan (ver «Decisiones del desarrollador»), con el cambio de cada `fill` anotado en la bitácora.
- Campo `lema` en el esquema `curso` y en `curso.yaml`.
- `src/components/Portada.astro`: sección `#inicio` con `h1` (título de `curso`), lema, botón principal «Ver la ruta» a `#ruta`, los logos con su jerarquía, círculo decorativo `--color-superficie` parcialmente fuera del marco y `Redes` pequeñas abajo a la izquierda.
- `Redes.astro` con el ícono de Chrome junto a `www.felipecuevas.dev` y el de LinkedIn junto a `www.linkedin.com/in/ffelipecuevasc/`, tanto en la portada como en el pie.
- `index.astro` usa `Portada` en lugar de la sección provisoria.
- Referencias a `iconos-svg.txt` actualizadas en los documentos vivos.

## Contenido aprobado (copiar tal cual)

- **Lema** (`unidades-del-curso.md`, mensaje final de la U4): «La IA no reemplaza tu talento, lo multiplica»
- **Título:** el `titulo` que ya está en `curso.yaml`.
- **Botón:** «Ver la ruta».
- **Nombres accesibles de los logos** (`aria-label`): «Gemini», «Google», «GTD Telsur», «Capacita Tu Futuro».

## Decisiones del desarrollador

- 2026-11-17: la frase de propósito del hero es el lema. No se menciona el respaldo de Google hasta recibir la redacción del cliente.
- 2026-11-17: el logo de **Gemini es el principal** del hero. Los de **GTD Telsur** (el cliente) y **Capacita Tu Futuro** (el organizador) aparecen en el mismo hero con un protagonismo mucho menor. El de Google queda como logo secundario de herramienta, de menor tamaño que el de Gemini.
- 2026-11-17: los logos de GTD y de Capacita van **solos, con su `aria-label` y sin texto visible** (nada de «Organiza», «Cliente» ni «con el respaldo de»). Para que no se lean como aval de las herramientas, van en una fila aparte, separada de Gemini y Google.
- 2026-11-17: el **ícono de Chrome** va al lado del enlace a https://felipecuevas.dev y el **ícono de LinkedIn** al lado del enlace a https://www.linkedin.com/in/ffelipecuevasc/. Cambia lo que decía `DESIGN.md` (P-005).
- 2026-11-17: **no se recolorean** los SVG de Gemini, Google ni Chrome (el archivo debe quedar idéntico al original). Los de GTD, Capacita Tu Futuro y LinkedIn **se pueden recolorear**, con tokens de `DESIGN.md` y sin cambiar sus trazados.
- 2026-11-17: la autorización del cliente para mostrar el logo de GTD queda **bajo responsabilidad del desarrollador**; la fila del registro sigue abierta como riesgo.
- 2026-11-17: `iconos-svg.txt` no se sube; cada SVG va en su archivo, en `src/assets/iconos/`, con nombre ASCII.

## Tareas

1. Comprobar que los seis archivos de `src/assets/iconos/` existen, que cada uno abre con `<svg` y termina con `</svg>`, que usan finales de línea LF y que su contenido coincide con el que entregó el desarrollador. Guardar el hash de `gemini.svg`, `google.svg` y `chrome.svg` para la tarea 8. Si falta uno, detenerse y avisar.
2. Recolorear lo permitido, solo con tokens de `DESIGN.md` y sin tocar trazados: en `capacita-tu-futuro.svg`, `fill="#000"` pasa a `currentColor` (en modo oscuro el negro es invisible); en `linkedin.svg`, el círculo usa `--color-linkedin` y el glifo `--color-fondo` (azul en claro, blanco en oscuro, como en la identidad); en `gtd-telsur.svg`, cambiar los colores solo si, medido en la portada, el logo no se distingue en uno de los modos. Anotar en la bitácora cada `fill` antes y después. Gemini, Google y Chrome no se tocan.
3. Agregar `lema` (texto no vacío) al esquema `curso` y a `curso.yaml` con el texto aprobado.
4. Crear `Portada.astro` e insertarla en `index.astro` en lugar de la sección provisoria de `#inicio` (el `h1` sigue siendo único; las demás secciones conservan su `id`). Importar los SVG como componentes de Astro (`import Gemini from "../assets/iconos/gemini.svg"`); si la versión instalada no lo permite, importarlos con `?raw` e insertarlos con `set:html`, y anotar la alternativa en la bitácora. Cada logo lleva `role="img"` y su `aria-label`; el círculo decorativo y los adornos llevan `aria-hidden="true"`.
5. Aplicar el layout de `DESIGN.md` (secciones 4, 5 y 5.1, con P-005): contenedor `max-w-sitio`, móvil primero, botón principal en píldora de 44 px de alto como mínimo, `Redes` pequeñas abajo a la izquierda. Jerarquía de los logos: Gemini el mayor; Google menor; GTD y Capacita, en una fila aparte y mucho más pequeños (alto de unos 24 a 32 px). Cada logo con `width`/`height` o `aspect-ratio` de su proporción original. Anotar los tamaños elegidos en la bitácora. Sin sombras, degradados ni animaciones.
6. Actualizar `Redes.astro`: el SVG de Chrome junto al texto `www.felipecuevas.dev` y el de LinkedIn junto a `www.linkedin.com/in/ffelipecuevasc/`, cada ícono y su texto en un solo enlace, con el ícono `aria-hidden="true"`. Mantener los textos visibles exactos, `target="_blank"`, `rel="noopener noreferrer"` y «(se abre en una pestaña nueva)». Comprobar que el pie queda coherente con la portada.
7. Reemplazar las menciones a `iconos-svg.txt` por la ruta del archivo individual en `unidades-del-curso.md` (logo de GTD de la U2 y de `gtd-visual`, y pendientes generales) y comprobar que no queda ninguna en `_planificacion/` fuera de las bitácoras de la épica 01 (que no se editan).
8. Verificar y cerrar: `pnpm build` y `pnpm astro check`; en el HTML de `dist/`, sin `id` repetidos (el SVG de Gemini trae `mask` y siete `filter` con ids de una letra) y con el SVG de Gemini una sola vez; hash de Gemini, Google y Chrome idéntico al de la tarea 1; revisión con `pnpm preview` en 360 px y escritorio, en ambos modos y con teclado. Escribir la bitácora y actualizar el registro.

## Tareas del desarrollador

1. Antes de empezar, crear `src/assets/iconos/` y pegar cada SVG de `iconos-svg.txt` (el archivo del Proyecto en claude.ai), desde `<svg` hasta `</svg>`, sin el rótulo «SVG de …:» ni los separadores `---`, en estos archivos:

   | Rótulo en `iconos-svg.txt` | Archivo | Dónde se usa |
   | :------------------------- | :------ | :----------- |
   | SVG de Gemini | `src/assets/iconos/gemini.svg` | Hero, protagonista |
   | SVG de Google | `src/assets/iconos/google.svg` | Hero, secundario |
   | SVG de GTD Telsur | `src/assets/iconos/gtd-telsur.svg` | Hero, discreto |
   | SVG de OTEC Capacita Tu Futuro | `src/assets/iconos/capacita-tu-futuro.svg` | Hero, discreto |
   | SVG de LinkedIn | `src/assets/iconos/linkedin.svg` | Junto al enlace de LinkedIn |
   | SVG de Navegador Chrome | `src/assets/iconos/chrome.svg` | Junto al enlace de felipecuevas.dev |

2. Aplicar la propuesta **P-005** en `DESIGN.md` (secciones 5 y 6) antes de empezar la iteración, o descartarla. Mientras no se aplique, el documento dice lo contrario de esta iteración.
3. Revisar la portada en un teléfono real si quieres confirmar el primer pantallazo (recomendado, no requisito).

## Criterios de aceptación

- [x] Los seis SVG existen en `src/assets/iconos/` con LF, y `gemini.svg`, `google.svg` y `chrome.svg` tienen el mismo hash que al empezar (no se recolorearon). Evidencia: `file src/assets/iconos/*.svg | grep -c CRLF` → 0; `sha256sum` de gemini (`5f8d2e3b…`), google (`dee8d465…`) y chrome (`a0c993b6…`) igual al inicio y al cierre; `git diff --stat -- src/assets` solo lista capacita y linkedin.
- [x] La portada muestra los cuatro logos con su jerarquía (Gemini el mayor; GTD y Capacita en una fila aparte y mucho más pequeños), sin texto visible junto a los logos de GTD y Capacita, y cada logo con `role="img"` y su `aria-label` (medidas de alto de cada logo en la bitácora). Evidencia: en `dist/index.html`, los cuatro `<svg role="img" aria-label=…>` (Gemini, Google, GTD Telsur, Capacita Tu Futuro); GTD y Capacita en un `div` aparte sin texto; altos en la bitácora (Gemini 144/176/224 px; Google 32/40 px; GTD 32 px; Capacita 28 px).
- [x] Los logos de Capacita Tu Futuro y de GTD Telsur se distinguen en modo claro y oscuro, y la bitácora tiene el `fill` antes y después de cada SVG recoloreado. Evidencia: contraste calculado contra `--color-fondo` (Capacita con `currentColor` = `--color-texto`: 18,90:1 en ambos modos; GTD `#5F7EBA` 4,05 / 4,66 y `#43649C` 5,93 / 3,19, todos ≥ 3:1). `fill` antes y después en la bitácora. La confirmación visual queda para el desarrollador (ver bitácora). Confirmación visual: dicho por el desarrollador, 2026-11-17, revisión en navegador.
- [x] En `Redes`, el ícono de Chrome acompaña al enlace `https://felipecuevas.dev/` y el de LinkedIn al enlace `https://www.linkedin.com/in/ffelipecuevasc/`, en la portada y en el pie; los textos visibles son los de `DESIGN.md`. Evidencia: `grep` en `dist/index.html` → 2 enlaces a cada URL (portada y pie), cada uno con su SVG `aria-hidden` y los textos `www.felipecuevas.dev` y `www.linkedin.com/in/ffelipecuevasc/`.
- [x] `pnpm build` falla si `lema` falta en `curso.yaml`, y pasa con el lema aprobado (comprobado y revertido). Evidencia: sin la línea, `InvalidContentEntryDataError … lema: Required`; con el lema restaurado, «Complete!».
- [x] El HTML generado tiene un solo `h1`, con el título del curso, y el lema literal «La IA no reemplaza tu talento, lo multiplica». Evidencia: `grep -o '<h1' dist/index.html | wc -l` → 1, con el título; `grep -c 'La IA no reemplaza tu talento, lo multiplica'` → 1.
- [x] Ningún texto de la portada menciona respaldo, alianza ni certificación de Google (búsqueda de «respaldo», «alianza», «partner» y «oficial» en el HTML de la portada: 0 coincidencias). Evidencia: 0 coincidencias dentro de `#inicio`. En toda la página hay 1, en la meta descripción ya existente («documentación oficial de Google»), que no es un aval.
- [x] El HTML generado no tiene `id` repetidos y el SVG de Gemini aparece una sola vez (comando y resultado en la bitácora). Evidencia: `grep -o ' id="[^"]*"' dist/index.html | sort | uniq -d` → vacío; `viewBox="0 0 296 298"` → 1.
- [x] «Ver la ruta» lleva a `#ruta` con el teclado y mide 44 px de alto o más; los enlaces de redes abren en pestaña nueva con `rel="noopener noreferrer"`. Parcial: el enlace tiene `href="#ruta"` y `min-h-11` (44 px en el CSS compilado); los 4 enlaces de redes tienen `target="_blank" rel="noopener noreferrer"`. Teclado: dicho por el desarrollador, 2026-11-17, revisión en navegador.
- [x] La portada se ve sin desborde horizontal en 360 px y en escritorio, en ambos modos, y sin JavaScript queda en modo claro (RDA-007). El agente no tuvo navegador. La sección usa `overflow-hidden` para el círculo y solo tokens con valor claro por defecto; pasos para el desarrollador en la bitácora. 360 px, escritorio y ambos modos: dicho por el desarrollador, 2026-11-17, revisión en navegador.
- [x] No quedan menciones a `iconos-svg.txt` en los documentos vivos de `_planificacion/`. Evidencia: `grep -rn iconos-svg _planificacion` fuera de la épica 01 solo encuentra esta iteración y `definicion-epica-02.md`, que describen la decisión de no subirlo; se reemplazaron 4 en `unidades-del-curso.md` y salió la fila del registro.
- [x] `pnpm build` y `pnpm astro check` sin errores ni advertencias nuevas. Evidencia: «Complete!» sin advertencias; check 0/0/0.

## Riesgos

- El SVG de Gemini usa siete filtros de desenfoque: si encarece el pintado del primer pantallazo, se reduce su tamaño en pantalla, nunca su contenido. Verificación recomendada: Lighthouse móvil sobre `pnpm preview`, porque esta iteración cambia el primer pantallazo.
- Si en una épica posterior el logo de Gemini aparece más de una vez, cada copia necesita ids únicos (`DESIGN.md`, sección 6).
- Mostrar los logos de GTD y de Capacita sin texto puede leerse como un respaldo de ambos al curso o a las herramientas. Se mitiga con la fila aparte y los tamaños distintos; si aun así se lee como sello, el desarrollador decide si agrega un rótulo.
- El logo de GTD se publica con la autorización del cliente todavía abierta en el registro (decisión del desarrollador, 2026-11-17).

## Fuera de alcance

- Mencionar el respaldo de Google (espera la redacción del cliente).
- Mostrar los logos de GTD o de Capacita en el pie o en otras secciones (solo el hero).
- Rótulos de texto junto a los logos del cliente y del organizador.

## Datos requeridos

### Del cliente

- Ninguno para construir. La autorización de publicar el logo de GTD sigue abierta en el registro, bajo responsabilidad del desarrollador.

### Del desarrollador

- Los seis SVG pegados en `src/assets/iconos/` (tarea del desarrollador 1).
- P-005 aplicada o descartada (tarea del desarrollador 2).
