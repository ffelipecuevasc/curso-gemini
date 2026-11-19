---
unidad: u2
numero: 4
titulo: "Presentación con marca en Canvas"
minutos: 20
microcharlaMin: 3
practicaMin: 17
sintesis:
  resumen: "Genera en Canvas una presentación de ocho diapositivas con el informe y el dataset, itera una diapositiva y expórtala a Presentaciones para aplicar marca."
  haras: "Crearás una presentación de ocho diapositivas y la exportarás a Presentaciones."
  claves:
    - "Pide diapositivas de forma explícita con Canvas activado."
    - "Aplica colores del tema y logo oficial en Google Presentaciones."
prompts:
  - id: presentacion-con-marca
    titulo: "Presentación con marca en Canvas"
    descripcion: "Pide en Canvas una presentación de ocho diapositivas para la gerencia con contexto de mercado, tres hallazgos con cifras, acciones y paleta GTD sin logo."
    texto: "Crea una presentación de 8 diapositivas para la gerencia de [área]: portada, contexto de mercado (del informe), 3 hallazgos del trimestre con cifras, 2 acciones propuestas, próximos pasos y cierre. Usa la paleta GTD indicada. Sin logo: lo agregaré yo"
  - id: iterar-en-canvas
    titulo: "Iterar en Canvas"
    descripcion: "Instrucción breve para iterar una diapositiva específica en Canvas y convertirla en un gráfico de barras antes de exportar a Google Presentaciones."
    texto: "convierte la diapositiva 4 en un gráfico de barras"
profundiza:
  recursos:
    - presentaciones-app-gemini
    - canvas
---

- Con Canvas activado, se pide «crea una presentación» y se adjunta la fuente (aquí, el informe de Deep Research y el resumen del dataset). Gemini genera las diapositivas con tema e imágenes, y se exportan a Google Presentaciones (o a PDF) para terminarlas y colaborar.
- Para que salga como presentación y no como texto, el prompt debe pedir diapositivas de forma explícita.
- Canvas trae pocos diseños, así que el **acabado de marca se hace en Presentaciones**: colores del tema y logo oficial.

**Práctica**
1. Prompt con la plantilla de la U1 más el bloque de marca: «Crea una presentación de 8 diapositivas para la gerencia de [área]: portada, contexto de mercado (del informe), 3 hallazgos del trimestre con cifras, 2 acciones propuestas, próximos pasos y cierre. Usa la paleta GTD indicada. Sin logo: lo agregaré yo».
2. Iterar en Canvas: ajustar una diapositiva a la vez (por ejemplo, «convierte la diapositiva 4 en un gráfico de barras»).
3. **Exportar a Presentaciones**, aplicar los colores del tema e insertar el logo oficial en la portada y el cierre.
4. Revisión humana: cifras contra el dataset, fuentes del informe y que no haya afirmaciones inventadas.

**Carril extra:** pedir notas del orador para cada diapositiva.
