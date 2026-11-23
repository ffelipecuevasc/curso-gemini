# Iteración 07-02 · Unidad 2: estructura en dos mitades, cuenta, modelos y prácticas del Cuaderno

- **Épica:** 07 · Ajustes de contenido por unidad
- **Estado:** En revisión
- **Rama sugerida:** iteracion/07-02-unidad-2
- **Depende de:** cierre de la épica 06. Conviene aplicarla después de la 07-01 (misma redacción de cuenta y de modelos), pero no la necesita para funcionar.
- **Especificación:** —
- **RDA relacionadas:** RDA-004 (identidad visual), RDA-009 (contenido en colecciones), RDA-010 (descargas), RDA-012 (síntesis con límites)
- **Hallazgos que cierra:** hallazgos U2-1 a U2-8 de esta iteración (abajo)

## Objetivo

Que la Unidad 2 del sitio diga lo mismo que el instructor enseñará el miércoles 25-11-2026: una clase de dos mitades (55 minutos de explicación y demostraciones, 65 minutos de práctica con el Cuaderno de práctica), con la cuenta empresarial del curso, los modelos vigentes, el kit de marca descargable y la entrega por correo. Sin cambiar el diseño.

## Hallazgos de la preparación de la U2 (2026-11-23)

Preparación hecha por el desarrollador en el proyecto Claude «Mini-LMS · Gemini & Google Suite», contrastando `unidades-del-curso.md` (v5), la Guía de la sesión 1, el repositorio y páginas oficiales de Google consultadas el 2026-11-23.

1. **U2-1 · Estructura.** La clase ya no reparte «microcharla + práctica» dentro de cada bloque. Pasa a dos mitades: explicación y demostraciones (55 min) y práctica individual (65 min). Los minutos de cada bloque del sitio deben reflejarlo (ver «Contenido aprobado»).
2. **U2-2 · Cuenta.** Los participantes usan su cuenta empresarial del Workspace de Capacita. El sitio habla de «cuenta personal» (`bloque-2.md`) y de cupos «en Google AI Plus» (`bloque-2.md`).
3. **U2-3 · Modelos.** `bloque-1.md` nombra Flash-Lite e Hydrogen y recomienda tres configuraciones. La página oficial de modelos muestra Auto, Hydrogen, Neon y Carbon (Plus = Auto + Hydrogen), y los niveles de razonamiento solo aparecen al elegir un modelo a mano. Además, en la cuenta del curso el selector puede ser distinto.
4. **U2-4 · Compartir.** `bloque-5.md` dice «Compartir el enlace de Canvas solo en el espacio del curso». Los participantes no pueden compartir enlaces: todo se entrega por correo, solo al instructor, y el dashboard se entrega como captura de pantalla.
5. **U2-5 · Prácticas.** Las prácticas se reescriben como actividades de un Cuaderno de práctica (PDF) para principiantes, con pasos numerados, mínimo viable y plan B. El sitio no repite los pasos: resume cada actividad y remite al cuaderno.
6. **U2-6 · Marca.** El prompt `identidad-visual-gtd` contiene el marcador `<svg>…</svg>` que el participante debe reemplazar. Para principiantes se separa: el bloque de marca va sin logo y el logo se entrega como archivo (`gtd-telsur.png`, y el SVG dentro del kit de marca). Google Presentaciones puede rechazar el SVG, por eso se entrega un PNG.
7. **U2-7 · Descargas.** `u2.yaml` solo tiene el dataset y su diccionario. Faltan el Cuaderno de práctica, el informe de respaldo de Deep Research, el kit de marca y el logo en PNG.
8. **U2-8 · Metas.** Se ajustan a lo que se puede lograr en 65 minutos de práctica: dos configuraciones de modelo (no tres), una cifra comprobada en el dashboard (no tres) y el correo de entrega.

## Punto de partida

Leer antes de escribir (verificado en el repositorio el 2026-11-23; confirmar que sigue igual después de la épica 06 y de la 07-01):

- `src/content/unidades/u2.yaml`: `miniProyecto.descripcion` («seis piezas conectadas entre sí, cinco de ellas con la marca GTD»), `objetivoBreve` («seis piezas»), `terminadoCuando` (7 ítems), recursos `gemini-4-argon`, `gemini-4-carbon`, `gemini-4-hydrogen`; `descargas` con 2 entradas.
- `src/content/bloques/u2/bloque-0.md` a `bloque-5.md` y `cierre.md`: minutos 5/15/20/20/20/30/10 con `microcharlaMin` y `practicaMin`.
- `bloque-1.md`: selector con «Flash-Lite» e «Hydrogen», tres configuraciones, prompt `carril-base`, recurso `gemini-4-argon`.
- `bloque-2.md`: «Con una cuenta personal…», «cupo de uso en Google AI Plus», prompt `deep-research`.
- `bloque-3.md`: prompt `identidad-visual-gtd` con `<svg>…</svg>`, camino B como práctica de los participantes.
- `bloque-5.md`: «Compartir el enlace de Canvas solo en el espacio del curso», sin prompt publicado.
- `cierre.md`: pregunta de cierre y adelanto de la U3.
- `src/content/descargas.yaml`, `src/content/recursos.yaml` (`acerca-modelos-gemini`, `gemini-4-argon`) y `src/content.config.ts` (campos `tipo` o `microcharlaMin` + `practicaMin`; límites de `sintesis`).
- No existe «Galería de ejemplos resueltos» en el sitio (el documento del curso la menciona): no se agrega.

## Alcance y entregables

1. **Estructura y minutos.** Cada bloque refleja las dos mitades (ver tabla y Decisión 1).
2. **Cuenta y modelos.** Mismas reglas que la 07-01: se reemplaza toda mención a cuenta personal o Google AI Plus para el participante, y se actualizan los modelos a lo que muestra la página oficial. Se aclara que el selector del participante puede mostrar otra cosa.
3. **Prácticas.** En cada bloque, la sección «Práctica» pasa a un resumen corto de la actividad y la frase «Sigue los pasos en el Cuaderno de práctica, actividad N». Los prompts se publican completos en la colección `prompts`.
4. **Marca.** `identidad-visual-gtd` se publica sin logo, y el kit de marca y el logo en PNG se ofrecen como descargas.
5. **Entrega por correo.** Se reemplaza el compartir por enlace por la entrega por correo, solo al instructor.
6. **Cierre.** Se reescribe con la entrega, la reflexión y el adelanto de la U3.
7. **Descargas de la U2.** `u2.yaml` referencia 6 descargas (ver abajo).
8. **Recursos.** Se retira `gemini-4-argon` de la U2 y se agrega `acerca-modelos-gemini` si no está.
9. **Metas.** `terminadoCuando`, `miniProyecto` y `objetivoBreve` se ajustan (ver «Contenido aprobado»).
10. **Síntesis.** Se proponen los cambios de `sintesis` que los puntos anteriores vuelven falsos, y se publican solo con aprobación.

## Contenido aprobado (copiar tal cual)

### Minutos por bloque (suman 120; `duracionMin` queda en 120 y no hay holgura)

| Bloque | Tu parte: explicación y demo | Práctica | Total | Actividades del Cuaderno |
|---|---:|---:|---:|---|
| 0 · Repaso y brief del caso | 5 | 4 | 9 | Actividad 0 |
| 1 · Modelos y niveles de razonamiento → planilla | 8 | 10 | 18 | Actividad 2 |
| 2 · Deep Research → informe en Docs | 10 | 11 | 21 | Actividades 1 y 3 |
| 3 · Infografía con marca: imagen vs. código | 12 | 10 | 22 | Actividad 4 (incluye la demostración de video, 2 min) |
| 4 · Presentación con marca en Canvas | 7 | 10 | 17 | Actividad 5 |
| 5 · Dashboard interactivo con marca en Canvas | 9 | 11 | 20 | Actividad 6 |
| Cierre | 4 | 9 | 13 | Actividad 7 y cierre oral |
| **Total** | **55** | **65** | **120** | |

Los 4 minutos de explicación del cierre son la demostración «Cómo se entrega» (3) y el colchón (1). Los 9 de práctica son el correo (6) y el cierre oral (3).

### `u2.yaml`

- `objetivoBreve`: «Domina modelos, Deep Research y Canvas en Gemini para producir cinco piezas de comunicación con la identidad visual de GTD.»
- `miniProyecto.descripcion`: reemplazar la última frase por «Termina con cinco piezas conectadas entre sí, tres de ellas con la marca GTD, y las envía por correo al instructor con una reflexión de cuatro preguntas.»
- `terminadoCuando` (8 ítems; si el esquema limita la cantidad, unir el 7.º con el 8.º):
  1. «Mi planilla compara al menos 2 configuraciones de modelo o nivel, y sé cuándo usar cada una.»
  2. «Mi informe de Deep Research está en Docs y comprobé al menos 3 afirmaciones en sus fuentes.»
  3. «Tengo una infografía con la paleta GTD, sin logo inventado y con cifras revisadas.»
  4. «Mi presentación está en Presentaciones y descargada en PDF, con los colores de la marca y el logo oficial si me alcanzó el tiempo.»
  5. «Mi dashboard muestra el rótulo de datos ficticios, usa filtros y comprobé al menos 1 cifra contra el CSV.»
  6. «Guardé mi bloque de marca junto a la plantilla de la U1.»
  7. «Envié por correo al instructor mis cinco archivos y mi reflexión de cuatro preguntas.»
  8. «No usé información real de GTD ni de sus clientes.»
- `descargas` (6, en este orden): `dataset-ficticio-solicitudes`, `dataset-ficticio-diccionario`, `u2-cuaderno-practica`, `u2-informe-respaldo`, `u2-kit-marca-gtd`, `u2-logo-gtd-png`.
- `recursos`: quitar `gemini-4-argon`; agregar `acerca-modelos-gemini` al comienzo si no está.

### `descargas.yaml` (entradas nuevas)

```yaml
- id: u2-cuaderno-practica
  titulo: "Cuaderno de práctica · Unidad 2"
  archivo: /descargas/u2-cuaderno-practica.pdf
- id: u2-informe-respaldo
  titulo: "Informe de respaldo de Deep Research"
  archivo: /descargas/u2-informe-respaldo.pdf
- id: u2-kit-marca-gtd
  titulo: "Kit de marca GTD"
  archivo: /descargas/kit-marca-gtd.md
- id: u2-logo-gtd-png
  titulo: "Logotipo GTD (PNG)"
  archivo: /descargas/gtd-telsur.png
```

### Textos de los bloques (ediciones mínimas)

**Bloque 0.** Segundo punto: «Brief: “Eres analista del área X de GTD. Tu gerencia necesita, para mañana, un informe del trimestre y una lectura del mercado. Tienes 2 horas y a Gemini.” Descarga el dataset ficticio, el kit de marca y el logo.» Agregar: «**Cómo funciona la clase:** primero el instructor explica y demuestra con su cuenta; después practicas con el Cuaderno de práctica. Todo se entrega por correo solo al instructor: nadie comparte enlaces. Lo que ves en tu pantalla puede ser distinto de lo que ve el instructor.» Práctica: «Actividad 0 del Cuaderno: entra con la cuenta del curso desde un computador y descarga los archivos.»

**Bloque 1.** En «Conceptos clave», reemplazar el punto «Selector de modelo» por: «**Selector de modelo:** la página oficial de modelos de Gemini muestra, al 2026-11-23, Auto, Hydrogen (rapidez y eficiencia), Neon y Carbon (tareas largas y complejas). Con Google AI Plus aparecen Auto e Hydrogen. **En tu cuenta del curso el selector puede mostrar otros modelos:** lo defines tú mirando qué aparece.» Mantener los puntos de niveles de razonamiento, agregando «aparecen cuando eliges un modelo a mano». Mantener selección automática y la regla práctica. Reemplazar «Práctica (carril base)» por: «**Práctica (Actividad 2 del Cuaderno):** adjunta el CSV; anota lo que muestra tu selector; envía el análisis con la opción más rápida y con la más potente (si solo hay una, compara un prompt corto con uno que pide razonar paso a paso); cronometra cada respuesta; pide la tabla comparativa; usa «Exportar a Hojas de cálculo». Mínimo viable: planilla con dos filas comparadas.» Quitar el carril extra de la fórmula por región solo si no cabe en el patrón; si cabe, dejarlo.

**Bloque 2.** «Con una cuenta personal se puede investigar…» → «Con tu cuenta del curso puedes investigar en la web y subir archivos. Las fuentes Gmail y Drive solo se usan si las apps están conectadas, y en el curso no se conectan.» «Límites» → «**Límites:** Deep Research puede tener un cupo de uso según tu cuenta, así que se lanza **una sola vez por persona**. Si no puedes lanzarlo, usa el informe de respaldo de Descargas y haz igual la verificación.» Práctica → resumen de las actividades 1 y 3 (lanzar el prompt, leer el plan, no cerrar la pestaña; comprobar 3 afirmaciones abriendo sus fuentes; exportar a Docs). Mínimos viables: investigación lanzada; 2 afirmaciones comprobadas.

**Bloque 3.** Mantener la tabla de los dos caminos. Agregar al final de la regla de marca: «Para Presentaciones se usa el logo en PNG, porque Google Presentaciones puede rechazar el SVG.» Práctica → «**Actividad 4 del Cuaderno:** elige 5 datos de tu análisis; crea la infografía como imagen con el bloque de marca y **sin logo**; revisa texto y cifras letra por letra; corrige solo lo que falle; descarga la imagen. El camino B (código, con el logo oficial) lo demuestra el instructor.» Agregar: «**Video:** el instructor muestra una demostración corta. No es parte de la práctica, porque no todas las cuentas lo tienen.» Mínimo viable: imagen con 3 datos revisados.

**Bloque 4.** Mantener la microcharla; cambiar «el prompt debe pedir diapositivas de forma explícita» sin cambios. Práctica → «**Actividad 5 del Cuaderno:** en el chat del informe, adjunta el CSV y activa Canvas; pide las 8 diapositivas; cambia una; exporta a Presentaciones; descarga el PDF. Si sobra tiempo: logo en PNG y colores del tema.» Mínimo viable: 8 diapositivas en PDF.

**Bloque 5.** Mantener la precaución de compartir y agregar: «**En esta clase nadie comparte el enlace de Canvas:** entregas una captura de pantalla.» Reemplazar el paso «Compartir…» y el punto del SVG oficial en el encabezado. Práctica → «**Actividad 6 del Cuaderno:** pega el prompt con el CSV adjunto; prueba cada filtro; corrige un error describiéndolo; comprueba una cifra contra el CSV; toma una captura.» Mínimo viable: 4 indicadores, 1 filtro que funciona y 1 cifra comprobada. Carril extra: se mantiene.

**Cierre.** Reescribir el cuerpo: «**Entrega por correo (Actividad 7):** envía a contacto@felipecuevas.dev, con asunto “U2 · Kit de comunicación GTD · Nombre Apellido”, cinco archivos —planilla (PDF o XLSX), informe (PDF), infografía (imagen), presentación (PDF) y captura del dashboard— y tu reflexión en el cuerpo.» Lista de las 4 preguntas: «¿Qué necesitaba hacer? · ¿Cómo me ayudó Gemini? · ¿Qué tuve que aportar yo? · ¿Qué debería revisar?». Mantener la pregunta de cierre y el adelanto de la U3 («Hoy Gemini buscó información en la web; la próxima clase trabajará solo con tus propias fuentes»).

### Prompts (colección `prompts`; la sintaxis exacta la define el esquema, verificar con `pnpm build`)

Cada prompt se coloca con `<div data-prompt="id"></div>` en el paso del bloque que lo usa. `texto` es literal; los corchetes son parte del texto. Las descripciones tienen 30 palabras o menos.

### `bloque-1.md` · prompts

```yaml
- id: analisis
  titulo: "Análisis del trimestre"
  descripcion: "Pide analizar el CSV ficticio del trimestre, identificar los tres problemas principales y proponer una acción justificada con cifras, para comparar dos configuraciones de modelo."   # 25 palabras
  texto: |-
    Actúa como analista del área de soporte de una empresa de telecomunicaciones. El archivo adjunto tiene solicitudes de soporte ficticias de julio a septiembre de 2026.
    Identifica los 3 problemas principales del trimestre y propón una acción para cada uno. Justifica cada problema con cifras del archivo.
    Responde en español de Chile, con un máximo de 250 palabras.
- id: repetir
  titulo: "Repetir con otra configuración"
  descripcion: "Pide responder de nuevo desde cero con otra configuración, sin copiar la respuesta anterior, para comparar modelos o niveles de razonamiento dentro del mismo chat."   # 25 palabras
  texto: |-
    Responde de nuevo desde cero, sin repetir ni mejorar tu respuesta anterior.
- id: tabla
  titulo: "Tabla comparativa"
  descripcion: "Pide una tabla que compare las dos respuestas por problemas, cifras, profundidad y tareas donde conviene cada configuración, lista para exportar a Hojas de cálculo."   # 25 palabras
  texto: |-
    Crea una tabla que compare tu primera y tu segunda respuesta. Columnas: respuesta (1 o 2), problemas que identificó, cifras que usó, profundidad del análisis (de 1 a 5) y en qué tareas conviene usar esa configuración.
```

### `bloque-2.md` · prompts

```yaml
- id: deep-research
  titulo: "Deep Research"
  descripcion: "Lanza Deep Research sobre tendencias 2026 de fibra óptica y servicios digitales para pymes en Chile, con fuentes oficiales, cifras fechadas, regulación y oportunidades."   # 24 palabras
  texto: |-
    Actúa como analista de mercado de telecomunicaciones en Chile.
    Investiga las tendencias 2026 en adopción de fibra óptica y servicios digitales para pymes en Chile: datos públicos, regulación vigente y oportunidades para una empresa de telecomunicaciones.
    Prioriza fuentes oficiales (organismos del Estado y reguladores) y prensa especializada. No uses fuentes anónimas.
    Entrega un informe en español de Chile con: resumen ejecutivo, hallazgos con cifras (indica la fecha de cada fuente), regulación y oportunidades.
```

### `bloque-3.md` · prompts

```yaml
- id: identidad-visual-gtd
  titulo: "Identidad visual GTD (usar siempre)"
  descripcion: "Bloque reutilizable de identidad visual GTD con paleta HEX, tipografía Montserrat, regla del logo, estilo y contraste AA, para pegar dentro de tus prompts."   # 24 palabras
  texto: |-
    # Identidad visual GTD (usar siempre)
    Paleta: azul marca #375D9D, azul intenso #2959AD, azul marino #204175 (texto), azul medio #5A7EBE, ámbar #FFA300 (solo acentos y cifras grandes, nunca texto sobre blanco), crema #FFF6E5 y celeste #DBE5F3 (fondos suaves), blanco #FFFFFF.
    Tipografía: Montserrat.
    Logo: no lo dibujes ni lo inventes; yo lo agrego después con el archivo oficial.
    Estilo: corporativo, cercano, esquinas redondeadas, íconos lineales, mucho espacio en blanco.
    Contraste mínimo AA para todo texto. No inventes logos ni eslóganes.
- id: infografia-imagen
  titulo: "Infografía como imagen"
  descripcion: "Pide una infografía horizontal con cinco datos ya revisados, el bloque de marca y sin logo, usando exactamente los textos que tú entregas."   # 23 palabras
  texto: |-
    Crea una infografía horizontal (16:9) para la gerencia de un área de soporte de una empresa de telecomunicaciones.
    Título: «[título corto, máximo 6 palabras]».
    Muestra exactamente estos 5 datos, uno por tarjeta, con la cifra grande y una frase corta debajo:
    1. [dato 1: cifra y qué mide]
    2. [dato 2]
    3. [dato 3]
    4. [dato 4]
    5. [dato 5]
    Escribe los textos tal como te los entrego, sin agregar cifras ni textos nuevos. Pie de página: «Datos ficticios — material de capacitación».
    [pega aquí el bloque de marca]
- id: corregir-texto
  titulo: "Corregir un texto"
  descripcion: "Corrige solo el texto erróneo de una tarjeta de la infografía sin cambiar el resto de la imagen."   # 18 palabras
  texto: |-
    Corrige solo el texto de la tarjeta [número]: debe decir exactamente «[texto correcto]». No cambies nada más.
- id: infografia-sin-texto
  titulo: "Infografía sin texto (plan B)"
  descripcion: "Plan B: pide la infografía sin texto, solo con íconos y formas, para agregar los textos después en Presentaciones o Docs."   # 21 palabras
  texto: |-
    Genera la misma infografía sin ningún texto: solo íconos, formas y espacios en blanco donde irán los textos.
```

### `bloque-4.md` · prompts

```yaml
- id: presentacion-con-marca
  titulo: "Presentación con marca en Canvas"
  descripcion: "Pide en Canvas ocho diapositivas para la gerencia con contexto de mercado del informe, tres hallazgos con cifras del CSV, acciones y cierre, sin logo."   # 25 palabras
  texto: |-
    Crea una presentación de 8 diapositivas para la gerencia de [mi área]: portada, contexto de mercado (usa el informe de Deep Research de este chat), 3 hallazgos del trimestre con cifras (usa el archivo CSV adjunto), 2 acciones propuestas, próximos pasos y cierre.
    Una idea por diapositiva y máximo 4 viñetas por diapositiva. Sin logo: lo agregaré yo.
    [pega aquí el bloque de marca]
- id: iterar-en-canvas
  titulo: "Iterar en Canvas"
  descripcion: "Instrucción breve para cambiar una sola diapositiva en Canvas y convertirla en un gráfico de barras con las cifras del archivo."   # 21 palabras
  texto: |-
    Convierte la diapositiva 4 en un gráfico de barras con las cifras del archivo.
```

### `bloque-5.md` · prompts

```yaml
- id: dashboard
  titulo: "Dashboard interactivo"
  descripcion: "Pide en Canvas un dashboard de una página con el CSV: cuatro indicadores, tres gráficos, filtros, tabla con buscador, marca GTD y rótulo de datos ficticios."   # 26 palabras
  texto: |-
    Crea en Canvas un dashboard interactivo de una sola página (HTML, CSS y JavaScript) con los datos del archivo CSV adjunto. Debe incluir:
    - 4 indicadores clave arriba: total de solicitudes, tiempo promedio de resolución en horas, porcentaje resuelto en el primer contacto y NPS promedio;
    - 3 gráficos: evolución por mes, comparación por región y distribución por tipo de servicio;
    - filtros por mes, región y tipo de servicio que actualicen los indicadores y los gráficos;
    - una tabla con buscador.
    Diseño que se adapte a pantallas pequeñas. Rótulo visible: «Datos ficticios — material de capacitación».
    [pega aquí el bloque de marca]
- id: corregir-dashboard
  titulo: "Corregir un error del dashboard"
  descripcion: "Plantilla para describir en lenguaje natural un filtro o gráfico que falla y pedir su corrección sin tocar el resto."   # 20 palabras
  texto: |-
    Cuando elijo [filtro y valor], [qué no cambia o qué se ve mal]. Corrígelo sin cambiar lo demás.
```


### Síntesis propuestas (se publican solo con aprobación del desarrollador; RDA-012)

Solo cambian las que el contenido nuevo vuelve falsas. El resto se mantiene.

| Campo | Texto propuesto | Palabras |
|---|---|---:|
| bloque-1 · resumen | Compara dos configuraciones de modelo y nivel de razonamiento sobre el CSV ficticio y exporta la tabla comparativa a Hojas de cálculo. | 22 |
| bloque-1 · haras | Compararás dos configuraciones de modelo y exportarás la tabla a planilla. | 11 |
| bloque-3 · resumen | Distingue la infografía como imagen y como código en Canvas, y crea la versión imagen con la paleta GTD sin inventar el logotipo. | 23 |
| cierre · resumen | Envía tus cinco archivos y tu reflexión por correo al instructor, y conoce el adelanto de la Unidad 3. | 19 |
| cierre · haras | Enviarás por correo tus cinco archivos y tu reflexión de cuatro preguntas. | 12 |
| cierre · clave 1 | Envía todo por correo solo al instructor. | 7 |
| cierre · clave 2 | Reflexiona: qué hice, qué aportó Gemini, qué aporté yo. | 9 |

## Decisiones del desarrollador

- 2026-11-23 · Estructura: primera mitad explicación y demos (55 min), segunda mitad solo práctica (65 min).
- 2026-11-23 · Actividades: se aprueban las 7 actividades del Cuaderno (más la actividad 0 de preparación), cada una con mínimo viable y plan B.
- 2026-11-23 · Entrega: solo por correo a contacto@felipecuevas.dev, solo al instructor. Nadie comparte enlaces.
- 2026-11-23 · Marca: se usa el SVG de GTD autorizado por el cliente. La IA no redibuja el logo.
- 2026-11-23 · Video: solo demostración del instructor.
- 2026-11-23 · Imágenes: actividad compatible con cualquier versión de Nano Banana (máximo 5 datos, sin logo, sin imágenes de referencia).
- 2026-11-23 · Hito 1: comparar lo que muestre el selector de cada participante (rápido contra potente; con un solo modelo, prompt corto contra prompt paso a paso).
- 2026-11-23 · Galería de ejemplos: solo en las demostraciones del instructor, sin publicar. No se agrega al sitio.
- 2026-11-23 · Supuesto de licencias: los participantes pueden usar todas las funciones; cada actividad tiene plan B.

## Tareas

1. Leer `AGENTS.md`, `DESIGN.md` y los archivos de «Punto de partida». Confirmar que la épica 06 está cerrada; si no, detenerse y avisar.
2. Proponer la rama `iteracion/07-02-unidad-2` y esperar aprobación.
3. Medir la línea base: `pnpm build`, conteo de palabras visibles de la U2 y capturas de la U2 en 360 px y 1440 px, claro y oscuro.
4. **Decisión 1 (se detiene aquí): cómo mostrar los minutos.** Revisar cómo se dibujan hoy los bloques con `microcharlaMin` + `practicaMin` y los que usan `tipo` (U1). Entregar dos opciones con una captura o descripción de cada una: **A)** mantener `microcharlaMin` (explicación y demo) y `practicaMin` (práctica) con los minutos de la tabla; **B)** usar `tipo` (por ejemplo «Demostración 8 min + práctica 10 min») con el total como `minutos`. Señalar si la etiqueta «microcharla» queda inexacta con A (hay demos de 8 a 12 min). Recomendar y **esperar la elección del desarrollador**.
5. Aplicar la opción elegida a `bloque-0` a `bloque-5` y `cierre`, y comprobar que `bloques + holgura = duracionMin` y que los números de bloque son correlativos.
6. Aplicar los cambios de cuenta y modelos en los bloques y en `u2.yaml`, con ediciones mínimas.
7. Reemplazar las prácticas por los resúmenes del «Contenido aprobado» y agregar los prompts a la colección `prompts`, con su `<div data-prompt>`.
8. Reescribir el cierre y mostrarlo al desarrollador antes de publicarlo.
9. Agregar las 4 entradas a `descargas.yaml` y referenciar las 6 descargas en `u2.yaml` (solo cuando los archivos ya existan en `public/descargas/`).
10. Ajustar `recursos`, `terminadoCuando`, `miniProyecto` y `objetivoBreve`.
11. Proponer las síntesis afectadas, con su conteo de palabras, y esperar aprobación.
12. Buscar y corregir en `u2.yaml` y `bloques/u2` cualquier mención residual de «15 %», «microcharla de 3 minutos», «seis piezas», «vitrina», «espacio del curso» o «Google AI Plus» dirigida al participante.
13. Actualizar `registro-pendientes.md` y escribir la bitácora de la iteración.
14. Verificar: build, capturas comparadas con la línea base y lista de verificación de `AGENTS.md`.

## Tareas del desarrollador

1. Dejar en `public/descargas/` los 4 archivos: `u2-cuaderno-practica.pdf`, `u2-informe-respaldo.pdf`, `kit-marca-gtd.md` y `gtd-telsur.png`, antes de la tarea 9.
2. Elegir la opción de minutos (tarea 4).
3. Aprobar el cierre y las síntesis.
4. Confirmar con una cuenta de participante qué modelos muestra el selector, los nombres exactos de los botones y si «Exportar a Presentaciones» y «Exportar a Docs» están disponibles.
5. Confirmar los códigos HEX y la tipografía oficiales de GTD cuando el cliente los entregue (no bloquea esta iteración).

## Criterios de aceptación

- [x] `pnpm build` termina sin errores y sin marcadores `PENDIENTE_*`/`VERIFICAR` visibles.
- [x] `grep -rn "Flash-Lite\|Argon\|cuenta personal\|Google AI Plus\|espacio del curso\|<svg>" src/content/bloques/u2 src/content/unidades/u2.yaml` no devuelve resultados dirigidos al participante (queda 1: «Con Google AI Plus aparecen Auto e Hydrogen», texto aprobado que describe el plan).
- [x] Los minutos de los bloques suman 120, con 55 de explicación y demostración y 65 de práctica (o el equivalente de la opción B).
- [x] Cada práctica remite a su actividad del Cuaderno y los prompts publicados son idénticos a los del Cuaderno.
- [ ] La U2 muestra 6 descargas y los 2 PDF, el `.md` y el PNG abren desde el sitio publicado (en local sí; falta producción).
- [x] El bloque 5 no habla de compartir el enlace y el cierre explica la entrega por correo.
- [x] Sin cambios de diseño: `git diff --stat` solo toca `src/content/`, `public/descargas/` y `_planificacion/`, más la línea `.png` de `src/lib/descargas.ts` (excepción aprobada por el desarrollador). Las capturas coinciden en estructura con la línea base.
- [x] Ninguna síntesis supera su límite de palabras y todas las cambiadas tienen aprobación registrada en la bitácora.
- [x] El dato de la dirección de correo coincide con el entregado por el desarrollador.

## Riesgos

- **Los archivos no existen a tiempo:** la tarea 9 enlazaría archivos ausentes. Mitigación: hacerla al final; si faltan, entregar el resto y dejar la 9 abierta.
- **Los modelos cambian otra vez:** se revisa la página oficial el día anterior a cada clase y se ajusta solo el bloque 1.
- **Los nombres de botones difieren en la cuenta del curso:** el sitio usa las palabras de las guías oficiales y remite al cuaderno; el desarrollador los confirma con una cuenta de participante.
- **El bloque 2 o 5 crece demasiado en el modal:** el agente avisa; no recorta contenido aprobado por su cuenta.
- **El esquema no admite la opción de minutos elegida:** el agente se detiene y lo propone; no cambia `src/content.config.ts` sin aprobación.
- **La clase se dicta antes de aplicar esta iteración:** el Cuaderno de práctica cubre el vacío. Es el plan para el 25-11-2026.

## Fuera de alcance

- Cambios de diseño, componentes nuevos, JavaScript o dependencias.
- Las unidades 3 y 4 (aunque compartan textos de cuenta y modelos, por ejemplo `bloque-0` de la U3 y `bloque-4` de la U4).
- Generar los PDF, el informe y los ejemplos de referencia.
- La «Galería de ejemplos resueltos» (solo demostraciones del instructor).
- La recapitulación de 30 minutos de la Guía de la sesión 2 (va al inicio de la U3).

## Datos requeridos

### Del cliente

- Códigos HEX y tipografía oficiales de GTD (no bloquea).

### Del desarrollador

- Los 4 archivos de descarga, la elección de minutos, la aprobación del cierre y de las síntesis, y la confirmación de botones y modelos con una cuenta de participante.
