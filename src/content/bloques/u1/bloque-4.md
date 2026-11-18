---
unidad: u1
numero: 4
titulo: "Ingeniería de prompts: fundamentos y ejercicios relámpago"
minutos: 18
tipo: "Exposición + práctica guiada"
prompts:
  - id: basico
    titulo: "Básico"
    texto: "Escribe un correo para avisar que el proyecto viene atrasado."
  - id: intermedio
    titulo: "Intermedio"
    texto: "Soy coordinador de proyectos en una empresa de telecomunicaciones. Escribe un correo para mi gerente explicando que la entrega del módulo de reportes se retrasa dos semanas por un cambio de proveedor. El objetivo es que apruebe la nueva fecha."
profundiza:
  recursos:
    - prompting-guide-101
    - estrategias-diseno-prompts
---

**4.1 Fundamentos (6 min)**
- Un mal prompt produce una mala respuesta, y la frustración se le atribuye a la herramienta («la IA no sirve»).
- **Prompt basado en objetivos:** qué necesito, para qué y cómo sabré que está bien. Equivale a la «Tarea» del marco de Google.
- **Prompt basado en contexto:** quién soy, la situación, la audiencia, el material de base y los ejemplos. Equivale a «Persona» y «Contexto».
- Marco oficial de Google: **Persona · Tarea · Contexto · Formato**. En nivel avanzado se suman restricciones, criterios de calidad y ejemplos (*few-shot*).

**4.2 Escalera de niveles**

| Nivel | Componentes | Ejemplo («informar un retraso en un proyecto») |
|---|---|---|
| Básico | Tarea + producto | «Escribe un correo para avisar que el proyecto viene atrasado.» |
| Intermedio | + Persona, contexto, objetivo y audiencia | «Soy coordinador de proyectos en una empresa de telecomunicaciones. Escribe un correo para mi gerente explicando que la entrega del módulo de reportes se retrasa dos semanas por un cambio de proveedor. El objetivo es que apruebe la nueva fecha.» |
| Avanzado | + Formato, restricciones, criterios y ejemplo | Lo anterior más: «Máximo 150 palabras, tono profesional y directo. Estructura: situación, causa, impacto, propuesta y pregunta de aprobación. No culpes al proveedor. Antes de redactar, hazme las preguntas que necesites.» |

**4.3 Ejercicios relámpago (12 min, individuales):** tres rondas de 4 minutos, una por nivel, con el mismo caso.
