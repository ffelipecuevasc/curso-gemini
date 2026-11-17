# Iteración 01-03 · Layout, navegación y modos

- **Épica:** 01 · Fundación y sistema de diseño
- **Estado:** En revisión
- **Rama sugerida:** iteracion/01-03-layout-navegacion-modos
- **Depende de:** 01-02
- **RDA relacionadas:** RDA-002, RDA-004

## Objetivo

Dejar el layout común de la página: salto al contenido, encabezado con navegación en píldoras y menú móvil, botón de modo claro/oscuro sin parpadeo y pie con las redes.

## Alcance y entregables

- `src/layouts/Base.astro` con `head` (título, descripción, `lang="es-CL"`), el script en línea que aplica el modo guardado antes de pintar, el enlace «Saltar al contenido principal», `header`, `main` y `footer`.
- `src/components/Encabezado.astro`: navegación en píldoras con anclas a Ruta, U1, U2, U3, U4 e Instructor; en móvil, menú con botón (`aria-expanded`, `aria-controls`, cierre con `Escape`). «Recursos» se quitó por decisión del desarrollador; el cambio de `DESIGN.md` está en la propuesta P-003.
- `src/components/BotonModo.astro`: botón con `aria-pressed` y etiqueta accesible; sigue `prefers-color-scheme` hasta que el participante elige, y guarda la elección en `localStorage`.
- `src/components/Redes.astro` y `src/components/Pie.astro` con los enlaces y textos exactos de `DESIGN.md`, sección 5.
- Secciones vacías con sus `id` y `h2` provisorios, para probar las anclas.
- `.gitattributes` con `* text=auto eol=lf`, para fijar los finales de línea.

## Tareas

La iteración tiene 8 tareas: la 8 la agregó el desarrollador al empezar.

1. Crear `Base.astro` con la estructura semántica y el script en línea del modo.
2. Crear `BotonModo.astro` con su script, con `try/catch` alrededor de `localStorage`.
3. Crear `Encabezado.astro` con la navegación y el menú móvil.
4. Marcar la píldora de la sección visible con `aria-current` (script mínimo con `IntersectionObserver`; sin script, la navegación funciona igual).
5. Crear `Redes.astro` con los íconos de la identidad y `Pie.astro`.
6. Respetar `prefers-reduced-motion` en el desplazamiento a las anclas.
7. Ejecutar `pnpm build` y `pnpm astro check`, y revisar con teclado en 360 px y escritorio, en ambos modos.
8. Crear `.gitattributes` con `* text=auto eol=lf` y entregar al desarrollador el comando de normalización (`git add --renormalize .`), que ejecuta él.

## Criterios de aceptación

- [ ] Con JavaScript desactivado, la página se lee completa y todas las anclas de la navegación funcionan. (HTML compilado: los 6 enlaces son anclas a `id` existentes y la lista solo se oculta bajo `[data-js]`; falta la prueba en el navegador.)
- [ ] Al recargar después de elegir modo oscuro, la página aparece en oscuro sin mostrar antes el modo claro (revisado con la limitación de red «3G lenta» de las herramientas del navegador). (El script en línea va en el `<head>`, antes del CSS; falta la prueba con «3G lenta».)
- [ ] El primer `Tab` enfoca «Saltar al contenido principal» y `Enter` lleva el foco a `main`. (Es el primer enlace del `body` y `main` tiene `id="contenido"` y `tabindex="-1"`; falta la prueba con teclado.)
- [ ] En 360 px el menú abre y cierra con teclado, `Escape` lo cierra y `aria-expanded` cambia. (Implementado; falta la prueba en el navegador.)
- [x] Los enlaces de redes muestran el texto exacto, apuntan a las URL de `DESIGN.md` y abren en pestaña nueva con `rel="noopener noreferrer"`. (HTML compilado: 2 enlaces con los `href` y textos exactos y `target="_blank" rel="noopener noreferrer"`.)
- [ ] Todo objetivo táctil del encabezado mide 44 × 44 px o más. (Por clases: `min-h-11 min-w-11` en las píldoras, `size-11` en el botón de modo, `min-h-11` en el botón de menú y en el título; falta medirlo en el navegador.)
- [x] El JavaScript total enviado pesa menos de 3 KB comprimido. (3 scripts incrustados en el HTML: 1892 B sin comprimir, 806 B con gzip.)

## Fuera de alcance

- Contenido de las secciones (épicas 02 y 03).

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Ninguno.
