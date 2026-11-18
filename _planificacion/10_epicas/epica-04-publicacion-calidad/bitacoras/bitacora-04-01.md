# Bitácora 04-01 · Guardia de marcadores y limpieza de la compilación

- **Fecha:** 2026-11-17
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/04-01-guardia-marcadores
- **Estado final:** En revisión

## Resumen

`pnpm build` ahora encadena tres pasos: `astro build`, la limpieza de SVG y la guardia de marcadores.
- **Guardia** (`scripts/guardia-marcadores.mjs`): recorre todos los archivos de texto de `dist/` (todo lo que no es binario, incluidas las descargas `.md` y `.csv`) y termina con código 1 si encuentra `PENDIENTE_` o `VERIFICAR`, nombrando archivo, línea y marcador. Distingue mayúsculas.
- **Limpieza** (`scripts/limpiar-svg.mjs`): borra de `dist/_astro/` los SVG que ningún archivo de texto de `dist/` nombra. Quita los 6 (41 030 B).
- `dist/index.html` queda idéntico byte a byte. Sin dependencias nuevas y sin tocar `astro.config.mjs`.

**Precondición:** rama `iteracion/04-01-guardia-marcadores` sobre `6a31229`, árbol limpio. El desarrollador dio por terminada la corrección 15.1, de la que dependía.

## Archivos creados, modificados o eliminados

| Archivo | Cambio |
| :------ | :----- |
| `scripts/guardia-marcadores.mjs` | Nuevo: guardia de marcadores |
| `scripts/limpiar-svg.mjs` | Nuevo: borra los SVG sin referencia de `dist/_astro/` |
| `package.json` | `build`: `astro build && node scripts/limpiar-svg.mjs && node scripts/guardia-marcadores.mjs` (aprobado el 2026-11-17) |
| `propuestas-documentos-protegidos.md` | P-008 Pendiente |
| `iteracion-04-01-guardia-marcadores.md` | Estado, alcance de la guardia, decisiones y criterios con evidencia |
| `iteracion-04-02-cloudflare-workers.md` | Wrangler con `pnpm dlx` y versión fija, a confirmar allí |
| `iteracion-04-03-analytics-metadatos.md` | Objetivo, entregables, tarea 3, criterio y riesgo sin canónica ni Open Graph |
| `iteracion-04-04-verificacion-final.md` | Línea base 249 616 B y 50 905 B |
| `definicion-epica-04.md` | Alcance 2 y 4, 04-01 En revisión y decisiones |
| `registro-pendientes.md` | Encabezado, estados, 15.1 Terminada, prioridades 16 y 16.1, fila 17, decisiones e historial |

## Por qué Vite emite los SVG

`Portada.astro` (líneas 6 a 9: Gemini, Google, GTD Telsur y Capacita Tu Futuro) y `Redes.astro` (líneas 4 y 5: Chrome y LinkedIn) importan cada `.svg` como componente. Astro dibuja el SVG en línea en el HTML y, como el `import` también es un recurso de Vite, se emite además el archivo con hash en `dist/_astro/`. Ninguna página lo pide.

## Alternativas comparadas

| Alternativa | Cambio | Resultado visible | Costo |
| :---------- | :----- | :---------------- | :---- |
| 1. Importar con `?raw` y volcar con `set:html` | 2 componentes, 6 imports | El SVG pierde las props del componente (`class`, `aria-label`, `aria-hidden`, `focusable`): habría que envolverlo o reescribir los atributos, y el HTML cambia | Medio; riesgo de accesibilidad en los logos con `aria-label` |
| 2. Configurar Vite en `astro.config.mjs` | Configuración de la raíz (requiere aprobación) | En principio igual | Depende de detalles internos de cómo Astro emite los SVG; no se exploró sin aprobación |
| 3. **Borrar en un paso posterior** (elegida) | Script nuevo y `package.json` (ya aprobado) | Idéntico: no toca el código fuente | Bajo; un script de 30 líneas sin dependencias |

Se eligió la 3: es la más simple y la única que deja `dist/index.html` idéntico sin tocar componentes ni configuración. Va en un script aparte de la guardia, para que cada uno tenga una sola responsabilidad. Solo borra SVG cuyo nombre no aparece en ningún `.html`, `.css`, `.js`, `.json`, `.xml`, `.txt` o `.webmanifest` de `dist/`: si un SVG pasa a usarse por URL (por ejemplo, el ícono de la 04-03), se conserva.

## Verificación

- `pnpm exec prettier --write` sobre los 2 scripts. `pnpm astro check`: 0 errores, 0 advertencias, 0 sugerencias. `pnpm build`: «Complete!», 0 líneas `warn`, código 0, con «Limpieza de SVG: 6 sin referencia borrados (41030 B)» y «Guardia de marcadores: 0 marcadores en dist/».
- **Hash:** SHA-256 de `dist/index.html` `b5cf5104d691695774bb57ecfa0fc8f147316e2b9def4e7e5132ac477b69ce7b` antes y después. 249 616 B (50 905 B gzip), sin cambios.
- **SVG en `dist/_astro/`:** 0 (antes 6, 41 030 B).
- **Pruebas reversibles** (`pruebas.mjs` en el scratchpad: copia, agrega una línea, `pnpm build`, restaura y `cmp`). Las 4 terminaron con código 1 y `cmp` 0:
  1. `PENDIENTE_PRUEBA` en `src/content/bloques/u1/bloque-1.md` → `dist\index.html:103 · PENDIENTE_`.
  2. `VERIFICAR` en el mismo bloque → `dist\index.html:103 · VERIFICAR`.
  3. `PENDIENTE_PRUEBA` en `public/descargas/dataset-ficticio-diccionario.md` → `dist\descargas\dataset-ficticio-diccionario.md:26 · PENDIENTE_`.
  4. `VERIFICAR` en `public/descargas/dataset-ficticio-solicitudes-gtd-t3-2026.csv` → `dist\descargas\dataset-ficticio-solicitudes-gtd-t3-2026.csv:262 · VERIFICAR`.
- **Dependencias:** `git diff` de `package.json` solo cambia la línea `build`; `pnpm-lock.yaml` sin diferencias.
- **Regresiones** (`medir.mjs` y `prompts.mjs` en el scratchpad): 24 de 24 prompts idénticos a su archivo; 4 etiquetas `<script>` (1080 B gzip con las etiquetas); 1 `h1`; 0 `PENDIENTE_` y 0 `VERIFICAR`. Sin servidores levantados.

## Criterios de aceptación

Ver la iteración: 4 de 5 marcados con evidencia. Sin marcar: las regresiones, porque falta revisar 360 px en el navegador. El resto de ese criterio está medido.

## No se pudo verificar · pasos para el desarrollador

1. `pnpm build` y `pnpm preview`: en 360 px y en escritorio, en ambos modos, los 6 logos e íconos (portada y redes) se ven igual que antes. Es lo esperado, porque el HTML y el CSS no cambiaron, pero no se abrió en un navegador.

## Decisiones tomadas

- La limpieza de SVG va en un script aparte de la guardia y antes que ella.
- La guardia revisa todo lo que no es binario, en vez de una lista de extensiones de texto: una descarga nueva con otra extensión queda cubierta sin tocar el script.
- La línea del error incluye el número de línea, además del archivo y el marcador.

## Pendientes y riesgos

- **P-008** pendiente en [propuestas-documentos-protegidos](../../../00_producto/propuestas-documentos-protegidos.md): además del cliente, actualiza la regla 3 al alcance real de la guardia.
- Si la guardia falla, la limpieza ya corrió: `dist/` queda sin los SVG, lo que no afecta, porque nada los usa.
- Un SVG que se quiera servir como archivo debe referenciarse por su URL desde `dist/`, o la limpieza lo borra.

## Revisión

- **Resultado frente al objetivo:** cumplido y medido; falta la revisión en el navegador.
- **Qué aprendimos:**
  - Comparar el hash de `index.html` es la forma más barata de demostrar que un cambio de compilación no toca lo visible.
  - Probar la guardia también en descargas mostró que una lista de extensiones habría dejado fuera `.md` y `.csv`.
- **Qué cambia para lo que sigue:** la 04-02 parte con `pnpm build` protegido por la guardia y debe confirmar la versión de Wrangler para `pnpm dlx`.

## Commit sugerido

`Épica 4 - Iteración 04-01: agrega la guardia de marcadores sobre todo dist/, borra los 6 SVG sin referencia tras el build y registra la P-008`
