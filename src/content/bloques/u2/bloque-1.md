---
unidad: u2
numero: 1
titulo: "Modelos y niveles de razonamiento → planilla"
minutos: 18
microcharlaMin: 8
practicaMin: 10
sintesis:
  resumen: "Compara dos configuraciones de modelo y nivel de razonamiento sobre el CSV ficticio y exporta la tabla comparativa a Hojas de cálculo."
  haras: "Compararás dos configuraciones de modelo y exportarás la tabla a planilla."
  claves:
    - "Rápido para redactar; profundo para analizar, calcular o decidir."
    - "Verifica las cifras contra el CSV antes de exportar."
prompts:
  - id: analisis
    titulo: "Análisis del trimestre"
    descripcion: "Pide analizar el CSV ficticio del trimestre, identificar los tres problemas principales y proponer una acción justificada con cifras, para comparar dos configuraciones de modelo."
    texto: |-
      Actúa como analista del área de soporte de una empresa de telecomunicaciones. El archivo adjunto tiene solicitudes de soporte ficticias de julio a septiembre de 2026.
      Identifica los 3 problemas principales del trimestre y propón una acción para cada uno. Justifica cada problema con cifras del archivo.
      Responde en español de Chile, con un máximo de 250 palabras.
  - id: repetir
    titulo: "Repetir con otra configuración"
    descripcion: "Pide responder de nuevo desde cero con otra configuración, sin copiar la respuesta anterior, para comparar modelos o niveles de razonamiento dentro del mismo chat."
    texto: |-
      Responde de nuevo desde cero, sin repetir ni mejorar tu respuesta anterior.
  - id: tabla
    titulo: "Tabla comparativa"
    descripcion: "Pide una tabla que compare las dos respuestas por problemas, cifras, profundidad y tareas donde conviene cada configuración, lista para exportar a Hojas de cálculo."
    texto: |-
      Crea una tabla que compare tu primera y tu segunda respuesta. Columnas: respuesta (1 o 2), problemas que identificó, cifras que usó, profundidad del análisis (de 1 a 5) y en qué tareas conviene usar esa configuración.
profundiza:
  recursos:
    - acerca-modelos-gemini
    - gemini-4-carbon
    - gemini-4-hydrogen
    - google-ai-plus
    - planes-google-ai-chile
    - exportar-respuestas
---

**Conceptos clave**
- **Selector de modelo:** la página oficial de modelos de Gemini muestra, al 2026-11-23, Auto, Hydrogen (rapidez y eficiencia), Neon y Carbon (tareas largas y complejas). Con Google AI Plus aparecen Auto e Hydrogen. **En tu cuenta del curso el selector puede mostrar otros modelos:** lo defines tú mirando qué aparece.
- **Niveles de razonamiento** (aparecen cuando eliges un modelo a mano):
  - **Bajo:** respuestas rápidas y concisas.
  - **Medio:** equilibrio para tareas cotidianas.
  - **Alto:** razona con cuidado en prompts complejos de varios pasos.
  - Si no se elige, queda en bajo.
  - Los modelos más avanzados y los niveles altos consumen más del cupo de uso.
- **Selección automática:** Gemini puede elegir modelo y nivel por ti. Hoy la apagamos para comparar.
- **Regla práctica:** rápido para redactar o reformular; profundo para analizar, calcular o decidir.

**Práctica (Actividad 2 del Cuaderno):** adjunta el CSV; anota lo que muestra tu selector; envía el análisis con la opción más rápida y con la más potente (si solo hay una, compara un prompt corto con uno que pide razonar paso a paso); cronometra cada respuesta; pide la tabla comparativa; usa «Exportar a Hojas de cálculo».

<div data-prompt="analisis"></div>

<div data-prompt="repetir"></div>

<div data-prompt="tabla"></div>

**Mínimo viable:** planilla con dos filas comparadas.

**Para llevarte:** no siempre conviene el modelo «más potente»; conviene el adecuado para la tarea y el cupo.
