---
unidad: u3
numero: 4
titulo: "Presentaciones: configuración y el poder del prompt de diseño"
minutos: 20
microcharlaMin: 3
practicaMin: 17
prompts:
  - id: estilo-gtd
    titulo: "Prompt de estilo GTD"
    texto: |-
        Diseña diapositivas corporativas para GTD, empresa chilena de telecomunicaciones.
        PALETA: fondo #FFFFFF o #DBE5F3; títulos en #204175; bloques destacados en
        #2959AD o #375D9D con texto blanco; acento ámbar #FFA300 solo para cifras
        grandes, íconos o subrayados (nunca texto pequeño sobre blanco).
        TIPOGRAFÍA: sans geométrica tipo Montserrat; títulos grandes y en negrita,
        cuerpo breve.
        DIAGRAMACIÓN: un mensaje por diapositiva, máximo 4 viñetas, mucho espacio en
        blanco, esquinas redondeadas, íconos lineales.
        CONTENIDO: lenguaje claro para trabajadores de atención al cliente; cita el
        artículo de la ley cuando corresponda.
        EVITAR: logotipos inventados, slogans, fotos de personas reales, degradados
        recargados, texto en párrafos largos.
---

**Microcharla (3 min)**
- **Opciones de la presentación** (lápiz junto a «Presentación» en Studio):
  - **Formato:** *presentación detallada* (texto completo, para leer o enviar sin presentador) o *diapositivas para presentar* (limpias y visuales, con puntos clave para acompañar a quien expone);
  - idioma;
  - longitud (corta, predeterminada o larga, según el plan);
  - fuentes a usar;
  - **prompt**.
- **Cocreación (desde octubre de 2026):** el cuaderno sugiere temas a partir de las fuentes y permite guiar el estilo visual y el formato. Con el interruptor **Revisar** se ve el esquema antes de generar.
- Cada diapositiva puede recibir comentarios, y se genera una **versión revisada**. Editar es más rápido que generar desde cero.
- **El prompt cambia el diseño final.** La colección comunitaria *awesome-notebookLM-prompts* (GitHub) muestra que los mejores prompts de diseño especifican:
  - colores con su HEX y su rol (fondo, texto, acento);
  - tipografía y relación de tamaños entre título y cuerpo;
  - reglas de diagramación;
  - estilo de imágenes e íconos;
  - reglas de texto (por ejemplo, un mensaje por diapositiva);
  - una lista de cosas que evitar.

  Cuanto más específico, más consistente sale el diseño. Se usa como inspiración y se adapta a la marca de GTD, sin copiar estilos ajenos tal cual.

**Práctica (17 min)**
1. **Presentación A:** diapositivas para presentar, longitud predeterminada y **sin prompt**. Lanzar.
2. **Presentación B:** misma configuración con el **prompt de estilo GTD** y el interruptor **Revisar** activado. Revisar el esquema, ajustar un tema y generar.
3. Comparar A y B: ¿qué cambió en colores, densidad de texto y estructura?
4. Dejar comentarios en 1 o 2 diapositivas de B y generar la **versión revisada**.

**Regla de marca:** el logotipo no se pide en el prompt, porque un modelo generativo podría redibujarlo. Si la presentación se exporta, el logo oficial se agrega después.

**Carril extra:** generar una *presentación detallada* para enviar como lectura previa del curso.
