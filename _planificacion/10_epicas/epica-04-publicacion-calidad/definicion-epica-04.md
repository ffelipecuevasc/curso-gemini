# Épica 04 · Publicación, medición y calidad

- **Estado:** En curso
- **Objetivo:** dejar el sitio publicado en Cloudflare Workers con su URL gratuita, midiendo visitas con Web Analytics y cumpliendo las metas de rendimiento y accesibilidad de `AGENTS.md`.

## Alcance

1. `wrangler.jsonc` para publicar `dist/` como recursos estáticos.
2. Guardia de compilación que falla si el HTML generado contiene un marcador `PENDIENTE_` o `VERIFICAR`, y limpieza de los SVG sin referencia en `dist/_astro/`.
3. Script de Cloudflare Web Analytics en el layout.
4. Metadatos para compartir (título, descripción, `lang`, ícono del sitio) y archivos `robots.txt` y de errores.
5. Verificación de rendimiento y accesibilidad sobre la URL publicada.

## Fuera de alcance

- Dominio propio.
- Publicar desde un flujo de integración continua (se publica a mano con Wrangler).

## Iteraciones

| Iteración | Nombre | Estado |
| :-------- | :----- | :----- |
| 04-01 | [Guardia de marcadores y limpieza de la compilación](iteracion-04-01-guardia-marcadores.md) | Pendiente |
| 04-02 | [Configuración de Cloudflare Workers](iteracion-04-02-cloudflare-workers.md) | Pendiente |
| 04-03 | [Web Analytics y metadatos para compartir](iteracion-04-03-analytics-metadatos.md) | Pendiente |
| 04-04 | [Rendimiento, accesibilidad y verificación final](iteracion-04-04-verificacion-final.md) | Pendiente |

> Iteraciones aprobadas y generadas el 2026-11-17 al cerrar la épica 03 ([bitacora-03-cierre](../epica-03-unidades/bitacoras/bitacora-03-cierre.md)): la configuración de Workers se separa de la guardia de marcadores, y la verificación final pasa a ser la 04-04. La publicación la ejecuta el desarrollador.

## Decisiones de la épica

- Medición según RDA-005.
- 2026-11-17: la guardia de marcadores es un script propio que corre después de `astro build` desde `package.json`, sin dependencias nuevas.
- Cómo se ejecuta Wrangler sin `npx` (dependencia de desarrollo con RDA nueva o `pnpm dlx`) se decide en la 04-02.

## Criterio de término

- La URL `workers.dev` responde con el sitio y Lighthouse móvil sobre ella da 95 o más en Rendimiento y 100 en Accesibilidad, Buenas prácticas y SEO.
- El panel de Web Analytics registra visitas del sitio.

## Cierre

- **Bitácora de cierre:** —
