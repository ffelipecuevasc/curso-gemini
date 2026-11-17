# Épica 01 · Fundación y sistema de diseño

- **Estado:** En revisión
- **Objetivo:** dejar el proyecto Astro compilando, con los tokens de `DESIGN.md`, el layout común con su navegación y modos, y el modelo de contenido listo para cargar las unidades.

## Alcance

1. Proyecto Astro con TypeScript estricto, Tailwind CSS v4 y PNPM en modo estricto.
2. Tokens de color, tipografía y forma de `DESIGN.md`, con modo claro y oscuro, y fuentes autoalojadas.
3. Layout común: enlace para saltar al contenido, encabezado con navegación en píldoras y menú móvil, botón de modo con transición animada y pie con redes.
4. Colecciones de contenido con sus esquemas para unidades, bloques, prompts, recursos y descargas.

## Fuera de alcance

- El contenido real de las secciones (épicas 02 y 03).
- La configuración de Cloudflare y Web Analytics (épica 04).

## Iteraciones

| Iteración | Nombre |
| :-------- | :----- |
| 01-01 | Andamiaje del proyecto |
| 01-02 | Tokens de diseño y fuentes |
| 01-03 | Layout, navegación y modos |
| 01-04 | Modelo de contenido |
| 01-05 | Transición animada del cambio de modo |

## Decisiones de la épica

- Stack y hosting según RDA-002; identidad visual según RDA-004; contenido en colecciones según RDA-003.

## Reglas comunes de la épica

- Ninguna iteración agrega un framework de componentes interactivos ni scripts de terceros.

## Criterio de término

- `pnpm build` y `pnpm astro check` terminan sin errores.
- La página de prueba se ve con los tokens en modo claro y oscuro, en 360 px y en escritorio, y se recorre completa con el teclado.
- Un archivo de contenido de prueba que no cumple el esquema hace fallar `pnpm build`.

## Cierre

Al cerrar la épica se escribe `bitacoras/bitacora-01-cierre.md`, con la revisión al cierre. Aquí solo se enlaza.

- **Bitácora de cierre:** [bitacora-01-cierre](bitacoras/bitacora-01-cierre.md)
