# Épica 02 · Portada, ruta del curso e instructor

- **Estado:** Pendiente de iniciar
- **Objetivo:** publicar en la página la portada con los íconos de Gemini y Google, la vista general de la ruta (4 unidades de 0 % a 100 %) y la sección del instructor, y dejar las 4 unidades cargadas completas en las colecciones de contenido.

## Alcance

1. Portada (hero) con el título del curso, el lema como frase de propósito, el botón «Ver la ruta», el logo de Gemini como protagonista, el de Google y, con mucho menos protagonismo, los de GTD Telsur y Capacita Tu Futuro, y las redes con los íconos de Chrome y LinkedIn.
2. Modelo de contenido con un archivo `.md` por bloque (RDA-009) y las fichas reales de las 4 unidades; se elimina el contenido de prueba.
3. Ruta del curso en mosaico, con el bloque de color, el título completo, el mini-proyecto y el avance de cada unidad, enlazados a sus secciones.
4. Sección del instructor con la trayectoria del documento del curso.
5. Texto «Para la clase», prompts literales y recursos externos de los bloques de las 4 unidades.

## Fuera de alcance

- Mostrar el detalle de cada unidad en la página, las descargas, los videos y los textos de «Profundiza en tu tiempo» (épica 03).
- Mencionar el respaldo de Google.
- Mostrar los logotipos de GTD y de Capacita Tu Futuro fuera del hero (por ejemplo, en el pie).

## Iteraciones

| Iteración | Nombre |
| :-------- | :----- |
| 02-01 | Portada |
| 02-02 | Fichas de las unidades y modelo de bloques |
| 02-03 | Ruta del curso |
| 02-04 | Instructor |
| 02-05 | Bloques y prompts de la Unidad 1 y la Unidad 2 |
| 02-06 | Bloques y prompts de la Unidad 3 y la Unidad 4 |

> Iteraciones aprobadas el 2026-11-17 en el traspaso a la épica 02: la carga de las 4 unidades no cabía en una iteración y se partió por capas (lo visible primero).

## Decisiones de la épica

- 2026-11-17: la épica 02 carga las 4 unidades reales con todo lo que trae `unidades-del-curso.md`; la épica 03 solo presenta el contenido y completa lo pendiente. El contenido de prueba se elimina en la 02-02.
- 2026-11-17: el texto de cada bloque va en un `.md` por bloque, en la colección `bloques` (RDA-009, se registra en la 02-02).
- 2026-11-17: se carga solo el título completo de cada unidad.
- 2026-11-17: se copia literal lo que es para participantes y se omite lo que es solo para el instructor, sin reescribir.
- 2026-11-17: frase de propósito del hero = lema «La IA no reemplaza tu talento, lo multiplica». Sin mención del respaldo de Google hasta recibir la redacción del cliente.
- 2026-11-17: los SVG se guardan como archivos individuales en `src/assets/iconos/` (no se sube `iconos-svg.txt`). Gemini es el logo principal del hero; Google es secundario; GTD Telsur (cliente) y Capacita Tu Futuro (organizador) van en el hero con mucho menos protagonismo, sin texto visible y con `aria-label`. Chrome va junto al enlace a felipecuevas.dev y LinkedIn junto al enlace al perfil.
- 2026-11-17: Gemini, Google y Chrome no se recolorean; GTD, Capacita Tu Futuro y LinkedIn sí se pueden recolorear con tokens. Cambia `DESIGN.md` (propuesta P-005, que debe aplicar el desarrollador antes de la 02-01). La autorización del cliente para mostrar el logo de GTD queda bajo responsabilidad del desarrollador.
- La ruta muestra el avance de cada unidad según RDA-008: U1 0–25, U2 25–50, U3 50–75, U4 75–100.

## Criterio de término

- La portada, la ruta y el instructor se ven en 360 px y en escritorio, en ambos modos, con un solo `h1` en la página y cada sección con su `h2`.
- Cada bloque de la ruta lleva a la sección de su unidad con el teclado.
- Las 4 unidades están en las colecciones con sus bloques, el texto «Para la clase», sus prompts idénticos al documento y sus recursos, sin contenido de prueba ni marcadores `PENDIENTE_` o `VERIFICAR` en `src/content/`.

## Cierre

- **Bitácora de cierre:** [bitacora-02-cierre](bitacoras/bitacora-02-cierre.md)
