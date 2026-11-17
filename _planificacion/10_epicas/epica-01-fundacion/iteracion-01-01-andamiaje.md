# Iteración 01-01 · Andamiaje del proyecto

- **Épica:** 01 · Fundación y sistema de diseño
- **Estado:** Terminada
- **Rama sugerida:** iteracion/01-01-andamiaje
- **Depende de:** —
- **RDA relacionadas:** RDA-002

## Objetivo

Reemplazar el `index.html` vacío por un proyecto Astro con TypeScript estricto, Tailwind CSS v4 y PNPM estricto, que compile una página única en español de Chile.

## Punto de partida

- El repositorio solo tiene `index.html` (plantilla vacía con `lang="en"`) y `.gitignore` (solo `.idea`). Verifícalo leyendo ambos archivos antes de escribir.

## Alcance y entregables

- `package.json` con los scripts `dev`, `build`, `preview`, `astro` y `format`, `engines` con la versión de Node.js y `packageManager` con la versión de PNPM.
- `.npmrc` con `engine-strict=true`.
- `astro.config.mjs` con salida estática y el plugin de Tailwind CSS v4 para Vite.
- `tsconfig.json` con el preset estricto de Astro.
- `src/pages/index.astro` con `<html lang="es-CL">`, un `h1` provisorio y `src/styles/global.css` con `@import "tailwindcss"`.
- Prettier con su plugin de Astro y `.prettierrc`.
- `.gitignore` con `node_modules/`, `dist/`, `.astro/`, `.wrangler/`, `.env*` (salvo `.env.example`), `.dev.vars` y `.idea`.

## Decisiones del desarrollador

- 2026-11-17: stack Astro + Tailwind CSS v4 + PNPM, sin framework de componentes interactivos (RDA-002).

## Tareas

1. Proponer al desarrollador las versiones estables vigentes de Node.js (LTS), PNPM, Astro, Tailwind CSS v4, TypeScript y Prettier, con su peso, y esperar aprobación antes de instalar.
2. Crear `package.json`, `.npmrc`, `astro.config.mjs` y `tsconfig.json` con la configuración del alcance.
3. Instalar las dependencias aprobadas con PNPM.
4. Crear `src/pages/index.astro` y `src/styles/global.css`, y eliminar `index.html` de la raíz (con aprobación, porque es eliminar un archivo).
5. Configurar Prettier con el plugin de Astro.
6. Actualizar `.gitignore`.
7. Ejecutar `pnpm build`, `pnpm astro check` y `pnpm format`, y revisar la página con `pnpm preview`.

## Criterios de aceptación

- [x] `pnpm install` en una copia limpia termina sin advertencias de dependencias faltantes. Evidencia: `pnpm install --frozen-lockfile` en una copia temporal, salida 0, sin `WARN`/`peer`/`missing`.
- [x] `pnpm build` termina sin errores y genera `dist/index.html` con `lang="es-CL"`. Evidencia: «1 page(s) built… Complete!»; `Select-String` encuentra `lang="es-CL"`.
- [x] `pnpm astro check` termina con 0 errores. Evidencia: 3 archivos, 0 errores, 0 advertencias, 0 sugerencias.
- [x] `dist/` no contiene archivos `.js` (la página no envía JavaScript todavía). Evidencia: 0 archivos `.js`; `dist/` tiene solo `index.html` y un `.css`.
- [x] Una clase de Tailwind usada en `index.astro` aparece aplicada en el CSS generado. Evidencia: el CSS contiene `.text-3xl{font-size:var(--text-3xl)…}` y `.font-bold{…}`.

Detalle en [bitacora-01-01.md](bitacoras/bitacora-01-01.md).

## Fuera de alcance

- Tokens de diseño, fuentes y componentes (01-02 y 01-03).
- `wrangler.jsonc` (épica 04).

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Aprobación de las versiones y dependencias propuestas en la tarea 1.
