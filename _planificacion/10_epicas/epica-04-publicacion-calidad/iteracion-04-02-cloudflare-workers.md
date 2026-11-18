# Iteración 04-02 · Configuración de Cloudflare Workers y publicación desde GitHub

- **Épica:** 04 · Publicación, medición y calidad
- **Estado:** Terminada
- **Rama sugerida:** iteracion/04-02-cloudflare-workers
- **Depende de:** 04-01 (Terminada) y la P-008 aplicada en `AGENTS.md` (commit 6f5ff74)
- **Especificación:** —
- **RDA relacionadas:** RDA-002

## Objetivo

Dejar `wrangler.jsonc` en el repositorio para que el desarrollador cree el Worker `curso-gemini` en Cloudflare conectado a GitHub (Workers Builds), y que cada cambio que llegue a `main` se compile con la guardia de la 04-01 y se publique en la URL `workers.dev`.

## Punto de partida

- No existe `wrangler.jsonc` ni Wrangler en `package.json`.
- `pnpm build` encadena `astro build`, `scripts/limpiar-svg.mjs` y `scripts/guardia-marcadores.mjs` (04-01).
- `.gitignore` ya incluye `.wrangler/` y `.dev.vars` (medido en el análisis previo a la 04-01).
- `package.json` fija `engines.node` en `>=24.16.0` y `packageManager` en `pnpm@12.21.0`; `.npmrc` tiene `engine-strict=true`.
- Según la documentación de Cloudflare (no verificado en el panel): la imagen de Workers Builds usa Node.js 24.18.0 por defecto desde el 2026-07-30 y pnpm 10.11.1 si no se fija `PNPM_VERSION`; el comando de deploy por defecto es `npx wrangler deploy` y se puede cambiar; el nombre del Worker en el panel debe coincidir con `name` de `wrangler.jsonc`, y si el repositorio no trae ese archivo, Cloudflare propone una configuración automática por pull request.

## Alcance y entregables

- `wrangler.jsonc` con `name: "curso-gemini"`, `compatibility_date` del día, `assets.directory: "./dist"` y `workers_dev: true`, sin `main` ni código de Worker.
- Comprobación local con `pnpm dlx wrangler@4.164.0` (`engines`, ayuda de `deploy` y `deploy --dry-run`), sin iniciar sesión ni publicar.
- Pasos exactos para el desarrollador en la bitácora: crear el Worker conectado a GitHub, configurar el build y las variables, desactivar Preview Builds, comprobar el primer despliegue y cómo revertir.

## Decisiones del desarrollador

- 2026-11-17: Wrangler con `pnpm dlx` y versión fija, sin dependencia de desarrollo ni RDA nueva.
- 2026-11-18: versión `4.164.0` (medida en la 04-01: pide Node `>=22.12.0`, compatible con `engines`).
- 2026-11-18: nombre del Worker `curso-gemini`; publicación continua con Workers Builds conectado a `ffelipecuevasc/curso-gemini`, rama de producción `main`.
- 2026-11-18: Preview Builds desactivados (Cloudflare exige que el comando de vista previa llame a `npx`).
- 2026-11-18: variables de compilación en el panel `NODE_VERSION=24.18.0` y `PNPM_VERSION=12.21.0`.
- 2026-11-18: la creación de `wrangler.jsonc` con estos valores queda aprobada.

## Tareas

1. Crear `wrangler.jsonc` con los valores de «Alcance y entregables» y un comentario breve que diga que solo publica `dist/` como recursos estáticos.
2. Comprobar con `pnpm dlx wrangler@4.164.0 --version` y la ayuda de `deploy` que la versión responde y que su `engines` es compatible con el de `package.json`.
3. Ejecutar `pnpm build` y luego `pnpm dlx wrangler@4.164.0 deploy --dry-run`, sin iniciar sesión. Si pide credenciales o red, no insistir y anotar el motivo.
4. Revisar que no haya tokens ni secretos versionados (búsqueda de `token`, `api_key` y `CLOUDFLARE_`) y que `.dev.vars` y `.wrangler/` sigan en `.gitignore`.
5. Ejecutar `pnpm astro check` y las regresiones, y comparar el hash de `dist/index.html` con el de la 04-01.
6. Escribir en la bitácora los pasos del desarrollador (sección siguiente) y cómo revertir.
7. Actualizar el registro: 04-01 Terminada, 04-02 En revisión, P-008 Aplicada, decisiones por tomar e historial.

## Tareas del desarrollador

Se hacen **después** del merge de esta iteración a `main`, porque el Worker se conecta al repositorio y lee `wrangler.jsonc` de `main`.

1. Crear el Worker `curso-gemini` desde el repositorio (Workers & Pages > Create application > Import a repository).
2. Configurar el build: comando `pnpm build`, comando de deploy `pnpm dlx wrangler@4.164.0 deploy`, directorio raíz vacío (la raíz del repositorio) y variables `NODE_VERSION=24.18.0` y `PNPM_VERSION=12.21.0`.
3. Desactivar Preview Builds (Settings > Build > Branch control) y confirmar `main` como rama de producción.
4. Revisar el log del primer build: versiones de Node y pnpm, «Guardia de marcadores: 0 marcadores en dist/» y el despliegue.
5. Abrir la URL `curso-gemini.<subdominio>.workers.dev` y avisar la URL publicada.

## Criterios de aceptación

- [x] `wrangler.jsonc` con `name` `curso-gemini`, `assets.directory` igual a `./dist` y `workers_dev: true`; sin `main` ni código de Worker. Evidencia: archivo con esos valores y `compatibility_date` `2026-11-18`, sin `main`; el dry-run dice «No bindings found».
- [x] `pnpm dlx wrangler@4.164.0` responde y su `engines` es compatible con `package.json`, o la bitácora dice por qué no se pudo medir. Evidencia: `--version` → `4.164.0`; `pnpm view wrangler@4.164.0 engines` → `node >=22.12.0`, compatible con `>=24.16.0`; la ayuda de `deploy` lista `--dry-run` y `--assets`.
- [x] `deploy --dry-run` termina sin errores, o la bitácora dice por qué no se ejecutó. Evidencia: tras `pnpm build`, «Read 21 files from the assets directory», «--dry-run: exiting now.», código 0, sin iniciar sesión.
- [x] Ningún token ni secreto en el repositorio: búsqueda de `token`, `api_key` y `CLOUDFLARE_` en los archivos versionados sin resultados nuevos; `package.json` y `pnpm-lock.yaml` sin cambios. Evidencia: `git grep -iE` solo da tokens de diseño, tokens de LLM, paquetes `*-separated-tokens` del lockfile y textos de planificación; 0 `api_key`, 0 `CLOUDFLARE_`; `wrangler.jsonc` sin ninguno; `.wrangler/` y `.dev.vars` en `.gitignore`; `git diff --stat` de `package.json`, `pnpm-lock.yaml` y `astro.config.mjs` vacío.
- [x] Regresiones: `pnpm build` sin advertencias con limpieza y guardia; `pnpm astro check` 0/0/0; 24 de 24 prompts; 4 etiquetas `<script>`; 1 `h1`; hash de `dist/index.html` igual al de la 04-01. Evidencia: build código 0 con 0 líneas `warn`, limpieza de 6 SVG (41030 B) y guardia con 0 marcadores; check 0/0/0; 24 de 24; 4; 1; SHA-256 `b5cf5104…69ce7b`, igual.
- [x] Primer despliegue desde `main` con Workers Builds y URL respondiendo 200 con el `h1` (dicho por el desarrollador, con fecha y URL). Evidencia: el desarrollador dijo el 2026-11-18 que el Worker está publicado en `https://curso-gemini.felipe-cuevas.workers.dev/`; ese día, en la 04-03, `curl` dio 200 y 1 `h1` (`titulo-inicio`).

## Riesgos

- Que la imagen de build no use pnpm 12.21.0 aunque se fije `PNPM_VERSION`: se revisa en el log del primer build; si falla, la bitácora y el chat proponen el ajuste antes de tocar el repositorio.
- Que `engine-strict=true` haga fallar la instalación si el build usa un Node menor: se fija `NODE_VERSION=24.18.0`.
- Que el nombre del panel no coincida con `name`: Cloudflare falla el build o abre un pull request de corrección. Se escribe `curso-gemini` igual en ambos lados.
- Que Cloudflare abra un pull request de configuración automática: no se acepta sin revisarlo en el chat.
- Que `pnpm dlx` descargue Wrangler en cada build: aumenta el tiempo de compilación, no el sitio publicado.
- Que se publique un marcador olvidado: la guardia de la 04-01 hace fallar `pnpm build` y Cloudflare no despliega.

## Despliegue

- Lo hace Workers Builds en cada push a `main`: `pnpm build` y luego `pnpm dlx wrangler@4.164.0 deploy`.
- Después del primer despliegue: la URL `workers.dev` responde 200 con el `h1` de la página.
- Para revertir: en el panel, Deployments del Worker, volver a la versión anterior; o revertir el commit en `main`, lo que dispara un nuevo despliegue.

## Fuera de alcance

- Web Analytics, ícono, `robots.txt`, 404 y licencia (04-03).
- Preview Builds, dominio propio y GitHub Actions.

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- La URL publicada y, si algo falla, el log del build.