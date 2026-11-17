# Bitácora 03-01 · Sección de unidad y texto de los bloques

- **Fecha:** 2026-11-17
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/03-01-seccion-unidad
- **Estado final:** En revisión

## Resumen

Las 4 secciones `#unidad-1` a `#unidad-4` muestran ahora un encabezado con el bloque de color de la unidad, la ficha, la tabla de bloques con minutos, los 26 bloques con su texto «Para la clase» renderizado con `render()` y, al final, «Entregable» y «Terminado cuando…». Lo hace un solo componente guiado por los datos (`SeccionUnidad`). Los `h2` de las unidades salen de las fichas y `index.astro` ya no tiene títulos escritos a mano. Antes de empezar se comprobó que la rama es `iteracion/03-01-seccion-unidad` y que el árbol estaba limpio sobre `ddd678d`.

## Archivos creados, modificados o eliminados

| Archivo | Cambio |
| :------ | :----- |
| `src/components/SeccionUnidad.astro` | Nuevo: sección de unidad con encabezado de color, ficha (`h4`), tabla de bloques, bloques y «Terminado cuando…» |
| `src/components/BloqueClase.astro` | Nuevo: `article` con el `h3` del bloque, sus minutos y el cuerpo con `render()` |
| `src/pages/index.astro` | Usa `obtenerUnidadesConBloques()` y `SeccionUnidad`; navegación armada desde los números de unidad; sin títulos cortos |
| `src/styles/global.css` | `@layer components` con los estilos de `.contenido-bloque` (listas, negritas, citas, código, tablas) con tokens |
| `iteracion-03-01-seccion-unidad.md` | Estado, decisiones, criterios corregidos y evidencia |
| `iteracion-03-02-prompts-recursos.md` | Línea base de scripts (882 B gzip, 2 comportamientos en 3 etiquetas) y cómo se mide |
| `iteracion-03-05-pendientes-u3-u4.md` | `SKILL.md` depende de la P-007 y del ajuste de la regex en esa iteración |
| `definicion-epica-03.md` | Estado «En curso» y columna de estado en la tabla de iteraciones |
| `propuestas-documentos-protegidos.md` | P-007 (Pendiente) |
| `registro-pendientes.md` | Estado de la 03-01, backlog, decisión de la P-007 e historial |

## Implementación

- **Encabezado:** `header` con `bg-uN text-sobre-uN` (la U3 con `border-borde-u3`) y la forma `rounded-bloque rounded-bl-esquina`, igual que en la ruta. Dentro van el `h2` «Unidad N · {titulo}», «Clase · min · Nivel» y el avance en `font-codigo` con el texto oculto «Avance del curso:».
- **Ficha:** «Objetivo» y «Mini-proyecto» van arriba, y «Entregable» y «Terminado cuando…» cierran la sección, como pide `DESIGN.md` (sección 5). Son `h4`, por decisión del desarrollador.
- **Tabla de bloques:** `caption` «Bloques de la clase», `th scope="row"` en el título de cada bloque, tipo (U1) o «Microcharla N min · práctica N min» (U2 a U4), fila de holgura si existe y total `duracionMin` en el pie.
- **Bloques:** `h3` «Bloque N · {titulo}», o solo el título en los cierres; los minutos; el cuerpo con `render()`. El ID del título es `bloque-<unidad>-<archivo>` (0 repetidos).
- **Tablas del cuerpo:** CSS puro (`display: block; max-width: 100%; overflow-x: auto`) y celdas de `min-width: 8rem`, para que se desplacen dentro de su propio ancho y la página no se desborde. Sin plugin y sin tocar los cuerpos.
- **Lo que se repite:** el mapa de colores por unidad está también en `BloqueUnidad.astro`. Son 4 líneas, y extraerlas a un módulo por 2 usos complicaría más de lo que ahorra (`AGENTS.md`, estándar general 2).

## Verificación

- `pnpm prettier --write` sobre los 4 archivos. `pnpm astro check`: 0 errores, 0 advertencias, 0 sugerencias.
- `pnpm build`: «Complete!», con solo la advertencia aceptada de `descargas.yaml`.
- **HTML generado:**
  - `dist/index.html` mide 128 569 B, frente a 61 892 B antes de la 03-01.
  - Títulos: 1 `h1`, 6 `h2`, 31 `h3`, 16 `h4`.
  - 26 `article` y 15 `table` (11 de los cuerpos y 4 de bloques).
  - 0 IDs repetidos.
- **`h2` desde los datos** (comando temporal en Node): el texto de cada `h2#titulo-unidad-N` es igual a `«Unidad N · » + titulo` de `unidades/uN.yaml`: **4 de 4**. `index.astro` ya no tiene títulos de unidad.
- **Cuerpos** (comando temporal): la primera línea de texto de cada bloque, sin marcas Markdown, aparece en el texto de `dist/index.html`: **26 de 26**.
- **Totales:** las 4 tablas dicen «Total 120».
- **Prueba reversible de la suma:** `minutos: 16` y `practicaMin: 13` en `u2/bloque-1.md` → `La unidad «u2» suma 121 min entre bloques y holgura, pero «duracionMin» es 120` y «Command failed». Restaurado (`cmp`).
- **Prueba reversible de la unidad inexistente:** `unidad: u9` en `u1/bloque-1.md` → `El bloque «u1/bloque-1» apunta a la unidad «u9», que no existe en src/content/unidades/` y «Command failed». Restaurado (`cmp`); `pnpm build` en «Complete!».
- **JavaScript:** 3 etiquetas `<script>` (423 + 799 + 879 B), 882 B gzip juntos, igual que antes; 0 B nuevos.
- **Contraste** (fórmula WCAG en Node):

  | Par | Claro | Oscuro |
  | :-- | :---- | :----- |
  | Texto sobre `superficie-2` (código y cabecera de tabla) | 16,63:1 | 12,04:1 |
  | `texto-2` sobre fondo (minutos y citas) | 12,04:1 | 16,71:1 |
  | Anillo de foco | 4,62:1 | 12,43:1 |

  El encabezado de cada unidad usa los pares de la tabla 2.2 ya medidos en la 02-03, con texto de 16 px o más (exigido en la U1).
- `PENDIENTE_` y `VERIFICAR` en `dist/index.html`: 0. Sin servidores levantados.

## Criterios de aceptación

Ver la iteración: 5 de 6 marcados con evidencia. Queda sin marcar «sin desborde en 360 px y tablas recorribles con el teclado», porque en esta sesión no hay navegador.

## No se pudo verificar · pasos para el desarrollador

Ejecuta `pnpm build` y `pnpm preview`, y abre la URL local.

1. **360 px** (DevTools, modo dispositivo), en ambos modos: `document.documentElement.scrollWidth === 360` en la consola. Revisa sobre todo la tabla de 4 columnas de U2 · 3 («Camino · Cómo · Ventaja · Límite») y la de U4 · 4: deben desplazarse dentro de su ancho, sin empujar la página.
2. **Teclado en las tablas:** con `Tab`, cada tabla que se desplaza debería recibir el foco con su anillo visible, y las flechas ← y → deberían desplazarla. Chrome y Firefox recientes enfocan solos las zonas desplazables; **Safari no**. **Si no se puede recorrer con el teclado en tu navegador, avísame:** según tu decisión, me detengo y consulto sin agregar un plugin.
3. **Modo claro y oscuro:** el encabezado de cada unidad con su color (la U3 con borde en oscuro); las cabeceras de tabla sobre `superficie-2`.
4. **Lectura:** el orden es encabezado, objetivo, mini-proyecto, tabla, bloques, entregable y «Terminado cuando…». Las listas anidadas (U1 · 5, «Familia Gemini 4») se ven sangradas.

## Decisiones tomadas

- «Entregable» se muestra junto a «Terminado cuando…», al cierre, y no arriba: así la sección termina con lo que hay que entregar.
- La tabla de bloques usa los mismos estilos que las tablas del cuerpo (`.contenido-bloque`), para no repetir CSS.
- Las negritas usan peso 500, porque Work Sans está cargada en 400 y 500 (`DESIGN.md`, sección 3); un 600 o un 700 haría que el navegador sintetizara la negrita.
- La P-007 se registró sin tocar `AGENTS.md`.

## Pendientes y riesgos

- **Jerarquía de títulos:** la ficha va en `h4` justo después del `h2` de la unidad, sin un `h3` entre ambos. Es la decisión del desarrollador. No falla WCAG 2.2 AA, pero algunas auditorías (Lighthouse, axe) avisan «heading levels should only increase by one». Si eso afecta el 100 en Accesibilidad de la meta, se verá en la medición recomendada.
- **Bordes de tabla:** `superficie-2` sobre el fondo da 1,14:1 en claro y 1,57:1 en oscuro. No es texto, así que no lo exige AA, y las cabeceras tienen fondo. Revísalo a la vista en el paso 3.
- **Peso de la página:** `index.html` pasó de 62 KB a 129 KB. La verificación recomendada es Lighthouse móvil sobre `pnpm preview`, porque cambió el contenido bajo el primer pantallazo.
- **Safari:** no enfoca zonas desplazables (paso 2).

## Revisión

- **Resultado frente al objetivo:** cumplido en el código y medido en el HTML; falta la revisión en navegador de 360 px y del teclado en las tablas.
- **Qué aprendimos:** `render()` en cada bloque no necesita dependencias, y el HTML del cuerpo hereda los estilos de un solo contenedor `.contenido-bloque`. Para que una tabla sea enfocable en todos los navegadores, hay que cambiar el HTML; con CSS solo depende del navegador.
- **Qué cambia para lo que sigue:** la 03-02 agrega los prompts dentro de `BloqueClase`. Su línea base de scripts quedó fijada en 882 B gzip y su método de medición está escrito en la iteración. La 03-05 depende de la P-007 para `SKILL.md`.

## Commit sugerido

`Épica 3 - Iteración 03-01: muestra las 4 unidades con ficha, tabla de bloques y texto «Para la clase» desde las colecciones, y registra la P-007`
