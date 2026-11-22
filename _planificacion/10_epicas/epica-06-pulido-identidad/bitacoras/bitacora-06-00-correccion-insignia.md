# Bitácora 06-00 · Corrección 26.2: insignia y credencial del instructor

- **Fecha:** 2026-11-22
- **Agente:** Claude Code (Opus 5.5)
- **Rama:** `correccion/instructor-insignia`
- **Estado final:** En revisión

## Resumen

Se agrega al modal «Trayectoria completa» la insignia de Gemini Certified Educator y el enlace a la credencial en Accredible, con los datos dichos por el desarrollador el 2026-11-22. La insignia es un recorte de la imagen que muestra Google para Gemini Certified Educator, copiado por el desarrollador a `src/assets/instructor/gemini-certified-educator.png` (PNG 320 × 242), y no se recolorea ni se altera. Se muestra a 160 × 121, sin distorsión. La 4.ª línea de trayectoria deja de listar certificaciones concretas. Se marca la P-023 como aplicada y el registro queda limpio para que la 06-01 arranque.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `src/content/instructor.yaml` | `certificacion.insignia` (ruta relativa para `image()`), `enlace.titulo` «Ver mi credencial de Educador certificado de Gemini», `enlace.url` de Accredible y 4.ª línea de trayectoria nueva |
| `src/components/Instructor.astro` | Insignia de 120 × 120 (`size-30`) a 160 × 121 (`h-auto w-40`), alt sin cambios; se quita el prefijo «Enlace oficial de la certificación:» (decisión del desarrollador) |
| `_planificacion/00_producto/propuestas-documentos-protegidos.md` | P-023 «Aplicada 2026-11-22» en la tabla y en su línea Estado |
| `_planificacion/00_producto/registro-pendientes.md` | Backlog 26.2, «Decisiones por tomar» sin la insignia, sin los nombres AWS y Anthropic y con P-024 a P-027, próximo hito, historial en 50 filas |
| `_planificacion/00_producto/registro-archivo.md` | Recibe la fila más antigua del historial (03-01 terminada) |
| `_planificacion/10_epicas/epica-06-pulido-identidad/bitacoras/bitacora-06-00-correccion-insignia.md` | Esta bitácora |

`DESIGN.md` y el PNG son cambios del desarrollador: se leyeron, no se tocaron.

## Verificación

- `pnpm build`: completo, sin advertencias; la imagen se optimiza a WebP (18 kB → 2 kB); guardia de marcadores con 0 en `dist/`.
- `pnpm astro check`: 0 errores, 0 advertencias, 0 sugerencias (37 archivos).
- `dist/index.html`: 1 `<img>` de insignia, con `width="160"`, `height="121"` y `alt="Insignia de Gemini Certified Educator"`; 1 aparición de la URL de Accredible; 0 `PENDIENTE_`; 1 `h1`; 0 apariciones del prefijo quitado.
- JavaScript propio (gzip nivel 9 de las 6 etiquetas en línea concatenadas): 1774 B, sin cambios.
- `grep -c -- "--color-puntos" DESIGN.md`: 1 (sección 2.1).
- Historial de `registro-pendientes.md`: 50 filas.

## Criterios de aceptación

- [x] Insignia con su proporción (320 × 242 → 160 × 121), con el alt de antes: medido en `dist/index.html`.
- [x] Enlace nuevo con su título y anuncio de pestaña nueva: la URL está en `dist/index.html` y el marcado del enlace no cambia.
- [x] 4.ª línea de trayectoria reemplazada por el texto del desarrollador.
- [x] P-023 aplicada tras el `grep`.
- [x] Registro al día y build y check limpios.

## Diferencias entre lo planificado y lo encontrado

- `DESIGN.md` no describe las medidas de la insignia, así que no hace falta la P-028.
- El título nuevo del enlace se leía repetido con el prefijo «Enlace oficial de la certificación:»; el desarrollador decidió quitarlo.

## No se pudo verificar

- La revisión visual con `pnpm preview` en 360 px y escritorio, en modo claro y oscuro, no la hizo el agente en el navegador: queda para el desarrollador.
- Que la credencial de Accredible sea pública: el agente no abrió la URL.

## Revisión manual del desarrollador

- Abrir en una ventana privada `https://edu.google.accredible.com/a5f1f0d4-168f-40a8-9725-8a8d14f45ca9` y confirmar que la credencial se ve sin iniciar sesión.
- En `pnpm preview`, abrir «Ver trayectoria completa» en 360 px y en escritorio, en ambos modos: la insignia no se deforma y el enlace se alcanza con el teclado y tiene foco visible.

## Decisiones tomadas

- Quitar el prefijo del enlace (desarrollador, 2026-11-22).
- No listar los nombres de las certificaciones AWS y Anthropic (descartado por el desarrollador).

## Pendientes y riesgos

- Si la credencial no es pública, el enlace lleva a una página de acceso: cambiar la URL o la visibilidad en Accredible.

## Revisión

- **Resultado frente al objetivo:** cumplido; la sección del instructor muestra la insignia y la credencial sin distorsión y sin cambios de JS.
- **Qué aprendimos:** el campo `insignia` previsto desde la 02-04 bastó; solo hubo que ajustar las medidas a la proporción real de la imagen.
- **Qué cambia para lo que sigue:** la 06-01 arranca con la P-023 aplicada y sin decisiones pendientes del instructor.

## Commit sugerido

`Corrección: agrega la insignia y la credencial de Gemini Certified Educator al instructor, actualiza su trayectoria y marca la P-023 aplicada`
