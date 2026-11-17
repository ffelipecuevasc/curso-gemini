# Iteración 02-03 · Ruta del curso

- **Épica:** 02 · Portada, ruta del curso e instructor
- **Estado:** En revisión
- **Rama sugerida:** iteracion/02-03-ruta-curso
- **Depende de:** 02-02
- **RDA relacionadas:** RDA-003, RDA-004, RDA-008

## Objetivo

Mostrar en `#ruta` el mosaico de las 4 unidades, cada una con su color, número, título, mini-proyecto y avance, y enlazada a su sección.

## Punto de partida

- Las fichas reales de las 4 unidades y el módulo de `src/lib/` que las entrega ordenadas existen desde la 02-02.
- `src/styles/global.css` ya tiene los tokens `--color-u1` … `--color-u4`, `--color-sobre-u1` … `--color-sobre-u4` y `--color-borde-u3` (transparente en claro, `#00B0E8` en oscuro).
- `index.astro` genera la sección `#ruta` vacía; las secciones `#unidad-1` … `#unidad-4` siguen vacías y deben conservar su `id`.

## Alcance y entregables

- `src/components/RutaCurso.astro` (la sección `#ruta` con su `h2`) y `src/components/BloqueUnidad.astro` (un bloque del mosaico).
- `index.astro` usa `RutaCurso` en lugar de la sección vacía de la ruta.

## Decisiones del desarrollador

- 2026-11-17: el bloque muestra el **título completo** de la unidad (no hay título corto).
- 2026-11-17: avance escrito según RDA-008: «0 % → 25 %», «25 % → 50 %», «50 % → 75 %», «75 % → 100 %», en IBM Plex Mono (`DESIGN.md`, sección 5).

## Tareas

1. Crear `BloqueUnidad.astro` con props tipadas desde la colección: número («Unidad 1»), título completo como `h3`, título del mini-proyecto y avance desde `avance.desde` y `avance.hasta` (nada escrito a mano).
2. El bloque entero es un solo enlace a `#unidad-N`, con un nombre accesible que incluye el número y el título; foco visible con `--color-foco` y `outline-offset: 3px`.
3. Color por unidad con los tokens existentes (fondo `--color-uN`, texto `--color-sobre-uN`; la U3 con borde de 1 px `--color-borde-u3`). Radios de `DESIGN.md` (bloque 24–32 px, esquina asimétrica en los destacados), sin sombras.
4. Crear `RutaCurso.astro`: `section#ruta` con `aria-labelledby`, `h2` «Ruta del curso», y el mosaico con `grid` de 1 columna en móvil, 2 desde 640 px y 3 desde 1024 px, siempre con `minmax(0, 1fr)`.
5. Reemplazar la sección vacía de la ruta en `index.astro` y comprobar que «Ver la ruta» de la portada sigue llegando a `#ruta`.
6. Revisar que los títulos largos («Fundamentos de IA Generativa & Ingeniería de Prompts») no desbordan en 360 px (`text-wrap: balance` y `overflow-wrap`, sin recortar el texto).
7. Ejecutar `pnpm build` y `pnpm astro check`, revisar con `pnpm preview` en 360 px y escritorio, en ambos modos y con teclado; escribir la bitácora y actualizar el registro.

## Criterios de aceptación

- [x] El mosaico muestra 4 bloques en el orden U1 a U4, con título completo, mini-proyecto y avance tomados de las colecciones (búsqueda en los componentes de los títulos de unidad: 0 coincidencias). Evidencia: en `dist/index.html` los 4 `h3` salen en orden U1 a U4 con el título completo y los 4 mini-proyectos de los YAML; `grep -rnF` de los títulos de U1, U3 y U4 en `BloqueUnidad.astro` y `RutaCurso.astro`: 0. Fuera de los componentes de la ruta queda 1 coincidencia, «Gemini Notebook» en el `h2` provisorio de `#unidad-3` de `index.astro` (épica 03, no se toca); el título de la U2, «Gemini», no se puede buscar porque es también el nombre del logo.
- [x] El avance de cada bloque es el de la RDA-008, en IBM Plex Mono. Evidencia: `dist/index.html` trae «0 % → 25 %», «25 % → 50 %», «50 % → 75 %» y «75 % → 100 %», armados con `avance.desde` y `avance.hasta`, en un `p` con `font-codigo` (clase presente en el CSS generado).
- [ ] Con `Tab` se recorren los 4 bloques en orden, el foco se ve en los dos modos y `Enter` lleva a `#unidad-1` … `#unidad-4`. Sin marcar: falta la prueba con teclado en el navegador (pasos en la bitácora). Medido en el HTML: 4 enlaces `href="#unidad-1"` a `#unidad-4` en orden, cada uno con `aria-labelledby` al número y al título; el foco usa el `:focus-visible` global (`--color-foco`, `outline-offset: 3px`).
- [ ] Contraste del texto de cada bloque según la tabla 2.3 de `DESIGN.md`, y en modo oscuro la U3 tiene su borde `#00B0E8`. Sin marcar: falta verlo en el navegador. Medido con la fórmula WCAG sobre los tokens: U1 4,62:1 (todo el texto del bloque es de 16 px o más), U2 7,54:1, U3 10,64:1, U4 8,69:1; anillo de foco 4,62:1 en claro y 12,43:1 en oscuro. La clase `border-borde-u3` está en el CSS y el token vale `#00B0E8` en oscuro.
- [ ] Sin desborde horizontal en 360 px; 1, 2 y 3 columnas en 360, 640 y 1024 px. Sin marcar: falta verlo en el navegador. Medido en el CSS: `grid-cols-1`, `@media (width>=40rem)` con `repeat(2,minmax(0,1fr))` y `@media (width>=64rem)` con `repeat(3,minmax(0,1fr))`; títulos y mini-proyectos con `wrap-break-word` y `text-wrap: balance` en `h3`.
- [x] La página sigue con un solo `h1`; `#ruta` tiene su `h2` y cada bloque su `h3`. Evidencia: `grep -o` en `dist/index.html`: 1 `h1`, 6 `h2` (incluido `titulo-ruta`), 4 `h3`; `id="ruta"` e `id="unidad-1"` a `id="unidad-4"` presentes una vez cada uno.
- [x] `pnpm build` y `pnpm astro check` sin errores ni advertencias nuevas; 0 B de JavaScript nuevo. Evidencia: `astro check` 0/0/0; `pnpm build` «Complete!» con solo las 2 advertencias del cargador `file` ya aceptadas en la 02-02; los componentes nuevos tienen 0 `<script>` y `dist/index.html` sigue con 3 scripts (modo, botón de modo y menú).

## Fuera de alcance

- Logotipo de Gemini en los bloques de la U2 o la U3 (obliga a ids únicos; no está pedido).
- El contenido de las secciones de unidad (épica 03).

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Ninguno.
