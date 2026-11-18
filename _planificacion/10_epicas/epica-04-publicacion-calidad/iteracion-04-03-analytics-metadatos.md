# Iteración 04-03 · Web Analytics y metadatos para compartir

- **Épica:** 04 · Publicación, medición y calidad
- **Estado:** Pendiente
- **Rama sugerida:** iteracion/04-03-analytics-metadatos
- **Depende de:** 04-02
- **Especificación:** —
- **RDA relacionadas:** RDA-005, RDA-002

## Objetivo

Medir las visitas con Cloudflare Web Analytics y dejar el sitio listo para compartir y para los buscadores: metadatos Open Graph, ícono, `robots.txt`, página 404 y la licencia del contenido.

## Alcance y entregables

- Script de Web Analytics con `defer` y el token del sitio, una sola vez en el layout (RDA-005, única excepción a los recursos de terceros).
- Metadatos de título, descripción, URL canónica y Open Graph en el layout, con la URL publicada de la 04-02.
- Ícono del sitio en `public/`, `robots.txt` y una página 404 con el layout del sitio.
- Licencia del contenido en el pie, con la redacción que entregue el desarrollador.

## Tareas

1. Pedir al desarrollador el token de Web Analytics y la licencia del contenido.
2. Agregar el script de Web Analytics al layout con `defer` y el token; comprobar que aparece una sola vez en `dist/index.html`.
3. Agregar los metadatos de título, descripción, canónica y Open Graph, con textos tomados de `producto.md` o entregados por el desarrollador; proponer en el chat la imagen para compartir, si hace falta, y esperar la aprobación.
4. Agregar el ícono del sitio, respetando la regla 6 de contenido de `AGENTS.md` (los logotipos de Google y Gemini no se usan como ícono del sitio).
5. Crear `public/robots.txt` y `src/pages/404.astro` con un `h1`, el salto al contenido y un enlace a la portada.
6. Agregar la licencia del contenido al pie.
7. Ejecutar `pnpm build`, `pnpm astro check` y las regresiones; revisar la 404 en `pnpm preview`.
8. Escribir la bitácora y actualizar el registro.

## Tareas del desarrollador

1. Crear el sitio en Cloudflare Web Analytics y entregar el token.
2. Entregar la licencia del contenido.
3. Publicar y confirmar en el panel de Web Analytics que se registran visitas.

## Criterios de aceptación

- [ ] El script de Web Analytics aparece 1 vez en cada HTML de `dist/`, con `defer` y el token entregado; es el único recurso de terceros (búsqueda de `src="http` y `href="http` en `<script>` y `<link>`).
- [ ] `dist/index.html` trae `og:title`, `og:description`, `og:url`, `og:type` y la canónica con la URL publicada.
- [ ] `dist/robots.txt` y `dist/404.html` existen; la 404 tiene 1 `h1` y el enlace a la portada.
- [ ] La licencia del pie es la entregada por el desarrollador, copiada tal cual.
- [ ] El panel de Web Analytics registra visitas después de publicar (dicho por el desarrollador, con fecha).
- [ ] Regresiones: `pnpm build` sin advertencias con la guardia; `pnpm astro check` 0/0/0; 4 etiquetas `<script>` propias más la de Web Analytics; ambos modos y 360 px.

## Riesgos

- Que el script de Web Analytics baje la nota de Rendimiento: se mide en la 04-04 (RDA-005).
- Que los metadatos queden con una URL distinta de la publicada: se toman de la 04-02.

## Fuera de alcance

- Lighthouse y ajustes de rendimiento (04-04).
- Cookies, formularios o cualquier dato personal.

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Token de Web Analytics.
- Licencia del contenido (hoy «todos los derechos reservados»).
- URL publicada (de la 04-02).
