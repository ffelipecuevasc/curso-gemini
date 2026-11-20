# Iteración 05-05 · La unidad en una pantalla

- **Épica:** 05 · Rediseño visual y síntesis del contenido
- **Estado:** En revisión
- **Rama sugerida:** iteracion/05-05-unidad-una-pantalla
- **Depende de:** 05-04 (Terminada) y P-009 aplicada
- **Especificación:** —
- **RDA relacionadas:** RDA-004, RDA-009, RDA-011, RDA-012

## Objetivo

Que cada unidad se vea completa en una pantalla de escritorio: una cabecera de color con lo esencial y una cuadrícula de tarjetas de bloque cuyos botones abren los modales, sin tener que desplazarse para encontrar nada de esa unidad.

## Punto de partida

- `SeccionUnidad.astro` muestra, en este orden: cabecera de color, objetivo, mini-proyecto, botón y modal de descargas, tabla «Bloques de la clase», un `BloqueClase` por bloque con su título, minutos y los botones «Ver detalle» y de prompts, botón y modal de recursos, entregable y «Terminado cuando…» como texto. `BloqueClase.astro` arma los modales de detalle y prompts, y `Modal.astro` une el botón y el `<dialog>`.
- Los modales de detalle, prompts, recursos y descargas ya existen (05-04, 45 `<dialog>`; `dist/index.html` pesa 327 567 B) y todos los bloques tienen `sintesis` y todas las unidades `objetivoBreve` (05-03).
- U1 tiene 5 bloques; U2, U3 y U4 tienen un `bloque-0` (repaso de 5 min), 5 bloques y un `cierre`.

## Alcance y entregables

- **Cabecera de la unidad** (bloque del color de la unidad, esquina asimétrica de `DESIGN.md`): «Unidad N · Clase N · 120 min» en IBM Plex Mono, título (`h2`), `objetivoBreve`, barra de avance visual del tramo (RDA-008) con su texto, y una fila de acciones: «Sobre la unidad» (modal con objetivo completo, mini-proyecto y nivel; el entregable va solo en la sexta tarjeta), «Recursos (n)» y «Descargas (n)», esta última solo si la unidad tiene descargas.
- **Cuadrícula de bloques:** 6 tarjetas en 3 columnas × 2 filas desde 1024 px, 2 columnas desde 640 px y 1 columna en móvil. Cada tarjeta: número y minutos (IBM Plex Mono), título (`h3`), «Qué harás», hasta 2 claves y una fila de acciones: «Ver detalle» y, si el bloque tiene prompts, «Ver prompt» (1 prompt) o «Prompts (n)» (2 o más).
- **Bloques 0 y cierre** (U2, U3 y U4): no ocupan tarjeta; van como dos píldoras en la cabecera («Antes de empezar · 5 min», «Cierre · N min») que abren su modal de detalle.
- **Sexta tarjeta, «Terminado cuando…»:** el entregable y un botón «Terminado cuando… (n)» que abre un modal con la lista de comprobación de la unidad (casillas nativas sin guardar estado; sin JavaScript, la lista se lee bajo la cuadrícula como los demás modales), con el estilo de tarjeta pero sin color de unidad. Variante nueva del modal y cambios de `DESIGN.md` en la propuesta P-014.
- **Estructura de componentes:** `Modal.astro` queda solo con el `<dialog>`; `BotonModal.astro` dibuja el botón (variantes `contorno` y `sobre-color`); `BloqueClase.astro` pasa a `ModalesBloque.astro` y dibuja solo los modales de detalle y prompts de un bloque; `src/lib/modales.ts` da a botón y modal el mismo `id` (píldoras de los bloques 0 y cierre: `modal-u<N>-bloque-0-detalle` y `modal-u<N>-cierre-detalle`; unidad: `modal-u<N>-sobre|recursos|descargas|terminado`).
- Se retira de la página la tabla «Bloques de la clase»: su información (título, tipo y minutos) queda en las tarjetas y en los modales.
- Alto: desde 1024 px de ancho y 640 px de alto, la sección mide como máximo `100dvh` menos el encabezado (`--alto-encabezado`) y lo usa como alto mínimo, para que cada unidad ocupe una pantalla; las anclas no quedan bajo el encabezado con `scroll-padding-top` global (`scroll-pt-[var(--alto-encabezado)]` en `<html>`, en lugar del `scroll-pt-24` actual y de un `scroll-margin-top` por sección).
- Sin JavaScript: las tarjetas muestran su síntesis y, debajo de la cuadrícula, el contenido de los modales en su lugar (RDA-011); la regla del alto no aplica.

## Contenido aprobado (copiar tal cual)

> Aprobado por el desarrollador el 2026-11-20. Textos de interfaz nuevos (el resto sale de `sintesis`, `objetivoBreve` y la ficha de cada unidad).

- Botones: «Ver detalle», «Ver prompt», «Prompts (n)», «Recursos (n)», «Descargas (n)», «Sobre la unidad», «Terminado cuando… (n)», «Antes de empezar · N min» y «Cierre · N min».
- Sexta tarjeta: título «Terminado cuando…» y la etiqueta «Entregable:» antes del texto de `entregable`.
- Modal «Sobre la unidad»: apartados «Objetivo», «Mini-proyecto» y «Nivel».

## Decisiones del desarrollador

- 2026-11-20: la sexta tarjeta muestra el entregable y un botón «Terminado cuando… (n)» que abre un modal con la lista de casillas nativas, sin guardar estado; sin JavaScript, la lista se lee bajo la cuadrícula. Propuesta P-014 para `DESIGN.md` (la aplica el desarrollador).
- 2026-11-20: `BloqueClase.astro` pasa a `ModalesBloque.astro` con `git mv` y dibuja solo los modales de detalle y prompts.
- 2026-11-20: el entregable va solo en la tarjeta; el modal «Sobre la unidad» lleva objetivo completo, mini-proyecto y nivel.
- 2026-11-20: no se agrega una regla de compactación para pantallas de 700 px de alto o menos; se mide primero en el navegador y el desarrollador decide con datos.
- 2026-11-20: `scroll-pt-24` de `<html>` pasa a `scroll-pt-[var(--alto-encabezado)]` en lugar de un `scroll-margin-top` por sección; se aprueban además `BotonModal.astro`, la estructura de `CabeceraUnidad` y `TarjetaBloque`, las píldoras de los bloques 0 y cierre con los `id` existentes, el `id` `modal-u<N>-sobre` y la clase `.boton-sobre-color` con colores invertidos al pasar el puntero.

- 2026-11-20 (ajuste de alto): con 986 a 1090 px contra 823 disponibles en 1440 × 900, se aprueban tres palancas en orden, midiendo tras cada una y parando en la primera que haga caber las 4 unidades: (1) espaciado interno menor de tarjetas y cabecera, sin bajar de 16 px ni de 44 px y con la interlínea de 1,6 de `DESIGN.md`; (2) sección de unidad de hasta 1280 px desde pantallas anchas (propuesta P-015); (3) una sola clave por tarjeta, la primera. Sin compactación para pantallas bajas. **Se usaron las tres**: las dos primeras no bastaron (906 a 1010 px y 879 a 906 px).

## Tareas

1. Medir y anotar en la bitácora el alto actual de cada sección de unidad en 1440 × 900 y 1366 × 657 (línea base).
2. Crear `TarjetaBloque.astro`, `TarjetaTerminado.astro`, `CabeceraUnidad.astro` y `BotonModal.astro` con las clases de `DESIGN.md` (P-009 aplicada); un componente por archivo.
3. Rehacer `SeccionUnidad.astro` con la cabecera, la cuadrícula y la tarjeta «Terminado cuando…», reutilizando los modales de la 05-04; separar el botón del `<dialog>` en `Modal.astro`.
4. Llevar los bloques 0 y cierre a píldoras en la cabecera; retirar la tabla «Bloques de la clase»; renombrar `BloqueClase.astro` a `ModalesBloque.astro` con `git mv` (aprobado).
5. Agregar `--alto-encabezado` (medido en el navegador), la regla de alto y el `scroll-padding-top` global; medir el alto en ambas ventanas, sin bajar el texto de 16 px. Si no cabe, no se compacta por cuenta propia: se registran las mediciones y decide el desarrollador.
6. Revisar el modo sin JavaScript y la jerarquía de encabezados (`h2` unidad, `h3` tarjeta).
7. Ejecutar `pnpm build`, `pnpm astro check` y las regresiones; revisar 360, 640, 1024, 1366 y 1440 px, ambos modos, teclado.
8. Escribir la bitácora y actualizar el registro.

## Criterios de aceptación

- [ ] En 1440 × 900 y en 1366 × 657, cada `section` de unidad mide como máximo `innerHeight − alto del encabezado` y todos sus botones están dentro de la ventana al navegar a su ancla (fragmento de consola con `getBoundingClientRect()` anotado en la bitácora, en ambos modos). Tras el ajuste de alto, medido por el agente en Edge headless (no probado en tu navegador): en 1440 × 900 las 4 unidades miden 823 px de 823 disponibles, en ambos modos, con 0 botones fuera de la ventana. **1366 × 657: se registra el alto real (783 a 810 px contra 580); decisión pendiente con la medición.**
- [ ] En 360 × 740, cada unidad mide como máximo 4 alturas de ventana. Medición del agente a 500 × 740 (mínimo de Edge headless): 2279 a 2402 px (3,1 a 3,2 ventanas); falta la prueba a 360 px.
- [ ] Cada tarjeta muestra título, minutos, «Qué harás» y sus claves, y abre su modal de detalle; los 24 prompts siguen alcanzables y copiables desde sus modales. Medido por script: 26 tarjetas con sus textos, 53 botones con su `<dialog>` y 24 de 24 prompts idénticos a su fuente; el clic lo prueba el desarrollador.
- [ ] Las palabras visibles por unidad fuera de los modales, títulos incluidos, son como máximo 300 (fragmento de consola que cuenta el texto de la sección excluyendo `dialog` y el texto solo para lectores de pantalla). Tras el ajuste de alto: U1 261, U2 235, U3 236, U4 226 por script sobre `dist/index.html` (Edge headless: 260, 235, 236, 225); falta tu recuento en el navegador.
- [x] Texto del cuerpo ≥ 16 px y objetivos táctiles ≥ 44 px en todas las tarjetas. Tamaño mínimo medido en Edge headless: 16 px en las 4 unidades; el alto táctil sale de `min-height: 2.75rem` en los botones y `min-h-11` en las casillas.
- [x] Sin JavaScript, todo el contenido de la unidad se puede leer y no aparece ningún botón que no funcione. Por script sobre el HTML y el CSS compilados: los 53 botones que abren y los 24 de copiar llevan `hidden`, los `<dialog>` se muestran como bloques bajo la cuadrícula y no hay texto duplicado.
- [x] Regresiones: `pnpm build` sin advertencias con la guardia; `pnpm astro check` 0/0/0; 1 `h1`; 0 B de JavaScript nuevo (1295 B gzip, igual que al cerrar la 05-04); navegación de la ruta y del encabezado a cada unidad sin cambios (ids `unidad-1` a `unidad-4` intactos). Peso de `dist/index.html`: 327 567 B → 338 599 B (58 780 → 60 517 B gzip).

## Riesgos

- Que el título largo de la U1 («Fundamentos de IA Generativa & Ingeniería de Prompts») ocupe tres líneas en 1366 px y rompa el alto: la cabecera usa un tamaño de título con `clamp()` y se prueba primero con la U1.
- Que la U3, la más larga, no quepa: se ajusta la síntesis (una sola clave) antes de achicar el texto.
- Que la cuadrícula de 3 × 2 no quepa ni en 1440 × 900 con tarjetas de 16 px en un contenedor de 1100 px: cada tarjeta mide unos 340 a 390 px (tres líneas de «Qué harás» y claves de dos líneas). Es el riesgo que se materializó en la medición del agente; las opciones (ancho del contenedor de la unidad, una sola clave, interlínea, compactar en pantallas bajas) cambian `DESIGN.md` o el contenido y las decide el desarrollador con sus propias mediciones.
- Que el recuento de palabras dependa de cómo se cuente (texto solo para lectores de pantalla, signos, `&`): el fragmento de consola de la bitácora fija la regla.
- Que `dist/index.html` crezca: los modales «Sobre la unidad» y «Terminado cuando…» (8) y las 26 tarjetas suman más de lo que sale con la ficha y la tabla.

## Fuera de alcance

- Sombras, brillo y transiciones de las tarjetas (05-07).
- Ajuste de desplazamiento por secciones (`scroll-snap`): se descarta porque atrapa el desplazamiento en móvil, donde cada unidad es más alta que la pantalla.

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Aplicar la propuesta P-015 en `DESIGN.md` (sección de unidad de hasta 1280 px y una sola clave por tarjeta) antes del merge.
- Aplicar la propuesta P-014 en `DESIGN.md` (variante «Terminado cuando…» del modal, sexta tarjeta con modal y botón sobre el color de la unidad).
- Medir en el navegador el alto de las secciones (1440 × 900 y 1366 × 657, ambos modos), las palabras visibles, el alto real del encabezado y 360 px, con los fragmentos de la bitácora, y decidir qué hacer con lo que no cabe.
