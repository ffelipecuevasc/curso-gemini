---
unidad: u2
numero: 4
titulo: "Presentación con marca en Canvas"
minutos: 17
microcharlaMin: 7
practicaMin: 10
sintesis:
  resumen: "Genera en Canvas una presentación de ocho diapositivas con el informe y el dataset, itera una diapositiva y expórtala a Presentaciones para aplicar marca."
  haras: "Crearás una presentación de ocho diapositivas y la exportarás a Presentaciones."
  claves:
    - "Pide diapositivas de forma explícita con Canvas activado."
    - "Aplica colores del tema y logo oficial en Google Presentaciones."
prompts:
  - id: presentacion-con-marca
    titulo: "Presentación con marca en Canvas"
    descripcion: "Pide en Canvas ocho diapositivas para la gerencia con contexto de mercado del informe, tres hallazgos con cifras del CSV, acciones y cierre, sin logo."
    texto: |-
      Crea una presentación de 8 diapositivas para la gerencia de [mi área]: portada, contexto de mercado (usa el informe de Deep Research de este chat), 3 hallazgos del trimestre con cifras (usa el archivo CSV adjunto), 2 acciones propuestas, próximos pasos y cierre.
      Una idea por diapositiva y máximo 4 viñetas por diapositiva. Sin logo: lo agregaré yo.
      [pega aquí el bloque de marca]
  - id: iterar-en-canvas
    titulo: "Iterar en Canvas"
    descripcion: "Instrucción breve para cambiar una sola diapositiva en Canvas y convertirla en un gráfico de barras con las cifras del archivo."
    texto: |-
      Convierte la diapositiva 4 en un gráfico de barras con las cifras del archivo.
profundiza:
  recursos:
    - presentaciones-app-gemini
    - canvas
---

- Con Canvas activado, se pide «crea una presentación» y se adjunta la fuente (aquí, el informe de Deep Research y el resumen del dataset). Gemini genera las diapositivas con tema e imágenes, y se exportan a Google Presentaciones (o a PDF) para terminarlas y colaborar.
- Para que salga como presentación y no como texto, el prompt debe pedir diapositivas de forma explícita.
- Canvas trae pocos diseños, así que el **acabado de marca se hace en Presentaciones**: colores del tema y logo oficial.

**Práctica (Actividad 5 del Cuaderno):** en el chat del informe, adjunta el CSV y activa Canvas; pide las 8 diapositivas; cambia una; exporta a Presentaciones; descarga el PDF. Si sobra tiempo: logo en PNG y colores del tema.

<div data-prompt="presentacion-con-marca"></div>

<div data-prompt="iterar-en-canvas"></div>

**Mínimo viable:** 8 diapositivas en PDF.
