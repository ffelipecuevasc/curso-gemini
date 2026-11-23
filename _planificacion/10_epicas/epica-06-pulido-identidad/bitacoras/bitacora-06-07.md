# Bitácora 06-07 · Recorrido de la página: instructor primero, ruta como índice, unidades en salas y firma del OTEC

- **Fecha:** 2026-11-23
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/06-07-recorrido-instructor-ruta-salas (creada por el desarrollador desde `main` en `e489e64`, sin diferencias con `main` y con el árbol limpio al empezar)
- **Estado final:** En revisión (fase A, local). La fase B, con Lighthouse publicado y el cierre de la épica reabierta, va después del merge.

## Resumen

La página sigue ahora el recorrido de la RDA-014: portada → instructor → U1 a U4 → pie. Los cambios:

- La portada lleva «Conoce a tu instructor» y la ruta es un índice de 4 filas con la nota «Cada clase · 120 min».
- El instructor es una credencial con la insignia, las 3 cifras de `instructor.yaml` y «Empezar por la Unidad 1».
- Cada unidad vive en una sala teñida, con `--espacio-unidades` entre una y otra.
- El pie lleva la etiqueta «Organismo Técnico de Capacitación» y el logo de Capacita en `--color-primario`.

No hay dependencias nuevas ni JavaScript nuevo: el JS propio baja 7 B. Dos criterios de 1366 × 657 no se cumplen; el desarrollador los aceptó como desviaciones.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `src/pages/index.astro` | Orden Portada → Instructor → unidades; navegación Ruta, Instructor, U1 a U4 |
| `src/components/Portada.astro` | «Conoce a tu instructor» a `#instructor`; logo de Capacita con `text-primario` |
| `src/components/Instructor.astro` | Credencial (insignia, vigencia, etiqueta, nombre, certificación, resumen, 3 acciones y cifras); el modal pierde la insignia |
| `src/content.config.ts`, `src/content/instructor.yaml` | Campo `cifras` (3 elementos, `valor` y `texto`), con el texto aprobado |
| `src/components/RutaCurso.astro`, `FilaRuta.astro` (nuevo), `BloqueUnidad.astro` (borrado) | Índice `ol.indice-ruta`, Gemini de 48/56 px y nota calculada que hace fallar el build si las duraciones difieren |
| `src/components/SeccionUnidad.astro`, `src/lib/colores-unidad.ts` | `.sala-unidad` con el mapa `salaUnidad` |
| `src/components/Pie.astro` | Dos zonas, etiqueta y logo de 48 px |
| `src/components/Redes.astro` | El texto de LinkedIn puede partirse (`wrap-anywhere`) para no desbordar en 360 px |
| `src/styles/global.css` | Tokens `--color-placa`, `--color-linea-fuerte`, `--color-sala-u1` a `u4` (y en oscuro) y `--espacio-unidades`; `.boton-principal` compartido; credencial, índice, sala, reglas de una pantalla, `@supports` e impresión; se borran `.tarjeta-ruta`, `.titulo-ruta`, `.numero-ruta` y sus reglas de la 05-07 |
| `src/scripts/efectos.ts` | Selector `".tarjeta"` |
| `_planificacion/…` | Reapertura de la épica 06, RDA-014, P-029 (con el hallazgo de la P-028), P-030, precondición de la épica 07, registro e iteración |

## Verificación

Método: `pnpm build` y `pnpm preview` (puerto 4340). Línea base: `git archive main` (`e489e64`) compilada y servida en el puerto 4341 desde el scratchpad. Mediciones con Playwright (`playwright-core` 1.56.1, solo en el scratchpad) y el Chrome del sistema. Alto natural: la sección con `display:block; min-height:0`, como el fragmento de la 05-08. Al terminar, los dos servidores quedaron apagados.

### Antes y después

| Medida | Línea base (`main`) | 06-07 |
| :----- | :------------------ | :---- |
| Portada 1440 × 900: alto · `bottom` del último elemento | 750 · 783 | 703 · 755,8 |
| Portada 1366 × 657: alto · `bottom` | 750 · 783 (ruta) | 703 · 755,8 (logos de la columna de texto; la ruta termina en 643) |
| Portada 390 × 844: alto · `bottom` | 1539 · 1635,9 | 1188 · 1301,4 |
| Unidades 1440 × 900, real | 823 / 823 / 823 / 823 | 823 / 823 / 823 / 823 |
| Unidades 1440 × 900, natural | 779,6 / 779,6 / 781,6 / 754,8 | 818,6 / 794,6 / 796,6 / 769,8 |
| Unidades 1366 × 657 | 779,6 / 779,6 / 781,6 / 754,8 | 818,6 (+39) / 794,6 / 796,6 / 769,8 (+15) |
| Espacio entre salas (1440 / 390) | ~25 px entre unidades | 120 / 144 px |
| `<dialog>` · prompts · `h1` | 55 · 25 · 1 | 55 · 25 de 25 idénticos a `main` · 1 |
| `id` · repetidos | 300 · 0 (06-06, antes de la 07-01) | 306 · 0 |
| JS propio (gzip 9 de las 6 etiquetas en línea) | 1774 B | **1767 B** |
| `dist/index.html` | 364 360 B (63 213 gzip) | 381 178 B (71 525 gzip) |
| CSS compilado | 49 391 B | 56 095 B |
| Lighthouse móvil local, mediana de 3 (R/A/BP/SEO) | 98/100/96/100 · LCP 1,18 s · TBT 148 ms | 98/100/96/100 · LCP 1,19 s · CLS 0,0002 · TBT 173 ms |

Las cifras son iguales en claro y en oscuro. El HTML crece por el segundo logo de Capacita incrustado: 2 SVG de 15 722 B. Lighthouse 13.6.0 con `pnpm dlx`, en 3 rondas alternadas rama/`main`: rama 98, 98 y 95; `main` 98, 97 y 98. El elemento LCP fue el `h1` en las 6 corridas. Buenas prácticas da 96 por el error CORS del beacon en localhost, como en la 06-06.

### Comprobaciones

- `pnpm build`: 0 advertencias, guardia con 0 marcadores. `pnpm astro check`: 0 errores, 0 advertencias, 0 sugerencias.
- `dist/index.html` (script de Node):
  - orden `inicio` (con `ruta`) → `instructor` → `unidad-1` a `unidad-4`;
  - navegación Ruta, Instructor, U1, U2, U3, U4;
  - encabezados: 1 `h1`, 6 `h2`, 45 `h3`, 57 `h4` y 0 saltos. El árbol empieza con `h1` → `h2` Ruta del curso → 4 `h3` → `h2` Instructor → `h3` nombre → `h3` del modal «Trayectoria completa» → `h2` Unidad 1 → `h3` de las tarjetas;
  - `tarjeta-ruta`: 0 en el HTML y 0 en el CSS;
  - 1 `img` de la insignia; «Ley 21.719 en GTD» completa en la fila 3;
  - 2 botones principales (uno en `#inicio` y otro en `#instructor`);
  - GTD con `#5F7EBA` y `#43649C`.
- `grep -c "+300" src/components/Instructor.astro` = 0. `git diff --stat -- src/assets`: vacío.
- **Prueba del build:** con U1 en `duracionMin: 125` y `holguraMin: 7` (para no activar antes la suma de la RDA-009), el build falla con «La nota «Cada clase · … min» de la ruta necesita que las 4 unidades tengan el mismo «duracionMin» (hoy: U1 125, U2 120, U3 120, U4 120)». Restauré el archivo desde sus bytes y `git diff` quedó vacío.
- **Salas (`getComputedStyle`, pintado en canvas sobre `--color-fondo`):**
  - claro: `#EBF3F7`, `#EEF8FD`, `#E7ECEE`, `#FEF9E9`;
  - oscuro: `#002230`, `#002839`, `#002839`, `#172727`;
  - coinciden con DESIGN.md 2.2 y cambian con el modo;
  - texto sobre las salas: claro 15,87 a 17,95:1 y oscuro 15,41 a 16,52:1.
- **Contrastes de DESIGN.md 2.3 en el navegador:**
  - etiqueta y certificación: claro `#00678A`/`#E4F3FF` 5,61:1; oscuro `#5DC9FF`/`#00212F` 8,95:1;
  - texto secundario de la credencial y del pie: claro 10,64:1; oscuro `#E4F3FF`/`#00212F` 14,75:1;
  - logo de Capacita: `#007EA7` en claro y `#00B0E8` en oscuro, en la portada y en el pie (`getComputedStyle(svg).color`). Contra `--color-superficie` dan 4,09:1 y 6,65:1, por encima del 3:1 que se exige a un gráfico;
  - cuadrados de la ruta: 4,62 / 7,54 / 10,64 / 8,69:1;
  - `--color-linea-fuerte` (decorativo): `#BBD2E0` en claro y `#294754` en oscuro.
- **Navegación:** al recorrer la página cada 300 px, la píldora activa pasa por Ruta → Instructor → U1 → U2 → U3 → U4.
- **Teclado (Tab):**
  - las 4 filas y las 4 acciones de la credencial reciben foco visible (`solid 2px`);
  - en la fila con foco, el fondo es `rgb(228, 243, 255)` y el cuadrado sube `0px -2px`; con reducir movimiento, `none`;
  - el modal «Trayectoria completa» abre con Enter, no tiene imágenes, se cierra con Esc y devuelve el foco a «Ver trayectoria completa».
- **Hover de la fila:** fondo de la superficie, subida de 2 px y `box-shadow: none`.
- **Sin JavaScript:** sin `data-modo` (modo claro), 0 botones visibles, 55 `<dialog>` leídos en la página (también la trayectoria), y la credencial y los 2 botones principales visibles.
- **Reducir movimiento:** `getAnimations()` = 0.
- **Impresión:** 4 salas `rgba(0, 0, 0, 0)`, trama `none` y círculo de la credencial `display: none`.
- **Desbordes:** sin desplazamiento horizontal en 360, 390, 640, 1024, 1366 y 1440 px. En 390, Gemini (48 px) queda en la fila del `h2`. En 360 corregí dos recortes dentro de la credencial: el enlace de LinkedIn y «13-10-» partido. Ahora solo sobresalen el círculo decorativo (recortado a propósito) y los `sr-only`.
- **Impeccable:** `pnpm dlx impeccable@4.10.0 detect --json` sobre los 12 archivos de código tocados, con la salida en el scratchpad, dio `[]`. `git status` sin archivos ajenos.
- **Revisión visual:** 53 capturas en 360, 640, 1024, 1366 y 1440 px, en ambos modos (portada, instructor, U1, U4, pie y ruta en 360/390). Las revisé: sin solapes ni cortes. En oscuro, la sala de la U4 tira a oliva, como preveía la iteración.

## Migraciones

- Esquema `instructor`: campo obligatorio `cifras` (`length(3)`), cargado en el mismo cambio. Para revertirlo, se quitan el campo del esquema, del YAML y del componente.

## Criterios de aceptación

**Estructura y navegación**

- [x] Orden de las secciones en `dist/index.html`: `#inicio` (con `#ruta`) → `#instructor` → `#unidad-1` a `#unidad-4`.
- [x] Navegación Ruta, Instructor, U1 a U4; la píldora activa sigue a la sección.
- [x] Portada «Conoce a tu instructor» → `#instructor`; credencial «Empezar por la Unidad 1» → `#unidad-1`; 1 principal por sección.
- [x] 1 `h1` y árbol sin saltos.

**Portada y ruta**

- [x] `<ol>` de 4 filas con cuadrado, número, nombre, mini-proyecto completo y «Clase n», más la nota «Cada clase · 120 min».
- [x] El build falla con un mensaje claro (prueba local, revertida).
- [ ] Portada sin desplazarse en 1366 × 657: **no se cumple** (755,8 > 657). En 1440 × 900 sí (755,8 ≤ 900). Desviación aceptada por el desarrollador.
- [x] 390 × 844: Gemini en la fila del `h2` y sin desbordes horizontales.
- [x] `tarjeta-ruta` = 0 en el HTML y en el CSS.

**Instructor**

- [x] Credencial completa: placa `#FFFFFF` en ambos modos, «Vigente hasta 13-10-2029», `uppercase`, cifras desde el YAML (`grep` = 0).
- [x] El modal abre y cierra; 1 sola `img` de la insignia.
- [x] 360 px: insignia arriba, cifras apiladas y nada recortado (tras la corrección).

**Unidades**

- [x] Salas con `--color-sala-uN`; el color cambia con el modo.
- [x] Espacio ≥ 96 px (120) y ≥ 64 px (144).
- [ ] Una unidad en una pantalla. En 1440 × 900 se cumple: ≤ 823 real y natural (máximo 818,6), en ambos modos. En 1366 × 657, la U1 crece +39 y el límite es +24: **no se cumple**. Desviación aceptada por el desarrollador.
- [x] Impresión sin fondo en las salas y sin trama.

**Pie y logos**

- [x] Capacita en `--color-primario` en la portada y el pie, en ambos modos; `src/assets` sin cambios.
- [x] Pie de dos zonas con línea vertical desde 1024 px; etiqueta sobre el logo de 48 px, a la derecha; en móvil, debajo y a la izquierda (capturas).
- [x] GTD con `#5F7EBA` y `#43649C`.

**Accesibilidad y regresiones**

- [x] Contrastes de 2.3 medidos en ambos modos.
- [x] Foco visible en las filas y en la credencial; fondo y subida en la fila, sin subida al reducir movimiento.
- [x] Sin JavaScript se lee todo y no queda ningún botón sin función.
- [x] Build sin advertencias, guardia en 0 y check 0/0/0; 0 `id` repetidos. Los recuentos son **25 de 25 prompts y 55 `<dialog>`**, no 24 y 54: la 07-01 ya está en `main`. Son iguales a la línea base.
- [x] JS ≤ 1774 B: 1767 B, sin JavaScript nuevo.
- [x] Impeccable `[]`.
- [ ] Lighthouse móvil **publicado**: fase B, después del merge. El local está dentro de la tolerancia (98, igual a `main`).

## Diferencias entre lo planificado y lo encontrado

- La rama ya existía, creada por el desarrollador desde `main` (`e489e64`) y sin diferencias. No la volví a crear.
- La 07-01 ya está en `main` y En revisión. La línea base es de 55 `<dialog>` y 25 prompts, no de 54 y 24, y la ficha dice «25 prompts».
- La portada de 1366 × 657 no cabía ni antes: la columna de texto terminaba en 779 px. La iteración y la RDA-014 suponían que el índice bastaba. El índice hace caber la ruta (643 px), pero el `h1` de 4 líneas y las redes en 2 filas dejan los logos en 756.
- La U1 suma 24 px más de lo previsto. La sala angosta las tarjetas de 403 a 396 px, y el «Qué harás» del bloque 2 (texto de la 07-01) pasa a 3 líneas. Con relleno de 0,5 rem queda en +35, así que mantuve 0,625 rem.
- Extraje `.boton-principal`, que repiten la portada y la credencial (estándar «sin duplicación»).
- Corregí dos recortes en 360 px que la iteración no anticipaba: el enlace de LinkedIn ahora se parte y la fecha de vigencia no se separa.

## Revisión manual del desarrollador

- Vista previa por bloque (tarea del desarrollador 3): portada, credencial, salas y pie, con `pnpm build && pnpm preview`.
- Sala de la U4 en oscuro (`#172727`). Si se ve sucia, se baja al 10 % con una línea de CSS.
- Lector de pantalla en las filas de la ruta: nombre «Unidad 1 Fundamentos…» y descripción «Mini-proyecto… Clase 1 de 4». No lo probé con NVDA.

## Decisiones tomadas

- Del desarrollador (2026-11-23): se aceptan como desviaciones la portada en 1366 × 657 (la columna de texto se desplaza unos 99 px) y la U1 en 1366 × 657 (+39 px, unas 1,41 pantallas). Se mantiene el relleno de 0,625 rem.
- [RDA-014](../../../00_producto/decisiones.md) registrada, con una actualización sobre 1366 × 657. La [P-029](../../../00_producto/propuestas-documentos-protegidos.md) se registró como aplicada. La [P-030](../../../00_producto/propuestas-documentos-protegidos.md) queda pendiente: corrige en `DESIGN.md` la promesa de la portada en 1366 × 657.

## Pendientes y riesgos

- Fase B: Lighthouse móvil publicado (mediana de 3) y `bitacora-06-cierre-06-07.md`.
- P-030 pendiente.
- En 1440 × 900 la U1 queda a 4,4 px del límite (818,6 de 823). Cualquier texto más largo en la U1 (por ejemplo, en la 07-02 a 07-04, si se toca) puede pasarse.
- HTML +8,3 KB gzip por el segundo logo incrustado. El Rendimiento local no cambió; se vigila en la fase B.

## Revisión

- **Resultado frente al objetivo:** cumplido en 1440 × 900 y en móvil. El recorrido, la credencial, el índice, las salas y la firma están como se aprobaron. En 1366 × 657 quedan dos desviaciones aceptadas.
- **Qué aprendimos:**
  - Una vista previa de diseño no reemplaza la medición: el supuesto «la portada cabe en 1366 × 657» no consideraba la columna de texto.
  - Un margen de 41 px en el alto se pierde con 7 px de ancho, si un texto está justo en el límite de su línea.
- **Qué cambia para lo que sigue:**
  - La 07-02 a 07-04 deben medir la U1 a U4 en 1440 × 900 con las salas: queda poco margen.
  - Las métricas vigentes pasan a JS 1767 B y HTML 381 178 B.

## Commit sugerido

`Épica 6 - Iteración 06-07: instructor como credencial tras la portada, ruta como índice, unidades en salas, pie con firma del OTEC, RDA-014 y P-029`
