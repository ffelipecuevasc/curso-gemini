# Bitácora 07-01 · Unidad 1: cuenta, modelos y prácticas del laboratorio

- **Fecha:** 2026-11-23
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/07-01-unidad-1 (creada por el desarrollador desde `main` en `10f1956`)
- **Estado final:** En revisión

## Resumen

La U1 dice ahora lo que el instructor enseñará en clase:

- los participantes trabajan con la cuenta del curso;
- el selector muestra Auto, Hydrogen, Neon y Carbon;
- el punto 2.4 explica la privacidad según la cuenta;
- el bloque 4 publica el prompt avanzado (candidato B, 9 puntos);
- el laboratorio tiene 6 pasos (60 min), Mapa de oportunidades, Banco de tareas y Revisión en 3 pasos;
- la unidad ofrece 4 descargas.

Solo cambió el contenido. No hay cambios de diseño, componentes, JavaScript ni dependencias, y `src/content.config.ts` no se tocó.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `src/content/bloques/u1/bloque-2.md` | Tabla 2.2: «Hydrogen, Neon y Carbon»; 2.4 «Privacidad según tu cuenta», que reemplaza también «Seguridad con la cuenta personal»; «Regla del curso» para las dos cuentas; autoevaluación «¿esto lo pego en Gemini?»; síntesis: `haras` y clave 2 |
| `src/content/bloques/u1/bloque-3.md` | Mapa: el panel depende del administrador; «Verificación de cuenta» con el aviso del selector; síntesis: `resumen`, `haras` y clave 2 |
| `src/content/bloques/u1/bloque-4.md` | Prompt `avanzado` (B) después de `intermedio`; fila «Avanzado» de la tabla 4.2 alineada con B |
| `src/content/bloques/u1/bloque-5.md` | Nuevo 5.1; tabla 5.2 de 6 pasos con columna Min; Mapa, Banco y Revisión en 3 pasos; recurso `gemini-4-argon` → `acerca-modelos-gemini`; síntesis: `resumen` |
| `src/content/unidades/u1.yaml` | `terminadoCuando[0]` aprobado; recursos: sale `gemini-4-argon` y entra `acerca-modelos-gemini`; 4 descargas |
| `src/content/descargas.yaml` | `u1-mapa-oportunidades` y `u1-banco-tareas` |
| `_planificacion/…/iteracion-07-01-unidad-1.md` | Tarea 0 (6 pasos); estado `En revisión`; criterios marcados |
| `_planificacion/…/definicion-epica-07.md` | Épica `En curso`; 07-01 `En revisión` |
| `_planificacion/00_producto/registro-pendientes.md` | Encabezado, fila 07-01, pendientes e historial |
| `_planificacion/00_producto/registro-archivo.md` | Recibe las 2 filas más antiguas del historial (una por pasada) |

## Decisiones tomadas

Todas son del desarrollador y se registran como dichas por él:

- 2026-11-23 · Tarea 0: la tabla 5.2 tiene 6 pasos, no 7. Mapa 5 + Ronda 1 14 + Ronda 2 15 + Ronda 3 11 + Plantilla 10 + Cierre 5 = 60.
- 2026-11-23 · Prompt avanzado: candidato B, copiado tal cual. La fila «Avanzado» de la tabla 4.2 se alinea con B; es una ampliación de alcance aprobada.
- 2026-11-23 · Se aprueban tal cual el 2.4, el 5.1 y las 6 síntesis propuestas por el agente.
- 2026-11-23 · El botón «Descargas (4)» es una **desviación aceptada**: +2 palabras, +52 px en 360 px y un `<dialog>` más.
- 2026-11-23 · El pendiente «prompt de la ronda 3» se cierra con su descripción en la tabla 5.2.
- Agente: el 5.1 no dice «reemplazó a Argon», para que el criterio de `grep` quede limpio. Neon aparece como «desde el 18 de noviembre de 2026».

## Prompt avanzado publicado (B)

> Soy coordinador de proyectos en una empresa de telecomunicaciones. Escribe un correo para mi gerente explicando que la entrega del módulo de reportes se retrasa dos semanas por un cambio de proveedor. El objetivo es que apruebe la nueva fecha. Mi gerente tiene poco tiempo y necesita decidir con claridad. Máximo 150 palabras, tono profesional y directo. Estructura: situación, causa, impacto, propuesta y pregunta de aprobación. No culpes al proveedor. Estará bien si se lee en menos de un minuto y la pregunta de aprobación se responde con un sí o un no. Antes de redactar, hazme las preguntas que necesites.

Puntaje con la rúbrica, según el análisis del agente:

| Tarea | Persona y audiencia | Contexto | Formato | Restricciones | Total |
| :---: | :-----------------: | :------: | :-----: | :-----------: | :---: |
| 2 | 2 | 1 | 2 | 2 | **9** |

El avanzado de v5 sumaba 7 en lectura estricta. Los candidatos A (7 u 8) y C (10) no se eligieron.

## Síntesis aprobadas

| Bloque | Campo | Texto | Palabras (límite) |
| :----- | :---- | :---- | :---------------: |
| 2 | haras | Distinguirás alucinaciones, sesgos, tareas delegables y reglas de privacidad de tu cuenta. | 12 (12) |
| 2 | clave 2 | Con cualquier cuenta usa solo datos ficticios o públicos. | 9 (10) |
| 3 | resumen | Ubica la app de Gemini, el panel en Workspace, Gemini Notebook, AI Studio y Workspace Studio, y comprueba tu sesión con la cuenta del curso. | 25 (25) |
| 3 | haras | Verificarás tu sesión con la cuenta del curso y qué modelos ves. | 12 (12) |
| 3 | clave 2 | Tu selector puede mostrar otros modelos que el del instructor. | 10 (10) |
| 5 | resumen | Recorre la app de Gemini y sus modelos, resuelve tres tareas con la rúbrica de 0 a 10 y guarda tu plantilla. | 22 (25) |

`pnpm build` valida estos límites con Zod y no dio errores.

## Verificación

Todo lo que sigue lo verificó el agente.

Método: `pnpm build`, `pnpm preview` en el puerto 4329 y Playwright (`playwright-core` solo en el scratchpad) con el Chrome del sistema. Las palabras se miden con el fragmento F3 de la 06-06: `innerText.split(/\s+/).filter(w=>/[\p{L}\d]/u.test(w)).length`.

| Medición | Antes (línea base) | Después |
| :------- | :----------------: | :-----: |
| `pnpm build` / `pnpm astro check` | sin errores / 0 | sin errores ni advertencias / 0 errores, 0 advertencias, 0 sugerencias |
| Guardia de marcadores | 0 | 0 |
| Palabras U1 / U2 / U3 / U4 (`innerText`) | 294 / 316 / 354 / 305 | **297** / 316 / 354 / 305 |
| Alto de la U1 en 1440 × 900 | 823 px | 823 px |
| Alto de la captura de la U1 en 360 px | 2329 px | 2405 px (+76: +52 del botón «Descargas (4)» y +24 de una línea más en la tarjeta del bloque 3) |
| `<dialog>` | 54 | 55 (`modal-u1-descargas`) |
| Prompts (`data-copiar`) | 24 | 25 |
| `h1` | 1 | 1 |
| Descargas en la U1 | 0 | 4 (PDF 192,9 KB; PDF 370,0 KB; CSV 25,4 KB; Markdown 1,4 KB); los 2 PDF responden 200 en `pnpm preview` |
| JS propio | 1774 B gzip | sin cambios (no se tocaron scripts ni componentes) |

- `grep -rn "Flash-Lite\|Argon\|Keep Activity" src/content/bloques/u1 src/content/unidades/u1.yaml`: sin resultados (código 1).
- `gemini-4-argon` ya no está en `u1.yaml` ni en el `profundiza` del bloque 5. Sigue en `recursos.yaml`, `u2.yaml` y `u2/bloque-1.md`.
- Tabla 5.2: 6 filas que suman 60 min.
- Capturas de la U1 en 360 y 1440 px, claro y oscuro: misma estructura que la línea base (cabecera, 5 tarjetas y «Terminado cuando…»). El único elemento nuevo es el botón «Descargas (4)».
- `git diff --stat`: solo `src/content/` y `_planificacion/`.

## Criterios de aceptación

- [x] Build sin errores ni marcadores (guardia: 0).
- [x] Sin Google AI Plus ni cuenta personal pedidos al participante; `grep` sin resultados.
- [x] 3 prompts en el bloque 4; el avanzado suma 9.
- [x] Tabla 5.2 de 6 pasos que suman 60.
- [ ] 4 descargas y los 2 PDF abren **en el sitio publicado**: en local sí (200); en producción falta comprobarlo después del merge y el despliegue.
- [x] Revisión en 3 pasos y Mapa de oportunidades en el bloque 5.
- [x] Sin cambios de diseño; las capturas coinciden en estructura.
- [x] Síntesis dentro de sus límites, con la aprobación del desarrollador registrada.

## No se pudo verificar

- Los 2 PDF en producción: el despliegue lo hace el desarrollador.
- Teclado y lector de pantalla en el nuevo modal de descargas: es el mismo componente que usan las otras unidades y no se revisó a mano.

## Revisión manual del desarrollador

- `pnpm preview`: abrir «Descargas (4)» de la U1 y los 2 PDF; leer los modales de los bloques 2, 3, 4 y 5.
- Después del despliegue, comprobar que los 2 PDF responden en la URL publicada.

## Pendientes y riesgos

- Selector de la cuenta del curso (modelos y Double-check) y enlace de Neon: quedan como pendientes del desarrollador en `registro-pendientes.md`.
- Los modelos pueden cambiar antes de la clase: revisar la página oficial el día anterior y ajustar solo el 5.1.
- La U1 queda a 3 palabras del límite de 300 (RDA-012).

## Revisión

- **Resultado frente al objetivo:** cumplido en local. Falta comprobar los PDF en producción.
- **Qué aprendimos:**
  - Con la rúbrica en lectura estricta, el avanzado de v5 no llegaba a 8: le faltaba un criterio de calidad explícito.
  - Agregar descargas a una unidad suma un botón y un `<dialog>`, y conviene preverlo en las métricas de la 07-02 a la 07-04.
  - El hook de documentos bloquea los scripts de Bash que nombran archivos `.md`. Para editar contenido conviene usar Edit.
- **Qué cambia para lo que sigue:** las métricas vigentes pasan a 55 `<dialog>` y 25 prompts.

## Commit sugerido

`Épica 7 - Iteración 07-01: U1 con cuenta del curso, modelos vigentes, privacidad, prompt avanzado, laboratorio de 6 pasos y 4 descargas`
