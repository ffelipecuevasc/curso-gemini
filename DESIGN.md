# DESIGN.md · Sistema de diseño del Mini-LMS «Gemini & Google Suite en el Entorno Laboral»

Fuente única de verdad del diseño del proyecto. Aplica la identidad visual de Felipe Cuevas (felipecuevas.dev) en su estilo **Moderno y creativo**, con modo claro y modo oscuro.

---

## 1. Concepto visual

**Un mosaico de bloques de color que muestra el curso como una ruta.** La página se lee como un tablero cercano y didáctico: bloques de color con esquinas grandes y asimétricas, círculos suaves que salen del marco y navegación en píldoras. Cada unidad tiene su bloque de color y conserva ese color en toda la página, para que el participante sepa siempre en qué parte de la ruta está.

Principios:

1. **Práctica primero, detalle a un clic.** Cada unidad cabe en una pantalla de escritorio: se ve qué harás en cada bloque y sus ideas clave, y los prompts, las descargas, la teoría y los recursos se abren en modales desde la tarjeta del bloque.
2. **Un color por unidad, nunca como única señal.** El color ayuda a ubicarse, pero cada bloque también lleva su número, su nombre y su porcentaje de avance escritos.
3. **Ligero, con profundidad.** Bloques de color sólido y sin fotos. La profundidad viene de sombras teñidas con el color de cada unidad y de un brillo sutil que sigue al cursor; los degradados se usan solo en ese brillo y en la barra de avance de lectura. Ningún efecto agrega imágenes ni librerías.

## 2. Color

Los colores son los oficiales de la identidad de felipecuevas.dev. No se agregan colores de marca nuevos.

### 2.1 Superficies

| Token | Claro | Oscuro | Uso |
| :---- | :---- | :----- | :-- |
| `--color-fondo` | `#FFFFFF` | `#00131D` | Fondo general |
| `--color-superficie` | `#E4F3FF` | `#00212F` | Círculos decorativos, paneles suaves, fondo de «Profundiza» |
| `--color-superficie-2` | `#ECF0FF` | `#003B51` | Grupo de la navegación en píldoras, chips, bloques de código |
| `--color-linea` | `#E4F3FF` | `#003B51` | Separadores de 1 px |

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

Regla práctica: `#00B0E8` y `#F8CD46` nunca van como texto sobre blanco; sobre fondo claro, el texto de color se escribe en `#00678A` o más oscuro. El contraste de `#E4F3FF` sobre `#003B51` y de `#5DC9FF` sobre `#00131D` se mide en la iteración de tokens y se agrega a esta tabla antes de usarlos en texto pequeño.

## 3. Tipografía

| Rol | Familia | Pesos | Uso |
| :-- | :------ | :---- | :-- |
| Display | Sora | 600, 700 | Títulos de la portada, de las secciones y de los bloques |
| Texto | Work Sans | 400, 500 | Cuerpo, botones, navegación |
| Código | IBM Plex Mono | 400, 500 | Prompts, plantillas, porcentajes de avance, etiquetas en mayúsculas |

Fallbacks: `system-ui, sans-serif` para Sora y Work Sans; `ui-monospace, monospace` para IBM Plex Mono. Origen de las fuentes: archivos `woff2` autoalojados en el sitio, con subconjunto latino y `font-display: swap`. No se cargan desde Google Fonts.

Reglas:

1. Cuerpo de 16 px como mínimo (18 px en escritorio), interlínea de 1,6.
2. Un solo `h1` (el título del curso en la portada); cada sección abre con un `h2` y cada bloque de unidad con un `h3`.
3. Ninguna otra familia tipográfica.

## 4. Espaciado, retícula y forma

- Contenedor: ancho máximo de 1100 px, márgenes laterales de 1,5 rem en móvil.
- Retícula: móvil primero; mosaico de 1 columna en móvil, 2 desde 640 px y 4 desde 1024 px (la ruta tiene 4 unidades), siempre con `minmax(0, 1fr)`.
- Radios: 24 a 32 px en bloques, con esquina asimétrica en los bloques destacados (`28px 28px 28px 6px`); píldoras con radio completo.
- Sombras: tokens `--sombra-u1` a `--sombra-u4` (color de la unidad mezclado con `color-mix()`) y `--sombra-neutra`. En reposo, sombra suave; en hover y foco, la tarjeta sube 4 px y la sombra se amplía. En modo oscuro, menos opacidad y un halo de 1 px del color de la unidad.

## 5. Componentes

| Componente | Descripción y reglas |
| :--------- | :------------------- |
| Encabezado | Navegación en píldoras sobre `--color-superficie-2` con enlaces a Ruta, Unidades (U1 a U4) e Instructor; la píldora de la sección visible se marca con `aria-current`. En móvil se pliega en un menú con botón (`aria-expanded`, `aria-controls`). Incluye el botón de modo. |
| Portada y ruta | Una sola sección en el primer pantallazo: a la izquierda, título (`h1`), lema, botón principal «Empezar por la Unidad 1» y redes; a la derecha, el logo de Gemini como protagonista y, en primer plano, las 4 tarjetas de unidad en mosaico 2 × 2 (número, nombre, mini-proyecto en 2 líneas y barra de avance con su texto en IBM Plex Mono), cada una enlazada a su sección. Logos de Google, GTD Telsur y Capacita Tu Futuro en una franja discreta al pie de la sección. La ruta conserva su `id="ruta"` y su `h2`. |
| Sección de unidad | Cabe en una pantalla de escritorio (1440 × 900 y 1366 × 657). Cabecera con el bloque de color de la unidad: clase y duración en IBM Plex Mono, título, objetivo breve, barra de avance del tramo, píldoras «Antes de empezar» y «Cierre» (si existen) y acciones «Sobre la unidad», «Recursos (n)» y «Descargas (n)». Debajo, una cuadrícula de 6 tarjetas (3 × 2 desde 1024 px, 2 columnas desde 640 px, 1 en móvil): una por bloque y una de «Terminado cuando…». Sin tabla de bloques. |
| Tarjeta de bloque | Número y minutos en IBM Plex Mono, título (`h3`), «Qué harás» y hasta 2 claves; acciones «Ver detalle» y «Ver prompt» o «Prompts (n)». Superficie `--color-fondo` con borde de 1 px `--color-linea`, franja superior del color de la unidad y sombra de su unidad. |
| Modal | `<dialog>` nativo (RDA-011): franja del color de la unidad, título, botón «Cerrar» de 44 px, cuerpo con desplazamiento propio de hasta `min(85dvh, 760px)` y 720 px de ancho; hoja completa desde abajo bajo 640 px. Fondo `--color-fondo` al 70 % con desenfoque de 4 px. Variantes: prompts del bloque, detalle del bloque, recursos y descargas de la unidad, y «Sobre la unidad». Sin JavaScript, su contenido se ve en la página. |
| Bloque de prompt | Fondo `--color-superficie-2`, texto en IBM Plex Mono, botón «Copiar» en la esquina superior derecha. Al copiar, el botón cambia a «Copiado» por 2 s y lo anuncia con `aria-live="polite"`. El texto es seleccionable aunque no haya JavaScript. |
| «Profundiza en tu tiempo» | Apartado al final del modal de detalle del bloque, con los enlaces a documentación y videos oficiales de Google. |
| Enlace a recurso externo | Ícono de línea que dice el tipo (documento o video), el nombre del recurso y el sitio de destino; abre en pestaña nueva y lo anuncia con texto oculto «(se abre en una pestaña nueva)». |
| Tarjeta de descarga | Nombre del archivo, formato y peso (por ejemplo «CSV · 24 KB»), con botón de contorno «Descargar». |
| Instructor | Franja compacta: nombre, certificación de Gemini primero, resumen de la trayectoria tomado del documento del curso y botón «Ver trayectoria completa» (modal); enlaces a felipecuevas.dev y LinkedIn. |
| Pie | Enlaces de redes, nombre del curso y aviso «Material de capacitación con datos ficticios o públicos». |
| Redes | Texto visible exacto `www.felipecuevas.dev` (a `https://felipecuevas.dev/`) y `www.linkedin.com/in/ffelipecuevasc/` (a `https://www.linkedin.com/in/ffelipecuevasc/`); ícono y texto forman un solo enlace. El enlace a felipecuevas.dev lleva el SVG de Chrome y el de LinkedIn lleva el SVG de LinkedIn (en claro con `--color-linkedin` y en oscuro con el glifo invertido, como en los tokens); texto `#003B51` en claro y `#E4F3FF` en oscuro. Van en la portada (pequeñas, abajo a la izquierda) y en el pie. |

### 5.1 Botones

| Variante | Fondo | Texto | Hover |
| :------- | :---- | :---- | :---- |
| Principal | `--color-primario` | `--color-sobre-primario` | Claro: `#00678A`; oscuro: `#5DC9FF` |
| Secundario (contorno) | Transparente, borde 1,5 px `--color-primario` | `--color-texto` | Fondo `--color-primario`, texto `--color-sobre-primario` |
| Ícono (modo, menú, cerrar) | `--color-superficie-2` | `--color-texto` | Fondo `--color-hover-suave` y borde de 1,5 px `--color-primario`; el botón de modo muestra además un globo con su acción («Cambiar a modo oscuro» / «Cambiar a modo claro») |

Todos: forma de píldora, alto mínimo de 44 px, `cursor: pointer`, foco visible con `outline: 2px solid var(--color-foco); outline-offset: 3px`, y al presionar `scale(0.97)` con fondo `--color-presionado`. El cambio entre reposo y hover tiene al menos 1,3:1 de diferencia de luminancia. Solo un botón principal por sección.

## 6. Íconos y logotipos

- Íconos de interfaz: SVG de línea en línea, del mismo grosor, con `aria-hidden="true"` cuando el texto acompaña. Un botón que solo tiene ícono lleva `aria-label`.
- Logotipos de Gemini, Google y Chrome: se usan los SVG que entrega el desarrollador, tal cual, sin redibujarlos, recolorearlos ni deformarlos. El de Gemini y el de Google van en la portada y donde se nombre la herramienta; el de Chrome, junto al enlace a felipecuevas.dev. El SVG de Gemini usa `mask` y `filter` con identificadores propios: si aparece más de una vez en la página, cada copia lleva identificadores únicos. Los logotipos de Gemini y Google van con `role="img"` y un `aria-label` («Gemini», «Google»).
- Logotipos de GTD Telsur y Capacita Tu Futuro: SVG que entrega el desarrollador, solo en el hero, sin texto visible y con `role="img"` y `aria-label` («GTD Telsur», «Capacita Tu Futuro»). Se pueden recolorear con tokens para que se distingan en ambos modos, sin cambiar sus trazados ni sus proporciones.
- Ícono de LinkedIn: el SVG que entrega el desarrollador, recoloreado con tokens (círculo `--color-linkedin`, glifo `--color-fondo`). Los íconos de redes no llevan efectos.
- Los SVG viven como archivos individuales en `src/assets/iconos/`.

## 7. Movimiento

- Transiciones de 150 a 300 ms en hover y foco. Se animan sobre todo `transform` y `opacity`; los cambios de color de fondo y de sombra en hover no superan los 200 ms.
- Cambio de modo: el modo nuevo se revela con un círculo de borde difuminado que crece desde el centro de la pantalla hasta cubrirla, en 1 s, con la curva `--ease-expo-out` (`cubic-bezier(0.16, 1, 0.3, 1)`). Se hace con la API View Transitions (`document.startViewTransition`); el modo anterior queda quieto debajo. En navegadores sin esa API, el modo cambia al instante.
- Modales: al abrir desde una tarjeta, la tarjeta se transforma en el modal con View Transitions en 350 ms con `--ease-expo-out`; sin la API, entrada con `@starting-style` (escala 0,96 → 1 y opacidad) y fundido del fondo.
- Barra de avance de lectura de 3 px bajo el encabezado, guiada por el desplazamiento (`animation-timeline: scroll(root)`), con el color de la unidad visible.
- Las tarjetas de cada unidad aparecen al entrar en la ventana (opacidad y 12 px, desfase de 40 ms) con `animation-timeline: view()`; sin soporte, se ven desde el inicio.
- Brillo radial del color de la unidad al 12 % que sigue al cursor en las tarjetas, solo con puntero fino.
- No se usan animaciones infinitas, parallax, fondos animados ni efectos sobre los logotipos.
- Con `prefers-reduced-motion: reduce`, se quitan todas las transiciones y animaciones: el revelado del cambio de modo, la transición de los modales, la barra de avance, las apariciones, el brillo y el desplazamiento suave a las anclas.

## 8. Implementación de los tokens

Los tokens viven en `src/styles/global.css`, en un bloque `@theme` de Tailwind v4 para los valores de modo claro, y se redefinen bajo `[data-modo="oscuro"]` para el modo oscuro. El modo inicial sigue `prefers-color-scheme`; si el participante elige otro con el botón, la elección se guarda en `localStorage` y un script en línea en el `<head>` la aplica antes de pintar, para que no haya parpadeo. Los componentes usan solo las clases generadas por esos tokens.

## 9. Voz y textos

- Español de Chile, trato de tú, frases cortas. Primero la acción, después la explicación («Copia el prompt y pégalo en Gemini»).
- Botones con verbo: «Ver la ruta», «Copiar», «Descargar», «Abrir documentación».
- Sin signos de exclamación ni frases de venta. Los nombres de las herramientas, como los escribe Google.