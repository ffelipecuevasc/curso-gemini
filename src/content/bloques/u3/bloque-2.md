---
unidad: u3
numero: 2
titulo: "Configurar el chat y conversar con el cuaderno"
minutos: 22
microcharlaMin: 9
practicaMin: 13
sintesis:
  resumen: "Configura el estilo y la longitud del chat, prueba prompts sobre la ley y verifica las respuestas abriendo la cita en el pasaje original."
  haras: "Configura el chat, contrasta la fecha de vigencia y verifica citas."
  claves:
    - "El chat solo usa tus fuentes."
    - "Haz clic en una cita para ir al pasaje original."
prompts:
  - id: plantilla-estilo-personalizado
    titulo: "Plantilla para el estilo Personalizado"
    descripcion: "Plantilla para el estilo Personalizado: define el rol de tutor en cumplimiento normativo, el objetivo y el estilo de las respuestas del chat."
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
    descripcion: "Pide explicar en cinco puntos qué cambia la ley para un ejecutivo de atención al cliente."
    texto: "Explica en 5 puntos qué cambia la ley para un ejecutivo de atención al cliente"
  - id: pregunta-precisa
    titulo: "Pregunta precisa"
    descripcion: "Pregunta qué derechos tiene un titular de datos y en qué artículos de la ley están."
    texto: "¿Qué derechos tiene un titular de datos y en qué artículos están?"
  - id: caso-aplicado
    titulo: "Caso aplicado (ficticio)"
    descripcion: "Caso ficticio: un cliente pide por WhatsApp que eliminen sus datos; consulta qué dice la ley y qué pasos debería seguir el ejecutivo."
    texto: "Un cliente pide por WhatsApp que eliminen sus datos. ¿Qué dice la ley y qué pasos debería seguir el ejecutivo?"
  - id: fecha-vigencia
    titulo: "Fecha de vigencia"
    descripcion: "Pregunta desde qué fecha rige la ley según tus fuentes, qué dice cada una y si alguna menciona una postergación."
    texto: |-
        ¿Desde qué fecha rige la Ley 21.719 según mis fuentes? Indica qué dice cada fuente
        sobre la entrada en vigencia, con la fecha de esa fuente, y señala si alguna menciona
        una postergación. Si las fuentes no coinciden, explica la diferencia.
profundiza:
  recursos:
    - usar-chat-cuaderno
---

**Conceptos clave**
- **Configurar chat**, en el panel central:
  - **Estilo:** Predeterminado (investigación general y lluvia de ideas), Guía de aprendizaje (para estudiar conceptos) o **Personalizado** (se escriben rol, objetivo y estilo).
  - **Longitud de respuesta:** Predeterminada, Más larga o Más corta.
- Las respuestas traen **citas**: se pasa el cursor para ver el texto citado y se hace clic para ir al pasaje original.
- Con la **casilla de cada fuente** se incluyen o excluyen fuentes de la respuesta.
- El chat **solo usa las fuentes**. Si se le pide algo creativo fuera de ellas, puede responder que no puede contestar.

**Práctica (ejercicio 2 de la Guía completa):** pega la plantilla en Personalizado con la longitud Predeterminada; envía los 3 prompts del banco; cambia a **Más corta**, repite uno y compara. Luego pregunta por la fecha de vigencia, verifica 2 citas en el pasaje original y guarda tu mejor respuesta como nota, con la fecha que indica cada fuente. Sigue el ejercicio 2 de la Guía completa (Descargas).

<div data-prompt="plantilla-estilo-personalizado"></div>

<div data-prompt="sintesis-por-audiencia"></div>

<div data-prompt="pregunta-precisa"></div>

<div data-prompt="caso-aplicado"></div>

<div data-prompt="fecha-vigencia"></div>