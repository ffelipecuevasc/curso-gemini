# Épica 04 · Publicación, medición y calidad

- **Estado:** En curso
- **Objetivo:** dejar el sitio publicado en Cloudflare Workers con su URL gratuita, midiendo visitas con Web Analytics y cumpliendo las metas de rendimiento y accesibilidad de `AGENTS.md`.

## Alcance

1. `wrangler.jsonc` para publicar `dist/` como recursos estáticos.
2. Guardia de compilación que falla si cualquier archivo de texto de `dist/` (HTML y descargas `.md` y `.csv`) contiene un marcador `PENDIENTE_` o `VERIFICAR`, y limpieza de los SVG sin referencia en `dist/_astro/`.
3. Publicación continua con Workers Builds: el Worker `curso-gemini` conectado al repositorio de GitHub publica cada cambio que llega a `main`.
4. Script de Cloudflare Web Analytics en el layout.
5. Metadatos básicos (título, descripción, `lang`), ícono del sitio, archivos `robots.txt` y de errores y licencia del contenido; sin URL canónica ni Open Graph.
6. Verificación de rendimiento y accesibilidad sobre la URL publicada.

## Fuera de alcance

- Dominio propio.
- Vistas previas de ramas (Preview Builds): desactivadas, porque Cloudflare exige que su comando llame a `npx` (decisión del desarrollador, 2026-11-18).
- GitHub Actions u otro sistema de integración continua distinto de Workers Builds.

## Iteraciones

| Iteración | Nombre | Estado |
| :-------- | :----- | :----- |
| 04-01 | [Guardia de marcadores y limpieza de la compilación](iteracion-04-01-guardia-marcadores.md) | Terminada |
| 04-02 | [Configuración de Cloudflare Workers y publicación desde GitHub](iteracion-04-02-cloudflare-workers.md) | Terminada |
| 04-03 | [Web Analytics y metadatos para compartir](iteracion-04-03-analytics-metadatos.md) | Terminada |
| 04-04 | [Rendimiento, accesibilidad y verificación final](iteracion-04-04-verificacion-final.md) | En revisión |

> Iteraciones aprobadas y generadas el 2026-11-17 al cerrar la épica 03 ([bitacora-03-cierre](../epica-03-unidades/bitacoras/bitacora-03-cierre.md)): la configuración de Workers se separa de la guardia de marcadores, y la verificación final pasa a ser la 04-04. Desde el 2026-11-18 la publicación es continua: el desarrollador conecta el Worker al repositorio y cada merge a `main` publica.

## Decisiones de la épica

- Medición según RDA-005.
- 2026-11-17: la guardia de marcadores es un script propio que corre después de `astro build` desde `package.json`, sin dependencias nuevas.
- 2026-11-17: la guardia revisa todos los archivos de texto de `dist/`, y los SVG sin referencia se borran en un paso posterior a la compilación (04-01).
- 2026-11-17: la 04-03 no incluye URL canónica ni Open Graph.
- 2026-11-18: Wrangler se ejecuta con `pnpm dlx wrangler@4.164.0`, sin dependencia nueva ni RDA.
- 2026-11-18: el Worker se llama `curso-gemini` y se conecta al repositorio `ffelipecuevasc/curso-gemini` con Workers Builds; rama de producción `main`. Reemplaza la publicación a mano.
- 2026-11-18: Preview Builds desactivados; solo `main` publica.
- 2026-11-18: las versiones de Node y PNPM del build de Cloudflare se fijan con las variables de compilación `NODE_VERSION` y `PNPM_VERSION` del panel, no en el repositorio.

## Criterio de término

- La URL `curso-gemini.<subdominio>.workers.dev` responde con el sitio, publicada desde `main` por Workers Builds, y Lighthouse móvil sobre ella da 95 o más en Rendimiento y 100 en Accesibilidad, Buenas prácticas y SEO.
- El panel de Web Analytics registra visitas del sitio.

## Cierre

- **Bitácora de cierre:** —