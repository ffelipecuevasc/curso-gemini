# Iteración 07-01 · Unidad 1: cuenta, modelos y prácticas del laboratorio

- **Épica:** 07 · Ajustes de contenido por unidad
- **Estado:** Terminada
- **Rama sugerida:** iteracion/07-01-unidad-1
- **Depende de:** cierre de la épica 06
- **Especificación:** —
- **RDA relacionadas:** RDA-004 (identidad visual), RDA-009 (contenido en colecciones), RDA-012 (síntesis con límites), RDA-013
- **Hallazgos que cierra:** hallazgos 1 a 7 de la definición de la épica 07; `PENDIENTE_DESARROLLADOR` «Prompts de la U1 nombrados pero no escritos» de `registro-pendientes.md`

## Objetivo

Que la Unidad 1 del sitio diga lo mismo que el instructor enseñará el día de la clase: cuenta empresarial para los participantes, modelos y privacidad vigentes, el prompt avanzado publicado y un laboratorio con Mapa de oportunidades, banco de tareas descargable y Revisión en 3 pasos. Sin cambiar el diseño.

## Punto de partida

Leer antes de escribir (verificado en el repositorio el 2026-11-22; confirmar que sigue igual después de la épica 06):

- `src/content/unidades/u1.yaml`: `descargas: []`; `terminadoCuando[0]` = «Confirmé que trabajo con la cuenta del curso y Google AI Plus activo.»; recursos `gemini-4-argon`, `gemini-4-carbon`, `gemini-4-hydrogen`; no incluye `acerca-modelos-gemini`.
- `src/content/bloques/u1/bloque-2.md`: `haras`, la clave «En cuenta personal usa solo datos ficticios o públicos», el punto 2.4 «Seguridad con la cuenta personal» (Keep Activity), «Regla del curso» y la autoevaluación.
- `src/content/bloques/u1/bloque-3.md`: resumen, `haras`, la clave «Con Google AI Plus, el selector ofrece Flash-Lite e Hydrogen», una fila del mapa y «Verificación de cuenta».
- `src/content/bloques/u1/bloque-4.md`: prompts `basico` e `intermedio`; falta `avanzado`.
- `src/content/bloques/u1/bloque-5.md`: resumen, 5.1 «Familia Gemini 4» (Argon, Carbon, Hydrogen; «Flash-Lite e Hydrogen»), tabla 5.2 de 5 pasos y el «Banco de tareas» en una línea.
- `src/content/descargas.yaml`: ya existen `dataset-ficticio-solicitudes` y `dataset-ficticio-diccionario`.
- `src/content/recursos.yaml`: existe `acerca-modelos-gemini`; no existe un recurso de Neon.

## Alcance y entregables

1. **Cuenta.** Los participantes trabajan con la cuenta empresarial del curso. Se reemplaza toda mención a que el participante usa una cuenta personal o Google AI Plus en la U1. La regla de datos se mantiene: solo ficticios o públicos.
2. **Modelos.** Se reemplazan Flash-Lite y Argon por lo que muestra hoy la página oficial de modelos: Auto, Hydrogen, Neon y Carbon. Se mantiene el mensaje de que los nombres cambian y se aclara que en la cuenta del curso el selector puede mostrar otra cosa, porque la disponibilidad la define el administrador.
3. **Privacidad.** El punto 2.4 explica las dos cuentas con la información vigente (ver «Contenido aprobado»).
4. **Prompt avanzado.** Se agrega con `id: avanzado` en el bloque 4, después de la decisión del desarrollador (ver Tarea 4).
5. **Laboratorio (bloque 5, punto 5.2).** La tabla pasa de 5 a 6 pasos con los tiempos aprobados, se agrega la «Revisión en 3 pasos» y el «Mapa de oportunidades», y el banco de tareas remite a las descargas.
6. **Descargas de la U1.** `u1.yaml` referencia 4 descargas: Mapa de oportunidades (PDF), Banco de tareas (PDF), dataset (CSV) y su diccionario.
7. **Recursos de la U1.** Se agrega `acerca-modelos-gemini`. Se retira `gemini-4-argon` de la U1 (se conserva en `recursos.yaml` si otra unidad lo usa). `gemini-4-neon` se agrega solo si el desarrollador entrega el enlace oficial.
8. **Síntesis.** Se proponen los cambios de `sintesis` de los bloques 2, 3 y 5 que los puntos anteriores vuelven falsos, y se publican solo con aprobación.

## Contenido aprobado (copiar tal cual)

### `u1.yaml` · `terminadoCuando[0]`

> Entré a Gemini con mi cuenta del curso y reconozco qué modelos veo en el selector.

### Bloque 5 · tabla 5.2 «Práctica individual»

| Paso | Min | Qué haces |
|---|---|---|
| Mapa de oportunidades | 5 | Completas el Mapa de oportunidades y eliges 3 tareas: del banco o propias, descritas en genérico y con datos ficticios o públicos |
| Ronda 1 | 14 | Tarea 1 con prompt intermedio; autoevaluación con la rúbrica |
| Ronda 2 | 15 | Tarea 2 con prompt avanzado, iterando en la misma conversación, y Revisión en 3 pasos de la respuesta |
| Ronda 3 | 11 | Tarea 3: le pides a Gemini que te haga preguntas antes de responder y que mejore tu propio prompt |
| Plantilla | 10 | Destilas tu **plantilla de prompt maestro** y la guardas en un documento de Drive |
| Cierre | 5 | Compartes tu mejor prompt y su puntaje |

### Bloque 5 · texto después de la tabla (reemplaza la línea «Banco de tareas: …»)

**Mapa de oportunidades:** anota tareas repetitivas de tu trabajo, cada cuánto las haces y qué le pedirías a Gemini. Elige las que sean frecuentes, basadas en texto y de bajo riesgo. Descarga la ficha en «Descargas» de esta unidad.

**Banco de tareas:** correo difícil; resumen ejecutivo de un texto largo; preparación de reunión; plan semanal priorizado; respuesta tipo para consultas frecuentes; análisis rápido de una tabla pequeña. Cada tarea trae un caso ficticio listo para usar en el PDF «Banco de tareas», y la última usa el dataset del curso. Para la Ronda 2 elige el resumen ejecutivo o el análisis de tabla: ahí la revisión se puede comprobar.

**Revisión en 3 pasos (Ronda 2):**

1. **Comprueba los hechos.** Contrasta cifras, nombres y fechas con tu material de origen, no con la memoria del modelo. Puedes pedirle: «Lista las afirmaciones de tu respuesta que debo comprobar».
2. **Revisa con la rúbrica.** Audiencia, tono, formato y que nada esté inventado.
3. **Pide una crítica.** «Actúa como revisor exigente: señala 3 riesgos de esta respuesta y qué le falta». Luego ajusta.

### Bloque 2 · punto 2.4 (datos para redactar; la redacción final la aprueba el desarrollador)

- Título propuesto: «Privacidad según tu cuenta».
- **Cuenta del curso (empresarial, Workspace):** Gemini no usa tus conversaciones para entrenar modelos fuera de la organización sin permiso; tus chats solo los ves tú; no hay revisión humana; la retención la configura el administrador (18 meses por defecto, con opciones de 3 o 36). Fuente: Privacy Hub de Workspace (`privacy-hub-workspace`).
- **Cuenta personal:** el ajuste se llama «Historial» y el uso para entrenamiento es un ajuste aparte; 18 meses por defecto; las conversaciones revisadas por personas pueden guardarse hasta 3 años; los chats temporales se guardan unos 2 meses. Fuente: aviso de privacidad de las apps de Gemini (`aviso-privacidad-apps-gemini`).
- Regla del curso, igual para las dos: solo datos ficticios o públicos.

### Bloque 5 · punto 5.1 (datos para redactar)

- Selector de la página oficial al 2026-11-22: Auto, Hydrogen (rapidez y eficiencia), Neon (reemplazó a Argon el 2026-11-18) y Carbon (tareas largas y complejas). Por plan: Plus = Auto + Hydrogen; Pro suma Neon; Ultra suma Carbon. Niveles de razonamiento bajo, medio y alto (bajo por defecto).
- Mensaje clave que se conserva: los nombres cambian cada pocos meses; lo que se aprende es elegir entre rápido y profundo.
- Aviso para el participante: en tu cuenta del curso el selector puede mostrar otros modelos que en la pantalla del instructor.

## Decisiones del desarrollador

- 2026-11-22 · Una tarea por ronda.
- 2026-11-22 · Reparto del laboratorio aprobado: Mapa 5 · Ronda 1 14 · Ronda 2 15 · Ronda 3 11 · Plantilla 10 · Cierre 5 = 60 min. La holgura de 2 min se mantiene.
- 2026-11-22 · Revisión en 3 pasos aprobada, como edición mínima del bloque 5.
- 2026-11-22 · Mapa de oportunidades y Banco de tareas se entregan como PDF descargables con la identidad de Capacita Tu Futuro; el banco va junto al CSV que ya existe.
- 2026-11-22 · Prompt avanzado: el agente analiza y recomienda; el desarrollador elige antes de editar.
- 2026-11-22 · Imágenes, video, Deep Research, Canvas y dashboards quedan en la U2; en la U1 el instructor solo muestra dónde están (no cambia el sitio).

## Tareas

1. Leer `AGENTS.md`, `DESIGN.md` y los archivos de «Punto de partida». Confirmar que la épica 06 está cerrada; si no, detenerse y avisar.
2. Proponer la rama `iteracion/07-01-unidad-1` y esperar aprobación.
3. Medir la línea base: `pnpm build`, conteo de palabras visibles de la U1 y capturas de la U1 en 360 px y 1440 px, claro y oscuro.
4. **Prompt avanzado (se detiene aquí):** analizar el bloque 4 (escalera básico → intermedio), la rúbrica del bloque 5 y la plantilla de prompt maestro. Puntuar con la rúbrica el avanzado de v5 («Lo anterior más: “Máximo 150 palabras, tono profesional y directo. Estructura: situación, causa, impacto, propuesta y pregunta de aprobación. No culpes al proveedor. Antes de redactar, hazme las preguntas que necesites.”»). Entregar 2 o 3 candidatos de texto literal completo (el intermedio más las restricciones, no «lo anterior más»), cada uno con su puntaje por criterio, su `descripcion` de 30 palabras o menos, y una recomendación. **Esperar la elección del desarrollador.**
5. Agregar el prompt elegido con `id: avanzado`, `titulo: "Avanzado"`, después de `intermedio`.
6. Aplicar los cambios de cuenta y modelos en los bloques 2, 3 y 5 y en `u1.yaml`, con ediciones mínimas.
7. Redactar el punto 2.4 con los datos aprobados y mostrarlo al desarrollador antes de publicarlo.
8. Reemplazar la tabla 5.2 y el texto del banco con el «Contenido aprobado».
9. Agregar a `descargas.yaml` las entradas `u1-mapa-oportunidades` y `u1-banco-tareas` (títulos «Mapa de oportunidades» y «Banco de tareas») y referenciar las 4 descargas en `u1.yaml`.
10. Ajustar los recursos de la U1 (alcance 7).
11. Proponer las síntesis afectadas de los bloques 2, 3 y 5, con su conteo de palabras, y esperar aprobación.
12. Actualizar `registro-pendientes.md` (cerrar el pendiente del prompt avanzado y de la ronda 3) y escribir la bitácora de la iteración.
13. Verificar: build, capturas comparadas con la línea base y lista de verificación de `AGENTS.md`.

## Tareas del desarrollador

1. Generar los PDF «Mapa de oportunidades» y «Banco de tareas» y dejarlos en `public/descargas/u1-mapa-oportunidades.pdf` y `public/descargas/u1-banco-tareas.pdf` antes de la tarea 9.
2. Elegir el prompt avanzado (tarea 4).
3. Aprobar el texto del punto 2.4 y las síntesis.
4. Entregar el enlace oficial del anuncio de Neon, si quiere sumarlo a los recursos.
5. Revisar en la cuenta empresarial del curso qué modelos muestra el selector y si Double-check está disponible.

## Criterios de aceptación

- [x] `pnpm build` termina sin errores y sin marcadores `PENDIENTE_*`/`VERIFICAR` visibles.
- [x] Ningún texto de la U1 pide al participante Google AI Plus ni cuenta personal; `grep -rn "Flash-Lite\|Argon\|Keep Activity" src/content/bloques/u1 src/content/unidades/u1.yaml` no devuelve resultados.
- [x] El bloque 4 publica 3 prompts (`basico`, `intermedio`, `avanzado`) y el avanzado elegido suma 8 o más en la rúbrica según el análisis del agente.
- [x] La tabla 5.2 tiene 6 pasos y sus minutos suman 60.
- [ ] La U1 muestra 4 descargas y los 2 PDF abren desde el sitio publicado.
- [x] La «Revisión en 3 pasos» y el «Mapa de oportunidades» aparecen en el bloque 5.
- [x] Sin cambios de diseño: no hay componentes, clases de utilidad nuevas en componentes, tokens ni estilos nuevos (`git diff --stat` solo toca `src/content/`, `public/descargas/` y `_planificacion/`). Las capturas coinciden en estructura con la línea base.
- [x] Ninguna síntesis supera su límite de palabras y todas las cambiadas tienen aprobación registrada en la bitácora.

## Riesgos

- **La 06 no está cerrada:** los cambios caerían sobre componentes en revisión. Mitigación: tarea 1.
- **Los PDF no existen a tiempo:** la tarea 9 enlazaría archivos ausentes. Mitigación: hacer la 9 al final; si faltan, entregar el resto y dejar la 9 abierta.
- **Los modelos cambian otra vez antes de la clase:** se revisa la página oficial el día anterior y se ajusta solo 5.1.
- **La tarjeta del bloque 5 crece:** si el modal se vuelve demasiado largo, el agente avisa; no recorta contenido aprobado por su cuenta.

## Fuera de alcance

- Cambios de diseño, componentes nuevos, JavaScript o dependencias.
- Las unidades 2 a 4 (aunque compartan textos de cuenta y modelos).
- Generar los PDF.
- La mini-prueba del bloque 2 como pregunta oral: es conducción del instructor y no cambia el sitio.

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Los 2 PDF, la elección del prompt avanzado, la aprobación del punto 2.4 y de las síntesis, y opcionalmente el enlace de Neon.