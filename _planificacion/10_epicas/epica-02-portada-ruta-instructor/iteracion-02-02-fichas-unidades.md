# Iteración 02-02 · Fichas de las unidades y modelo de bloques

- **Épica:** 02 · Portada, ruta del curso e instructor
- **Estado:** Pendiente
- **Rama sugerida:** iteracion/02-02-fichas-unidades
- **Depende de:** 02-01
- **RDA relacionadas:** RDA-003, RDA-008 · crea RDA-009

## Objetivo

Cargar la ficha real de las 4 unidades y sus bloques (un archivo `.md` por bloque, todavía sin el texto «Para la clase») con el modelo de contenido nuevo, y eliminar el contenido de prueba.

## Punto de partida

- `src/content.config.ts`: la colección `unidades` (YAML) guarda dentro de cada unidad sus `bloques`, `prompts` (con número de bloque) y `profundiza`; el bloque no tiene campo para su texto.
- `src/content/unidades/prueba.yaml`, la entrada `prueba-documento` de `recursos.yaml` y la entrada `prueba-descarga` de `descargas.yaml` son ficticias (01-04).
- Hallazgo de la 01-04: `reference()` no hace fallar el build si la entrada referida no existe; se resuelve con `getEntry` y un error explícito.
- `unidades-del-curso.md` (v5) trae por unidad: encabezado (clase, minutos, nivel), objetivo, mini-proyecto, tabla de bloques, el texto de cada bloque y la lista «Terminado cuando…». El entregable de cada unidad está en la tabla «1. Resumen».

## Alcance y entregables

- **Modelo nuevo (RDA-009):**
  - `unidades` (YAML): `numero`, `titulo`, `clase`, `duracionMin`, `nivel`, `avance`, `objetivo`, `miniProyecto`, `entregable`, `terminadoCuando`, `recursos`, `descargas`. Sin `bloques` ni `prompts`.
  - `bloques` (nueva, archivos `.md` con cargador `glob`): datos arriba (`unidad` como referencia a `unidades`, `numero`, `titulo`, `minutos`, `tipo` o `microcharlaMin` + `practicaMin`, `prompts`, `profundiza`) y el texto «Para la clase» como cuerpo Markdown, que Astro muestra con `render()` sin dependencias nuevas.
  - Los prompts pasan a los datos de su bloque (sin número de bloque que validar); el texto sigue siendo literal.
- Un módulo en `src/lib/` que entrega cada unidad con sus bloques ordenados y lanza un error (y por lo tanto hace fallar `pnpm build`) si un bloque apunta a una unidad inexistente, si dos bloques de una unidad repiten número o si una unidad queda sin bloques.
- Las 4 fichas en `src/content/unidades/` y un archivo por bloque en `src/content/bloques/`, con el cuerpo vacío (se llena en 02-05 y 02-06).
- Contenido de prueba eliminado.
- RDA-009 y actualización de la RDA-008 en `decisiones.md`.

## Decisiones del desarrollador

- 2026-11-17: la épica 02 carga las 4 unidades reales con todo lo que trae el documento; la épica 03 solo las presenta y completa lo pendiente (descargas, videos, «Profundiza»).
- 2026-11-17: el texto de cada bloque va en un `.md` por bloque (colección `bloques`), con RDA-009.
- 2026-11-17: solo se carga el **título completo** de cada unidad, tal como está en el documento (sin campo de título corto).
- 2026-11-17: se copia literal lo que es para participantes y se omite lo que es solo para el instructor, sin reescribir; las omisiones se listan en la bitácora.
- 2026-11-17: avance según RDA-008 (U1 0–25, U2 25–50, U3 50–75, U4 75–100).
- Esta iteración autoriza eliminar `src/content/unidades/prueba.yaml` y las entradas de prueba de `recursos.yaml` y `descargas.yaml` (`AGENTS.md`, sección 7, pide consulta para eliminar: queda dada aquí).

## Tareas

1. Proponer en el chat, antes de escribir: los esquemas de `unidades` y `bloques`; la ruta y el nombre de los archivos de bloque (por ejemplo `src/content/bloques/u1/bloque-1.md`); el tratamiento de las filas sin número de las tablas («Vitrina y cierre» de U2 y U3, «Cierre del bootcamp» de U4) y de «Holgura» de U1; y cómo se limpian las marcas Markdown (`**`) en los campos de texto simple. Esperar la aprobación y anotarla en la bitácora.
2. Actualizar `src/content.config.ts` con el modelo aprobado: objetos estrictos, `unidad` como `reference("unidades")`, regla «`tipo` o `microcharlaMin` + `practicaMin`» y suma de minutos igual a `minutos` (se conserva la de la 01-04).
3. Crear el módulo de `src/lib/` con las tres comprobaciones del alcance, resolviendo la unidad de cada bloque con `getEntry`.
4. Cargar las 4 fichas con los datos literales del documento: título completo, clase, duración, nivel, avance (RDA-008), objetivo, mini-proyecto (título y descripción), entregable (tabla «1. Resumen») y «Terminado cuando…» sin las casillas `- [ ]`. `recursos` y `descargas` quedan vacíos.
5. Crear los archivos de bloque de las 4 unidades con número, título, minutos y tipo o reparto, tomados de las tablas de cada unidad. Cuerpo vacío.
6. Eliminar `prueba.yaml` y las entradas de prueba de `recursos.yaml` y `descargas.yaml` (dejar ambos archivos válidos y vacíos, con su comentario de cabecera).
7. Comprobar que `pnpm build` falla con un mensaje claro en tres casos (bloque con unidad inexistente, número de bloque repetido, unidad sin bloques) y revertir cada prueba.
8. Registrar la RDA-009 y la actualización de la RDA-008 («el contenido de prueba se reemplazó en la 02-02, no en la épica 03»); ejecutar `pnpm build` y `pnpm astro check`; escribir la bitácora y actualizar el registro.

## Criterios de aceptación

- [ ] El modelo de la tarea 1 está aprobado por el desarrollador y anotado en la bitácora.
- [ ] Hay 4 fichas y un archivo por bloque; el número de bloques por unidad, sus títulos y sus minutos coinciden con las tablas del documento (tabla de comparación en la bitácora).
- [ ] Cada `titulo` es el título completo del documento y cada `avance` es el de la RDA-008.
- [ ] `pnpm build` falla con un mensaje que nombra el problema en los tres casos de la tarea 7, y pasa con el contenido válido.
- [ ] No queda contenido de prueba: búsqueda de «prueba» en `src/content/`: 0 coincidencias de datos (solo pueden quedar comentarios que expliquen el archivo).
- [ ] Ningún archivo de `src/content/` contiene `PENDIENTE_` ni `VERIFICAR` (búsqueda: 0 coincidencias).
- [ ] La RDA-009 y la actualización de la RDA-008 están en `decisiones.md`, con la tabla índice al día.
- [ ] `pnpm build` y `pnpm astro check` sin errores ni advertencias nuevas; la página se ve igual que al cerrar la 02-01 (esta iteración no cambia la interfaz).

## Riesgos

- Un cargador `file` con una lista vacía puede emitir una advertencia. Si pasa, se anota y se propone cómo evitarla (por ejemplo, no declarar la colección hasta la épica 03), sin cambiar el criterio de «sin advertencias nuevas» por cuenta propia.
- Trasladar las tablas a mano puede introducir errores de minutos: la tabla de comparación de la bitácora es la defensa.

## Fuera de alcance

- El texto «Para la clase», los prompts y los recursos de cada bloque (02-05 y 02-06).
- Mostrar las fichas en la página (la ruta es la 02-03; las secciones de unidad, la épica 03).
- Descargas y «Profundiza en tu tiempo» (épica 03).

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Aprobación del modelo de la tarea 1.
