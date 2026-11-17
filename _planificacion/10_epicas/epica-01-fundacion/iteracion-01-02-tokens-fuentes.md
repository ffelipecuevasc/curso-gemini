# Iteración 01-02 · Tokens de diseño y fuentes

- **Épica:** 01 · Fundación y sistema de diseño
- **Estado:** En revisión
- **Rama sugerida:** iteracion/01-02-tokens-fuentes
- **Depende de:** 01-01
- **RDA relacionadas:** RDA-004, RDA-006

## Objetivo

Llevar a código los tokens de color, tipografía y forma de `DESIGN.md`, con modo claro y oscuro, y servir Sora, Work Sans e IBM Plex Mono como fuentes autoalojadas.

## Alcance y entregables

- Bloque `@theme` en `src/styles/global.css` con los tokens de las secciones 2, 3 y 4 de `DESIGN.md` y su redefinición bajo `[data-modo="oscuro"]`.
- Fuentes `woff2` de los paquetes de Fontsource (RDA-006), con subconjunto latino y solo los pesos de `DESIGN.md`, declaradas a mano con `@font-face` y `font-display: swap` en `global.css`; Vite las emite a `dist/_astro/`. Sin importar los CSS de Fontsource.
- Precarga solo de las fuentes del primer pantallazo (Sora 700 y Work Sans 400), con la ruta obtenida por `?url` en el frontmatter y `crossorigin` en el `<link rel="preload">`.
- Página de prueba provisoria en `index.astro` que muestra los colores, los bloques de las unidades, la escala de títulos y un bloque de código.

## Decisiones del desarrollador

- 2026-11-17: fuentes desde paquetes de Fontsource 5.3.0 como dependencias de desarrollo, con `@font-face` propios y sin `public/fuentes/` (RDA-006).

## Tareas

1. Proponer al desarrollador de dónde salen los `woff2` y esperar aprobación (aprobado: Fontsource, RDA-006).
2. Instalar los paquetes de Fontsource y escribir los `@font-face` en `global.css`.
3. Escribir los tokens claros en `@theme` y los oscuros bajo `[data-modo="oscuro"]`.
4. Medir el contraste de `#E4F3FF` sobre `#003B51` y de `#5DC9FF` sobre `#00131D`, y registrar los resultados en la bitácora (la tabla de `DESIGN.md` la actualiza el desarrollador; si hace falta, deja la propuesta).
5. Armar la página de prueba con las clases generadas por los tokens, sin valores sueltos.
6. Agregar la precarga de las fuentes del primer pantallazo y comprobar que su ruta con hash coincide con el archivo emitido.
7. Ejecutar `pnpm build` y `pnpm astro check`, y revisar con `pnpm preview` ambos modos, cambiando `data-modo` a mano en las herramientas del navegador.

## Criterios de aceptación

- [x] Ninguna clase de los componentes usa colores, tamaños de letra ni radios sueltos. Evidencia: `Select-String` de `#[0-9a-fA-F]{3,8}` y de `-[…]` en `src/` fuera de `global.css`: 0 resultados.
- [x] Ningún archivo servido pide un dominio externo. Evidencia: con `pnpm preview`, el HTML referencia solo `/_astro/…` (1 CSS y 2 precargas) y el CSS solo 6 `url(/_astro/…woff2)`, todas con HTTP 200; la única cadena `https://` de `dist/` es el comentario de licencia de Tailwind. La pestaña Red del navegador no se pudo revisar (ver bitácora).
- [x] Los `woff2` servidos suman menos de 200 KB. Evidencia: 6 archivos en `dist/_astro/`, 98,1 KB en total.
- [x] La precarga apunta a los archivos emitidos. Evidencia: `/_astro/sora-latin-700-normal.9waGdLWo.woff2` y `/_astro/work-sans-latin-400-normal.jUejSri3.woff2` existen en `dist/` y coinciden con las `url()` del CSS; ambos `<link>` llevan `crossorigin`.
- [x] Con `data-modo="oscuro"` en `<html>`, los tokens cambian a los valores oscuros de `DESIGN.md`. Evidencia: el CSS compilado contiene `[data-modo=oscuro]{…--color-fondo:#00131d;…--color-foco:#f8cd46;…--color-borde-u3:#00b0e8}`, igual a la sección 2 de `DESIGN.md`. La revisión visual en el navegador queda para el desarrollador (ver bitácora).
- [x] Los dos contrastes de la tarea 4 están medidos con su ratio en la bitácora. Evidencia: 10,64:1 y 10,14:1.
- [x] `pnpm build` y `pnpm astro check` sin errores. Evidencia: «Complete!»; 0 errores, 0 advertencias, 0 sugerencias.

Detalle en [bitacora-01-02.md](bitacoras/bitacora-01-02.md).

## Fuera de alcance

- El botón para cambiar de modo y el script que aplica el modo inicial según `prefers-color-scheme` (01-03).

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Aprobación del origen de las fuentes (tarea 1): aprobado.
