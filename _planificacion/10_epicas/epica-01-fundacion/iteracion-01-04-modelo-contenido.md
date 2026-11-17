# Iteración 01-04 · Modelo de contenido

- **Épica:** 01 · Fundación y sistema de diseño
- **Estado:** En revisión
- **Rama sugerida:** iteracion/01-04-modelo-contenido
- **Depende de:** 01-01
- **RDA relacionadas:** RDA-003

## Objetivo

Definir las colecciones de contenido con sus esquemas, para que las unidades se carguen después como datos validados y no como texto en los componentes.

## Alcance y entregables

- `src/content.config.ts` (o el archivo de configuración de colecciones que use la versión de Astro instalada) con colecciones para unidades, bloques, prompts, recursos externos y descargas.
- Esquemas Zod que cubren lo que el documento del curso repite en cada unidad: número, título, clase, duración, nivel, avance (de y hasta, en %), objetivo, mini-proyecto, entregable, bloques (número, título, tipo, minutos), prompts (título y texto literal), «Profundiza» (texto y recursos), recursos externos (tipo documento o video, título, sitio y URL `https://`), descargas (archivo, formato y peso) y lista «Terminado cuando…».
- Un archivo de contenido de prueba mínimo que valida, y la comprobación de que uno inválido hace fallar la compilación.

## Tareas

1. Leer en `unidades-del-curso.md` (lo entrega el desarrollador) la estructura que se repite en las cuatro unidades y proponer en el chat el modelo de colecciones antes de escribirlo.
2. Crear la configuración de colecciones con sus esquemas.
3. Validar que las URL de recursos sean `https://` y que el avance esté entre 0 y 100.
4. Crear un contenido de prueba mínimo de una unidad ficticia marcada como prueba.
5. Comprobar que un campo obligatorio faltante hace fallar `pnpm build`, y revertir el cambio.
6. Ejecutar `pnpm build` y `pnpm astro check`.

## Criterios de aceptación

- [x] El modelo propuesto en la tarea 1 está aprobado por el desarrollador y anotado en la bitácora. (Aprobado en el chat «tal cual»; anotado en la bitácora 01-04.)
- [x] `pnpm build` falla con un mensaje que nombra el campo cuando falta uno obligatorio, y pasa cuando el contenido es válido. (Sin `objetivo`: `unidades → prueba … objetivo: Required` y el build se detiene; con el archivo restaurado: «Complete!».)
- [x] Un recurso con URL `http://` hace fallar la compilación. (`recursos → prueba-documento … url: La URL debe empezar con https://`.)
- [x] Los tipos de las colecciones están disponibles en los componentes (`pnpm astro check` sin errores al leer una colección desde `index.astro`). (Lectura temporal con `getCollection("unidades")`: 0 errores; asignar `numero` a un `string` da `ts(2322)`, lo que prueba que el tipo llega. La lectura se revirtió.)

## Fuera de alcance

- Cargar el contenido real de las unidades (épica 03).

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- `unidades-del-curso.md` disponible en el repositorio o en la sesión para leer su estructura.
- Aprobación del modelo de colecciones (tarea 1).
