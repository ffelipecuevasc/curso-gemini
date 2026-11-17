# Iteración 03-02 · Prompts con «Copiar» y recursos externos

- **Épica:** 03 · Unidades del curso
- **Estado:** Pendiente
- **Rama sugerida:** iteracion/03-02-prompts-recursos
- **Depende de:** 03-01
- **Especificación:** —
- **RDA relacionadas:** RDA-003, RDA-009

## Objetivo

Mostrar los 24 prompts en su bloque con un botón «Copiar» que entrega el texto idéntico al documento, y la lista de recursos oficiales de cada unidad.

## Punto de partida

- Los prompts viven en `prompts` de cada bloque (texto literal); el ID `deep-research` se repite en U2 · 2 y U3 · 1 (bitácora 02-06).
- En U2 · 3, el paso 1 termina en «Ejemplo de estructura:» y su código es el prompt `identidad-visual-gtd` (`definicion-epica-03.md`).
- 41 recursos en `recursos.yaml`; uno se titula «Colección comunitaria de prompts de presentaciones (no oficial)».
- `dist/index.html` trae 3 scripts (856 B gzip juntos, bitácora 02-03): modo, menú móvil y transición de modo.

## Alcance y entregables

- `src/components/Prompt.astro`: título, texto en `<pre><code>` y botón «Copiar» con nombre accesible que incluye el título del prompt.
- Script mínimo de copiado (tercer comportamiento permitido en `AGENTS.md`, regla técnica 2): `navigator.clipboard.writeText`, aviso «Copiado» en una región `aria-live`; sin JavaScript el botón no se muestra y el texto sigue seleccionable.
- IDs del DOM con unidad y bloque: `prompt-<unidad>-<bloque>-<id>`, únicos en la página.
- Ubicación: los prompts van después del cuerpo de su bloque, salvo `identidad-visual-gtd`, que va justo después de «Ejemplo de estructura:» en U2 · 3.
- `src/components/RecursoExterno.astro` y la lista de recursos de cada unidad: título, sitio, apertura en pestaña nueva con `rel="noopener noreferrer"` y texto oculto «(se abre en una pestaña nueva)»; «(no oficial)» se ve tal como está en el título.

## Decisiones del desarrollador

- 2026-11-17: `identidad-visual-gtd` (U2 · 3) y `estilo-gtd` (U3 · 4) se muestran desde esta iteración bajo responsabilidad del desarrollador, como el logo de GTD, sin campo de visibilidad. La autorización del cliente sigue abierta en el registro como riesgo.

## Plan técnico

- **Ubicación de `identidad-visual-gtd`:** el cuerpo de U2 · 3 recibe un marcador sin texto visible (`<div data-prompt="identidad-visual-gtd"></div>`) después de «Ejemplo de estructura:». `BloqueClase` parte `entry.rendered.html` en ese marcador e intercala `Prompt`; un marcador que no corresponde a un prompt del bloque lanza un error al compilar. Los bloques sin marcador siguen con `render()`. Sin dependencias nuevas; si al implementarlo aparece una alternativa más simple, se compara en la bitácora antes de elegir.
- **Copiado:** el script lee el texto del `<code>` (`textContent`), no lo reconstruye, para que lo copiado sea lo que se ve.

## Tareas

1. Crear `Prompt.astro` con el ID compuesto y el botón oculto sin JavaScript.
2. Escribir el script de copiado con el aviso `aria-live` y el manejo de error («No se pudo copiar; selecciona el texto»).
3. Mostrar los prompts en `BloqueClase` después del cuerpo.
4. Ubicar `identidad-visual-gtd` junto a «Ejemplo de estructura:» con el marcador del plan técnico y su error de compilación.
5. Crear `RecursoExterno.astro` y la lista de recursos de cada unidad en `SeccionUnidad`.
6. Comprobar con un comando temporal que el texto de cada prompt en `dist/index.html` (entidades decodificadas) es idéntico al de su archivo, y medir IDs, enlaces y JavaScript.
7. Ejecutar `pnpm build` y `pnpm astro check`, revisar con `pnpm preview` en 360 px y escritorio, en ambos modos y con teclado (copiar con `Enter` y `Espacio`).
8. Escribir la bitácora y actualizar el registro.

## Criterios de aceptación

- [ ] 24 prompts en `dist/index.html`, con 24 IDs únicos `prompt-…` (incluidos los 2 `deep-research`); el texto de cada uno es idéntico al de su archivo (comando temporal: 24 de 24).
- [ ] `identidad-visual-gtd` aparece inmediatamente después de «Ejemplo de estructura:» en `#unidad-2`; un marcador con un ID inexistente hace fallar `pnpm build` (prueba reversible).
- [ ] «Copiar» copia el texto exacto (prueba en el navegador: pegar en un editor y comparar) y anuncia «Copiado»; funciona con el teclado.
- [ ] Sin JavaScript, el botón no aparece y el texto se puede seleccionar.
- [ ] Los 41 recursos aparecen en su unidad (U1 20, U2 12, U3 8, U4 6, con los 5 compartidos en ambas): `target="_blank"`, `rel="noopener noreferrer"` y texto oculto en todos; «(no oficial)» visible en el de GitHub.
- [ ] Regresiones en verde: `pnpm build` sin advertencias nuevas y `pnpm astro check` sin errores; 4 scripts; JS nuevo medido en gzip y menor que 1 KB; 1 `h1`; `PENDIENTE_` y `VERIFICAR` en `dist/`: 0; sin desborde en 360 px; las comprobaciones de la 03-01 siguen pasando.

## Riesgos

- Mostrar la paleta aproximada de GTD sin la autorización del cliente: riesgo asumido por el desarrollador (registro, «Datos pendientes del cliente»).
- La API del portapapeles necesita un contexto seguro: funciona en `localhost` y en `https`; se comprueba en `pnpm preview`.

## Fuera de alcance

- Descargas y «Profundiza» (03-03).
- Prompts no escritos en el documento.

## Datos requeridos

### Del cliente

- Ninguno para implementar. La autorización del kit de GTD sigue abierta como riesgo.

### Del desarrollador

- Ninguno.
