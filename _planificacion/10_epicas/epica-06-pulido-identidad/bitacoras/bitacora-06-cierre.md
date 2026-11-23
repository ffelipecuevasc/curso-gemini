# Bitácora 06-cierre · Pulido de identidad: portada, unidades y modales

- **Fecha:** 2026-11-22
- **Agente:** Claude Code (Opus 5.5)
- **Rama:** iteracion/06-06-cierre (desde `main` en `d9ce2c0`)
- **Estado final:** En revisión (cierre de la épica 06, a la espera del commit del desarrollador)

## Resumen

La épica 06 dejó el sitio con firma propia sin salir de la paleta, las tipografías ni los radios (RDA-004):

- una trama de puntos de fondo;
- una portada con lema y ficha del curso calculada;
- la ruta y la cabecera de unidad con el número grande y sin barras de avance (RDA-013);
- la tarjeta de bloque clicable con un solo botón;
- «Terminado cuando…» como ticket;
- modales que se leen como artículo, con título, línea de datos y entradilla;
- citas sin borde lateral.

Sobre la URL publicada, Lighthouse móvil da **99/100/100/100**, uno más que la 05-08. Impeccable pasó de 1 hallazgo a 0, el JavaScript sigue en 1774 B y `DESIGN.md` describe el sitio (P-023 a P-028 aplicadas).

## Iteraciones

| Iteración | Resultado | Bitácora |
| :-------- | :-------- | :------- |
| 06-01 Trama de puntos | `--color-puntos` y trama de 1 px cada 22 px en el `<body>`, sin `fixed` ni animación y sin trama al imprimir | [bitacora-06-01](bitacora-06-01.md) |
| 06-02 Portada y ruta | `h1` y lema con firma, ficha «4 clases · 8 horas · 20 bloques · 24 prompts», logos bajo línea, estrella junto a la ruta, número grande y sin barras | [bitacora-06-02](bitacora-06-02.md) |
| 06-03 Cabecera de unidad | Número grande, «Unidad n:» para lectores, «Clase n de 4 · 120 min»; `BarraAvance.astro` borrado | [bitacora-06-03](bitacora-06-03.md) |
| 06-04 Tarjetas | Marca de 40 × 6 px, tarjeta entera clicable, 1 botón de contorno por tarjeta (37 → 17), ticket discontinuo | [bitacora-06-04](bitacora-06-04.md) |
| 06-05 Modales y citas | Título sin «Detalle ·» (26 → 0), línea de datos en 39 modales, entradilla de 19 px y cita como panel | [bitacora-06-05](bitacora-06-05.md) |
| 06-06 Verificación | Meta «Antes de empezar» en el bloque 0, mediciones local y publicada, P-028 | [bitacora-06-06](bitacora-06-06.md) |

## Métricas finales frente a la 05-08

| Medida | 05-08 | Cierre de la 06 | Fuente |
| :----- | :---- | :-------------- | :----- |
| Lighthouse móvil publicado (R / A / BP / SEO) | 98 / 100 / 100 / 100 | **99 / 100 / 100 / 100** | Agente, mediana de 3 |
| LCP · CLS · TBT móvil publicado | 1,51 s · 0 · 165 ms | 1,43 s · 0 · 71 ms | Agente |
| Elemento LCP | `h1` | `h1` (6 de 6 corridas) | Agente |
| Lighthouse escritorio publicado | — | 100 / 100 / 100 / 100 (LCP 0,47 s, CLS 0,0117) | Agente |
| Lighthouse móvil local | 95 / 100 / 96 / 100 | 93 / 100 / 96 / 100 | Agente (fase A) |
| JavaScript propio | 1774 B gzip | 1774 B gzip (local y publicado) | Agente |
| `index.html` | 346 277 B (61 883 gzip) | 355 655 B (61 703 gzip) | Agente |
| `<dialog>` · `h1` · prompts | 54 · 1 · 24 de 24 | 54 · 1 · 24 de 24 (local y publicado) | Agente |
| «Avance del curso» · «Detalle ·» | — | 0 · 0 (local y publicado) | Agente |
| Impeccable (`detect`) | 0 en `src/` (6 avisos en URL) | 0 en los 10 archivos tocados (al abrir: 1, `side-tab`) | Agente |
| Unidades en 1440 × 900 | ≤ 823 | 823 / 823 / 823 / 823 | Desarrollador (F1) |
| Unidades en 1366 × 657 | — | 778 / 778 / 780 / 754 (disponible 580) | Desarrollador (F1) |
| Página completa | ≤ 7 pantallas | 5,26 en 1440 × 900; 1366 × 657 sin cifra | Desarrollador (F2) |
| Palabras por unidad | Sin cifra (C3 «cumplido») | 294 / 316 / 354 / 305 | Desarrollador (F3) |
| Botones de contorno por tarjeta | hasta 2 (37) | máximo 1 (17) | Desarrollador (F4) |

Método de Lighthouse: 13.6.0 con `pnpm dlx`, Chrome sin interfaz y 3 corridas alternadas de móvil y escritorio. El benchmarkIndex fue de 1080 a 1943 en móvil y de 1687 a 2081 en escritorio. Como la mediana publicada está a 1 punto sobre la referencia, no hizo falta medir sin trama: la trama se queda.

## Criterio de término de la épica

- [x] Trama en ambos modos, quieta e invisible al imprimir: 06-01 y F6. El contraste sobre el punto tiene una excepción aceptada (ver abajo).
- [x] Portada: en 1440 × 900 todo cabe; en 1366 × 657 la ruta se desplaza (opción A, P-028).
- [x] 0 «Avance del curso» y `BarraAvance.astro` borrado.
- [x] Unidades en 1440 × 900: 823 = 900 − 77 (F1). En 1366 × 657: 778/778/780/754, 30 px menos que la Fase 1 de la 06-03 (límite: +8).
- [x] Máximo 1 botón de contorno por tarjeta (F4: 17, máximo 1).
- [x] Impeccable sin hallazgos: `[]`.
- [x] JavaScript propio sin cambios: 1774 B.
- [x] Lighthouse móvil publicado dentro de la tolerancia de 2: 99 (+1), CLS 0.

## Excepciones aceptadas por el desarrollador

1. **Contraste en oscuro sobre el centro de un punto:** `--color-enlace` da 6,63:1 y `--color-primario` 4,93:1. Bajan de AAA a AA (06-01; escrito en `DESIGN.md` 2.3 con la P-028).
2. **1366 × 657:** la ruta de la portada se desplaza (opción A, 06-02) y cada unidad ocupa unas 1,34 pantallas (P-028 y `DESIGN.md`).
3. **Borde del ticket:** se declara de 1,5 px y se dibuja de 1 px en pantallas de escala 1 (06-04, «queda como está»; P-028).
4. **Palabras por unidad (F3):** U1 294, U2 316, U3 354 y U4 305, contra el límite de 300 de la RDA-012. Es una **desviación aceptada por el desarrollador**: U2 +16, U3 +54 (18 %) y U4 +5.
   - No hay base comparable para hablar de regresión. La 05-05 midió 261/235/236/226 con un script que excluía el texto solo para lectores, y la 05-08 no entregó cifras.
   - F3 usa `innerText`, que incluye ese texto, y la épica 06 agregó texto para lectores (por ejemplo, «Unidad n:» en la cabecera).
   - La reducción de U2 a U4 queda en el backlog, fuera de alcance.

## Hallazgos

- **Peso del dataset distinto entre local y publicado:** `dist/index.html` local y el publicado solo difieren en «25,4 KB» (local) contra «25,2 KB» (publicado) del CSV `solicitudes-gtd-t3-2026.csv`. La causa probable son los saltos de línea: el checkout de Windows usa CRLF y Workers Builds, LF. Es probable, no está comprobado. El peso publicado lo calcula el build de producción (RDA-010), así que el sitio muestra el valor correcto para el archivo que sirve.
- **La trama no cuesta Rendimiento:** en local, con trama dio 91 y sin trama 80, por el ruido del equipo; publicado, 99.
- **Rendimiento local más bajo que el publicado** (93 contra 99): local se sirve sin compresión y con el equipo cargado, como ya se vio en la 05-08.

## Pendientes

- **F7, teclado y lector de pantalla de punta a punta:** no verificado.
- **`text-wrap: pretty`** (propuesta de la 05-08): sigue fuera de alcance.
- **Reducción de palabras de U2 a U4** bajo 300 (RDA-012): en el backlog, fuera de alcance.
- **Épica 07:** definición pendiente de la decisión del desarrollador.

## Revisión

- **Resultado frente al objetivo:** cumplido. El sitio se ve propio, las unidades separan lo que se lee de lo que se hace, los modales se leen como contenido y la trama une todo sin perder la unidad en una pantalla ni el Rendimiento publicado.
- **Qué aprendimos:**
  - Partir cada cambio de interfaz en una propuesta aplicada antes de la iteración (P-023 a P-028) mantuvo `DESIGN.md` y el sitio alineados en toda la épica.
  - Un recuento sin método fijo (palabras) no permite comparar entre épicas.
- **Qué cambia para lo que sigue:**
  - Toda medición que se compare entre épicas debe dejar escrito su método, como el fragmento F3 con `innerText`.
  - La épica 07 parte con F7 y la reducción de palabras como candidatos.

## Commit sugerido

`Épica 6 - Cierre: Lighthouse publicado 99/100/100/100 (LCP 1,43 s, CLS 0), métricas F1 a F7, palabras como desviación aceptada, P-028 aplicada y épica 06 cerrada`
