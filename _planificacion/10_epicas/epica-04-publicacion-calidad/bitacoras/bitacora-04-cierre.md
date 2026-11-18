# Bitácora 04 (cierre) · Cierre de la Épica 04: Publicación, medición y calidad

- **Fecha:** 2026-11-18
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** `main` (cierre solo documental)
- **Estado final:** Terminada (cierre aprobado por el desarrollador el 2026-11-18, con una excepción en Rendimiento)

## Resumen

La épica 04 dejó el sitio publicado en `https://curso-gemini.felipe-cuevas.workers.dev/`. Cada merge a `main` publica con Workers Builds. `pnpm build` tiene una guardia que falla si encuentra marcadores y limpia los SVG sin referencia. El sitio mide visitas con Cloudflare Web Analytics y tiene ícono propio, `robots.txt`, página 404 y licencia en el pie. Accesibilidad, Buenas prácticas y SEO dan 100 en la URL publicada. Rendimiento queda en 87, bajo la meta de 95: es una excepción que aceptó el desarrollador y que se atiende en la épica 05.

## Iteraciones de la épica

| Iteración | Nombre | Estado | Bitácoras |
| :-------- | :----- | :----- | :-------- |
| 04-01 | Guardia de marcadores y limpieza de la compilación | Terminada | [bitacora-04-01](bitacora-04-01.md) (commit 1e6b47d) |
| 04-02 | Configuración de Cloudflare Workers y publicación desde GitHub | Terminada | [bitacora-04-02](bitacora-04-02.md) (commit b30d648) |
| 04-03 | Web Analytics y metadatos para compartir | Terminada | [bitacora-04-03](bitacora-04-03.md) (commits 20df10a y 8545162) |
| 04-04 | Rendimiento, accesibilidad y verificación final | Terminada | [bitacora-04-04](bitacora-04-04.md) (commits c962a64, e120465 y d947746) |

## Criterio de término

| Criterio | Cómo se comprobó | Resultado |
| :------- | :--------------- | :-------- |
| La URL `curso-gemini.<subdominio>.workers.dev` responde con el sitio, publicada desde `main` por Workers Builds | `curl` a `https://curso-gemini.felipe-cuevas.workers.dev/`: responde 200 con el HTML de `main` en e120465 (1 `h1`, 6 `h2`, 53 `h3`, 0 `h4`) ([bitacora-04-04](bitacora-04-04.md)); el despliegue desde `main` lo confirmó el desarrollador en la 04-02 | Cumple |
| Lighthouse móvil sobre la URL publicada: Accesibilidad, Buenas prácticas y SEO en 100 | Lighthouse 13.6.0 móvil, mediana de 3 corridas, después del merge | Cumple (100/100/100) |
| Lighthouse móvil sobre la URL publicada: Rendimiento 95 o más | La misma medición: mediana 87 (corridas 84, 95 y 87), LCP 1,58 s, CLS 0, TBT 496 ms | No cumple. Excepción aceptada por el desarrollador el 2026-11-18 |
| El panel de Web Analytics registra visitas del sitio | Lo dijo el desarrollador el 2026-11-18 ([iteración 04-03](../iteracion-04-03-analytics-metadatos.md)) | Cumple |

**Causa medida del Rendimiento bajo 95:**

- La causa es el costo de estilo y layout de una página que muestra completas las 4 unidades (unos 250 KB de HTML). En la URL publicada, el TBT de estilo y layout fue de 707 a 1290 ms.
- Web Analytics no es la causa. En local, sin el beacon, Rendimiento no mejora a 95 o más: dio 96/98/100/100 contra 98/98/96/100 con él ([bitacora-04-04](bitacora-04-04.md)).
- Las corridas de este equipo varían entre 84 y 99, así que la mediana de 3 tiene ruido.
- `content-visibility` empeoró la medición (93/92, TBT 302 ms) y se revirtió.

**INP:** Lighthouse de laboratorio no mide INP, así que la 04-04 anotó TBT como referencia.

## Hallazgos abiertos

Ninguno de auditoría. La épica no tuvo auditoría formal.

## Decisiones del desarrollador registradas

- 2026-11-18: Preview Builds desactivados; solo `main` publica.
- 2026-11-18: ícono del sitio con el glifo `school-outline` de Material Symbols Light (Apache-2.0) en blanco sobre `#007EA7`.
- 2026-11-18: licencia «Todos los derechos reservados.» y token de Web Analytics entregados.
- 2026-11-18: subtítulos de las fichas en `h3` (aprobado). `content-visibility` probado y revertido.
- 2026-11-18: la épica se cierra con Rendimiento publicado en 87. Es una excepción aceptada y se atiende en la épica 05, cuya 05-08 compara contra esta línea base.

## Revisión al cierre

- **Resultado frente al criterio de término:** se cumplen 3 de 4 criterios. El sitio está publicado, Web Analytics registra visitas, y Accesibilidad, Buenas prácticas y SEO dan 100. Rendimiento da 87 y queda como excepción aceptada.
- **Qué aprendimos:**
  - Con todo el contenido abierto en una sola página, el cuello de botella es el estilo y el layout, no los scripts ni el peso del HTML en la red.
  - Las medidas de CSS no lo resuelven: `content-visibility` lo empeoró.
  - Medir en un solo equipo da notas con mucha variación.
- **Qué cambia en el backlog o en las épicas siguientes:**
  - La épica 05 (modales y unidad en una pantalla) reduce el contenido visible al cargar y es el camino previsto para llegar a 95.
  - Al abrirla, hay que ajustar el criterio de INP (ver «Pendientes y riesgos»).
  - Línea base para la 05-08: 87/100/100/100, LCP 1,58 s, CLS 0, TBT 496 ms.

## Propuesta de la épica siguiente

- La épica 05 (rediseño visual y síntesis) ya está planificada, con 8 iteraciones (05-01 a 05-08), backlog 19 a 26, RDA-011 y RDA-012 propuestas y P-009 a P-011 pendientes ([definición](../../epica-05-rediseno-sintesis/definicion-epica-05.md)).
- Se planificó a pedido del desarrollador antes de este cierre, así que no se rehace.
- Este cierre no toca sus archivos. Los ajustes que salen de aquí quedan registrados como pendientes en `registro-pendientes.md`.

## Pendientes y riesgos

- Rendimiento publicado ≥ 95 en la épica 05 (05-08).
- Al abrir la épica 05, ajustar el criterio INP < 200 ms en su definición y en la 05-08: INP queda informativo y no bloquea.
- Datos del cliente:
  - las fechas de las 4 clases
  - la redacción del respaldo de Google
  - la autorización del kit de marca y del logo de GTD
  - el HEX y la tipografía oficiales de GTD
- Datos del desarrollador:
  - la insignia de Gemini Certified Educator
  - los nombres de las certificaciones AWS y Anthropic
  - los prompts nombrados y no escritos de U1 a U4
  - los archivos de descarga finales
  - la zona horaria de las fechas
- Riesgo: el logo de GTD se publica sin autorización del cliente, bajo responsabilidad del desarrollador.

## Commit sugerido

`Épica 4 - Cierre: cierra la épica 04 con Rendimiento publicado 87 como excepción aceptada, archiva sus filas y restaura el registro pisado por fd81fc4`
