# Épica 06 · Pulido de identidad: portada, unidades y modales

- **Estado:** Reabierta (2026-11-23) para la 06-07 y la 06-08; cerrada antes el 2026-11-22
- **Objetivo:** que el sitio se vea propio y no de plantilla: una portada con firma, unidades con jerarquía clara entre lo que se lee y lo que se hace, modales que se leen como contenido, y una trama de puntos de fondo que une todo. Sin salir de la paleta, las tipografías ni los radios de felipecuevas.dev (RDA-004) y sin perder la unidad en una pantalla de la épica 05.

## Por qué existe esta épica

Diagnóstico del 2026-11-21, hecho con la skill Impeccable (crítica de diseño y detector) sobre el sitio publicado (`https://curso-gemini.felipe-cuevas.workers.dev/`) y el repositorio compilado en local, con capturas en 1440 × 900 (ambos modos) y 390 × 844. Puntaje de las heurísticas de Nielsen: 24 de 36 (la 9 no aplica).

1. **Las barras de avance prometen un estado que no existe.** «0 % → 25 %» dibujado como barra de progreso se lee como «llevas 0 %», pero es el tramo fijo de la unidad (RDA-008) y el sitio no guarda nada. Es la única señal de estado de la página y no se cumple.
2. **Las 4 unidades son la misma pieza repetida.** Cabecera de color más una cuadrícula 3 × 2 de tarjetas con el mismo peso: el «Laboratorio» de 65 min se ve igual que la «Bienvenida» de 5 min, y «Terminado cuando…» parece un bloque más.
3. **Ruido de botones.** Cada tarjeta lleva 1 o 2 píldoras de contorno iguales; son unas 40 en la página y ninguna dice cuál importa. El prompt, que es la entrega del curso, aparece como botón secundario.
4. **Portada genérica.** El `h1` repite el nombre del curso sin una segunda voz, queda un vacío bajo las redes, la estrella de Gemini flota sobre el círculo como adorno y en móvil queda huérfana entre la portada y la ruta. En las tarjetas de la ruta, el mini-proyecto de la U3 se corta en «Le…» (`line-clamp-2`) y se pierde «Ley 21.719».
5. **Modal plano.** El resumen se escribe en `--color-texto-2` a 18 px y se lee como enlace, «5 min» queda suelto en medio del texto y el título repite «Detalle ·» en todos los modales.
6. **Detalles de acabado.** El borde superior de color sobre la tarjeta redondeada forma una curva («sonrisa»); la cita (`blockquote`) usa un borde izquierdo de 4 px, el único hallazgo del detector (`side-tab`, `global.css:404`).

La vista previa con todos los cambios se armó en una rama local y el desarrollador la aprobó el 2026-11-21 con un ajuste: una trama de puntos elegante como fondo. Esa rama y su parche ya no existen (dicho por el desarrollador el 2026-11-22) y no son fuente de implementación: cada iteración implementa desde su propio «Alcance y entregables» y mide su línea base en su Fase 1 (la tarea 1 de línea base). Las cifras medidas en la vista previa que citan estos documentos son referencia histórica, no reproducible.

## Alcance

1. Trama de puntos de fondo en ambos modos, derivada de los tokens de color.
2. Portada con el título más firme, el lema como segunda voz en `--color-primario`, la ficha del curso en IBM Plex Mono calculada del contenido, los logos de Google, GTD y Capacita bajo las redes y la estrella de Gemini junto al título de la ruta.
3. Retiro de las barras de avance (RDA-013): la ruta y la cabecera de cada unidad muestran «Clase n de 4 · 120 min» y el número de la unidad en grande (Sora 700).
4. Tarjeta de bloque con marca recta del color de la unidad, la tarjeta entera abriendo el detalle (enlace «Ver detalle» con flecha) y un solo botón de contorno para los prompts; «Terminado cuando…» como ticket de entrega.
5. Modal con el título del bloque sin «Detalle ·», una fila de datos en IBM Plex Mono («Bloque 1 · 5 min · Unidad 1») y el resumen como entradilla; citas como panel suave con la esquina asimétrica.
6. Verificación final y propuestas de `DESIGN.md` para que el documento describa el sitio publicado.

## Fuera de alcance

- Cambiar la paleta, las tipografías, los radios o el estilo «Moderno y creativo» (RDA-004).
- Guardar el avance del participante o las casillas de «Terminado cuando…» en el navegador (sigue como propuesta fuera de alcance del registro). El desarrollador eligió quitar las barras en lugar de darles avance real.
- Mosaico de tarjetas proporcional a los minutos, línea de metro en la ruta, buscador de prompts y botón «Copiar prompt» directo en la tarjeta (ideas de la crítica del 2026-11-21 que el desarrollador dejó fuera).
- Contenido nuevo del curso: la ficha del curso se calcula de lo que ya existe y ningún texto de bloque cambia.
- Borrar el campo `avance` del esquema de `unidades`: se conserva sin mostrarse (RDA-013).
- Dependencias nuevas y JavaScript nuevo.
- Cambios en los logotipos o en sus SVG.

## Iteraciones

| Iteración | Nombre | Estado |
| :-------- | :----- | :----- |
| 06-01 | [Trama de puntos de fondo](iteracion-06-01-trama-puntos.md) | Terminada |
| 06-02 | [Portada y ruta con firma](iteracion-06-02-portada-ruta.md) | Terminada |
| 06-03 | [Cabecera de unidad sin barra de avance](iteracion-06-03-cabecera-unidad.md) | Terminada |
| 06-04 | [Tarjetas de bloque y ticket de entrega](iteracion-06-04-tarjetas-bloque.md) | Terminada |
| 06-05 | [Modales y citas](iteracion-06-05-modales.md) | Terminada |
| 06-06 | [Verificación final del pulido](iteracion-06-06-verificacion.md) | Terminada |
| 06-07 | [Recorrido de la página: instructor primero, ruta como índice, unidades en salas y firma del OTEC](iteracion-06-07-recorrido-instructor-ruta-salas.md) | Terminada |
| 06-08 | [Efectos de movimiento: entrada de la portada, unidades que se encienden y navegación continua](iteracion-06-08-efectos-movimiento.md) | En revisión |

> Iteraciones 06-01 a 06-06 generadas el 2026-11-21 a pedido del desarrollador, después del cierre de la épica 05 y de aprobar la vista previa. La 06-07 se agregó el 2026-11-23, al reabrir la épica (RDA-014, P-029), y la 06-08 el mismo día, después de la sesión de efectos (P-031).

Orden y dependencias:

```text
06-01 ──► 06-02 ──► 06-03 ──► 06-04 ──┐
  │                                   ├──► 06-06
  └──────────────────────► 06-05 ─────┘
```

- La 06-01 va primero porque es la más pequeña, cambia el fondo de toda la página y las demás se revisan ya sobre la trama.
- La 06-02 va antes de la 06-03 porque las dos retiran `BarraAvance.astro`: la portada deja de usarla y la cabecera borra el componente.
- La 06-04 va después de la 06-03, porque el presupuesto de alto de la unidad (1440 × 900) se mide con la cabecera nueva.
- La 06-05 solo depende de la 06-01; se puede hacer antes de la 06-02 si conviene, siempre que no se mezcle con otra iteración. Si va después de la 06-04, revisa que la transición de tarjeta a modal salga desde la tarjeta clicable.

## Decisiones de la épica

- 2026-11-21: alcance «refinar dentro de `DESIGN.md`»: mismos tokens, tipografías y componentes, con mejor jerarquía y detalle (decisión del desarrollador, sobre la crítica de Impeccable).
- 2026-11-21: las barras de avance se quitan y se reemplazan por «Clase n de 4 · 120 min»; el sitio no guarda avance (decisión del desarrollador; RDA-013 propuesta ese día y aceptada el 2026-11-22).
- 2026-11-21: vista previa aprobada con un ajuste: trama de puntos elegante como fondo (decisión del desarrollador).
- 2026-11-21: prioridad de trabajo de la crítica: primero portada y modales; las tarjetas de bloque van dentro de la épica, pero sin cambiar la cuadrícula 3 × 2 (decisión del desarrollador).
- 2026-11-22: RDA-013 aceptada (decisión del desarrollador).
- 2026-11-22: la rama y el parche de la vista previa ya no existen; ninguna iteración depende de ellos (dicho por el desarrollador).
- 2026-11-22: el criterio de Lighthouse pasa a «mediana de 3 corridas, con tolerancia de 2 puntos por categoría respecto del cierre de la épica 05; CLS < 0,1» (decisión del desarrollador).
- 2026-11-22: 06-01 terminada; revisión visual sin observaciones (dicho por el desarrollador).
- 2026-11-22: opción A para la portada en 1366 × 657: la columna de texto cabe y la ruta se desplaza (la última tarjeta termina hacia los 803 px; antes de la 06-02, 807 px). No se reducen la estrella, el título ni los espaciados (decisión del desarrollador).
- 2026-11-22: 06-04 terminada; el borde del ticket queda como está (dicho por el desarrollador).
- 2026-11-22: en la 06-05, el bloque 0 («Antes de empezar», U2 a U4) muestra «Bloque 0 · m min · Unidad u», según el texto aprobado; queda como duda para el desarrollador.
- 2026-11-22: 06-05 terminada (revisión sin observaciones, dicho por el desarrollador). La meta del bloque 0 pasa a «Antes de empezar · {minutos} min · Unidad {unidad}» (decisión del desarrollador; aplicada en la 06-06).
- 2026-11-22: la trama se queda y se juzga con la medición publicada (99/100/100/100); F3 (palabras de U2 a U4 sobre 300) queda como desviación aceptada; épica cerrada (decisiones del desarrollador).
- 2026-11-23: la épica se reabre para la 06-07 (recorrido de la página): instructor como credencial después de la portada, ruta como índice, unidades en salas y pie con la firma del OTEC, en una sola iteración de 8 tareas como excepción de tamaño (decisiones del desarrollador; RDA-014 y P-029, aplicada en `main` en `e489e64`).
- 2026-11-23: en la 06-07 se aceptan como desviaciones la portada en 1366 × 657 (cabe la ruta, no la columna de texto) y la U1 en 1366 × 657 (+39 px) (decisiones del desarrollador; P-030 pendiente).
- 2026-11-23: la épica sigue reabierta para la 06-08 (efectos de movimiento E1, E2a, E4, E7, E8, E10 y E11, en CSS nativo y sin JavaScript nuevo); la 06-07 queda Terminada con su merge en `main` (`b281ecf`), y su Lighthouse publicado va en el cierre de la 06-08 (decisiones del desarrollador; P-031 aplicada en `f3529ea`, P-032 pendiente). El cierre de la épica pasa a `bitacora-06-cierre-06-08.md`.

## Reglas comunes de la épica

- Ninguna iteración cambia la paleta, las tipografías ni los radios; el token nuevo (`--color-puntos`) se deriva de los colores existentes con `color-mix()`.
- Ninguna iteración agrega JavaScript ni dependencias: la tarjeta clicable reutiliza el script de modales de la 05-04 (`data-abrir-modal`).
- Sin JavaScript, la página se lee completa en modo claro (RDA-007) y no queda ningún botón sin función; los botones que abren modales siguen ocultos sin JavaScript (RDA-011).
- Cada cambio de interfaz que contradiga `DESIGN.md` se implementa solo con su propuesta aplicada por el desarrollador (P-023 a P-027).
- La unidad sigue cabiendo en 1440 × 900 (criterio de la épica 05); toda iteración que toque la unidad mide su alto con el fragmento de la 05-08.
- Los textos de interfaz nuevos son los de «Contenido aprobado» de cada iteración, copiados tal cual.
- Ninguna iteración usa la vista previa como fuente: implementa desde su «Alcance y entregables» y mide su línea base en su Fase 1 (tarea 1), antes de tocar el código.

## Precondiciones

- Épica 05 cerrada (2026-11-21).
- RDA-013 aceptada por el desarrollador antes de la 06-02 (aceptada el 2026-11-22).
- Propuestas aplicadas por el desarrollador antes de la iteración que las necesita: P-023 antes de la 06-01; P-024 antes de la 06-02; P-025 antes de la 06-03; P-026 antes de la 06-04; P-027 antes de la 06-05.

## Criterio de término

- Trama de puntos visible en ambos modos, quieta al desplazarse y ausente al imprimir; ningún texto baja de su contraste de la tabla 2.3 de `DESIGN.md` (medido sobre un punto y entre puntos).
- En 1440 × 900, título, lema, ficha, botón principal y las 4 tarjetas completas se ven sin desplazarse; en 1366 × 657 cabe la columna de texto y la ruta se desplaza (la última tarjeta termina hacia los 803 px).
- 0 barras de avance en `dist/index.html` (`grep -c "Avance del curso" dist/index.html` = 0) y `BarraAvance.astro` borrado; el tramo de la barra de lectura de 3 px se conserva.
- En 1440 × 900, cada `section` de unidad mide como máximo el alto de la ventana menos el encabezado (`getBoundingClientRect()`, ambos modos); en 1366 × 657, como máximo 8 px más que al cierre de la 05 (vista previa: +8 px; referencia histórica, no reproducible: se vuelve a medir en la Fase 1 de la 06-02 y la 06-03).
- Botones de contorno visibles en las tarjetas de bloque: como máximo 1 por tarjeta (conteo con `document.querySelectorAll('.tarjeta .boton-contorno')`).
- Detector de Impeccable sin hallazgos sin resolver ni justificar (hoy: 1, `side-tab`).
- JavaScript propio sin cambios respecto del cierre de la 05 (1774 B gzip).
- Lighthouse móvil sobre la URL publicada: mediana de 3 corridas, con tolerancia de 2 puntos por categoría respecto del cierre de la épica 05; CLS < 0,1.

## Cierre

Al cerrar la épica se escribe `bitacoras/bitacora-06-cierre.md`, con la revisión al cierre. Aquí solo se enlaza.

- **Bitácora de cierre:** [bitacora-06-cierre](bitacoras/bitacora-06-cierre.md)
