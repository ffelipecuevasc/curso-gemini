# Épica 03 · Unidades del curso

- **Estado:** Pendiente
- **Objetivo:** presentar en la página las cuatro unidades ya cargadas en las colecciones (épica 02), con sus bloques, prompts copiables y lista de terminado, y completar lo pendiente: descargas, videos oficiales de Google y textos de «Profundiza en tu tiempo».

## Alcance

1. Componentes de la sección de unidad: encabezado, tabla de bloques, bloque de prompt con botón «Copiar», «Profundiza» plegable, enlace a recurso externo y tarjeta de descarga.
2. Presentación de la U1, la U2, la U3 y la U4 desde las colecciones cargadas en la épica 02 (no se vuelven a cargar), más lo pendiente de cada una: textos de «Profundiza», enlaces a videos oficiales y descargas.
3. Archivos de descarga en `public/descargas/`.

## Fuera de alcance

- Guardar en el navegador el avance de las listas de terminado (no se pidió; queda como propuesta si se necesita).
- Incrustar videos de YouTube: solo enlaces.

## Iteraciones

| Iteración | Nombre |
| :-------- | :----- |
| 03-01 | Componentes de unidad y botón de copiar |
| 03-02 | Unidad 1 · presentación y pendientes |
| 03-03 | Unidad 2 · presentación y pendientes |
| 03-04 | Unidad 3 · presentación y pendientes |
| 03-05 | Unidad 4 · presentación y pendientes |

> Las iteraciones se detallan al cerrar la épica 02 (02-06). Si una unidad no cabe en el tamaño máximo, se parte al proponerla.
> Actualización 2026-11-17: el contenido de las unidades (fichas, bloques con su texto, prompts y recursos) se carga en la épica 02. La épica 03 lo presenta y completa solo lo pendiente.

## Decisiones de la épica

- Avance de cada unidad según RDA-008: U1 0–25, U2 25–50, U3 50–75, U4 75–100, ya cargado en la ficha de cada unidad (02-02).
- El texto «Para la clase» de cada bloque se muestra con `render()` de la colección `bloques` (RDA-009).
- Mostrar el kit de marca de GTD (HEX aproximados) y su logo depende de la autorización del cliente abierta en el registro.
- Los componentes de la 03-01 resuelven cada recurso y descarga con `getEntry` y lanzan un error si no existe, para que `pnpm build` falle (bitácora 01-04).
- Actualización 2026-11-17 (02-05): `comprobarReferencias()` de `src/lib/unidades.ts` ya valida al compilar los recursos y las descargas de cada ficha; la 03-01 no lo repite.
- Actualización 2026-11-17 (02-05): en U2 · bloque 3, «Ejemplo de estructura:» queda sin el código, que es el prompt `identidad-visual-gtd`; la épica 03 debe mostrar ese prompt junto a ese paso.

## Criterio de término

- Las cuatro unidades están en la página sin marcadores `PENDIENTE_` visibles, o con su ausencia acordada con el desarrollador.
- Cada prompt se copia con el botón y con el teclado, y su texto copiado es idéntico al del documento del curso.
- Cada descarga responde con su archivo y cada enlace externo abre la página indicada.

## Cierre

- **Bitácora de cierre:** —
