# Bitácora 07-03 · Unidad 3: dos mitades, cuenta corporativa, fecha neutral y prácticas de la Guía completa

- **Fecha:** 2026-11-24
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/07-03-unidad-3 (creada por el agente desde `main` en `2c8d854`, con aprobación del desarrollador; incluye los 2 PDF de la U3, que no tenían commit)
- **Estado final:** En revisión

## Resumen

La U3 dice ahora lo que el instructor enseñará el 2026-11-30:

- es una clase de dos mitades: 55 min de explicación y demostraciones y 65 min de práctica, sin holgura;
- usa la cuenta corporativa de GTD;
- habla de la fecha de vigencia de la ley sin afirmarla: el participante la contrasta en sus fuentes;
- cada práctica remite a su ejercicio de la Guía completa;
- publica 9 prompts y ofrece 2 descargas y 2 recursos nuevos;
- la entrega es por correo, solo al instructor.

No hay cambios de diseño, componentes, JavaScript, dependencias ni esquema. En la misma pasada quedan como Terminadas la 07-02 y las correcciones 38 a 40, según lo dicho por el desarrollador el 2026-11-24.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `public/descargas/u3-guia-completa.pdf`, `u3-ley-21719.pdf` | Entran a git con esta iteración (los entregó el desarrollador) |
| `src/content/unidades/u3.yaml` | Sale `holguraMin`. Cambian `miniProyecto.descripcion` (sin la fecha), `entregable` y `terminadoCuando` (7 ítems). Se suman 2 recursos y 2 descargas |
| `src/content/descargas.yaml` | `u3-guia-completa`, `u3-ley-21719` |
| `src/content/recursos.yaml` | `ley-21719-bcn`, `video-ley-21719-lawwwing` (rotulado como fuente no oficial) |
| `bloques/u3/bloque-0.md` | 5 + 0 min. Cuenta corporativa y línea sobre «cuadernos en Gemini». La tabla del kit pasa a ejercicios. Sale el carril alternativo |
| `bloques/u3/bloque-1.md` | 12 + 15. Práctica del ejercicio 1 con 3 fuentes base y plan B. «Profundiza» suma los 2 recursos. Salen «paquete del LMS» y el carril extra |
| `bloques/u3/bloque-2.md` | 9 + 13. Práctica del ejercicio 2. Entra `fecha-vigencia`; salen `comparacion-entre-fuentes`, `vacios-y-contradicciones` y el carril extra. Cambia el `haras` |
| `bloques/u3/bloque-3.md` | 10 + 12. Práctica del ejercicio 3 (mapa mental y cuestionario); audio e informe Interactivo quedan como demostración. Sale `resumen-en-audio`. «Ver el hito 4» pasa a «Ver el ejercicio 4». Cambian `resumen` y `haras` |
| `bloques/u3/bloque-4.md` | 10 + 12. La comparación A/B pasa a «Conceptos clave» como demostración. Práctica del ejercicio 4. Sale el carril extra. Cambian `resumen` y `haras` |
| `bloques/u3/bloque-5.md` | 9 + 11. Práctica del ejercicio 5 con el prompt insertado (antes el paso decía «Prompt en el chat:» sin nada). Salen `banco-de-preguntas`, «Armar el kit» y el carril extra. Cambian `resumen` y `haras` |
| `bloques/u3/cierre.md` | 0 + 2. Entrega por correo, reflexión de 4 preguntas y adelanto de la U4. 4 síntesis |
| `_planificacion/…/iteracion-07-03-unidad-3.md` | Iteración nueva |
| `_planificacion/…/definicion-epica-07.md` | 07-02 Terminada, 07-03 En revisión |
| `_planificacion/…/iteracion-07-02-unidad-2.md` | Estado Terminada |
| `_planificacion/00_producto/registro-pendientes.md` | Encabezado, filas 07-02 y 07-03, backlog 38 a 40, decisiones, propuesta e historial |

## Verificación

Método: `pnpm build`, `pnpm preview` en el puerto 4329 y `playwright-core` 1.49.1 instalado solo en el scratchpad, con el Chrome del sistema y movimiento reducido. Las palabras se miden con el fragmento F3 de la 06-06 (`innerText`).

| Medición | Línea base | Después |
| :------- | :--------: | :-----: |
| `pnpm build` / `pnpm astro check` | sin errores | sin errores / 0 errores, 0 advertencias |
| Guardia de marcadores | 0 | 0 |
| Palabras U1 / U2 / U3 / U4 | 297 / 325 / 354 / 305 | 297 / 325 / **349** / 305 |
| Alto de cada unidad en 1440 × 900 | 823 px | 823 px (claro y oscuro) |
| Alto de la U3 en 360 px | — | 2483 px (claro y oscuro) |
| `<dialog>` | 56 | 56 |
| Prompts (`data-copiar`) | 32 | 29 |
| `h1` | 1 | 1 |
| Descargas en la U3 | 0 | 2 |

- **Prompts contra el PDF:** texto extraído con `pdftotext -enc UTF-8` y espacios normalizados. 8 de 9 son idénticos. En `deep-research`, la línea del PDF se extrae dañada («protec i�n», «pr�cticas»). Coincide con el texto del sitio si esos 3 caracteres se tratan como comodines, pero el texto exacto no se pudo comprobar.
- **Descargas:** `u3-guia-completa.pdf` (200, 360 548 B, «PDF · 352,1 KB») y `u3-ley-21719.pdf` (200, 227 911 B, «PDF · 222,6 KB»), en ese orden bajo «Descargas (2)».
- **Recursos:** la U3 muestra «Recursos (11)»; las URL de BCN y del video aparecen 2 veces cada una (ficha y «Profundiza»).
- **Capturas:** 360 px y 1440 px, en claro y oscuro: misma estructura que las otras unidades, sin cambios de diseño.

## Criterios de aceptación

- [x] Build y check sin errores ni advertencias, con 0 marcadores.
- [x] Los minutos suman 120 = 55 + 65 (suma de `microcharlaMin` y `practicaMin` de los 7 archivos).
- [x] El grep de la iteración no devuelve resultados (código de salida 1).
- [ ] 9 prompts idénticos al PDF: 8 comprobados; `deep-research` solo con comodines (ver arriba).
- [x] «Descargas (2)» con guía y ley, ambas con 200, formato y peso.
- [x] Los 2 recursos nuevos aparecen con las URL entregadas.
- [x] `git diff --stat` solo toca `src/content/`, `public/descargas/` y `_planificacion/`.
- [x] Métricas reportadas (tabla).

## Diferencias entre lo planificado y lo encontrado

- **Palabras:** la línea base de la U3 es 354, no 253 como decía el encargo. La cifra coincide con las bitácoras 07-01 y 07-02. Después de la iteración son 349, todavía sobre 300 (backlog 33).
- **`holguraMin`:** el esquema no acepta 0, así que se quitó.
- **Prompts no insertados:** la U3 no usaba `<div data-prompt>`. Ahora los 9 prompts se insertan como en la U2.
- **Síntesis extra:** el `resumen` del bloque 4 hablaba de la presentación A como práctica. Se cambió con aprobación del desarrollador.

## No se pudo verificar

- El texto exacto de `deep-research` en el PDF (extracción dañada; no hay `pdftoppm` para ver la página como imagen).
- La navegación con teclado de los modales tocados y la revisión con lector de pantalla.
- Las 2 descargas en producción.

## Revisión manual del desarrollador

- Página 6 de la Guía completa: confirmar que el prompt dice «protección» y «prácticas» (la «c» de «protección» se extrae como espacio; podría ser un error real del PDF).
- Abrir con teclado los modales de los bloques 1 a 5 y del cierre, y probar «Copiar» en `fecha-vigencia`.

## Decisiones tomadas

Todas del desarrollador, del 2026-11-24:

- La iteración y la rama, tal como se propusieron.
- Los 2 PDF entran en la rama.
- La 07-02 y las correcciones 38 a 40 pasan a Terminadas.
- Se agregan los recursos de BCN y de Lawwwing.
- Las 11 síntesis (10 del encargo y el `resumen` del bloque 4).

## Pendientes y riesgos

- Backlog 33: la U3 tiene 349 palabras (límite 300).
- 29-11: confirmar en el Diario Oficial la postergación (la redacción neutral no cambia).
- Confirmar la dirección de entrada a Gemini Notebook con la cuenta de GTD y que esa cuenta pueda enviar correo con adjuntos a una dirección externa.
- Propuesta: revisar la cuenta en U1 y U2 («cuenta empresarial del curso») frente al dato de la cuenta corporativa de GTD.

## Revisión

- **Resultado frente al objetivo:** cumplido. La U3 sigue la Guía completa y no cambia de alto. Queda un criterio parcial (el prompt `deep-research`).
- **Qué aprendimos:** el hook de documentos bloquea las escrituras desde la shell con rutas relativas a `src/content/`; conviene editar con Edit. Algunas líneas de los PDF entregados no se extraen bien como texto.
- **Qué cambia para lo que sigue:** la 07-04 parte con la misma receta (prompts con `<div data-prompt>` y comparación con el PDF).

## Commit sugerido

`Épica 7 - Iteración 07-03: U3 en dos mitades, cuenta GTD, fecha neutral, 9 prompts de la Guía completa, 2 descargas, 2 recursos y entrega por correo`
