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
