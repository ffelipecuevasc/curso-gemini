# Iteración 06-08 · Efectos de movimiento: entrada de la portada, unidades que se encienden y navegación continua

- **Épica:** 06 · Pulido de identidad: portada, unidades y modales (reabierta el 2026-11-23)
- **Estado:** En revisión
- **Rama sugerida:** iteracion/06-08-efectos-movimiento
- **Depende de:** 06-07 terminada (con merge en `main`), P-030 aplicada por el desarrollador
- **Especificación:** —
- **RDA relacionadas:** RDA-004, RDA-007, RDA-011, RDA-014

## Objetivo

Dar al sitio un solo momento focal y movimiento que explique el recorrido, sin decoración gratuita. La portada entra con autoría (la estrella de Gemini incluida). Cada unidad «se enciende» cuando estás en ella. Al saltar por la navegación, la página confirma adónde llegaste y la píldora activa se desliza en vez de saltar. Todo en CSS nativo de Tailwind v4, con 0 dependencias y 0 bytes de JavaScript nuevo, y apagado con `prefers-reduced-motion`.

## Punto de partida

Se verifica en la tarea 1 leyendo el código, porque depende de cómo quedó la 06-07.

- **Movimiento que ya existe y no se toca:**
  - el revelado circular del cambio de modo;
  - la transición de la tarjeta al modal (View Transitions);
  - la barra de lectura de 3 px;
  - la aparición escalonada de las tarjetas de bloque con `view()`;
  - el brillo que sigue al cursor;
  - la subida de 4 px de las tarjetas;
  - el visto al copiar;
  - el giro de 20° del ícono de modo en hover;
  - el hover de las filas de la ruta (06-07).
- **Tokens de movimiento:** `--ease-expo-out`, `--duracion-hover` y `--duracion-modal` en el `@theme` de `global.css`.
- **Elementos que se animan** (estructura de la 06-07):
  - en `Portada.astro`: lema, ficha, botón, redes y fila de logos;
  - en `RutaCurso.astro` y `FilaRuta.astro`: las filas de la ruta y el SVG de Gemini;
  - en `Instructor.astro`: `.credencial`;
  - en `SeccionUnidad.astro`: `.seccion-unidad` y `.sala-unidad`;
  - en `CabeceraUnidad.astro`: `.cabecera-unidad` y `.numero-unidad`;
  - en `Encabezado.astro`: `#menu-principal` y sus enlaces con `aria-current`.
- **Soporte verificado el 2026-11-23:**
  - las animaciones ligadas al desplazamiento (`animation-timeline`) son Baseline desde octubre de 2026 (Chrome 115, Safari 26 y Firefox 159);
  - CSS Anchor Positioning es Baseline desde enero de 2026 (Firefox 147).
- **Línea base:** Lighthouse móvil publicado y JavaScript propio, tal como los deje la bitácora de la 06-07.

## Alcance y entregables

### 1. Tokens y utilidades (`global.css`, `@theme`)

```css
--duracion-entrada: 500ms;
--duracion-estrella: 800ms;
--escalonado: 60ms;
--animate-entrada: entrada var(--duracion-entrada) var(--ease-expo-out) both;
--animate-estrella: estrella var(--duracion-estrella) var(--ease-expo-out) 120ms both;

@keyframes entrada {
  from { opacity: 0; translate: 0 8px; }
}
@keyframes estrella {
  from { opacity: 0; scale: 0.6; rotate: -45deg; }
}
```

- Los fotogramas solo declaran `from`: el estado final es el estilo normal del elemento. Sin animación (reducir movimiento o impresión), todo se ve desde el inicio.
- En los componentes se usan con la variante `motion-safe:` (`motion-safe:animate-entrada`), así reducir movimiento los apaga sin reglas extra.
- El desfase va con una propiedad por elemento: `style="--orden: n"` más `[animation-delay:calc(var(--orden)*var(--escalonado))]`. La estrella no la usa, porque su retraso de 120 ms va en el token.

### 2. E1 · Entrada escalonada de la portada

- `motion-safe:animate-entrada` con `--orden` en:
  - **columna de texto:** lema (0), ficha (1), botón «Conoce a tu instructor» (2), redes (3) y fila de logos (4);
  - **ruta:** cada `li` del índice, con `--orden` igual al número de la unidad (1 a 4).
- **No se animan:** el `h1` (elemento LCP), el `h2` «Ruta del curso», el círculo decorativo ni la nota «Cada clase · 120 min».
- La secuencia termina antes de 800 ms (4 × 60 ms + 500 ms = 740 ms).

### 3. E2a · Entrada única de la estrella de Gemini

- `motion-safe:animate-estrella` en el SVG de Gemini de `RutaCurso.astro`.
- No se tocan su `mask`, sus `filter`, sus colores ni sus identificadores.
- `transform-origin: center` (`origin-center`), para que el giro no la desplace.

### 4. E4 · Credencial que se revela desde la esquina asimétrica

```css
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .credencial {
      animation: revelar-credencial linear both;
      animation-timeline: view();
      animation-range: entry 0% entry 60%;
    }
  }
}
@keyframes revelar-credencial {
  from { clip-path: circle(0% at 0% 100%); }
  to { clip-path: circle(150% at 0% 100%); }
}
```

- Comprueba que, al final del tramo, ningún anillo de foco de las acciones quede recortado (navega con Tab y mira la captura).

### 5. E7 · Sala que se enciende

- `SeccionUnidad.astro` y `colores-unidad.ts`: el mapa `salaUnidad` publica `[--sala:var(--color-sala-uN)]` en vez de `bg-sala-uN`.
- `.sala-unidad` pasa a `position: relative; isolation: isolate` y pierde su fondo. El tinte va en `.sala-unidad::before` (`content: ""; position: absolute; inset: 0; z-index: -1; border-radius: inherit; background: var(--sala)`).
- `.seccion-unidad` declara `view-timeline: --unidad block`.

```css
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .sala-unidad::before {
      animation: encender-sala linear both;
      animation-timeline: --unidad;
      animation-range: cover 0% cover 100%;
    }
  }
}
@keyframes encender-sala {
  0%, 100% { opacity: 0; }
  25%, 75% { opacity: 1; }
}
```

- Se anima solo `opacity` (compuesto por la tarjeta gráfica). El `@supports` de `color-mix()` de la 06-07 se conserva: sin `color-mix`, `--sala` vale `--color-superficie`.
- Al imprimir: `.sala-unidad::before { display: none }`.

### 6. E8 y E10 · Número que llega y aterrizaje

```css
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .numero-unidad {
      animation: llegar-numero linear both;
      animation-timeline: --unidad;
      animation-range: entry 0% entry 50%;
    }
    .seccion-unidad:target .numero-unidad {
      animation-name: llegar-numero, aterrizar-numero;
      animation-duration: auto, 700ms;
      animation-timing-function: linear, var(--ease-expo-out);
      animation-delay: 0s, 350ms;
      animation-fill-mode: both, both;
      animation-timeline: --unidad, auto;
      animation-range: entry 0% entry 50%, normal;
    }
  }
  .seccion-unidad:target .cabecera-unidad {
    animation: aterrizar-cabecera 900ms var(--ease-expo-out) 350ms both;
  }
}
@keyframes llegar-numero {
  from { opacity: 0; translate: 0 16px; }
}
@keyframes aterrizar-numero {
  from { scale: 1.18; }
}
@keyframes aterrizar-cabecera {
  0% { box-shadow: 0 0 0 0 color-mix(in oklab, var(--bloque) 50%, transparent); }
  20% { box-shadow: 0 0 0 6px color-mix(in oklab, var(--bloque) 50%, transparent); }
  100% { box-shadow: 0 0 0 14px color-mix(in oklab, var(--bloque) 0%, transparent); }
}
```

- El aterrizaje de la cabecera queda fuera del `@supports` de `view()`, porque es una animación por tiempo. Solo el número usa la línea de tiempo.
- `.numero-unidad` es `aria-hidden`: su animación no afecta a los lectores de pantalla.

### 7. E11 · Píldora activa que se desliza

En `Encabezado.astro` y `global.css`, solo desde 1024 px:

```css
@media (min-width: 64rem) {
  @supports (anchor-name: --a) {
    #menu-principal { position: relative; isolation: isolate; }
    #menu-principal a[aria-current="true"] {
      anchor-name: --pildora-activa;
      background-color: transparent;
    }
    #menu-principal::after {
      content: "";
      position: absolute;
      position-anchor: --pildora-activa;
      inset: anchor(top) anchor(right) anchor(bottom) anchor(left);
      z-index: -1;
      border-radius: var(--radius-pildora);
      background-color: var(--color-primario);
      opacity: 0;
    }
    #menu-principal:has(a[aria-current="true"])::after { opacity: 1; }
  }
}
@media (min-width: 64rem) and (prefers-reduced-motion: no-preference) {
  @supports (anchor-name: --a) {
    #menu-principal::after {
      transition:
        inset 300ms var(--ease-expo-out),
        opacity 150ms ease-out;
    }
  }
}
```

- Las utilidades de los enlaces que pintan el fondo de la píldora activa (`aria-[current=true]:bg-primario`, `…:hover:bg-primario`, `…:active:bg-primario`) quedan anuladas por la regla de arriba solo cuando hay soporte y desde 1024 px. El texto sigue en `--color-sobre-primario`. Si la especificidad no alcanza, se mueven esas utilidades a una clase con variante `max-lg:` o se usa `@supports not (anchor-name: --a)` para ellas. Elige la forma más simple que pase los criterios y anótala en la bitácora.
- La capa va en `::after` y no en `::before`: el ancla tiene que estar antes que el elemento posicionado en el orden del árbol, y `::before` quedaría antes de los enlaces.
- Si un navegador no anima el cambio de ancla, la píldora debe saltar sin fallar: siempre bajo el enlace activo y con el texto legible.
- El menú móvil (menos de 1024 px) no cambia.

### 8. Impresión

- `@media print`: `animation: none !important` y `transition: none !important` en los elementos de esta iteración. `.sala-unidad::before` queda sin mostrar, como dice el punto 5.

## Contenido aprobado (copiar tal cual)

- Ninguno: la iteración no agrega ni cambia textos.

## Decisiones del desarrollador

- 2026-11-23: el paquete de efectos es E1, E2a, E4, E7, E8, E10 y E11 (paquete recomendado en la sesión de diseño con demo interactiva).
- 2026-11-23: la estrella de Gemini lleva solo una entrada única (E2a). Quedan descartados el giro ligado al desplazamiento (E2b) y cualquier animación continua (E2c).
- 2026-11-23: CSS nativo con utilidades de Tailwind v4 en `@theme`, sin el plugin `tailwind-animations` ni otra dependencia.
- 2026-11-23: quedan fuera E3 (círculo de la portada), E5 (cifras), E6 (insignia), E12 (sombra del encabezado) y E14 (anillo de foco). Se registran como propuestas fuera de alcance.

## Plan técnico

| Archivo | Cambio |
| :------ | :----- |
| `src/styles/global.css` | Tokens y `--animate-*` en `@theme`; `@keyframes` `entrada`, `estrella`, `revelar-credencial`, `encender-sala`, `llegar-numero`, `aterrizar-numero` y `aterrizar-cabecera`; reglas de E4, E7, E8, E10 y E11; capa `::before` de la sala; impresión. |
| `src/components/Portada.astro` | `motion-safe:animate-entrada` y `--orden` en los 5 elementos de la columna de texto. |
| `src/components/RutaCurso.astro` y `FilaRuta.astro` | `motion-safe:animate-estrella origin-center` en Gemini; `motion-safe:animate-entrada` y `--orden` en cada fila. |
| `src/components/SeccionUnidad.astro` y `src/lib/colores-unidad.ts` | `--sala` en lugar de `bg-sala-uN`. |
| `src/components/Encabezado.astro` | Solo si hace falta para la píldora (ver el punto 7). El script no cambia. |

- **JavaScript:** ninguno nuevo. Ni `efectos.ts` ni `modal.ts` ni el script del encabezado cambian.
- **Rendimiento:** solo propiedades que compone la tarjeta gráfica, salvo `clip-path` (E4) y el `box-shadow` único de E10. Mide E4 con un perfil de rendimiento de Chrome. Si el desplazamiento sobre la credencial pasa de 16 ms por cuadro de forma sostenida, cambia el `clip-path` por un `mask-image` radial animado y anótalo.
- **CLS:** las animaciones usan `translate`, `scale` y `opacity` y no mueven el layout; el CLS no debe cambiar.
- **Estándares de `AGENTS.md`:** tokens en vez de valores sueltos, cero dependencias, accesibilidad AA y presupuesto de rendimiento.

## Tareas

1. **Línea base y documentos (antes de tocar el código):**
   - Lee cómo quedó la 06-07 en el código y en su bitácora.
   - Mide Lighthouse móvil local (mediana de 3), el JavaScript propio y el elemento LCP.
   - Comprueba con `grep` que el desarrollador aplicó la P-030: en `DESIGN.md` deben estar «### 7.1 Momento focal», «--duracion-estrella» y «Píldora que se desliza».
   - Registra la P-030 como «Aplicada {fecha}» y la P-031 (texto abajo) como «Pendiente» en `propuestas-documentos-protegidos.md`.
   - Agrega la 06-08 a la tabla de `definicion-epica-06.md` y la marca «En curso» en `registro-pendientes.md`. Si la épica 06 ya se había cerrado otra vez al terminar la 06-07, reábrela con una línea fechada.
2. **Tokens y utilidades:** `@theme` y `@keyframes` del punto 1 del alcance. Confirma en el CSS compilado que existen `.animate-entrada` y `.animate-estrella`.
3. **Portada (E1 y E2a):** clases y `--orden` en `Portada.astro`, `RutaCurso.astro` y `FilaRuta.astro`.
4. **Credencial (E4):** regla, `@keyframes` y revisión de los anillos de foco.
5. **Unidades (E7, E8 y E10):** `--sala` y `::before`, `view-timeline` en la sección, reglas del número y del aterrizaje.
6. **Navegación (E11):** píldora con anchor positioning y su comportamiento sin soporte.
7. **Verificación** (criterios de abajo):
   - en Chromium, Firefox y WebKit (Playwright), en ambos modos;
   - con reducir movimiento, sin JavaScript y en impresión;
   - Impeccable (`pnpm dlx impeccable@4.10.0 detect --json` sobre los archivos tocados, salida fuera del repositorio);
   - perfil de rendimiento de Chrome sobre la credencial y una unidad;
   - Lighthouse móvil local.
8. **Bitácora y cierre:**
   - Escribe `bitacoras/bitacora-06-08.md` y actualiza el registro: estado, backlog, propuestas fuera de alcance (E3, E5, E6, E12 y E14) e historial.
   - Deja la 06-08 «En revisión» y propone el commit.
   - Después del merge, mide Lighthouse móvil publicado (mediana de 3) y escribe `bitacoras/bitacora-06-cierre-06-08.md` con el cierre de la épica 06. Cubre la 06-07 y la 06-08; si ya existe `bitacora-06-cierre-06-07.md`, esta la complementa sin editarla.
   - Como en la sección 4.4, paso 5, del README de planificación, revisa la 07-01 contra el cierre sin regenerar la épica 07.

## Tareas del desarrollador

1. Antes de empezar, reemplazar `DESIGN.md` por la versión entregada en la sesión de efectos (P-030) y hacer commit en `main`. Esa versión ya incluye todo lo de la 06-07.
2. Aprobar la rama `iteracion/06-08-efectos-movimiento`.
3. Revisar la entrada de la portada, la credencial, las salas, el aterrizaje y la píldora en su notebook. Después del merge, revisar el sitio en un teléfono y confirmarlo con fecha.
4. Decidir la P-031 (precisión de la regla 6 de `AGENTS.md`).

## Criterios de aceptación

### Portada (E1 y E2a)

- [ ] Al cargar en 1440 × 900, el lema, la ficha, el botón, las redes, los logos y las 4 filas aparecen escalonados, y la secuencia termina antes de 800 ms: `document.getAnimations()` mide la suma de `delay` y `duration` de cada una.
- [ ] El `h1` no tiene animación (`h1.getAnimations().length === 0`) y sigue siendo el elemento LCP.
- [ ] La estrella hace una sola entrada (opacidad, escala y giro) en 800 ms con 120 ms de retraso y termina con `opacity: 1`, `scale: none` y `rotate: none` calculados. Navegar por anclas no la repite. `git diff --stat -- src/assets` está vacío.
- [ ] Ninguna animación de la iteración es infinita: `document.getAnimations()` no tiene ninguna con `iterations: Infinity`.

### Instructor y unidades (E4, E7, E8 y E10)

- [ ] La credencial se revela desde abajo a la izquierda mientras entra en vista; en su estado final no recorta ningún anillo de foco (captura con Tab).
- [ ] Al anclar `#unidad-n` bajo el encabezado, el `::before` de su sala tiene `opacity` calculada de 1. A media pantalla de salir, baja; fuera de la vista, es 0. Se comprueba con `getComputedStyle(sala, '::before').opacity` en 3 posiciones por unidad, en ambos modos.
- [ ] El número de la cabecera llega desde 16 px más abajo al entrar la unidad y queda en su lugar al anclarla.
- [ ] Al hacer clic en U2 en la navegación y en la fila 3 de la ruta, la cabecera de destino muestra el destello del color de su unidad una vez (captura a los ~450 ms) y el número hace su escala sin perder la llegada de E8.
- [ ] Una unidad en una pantalla se mantiene: en 1440 × 900, cada `.seccion-unidad` mide ≤ 823 px, igual que al cierre de la 06-07.

### Navegación (E11)

- [ ] Desde 1024 px, al recorrer la página, la píldora de color queda bajo el enlace `aria-current` (diferencia de `getBoundingClientRect` ≤ 1 px) en Chromium, Firefox y WebKit. Si en alguno no se desliza, la bitácora lo dice y la píldora igual queda en su lugar.
- [ ] El texto de la píldora activa conserva su contraste (`--color-sobre-primario` sobre `--color-primario`, 4,62:1 en claro y 7,54:1 en oscuro).
- [ ] Bajo 1024 px, el menú se ve y funciona igual que antes.

### Accesibilidad y regresiones

- [ ] Con `prefers-reduced-motion: reduce` (emulado), ninguna de las animaciones nuevas existe (`document.getAnimations()` sin `entrada`, `estrella`, `revelar-credencial`, `encender-sala`, `llegar-numero` ni `aterrizar-*`), todo se ve en su estado final y las salas quedan encendidas.
- [ ] Sin JavaScript, en modo claro, la página se lee completa (la entrada de la portada corre igual porque es CSS).
- [ ] Al imprimir, no hay animaciones, la credencial se ve completa y las salas van sin fondo.
- [ ] 0 dependencias nuevas (`git diff -- package.json pnpm-lock.yaml` vacío) y JavaScript propio igual que al cierre de la 06-07.
- [ ] CLS < 0,1 (local y publicado). El perfil de rendimiento sobre la credencial y una unidad no muestra cuadros de más de 16 ms sostenidos.
- [ ] `pnpm build` sin advertencias y con la guardia en 0 marcadores; `pnpm astro check` 0/0/0; 24 de 24 prompts; 54 `<dialog>`; 1 `h1`.
- [ ] Impeccable: `[]`, o cada hallazgo justificado en la bitácora.
- [ ] Lighthouse móvil publicado, mediana de 3: cada categoría a 2 puntos o menos de la medición de cierre de la 06-07; el elemento LCP sigue siendo el `h1`.

## P-031 (texto para `propuestas-documentos-protegidos.md`)

- **Documento:** `AGENTS.md`
- **Sección:** 8. Reglas de contenido, regla 6
- **Por qué:** la regla dice que los logos de Google y Gemini «no se modifican». La 06-08 agrega una entrada única animada a la estrella de Gemini, aprobada por el desarrollador el 2026-11-23, que termina en su forma, tamaño y colores originales. Sin esta precisión, un agente podría leer la animación como una modificación y quitarla.

**Texto actual** (copiar literalmente de `AGENTS.md` al registrarla y comprobar que siga igual):

```text
6. El sitio nunca afirma ni sugiere respaldo de Google, GTD o Capacita Tu Futuro más allá de la redacción que entregue el cliente. Los logotipos de Google y Gemini identifican las herramientas que se enseñan; no se modifican, no se recolorean y no se presentan como sello o alianza.
```

**Texto propuesto:**

```text
6. El sitio nunca afirma ni sugiere respaldo de Google, GTD o Capacita Tu Futuro más allá de la redacción que entregue el cliente. Los logotipos de Google y Gemini identifican las herramientas que se enseñan; no se modifican, no se recolorean y no se presentan como sello o alianza. La única excepción de movimiento es la entrada única de la estrella de Gemini descrita en `DESIGN.md` (sección 7.1): ocurre una vez al cargar y termina en su forma, tamaño y colores originales. Ningún otro logotipo se anima.
```

## Riesgos

- **Anchor positioning sin transición en algún motor.** Se mitiga con la píldora que salta sin fallar y lo detecta el criterio de E11 en los 3 motores.
- **`clip-path` caro en equipos modestos.** Se detecta con el perfil de rendimiento y se mitiga con `mask-image` (plan técnico).
- **El `:target` repetido no vuelve a disparar el aterrizaje** (mismo hash). Es aceptable: el destello confirma el salto, no la llegada repetida.
- **El LCP podría moverse si alguna utilidad cae sobre el `h1` por error.** Lo detecta el criterio del `h1` sin animaciones.

## Fuera de alcance

- E2b, E2c, E3, E5, E6, E12 y E14 (descartados o pospuestos por el desarrollador el 2026-11-23).
- Cualquier animación infinita, parallax, fondo animado o efecto sobre otros logotipos o la insignia.
- Cambios de diseño, textos, colores o tokens que no sean de movimiento.
- Dependencias nuevas y JavaScript nuevo.

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Aplicar la P-030 (`DESIGN.md` de la sesión de efectos) antes de la tarea 1.
- Decidir la P-031.