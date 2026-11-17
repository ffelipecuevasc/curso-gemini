# 04 · Unidades del mini-bootcamp «Gemini & Google Suite en el Entorno Laboral»

Estado: versión 5. Las 4 unidades están completas. Respaldos: `04-unidades-del-curso.v1-respaldo.md` (6 temas por unidad), `.v2-respaldo.md` (solo U1), `.v3-respaldo.md` (U1 y U2) y `.v4-respaldo.md` (U1 a U3). Las skills del curso están en la carpeta `skills/`.
Fecha de la investigación: 2026-11-17. Instructor: Felipe Cuevas. Cliente final: trabajadores de GTD Telsur (Chile).
Formato: 4 clases de 2 horas (8 horas en total), una unidad por clase, con un máximo de 5 bloques por unidad.

Convenciones: `PENDIENTE_DESARROLLADOR` = decide o entrega Felipe. `PENDIENTE_CLIENTE` = lo confirma Capacita Tu Futuro o GTD. `VERIFICAR` = hay que comprobarlo en una prueba previa con una cuenta Google AI Plus. Los minutos son estimaciones de diseño.

---

## 0. Enfoque mini-bootcamp (aplica a todo el curso)

### 0.1 Principios
- **Aprendizaje basado en proyectos (ABP):** cada unidad es un mini-proyecto con un entregable concreto, y sus bloques son los hitos de ese proyecto.
- **Práctica primero.** La teoría en clase es breve y la completa vive en el mini-LMS, en el apartado «Profundiza en tu tiempo» de cada bloque. Desde la U2, la exposición ocupa como máximo el 15 % de la clase.
- **Excepción:** la U1, que instala los fundamentos de IA generativa y de ingeniería de prompts.
- **Ciclo de cada hito:** microcharla de 3 minutos como máximo → demostración en vivo → construyen → autoverificación.
- **Revisión humana siempre:** cada lista de terminado incluye qué verifiqué y qué aporté yo.

### 0.2 Supuestos operativos (definidos por la jefatura)

| Supuesto | Consecuencia en el diseño |
|---|---|
| **Cuenta base: Google AI Plus** (personal, CLP 4.690 al mes en Chile). No se sabe qué tiene la cuenta empresarial, así que todo se diseña para lo que garantiza este plan | Modelos del selector: **Flash-Lite e Hydrogen**, con niveles de razonamiento bajo, medio y alto. Pro, Argon y Carbon requieren Google AI Pro o Ultra, así que solo se muestran en una demostración del instructor si su cuenta los tiene. Si la cuenta empresarial ofrece más, es un plus, no un requisito |
| **Cuenta personal = sin datos reales de GTD** | Todos los ejercicios usan datos ficticios (dataset del curso) o información pública. Nunca datos de clientes, contratos ni información interna |
| **Mayores de 18 años** | Deep Research y las transformaciones de Canvas (presentaciones, infografías, páginas web) requieren 18 años o más |
| **Trabajo 100 % individual, unos 50 participantes** | El instructor no puede revisar a cada persona. Ver 0.3 |

### 0.3 Dinámica para 50 personas trabajando de forma individual
- **Todo listo para copiar en el LMS:** prompts base, dataset, kit de marca y lista de terminado. Nadie se atrasa por tener que escribir desde cero.
- **Dos carriles por hito:** un *carril base* obligatorio (alcanzable por todos) y un *carril extra* para quien termina antes. Así se evita que los rápidos esperen y que los lentos se frustren.
- **Semáforo de avance:** verde = listo, amarillo = avanzo con dudas, rojo = bloqueado. Se marca con tarjetas de color o reacciones de la videollamada. El instructor atiende primero los rojos y resuelve en voz alta los errores que se repiten.
- **Clínica en vivo:** en cada hito, el instructor proyecta y mejora el trabajo de 1 o 2 voluntarios. Eso reemplaza la revisión uno a uno.
- **Autoevaluación** con la rúbrica o la lista de terminado del LMS.
- **Vitrina de cierre:** 3 personas elegidas al azar muestran su entregable en 60 segundos cada una.
- **Prueba previa obligatoria:** el instructor hace la clase completa con una cuenta Google AI Plus antes de dictarla, para confirmar límites de uso, botones y tiempos.

### 0.4 Pre-trabajo de todo el curso
Tener Google AI Plus activo, iniciar sesión en gemini.google.com en un computador (no en el celular, porque varias funciones de Canvas se usan en la web) y abrir la página de la unidad en el LMS antes de la clase.

---

## 1. Resumen

| Unidad | Título | Mini-proyecto | Entregable | Estado |
|---|---|---|---|---|
| 1 | Fundamentos de IA Generativa & Ingeniería de Prompts | Mi prompt maestro | Prompts evaluados con la rúbrica y una plantilla de prompt reutilizable guardada | Completa |
| 2 | Gemini | Kit de comunicación GTD | Planilla comparativa de modelos, informe de Deep Research en Docs, infografía, presentación y dashboard interactivo, todo con la marca GTD | Completa |
| 3 | Gemini Notebook | Kit de capacitación interna: Ley 21.719 en GTD | Cuaderno configurado con fuentes etiquetadas, informe interactivo, cuestionario, presentación con estilo GTD y guion del curso interno en Markdown | Completa |
| 4 | Gemini Skills & Proyecto Integrador | Mi caja de herramientas IA + Demo Day | Skills `optimizador-prompts`, `gtd-visual` y una propia instaladas y probadas; proyecto integrador presentado | Completa |

---

## Unidad 1 · Fundamentos de IA Generativa & Ingeniería de Prompts

**Clase 1 · 120 minutos · Nivel: Principiante → Intermedio · Exposición ~40 % / práctica ~60 % (excepción del curso)**

**Objetivo:** que cada participante entienda cómo funciona la IA generativa y cuáles son sus límites, sepa dónde está Gemini en el ecosistema de Google y salga con un método para escribir prompts. Ese método queda guardado en una plantilla que reutilizará todo el curso.

**Mini-proyecto: «Mi prompt maestro».** Cada participante resuelve 3 tareas de su trabajo con Gemini, usando datos ficticios o públicos. Mejora sus prompts con la rúbrica de la clase y termina con una plantilla de prompt reutilizable guardada en su Drive. En la U4, esa plantilla se convierte en la skill «Optimizador de prompts».

| # | Bloque | Tipo | Min |
|---|---|---|---|
| 1 | Bienvenida y encuadre del bootcamp | Exposición | 5 |
| 2 | Fundamentos de IA generativa y uso responsable | Exposición interactiva + mini-prueba | 20 |
| 3 | Gemini en el ecosistema de Google | Demostración + verificación de cuenta | 10 |
| 4 | Ingeniería de prompts: fundamentos y ejercicios relámpago | Exposición + práctica guiada | 18 |
| 5 | Laboratorio: Gemini en tu trabajo y tu plantilla de prompt | Recorrido de 5 min + **práctica de 60 min** | 65 |
| | Holgura | | 2 |

**Si te atrasas:** el bloque 5 no se recorta. Lo que se acorta es la línea de tiempo del bloque 2 (queda en el LMS) y la mención de AI Studio y Workspace Studio del bloque 3.

### Bloque 1 · Bienvenida y encuadre del bootcamp (5 min)

**Presentación del instructor**, según el perfil profesional de Felipe (2026):
- **Francisco Felipe Cuevas Cerón**, Ingeniero Informático (INACAP), con Diplomado en Andragogía y Formación Profesional (Universidad de Chile, 2025–2026).
- **Educador certificado de Gemini** (*Gemini Certified Educator*, Google for Education). Certifica las habilidades, competencias y conocimientos para usar la IA de Google en la educación. Emitida el 13-10-2026 y válida hasta el 13-10-2029. Se destaca primero, mostrando la insignia oficial.
- Más de 12 años en docencia y formación técnica. Docente universitario en IPLACEX (2024 a la fecha) y antes en INACAP (2012–2020), Duoc UC e IACC.
- Más de 300 profesionales formados en bootcamps de reconversión laboral (Talento Digital para Chile, SENCE). Según felipecuevas.dev, suma más de 2.000 estudiantes formados y más de 150 módulos aprobados como relator REUF.
- Instructor certificado de IA con Gemini en programas corporativos para Capacita Tu Futuro (más de 50 ejecutivos y colaboradores, octubre de 2026) y Skillnest (junio a agosto de 2026).
- Más de 10 certificaciones profesionales vigentes de Oracle, AWS, Python Institute y Anthropic. Entre ellas: OCI AI Associate, OCI AI Agents Associate, OCI Developer Professional, Oracle Cloud Essentials (Oracle Cloud Infrastructure) y Python PCEP.
- Fundador de la comunidad Pulso Devs.
- Enlaces: www.felipecuevas.dev · www.linkedin.com/in/ffelipecuevasc/
- `PENDIENTE_DESARROLLADOR` (menor): nombres completos de las certificaciones AWS y Anthropic, si se quieren listar. Ni el PDF ni el sitio los detallan.

**Material basado en fuentes oficiales:** el curso se diseñó con documentación oficial de Google (Centro de ayuda de Gemini y Workspace, blogs oficiales, guías de prompts), y cada bloque del LMS enlaza sus fuentes. El respaldo de Google a la formación se menciona solo con la redacción que entregue Capacita Tu Futuro (`PENDIENTE_CLIENTE`), y sin logos de Google.

**Reglas del bootcamp:** práctica primero, teoría en el LMS, trabajo individual con el semáforo y un entregable por clase.

### Bloque 2 · Fundamentos de IA generativa y uso responsable (20 min)

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

**Profundiza en el LMS:** qué es un LLM, línea de tiempo con enlaces, tokens, alucinaciones, Principios de IA de Google, aviso de privacidad de las apps de Gemini y Privacy Hub de Workspace. Curso opcional: Google AI Essentials.

### Bloque 3 · Gemini en el ecosistema de Google (10 min)

**Mapa (5 min)**

| Dónde | Qué es | Uso en el curso |
|---|---|---|
| **App de Gemini** (gemini.google.com) | Chat, archivos, Deep Research, Canvas, imágenes y skills | Herramienta principal |
| **Gemini en Gmail, Docs, Slides y otras apps** | Panel «Preguntar a Gemini». Google AI Plus incluye Gemini en Gmail, Docs, Slides y otras apps | Demostración de 1 minuto |
| **Gemini Notebook** (ex-NotebookLM) | Investigación sobre tus propias fuentes | Unidad 3 |
| **Google AI Studio** | Espacio para desarrolladores: probar prompts y modelos, ver tokens, crear prototipos | Solo mención |
| **Google Workspace Studio** (antes Workspace Flows) | Agentes que automatizan trabajo en Workspace sin programar; requiere una edición Workspace | Solo mención |

**Verificación de cuenta (5 min, ejercicio E1):** todos confirman en gemini.google.com que tienen la sesión iniciada con la cuenta del curso, que el plan **Google AI Plus** está activo (se ve en el selector de modelos: Flash-Lite e Hydrogen) y que ven «Herramientas» → Canvas, Deep Research y Crear imágenes. Los rojos del semáforo se resuelven aquí.

### Bloque 4 · Ingeniería de prompts: fundamentos y ejercicios relámpago (18 min)

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

**4.3 Ejercicios relámpago (12 min, individuales):** tres rondas de 4 minutos, una por nivel, con el mismo caso. Al cierre de cada ronda, clínica en vivo con un voluntario.

### Bloque 5 · Laboratorio: Gemini en tu trabajo y tu plantilla de prompt (65 min)

**5.1 Recorrido por la app (5 min)**
- Interfaz: chat, subir archivos, Herramientas (Deep Research, Canvas, Crear imágenes) y selector de modelo con niveles de razonamiento.
- **Familia Gemini 4:**
  - Argon y Carbon son los modelos de frontera para tareas largas y complejas.
  - Hydrogen está orientado a velocidad y eficiencia.
  - Con Google AI Plus, el selector ofrece **Flash-Lite e Hydrogen**. Si el instructor tiene Pro o Ultra, muestra Argon como contraste.
- **Mensaje clave:** los nombres cambian cada pocos meses. Lo que se aprende es elegir entre rápido y profundo. La lista vigente queda en el LMS, y la U2 lo practica a fondo.

**5.2 Hora práctica (60 min, individual)**

| Tramo | Min | Qué pasa |
|---|---|---|
| Brief | 3 | Cada uno elige 3 tareas del banco (o propias), con datos ficticios o públicos |
| Ronda 1 | 15 | Prompt intermedio; autoevaluación con la rúbrica; clínica en vivo con 2 voluntarios |
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

**Plantilla de prompt maestro**

```
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
```

**Conexión con la U4:** esta plantilla es la base de la skill «Optimizador de prompts». Las skills de la app de Gemini están disponibles también en cuentas personales.

### Entregable U1 · Terminado cuando…
- [ ] Confirmé que trabajo con la cuenta del curso y Google AI Plus activo.
- [ ] Resolví 3 tareas con Gemini y al menos un prompt llegó a 8 puntos en la rúbrica.
- [ ] Guardé mi plantilla de prompt maestro en Drive y la probé al menos una vez.
- [ ] Revisé las respuestas antes de usarlas: qué verifiqué y qué aporté yo.
- [ ] Usé solo datos ficticios o públicos.

---

## Unidad 2 · Gemini

**Clase 2 · 120 minutos · Nivel: Principiante → Intermedio · Exposición ≤ 15 % (18 min en microcharlas) / práctica ~85 %**

**Objetivo:** que cada participante domine las capacidades clave de la app de Gemini y las use para producir, en una sola clase, los recursos de comunicación que más pide el trabajo diario: modelos y niveles de razonamiento, Deep Research y Canvas para documentos, planillas, infografías, presentaciones y dashboards. Todo debe respetar la identidad visual de GTD.

**Mini-proyecto: «Kit de comunicación GTD».** Un mismo caso atraviesa toda la clase. Cada participante es analista de un área de GTD y debe presentar a su gerencia los resultados de un trimestre ficticio, más un contexto de mercado basado en información pública. Termina con seis piezas conectadas entre sí, cinco de ellas con la marca GTD.

| Pieza | Herramienta | Hito |
|---|---|---|
| Planilla comparativa de modelos | Chat → Exportar a Hojas de cálculo | 1 |
| Informe de mercado | Deep Research → Exportar a Docs | 2 |
| Infografía con marca | Crear imágenes (Nano Banana) y Canvas | 3 |
| Presentación con marca | Canvas → Exportar a Presentaciones | 4 |
| Dashboard interactivo con marca | Canvas (app web con JavaScript) | 5 |

### Materiales que deben estar en el LMS antes de la clase

1. **Kit de marca GTD** (versión del curso, extraída de una captura del sitio oficial gtd.cl). Los HEX se muestrearon en los píxeles, así que son **aproximados** hasta que comunicaciones de GTD entregue los oficiales (`PENDIENTE_CLIENTE`, junto con la autorización de uso en material interno).

   | Rol | HEX | Dónde aparece en el sitio | Uso permitido (contraste WCAG) |
   |---|---|---|---|
   | Azul marca | `#375D9D` | Logotipo y pestaña activa | Fondos con texto blanco (6,5:1) y texto sobre blanco (6,5:1) |
   | Azul medio | `#5A7EBE` | Barra de navegación | Fondos; texto blanco **solo grande** (4,1:1: ≥ 24 px, o ≥ 19 px en negrita) |
   | Azul intenso | `#2959AD` | Bloques destacados (promociones) | Fondos con texto blanco (6,7:1) |
   | Azul marino | `#204175` | Títulos y textos de tarjetas | Texto principal sobre blanco (10,1:1), crema (9,4:1) o celeste (8,0:1) |
   | Ámbar acento | `#FFA300` | Cifras destacadas, barra del menú inferior, botón favorito | Solo rellenos, íconos o cifras grandes. **Nunca texto sobre blanco** (2,0:1). Texto encima: `#204175` (5,1:1) |
   | Crema | `#FFF6E5` | Fondo de la pestaña destacada | Fondos suaves |
   | Celeste claro | `#DBE5F3` | Fondo de secciones | Fondos suaves |
   | Blanco | `#FFFFFF` | Fondo general | Fondos |
   | *Funcionales* | `#4DB99C` / `#C53850` | Botones de WhatsApp y chat | No son colores de marca: no usarlos como acento |

   - **Tipografía:** el sitio no fue accesible desde la investigación, así que no se confirmó su CSS. Por la captura, los títulos y la navegación usan una sans geométrica; la alternativa web más cercana es **Montserrat** (Google Fonts). `PENDIENTE_CLIENTE`: confirmar la tipografía oficial. El logotipo usa letras propias y **nunca se recrea con una fuente**.
   - **Logotipo:** Felipe lo carga en `iconos-svg.txt` y se usa ese SVG tal cual (`PENDIENTE_DESARROLLADOR`: subir el archivo). No se redibuja ni se descarga de sitios de terceros.
2. **Dataset ficticio del curso** (listo): `dataset-ficticio-solicitudes-gtd-t3-2026.csv`, con 260 solicitudes de soporte de julio a septiembre de 2026. Su diccionario está en `dataset-ficticio-diccionario.md` e incluye 5 patrones plantados para validar las conclusiones de Gemini (por ejemplo, el alza de tiempos en Biobío en agosto).
3. **Prompts base** de cada hito, listos para copiar.
4. **Informe de Deep Research de respaldo**, para quien agote su cupo o tenga problemas.
5. **Lista de terminado** de la unidad.

### Distribución de la clase

| # | Bloque / hito | Microcharla | Práctica | Min |
|---|---|---|---|---|
| 0 | Repaso y brief del caso | 3 | 2 | 5 |
| 1 | Modelos y niveles de razonamiento → planilla | 3 | 12 | 15 |
| 2 | Deep Research → informe en Docs | 3 | 17 | 20 |
| 3 | Infografía con marca: imagen vs. código | 3 | 17 | 20 |
| 4 | Presentación con marca en Canvas | 3 | 17 | 20 |
| 5 | Dashboard interactivo con marca en Canvas | 3 | 27 | 30 |
| | Vitrina y cierre | — | 10 | 10 |
| | **Total** | **18 (15 %)** | **102** | **120** |

**Orquestación del tiempo:** Deep Research tarda varios minutos en generar el informe. Se lanza al inicio del hito 2 y, mientras corre, cada participante prepara su bloque de marca (hito 3, primera parte). Así no hay tiempos muertos.

**Si te atrasas:** el carril extra de cada hito se omite. Si el hito 4 se alarga, el dashboard se hace solo en su versión base. La vitrina nunca baja de 5 minutos.

---

### Bloque 0 · Repaso y brief del caso (5 min)

- Repaso relámpago: Persona · Tarea · Contexto · Formato, y la plantilla de la U1, que se usará en todos los prompts de hoy.
- Brief: «Eres analista del área X de GTD. Tu gerencia necesita, para mañana, un informe del trimestre y una lectura del mercado. Tienes 2 horas y a Gemini.» Todos descargan el dataset ficticio y el kit de marca.

### Bloque 1 · Modelos y niveles de razonamiento → planilla (15 min)

**Microcharla (3 min)**
- **Selector de modelo:** con Google AI Plus aparecen **Flash-Lite** (rápido y eficiente, para respuestas breves y tareas livianas) e **Hydrogen** (equilibra desempeño y rapidez para el trabajo habitual). Argon, Pro y Carbon son para tareas más complejas y están en Pro y Ultra.
- **Niveles de razonamiento:**
  - **Bajo:** respuestas rápidas y concisas.
  - **Medio:** equilibrio para tareas cotidianas.
  - **Alto:** razona con cuidado en prompts complejos de varios pasos.
  - Si no se elige, queda en bajo.
  - Los modelos más avanzados y los niveles altos consumen más del cupo de uso.
- **Selección automática:** Gemini puede elegir modelo y nivel por ti. Hoy la apagamos para comparar.
- **Regla práctica:** rápido para redactar o reformular; profundo para analizar, calcular o decidir.

**Práctica (12 min, carril base):**
1. Subir el CSV ficticio y pedir: «Identifica los 3 problemas principales del trimestre y propón una acción para cada uno, justificando con cifras».
2. Correr el mismo prompt en tres configuraciones: Flash-Lite / bajo, Hydrogen / bajo e Hydrogen / alto.
3. Pedirle a Gemini una **tabla comparativa** de las tres respuestas: tiempo aproximado, precisión de las cifras (verificadas contra el CSV) y profundidad del análisis.
4. **Exportar a Hojas de cálculo** con el botón «Exportar a Hojas de cálculo» que aparece bajo la tabla. Con eso queda creada la primera planilla (las tablas con imágenes no se pueden exportar).

**Carril extra:** en la planilla exportada, usar Gemini para crear una fórmula que calcule el promedio de tiempo de resolución por región.

**Para llevarte:** no siempre conviene el modelo «más potente»; conviene el adecuado para la tarea y el cupo.

### Bloque 2 · Deep Research → informe en Docs (20 min)

**Microcharla (3 min)**
- Deep Research es un agente que investiga en múltiples fuentes, arma un plan que puedes editar antes de lanzarlo y entrega un informe con fuentes citadas. Tarda varios minutos.
- Con una cuenta personal se puede investigar en la web y subir archivos. Las fuentes Gmail y Drive solo se usan si las apps están conectadas, y en el curso no se conectan.
- Se revisa como cualquier borrador: citas, fechas y cifras.

**Práctica (17 min)**
- *Minuto 0–4:* lanzar Deep Research con un tema público relevante para GTD, por ejemplo: «Tendencias 2026 en adopción de fibra óptica y servicios digitales para pymes en Chile: datos públicos, regulación y oportunidades». Revisar y ajustar el plan antes de aprobarlo.
- *Mientras corre:* preparar el **bloque de marca** del hito 3. El tiempo se comparte entre ambos hitos.
- *Al terminar el informe (aprox. 8 min):* verificar 3 afirmaciones abriendo sus fuentes y marcar en el chat cuáles se confirmaron. Luego **exportar a Docs**. Con eso queda creado el documento de texto.
- **Límites:** Deep Research tiene un cupo de uso en Google AI Plus, así que se lanza **una sola vez por persona**. Quien no pueda lanzarlo usa el informe de respaldo del LMS y hace igual la verificación. `VERIFICAR` el cupo exacto en la prueba previa.

**Carril extra:** pedir en el chat un resumen ejecutivo de 150 palabras del informe, dirigido a la gerencia, con la plantilla de la U1.

### Bloque 3 · Infografía con marca: imagen vs. código (20 min)

**Microcharla (3 min):** hay dos caminos para una infografía, y la diferencia importa cuando hay una marca de por medio.

| Camino | Cómo | Ventaja | Límite |
|---|---|---|---|
| **A. Imagen** (Herramientas → Crear imágenes, Nano Banana) | Prompt con datos, paleta y estilo; se puede adjuntar una referencia | Rápido y visualmente atractivo; Google indica que crea diagramas e infografías con información más precisa | Es una imagen: los colores son aproximados, el texto debe revisarse letra por letra y **el modelo no debe redibujar el logo** |
| **B. Código** (Canvas: página o infografía en HTML/SVG) | Se pegan los HEX exactos y el código SVG oficial del logo | Colores exactos, logo intacto, texto editable y exportable | Diseño menos «artístico»; requiere un prompt más preciso |

**Regla de marca del curso:** el logotipo nunca lo genera la IA. Se inserta el archivo oficial, ya sea pegando el SVG en Canvas o agregándolo después en Presentaciones.

**Práctica (17 min)**
1. **Bloque de marca** (se prepara mientras corre Deep Research): un párrafo reutilizable, guardado en el documento de la plantilla de la U1. Ejemplo de estructura:
   ```
   # Identidad visual GTD (usar siempre)
   Paleta: azul marca #375D9D, azul intenso #2959AD, azul marino #204175 (texto),
   azul medio #5A7EBE, ámbar #FFA300 (solo acentos y cifras grandes, nunca texto
   sobre blanco), crema #FFF6E5 y celeste #DBE5F3 (fondos suaves), blanco #FFFFFF.
   Tipografía: Montserrat.
   Logo: usa EXACTAMENTE este SVG sin modificarlo: <svg>…</svg>
   Estilo: corporativo, cercano, esquinas redondeadas, íconos lineales, mucho espacio en blanco.
   Contraste mínimo AA para todo texto. No inventes logos ni slogans.
   ```
2. **Camino A:** infografía de 5 datos clave del trimestre (dataset), con la paleta indicada en el prompt y sin logo. Revisar las cifras y la ortografía en la imagen.
3. **Camino B:** la misma infografía en Canvas como página HTML con los HEX y el SVG oficial.
4. Comparar ambas y quedarse con la que cumple la marca. Normalmente gana B para uso oficial y A para redes o borradores.

**Carril extra:** pedir a Canvas una versión vertical de la infografía para una historia de redes internas.

### Bloque 4 · Presentación con marca en Canvas (20 min)

**Microcharla (3 min)**
- Con Canvas activado, se pide «crea una presentación» y se adjunta la fuente (aquí, el informe de Deep Research y el resumen del dataset). Gemini genera las diapositivas con tema e imágenes, y se exportan a Google Presentaciones (o a PDF) para terminarlas y colaborar.
- Para que salga como presentación y no como texto, el prompt debe pedir diapositivas de forma explícita.
- Canvas trae pocos diseños, así que el **acabado de marca se hace en Presentaciones**: colores del tema y logo oficial. `VERIFICAR` en la prueba previa cuánto respeta Canvas la paleta indicada.

**Práctica (17 min)**
1. Prompt con la plantilla de la U1 más el bloque de marca: «Crea una presentación de 8 diapositivas para la gerencia de [área]: portada, contexto de mercado (del informe), 3 hallazgos del trimestre con cifras, 2 acciones propuestas, próximos pasos y cierre. Usa la paleta GTD indicada. Sin logo: lo agregaré yo».
2. Iterar en Canvas: ajustar una diapositiva a la vez (por ejemplo, «convierte la diapositiva 4 en un gráfico de barras»).
3. **Exportar a Presentaciones**, aplicar los colores del tema e insertar el logo oficial en la portada y el cierre.
4. Revisión humana: cifras contra el dataset, fuentes del informe y que no haya afirmaciones inventadas.

**Carril extra:** pedir notas del orador para cada diapositiva.

### Bloque 5 · Dashboard interactivo con marca en Canvas (30 min)

**Microcharla (3 min)**
- Canvas puede crear **apps web** de una sola página (HTML, CSS y JavaScript) que se ejecutan en la misma ventana. Esto reemplaza dashboards estáticos de planilla por tableros con filtros e interactividad.
- **Precaución al compartir:** cualquiera con el enlace público de una app puede ver y editar los datos asociados a ella. Con los datos ficticios del curso no hay riesgo, pero en el trabajo real la regla es cuidar qué datos se cargan en una app que se va a compartir.

**Práctica (27 min)**
1. **Prompt base** (en el LMS), pidiendo explícitamente:
   - una sola página con los datos del CSV adjunto;
   - 4 indicadores clave arriba;
   - 3 gráficos (evolución mensual, comparación por región y distribución por tipo de servicio);
   - filtros por mes, región y servicio;
   - una tabla con búsqueda;
   - diseño responsive;
   - la paleta GTD exacta y el SVG oficial en el encabezado;
   - el rótulo «Datos ficticios — material de capacitación»;
   - contraste AA.
2. **Iteración 1:** probar los filtros y corregir lo que no funcione describiendo el error en lenguaje natural.
3. **Iteración 2:** agregar un botón «Descargar datos filtrados (CSV)» y un texto de conclusiones que cambie según el filtro elegido.
4. **Verificación:** comprobar 3 cifras del dashboard contra el CSV (por ejemplo, con la planilla del hito 1).
5. **Compartir** el enlace de Canvas solo en el espacio del curso.

**Carril extra:** modo claro/oscuro con los colores de la marca, o una pestaña de «Mercado» con 3 datos del informe de Deep Research.

### Vitrina y cierre (10 min)

- 3 participantes al azar muestran su dashboard o su presentación (60 a 90 segundos cada uno).
- El instructor destaca un acierto de marca y un error típico: logo redibujado, cifra sin verificar o color fuera de la paleta.
- Pregunta de cierre: ¿cuál de estas piezas te habría tomado un día entero sin Gemini y qué tuviste que revisar tú?
- Adelanto de la U3: «Hoy Gemini buscó información en la web; la próxima clase trabajará solo con tus propias fuentes».

### Entregable U2 · Terminado cuando…
- [ ] Mi planilla compara al menos 3 configuraciones de modelo y nivel, y sé cuándo usar cada una.
- [ ] Mi informe de Deep Research está en Docs y verifiqué al menos 3 afirmaciones en sus fuentes.
- [ ] Tengo una infografía con la paleta GTD, sin logo inventado y con cifras revisadas.
- [ ] Mi presentación está en Google Presentaciones, con los colores de la marca y el logo oficial.
- [ ] Mi dashboard filtra por mes, región y servicio, muestra el rótulo de datos ficticios y comprobé 3 cifras.
- [ ] Guardé mi bloque de marca junto a la plantilla de la U1.
- [ ] No usé información real de GTD ni de sus clientes.

### Profundiza en el LMS (U2)
- Ficha de modelos y niveles de razonamiento, con el enlace a la página oficial «About Gemini models» y una nota de que la lista cambia.
- Cómo funciona Deep Research y cómo verificar un informe.
- Canvas: qué crea, cómo exportar y cómo compartir con seguridad.
- Guía de prompts para imágenes (Nano Banana) y para infografías.
- Exportar respuestas a Docs y Hojas de cálculo.
- Galería de ejemplos resueltos: un dashboard, una presentación y una infografía de referencia hechos por el instructor.

### Pendientes y verificaciones de la U2
- `PENDIENTE_CLIENTE`: confirmación de los HEX y la tipografía oficiales de GTD, y autorización de uso de la marca en material interno.
- `PENDIENTE_DESARROLLADOR`: subir `iconos-svg.txt` con el logo; preparar el informe de Deep Research de respaldo y los ejemplos resueltos.
- Confirmado por Felipe con su cuenta Google AI Plus: todas las opciones nombradas en la unidad están disponibles.
- `VERIFICAR` en la prueba previa: cupo de Deep Research e imágenes ante 50 usos simultáneos; cuánto respeta Canvas la paleta en las presentaciones.
- Riesgo: con 50 personas lanzando Deep Research al mismo tiempo, algunos informes pueden tardar más. El informe de respaldo cubre ese caso.

---

## Unidad 3 · Gemini Notebook

**Clase 3 · 120 minutos · Nivel: Principiante → Intermedio · Exposición ≤ 15 % (16 min en microcharlas) / práctica ~85 %**

**Objetivo:** que cada participante use Gemini Notebook para estudiar e investigar a partir de fuentes confiables, como leyes, reportes técnicos e información pública del sector. Con eso convierte un cuaderno en material de capacitación interna listo para usar.

**Enfoque de la herramienta:** en Gemini, el punto de partida es una pregunta. En Gemini Notebook, el punto de partida son **tus fuentes**: el chat responde solo con ellas y cita el pasaje exacto. Cada cuaderno es independiente; no puede consultar otro cuaderno al mismo tiempo.

**Mini-proyecto: «Kit de capacitación interna: Ley 21.719 en GTD».** La nueva Ley de Protección de Datos Personales (Ley 21.719) entra en vigencia el 1 de diciembre de 2026, y una empresa de telecomunicaciones trata grandes volúmenes de datos de clientes. Cada participante construye un cuaderno sobre la ley, solo con fuentes públicas, y lo transforma en un kit para capacitar a un equipo de GTD.

**Carril alternativo** (mismo flujo, otro tema): Ley Marco de Ciberseguridad (Ley 21.663), o un conjunto de reportes técnicos públicos del sector telecomunicaciones.

**Advertencia de contenido:** el kit es material de estudio, no asesoría legal. Antes de usarlo en GTD, lo valida el área legal o de cumplimiento (revisión humana).

| Pieza del kit | Dónde nace | Hito |
|---|---|---|
| Cuaderno con fuentes etiquetadas | Panel Fuentes | 1 |
| Chat configurado como tutor de cumplimiento, con notas guardadas | Panel Chat | 2 |
| Mapa mental, informe interactivo y cuestionario | Panel Studio | 3 |
| Presentación con estilo GTD | Studio → Presentación | 4 |
| Guion del curso interno (Markdown) y banco de preguntas | Chat → archivo en Studio | 5 |

### Materiales que deben estar en el LMS antes de la clase
1. **Paquete de fuentes públicas** curado por el instructor:
   - PDF del texto de la Ley 21.719 descargado de la Biblioteca del Congreso Nacional (bcn.cl);
   - 1 o 2 URL oficiales (por ejemplo, la página de la ley en bcn.cl o una guía de un organismo público);
   - 1 video público de YouTube que explique la ley.
   - `PENDIENTE_DESARROLLADOR`: elegir y probar los enlaces. Revisar que el video tenga subtítulos o transcripción, porque el cuaderno trabaja con el texto del video.
2. **Plantilla de configuración del chat** (Personalizado), lista para copiar (ver hito 2).
3. **Prompt de estilo GTD para presentaciones** (ver hito 4), construido con la paleta del kit de marca de la U2.
4. **Banco de prompts para el chat** (ver hito 2).
5. **Lista de terminado** de la unidad.

### Distribución de la clase

| # | Bloque / hito | Microcharla | Práctica | Min |
|---|---|---|---|---|
| 0 | Repaso y brief del caso | 2 | 3 | 5 |
| 1 | Fuentes: archivos, URL, YouTube, Fast Research y Deep Research | 3 | 17 | 20 |
| 2 | Configurar el chat y conversar con el cuaderno | 3 | 17 | 20 |
| 3 | Studio: transformar fuentes en recursos de estudio | 3 | 17 | 20 |
| 4 | Presentaciones: configuración y el poder del prompt de diseño | 3 | 17 | 20 |
| 5 | Del cuaderno al curso interno: crear archivos desde el chat | 2 | 18 | 20 |
| | Vitrina y cierre | — | 10 | 10 |
| | Holgura | | | 5 |
| | **Total** | **16 (13 %)** | **99** | **120** |

**Orquestación del tiempo:** Deep Research (hito 1), el resumen en audio (hito 3) y la presentación (hito 4) se generan en segundo plano. Cada uno se lanza al inicio de su hito y, mientras tanto, se avanza con la tarea siguiente.

**Si te atrasas:** el resumen en audio pasa a carril extra y el hito 5 se hace con un solo archivo (el guion). La vitrina nunca baja de 5 minutos.

---

### Bloque 0 · Repaso y brief del caso (5 min)
- Repaso: en la U2, Gemini investigó en la web; hoy trabaja **solo con las fuentes que tú eliges**.
- Brief: «Tu jefatura te pide preparar una capacitación de 45 minutos sobre la Ley 21.719 para un equipo de GTD. Tienes 2 horas, fuentes públicas y Gemini Notebook».
- Recordatorio: solo fuentes públicas. Nada de documentos internos de GTD en la cuenta personal.

### Bloque 1 · Fuentes: archivos, URL, YouTube, Fast Research y Deep Research (20 min)

**Microcharla (3 min)**
- **Un cuaderno = una colección de fuentes para un proyecto.** Se aceptan, entre otros, PDF, Google Docs, Presentaciones (hasta 100 diapositivas), Hojas de cálculo, sitios web, videos públicos de YouTube, audios, imágenes, texto pegado y Markdown.
- **Buscar fuentes desde el cuaderno:**

| | Fast Research | Deep Research |
|---|---|---|
| Para qué | Búsqueda rápida | Panorama completo |
| Qué entrega | Una lista de fuentes que revisas e importas de inmediato | Un informe más una lista de fuentes que puedes importar al cuaderno |
| Tiempo | Breve | Varios minutos; mientras corre puedes seguir agregando tus propias fuentes |
| Cómo | Panel Fuentes → escribir la pregunta → Web | Panel Fuentes → activar Web y Deep Research |
| Requisito | — | Mayores de 18 años |

- **Cuidado:** si se cancela una búsqueda, se pierden los resultados no importados. Hay que importar primero.
- **Etiquetado automático:** desde 5 fuentes, el cuaderno agrupa las fuentes por tema y les pone etiquetas que se pueden renombrar y reorganizar.
- **Criterio de calidad:** primero lo oficial (bcn.cl, sitios .gob.cl, organismos reguladores), después la prensa especializada y nunca fuentes anónimas.

**Práctica (17 min)**
1. Crear el cuaderno «Ley 21.719 · Kit GTD».
2. **Lanzar Deep Research** primero, para que trabaje en segundo plano: «Impacto de la Ley 21.719 de protección de datos personales en empresas de telecomunicaciones en Chile: obligaciones, plazos, sanciones y buenas prácticas, priorizando fuentes oficiales».
3. Mientras corre, agregar:
   - **archivo desde el equipo:** el PDF de la ley (paquete del LMS);
   - **URL** oficial;
   - **video de YouTube**.
4. **Fast Research:** «guías oficiales de implementación de la Ley 21.719». Importar 2 fuentes oficiales y descartar las que no lo sean.
5. Cuando termine Deep Research, revisar el informe e **importar solo las fuentes confiables**.
6. Con 5 o más fuentes, observar el **etiquetado automático**, renombrar una etiqueta y explicar en una línea por qué está cada fuente.

**Carril extra:** agregar como fuente una página pública de GTD sobre privacidad o términos del servicio, si existe, para contrastarla con la ley.

**Para llevarte:** un cuaderno vale lo que valen sus fuentes. Para miles de reportes, se divide el corpus en varios cuadernos temáticos, porque cada plan tiene un límite de fuentes por cuaderno.

### Bloque 2 · Configurar el chat y conversar con el cuaderno (20 min)

**Microcharla (3 min)**
- **Configurar chat**, en el panel central:
  - **Estilo:** Predeterminado (investigación general y lluvia de ideas), Guía de aprendizaje (para estudiar conceptos) o **Personalizado** (se escriben rol, objetivo y estilo).
  - **Longitud de respuesta:** Predeterminada, Más larga o Más corta.
- Las respuestas traen **citas**: se pasa el cursor para ver el texto citado y se hace clic para ir al pasaje original.
- Con la **casilla de cada fuente** se incluyen o excluyen fuentes de la respuesta.
- El chat **solo usa las fuentes**. Si se le pide algo creativo fuera de ellas, puede responder que no puede contestar.

**Plantilla para el estilo Personalizado** (en el LMS)
```
ROL: Eres un tutor experto en cumplimiento normativo que capacita a trabajadores
de una empresa de telecomunicaciones en Chile.
OBJETIVO: Ayudarme a comprender la Ley 21.719 y a convertirla en contenidos de
capacitación prácticos para equipos de atención al cliente, ventas y soporte.
ESTILO: Español de Chile, lenguaje claro y sin jerga legal innecesaria. Explica
primero la idea en una frase y luego el detalle. Usa ejemplos ficticios del día
a día de una empresa de telecomunicaciones. Indica siempre el artículo de la
ley que respalda cada afirmación. Si las fuentes no responden algo, dilo.
```

**Práctica (17 min)**
1. Pegar la plantilla en Personalizado y elegir la longitud **Predeterminada**.
2. **Banco de prompts** (cada participante usa al menos 4):
   - *Síntesis por audiencia:* «Explica en 5 puntos qué cambia la ley para un ejecutivo de atención al cliente».
   - *Pregunta precisa:* «¿Qué derechos tiene un titular de datos y en qué artículos están?».
   - *Comparación entre fuentes:* «Compara lo que dice el informe de Deep Research con el texto de la ley sobre sanciones. ¿Hay diferencias?».
   - *Vacíos y contradicciones:* «¿Qué temas importantes para una empresa de telecomunicaciones no quedan claros en estas fuentes?».
   - *Caso aplicado (ficticio):* «Un cliente pide por WhatsApp que eliminen sus datos. ¿Qué dice la ley y qué pasos debería seguir el ejecutivo?».
3. Cambiar la longitud a **Más corta** y repetir un prompt para comparar.
4. **Verificar 2 citas** abriendo el pasaje original.
5. Guardar las 2 mejores respuestas como **notas**.

**Carril extra:** excluir el video con su casilla y repetir una pregunta para ver cómo cambia la respuesta.

### Bloque 3 · Studio: transformar fuentes en recursos de estudio (20 min)

**Microcharla (3 min):** el panel Studio convierte las fuentes en productos que se generan en segundo plano.

| Recurso | Para qué sirve en una capacitación |
|---|---|
| **Resumen en audio** | Conversación tipo podcast para escuchar en traslados |
| **Resumen en video** | Explicación narrada con apoyo visual |
| **Mapa mental** | Ver la estructura de un tema de un vistazo |
| **Informes**, con la novedad **Interactivo** | Además del documento de solo texto, el informe interactivo integra resúmenes con recursos de Studio (infografías, cuestionarios, tarjetas) en un solo documento de estudio |
| **Tarjetas didácticas** | Memorizar conceptos clave |
| **Cuestionario** | Autoevaluación |
| **Infografía** | Resumen visual de una página |
| **Presentación** | Ver el hito 4 |
| **Tabla de datos** | Extraer datos de las fuentes en filas y columnas |

Los límites de uso dependen del plan y Google los ajusta con el tiempo, así que hoy se prioriza.

**Práctica (17 min)**
1. **Lanzar el resumen en audio** con una instrucción, por ejemplo: «enfocado en lo que debe saber un ejecutivo de atención al cliente, en 10 minutos». Queda generándose.
2. **Mapa mental** de la ley: revisarlo y detectar 3 temas para los módulos del curso.
3. **Informe → formato Interactivo** (guía o resumen de aprendizaje) sobre los derechos de los titulares de datos.
4. **Cuestionario** de 10 preguntas. Responderlo y revisar que cada respuesta correcta esté respaldada en las fuentes.

**Carril extra:** infografía de una página sobre «5 reglas de oro de la Ley 21.719 para atención al cliente», o tarjetas didácticas.

### Bloque 4 · Presentaciones: configuración y el poder del prompt de diseño (20 min)

**Microcharla (3 min)**
- **Opciones de la presentación** (lápiz junto a «Presentación» en Studio):
  - **Formato:** *presentación detallada* (texto completo, para leer o enviar sin presentador) o *diapositivas para presentar* (limpias y visuales, con puntos clave para acompañar a quien expone);
  - idioma;
  - longitud (corta, predeterminada o larga, según el plan);
  - fuentes a usar;
  - **prompt**.
- **Cocreación (desde octubre de 2026):** el cuaderno sugiere temas a partir de las fuentes y permite guiar el estilo visual y el formato. Con el interruptor **Revisar** se ve el esquema antes de generar.
- Cada diapositiva puede recibir comentarios, y se genera una **versión revisada**. Editar es más rápido que generar desde cero.
- **El prompt cambia el diseño final.** La colección comunitaria *awesome-notebookLM-prompts* (GitHub) muestra que los mejores prompts de diseño especifican:
  - colores con su HEX y su rol (fondo, texto, acento);
  - tipografía y relación de tamaños entre título y cuerpo;
  - reglas de diagramación;
  - estilo de imágenes e íconos;
  - reglas de texto (por ejemplo, un mensaje por diapositiva);
  - una lista de cosas que evitar.

  Cuanto más específico, más consistente sale el diseño. Se usa como inspiración y se adapta a la marca de GTD, sin copiar estilos ajenos tal cual.

**Prompt de estilo GTD** (en el LMS)
```
Diseña diapositivas corporativas para GTD, empresa chilena de telecomunicaciones.
PALETA: fondo #FFFFFF o #DBE5F3; títulos en #204175; bloques destacados en
#2959AD o #375D9D con texto blanco; acento ámbar #FFA300 solo para cifras
grandes, íconos o subrayados (nunca texto pequeño sobre blanco).
TIPOGRAFÍA: sans geométrica tipo Montserrat; títulos grandes y en negrita,
cuerpo breve.
DIAGRAMACIÓN: un mensaje por diapositiva, máximo 4 viñetas, mucho espacio en
blanco, esquinas redondeadas, íconos lineales.
CONTENIDO: lenguaje claro para trabajadores de atención al cliente; cita el
artículo de la ley cuando corresponda.
EVITAR: logotipos inventados, slogans, fotos de personas reales, degradados
recargados, texto en párrafos largos.
```

**Práctica (17 min)**
1. **Presentación A:** diapositivas para presentar, longitud predeterminada y **sin prompt**. Lanzar.
2. **Presentación B:** misma configuración con el **prompt de estilo GTD** y el interruptor **Revisar** activado. Revisar el esquema, ajustar un tema y generar.
3. Comparar A y B: ¿qué cambió en colores, densidad de texto y estructura?
4. Dejar comentarios en 1 o 2 diapositivas de B y generar la **versión revisada**.

**Regla de marca:** el logotipo no se pide en el prompt, porque un modelo generativo podría redibujarlo. Si la presentación se exporta, el logo oficial se agrega después. `VERIFICAR` en la prueba previa qué formatos de descarga ofrece hoy la presentación con Google AI Plus.

**Carril extra:** generar una *presentación detallada* para enviar como lectura previa del curso.

### Bloque 5 · Del cuaderno al curso interno: crear archivos desde el chat (20 min)

**Microcharla (2 min):** desde el chat también se pueden pedir recursos (informes, resúmenes, cuestionarios o archivos de texto y Markdown). Quedan alojados en Studio y se pueden descargar, sin pasar por los botones prefijados. Es la forma más flexible de obtener exactamente el formato que necesitas.

**Práctica (18 min)**
1. Prompt en el chat:
   ```
   Con base solo en las fuentes, crea un archivo Markdown con el guion de un curso
   interno de 45 minutos sobre la Ley 21.719 para ejecutivos de atención al cliente
   de una empresa de telecomunicaciones: objetivos de aprendizaje, 3 módulos con
   tiempos, actividad práctica por módulo con un caso ficticio, mensajes clave con
   el artículo de respaldo y una evaluación final de 5 preguntas con respuestas.
   ```
2. Verificar que el archivo quedó en Studio y **descargarlo**.
3. Pedir un segundo archivo: «banco de 15 preguntas de selección múltiple con la respuesta correcta y el artículo que la respalda».
4. **Revisión humana:** contrastar 3 mensajes clave del guion con sus citas. Anotar al inicio del archivo «Borrador para validación del área legal de GTD».
5. **Armar el kit:** cuaderno + guion .md + banco de preguntas + presentación B + informe interactivo + cuestionario.

**Carril extra:** pedir una versión del guion para un público distinto (ventas o soporte técnico) y compararla con la primera.

### Vitrina y cierre (10 min)
- 3 participantes al azar muestran su kit en 60 a 90 segundos: presentación B, informe interactivo o guion.
- El instructor destaca un uso para el estudio («leer 300 páginas de normativa en una tarde, con citas») y uno para la capacitación («de las fuentes al curso en 2 horas»).
- Adelanto de la U4: «Hoy repetiste muchas instrucciones. La próxima clase las convertirás en skills reutilizables».

### Entregable U3 · Terminado cuando…
- [ ] Mi cuaderno tiene al menos 5 fuentes públicas (PDF, URL, YouTube y fuentes importadas con Fast Research o Deep Research), etiquetadas, y sé por qué está cada una.
- [ ] Configuré el chat en Personalizado (rol, objetivo y estilo) y probé al menos 2 longitudes de respuesta.
- [ ] Verifiqué al menos 2 citas en el pasaje original y guardé notas.
- [ ] Generé un mapa mental, un informe interactivo y un cuestionario.
- [ ] Generé dos presentaciones (sin prompt y con el prompt de estilo GTD) y puedo explicar la diferencia.
- [ ] Descargué el guion del curso interno en Markdown, marcado como borrador para validación legal.
- [ ] Usé solo fuentes públicas.

### Profundiza en el LMS (U3)
- Guía oficial «Crear un cuaderno», «Agregar o descubrir fuentes» y «Usar el chat».
- Fast Research vs. Deep Research: cuándo usar cada uno.
- Catálogo de Studio, con ejemplos de cada recurso hechos por el instructor.
- Guía de presentaciones: formatos, cocreación, revisión y prompts de estilo.
- Estrategia para grandes volúmenes: cómo dividir miles de reportes en cuadernos temáticos.
- Usos en GTD: estudio de normativa, síntesis de reportes técnicos, vigilancia de tendencias del sector y diseño de cursos internos.

### Pendientes y verificaciones de la U3
- `PENDIENTE_DESARROLLADOR`: curar y probar el paquete de fuentes públicas (PDF de la ley, URL y video); preparar los ejemplos de Studio.
- `VERIFICAR` en la prueba previa con Google AI Plus: límites de uso de Studio y de Deep Research ante 50 usos simultáneos; formatos de descarga de la presentación; que el guion en Markdown se descargue desde Studio (Felipe ya lo confirmó en su cuenta).
- Confirmar la fecha de entrada en vigencia de la Ley 21.719 en bcn.cl antes de la clase. Hoy se informa el 1 de diciembre de 2026.
- El kit no constituye asesoría legal; se debe validar con el área legal o de cumplimiento de GTD.

## Unidad 4 · Gemini Skills & Proyecto Integrador

**Clase 4 · 120 minutos · Nivel: Principiante → Intermedio · Exposición ≤ 15 % (16 min en microcharlas) / práctica ~85 %**

**Objetivo:** que cada participante entienda qué son las skills y por qué reemplazan a los Gems, las use y combine, instale dos skills del curso, cree una propia y cierre el bootcamp con un proyecto integrador que use todo lo aprendido.

**Mini-proyecto: «Mi caja de herramientas IA + Demo Day».** Cada participante termina con al menos 3 skills activas en su cuenta: `optimizador-prompts`, `gtd-visual` y una propia. Con ellas resuelve una tarea real de punta a punta.

### Materiales que deben estar en el LMS antes de la clase
Las skills del curso se distribuyen como **archivos descargables**. Compartirlas desde Gemini requiere enviarlas por correo una por una y, además, compartir sus archivos aparte, lo que no escala con 50 personas.

1. `optimizador-prompts/SKILL.md` (un solo archivo).
2. `gtd-visual.zip`: `SKILL.md` más la carpeta `references/` (paleta, estilos y logotipo oficial en SVG). `PENDIENTE_DESARROLLADOR`: agregar `references/logo-gtd.svg` desde `iconos-svg.txt` antes de comprimir.
3. Plantillas para el hito 4: `analista-planillas`, `resumen-ejecutivo`, `mi-semana-laboral` y `plantilla-en-blanco`.
4. Insumos de las clases anteriores: dataset ficticio, informe de Deep Research y cuaderno de la U3.
5. Lista de terminado y pauta del Demo Day.

### Distribución de la clase

| # | Bloque / hito | Microcharla | Práctica | Min |
|---|---|---|---|---|
| 0 | Repaso y brief del cierre | 2 | 3 | 5 |
| 1 | De Gems a Skills: qué son, por qué cambian y cómo se usan | 3 | 9 | 12 |
| 2 | Skill 1: `optimizador-prompts` (instalar, probar, entender) | 3 | 20 | 23 |
| 3 | Skill 2: `gtd-visual` (archivos de referencia y flujos guiados) | 3 | 22 | 25 |
| 4 | Crea tu propia skill | 3 | 22 | 25 |
| 5 | Proyecto integrador y Demo Day | 2 | 23 | 25 |
| | Cierre del bootcamp | — | 5 | 5 |
| | **Total** | **16 (13 %)** | **104** | **120** |

**Si te atrasas:** el carril extra de cada hito se omite. En el hito 4, todos parten desde una plantilla (no desde cero). El Demo Day nunca baja de 10 minutos.

---

### Bloque 0 · Repaso y brief del cierre (5 min)
- Repaso: en la U1 creaste tu plantilla de prompt; en la U2, tu bloque de marca; en la U3, la configuración del chat. **Hoy los conviertes en herramientas reutilizables.**
- Brief: «Al final de la clase tendrás 3 skills funcionando y resolverás una tarea real con ellas».

### Bloque 1 · De Gems a Skills: qué son, por qué cambian y cómo se usan (12 min)

**Microcharla (3 min)**
- **Qué es una skill:** instrucciones personalizadas reutilizables, con archivos opcionales, que Gemini aplica en los chats. Se usan de forma automática cuando encajan con la tarea, o cuando el usuario las elige.
- **Por qué Google reemplaza los Gems:**
  - **Se usan dentro del mismo chat**, sin abrir otra ventana como pasaba con los Gems.
  - **Se combinan:** varias skills en un mismo pedido (por ejemplo, un estilo de escritura más lineamientos de marca), y una skill puede llamar a otra.
  - **Formato abierto `SKILL.md`** (Markdown), portable entre herramientas compatibles con el estándar.
  - **Funcionan en más lugares:** la app de Gemini, las apps de Workspace y Gemini Enterprise. Ojo: no se sincronizan entre esos lugares.
- **Calendario:** los Gems pasaron a Configuración el 17-nov-2026 y se pueden seguir usando. En cuentas personales se migran automáticamente a skills en borrador. En cuentas Business y Enterprise desaparecen no antes del 1-mar-2027.
- **Anatomía de una skill:** un archivo `SKILL.md` con un encabezado (nombre en minúsculas con guiones y una **descripción**) y luego las instrucciones en Markdown. Opcionalmente lleva archivos de referencia (texto, PDF, planillas, imágenes, SVG) o scripts sin acceso a internet. **La descripción es la clave:** con ella Gemini decide cuándo activar la skill.

**Práctica (9 min)**
1. Abrir **Personalizar → Skills** y recorrer la página: Recomendadas, Crear, Activar y Desactivar.
2. Crear una skill desde una **plantilla recomendada** y usarla escribiendo `/` en el chat.
3. Probar la activación automática: escribir un pedido que calce con la descripción, sin usar `/`.
4. Desactivarla y comprobar que deja de activarse sola.

**Para llevarte:** si repites una instrucción más de dos veces, es candidata a skill.

### Bloque 2 · Skill 1: `optimizador-prompts` (23 min)

**Microcharla (3 min):** esta skill convierte la plantilla de prompt maestro de la U1 en un servicio automático. Escribes una instrucción rápida y recibes **dos versiones optimizadas**:
- **A, basada en contexto:** rol, situación, audiencia, tarea, formato y restricciones.
- **B, basada en objetivos:** objetivo, resultado esperado, criterios de éxito, pasos y verificación.

Cada versión llega en un **bloque de código**, que la interfaz muestra con el botón de copiar en la esquina. La skill también puntúa el prompt con la rúbrica de la U1 e indica qué datos completar.

**Práctica (20 min)**
1. **Instalar:** Personalizar → Skills → Crear → Subir → elegir `SKILL.md` del LMS → revisar → Crear.
2. **Probar con 3 prompts propios de la U1** escritos «a la rápida», por ejemplo «haz un correo para pedir vacaciones». Invocar con `/optimizador-prompts`.
3. Copiar con un clic la versión que convenga, completar los `[marcadores]`, ejecutarla en un chat nuevo y comparar con el resultado del prompt original.
4. **Entender por dentro:** abrir la skill y leer sus instrucciones. Identificar la descripción, los pasos, el formato exacto de respuesta y la lista «Lo que nunca haces».
5. **Personalizar:** usar **Editar con Gemini** para agregar una regla propia, por ejemplo «agrega siempre una versión en inglés» o «adapta el tono a atención al cliente». Volver a probar.

**Carril extra:** combinar skills en un mismo pedido, por ejemplo optimizar un prompt para generar una presentación con la marca GTD.

### Bloque 3 · Skill 2: `gtd-visual` (25 min)

**Microcharla (3 min):** esta skill aplica la misma lógica de una skill de marca profesional:
- primero **pregunta** (modo claro u oscuro, presentación o dashboard, y contenido);
- luego **muestra 4 estilos** en una vista previa en Canvas;
- el usuario **elige**;
- y Gemini **produce** la pieza final con la paleta GTD y el logotipo oficial.

Lo nuevo frente al optimizador son los **archivos de referencia**: la paleta, los estilos y el SVG del logo viajan dentro de la skill. Así se usan siempre igual y el logo nunca se redibuja.

**Práctica (22 min)**
1. **Instalar:** Crear → Subir → elegir `gtd-visual.zip` → revisar que se cargaron los archivos de referencia → Crear.
2. **Presentación:** pedir «crea una presentación para la gerencia con los hallazgos del dataset del trimestre, con la marca GTD» y adjuntar el CSV de la U2. Responder las preguntas, revisar las 4 vistas previas, elegir un estilo y generar.
3. **Dashboard:** repetir con modo oscuro y producto dashboard.
4. **Verificar:** el logo intacto, el contraste, 3 cifras contra el CSV y que los filtros funcionen.

**Carril extra:** pedir el mismo contenido en otro estilo y comparar cuál comunica mejor a la gerencia.

### Bloque 4 · Crea tu propia skill (25 min)

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

### Bloque 5 · Proyecto integrador y Demo Day (25 min)

**Microcharla (2 min):** el proyecto integrador combina las cuatro clases en una tarea de punta a punta. Debe usar al menos **una herramienta de investigación** (Gemini, Deep Research o Gemini Notebook), **dos skills** y **un producto final**.

**Práctica (23 min)**
- **Construcción (13 min).** Ejemplos de recorrido:
  - `/optimizador-prompts` → `/analista-planillas` sobre el dataset → `/gtd-visual` con un dashboard.
  - Cuaderno de la U3 → `/resumen-ejecutivo` → `/gtd-visual` con una presentación de 6 diapositivas.
  - Una tarea propia de su puesto, con datos ficticios o públicos.
- **Reflexión** (se pega al final del producto o del chat): ¿qué necesitaba hacer?, ¿cómo me ayudó Gemini?, ¿qué tuve que aportar yo?, ¿qué revisé antes de darlo por bueno?
- **Demo Day (10 min):** 5 participantes elegidos al azar presentan en 90 segundos cada uno: problema → skills usadas → resultado → qué revisaron. El resto vota con una reacción por la solución más útil para GTD.

### Cierre del bootcamp (5 min)
- Recorrido de las 4 clases: fundamentos y prompts → Gemini → Gemini Notebook → Skills.
- Compromiso individual: «¿qué skill vas a usar mañana en tu trabajo?».
- Mensaje final: «La IA no reemplaza tu talento, lo multiplica».
- Recordatorio: el material completo queda en el mini-LMS, y las skills descargadas son tuyas.

### Entregable U4 · Terminado cuando…
- [ ] Puedo explicar en 2 frases qué es una skill y por qué reemplaza a los Gems.
- [ ] `optimizador-prompts` está instalada; la probé con 3 prompts y la personalicé con una regla propia.
- [ ] `gtd-visual` está instalada y generé con ella una presentación o un dashboard con el logo intacto y cifras verificadas.
- [ ] Creé, probé y descargué una skill propia.
- [ ] Mi proyecto integrador usa una herramienta de investigación, dos skills y un producto final, e incluye la reflexión de 4 preguntas.
- [ ] Usé solo datos ficticios o públicos (o mi calendario personal en la skill de agenda).

### Profundiza en el LMS (U4)
- Guía oficial «Crear y administrar skills» y la página de transición de Gems a skills.
- El estándar `SKILL.md`: encabezado, descripción, archivos de referencia y buenas prácticas, como mantener las instrucciones breves y la descripción precisa.
- Galería de skills del curso, con el código comentado.
- Cómo migrar un Gem propio a skill antes de que Google lo haga automáticamente.
- Ideas de skills para GTD: respuesta tipo a reclamos, minuta de reunión, revisión de contratos con lista de chequeo, informe semanal de indicadores.

### Pendientes y verificaciones de la U4
- `PENDIENTE_DESARROLLADOR`: agregar `logo-gtd.svg` a `gtd-visual` y comprimir; probar las dos skills del curso y las tres plantillas con la cuenta Google AI Plus.
- `VERIFICAR` en la prueba previa:
  - que cada versión del optimizador aparezca en un bloque con botón de copiar;
  - que `gtd-visual` genere las vistas previas y el producto en Canvas usando los archivos de referencia;
  - que `mi-semana-laboral` lea el calendario personal con Apps conectadas.
- Pre-trabajo para los participantes: crear 4 o 5 eventos de prueba en su calendario personal y conectar Google Calendar a Gemini.

---

## 2. Pendientes generales

- `PENDIENTE_DESARROLLADOR`: subir `iconos-svg.txt` y agregar el logo a `gtd-visual`; curar las fuentes públicas de la U3; probar las skills del curso; aprobar las 4 unidades.
- `PENDIENTE_CLIENTE`: confirmar los HEX y la tipografía oficiales de GTD, y la autorización de uso de la marca; redacción del respaldo de Google.
- Prueba previa completa con una cuenta Google AI Plus antes de la clase 1.
- Revisar la lista de modelos antes de cada edición del curso, porque cambia con frecuencia.

---

## Fuentes oficiales (consultadas el 2026-11-17)

**Planes y modelos**
- Planes de Google AI en Chile (Google AI Plus a CLP 4.690 al mes): https://gemini.google/cl/subscriptions?hl=es-419
- Acerca de los modelos de Gemini (modelos por plan, niveles de razonamiento, selección automática): https://support.google.com/gemini/answer/18648722
- Google AI Plus (requisitos, edad, países): https://support.google.com/googleone/answer/16548195
- Gemini 4 Argon: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/
- Gemini 4 Carbon: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/
- Gemini 4 Hydrogen: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/

**Canvas, imágenes y exportación**
- Crear documentos, apps y más con Canvas: https://support.google.com/gemini/answer/16047321
- Generar presentaciones en la app de Gemini (Workspace Updates): https://workspaceupdates.googleblog.com/2025/10/generate-presentations-in-gemini-app.html
- Exportar respuestas (Docs, Hojas de cálculo): https://support.google.com/gemini/answer/14184041
- Generar y editar imágenes (Nano Banana): https://support.google.com/gemini/answer/14286560
- Nano Banana Pro (infografías): https://blog.google/innovation-and-ai/products/nano-banana-pro/

**Deep Research**
- Usar Deep Research en la app de Gemini: https://support.google.com/gemini/answer/15719111

**Historia, fundamentos y prompts (U1)**
- Introducing Gemini (dic-2023): https://blog.google/technology/ai/google-gemini-ai
- Bard pasa a ser Gemini (feb-2024): https://blog.google/intl/en-africa/products/explore-get-answers/bard-becomes-gemini-try-ultra-10-and-a-new-mobile-app-today/
- 100 anuncios del I/O 2024: https://blog.google/innovation-and-ai/products/google-io-2024-100-announcements/
- Qué es un LLM (Google Cloud): https://cloud.google.com/ai/llms
- Tokens (API de Gemini): https://ai.google.dev/gemini-api/docs/tokens
- Alucinaciones de IA (Google Cloud): https://cloud.google.com/discover/what-are-ai-hallucinations
- Principios de IA de Google: https://ai.google/responsibility/principles/
- Aviso de privacidad de las apps de Gemini: https://support.google.com/gemini/answer/13594961
- Privacy Hub de Workspace: https://knowledge.workspace.google.com/admin/generative-ai/generative-ai-in-google-workspace-privacy-hub
- Verificar respuestas (*Double-check*): https://support.google.com/gemini/answer/14143489
- Gemini en Gmail: https://support.google.com/mail/answer/14355636
- Workspace Studio: https://workspaceupdates.googleblog.com/2025/12/workspace-studio.html
- Prompting guide 101: https://services.google.com/fh/files/misc/gemini-for-google-workspace-prompting-guide-101.pdf
- Estrategias de diseño de prompts: https://ai.google.dev/gemini-api/docs/prompting-strategies
- Google AI Essentials: https://grow.google/ai-essentials/

**Skills (U4)**
- Crear y administrar skills en las apps de Gemini: https://support.google.com/gemini?p=pn_skills
- Skills en la app de Gemini y Workspace, y qué sigue para Gems: https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html
- Transición de Gems a skills: https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/about-the-transition-to-skills?hl=en
- Anuncio de skills (The Keyword): https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/
- Formato `SKILL.md` en Gemini Enterprise (encabezado YAML con nombre y descripción): https://docs.cloud.google.com/gemini/enterprise/docs/skills
- Crear skills en Gemini CLI (la descripción decide cuándo se activa): https://geminicli.com/docs/cli/creating-skills/

**Gemini Notebook (U3)**
- Crear un cuaderno (etiquetado automático desde 5 fuentes): https://support.google.com/gemininotebook/answer/16206563
- Agregar o descubrir fuentes (Fast Research y Deep Research): https://support.google.com/gemininotebook/answer/16215270
- Usar el chat (configurar chat, citas, casillas de fuentes): https://support.google.com/gemininotebook/answer/16179559
- Generar una presentación: https://support.google.com/gemininotebook/answer/16757456
- Cocreación de presentaciones y videos (19-oct-2026): https://blog.google/innovation-and-ai/products/gemini-notebook/co-create-slides-videos/
- Nuevas herramientas de estudio e informes interactivos (15-sep-2026): https://blog.google/innovation-and-ai/products/gemini-notebook/new-study-tools-september-2026/
- Deep Research y más tipos de fuentes: https://blog.google/technology/google-labs/notebooklm-deep-research-file-types/
- Colección comunitaria de prompts de presentaciones (no oficial; licencia por confirmar entre MIT y CC BY 4.0): https://github.com/serenakeyitan/awesome-notebookLM-prompts

**Instructor**
- Certificaciones Gemini de Google for Education: https://blog.google/products-and-platforms/products/education/gemini-certifications-education/
- Sitio oficial del instructor: https://felipecuevas.dev
