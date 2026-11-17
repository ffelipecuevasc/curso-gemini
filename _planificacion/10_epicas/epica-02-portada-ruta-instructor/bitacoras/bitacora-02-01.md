# Bitácora 02-01 · Portada

- **Fecha:** 2026-11-17
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/02-01-portada
- **Estado final:** En revisión

## Resumen

La sección provisoria de `#inicio` se reemplazó por `Portada.astro`: `h1` con el título de `curso`, el lema «La IA no reemplaza tu talento, lo multiplica», el botón «Ver la ruta», el logo de Gemini como principal, el de Google debajo y más pequeño, y en una fila aparte, sin texto, los de GTD Telsur y Capacita Tu Futuro; un círculo `--color-superficie` sale del marco por arriba a la derecha y las redes van pequeñas abajo a la izquierda. `Redes.astro` usa ahora los SVG de Chrome y LinkedIn, en la portada y en el pie. Antes de empezar se comprobó: rama `iteracion/02-01-portada`, P-005 aplicada en `DESIGN.md` (secciones 5 y 6) y los seis SVG en `src/assets/iconos/`, cada uno entre `<svg` y `</svg>` y con LF.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `src/components/Portada.astro` | Nuevo: hero con título, lema, botón, logos, círculo y redes |
| `src/pages/index.astro` | Usa `Portada` en lugar de la sección provisoria; las demás secciones conservan su `id` |
| `src/components/Redes.astro` | Íconos propios reemplazados por `chrome.svg` y `linkedin.svg` importados como componentes |
| `src/content.config.ts`, `src/content/curso.yaml` | Campo `lema` (texto no vacío) con el texto aprobado |
| `src/assets/iconos/capacita-tu-futuro.svg`, `linkedin.svg` | Recoloreo con tokens, sin tocar trazados |
| `_planificacion/00_producto/unidades-del-curso.md` | 4 menciones a `iconos-svg.txt` reemplazadas por `src/assets/iconos/gtd-telsur.svg` |
| `iteracion-02-01-portada.md` | Estado y criterios con evidencia |
| `registro-pendientes.md` | Estado, backlog, decisiones resueltas e historial |

## Recoloreo de los SVG

| Archivo | Antes | Después |
| :------ | :---- | :------ |
| `capacita-tu-futuro.svg` | `fill="#000"` | `fill="currentColor"` (hereda `text-texto`: `#00131D` en claro, `#FFFFFF` en oscuro) |
| `linkedin.svg`, círculo | `style="fill:#0a66c2"` | `style="fill:var(--color-linkedin)"` (`#0A66C2` / `#FFFFFF`) |
| `linkedin.svg`, glifo | `style="fill:#fff"` | `style="fill:var(--color-fondo)"` (`#FFFFFF` / `#00131D`) |
| `gtd-telsur.svg` | `#5F7EBA`, `#43649C` | Sin cambios: ambos colores pasan 3:1 sobre el fondo en los dos modos (ver Verificación) |

Gemini, Google y Chrome no se tocaron. Hash SHA-256 al empezar y al cerrar, idéntico:

- `gemini.svg`: `5f8d2e3b523715abad4470404f377e67d744f39d5f82ca5ec36fd53d79bf1819`
- `google.svg`: `dee8d46552521ce836ec064c25e5051fe58512bc5db2c08e799be65d85802645`
- `chrome.svg`: `a0c993b6d89c79368de51ecd29e0fc7e5bd2b63e420e9bb1622020f0d343cbdd`

## Tamaños de los logos

Alto fijado con clases de Tailwind y ancho automático con `aspect-ratio` igual al `viewBox` original.

| Logo | Proporción | Alto (móvil / ≥ 640 px / ≥ 1024 px) |
| :--- | :--------- | :---------------------------------- |
| Gemini | 296/298 | 144 px / 176 px / 224 px |
| Google | 512/168 | 32 px / 32 px / 40 px |
| GTD Telsur | 525/380 | 32 px |
| Capacita Tu Futuro | 1184/442 | 28 px |

## Verificación

- `pnpm format`: sin errores. `pnpm astro check`: 0 errores, 0 advertencias, 0 sugerencias. `pnpm build`: «Complete!», sin advertencias; 0 `PENDIENTE_` en `dist/index.html`.
- Importación de SVG como componente: funciona en Astro 7.4.12; no hizo falta `?raw`. Astro conserva `width`/`height` del archivo, pero la clase `w-auto` y el alto de Tailwind mandan sobre esos atributos.
- `h1`: `grep -o '<h1' dist/index.html | wc -l` → 1, con el título del curso. Lema literal: 1 coincidencia.
- `id` repetidos: `grep -o ' id="[^"]*"' dist/index.html | sort | uniq -d` → vacío. SVG de Gemini (`viewBox="0 0 296 298"`): 1 vez; sus ids `a` a `h` no chocan con otros.
- Palabras de aval («respaldo», «alianza», «partner», «oficial»): 0 en `#inicio`; 1 en toda la página, en la meta descripción que ya existía («documentación oficial de Google»).
- Prueba de esquema: sin la línea `lema`, `pnpm build` falla con `InvalidContentEntryDataError … lema: Required`; con el lema, «Complete!». Al revertir la prueba con `git checkout` el archivo volvió a la versión sin lema; se volvió a escribir la línea y se recompiló (diff final: solo `+  lema: …`).
- Botón: `href="#ruta"` y `min-h-11` = `calc(var(--spacing) * 11)` = 44 px en el CSS compilado.
- Redes: 2 enlaces a `https://felipecuevas.dev/` y 2 a `https://www.linkedin.com/in/ffelipecuevasc/`, todos con `target="_blank" rel="noopener noreferrer"` y «(se abre en una pestaña nueva)».
- Contraste calculado (WCAG, con Node):

| Color | Fondo claro `#FFFFFF` | Fondo oscuro `#00131D` | Círculo claro `#E4F3FF` | Círculo oscuro `#00212F` |
| :---- | :-------------------- | :--------------------- | :---------------------- | :----------------------- |
| GTD `#5F7EBA` | 4,05 | 4,66 | 3,58 | 4,12 |
| GTD `#43649C` | 5,93 | 3,19 | 5,24 | 2,81 |
| Capacita (`--color-texto`) | 18,90 | 18,90 | 16,71 | 16,69 |

## Criterios de aceptación

Ver la iteración: 10 de 12 marcados con su evidencia. Quedan sin marcar el recorrido con teclado de «Ver la ruta» y la revisión visual en 360 px y escritorio.

## No se pudo verificar

El agente no tuvo navegador. Pasos para el desarrollador, con `pnpm build` y `pnpm preview`:

1. En 360 px y en escritorio, en modo claro y oscuro: sin barra de desplazamiento horizontal; Gemini claramente mayor que Google, y GTD y Capacita en su fila, pequeños.
2. En modo oscuro y escritorio: confirmar que el logo de GTD no queda encima del círculo (ahí `#43649C` baja a 2,81:1). Si queda encima y no se distingue, avisar para recolorear o mover el círculo.
3. Con `Tab`: el foco llega a «Ver la ruta», es visible y `Enter` lleva a `#ruta`; luego a los dos enlaces de redes.
4. Con JavaScript desactivado: la portada queda en modo claro (RDA-007).
5. Recomendado: Lighthouse móvil, porque cambia el primer pantallazo y el SVG de Gemini trae siete filtros de desenfoque.

## Decisiones tomadas

- El GTD no se recoloreó: la tarea lo permite solo si no se distingue, y sus dos colores pasan 3:1 sobre el fondo en ambos modos.
- El color del Capacita sale de `text-texto` en la fila de logos, así sigue el modo sin reglas nuevas.
- Las menciones a `iconos-svg.txt` que quedan en esta iteración y en `definicion-epica-02.md` describen la decisión de no subir el archivo; se dejan.

## Pendientes y riesgos

- Autorización del logo de GTD: sigue abierta en el registro (riesgo asumido por el desarrollador).
- Posible superposición del GTD con el círculo en modo oscuro (paso 2).
- El `titulo` de `Base.astro` y su meta descripción siguen escritos a mano; no es parte de esta iteración.

## Revisión

- **Resultado frente al objetivo:** cumplido en código y en todo lo medible sin navegador; falta la revisión visual y con teclado.
- **Qué aprendimos:** Astro 7 importa SVG como componentes y pasa `role`, `aria-label` y `class` sin `?raw`; un `git checkout` para revertir una prueba devuelve el archivo al último commit, no al estado previo a la prueba: conviene revertir con la misma edición inversa.
- **Qué cambia para lo que sigue:** nada en el backlog. La 02-02 puede empezar cuando el desarrollador apruebe esta.

## Commit sugerido

`Épica 2 - Iteración 02-01: agrega la portada con lema, logos de Gemini, Google, GTD y Capacita, y redes con los íconos de Chrome y LinkedIn`
