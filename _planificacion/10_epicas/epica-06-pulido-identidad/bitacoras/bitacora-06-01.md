# Bitácora 06-01 · Trama de puntos de fondo

- **Fecha:** 2026-11-22
- **Agente:** Claude Code (Opus 5.5)
- **Rama:** `iteracion/06-01-trama-puntos`
- **Estado final:** En revisión

## Resumen

Se agrega el token `--color-puntos` en ambos modos con `color-mix()` y una trama de puntos en el `<body>`: un punto de 1 px de radio, con borde suave hasta 1,5 px, cada 22 px. La trama no usa `background-attachment: fixed`, no se anima y desaparece al imprimir. Todo va al final de `src/styles/global.css`, fuera de las capas. No se agregó JavaScript ni se tocó `src/assets`, y el HTML compilado es idéntico al de `main` salvo el hash del CSS. En oscuro, dos colores de enlace bajan de AAA a AA sobre el centro de un punto; el desarrollador aceptó la excepción y mantuvo el 55 %.

## Paso 0 (lectura)

1. `html` pinta `--color-fondo` en `@layer base`, y el `<body>` lleva `bg-fondo` (`Base.astro`). Como `html` tiene fondo propio, el del `body` no se propaga al lienzo: con contenido corto, la trama terminaría donde termina el `body`.
2. Con fondo propio: encabezado fijo (`bg-fondo`), tarjetas (`.tarjeta-bloque`, `bg-fondo`), cabeceras de unidad (color de la unidad), pie (`bg-superficie`) y modales (`bg-fondo`, con fondo al 70 % y desenfoque).
3. El círculo de la portada (`bg-superficie`, `-z-10`) vive dentro de una `section` con `isolate`, así que queda sobre el fondo del `body` y sigue tapando la trama.
4. Paneles internos (`Profundiza`, `Prompt`, descargas, franja del instructor) también tienen fondo propio.
5. No se encontró nada que contradiga la iteración.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `src/styles/global.css` | Token `--color-puntos` en `:root` y en `[data-modo="oscuro"]`; `body` con `radial-gradient`, `background-size: 22px 22px` y `min-height: 100dvh`; `@media print` sin trama |
| `_planificacion/10_epicas/epica-06-pulido-identidad/iteracion-06-01-trama-puntos.md` | Estado «En revisión»; tarea del desarrollador «Aplicar la P-023» cumplida |
| `_planificacion/10_epicas/epica-06-pulido-identidad/definicion-epica-06.md` | Épica «En curso»; fila 06-01 «En revisión» |
| `_planificacion/00_producto/registro-pendientes.md` | Iteración activa 06-01, fila 06-01, backlog 27, próximo hito, historial en 50 filas |
| `_planificacion/00_producto/registro-archivo.md` | Recibe la fila más antigua del historial (03-02 terminada) |
| `_planificacion/10_epicas/epica-06-pulido-identidad/bitacoras/bitacora-06-01.md` | Esta bitácora |

## Verificación

- `pnpm build`: completo, sin advertencias; guardia de marcadores con 0 en `dist/`.
- `pnpm astro check`: 0 errores, 0 advertencias, 0 sugerencias.
- `dist/index.html`: 54 `<dialog>`, 1 `h1` y 24 `data-copiar` únicos de prompts. Se comparó con un build de `HEAD` hecho con el `global.css` anterior: el HTML es idéntico salvo el nombre `Base.*.css`, así que los 24 prompts siguen siendo los mismos de la 05-08 (24 de 24 idénticos a su fuente).
- JavaScript propio (gzip nivel 9 de las 6 etiquetas en línea concatenadas): 1774 B, sin cambios.
- `git diff --stat -- src/assets`: vacío.
- CSS compilado: 0 apariciones de `background-attachment`. Lightning CSS agrega un respaldo estático antes de cada `color-mix()` (`#003b512b` y `#b1d4e98c`). El de oscuro usa el `--color-hover-suave` claro, pero solo lo leería un navegador sin `color-mix()`, porque la declaración siguiente lo reemplaza.

### Contraste sobre el punto

Calculado con un script de Node fuera del repositorio (luminancia WCAG 2.2). El color del punto es el centro opaco compuesto sobre `--color-fondo`.

| Modo | Punto | Texto | Sobre el fondo | Sobre el punto | Nivel en 2.3 | Resultado |
| :--- | :---- | :---- | :------------- | :------------- | :----------- | :-------- |
| Claro | `#D4DEE1` | `#003B51` (`--color-texto-2`) | 12,04:1 | 8,79:1 | AAA | Mantiene AAA |
| Claro | `#D4DEE1` | `#00678A` (`--color-enlace`) | 6,35:1 | 4,64:1 | AA | Mantiene AA |
| Claro | `#D4DEE1` | `#00131D` (`--color-texto`) | 18,90:1 | 13,80:1 | AAA | Mantiene AAA |
| Oscuro | `#00394F` | `#E4F3FF` (`--color-texto-2`) | 16,71:1 | 10,93:1 | AAA | Mantiene AAA |
| Oscuro | `#00394F` | `#5DC9FF` (`--color-enlace`) | 10,14:1 | 6,63:1 | AAA | **Baja a AA** |
| Oscuro | `#00394F` | `#00B0E8` (`--color-primario`) | 7,54:1 | 4,93:1 | AAA | **Baja a AA** |
| Oscuro | `#00394F` | `#FFFFFF` (`--color-texto`) | 18,90:1 | 12,37:1 | AAA | Mantiene AAA |

Barrido en oscuro: `#5DC9FF` vuelve a AAA con el 45 % o menos (7,29:1). `#00B0E8` no llega a 7:1 ni al 20 % (6,65:1). El desarrollador decidió mantener el 55 % y aceptar la excepción: es el peor caso, el centro de un punto de 1 px, y nunca baja de 4,5:1.

### Fragmento de consola

```js
// Ejecutar en la consola de pnpm preview, en claro y luego en oscuro.
const b = getComputedStyle(document.body);
console.table({
  puntos: getComputedStyle(document.documentElement).getPropertyValue("--color-puntos").trim(),
  imagen: b.backgroundImage,
  tamano: b.backgroundSize,
  attachment: b.backgroundAttachment, // debe ser "scroll"
  animacion: b.animationName,          // debe ser "none"
  altoMinimo: b.minHeight,
});
```

## Criterios de aceptación

- [ ] La trama se ve en ambos modos en `body` y no dentro del encabezado, las tarjetas, las cabeceras de unidad ni los modales: por código, todas tienen fondo propio y opaco (Paso 0). Las capturas las toma el desarrollador.
- [ ] Contraste: no se cumple en oscuro. `#5DC9FF` y `#00B0E8` bajan de AAA a AA sobre el centro del punto. El desarrollador aceptó la excepción el 2026-11-22.
- [x] Sin `background-attachment: fixed` y sin animación: 0 apariciones en el CSS compilado; el fragmento de consola lo confirma en el navegador.
- [x] `@media print` sin trama: regla `background-image: none` al final de `global.css`. La vista de impresión la revisa el desarrollador.
- [x] Regresiones: build sin advertencias con la guardia, check 0/0/0, 0 B de JavaScript nuevo y `git diff --stat -- src/assets` vacío.

## Diferencias entre lo planificado y lo encontrado

- Se agrega `min-height: 100dvh` al `body`. `html` tiene su propio fondo, así que el del `body` no llena el lienzo: sin el alto mínimo, en una página corta (como la 404) la trama se cortaría antes del final de la ventana.
- El token se declara dos veces, en `:root` y en `[data-modo="oscuro"]`, porque cada modo mezcla un color distinto.
- No hizo falta cambiar el fondo de ninguna superficie.

## No se pudo verificar

- Las capturas antes y después (tarea 1), la vista de impresión y la revisión en 360, 640, 1024, 1366 y 1440 px: el agente no las hizo en un navegador.

## Tareas del desarrollador

1. Tomar capturas de 1440 × 900 y 390 × 844 en ambos modos, antes (rama `main`) y después (esta rama), y confirmar que la trama no se ve en el encabezado, las tarjetas, las cabeceras de unidad, el pie ni los modales.
2. Revisar la U3 en oscuro: la trama junto al borde de 1 px `#00B0E8`.
3. Ejecutar el fragmento de consola en ambos modos: `attachment` «scroll», `animacion` «none».
4. Abrir la vista de impresión del navegador y confirmar que no hay trama.
5. Mirar la intensidad en el notebook y en un teléfono. Si se ve muy marcada o muy tenue, se ajusta solo el porcentaje.
6. Revisar la 404 (`/404.html`): la trama llega al final de la ventana.

## Decisiones tomadas

- Se mantiene el 55 % en oscuro y se acepta la excepción de contraste AAA → AA sobre el centro del punto (desarrollador, 2026-11-22).
- `min-height: 100dvh` en el `body`, para que la trama cubra toda la ventana.

## Pendientes y riesgos

- `DESIGN.md` 2.3 no menciona la excepción sobre la trama. No contradice la P-023, pero la 06-06 puede proponer una nota (P-028) si el desarrollador quiere dejarla escrita.
- La P-024 sigue pendiente y va antes de la 06-02.
- Riesgo de ruido en pantallas de baja densidad: se resuelve bajando el porcentaje del token.

## Revisión

- **Resultado frente al objetivo:** cumplido en código. La trama queda en el `body` en ambos modos y las superficies siguen lisas. Falta la confirmación visual del desarrollador.
- **Qué aprendimos:** con un fondo propio en `html`, el fondo del `body` no llena la ventana. Además, un punto de 1 px al 55 % en oscuro ya resta contraste a los colores claros de enlace.
- **Qué cambia para lo que sigue:** la 06-02 y las siguientes se revisan sobre la trama. Las superficies nuevas deben llevar fondo propio si tienen que verse lisas.

## Commit sugerido

`Épica 6 - Iteración 06-01: agrega la trama de puntos del fondo con --color-puntos en ambos modos, sin fixed ni animación y sin trama al imprimir`
