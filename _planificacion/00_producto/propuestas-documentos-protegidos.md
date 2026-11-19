# Propuestas de cambio a documentos protegidos

Cambios que los agentes proponen para `AGENTS.md`, `DESIGN.md`, `README.md`, `_planificacion/README.md`, `_planificacion/plantillas/` o `.claude/`. **Ningún agente los aplica:** los revisa y aplica el desarrollador. Es la única fuente vigente de propuestas: no se repiten en las bitácoras, que solo enlazan aquí.

## Cómo aplicarlas

1. Revisa la tabla de estado y abre cada propuesta `Pendiente`.
2. Comprueba que el «Texto actual» siga igual en el documento. Si cambió, la propuesta ya no vale: pídele al agente que la rehaga.
3. Aplica el «Texto propuesto» o descártala, y cambia su estado en la tabla con la fecha.

## Estado de las propuestas

La P-001 (transición animada del cambio de modo en `DESIGN.md`) la aplicó el desarrollador antes de que existiera este archivo; por eso no tiene detalle aquí.

| ID | Documento y sección | Origen | Fecha | Estado |
| :- | :------------------ | :----- | :---- | :----- |
| P-001 | `DESIGN.md` · 7. Movimiento | Planificación de la 01-05 | — | Aplicada |
| P-002 | `README.md` · 4. Organización del repositorio | Iteración 01-02 | 2026-11-17 | Aplicada |
| P-003 | `DESIGN.md` · 5. Componentes (fila Encabezado) | Iteración 01-03 | 2026-11-17 | Aplicada |
| P-004 | `AGENTS.md` · 3. Documentos permitidos y `.claude/hooks/documentos-permitidos.md` | Iteración 01-05 | 2026-11-17 | Aplicada |
| P-005 | `DESIGN.md` · 5. Componentes (filas Portada y Redes) y 6. Íconos y logotipos | Planificación de la 02-01 | 2026-11-17 | Aplicada |
| P-006 | `DESIGN.md` · 4. Espaciado, retícula y forma (Retícula) | Revisión de la 02-03 | 2026-11-17 | Aplicada|
| P-007 | `AGENTS.md` · 8. Reglas de contenido, regla 5 | Auditoría previa a la 03-01 | 2026-11-17 | Aplicada |
| P-008 | `AGENTS.md` · 8. Reglas de contenido, regla 3 (frente a 1. Contexto, «Cliente») | Iteración 04-01 | 2026-11-17 | Aplicada |
| P-009 | `DESIGN.md` · 1. Concepto visual, 4. Forma, 5. Componentes, 5.1 Botones y 7. Movimiento | Planificación de la épica 05 | 2026-11-18 | Pendiente |
| P-010 | `AGENTS.md` · 9. Reglas técnicas, regla 2 | Planificación de la épica 05 (RDA-011) | 2026-11-18 | Pendiente |
| P-011 | `README.md` · párrafo sobre JavaScript | Planificación de la épica 05 (RDA-011) | 2026-11-18 | Pendiente |
| P-012 | `AGENTS.md` · 9. Reglas técnicas, regla 5 | Corrección documental de la épica 05 | 2026-11-19 | Pendiente |

## P-002 · Las fuentes ya no viven en `public/fuentes/`

- **Documento:** `README.md`
- **Sección:** 4. Organización del repositorio (árbol de carpetas)
- **Por qué:** según la RDA-006, las fuentes salen de los paquetes de Fontsource (dependencias de desarrollo) y Vite las emite a `dist/_astro/` al compilar; `public/fuentes/` no existe. Si no se aplica, el árbol describe una carpeta que nadie encontrará y un agente podría crearla y duplicar las fuentes.

**Texto actual** (copiado literalmente del documento):

```text
├── public/
│   ├── descargas/      Archivos que descargan los participantes
│   └── fuentes/        Tipografías autoalojadas
```

**Texto propuesto** (actualizado al texto aplicado en `AGENTS.md`):

```text
├── public/
│   └── descargas/      Archivos que descargan los participantes
```

Y, en la línea de `src/styles/`, agregar el origen de las fuentes:

```text
│   └── styles/         Tokens de diseño, estilos globales y fuentes (de Fontsource, RDA-006)
```

## P-003 · La navegación ya no enlaza a «Recursos»

- **Documento:** `DESIGN.md`
- **Sección:** 5. Componentes, fila «Encabezado»
- **Por qué:** el desarrollador decidió en la 01-03 quitar «Recursos» de la navegación: no hay una sección de recursos aparte, porque las descargas y los enlaces viven dentro de cada unidad. Si no se aplica, `DESIGN.md` pide una píldora hacia una sección que no existe y un agente podría crearla.

**Texto actual** (copiado literalmente del documento):

```text
| Encabezado | Navegación en píldoras sobre `--color-superficie-2` con enlaces a Ruta, Unidades (U1 a U4), Instructor y Recursos; la píldora de la sección visible se marca con `aria-current`. En móvil se pliega en un menú con botón (`aria-expanded`, `aria-controls`). Incluye el botón de modo. |
```

**Texto propuesto** (actualizado al texto aplicado en `AGENTS.md`):

```text
| Encabezado | Navegación en píldoras sobre `--color-superficie-2` con enlaces a Ruta, Unidades (U1 a U4) e Instructor; la píldora de la sección visible se marca con `aria-current`. En móvil se pliega en un menú con botón (`aria-expanded`, `aria-controls`). Incluye el botón de modo. |
```

## P-004 · El documento de unidades del curso pasa a la lista de documentos permitidos

- **Documento:** `AGENTS.md` (y la lista equivalente de `.claude/hooks/documentos-permitidos.md`)
- **Sección:** 3. Documentos permitidos, fila `_planificacion/`
- **Por qué:** el desarrollador decidió versionar `_planificacion/00_producto/unidades-del-curso.md`, la fuente del contenido del curso (sección 8, regla 2). Hoy vive ahí sin estar en la lista. Si no se aplica, el archivo sigue fuera de la regla y un agente o el hook podría tratarlo como documento no permitido.

**Texto actual** (copiado literalmente del documento):

```text
| _planificacion/ | `_planificacion/README.md` · `_planificacion/plantillas/*.md` · `_planificacion/00_producto/producto.md` · `_planificacion/00_producto/registro-pendientes.md` · `_planificacion/00_producto/registro-archivo.md` · `_planificacion/00_producto/decisiones.md` · `_planificacion/00_producto/propuestas-documentos-protegidos.md` · `_planificacion/10_epicas/epica-*/definicion-epica-*.md` · `_planificacion/10_epicas/epica-*/iteracion-*.md` · `_planificacion/10_epicas/epica-*/bitacoras/bitacora-*.md` |
```

**Texto propuesto** (actualizado al texto aplicado en `AGENTS.md`):

```text
| _planificacion/ | `_planificacion/README.md` · `_planificacion/plantillas/*.md` · `_planificacion/00_producto/producto.md` · `_planificacion/00_producto/unidades-del-curso.md` · `_planificacion/00_producto/registro-pendientes.md` · `_planificacion/00_producto/registro-archivo.md` · `_planificacion/00_producto/decisiones.md` · `_planificacion/00_producto/propuestas-documentos-protegidos.md` · `_planificacion/10_epicas/epica-*/definicion-epica-*.md` · `_planificacion/10_epicas/epica-*/iteracion-*.md` · `_planificacion/10_epicas/epica-*/bitacoras/bitacora-*.md` |
```

En `.claude/hooks/documentos-permitidos.md`, sección «_planificacion/», agregar esta línea después de la de `producto.md`:

```text
- `_planificacion/00_producto/unidades-del-curso.md`
```

## P-005 · Logos del hero y íconos de las redes

- **Documento:** `DESIGN.md`
- **Sección:** 5. Componentes (filas «Portada (hero)» y «Redes») y 6. Íconos y logotipos
- **Por qué:** el desarrollador decidió el 2026-11-17 que el logo de Gemini es el principal del hero; que los de GTD Telsur (cliente) y Capacita Tu Futuro (organizador) aparecen en el hero con mucho menos protagonismo; y que las redes llevan el SVG de Chrome junto al enlace a felipecuevas.dev y el de LinkedIn junto al enlace al perfil. También autorizó recolorear los SVG de GTD, Capacita y LinkedIn, pero no los de Gemini, Google ni Chrome. Si no se aplica, `DESIGN.md` dice lo contrario de la iteración 02-01 y la regla de «seguir el documento tal como está» bloquea la implementación.
- **Nota:** el pie solo lleva `Redes`, así que el cambio de íconos también llega al pie; los logos de GTD y Capacita quedan solo en el hero.

**Texto actual** (copiado literalmente del documento):

```text
| Portada (hero) | Título del curso (`h1`), una frase de propósito, el botón principal «Ver la ruta», los íconos SVG de Gemini y de Google, un círculo decorativo `--color-superficie` parcialmente fuera del marco y los enlaces de redes pequeños en la esquina inferior izquierda. |
```

```text
| Redes | Texto visible exacto `www.felipecuevas.dev` (a `https://felipecuevas.dev/`) y `www.linkedin.com/in/ffelipecuevasc/` (a `https://www.linkedin.com/in/ffelipecuevasc/`); ícono y texto forman un solo enlace. Ícono web `#007EA7` y texto `#003B51` en claro; ícono web `#00B0E8` y texto `#E4F3FF` en oscuro. Van en la portada (pequeñas, abajo a la izquierda) y en el pie. |
```

```text
- Logotipos de Gemini y Google: se usan los SVG oficiales que entrega el desarrollador, tal cual, sin redibujarlos, recolorearlos ni deformarlos, en la portada y donde se nombre la herramienta. El SVG de Gemini usa `mask` y `filter` con identificadores propios: si aparece más de una vez en la página, cada copia lleva identificadores únicos. Van con `role="img"` y un `aria-label` («Gemini», «Google»).
- Íconos de redes: los de la identidad de felipecuevas.dev, sin efectos.
```

**Texto propuesto** (actualizado al texto aplicado en `AGENTS.md`):

```text
| Portada (hero) | Título del curso (`h1`), una frase de propósito (el lema del curso), el botón principal «Ver la ruta», el logo de Gemini como protagonista, el de Google como secundario, y en una fila aparte, mucho más pequeños y sin texto visible, los de GTD Telsur (cliente) y Capacita Tu Futuro (organizador); un círculo decorativo `--color-superficie` parcialmente fuera del marco y los enlaces de redes pequeños en la esquina inferior izquierda. |
```

```text
| Redes | Texto visible exacto `www.felipecuevas.dev` (a `https://felipecuevas.dev/`) y `www.linkedin.com/in/ffelipecuevasc/` (a `https://www.linkedin.com/in/ffelipecuevasc/`); ícono y texto forman un solo enlace. El enlace a felipecuevas.dev lleva el SVG de Chrome y el de LinkedIn lleva el SVG de LinkedIn (en claro con `--color-linkedin` y en oscuro con el glifo invertido, como en los tokens); texto `#003B51` en claro y `#E4F3FF` en oscuro. Van en la portada (pequeñas, abajo a la izquierda) y en el pie. |
```

```text
- Logotipos de Gemini, Google y Chrome: se usan los SVG que entrega el desarrollador, tal cual, sin redibujarlos, recolorearlos ni deformarlos. El de Gemini y el de Google van en la portada y donde se nombre la herramienta; el de Chrome, junto al enlace a felipecuevas.dev. El SVG de Gemini usa `mask` y `filter` con identificadores propios: si aparece más de una vez en la página, cada copia lleva identificadores únicos. Los logotipos de Gemini y Google van con `role="img"` y un `aria-label` («Gemini», «Google»).
- Logotipos de GTD Telsur y Capacita Tu Futuro: SVG que entrega el desarrollador, solo en el hero, sin texto visible y con `role="img"` y `aria-label` («GTD Telsur», «Capacita Tu Futuro»). Se pueden recolorear con tokens para que se distingan en ambos modos, sin cambiar sus trazados ni sus proporciones.
- Ícono de LinkedIn: el SVG que entrega el desarrollador, recoloreado con tokens (círculo `--color-linkedin`, glifo `--color-fondo`). Los íconos de redes no llevan efectos.
- Los SVG viven como archivos individuales en `src/assets/iconos/`.
```

## P-006 · La ruta del curso pasa a 4 columnas desde 1024 px

- **Documento:** `DESIGN.md`
- **Sección:** 4. Espaciado, retícula y forma, línea «Retícula»
- **Por qué:** la ruta tiene 4 unidades; con 3 columnas desde 1024 px el mosaico quedaba en 3 + 1, con un bloque solo en la segunda fila. Si no se aplica, el documento obliga a esa distribución desequilibrada.
- **Estado:** aplicada por el desarrollador el 2026-11-17 en el commit 9c39f9b, que cambia solo esta línea.

**Texto actual** (copiado literalmente de `git show 920f097:DESIGN.md`, la versión anterior al cambio):

```text
- Retícula: móvil primero; mosaico de 1 columna en móvil, 2 desde 640 px y 3 desde 1024 px, siempre con `minmax(0, 1fr)`.
```

**Texto propuesto** (actualizado al texto aplicado en `AGENTS.md`):

```text
- Retícula: móvil primero; mosaico de 1 columna en móvil, 2 desde 640 px y 4 desde 1024 px (la ruta tiene 4 unidades), siempre con `minmax(0, 1fr)`.
```

## P-007 · Excepción a la regla de nombres para los `SKILL.md` de las descargas

- **Documento:** `AGENTS.md`
- **Sección:** 8. Reglas de contenido, regla 5
- **Estado:** aplicada por el desarrollador el 2026-11-17 en el commit bc70739, que amplió la excepción propuesta a las 4 plantillas de `plantillas-alumnos/`. El «Texto propuesto» se actualizó a lo aplicado.
- **Por qué:** la skill `optimizador-prompts` de la U4 se instala subiendo un archivo `SKILL.md`. El nombre en mayúsculas es parte del formato abierto de skills (fuentes oficiales del documento del curso, apartado «Skills (U4)»). La regla 5 exige minúsculas, y el esquema de descargas (`src/content.config.ts`) también, así que hoy ese archivo no se puede publicar. Si no se aplica, la 03-05 no publica `optimizador-prompts/SKILL.md`: habría que entregarlo dentro de un `.zip` o pedirle al participante que lo renombre.

**Texto actual** (copiado literalmente de `AGENTS.md`):

```text
5. Nombres de archivo y carpeta en ASCII: minúsculas, guiones, sin tildes ni ñ.
```

**Texto propuesto** (actualizado al texto aplicado en `AGENTS.md`):

```text
5. Nombres de archivo y carpeta en ASCII: minúsculas, guiones, sin tildes ni ñ. Única excepción: los archivos `SKILL.md` de `public/descargas/` (`optimizador-prompts/SKILL.md` y `plantillas-alumnos/<plantilla>/SKILL.md`), porque el formato de skills exige ese nombre.
```

## P-008 · Quién es el cliente en la regla de los marcadores

- **Documento:** `AGENTS.md`
- **Sección:** 8. Reglas de contenido, regla 3 (en relación con 1. Contexto en 30 segundos, «Cliente»)
- **Estado:** aplicada por el desarrollador en el commit 6f5ff74, con el «Texto propuesto» tal cual (comprobado en `AGENTS.md` el 2026-11-18).
- **Por qué:** la sección 1 define como cliente solo a Capacita Tu Futuro, «para trabajadores de GTD Telsur», pero la regla 3 llama «datos del cliente» a los de Capacita Tu Futuro o GTD. Un agente puede dudar si un dato de GTD (por ejemplo, su kit de marca) se marca como `PENDIENTE_CLIENTE` y a quién se le pide. Además, la regla 3 dice que la guardia revisa «el HTML generado», y desde la 04-01 revisa todos los archivos de texto de `dist/`, incluidas las descargas `.md` y `.csv`. Si no se aplica, las dos secciones siguen diciendo cosas distintas y la regla describe una guardia más estrecha que la real.

**Texto actual** (copiado literalmente de `AGENTS.md`):

```text
3. Si falta un dato, usa un marcador explícito: `PENDIENTE_CLIENTE` para datos del cliente (Capacita Tu Futuro o GTD) y `PENDIENTE_DESARROLLADOR` para decisiones técnicas, de diseño o de contenido del curso. Regístralo en `registro-pendientes.md`. Nunca publiques un dato de relleno que parezca real. Antes de publicar, ningún marcador puede quedar visible en el sitio: `pnpm build` debe fallar si encuentra uno en el HTML generado.
```

**Texto propuesto:**

```text
3. Si falta un dato, usa un marcador explícito: `PENDIENTE_CLIENTE` para datos del cliente (Capacita Tu Futuro) o de la empresa de los participantes (GTD Telsur), y `PENDIENTE_DESARROLLADOR` para decisiones técnicas, de diseño o de contenido del curso. Regístralo en `registro-pendientes.md`. Nunca publiques un dato de relleno que parezca real. Antes de publicar, ningún marcador puede quedar visible en el sitio: `pnpm build` falla si encuentra `PENDIENTE_` o `VERIFICAR` en cualquier archivo de texto de `dist/`, incluidas las descargas.
```

## P-009 · Sistema visual de la épica 05: síntesis, modales, profundidad y movimiento

- **Documento:** `DESIGN.md`
- **Sección:** 1. Concepto visual (principios 1 y 3), 4. Espaciado, retícula y forma (Sombras), 5. Componentes (filas Portada, Ruta del curso, Sección de unidad, «Profundiza en tu tiempo» e Instructor, y filas nuevas), 5.1 Botones y 7. Movimiento
- **Estado:** Pendiente
- **Por qué:** la épica 05 (decisiones del desarrollador del 2026-11-18) pide que cada unidad quepa en una pantalla con el detalle en modales y un nivel de efectos «con propósito». Hoy `DESIGN.md` prohíbe sombras, degradados y apariciones al desplazarse, describe una sección de unidad con todo el texto abierto y define hovers que casi no se ven (`superficie-2` → `superficie`). Si no se aplica, las iteraciones 05-04, 05-05, 05-06 y 05-07 contradicen la fuente de verdad del diseño y no se pueden empezar. Se aplica antes de la 05-01; la paleta, las tipografías y los radios no cambian.

**1 · Principio 1. Texto actual** (copiado literalmente de `DESIGN.md`):

```text
1. **Práctica primero.** Lo que el participante copia o descarga (prompts, plantillas, archivos) se ve antes que la teoría; «Profundiza en tu tiempo» queda plegado bajo cada bloque.
```

**Texto propuesto:**

```text
1. **Práctica primero, detalle a un clic.** Cada unidad cabe en una pantalla de escritorio: se ve qué harás en cada bloque y sus ideas clave, y los prompts, las descargas, la teoría y los recursos se abren en modales desde la tarjeta del bloque.
```

**2 · Principio 3. Texto actual:**

```text
3. **Ligero por diseño.** Bloques planos de color sólido, sin fotos, sin degradados y sin sombras: el diseño no le cuesta peso a la página.
```

**Texto propuesto:**

```text
3. **Ligero, con profundidad.** Bloques de color sólido y sin fotos. La profundidad viene de sombras teñidas con el color de cada unidad y de un brillo sutil que sigue al cursor; los degradados se usan solo en ese brillo y en la barra de avance de lectura. Ningún efecto agrega imágenes ni librerías.
```

**3 · Sección 4. Texto actual:**

```text
- Sombras: no se usan.
```

**Texto propuesto:**

```text
- Sombras: tokens `--sombra-u1` a `--sombra-u4` (color de la unidad mezclado con `color-mix()`) y `--sombra-neutra`. En reposo, sombra suave; en hover y foco, la tarjeta sube 4 px y la sombra se amplía. En modo oscuro, menos opacidad y un halo de 1 px del color de la unidad.
```

**4 · Sección 5, fila «Sección de unidad». Texto actual:**

```text
| Sección de unidad | Encabezado con el bloque de color de la unidad, objetivo, mini-proyecto, tabla de bloques con minutos, y por cada bloque: «Para la clase», prompts copiables, descargas y «Profundiza en tu tiempo» plegado. Cierra con la lista «Terminado cuando…». |
```

**Texto propuesto:**

```text
| Sección de unidad | Cabe en una pantalla de escritorio (1440 × 900 y 1366 × 657). Cabecera con el bloque de color de la unidad: clase y duración en IBM Plex Mono, título, objetivo breve, barra de avance del tramo, píldoras «Antes de empezar» y «Cierre» (si existen) y acciones «Sobre la unidad», «Recursos (n)» y «Descargas (n)». Debajo, una cuadrícula de 6 tarjetas (3 × 2 desde 1024 px, 2 columnas desde 640 px, 1 en móvil): una por bloque y una de «Terminado cuando…». Sin tabla de bloques. |
| Tarjeta de bloque | Número y minutos en IBM Plex Mono, título (`h3`), «Qué harás» y hasta 2 claves; acciones «Ver detalle» y «Ver prompt» o «Prompts (n)». Superficie `--color-fondo` con borde de 1 px `--color-linea`, franja superior del color de la unidad y sombra de su unidad. |
| Modal | `<dialog>` nativo (RDA-011): franja del color de la unidad, título, botón «Cerrar» de 44 px, cuerpo con desplazamiento propio de hasta `min(85dvh, 760px)` y 720 px de ancho; hoja completa desde abajo bajo 640 px. Fondo `--color-fondo` al 70 % con desenfoque de 4 px. Variantes: prompts del bloque, detalle del bloque, recursos y descargas de la unidad, y «Sobre la unidad». Sin JavaScript, su contenido se ve en la página. |
```

**5 · Sección 5, filas «Portada (hero)», «Ruta del curso» e «Instructor». Texto actual:**

```text
| Portada (hero) | Título del curso (`h1`), una frase de propósito (el lema del curso), el botón principal «Ver la ruta», el logo de Gemini como protagonista, el de Google como secundario, y en una fila aparte, mucho más pequeños y sin texto visible, los de GTD Telsur (cliente) y Capacita Tu Futuro (organizador); un círculo decorativo `--color-superficie` parcialmente fuera del marco y los enlaces de redes pequeños en la esquina inferior izquierda. |
| Ruta del curso | Mosaico de cuatro bloques de color (sección 2.2), cada uno con su número, nombre, mini-proyecto y avance «0 % → 25 %», «25 % → 50 %», «50 % → 75 %», «75 % → 100 %», escrito en IBM Plex Mono. Cada bloque enlaza a su sección. |
| Instructor | Nombre, títulos y trayectoria del documento del curso; certificación de Gemini destacada primero; enlaces a felipecuevas.dev y LinkedIn. |
```

**Texto propuesto** (reemplaza las tres filas):

```text
| Portada y ruta | Una sola sección en el primer pantallazo: a la izquierda, título (`h1`), lema, botón principal «Empezar por la Unidad 1» y redes; a la derecha, el logo de Gemini como protagonista y, en primer plano, las 4 tarjetas de unidad en mosaico 2 × 2 (número, nombre, mini-proyecto en 2 líneas y barra de avance con su texto en IBM Plex Mono), cada una enlazada a su sección. Logos de Google, GTD Telsur y Capacita Tu Futuro en una franja discreta al pie de la sección. La ruta conserva su `id="ruta"` y su `h2`. |
| Instructor | Franja compacta: nombre, certificación de Gemini primero, resumen de la trayectoria tomado del documento del curso y botón «Ver trayectoria completa» (modal); enlaces a felipecuevas.dev y LinkedIn. |
```

**6 · Sección 5, fila «Profundiza en tu tiempo». Texto actual:**

```text
| «Profundiza en tu tiempo» | Elemento `<details>` nativo con `<summary>` visible; dentro, la teoría y los enlaces a documentación y videos oficiales de Google. |
```

**Texto propuesto:**

```text
| «Profundiza en tu tiempo» | Apartado al final del modal de detalle del bloque, con los enlaces a documentación y videos oficiales de Google. |
```

**7 · Sección 5.1, fila «Secundario (contorno)» y párrafo siguiente. Texto actual:**

```text
| Secundario (contorno) | Transparente, borde 1,5 px `--color-primario` | `--color-texto` | Fondo `--color-superficie` |

Todos: forma de píldora, alto mínimo de 44 px, foco visible con `outline: 2px solid var(--color-foco); outline-offset: 3px`. Solo un botón principal por sección.
```

**Texto propuesto:**

```text
| Secundario (contorno) | Transparente, borde 1,5 px `--color-primario` | `--color-texto` | Fondo `--color-primario`, texto `--color-sobre-primario` |
| Ícono (modo, menú, cerrar) | `--color-superficie-2` | `--color-texto` | Fondo `--color-hover-suave` y borde de 1,5 px `--color-primario`; el botón de modo muestra además un globo con su acción («Cambiar a modo oscuro» / «Cambiar a modo claro») |

Todos: forma de píldora, alto mínimo de 44 px, `cursor: pointer`, foco visible con `outline: 2px solid var(--color-foco); outline-offset: 3px`, y al presionar `scale(0.97)` con fondo `--color-presionado`. El cambio entre reposo y hover tiene al menos 1,3:1 de diferencia de luminancia. Solo un botón principal por sección.
```

**8 · Sección 7. Texto actual:**

```text
- Transiciones de 150 a 300 ms en hover y foco; apertura de «Profundiza» sin animación de altura.
```

y

```text
- No se usan animaciones infinitas, parallax ni apariciones al desplazarse.
- Con `prefers-reduced-motion: reduce`, se quitan las transiciones, el revelado del cambio de modo (el modo cambia al instante) y el desplazamiento suave a las anclas.
```

**Texto propuesto:**

```text
- Transiciones de 150 a 300 ms en hover y foco. Solo se animan `transform` y `opacity`.
- Modales: al abrir desde una tarjeta, la tarjeta se transforma en el modal con View Transitions en 350 ms con `--ease-expo-out`; sin la API, entrada con `@starting-style` (escala 0,96 → 1 y opacidad) y fundido del fondo.
- Barra de avance de lectura de 3 px bajo el encabezado, guiada por el desplazamiento (`animation-timeline: scroll(root)`), con el color de la unidad visible.
- Las tarjetas de cada unidad aparecen al entrar en la ventana (opacidad y 12 px, desfase de 40 ms) con `animation-timeline: view()`; sin soporte, se ven desde el inicio.
- Brillo radial del color de la unidad al 12 % que sigue al cursor en las tarjetas, solo con puntero fino.
- No se usan animaciones infinitas, parallax, fondos animados ni efectos sobre los logotipos.
- Con `prefers-reduced-motion: reduce`, se quitan todas las transiciones y animaciones: el revelado del cambio de modo, la transición de los modales, la barra de avance, las apariciones, el brillo y el desplazamiento suave a las anclas.
```

## P-010 · Cuarto comportamiento con script: los modales

- **Documento:** `AGENTS.md`
- **Sección:** 9. Reglas técnicas, regla 2
- **Estado:** Pendiente
- **Por qué:** la RDA-011 (propuesta) agrega los modales como cuarto comportamiento con script, y la 05-07 agrega dos mejoras decorativas que necesitan script (brillo con el puntero y transición de tarjeta a modal). Si no se aplica, la 05-04 y la 05-07 contradicen una regla técnica de `AGENTS.md`.

**Texto actual** (copiado literalmente de `AGENTS.md`):

```text
2. Cero JavaScript por defecto. Solo hay tres comportamientos con script: cambio de modo claro/oscuro, botón de copiar y menú de navegación móvil. Se escriben como scripts pequeños sin framework, empaquetados por Astro; ninguno es necesario para leer el contenido.
```

**Texto propuesto:**

```text
2. Cero JavaScript por defecto. Solo hay cuatro comportamientos con script: cambio de modo claro/oscuro, botón de copiar, menú de navegación móvil y apertura de modales (`<dialog>` nativo, RDA-011). Además se permiten dos mejoras decorativas que se pueden quitar sin perder nada: el brillo que sigue al cursor y la transición de tarjeta a modal. Se escriben como scripts pequeños sin framework, empaquetados por Astro, con un total de 3 KB gzip como máximo; ninguno es necesario para leer el contenido: sin JavaScript, el contenido de los modales se ve en la página.
```

## P-011 · El README menciona solo tres scripts

- **Documento:** `README.md`
- **Sección:** párrafo sobre JavaScript (línea que empieza con «La página funciona completa sin JavaScript»)
- **Estado:** Pendiente
- **Por qué:** con la RDA-011, los modales son el cuarto comportamiento con script. Si no se aplica, el README describe un sitio con menos scripts de los que tiene.

**Texto actual** (copiado literalmente de `README.md`):

```text
La página funciona completa sin JavaScript. Solo tres cosas usan un script pequeño: cambiar entre modo claro y oscuro, copiar un prompt con un botón y abrir el menú en el celular.
```

**Texto propuesto:**

```text
La página funciona completa sin JavaScript. Solo cuatro cosas usan un script pequeño: cambiar entre modo claro y oscuro, copiar un prompt con un botón, abrir el menú en el celular y abrir los modales con el detalle de cada bloque. Sin JavaScript, ese detalle se ve directamente en la página.
```

## P-012 · INP informativo en las metas de rendimiento en móvil

- **Documento:** `AGENTS.md`
- **Sección:** 9. Reglas técnicas, regla 5
- **Estado:** Pendiente
- **Por qué:** dice «INP menor a 200 ms» y contradice la decisión del desarrollador del 2026-11-18 (INP informativo, sin bloquear; referencia: TBT, porque Lighthouse de laboratorio no mide INP). Si no se aplica antes de la 05-08, la regla técnica de `AGENTS.md` exige una métrica que Lighthouse de laboratorio no entrega y discrepa con el criterio de término de la épica 05. Se aplica antes de la 05-08.

**Texto actual** (copiado literalmente de `AGENTS.md`):

```text
5. Metas de rendimiento en móvil: Lighthouse con 95 o más en Rendimiento y 100 en Accesibilidad, Buenas prácticas y SEO; LCP menor a 2,5 s, CLS menor a 0,1 e INP menor a 200 ms.
```

**Texto propuesto:**

```text
5. Metas de rendimiento en móvil: Lighthouse con 95 o más en Rendimiento y 100 en Accesibilidad, Buenas prácticas y SEO; LCP menor a 2,5 s y CLS menor a 0,1. El INP es informativo y no bloquea: Lighthouse de laboratorio no lo mide y se usa el TBT como referencia.
```

