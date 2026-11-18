# Iteración 03-03 · Descargas y «Profundiza»

- **Épica:** 03 · Unidades del curso
- **Estado:** En revisión
- **Rama sugerida:** iteracion/03-03-descargas-profundiza
- **Depende de:** 03-02
- **Especificación:** —
- **RDA relacionadas:** RDA-003, RDA-009, RDA-010 (se registra en esta iteración)

## Objetivo

Mostrar las descargas con el formato y el peso medidos del archivo real al compilar, y «Profundiza en tu tiempo» como sección plegable sin JavaScript.

## Punto de partida

- El esquema `descarga` (`src/content.config.ts`) pide `formato` y `pesoKB` escritos a mano; `descargas.yaml` está vacío y genera la advertencia `No items found` aceptada hasta la épica 03.
- El esquema `bloque` ya tiene `profundiza` opcional con `texto` opcional y `recursos` (referencias); ningún bloque lo usa todavía.
- `comprobarReferencias()` valida los recursos y descargas de cada ficha, pero no los de `profundiza.recursos` de los bloques.

## Alcance y entregables

- **RDA-010** en `decisiones.md`: el formato y el peso de cada descarga se calculan del archivo en `public/descargas/` al compilar (`fs.statSync` y la extensión); reemplaza los campos `formato` y `pesoKB` de la descarga en la RDA-003. Un archivo que falta hace fallar el build.
- Esquema `descarga` ajustado: `id`, `titulo` y `archivo` (ruta en `/descargas/`, ASCII); sin `formato` ni `pesoKB`.
- `src/lib/descargas.ts`: resuelve formato (mapa de extensiones: CSV, ZIP, PDF, Markdown…) y peso con coma decimal (por ejemplo «12,4 KB»); lanza error si el archivo no existe o la extensión no está en el mapa.
- `src/components/TarjetaDescarga.astro`: enlace con `download`, título, formato y peso (`AGENTS.md`, regla técnica 7); se muestra en la ficha de su unidad.
- `src/components/Profundiza.astro`: `<details>` con `<summary>` «Profundiza en tu tiempo», el texto opcional y los recursos de `profundiza.recursos` con `RecursoExterno`; solo se dibuja si el bloque tiene `profundiza`.
- `comprobarReferencias()` también valida `profundiza.recursos` de cada bloque.

## Decisiones del desarrollador

- 2026-11-17: «Profundiza» usa solo los recursos oficiales ya cargados; el texto propio es opcional en el modelo y no bloquea nada.
- 2026-11-17: el formato y el peso se miden del archivo real (RDA-010).

## Tareas

1. Registrar la RDA-010 en `decisiones.md` y anotar en la RDA-003 que esa parte la reemplaza la RDA-010.
2. Ajustar el esquema `descarga` y crear `src/lib/descargas.ts` con sus errores de compilación.
3. Crear `TarjetaDescarga.astro` y mostrar las descargas de cada ficha en `SeccionUnidad`.
4. Crear `Profundiza.astro` con `<details>` y mostrarlo en `BloqueClase`.
5. Extender `comprobarReferencias()` a `profundiza.recursos` de los bloques.
6. Cargar en `descargas.yaml` la entrada del archivo que deja el desarrollador y referenciarla en su ficha; probar «Profundiza» con una entrada temporal revertida.
7. Pruebas reversibles (archivo inexistente, extensión desconocida, recurso de «Profundiza» inexistente), `pnpm build`, `pnpm astro check` y revisión con `pnpm preview` en 360 px y escritorio, en ambos modos y con teclado.
8. Escribir la bitácora y actualizar el registro.

## Tareas del desarrollador

1. Antes de empezar: dejar un archivo real de descarga en `public/descargas/`, con nombre ASCII y en minúsculas (por ejemplo, el dataset CSV de la U2), e indicar a qué unidad pertenece.

## Criterios de aceptación

- [x] RDA-010 registrada y el índice de `decisiones.md` al día.
- [ ] La tarjeta muestra el formato y el peso calculados: el peso en `dist/index.html` coincide con `fs.statSync` del archivo (comando y resultado en la bitácora); el enlace responde con el archivo en `pnpm preview`.
- [x] `pnpm build` falla con un archivo inexistente, con una extensión fuera del mapa y con un recurso de «Profundiza» inexistente (3 pruebas reversibles).
- [ ] «Profundiza» se abre y se cierra con el teclado (`Enter` y `Espacio`) sin JavaScript; cerrado por defecto.
- [x] La advertencia de `descargas.yaml` desaparece; `pnpm build` termina sin advertencias.
- [ ] Regresiones en verde: `pnpm astro check` sin errores; 4 scripts y 0 B de JS nuevo; 1 `h1`; `PENDIENTE_` y `VERIFICAR` en `dist/`: 0; sin desborde en 360 px; las comprobaciones de la 03-01 y la 03-02 (24 de 24 prompts) siguen pasando.

Evidencia (detalle en [bitacora-03-03](bitacoras/bitacora-03-03.md)):

- RDA-010 en `decisiones.md`, con su fila en el índice y la nota en la RDA-003.
- Peso: `fs.statSync` da 26 015 B → «25,4 KB»; `dist/index.html` muestra «dataset-ficticio-solicitudes-gtd-t3-2026.csv · CSV · 25,4 KB» (coincide); `dist/descargas/` trae el mismo archivo (26 015 B). Sin marcar el criterio completo: falta que el enlace responda en `pnpm preview` (navegador).
- 3 pruebas reversibles, con «Command failed» y los archivos restaurados idénticos (`cmp`):
  - archivo inexistente → «La descarga «…-no-existe.csv» no existe en public/descargas/…»;
  - extensión `.xyz` → «… tiene la extensión «.xyz», que no está en el mapa de formatos…»;
  - recurso inexistente en «Profundiza» → la validación de referencias de Astro («Invalid content reference … profundiza.recursos[1]»).
- «Profundiza» temporal en U1 · 2 (revertido): 1 `<details>` sin `open`, con el `summary` «Profundiza en tu tiempo» y 2 recursos, dentro del bloque. Sin marcar: abrir y cerrar con el teclado (navegador).
- `pnpm build` sin advertencias (0 líneas `WARN`).
- Regresiones medidas: `astro check` 0/0/0; 4 etiquetas `<script>`, 1080 B gzip (0 B nuevos); 1 `h1`; `PENDIENTE_` y `VERIFICAR` en `dist/`: 0; 24 de 24 prompts idénticos. Sin marcar el criterio completo: falta 360 px (navegador).

## Riesgos

- Si el archivo del desarrollador no llega, la iteración queda `Bloqueada` en la tarea 6 y en los criterios 2 y 5; lo demás se puede avanzar.
- `fs.statSync` corre al compilar: en el despliegue, `dist/` ya trae el archivo copiado de `public/`, así que el peso mostrado es el que se publica.

## Fuera de alcance

- Asignar los recursos de «Profundiza» de cada bloque y cargar el resto de las descargas (03-04 y 03-05).

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Un archivo real en `public/descargas/` (tarea del desarrollador 1).
