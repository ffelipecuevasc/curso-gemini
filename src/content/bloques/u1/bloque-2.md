---
unidad: u1
numero: 2
titulo: "Fundamentos de IA generativa y uso responsable"
minutos: 20
tipo: "Exposición interactiva + mini-prueba"
profundiza:
  recursos:
    - que-es-un-llm
    - introducing-gemini
    - bard-pasa-a-ser-gemini
    - io-2024-100-anuncios
    - tokens
    - alucinaciones-ia
    - principios-ia-google
    - aviso-privacidad-apps-gemini
    - privacy-hub-workspace
    - verificar-respuestas
    - google-ai-essentials
    - video-google-io-2024-keynote
    - video-gemini-multimodal
    - video-gemini-15-pro-codigo
    - video-project-astra
---

**2.1 Qué es un LLM (4 min).** Un modelo estadístico de lenguaje entrenado con enormes cantidades de datos, que genera y traduce texto y otro contenido (definición de Google Cloud). Predice la continuación más probable a partir de patrones. Por eso escribe con fluidez, pero no «sabe» si lo que dice es cierto.

**2.2 Línea de tiempo (4 min)**

| Fecha | Hito |
|---|---|
| 2017 | Google desarrolla la arquitectura Transformer |
| Nov-2022 | ChatGPT lleva los LLM al público masivo |
| Dic-2023 | Google presenta **Gemini 1.0** (Ultra, Pro y Nano), multimodal desde su origen |
| Feb-2024 | **Bard pasa a llamarse Gemini**, y Duet AI en Workspace también pasa a ser Gemini |
| May-2024 | **Google I/O 2024:** Gemini 1.5 Pro con 1 millón de tokens de contexto para usuarios y 2 millones para desarrolladores, más Project Astra |
| 2026 | Familia **Gemini 4**: Argon, Carbon e Hydrogen |

> Gemini no se presentó en el I/O 2024. Se lanzó en diciembre de 2023, y el I/O 2024 fue su consolidación.

**2.3 Multimodalidad y tokens (4 min).** Gemini entiende y combina texto, imágenes, audio, video y código; demostración de 30 segundos con una foto o un PDF. Un token equivale a unos 4 caracteres, y la ventana de contexto se mide en tokens. Las conversaciones y los archivos muy largos consumen contexto, y cada plan tiene límites de uso.

**2.4 Cuenta personal vs. cuenta empresarial (2 min).** Con una cuenta Workspace calificada, el contenido no se usa para entrenar modelos fuera del dominio sin permiso. Con una cuenta personal (como la Google AI Plus del curso), aplican las reglas de privacidad de las apps de Gemini, que se explican a continuación.

**2.5 Uso responsable (6 min)**

| Concepto | Qué es | Pregunta para el grupo |
|---|---|---|
| **Alucinación** | Resultado incorrecto o engañoso que genera la IA | ¿Les ha inventado un dato o una fuente? |
| **Sesgo** | Patrón parcial heredado de los datos de entrenamiento; distinto de la alucinación | ¿La IA siempre es objetiva? |
| **Delegación (expertiz de dominio)** | La IA aporta velocidad y borradores; tú aportas contexto, criterio y la decisión final | ¿Quién conoce mejor a tus clientes? |
| **Pensamiento crítico** | Revisar antes de usar; botón «Verificar respuesta» (*Double-check*) con la Búsqueda de Google | ¿Usarías esta respuesta tal cual? |

**Seguridad con la cuenta personal.** Si la «Actividad» (*Keep Activity*) está activada, las conversaciones se usan para mejorar los servicios de Google, lo que incluye entrenar modelos. Además, un subconjunto lo revisan personas y puede conservarse hasta tres años.

**Regla del curso:** en la cuenta personal solo se usan datos ficticios o públicos, nunca información de GTD, de sus clientes ni de colaboradores. Hay que revisar qué se comparte antes de generar un enlace público.

**Mini-prueba (2 min):** ¿alucinación o sesgo?, ¿lo hago yo o lo delego?, ¿esto lo pego en la cuenta personal?
