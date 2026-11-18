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
| P-006 | `DESIGN.md` · 4. Espaciado, retícula y forma (Retícula) | Revisión de la 02-03 | 2026-11-17 | Aplicada (2026-11-17, commit 9c39f9b) |
| P-007 | `AGENTS.md` · 8. Reglas de contenido, regla 5 | Auditoría previa a la 03-01 | 2026-11-17 | Aplicada (2026-11-17, commit bc70739) |
| P-008 | `AGENTS.md` · 8. Reglas de contenido, regla 3 (frente a 1. Contexto, «Cliente») | Iteración 04-01 | 2026-11-17 | Pendiente |

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
- **Estado:** Pendiente
- **Por qué:** la sección 1 define como cliente solo a Capacita Tu Futuro, «para trabajadores de GTD Telsur», pero la regla 3 llama «datos del cliente» a los de Capacita Tu Futuro o GTD. Un agente puede dudar si un dato de GTD (por ejemplo, su kit de marca) se marca como `PENDIENTE_CLIENTE` y a quién se le pide. Además, la regla 3 dice que la guardia revisa «el HTML generado», y desde la 04-01 revisa todos los archivos de texto de `dist/`, incluidas las descargas `.md` y `.csv`. Si no se aplica, las dos secciones siguen diciendo cosas distintas y la regla describe una guardia más estrecha que la real.

**Texto actual** (copiado literalmente de `AGENTS.md`):

```text
3. Si falta un dato, usa un marcador explícito: `PENDIENTE_CLIENTE` para datos del cliente (Capacita Tu Futuro o GTD) y `PENDIENTE_DESARROLLADOR` para decisiones técnicas, de diseño o de contenido del curso. Regístralo en `registro-pendientes.md`. Nunca publiques un dato de relleno que parezca real. Antes de publicar, ningún marcador puede quedar visible en el sitio: `pnpm build` debe fallar si encuentra uno en el HTML generado.
```

**Texto propuesto:**

```text
3. Si falta un dato, usa un marcador explícito: `PENDIENTE_CLIENTE` para datos del cliente (Capacita Tu Futuro) o de la empresa de los participantes (GTD Telsur), y `PENDIENTE_DESARROLLADOR` para decisiones técnicas, de diseño o de contenido del curso. Regístralo en `registro-pendientes.md`. Nunca publiques un dato de relleno que parezca real. Antes de publicar, ningún marcador puede quedar visible en el sitio: `pnpm build` falla si encuentra `PENDIENTE_` o `VERIFICAR` en cualquier archivo de texto de `dist/`, incluidas las descargas.
```
