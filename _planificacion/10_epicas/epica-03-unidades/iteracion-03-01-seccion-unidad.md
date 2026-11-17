# Iteración 03-01 · Sección de unidad y texto de los bloques

- **Épica:** 03 · Unidades del curso
- **Estado:** Pendiente
- **Rama sugerida:** iteracion/03-01-seccion-unidad
- **Depende de:** 02-06
- **Especificación:** —
- **RDA relacionadas:** RDA-003, RDA-008, RDA-009

## Objetivo

Mostrar las 4 secciones de unidad con su ficha, la tabla de bloques y el texto «Para la clase» de cada bloque, desde las colecciones y con un solo componente guiado por los datos.

## Punto de partida

- `src/pages/index.astro` arma `#unidad-1` a `#unidad-4` como secciones vacías con `h2` cortos escritos a mano («Unidad 1 · Fundamentos y prompts»…).
- `obtenerUnidadesConBloques()` (`src/lib/unidades.ts`) ya devuelve cada unidad con sus bloques ordenados y valida RDA-009 y las referencias (`comprobarReferencias()`); hoy la llama `RutaCurso`.
- Los 26 bloques tienen cuerpo Markdown sin títulos (`#`); 9 traen tablas (bitácora 02-06).
- `dist/index.html` al empezar: 1 `h1`, 6 `h2`, 5 `h3`, 3 scripts.

## Alcance y entregables

- `src/components/SeccionUnidad.astro`: `section#unidad-N` con `aria-labelledby`, `h2` con el título completo de la ficha, ficha (objetivo, mini-proyecto, entregable, «Terminado cuando…»), tabla de bloques y un `BloqueClase` por bloque.
- `src/components/BloqueClase.astro`: `article` con el título del bloque como `h3`, sus minutos y el cuerpo con `render()`.
- Estilos del cuerpo Markdown escritos a mano con tokens de `DESIGN.md` (listas, negritas, tablas, citas y código en línea), sin `@tailwindcss/typography`.
- `index.astro`: las 4 secciones vacías se reemplazan por `SeccionUnidad`; la navegación sigue con «U1» a «U4».

## Decisiones del desarrollador

- 2026-11-17: un solo componente guiado por los datos para las 4 unidades; no hay iteraciones de presentación por unidad.
- 2026-11-17: el `h2` de cada unidad es el título completo de su ficha, no el texto corto de hoy.

## Plan técnico

- `index.astro` obtiene las unidades una vez con `obtenerUnidadesConBloques()` y pasa cada una a `SeccionUnidad` (props tipadas con `UnidadConBloques`); `RutaCurso` sigue llamándola, así que las comprobaciones no dependen de una sola llamada.
- «Terminado cuando…» va como lista simple: guardar casillas está fuera de alcance (propuesta registrada).
- Tablas del cuerpo: el HTML de `render()` no se puede envolver tabla por tabla sin un plugin, así que el desplazamiento se da con CSS (`display: block; overflow-x: auto` en `table`) para que no desborden en 360 px. Se comprueba con el teclado si la tabla se puede desplazar (los navegadores actuales enfocan las zonas desplazables); si no alcanza, se anota y se propone en la bitácora un plugin de `rehype` que agregue un contenedor con `tabindex="0"` (es una dependencia y un cambio de configuración: requiere consulta).
- Etiquetas de interfaz («Objetivo», «Mini-proyecto», «Entregable», «Terminado cuando…», «Bloque», «min») no son contenido del curso.

## Tareas

1. Crear `SeccionUnidad.astro` con el `h2` del título completo y la ficha de la unidad.
2. Agregar la tabla de bloques: número (o «Cierre»), título, tipo o microcharla y práctica, y minutos; la holgura como última fila cuando exista; total igual a `duracionMin`.
3. Crear `BloqueClase.astro` con `h3`, minutos y `render()` del cuerpo.
4. Escribir los estilos del cuerpo Markdown con tokens, incluido el desplazamiento horizontal de tablas en 360 px.
5. Reemplazar en `index.astro` las 4 secciones vacías por `SeccionUnidad` y quitar los títulos cortos escritos a mano.
6. Medir el HTML generado: títulos, bloques, textos y regresiones (criterios).
7. Ejecutar `pnpm build` y `pnpm astro check`, revisar con `pnpm preview` en 360 px y escritorio, en ambos modos y con teclado.
8. Escribir la bitácora y actualizar el registro.

## Criterios de aceptación

- [ ] `dist/index.html`: 1 `h1`; 6 `h2`, y los de `#unidad-1` a `#unidad-4` son el título completo de su ficha; 31 `h3` (4 de la ruta, 26 bloques, 1 instructor).
- [ ] Los 26 bloques aparecen en su unidad, en orden, con su texto: para cada bloque, una frase de su cuerpo está en `dist/index.html` (comando temporal: 26 de 26).
- [ ] Cada tabla de bloques suma `duracionMin` (120) con la holgura; el build sigue fallando si no suma (prueba reversible).
- [ ] Ningún texto del curso escrito a mano en `src/components` ni `src/pages` (`grep` de los títulos de las 4 unidades: 0 coincidencias).
- [ ] Sin desborde horizontal en 360 px (`document.documentElement.scrollWidth === 360`), en ambos modos; las tablas se desplazan con el teclado.
- [ ] Regresiones en verde: `pnpm build` sin advertencias nuevas (solo la de `descargas.yaml`) y `pnpm astro check` sin errores; 3 scripts y 0 B de JS nuevo; `PENDIENTE_` y `VERIFICAR` en `dist/`: 0; la prueba reversible de un bloque con unidad inexistente sigue fallando el build.

## Riesgos

- La página crece mucho (26 bloques): si Lighthouse móvil baja de 95, se anota y se propone una solución en la bitácora (verificación recomendada).
- Contraste de tablas y negritas: usar solo los pares de `DESIGN.md`.

## Fuera de alcance

- Prompts con «Copiar», recursos, descargas y «Profundiza» (03-02 y 03-03).
- Guardar el avance de «Terminado cuando…».

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Ninguno.
