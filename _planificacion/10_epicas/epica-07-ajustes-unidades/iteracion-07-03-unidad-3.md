# Iteración 07-03 · Unidad 3: dos mitades, cuenta corporativa, fecha neutral y prácticas de la Guía completa

- **Épica:** 07 · Ajustes de contenido por unidad
- **Estado:** En revisión
- **Rama sugerida:** iteracion/07-03-unidad-3
- **Depende de:** 07-02 (Terminada el 2026-11-24, dicho por el desarrollador)
- **Especificación:** —
- **RDA relacionadas:** RDA-004 (identidad visual), RDA-009 (contenido en colecciones), RDA-010 (descargas), RDA-012 (síntesis con límites)
- **Hallazgos que cierra:** U3-1 a U3-8 de esta iteración (abajo)

## Objetivo

Que la Unidad 3 del sitio diga lo mismo que el instructor enseñará el lunes 30-11-2026: una clase de dos mitades (55 min de explicación y demostraciones y 65 min de práctica con la Guía completa), con la cuenta corporativa de GTD, una redacción neutral sobre la fecha de vigencia de la ley, 2 descargas y la entrega por correo. Sin cambiar el diseño. El sitio queda listo para publicar a más tardar el domingo 29-11-2026.

## Hallazgos de la preparación de la U3 (2026-11-24)

Preparación hecha por el desarrollador en el proyecto Claude «Mini-LMS · Gemini & Google Suite».

1. **U3-1 · Estructura.** La clase pasa a dos mitades: 55 min de explicación y demostraciones y 65 min de práctica con el PDF único (`u3-guia-completa.pdf`).
2. **U3-2 · Cuenta.** Los participantes usan su cuenta corporativa de GTD (dicho por el desarrollador el 2026-11-24). Confirmado por él en esa cuenta: Fast Research, Deep Research, «Revisar» y comentarios en presentaciones, el chat genera y descarga `.md`, y la presentación se descarga en PDF y como Presentación de Google. El bloque 0 dice «cuenta personal».
3. **U3-3 · Fecha de la ley.** El sitio afirma «entra en vigencia el 1 de diciembre de 2026» (`u3.yaml`, `miniProyecto.descripcion`). El 2026-11-17 el Congreso despachó la postergación al 15-10-2027, pendiente de publicación en el Diario Oficial. Decisión: redacción neutral en el sitio y en el PDF; el participante lo averigua en sus fuentes (ejercicio 2).
4. **U3-4 · Carriles.** Salen los 5 carriles extra (bloques 1 a 5) y el carril alternativo (Ley 21.663, bloque 0). Sale también el pendiente «Prompts de la U3 nombrados pero no escritos».
5. **U3-5 · Fuentes base.** El «PDF de la ley (paquete del LMS)» no existía. Ahora: `u3-ley-21719.pdf` (texto oficial de bcn.cl), la URL https://www.bcn.cl/leychile/navegar?idNorma=1209272 y el video https://www.youtube.com/watch?v=8HGHBLdOldM («Ley 21.719: Todo lo que debes saber sobre la nueva Ley Protección de Datos de Chile», canal Lawwwing, 30-06-2026), que es una fuente **no oficial**.
6. **U3-6 · Recorte de la práctica.** El resumen en audio, el informe Interactivo, la presentación A (sin prompt) y el banco de 15 preguntas pasan a ser solo demostraciones del instructor.
7. **U3-7 · Entrega.** Por correo, solo a contacto@felipecuevas.dev, con el guion `.md` (marcado como borrador) y la presentación en PDF, más la reflexión de 4 preguntas. Nadie comparte enlaces.
8. **U3-8 · Descargas.** `u3.yaml` tiene `descargas: []`. Pasan a ser 2: la guía (primera) y el PDF de la ley.

## Punto de partida

Verificado en el repositorio el 2026-11-24, en `main` (`2c8d854`):

- `u3.yaml`: `holguraMin: 5`; `miniProyecto.descripcion` con «entra en vigencia el 1 de diciembre de 2026»; `entregable` con informe interactivo y cuestionario; `terminadoCuando` con 7 ítems (audio, informe interactivo y presentaciones A y B incluidos); 9 recursos; `descargas: []`.
- Bloques: minutos 5/20/20/20/20/20/10 + 5 de holgura = 120, repartidos en microcharla y práctica (2+3, 3+17, 3+17, 3+17, 3+17, 2+18, 0+10).
- Ningún bloque de la U3 inserta sus prompts con `<div data-prompt>` (la U2 sí). En `bloque-5`, el paso 1 dice «Prompt en el chat:» y no trae nada después.
- 11 prompts en la U3: `deep-research`, `fast-research`, `plantilla-estilo-personalizado`, `sintesis-por-audiencia`, `pregunta-precisa`, `comparacion-entre-fuentes`, `vacios-y-contradicciones`, `caso-aplicado`, `resumen-en-audio`, `estilo-gtd`, `guion-curso-interno`, `banco-de-preguntas` (12 en total; 32 en el sitio).
- `recursos.yaml` no tiene entradas para la URL de BCN ni para el video de Lawwwing.
- Esquema: `holguraMin` es un entero positivo opcional (no acepta 0); `microcharlaMin` y `practicaMin` aceptan 0.
- Los dos PDF están en `public/descargas/` (360 548 B y 227 911 B), todavía sin commit: entran con esta iteración (decisión del desarrollador del 2026-11-24).

## Alcance y entregables

1. **Minutos.** Tabla de «Contenido aprobado»; sale `holguraMin` de `u3.yaml`.
2. **Ficha de la unidad.** `miniProyecto.descripcion`, `entregable`, `terminadoCuando` y `descargas`.
3. **Descargas.** 2 entradas nuevas en `descargas.yaml`.
4. **Recursos.** 2 entradas nuevas en `recursos.yaml` (BCN y video de Lawwwing), referenciadas en `u3.yaml` y en «Profundiza» del bloque 1.
5. **Bloques.** Cada «Práctica» pasa a un resumen corto que remite a su ejercicio de la Guía completa; los prompts se insertan con `<div data-prompt>`, como en la U2. «Conceptos clave» se mantiene con ediciones mínimas.
6. **Prompts.** Salen `comparacion-entre-fuentes`, `vacios-y-contradicciones`, `resumen-en-audio` y `banco-de-preguntas`; entra `fecha-vigencia`. La U3 queda con 9 y el sitio con 29.
7. **Cierre.** Entrega por correo, reflexión y adelanto de la U4.
8. **Síntesis.** Se proponen las de la tabla y se publican solo con aprobación (RDA-012).
9. **Cierre documental** de la 07-02 y de las correcciones 38 a 40 como «Terminadas» (dicho por el desarrollador el 2026-11-24).

## Contenido aprobado (copiar tal cual)

### Minutos por bloque (suman 120; sin holgura)

| Bloque | `microcharlaMin` (explicación y demo) | `practicaMin` | `minutos` | Ejercicio de la Guía |
| :----- | ---: | ---: | ---: | :--- |
| 0 · Repaso y brief | 5 | 0 | 5 | — |
| 1 · Fuentes | 12 | 15 | 27 | 1 |
| 2 · Chat | 9 | 13 | 22 | 2 |
| 3 · Studio | 10 | 12 | 22 | 3 |
| 4 · Presentaciones | 10 | 12 | 22 | 4 |
| 5 · Del cuaderno al curso interno | 9 | 11 | 20 | 5 |
| Cierre | 0 | 2 | 2 | Correo |
| **Total** | **55** | **65** | **120** | |

`holguraMin` sale de `u3.yaml` (el esquema no acepta 0).

### `u3.yaml`

- `miniProyecto.descripcion`: «La nueva Ley de Protección de Datos Personales (Ley 21.719) cambia cómo una empresa de telecomunicaciones trata los datos de sus clientes. Cada participante construye un cuaderno sobre la ley, solo con fuentes públicas, y lo transforma en un kit para capacitar a un equipo de GTD.»
- `entregable`: «Cuaderno con fuentes públicas etiquetadas, presentación con estilo GTD en PDF y guion del curso interno en Markdown, enviados por correo con una reflexión»
- `terminadoCuando` (reemplaza la lista completa):
  1. «Mi cuaderno tiene al menos 5 fuentes públicas, etiquetadas, y sé por qué está cada una.»
  2. «Configuré el chat en Personalizado, probé 2 longitudes y verifiqué 2 citas en el pasaje original.»
  3. «Contrasté en mis fuentes la fecha de vigencia de la ley y la anoté en una nota.»
  4. «Generé un mapa mental y respondí un cuestionario revisando su respaldo en las fuentes.»
  5. «Generé mi presentación con el prompt de estilo GTD y la descargué en PDF.»
  6. «Descargué el guion en Markdown, marcado como borrador para validación legal.»
  7. «Envié por correo el guion y la presentación, con mi reflexión, y usé solo fuentes públicas.»
- `descargas`: `u3-guia-completa`, `u3-ley-21719`, en ese orden.
- `recursos`: se agregan `ley-21719-bcn` y `video-ley-21719-lawwwing` (ver abajo); el resto sin cambios.

### `descargas.yaml` (entradas nuevas)

```yaml
- id: u3-guia-completa
  titulo: "Guía completa · Sección Práctica U3"
  archivo: /descargas/u3-guia-completa.pdf
- id: u3-ley-21719
  titulo: "Ley 21.719 · texto oficial (BCN)"
  archivo: /descargas/u3-ley-21719.pdf
```

### `recursos.yaml` (entradas nuevas; títulos a confirmar por el desarrollador)

```yaml
- id: ley-21719-bcn
  tipo: documento
  titulo: "Ley 21.719 · texto oficial en LeyChile (BCN)"
  sitio: www.bcn.cl
  url: https://www.bcn.cl/leychile/navegar?idNorma=1209272
- id: video-ley-21719-lawwwing
  tipo: video
  titulo: "Ley 21.719: Todo lo que debes saber sobre la nueva Ley Protección de Datos de Chile (Lawwwing, fuente no oficial)"
  sitio: www.youtube.com
  url: https://www.youtube.com/watch?v=8HGHBLdOldM
```

### Bloques (ediciones mínimas)

- **Bloque 0.** «cuenta personal» pasa a «cuenta corporativa de GTD», con la regla de no subir documentos internos. Sale el «Carril alternativo». Tabla de piezas del kit: Cuaderno con fuentes etiquetadas · Panel Fuentes · Ejercicio 1; Chat configurado como tutor, con la nota de la fecha · Panel Chat · Ejercicio 2; Mapa mental y cuestionario · Panel Studio · Ejercicio 3; Presentación con estilo GTD (PDF) · Studio → Presentación · Ejercicio 4; Guion del curso interno (Markdown) · Chat → archivo en Studio · Ejercicio 5 (la columna «Hito» pasa a «Ejercicio»). Línea nueva: «Entra a Gemini Notebook desde un computador. La app de Gemini también tiene "cuadernos en Gemini", pero hoy trabajas en Gemini Notebook.» Se mantienen la advertencia legal y el brief.
- **Bloque 1.** La práctica remite al ejercicio 1 y nombra las 3 fuentes base: el PDF de Descargas, la URL de BCN y el video, marcado como fuente no oficial. Plan B en una línea: si Deep Research no aparece o no termina, sigues con Fast Research y tus fuentes base. Salen «paquete del LMS» y el carril extra. `deep-research` y `fast-research` no cambian. «Profundiza» suma `ley-21719-bcn` y `video-ley-21719-lawwwing`.
- **Bloque 2.** Prompts: `plantilla-estilo-personalizado`, `sintesis-por-audiencia`, `pregunta-precisa`, `caso-aplicado` y `fecha-vigencia` (nuevo). Salen `comparacion-entre-fuentes`, `vacios-y-contradicciones` y el carril extra. Prompt nuevo:

  ```yaml
  - id: fecha-vigencia
    titulo: "Fecha de vigencia"
    descripcion: "Pregunta desde qué fecha rige la ley según tus fuentes, qué dice cada una y si alguna menciona una postergación."
    texto: |-
      ¿Desde qué fecha rige la Ley 21.719 según mis fuentes? Indica qué dice cada fuente
      sobre la entrada en vigencia, con la fecha de esa fuente, y señala si alguna menciona
      una postergación. Si las fuentes no coinciden, explica la diferencia.
  ```

- **Bloque 3.** Práctica: mapa mental (3 temas anotados en una nota) y cuestionario de 10 preguntas con su respaldo revisado. Línea nueva: «El resumen en audio y el informe Interactivo los verás en la demostración». Salen `resumen-en-audio` y el carril extra.
- **Bloque 4.** Práctica: solo la presentación con el prompt de estilo GTD, con «Revisar», un comentario, la versión revisada y la descarga en PDF. La comparación A/B pasa a «Conceptos clave» como parte de la demostración. Sale el carril extra. Se mantiene la regla de marca. `estilo-gtd` no cambia.
- **Bloque 5.** Práctica: guion `.md`, revisión de 3 mensajes clave con sus citas y la marca «Borrador para validación del área legal de GTD». Salen `banco-de-preguntas`, el paso «Armar el kit» y el carril extra.
- **Cierre.** Igual que `u2/cierre.md`: para contacto@felipecuevas.dev, asunto «U3 · Kit de capacitación Ley 21.719 · Nombre Apellido», adjuntos (guion `.md` con la marca de borrador y presentación en PDF) y la reflexión: 1. ¿Qué necesitaba hacer? 2. ¿Cómo me ayudó Gemini Notebook? 3. ¿Qué tuve que aportar yo? 4. ¿Qué debería revisar? Agrega «Nadie comparte enlaces» y el adelanto de la U4: «Hoy repetiste muchas instrucciones; la próxima clase las convertirás en skills reutilizables».

Cada práctica dice «Sigue el ejercicio N de la Guía completa (Descargas)». Los 9 prompts se insertan con `<div data-prompt="id"></div>` en el paso que los usa.

### Síntesis propuestas (se publican solo con aprobación; RDA-012)

| Campo | Texto propuesto | Límite |
| :---- | :-------------- | ---: |
| bloque-2 · haras | Configura el chat, contrasta la fecha de vigencia y verifica citas. | 12 |
| bloque-3 · resumen | Conoce los recursos del panel Studio y usa el mapa mental y el cuestionario para estudiar la ley con respaldo en tus fuentes. | 25 |
| bloque-3 · haras | Genera un mapa mental y un cuestionario, y revisa su respaldo. | 12 |
| bloque-4 · haras | Crea tu presentación con estilo GTD y descárgala en PDF. | 12 |
| bloque-5 · resumen | Pide desde el chat el guion de un curso interno de 45 minutos, revisa tres mensajes clave con sus citas y márcalo como borrador. | 25 |
| bloque-5 · haras | Genera tu guion, revísalo y márcalo como borrador. | 12 |
| cierre · resumen | Envía tu guion y tu presentación por correo al instructor, con tu reflexión, y conoce el adelanto de la Unidad 4. | 25 |
| cierre · haras | Enviarás por correo tu guion, tu presentación y tu reflexión. | 12 |
| cierre · claves | Envía todo por correo solo al instructor. · Lo que repites en cada chat puede ser una skill. | 10 c/u |

El conteo exacto de palabras se presenta en la tarea 6. Las demás síntesis se revisan contra audio, informe Interactivo, banco de 15, presentación A como práctica, carriles y fecha de vigencia; cualquier cambio se propone antes de aplicarlo.

## Decisiones del desarrollador

- 2026-11-24 · Estructura: 55 min de explicación y demostraciones y 65 min de práctica con la Guía completa; sin holgura.
- 2026-11-24 · Cuenta: los participantes usan su cuenta corporativa de GTD.
- 2026-11-24 · Fecha de la ley: redacción neutral; el participante la contrasta en sus fuentes (ejercicio 2).
- 2026-11-24 · Audio, informe Interactivo, presentación A y banco de 15 preguntas: solo demostraciones del instructor.
- 2026-11-24 · Entrega por correo solo a contacto@felipecuevas.dev; nadie comparte enlaces.
- 2026-11-24 · Los 2 PDF de la U3 entran en la rama de esta iteración.
- 2026-11-24 · La 07-02 y las correcciones 38 a 40 quedan Terminadas; se registra en esta pasada.
- 2026-11-24 · Se agregan a `recursos.yaml` la URL de BCN y el video de Lawwwing.

## Tareas

1. Proponer la rama `iteracion/07-03-unidad-3` y esperar aprobación.
2. Medir la línea base: `pnpm build`, palabras visibles de la U3 con `innerText` (método de la 07-02) y alto de la U3 en 1440 × 900. Si el clasificador bloquea Playwright, queda como verificación del desarrollador.
3. Aplicar minutos, ficha (`u3.yaml`), `descargas.yaml` y `recursos.yaml`.
4. Aplicar los bloques 0 a 5: prácticas que remiten a la Guía, prompts con `<div data-prompt>`, salidas de prompts y carriles.
5. Reescribir el cierre.
6. Proponer las síntesis con su conteo de palabras y esperar aprobación antes de escribirlas.
7. Verificar: build, `astro check`, grep, prompts contra el PDF, descargas en `pnpm preview`, `git diff --stat` y métricas.
8. Escribir `bitacora-07-03.md`, actualizar `registro-pendientes.md` (con el cierre de la 07-02 y las correcciones 38 a 40) y sugerir el commit.

## Tareas del desarrollador

1. Subir `u3-guia-completa.pdf` y `u3-ley-21719.pdf` a `public/descargas/` (hecho; entran con esta iteración).
2. Aprobar la iteración, la rama, los títulos de los recursos nuevos, las síntesis y el cierre.
3. El domingo 29-11: confirmar en el Diario Oficial si se publicó la postergación. Con la redacción neutral el sitio no cambia; solo cambia el guion del instructor.
4. Confirmar la dirección de entrada a Gemini Notebook desde la cuenta de GTD y que esa cuenta pueda enviar correo con adjuntos a una dirección externa.
5. Revisar en `pnpm preview`, hacer commit, push y merge, y comprobar las 2 descargas en producción.

## Criterios de aceptación

- [x] `pnpm build` y `pnpm astro check` sin errores ni advertencias nuevas, y 0 marcadores `PENDIENTE_*` o `VERIFICAR` visibles.
- [x] Los minutos suman 120: 55 de explicación y demostración y 65 de práctica.
- [x] `grep -rni "1 de diciembre\|21.663\|carril\|cuenta personal\|Google AI Plus\|paquete del LMS\|vitrina\|banco de 15" src/content/bloques/u3 src/content/unidades/u3.yaml` no devuelve resultados dirigidos al participante.
- [ ] Los 9 prompts publicados de la U3 son idénticos a los del PDF único (texto extraído con `pdftotext`, espacios normalizados). 8 de 9; `deep-research` solo con comodines, porque su línea del PDF se extrae dañada (ver la bitácora).
- [x] La U3 muestra «Descargas (2)», en este orden: guía y ley. Ambos PDF responden 200 en `pnpm preview`, con su formato y su peso.
- [x] Los 2 recursos nuevos aparecen en la U3 y sus URL son las entregadas por el desarrollador.
- [x] Sin cambios de diseño: `git diff --stat` solo toca `src/content/`, `public/descargas/` y `_planificacion/`.
- [x] Métricas reportadas: 29 prompts, 56 `<dialog>`, U3 con 349 palabras (línea base medida: 354, no 253) y 823 px en 1440 × 900.

## Riesgos

- **La postergación se publica o no antes del 30-11:** la redacción neutral no depende de eso; solo cambia el guion del instructor.
- **La U3 pasa de 300 palabras:** se avisa; no se recorta contenido aprobado por cuenta propia.
- **Los recursos nuevos cambian el alto de la U3:** se mide y se avisa.
- **El video es una fuente no oficial:** se rotula así en el bloque 1 y en el recurso.

## Fuera de alcance

- U1 y U2 dicen «cuenta empresarial del curso/Capacita»; con el dato de la cuenta corporativa de GTD habría que revisarlas en una corrección aparte, si el desarrollador lo decide.
- Backlog 37 (rendimiento) y la U4 (07-04).
- Cambios de diseño, componentes, JavaScript, dependencias o esquema.

## Datos requeridos

### Del cliente

- Ninguno nuevo.

### Del desarrollador

- Aprobaciones de la tarea 2 de sus tareas, la confirmación del Diario Oficial (29-11) y la de la cuenta de GTD (entrada y correo externo).
