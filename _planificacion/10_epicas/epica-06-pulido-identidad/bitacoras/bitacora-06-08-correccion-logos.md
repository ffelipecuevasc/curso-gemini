# Bitácora 06-08 · Corrección: la fila de logos sin entrada

- **Fecha:** 2026-11-23
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** correccion/logos-sin-entrada (aprobada por el desarrollador; creada desde `main`, `0e29f0f`, con el árbol limpio)
- **Estado final:** En revisión

## Resumen

La 06-08 animaba la fila de logos de la portada (Google, GTD y Capacita) con E1, porque así lo decía la sección 7.1 de `DESIGN.md`, mientras la 7.4 dice que ningún logo se anima salvo la estrella de Gemini. El desarrollador decidió que manda la 7.4 y corrigió la 7.1 en `main` (`0e29f0f`, registrada como P-033). Esta corrección alinea el código: la fila de logos ya no tiene `animate-entrada`, `--orden` ni `animation-delay`. La columna de texto queda con `--orden` de 0 a 3. Se registra también la respuesta del desarrollador a los 3 pendientes de la 06-08.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `src/components/Portada.astro` | La fila de logos pasa a `class` fija, sin `claseEntrada` ni `ordenEntrada(4)`; el comentario de cabecera dice «posiciones 0 a 3» y que los logos y el círculo no se animan |
| `_planificacion/00_producto/propuestas-documentos-protegidos.md` | P-033, aplicada 2026-11-23 |
| `_planificacion/00_producto/registro-pendientes.md` | Fila 36.1 del backlog (Corrección), próximo hito y línea de historial |
| `_planificacion/00_producto/registro-archivo.md` | Recibe la fila más antigua del historial (04-02 en revisión), para no pasar de 50 |

## Verificación

Método: `pnpm build`; `dist/` servido con un servidor estático mínimo (puerto 4350) y con el `astro preview` que ya corría en el puerto 4340 (PID 18700, iniciado a las 12:15, antes de esta sesión; no lo abrí y no lo detuve). Mediciones con `playwright-core` 1.65.1: Chromium 159.0.8154.6, Firefox 159.0 y WebKit 27.2, en 1440 × 900 y en ambos modos. Los scripts quedaron en el scratchpad.

- Fila de logos: `getAnimations()` del contenedor = 0 y `getAnimations({ subtree: true })` = 0, en los 3 motores y en ambos modos (6 de 6). Sin atributo `style`; `opacity` 1 desde el primer fotograma.
- Secuencia E1: 8 animaciones `entrada` (antes 9). Columna de texto: lema 0–500, ficha 60–560, botón 120–620 y redes 180–680 ms; filas de la ruta 60 a 740 ms. **Termina a los 740 ms** en los 3 motores (Firefox: 679,9999 en la posición 3, por redondeo).
- JS propio (gzip 9, scripts en línea sin JSON-LD): 6 etiquetas, **1767 B**, igual que en la 06-08. `git diff --stat`: solo `Portada.astro` en `src/`.
- `pnpm build`: sin advertencias, «Guardia de marcadores: 0 marcadores en dist/». `pnpm astro check`: 0 errores, 0 advertencias y 0 sugerencias.
- `dist/index.html`: 1 `h1`, 55 `<dialog>`, 25 de 25 prompts idénticos a su fuente.
- Revisión visual (Chromium, capturas a 0 y 900 ms): 360 × 800 y 1440 × 900, claro y oscuro. A los 0 ms los logos ya están completos y el botón todavía aparece; a los 900 ms la portada queda igual que en la 06-08. Desborde horizontal: ninguno (`scrollWidth − innerWidth` = −15, el ancho de la barra de desplazamiento).
- Teclado (Tab desde el inicio, 4 casos): el orden no cambia; la fila de logos no tiene enfocables.

## Criterios de aceptación

- [x] La fila de logos no tiene animaciones, ni ella ni sus descendientes, en los 3 motores (6 de 6 casos en 0).
- [x] La columna de texto queda con `--orden` de 0 a 3 (lema 0, ficha 1, botón 2, redes 3).
- [x] E1 termina en 740 ms o menos (740 ms).
- [x] `pnpm build` y `pnpm astro check` sin errores ni advertencias.
- [x] El JavaScript propio no cambia (1767 B).

## Respuesta del desarrollador a los pendientes de la 06-08

Sin editar `bitacora-06-08.md`, queda registrado lo que decidió el desarrollador el 2026-11-23:

1. **Rendimiento de E1:** se acepta si el Lighthouse móvil publicado (mediana de 3) queda a 2 puntos o menos del cierre de la 06-07 en cada categoría y el elemento LCP sigue siendo el `h1`. Si no, se reporta con los números y se propone animar 2 grupos (columna de texto y lista de la ruta). Se mide en la fase B.
2. **Estrella:** el desarrollador acepta la equivalencia. `scale: 1` y `rotate: 0deg` equivalen a `none`, porque el token aprobado usa `fill-mode: both`. El criterio de la estrella de la 06-08 queda **cumplido** con esta nota.
3. **Fila de logos:** manda la 7.4; es esta corrección.

## Decisiones tomadas

- Del desarrollador: las 3 de la sección anterior y el nombre de la rama.
- Técnica: la fila de logos queda con un `class` simple, en vez de `class:list` con un solo elemento.

## Pendientes y riesgos

- Fase B de la 06-08 después del merge: Lighthouse publicado, bitácora de cierre de la épica 06 y revisión de la épica 07.
- El `astro preview` del puerto 4340 sigue corriendo; no es de esta sesión. El desarrollador decide si lo detiene.

## Revisión

- **Resultado frente al objetivo:** cumplido. El código coincide con la 7.1 y la 7.4 de `DESIGN.md`, y E1 tiene un elemento menos.
- **Qué aprendimos:** cuando dos secciones de `DESIGN.md` se contradicen, conviene preguntar antes de implementar en vez de elegir una y anotarlo.
- **Qué cambia para lo que sigue:** E1 pasa de 9 a 8 animaciones, así que la fase B mide la versión corregida.

## Commit sugerido

`Corrección: la fila de logos de la portada deja de animarse con E1 (DESIGN.md 7.4), queda la columna de texto de 0 a 3 y se registra la P-033`
