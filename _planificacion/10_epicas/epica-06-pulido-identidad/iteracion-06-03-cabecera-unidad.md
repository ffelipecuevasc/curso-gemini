# Iteración 06-03 · Cabecera de unidad sin barra de avance

- **Épica:** 06 · Pulido de identidad: portada, unidades y modales
- **Estado:** En revisión
- **Rama sugerida:** iteracion/06-03-cabecera-unidad
- **Depende de:** 06-02 y propuesta P-025 aplicada
- **Especificación:** —
- **RDA relacionadas:** RDA-008, RDA-013

## Objetivo

Que la cabecera de cada unidad se reconozca por su número grande, con el título como primera lectura y los datos de la clase debajo, sin barra de avance y sin agregar alto a la unidad.

## Punto de partida

- `CabeceraUnidad.astro`: línea «Unidad n · Clase n · 120 min» en IBM Plex Mono sobre el título (una etiqueta encima del encabezado), título (`h2`), objetivo breve, `BarraAvance` en la columna derecha (`lg:grid-cols-[minmax(0,1fr)_16rem]`) y botones de la unidad.
- `.cabecera-unidad` en `global.css` (05-05): `px-5 py-4`, `gap-3`.
- `BarraAvance.astro`: después de la 06-02 solo la usa la cabecera.
- Medición de la vista previa (2026-11-21, con la 06-04 incluida): en 1440 × 900 cada unidad mide 823 px (= 900 − 77 del encabezado); en 1366 × 657, 816, 816, 818 y 791 px (antes 808, 808, 810 y 783). Son referencia histórica, no reproducible: se vuelve a medir en la Fase 1 de la 06-02 y la 06-03; los criterios se comparan contra la línea base de la tarea 1, no contra estas cifras.

## Alcance y entregables

- Retícula `auto | 1fr`: a la izquierda el número de la unidad (Sora 700, `clamp(3.5rem, 2.5rem + 3vw, 5.5rem)`, interlineado 0,8, `aria-hidden="true"`); a la derecha el título, el objetivo breve (máximo 62 caracteres por línea) y «Clase n de 4 · 120 min» en IBM Plex Mono de 14 px.
- El `h2` lleva «Unidad n:» solo para lectores de pantalla, para no perder el número en el nombre del encabezado.
- Botones de la unidad bajo el texto: en móvil ocupan las 2 columnas; desde 1024 px se alinean con el título.
- Desde 1024 px, la cabecera usa `padding-block: 1rem` y `row-gap: 0.625rem` para no sumar alto.
- `BarraAvance.astro` se borra; el texto «Avance del curso» deja de existir en `dist/`.
- El número de clases sale de `curso.yaml` (`clases`), no se escribe «4» fijo en el componente.

## Contenido aprobado (copiar tal cual)

> Aprobado por el desarrollador el 2026-11-21 en la vista previa.

- Datos de la cabecera: «Clase {clase} de {clases} · {duracionMin} min».
- Prefijo del `h2` solo para lectores de pantalla: «Unidad {numero}: ».

## Tareas

1. Fase 1 (línea base, antes de tocar el código): medir el alto de cada unidad en 1440 × 900 y 1366 × 657 en ambos modos, con el fragmento de la 05-08.
2. Rehacer `CabeceraUnidad.astro` con la retícula nueva y el número de clases desde `curso.yaml`.
3. Actualizar `.cabecera-unidad` y agregar `.numero-unidad` en `global.css`.
4. Borrar `BarraAvance.astro` y comprobar con `grep -rn BarraAvance src` que no quedan usos.
5. Revisar la U3 en oscuro: el número en `#E4F3FF` sobre `#003B51` y el borde de 1 px `#00B0E8`.
6. Ejecutar `pnpm build`, `pnpm astro check` y las regresiones; revisar en 360, 640, 1024, 1366 y 1440 px, ambos modos y teclado.
7. Escribir la bitácora y actualizar el registro.

## Tareas del desarrollador

1. ~~Aplicar la P-025 antes de empezar.~~ Cumplida: P-025 aplicada el 2026-11-22 (comprobada con `grep`).

## Criterios de aceptación

- [ ] `grep -c "Avance del curso" dist/index.html` = 0 y `BarraAvance.astro` no existe.
- [ ] En 1440 × 900, cada `section` de unidad mide como máximo el alto de la ventana menos el encabezado, en ambos modos.
- [ ] En 1366 × 657, cada unidad mide como máximo 8 px más que en la línea base de la tarea 1.
- [ ] El nombre accesible de cada `h2` de unidad empieza con «Unidad n:» (árbol de accesibilidad); 0 saltos de nivel de encabezado.
- [ ] Contraste del número y de los datos sobre cada color de unidad: los mismos pares de la tabla 2.3 de `DESIGN.md`.
- [ ] Regresiones: `pnpm build` sin advertencias con la guardia; `pnpm astro check` 0/0/0; 0 B de JavaScript nuevo; la barra de lectura de 3 px bajo el encabezado sigue funcionando.

## Riesgos

- Que el «1» de Sora a 88 px se confunda con una «l»: se compara en la captura; si pasa, se usa `font-variant-numeric: lining-nums` o se baja el tamaño.
- Que el título largo de la U1 baje a 2 líneas en 1024 px y la unidad crezca: se mide en 1024 × 768 además de los anchos del criterio.

## Fuera de alcance

- Cambiar los botones de la cabecera o sus textos.
- Quitar el campo `avance` del esquema (RDA-013).

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Aplicación de la P-025.
