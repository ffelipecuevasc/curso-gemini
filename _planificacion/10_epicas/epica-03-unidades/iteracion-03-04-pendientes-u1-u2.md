# Iteración 03-04 · Pendientes de la Unidad 1 y la Unidad 2

- **Épica:** 03 · Unidades del curso
- **Estado:** Terminada
- **Rama sugerida:** iteracion/03-04-pendientes-u1-u2
- **Depende de:** 03-03
- **Especificación:** —
- **RDA relacionadas:** RDA-003, RDA-009, RDA-010

## Objetivo

Completar en la U1 y la U2 lo que quedó pendiente: «Profundiza» de cada bloque con los recursos oficiales ya cargados, los videos y las descargas que entregue el desarrollador.

## Punto de partida

- Los temas de «Profundiza en el LMS» de la U1 y la U2 están en la bitácora 02-05; los recursos oficiales de ambas ya están en `recursos.yaml` (U1 20, U2 12).
- Las descargas de la U1 y la U2 (dataset CSV, `plantillas-alumnos.zip`, informe de Deep Research de respaldo) siguen en «Decisiones por tomar»; el documento del curso no trae enlaces a videos.

## Alcance y entregables

- `profundiza.recursos` en los bloques de la U1 y la U2, según la propuesta aprobada (tarea 1).
- Videos oficiales de Google como recursos `tipo: video`, si el desarrollador entrega sus URL `https://`.
- Descargas de la U1 y la U2 en `descargas.yaml` y `public/descargas/`, si el desarrollador entrega los archivos.

## Decisiones del desarrollador

- 2026-11-17: «Profundiza» usa solo los recursos oficiales ya cargados; el texto propio es opcional y no bloquea nada.
- 2026-11-17: asignación de «Profundiza» de U1 y U2 aprobada tal cual (9 bloques); los 5 videos de la U1 que entregó el desarrollador van en «Profundiza» (4 en U1 · 2, incluido Project Astra, y 1 en U1 · 3) y también en la ficha de la U1.
- 2026-11-17: la U2 no lleva videos (ausencia acordada).
- 2026-11-17: el desarrollador autorizó editar `dataset-ficticio-diccionario` para los participantes y publicarlo en la U2 con el título de su encabezado.

## Tareas

1. Proponer en el chat la asignación de recursos de «Profundiza» por bloque de la U1 y la U2, según los temas de la bitácora 02-05, y esperar la aprobación.
2. Cargar `profundiza.recursos` en los bloques aprobados.
3. Cargar los videos como recursos `tipo: video` y referenciarlos (desbloqueada: el desarrollador entregó 5 URL de la U1 el 2026-11-17).
4. Cargar las descargas de la U1 y la U2 en `descargas.yaml` y en sus fichas (desbloqueada: el desarrollador entregó el diccionario del dataset; el resto queda como ausencia acordada).
5. Revisar en `pnpm preview` la U1 y la U2 completas en 360 px y escritorio, en ambos modos y con teclado.
6. Ejecutar `pnpm build` y `pnpm astro check` y las regresiones.
7. Escribir la bitácora y actualizar el registro (lo que siga sin entregar queda como ausencia acordada o bloqueo, según decida el desarrollador).

## Tareas del desarrollador

1. Entregar las URL de los videos oficiales de la U1 y la U2, o decidir que no habrá videos.
2. Entregar los archivos de descarga de la U1 y la U2, o decidir cuáles no se publican.

## Criterios de aceptación

- [x] Asignación de «Profundiza» aprobada y anotada en la bitácora; cada bloque con `profundiza` muestra su `<details>` con sus recursos (conteo en `dist/index.html` igual al de los archivos).
- [x] Cada video cargado tiene URL `https://` entregada por el desarrollador y abre en pestaña nueva; o la bitácora registra que no hay videos, con la decisión del desarrollador. (dicho por el desarrollador, 2026-11-17, revisión en navegador)
- [x] Cada descarga cargada muestra formato y peso medidos (RDA-010) y responde en `pnpm preview`; o la bitácora registra la ausencia acordada. (dicho por el desarrollador, 2026-11-17, revisión en navegador)
- [x] Regresiones en verde: `pnpm build` sin advertencias y `pnpm astro check` sin errores; 24 de 24 prompts iguales; 4 scripts; 1 `h1`; `PENDIENTE_` y `VERIFICAR` en `dist/`: 0; sin desborde en 360 px. (dicho por el desarrollador, 2026-11-17, revisión en navegador)

Evidencia (detalle en [bitacora-03-04](bitacoras/bitacora-03-04.md)):

- Asignación aprobada el 2026-11-17. Comando temporal: 9 `<details>` en la página; 9 de 9 bloques iguales a sus archivos (cerrados, mismos recursos y en el mismo orden); 40 enlaces = 40 referencias.
- Videos: 5 recursos `tipo: video` con URL `https://` entregada por el desarrollador; cada uno aparece 2 veces («Profundiza» y ficha de la U1), siempre con `target="_blank"` y `rel="noopener noreferrer"`. La U2 no tiene videos (ausencia acordada). Sin marcar: abrirlos en el navegador.
- Descargas: `dataset-ficticio-diccionario` (1 398 B → «Markdown · 1,4 KB») y el CSV (26 015 B → «CSV · 25,4 KB») coinciden con `fs.statSync`. Sin marcar: la descarga real en `pnpm preview`.
- Regresiones medidas: `pnpm build` sin advertencias; `astro check` 0/0/0; 24 de 24 prompts; 4 etiquetas `<script>`, 1080 B gzip (0 B nuevos); 1 `h1`; `PENDIENTE_` y `VERIFICAR` en `dist/`: 0. Sin marcar: 360 px y ambos modos.

## Riesgos

- Si los materiales no llegan antes de la clase 1, la U1 se publica sin ellos, con la ausencia acordada (criterio de término de la épica 03).

## Fuera de alcance

- Escribir textos propios de «Profundiza» (opcional, no se inventan).
- La U3 y la U4 (03-05).

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- URL de videos y archivos de descarga de la U1 y la U2: recibidos el 2026-11-17 (5 videos de la U1 y el diccionario del dataset); lo demás queda como ausencia acordada.
