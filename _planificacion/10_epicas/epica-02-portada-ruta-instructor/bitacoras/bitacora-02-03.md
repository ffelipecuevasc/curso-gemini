# Bitácora 02-03 · Ruta del curso

- **Fecha:** 2026-11-17
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/02-03-ruta-curso
- **Estado final:** En revisión

## Resumen

La sección `#ruta` muestra el mosaico de las 4 unidades con su color, número, título completo, mini-proyecto y avance de la RDA-008, y cada bloque es un solo enlace a su sección. `RutaCurso.astro` llama a `obtenerUnidadesConBloques()`, así que las comprobaciones de unidades y bloques (RDA-009) siguen corriendo en cada build; se quitó la llamada provisoria de `index.astro`. Antes de empezar se cerró la parte documental de la 02-02 y se comprobó que la rama es `iteracion/02-03-ruta-curso` y que `main` contiene `82d24e7` (`git branch --contains 82d24e7` lista `main`).

## Archivos creados, modificados o eliminados

| Archivo | Cambio |
| :------ | :----- |
| `src/components/BloqueUnidad.astro` | Nuevo: un bloque del mosaico con props tipadas (`CollectionEntry<"unidades">`) |
| `src/components/RutaCurso.astro` | Nuevo: `section#ruta` con `h2` y la lista ordenada del mosaico; llama a `obtenerUnidadesConBloques()` |
| `src/pages/index.astro` | Usa `RutaCurso`; sin la llamada provisoria; las secciones `#unidad-1` a `#unidad-4` e `#instructor` siguen igual |
| `iteracion-02-02-fichas-unidades.md` | Cierre: Terminada, nota de la excepción aceptada |
| `iteracion-02-06-bloques-u3-u4.md` | Decisión del desarrollador sobre los textos de la U3 sin campo |
| `iteracion-02-03-ruta-curso.md` | Estado y criterios con evidencia |
| `registro-pendientes.md` | Cierre de la 02-02, estado de la 02-03, backlog, pendientes e historial |

## Implementación

- **Bloque:** `li` > `a` con «Unidad N», el título como `h3`, «Mini-proyecto:» con el título del mini-proyecto y el avance en `font-codigo`. «Unidad N», «Mini-proyecto:» y el formato del avance son etiquetas de la interfaz; los datos salen de `numero`, `titulo`, `miniProyecto.titulo` y `avance`. El avance usa espacio duro antes de «%» para que no se corte.
- **Nombre accesible:** `aria-labelledby` apunta al número y al título («Unidad 1 Fundamentos de IA Generativa & Ingeniería de Prompts»); `aria-describedby`, al mini-proyecto y al avance, con el texto oculto «Avance del curso:».
- **Color:** `bg-uN text-sobre-uN`; la U3 suma `border border-borde-u3` (transparente en claro, `#00B0E8` en oscuro). Clases completas en un mapa para que Tailwind las detecte.
- **Forma:** `rounded-bloque rounded-bl-esquina` (28 px con la esquina inferior izquierda de 6 px). Se trataron los 4 bloques como «destacados»: la iteración no dice cuáles lo son y la ruta es el único mosaico de la página. Sin sombras.
- **Retícula:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` (en Tailwind v4 generan `repeat(n,minmax(0,1fr))`; `sm` = 40rem = 640 px, `lg` = 64rem = 1024 px).
- **Títulos largos:** `wrap-break-word` en el título y el mini-proyecto, más el `text-wrap: balance` global de los `h3`. Nada se recorta.
- **Foco:** el `:focus-visible` global ya cumple (`2px solid var(--color-foco)`, `outline-offset: 3px`); no se duplicó.

## Verificación

- `pnpm prettier --write` sobre los 3 archivos de código. `pnpm astro check`: 0 errores, 0 advertencias, 0 sugerencias.
- `pnpm build`: «Complete!», con solo las 2 advertencias del cargador `file` aceptadas en la 02-02.
- **Prueba reversible del bloque con unidad inexistente:** `sed` cambió `unidad: u1` por `unidad: u9` en `u1/bloque-1.md` → `[ERROR] Error: El bloque «u1/bloque-1» apunta a la unidad «u9», que no existe en src/content/unidades/` (`Caught error rendering /`). Revertido con el `sed` inverso: `git diff --stat -- src/content` vacío y `pnpm build` en «Complete!». La validación ahora corre a través de `RutaCurso`.
- **HTML generado (`dist/index.html`):** 1 `h1`, 6 `h2`, 4 `h3`; `id="ruta"`, `titulo-ruta` e `id="unidad-1"` a `"unidad-4"` una vez cada uno; 4 enlaces `#unidad-1` a `#unidad-4` en orden con su `aria-labelledby`; 4 títulos completos, 4 mini-proyectos y los 4 avances de la RDA-008; 1 enlace `href="#ruta"` (el «Ver la ruta» de la portada).
- **CSS generado:** presentes `rounded-bl-esquina`, `wrap-break-word`, `border-borde-u3`, `font-codigo`, `@media (width>=40rem)` con `repeat(2,minmax(0,1fr))` y `@media (width>=64rem)` con `repeat(3,minmax(0,1fr))`.
- **Contraste** (fórmula WCAG con Node sobre los tokens): U1 `#FFFFFF`/`#007EA7` 4,62:1, U2 `#00131D`/`#00B0E8` 7,54:1, U3 `#E4F3FF`/`#003B51` 10,64:1, U4 `#3D2E00`/`#F8CD46` 8,69:1. Anillo de foco: 4,62:1 en claro, 12,43:1 en oscuro. Todo el texto del bloque mide 16 px o más, como pide la tabla 2.3 para la U1.
- **JavaScript:** 0 `<script>` en los componentes nuevos; `dist/index.html` sigue con 3 scripts (856 B gzip juntos, medidos con `zlib`). No se pudo comparar contra un build de `HEAD`: el comando que lo armaba en una carpeta temporal fue rechazado y no se reintentó.
- **Títulos escritos a mano:** `grep -rnF` de los títulos de U1, U3 y U4 en `src/components` y `src/pages` → 1, «Gemini Notebook» del `h2` provisorio de `#unidad-3` en `index.astro`, que es de la épica 03. En los componentes de la ruta, 0. El título de la U2 («Gemini») no se puede buscar porque es también el nombre del logo.
- `grep -rn PENDIENTE_ src dist`: 0. Sin servidores levantados.

## Criterios de aceptación

Ver la iteración: 4 de 7 marcados con evidencia. Sin marcar, porque necesitan navegador: teclado y foco, contraste visto con el borde de la U3 en oscuro, y columnas sin desborde.

## No se pudo verificar · pasos para el desarrollador

Ejecuta `pnpm build` y `pnpm preview`, y abre la URL local.

1. **360 px** (DevTools, modo dispositivo): 1 columna; ningún bloque provoca barra horizontal (`document.documentElement.scrollWidth === 360` en la consola); el título de la U1 se ve completo, en varias líneas, sin cortes a media palabra salvo que no quepa.
2. **640 px:** 2 columnas (U1 y U2 arriba, U3 y U4 abajo). **1024 px:** 3 columnas, con la U4 sola en la segunda fila.
3. **Modo claro y oscuro** (botón de modo): colores de la tabla 2.2; en oscuro, la U3 con borde de 1 px `#00B0E8` y en claro sin borde visible; esquina inferior izquierda de 6 px en los 4 bloques.
4. **Teclado:** desde «Ver la ruta», `Enter` baja a `#ruta`; `Tab` recorre U1, U2, U3 y U4 en orden; el anillo se ve en ambos modos (en claro, revisa el de la U1, que es del mismo color que el bloque: queda separado por 3 px de blanco); `Enter` en cada uno lleva a `#unidad-1` … `#unidad-4`.
5. **Recomendado:** con NVDA, cada enlace debería leerse como «Unidad N, título» y luego describir el mini-proyecto y el avance.

## Decisiones tomadas

- Los 4 bloques llevan la esquina asimétrica (ver «Implementación»).
- La lista es `ol`, porque el orden de las unidades es parte del contenido.
- El enlace usa `aria-labelledby` para que su nombre sea solo número y título, como pide la tarea 2, y no todo el texto del bloque.
- El subrayado aparece en el título al pasar el mouse (`group-hover:underline`), como señal de enlace sin agregar colores.
- No se tocaron las secciones de unidad ni sus `h2` provisorios.

## Pendientes y riesgos

- En modo claro, el anillo de foco (`#007EA7`) es del mismo color que el bloque de la U1; se distingue por los 3 px de separación, pero hay que confirmarlo a la vista (paso 4).
- Con 3 columnas, la U4 queda sola en la segunda fila: lo pide la retícula de `DESIGN.md`; si no gusta, es un cambio de diseño, no de esta iteración.

## Revisión

- **Resultado frente al objetivo:** cumplido en el código y medido en el HTML y el CSS generados; queda la revisión visual y con teclado del desarrollador.
- **Qué aprendimos:** en Astro, un salto de línea entre un `</span>` y una expresión no deja espacio en el HTML (salió «Mini-proyecto:Mi prompt maestro»); hay que escribir `{" "}`. Mover la validación de la página al componente mantiene la falla en el build sin una llamada suelta.
- **Qué cambia para lo que sigue:** la 02-04 agrega la sección del instructor siguiendo el mismo patrón (componente propio que reemplaza su sección vacía en `index.astro`). Las comprobaciones de la RDA-009 dependen ahora de que `RutaCurso` esté en la página.

## Commit sugerido

`Épica 2 - Iteración 02-03: agrega la ruta del curso con el mosaico de las 4 unidades desde las colecciones y mueve la validación de unidades y bloques a RutaCurso`
