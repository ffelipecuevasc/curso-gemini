# Iteración 05-06 · Portada y ruta en un pantallazo

- **Épica:** 05 · Rediseño visual y síntesis del contenido
- **Estado:** En revisión
- **Rama sugerida:** iteracion/05-06-portada-ruta
- **Depende de:** 05-01, 05-05 (reutiliza su barra de avance, `src/lib/colores-unidad.ts`, `Modal.astro` y `BotonModal.astro`) y propuesta P-009 aplicada
- **Especificación:** —
- **RDA relacionadas:** RDA-004, RDA-008

## Objetivo

Que el primer pantallazo muestre el curso completo: título, lema y las 4 unidades como protagonistas, y que el instructor ocupe un espacio compacto, para que la página entera mida como máximo 7 pantallas.

## Punto de partida

- `Portada.astro`: título (`h1`), lema, botón «Ver la ruta», logo de Gemini y de Google sobre un círculo `superficie`, logos de GTD y Capacita Tu Futuro aparte, y las redes abajo a la izquierda. En 1440 × 900 la ruta queda bajo el pliegue (captura del 2026-11-18).
- `RutaCurso.astro` y `BloqueUnidad.astro`: mosaico de 4 bloques de color con número, título, mini-proyecto y avance en texto.
- `Instructor.astro`: sección propia con nombre, títulos, trayectoria y redes.

## Ajustes tras la 05-05 (2026-11-20)

> Choques detectados en la bitácora 05-05 con lo ya construido. No cambian las decisiones de esta iteración.

1. **Mini-proyecto completo:** ya no está en la sección de la unidad; vive en el modal «Sobre la unidad». El riesgo de `line-clamp` remite ahí.
2. **Barra de avance:** `CabeceraUnidad.astro` ya tiene una (pista `aria-hidden`, segmento con `margin-left` y `width` en %, texto `sr-only`); se extrae a `BarraAvance.astro` y la usan la cabecera y `BloqueUnidad.astro`.
3. **Colores por unidad:** `BloqueUnidad.astro` importa `bloqueUnidad` de `src/lib/colores-unidad.ts` en lugar de su mapa propio.
4. **Modal del instructor:** `Modal.astro` exige `unidad` para la franja; hace falta una franja neutra (prop opcional). El botón es `BotonModal.astro` y el `id` va en `src/lib/modales.ts`.
5. **Objetivo de 7 pantallas:** con las unidades ya ajustadas se mide de nuevo en la tarea 1 (antes de la 05-05 la página medía 7,8 pantallas en 1440 × 900); en 1366 × 657 cada unidad ocupa ≈ 1,4 pantallas.
6. **Alto del encabezado:** `--alto-encabezado` (77 px) ya existe; la sección fusionada lo descuenta de `100dvh`. El script de medición en Edge headless de la 05-05 sirve para la tarea 1.
7. **Dependencias:** se suma la 05-05 a «Depende de».
8. **Navegación:** con secciones de unidad más cortas, la tarea 6 revisa también `aria-current` de las píldoras al pasar por `#ruta`, `#unidad-N` e `#instructor`.

## Alcance y entregables

- **Portada y ruta fusionadas en una sola sección** (el `h1` sigue siendo el título del curso y la sección de ruta conserva su `id="ruta"` y su `h2`, para no romper anclas ni la navegación):
  - Columna de texto: título, lema y botón principal «Empezar por la Unidad 1» (ancla a `#unidad-1`), con las redes debajo.
  - Columna visual: el logo de Gemini sin modificar (regla 6 de contenido de `AGENTS.md`) y, en primer plano, las 4 tarjetas de unidad en mosaico 2 × 2, cada una con número, título, mini-proyecto y una barra de avance visual de su tramo (RDA-008) además del texto.
  - Logos de Google, GTD y Capacita Tu Futuro en una franja discreta al pie de la sección, como hoy pide `DESIGN.md`.
  - En móvil, el texto va primero y las 4 tarjetas se apilan en 1 columna (2 columnas desde 640 px).
- **Instructor compacto:** una franja con nombre, la certificación de Gemini primero, un resumen de la trayectoria tomado literal del documento del curso, y un botón «Ver trayectoria completa» que abre un modal (componente de la 05-04, si ya existe; si no, `<details>`) con el resto.
- Ningún texto nuevo salvo el botón «Empezar por la Unidad 1»; el resumen de la trayectoria se aprueba como «Contenido aprobado».

## Contenido aprobado (copiar tal cual)

> Se completa durante la iteración con el texto del botón y el resumen de la trayectoria que apruebe el desarrollador.

> Aprobado por el desarrollador el 2026-11-20, tal cual.

- Botón principal: «Empezar por la Unidad 1» (enlaza a `#unidad-1`; cita de `DESIGN.md:108`).
- Resumen visible de la trayectoria: líneas 18 y 20 de `src/content/instructor.yaml`, literales: «Más de 12 años en docencia y formación técnica. Docente universitario en IPLACEX (2024 a la fecha) y antes en INACAP (2012–2020), Duoc UC e IACC.» e «Instructor certificado de IA con Gemini en programas corporativos para Capacita Tu Futuro (más de 50 ejecutivos y colaboradores, octubre de 2026) y Skillnest (junio a agosto de 2026).».
- Modal «Trayectoria completa» (botón «Ver trayectoria completa», de `DESIGN.md`, fila «Instructor»): formación, certificación con descripción, fechas, enlace e insignia (si existe), el resto de la trayectoria y «Fundador de la comunidad Pulso Devs.».

## Decisiones del desarrollador

- 2026-11-20: textos aprobados tal cual (arriba); la certificación de Gemini consta en las fuentes y se muestra primero.
- 2026-11-20: `unidad` opcional en `Modal.astro`; sin ella la franja usa `--color-primario`. Propuesta P-016 (`DESIGN.md`, fila «Modal»), pendiente.
- 2026-11-20: P-014 y P-015 aplicadas en `DESIGN.md` (comprobado con `grep`).

## Tareas

1. Medir y anotar en la bitácora el alto de la portada, de la ruta y del instructor en 1440 × 900, 1366 × 657 y 360 × 740 (línea base).
2. Rehacer `Portada.astro` y `RutaCurso.astro` como una sola sección visual, conservando `id`, `h1`, `h2` y anclas.
3. Agregar la barra de avance visual en `BloqueUnidad.astro`, con el texto del tramo para lectores de pantalla.
4. Proponer al desarrollador el texto del botón y el resumen de la trayectoria; cargar solo lo aprobado.
5. Rehacer `Instructor.astro` en formato compacto con el modal o `<details>` de trayectoria completa.
6. Revisar la navegación del encabezado («Ruta» e «Instructor»), la píldora activa y el salto al contenido.
7. Ejecutar `pnpm build`, `pnpm astro check` y las regresiones; revisar en 360, 640, 1024, 1366 y 1440 px, ambos modos y teclado.
8. Escribir la bitácora y actualizar el registro.

## Tareas del desarrollador

1. Aprobar el texto del botón y el resumen de la trayectoria.
2. Confirmar si la insignia de Gemini Certified Educator ya está disponible (sigue en «Decisiones por tomar»); si llega, se usa el campo `insignia` del esquema.

## Criterios de aceptación

- [ ] En 1440 × 900 y 1366 × 657, el título, el lema, el botón principal y las 4 tarjetas de unidad completas se ven sin desplazarse (captura en la bitácora).
- [ ] La sección del instructor mide como máximo una altura de ventana en 1440 × 900.
- [x] Medido: `git diff --stat -- src/assets` vacío; los SVG no cambian (solo su ubicación y tamaño en `Portada.astro`). Los logotipos de Google, Gemini y Chrome conservan sus SVG originales sin cambios (comparación de los archivos y del marcado con `git diff`).
- [ ] Las anclas `#inicio`, `#ruta`, `#unidad-1` a `#unidad-4` e `#instructor` siguen funcionando desde el encabezado.
- [ ] 1 `h1`; cada `section` con `aria-labelledby`; contraste AA de las tarjetas sobre su color. Medido por script: 1 `h1`, 7 `section` con `aria-labelledby`, 0 saltos de nivel; el contraste no cambia (mismos pares de color de la 02-03), pero lo confirma el desarrollador.
- [ ] Regresiones: `pnpm build` sin advertencias con la guardia; `pnpm astro check` 0/0/0; 0 B de JavaScript nuevo; LCP sin empeorar respecto de la medición de la 04-04 (Lighthouse móvil sobre `pnpm preview`).

## Riesgos

- Que poner las 4 tarjetas en el primer pantallazo aumente el LCP: el elemento LCP sigue siendo el `h1` de texto; las tarjetas no llevan imágenes.
- Que en 1366 × 657 no quepan las 4 tarjetas con su mini-proyecto: el mini-proyecto se acorta con `line-clamp` a 2 líneas y se muestra completo en la sección de la unidad.

## Fuera de alcance

- Efectos y sombras de las tarjetas (05-07).
- Cambiar los logotipos o agregar los logos de GTD y Capacita al pie (sigue como propuesta fuera de alcance).

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Aprobación del texto del botón y del resumen de la trayectoria.
