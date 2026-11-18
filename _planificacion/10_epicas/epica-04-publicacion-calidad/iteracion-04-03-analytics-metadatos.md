# Iteración 04-03 · Web Analytics y metadatos para compartir

- **Épica:** 04 · Publicación, medición y calidad
- **Estado:** En revisión
- **Rama sugerida:** iteracion/04-03-analytics-metadatos
- **Depende de:** 04-02
- **Especificación:** —
- **RDA relacionadas:** RDA-005, RDA-002

## Objetivo

Medir las visitas con Cloudflare Web Analytics y dejar el sitio listo para los buscadores: ícono, `robots.txt`, página 404 y la licencia del contenido. Sin URL canónica ni Open Graph (decisión del desarrollador, 2026-11-17).

## Alcance y entregables

- Script de Web Analytics con `defer` y el token del sitio, una sola vez en el layout (RDA-005, única excepción a los recursos de terceros).
- Título y descripción del layout revisados (ya existen); sin canónica ni Open Graph.
- Ícono del sitio en `public/`, `robots.txt` y una página 404 con el layout del sitio, servida por Cloudflare con `assets.not_found_handling: "404-page"` en `wrangler.jsonc` (cambio de configuración, con aprobación).
- Licencia del contenido en el pie, con la redacción que entregue el desarrollador.

## Tareas

1. Pedir al desarrollador el token de Web Analytics y la licencia del contenido.
2. Agregar el script de Web Analytics al layout con `defer` y el token; comprobar que aparece una sola vez en `dist/index.html`.
3. Revisar que el título y la descripción del layout sigan tomados de `producto.md` o entregados por el desarrollador; no agregar canónica ni Open Graph.
4. Agregar el ícono del sitio, respetando la regla 6 de contenido de `AGENTS.md` (los logotipos de Google y Gemini no se usan como ícono del sitio).
5. Crear `public/robots.txt` y `src/pages/404.astro` con un `h1`, el salto al contenido y un enlace a la portada; proponer en el chat agregar `"not_found_handling": "404-page"` dentro de `assets` en `wrangler.jsonc` y aplicarlo con la aprobación.
6. Agregar la licencia del contenido al pie.
7. Ejecutar `pnpm build`, `pnpm astro check` y las regresiones; revisar la 404 en `pnpm preview`.
8. Escribir la bitácora y actualizar el registro.

## Tareas del desarrollador

1. Crear el sitio en Cloudflare Web Analytics y entregar el token.
2. Entregar la licencia del contenido.
3. Hacer merge a `main` (Workers Builds publica) y confirmar en el panel de Web Analytics que se registran visitas y que una ruta inexistente muestra la 404 del sitio.

## Criterios de aceptación

- [x] El script de Web Analytics aparece 1 vez en cada HTML de `dist/`, con `defer` y el token entregado; es el único recurso de terceros (búsqueda de `src="http` y `href="http` en `<script>` y `<link>`). Evidencia: `medir-0403.mjs` da 1 beacon con `defer` y el token en `index.html` y en `404.html`, y 1 solo recurso externo en cada uno.
- [x] `dist/index.html` trae `lang`, `<title>` y `meta name="description"`, y ninguna etiqueta `og:` ni `rel="canonical"` (búsqueda con un comando). Evidencia: `lang="es-CL"`, 1 `<title>`, 1 `description`, 0 `og:`, 0 `canonical`, en las dos páginas.
- [x] `dist/robots.txt` y `dist/404.html` existen; la 404 tiene 1 `h1` y el enlace a la portada; `wrangler.jsonc` trae `not_found_handling` igual a `404-page`. Evidencia: los dos archivos existen; la 404 tiene 1 `h1`, `href="/"` y el salto al contenido; en `pnpm preview`, `/no-existe` responde 404 con «Página no encontrada».
- [x] La licencia del pie es la entregada por el desarrollador, copiada tal cual. Evidencia: «Todos los derechos reservados.» en el pie de las dos páginas.
- [ ] El panel de Web Analytics registra visitas después de publicar (dicho por el desarrollador, con fecha). Sin marcar: se comprueba después del merge a `main`.
- [ ] Regresiones: `pnpm build` sin advertencias con la guardia; `pnpm astro check` 0/0/0; 4 etiquetas `<script>` propias más la de Web Analytics; ambos modos y 360 px. Sin marcar: falta revisar ambos modos y 360 px en el navegador. Medido: build código 0 con 0 `warn`, limpieza y guardia con 0 marcadores; check 0/0/0; 24 de 24 prompts; `index.html` con 5 `<script>` (4 propios y el beacon) y 1 `h1`.

## Riesgos

- Que el script de Web Analytics baje la nota de Rendimiento: se mide en la 04-04 (RDA-005).
- Que el merge a `main` publique antes de tener el token: el script no se agrega sin el token entregado, y la guardia impide publicar marcadores.

## Fuera de alcance

- Lighthouse y ajustes de rendimiento (04-04).
- Cookies, formularios o cualquier dato personal.

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Token de Web Analytics.
- Licencia del contenido (hoy «todos los derechos reservados»).
- URL publicada (de la 04-02), para crear el sitio en Web Analytics.