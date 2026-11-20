# Iteración 05-03 · Síntesis de U3 y U4

- **Épica:** 05 · Rediseño visual y síntesis del contenido
- **Estado:** En revisión
- **Rama sugerida:** iteracion/05-03-sintesis-u3-u4
- **Depende de:** 05-02
- **Especificación:** —
- **RDA relacionadas:** RDA-009, RDA-012

## Objetivo

Completar la síntesis aprobada de los 14 bloques de U3 y U4, retirar su material de conducción de la clase y dejar los campos de síntesis como obligatorios, para que ningún bloque futuro llegue a la página sin su versión corta.

## Punto de partida

- Esquema con `sintesis`, `descripcion` y `objetivoBreve` opcionales, y el validador `maxPalabras` (05-02).
- U3 tiene 7 bloques (`bloque-0` a `bloque-5` y `cierre`; ≈ 2.628 palabras con la ficha) y U4 tiene 7 (≈ 1.912 palabras).
- Material de conducción detectado (lista para revisar con el desarrollador):
  - U3 · cierre: «3 participantes al azar muestran su kit…».
  - U4 · 5: «Demo Day (10 min): 5 participantes elegidos al azar presentan…»; «Construcción (13 min)».
  - U3 · 1 a 5 y U4 · 2, 4 y 5: «Microcharla (N min)» y «Práctica (N min)» como encabezados de minutos.

## Alcance y entregables

- Síntesis de los 14 bloques de U3 y U4, `descripcion` de sus prompts y `objetivoBreve` de U3 y U4, redactadas por el agente y aprobadas por el desarrollador.
- Cuerpo de los bloques de U3 y U4 sin el material de conducción aprobado.
- `bloque.sintesis` y `unidad.objetivoBreve` pasan a ser obligatorios; `prompt.descripcion` también, salvo que el desarrollador decida dejarlo opcional para algún prompt (anotado en la bitácora).

## Contenido aprobado (copiar tal cual)

> Aprobado por el desarrollador el 2026-11-19 (`contenido-aprobado-05-03.md`). Cada texto se apoya en el contenido de `main`; los conteos son por script (`split` por espacios).

### 1. Unidad 3 (`u3.yaml` y bloques `u3/*`)

- **`objetivoBreve` (`u3.yaml`):** `"Usar Gemini Notebook para investigar la Ley 21.719 con fuentes públicas confiables y convertir el cuaderno en capacitación interna."` (19/20 palabras)
- **`u3/bloque-0.md`:**
  - `resumen`: `"Descubre que en Gemini Notebook trabajas solo con tus fuentes y conoce el caso de la Ley 21.719 y las cinco piezas del kit."` (24/25 palabras)
  - `haras`: `"Revisa el caso y las cinco piezas del kit."` (9/12 palabras)
  - `claves`:
    - `"El chat responde solo con las fuentes que tú eliges."` (10/10 palabras)
    - `"Usa solo fuentes públicas; el kit no es asesoría legal."` (10/10 palabras)
- **`u3/bloque-1.md`:**
  - `resumen`: `"Qué fuentes acepta un cuaderno, en qué se diferencian Fast Research y Deep Research y cómo armar tu cuaderno de la ley con fuentes confiables."` (25/25 palabras)
  - `haras`: `"Crea tu cuaderno y súmale al menos cinco fuentes confiables."` (10/12 palabras)
  - `claves`:
    - `"Un cuaderno vale lo que valen sus fuentes."` (8/10 palabras)
    - `"Lanza Deep Research primero: trabaja en segundo plano."` (8/10 palabras)
  - `prompts[0]` (`deep-research`) `descripcion`: `"Pide a Deep Research un informe sobre el impacto de la Ley 21.719 en empresas de telecomunicaciones en Chile: obligaciones, plazos, sanciones y buenas prácticas."` (25/30 palabras)
  - `prompts[1]` (`fast-research`) `descripcion`: `"Búsqueda en Fast Research de guías oficiales de implementación de la Ley 21.719, para importar solo dos fuentes oficiales al cuaderno."` (21/30 palabras)
- **`u3/bloque-2.md`:**
  - `resumen`: `"Configura el estilo y la longitud del chat, prueba prompts sobre la ley y verifica las respuestas abriendo la cita en el pasaje original."` (24/25 palabras)
  - `haras`: `"Configura el chat, prueba al menos cuatro prompts y verifica dos citas."` (12/12 palabras)
  - `claves`:
    - `"El chat solo usa tus fuentes."` (6/10 palabras)
    - `"Haz clic en una cita para ir al pasaje original."` (10/10 palabras)
  - `prompts[0]` (`plantilla-estilo-personalizado`) `descripcion`: `"Plantilla para el estilo Personalizado: define el rol de tutor en cumplimiento normativo, el objetivo y el estilo de las respuestas del chat."` (23/30 palabras)
  - `prompts[1]` (`sintesis-por-audiencia`) `descripcion`: `"Pide explicar en cinco puntos qué cambia la ley para un ejecutivo de atención al cliente."` (16/30 palabras)
  - `prompts[2]` (`pregunta-precisa`) `descripcion`: `"Pregunta qué derechos tiene un titular de datos y en qué artículos de la ley están."` (16/30 palabras)
  - `prompts[3]` (`comparacion-entre-fuentes`) `descripcion`: `"Compara lo que dice el informe de Deep Research con el texto de la ley sobre sanciones y busca diferencias."` (20/30 palabras)
  - `prompts[4]` (`vacios-y-contradicciones`) `descripcion`: `"Pregunta qué temas importantes para una empresa de telecomunicaciones no quedan claros en las fuentes del cuaderno."` (17/30 palabras)
  - `prompts[5]` (`caso-aplicado`) `descripcion`: `"Caso ficticio: un cliente pide por WhatsApp que eliminen sus datos; consulta qué dice la ley y qué pasos debería seguir el ejecutivo."` (23/30 palabras)
- **`u3/bloque-3.md`:**
  - `resumen`: `"Recorre los recursos del panel Studio y genera un resumen en audio, un mapa mental, un informe interactivo y un cuestionario sobre la ley."` (24/25 palabras)
  - `haras`: `"Genera audio, mapa mental, informe interactivo y cuestionario."` (8/12 palabras)
  - `claves`:
    - `"Studio genera los recursos en segundo plano."` (7/10 palabras)
    - `"Revisa que cada respuesta del cuestionario esté en las fuentes."` (10/10 palabras)
  - `prompts[0]` (`resumen-en-audio`) `descripcion`: `"Instrucción para el resumen en audio, enfocada en lo que debe saber un ejecutivo de atención al cliente, en diez minutos."` (21/30 palabras)
- **`u3/bloque-4.md`:**
  - `resumen`: `"Configura una presentación en Studio y compara el resultado sin prompt con el de un prompt de diseño con la marca GTD."` (22/25 palabras)
  - `haras`: `"Crea las presentaciones A y B y compara el cambio."` (10/12 palabras)
  - `claves`:
    - `"Prompt de diseño más específico, resultado más consistente."` (8/10 palabras)
    - `"El logotipo no va en el prompt: se agrega después."` (10/10 palabras)
  - `prompts[0]` (`estilo-gtd`) `descripcion`: `"Prompt de diseño para las diapositivas: paleta GTD con códigos HEX, tipografía, diagramación, contenido y una lista de cosas que evitar."` (21/30 palabras)
- **`u3/bloque-5.md`:**
  - `resumen`: `"Pide desde el chat el guion de un curso interno de 45 minutos y un banco de 15 preguntas, y revisa sus citas."` (23/25 palabras)
  - `haras`: `"Genera el guion y el banco de preguntas, y arma tu kit."` (12/12 palabras)
  - `claves`:
    - `"Desde el chat puedes pedir archivos que quedan en Studio."` (10/10 palabras)
    - `"Contrasta tres mensajes clave del guion con sus citas."` (9/10 palabras)
  - `prompts[0]` (`guion-curso-interno`) `descripcion`: `"Pide en el chat el guion en Markdown de un curso interno de 45 minutos, con módulos, actividades, mensajes clave con artículo y una evaluación final."` (26/30 palabras)
  - `prompts[1]` (`banco-de-preguntas`) `descripcion`: `"Pide un banco de 15 preguntas de selección múltiple con la respuesta correcta y el artículo que la respalda."` (19/30 palabras)
- **`u3/cierre.md`:**
  - `titulo`: `"Cierre"` (pasa de `"Vitrina y cierre"` a `"Cierre"`)
  - `resumen`: `"Revisa tu kit sobre la Ley 21.719 y conoce el adelanto de la Unidad 4: convertir tus instrucciones repetidas en skills reutilizables."` (22/25 palabras)
  - `haras`: `"Revisa tu kit y conoce la Unidad 4."` (8/12 palabras)
  - `claves`:
    - `"Lo que repites en cada chat puede ser una skill."` (10/10 palabras)
- **Palabras visibles de U3 (`objetivoBreve` + títulos + `haras` + `claves`):** **253/300**.

### 2. Unidad 4 (`u4.yaml` y bloques `u4/*`)

- **`objetivoBreve` (`u4.yaml`):** `"Comprender por qué las skills reemplazan a los Gems, instalar dos skills, crear una propia y resolver el proyecto integrador."` (20/20 palabras)
- **`u4/bloque-0.md`:**
  - `resumen`: `"Repasa cómo tu plantilla, tu marca y tu chat de las unidades anteriores se convierten hoy en herramientas reutilizables y conoce la meta del día."` (25/25 palabras)
  - `haras`: `"Revisa el recorrido y la meta: tres skills funcionando."` (9/12 palabras)
  - `claves`:
    - `"Hoy conviertes lo que ya creaste en herramientas reutilizables."` (9/10 palabras)
    - `"Al terminar tendrás tres skills funcionando."` (6/10 palabras)
- **`u4/bloque-1.md`:**
  - `resumen`: `"Qué es una skill, por qué reemplaza a los Gems, cómo se estructura un SKILL.md y cómo crearla, activarla y desactivarla desde Personalizar."` (23/25 palabras)
  - `haras`: `"Crea una skill desde una plantilla y pruébala dentro del chat."` (11/12 palabras)
  - `claves`:
    - `"La descripción decide cuándo Gemini activa la skill."` (8/10 palabras)
    - `"Más de dos repeticiones: conviértela en skill."` (7/10 palabras)
- **`u4/bloque-2.md`:**
  - `resumen`: `"Instala optimizador-prompts, que convierte un pedido rápido en dos versiones optimizadas, pruébala con tres prompts de la U1 y personalízala."` (20/25 palabras)
  - `haras`: `"Instala la skill, optimiza tres prompts y agrega una regla propia."` (11/12 palabras)
  - `claves`:
    - `"Entrega dos versiones: basada en contexto y basada en objetivos."` (10/10 palabras)
    - `"Con Editar con Gemini agregas una regla propia."` (8/10 palabras)
  - `prompts[0]` (`prompt-a-la-rapida`) `descripcion`: `"Pedido escrito «a la rápida», sin estructura, para probar cómo la skill lo convierte en dos versiones optimizadas."` (18/30 palabras)
  - `prompts[1]` (`regla-propia-ingles`) `descripcion`: `"Instrucción para agregar con Editar con Gemini una regla propia: incluir siempre una versión en inglés."` (16/30 palabras)
  - `prompts[2]` (`regla-propia-tono`) `descripcion`: `"Instrucción para agregar con Editar con Gemini una regla propia: adaptar el tono a atención al cliente."` (17/30 palabras)
- **`u4/bloque-3.md`:**
  - `resumen`: `"Instala gtd-visual, que pregunta, muestra cuatro estilos en vista previa y produce la pieza con la marca GTD, y verifica el resultado."` (22/25 palabras)
  - `haras`: `"Genera una presentación y un dashboard con la marca GTD."` (10/12 palabras)
  - `claves`:
    - `"Los archivos de referencia viajan dentro de la skill."` (9/10 palabras)
    - `"Verifica logo, contraste y tres cifras contra el CSV."` (9/10 palabras)
  - `prompts[0]` (`presentacion-gtd-visual`) `descripcion`: `"Pide a gtd-visual una presentación para la gerencia con los hallazgos del dataset del trimestre, con la marca GTD."` (19/30 palabras)
- **`u4/bloque-4.md`:**
  - `resumen`: `"Diseña tu propia skill con el lienzo de siete elementos, elige una plantilla del curso o propón la tuya, pruébala, ajústala y descárgala."` (23/25 palabras)
  - `haras`: `"Crea una skill, pruébala con dos casos y descárgala."` (9/12 palabras)
  - `claves`:
    - `"La descripción dice qué hace y cuándo usarla."` (8/10 palabras)
    - `"El ciclo es probar, ajustar y volver a probar."` (9/10 palabras)
- **`u4/bloque-5.md`:**
  - `titulo`: `"Proyecto integrador"` (pasa de `"Proyecto integrador y Demo Day"` a `"Proyecto integrador"`)
  - `resumen`: `"Resuelve una tarea real de punta a punta con una herramienta de investigación, dos skills y un producto final, y escribe tu reflexión."` (23/25 palabras)
  - `haras`: `"Construye tu proyecto integrador y escribe la reflexión de cuatro preguntas."` (11/12 palabras)
  - `claves`:
    - `"Usa una herramienta de investigación, dos skills y un producto."` (10/10 palabras)
    - `"Revisa tú el resultado antes de darlo por bueno."` (9/10 palabras)
- **`u4/cierre.md`:**
  - `resumen`: `"Repasa el recorrido de las cuatro clases, define qué skill usarás mañana en tu trabajo y llévate el mensaje final del curso."` (22/25 palabras)
  - `haras`: `"Define qué skill usarás mañana en tu trabajo."` (8/12 palabras)
  - `claves`:
    - `"La IA no reemplaza tu talento, lo multiplica."` (8/10 palabras)
    - `"Las skills descargadas son tuyas."` (5/10 palabras)
- **Palabras visibles de U4 (`objetivoBreve` + títulos + `haras` + `claves`):** **246/300**.

### 3. Material de conducción retirado o reescrito (M-01 a M-20)

- **M-01** (`u3/bloque-1.md`): `**Microcharla (3 min)**` → `**Conceptos clave**`.
- **M-02** (`u3/bloque-1.md`): `**Práctica (17 min)**` → `**Práctica**`.
- **M-03** (`u3/bloque-2.md`): `**Microcharla (3 min)**` → `**Conceptos clave**`.
- **M-04** (`u3/bloque-2.md`): `**Práctica (17 min)**` → `**Práctica**`.
- **M-05** (`u3/bloque-2.md`): `2. **Banco de prompts** (cada participante usa al menos 4):` → `2. **Banco de prompts** (usa al menos 4):`.
- **M-06** (`u3/bloque-3.md`): `**Microcharla (3 min):** el panel Studio...` → `**Conceptos clave:** el panel Studio...`.
- **M-07** (`u3/bloque-3.md`): `**Práctica (17 min)**` → `**Práctica**`.
- **M-08** (`u3/bloque-4.md`): `**Microcharla (3 min)**` → `**Conceptos clave**`.
- **M-09** (`u3/bloque-4.md`): `**Práctica (17 min)**` → `**Práctica**`.
- **M-10** (`u3/bloque-5.md`): `**Microcharla (2 min):** desde el chat...` → `**Conceptos clave:** desde el chat...`.
- **M-11** (`u3/bloque-5.md`): `**Práctica (18 min)**` → `**Práctica**`.
- **M-12** (`u3/cierre.md`): `titulo: "Vitrina y cierre"` → `titulo: "Cierre"`.
- **M-13** (`u3/cierre.md`): retirar la viñeta `- 3 participantes al azar muestran su kit en 60 a 90 segundos: presentación B, informe interactivo o guion.` (opción A).
- **M-14** (`u4/bloque-1.md`): `**Microcharla (3 min)**` → `**Conceptos clave**`; `**Práctica (9 min)**` → `**Práctica**`.
- **M-15** (`u4/bloque-2.md`): `**Microcharla (3 min):** esta skill convierte...` → `**Conceptos clave:** esta skill convierte...`; `**Práctica (20 min)**` → `**Práctica**`.
- **M-16** (`u4/bloque-3.md`): `**Microcharla (3 min):** esta skill aplica...` → `**Conceptos clave:** esta skill aplica...`; `**Práctica (22 min)**` → `**Práctica**`.
- **M-17** (`u4/bloque-4.md`): `**Microcharla (3 min)**` → `**Conceptos clave**`; `**Práctica (22 min).** Cada participante elige una opción del menú o propone la suya:` → `**Práctica.** Elige una opción del menú o propón la tuya:`; `Una tarea frecuente del puesto de trabajo de cada uno` → `Una tarea frecuente de tu puesto de trabajo`; `Hay que cambiar al menos la descripción y una regla para que refleje su forma de trabajar.` → `Cambia al menos la descripción y una regla para que refleje tu forma de trabajar.`; `Se crean eventos de prueba antes de la clase (pre-trabajo).` → `Crea eventos de prueba en tu calendario antes de probarla.`.
- **M-18** (`u4/bloque-5.md`): `**Microcharla (2 min):** el proyecto integrador...` → `**Conceptos clave:** el proyecto integrador...`; `**Práctica (23 min)**` → `**Práctica**`; `- **Construcción (13 min).** Ejemplos de recorrido:` → `- **Construcción.** Ejemplos de recorrido:`; `Una tarea propia de su puesto, con datos ficticios o públicos.` → `Una tarea propia de tu puesto, con datos ficticios o públicos.`.
- **M-19** (`u4/bloque-5.md` y `u4.yaml`): retirar «Demo Day». En `u4/bloque-5.md`: `titulo: "Proyecto integrador"` y se elimina la línea `- **Demo Day (10 min):** 5 participantes elegidos al azar presentan...`. En `u4.yaml`: `miniProyecto.titulo: "Mi caja de herramientas IA"` y `entregable: "Skills optimizador-prompts, gtd-visual y una propia instaladas y probadas; proyecto integrador terminado"`.
- **M-20** (`u3/bloque-3.md`): `Los límites de uso dependen del plan y Google los ajusta con el tiempo, así que hoy se prioriza.` → `Los límites de uso dependen de tu plan y Google los ajusta con el tiempo: prioriza los recursos que más te sirvan.`.

## Tareas

1. Redactar el borrador de síntesis de los 7 bloques de U3, sus prompts y `objetivoBreve`, con la frase de origen de cada síntesis.
2. Hacer lo mismo para los 7 bloques de U4.
3. Presentar la lista de material de conducción de U3 y U4 con la propuesta de retiro o de reescritura, y esperar la aprobación ítem por ítem.
4. Cargar solo lo aprobado y copiarlo en «Contenido aprobado».
5. Retirar del cuerpo el material de conducción aprobado.
6. Volver obligatorios los campos de síntesis y comprobar que el build pasa con las 4 unidades y falla si se borra la `sintesis` de un bloque (prueba revertida).
7. Ejecutar `pnpm build`, `pnpm astro check` y las regresiones; anotar en la bitácora el conteo de palabras por unidad antes y después, separando síntesis y detalle.
8. Escribir la bitácora y actualizar el registro.

## Tareas del desarrollador

1. Aprobar o corregir cada síntesis y cada retiro de material de conducción.

## Criterios de aceptación

- [x] Los 26 bloques tienen `sintesis` y las 4 unidades tienen `objetivoBreve` (búsqueda con un comando); quitar uno hace fallar `pnpm build` (prueba revertida).
- [x] Cada texto cargado coincide con «Contenido aprobado».
- [x] Las palabras que verá la tarjeta por unidad (objetivo breve + títulos de bloque + «Qué harás» + claves) suman como máximo 300 (conteo con un comando sobre el contenido, anotado en la bitácora). El `resumen` no cuenta: vive en el modal.
- [x] `dist/index.html` no contiene «al azar», «Pregunta para el grupo» ni «semáforo», salvo lo que el desarrollador decidió conservar.
- [x] Los 24 prompts siguen idénticos a su fuente y los minutos de cada unidad siguen sumando 120.
- [x] Regresiones: `pnpm build` sin advertencias con la guardia; `pnpm astro check` 0/0/0; 0 B de JavaScript nuevo.

## Riesgos

- La U3 es la unidad más larga: si no cabe en 300 palabras, se deja una sola clave en los bloques más cortos antes de acortar los títulos o «Qué harás».

## Fuera de alcance

- Mostrar la síntesis en la página (05-05).

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Aprobación de cada síntesis y de cada retiro.
