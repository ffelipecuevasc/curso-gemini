---
unidad: u2
numero: 3
titulo: "Infografía con marca: imagen vs. código"
minutos: 22
microcharlaMin: 12
practicaMin: 10
sintesis:
  resumen: "Distingue la infografía como imagen y como código en Canvas, y crea la versión imagen con la paleta GTD sin inventar el logotipo."
  haras: "Crearás una infografía del trimestre con la paleta GTD y cifras revisadas."
  claves:
    - "La IA nunca genera el logo: usa el archivo oficial."
    - "En Canvas con código obtienes colores HEX exactos y editables."
prompts:
  - id: identidad-visual-gtd
    titulo: "Identidad visual GTD (usar siempre)"
    descripcion: "Bloque reutilizable de identidad visual GTD con paleta HEX, tipografía Montserrat, regla del logo, estilo y contraste AA, para pegar dentro de tus prompts."
    texto: |-
        # Identidad visual GTD (usar siempre)
        Paleta: azul marca #375D9D, azul intenso #2959AD, azul marino #204175 (texto), azul medio #5A7EBE, ámbar #FFA300 (solo acentos y cifras grandes, nunca texto sobre blanco), crema #FFF6E5 y celeste #DBE5F3 (fondos suaves), blanco #FFFFFF.
        Tipografía: Montserrat.
        Logo: no lo dibujes ni lo inventes; yo lo agrego después con el archivo oficial.
        Estilo: corporativo, cercano, esquinas redondeadas, íconos lineales, mucho espacio en blanco.
        Contraste mínimo AA para todo texto. No inventes logos ni eslóganes.
  - id: infografia-imagen
    titulo: "Infografía como imagen"
    descripcion: "Pide una infografía horizontal con cinco datos ya revisados, el bloque de marca y sin logo, usando exactamente los textos que tú entregas."
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
    descripcion: "Corrige solo el texto erróneo de una tarjeta de la infografía sin cambiar el resto de la imagen."
    texto: |-
        Corrige solo el texto de la tarjeta [número]: debe decir exactamente «[texto correcto]». No cambies nada más.
  - id: infografia-sin-texto
    titulo: "Infografía sin texto (plan B)"
    descripcion: "Plan B: pide la infografía sin texto, solo con íconos y formas, para agregar los textos después en Presentaciones o Docs."
    texto: |-
        Genera la misma infografía sin ningún texto: solo íconos, formas y espacios en blanco donde irán los textos.
profundiza:
  recursos:
    - generar-editar-imagenes
    - nano-banana-pro
    - canvas
---

**Dos caminos para una infografía** (la diferencia importa cuando hay una marca de por medio):

| Camino | Cómo | Ventaja | Límite |
|---|---|---|---|
| **A. Imagen** (Herramientas → Crear imágenes, Nano Banana) | Prompt con datos, paleta y estilo; se puede adjuntar una referencia | Rápido y visualmente atractivo; Google indica que crea diagramas e infografías con información más precisa | Es una imagen: los colores son aproximados, el texto debe revisarse letra por letra y **el modelo no debe redibujar el logo** |
| **B. Código** (Canvas: página o infografía en HTML/SVG) | Se pegan los HEX exactos y el código SVG oficial del logo | Colores exactos, logo intacto, texto editable y exportable | Diseño menos «artístico»; requiere un prompt más preciso |

**Regla de marca del curso:** el logotipo nunca lo genera la IA. Se inserta el archivo oficial, ya sea pegando el SVG en Canvas o agregándolo después en Presentaciones. Para Presentaciones se usa el logo en PNG, porque Google Presentaciones puede rechazar el SVG.

**Bloque de marca:** se guarda en el documento de la plantilla de la U1 y se pega donde un prompt diga «[pega aquí el bloque de marca]».

<div data-prompt="identidad-visual-gtd"></div>

**Práctica (Actividad 4 de la Guía completa):** elige 5 datos de tu análisis; crea la infografía como imagen con el bloque de marca y **sin logo**; revisa texto y cifras letra por letra; corrige solo lo que falle; descarga la imagen. El camino B (código, con el logo oficial) lo demuestra el instructor.

<div data-prompt="infografia-imagen"></div>

<div data-prompt="corregir-texto"></div>

<div data-prompt="infografia-sin-texto"></div>

**Mínimo viable:** imagen con 3 datos revisados.

**Video:** el instructor muestra una demostración corta. No es parte de la práctica, porque no todas las cuentas lo tienen.
