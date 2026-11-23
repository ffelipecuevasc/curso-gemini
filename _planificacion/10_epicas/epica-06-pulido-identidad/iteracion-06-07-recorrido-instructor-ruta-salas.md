# Iteración 06-07 · Recorrido de la página: instructor primero, ruta como índice, unidades en salas y firma del OTEC

- **Épica:** 06 · Pulido de identidad: portada, unidades y modales (reabierta el 2026-11-23 para esta iteración)
- **Estado:** Terminada (2026-11-23, merge `b281ecf`; [bitácora](bitacoras/bitacora-06-07.md) y [cierre](bitacoras/bitacora-06-cierre-06-08.md))
- **Rama sugerida:** iteracion/06-07-recorrido-instructor-ruta-salas
- **Depende de:** cierre de la épica 06 (2026-11-22), P-029 aplicada por el desarrollador y RDA-014 registrada (tarea 1)
- **Especificación:** —
- **RDA relacionadas:** RDA-004, RDA-007, RDA-011, RDA-013 (reemplazada parcialmente), RDA-014 (nueva)

## Objetivo

Que la página guíe el recorrido del participante: primero el instructor, luego el curso. La portada vuelve a tener al título como protagonista (la ruta pasa de mosaico de color a índice), cada unidad vive en una sala propia separada de la siguiente, y el pie lleva la firma de Capacita Tu Futuro. Todo dentro de la paleta, las tipografías y los radios de felipecuevas.dev (RDA-004) y sin perder «una unidad en una pantalla» (épica 05).

## Punto de partida

Medido el 2026-11-22 sobre `main` (`aa16031`), compilado en local, en 1440 × 900 y modo claro. Se vuelve a medir en la tarea 1 antes de tocar el código.

- **Orden de la página** (`src/pages/index.astro`): `Portada` → `SeccionUnidad` × 4 → `Instructor`. La navegación sale del arreglo `enlaces` en el mismo archivo: Ruta, U1 a U4, Instructor.
- **Portada** (`Portada.astro`): alto 750 px. El botón principal «Empezar por la Unidad 1» apunta a `#unidad-1` y se salta al instructor. El logo de Capacita (`capacita-tu-futuro.svg`, un solo `<path>` con `fill="currentColor"`) hereda `text-texto` y se ve casi negro.
- **Ruta** (`RutaCurso.astro` y `BloqueUnidad.astro`): 694 px de alto, con 4 tarjetas de unos 270 × 300 px en color sólido (mosaico 2 × 2). Roba la atención del título. Estilos en `global.css`: `.tarjeta-ruta`, `.titulo-ruta`, `.numero-ruta` y el brillo y la subida de la 05-07. `src/scripts/efectos.ts` escucha `.tarjeta, .tarjeta-ruta`.
- **Instructor** (`Instructor.astro`): 377 px de alto, texto sobre la trama con `border-t` de 1 px, sin superficie propia. La insignia de Gemini Certified Educator solo aparece dentro del modal.
- **Unidades** (`SeccionUnidad.astro`, `.seccion-unidad`): con JavaScript y en escritorio, `padding-block: 0.75rem` y `border-t border-linea` (`#E4F3FF` sobre blanco, casi invisible). Las secciones miden 823 px (alto de la ventana menos el encabezado) y su contenido natural 780 / 780 / 782 / 755 px: quedan **unos 41 px libres**. Entre el fin de una unidad y la cabecera de la siguiente hay unos 25 px.
- **Pie** (`Pie.astro`): una columna a la izquierda (nombre, redes, aviso y licencia); la mitad derecha está vacía.
- **Esquema** (`src/content.config.ts`, `instructor`): `z.strictObject` sin campo `cifras`.
- **Línea base de rendimiento** (bitácoras 06-06 y 06-cierre): Lighthouse móvil publicado 99/100/100/100 (LCP 1,43 s, CLS 0); local móvil 93/100/96/100; JavaScript propio de 1774 B gzip; 54 `<dialog>`; 1 `h1`; 24 de 24 prompts.
- **Hallazgo documental:** la P-028 figura como «Aplicada», pero su texto no está en el `DESIGN.md` de `main`. La comprobación con `grep` «6,63:1» dio un falso positivo, porque esa cifra ya existía en otra fila. La P-029 la incorpora (ver tarea 1).

## Alcance y entregables

### 1. Orden de la página y navegación

- `index.astro`: orden `Portada` → `Instructor` → `SeccionUnidad` × 4. Arreglo `enlaces`: Ruta, Instructor, U1, U2, U3, U4.
- Portada: el botón principal cambia a «Conoce a tu instructor» y apunta a `#instructor`. El logo de Capacita de la fila de logos lleva `text-primario`. Google y GTD no cambian.

### 2. Instructor como credencial (opción A, «Credencial»)

- Sección `id="instructor"` justo después de la portada, con un contenedor `.credencial` del ancho del sitio (`max-w-sitio`), separado de la portada por 2,5 rem (3 rem desde 1024 px).
- Superficie `--color-superficie`, radio `28px 28px 28px 6px` (`rounded-bloque rounded-bl-esquina`). En oscuro, borde de 1 px `--color-superficie-2`. Un círculo decorativo `--color-fondo` al 85 % (`::before`, unos 14 rem) sale del marco arriba a la derecha. No va al imprimir.
- **Columna izquierda** (10 rem desde 1024 px; arriba en móvil): la insignia (`certificacion.insignia`, `<Image>` de `astro:assets`, ancho 160, alt «Insignia de Gemini Certified Educator») sobre una placa `--color-placa` con radio `20px 20px 20px 4px` y 10 px de relleno. Debajo, «Vigente hasta {certificacion.vigencia}» en IBM Plex Mono, `text-sm`, `--color-texto-2`.
- **Columna derecha:**
  - `h2` «Instructor» como etiqueta: IBM Plex Mono, `text-sm`, mayúsculas por CSS (`uppercase`, `tracking-[0.08em]`), `--color-enlace`. El texto del HTML sigue siendo «Instructor».
  - Nombre (`h3`, `.nombre-instructor`): Sora 700, `clamp(1.75rem, 1.25rem + 1.6vw, 2.25rem)`, interlineado 1,08, tracking −0,02 em.
  - Certificación: Sora 600 en `--color-enlace`, más el paréntesis actual (nombre en inglés en `<i lang="en">` y emisor) en Work Sans 400 `--color-texto-2`.
  - Resumen: las líneas 1 y 3 de `trayectoria` (posiciones 0 y 2), sin cambios de texto.
  - Acciones en una fila que se ajusta: botón principal «Empezar por la Unidad 1» (`<a href="#unidad-1">`, el único principal de la sección), `BotonModal` de contorno «Ver trayectoria completa» y `Redes` pequeñas.
- **Cifras al pie de la credencial:** `<ul aria-label="La trayectoria en cifras">` a todo el ancho de la credencial (margen negativo igual al relleno), separado por una línea `--color-linea-fuerte`. Va en 3 columnas desde 640 px, con líneas verticales entre ellas, y apilado antes, con líneas horizontales. Cada `<li>` lleva el número en Sora 700 (`clamp(1.75rem, 1.4rem + 1vw, 2rem)`, cifras tabulares, `--color-texto`) y el texto en `text-sm` `--color-texto-2`.
- **Modal «Trayectoria completa»:** se quita la `<Image>` de la insignia, que ahora está en la sección. El panel de la certificación conserva su texto, sus fechas y el enlace a la credencial.
- **Contenido:** campo nuevo `cifras` en `instructor.yaml` y en el esquema: `z.array(z.strictObject({ valor: textoNoVacio, texto: textoNoVacio })).length(3)`. El componente no lleva cifras escritas a mano (AGENTS.md, regla técnica 6).

### 3. Ruta del curso como índice (opción A, «Índice de la ruta»)

- `RutaCurso.astro` conserva `<section id="ruta">` y su `h2` «Ruta del curso». El logo de Gemini queda junto al `h2`, con 48 px en móvil y 56 px desde 640 px (antes 56 / 96 / 112). El SVG no se toca.
- `BloqueUnidad.astro` se reemplaza por `FilaRuta.astro` (se borra el anterior). La lista pasa a `<ol class="indice-ruta">` de una columna en todos los anchos.
- **Cada fila** es un enlace `.fila-ruta` a `#unidad-n` que ocupa toda la fila, con una retícula `2.75rem minmax(0,1fr) auto`:
  - un cuadrado `.cuadro-ruta` de 44 px con el número en Sora 700 de 1,375 rem y cifras tabulares. Usa las clases de `bloqueUnidad[numero]` (fondo, texto y borde de la U3 en oscuro) y radio `12px 12px 12px 3px`. Lleva «Unidad » solo para lectores de pantalla, como hoy;
  - el nombre (`h3`, Sora 600, `clamp(1rem, 0.92rem + 0.3vw, 1.125rem)`, interlineado 1,25) y, debajo, «Mini-proyecto: {titulo}» completo en `text-sm` `--color-texto-2`;
  - «Clase {clase}» en IBM Plex Mono `text-sm` `--color-texto-2`, sin cortes de línea, con « de {clases}» solo para lectores de pantalla.
- Las filas se separan con líneas de 1 px `--color-linea-fuerte` (arriba de cada fila y abajo de la última). En hover y con `:focus-visible`, el fondo pasa a `--color-superficie` y el cuadrado sube 2 px (`translate`, 200 ms, `--ease-expo-out`; sin subida con reducir movimiento). Sin sombra ni brillo.
- **Nota al pie del índice:** «Cada clase · {duracionMin} min», en IBM Plex Mono `text-sm` `--color-texto-2`, alineada a la derecha. Se calcula en `RutaCurso.astro`. Si las 4 unidades no tienen el mismo `duracionMin`, el build falla con un error claro, igual que la ficha del curso con las horas.
- Nombre accesible de cada fila: `aria-labelledby` = número + título (como hoy) y `aria-describedby` = mini-proyecto + clase.
- **Limpieza:** se borran de `global.css` `.tarjeta-ruta`, `.titulo-ruta`, `.numero-ruta` y las reglas de la 05-07 que las nombran (sombra, `::before` y `::after`, subida y brillo). En `efectos.ts`, el selector queda en `".tarjeta"`. No se agrega JavaScript.

### 4. Unidades en salas (opción A, «Sala de la unidad»)

- En `SeccionUnidad.astro`, la cabecera y la cuadrícula van dentro de un `<div class="sala-unidad …">` con las clases de un mapa nuevo `salaUnidad` en `src/lib/colores-unidad.ts` (`bg-sala-u1` … `bg-sala-u4`). Los `<dialog>` quedan fuera de la sala, como hermanos, igual que hoy respecto de la cuadrícula.
- La sala usa `rounded-bloque rounded-bl-esquina`, relleno de 0,5 rem en móvil y 0,625 rem desde 640 px, y no tiene borde. La cuadrícula baja su margen superior de `mt-3` a `mt-2`.
- `.seccion-unidad` pierde `border-t border-linea` y gana `margin-top: var(--espacio-unidades)`. La última unidad gana además `margin-bottom: var(--espacio-unidades)`, para que el pie no quede pegado.
- **Una unidad en una pantalla** (escritorio con JavaScript, la regla actual): `.seccion-unidad` mantiene `display: flex; flex-direction: column; min-height: calc(100dvh - var(--alto-encabezado)); padding-block: 0.75rem`. `.sala-unidad` pasa a `flex: 1; display: flex; flex-direction: column` y `.cuadricula-bloques` mantiene `flex: 1`. La sala es la que llena la pantalla.
- Al imprimir, la sala va sin fondo. Sin soporte de `color-mix()`, la sala usa `--color-superficie` (`@supports`, igual que las sombras de la 05-07).
- Las tarjetas, el ticket, la cabecera, sus botones, las apariciones y el brillo no cambian.

### 5. Pie con la firma del OTEC

- `Pie.astro`, sobre `--color-superficie` (sin cambio):
  - **Zona superior:** desde 1024 px, una retícula `minmax(0,1fr) auto` con dos zonas alineadas al centro. A la izquierda, el nombre del curso y `Redes`. A la derecha, separada por `border-l` de 1 px `--color-linea-fuerte` y 2 rem de relleno, una columna alineada a la derecha con la etiqueta «Organismo Técnico de Capacitación» (IBM Plex Mono `text-sm`, mayúsculas por CSS, `tracking-[0.06em]`, `--color-texto-2`) y el logo de Capacita (`role="img"`, `aria-label="Capacita Tu Futuro"`, `aspect-[1184/442] h-12 w-auto text-primario`). En móvil, la zona del logo va debajo, alineada a la izquierda, sobre un `border-t` `--color-linea-fuerte` con 1,5 rem de relleno superior.
  - **Zona inferior:** a todo el ancho, sobre un `border-t` `--color-linea-fuerte`, el aviso y la licencia en `text-sm`, en columna en móvil y en fila con `justify-between` desde 640 px.
- El SVG de Capacita no se edita: el color sale de `currentColor`.

### 6. Tokens nuevos (`global.css`)

En `@theme` (modo claro) y redefinidos bajo `[data-modo="oscuro"]`, según `DESIGN.md` 2.1, 2.2 y 4:

```css
/* @theme (claro) */
--color-placa: #ffffff;
--color-linea-fuerte: color-mix(in oklab, var(--color-texto-2) 18%, transparent);
--color-sala-u1: color-mix(in oklab, var(--color-u1) 9%, var(--color-fondo));
--color-sala-u2: color-mix(in oklab, var(--color-u2) 9%, var(--color-fondo));
--color-sala-u3: color-mix(in oklab, var(--color-u3) 9%, var(--color-fondo));
--color-sala-u4: color-mix(in oklab, var(--color-u4) 14%, var(--color-fondo));

/* [data-modo="oscuro"]: solo cambian los porcentajes de las salas */
--color-sala-u1: color-mix(in oklab, var(--color-u1) 16%, var(--color-fondo));
--color-sala-u2: color-mix(in oklab, var(--color-u2) 16%, var(--color-fondo));
--color-sala-u3: color-mix(in oklab, var(--color-borde-u3) 16%, var(--color-fondo));
--color-sala-u4: color-mix(in oklab, var(--color-u4) 12%, var(--color-fondo));
```

`--espacio-unidades: clamp(4rem, 2.5rem + 4vw, 6rem)` va en `html` (`@layer base`), junto a `--alto-encabezado`. `data-modo` vive en `<html>`, el mismo elemento donde Tailwind declara las variables de `@theme`. Por eso las mezclas que no cambian de porcentaje (`--color-linea-fuerte`) toman solas el `--color-texto-2` y el `--color-fondo` del modo, y solo las salas se redefinen en oscuro. Antes de dar por buenos los colores, comprueba en el navegador (`getComputedStyle`) que cambian con el modo.

## Contenido aprobado (copiar tal cual)

> Aprobado por el desarrollador el 2026-11-22 y el 2026-11-23, en la sesión de diseño con vistas previas (skill Impeccable).

- Navegación: «Ruta», «Instructor», «U1», «U2», «U3», «U4», en ese orden.
- Botón principal de la portada: «Conoce a tu instructor» (a `#instructor`).
- Botón principal de la credencial: «Empezar por la Unidad 1» (a `#unidad-1`).
- Etiqueta de la credencial (el `h2`): «Instructor».
- Bajo la insignia: «Vigente hasta {certificacion.vigencia}», que hoy da «Vigente hasta 13-10-2029».
- Nombre accesible de las cifras: «La trayectoria en cifras».
- Cifras (`instructor.yaml`, campo `cifras`, en este orden; salen de `trayectoria`):

  ```yaml
  cifras:
    - valor: "+12"
      texto: años en docencia y formación técnica
    - valor: "+300"
      texto: profesionales formados en bootcamps
    - valor: "+50"
      texto: ejecutivos formados con Capacita Tu Futuro
  ```

- Fila de la ruta: «Clase {clase}» visible y « de {clases}» solo para lectores de pantalla; «Mini-proyecto:» como hoy.
- Nota al pie del índice: «Cada clase · {duracionMin} min», que hoy da «Cada clase · 120 min».
- Etiqueta del pie: «Organismo Técnico de Capacitación» (se muestra en mayúsculas por CSS).

## Decisiones del desarrollador

- 2026-11-22: el instructor pasa justo debajo de la portada, para que los participantes lo lean antes del contenido del curso, y la navegación sigue el orden de la página.
- 2026-11-22: la sección del instructor usa la opción A, «Credencial» (contenedor sobre `--color-superficie`), y no una franja a todo el ancho ni un mosaico.
- 2026-11-22: se aprueban las 3 cifras tomadas de `trayectoria` (+12, +300 y +50). Queda fuera «más de 2.000 estudiantes», porque el documento la atribuye a felipecuevas.dev.
- 2026-11-22: el botón de la portada pasa a «Conoce a tu instructor» y «Empezar por la Unidad 1» va al cierre de la credencial (opción b).
- 2026-11-22: la ruta de la portada usa la opción A, «Índice de la ruta», y no el mosaico compacto ni la franja de capítulos.
- 2026-11-22: la duración va en una nota única al pie del índice («Cada clase · 120 min») y cada fila dice solo «Clase n» (opción b).
- 2026-11-23: las unidades usan la opción A, «Sala de la unidad» (contenedor teñido), y no una franja a todo el ancho ni un marco de color sólido.
- 2026-11-23: el espacio entre unidades es `clamp(4rem, 2.5rem + 4vw, 6rem)`, unos 96 px en escritorio y 64 px en móvil.
- 2026-11-23: el logo de Capacita Tu Futuro va en `--color-primario` en la portada y en el pie, monocromo y sin dividir el trazado, con la etiqueta «Organismo Técnico de Capacitación» en el pie.
- 2026-11-23: el logo de GTD conserva sus colores originales.
- 2026-11-23: los 4 cambios van en una sola iteración, a pedido del desarrollador. El tamaño se acepta como excepción al máximo de la sección 3 de `_planificacion/README.md`, con 8 tareas y una revisión visual por bloque. Si la definición de preparada lo objeta, el agente avisa y propone partirla en 06-07 a 06-10 (un bloque del alcance por iteración) antes de empezar.
- 2026-11-23: se aceptan como desviaciones la portada en 1366 × 657 (la columna de texto termina en 756 px; la ruta sí cabe) y la U1 en 1366 × 657 (+39 px contra +24, por una línea más en la tarjeta del bloque 2); se mantiene el relleno de la sala en 0,625 rem. Evidencia en la [bitácora 06-07](bitacoras/bitacora-06-07.md).

## Plan técnico

| Archivo | Cambio |
| :------ | :----- |
| `src/pages/index.astro` | Orden de los componentes y del arreglo `enlaces`. |
| `src/components/Portada.astro` | Botón «Conoce a tu instructor» a `#instructor`; `text-primario` en el logo de Capacita; comentario de cabecera al día. |
| `src/components/Instructor.astro` | Credencial completa (sección 2 del alcance); el modal pierde la insignia. |
| `src/content.config.ts` y `src/content/instructor.yaml` | Campo `cifras` (3 elementos, `valor` y `texto`). |
| `src/components/RutaCurso.astro` | `ol.indice-ruta`, logo de Gemini más pequeño y nota «Cada clase · … min» con su comprobación. |
| `src/components/FilaRuta.astro` (nuevo) y `BloqueUnidad.astro` (se borra) | Fila del índice. |
| `src/components/SeccionUnidad.astro` y `src/lib/colores-unidad.ts` | `.sala-unidad` y mapa `salaUnidad`. |
| `src/components/Pie.astro` | Dos zonas, etiqueta y logo. |
| `src/styles/global.css` | Tokens nuevos; `.credencial` y sus piezas; `.indice-ruta`, `.fila-ruta` y `.cuadro-ruta`; `.sala-unidad`; `.seccion-unidad` sin borde y con espacio; reglas de una pantalla; impresión; se borran las reglas de `.tarjeta-ruta`. |
| `src/scripts/efectos.ts` | Selector `".tarjeta"` (sin `.tarjeta-ruta`). |

- **Encabezados:** 1 `h1` (portada) → `h2` «Ruta del curso» → 4 `h3` de las filas → `h2` «Instructor» → `h3` nombre → `h2` de cada unidad → `h3` de las tarjetas. Sin saltos de nivel.
- **Sin JavaScript (RDA-007, RDA-011):** la credencial, el índice, las salas y el pie no dependen del script. «Ver trayectoria completa» sigue oculto sin JS y el contenido del modal se lee en la página (sin la insignia, que ya está arriba).
- **Observador del encabezado:** no cambia. Con 96 px entre secciones, en ciertos desplazamientos la franja central de detección cae en el espacio vacío y la píldora activa se queda en la sección anterior, lo que está bien. Compruébalo al recorrer la página.
- **Estándares de `AGENTS.md` que aplican:** tokens en lugar de valores sueltos, textos del curso desde colecciones, cero dependencias nuevas, cero JavaScript nuevo y accesibilidad AA.

## Tareas

1. **Línea base y documentos (antes de tocar el código):**
   - Mide en `pnpm preview`, en ambos modos, el alto de la portada y el `bottom` de su último elemento en 1440 × 900, 1366 × 657 y 390 × 844, y el alto de cada `.seccion-unidad` en 1440 × 900 y 1366 × 657, con el fragmento de la 05-08 y quitando `flex` para el alto natural.
   - Comprueba con `grep` que el desarrollador aplicó la P-029: en `DESIGN.md` deben estar «--color-sala-u1», «Conoce a tu instructor», «Organismo Técnico de Capacitación» y «Excepción sobre la trama».
   - Reabre la épica 06: estado «Reabierta (2026-11-23)» en `definicion-epica-06.md`, fila 06-07 en su tabla y sus decisiones; fila 06-07 «En curso» en la sección 1 de `registro-pendientes.md`, con la iteración activa en el encabezado; nota de reapertura en la fila de la épica 06 de la sección 2.
   - Agrega RDA-014 (texto abajo) a `decisiones.md`, con su fila en el índice, y la línea «Reemplazada parcialmente por RDA-014 (formato de la ruta)» al final de RDA-013.
   - Agrega la P-029 a `propuestas-documentos-protegidos.md`: `DESIGN.md` 1, 2, 4, 5, 6, 7 y 8; origen «Diseño de la 06-07»; estado «Aplicada {fecha}». En su detalle, anota que reemplaza la P-028 en su punto 2 e incorpora sus puntos 1, 3 y 4, que no estaban en `main`.
   - En `definicion-epica-07.md`, agrega a las precondiciones: «2026-11-23: la épica 06 se reabrió para la 06-07; la 07-01 espera su cierre».
2. **Orden y portada:** `index.astro`, el botón de `Portada.astro` y el color del logo de Capacita en la portada.
3. **Credencial del instructor:** esquema y `instructor.yaml` con `cifras`, `Instructor.astro`, tokens `--color-placa` y `--color-linea-fuerte`, y las clases de la credencial en `global.css`.
4. **Índice de la ruta:** `RutaCurso.astro`, `FilaRuta.astro` nuevo y `BloqueUnidad.astro` borrado; clases del índice; limpieza de `.tarjeta-ruta` en `global.css` y en `efectos.ts`.
5. **Salas:** tokens `--color-sala-u1` a `--color-sala-u4` y `--espacio-unidades`, mapa `salaUnidad`, `.sala-unidad` en `SeccionUnidad.astro`, reglas de una pantalla, `@supports` e impresión. Vuelve a medir el alto de las unidades. Si alguna pasa de 823 px en 1440 × 900, baja el relleno de la sala a 0,5 rem en escritorio y anótalo en la bitácora; si aun así no cabe, detente y avisa.
6. **Pie:** `Pie.astro` con las dos zonas, la etiqueta y el logo.
7. **Verificación** (criterios de abajo):
   - `pnpm build` con la guardia, `pnpm astro check` y las regresiones.
   - Revisión en 360, 640, 1024, 1366 y 1440 px, en ambos modos, con teclado, sin JavaScript, con reducir movimiento y en la vista de impresión.
   - Contraste con las mediciones de `DESIGN.md` 2.3.
   - Detector de Impeccable (`pnpm dlx impeccable@4.10.0 detect --json` sobre los archivos tocados, salida fuera del repositorio).
   - Lighthouse móvil local (mediana de 3).
8. **Bitácora y cierre:** escribe `bitacoras/bitacora-06-07.md` y actualiza el registro: estado, backlog (fila nueva asignada a la 06-07), propuesta fuera de alcance «logo de GTD en modo oscuro» e historial. Deja la 06-07 en «En revisión» y propone el commit. Después del merge del desarrollador, mide Lighthouse móvil publicado (mediana de 3) y escribe `bitacoras/bitacora-06-cierre-06-07.md` con el cierre de la épica reabierta (la bitácora de cierre anterior no se edita).

## Tareas del desarrollador

1. Antes de empezar, reemplazar `DESIGN.md` por la versión entregada en la sesión de diseño (P-029) y hacer commit en `main`.
2. Aprobar la rama `iteracion/06-07-recorrido-instructor-ruta-salas`.
3. Revisar la vista previa local por bloque del alcance (portada, credencial, salas y pie) y, después del merge, el sitio publicado en notebook y teléfono, y confirmarlo con fecha.

## Criterios de aceptación

### Estructura y navegación

- [x] En `dist/index.html`, el orden de las secciones es `#inicio` (con `#ruta` dentro) → `#instructor` → `#unidad-1` … `#unidad-4`.
- [x] La navegación muestra Ruta, Instructor, U1, U2, U3, U4. La píldora activa (`aria-current`) sigue a la sección visible al recorrer la página de arriba abajo.
- [x] El botón principal de la portada dice «Conoce a tu instructor» y lleva a `#instructor`; el de la credencial dice «Empezar por la Unidad 1» y lleva a `#unidad-1`. Hay un solo botón principal por sección.
- [x] Hay 1 `h1` y los encabezados siguen el árbol del plan técnico, sin saltos (árbol de accesibilidad).

### Portada y ruta

- [x] La ruta es un `<ol>` de 4 filas enlazadas, cada una con su cuadrado de color y número, nombre, mini-proyecto completo (también «…Ley 21.719 en GTD») y «Clase n», más la nota «Cada clase · 120 min».
- [x] El build falla con un mensaje claro si se cambia el `duracionMin` de una sola unidad (prueba local, revertida).
- [ ] En 1440 × 900 y en 1366 × 657 (ambos modos), el título, el lema, la ficha, el botón, las redes, los logos y las 4 filas con la nota se ven sin desplazarse: el `bottom` del último elemento de `#inicio` es ≤ alto de la ventana. · **No se cumple en 1366 × 657** (755,8 > 657; en 1440 × 900, 755,8 ≤ 900): desviación aceptada por el desarrollador el 2026-11-23 (P-030).
- [x] En 390 × 844, el logo de Gemini queda en la misma fila que «Ruta del curso» y ninguna fila se desborda en horizontal.
- [x] `grep -c "tarjeta-ruta" dist/index.html` = 0, y en el CSS compilado no quedan reglas `.tarjeta-ruta`.

### Instructor

- [x] La credencial muestra la insignia sobre la placa blanca en ambos modos, «Vigente hasta 13-10-2029», la etiqueta «INSTRUCTOR» (texto «Instructor» en el HTML), el nombre, la certificación, las 2 líneas de trayectoria, las 3 acciones y las 3 cifras con el texto aprobado. Las cifras salen de `instructor.yaml`: `grep -c "+300" src/components/Instructor.astro` = 0.
- [x] El modal «Trayectoria completa» abre y cierra igual que antes y ya no tiene la imagen de la insignia: hay 1 sola `img` de la insignia en `dist/index.html`.
- [x] En 360 px, la insignia va arriba, las cifras se apilan y nada se desborda.

### Unidades

- [x] Cada unidad está dentro de su `.sala-unidad` con `--color-sala-uN`, y el color calculado cambia con el modo (`getComputedStyle`).
- [x] Entre el borde inferior de una sala y el superior de la siguiente hay ≥ 96 px en 1440 × 900 y ≥ 64 px en 390 × 844.
- [ ] Una unidad en una pantalla: en 1440 × 900 (ambos modos), cada `.seccion-unidad` mide ≤ 823 px y su alto natural (sin `flex`) también es ≤ 823 px. En 1366 × 657, cada unidad mide como máximo 24 px más que en la línea base de la tarea 1. · En 1440 × 900 se cumple (máximo 818,6); **en 1366 × 657 la U1 crece +39** (U2 a U4, +15): desviación aceptada por el desarrollador el 2026-11-23.
- [x] Al imprimir, las salas van sin fondo y la trama no aparece.

### Pie y logos

- [x] El logo de Capacita se ve en `--color-primario` en la portada y en el pie, en ambos modos (`getComputedStyle(svg).color`), y `git diff --stat -- src/assets` está vacío.
- [x] Desde 1024 px, el pie tiene dos zonas con la línea vertical; la etiqueta «Organismo Técnico de Capacitación» va sobre el logo de 48 px, alineada a la derecha. En móvil, la zona del logo va debajo y alineada a la izquierda.
- [x] El logo de GTD conserva `#5F7EBA` y `#43649C`.

### Accesibilidad y regresiones

- [x] Los contrastes de las filas nuevas de `DESIGN.md` 2.3 se cumplen, medidos en el navegador en ambos modos. Los separadores `--color-linea-fuerte` son decorativos y no se exigen.
- [x] Con teclado: cada fila de la ruta y cada acción de la credencial reciben foco visible. En la fila, el foco muestra el fondo `--color-superficie` y la subida del cuadrado; con reducir movimiento, sin subida.
- [x] Sin JavaScript, en modo claro, la página se lee completa y no queda ningún botón sin función.
- [x] `pnpm build` sin advertencias y con la guardia en 0 marcadores; `pnpm astro check` 0/0/0; 24 de 24 prompts; 54 `<dialog>`; 0 `id` repetidos.
- [x] JavaScript propio ≤ 1774 B gzip, sin JavaScript nuevo.
- [x] Impeccable: `[]`, o cada hallazgo justificado en la bitácora.
- [ ] Lighthouse móvil publicado, mediana de 3: cada categoría a 2 puntos o menos de 99/100/100/100; CLS < 0,1; el elemento LCP sigue siendo el `h1`. · Se midió junto con la 06-08 (decisión del desarrollador): **92**/100/100/100, CLS 0, LCP en el `h1`; Rendimiento no se cumple y queda como desviación aceptada el 2026-11-23 ([cierre](bitacoras/bitacora-06-cierre-06-08.md)).

## RDA-014 (texto para `decisiones.md`)

```markdown
## RDA-014 · Recorrido de la página: instructor antes de las unidades, ruta como índice y unidades en salas

- **Fecha:** 2026-11-23
- **Estado:** Aceptada
- **Reemplaza parcialmente:** RDA-013 (formato de la ruta: «Clase n de 4 · 120 min» en cada tarjeta)

**Contexto:** en la revisión de diseño del 2026-11-22 y 2026-11-23 (skill Impeccable, con vistas previas aprobadas por el desarrollador), el instructor estaba al final de la página y los participantes llegaban al contenido sin saber quién dicta el curso. Además, la ruta de 4 tarjetas de color sólido (694 px de los 750 px de la portada) le quitaba el protagonismo al título, y las unidades quedaban pegadas entre sí (unos 25 px) y sin una superficie propia.
**Decisión:** el orden de la página pasa a portada → instructor → unidades → pie, y la navegación lo sigue. El botón principal de la portada lleva al instructor y el de la credencial del instructor lleva a la Unidad 1. La ruta pasa a un índice de 4 filas con el color solo en el cuadrado del número; cada fila muestra «Clase n» y una nota única dice «Cada clase · 120 min». Cada unidad vive en una sala teñida con su color (tokens `--color-sala-uN`), con `--espacio-unidades` entre una y otra. El campo nuevo `cifras` de `instructor.yaml` alimenta las 3 cifras de la credencial.
**Alternativas consideradas:** para el instructor, una franja oscura a todo el ancho y un mosaico de 3 bloques; para la ruta, un mosaico 2 × 2 compacto y una franja de 4 capítulos al pie de la portada; para las unidades, una franja teñida a todo el ancho y un marco de color sólido. El detalle está en la iteración 06-07.
**Consecuencias:** la portada cabe completa también en 1366 × 657. El instructor gana peso y se lee antes del curso. Cada unidad suma unos 20 px de relleno (la sala) que deben caber en los ~41 px libres de «una unidad en una pantalla». En modo oscuro, las salas de la U2 y la U3 se parecen y las distingue su cabecera. El esquema de `instructor` suma un campo obligatorio.
```

## Riesgos

- **Que la sala rompa «una unidad en una pantalla».** Quedan unos 41 px libres y la sala suma unos 20 px de alto, más lo que crezcan los títulos al perder 20 px de ancho. Se detecta en la tarea 5 con la medición. Mitigación: relleno de 0,5 rem; si no basta, el agente se detiene y avisa.
- **Que la credencial y las salas se lean como «más cajas».** Se diferencian por la superficie neutra frente al tinte de color, por la insignia y por las cifras. Se revisa en la vista previa con el desarrollador (tarea del desarrollador 3).
- **Cifras que repiten el resumen.** La línea 1 de la trayectoria empieza con «Más de 12 años en docencia y formación técnica» y la primera cifra dice lo mismo. Se acepta así porque los textos están aprobados. Si el desarrollador lo pide, se cambia en una corrección aparte.
- **U4 en oscuro.** El amarillo al 12 % sobre `#00131D` tira a oliva (≈ `#172727`). Si en la revisión se ve sucio, se baja al 10 %, una sola línea de CSS.
- **Píldora activa en los espacios entre secciones.** Ver el plan técnico; es el comportamiento esperado.

## Fuera de alcance

- Recolorear el logo de GTD (queda como propuesta fuera de alcance: se ve apagado en modo oscuro).
- Cambiar las tarjetas de bloque, el ticket, la cabecera de la unidad, los modales (salvo quitar la insignia del modal del instructor), la trama de puntos o la barra de lectura.
- Textos nuevos del curso o de la trayectoria fuera de «Contenido aprobado».
- Dividir el trazado del logo de Capacita (no hace falta con un solo color).
- Dependencias nuevas y JavaScript nuevo.

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Aplicar la P-029 (`DESIGN.md` entregado en la sesión de diseño) antes de la tarea 1.
