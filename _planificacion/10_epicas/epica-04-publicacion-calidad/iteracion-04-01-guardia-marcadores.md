# Iteración 04-01 · Guardia de marcadores y limpieza de la compilación

- **Épica:** 04 · Publicación, medición y calidad
- **Estado:** En revisión
- **Rama sugerida:** iteracion/04-01-guardia-marcadores
- **Depende de:** 03-05 y la corrección «Plantillas con el mismo nombre al descargar» (prioridad 15.1, Terminada el 2026-11-17)
- **Bitácora:** [bitacora-04-01](bitacoras/bitacora-04-01.md)
- **Especificación:** —
- **RDA relacionadas:** RDA-002

## Objetivo

Que `pnpm build` falle si cualquier archivo de texto de `dist/` (el HTML y las descargas `.md` y `.csv`) contiene un marcador `PENDIENTE_` o `VERIFICAR`, y que `dist/_astro/` deje de traer los SVG que ninguna página referencia.

## Punto de partida

- `package.json` tiene `"build": "astro build"`, sin ningún paso posterior.
- La 03-05 midió con un comando temporal 0 `PENDIENTE_` y 0 `VERIFICAR` en `dist/`; no hay guardia permanente (regla de contenido 3 de `AGENTS.md`).
- La bitácora de cierre de la 03 midió 6 SVG en `dist/_astro/` (41 030 B) sin ninguna referencia en `index.html`: se usan en línea y Vite emite además el archivo.
- `AGENTS.md` define al cliente de dos formas: la sección 1 dice Capacita Tu Futuro «para trabajadores de GTD Telsur» y la regla de contenido 3 habla de «datos del cliente (Capacita Tu Futuro o GTD)».

## Alcance y entregables

- Un script propio, sin dependencias, que recorre `dist/` después de `astro build` y termina con error si encuentra un marcador, nombrando el archivo y el marcador.
- El script `build` de `package.json` encadena `astro build`, la limpieza de SVG y la guardia (cambio de configuración aprobado el 2026-11-17).
- `dist/_astro/` sin los 6 SVG sin referencia, con la alternativa elegida comparada en la bitácora.
- Propuesta P-008 en `propuestas-documentos-protegidos.md`.

## Decisiones del desarrollador

- 2026-11-17: la guardia es un script propio que corre después de `astro build` desde `package.json`, sin dependencias nuevas.
- 2026-11-17: la guardia revisa todos los archivos de texto de `dist/`, incluidos `.md` y `.csv`, distingue mayúsculas y nombra el archivo y el marcador.
- 2026-11-17: los SVG sin referencia se borran con un paso posterior a la compilación (`scripts/limpiar-svg.mjs`), sin tocar `astro.config.mjs` (comparación en la bitácora).

## Tareas

1. Escribir la guardia (`scripts/guardia-marcadores.mjs`, solo con módulos de Node) que busque `PENDIENTE_` y `VERIFICAR` en todos los archivos de texto de `dist/` (todo lo que no sea binario: `.html`, `.md`, `.csv`, `.css`, `.js` y otros) y salga con código distinto de 0 si encuentra alguno.
2. Encadenarla en el script `build` de `package.json` (`astro build && node scripts/guardia-marcadores.mjs`) y comprobar que `pnpm build` sigue sin advertencias.
3. Pruebas reversibles: insertar un `PENDIENTE_` y luego un `VERIFICAR` de prueba en un archivo de contenido y en una descarga `.md` o `.csv`, comprobar que `pnpm build` falla con el mensaje esperado y restaurar el archivo idéntico (`cmp`).
4. Diagnosticar por qué Vite emite los 6 SVG (qué importación los genera) y comparar en la bitácora al menos dos alternativas para quitarlos: importarlos con `?raw` o como componente en línea, ajustar la configuración de Vite en `astro.config.mjs`, o borrarlos en el paso posterior a la compilación. Elegir la más simple que no toque el resultado visible.
5. Aplicar la alternativa elegida; si exige editar `astro.config.mjs`, pedir aprobación antes.
6. Registrar la P-008 (sección 1 frente a la regla de contenido 3 de `AGENTS.md`), con el texto actual copiado literalmente y el texto propuesto, sin editar `AGENTS.md`.
7. Ejecutar `pnpm build`, `pnpm astro check` y las regresiones de la épica 03.
8. Escribir la bitácora y actualizar el registro.

## Criterios de aceptación

- [x] `pnpm build` termina con código 0 sobre el contenido actual y con código distinto de 0 en cada prueba reversible (`PENDIENTE_` y `VERIFICAR`, en un bloque de contenido y en las descargas `.md` y `.csv`), con el archivo y el marcador en el mensaje; los archivos de prueba quedan idénticos (`cmp`). Evidencia: 4 de 4 pruebas con código 1 y `cmp` 0 (bitácora).
- [x] `package.json` y `pnpm-lock.yaml` sin dependencias nuevas (`git diff`). Evidencia: `package.json` solo cambia el script `build`; `pnpm-lock.yaml` sin diferencias.
- [x] `dist/_astro/` sin SVG que no referencie ningún archivo de `dist/` (conteo con un comando), y el hash de `dist/index.html` igual al de antes, o la diferencia explicada en la bitácora. Evidencia: 0 SVG en `dist/_astro/` (antes 6, 41 030 B); SHA-256 `b5cf5104…69ce7b` antes y después.
- [x] P-008 registrada con su fila `Pendiente` en la tabla de estado.
- [ ] Regresiones: `pnpm astro check` 0/0/0; 24 de 24 prompts iguales; 4 etiquetas `<script>`; 1 `h1`; sin desborde en 360 px. Medido: check 0/0/0, 24 de 24, 4 etiquetas, 1 `h1`. Sin marcar: no se revisó en el navegador a 360 px (el HTML es idéntico byte a byte, pero no se abrió la página).

## Riesgos

- Que la guardia detecte la palabra en un texto legítimo del curso (por ejemplo, «verificar» en minúsculas): la búsqueda distingue mayúsculas y se prueba contra el contenido actual.
- Que quitar los SVG cambie el HTML en línea: se compara el hash de `dist/index.html` antes y después.

## Fuera de alcance

- Configurar Wrangler (04-02).
- Editar `AGENTS.md`: la P-008 la aplica el desarrollador.

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Aprobación del cambio de `astro.config.mjs`, solo si la alternativa elegida lo necesita.
