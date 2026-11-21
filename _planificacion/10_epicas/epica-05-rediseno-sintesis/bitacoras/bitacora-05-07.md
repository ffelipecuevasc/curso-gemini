# Bitácora 05-07 · Capa de efectos con propósito

- **Fecha:** 2026-11-20
- **Agente:** Claude Code (Opus 5.5)
- **Rama:** iteracion/05-07-efectos
- **Estado final:** En revisión

## Resumen

Paso 0: 05-06 `Terminada` (los 7 pasos de prueba sin observaciones, dicho por el desarrollador y no verificado por el agente) y P-016 `Aplicada` tras comprobarla con `grep` en `DESIGN.md`. Se registró la P-017 (`Pendiente`). Se agregaron seis efectos: sombras teñidas con tokens, subida de 4 px en las dos tarjetas, brillo que sigue al cursor, transición de tarjeta (o botón) a modal, barra de lectura, aparición escalonada y visto que se dibuja al copiar. El revelado del cambio de modo quedó acotado a `html[data-transicion="modo"]`. El JavaScript propio sube de 1295 a 1774 B gzip.

## Línea base del desarrollador (dicha por él, no verificada por el agente)

El pedido de la Fase 2 trajo los campos vacíos: Rendimiento __, LCP __ (elemento: __), CLS __, TBT __, tareas > 50 ms: __. **La línea base no se entregó.** Hay que medirla sobre `main` (sin efectos) antes de comparar con el paso 6 del procedimiento.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `src/styles/global.css` | Tokens `--sombra-u1` a `--sombra-u4`, `--sombra-neutra`, `--halo-u1` a `--halo-u4`, `--duracion-hover` y `--duracion-modal` (claro y oscuro). Profundidad, subida y brillo de `.tarjeta` y `.tarjeta-ruta`. Barra de lectura, aparición escalonada, entrada con `@starting-style` y visto de copiado. Reglas de View Transitions acotadas por tipo. `.tarjeta-ruta` pierde su hover de Tailwind. |
| `src/lib/colores-unidad.ts` | Publica `--sombra`, `--halo` y `--tinte` por unidad (en oscuro, la U3 usa `--color-borde-u3`). |
| `src/scripts/efectos.ts` | Nuevo. Brillo: un oyente `pointermove` delegado y un `requestAnimationFrame` por cuadro, con salida temprana. |
| `src/scripts/modal.ts` | Transición origen ↔ modal. Intercepta `submit` (Cerrar) y `cancel` (Esc, clic fuera) para cerrar con transición. |
| `src/components/BotonModo.astro` | Marca `data-transicion="modo"` y no inicia la transición si ya hay otra. |
| `src/components/Encabezado.astro` | Clase `encabezado-sitio`. El observador pone y quita `<html data-unidad>`. |
| `src/components/Prompt.astro` | Clase `check-copiado` y `pathLength="1"` en el visto. |
| `src/layouts/Base.astro` | Carga `efectos.ts`. |
| `_planificacion/…` | Paso 0 de la 05-06, P-016 aplicada, P-017 nueva, esta bitácora y estados de la 05-07. |

## Verificación (agente)

- `pnpm build`: sin advertencias, guardia en 0 marcadores. `pnpm astro check`: 0 errores, 0 advertencias, 0 sugerencias.
- JavaScript propio (gzip nivel 9 de las etiquetas en línea concatenadas): 5 etiquetas y 1295 B → 6 etiquetas y **1774 B** (≤ 3072). Por etiqueta: modo +42, encabezado +53, modal +263, efectos 307 (nuevo).
- `dist/index.html`: 341 888 B → 346 277 B (60 951 → 61 884 B gzip). El aumento viene de las clases de `--sombra`, `--halo` y `--tinte` en las tarjetas.
- 1 `h1`; 300 `id`, 0 repetidos; 54 `<dialog>`; 0 `section` sin `aria-labelledby`. Las anclas `inicio`, `ruta`, `unidad-1` a `unidad-4` e `instructor` aparecen 1 vez cada una.
- Prompts: 24 de 24 idénticos frente al `index.html` de antes.
- HEX nuevos en `git diff -- src`: solo `#003B51`, dentro de un comentario (color de `DESIGN.md`). Los tokens nuevos usan `color-mix()` sobre tokens existentes.
- Logotipos: `git diff --stat -- src/assets` vacío.
- CSS compilado: Lightning CSS fusionaba `animation-timeline` dentro del atajo `animation`, y eso es inválido (el atajo solo lo reinicia), así que la barra y la aparición no habrían funcionado. Se corrigió escribiendo longhands; el CSS final conserva `animation-timeline:scroll(root)` y `view()` por separado.
- No se revisó en navegador (360 px, escritorio, ambos modos y teclado): queda en el procedimiento.

## Procedimiento para el desarrollador (`pnpm build && pnpm preview`)

1. **Reducir movimiento** (DevTools > Rendering > `prefers-reduced-motion: reduce`, y luego Más herramientas > Animaciones): recorre la página, abre y cierra un modal, cambia de modo y copia un prompt. Esperado: el panel queda vacío, sin barra, sin brillo y sin subida. Fragmento: `document.getAnimations().length` debe dar `0` después de desplazarte.
2. **Sin `animation-timeline`** (Firefox actual, o Chrome con las reglas `@supports (animation-timeline…)` desactivadas en Estilos): todas las tarjetas se ven desde el inicio y no hay barra. Fragmento: `[...document.querySelectorAll('.cuadricula-bloques>.tarjeta')].filter(t=>getComputedStyle(t).opacity!=='1').length` → `0` sin desplazarte.
3. **CLS** (Rendimiento, grabación: pasar el mouse, abrir y cerrar modales, desplazarse): CLS 0. Fragmento previo: `new PerformanceObserver(l=>l.getEntries().forEach(e=>!e.hadRecentInput&&console.log('CLS',e.value))).observe({type:'layout-shift',buffered:true})`.
4. **Tareas largas**: 10 s moviendo el puntero sobre las tarjetas. Esperado: ninguna tarea > 50 ms. Fragmento: `new PerformanceObserver(l=>l.getEntries().forEach(e=>console.log('larga',Math.round(e.duration)))).observe({type:'longtask',buffered:true})`.
5. **Transiciones**: «Ver detalle» (la tarjeta crece hasta el modal y vuelve al cerrar con «Cerrar», Esc y clic fuera); «Sobre la unidad» y «Ver trayectoria completa» (el botón crece hasta el modal); el cambio de modo sigue con el círculo de 1 s; si cambias de modo con un modal abriéndose, nada queda roto. El foco vuelve al botón.
6. **Lighthouse móvil**, 3 corridas, mediana, sobre `main` (línea base) y sobre esta rama: Rendimiento ≥ 95 y no más de 2 puntos bajo la línea base.
7. **Navegadores**: Chrome y Firefox o Safari, claro y oscuro. Revisa la sombra y el halo (la U3 en oscuro con borde claro), la barra con el color de la unidad visible (sin color de unidad en ruta e instructor: `document.documentElement.dataset.unidad` → `undefined`), el brillo solo con mouse y el visto que se dibuja al copiar.
8. **Teclado**: Tab hasta «Ver detalle» sube la tarjeta; un clic con el mouse no la deja arriba; el foco sigue visible.

## Criterios de aceptación

- [ ] Reducir movimiento sin animaciones: lo mide el desarrollador (paso 1).
- [ ] Tarjetas visibles sin `animation-timeline`: lo mide el desarrollador (paso 2). Por construcción, el estado invisible solo existe dentro de `@supports`.
- [ ] CLS = 0: lo mide el desarrollador (paso 3). Por construcción solo se animan `translate`, `transform`, `opacity` y `stroke-dashoffset`.
- [ ] Sin tareas > 50 ms: lo mide el desarrollador (paso 4).
- [x] JavaScript propio ≤ 3 KB gzip: 1774 B.
- [ ] Lighthouse ≥ 95 y a no más de 2 puntos de la línea base: falta la línea base y la medición (paso 6).
- [x] Solo colores de la paleta: 0 HEX nuevos fuera de un comentario; todo con `color-mix()` sobre tokens.
- [ ] Regresiones: build sin advertencias, check 0/0/0 y 1 `h1` verificados por el agente; el teclado y el foco los confirma el desarrollador (paso 8).

## Decisiones tomadas

- Todas son del desarrollador (2026-11-20): `data-unidad` desde el observador; origen del modal = tarjeta o botón (P-017); brillo con puntero fino; subida de 4 px en ambas tarjetas; las 8 correcciones de la Fase 2.
- `--sombra-uN` son colores y la geometría vive en la tarjeta. El halo usa los tokens `--halo-uN`, transparentes en claro.
- Brillo de la ruta con `--sobre-bloque`; brillo de bloque con `--tinte`; la tarjeta «Terminado cuando…» usa `--sombra-neutra` y `--color-primario`.
- Escalonado: `animation-range` desplazado un 8 % por columna (0/8/16 % en 3 columnas, 0/8 % en 2), como equivalente de los 40 ms.
- La aparición usa `transform` y la subida usa `translate`, para que el `fill: both` no anule el hover.
- El modal sin la API solo anima la entrada: el cierre es instantáneo.

## Pendientes y riesgos

- **Para la 05-08:** riesgo de falsa afordancia, porque `.tarjeta` sube sin ser clicable (decisión del desarrollador de mantenerla).
- La P-017 está pendiente en `DESIGN.md`.
- Si `cancel` no se puede cancelar (por ejemplo, un segundo Esc sin activación del usuario), el modal cierra sin transición.
- El `::backdrop` aparece de golpe durante la View Transition (la raíz queda quieta a propósito).
- Línea base de Lighthouse sin entregar.

## Revisión

- **Resultado frente al objetivo:** los seis efectos están construidos con su versión quieta y con 1278 B de presupuesto de JS libre; falta toda la medición en navegador.
- **Qué aprendimos:** el minificador puede convertir CSS válido en inválido (`animation-timeline` dentro del atajo); hay que revisar el CSS compilado, no solo el fuente.
- **Qué cambia para lo que sigue:** la 05-08 debe considerar la falsa afordancia de `.tarjeta` y la P-017, y medir Lighthouse con efectos.

## Commit sugerido

`Épica 5 - Iteración 05-07: agrega sombras teñidas, brillo, transición de tarjeta a modal, barra de lectura, aparición escalonada y visto de copiado; acota el revelado de modo y propone P-017`
