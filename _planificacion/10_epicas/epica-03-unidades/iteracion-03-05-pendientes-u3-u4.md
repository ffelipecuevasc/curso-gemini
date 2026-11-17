# Iteración 03-05 · Pendientes de la Unidad 3 y la Unidad 4

- **Épica:** 03 · Unidades del curso
- **Estado:** Pendiente
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

## Tareas

1. Proponer en el chat la asignación de recursos de «Profundiza» por bloque de la U3 y la U4, según los temas de la bitácora 02-06, y esperar la aprobación.
2. Cargar `profundiza.recursos` en los bloques aprobados.
3. **Bloqueada hasta que el desarrollador entregue las URL:** cargar los videos de la U3 y la U4.
4. **Bloqueada hasta que el desarrollador entregue los archivos:** cargar las descargas de la U3 y la U4 (incluido `optimizador-prompts/SKILL.md` en su carpeta dentro de `public/descargas/`).
5. Revisar en `pnpm preview` la U3 y la U4 completas en 360 px y escritorio, en ambos modos y con teclado.
6. Ejecutar `pnpm build`, `pnpm astro check` y las regresiones.
7. Escribir la bitácora y actualizar el registro.
8. Cerrar la épica 03: bitácora de cierre con su criterio de término y propuesta de las iteraciones de la épica 04; esperar la aprobación.

## Tareas del desarrollador

1. Entregar las URL de los videos de la U3 y la U4, o decidir que no habrá videos.
2. Entregar los archivos de descarga de la U3 y la U4, o decidir cuáles no se publican.

## Criterios de aceptación

- [ ] Asignación de «Profundiza» aprobada y anotada en la bitácora; cada bloque con `profundiza` muestra su `<details>` con sus recursos.
- [ ] Cada video y cada descarga cargados cumplen lo mismo que en la 03-04, o la bitácora registra su ausencia acordada.
- [ ] Regresiones en verde: `pnpm build` sin advertencias y `pnpm astro check` sin errores; 24 de 24 prompts iguales; 4 scripts; 1 `h1`; `PENDIENTE_` y `VERIFICAR` en `dist/`: 0; sin desborde en 360 px.
- [ ] El criterio de término de la épica 03 está comprobado con evidencia en la bitácora de cierre y la propuesta de la épica 04 está entregada sin generar archivos de iteración.

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
