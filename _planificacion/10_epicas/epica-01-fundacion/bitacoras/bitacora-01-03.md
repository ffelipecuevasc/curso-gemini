# Bitácora 01-03 · Layout, navegación y modos

- **Fecha:** 2026-11-17
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/01-03-layout-navegacion-modos
- **Estado final:** Terminada

## Resumen

La página de muestra de la 01-02 se reemplazó por el layout común. `Base.astro` lleva el `<head>` con las precargas, un script en línea que aplica el modo antes de pintar (elección guardada o, si no hay, `prefers-color-scheme`) y marca `data-js`, el enlace «Saltar al contenido principal», el encabezado, `main` y el pie. El encabezado tiene navegación en píldoras (Ruta, U1–U4, Instructor), menú móvil con `Escape` y `aria-current` por `IntersectionObserver`. El botón de modo usa `switchTheme`, una función con nombre en `src/scripts/modo.ts` que la 01-05 envolverá en la transición. El pie lleva las redes con los SVG de la identidad. Se agregó `.gitattributes`. JavaScript total: 806 B con gzip.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `src/layouts/Base.astro` | Nuevo: `head`, script en línea del modo, salto al contenido, `header`, `main#contenido`, `footer`; desplazamiento suave solo con `motion-safe` y `scroll-pt-24` por el encabezado fijo |
| `src/components/Encabezado.astro` | Nuevo: píldoras, menú móvil (`aria-expanded`, `aria-controls`, `Escape` devuelve el foco al botón, se cierra al elegir un enlace) y `aria-current` |
| `src/components/BotonModo.astro` | Nuevo: botón con `aria-pressed` y etiqueta «Modo oscuro»; sigue el sistema mientras no haya elección |
| `src/scripts/modo.ts` | Nuevo: `switchTheme`, `modoActual` y `hayEleccionGuardada`, con `try/catch` en `localStorage` |
| `src/components/Redes.astro` | Nuevo: 2 enlaces con ícono y texto, `target="_blank"`, `rel="noopener noreferrer"` y aviso oculto «(se abre en una pestaña nueva)» |
| `src/components/Pie.astro` | Nuevo: nombre del curso, redes y aviso de datos ficticios o públicos |
| `src/pages/index.astro` | Reemplazada: portada mínima con el único `h1` y 6 secciones vacías con `id` y `h2` provisorio |
| `src/styles/global.css` | Variantes `js` (`[data-js]`) y `oscuro` (`[data-modo="oscuro"]`) |
| `.gitattributes` | Nuevo: `* text=auto eol=lf` |
| `iteracion-01-03-layout-navegacion-modos.md` | Sin «Recursos», tarea 8, estado y criterios con evidencia |
| `propuestas-documentos-protegidos.md` | P-003 para la fila «Encabezado» de `DESIGN.md` |
| `bitacora-01-02.md`, `iteracion-01-02-tokens-fuentes.md` | Estado «Terminada» |
| `registro-pendientes.md` | Estados, backlog, propuesta de finales de línea movida al backlog e historial |

## Verificación

- `pnpm format`: sin errores.
- `pnpm astro check`: 0 errores, 0 advertencias, 0 sugerencias.
- `pnpm build`: «Complete!», sin advertencias.
- `dist/`: `index.html` 11,3 KB (3,6 KB gzip), 1 CSS de 15,2 KB (4,1 KB gzip), 6 `woff2` sin cambios (98,1 KB), 0 archivos `.js`: Astro incrustó los scripts en el HTML.
- **JavaScript medido** con Node sobre los 3 `<script>` del HTML compilado: 406 + 636 + 848 = 1892 B sin comprimir, **806 B con gzip** (698 B con Brotli). Límite: 3 KB.
- HTML compilado: 1 `h1`, 7 `section` y las 7 con `aria-labelledby`; el primer enlace del `body` es el salto a `#contenido`; 2 enlaces con `target="_blank" rel="noopener noreferrer"` y los `href` exactos de `DESIGN.md`; ningún `PENDIENTE_`.
- CSS compilado: contiene los selectores `[data-js]`, `[data-abierto]`, `aria-current`, `scroll-padding` y `scroll-behavior` bajo `prefers-reduced-motion: no-preference`.

## Criterios de aceptación

- [x] Sin JavaScript, página completa y anclas funcionando (comprobado en el HTML; comprobado por el desarrollador).
- [x] Recarga en oscuro sin parpadeo con «3G lenta» (el script va antes del CSS; comprobado por el desarrollador).
- [x] Primer `Tab` al salto y `Enter` a `main` (comprobado en el HTML; comprobado por el desarrollador).
- [x] Menú en 360 px con teclado y `Escape` (implementado; comprobado por el desarrollador).
- [x] Redes con texto, URL y `rel` exactos (HTML compilado).
- [x] Objetivos táctiles de 44 × 44 px (por clases; comprobado por el desarrollador).
- [x] JavaScript menor a 3 KB comprimido: 806 B.

## Diferencias entre lo planificado y lo encontrado

- Sin «Recursos» en la navegación, por decisión del desarrollador ([P-003](../../../00_producto/propuestas-documentos-protegidos.md)).
- La tarea 8 (`.gitattributes`) se agregó al empezar; la propuesta del registro pasó al backlog.
- Astro no emitió archivos `.js`: los scripts son tan pequeños que quedaron incrustados en el HTML, así que el peso se midió dentro del HTML.

## No se pudo verificar

- **Revisión en el navegador.** No tuve un navegador en esta sesión: no probé el parpadeo con «3G lenta», el teclado, el menú en 360 px, las medidas de los objetivos táctiles, `aria-current` al desplazarse ni el aspecto en ambos modos.

## Revisión manual del desarrollador

- `pnpm preview`: con «3G lenta», elegir oscuro y recargar; no debe verse el claro antes.
- Primer `Tab` → salto visible; `Enter` → el foco pasa a `main`.
- En 360 px: «Menú» abre y cierra con `Enter` y `Espacio`, `Escape` lo cierra y devuelve el foco, y `aria-expanded` cambia. Revisar que no haya desplazamiento horizontal.
- Medir en las herramientas del navegador que las píldoras, «Menú» y el botón de modo midan 44 × 44 px o más.
- Desactivar JavaScript: la lista de píldoras queda visible, el botón de modo y «Menú» desaparecen y las anclas funcionan.
- Ejecutar `git add --renormalize .` para normalizar los finales de línea con el nuevo `.gitattributes`.

## Decisiones tomadas

- `data-js` en `<html>` lo pone el script en línea; sin él, la lista se ve siempre y los botones que dependen de JavaScript quedan ocultos. Es más simple que `<noscript>` y no duplica marcado.
- Sin JavaScript la página queda en claro: seguir `prefers-color-scheme` sin script exigiría duplicar los 13 tokens oscuros en una consulta de medios. Se puede proponer si el desarrollador lo quiere.
- `aria-current="true"` y la variante `aria-[current=true]:` (Tailwind v4 no trae una variante `aria-current`). Es un selector, no un valor suelto.
- El ícono de LinkedIn usa `fill="currentColor"` con la clase `text-linkedin`, que equivale a cambiar solo el `fill` como pide la identidad.
- Las píldoras dicen «U1» a «U4» sin el nombre de la unidad, como pide la iteración.

## Pendientes y riesgos

- [P-003](../../../00_producto/propuestas-documentos-protegidos.md) pendiente para `DESIGN.md`.
- Las redes de la portada (pequeñas, abajo a la izquierda) se agregan en la 02-01 con el mismo `Redes.astro`.
- `min-h-svh` en las secciones vacías es provisorio, para probar `aria-current`; desaparece cuando lleguen los contenidos.

## Revisión

- **Resultado frente al objetivo:** cumplido en código y en las mediciones posibles sin navegador: estructura semántica, redes y JavaScript de 806 B. Los criterios de interacción quedan para la revisión del desarrollador.
- **Qué aprendimos:** Astro incrusta los scripts pequeños en el HTML, así que medir `dist/*.js` daría 0 B; hay que medir los `<script>` del HTML. Marcar `data-js` desde el script en línea permite diseñar el estado sin JavaScript solo con variantes de Tailwind.
- **Qué cambia para lo que sigue:** la 01-05 debe envolver `switchTheme` en `document.startViewTransition` sin cambiar su firma. La 01-04 no depende de esta iteración. Las secciones de las épicas 02 y 03 deben conservar los `id` `ruta`, `unidad-1` … `unidad-4` e `instructor`.

## Commit sugerido

`Épica 1 - Iteración 01-03: agrega layout con salto al contenido, navegación en píldoras, menú móvil, botón de modo, pie con redes y .gitattributes`
