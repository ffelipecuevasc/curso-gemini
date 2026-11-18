# Bitácora 03 (cierre) · Cierre de la Épica 03: Unidades del curso

- **Fecha:** 2026-11-17
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/03-05-pendientes-u3-u4
- **Estado final:** En revisión

## Resumen

La épica 03 presentó en la página las 4 unidades cargadas en la épica 02, con un solo componente guiado por los datos. Cada unidad muestra:
- su ficha y la tabla de bloques;
- el texto «Para la clase» de los 26 bloques;
- los 24 prompts con «Copiar»;
- sus recursos oficiales (47, con 6 videos);
- las descargas con formato y peso medidos del archivo (RDA-010);
- «Profundiza en tu tiempo» en 16 bloques.

La página sigue con 4 etiquetas `<script>` (3 comportamientos) y el build termina sin advertencias.

## Iteraciones de la épica

| Iteración | Nombre | Estado | Bitácoras |
| :-------- | :----- | :----- | :-------- |
| 03-01 | Sección de unidad y texto de los bloques | Terminada | [bitacora-03-01](bitacora-03-01.md) |
| 03-02 | Prompts con «Copiar» y recursos externos | Terminada | [bitacora-03-02](bitacora-03-02.md) |
| 03-03 | Descargas y «Profundiza» | Terminada | [bitacora-03-03](bitacora-03-03.md) |
| 03-04 | Pendientes de la Unidad 1 y la Unidad 2 | Terminada | [bitacora-03-04](bitacora-03-04.md) |
| 03-05 | Pendientes de la Unidad 3 y la Unidad 4 | En revisión | [bitacora-03-05](bitacora-03-05.md) |

## Criterio de término

| Criterio | Cómo se comprobó | Resultado |
| :------- | :--------------- | :-------- |
| Las 4 unidades están en la página sin marcadores `PENDIENTE_` visibles, o con su ausencia acordada | `dist/index.html`: 4 secciones con sus `h2` desde las fichas, 26 bloques con cuerpo, 0 `PENDIENTE_` y 0 `VERIFICAR`. Ausencias acordadas en el registro y en las bitácoras 03-04 y 03-05 | Cumple (medido) |
| Cada prompt se copia con el botón y con el teclado, y el texto copiado es idéntico al del documento | 24 de 24 prompts idénticos a su archivo en el HTML (comando temporal de la 03-02, repetido en cada iteración); copiado con teclado y pegado comparado por el desarrollador en la 03-02 | Cumple (medido y dicho por el desarrollador) |
| Cada descarga responde con su archivo y cada enlace externo abre la página indicada | 6 de 6 descargas con su archivo en `dist/` y el peso igual a `statSync`; cada enlace externo con `href` igual a la URL de su recurso, `target="_blank"` y `rel`. Probado en el navegador por el desarrollador hasta la 03-04; **las 4 plantillas y el video de la U3 (03-05) están pendientes de su prueba** | Cumple en lo medido; pendiente la prueba en el navegador de la 03-05 |

## Hallazgos abiertos

Ninguno (proyecto de nivel pequeño, sin auditorías; RDA-001).

## Decisiones del desarrollador registradas

- 2026-11-17: un solo componente guiado por los datos para las 4 unidades, en lugar de una iteración de presentación por unidad.
- 2026-11-17: apartados de la ficha en `h4` y `h3` por bloque; tablas solo con CSS.
- 2026-11-17: marcador `data-prompt` en U2 · 3, única excepción a la copia literal (RDA-009).
- 2026-11-17: los prompts de marca GTD se muestran bajo responsabilidad del desarrollador, y la autorización del cliente sigue abierta.
- 2026-11-17: RDA-010 (formato y peso medidos del archivo); el desarrollador ratificó `node-minimo.d.ts`.
- 2026-11-17: «Profundiza» usa solo recursos oficiales; el texto propio es opcional.
- 2026-11-17: videos de la U1 (5) y de la U3 (1) entregados por el desarrollador; la U2 y la U4 quedan sin videos.
- 2026-11-17: diccionario del dataset editado para los participantes, con el recorte ratificado.
- 2026-11-17: P-007 aplicada en `AGENTS.md` (commit bc70739).

## Revisión al cierre

- **Resultado frente al criterio de término:** cumplen 2 de 3, medidos o dichos por el desarrollador. El tercero cumple en lo medido y queda pendiente la prueba en el navegador de lo agregado en la 03-05.
- **Revisión como experto (Astro 7, Tailwind v4, TypeScript):**
  - **Bien:**
    - Componentes pequeños con props tipadas (`SeccionUnidad`, `BloqueClase`, `Prompt`, `RecursoExterno`, `TarjetaDescarga`, `Profundiza`).
    - Lógica separada en `src/lib/` (`unidades.ts`, `marcadores.ts`, `descargas.ts`).
    - Validaciones que fallan al compilar, cada una con su prueba reversible.
    - JavaScript mínimo (+198 B gzip en toda la épica) y ninguna dependencia nueva.
    - Contraste AA medido en cada par nuevo.
  - **Deuda técnica:**
    1. **Peso:** `dist/index.html` mide 249 160 B (50 748 B gzip), frente a 61 892 B antes de la épica. No hay medición de Lighthouse todavía.
    2. **Jerarquía:** el salto de `h2` a `h4` en las fichas (decisión aceptada) puede restar en la auditoría de accesibilidad.
    3. **SVG:** quedan 6 en `dist/_astro/` (41 030 B) sin ninguna referencia en `index.html`. Se usan en línea, y Vite emite además el archivo. Se midieron 6, no 7.
    4. **Mapa de colores:** está repetido en `BloqueUnidad` y `SeccionUnidad`; con 2 usos no se extrajo.
    5. **`comprobarProfundiza()`:** duplica la validación que Astro ya hace en los bloques, a propósito.
    6. **Plantillas:** las 4 se descargan con el mismo nombre (bitácora 03-05).
  - **Sin sobreingeniería:** ninguna capa ni dependencia nueva. `node-minimo.d.ts` evitó agregar `@types/node`.
- **Qué aprendimos:**
  - Medir contra los archivos fuente (prompts, `href`, `statSync`) con scripts temporales da evidencia exacta.
  - Leer completo cada archivo del desarrollador antes de publicarlo evitó entregar la solución de un ejercicio.
  - El hook de documentos bloquea comandos de Bash que solo mencionan `.md`; los scripts en el scratchpad lo evitan.
- **Qué cambia en el backlog o en las épicas siguientes:**
  - La épica 04 debe medir el peso y Lighthouse antes de publicar, y resolver los SVG sin referencia.
  - Se propone una iteración más que la planificación original (ver abajo).

## Propuesta de la épica siguiente

Entregada en el chat el 2026-11-17 y **pendiente de aprobación**. No se generaron archivos de iteración ni se archivaron filas.

| Iteración | Nombre | Objetivo | Backlog | Datos que necesita |
| :-------- | :----- | :------- | :------ | :----------------- |
| 04-01 | Guardia de marcadores y limpieza de la compilación | `pnpm build` falla si `dist/` contiene `PENDIENTE_` o `VERIFICAR`, y `dist/_astro/` deja de traer los SVG sin referencia | 16 (parte) | Aprobación del cambio de configuración (`package.json` o `astro.config.mjs`) |
| 04-02 | Configuración de Cloudflare Workers | `wrangler.jsonc` publica `dist/` como recursos estáticos y el desarrollador hace la primera publicación | 16 (resto) | Nombre del Worker; decidir cómo se ejecuta Wrangler sin `npx` (dependencia de desarrollo y RDA) |
| 04-03 | Web Analytics y metadatos para compartir | Script de Cloudflare Web Analytics (RDA-005), metadatos Open Graph, ícono del sitio, `robots.txt` y página 404 | 17 | Token de Web Analytics y licencia del contenido |
| 04-04 | Rendimiento, accesibilidad y verificación final | Lighthouse móvil local y en la URL publicada (95 / 100 / 100 / 100), con ajustes de peso y de jerarquía si hacen falta | 18 | URL publicada; fechas de las clases para el hito |

## Pendientes y riesgos

- **Contradicción en `AGENTS.md`:** la sección 1 define como cliente a Capacita Tu Futuro, «para trabajadores de GTD Telsur», pero la regla de contenido 3 habla de «datos del cliente (Capacita Tu Futuro o GTD)». Se propone registrarla como P-008 en la 04-01.
- **Datos del cliente sin respuesta:**
  - las fechas de las clases;
  - la autorización y los datos oficiales del kit de GTD, que hoy se muestra bajo responsabilidad del desarrollador;
  - la redacción del respaldo de Google.
- **Decisiones del desarrollador pendientes:**
  - nombre del Worker y token de Web Analytics;
  - licencia del contenido;
  - insignia del instructor y certificaciones AWS y Anthropic;
  - prompts nombrados pero no escritos (una fila por unidad).

## Commit sugerido

`Épica 3 - Cierre: las 4 unidades se muestran completas en la página y se propone la épica 04`
