---
unidad: u2
numero: 3
titulo: "Infografía con marca: imagen vs. código"
minutos: 20
microcharlaMin: 3
practicaMin: 17
sintesis:
  resumen: "Compara crear una infografía como imagen con Nano Banana o en código HTML y SVG con Canvas, aplicando la paleta GTD sin inventar el logotipo."
  haras: "Crearás una infografía del trimestre con la paleta GTD y cifras revisadas."
  claves:
    - "La IA nunca genera el logo: usa el SVG oficial."
    - "En Canvas con código obtienes colores HEX exactos y editables."
prompts:
  - id: identidad-visual-gtd
    titulo: "Identidad visual GTD (usar siempre)"
    descripcion: "Bloque reutilizable de identidad visual GTD con paleta HEX, tipografía Montserrat, código SVG oficial del logo, estilo y contraste AA para pegar en tus prompts."
    texto: |-
        # Identidad visual GTD (usar siempre)
        Paleta: azul marca #375D9D, azul intenso #2959AD, azul marino #204175 (texto),
        azul medio #5A7EBE, ámbar #FFA300 (solo acentos y cifras grandes, nunca texto
        sobre blanco), crema #FFF6E5 y celeste #DBE5F3 (fondos suaves), blanco #FFFFFF.
        Tipografía: Montserrat.
        Logo: usa EXACTAMENTE este SVG sin modificarlo: <svg>…</svg>
        Estilo: corporativo, cercano, esquinas redondeadas, íconos lineales, mucho espacio en blanco.
        Contraste mínimo AA para todo texto. No inventes logos ni slogans.
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

**Regla de marca del curso:** el logotipo nunca lo genera la IA. Se inserta el archivo oficial, ya sea pegando el SVG en Canvas o agregándolo después en Presentaciones.

**Práctica**
1. **Bloque de marca** (se prepara mientras corre Deep Research): un párrafo reutilizable, guardado en el documento de la plantilla de la U1. Ejemplo de estructura:

<div data-prompt="identidad-visual-gtd"></div>

2. **Camino A:** infografía de 5 datos clave del trimestre (dataset), con la paleta indicada en el prompt y sin logo. Revisar las cifras y la ortografía en la imagen.
3. **Camino B:** la misma infografía en Canvas como página HTML con los HEX y el SVG oficial.
4. Comparar ambas y quedarse con la que cumple la marca. Normalmente gana B para uso oficial y A para redes o borradores.

**Carril extra:** pedir a Canvas una versión vertical de la infografía para una historia de redes internas.
