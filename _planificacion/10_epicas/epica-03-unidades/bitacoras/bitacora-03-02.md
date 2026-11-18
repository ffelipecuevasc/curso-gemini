# Bitácora 03-02 · Prompts con «Copiar» y recursos externos

- **Fecha:** 2026-11-17
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/03-02-prompts-recursos
- **Estado final:** En revisión

## Resumen

Los 24 prompts se muestran en su bloque con un botón «Copiar» que copia el `textContent` del `<code>`. `identidad-visual-gtd` queda justo después de «Ejemplo de estructura:» en U2 · 3, gracias al marcador aprobado. Cada unidad lista sus recursos oficiales (U1 20, U2 12, U3 8, U4 6) con apertura en pestaña nueva anunciada. Antes de empezar se comprobó que la rama es `iteracion/03-02-prompts-recursos`, que `main` contiene `100fb18` (la 03-01) y que el árbol estaba limpio. En la misma pasada se cerró la 03-01 con la revisión en navegador que hizo el desarrollador.

## Archivos creados, modificados o eliminados

| Archivo | Cambio |
| :------ | :----- |
| `src/components/Prompt.astro` | Nuevo: `figure` con título, `<pre><code>`, botón «Copiar» (oculto sin JS), aviso `aria-live` y el script de copiado |
| `src/components/RecursoExterno.astro` | Nuevo: enlace con ícono de línea por tipo, título, sitio y texto oculto |
| `src/lib/marcadores.ts` | Nuevo: `partirEnMarcadores()`, que parte el HTML del cuerpo en los marcadores `data-prompt` y falla si un marcador no tiene prompt o se repite |
| `src/components/BloqueClase.astro` | Prompts al final del bloque, o en línea si hay marcador; `render()` cuando no hay marcador |
| `src/components/SeccionUnidad.astro` | Lista «Recursos» (`h4`) antes de «Entregable» |
| `src/styles/global.css` | El `<code>` dentro de `<pre>` no hereda el estilo del código en línea |
| `src/content/bloques/u2/bloque-3.md` | Marcador `<div data-prompt="identidad-visual-gtd"></div>` tras «Ejemplo de estructura:» (excepción aprobada) |
| `iteracion-03-01-seccion-unidad.md` | Cierre: Terminada, con el criterio de navegador «dicho por el desarrollador» |
| `iteracion-03-02-prompts-recursos.md` | Estado, decisiones, criterios y evidencia |
| `definicion-epica-03.md` | 03-01 Terminada, 03-02 En revisión |
| `registro-pendientes.md` | Cierre de la 03-01, estado de la 03-02, backlog e historial |

## Ubicación del prompt de marca: alternativas comparadas

| Alternativa | A favor | En contra | Resultado |
| :---------- | :------ | :-------- | :-------- |
| Prompt al final del bloque, sin marcador | Sin tocar el cuerpo | Queda lejos de «Ejemplo de estructura:», que pierde sentido; incumple la decisión de la épica | Descartada |
| Partir U2 · 3 en dos archivos `.md` | Sin HTML en el cuerpo | Rompe RDA-009 (un archivo por bloque) y la validación de números | Descartada |
| Campo `despuesDe` en el prompt con el texto donde insertarlo | Cuerpo intacto | Busca texto dentro del HTML: frágil si cambia una tilde o la negrita, y es más código | Descartada |
| Marcador `data-prompt` y partir `rendered.html` | Posición exacta, validada al compilar y sin dependencias; los demás bloques siguen con `render()` | Una línea invisible en un cuerpo literal (excepción aprobada) | **Elegida** |

## Implementación

- **IDs:** `prompt-<unidad>-<bloque>-<id>` (por ejemplo, `prompt-u2-bloque-2-deep-research` y `prompt-u3-bloque-1-deep-research`), con `-titulo` y `-texto` derivados.
- **Botón:** `hidden js:inline-flex`, el mismo patrón de `BotonModo`, así que sin JavaScript no aparece. Si no existe `navigator.clipboard` (contexto no seguro), el script lo quita. Su nombre accesible es «Copiar el prompt «título»», que empieza con la etiqueta visible. Tras copiar con éxito cambia a «Copiado» por 2 s y lo anuncia en `aria-live="polite"`. Si la copia falla, muestra «No se pudo copiar; selecciona el texto» y el mensaje queda hasta el próximo intento.
- **Texto:** `<pre>` con `whitespace-pre-wrap`, para que en 360 px se ajuste sin cambiar lo que se copia; el texto es seleccionable. Prettier no tocó el contenido de `<pre>` (24 de 24 idénticos después de formatear).
- **Marcador:** en el Markdown se rodeó con líneas en blanco. La lista del paso 1 cierra antes del prompt y sigue con `<ol start="2">`, así que la numeración visible no cambia.
- **Recursos:** se resuelven con `getEntry` (sus referencias ya las valida `comprobarReferencias()`). El título se muestra tal cual, con «(no oficial)» incluido. El tipo se anuncia con un texto oculto («Documento:»).

## Verificación

- `pnpm prettier --write` sobre los 6 archivos de código. `pnpm astro check`: 0 errores, 0 advertencias, 0 sugerencias.
- `pnpm build`: «Complete!», con solo la advertencia aceptada de `descargas.yaml`.
- **Comando temporal** (`medir0302.js` en el scratchpad, fuera del repositorio):
  - **Prompts:** 24 de 24 idénticos a su archivo, con el `<code>` comparado tras decodificar las entidades.
  - **IDs:** 24 `figure` con IDs únicos que coinciden con los esperados, y 0 IDs repetidos en toda la página.
  - **Recursos por unidad:** U1 20, U2 12, U3 8 y U4 6, todos con `target="_blank"`, `rel="noopener noreferrer"` y texto oculto; «(no oficial)» visible.
  - **Marcador:** el prompt de marca va después de «Ejemplo de estructura:», con solo `</li></ol>` entre ambos; aparece `<ol start="2">` y quedan 0 `data-prompt` en `dist/`.
  - **Títulos:** 1 `h1`, 6 `h2`, 31 `h3` y 20 `h4` (los 16 de la 03-01 más «Recursos» en cada unidad).
  - **Marcadores:** 0 `PENDIENTE_` y 0 `VERIFICAR`.
  - **Botones:** 24, todos con `hidden js:inline-flex`.
- **JavaScript** (método de la 03-01): 4 etiquetas `<script>` (423 + 799 + 879 + 592 B), **1080 B gzip**: +198 B sobre los 882 B. Son 3 comportamientos: modo, menú y copiar.
- **Prueba reversible del marcador:** con `data-prompt="no-existe"`, el build falla con `El bloque «u2/bloque-3» tiene el marcador data-prompt="no-existe", pero no tiene un prompt con ese id` y «Command failed». Restaurado (`cmp`); `pnpm build` en «Complete!».
- **Contraste** (fórmula WCAG en Node):

  | Par | Claro | Oscuro | Mínimo exigido |
  | :-- | :---- | :----- | :------------- |
  | Borde del botón sobre `superficie-2` | 4,07:1 | 4,80:1 | 3:1 (no es texto) |
  | Aviso sobre `superficie-2` | 10,59:1 | 10,64:1 | 4,5:1 |
  | Foco sobre `superficie-2` | 4,07:1 | 7,92:1 | 3:1 |
  | Enlaces sobre el fondo | 6,35:1 | 10,14:1 | 4,5:1 |
  | Texto del botón en hover | 16,71:1 | 16,69:1 | 4,5:1 |

- `dist/index.html` mide 194 271 B, frente a 128 569 B en la 03-01. Sin servidores levantados.

## Criterios de aceptación

Ver la iteración: 3 de 6 marcados con evidencia. Sin marcar:
- «Copiar» con el teclado y comparar lo pegado: necesita navegador.
- «Sin JavaScript, el botón no aparece»: la clase está medida, pero el comportamiento necesita navegador.
- Regresiones: todo está medido salvo el desborde en 360 px.

## No se pudo verificar · pasos para el desarrollador

Ejecuta `pnpm build` y `pnpm preview`, y abre la URL local (que es `localhost`, un contexto seguro para el portapapeles).

1. **Copiar con el teclado:** llega con `Tab` al «Copiar» de «Plantilla de prompt maestro» (U1 · 5), pulsa `Enter`, pega en un editor y compara con `src/content/bloques/u1/bloque-5.md` (deben coincidir los saltos de línea y los `[marcadores]`). Repite con `Espacio` en «Identidad visual GTD (usar siempre)» (U2 · 3), que incluye `<svg>…</svg>`.
2. **Aviso:** el botón cambia a «Copiado» por 2 s; con NVDA (recomendado) se escucha «Copiado».
3. **Sin JavaScript** (DevTools → Configuración → Desactivar JavaScript): no aparece ningún «Copiar» y el texto de los prompts se puede seleccionar.
4. **360 px**, en ambos modos: `document.documentElement.scrollWidth === 360`; los prompts largos se ajustan sin barra horizontal; la U2 · 3 muestra el paso 1, el prompt de marca y luego «2. Camino A».
5. **Recursos:** `Tab` recorre la lista de cada unidad con foco visible; cada enlace abre en pestaña nueva.

## Decisiones tomadas

- `render()` se mantiene en los 25 bloques sin marcador, como dice la RDA-009. Solo U2 · 3 usa el HTML ya renderizado.
- «Recursos» va como `h4`, igual que los demás apartados de la ficha. Por eso los `h4` pasan de 16 a 20, sin cambiar la regla de la 03-01.
- No hay cambios para documentos protegidos.

## Pendientes y riesgos

- `identidad-visual-gtd` y `estilo-gtd` ya se ven en la página con los HEX aproximados de GTD, bajo responsabilidad del desarrollador. La autorización del cliente sigue abierta en el registro.
- El subrayado del enlace también cae sobre la línea del sitio de cada recurso (`text-decoration` se hereda del enlace). Es solo estético; revísalo en el paso 5.
- `index.html` pasó a 194 KB. Se recomienda Lighthouse móvil antes de publicar (épica 04).

## Revisión

- **Resultado frente al objetivo:** cumplido en el código y medido en el HTML; falta la prueba en el navegador del copiado, del caso sin JavaScript y de 360 px.
- **Qué aprendimos:**
  - Partir `rendered.html` en un marcador da la posición exacta sin dependencias, y la validación al compilar impide un marcador huérfano.
  - Prettier respeta el contenido de `<pre>`.
  - El hook de documentos bloquea comandos de Bash que solo mencionan `.md` en su texto; las mediciones con nombres de archivo van mejor como script en el scratchpad.
- **Qué cambia para lo que sigue:** la 03-03 agrega «Profundiza» con `RecursoExterno`, que ya existe, y extiende `comprobarReferencias()` a los bloques. La línea base de JS para la 03-03 es de 1080 B gzip en 4 etiquetas.

## Commit sugerido

`Épica 3 - Iteración 03-02: muestra los 24 prompts con botón Copiar y los 41 recursos por unidad, con el prompt de marca en su paso de U2·3 y la 03-01 cerrada`
