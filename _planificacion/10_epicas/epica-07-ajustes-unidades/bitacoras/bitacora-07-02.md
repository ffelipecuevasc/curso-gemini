# Bitácora 07-02 · Unidad 2: estructura en dos mitades, cuenta, modelos y prácticas del Cuaderno

- **Fecha:** 2026-11-23
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/07-02-unidad-2 (creada por el desarrollador desde `main` en `c8106d3`, que ya incluye la 07-01 y los 4 archivos de descarga de la U2)
- **Estado final:** En revisión

## Resumen

La U2 dice ahora lo que el instructor enseñará el 2026-11-25:

- es una clase de dos mitades: 55 min de explicación y demostraciones y 65 min de práctica;
- usa la cuenta del curso y los modelos vigentes;
- cada práctica resume su actividad del Cuaderno y trae su mínimo viable;
- los 12 prompts son idénticos a los del Cuaderno;
- la entrega es por correo, solo al instructor;
- la unidad ofrece 6 descargas.

No hay cambios de diseño, componentes, JavaScript, dependencias ni esquema. La única línea de código es `".png": "PNG"` en `src/lib/descargas.ts`.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `src/content/bloques/u2/bloque-0.md` | Minutos 9 (5 + 4), brief con kit y logo, «Cómo funciona la clase» y práctica de la Actividad 0 |
| `src/content/bloques/u2/bloque-1.md` | Minutos 18 (8 + 10), selector con Auto, Hydrogen, Neon y Carbon, práctica de la Actividad 2, prompts `analisis`, `repetir` y `tabla` (sale `carril-base`), sin `gemini-4-argon`, 2 síntesis |
| `src/content/bloques/u2/bloque-2.md` | Minutos 21 (10 + 11), cuenta del curso, límites, práctica de las Actividades 1 y 3, prompt `deep-research` completo |
| `src/content/bloques/u2/bloque-3.md` | Minutos 22 (12 + 10), regla del PNG, línea «Bloque de marca», práctica de la Actividad 4, video solo como demostración, 4 prompts (`identidad-visual-gtd` sin `<svg>`), sale el carril extra, 2 síntesis |
| `src/content/bloques/u2/bloque-4.md` | Minutos 17 (7 + 10), práctica de la Actividad 5, 2 prompts del Cuaderno |
| `src/content/bloques/u2/bloque-5.md` | Minutos 20 (9 + 11), «nadie comparte el enlace de Canvas», práctica de la Actividad 6, prompts `dashboard` y `corregir-dashboard`, 2 síntesis |
| `src/content/bloques/u2/cierre.md` | Minutos 13 (4 + 9), entrega por correo (Actividad 7), reflexión de 4 preguntas y 4 síntesis |
| `src/content/unidades/u2.yaml` | `objetivoBreve`, `miniProyecto`, `entregable`, `terminadoCuando` con 8 ítems, sale `gemini-4-argon`, 6 descargas |
| `src/content/descargas.yaml` | `u2-cuaderno-practica`, `u2-informe-respaldo`, `u2-kit-marca-gtd` y `u2-logo-gtd-png` |
| `src/lib/descargas.ts` | `".png": "PNG"` en `FORMATOS` (excepción aprobada) |
| `_planificacion/…/iteracion-07-02-unidad-2.md` | Estado `En revisión`; criterios marcados |
| `_planificacion/…/definicion-epica-07.md` | 07-02 `En revisión` |
| `_planificacion/00_producto/registro-pendientes.md` | Encabezado, fila 07-02, backlog 33, decisiones, propuesta e historial |
| `_planificacion/00_producto/registro-archivo.md` | Recibe la fila más antigua del historial |

## Decisiones tomadas

Todas son del desarrollador, dichas por él el 2026-11-23:

- **Decisión 1 (minutos):** opción A. Se mantienen `microcharlaMin` + `practicaMin` con los minutos de la tabla aprobada. La tarea 4 quedó resuelta sin presentar opciones.
- **Decisión 2 (logo PNG):** se agrega una sola línea `".png": "PNG"` a `FORMATOS`. Es una **excepción aprobada** al criterio «`git diff` solo toca `src/content/`, `public/descargas/` y `_planificacion/`».
- **Cuenta de participante:** el desarrollador comprobó que funcionan el correo externo a contacto@felipecuevas.dev, Deep Research, Canvas, «Crear imágenes» y subir un PNG a Presentaciones.
- **CSV:** abre bien en Hojas de cálculo con la configuración regional de Chile, así que no se agregan avisos sobre el punto decimal.
- **Cierre:** aprobado como lo propuso el agente, con comillas « » y contacto@felipecuevas.dev como enlace `mailto:`, que Astro genera solo con GFM.
- **Síntesis:** se aprueban las 7 de la iteración, las 2 nuevas del bloque 5 y la opcional del bloque 3. **El bloque 5 pasa de «tres cifras» a «1 cifra»** por contenido aprobado: meta U2-8 y `terminadoCuando[4]`.
- **`entregable`:** pasa de «…, todo con la marca GTD» a «…, enviados por correo al instructor», porque contradecía a `miniProyecto` («tres de ellas con la marca GTD»).
- **Remisión al Cuaderno:** cada práctica abre con «Práctica (Actividad N del Cuaderno)». No se agrega la frase «Sigue los pasos en el Cuaderno…».
- **Mínimo viable:** va en su propia línea en cada bloque.
- **Línea «Bloque de marca» del bloque 3:** se mantiene. El documento existe en la U1: en el bloque 5, el paso «Plantilla» dice «la guardas en un documento de Drive».
- **Carril extra del bloque 3** («versión vertical en Canvas»): se quita, porque el Cuaderno no lo menciona y no debe haber un camino sin guía.

## Síntesis aprobadas

| Bloque | Campo | Texto | Palabras (límite) |
| :----- | :---- | :---- | :---------------: |
| 1 | resumen | Compara dos configuraciones de modelo y nivel de razonamiento sobre el CSV ficticio y exporta la tabla comparativa a Hojas de cálculo. | 22 (25) |
| 1 | haras | Compararás dos configuraciones de modelo y exportarás la tabla a planilla. | 11 (12) |
| 3 | resumen | Distingue la infografía como imagen y como código en Canvas, y crea la versión imagen con la paleta GTD sin inventar el logotipo. | 23 (25) |
| 3 | clave 1 | La IA nunca genera el logo: usa el archivo oficial. | 10 (10) |
| 5 | resumen | Construye en Canvas un dashboard web de una página con el CSV, indicadores, gráficos y filtros interactivos, comprueba una cifra y aplica la marca GTD. | 25 (25) |
| 5 | clave 1 | Incluye el rótulo de datos ficticios y comprueba una cifra. | 10 (10) |
| Cierre | resumen | Envía tus cinco archivos y tu reflexión por correo al instructor, y conoce el adelanto de la Unidad 3. | 19 (25) |
| Cierre | haras | Enviarás por correo tus cinco archivos y tu reflexión de cuatro preguntas. | 12 (12) |
| Cierre | clave 1 | Envía todo por correo solo al instructor. | 7 (10) |
| Cierre | clave 2 | Reflexiona: qué hice, qué aportó Gemini, qué aporté yo. | 9 (10) |

`pnpm build` valida estos límites con Zod y no dio errores.

## Verificación

Todo lo que sigue lo verificó el agente. Método:

- `pnpm build` y `pnpm astro check`.
- Mediciones contra un `astro preview` que ya corría en el puerto 4340 y sirve `dist/`. No lo levantó el agente y no se detuvo.
- Playwright (`playwright-core` solo en el scratchpad) con el Chrome del sistema y `prefers-reduced-motion: reduce` emulado.
- Extracción de texto de los PDF con `pdfjs-dist` en el scratchpad. Los PDF no se editaron.
- Palabras medidas con el fragmento F3 de la 06-06.

| Medición | Línea base | Después |
| :------- | :--------: | :-----: |
| `pnpm build` / `pnpm astro check` | sin errores | sin errores / 0 errores, 0 advertencias, 0 sugerencias |
| Guardia de marcadores | 0 | 0 |
| Palabras U1 / U2 / U3 / U4 (`innerText`) | 297 / 316 / 354 / 305 | 297 / **325** / 354 / 305 |
| Alto de la U2 en 1440 × 900 | 823 px | 823 px |
| Alto de la captura de la U2 en 360 px | 2449 px | 2473 px (+24) |
| `<dialog>` | 55 | 56 (prompts del bloque 5) |
| Prompts (`data-copiar`) | 25 | 32 (U2 de 5 a 12) |
| `h1` | 1 | 1 |
| Descargas en la U2 | 2 | 6 |

- **Minutos:** 9 + 18 + 21 + 22 + 17 + 20 + 13 = 120, de los cuales 55 son de explicación y 65 de práctica. Los números de bloque van de 0 a 5, más el cierre.
- **Prompts frente al Cuaderno:** se extrajo el texto de las 18 páginas y se normalizaron los espacios. Los 12 prompts de la U2 son idénticos.
- **Descargas:** los 6 archivos responden 200 en `preview`, con su tipo correcto. Se muestran como «CSV · 25,4 KB», «Markdown · 1,4 KB», «PDF · 4,3 MB», «PDF · 221,3 KB», «Markdown · 18,5 KB» y «PNG · 47,9 KB».
- **Correo:** `<a href="mailto:contacto@felipecuevas.dev">`. Coincide con el dato que entregó el desarrollador.
- **Greps (criterio y tarea 12):** solo queda «Con Google AI Plus aparecen Auto e Hydrogen», texto aprobado que describe el plan. No quedan «Flash-Lite», «Argon», «cuenta personal», «espacio del curso», `<svg>`, «15 %», «microcharla de 3», «seis piezas», «vitrina» ni «tres cifras».
- **Capturas** de la U2 en 360 y 1440 px, claro y oscuro: misma estructura que la línea base (cabecera, 5 tarjetas y «Terminado cuando…»). Cambian los minutos, «Recursos (11)», «Descargas (6)», «Prompts (3/4/2/2)» y «Terminado cuando… (8)». En la captura de 360 px, el encabezado fijo tapa una tarjeta; también pasa en la línea base y es un efecto de la captura por elemento.
- **`git diff --stat`:** 10 archivos de código y contenido (190 líneas agregadas y 97 borradas), más `_planificacion/`. No hay archivos nuevos en `public/descargas/`, porque los 4 ya estaban en `main`.

### Comprobaciones previas a la tarea 9 (solo lectura, pedidas por el desarrollador)

1. **`git ls-files public/descargas`:** 12 archivos, ninguno del instructor. Los 6 de la U2 están. El kit trae el SVG del logo, rotulado «lo usa el instructor en su demostración».
2. **Informe de respaldo:** no aparecen «Anexo para el instructor» ni «Felipe». «MiPymes» aparece 10 veces. El resumen lo define como «micro, pequeñas y medianas empresas» y casi todos los usos citan fuentes que usan ese término. La única mezcla sin aclarar está en «Oportunidades»: «las pymes…» y, en la frase siguiente, «el 70 % de las MiPymes…».
3. **Cuaderno:** no aparecen 38,6, 23,3, 16,4, 53,8 ni 7,55. «260» aparece una vez, como total del dataset en el caso (el CSV tiene 260 filas), no por categoría.
4. **Prompts:** 12 de 12 idénticos, ninguno quedó sin comparar.

## Criterios de aceptación

- [x] Build sin errores ni marcadores (guardia: 0).
- [x] Grep sin resultados dirigidos al participante (queda 1 frase aprobada).
- [x] Minutos: 120 = 55 + 65.
- [x] Cada práctica remite a su actividad y los prompts son idénticos al Cuaderno (12 de 12).
- [ ] 6 descargas que abren **en el sitio publicado**: en local sí (200); en producción falta comprobarlo después del merge.
- [x] El bloque 5 no habla de compartir el enlace y el cierre explica la entrega por correo.
- [x] Sin cambios de diseño. El diff se sale del criterio solo por la línea `.png` aprobada, y las capturas coinciden en estructura.
- [x] Síntesis dentro de sus límites, con la aprobación registrada.
- [x] El correo coincide con contacto@felipecuevas.dev.

## Diferencias entre lo planificado y lo encontrado

- Los 4 archivos de descarga ya estaban en `main` (`c8106d3`) antes de empezar, así que la tarea 9 no esperó.
- La 07-01 ya estaba fusionada en `main`, aunque los documentos la muestran «En revisión». El desarrollador la cierra por separado.
- `acerca-modelos-gemini` ya estaba en los recursos de la U2 (sexta posición) y no se movió.
- El bloque 5 y `entregable` no estaban en la lista de síntesis y textos de la iteración. Se cambiaron con aprobación.

## No se pudo verificar

- Las descargas en producción: el despliegue lo hace el desarrollador.
- Teclado y lector de pantalla en los modales tocados: los componentes son los mismos y no se revisaron a mano.

## Corrección posterior al despliegue (2026-11-23, corrección 38)

Decisiones del desarrollador del 2026-11-23 (dicho por el desarrollador): quitar del sitio los carriles extra de la U2 y agregar la guía de la práctica como primera descarga. Rama `correccion/u2-sin-carriles-guia-practica`.

- **Carriles:** se quitan las líneas «Carril extra» de los bloques 1, 2, 4 y 5 (el del bloque 3 ya se había retirado). `grep -i carril` sobre los bloques y la unidad de la U2: sin coincidencias. La U3 y la U4 no se tocan.
- **Guía:** `public/descargas/u2-guia-completa.pdf` la subió el desarrollador y figura en `git ls-files`. Nueva entrada `u2-guia-completa` con título «Guía completa · Sección Práctica U2». El esquema de descargas no tiene campo de descripción, así que no se escribió ninguna.
- **Orden de descargas de la U2:** guía, Cuaderno, CSV, diccionario, informe, kit y logo. Antes el Cuaderno iba tercero.
- **Verificación del agente:** `pnpm build` sin errores y con 0 marcadores; `pnpm astro check` con 0 errores, 0 advertencias y 0 sugerencias. En `dist/index.html` hay 56 `<dialog>` y aparece «Descargas (7)». Las 7 descargas responden 200 en `preview` (puerto 4340) con su tipo: PDF · 198,1 KB; PDF · 4,3 MB; CSV · 25,4 KB; Markdown · 1,4 KB; PDF · 221,3 KB; Markdown · 18,5 KB; PNG · 47,9 KB.
- **No medido por el agente:** las palabras con `innerText` y el alto de la U2 en 1440 × 900 y en 360 px. El clasificador de permisos bloqueó la medición con Playwright y quedan como verificación del desarrollador (F3 de la 06-06). Lo esperado: menos de 325 palabras en la U2 y el mismo alto de 823 px en 1440 × 900.

## Revisión manual del desarrollador

- En `pnpm preview`, abrir «Descargas (6)» de la U2 y los 2 PDF, el `.md` y el PNG.
- Leer los modales de detalle de los bloques 0 a 5 y el cierre, y el modal de prompts del bloque 3 (4 prompts).
- Después del despliegue, comprobar que las 6 descargas responden en la URL publicada.

## Pendientes y riesgos

- **Sin confirmar con una cuenta de participante:** qué modelos muestra el selector y los nombres exactos de los botones («Exportar a Hojas de cálculo», «Exportar a Presentaciones», «Exportar» → Drive, «Crear imágenes», «Descargar en tamaño completo»). El sitio usa las palabras de las guías oficiales y no deja marcadores. Quedó registrado en «Decisiones por tomar».
- **Carriles extra de los bloques 1, 2, 4 y 5:** el Cuaderno no los menciona. Quedan como propuesta en `registro-pendientes.md`, porque la 07-02 pedía mantener los de los bloques 1 y 5.
- **Backlog 33:** la U2 sube a 325 palabras (límite de 300, RDA-012). No se recortó contenido aprobado.
- **Los modelos pueden cambiar antes de la clase:** revisar la página oficial el 2026-11-24 y, si hace falta, ajustar solo el bloque 1.
- **«MiPymes» en el informe:** el desarrollador decide si la mezcla de «Oportunidades» necesita un matiz. No se editó ningún PDF.
- **Ficha del curso:** la portada muestra ahora «32 prompts», calculado del contenido. `DESIGN.md` usa «24 prompts» solo como ejemplo, así que no cambia nada.

## Revisión

- **Resultado frente al objetivo:** cumplido en local. Falta comprobar las descargas en producción.
- **Qué aprendimos:**
  - Con el Cuaderno como fuente, comparar los prompts con el texto extraído del PDF (espacios normalizados) es rápido y fiable.
  - GFM convierte las direcciones de correo en enlaces `mailto:` sin marcado explícito.
  - Los carriles extra del sitio no existen en el Cuaderno, y conviene decidirlo por unidad en la 07-03 y la 07-04.
- **Qué cambia para lo que sigue:** las métricas vigentes pasan a 56 `<dialog>` y 32 prompts.

## Commit sugerido

`Épica 7 - Iteración 07-02: U2 en dos mitades, cuenta del curso, modelos vigentes, prácticas del Cuaderno, 12 prompts, entrega por correo y 6 descargas`
