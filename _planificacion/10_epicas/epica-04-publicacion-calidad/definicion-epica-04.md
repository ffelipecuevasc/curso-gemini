# Épica 04 · Publicación, medición y calidad

- **Estado:** Pendiente
- **Objetivo:** dejar el sitio publicado en Cloudflare Workers con su URL gratuita, midiendo visitas con Web Analytics y cumpliendo las metas de rendimiento y accesibilidad de `AGENTS.md`.

## Alcance

1. `wrangler.jsonc` para publicar `dist/` como recursos estáticos.
2. Guardia de compilación que falla si el HTML generado contiene un marcador `PENDIENTE_`.
3. Script de Cloudflare Web Analytics en el layout.
4. Metadatos para compartir (título, descripción, `lang`, ícono del sitio) y archivos `robots.txt` y de errores.
5. Verificación de rendimiento y accesibilidad sobre la URL publicada.

## Fuera de alcance

- Dominio propio.
- Publicar desde un flujo de integración continua (se publica a mano con Wrangler).

## Iteraciones

| Iteración | Nombre |
| :-------- | :----- |
| 04-01 | Configuración de Workers y guardia de marcadores |
| 04-02 | Web Analytics y metadatos |
| 04-03 | Verificación final de rendimiento y accesibilidad |

> Las iteraciones se detallan al cerrar la épica 03. La publicación la ejecuta el desarrollador.

## Decisiones de la épica

- Medición según RDA-005.

## Criterio de término

- La URL `workers.dev` responde con el sitio y Lighthouse móvil sobre ella da 95 o más en Rendimiento y 100 en Accesibilidad, Buenas prácticas y SEO.
- El panel de Web Analytics registra visitas del sitio.

## Cierre

- **Bitácora de cierre:** —
