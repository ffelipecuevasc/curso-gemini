# Iteración 06-01 · Trama de puntos de fondo

- **Épica:** 06 · Pulido de identidad: portada, unidades y modales
- **Estado:** Pendiente
- **Rama sugerida:** iteracion/06-01-trama-puntos
- **Depende de:** cierre de la épica 05 y propuesta P-023 aplicada
- **Especificación:** —
- **RDA relacionadas:** RDA-004, RDA-007

## Objetivo

Que toda la página tenga como fondo una trama de puntos fina y elegante, en claro y en oscuro, sobre la que los bloques de color y las tarjetas se lean como superficies lisas.

## Punto de partida

- `src/layouts/Base.astro`: el `<body>` lleva `bg-fondo`; `html` tiene el mismo color en `@layer base` (`global.css`).
- Superficies que tapan el fondo: encabezado (`bg-fondo`), círculo de la portada (`bg-superficie`), cabeceras de unidad (color de la unidad), tarjetas (`bg-fondo`), pie (`--color-superficie`) y modales (`bg-fondo`, con fondo al 70 % y desenfoque).
- `DESIGN.md`, sección 1, principio 3: los degradados se usan solo en el brillo y en la barra de avance de lectura. La trama se dibuja con `radial-gradient()`, por eso necesita la P-023.

## Alcance y entregables

- Token `--color-puntos` en ambos modos, derivado con `color-mix()`:
  - Claro: `--color-texto-2` (#003B51) al 17 %.
  - Oscuro: `--color-hover-suave` (#005877) al 55 %.
- Trama en el `<body>`: punto de 1 px de radio (borde suave hasta 1,5 px) cada 22 px, con `background-size: 22px 22px`, sin `background-attachment: fixed` (repinta al desplazar) y sin animación.
- Sin trama al imprimir (`@media print`).
- El círculo decorativo de la portada sigue tapando la trama: es el «círculo suave que sale del marco» del concepto.

## Contenido aprobado (copiar tal cual)

- Ninguno: la iteración no agrega texto.

## Decisiones del desarrollador

- 2026-11-21: «Lo único que quiero es que la web tenga un elegante patrón/textura de puntos como fondo», sobre la vista previa de la épica.
- 2026-11-21: valores de la vista previa aprobados (1 px cada 22 px; 17 % en claro y 55 % en oscuro). Si en su pantalla se ve muy marcada o muy tenue, se ajusta solo el porcentaje.

## Tareas

1. Tomar capturas de 1440 × 900 y 390 × 844 en ambos modos antes del cambio (línea base en la bitácora).
2. Agregar el token y la trama al final de `src/styles/global.css`, sin capa, con los valores de «Alcance y entregables».
3. Medir el contraste del texto más débil de cada modo sobre un punto y entre puntos: `--color-texto-2` y `--color-enlace` en claro, `--color-texto-2` y `--color-enlace` en oscuro.
4. Revisar que la trama no se vea a través del encabezado fijo, de las tarjetas ni del modal.
5. Revisar la vista de impresión del navegador (sin trama).
6. Ejecutar `pnpm build` y `pnpm astro check`; revisar en 360, 640, 1024, 1366 y 1440 px, ambos modos.
7. Escribir la bitácora y actualizar el registro.

## Tareas del desarrollador

1. Aplicar la P-023 en `DESIGN.md` antes de empezar.
2. Mirar la trama en su notebook y en un teléfono, y confirmar la intensidad.

## Criterios de aceptación

- [ ] La trama se ve en ambos modos en `body` y no se ve dentro del encabezado, de las tarjetas, de las cabeceras de unidad ni de los modales (capturas en la bitácora).
- [ ] Contraste: ningún par de la tabla 2.3 de `DESIGN.md` baja de su nivel (AA o AAA) medido sobre el color de un punto.
- [ ] Al desplazar, la trama se mueve con la página (sin `background-attachment: fixed`) y no hay animación.
- [ ] `@media print` sin trama.
- [ ] Regresiones: `pnpm build` sin advertencias con la guardia; `pnpm astro check` 0/0/0; 0 B de JavaScript nuevo; `git diff --stat -- src/assets` vacío.

## Riesgos

- Que la trama se vea como ruido en pantallas de baja densidad: se baja el porcentaje del token, no el tamaño del punto.
- Que en oscuro la trama compita con el borde de 1 px de la U3 (`#00B0E8`): se compara en la captura de la U3 en oscuro.

## Fuera de alcance

- Trama animada, con parallax o que siga al cursor.
- Trama dentro de las tarjetas o de los bloques de color.

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Aplicación de la P-023 y confirmación de la intensidad.
