# Bitácora 04-02 · Configuración de Cloudflare Workers y publicación desde GitHub

- **Fecha:** 2026-11-18
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/04-02-cloudflare-workers
- **Estado final:** En revisión

## Resumen

El repositorio trae `wrangler.jsonc` para el Worker `curso-gemini`. Ese Worker no tiene código y solo publica `dist/` como recursos estáticos.
- `pnpm dlx wrangler@4.164.0` responde y su `deploy --dry-run` lee los 21 archivos de `dist/` con código 0, sin iniciar sesión.
- No hay dependencias nuevas, `package.json`, `pnpm-lock.yaml` y `astro.config.mjs` no cambian, y `dist/index.html` queda idéntico byte a byte.
- La conexión a GitHub (Workers Builds) y el primer despliegue los hace el desarrollador después del merge a `main`.

**Precondición:** rama `iteracion/04-02-cloudflare-workers` sobre `6f5ff74` (P-008 aplicada en `AGENTS.md`). Los únicos cambios sin commit eran los 5 documentos de la épica 04 que reemplazó el desarrollador.

## Archivos creados, modificados o eliminados

| Archivo | Cambio |
| :------ | :----- |
| `wrangler.jsonc` | Nuevo: `name` `curso-gemini`, `compatibility_date` `2026-11-18`, `workers_dev: true` y `assets.directory` `./dist`, sin `main` (aprobado el 2026-11-18) |
| `definicion-epica-04.md`, `iteracion-04-01-guardia-marcadores.md`, `iteracion-04-02-cloudflare-workers.md`, `iteracion-04-03-analytics-metadatos.md`, `iteracion-04-04-verificacion-final.md` | Reemplazados por el desarrollador antes de la iteración. El agente solo cambió el estado de la 04-02 (iteración y épica) y los criterios de la 04-02, con su evidencia |
| `propuestas-documentos-protegidos.md` | P-008 Aplicada (commit 6f5ff74) |
| `registro-pendientes.md` | Encabezado, 04-01 Terminada, 04-02 En revisión, filas 16 y 16.1, decisiones por tomar, propuesta de Preview Builds e historial |

## Decisiones tomadas

- `wrangler.jsonc` no lleva `$schema`: apuntaría a `node_modules/wrangler/`, que no existe, porque Wrangler no es una dependencia.
- El comentario va en la primera línea del archivo, que JSONC admite. Wrangler lo leyó sin error en el dry-run.

## Verificación

- **Wrangler:** `pnpm dlx wrangler@4.164.0 --version` → `4.164.0` (pnpm v12.21.0). `pnpm view wrangler@4.164.0 engines` → `node >=22.12.0`, que es compatible con `engines.node >=24.16.0`. La ayuda de `deploy` lista `--dry-run` y `--assets`.
- **Dry-run** (después de `pnpm build`): «Read 21 files from the assets directory …\dist», «Total Upload: 0.43 KiB», «No bindings found.» y «--dry-run: exiting now.», con código 0. No pidió credenciales. Wrangler avisa que reúne telemetría anónima y crea `.wrangler/tmp`, que está en `.gitignore`.
- **Secretos:** `git grep -nIiE "token|api_key|CLOUDFLARE_"` encuentra solo tokens de diseño, tokens de LLM del contenido, los paquetes `comma/space-separated-tokens` del lockfile y textos de planificación. Hay 0 `api_key` y 0 `CLOUDFLARE_`. `wrangler.jsonc` (aún sin versionar) no contiene ninguno. `.wrangler/` y `.dev.vars` siguen en `.gitignore` (líneas 5 y 10). Los archivos `.env` no se buscan, porque los bloquea el hook.
- **Configuración:** `git diff --stat package.json pnpm-lock.yaml astro.config.mjs` vacío.
- **Regresiones:** `pnpm build` termina con código 0, 0 líneas `warn`, «Limpieza de SVG: 6 sin referencia borrados (41030 B)» y «Guardia de marcadores: 0 marcadores en dist/». `pnpm astro check` da 0 errores, 0 advertencias y 0 sugerencias. `medir.mjs` (scratchpad) mide 24 de 24 prompts idénticos a su frontmatter, 4 `<script>`, 1 `h1` y 0 marcadores.
- **Hash:** SHA-256 de `dist/index.html` `b5cf5104d691695774bb57ecfa0fc8f147316e2b9def4e7e5132ac477b69ce7b`, el mismo de la 04-01.
- No se levantaron servidores. No hubo inicio de sesión, despliegue real ni tokens.

## Criterios de aceptación

Ver la iteración: 5 de 6 marcados con evidencia. Queda sin marcar el primer despliegue desde `main`, que hace el desarrollador después del merge.

## Pasos del desarrollador (después del merge a `main`)

1. En Cloudflare, ir a Workers & Pages > Create application > Import a repository y elegir `ffelipecuevasc/curso-gemini`. Nombre del Worker: `curso-gemini`, igual al `name` de `wrangler.jsonc`.
2. Configurar el build: comando de build `pnpm build`, comando de deploy `pnpm dlx wrangler@4.164.0 deploy` y directorio raíz vacío. Variables de compilación: `NODE_VERSION=24.18.0` y `PNPM_VERSION=12.21.0`.
3. En Settings > Build > Branch control, desactivar Preview Builds y confirmar `main` como rama de producción.
4. Si Cloudflare abre un pull request de configuración automática, no lo aceptes sin revisarlo en el chat.
5. En el log del primer build, revisar las versiones de Node (24.18.0) y pnpm (12.21.0), la línea «Guardia de marcadores: 0 marcadores en dist/» y el despliegue.
6. Abrir `https://curso-gemini.<subdominio>.workers.dev`, confirmar que se ve el `h1` y avisar la fecha y la URL para marcar el último criterio. Si el build falla, compartir el log.

## Cómo revertir

- **Una versión publicada:** en el panel del Worker, Deployments, volver a la versión anterior.
- **Un cambio de `main`:** revertir el commit en `main`. Eso dispara un build nuevo con la versión anterior.
- **Esta iteración completa:** borrar `wrangler.jsonc` y desconectar el repositorio en Settings > Build. El sitio publicado sigue en línea hasta que se borre el Worker en el panel.

## Pendientes y riesgos

- La imagen de build podría no respetar `PNPM_VERSION=12.21.0` o `NODE_VERSION=24.18.0`. Se ve en el log del primer build y, si falla, se propone el ajuste en el chat antes de tocar el repositorio.
- `pnpm dlx` descarga Wrangler en cada build. Eso alarga el build, pero no cambia el sitio.
- Las URL del panel y los nombres de menú vienen de la documentación de Cloudflare y no se comprobaron en el panel.

## Revisión

- **Resultado frente al objetivo:** cumplido en el repositorio y medido en local. Falta el primer despliegue del desarrollador.
- **Qué aprendimos:**
  - `deploy --dry-run` valida `wrangler.jsonc` y lee `dist/` sin credenciales, así que permite probar la configuración antes de conectar el panel.
  - Los hooks bloquean cualquier comando Bash que nombre una ruta `.md` o `.env`. Las ediciones de documentos se hacen con Edit y las búsquedas de secretos, con `git grep`.
- **Qué cambia para lo que sigue:** la 04-03 parte con el sitio publicado desde `main`. Cada merge publica, así que el script de Web Analytics no debe entrar sin su token.

## Commit sugerido

`Épica 4 - Iteración 04-02: agrega wrangler.jsonc del Worker curso-gemini con pnpm dlx wrangler@4.164.0, dry-run y regresiones medidas, y marca la P-008 aplicada`
