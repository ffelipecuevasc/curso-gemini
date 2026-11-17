# Bitácora 01-02 · Tokens de diseño y fuentes

- **Fecha:** 2026-11-17
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/01-02-tokens-fuentes
- **Estado final:** En revisión

## Resumen

Los tokens de color, tipografía, forma y movimiento de `DESIGN.md` quedaron en un bloque `@theme` de `global.css`, con la redefinición oscura bajo `[data-modo="oscuro"]`. La paleta, las familias y los radios por defecto de Tailwind se vaciaron (`--color-*: initial`, etc.), así que solo existen las clases del sistema. Sora, Work Sans e IBM Plex Mono salen de Fontsource (RDA-006) con `@font-face` propios, y la página de prueba muestra superficies, bloques de unidad, escala tipográfica y bloque de código. No se agregó JavaScript.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `package.json`, `pnpm-lock.yaml` | `@fontsource/sora`, `@fontsource/work-sans`, `@fontsource/ibm-plex-mono` 5.3.0 como dependencias de desarrollo exactas |
| `src/styles/global.css` | 6 `@font-face`, `@theme` con tokens claros, `[data-modo="oscuro"]` y capa base (fondo, texto, selección, foco, enlaces) |
| `src/pages/index.astro` | Página de prueba provisoria y precarga de Sora 700 y Work Sans 400 con `?url` y `crossorigin` |
| `.prettierrc`, `astro.config.mjs`, `tsconfig.json` | Solo finales de línea (CRLF → LF) por `pnpm format`; sin cambio de contenido |
| `_planificacion/00_producto/decisiones.md` | RDA-006 |
| `_planificacion/00_producto/propuestas-documentos-protegidos.md` | Nuevo, desde su plantilla: P-002 para `README.md` |
| `iteracion-01-02-tokens-fuentes.md` | Alcance y tareas sin `public/fuentes/`, estado y criterios con evidencia |
| `_planificacion/00_producto/registro-pendientes.md` | Estado, backlog e historial |

## Verificación

- `pnpm add -D -E …@5.3.0`: 3 paquetes agregados, sin advertencias.
- `pnpm build`: «Complete!», sin advertencias. Vite resolvió las `url("@fontsource/…woff2")` del CSS.
- `pnpm astro check`: 0 errores, 0 advertencias, 0 sugerencias.
- `dist/`: `index.html` (3,7 KB), 1 CSS (12,3 KB), 6 `woff2` que suman **98,1 KB**, 0 archivos `.js`.
- Precarga: los dos `href` del HTML (`sora-latin-700-normal.9waGdLWo.woff2`, `work-sans-latin-400-normal.jUejSri3.woff2`) existen en `dist/_astro/` y son los mismos que usa el CSS.
- `pnpm preview` en el puerto 4321: el HTML responde 200 y el CSS 200, y los 6 `woff2` responden 200 con `Content-Type: font/woff2`. Todas las referencias son relativas a `/_astro/`. La única URL externa en `dist/` es el comentario `/*! tailwindcss … https://tailwindcss.com */`, que no es una petición.
- Búsqueda de colores hexadecimales y de valores entre corchetes en `src/` fuera de `global.css`: 0 resultados (se cambió `grid-cols-[minmax(0,1fr)]` por `grid-cols-1`, que en Tailwind v4 genera `repeat(1, minmax(0, 1fr))`).
- CSS compilado: `[data-modo=oscuro]` contiene los 13 valores oscuros de la sección 2 de `DESIGN.md`.

### Contrastes medidos (tarea 4)

Fórmula de luminancia relativa de WCAG 2.2, calculada con Node. El control `#00131D` sobre `#FFFFFF` da 18,90:1, el mismo valor de la tabla de `DESIGN.md`.

| Combinación | Ratio | Resultado |
| :---------- | :---- | :-------- |
| `#E4F3FF` sobre `#003B51` | 10,64:1 | AAA, todo texto |
| `#5DC9FF` sobre `#00131D` | 10,14:1 | AAA, todo texto |

Ninguno falla para texto pequeño, así que no hace falta una propuesta que restrinja su uso. Agregar ambas filas a la tabla 2.3 de `DESIGN.md` le corresponde al desarrollador, como dice la tarea 4.

## Criterios de aceptación

- [x] Sin colores, tamaños ni radios sueltos fuera de `global.css` (búsqueda: 0 resultados).
- [x] Sin peticiones a dominios externos (todas las referencias servidas son de `/_astro/` y responden 200; la pestaña Red no se revisó en un navegador).
- [x] `woff2` servidos: 98,1 KB, menos de 200 KB.
- [x] La precarga coincide con los archivos emitidos y lleva `crossorigin`.
- [x] Los valores oscuros están en el CSS bajo `[data-modo=oscuro]` (verificado en el CSS compilado; falta la revisión visual).
- [x] Contrastes medidos: 10,64:1 y 10,14:1.
- [x] `pnpm build` y `pnpm astro check` sin errores.

## Diferencias entre lo planificado y lo encontrado

- Las fuentes no van en `public/fuentes/`: salen de Fontsource y Vite las emite con hash (RDA-006). Se actualizó la iteración y se dejó la propuesta P-002 para el árbol de `README.md`.
- La P-001 no tenía archivo de propuestas: se creó con su plantilla y la P-001 quedó como «Aplicada», sin detalle.
- `pnpm format` cambia a LF los finales de línea de archivos que Git guarda con CRLF (`core.autocrlf`). No hay cambio de contenido, pero ensucia `git status`.

## No se pudo verificar

- **Revisión visual en el navegador.** No tengo un navegador disponible en esta sesión, así que no pude ver la página en 360 px ni en escritorio, ni cambiar `data-modo` en las herramientas del navegador, ni abrir la pestaña Red. Lo comprobé por HTTP y en el CSS compilado.

## Revisión manual del desarrollador

- Ejecutar `pnpm preview` y, en las herramientas del navegador, agregar `data-modo="oscuro"` a `<html>`. El fondo, el texto, las superficies, el enlace y el foco deben cambiar, y el bloque U3 debe ganar el borde `#00B0E8`.
- Revisar en 360 px que los bloques se apilan en 1 columna y que no hay desplazamiento horizontal.
- Confirmar que los títulos se ven en Sora y el texto en Work Sans, y que la pestaña Red no muestra dominios externos ni descarga dos veces las fuentes precargadas.

## Decisiones tomadas

- Fuentes desde Fontsource 5.3.0, con `@font-face` propios, sin los CSS del paquete y con precarga con `crossorigin` ([RDA-006](../../../00_producto/decisiones.md)).
- Se vació la paleta por defecto de Tailwind (`--color-*`, `--font-*` y `--radius-*` en `initial`): una clase como `bg-blue-500` ya no compila, lo que cumple «nunca valores sueltos» por construcción. La escala de tamaños de letra por defecto (`text-sm` … `text-5xl`) se mantiene, porque `DESIGN.md` no define otra.
- Tokens agregados que `DESIGN.md` describe pero no nombra: `--color-primario-hover` (hover del botón principal), `--color-u1` … `--color-sobre-u4`, `--color-borde-u3` (transparente en claro, `#00B0E8` en oscuro), `--radius-bloque` 28 px, `--radius-esquina` 6 px, `--radius-pildora` y `--container-sitio` 1100 px.
- El modo oscuro sin JavaScript solo se activa con el atributo. El modo inicial según `prefers-color-scheme` lo aplica el script en línea de la 01-03 (`DESIGN.md`, sección 8).

## Pendientes y riesgos

- Propuesta [P-002](../../../00_producto/propuestas-documentos-protegidos.md) pendiente para `README.md`.
- Finales de línea: propuesto en el registro, en «Propuestas fuera de alcance», un `.gitattributes` o `endOfLine` en Prettier.

## Revisión

- **Resultado frente al objetivo:** cumplido en código y en mediciones. Los tokens y las fuentes están en su lugar, sin JavaScript, sin orígenes externos y con 98 KB de fuentes. Falta solo la mirada en el navegador, que queda en manos del desarrollador.
- **Qué aprendimos:** Vite resuelve los especificadores de paquete dentro de `url()` en el CSS, así que no hace falta copiar archivos a `public/`. Vaciar los espacios de nombres de `@theme` es la forma más barata de impedir valores fuera del sistema.
- **Qué cambia para lo que sigue:** la 01-03 debe sacar la precarga y el `<head>` de `index.astro` a un layout, agregar el script en línea del modo inicial (con `prefers-color-scheme`) y usar `--color-primario-hover` y `--radius-pildora` en la navegación. El backlog no cambia.

## Commit sugerido

`Épica 1 - Iteración 01-02: agrega tokens de DESIGN.md en @theme con modo oscuro y fuentes autoalojadas de Fontsource (RDA-006)`
