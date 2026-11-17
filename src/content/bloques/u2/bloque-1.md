---
unidad: u2
numero: 1
titulo: "Modelos y niveles de razonamiento → planilla"
minutos: 15
microcharlaMin: 3
practicaMin: 12
prompts:
  - id: carril-base
    titulo: "Carril base"
    texto: "Identifica los 3 problemas principales del trimestre y propón una acción para cada uno, justificando con cifras"
---

**Microcharla (3 min)**
- **Selector de modelo:** con Google AI Plus aparecen **Flash-Lite** (rápido y eficiente, para respuestas breves y tareas livianas) e **Hydrogen** (equilibra desempeño y rapidez para el trabajo habitual). Argon, Pro y Carbon son para tareas más complejas y están en Pro y Ultra.
- **Niveles de razonamiento:**
  - **Bajo:** respuestas rápidas y concisas.
  - **Medio:** equilibrio para tareas cotidianas.
  - **Alto:** razona con cuidado en prompts complejos de varios pasos.
  - Si no se elige, queda en bajo.
  - Los modelos más avanzados y los niveles altos consumen más del cupo de uso.
- **Selección automática:** Gemini puede elegir modelo y nivel por ti. Hoy la apagamos para comparar.
- **Regla práctica:** rápido para redactar o reformular; profundo para analizar, calcular o decidir.

**Práctica (12 min, carril base):**
1. Subir el CSV ficticio y pedir: «Identifica los 3 problemas principales del trimestre y propón una acción para cada uno, justificando con cifras».
2. Correr el mismo prompt en tres configuraciones: Flash-Lite / bajo, Hydrogen / bajo e Hydrogen / alto.
3. Pedirle a Gemini una **tabla comparativa** de las tres respuestas: tiempo aproximado, precisión de las cifras (verificadas contra el CSV) y profundidad del análisis.
4. **Exportar a Hojas de cálculo** con el botón «Exportar a Hojas de cálculo» que aparece bajo la tabla. Con eso queda creada la primera planilla (las tablas con imágenes no se pueden exportar).

**Carril extra:** en la planilla exportada, usar Gemini para crear una fórmula que calcule el promedio de tiempo de resolución por región.

**Para llevarte:** no siempre conviene el modelo «más potente»; conviene el adecuado para la tarea y el cupo.
