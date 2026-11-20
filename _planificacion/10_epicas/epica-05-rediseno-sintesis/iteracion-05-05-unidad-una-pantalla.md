# Iteración 05-05 · La unidad en una pantalla

- **Épica:** 05 · Rediseño visual y síntesis del contenido
- **Estado:** Pendiente
- **Rama sugerida:** iteracion/05-05-unidad-una-pantalla
- **Depende de:** 05-04 y propuesta P-009 aplicada
- **Especificación:** —
- **RDA relacionadas:** RDA-004, RDA-009, RDA-011, RDA-012

## Objetivo

Que cada unidad se vea completa en una pantalla de escritorio: una cabecera de color con lo esencial y una cuadrícula de tarjetas de bloque cuyos botones abren los modales, sin tener que desplazarse para encontrar nada de esa unidad.

## Punto de partida

- `SeccionUnidad.astro` muestra, en este orden: cabecera de color, objetivo, mini-proyecto, descargas, tabla «Bloques de la clase», un `BloqueClase` por bloque con todo su texto, recursos, entregable y «Terminado cuando…».
- Los modales de detalle, prompts, recursos y descargas ya existen (05-04) y todos los bloques tienen `sintesis` y todas las unidades `objetivoBreve` (05-03).
- U1 tiene 5 bloques; U2, U3 y U4 tienen un `bloque-0` (repaso de 5 min), 5 bloques y un `cierre`.

## Alcance y entregables

- **Cabecera de la unidad** (bloque del color de la unidad, esquina asimétrica de `DESIGN.md`): «Unidad N · Clase N · 120 min» en IBM Plex Mono, título (`h2`), `objetivoBreve`, barra de avance visual del tramo (RDA-008) con su texto, y una fila de acciones: «Sobre la unidad» (modal con objetivo completo, mini-proyecto, entregable y nivel), «Recursos (n)» y «Descargas (n)», esta última solo si la unidad tiene descargas.
- **Cuadrícula de bloques:** 6 tarjetas en 3 columnas × 2 filas desde 1024 px, 2 columnas desde 640 px y 1 columna en móvil. Cada tarjeta: número y minutos (IBM Plex Mono), título (`h3`), «Qué harás», hasta 2 claves y una fila de acciones: «Ver detalle» y, si el bloque tiene prompts, «Ver prompt» (1 prompt) o «Prompts (n)» (2 o más).
- **Bloques 0 y cierre** (U2, U3 y U4): no ocupan tarjeta; van como dos píldoras en la cabecera («Antes de empezar · 5 min», «Cierre · N min») que abren su modal de detalle.
- **Sexta tarjeta, «Terminado cuando…»:** el entregable y la lista de comprobación de la unidad (casillas nativas sin guardar estado), con el estilo de tarjeta pero sin color de unidad.
- Se retira de la página la tabla «Bloques de la clase»: su información (título, tipo y minutos) queda en las tarjetas y en los modales.
- Alto: desde 1024 px de ancho y 640 px de alto, la sección mide como máximo `100dvh` menos el encabezado (`--alto-encabezado`) y lo usa como alto mínimo, para que cada unidad ocupe una pantalla; `scroll-margin-top` en cada sección para que las anclas no queden bajo el encabezado.
- Sin JavaScript: las tarjetas muestran su síntesis y, debajo de la cuadrícula, el contenido de los modales en su lugar (RDA-011); la regla del alto no aplica.

## Tareas

1. Medir y anotar en la bitácora el alto actual de cada sección de unidad en 1440 × 900 y 1366 × 657 (línea base).
2. Crear `TarjetaBloque.astro` y `CabeceraUnidad.astro` con las clases de `DESIGN.md` (P-009 aplicada); un componente por archivo.
3. Rehacer `SeccionUnidad.astro` con la cabecera, la cuadrícula y la tarjeta «Terminado cuando…», reutilizando los modales de la 05-04.
4. Llevar los bloques 0 y cierre a píldoras en la cabecera; retirar la tabla «Bloques de la clase» y `BloqueClase.astro` si queda sin uso (borrar o mover requiere consulta).
5. Agregar `--alto-encabezado`, la regla de alto y `scroll-margin-top`; ajustar tamaños y espaciado hasta cumplir el alto en ambas ventanas, sin bajar el texto de 16 px.
6. Revisar el modo sin JavaScript y la jerarquía de encabezados (`h2` unidad, `h3` tarjeta).
7. Ejecutar `pnpm build`, `pnpm astro check` y las regresiones; revisar 360, 640, 1024, 1366 y 1440 px, ambos modos, teclado.
8. Escribir la bitácora y actualizar el registro.

## Criterios de aceptación

- [ ] En 1440 × 900 y en 1366 × 657, cada `section` de unidad mide como máximo `innerHeight − alto del encabezado` y todos sus botones están dentro de la ventana al navegar a su ancla (fragmento de consola con `getBoundingClientRect()` anotado en la bitácora, en ambos modos).
- [ ] En 360 × 740, cada unidad mide como máximo 4 alturas de ventana.
- [ ] Cada tarjeta muestra título, minutos, «Qué harás» y sus claves, y abre su modal de detalle; los 24 prompts siguen alcanzables y copiables desde sus modales.
- [ ] Las palabras visibles por unidad fuera de los modales, títulos incluidos, son como máximo 300 (fragmento de consola que cuenta el texto de la sección excluyendo `dialog`).
- [ ] Texto del cuerpo ≥ 16 px y objetivos táctiles ≥ 44 px en todas las tarjetas.
- [ ] Sin JavaScript, todo el contenido de la unidad se puede leer y no aparece ningún botón que no funcione.
- [ ] Regresiones: `pnpm build` sin advertencias con la guardia; `pnpm astro check` 0/0/0; 1 `h1`; 0 B de JavaScript nuevo; navegación de la ruta y del encabezado a cada unidad sin cambios.

## Riesgos

- Que el título largo de la U1 («Fundamentos de IA Generativa & Ingeniería de Prompts») ocupe tres líneas en 1366 px y rompa el alto: la cabecera usa un tamaño de título con `clamp()` y se prueba primero con la U1.
- Que la U3, la más larga, no quepa: se ajusta la síntesis (una sola clave) antes de achicar el texto.

## Fuera de alcance

- Sombras, brillo y transiciones de las tarjetas (05-07).
- Ajuste de desplazamiento por secciones (`scroll-snap`): se descarta porque atrapa el desplazamiento en móvil, donde cada unidad es más alta que la pantalla.

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Ninguno.
