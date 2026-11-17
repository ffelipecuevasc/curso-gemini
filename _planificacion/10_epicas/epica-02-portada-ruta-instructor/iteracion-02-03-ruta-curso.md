# Iteración 02-03 · Ruta del curso

- **Épica:** 02 · Portada, ruta del curso e instructor
- **Estado:** Pendiente
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

- [ ] El mosaico muestra 4 bloques en el orden U1 a U4, con título completo, mini-proyecto y avance tomados de las colecciones (búsqueda en los componentes de los títulos de unidad: 0 coincidencias).
- [ ] El avance de cada bloque es el de la RDA-008, en IBM Plex Mono.
- [ ] Con `Tab` se recorren los 4 bloques en orden, el foco se ve en los dos modos y `Enter` lleva a `#unidad-1` … `#unidad-4`.
- [ ] Contraste del texto de cada bloque según la tabla 2.3 de `DESIGN.md`, y en modo oscuro la U3 tiene su borde `#00B0E8`.
- [ ] Sin desborde horizontal en 360 px; 1, 2 y 3 columnas en 360, 640 y 1024 px.
- [ ] La página sigue con un solo `h1`; `#ruta` tiene su `h2` y cada bloque su `h3`.
- [ ] `pnpm build` y `pnpm astro check` sin errores ni advertencias nuevas; 0 B de JavaScript nuevo.

## Fuera de alcance

- Logotipo de Gemini en los bloques de la U2 o la U3 (obliga a ids únicos; no está pedido).
- El contenido de las secciones de unidad (épica 03).

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Ninguno.
