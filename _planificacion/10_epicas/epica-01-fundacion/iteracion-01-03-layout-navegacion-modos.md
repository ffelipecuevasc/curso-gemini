# Iteración 01-03 · Layout, navegación y modos

- **Épica:** 01 · Fundación y sistema de diseño
- **Estado:** Pendiente
- **Rama sugerida:** iteracion/01-03-layout-navegacion-modos
- **Depende de:** 01-02
- **RDA relacionadas:** RDA-002, RDA-004

## Objetivo

Dejar el layout común de la página: salto al contenido, encabezado con navegación en píldoras y menú móvil, botón de modo claro/oscuro sin parpadeo y pie con las redes.

## Alcance y entregables

- `src/layouts/Base.astro` con `head` (título, descripción, `lang="es-CL"`), el script en línea que aplica el modo guardado antes de pintar, el enlace «Saltar al contenido principal», `header`, `main` y `footer`.
- `src/components/Encabezado.astro`: navegación en píldoras con anclas a Ruta, U1, U2, U3, U4, Instructor y Recursos; en móvil, menú con botón (`aria-expanded`, `aria-controls`, cierre con `Escape`).
- `src/components/BotonModo.astro`: botón con `aria-pressed` y etiqueta accesible; sigue `prefers-color-scheme` hasta que el participante elige, y guarda la elección en `localStorage`.
- `src/components/Redes.astro` y `src/components/Pie.astro` con los enlaces y textos exactos de `DESIGN.md`, sección 5.
- Secciones vacías con sus `id` y `h2` provisorios, para probar las anclas.

## Tareas

1. Crear `Base.astro` con la estructura semántica y el script en línea del modo.
2. Crear `BotonModo.astro` con su script, con `try/catch` alrededor de `localStorage`.
3. Crear `Encabezado.astro` con la navegación y el menú móvil.
4. Marcar la píldora de la sección visible con `aria-current` (script mínimo con `IntersectionObserver`; sin script, la navegación funciona igual).
5. Crear `Redes.astro` con los íconos de la identidad y `Pie.astro`.
6. Respetar `prefers-reduced-motion` en el desplazamiento a las anclas.
7. Ejecutar `pnpm build` y `pnpm astro check`, y revisar con teclado en 360 px y escritorio, en ambos modos.

## Criterios de aceptación

- [ ] Con JavaScript desactivado, la página se lee completa y todas las anclas de la navegación funcionan.
- [ ] Al recargar después de elegir modo oscuro, la página aparece en oscuro sin mostrar antes el modo claro (revisado con la limitación de red «3G lenta» de las herramientas del navegador).
- [ ] El primer `Tab` enfoca «Saltar al contenido principal» y `Enter` lleva el foco a `main`.
- [ ] En 360 px el menú abre y cierra con teclado, `Escape` lo cierra y `aria-expanded` cambia.
- [ ] Los enlaces de redes muestran el texto exacto, apuntan a las URL de `DESIGN.md` y abren en pestaña nueva con `rel="noopener noreferrer"`.
- [ ] Todo objetivo táctil del encabezado mide 44 × 44 px o más.
- [ ] El JavaScript total enviado pesa menos de 3 KB comprimido.

## Fuera de alcance

- Contenido de las secciones (épicas 02 y 03).

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Ninguno.
