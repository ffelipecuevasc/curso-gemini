# Bitácora 06-03 · Cabecera de unidad sin barra de avance

- **Fecha:** 2026-11-22
- **Agente:** Claude Code (Opus 5.5)
- **Rama:** `iteracion/06-03-cabecera-unidad` (creada desde `main` en `3ca1de3`, con el nombre que indicó el desarrollador)
- **Estado final:** En revisión

## Resumen

La cabecera de cada unidad se reorganiza en una retícula `auto | 1fr`. A la izquierda va el número de la unidad en grande (Sora 700, decorativo). A la derecha van el título (`h2`, con «Unidad n: » solo para lectores de pantalla), el objetivo breve (máximo 62 caracteres por línea) y «Clase n de 4 · 120 min» en IBM Plex Mono de 14 px. Los botones quedan debajo. `BarraAvance.astro` se borró y «Avance del curso» ya no existe en `dist/`. La unidad baja 10 px en 1366 × 657 y sigue cabiendo en 1440 × 900.

Antes de empezar se cumplieron las precondiciones: la 06-02 quedó terminada (revisión visual dicha por el desarrollador) y la P-025 se comprobó aplicada con `grep`.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `src/components/CabeceraUnidad.astro` | Retícula nueva, número `aria-hidden`, `h2` con prefijo solo para lectores de pantalla, objetivo con `max-w-[62ch]`, datos con `clases` de `curso.yaml`, botones en `col-span-2` (móvil) y `col-start-2` (desde 1024 px); sin `BarraAvance` |
| `src/components/BarraAvance.astro` | Borrado (pedido de la iteración); 0 usos en `src/` |
| `src/styles/global.css` | `.cabecera-unidad` con `grid-cols-[auto_minmax(0,1fr)]`, `gap-x-4 gap-y-3` y, desde 1024 px, `gap-x-6 gap-y-2.5` con `py-4`; `.numero-unidad` nueva |
| `_planificacion/10_epicas/epica-06-pulido-identidad/iteracion-06-02-portada-ruta.md` | Terminada |
| `_planificacion/10_epicas/epica-06-pulido-identidad/iteracion-06-03-cabecera-unidad.md` | En revisión; P-025 cumplida |
| `_planificacion/10_epicas/epica-06-pulido-identidad/definicion-epica-06.md` | 06-02 Terminada, 06-03 En revisión |
| `_planificacion/00_producto/propuestas-documentos-protegidos.md` | P-025 «Aplicada 2026-11-22» en la tabla y en su línea Estado |
| `_planificacion/00_producto/registro-pendientes.md` | Iteración activa 06-03, 06-02 Terminada, backlog 28 y 29, próximo hito, historial en 50 filas |
| `_planificacion/00_producto/registro-archivo.md` | Recibe la fila más antigua del historial (03-03 terminada) |

## Fase 1 (línea base) y medición

Medido en Edge headless sobre `pnpm preview`, con el script fuera del repositorio de la 06-02, ampliado a 1024 × 768 y al alto de la cabecera. Claro y oscuro dan las mismas cifras. Las unidades van de U1 a U4, en px.

| Ventana | Unidades antes | Unidades ahora | Cabeceras antes | Cabeceras ahora |
| :------ | :------------- | :------------- | :-------------- | :-------------- |
| 1440 × 900 | 823 / 823 / 823 / 823 | 823 / 823 / 823 / 823 | 214 / 214 / 216 / 214 | 204 / 204 / 206 / 204 |
| 1366 × 657 | 808 / 808 / 810 / 783 | 798 / 798 / 800 / 773 | 214 / 214 / 216 / 214 | 204 / 204 / 206 / 204 |
| 1024 × 768 | 913 / 907 / 883 / 854 | 870 / 897 / 873 / 896 | 246 / 265 / 215 / 213 | 203 / 255 / 205 / 255 |

En 1440 × 900 la unidad mide 823 = 900 − 77 (alto mínimo de la sección). Las mediciones del agente no reemplazan las del desarrollador.

## Verificación

- `pnpm build`: sin advertencias; guardia con 0 marcadores.
- `pnpm astro check`: 0 errores, 0 advertencias, 0 sugerencias.
- `grep -rn BarraAvance src`: 0 líneas. `grep -c "Avance del curso" dist/index.html`: 0.
- `dist/index.html`: 1 `h1`, 0 saltos de nivel de encabezado, 54 `<dialog>` y 24 `data-copiar` únicos.
- `h2` de las unidades: los 4 empiezan con `<span class="sr-only">Unidad n: </span>` seguido del título.
- JavaScript propio: 1774 B gzip (6 etiquetas), sin cambios.
- Barra de lectura: `avance-lectura` sigue en el CSS compilado; ni `global.css` ni `Encabezado.astro` tocaron esas reglas.
- `git diff --stat -- src/assets`: vacío.

### Contraste del número y de los datos

El número y los datos usan `--color-sobre-uN` sobre `--color-uN`, los mismos pares de la tabla 2.3 de `DESIGN.md` (script fuera del repositorio):

| Unidad | Par | Ratio | Uso |
| :----- | :-- | :---- | :-- |
| U1 | `#FFFFFF` sobre `#007EA7` | 4,62:1 | AA: número grande y datos de 14 px (≥ 4,5) |
| U2 | `#00131D` sobre `#00B0E8` | 7,54:1 | AAA |
| U3 | `#E4F3FF` sobre `#003B51` | 10,64:1 | AAA; en oscuro conserva el borde de 1 px `#00B0E8` |
| U4 | `#3D2E00` sobre `#F8CD46` | 8,69:1 | AAA |

## Criterios de aceptación

- [x] `grep -c "Avance del curso" dist/index.html` = 0 y `BarraAvance.astro` no existe.
- [x] 1440 × 900: cada unidad mide 823 = 900 − 77, en ambos modos.
- [x] 1366 × 657: cada unidad mide 10 px menos que la línea base (límite: +8 px).
- [x] Cada `h2` empieza con «Unidad n:» en el marcado (falta la confirmación en el árbol de accesibilidad del desarrollador); 0 saltos de nivel.
- [x] Contraste: los mismos pares de la tabla 2.3, sin cambios.
- [x] Regresiones: build, check, 0 B de JS nuevo y barra de lectura intacta en el código (falta la prueba visual).

## Diferencias entre lo planificado y lo encontrado

- En 1024 × 768 la U1 baja 43 px (913 → 870), pero la U4 sube 42 px (854 → 896) y su cabecera pasa de 213 a 255 px: en la columna derecha, más angosta, sus botones bajan a una segunda fila. 1024 × 768 no tiene criterio; queda anotado para las capturas.
- Se usa `lining-nums` en `.numero-unidad` como prevención del riesgo del «1»; su efecto se confirma en la captura.

## No se pudo verificar

- Capturas, teclado, árbol de accesibilidad y los anchos 360, 640, 1024, 1366 y 1440 px en un navegador real.

## Tareas del desarrollador

1. Tomar capturas de las 4 cabeceras en 1440 × 900, 1366 × 657, 1024 × 768 y 390 × 844, en ambos modos: número a la izquierda, título, objetivo, «Clase n de 4 · 120 min» y botones debajo.
2. Mirar el «1» de la U1 a tamaño grande: que no se lea como «l».
3. Revisar la U3 en oscuro: número `#E4F3FF` sobre `#003B51` y borde de 1 px `#00B0E8`.
4. Revisar la U4 en 1024 × 768: botones en 2 filas (cabecera de 255 px).
5. Recorrer con el teclado los botones de cada cabecera y abrir sus modales. En el árbol de accesibilidad, el `h2` debe leerse «Unidad n: título».
6. Al desplazar, la barra de lectura de 3 px bajo el encabezado sigue funcionando y cambia de color por unidad.

## Decisiones tomadas

- `lining-nums tabular-nums` en el número grande de la cabecera.
- `BarraAvance.astro` borrado. El campo `avance` del esquema se conserva sin mostrarse (RDA-013).

## Pendientes y riesgos

- La P-026 sigue pendiente y va antes de la 06-04.
- U4 en 1024 × 768: +42 px por los botones en 2 filas (sin criterio; se observa en las capturas).
- Tareas de la 06-06 ya anotadas en la bitácora 06-02 (LCP y P-028).

## Revisión

- **Resultado frente al objetivo:** cumplido. Cada unidad se reconoce por su número, el título es la primera lectura, no hay barra y la unidad baja 10 px en 1366 × 657.
- **Qué aprendimos:** quitar la columna de 16 rem de la barra libera ancho para el título y reduce la cabecera. En 1024 px, el número grande quita ancho a la fila de botones.
- **Qué cambia para lo que sigue:** la 06-04 mide contra estas cifras (823 × 4; 798/798/800/773; 870/897/873/896).

## Commit sugerido

`Épica 6 - Iteración 06-03: cabecera de unidad con número grande, título con «Unidad n:» para lectores y «Clase n de 4 · 120 min»; borra BarraAvance.astro`
