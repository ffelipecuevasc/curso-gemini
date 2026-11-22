# Iteración 06-05 · Modales y citas

- **Épica:** 06 · Pulido de identidad: portada, unidades y modales
- **Estado:** Pendiente
- **Rama sugerida:** iteracion/06-05-modales
- **Depende de:** 06-01 y propuesta P-027 aplicada (si va después de la 06-04, revisa la transición desde la tarjeta clicable)
- **Especificación:** —
- **RDA relacionadas:** RDA-011, RDA-012

## Objetivo

Que el modal de un bloque se lea como un artículo corto: el título del bloque, sus datos en una línea y el resumen como entradilla, y que las citas del cuerpo se vean como parte de la marca.

## Punto de partida

- `Modal.astro`: franja del color de la unidad, título (`h3` o `h4`) en `text-xl`, botón Cerrar de 44 px y descripción opcional en `text-texto-2` con `max-w-prose`.
- `ModalesBloque.astro`: título «Detalle · {titulo}», descripción = `sintesis.resumen`, «Otra idea clave», un párrafo suelto «{minutos} min» en IBM Plex Mono y el cuerpo del bloque; modal de prompts con título «Prompts · {titulo}».
- `.contenido-bloque blockquote` en `global.css`: `border-left: 4px solid var(--color-primario)` (hallazgo `side-tab` del detector de Impeccable).

## Alcance y entregables

- Prop opcional `meta` en `Modal.astro`: una línea en IBM Plex Mono de 14 px y `--color-texto-2` bajo el título. Título en `text-xl` en móvil y `text-2xl` desde 640 px.
- Modal de detalle: título = título del bloque (sin «Detalle ·»); `meta` = «Bloque n · m min · Unidad u» (o «Cierre · m min · Unidad u» para el bloque de cierre); se borra el párrafo suelto de los minutos.
- Modal de prompts: conserva «Prompts · {titulo}» y recibe la misma `meta`.
- Entradilla (`.entradilla-modal`): `sintesis.resumen` a 19 px, interlineado 1,55, en `--color-texto`, con línea de 1 px `--color-linea` debajo y máximo 65 caracteres por línea. Sigue siendo la descripción del `<dialog>` (`aria-describedby`).
- Cita (`blockquote`): sin borde lateral, fondo `--color-superficie`, radio `1rem 1rem 1rem 0.375rem` (la esquina asimétrica de la marca) y texto `--color-texto`.
- Los modales de unidad, del instructor y de «Terminado cuando…» no cambian de título; solo heredan el tamaño nuevo.

## Contenido aprobado (copiar tal cual)

> Aprobado por el desarrollador el 2026-11-21 en la vista previa.

- Título del modal de detalle: «{titulo del bloque}».
- Datos del modal: «Bloque {numero} · {minutos} min · Unidad {unidad}» y, para el cierre, «Cierre · {minutos} min · Unidad {unidad}».

## Tareas

1. Tomar capturas de un modal de detalle, uno de prompts y uno con cita en 1440 × 900 y 390 × 844, ambos modos (línea base).
2. Agregar `meta` a `Modal.astro` y la clase `.entradilla-modal`.
3. Cambiar el título y la `meta` en `ModalesBloque.astro`; borrar el párrafo de los minutos.
4. Rehacer la regla del `blockquote` en `global.css`.
5. Revisar con lector de pantalla que cada modal se anuncia con su título y su descripción, y que el nombre del botón que lo abre sigue diciendo qué abre.
6. Revisar la transición de tarjeta a modal y la hoja completa desde abajo en móvil.
7. Ejecutar `pnpm build`, `pnpm astro check`, las regresiones y el detector de Impeccable sobre `src/`.
8. Escribir la bitácora y actualizar el registro.

## Tareas del desarrollador

1. Aplicar la P-027 antes de empezar.

## Criterios de aceptación

- [ ] 0 títulos de modal que empiecen con «Detalle ·» en `dist/index.html`.
- [ ] Cada modal de bloque muestra su línea de datos y ningún «min» suelto en el cuerpo.
- [ ] El detector de Impeccable no informa `side-tab`.
- [ ] Contraste de la entradilla y de la cita: `--color-texto` sobre `--color-fondo` y sobre `--color-superficie` en ambos modos (tabla 2.3).
- [ ] Sin JavaScript, los modales se leen debajo de la cuadrícula con su título, sus datos y su entradilla (RDA-011).
- [ ] Regresiones: `pnpm build` sin advertencias con la guardia; `pnpm astro check` 0/0/0; 24 de 24 prompts idénticos a su fuente; 0 B de JavaScript nuevo.

## Riesgos

- Que el título sin «Detalle ·» se confunda con el modal de prompts del mismo bloque: el de prompts conserva su prefijo «Prompts ·».
- Que la entradilla a 19 px alargue el modal en móvil: el cuerpo ya tiene desplazamiento propio; se revisa en 360 × 740.

## Fuera de alcance

- Poner el prompt como primer bloque del modal de detalle.
- Cambiar el texto de `sintesis` (RDA-012).

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Aplicación de la P-027.
