# Iteración 04-02 · Configuración de Cloudflare Workers

- **Épica:** 04 · Publicación, medición y calidad
- **Estado:** Pendiente
- **Rama sugerida:** iteracion/04-02-cloudflare-workers
- **Depende de:** 04-01
- **Especificación:** —
- **RDA relacionadas:** RDA-002 · RDA nueva si Wrangler entra como dependencia de desarrollo

## Objetivo

Dejar `wrangler.jsonc` listo para publicar `dist/` como recursos estáticos de Cloudflare Workers, para que el desarrollador haga la primera publicación en la URL `workers.dev`.

## Punto de partida

- No existe `wrangler.jsonc` ni Wrangler en `package.json`.
- PNPM estricto: `npx` no se usa en el proyecto.

## Alcance y entregables

- `wrangler.jsonc` con el nombre del Worker, `compatibility_date` y `assets.directory` apuntando a `./dist`, sin código de Worker.
- La forma de ejecutar Wrangler decidida por el desarrollador y, si es dependencia de desarrollo, su RDA.
- Los pasos de publicación para el desarrollador en la bitácora.

## Tareas

1. Proponer en el chat cómo ejecutar Wrangler sin `npx`: Wrangler como dependencia de desarrollo con versión fija (peso, RDA nueva, script `pnpm` en `package.json`) o `pnpm dlx wrangler@<versión>` sin dependencia; esperar la decisión.
2. Si se elige dependencia de desarrollo: registrar la RDA e instalarla con `pnpm add -D` con versión exacta, con aprobación.
3. Pedir al desarrollador el nombre del Worker y escribir `wrangler.jsonc` (cambio de configuración, con aprobación).
4. Revisar que el repositorio no tenga tokens ni secretos (`wrangler.jsonc`, `package.json`, `git diff`) y que `.dev.vars` y `.wrangler/` estén en `.gitignore`.
5. Comprobar la configuración sin publicar, con la validación local que ofrezca Wrangler (por ejemplo `wrangler deploy --dry-run`), si el desarrollador lo autoriza.
6. Escribir en la bitácora los pasos exactos de la primera publicación y cómo revertirla.
7. Ejecutar `pnpm build`, `pnpm astro check` y las regresiones.
8. Escribir la bitácora y actualizar el registro.

## Tareas del desarrollador

1. Decidir cómo se ejecuta Wrangler (tarea 1).
2. Entregar el nombre del Worker.
3. Iniciar sesión en Wrangler y hacer la primera publicación (`wrangler deploy`); avisar la URL publicada.

## Criterios de aceptación

- [ ] Decisión sobre Wrangler registrada (en la bitácora y, si es dependencia, en su RDA).
- [ ] `wrangler.jsonc` con `assets.directory` igual a `./dist` y el nombre entregado por el desarrollador; sin `main` ni código de Worker.
- [ ] Ningún token ni secreto en el repositorio: búsqueda de `token`, `api_key` y `CLOUDFLARE_` en los archivos versionados sin resultados nuevos.
- [ ] La validación local de Wrangler termina sin errores, o la bitácora dice por qué no se ejecutó.
- [ ] Regresiones: `pnpm build` sin advertencias con la guardia de la 04-01; `pnpm astro check` 0/0/0.

## Riesgos

- Que la versión de Wrangler pida una versión de Node distinta de `engines`: se revisa antes de instalar.
- Que la publicación sirva una página en blanco por una ruta mal escrita: se comprueba con la validación local y, después de publicar, con la URL.

## Despliegue

- Lo ejecuta solo el desarrollador: `pnpm build` y luego `wrangler deploy` con la forma decidida en la tarea 1.
- Después de publicar: la URL `workers.dev` responde 200 con el `h1` de la página.
- Para revertir: `wrangler rollback` a la versión anterior, o borrar el Worker desde el panel.

## Fuera de alcance

- Web Analytics y metadatos (04-03).
- Dominio propio e integración continua (fuera de la épica).

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Forma de ejecutar Wrangler (dependencia de desarrollo con RDA o `pnpm dlx`).
- Nombre del Worker (define la URL `nombre.subdominio.workers.dev`).
- La primera publicación y la URL resultante.
