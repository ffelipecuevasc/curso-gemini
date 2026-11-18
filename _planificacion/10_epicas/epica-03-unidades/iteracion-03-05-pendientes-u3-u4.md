# Iteración 03-05 · Pendientes de la Unidad 3 y la Unidad 4

- **Épica:** 03 · Unidades del curso
- **Estado:** En revisión
- **Rama sugerida:** iteracion/03-05-pendientes-u3-u4
- **Depende de:** 03-04
- **Especificación:** —
- **RDA relacionadas:** RDA-003, RDA-009, RDA-010

## Objetivo

Completar en la U3 y la U4 lo que quedó pendiente: «Profundiza» de cada bloque con los recursos oficiales ya cargados, los videos y las descargas que entregue el desarrollador, y cerrar la épica 03.

## Punto de partida

- Los temas de «Profundiza en el LMS» de la U3 y la U4 están en la bitácora 02-06; sus recursos ya están en `recursos.yaml` (U3 8, U4 6).
- Las descargas de la U3 y la U4 (paquete de fuentes públicas, `optimizador-prompts/SKILL.md`, `gtd-visual.zip` con el logo y las plantillas de skills) siguen en «Decisiones por tomar».

## Alcance y entregables

- `profundiza.recursos` en los bloques de la U3 y la U4, según la propuesta aprobada (tarea 1).
- Videos y descargas de la U3 y la U4, si el desarrollador los entrega.
- Cierre de la épica 03 (bitácora de cierre y propuesta de la épica 04, `_planificacion/README.md`, sección 4.4).

## Decisiones del desarrollador

- 2026-11-17: «Profundiza» usa solo los recursos oficiales ya cargados; el texto propio es opcional y no bloquea nada.
- 2026-11-17: el contenido con la marca GTD se muestra bajo responsabilidad del desarrollador; `gtd-visual.zip` incluye el logo de `src/assets/iconos/gtd-telsur.svg`.
- 2026-11-17: asignación de «Profundiza» de U3 (bloques 0 a 4) y U4 (bloques 1 y 4) aprobada; el video «Inside NotebookLM…» va en U3 · 0 y en la ficha de la U3.
- 2026-11-17: las 4 plantillas `SKILL.md` de `plantillas-alumnos/` se publican en la U4 con los títulos de la columna «Opción» del documento («Analista de planillas», «Resumen ejecutivo», «Mi semana laboral» y «Libre»); `optimizador-prompts/SKILL.md`, `gtd-visual.zip` y el paquete de fuentes de la U3 quedan como ausencia acordada; la U4 no lleva videos.
- 2026-11-17: el desarrollador aplicó la P-007 en `AGENTS.md` (commit bc70739), ampliada a las plantillas de `plantillas-alumnos/`.

## Tareas

1. Proponer en el chat la asignación de recursos de «Profundiza» por bloque de la U3 y la U4, según los temas de la bitácora 02-06, y esperar la aprobación.
2. Cargar `profundiza.recursos` en los bloques aprobados.
3. Cargar los videos de la U3 y la U4 (desbloqueada: el desarrollador entregó 1 video de la U3; la U4 queda sin videos, ausencia acordada).
4. Cargar las descargas de la U4 (desbloqueada: las 4 plantillas de `plantillas-alumnos/`) y ajustar la regex de `archivo` en `src/content.config.ts` según la P-007 aplicada, con prueba reversible. `optimizador-prompts/SKILL.md` no existe en `public/`: ausencia acordada.
5. Revisar en `pnpm preview` la U3 y la U4 completas en 360 px y escritorio, en ambos modos y con teclado.
6. Ejecutar `pnpm build`, `pnpm astro check` y las regresiones.
7. Escribir la bitácora y actualizar el registro.
8. Cerrar la épica 03: bitácora de cierre con su criterio de término y propuesta de las iteraciones de la épica 04; esperar la aprobación.

## Tareas del desarrollador

1. Entregar las URL de los videos de la U3 y la U4, o decidir que no habrá videos.
2. Entregar los archivos de descarga de la U3 y la U4, o decidir cuáles no se publican.

## Criterios de aceptación

- [x] Asignación de «Profundiza» aprobada y anotada en la bitácora; cada bloque con `profundiza` muestra su `<details>` con sus recursos.
- [ ] Cada video y cada descarga cargados cumplen lo mismo que en la 03-04, o la bitácora registra su ausencia acordada.
- [ ] Regresiones en verde: `pnpm build` sin advertencias y `pnpm astro check` sin errores; 24 de 24 prompts iguales; 4 scripts; 1 `h1`; `PENDIENTE_` y `VERIFICAR` en `dist/`: 0; sin desborde en 360 px.
- [ ] El criterio de término de la épica 03 está comprobado con evidencia en la bitácora de cierre y la propuesta de la épica 04 está entregada sin generar archivos de iteración.

Evidencia (detalle en [bitacora-03-05](bitacoras/bitacora-03-05.md) y [bitacora-03-cierre](bitacoras/bitacora-03-cierre.md)):

- Asignación aprobada el 2026-11-17. Comando temporal: 16 `<details>` en la página (9 de U1 y U2, 5 de U3, 2 de U4); 16 de 16 iguales a sus archivos; 55 enlaces = 55 referencias.
- Video: `video-inside-notebooklm`, `https://`, 2 apariciones con `target="_blank"` y `rel="noopener noreferrer"`. Descargas: 6 de 6 tarjetas con su título y el peso igual a `fs.statSync` (las 4 plantillas: 1 903, 1 378, 2 099 y 727 B). Sin marcar: abrir el video y descargar en el navegador.
- Regex: 4 pruebas reversibles fallan el build (otro nombre en mayúsculas en `plantillas-alumnos/<carpeta>/`, `SKILL.md` en otra carpeta, `SKILL.md` sin carpeta y mayúscula en un nombre común); `descargas.yaml` restaurado idéntico.
- Regresiones medidas: `pnpm build` sin advertencias; `astro check` 0/0/0; 24 de 24 prompts; 4 etiquetas `<script>`, 1080 B gzip (0 B nuevos); 1 `h1`; `PENDIENTE_` y `VERIFICAR` en `dist/`: 0. Sin marcar: 360 px y ambos modos.
- Cierre de la épica: bitácora de cierre escrita y propuesta de la épica 04 entregada en el chat sin generar archivos. Sin marcar: el criterio de término incluye comprobaciones en el navegador de esta iteración (descargas y enlaces nuevos).

## Riesgos

- El paquete de fuentes de la U3 depende de la curaduría del desarrollador (PDF de la ley, URL y video con subtítulos).
- Mostrar el contenido con la marca GTD sigue sin la autorización del cliente (riesgo asumido por el desarrollador).

## Fuera de alcance

- Escribir textos propios de «Profundiza».
- Configuración de Cloudflare y la guardia de marcadores (épica 04).

## Datos requeridos

### Del cliente

- Ninguno para implementar.

### Del desarrollador

- URL de videos y archivos de descarga de la U3 y la U4 (tareas 3 y 4 bloqueadas hasta recibirlos).
- P-007: aplicada el 2026-11-17 (commit bc70739).
