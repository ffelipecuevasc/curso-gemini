# Épica 02 · Portada, ruta del curso e instructor

- **Estado:** Pendiente de iniciar
- **Objetivo:** publicar en la página la portada con los íconos de Gemini y Google, la vista general de la ruta (4 unidades de 0 % a 100 %) y la sección del instructor.

## Alcance

1. Portada (hero) con el título del curso, la frase de propósito, el botón «Ver la ruta», los SVG oficiales de Gemini y Google y las redes.
2. Ruta del curso en mosaico, con el bloque de color, el mini-proyecto y el avance de cada unidad, enlazados a sus secciones.
3. Sección del instructor con la trayectoria del documento del curso.

## Fuera de alcance

- El detalle de cada unidad (épica 03).

## Iteraciones

| Iteración | Nombre |
| :-------- | :----- |
| 02-01 | Portada |
| 02-02 | Ruta del curso |
| 02-03 | Instructor |

> Iteraciones aprobadas por el desarrollador el 2026-11-17 (bitácora de cierre de la épica 01); pendientes de detallar en el traspaso a la épica 02.

## Decisiones de la épica

- La 02-02 carga las 4 unidades completas como YAML reales desde el documento de unidades del curso, y elimina `prueba.yaml` y las entradas ficticias de recursos y descargas.
- La ruta muestra el avance de cada unidad según RDA-008: U1 0–25, U2 25–50, U3 50–75, U4 75–100.
- Los SVG de Gemini y Google se usan tal cual vienen en `iconos-svg.txt` (DESIGN.md, sección 6).

## Criterio de término

- Las tres secciones se ven en 360 px y en escritorio, en ambos modos, con un solo `h1` en la página y cada sección con su `h2`.
- Cada bloque de la ruta lleva a la sección de su unidad con el teclado.

## Cierre

- **Bitácora de cierre:** —
