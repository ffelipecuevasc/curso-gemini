---
unidad: u3
numero: 2
titulo: "Configurar el chat y conversar con el cuaderno"
minutos: 20
microcharlaMin: 3
practicaMin: 17
prompts:
  - id: plantilla-estilo-personalizado
    titulo: "Plantilla para el estilo Personalizado"
    texto: |-
        ROL: Eres un tutor experto en cumplimiento normativo que capacita a trabajadores
        de una empresa de telecomunicaciones en Chile.
        OBJETIVO: Ayudarme a comprender la Ley 21.719 y a convertirla en contenidos de
        capacitación prácticos para equipos de atención al cliente, ventas y soporte.
        ESTILO: Español de Chile, lenguaje claro y sin jerga legal innecesaria. Explica
        primero la idea en una frase y luego el detalle. Usa ejemplos ficticios del día
        a día de una empresa de telecomunicaciones. Indica siempre el artículo de la
        ley que respalda cada afirmación. Si las fuentes no responden algo, dilo.
  - id: sintesis-por-audiencia
    titulo: "Síntesis por audiencia"
    texto: "Explica en 5 puntos qué cambia la ley para un ejecutivo de atención al cliente"
  - id: pregunta-precisa
    titulo: "Pregunta precisa"
    texto: "¿Qué derechos tiene un titular de datos y en qué artículos están?"
  - id: comparacion-entre-fuentes
    titulo: "Comparación entre fuentes"
    texto: "Compara lo que dice el informe de Deep Research con el texto de la ley sobre sanciones. ¿Hay diferencias?"
  - id: vacios-y-contradicciones
    titulo: "Vacíos y contradicciones"
    texto: "¿Qué temas importantes para una empresa de telecomunicaciones no quedan claros en estas fuentes?"
  - id: caso-aplicado
    titulo: "Caso aplicado (ficticio)"
    texto: "Un cliente pide por WhatsApp que eliminen sus datos. ¿Qué dice la ley y qué pasos debería seguir el ejecutivo?"
profundiza:
  recursos:
    - usar-chat-cuaderno
---

**Microcharla (3 min)**
- **Configurar chat**, en el panel central:
  - **Estilo:** Predeterminado (investigación general y lluvia de ideas), Guía de aprendizaje (para estudiar conceptos) o **Personalizado** (se escriben rol, objetivo y estilo).
  - **Longitud de respuesta:** Predeterminada, Más larga o Más corta.
- Las respuestas traen **citas**: se pasa el cursor para ver el texto citado y se hace clic para ir al pasaje original.
- Con la **casilla de cada fuente** se incluyen o excluyen fuentes de la respuesta.
- El chat **solo usa las fuentes**. Si se le pide algo creativo fuera de ellas, puede responder que no puede contestar.

**Práctica (17 min)**
1. Pegar la plantilla en Personalizado y elegir la longitud **Predeterminada**.
2. **Banco de prompts** (cada participante usa al menos 4):
   - *Síntesis por audiencia:* «Explica en 5 puntos qué cambia la ley para un ejecutivo de atención al cliente».
   - *Pregunta precisa:* «¿Qué derechos tiene un titular de datos y en qué artículos están?».
   - *Comparación entre fuentes:* «Compara lo que dice el informe de Deep Research con el texto de la ley sobre sanciones. ¿Hay diferencias?».
   - *Vacíos y contradicciones:* «¿Qué temas importantes para una empresa de telecomunicaciones no quedan claros en estas fuentes?».
   - *Caso aplicado (ficticio):* «Un cliente pide por WhatsApp que eliminen sus datos. ¿Qué dice la ley y qué pasos debería seguir el ejecutivo?».
3. Cambiar la longitud a **Más corta** y repetir un prompt para comparar.
4. **Verificar 2 citas** abriendo el pasaje original.
5. Guardar las 2 mejores respuestas como **notas**.

**Carril extra:** excluir el video con su casilla y repetir una pregunta para ver cómo cambia la respuesta.
