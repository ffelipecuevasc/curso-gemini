---
unidad: u1
numero: 5
titulo: "Laboratorio: Gemini en tu trabajo y tu plantilla de prompt"
minutos: 65
tipo: "Recorrido de 5 min + práctica de 60 min"
prompts:
  - id: plantilla-prompt-maestro
    titulo: "Plantilla de prompt maestro"
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
    - gemini-4-argon
    - gemini-4-carbon
    - gemini-4-hydrogen
---

**5.1 Recorrido por la app (5 min)**
- Interfaz: chat, subir archivos, Herramientas (Deep Research, Canvas, Crear imágenes) y selector de modelo con niveles de razonamiento.
- **Familia Gemini 4:**
  - Argon y Carbon son los modelos de frontera para tareas largas y complejas.
  - Hydrogen está orientado a velocidad y eficiencia.
  - Con Google AI Plus, el selector ofrece **Flash-Lite e Hydrogen**.
- **Mensaje clave:** los nombres cambian cada pocos meses. Lo que se aprende es elegir entre rápido y profundo. La lista vigente queda en el LMS, y la U2 lo practica a fondo.

**5.2 Hora práctica (60 min, individual)**

| Tramo | Min | Qué pasa |
|---|---|---|
| Brief | 3 | Cada uno elige 3 tareas del banco (o propias), con datos ficticios o públicos |
| Ronda 1 | 15 | Prompt intermedio; autoevaluación con la rúbrica |
| Ronda 2 | 15 | Prompt avanzado; iterar en la misma conversación |
| Ronda 3 | 12 | Pedirle a Gemini que haga preguntas antes de responder y que mejore tu propio prompt |
| Plantilla | 10 | Cada uno destila su **plantilla de prompt maestro** y la guarda en un documento de Drive |
| Cierre | 5 | Vitrina: 3 personas al azar muestran su mejor prompt (antes y después) |

**Banco de tareas:** correo difícil; resumen ejecutivo de un texto largo; preparación de reunión; plan semanal priorizado; respuesta tipo para consultas frecuentes; análisis rápido de una tabla pequeña (dataset del curso).

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
