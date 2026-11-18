# Iteración 04-01 · Guardia de marcadores y limpieza de la compilación

- **Épica:** 04 · Publicación, medición y calidad
- **Estado:** Pendiente
- **Rama sugerida:** iteracion/04-01-guardia-marcadores
- **Depende de:** 03-05 y la corrección «Plantillas con el mismo nombre al descargar» (prioridad 15.1)
- **Especificación:** —
- **RDA relacionadas:** RDA-002

## Objetivo

Que `pnpm build` falle si el HTML generado en `dist/` contiene un marcador `PENDIENTE_` o `VERIFICAR`, y que `dist/_astro/` deje de traer los SVG que ninguna página referencia.

## Punto de partida

- `package.json` tiene `"build": "astro build"`, sin ningún paso posterior.
- La 03-05 midió con un comando temporal 0 `PENDIENTE_` y 0 `VERIFICAR` en `dist/`; no hay guardia permanente (regla de contenido 3 de `AGENTS.md`).
- La bitácora de cierre de la 03 midió 6 SVG en `dist/_astro/` (41 030 B) sin ninguna referencia en `index.html`: se usan en línea y Vite emite además el archivo.
- `AGENTS.md` define al cliente de dos formas: la sección 1 dice Capacita Tu Futuro «para trabajadores de GTD Telsur» y la regla de contenido 3 habla de «datos del cliente (Capacita Tu Futuro o GTD)».

## Alcance y entregables

- Un script propio, sin dependencias, que recorre `dist/` después de `astro build` y termina con error si encuentra un marcador, nombrando el archivo y el marcador.
- El script `build` de `package.json` encadena `astro build` y la guardia (cambio de configuración aprobado el 2026-11-17).
- `dist/_astro/` sin los 6 SVG sin referencia, con la alternativa elegida comparada en la bitácora.
- Propuesta P-008 en `propuestas-documentos-protegidos.md`.

## Decisiones del desarrollador

- 2026-11-17: la guardia es un script propio que corre después de `astro build` desde `package.json`, sin dependencias nuevas.

## Tareas

1. Escribir la guardia (por ejemplo `scripts/guardia-marcadores.mjs`, solo con módulos de Node) que busque `PENDIENTE_` y `VERIFICAR` en los archivos de texto de `dist/` (`.html`, `.xml`, `.txt`, `.json`) y salga con código distinto de 0 si encuentra alguno.
2. Encadenarla en el script `build` de `package.json` (`astro build && node scripts/guardia-marcadores.mjs`) y comprobar que `pnpm build` sigue sin advertencias.
3. Pruebas reversibles: insertar un `PENDIENTE_` y luego un `VERIFICAR` de prueba en un archivo de contenido, comprobar que `pnpm build` falla con el mensaje esperado y restaurar el archivo idéntico (`cmp`).
4. Diagnosticar por qué Vite emite los 6 SVG (qué importación los genera) y comparar en la bitácora al menos dos alternativas para quitarlos: importarlos con `?raw` o como componente en línea, ajustar la configuración de Vite en `astro.config.mjs`, o borrarlos en el paso posterior a la compilación. Elegir la más simple que no toque el resultado visible.
5. Aplicar la alternativa elegida; si exige editar `astro.config.mjs`, pedir aprobación antes.
6. Registrar la P-008 (sección 1 frente a la regla de contenido 3 de `AGENTS.md`), con el texto actual copiado literalmente y el texto propuesto, sin editar `AGENTS.md`.
7. Ejecutar `pnpm build`, `pnpm astro check` y las regresiones de la épica 03.
8. Escribir la bitácora y actualizar el registro.

## Criterios de aceptación

- [ ] `pnpm build` termina con código 0 sobre el contenido actual y con código distinto de 0 en cada prueba reversible (`PENDIENTE_` y `VERIFICAR`), con el archivo y el marcador en el mensaje; los archivos de prueba quedan idénticos (`cmp`).
- [ ] `package.json` y `pnpm-lock.yaml` sin dependencias nuevas (`git diff`).
- [ ] `dist/_astro/` sin SVG que no referencie ningún archivo de `dist/` (conteo con un comando), y el hash de `dist/index.html` igual al de antes, o la diferencia explicada en la bitácora.
- [ ] P-008 registrada con su fila `Pendiente` en la tabla de estado.
- [ ] Regresiones: `pnpm astro check` 0/0/0; 24 de 24 prompts iguales; 4 etiquetas `<script>`; 1 `h1`; sin desborde en 360 px.

## Riesgos

- Que la guardia detecte la palabra en un texto legítimo del curso (por ejemplo, «verificar» en minúsculas): la búsqueda distingue mayúsculas y se prueba contra el contenido actual.
- Que quitar los SVG cambie el HTML en línea: se compara el hash de `dist/index.html` antes y después.

## Fuera de alcance

- Configurar Wrangler (04-02).
- Editar `AGENTS.md`: la P-008 la aplica el desarrollador.

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Aprobación del cambio de `astro.config.mjs`, solo si la alternativa elegida lo necesita.
