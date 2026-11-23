---
unidad: u1
numero: 4
titulo: "Ingeniería de prompts: fundamentos y ejercicios relámpago"
minutos: 18
tipo: "Exposición + práctica guiada"
sintesis:
  resumen: "El marco Persona, Tarea, Contexto y Formato de Google y la escalera de prompts básico, intermedio y avanzado, con tres rondas sobre un caso."
  haras: "Escribirás tres versiones de un prompt subiendo de básico a avanzado."
  claves:
    - "Marco oficial: Persona, Tarea, Contexto y Formato."
    - "El nivel avanzado suma restricciones, criterios, ejemplos y preguntas previas."
prompts:
  - id: basico
    titulo: "Básico"
    descripcion: "Prompt de nivel básico con solo tarea y producto para pedir un correo por retraso de proyecto y compararlo con los niveles intermedio y avanzado."
    texto: "Escribe un correo para avisar que el proyecto viene atrasado."
  - id: intermedio
    titulo: "Intermedio"
    descripcion: "Prompt de nivel intermedio que suma persona, contexto, objetivo y audiencia para pedir al gerente que apruebe la nueva fecha de entrega."
    texto: "Soy coordinador de proyectos en una empresa de telecomunicaciones. Escribe un correo para mi gerente explicando que la entrega del módulo de reportes se retrasa dos semanas por un cambio de proveedor. El objetivo es que apruebe la nueva fecha."
  - id: avanzado
    titulo: "Avanzado"
    descripcion: "Prompt de nivel avanzado que suma al intermedio la necesidad del gerente, formato, estructura, una restricción, un criterio verificable y preguntas previas antes de redactar."
    texto: "Soy coordinador de proyectos en una empresa de telecomunicaciones. Escribe un correo para mi gerente explicando que la entrega del módulo de reportes se retrasa dos semanas por un cambio de proveedor. El objetivo es que apruebe la nueva fecha. Mi gerente tiene poco tiempo y necesita decidir con claridad. Máximo 150 palabras, tono profesional y directo. Estructura: situación, causa, impacto, propuesta y pregunta de aprobación. No culpes al proveedor. Estará bien si se lee en menos de un minuto y la pregunta de aprobación se responde con un sí o un no. Antes de redactar, hazme las preguntas que necesites."
profundiza:
  recursos:
    - prompting-guide-101
    - estrategias-diseno-prompts
---

**4.1 Fundamentos**
- Un mal prompt produce una mala respuesta, y la frustración se le atribuye a la herramienta («la IA no sirve»).
- **Prompt basado en objetivos:** qué necesito, para qué y cómo sabré que está bien. Equivale a la «Tarea» del marco de Google.
- **Prompt basado en contexto:** quién soy, la situación, la audiencia, el material de base y los ejemplos. Equivale a «Persona» y «Contexto».
- Marco oficial de Google: **Persona · Tarea · Contexto · Formato**. En nivel avanzado se suman restricciones, criterios de calidad y ejemplos (*few-shot*).

**4.2 Escalera de niveles**

| Nivel | Componentes | Ejemplo («informar un retraso en un proyecto») |
|---|---|---|
| Básico | Tarea + producto | «Escribe un correo para avisar que el proyecto viene atrasado.» |
| Intermedio | + Persona, contexto, objetivo y audiencia | «Soy coordinador de proyectos en una empresa de telecomunicaciones. Escribe un correo para mi gerente explicando que la entrega del módulo de reportes se retrasa dos semanas por un cambio de proveedor. El objetivo es que apruebe la nueva fecha.» |
| Avanzado | + Formato, restricciones, criterios y ejemplo | Lo anterior más: «Mi gerente tiene poco tiempo y necesita decidir con claridad. Máximo 150 palabras, tono profesional y directo. Estructura: situación, causa, impacto, propuesta y pregunta de aprobación. No culpes al proveedor. Estará bien si se lee en menos de un minuto y la pregunta de aprobación se responde con un sí o un no. Antes de redactar, hazme las preguntas que necesites.» |

**4.3 Ejercicios relámpago:** tres rondas individuales, una por nivel, con el mismo caso.
