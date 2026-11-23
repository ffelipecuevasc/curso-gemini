---
unidad: u1
numero: 2
titulo: "Fundamentos de IA generativa y uso responsable"
minutos: 20
tipo: "Exposición interactiva + mini-prueba"
sintesis:
  resumen: "Qué es un LLM, la evolución hasta Gemini 4, los tokens, las diferencias de privacidad entre cuentas y cómo revisar alucinaciones y sesgos."
  haras: "Distinguirás alucinaciones, sesgos, tareas delegables y reglas de privacidad de tu cuenta."
  claves:
    - "Un LLM predice texto probable; no sabe si es cierto."
    - "Con cualquier cuenta usa solo datos ficticios o públicos."
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

**2.1 Qué es un LLM.** Un modelo estadístico de lenguaje entrenado con enormes cantidades de datos, que genera y traduce texto y otro contenido (definición de Google Cloud). Predice la continuación más probable a partir de patrones. Por eso escribe con fluidez, pero no «sabe» si lo que dice es cierto.

**2.2 Línea de tiempo**

| Fecha | Hito |
|---|---|
| 2017 | Google desarrolla la arquitectura Transformer |
| Nov-2022 | ChatGPT lleva los LLM al público masivo |
| Dic-2023 | Google presenta **Gemini 1.0** (Ultra, Pro y Nano), multimodal desde su origen |
| Feb-2024 | **Bard pasa a llamarse Gemini**, y Duet AI en Workspace también pasa a ser Gemini |
| May-2024 | **Google I/O 2024:** Gemini 1.5 Pro con 1 millón de tokens de contexto para usuarios y 2 millones para desarrolladores, más Project Astra |
| 2026 | Familia **Gemini 4**: Hydrogen, Neon y Carbon |

> Gemini no se presentó en el I/O 2024. Se lanzó en diciembre de 2023, y el I/O 2024 fue su consolidación.

**2.3 Multimodalidad y tokens.** Gemini entiende y combina texto, imágenes, audio, video y código. Un token equivale a unos 4 caracteres, y la ventana de contexto se mide en tokens. Las conversaciones y los archivos muy largos consumen contexto, y cada plan tiene límites de uso.

**2.4 Privacidad según tu cuenta.**
- **Cuenta del curso (empresarial, Workspace):** Gemini no usa tus conversaciones para entrenar modelos fuera de la organización sin permiso. Tus chats solo los ves tú y nadie los revisa. El administrador define cuánto tiempo se guardan: 18 meses por defecto, con opciones de 3 o 36.
- **Cuenta personal:** el ajuste se llama «Historial», y el uso para entrenar modelos es un ajuste aparte. Las conversaciones se guardan 18 meses por defecto; las que revisan personas, hasta 3 años, y los chats temporales, unos 2 meses.

**2.5 Uso responsable**

| Concepto | Qué es |
|---|---|
| **Alucinación** | Resultado incorrecto o engañoso que genera la IA |
| **Sesgo** | Patrón parcial heredado de los datos de entrenamiento; distinto de la alucinación |
| **Delegación (expertiz de dominio)** | La IA aporta velocidad y borradores; tú aportas contexto, criterio y la decisión final |
| **Pensamiento crítico** | Revisar antes de usar; botón «Verificar respuesta» (*Double-check*) con la Búsqueda de Google |

**Regla del curso:** en la cuenta del curso y en la personal solo se usan datos ficticios o públicos, nunca información de GTD, de sus clientes ni de colaboradores. Hay que revisar qué se comparte antes de generar un enlace público.

**Preguntas de autoevaluación:** ¿alucinación o sesgo?, ¿lo hago yo o lo delego?, ¿esto lo pego en Gemini?
