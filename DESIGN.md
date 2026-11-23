# DESIGN.md · Sistema de diseño del Mini-LMS «Gemini & Google Suite en el Entorno Laboral»

Fuente única de verdad del diseño del proyecto. Aplica la identidad visual de Felipe Cuevas (felipecuevas.dev) en su estilo **Moderno y creativo**, con modo claro y modo oscuro.

---

## 1. Concepto visual

**Un mosaico de bloques de color que muestra el curso como una ruta.** La página se lee como un tablero cercano y didáctico: bloques de color con esquinas grandes y asimétricas, círculos suaves que salen del marco y navegación en píldoras. Cada unidad tiene su bloque de color y conserva ese color en toda la página, para que el participante sepa siempre en qué parte de la ruta está.

**Recorrido de la página:** portada (título y ruta) → instructor → unidades U1 a U4 → pie. El instructor va antes del contenido para que el participante sepa quién dicta el curso antes de empezar, y cada unidad vive en su propia sala, separada de la siguiente por un espacio de respiro.

Principios:

1. **Práctica primero, detalle a un clic.** Cada unidad cabe en una pantalla de escritorio: se ve qué harás en cada bloque y sus ideas clave, y los prompts, las descargas, la teoría y los recursos se abren en modales desde la tarjeta del bloque.
2. **Un color por unidad, nunca como única señal.** El color ayuda a ubicarse, pero cada bloque también lleva su número, su nombre y su clase escritos.
3. **Ligero, con profundidad.** Bloques de color sólido y sin fotos. La profundidad viene de sombras teñidas con el color de cada unidad y de un brillo sutil que sigue al cursor; los degradados se usan solo en ese brillo, en la barra de avance de lectura y en la trama de puntos del fondo. Ningún efecto agrega imágenes ni librerías.

## 2. Color

Los colores son los oficiales de la identidad de felipecuevas.dev. No se agregan colores de marca nuevos.

### 2.1 Superficies

| Token | Claro | Oscuro | Uso |
| :---- | :---- | :----- | :-- |
| `--color-fondo` | `#FFFFFF` | `#00131D` | Fondo general |
| `--color-superficie` | `#E4F3FF` | `#00212F` | Círculos decorativos, paneles suaves, fondo de «Profundiza» |
| `--color-superficie-2` | `#ECF0FF` | `#003B51` | Grupo de la navegación en píldoras, chips, bloques de código |
| `--color-linea` | `#E4F3FF` | `#003B51` | Separadores de 1 px |
| `--color-hover-suave` | `#B1D4E9` | `#005877` | Hover de botones de ícono (modo, menú, cerrar) y píldoras de navegación |
| `--color-presionado` | `#99C8E0` | `#006486` | Fondo al presionar botones y píldoras (`:active`) |
| `--color-puntos` | `#003B51` al 17 % | `#005877` al 55 % | Trama de puntos del fondo: 1 px cada 22 px en el `<body>`, sin animación y sin trama al imprimir |
| `--color-linea-fuerte` | `--color-texto-2` al 18 % (≈ `#BACFDE` sobre `#E4F3FF`) | `--color-texto-2` al 18 % (≈ `#264250` sobre `#00212F`) | Separadores de 1 px que deben verse sobre el fondo o la superficie: filas del índice de la ruta, cifras de la credencial del instructor y divisiones del pie |
| `--color-placa` | `#FFFFFF` | `#FFFFFF` | Placa de la insignia de Gemini Certified Educator, que trae fondo blanco propio |

### 2.2 Acento y texto

| Token | Claro | Oscuro | Uso |
| :---- | :---- | :----- | :-- |
| `--color-texto` | `#00131D` | `#FFFFFF` | Títulos y texto principal |
| `--color-texto-2` | `#003B51` | `#E4F3FF` | Texto secundario y pie |
| `--color-primario` | `#007EA7` | `#00B0E8` | Botón principal, píldora activa, enlaces de redes |
| `--color-sobre-primario` | `#FFFFFF` | `#00131D` | Texto sobre el primario |
| `--color-enlace` | `#00678A` | `#5DC9FF` | Enlaces de texto en párrafos |
| `--color-foco` | `#007EA7` | `#F8CD46` | Anillo de foco |
| `--color-linkedin` | `#0A66C2` | `#FFFFFF` | Ícono de LinkedIn |

**Bloques de las unidades** (iguales en ambos modos; el texto encima va en el color indicado):

| Unidad | Bloque | Texto encima |
| :----- | :----- | :----------- |
| U1 · Fundamentos y prompts | `#007EA7` | `#FFFFFF` |
| U2 · Gemini | `#00B0E8` | `#00131D` |
| U3 · Gemini Notebook | `#003B51` | `#E4F3FF` |
| U4 · Skills e integrador | `#F8CD46` | `#3D2E00` |

En modo oscuro, el bloque de la U3 (`#003B51`) va con un borde de 1 px `#00B0E8`, porque contra el fondo `#00131D` no se distingue como bloque.

**Salas de las unidades** (fondo teñido del contenedor de cada unidad, sección 5; mezcla con `color-mix(in oklab, …)` sobre `--color-fondo`):

| Token | Claro | Oscuro |
| :---- | :---- | :----- |
| `--color-sala-u1` | U1 al 9 % (≈ `#EBF3F7`) | U1 al 16 % (≈ `#002230`) |
| `--color-sala-u2` | U2 al 9 % (≈ `#EEF8FD`) | U2 al 16 % (≈ `#002839`) |
| `--color-sala-u3` | U3 al 9 % (≈ `#E7ECEE`) | `--color-borde-u3` al 16 % (≈ `#002839`) |
| `--color-sala-u4` | U4 al 14 % (≈ `#FEF9E9`) | U4 al 12 % (≈ `#172727`) |

La U4 sube al 14 % en claro porque el amarillo se pierde sobre blanco, y baja al 12 % en oscuro para no virar a verde oliva. En oscuro, la sala de la U3 usa `--color-borde-u3` (igual que su sombra, su halo y su brillo) y se parece a la de la U2; las distingue su cabecera. Sin soporte de `color-mix()`, las salas usan `--color-superficie`.

### 2.3 Contraste

Contrastes según WCAG 2.2, tomados de la paleta verificada de la identidad:

| Combinación | Ratio | Resultado |
| :---------- | :---- | :-------- |
| `#00131D` sobre `#FFFFFF` | 18,90:1 | AAA, todo texto |
| `#003B51` sobre `#FFFFFF` | 12,04:1 | AAA, todo texto |
| `#003B51` sobre `#E4F3FF` | 10,64:1 | AAA, todo texto |
| `#00678A` sobre `#FFFFFF` | 6,35:1 | AA, enlaces en párrafos |
| `#FFFFFF` sobre `#007EA7` | 4,62:1 | AA justo: texto de 16 px o más |
| `#00131D` sobre `#00B0E8` | 7,54:1 | AAA, todo texto |
| `#3D2E00` sobre `#F8CD46` | 8,69:1 | AAA, todo texto |
| `#FFFFFF` sobre `#00131D` | 18,90:1 | AAA, todo texto |
| `#E4F3FF` sobre `#00131D` | 16,71:1 | AAA, todo texto |
| `#00B0E8` sobre `#00131D` | 7,54:1 | AAA, botones y enlaces |
| `#00B0E8` sobre `#003B51` | 4,80:1 | AA justo: texto de 16 px o más |
| `#007EA7` sobre `#E4F3FF` | 4,09:1 | Falla para texto normal: solo íconos y texto grande |
| `#00131D` sobre `#B1D4E9` | 12,12:1 | AAA, texto sobre `--color-hover-suave` (claro) |
| `#00131D` sobre `#99C8E0` | 10,53:1 | AAA, texto sobre `--color-presionado` (claro) |
| `#FFFFFF` sobre `#005877` | 7,89:1 | AAA, texto sobre `--color-hover-suave` (oscuro) |
| `#FFFFFF` sobre `#006486` | 6,63:1 | AA, texto sobre `--color-presionado` (oscuro) |
| `#5DC9FF` sobre `#00131D` | 10,14:1 | AAA, enlaces de texto y hover del botón principal (oscuro) |
| `#00678A` sobre `#E4F3FF` | 5,61:1 | AA, etiqueta «Instructor» y certificación sobre la credencial (claro) |
| `#5DC9FF` sobre `#00212F` | 8,95:1 | AAA, etiqueta «Instructor» y certificación sobre la credencial (oscuro) |
| `#E4F3FF` sobre `#00212F` | 14,75:1 | AAA, texto secundario sobre la credencial y el pie (oscuro) |
| `#00B0E8` sobre `#00212F` | 6,65:1 | Logo de Capacita Tu Futuro en el pie (oscuro); gráfico, exige 3:1 |
| `#007EA7` sobre `#E4F3FF` | 4,09:1 | Logo de Capacita Tu Futuro en el pie (claro); gráfico, exige 3:1 |
| `#00131D` sobre las salas (claro) | 15,87:1 o más | AAA, texto que quede directamente sobre una sala |
| `#FFFFFF` sobre las salas (oscuro) | 15,41:1 o más | AAA, texto que quede directamente sobre una sala |

Regla práctica: `#00B0E8` y `#F8CD46` nunca van como texto sobre blanco; sobre fondo claro, el texto de color se escribe en `#00678A` o más oscuro. El contraste es simétrico: `#E4F3FF` sobre `#003B51` es el mismo 10,64:1 de `#003B51` sobre `#E4F3FF`.

Excepción sobre la trama de puntos (modo oscuro): sobre el centro de un punto (`#00394F`, `--color-puntos` compuesto sobre `--color-fondo`), `--color-enlace` (`#5DC9FF`) baja de 10,14:1 a 6,63:1 y `--color-primario` (`#00B0E8`) de 7,54:1 a 4,93:1; pasan de AAA a AA. Es el peor caso, un punto de 1 px, y nunca baja de 4,5:1. Los demás textos mantienen su nivel en ambos modos.

## 3. Tipografía

| Rol | Familia | Pesos | Uso |
| :-- | :------ | :---- | :-- |
| Display | Sora | 600, 700 | Títulos de la portada, de las secciones y de los bloques |
| Texto | Work Sans | 400, 500 | Cuerpo, botones, navegación |
| Código | IBM Plex Mono | 400, 500 | Prompts, plantillas, porcentajes de avance, etiquetas en mayúsculas |

Fallbacks: `system-ui, sans-serif` para Sora y Work Sans; `ui-monospace, monospace` para IBM Plex Mono. Origen de las fuentes: archivos `woff2` autoalojados en el sitio, con subconjunto latino y `font-display: swap`. No se cargan desde Google Fonts.

Reglas:

1. Cuerpo de 16 px como mínimo (18 px en escritorio), interlínea de 1,6. Excepción: el texto de las tarjetas de bloque se queda en 16 px también en escritorio, para que cada unidad quepa en una pantalla; el cuerpo corrido y los modales siguen en 18 px.
2. Un solo `h1` (el título del curso en la portada); cada sección abre con un `h2` y cada bloque de unidad con un `h3`.
3. Ninguna otra familia tipográfica.

## 4. Espaciado, retícula y forma

- Contenedor: ancho máximo de 1100 px, márgenes laterales de 1,5 rem en móvil; la sección de cada unidad (su sala) llega a 1280 px desde 1280 px de ancho de ventana, para que quepa en una pantalla de escritorio.
- Espacio entre secciones: `--espacio-unidades` = `clamp(4rem, 2.5rem + 4vw, 6rem)` (unos 64 px en móvil y 96 px en escritorio) antes de cada unidad. Entre la portada y el instructor, 2,5 rem (3 rem desde 1024 px). Ese espacio va fuera de la sección, así que no cuenta para la regla de «una unidad en una pantalla».
- Sala de la unidad: relleno de 10 px (8 px en móvil) entre su borde y la cabecera y las tarjetas, y 8 px entre la cabecera y la cuadrícula.
- Retícula: móvil primero, siempre con `minmax(0, 1fr)`. La ruta va como índice de 4 filas en todos los anchos; las tarjetas de cada unidad, en 1 columna en móvil, 2 desde 640 px y 3 desde 1024 px. La credencial del instructor va en 2 columnas (insignia de 10 rem y texto) desde 1024 px y en 1 columna antes; sus 3 cifras, en fila desde 640 px.
- Radios: 24 a 32 px en bloques, con esquina asimétrica en los bloques destacados (`28px 28px 28px 6px`): cabeceras de unidad, salas, credencial del instructor y tarjetas. El cuadrado de número de la ruta usa la misma esquina a escala (`12px 12px 12px 3px`) y la placa de la insignia `20px 20px 20px 4px`. Píldoras con radio completo.
- Sombras: tokens de color `--sombra-u1` a `--sombra-u4` (color de la unidad mezclado con `color-mix()`) y `--sombra-neutra` (tarjetas sin unidad); la forma de la sombra la pone la tarjeta. En reposo, sombra suave; en hover y con foco de teclado (`:focus-visible`, no con un clic), la tarjeta sube 4 px y la sombra se amplía. En modo oscuro, menos opacidad y un halo de 1 px con los tokens `--halo-u1` a `--halo-u4` (transparentes en claro). La U3 usa `--color-borde-u3` en oscuro para la sombra, el halo, el brillo y la barra de avance, porque `#003B51` no se ve sobre `#00131D`.

## 5. Componentes

| Componente | Descripción y reglas |
| :--------- | :------------------- |
| Encabezado | Navegación en píldoras sobre `--color-superficie-2` con enlaces en el orden de la página: Ruta, Instructor y Unidades (U1 a U4); el hover de cada píldora usa `--color-hover-suave` y la píldora de la sección visible (`aria-current`) conserva `--color-primario` con texto `--color-sobre-primario`. En móvil se pliega en un menú con botón (`aria-expanded`, `aria-controls`). Incluye el botón de modo. |
| Portada y ruta | Una sola sección en el primer pantallazo: a la izquierda, título (`h1`), lema en Sora 600 y `--color-primario`, la ficha del curso en IBM Plex Mono («4 clases · 8 horas · 20 bloques · 24 prompts», calculada del contenido), botón principal «Conoce a tu instructor» (a `#instructor`), redes y, bajo una línea de 1 px, los logos de Google, GTD Telsur y Capacita Tu Futuro (este en `--color-primario`); a la derecha, la ruta: su `h2` con el logo de Gemini junto a él (48 px en móvil y 56 px desde 640 px) y un índice de 4 filas, una por unidad, separadas por líneas de 1 px `--color-linea-fuerte`. Cada fila lleva un cuadrado de 44 px del color de la unidad con su número en Sora 700 (texto `--color-sobre-uN`; la U3 con su borde en oscuro), el nombre (`h3`, Sora 600), «Mini-proyecto: …» completo en `--color-texto-2` y «Clase n» en IBM Plex Mono a la derecha («de 4» solo para lectores de pantalla). Al pie del índice, la nota «Cada clase · 120 min» en IBM Plex Mono, calculada del contenido. Cada fila entera enlaza a su sección; el color queda solo en el cuadrado, sin sombra ni brillo. La ruta conserva su `id="ruta"` y su `h2`. Sin barras de avance (RDA-013). En 1440 × 900 y en 1366 × 657, la portada completa se ve sin desplazarse. |
| Sección de unidad | Vive en una sala: un contenedor con radio `28px 28px 28px 6px` y fondo `--color-sala-uN` que reúne la cabecera y la cuadrícula; la trama de puntos solo se ve fuera de la sala, y antes de cada unidad va `--espacio-unidades`. Cabe en una pantalla de escritorio de 1440 × 900; en 1366 × 657 ocupa algo más de una pantalla (unos 1,4 de alto). Cabecera con el bloque de color de la unidad: a la izquierda, el número de la unidad en Sora 700; a la derecha, título, objetivo breve y «Clase n de 4 · 120 min» en IBM Plex Mono (sin barra de avance, RDA-013), píldoras «Antes de empezar» y «Cierre» (si existen) y acciones «Sobre la unidad», «Recursos (n)» y «Descargas (n)». Debajo, una cuadrícula de 6 tarjetas (3 × 2 desde 1024 px, 2 columnas desde 640 px, 1 en móvil): una por bloque y una de «Terminado cuando…», que muestra el entregable y un botón «Terminado cuando… (n)» que abre la lista en un modal. Sin tabla de bloques. |
| Tarjeta de bloque | Marca de 40 × 6 px del color de la unidad, número y minutos en IBM Plex Mono, título (`h3`), «Qué harás» y la primera clave; la tarjeta entera abre el detalle con el enlace «Ver detalle» y su flecha, y el único botón visible es «Ver prompt» o «Prompts (n)». Superficie `--color-fondo` con borde de 1 px `--color-linea` y sombra de su unidad. La tarjeta «Terminado cuando…» va como ticket: borde discontinuo de 1,5 px (en pantallas de escala 1 el navegador lo dibuja de 1 px), fondo `--color-superficie` y sin sombra. |
| Modal | `<dialog>` nativo (RDA-011): franja del color de la unidad, o `--color-primario` si el modal no pertenece a una unidad, como la trayectoria del instructor, título, una línea de datos en IBM Plex Mono («Bloque n · m min · Unidad n»; «Antes de empezar · m min · Unidad n» en el bloque 0 y «Cierre · m min · Unidad n» en el cierre), botón «Cerrar» de 44 px, resumen del bloque como entradilla, cuerpo con desplazamiento propio de hasta `min(85dvh, 760px)` y 720 px de ancho; hoja completa desde abajo bajo 640 px. Fondo `--color-fondo` al 70 % con desenfoque de 4 px. Variantes: prompts del bloque, detalle del bloque, recursos y descargas de la unidad, «Sobre la unidad» y «Terminado cuando…» (lista de casillas nativas que no guardan estado). Sin JavaScript, su contenido se ve en la página. |
| Bloque de prompt | Fondo `--color-superficie-2`, texto en IBM Plex Mono de 14 px (excepción a la regla 1 de la sección 3, como bloque de código), botón «Copiar» en la esquina superior derecha desde 640 px y bajo el título y la descripción en móvil. Al copiar, el botón cambia a «Copiado» por 2 s y lo anuncia con `aria-live="polite"`. El texto es seleccionable aunque no haya JavaScript. |
| «Profundiza en tu tiempo» | Apartado al final del modal de detalle del bloque, con los enlaces a documentación y videos oficiales de Google. |
| Enlace a recurso externo | Ícono de línea que dice el tipo (documento o video), el nombre del recurso y el sitio de destino; abre en pestaña nueva y lo anuncia con texto oculto «(se abre en una pestaña nueva)». |
| Tarjeta de descarga | Nombre del archivo, formato y peso (por ejemplo «CSV · 24 KB»), con botón de contorno «Descargar». |
| Instructor | Va justo después de la portada, antes de las unidades. Es una credencial: un contenedor del ancho del sitio sobre `--color-superficie`, con radio `28px 28px 28px 6px` (en oscuro, con borde de 1 px `--color-superficie-2`) y un círculo decorativo `--color-fondo` al 85 % que sale del marco arriba a la derecha. A la izquierda, la insignia de Gemini Certified Educator sobre una placa `--color-placa` y, debajo, «Vigente hasta {vigencia}» en IBM Plex Mono. A la derecha, el `h2` «Instructor» como etiqueta (IBM Plex Mono en mayúsculas, `--color-enlace`), el nombre (`h3`) en Sora 700 grande, la certificación en Sora 600 y `--color-enlace` con su nombre en inglés y su emisor, el resumen de la trayectoria (líneas 1 y 3 de `trayectoria`) y las acciones: botón principal «Empezar por la Unidad 1» (a `#unidad-1`), botón de contorno «Ver trayectoria completa» (modal) y redes. Al pie de la credencial, separadas por líneas `--color-linea-fuerte`, las 3 cifras de `cifras` en `instructor.yaml`, con el número en Sora 700 y el texto en `--color-texto-2`. En móvil, la insignia va arriba y las cifras se apilan. El modal de la trayectoria no repite la insignia. |
| Pie | Sobre `--color-superficie`. Desde 1024 px tiene dos zonas separadas por una línea vertical de 1 px `--color-linea-fuerte`. A la izquierda, el nombre del curso y las redes. A la derecha, alineados a la derecha, la etiqueta «Organismo Técnico de Capacitación» (IBM Plex Mono en mayúsculas, `--color-texto-2`) y el logo de Capacita Tu Futuro de 48 px de alto en `--color-primario`. Debajo, a todo el ancho y sobre una línea `--color-linea-fuerte`, el aviso «Material de capacitación con datos ficticios o públicos» y la licencia «Todos los derechos reservados.» en texto pequeño. En móvil, todo va en una columna: la etiqueta y el logo, alineados a la izquierda, en su propia fila sobre una línea horizontal. |
| Redes | Texto visible exacto `www.felipecuevas.dev` (a `https://felipecuevas.dev/`) y `www.linkedin.com/in/ffelipecuevasc/` (a `https://www.linkedin.com/in/ffelipecuevasc/`); ícono y texto forman un solo enlace. El enlace a felipecuevas.dev lleva el SVG de Chrome y el de LinkedIn lleva el SVG de LinkedIn (en claro con `--color-linkedin` y en oscuro con el glifo invertido, como en los tokens); texto `#003B51` en claro y `#E4F3FF` en oscuro. Van en la portada (pequeñas, abajo a la izquierda) y en el pie. |

### 5.1 Botones

| Variante | Fondo | Texto | Hover |
| :------- | :---- | :---- | :---- |
| Principal | `--color-primario` | `--color-sobre-primario` | Claro: `#00678A`; oscuro: `#5DC9FF` |
| Secundario (contorno) | Transparente, borde 1,5 px `--color-primario` | `--color-texto` | Fondo `--color-primario`, texto `--color-sobre-primario` |
| Secundario sobre el color de la unidad | Transparente, borde 1,5 px del color del texto del bloque (`--color-sobre-uN`) | Color del texto del bloque | Colores invertidos: fondo del color del texto y texto del color del bloque; el foco usa el color del texto del bloque |
| Ícono (modo, menú, cerrar) | `--color-superficie-2` | `--color-texto` | Fondo `--color-hover-suave` y borde de 1,5 px `--color-primario`; el botón de modo muestra además un globo con su acción («Cambiar a modo oscuro» / «Cambiar a modo claro») |

Todos: forma de píldora, alto mínimo de 44 px, `cursor: pointer`, foco visible con `outline: 2px solid var(--color-foco); outline-offset: 3px`, y al presionar `scale(0.97)` con fondo `--color-presionado`. El cambio entre reposo y hover tiene al menos 1,3:1 de diferencia de luminancia. Solo un botón principal por sección.

## 6. Íconos y logotipos

- Íconos de interfaz: SVG de línea en línea, del mismo grosor, con `aria-hidden="true"` cuando el texto acompaña. Un botón que solo tiene ícono lleva `aria-label`.
- Logotipos de Gemini, Google y Chrome: se usan los SVG que entrega el desarrollador, tal cual, sin redibujarlos, recolorearlos ni deformarlos. La única animación permitida sobre un logotipo es la entrada única de la estrella de Gemini en la ruta (sección 7), que termina en su forma, tamaño y colores originales. El de Gemini y el de Google van en la portada y donde se nombre la herramienta; el de Chrome, junto al enlace a felipecuevas.dev. El SVG de Gemini usa `mask` y `filter` con identificadores propios: si aparece más de una vez en la página, cada copia lleva identificadores únicos. Los logotipos de Gemini y Google van con `role="img"` y un `aria-label` («Gemini», «Google»).
- Logotipos de GTD Telsur y Capacita Tu Futuro: SVG que entrega el desarrollador, con `role="img"` y `aria-label` («GTD Telsur», «Capacita Tu Futuro»), sin cambiar sus trazados ni sus proporciones. El de GTD va solo en el hero, con sus colores originales. El de Capacita Tu Futuro va en el hero (24 px de alto) y en el pie (48 px), recoloreado en ambos con `--color-primario` por medio de `currentColor`. En el pie lleva sobre él la etiqueta visible «Organismo Técnico de Capacitación», que describe qué es y no sugiere respaldo (AGENTS.md, regla de contenido 6).
- Insignia de Gemini Certified Educator: el PNG que entrega el desarrollador (`src/assets/instructor/`), con `astro:assets`, sin recortarla ni recolorearla, sobre la placa `--color-placa` de la credencial del instructor. Su texto alternativo es «Insignia de Gemini Certified Educator».
- Ícono de LinkedIn: el SVG que entrega el desarrollador, recoloreado con tokens (círculo `--color-linkedin`, glifo `--color-fondo`). Los íconos de redes no llevan efectos.
- Los SVG viven como archivos individuales en `src/assets/iconos/`.

## 7. Movimiento

- Transiciones de 150 a 300 ms en hover y foco. Se animan sobre todo `transform` y `opacity`; los cambios de color de fondo y de sombra en hover no superan los 200 ms. Duraciones en tokens: `--duracion-hover` (200 ms), `--duracion-modal` (350 ms), `--duracion-entrada` (500 ms), `--duracion-estrella` (800 ms) y `--escalonado` (60 ms). Las animaciones de entrada son utilidades de Tailwind v4 declaradas en `@theme` (`--animate-entrada`, `--animate-estrella`) con sus `@keyframes`, en CSS nativo: sin plugins de animación.
- Cambio de modo: el modo nuevo se revela con un círculo de borde difuminado que crece desde el centro de la pantalla hasta cubrirla, en 1 s, con la curva `--ease-expo-out` (`cubic-bezier(0.16, 1, 0.3, 1)`). Se hace con la API View Transitions (`document.startViewTransition`); el modo anterior queda quieto debajo. En navegadores sin esa API, el modo cambia al instante.
- Modales: al abrir desde una tarjeta o, si no la hay, desde el botón, ese origen se transforma en el modal con View Transitions en 350 ms con `--ease-expo-out`, y vuelve a él al cerrar; la página queda quieta y el fondo del modal aparece sin fundido. No se inicia si hay otra transición en curso (el cambio de modo). Sin la API, entrada con `@starting-style` (escala 0,96 → 1 y opacidad) y fundido del fondo; el cierre es inmediato.
- Barra de avance de lectura de 3 px bajo el encabezado del sitio, guiada por el desplazamiento (`animation-timeline: scroll(root)`), con el color de la unidad visible (`<html data-unidad>`, que pone el script del encabezado); fuera de una unidad, `--color-primario`.
- Las tarjetas de cada unidad aparecen al entrar en la ventana (opacidad y 12 px) con `animation-timeline: view()`, con un desfase según la columna (8 % del tramo de entrada por columna, el equivalente de unos 40 ms); sin soporte, se ven desde el inicio.
- Brillo radial al 12 % que sigue al cursor en las tarjetas de bloque, solo con puntero fino, del color de la unidad (`--tinte`).
- Filas de la ruta: en hover y con foco de teclado, fondo `--color-superficie` y el cuadrado del número sube 2 px, en 200 ms; sin sombra ni brillo.

### 7.1 Momento focal: entrada de la portada (una vez, al cargar)

- **Entrada escalonada (E1):** el lema, la ficha del curso, el botón principal y las redes (columna de texto), y las 4 filas de la ruta, aparecen con opacidad 0 → 1 y subida de 8 px, con la utilidad `animate-entrada` (`--duracion-entrada`, 500 ms, `--ease-expo-out`) y un desfase de `--escalonado` (60 ms) por posición: de 0 a 3 en la columna de texto y de 1 a 4 en las filas de la ruta. La secuencia termina antes de 800 ms. **El `h1`, el `h2` «Ruta del curso», la fila de logos y el círculo decorativo no se animan**: el `h1` es el elemento LCP y animar su opacidad retrasaría el LCP, y los logos siguen la sección 7.4.
- **Estrella de Gemini (E2a):** entrada única con la utilidad `animate-estrella`: escala 0,6 → 1, giro −45° → 0° y opacidad 0 → 1, en `--duracion-estrella` (800 ms) con `--ease-expo-out` y 120 ms de retraso. Termina en su forma, tamaño y colores originales y no se repite.
- Es CSS puro: no depende del script, corre una sola vez por carga y no vuelve a correr al navegar por anclas.

### 7.2 Movimiento ligado al desplazamiento

Todo va dentro de `@supports (animation-timeline: view())` (Baseline desde octubre de 2026); sin soporte, cada elemento se ve en su estado final.

- **Credencial del instructor (E4):** se revela con `clip-path: circle()` que crece desde la esquina asimétrica (abajo a la izquierda, `circle(0% at 0% 100%)` → `circle(150% at 0% 100%)`), con `animation-timeline: view()` y `animation-range: entry 0% entry 60%`.
- **Sala que se enciende (E7):** el tinte de la sala vive en una capa `::before` (`background: var(--sala)`, el mismo `--color-sala-uN`) cuya opacidad sube de 0 a 1 al entrar la unidad y baja a 0 al salir: fotogramas 0 %, 25 %, 75 % y 100 % (0 → 1 → 1 → 0) sobre `animation-range: cover 0% cover 100%` de la línea de tiempo `--unidad` (`view-timeline` de `.seccion-unidad`). Con la unidad anclada bajo el encabezado, la sala está encendida por completo. Se anima solo `opacity`; nunca `background-color`.
- **Número que llega (E8):** el número grande de la cabecera pasa de opacidad 0 y 16 px más abajo a su lugar, con la línea de tiempo `--unidad` y `animation-range: entry 0% entry 50%`.
- Las tarjetas de cada unidad mantienen su aparición escalonada de la 05-07.

### 7.3 Continuidad al navegar

- **Aterrizaje (E10):** al llegar a una unidad por un ancla (`.seccion-unidad:target`, desde la navegación, la ruta o la URL), la cabecera hace un destello único: un anillo `box-shadow` del color de la unidad (`--bloque` al 50 %) que crece de 0 a 6 px y se desvanece hasta 14 px, en 900 ms con `--ease-expo-out` y 350 ms de retraso (lo que tarda el desplazamiento suave). El número suma, como segunda animación, una escala de 1,18 → 1 en 700 ms, sin pisar la de E8. Repetir el clic en la misma ancla no lo vuelve a disparar.
- **Píldora que se desliza (E11):** desde 1024 px, la píldora de la sección activa es una sola capa (`::after` del grupo de la navegación, después de los enlaces, como exige el ancla) posicionada con CSS Anchor Positioning sobre el enlace `aria-current` (`anchor-name: --pildora-activa`). Se desliza entre secciones con transiciones de 300 ms y `--ease-expo-out`. Va dentro de `@supports (anchor-name: --a)`; sin soporte, o si el navegador no anima el cambio de ancla, la píldora salta como antes. En el menú móvil no cambia nada.

### 7.4 Límites

- No se usan animaciones infinitas, parallax, fondos animados (la trama de puntos no se mueve) ni efectos sobre los logotipos, salvo la entrada única de la estrella de Gemini (7.1). Los logos de Google, GTD Telsur y Capacita Tu Futuro y la insignia de Gemini Certified Educator no se animan.
- Se animan solo `opacity`, `translate`, `scale`, `rotate`, `clip-path` y `box-shadow` (este último solo en el destello único de E10). Nada que cambie el layout.
- Con `prefers-reduced-motion: reduce`, se quitan todas las transiciones y animaciones: el revelado del cambio de modo, la transición de los modales, la barra de avance, las apariciones, la entrada de la portada y de la estrella, la credencial, la sala que se enciende (queda encendida), el número que llega, el aterrizaje, el deslizamiento de la píldora, el brillo, la subida del cuadrado en las filas de la ruta y el desplazamiento suave a las anclas. Todo se ve en su estado final.
- Al imprimir, no hay animaciones: todo en su estado final y las salas sin fondo.

## 8. Implementación de los tokens

Los tokens viven en `src/styles/global.css`, en un bloque `@theme` de Tailwind v4 para los valores de modo claro, y se redefinen bajo `[data-modo="oscuro"]` para el modo oscuro. El modo inicial sigue `prefers-color-scheme`; si el participante elige otro con el botón, la elección se guarda en `localStorage` y un script en línea en el `<head>` la aplica antes de pintar, para que no haya parpadeo. Los componentes usan solo las clases generadas por esos tokens. Los tokens derivados (`--color-puntos`, `--color-linea-fuerte`, `--color-sala-u1` a `--color-sala-u4`, sombras y halos) se calculan con `color-mix(in oklab, …)` a partir de los colores de esta guía; no son colores de marca nuevos. `--espacio-unidades` vive junto a ellos.

## 9. Voz y textos

- Español de Chile, trato de tú, frases cortas. Primero la acción, después la explicación («Copia el prompt y pégalo en Gemini»).
- Botones con verbo: «Ver la ruta», «Copiar», «Descargar», «Abrir documentación».
- Sin signos de exclamación ni frases de venta. Los nombres de las herramientas, como los escribe Google.