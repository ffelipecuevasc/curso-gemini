---
unidad: u4
numero: 4
titulo: "Crea tu propia skill"
minutos: 25
microcharlaMin: 3
practicaMin: 22
profundiza:
  recursos:
    - formato-skill-md-gemini-enterprise
    - crear-skills-gemini-cli
---

**Microcharla (3 min)**
- **Lienzo de una skill:**
  1. Nombre (minúsculas y guiones).
  2. Descripción con *qué hace* y *cuándo usarla*, escrita con las palabras que diría el usuario.
  3. Entradas que necesita.
  4. Pasos.
  5. Formato de salida.
  6. Reglas (qué nunca hacer).
  7. Un ejemplo.
- **Tres formas de crearla:** con Gemini (te entrevista), manualmente (rellenas los campos) o subiendo un `SKILL.md`.
- **Ciclo:** probar → ajustar → volver a probar. La descripción y el formato de salida son lo que más se ajusta.

**Práctica (22 min).** Cada participante elige una opción del menú o propone la suya:

| Opción | Plantilla del LMS | Qué hace | Para probarla |
|---|---|---|---|
| Analista de planillas | `analista-planillas` | Analiza un CSV o XLSX según un **objetivo** que define el usuario: revisa la calidad de los datos, calcula con código y entrega hallazgos, una tabla y un **gráfico estadístico** | Dataset ficticio de la U2 |
| Resumen ejecutivo | `resumen-ejecutivo` | Convierte un documento largo en un resumen de una página para la jefatura, con puntos clave, decisiones, riesgos y vacíos | Informe de Deep Research de la U2 o la ley de la U3 |
| Mi semana laboral | `mi-semana-laboral` | Lee Google Calendar y resume las reuniones **desde hoy hasta el viernes** (si es jueves, solo jueves y viernes), con choques y bloques libres | Calendario personal con 4 o 5 eventos de prueba creados antes |
| Libre | `plantilla-en-blanco` | Una tarea frecuente del puesto de trabajo de cada uno | Datos ficticios o públicos |

Pasos:
1. Abrir la plantilla elegida y ajustarla con **Crear con Gemini** o **Crear manualmente**. Hay que cambiar al menos la descripción y una regla para que refleje su forma de trabajar.
2. Probarla 2 veces con casos distintos.
3. Ajustar con **Editar con Gemini** según lo que falló.
4. **Descargar** la skill (Más → Descargar) para tener su respaldo en `.zip`.

**Notas importantes:**
- `mi-semana-laboral` necesita **Google Calendar conectado** a Gemini y la **Actividad** activada; sin eso, las skills no acceden a Calendar ni a Drive. Con la cuenta personal del curso, se trabaja con el calendario personal, no con el corporativo de GTD. Se crean eventos de prueba antes de la clase (pre-trabajo).
- En `analista-planillas`, el gráfico estadístico se genera **con código**, porque así las cifras salen exactas. Si se quiere una imagen tipo infografía, se crea después con esas mismas cifras y se revisa cada número, porque una imagen generada puede alterar los valores.

**Carril extra:** hacer que la skill propia llame a `gtd-visual`, por ejemplo para que el análisis termine en una diapositiva con la marca.
