# Épica 03 · Unidades del curso

- **Estado:** En curso
- **Objetivo:** presentar en la página las cuatro unidades ya cargadas en las colecciones (épica 02), con sus bloques, prompts copiables y lista de terminado, y completar lo pendiente: descargas, videos oficiales de Google y textos de «Profundiza en tu tiempo».

## Alcance

1. Componentes de la sección de unidad: encabezado, tabla de bloques, bloque de prompt con botón «Copiar», «Profundiza» plegable, enlace a recurso externo y tarjeta de descarga.
2. Presentación de la U1, la U2, la U3 y la U4 desde las colecciones cargadas en la épica 02 (no se vuelven a cargar), más lo pendiente de cada una: textos de «Profundiza», enlaces a videos oficiales y descargas.
3. Archivos de descarga en `public/descargas/`.

## Fuera de alcance

- Guardar en el navegador el avance de las listas de terminado (no se pidió; queda como propuesta si se necesita).
- Incrustar videos de YouTube: solo enlaces.

## Iteraciones

| Iteración | Nombre | Estado |
| :-------- | :----- | :----- |
| 03-01 | [Sección de unidad y texto de los bloques](iteracion-03-01-seccion-unidad.md) | En revisión |
| 03-02 | [Prompts con «Copiar» y recursos externos](iteracion-03-02-prompts-recursos.md) | Pendiente |
| 03-03 | [Descargas y «Profundiza»](iteracion-03-03-descargas-profundiza.md) | Pendiente |
| 03-04 | [Pendientes de la Unidad 1 y la Unidad 2](iteracion-03-04-pendientes-u1-u2.md) | Pendiente |
| 03-05 | [Pendientes de la Unidad 3 y la Unidad 4](iteracion-03-05-pendientes-u3-u4.md) | Pendiente |

> Iteraciones aprobadas y generadas el 2026-11-17 al cerrar la épica 02 ([bitacora-02-cierre](../epica-02-portada-ruta-instructor/bitacoras/bitacora-02-cierre.md)): un solo componente guiado por los datos presenta las 4 unidades, en lugar de una iteración de presentación por unidad, y lo pendiente se agrupa por pares de unidades.

## Decisiones de la épica

- Avance de cada unidad según RDA-008: U1 0–25, U2 25–50, U3 50–75, U4 75–100, ya cargado en la ficha de cada unidad (02-02).
- El texto «Para la clase» de cada bloque se muestra con `render()` de la colección `bloques` (RDA-009).
- 2026-11-17: los prompts `identidad-visual-gtd` y `estilo-gtd` se muestran desde la 03-02 bajo responsabilidad del desarrollador, como el logo de GTD, sin campo de visibilidad; la autorización del cliente queda abierta en el registro como riesgo.
- 2026-11-17: «Profundiza» usa solo los recursos oficiales ya cargados; el texto propio es opcional en el modelo y no bloquea nada.
- 2026-11-17: el formato y el peso de las descargas se miden del archivo real al compilar (RDA-010, se registra en la 03-03).
- Actualización 2026-11-17 (02-05): `comprobarReferencias()` de `src/lib/unidades.ts` ya valida al compilar los recursos y las descargas de cada ficha; la 03-01 no lo repite.
- Actualización 2026-11-17 (02-05): en U2 · bloque 3, «Ejemplo de estructura:» queda sin el código, que es el prompt `identidad-visual-gtd`; la épica 03 debe mostrar ese prompt junto a ese paso.

## Criterio de término

- Las cuatro unidades están en la página sin marcadores `PENDIENTE_` visibles, o con su ausencia acordada con el desarrollador.
- Cada prompt se copia con el botón y con el teclado, y su texto copiado es idéntico al del documento del curso.
- Cada descarga responde con su archivo y cada enlace externo abre la página indicada.

## Cierre

- **Bitácora de cierre:** —
