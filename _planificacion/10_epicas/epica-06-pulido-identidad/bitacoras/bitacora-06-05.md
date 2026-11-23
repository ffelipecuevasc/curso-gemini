# Bitácora 06-05 · Modales y citas

- **Fecha:** 2026-11-22
- **Agente:** Claude Code (Opus 5.5)
- **Rama:** iteracion/06-05-modales
- **Estado final:** En revisión

## Resumen

El modal de detalle lleva ahora solo el título del bloque, sin «Detalle ·». Bajo el título hay una línea de datos en IBM Plex Mono («Bloque n · m min · Unidad u» o «Cierre · m min · Unidad u»), que comparte con el modal de prompts. El resumen se muestra como entradilla de 19 px en `--color-texto`, con una línea de 1 px debajo, y se borró el párrafo suelto de los minutos. La cita (`blockquote`) dejó el borde lateral y pasó a ser un panel `--color-superficie` con la esquina asimétrica. No hay JavaScript nuevo y `modal.ts` no cambió.

Paso 0: el desarrollador dio por terminada la 06-04 (2026-11-22) y dejó el borde del ticket como está. La P-027 está aplicada en `DESIGN.md` de la rama: lo comprobé con `grep` («una línea de datos en IBM Plex Mono» en la fila «Modal») y el cambio aún no tiene commit.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `src/components/Modal.astro` | Prop opcional `meta` (`<p>` en `font-codigo text-sm text-texto-2`) bajo el título, dentro de un `div.min-w-0`; título `text-xl sm:text-2xl`; la descripción usa `.entradilla-modal` y conserva `id="{id}-desc"` y `aria-describedby`. |
| `src/components/ModalesBloque.astro` | `meta` calculada una vez a partir de `numero` (o «Cierre» si no hay número); detalle con `titulo={titulo}`; prompts con «Prompts · {titulo}» y la misma `meta`; se borró el párrafo «{minutos} min». |
| `src/styles/global.css` | Nueva `.entradilla-modal` (19 px, 1,55, 65ch, `--color-texto`, borde inferior de 1 px `--color-linea`); `.contenido-bloque blockquote` sin `border-left`, con fondo `--color-superficie`, radio `1rem 1rem 1rem 0.375rem`, relleno de 0,75 × 1 rem y `--color-texto`. |
| `_planificacion/…` | Iteraciones 06-04 y 06-05, definición, registro, archivo y P-027. |

## Verificación

Fase 1 (línea base, medida por el desarrollador en Edge/Chrome, modo claro):

| Modal | 1440 × 900 | 361 × 740 |
| :---- | :--------- | :-------- |
| Detalle `u1-bloque-1` | 429 (cuerpo 360/360) | 544 (cuerpo 468/468) |
| Prompts | 629 (cuerpo 556/556) | `u1-bloque-4`: 680 (cuerpo 581/764, con desplazamiento) |

En el plan estimé que, en 361 × 740, el detalle crecería unos +56 px (≈ 600 de 708 px, cuerpo ≈ 500 de 629, sin desplazamiento) y el de prompts unos +24 px (≈ 704 de 708, con el desplazamiento ya dentro del cuerpo). **Son estimaciones; los altos después del cambio no se midieron** (ver «No se pudo verificar»).

Medido por el agente con un script de Node fuera del repositorio, sobre `dist/index.html`:

- Títulos «Detalle ·»: 26 → **0**.
- Modales de bloque: 39 (26 de detalle y 13 de prompts), **39 con meta** que calza con `^(Bloque \d+|Cierre) · \d+ min · Unidad \d$` (3 con «Cierre», uno por cada cierre de U2 a U4) y **0 «n min» sueltos**.
- `.entradilla-modal`: 26; `aria-describedby`: 54 (sin cambios).
- `<dialog>`: 54 · `h1`: 1 · prompts: **24 de 24 idénticos** a su fuente YAML.
- JavaScript propio (gzip nivel 9 de las 6 etiquetas en línea concatenadas): **1774 B**, sin cambios.
- Contraste (fórmula WCAG con los HEX de `global.css`):

| Par | Claro | Oscuro |
| :-- | :---- | :----- |
| Entradilla: `--color-texto` / `--color-fondo` | 18,90:1 | 18,90:1 |
| Cita: `--color-texto` / `--color-superficie` | 16,71:1 | 16,69:1 |
| Meta: `--color-texto-2` / `--color-fondo` | 12,04:1 | 16,71:1 |

- Impeccable 4.10.0 (`pnpm dlx impeccable@4.10.0 detect --json src/`, salida en el scratchpad): `[]`, **0 `side-tab`**.
- `pnpm build`: sin advertencias; «Guardia de marcadores: 0 marcadores en dist/».
- `pnpm astro check`: 0 errores, 0 advertencias, 0 sugerencias.
- `git diff --stat -- src/assets`: vacío.

## Criterios de aceptación

- [x] 0 títulos «Detalle ·» en `dist/index.html` (antes 26).
- [x] 39 de 39 modales de bloque con línea de datos; 0 «min» sueltos.
- [x] Impeccable sin `side-tab` (`[]`).
- [x] Contraste de la entradilla y de la cita en ambos modos ≥ 16,69:1 (AAA).
- [x] Sin JavaScript, el título, la meta y la entradilla están dentro del `<dialog>`, y la regla «Modales sin JavaScript» de `global.css` no cambió. Lo revisé en el HTML y el CSS, no en el navegador.
- [x] Regresiones: build con guardia sin advertencias, check 0/0/0, 24 de 24 prompts, 0 B de JS nuevo.

## Diferencias entre lo planificado y lo encontrado

- Los 6 bloques sin tarjeta son 3 bloques 0 («Antes de empezar», U2 a U4) y 3 cierres; la U1 no tiene ninguno de los dos. Con el texto aprobado, los bloques 0 muestran «Bloque 0 · 5 min · Unidad u». Lo dejé así y lo registré como duda en «Decisiones por tomar».
- La tarea 1 pedía capturas en 390 × 844. La línea base se tomó con el fragmento de consola en 1440 × 900 y 361 × 740, a pedido del desarrollador.

## No se pudo verificar

- Los altos de los modales después del cambio, en 1440 × 900 y 361 × 740: no levanté un servidor (`pnpm preview` lo corre el desarrollador). Se pueden medir con el mismo fragmento de la Fase 1, cambiando el filtro del detalle por `modal-u1-bloque-1-detalle`.
- Lector de pantalla, transición de tarjeta a modal, hoja completa en móvil y revisión visual en ambos modos: a cargo del desarrollador, como se acordó.

## Revisión manual del desarrollador

- Lector: cada modal se anuncia con su título y con la entradilla como descripción, y «Ver detalle de «título»» sigue diciendo qué abre.
- La transición sale desde la tarjeta clicable de la 06-04.
- En 361 × 740, el detalle cabe sin desplazamiento y el de prompts de `u1-bloque-4` se desplaza solo dentro del cuerpo.
- La cita con la esquina inferior izquierda de 0,375 rem en ambos modos.

## Decisiones tomadas

- La meta y el título van envueltos en un `div.min-w-0`, para que el botón «Cerrar» quede a la derecha sin tocar `.modal-cabecera`.
- La entradilla usa una clase de `@layer components` y no utilidades sueltas, porque se repite en 26 modales.
- Ninguna RDA nueva.

## Pendientes y riesgos

- Confirmar «Bloque 0 · …» o dar otro texto para los bloques 0.
- El modal de prompts de `u1-bloque-4` en 361 × 740 queda cerca del tope (≈ 704 de 708 px, estimado). Si se pasa, el cuerpo se encoge (`min-h-0`) y el modal sigue cabiendo.
- La P-028 queda para la 06-06.

## Revisión

- **Resultado frente al objetivo:** cumplido en lo medible. El detalle se lee como un artículo (título, datos y entradilla) y la cita es parte de la marca. Falta la revisión visual y con lector del desarrollador.
- **Qué aprendimos:** «sin número» no equivale a «cierre»: el esquema admite `numero: 0`, que usan los bloques «Antes de empezar». Toda etiqueta derivada de `numero` debe contemplar el 0.
- **Qué cambia para lo que sigue:** la 06-06 debe medir los altos de los modales después del cambio y resolver el texto del bloque 0 si el desarrollador lo cambia.

## Commit sugerido

`Épica 6 - Iteración 06-05: modal de detalle con el título del bloque, línea de datos en IBM Plex Mono y entradilla de 19 px; cita como panel sin borde lateral`
