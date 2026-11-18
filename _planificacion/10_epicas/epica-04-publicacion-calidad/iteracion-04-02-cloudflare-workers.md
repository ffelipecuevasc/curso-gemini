# Iteración 04-02 · Configuración de Cloudflare Workers

- **Épica:** 04 · Publicación, medición y calidad
- **Estado:** Pendiente
- **Rama sugerida:** iteracion/04-02-cloudflare-workers
- **Depende de:** 04-01
- **Especificación:** —
- **RDA relacionadas:** RDA-002

## Objetivo

Dejar `wrangler.jsonc` listo para publicar `dist/` como recursos estáticos de Cloudflare Workers, para que el desarrollador haga la primera publicación en la URL `workers.dev`.

## Punto de partida

- No existe `wrangler.jsonc` ni Wrangler en `package.json`.
- PNPM estricto: `npx` no se usa en el proyecto.

## Alcance y entregables

- `wrangler.jsonc` con el nombre del Worker, `compatibility_date` y `assets.directory` apuntando a `./dist`, sin código de Worker.
- Wrangler se ejecuta con `pnpm dlx wrangler@<versión>`, con versión fija y sin dependencia nueva (decisión del desarrollador, 2026-11-17).
- Los pasos de publicación para el desarrollador en la bitácora.

## Decisiones del desarrollador

- 2026-11-17: Wrangler con `pnpm dlx` y versión fija, sin dependencia de desarrollo ni RDA nueva. La versión exacta se confirma en esta iteración. Referencia medida en la 04-01: `pnpm view wrangler` dio 4.164.0, que pide Node `>=22.12.0`, compatible con `engines` (`>=24.16.0`).

## Tareas

1. Confirmar con el desarrollador la versión exacta de Wrangler para `pnpm dlx wrangler@<versión>` y comprobar que su `engines` es compatible con el de `package.json`.
2. Anotar la versión confirmada en la bitácora y en los pasos de publicación.
3. Pedir al desarrollador el nombre del Worker y escribir `wrangler.jsonc` (cambio de configuración, con aprobación).
4. Revisar que el repositorio no tenga tokens ni secretos (`wrangler.jsonc`, `package.json`, `git diff`) y que `.dev.vars` y `.wrangler/` estén en `.gitignore`.
5. Comprobar la configuración sin publicar, con la validación local que ofrezca Wrangler (por ejemplo `wrangler deploy --dry-run`), si el desarrollador lo autoriza.
6. Escribir en la bitácora los pasos exactos de la primera publicación y cómo revertirla.
7. Ejecutar `pnpm build`, `pnpm astro check` y las regresiones.
8. Escribir la bitácora y actualizar el registro.

## Tareas del desarrollador

1. Confirmar la versión de Wrangler (tarea 1).
2. Entregar el nombre del Worker.
3. Iniciar sesión en Wrangler y hacer la primera publicación (`wrangler deploy`); avisar la URL publicada.

## Criterios de aceptación

- [ ] Versión fija de Wrangler para `pnpm dlx` confirmada y anotada en la bitácora, con su `engines` compatible.
- [ ] `wrangler.jsonc` con `assets.directory` igual a `./dist` y el nombre entregado por el desarrollador; sin `main` ni código de Worker.
- [ ] Ningún token ni secreto en el repositorio: búsqueda de `token`, `api_key` y `CLOUDFLARE_` en los archivos versionados sin resultados nuevos.
- [ ] La validación local de Wrangler termina sin errores, o la bitácora dice por qué no se ejecutó.
- [ ] Regresiones: `pnpm build` sin advertencias con la guardia de la 04-01; `pnpm astro check` 0/0/0.

## Riesgos

- Que la versión de Wrangler pida una versión de Node distinta de `engines`: se revisa antes de instalar.
- Que la publicación sirva una página en blanco por una ruta mal escrita: se comprueba con la validación local y, después de publicar, con la URL.

## Despliegue

- Lo ejecuta solo el desarrollador: `pnpm build` y luego `pnpm dlx wrangler@<versión> deploy` con la versión confirmada en la tarea 1.
- Después de publicar: la URL `workers.dev` responde 200 con el `h1` de la página.
- Para revertir: `wrangler rollback` a la versión anterior, o borrar el Worker desde el panel.

## Fuera de alcance

- Web Analytics y metadatos (04-03).
- Dominio propio e integración continua (fuera de la épica).

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Versión fija de Wrangler para `pnpm dlx`.
- Nombre del Worker (define la URL `nombre.subdominio.workers.dev`).
- La primera publicación y la URL resultante.
