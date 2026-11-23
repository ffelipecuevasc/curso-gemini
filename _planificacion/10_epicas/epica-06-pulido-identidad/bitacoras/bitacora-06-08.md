# Bitácora 06-08 · Efectos de movimiento: entrada de la portada, unidades que se encienden y navegación continua

- **Fecha:** 2026-11-23
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/06-08-efectos-movimiento (ya existía, aprobada por el desarrollador, en el mismo commit que `main`, `f3529ea`, con el árbol limpio al empezar)
- **Estado final:** En revisión (fase A, local). La fase B, con Lighthouse publicado y el cierre de la épica, va después del merge.

## Resumen

Se implementaron los 7 efectos aprobados (E1, E2a, E4, E7, E8, E10 y E11) en CSS nativo dentro de `global.css`: tokens y utilidades `animate-entrada` y `animate-estrella` en `@theme`, con 7 `@keyframes`. No hay dependencias nuevas ni JavaScript nuevo (JS propio: 1767 B, igual que en `main`). `efectos.ts`, `modal.ts`, el script del encabezado y `src/assets` no cambian. Funciona en Chromium, Firefox y WebKit. En Firefox y WebKit, la píldora salta en vez de deslizarse, pero queda bajo el enlace activo. Con reducir movimiento y al imprimir no existe ninguna animación nueva.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `src/styles/global.css` | Tokens `--duracion-entrada`, `--duracion-estrella`, `--escalonado`, `--animate-entrada` y `--animate-estrella` con sus `@keyframes` en `@theme`; `view-timeline: --unidad` en `.seccion-unidad`; la sala pasa a `position: relative; isolation: isolate` con el tinte en `::before`; reglas de E4, E7, E8, E10 y E11; respaldo sin `color-mix()` con `--sala`; impresión |
| `src/lib/movimiento.ts` (nuevo) | `claseEntrada` (`motion-safe:animate-entrada` y el desfase con `--orden`) y `ordenEntrada(n)`, compartidos por la portada y las filas de la ruta |
| `src/components/Portada.astro` | Entrada en el lema (0), la ficha (1), el botón (2), las redes (3) y los logos (4); el `h1` no cambia |
| `src/components/FilaRuta.astro` | Entrada en cada `li`, con `--orden` igual al número de la unidad |
| `src/components/RutaCurso.astro` | `origin-center motion-safe:animate-estrella` en el SVG de Gemini (solo clases) |
| `src/lib/colores-unidad.ts` | `salaUnidad` publica `[--sala:var(--color-sala-uN)]` en vez de `bg-sala-uN` |
| `_planificacion/…` | Registro, definición de la épica, iteración y propuestas P-031 (aplicada) y P-032 (pendiente) |

## Verificación

Método: `pnpm build` y `pnpm preview` (puerto 4340). Línea base: `dist/` de `main` (`f3529ea`), compilada antes de tocar el código y servida desde el scratchpad (puerto 4341). Mediciones con `playwright-core` 1.65.1 (solo en el scratchpad): Chromium 159.0.8154.6, Firefox 159.0 y WebKit 27.2, en 1440 × 900 y en ambos modos. Al terminar, todos los servidores quedaron apagados.

### Antes y después

| Medida | Línea base (`main`) | 06-08 |
| :----- | :------------------ | :---- |
| `<dialog>` · prompts · `h1` · `id` repetidos | 55 · 25 de 25 · 1 · 0 | 55 · 25 de 25 · 1 · 0 |
| JS propio (gzip 9, 6 etiquetas) | 1767 B | 1767 B |
| `dist/index.html` | 381 307 B (71 587 gzip) | 382 477 B (71 827 gzip) |
| CSS compilado | 56 831 B | 60 151 B |
| Unidades 1440 × 900, real (Chromium y Firefox) | 823 / 823 / 823 / 823 | 823 / 823 / 823 / 823 |
| Unidades 1440 × 900, natural (Chromium) | 818,6 / 794,6 / 796,6 / 769,8 | igual |
| Recálculos de estilo al cargar (CDP, 412 px, CPU ×4, mediana de 3) | 14 | 43 (12 sin E1) |

### Efectos

| Efecto | Medición | Motores |
| :----- | :------- | :------ |
| E1 · Entrada | 9 animaciones `entrada`; la última termina a los 740 ms (240 + 500). El `h1`, el `h2` y la nota tienen 0 animaciones. Capturas a 0, 300 y 900 ms en ambos modos | Los 3 |
| E2a · Estrella | 120 + 800 ms, 1 iteración, estado `finished`. Al final: `opacity 1`, `scale 1`, `rotate 0deg`. Después de 4 anclas, la misma animación sigue `finished` con su mismo `startTime` | Los 3 |
| E4 · Credencial | `circle(150% at 0px 100%)` al final del tramo y `circle(~66%)` a mitad de la entrada. Con Tab desde la portada, los 4 enfocables (los 2 botones y las 2 redes) quedan con la credencial en `circle(150%)` y su anillo completo (captura revisada) | Los 3; WebKit avanza el tramo unos 150 px más tarde |
| E7 · Sala | `::before`: anclada, 1,000 en U1 a U4; 600 px más abajo, 0,542 (U1 a U3); fuera de la vista, 0,000. La U4 no puede salir porque es la última (queda en 1). `background-color` de la sala: transparente | Los 3; en WebKit, el tramo se corre |
| E8 · Número | Anclado: `opacity 1`, `translate 0px`. Con el 25 % del tramo de entrada: 0,25 y 12 px | Chromium y Firefox; WebKit llega a 0 y 16 px más tarde (con 200 px visibles, 0,08) y termina igual |
| E10 · Aterrizaje | Clic en U2 (navegación) y en la fila 3 (ruta): la cabecera tiene `aterrizar-cabecera` corriendo (533–647 ms) con un anillo de 6 a 11 px; el número tiene `llegar-numero` y `aterrizar-numero` a la vez (escala de 1,01 a 1,06). Capturas a los ~450 ms | Los 3 |
| E11 · Píldora | Diferencia de `getBoundingClientRect` con el enlace `aria-current`, a los 600 ms, en las 6 secciones: 0,00 px (Chromium y Firefox) y ≤ 0,01 px (WebKit). A los 60 ms, Chromium muestra de 0,6 a 3,4 px (se está deslizando). Firefox y WebKit ya están en 0: **saltan sin deslizarse** | Se desliza en Chromium; salta y queda en su lugar en Firefox y WebKit |

### Comprobaciones

- `pnpm build`: sin advertencias, «Guardia de marcadores: 0 marcadores en dist/». `pnpm astro check`: 0 errores, 0 advertencias y 0 sugerencias.
- CSS compilado: `.motion-safe\:animate-entrada` y `.motion-safe\:animate-estrella` dentro de `prefers-reduced-motion: no-preference`, con `animation-delay` después del atajo `animation`.
- `document.getAnimations()`: 0 animaciones con `iterations: Infinity` en los 3 motores.
- Contraste de la píldora: blanco sobre `#007EA7`, 4,62:1; `#00131D` sobre `#00B0E8`, 7,54:1. Medido en el enlace activo: texto `--color-sobre-primario`, fondo del enlace transparente y fondo de la píldora `--color-primario`.
- Bajo 1024 px (1023 px, los 3 motores): `::after` con `content: none`, el enlace activo con fondo `--color-primario` y el menú se abre con su botón. En 360 px, ambos modos: 0 px de desborde (capturas).
- Reducir movimiento emulado (3 motores × 2 modos): `getAnimations()` vacío al cargar y después de hacer clic en U2. Las salas quedan en `block/1` en las 4 unidades, arriba y anclada. La estrella queda en `1 none none`, la credencial en `clip-path: none` y la transición de la píldora en 0 s.
- Sin JavaScript (Chromium, modo claro): 55 `<dialog>` visibles y 1 `h1`; la entrada corre igual (es CSS) y el lema termina en `opacity 1`.
- Impresión (Chromium, PDF A4): solo quedan `avance-lectura` y `aparecer`, que ya existían; la credencial queda en `clip-path: none`, las salas con `::before` en `display: none` y la píldora sin transición.
- Perfil de rendimiento (Chromium, desplazamiento con rueda de 40 × 40 px y duración de cada cuadro con `requestAnimationFrame`; traza en el scratchpad). Con CPU ×1, credencial y U2: mediana de 16,7 ms y p95 de 16,7 ms, con 1 y 4 cuadros de 33 ms (como máximo 2 seguidos; la línea base, 0). Con CPU ×4: p95 de 16,8 ms y como máximo 4 cuadros seguidos de más de 20 ms, igual que la línea base (4). No hay cuadros lentos sostenidos, así que se mantiene `clip-path`. Lighthouse marca la credencial como «animación no compuesta» (`clip-path`).
- Impeccable: `pnpm dlx impeccable@4.10.0 detect --json` sobre los 6 archivos de código tocados, con la salida en el scratchpad, dio `[]`.
- Prettier: las líneas nuevas cumplen. Los 6 avisos de `global.css` y `Portada.astro` ya estaban en `main`.
- Lighthouse 13.6.0 móvil local, 3 tandas alternadas con el mismo servidor estático. La CPU estaba ocupada por otras aplicaciones, y la línea base sola fue de 65 a 90. Todas las corridas dieron 100/96/100 en Accesibilidad, Buenas prácticas y SEO; la LCP fue el `h1` en las 21 corridas, con CLS de 0 en la rama (0,0002 en la base). Rendimiento, mediana de 9: base 73 y rama 81. En la tanda más estable: base 89 y rama 85, con TBT de 113 y 274 ms. Con este ruido, una diferencia de 4 puntos no se puede atribuir.
- `git diff -- package.json pnpm-lock.yaml src/assets src/scripts src/components/Encabezado.astro`: vacío.

## Criterios de aceptación

**Portada (E1 y E2a)**

- [x] Escalonado: lema, ficha, botón, redes, logos y 4 filas; la última termina a los 740 ms.
- [x] El `h1` tiene 0 animaciones y es el elemento LCP en las 21 corridas de Lighthouse.
- [ ] La estrella hace una sola entrada de 800 ms con 120 ms de retraso, no se repite al navegar por anclas y `src/assets` no tiene cambios. **Pero** sus valores calculados al final son `scale: 1` y `rotate: 0deg`, no `none`: el token aprobado usa `both`, que deja el último fotograma aplicado. Es el mismo dibujo. Lo dejo sin marcar hasta que el desarrollador acepte la equivalencia.
- [x] 0 animaciones infinitas.

**Instructor y unidades (E4, E7, E8 y E10)**

- [x] La credencial se revela desde abajo a la izquierda; ningún anillo de foco queda recortado.
- [x] Las salas en 3 posiciones por unidad y ambos modos: 1 / 0,542 / 0.
- [x] El número llega desde 16 px y queda en su lugar al anclar.
- [x] Destello y escala sin perder E8, por la navegación y por la ruta; capturas a los ~450 ms.
- [x] Las 4 unidades miden 823 px en 1440 × 900 (Chromium y Firefox), igual que la línea base.

**Navegación (E11)**

- [x] La píldora queda bajo el enlace activo con una diferencia de ≤ 0,01 px en los 3 motores. Se desliza solo en Chromium.
- [x] Contraste de 4,62:1 y 7,54:1.
- [x] Bajo 1024 px, el menú no cambia.

**Accesibilidad y regresiones**

- [x] Reducir movimiento: 0 animaciones nuevas y las salas encendidas.
- [x] Sin JavaScript se lee todo.
- [x] Al imprimir no hay animaciones, la credencial sale completa y las salas no tienen fondo.
- [x] 0 dependencias nuevas; JS propio de 1767 B.
- [ ] CLS < 0,1: local 0 (cumple); el publicado va en la fase B. Perfil de rendimiento sin cuadros lentos sostenidos (cumple).
- [x] Build, guardia y check; 25 de 25 prompts, 55 `<dialog>` y 1 `h1` (la iteración dice 24 y 54, pero la 07-01 ya está en `main`, como se anotó en la 06-07).
- [x] Impeccable `[]`.
- [ ] Lighthouse móvil **publicado**: fase B.

## Diferencias entre lo planificado y lo encontrado

- **Numeración de las propuestas.** La iteración llama P-030 al `DESIGN.md` de efectos, pero ese número ya era la propuesta de 1366 × 657 de la 06-07, que sigue pendiente (el `DESIGN.md` nuevo no la aplicó). Por decisión del desarrollador, el `DESIGN.md` de efectos se registró como P-031 (aplicada en `f3529ea`) y la regla 6 de `AGENTS.md` como P-032 (pendiente).
- **Atajo `animation` con línea de tiempo.** Lightning CSS fundió el atajo `animation` con `animation-timeline` en `animation: linear both revelar-credencial view()`. Chromium descarta esa declaración: la credencial quedó sin animación en la primera medición. E4, E7 y E8 se escribieron con propiedades individuales, como ya hacía la barra de lectura de la 05-07.
- **Orden del desfase.** Con `[animation-delay:…]` sin variante, la utilidad `motion-safe:animate-entrada` quedaba después y el atajo reiniciaba el retraso a 0. Se usó `motion-safe:[animation-delay:…]`, que queda en el mismo bloque y después del atajo (comprobado en el CSS compilado).
- **E11, especificidad.** La regla de la píldora va fuera de las capas de Tailwind, así que le gana a `aria-[current=true]:bg-primario` sin cambiar `Encabezado.astro`. Es la forma más simple de las que proponía la iteración.
- **Redes.** `Redes.astro` solo recibe clases, así que su posición va como `[--orden:3]` en la clase y no en `style`. El componente no cambió.
- **WebKit.** Las unidades miden 866 / 894 / 795 / 817 px en 1440 × 900, igual en la línea base y en la rama: es un problema que ya existía en el WebKit de Playwright para Windows, no de esta iteración. Además, WebKit empieza los tramos de `view()` unos 150 px más tarde. Le pasa también a la aparición de las tarjetas de la 05-07; los estados finales son correctos.
- **Móvil.** Una unidad mide más que la pantalla, así que al anclarla en 360 px la sala está al 93 % (0,928) y llega a 1 apenas se baja un poco.

## No se pudo verificar

- Lighthouse publicado y CLS publicado: después del merge (fase B).
- Lector de pantalla (NVDA o VoiceOver): no lo usé. `.numero-unidad` sigue `aria-hidden` y no cambió ningún nombre accesible.
- Safari real en macOS o iOS: solo el WebKit de Playwright en Windows.

## Revisión manual del desarrollador

- En tu notebook: la entrada de la portada, la credencial al bajar, las salas, el aterrizaje (clic en U2 y en la fila 3) y la píldora en Chrome y en Firefox (en Firefox salta).
- Fila de logos: la sección 7.1 de `DESIGN.md` la incluye en la entrada, y la 7.4 dice que los logos de Google, GTD y Capacita «no se animan». Implementé la 7.1 (la fila aparece con opacidad y 8 px, sin tocar los logos). Si la 7.4 manda, basta con quitar `claseEntrada` de esa fila.
- Durante los 300 ms del deslizamiento en Chromium, el texto del enlace recién activo puede pasar un instante sobre la píldora a medio camino. En reposo, el contraste es el de la tabla.

## Decisiones tomadas

- Del desarrollador (2026-11-23): renumerar a P-031 y P-032, y dejar la 06-07 Terminada por su merge en `main` (`b281ecf`).
- Técnicas: longhands para las animaciones con línea de tiempo; reglas de E4 a E11 fuera de las capas; utilidades compartidas en `src/lib/movimiento.ts`; se mantiene `clip-path` (sin cuadros lentos sostenidos).

## Pendientes y riesgos

- Fase B: Lighthouse móvil publicado (mediana de 3), `bitacora-06-cierre-06-08.md` y revisión de la 07-01 contra el cierre.
- **Rendimiento de E1.** La entrada escalonada suma unos 30 recálculos de estilo al cargar: con CPU ×4, el estilo pasa de 192 a 293 ms y las tareas, de 988 a 1223 ms. Sin E1, vuelve a la línea base. Lighthouse local no distingue el efecto por el ruido, pero en la tanda más estable el TBT pasó de 113 a 274 ms. Si el publicado cae más de 2 puntos, las opciones son: aceptarlo, o reducir E1 (menos elementos o la misma posición para varios). Cualquiera de las dos es una decisión del desarrollador, porque cambia lo aprobado.
- P-030 y P-032 pendientes.
- Criterio de la estrella: falta que el desarrollador acepte la equivalencia `1`/`0deg` = `none`.

## Revisión

- **Resultado frente al objetivo:** cumplido en lo local. Hay un solo momento focal (la portada), movimiento que explica el recorrido (credencial, salas, número) y continuidad al navegar (aterrizaje y píldora). Todo con 0 dependencias y 0 bytes de JavaScript nuevo, y apagado con reducir movimiento. Falta el Lighthouse publicado.
- **Qué aprendimos:**
  - El minificador puede convertir en inválida una declaración válida: toda animación con línea de tiempo va en propiedades individuales, y se comprueba con `getAnimations()`, no solo leyendo el CSS.
  - En Tailwind v4, una utilidad con variante queda después de una sin variante: el desfase debe llevar la misma variante que el atajo.
  - Una entrada escalonada de composición igual cuesta en el hilo principal, porque cada inicio y cada fin piden recalcular el estilo.
- **Qué cambia para lo que sigue:** la fase B debe comparar el Rendimiento publicado con el 99 del cierre de la épica 06 y decidir sobre E1 si cae más de 2 puntos. El problema de WebKit en las unidades (que ya existía) queda anotado para la épica 07.

## Commit sugerido

`Épica 6 - Iteración 06-08: entrada de la portada y la estrella, credencial revelada, salas que se encienden, aterrizaje y píldora deslizante en CSS nativo, P-031 y P-032`
