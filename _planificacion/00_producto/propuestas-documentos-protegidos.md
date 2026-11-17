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

**Texto propuesto:**

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

**Texto propuesto:**

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

**Texto propuesto:**

```text
| _planificacion/ | `_planificacion/README.md` · `_planificacion/plantillas/*.md` · `_planificacion/00_producto/producto.md` · `_planificacion/00_producto/unidades-del-curso.md` · `_planificacion/00_producto/registro-pendientes.md` · `_planificacion/00_producto/registro-archivo.md` · `_planificacion/00_producto/decisiones.md` · `_planificacion/00_producto/propuestas-documentos-protegidos.md` · `_planificacion/10_epicas/epica-*/definicion-epica-*.md` · `_planificacion/10_epicas/epica-*/iteracion-*.md` · `_planificacion/10_epicas/epica-*/bitacoras/bitacora-*.md` |
```

En `.claude/hooks/documentos-permitidos.md`, sección «_planificacion/», agregar esta línea después de la de `producto.md`:

```text
- `_planificacion/00_producto/unidades-del-curso.md`
```
