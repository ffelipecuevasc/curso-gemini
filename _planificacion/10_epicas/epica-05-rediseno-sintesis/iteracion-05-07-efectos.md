# Iteración 05-07 · Capa de efectos con propósito

- **Épica:** 05 · Rediseño visual y síntesis del contenido
- **Estado:** Pendiente
- **Rama sugerida:** iteracion/05-07-efectos
- **Depende de:** 05-05, 05-06 y propuestas P-009 y P-010 aplicadas
- **Especificación:** —
- **RDA relacionadas:** RDA-004, RDA-007, RDA-011

## Objetivo

Darle al sitio profundidad y respuesta al usuario con efectos que explican algo (qué se puede pinchar, de dónde sale un modal, cuánto falta de la página), con los colores de la paleta, sin costo visible de rendimiento y con una versión quieta para quien reduce el movimiento.

## Punto de partida

- Estructura estable: portada con ruta (05-06), unidades en una pantalla con tarjetas (05-05) y modales (05-04).
- El cambio de modo ya usa la API View Transitions con la curva `--ease-expo-out` (01-05); los modales abren sin transición.
- Estados de hover, presionado y foco de la 05-01.

## Alcance y entregables

Cada efecto se activa solo donde el navegador lo soporta (`@supports` o detección en el script) y se quita con `prefers-reduced-motion: reduce`. Solo se animan `transform`, `opacity` y propiedades que no recalculan el diseño.

1. **Profundidad teñida:** tokens `--sombra-u1` a `--sombra-u4` y `--sombra-neutra`, derivados del color de cada unidad con `color-mix()` (en oscuro, menos opacidad y un halo de 1 px del color de la unidad). Tarjetas de la ruta y de bloque: en reposo, sombra suave; en hover y foco, subida de 4 px y sombra más amplia.
2. **Brillo que sigue al cursor** en las tarjetas: degradado radial del color de la unidad al 12 %, posicionado con las variables `--x` e `--y` que actualiza un oyente `pointermove` delegado con `requestAnimationFrame`; solo con `(hover: hover) and (pointer: fine)`.
3. **De la tarjeta al modal:** al abrir un modal desde una tarjeta, `document.startViewTransition()` transforma la tarjeta en el modal (nombre de transición asignado al vuelo a la tarjeta y al `<dialog>`), en 350 ms con `--ease-expo-out`, y vuelve al cerrar. Sin la API, el modal abre con la entrada de `@starting-style` (escala de 0,96 a 1 y opacidad), y el fondo aparece con un fundido.
4. **Barra de avance de lectura:** franja de 3 px bajo el encabezado que crece con el desplazamiento (`animation-timeline: scroll(root)`) y toma el color de la unidad visible; solo con `@supports (animation-timeline: scroll())`.
5. **Aparición escalonada:** las tarjetas de cada unidad entran con opacidad y 12 px de desplazamiento vertical al entrar en la ventana (`animation-timeline: view()`), con un desfase de 40 ms entre tarjetas. Sin soporte, las tarjetas se ven desde el inicio: el estado inicial nunca es invisible fuera de `@supports`.
6. **Confirmación de copiado:** el ícono de «Copiar» se transforma en un visto que se dibuja (`stroke-dashoffset`) durante 2 s, junto al aviso «Copiado» que ya existe.

## Decisiones del desarrollador

- 2026-11-18: nivel de efectos «con propósito»; sin parallax, sin fondos animados y sin efectos sobre los logotipos (decisión del desarrollador al crear la épica).

## Tareas

1. Medir la línea base sobre `pnpm preview`: Lighthouse móvil (Rendimiento, CLS, TBT) y peso del JavaScript propio.
2. Agregar los tokens de sombra, duración y curva en `@theme` y en modo oscuro (P-009 aplicada), y los estados de profundidad de las tarjetas.
3. Agregar el brillo con su oyente `pointermove` en `src/scripts/efectos.ts`, con salida temprana si el puntero no es fino o si se reduce el movimiento.
4. Agregar la transición de tarjeta a modal en `src/scripts/modal.ts` y la entrada con `@starting-style`.
5. Agregar la barra de avance de lectura y la aparición escalonada en CSS, cada una dentro de su `@supports` y de `prefers-reduced-motion: no-preference`.
6. Agregar la confirmación animada de copiado.
7. Ejecutar `pnpm build`, `pnpm astro check` y las regresiones; comparar Lighthouse con la línea base; revisar en Chrome y en Firefox o Safari, ambos modos, con y sin reducir movimiento.
8. Escribir la bitácora y actualizar el registro.

## Criterios de aceptación

- [ ] Con `prefers-reduced-motion: reduce` emulado no hay ninguna animación ni transición (Panel de Animaciones de DevTools vacío al recorrer la página y abrir un modal).
- [ ] En un navegador sin `animation-timeline` (o desactivando la regla `@supports` en DevTools para simularlo), todas las tarjetas se ven desde el inicio y no hay barra de avance rota (captura).
- [ ] CLS = 0 al pasar el mouse, abrir y cerrar modales y desplazarse (grabación de Rendimiento de DevTools).
- [ ] Ningún cuadro largo por los efectos: la grabación de Rendimiento con 10 s de movimiento del puntero sobre las tarjetas no muestra tareas de más de 50 ms; INP informativo, sin bloquear; referencia: TBT.
- [ ] JavaScript propio total ≤ 3 KB gzip.
- [ ] Lighthouse móvil sobre `pnpm preview`: Rendimiento ≥ 95 y sin bajar más de 2 puntos respecto de la línea base.
- [ ] Las sombras y el brillo usan solo colores de la paleta (búsqueda de HEX nuevos en `global.css` y componentes: solo los de `DESIGN.md`).
- [ ] Regresiones: `pnpm build` sin advertencias con la guardia; `pnpm astro check` 0/0/0; 1 `h1`; navegación con teclado y foco visible sin cambios.

## Riesgos

- Que la transición de tarjeta a modal choque con la del cambio de modo (ambas usan View Transitions): no se inicia una transición si hay otra activa (`document.activeViewTransition` o una marca propia).
- Que las sombras en modo oscuro se pierdan contra `#00131D`: se reemplazan por halo de borde y una superficie un tono más clara.
- Que el brillo distraiga en pantallas táctiles: solo existe con puntero fino.

## Fuera de alcance

- Parallax, fondos animados, partículas y efectos sobre los logotipos.
- Animar la navegación del encabezado (indicador de píldora deslizante): se puede proponer como mejora en la bitácora.

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Ninguno.
