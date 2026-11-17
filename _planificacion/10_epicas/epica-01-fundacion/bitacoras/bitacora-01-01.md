# Bitácora 01-01 · Andamiaje del proyecto

- **Fecha:** 2026-11-17
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/01-01-andamiaje
- **Estado final:** En revisión

## Resumen

Se reemplazó el `index.html` vacío por un proyecto Astro 7 con salida estática, TypeScript estricto, Tailwind CSS v4 por su plugin de Vite y PNPM 12 en modo estricto. La página única compila con `lang="es-CL"` y un `h1` provisorio, no envía JavaScript y aplica las clases de Tailwind en el CSS generado. Prettier queda configurado con su plugin de Astro y excluye la documentación.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `package.json` | Nuevo: scripts `dev`, `build`, `preview`, `astro`, `format`; `engines.node` `>=24.16.0`; `packageManager` `pnpm@12.21.0`; versiones exactas |
| `pnpm-lock.yaml` | Nuevo: generado por `pnpm install` |
| `.npmrc` | Nuevo: `engine-strict=true` |
| `astro.config.mjs` | Nuevo: `output: "static"` y plugin `@tailwindcss/vite` |
| `tsconfig.json` | Nuevo: extiende `astro/tsconfigs/strict` |
| `src/pages/index.astro` | Nuevo: `<html lang="es-CL">`, `h1` provisorio con `text-3xl font-bold` |
| `src/styles/global.css` | Nuevo: `@import "tailwindcss";` |
| `.prettierrc` | Nuevo: plugin `prettier-plugin-astro` |
| `.prettierignore` | Nuevo: excluye `*.md`, `_planificacion/`, `.claude/` y archivos generados |
| `.gitignore` | Agrega `node_modules/`, `dist/`, `.astro/`, `.wrangler/`, `.env*` (salvo `.env.example`) y `.dev.vars` |
| `index.html` | Eliminado (aprobado por el desarrollador) |
| `_planificacion/00_producto/registro-pendientes.md` | Estado, fila 01-05, backlog e historial |
| `iteracion-01-01-andamiaje.md` | Estado y criterios con evidencia |

## Verificación

- `pnpm install` (PNPM 11.28.2 instalado en el equipo): Corepack descargó PNPM 12.21.0 por `packageManager` y la instalación terminó con «Done in 6.3s using pnpm v12.21.0», 282 paquetes.
- `pnpm install --frozen-lockfile` en una copia limpia (solo `package.json`, `pnpm-lock.yaml` y `.npmrc`, en el directorio temporal): código de salida 0, sin líneas `WARN`, `peer` ni `missing`.
- `pnpm build`: «1 page(s) built», «Complete!», sin advertencias.
- `pnpm astro check`: 3 archivos, 0 errores, 0 advertencias, 0 sugerencias.
- `pnpm format`: formateó `src/pages/index.astro` (el `h1` largo en varias líneas); el resto sin cambios. No tocó documentos `.md`.
- `dist/`: contiene solo `index.html` y `_astro/index.C6MAPulA.css`; 0 archivos `.js`.
- CSS generado: contiene `.text-3xl{font-size:var(--text-3xl);…}` y `.font-bold{…font-weight:var(--font-weight-bold)}`.
- `pnpm preview` (puerto 4321): respuesta HTTP 200 con `<html lang="es-CL">` y el `h1`; el servidor se detuvo después (el puerto quedó libre).
- Búsqueda de `PENDIENTE_` en `src/` y `dist/`: 0 coincidencias.

## Criterios de aceptación

- [x] `pnpm install` en una copia limpia termina sin advertencias de dependencias faltantes (`--frozen-lockfile`, salida 0, sin advertencias).
- [x] `pnpm build` termina sin errores y genera `dist/index.html` con `lang="es-CL"`.
- [x] `pnpm astro check` termina con 0 errores.
- [x] `dist/` no contiene archivos `.js` (0 encontrados).
- [x] Una clase de Tailwind usada en `index.astro` aparece aplicada en el CSS generado (`.text-3xl` y `.font-bold`).

## No se pudo verificar

- La revisión visual en 360 px y escritorio, en modo claro y oscuro, no se hizo con captura de pantalla; se comprobó por HTTP el HTML servido. La página todavía no tiene tokens, modos ni elementos interactivos (llegan en 01-02 y 01-03), así que no hay nada que recorrer con el teclado más allá del `h1`.

## Revisión manual del desarrollador

- Abrir `pnpm preview` y confirmar que se ve el título en negrita y tamaño grande (prueba de Tailwind).

## Decisiones tomadas

- TypeScript 6.0.3 y no 7.0.2: `@astrojs/check` 0.9.12 solo acepta `typescript ^5 || ^6`.
- Node.js `>=24.16.0` en `engines` (24 Krypton, LTS en mantenimiento), y no la 26 activa, para trabajar con la versión instalada en el equipo.
- PNPM 12.21.0 en `packageManager`. El paso desde la 11.28.2 lo hizo solo Corepack, sin intervención.
- Se eliminó `index.html` de la raíz con aprobación del desarrollador, después de crear `src/pages/index.astro`.
- Se agregó `.prettierignore` para que `pnpm format` (`prettier --write .`) no reformatee los documentos protegidos ni la planificación.
- Se agregó al registro la iteración 01-05 (tabla de estado y backlog, prioridad 4, tipo Mejora), que existía en la épica pero faltaba en el registro.

## Pendientes y riesgos

- Hay dos filas del backlog con prioridad 4 (01-04 y 01-05); el desarrollador decidió no renumerar.
- Si alguien instala con Node 22, `engine-strict` detiene la instalación: es lo esperado.

## Revisión

- **Resultado frente al objetivo:** cumplido. El proyecto compila una página única en español de Chile, sin JavaScript, con Tailwind v4 funcionando.
- **Qué aprendimos:** antes de proponer versiones mayores hay que revisar las dependencias de pares (`@astrojs/check` impidió usar TypeScript 7), y `prettier --write .` necesita excluir la documentación protegida.
- **Qué cambia para lo que sigue:** la 01-02 agrega los tokens en `src/styles/global.css` (que hoy solo importa Tailwind) y las fuentes en `public/fuentes/`. El `h1` provisorio lo reemplaza el layout de la 01-03. Fuera de eso, nada cambia en el backlog.

## Commit sugerido

`Épica 1 - Iteración 01-01: crea el proyecto Astro con TypeScript estricto, Tailwind CSS v4 y PNPM estricto, y elimina index.html`
