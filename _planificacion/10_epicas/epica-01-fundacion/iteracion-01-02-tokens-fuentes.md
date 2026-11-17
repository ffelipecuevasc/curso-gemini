# Iteración 01-02 · Tokens de diseño y fuentes

- **Épica:** 01 · Fundación y sistema de diseño
- **Estado:** Pendiente
- **Rama sugerida:** iteracion/01-02-tokens-fuentes
- **Depende de:** 01-01
- **RDA relacionadas:** RDA-004

## Objetivo

Llevar a código los tokens de color, tipografía y forma de `DESIGN.md`, con modo claro y oscuro, y servir Sora, Work Sans e IBM Plex Mono como fuentes autoalojadas.

## Alcance y entregables

- Bloque `@theme` en `src/styles/global.css` con los tokens de las secciones 2, 3 y 4 de `DESIGN.md` y su redefinición bajo `[data-modo="oscuro"]`.
- Fuentes `woff2` con subconjunto latino en `public/fuentes/`, declaradas con `@font-face` y `font-display: swap`, solo con los pesos de `DESIGN.md`.
- Precarga solo de las fuentes del primer pantallazo (Sora 700 y Work Sans 400).
- Página de prueba provisoria en `index.astro` que muestra los colores, los bloques de las unidades, la escala de títulos y un bloque de código.

## Tareas

1. Proponer al desarrollador de dónde salen los `woff2` (archivos de la fuente oficial con licencia OFL copiados a `public/fuentes/`, o un paquete de fuentes como dependencia) y esperar aprobación.
2. Agregar los archivos de fuentes y sus `@font-face`.
3. Escribir los tokens claros en `@theme` y los oscuros bajo `[data-modo="oscuro"]`.
4. Medir el contraste de `#E4F3FF` sobre `#003B51` y de `#5DC9FF` sobre `#00131D`, y registrar los resultados en la bitácora (la tabla de `DESIGN.md` la actualiza el desarrollador; si hace falta, deja la propuesta).
5. Armar la página de prueba con las clases generadas por los tokens, sin valores sueltos.
6. Agregar la precarga de las fuentes del primer pantallazo.
7. Ejecutar `pnpm build` y `pnpm astro check`, y revisar con `pnpm preview` ambos modos, cambiando `data-modo` a mano en las herramientas del navegador.

## Criterios de aceptación

- [ ] Ninguna clase de los componentes usa colores, tamaños de letra ni radios sueltos (búsqueda de `#` y de valores entre corchetes en `src/` sin resultados fuera de `global.css`).
- [ ] La pestaña Red de `pnpm preview` no muestra peticiones a dominios externos.
- [ ] Los `woff2` servidos suman menos de 200 KB.
- [ ] Con `data-modo="oscuro"` en `<html>`, la página de prueba cambia a los valores oscuros de `DESIGN.md`.
- [ ] Los dos contrastes de la tarea 4 están medidos con su ratio en la bitácora.
- [ ] `pnpm build` y `pnpm astro check` sin errores.

## Fuera de alcance

- El botón para cambiar de modo (01-03).

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Aprobación del origen de las fuentes (tarea 1).
