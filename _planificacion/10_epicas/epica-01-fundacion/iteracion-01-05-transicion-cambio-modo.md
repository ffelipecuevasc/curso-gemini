# Iteración 01-05 · Transición animada del cambio de modo

- **Épica:** 01 · Fundación y sistema de diseño
- **Estado:** Terminada
- **Rama sugerida:** iteracion/01-05-transicion-cambio-modo
- **Depende de:** 01-03 y la propuesta P-001 aplicada en `DESIGN.md`
- **RDA relacionadas:** RDA-004

## Objetivo

Al pulsar el botón de modo, el modo nuevo se revela con un círculo difuminado que crece desde el centro de la pantalla, usando la API View Transitions, sin JavaScript nuevo fuera de `BotonModo.astro`.

## Alcance y entregables

- `BotonModo.astro` envuelve el cambio de modo en `document.startViewTransition`, con el cambio directo como respaldo.
- Reglas de `::view-transition-*` y `@keyframes` en `src/styles/global.css`, y el token `--ease-expo-out`.

## Contenido aprobado (copiar tal cual)

Código entregado por el desarrollador el 2026-11-17. Se copia tal cual, salvo los ajustes de «Decisiones del desarrollador»:

```js
if (!document.startViewTransition) switchTheme()
document.startViewTransition(switchTheme);
```

```css
::view-transition-group(root) {
  animation-timing-function: var(--expo-out);
}

::view-transition-new(root) {
  mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs><filter id="blur"><feGaussianBlur stdDeviation="2"/></filter></defs><circle cx="20" cy="20" r="18" fill="white" filter="url(%23blur)"/></svg>') center / 0 no-repeat;
  animation: scale 1s;
  animation-fill-mode: both;
}

::view-transition-old(root),
.dark::view-transition-old(root) {
  animation: none;
  animation-fill-mode: both;
  z-index: -1;
}
.dark::view-transition-new(root) {
  animation: scale 1s;
  animation-fill-mode: both;
}

@keyframes scale {
  to {
    mask-size: 200vmax;
  }
}
```

## Decisiones del desarrollador

- 2026-11-17: el efecto se implementa con el código de arriba, revelado desde el centro de la pantalla y con 1 s de duración.
- Ajustes necesarios para este proyecto (los confirma el desarrollador al aprobar la iteración):
  1. El respaldo lleva `return`: sin él, en un navegador sin la API se cambia el modo y después se llama a `startViewTransition`, que no existe, y el script falla.
  2. `switchTheme` es la función de 01-03 que cambia `data-modo` y guarda la elección; no se crea otra.
  3. `.dark` se reemplaza por `[data-modo="oscuro"]`, el selector del modo oscuro de `DESIGN.md`. Las reglas `.dark::view-transition-*` repiten lo mismo que las generales, así que se pueden quitar sin cambiar el efecto.
  4. `--expo-out` se llama `--ease-expo-out` y su valor sale de `DESIGN.md` una vez aplicada P-001.
  5. Con `prefers-reduced-motion: reduce`, se llama a `switchTheme()` directamente, sin transición.
  6. `@keyframes scale` se renombra a `revelar-modo`, para no chocar con la propiedad y las utilidades `scale` de Tailwind v4.

## Tareas

1. Confirmar que P-001 está aplicada en `DESIGN.md`; si no, detenerse y avisar.
2. Agregar el token `--ease-expo-out` en `@theme` con el valor de `DESIGN.md`.
3. Agregar las reglas `::view-transition-*` y `@keyframes revelar-modo` en `global.css`, con los ajustes 3, 4 y 6.
4. Envolver el cambio de modo de `BotonModo.astro` según los ajustes 1, 2 y 5.
5. Revisar que el foco quede en el botón y que `aria-pressed` cambie igual que antes.
6. Ejecutar `pnpm build` y `pnpm astro check`, y probar en Chrome y en Firefox o Safari con `pnpm preview`.

## Criterios de aceptación

- [x] (Navegador: comprobado por el desarrollador el 2026-11-17.) En Chrome, al pulsar el botón (con mouse y con teclado), el modo nuevo aparece como un círculo difuminado que crece desde el centro durante 1 s, en ambos sentidos.
- [x] (Navegador: comprobado por el desarrollador el 2026-11-17.) En un navegador sin `document.startViewTransition`, o con `startViewTransition` borrado a mano desde la consola, el modo cambia al instante y la consola no muestra errores.
- [x] (Navegador: comprobado por el desarrollador el 2026-11-17.) Con «prefers-reduced-motion: reduce» emulado en las herramientas del navegador, el modo cambia al instante, sin círculo.
- [x] (Navegador: comprobado por el desarrollador el 2026-11-17.) Después del efecto, `aria-pressed`, `data-modo` y el valor guardado en `localStorage` coinciden con el modo visible, y el foco sigue en el botón.
- [x] El JavaScript total enviado sigue bajo 3 KB comprimido y la pestaña Red no muestra peticiones nuevas. (Tamaño medido: 852 B gzip, antes 802 B con el mismo método; la máscara es un `data:` dentro del CSS, sin URL externa. Pestaña Red: comprobado por el desarrollador el 2026-11-17.)
- [x] `pnpm build` y `pnpm astro check` sin errores. (Build «Complete!»; check: 0 errores, 0 advertencias.)

## Riesgos

- Pulsar el botón varias veces seguidas puede cortar la transición en curso: se comprueba que el modo final coincide con el último clic.

## Fuera de alcance

- Revelar el círculo desde la posición del botón en vez del centro (sería otro efecto; se propone aparte si se quiere).

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Aplicar o ajustar la propuesta P-001 en `DESIGN.md`.
- Confirmar los ajustes de «Decisiones del desarrollador».
