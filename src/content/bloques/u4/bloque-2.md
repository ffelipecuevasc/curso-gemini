---
unidad: u4
numero: 2
titulo: "Skill 1: optimizador-prompts (instalar, probar, entender)"
minutos: 23
microcharlaMin: 3
practicaMin: 20
sintesis:
  resumen: "Instala optimizador-prompts, que convierte un pedido rápido en dos versiones optimizadas, pruébala con tres prompts de la U1 y personalízala."
  haras: "Instala la skill, optimiza tres prompts y agrega una regla propia."
  claves:
    - "Entrega dos versiones: basada en contexto y basada en objetivos."
    - "Con Editar con Gemini agregas una regla propia."
prompts:
  - id: prompt-a-la-rapida
    titulo: "Prompt a la rápida"
    descripcion: "Pedido escrito «a la rápida», sin estructura, para probar cómo la skill lo convierte en dos versiones optimizadas."
    texto: "haz un correo para pedir vacaciones"
  - id: regla-propia-ingles
    titulo: "Regla propia · versión en inglés"
    descripcion: "Instrucción para agregar con Editar con Gemini una regla propia: incluir siempre una versión en inglés."
    texto: "agrega siempre una versión en inglés"
  - id: regla-propia-tono
    titulo: "Regla propia · tono"
    descripcion: "Instrucción para agregar con Editar con Gemini una regla propia: adaptar el tono a atención al cliente."
    texto: "adapta el tono a atención al cliente"
---

**Conceptos clave:** esta skill convierte la plantilla de prompt maestro de la U1 en un servicio automático. Escribes una instrucción rápida y recibes **dos versiones optimizadas**:
- **A, basada en contexto:** rol, situación, audiencia, tarea, formato y restricciones.
- **B, basada en objetivos:** objetivo, resultado esperado, criterios de éxito, pasos y verificación.

Cada versión llega en un **bloque de código**, que la interfaz muestra con el botón de copiar en la esquina. La skill también puntúa el prompt con la rúbrica de la U1 e indica qué datos completar.

**Práctica**
1. **Instalar:** Personalizar → Skills → Crear → Subir → elegir `SKILL.md` del LMS → revisar → Crear.
2. **Probar con 3 prompts propios de la U1** escritos «a la rápida», por ejemplo «haz un correo para pedir vacaciones». Invocar con `/optimizador-prompts`.
3. Copiar con un clic la versión que convenga, completar los `[marcadores]`, ejecutarla en un chat nuevo y comparar con el resultado del prompt original.
4. **Entender por dentro:** abrir la skill y leer sus instrucciones. Identificar la descripción, los pasos, el formato exacto de respuesta y la lista «Lo que nunca haces».
5. **Personalizar:** usar **Editar con Gemini** para agregar una regla propia, por ejemplo «agrega siempre una versión en inglés» o «adapta el tono a atención al cliente». Volver a probar.

**Carril extra:** combinar skills en un mismo pedido, por ejemplo optimizar un prompt para generar una presentación con la marca GTD.
