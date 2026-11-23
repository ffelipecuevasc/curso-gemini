---
unidad: u1
numero: 5
titulo: "Laboratorio: Gemini en tu trabajo y tu plantilla de prompt"
minutos: 65
tipo: "Recorrido + práctica individual"
sintesis:
  resumen: "Recorre la app de Gemini y sus modelos, resuelve tres tareas con la rúbrica de 0 a 10 y guarda tu plantilla."
  haras: "Resolverás tres tareas laborales y guardarás tu plantilla de prompt maestro."
  claves:
    - "Evalúa tus prompts de 0 a 10; meta: 8 puntos."
    - "Tu plantilla será la base del Optimizador de prompts."
prompts:
  - id: plantilla-prompt-maestro
    titulo: "Plantilla de prompt maestro"
    descripcion: "Estructura reutilizable con rol, contexto, tarea, audiencia, formato, restricciones, ejemplo y preguntas previas para guardar en Drive y usar en todo el curso."
    texto: |-
        # Rol
        Actúa como [rol experto] con experiencia en [área/industria].

        # Contexto
        Trabajo como [mi cargo] en [tipo de organización]. [Situación concreta.]
        Material de base: [texto pegado / archivo / documento de Drive].

        # Tarea
        [Verbo + qué necesito] para [objetivo / qué quiero lograr].

        # Audiencia
        Va dirigido a [quién], que [qué sabe o qué le importa].

        # Formato
        [Tipo de producto], de [extensión], con esta estructura: [partes].
        Tono: [tono].

        # Restricciones y criterios de calidad
        - Haz: [...]
        - No hagas: [...]
        - Estará bien si: [criterio verificable].

        # Ejemplo (opcional)
        [Ejemplo de una salida que me gusta.]

        # Antes de responder
        Si te falta información, hazme hasta 3 preguntas antes de redactar.
profundiza:
  recursos:
    - acerca-modelos-gemini
    - gemini-4-carbon
    - gemini-4-hydrogen
---

**5.1 Recorrido por la app**
- Interfaz: chat, subir archivos, Herramientas (Deep Research, Canvas, Crear imágenes) y selector de modelo con niveles de razonamiento.
- **Familia Gemini 4** (página oficial al 22 de noviembre de 2026): el selector muestra **Auto**, **Hydrogen** (rapidez y eficiencia), **Neon** (desde el 18 de noviembre de 2026) y **Carbon** (tareas largas y complejas).
- Por plan: Plus ofrece Auto e Hydrogen; Pro suma Neon; Ultra suma Carbon. Niveles de razonamiento: bajo (por defecto), medio y alto.
- En tu cuenta del curso, el selector puede mostrar otros modelos que la pantalla del instructor: la disponibilidad la define el administrador.
- **Mensaje clave:** los nombres cambian cada pocos meses. Lo que se aprende es elegir entre rápido y profundo. La lista vigente queda en el LMS, y la U2 lo practica a fondo.

**5.2 Práctica individual**

| Paso | Min | Qué haces |
|---|---|---|
| Mapa de oportunidades | 5 | Completas el Mapa de oportunidades y eliges 3 tareas: del banco o propias, descritas en genérico y con datos ficticios o públicos |
| Ronda 1 | 14 | Tarea 1 con prompt intermedio; autoevaluación con la rúbrica |
| Ronda 2 | 15 | Tarea 2 con prompt avanzado, iterando en la misma conversación, y Revisión en 3 pasos de la respuesta |
| Ronda 3 | 11 | Tarea 3: le pides a Gemini que te haga preguntas antes de responder y que mejore tu propio prompt |
| Plantilla | 10 | Destilas tu **plantilla de prompt maestro** y la guardas en un documento de Drive |
| Cierre | 5 | Compartes tu mejor prompt y su puntaje |

**Mapa de oportunidades:** anota tareas repetitivas de tu trabajo, cada cuánto las haces y qué le pedirías a Gemini. Elige las que sean frecuentes, basadas en texto y de bajo riesgo. Descarga la ficha en «Descargas» de esta unidad.

**Banco de tareas:** correo difícil; resumen ejecutivo de un texto largo; preparación de reunión; plan semanal priorizado; respuesta tipo para consultas frecuentes; análisis rápido de una tabla pequeña. Cada tarea trae un caso ficticio listo para usar en el PDF «Banco de tareas», y la última usa el dataset del curso. Para la Ronda 2 elige el resumen ejecutivo o el análisis de tabla: ahí la revisión se puede comprobar.

**Revisión en 3 pasos (Ronda 2):**

1. **Comprueba los hechos.** Contrasta cifras, nombres y fechas con tu material de origen, no con la memoria del modelo. Puedes pedirle: «Lista las afirmaciones de tu respuesta que debo comprobar».
2. **Revisa con la rúbrica.** Audiencia, tono, formato y que nada esté inventado.
3. **Pide una crítica.** «Actúa como revisor exigente: señala 3 riesgos de esta respuesta y qué le falta». Luego ajusta.

**Rúbrica de prompts (0 a 10)**

| Criterio | 0 | 1 | 2 |
|---|---|---|---|
| Tarea y objetivo | No queda claro qué se pide | Verbo claro, sin propósito | Verbo, propósito y producto definidos |
| Persona y audiencia | Ausentes | Una de las dos | Ambas, con detalle útil |
| Contexto | Nada | Contexto general | Situación concreta y material de base |
| Formato | Libre | Mencionado | Formato, extensión y estructura definidos |
| Restricciones y calidad | Ninguna | Alguna | Restricciones, criterios y ejemplo o preguntas previas |

Interpretación: 0–4 = básico · 5–7 = intermedio · 8–10 = avanzado. Meta: al menos un prompt con 8 puntos.

**Conexión con la U4:** esta plantilla es la base de la skill «Optimizador de prompts». Las skills de la app de Gemini están disponibles también en cuentas personales.
