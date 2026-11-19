# Bitácora 05-01 · Afordancias y estados de interacción

- **Fecha:** 2026-11-19
- **Agente:** Antigravity (Gemini 3.1 Pro)
- **Rama:** iteracion/05-01-afordancias-estados
- **Estado final:** En revisión

## Resumen

Se agregan los tokens `--color-hover-suave` (`#B1D4E9` claro / `#005877` oscuro) y `--color-presionado` (`#99C8E0` claro / `#006486` oscuro) en `src/styles/global.css`, junto con la regla base de `cursor: pointer` para controles interactivos y `cursor: not-allowed` para deshabilitados. Se rehacen los estados de `BotonModo.astro` y `src/scripts/modo.ts` (nombre accesible sincronizado «Cambiar a modo oscuro» / «Cambiar a modo claro», retiro de `aria-pressed`, globo visible en hover y foco debajo del botón solo con CSS, borde `primario` de 1,5 px y giro de 20° del ícono que se anula al hacer clic), se actualizan las píldoras y «Menú» en `Encabezado.astro`, las variantes secundaria («Copiar» y «Descargar») y principal («Ver la ruta» y «Volver a la portada»), y la elevación de 4 px en hover de las tarjetas de la ruta (`BloqueUnidad.astro`), respetando `prefers-reduced-motion: reduce`. Se registra la propuesta P-013 (`Pendiente`) para `DESIGN.md`.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `src/styles/global.css` | Agrega `--color-hover-suave` y `--color-presionado` en `@theme` y bajo `[data-modo="oscuro"]`, y las reglas de `cursor` en `@layer base`. |
| `src/scripts/modo.ts` | Sincroniza `aria-label` y el texto del globo (`[data-etiqueta-modo]`) con «Cambiar a modo oscuro» / «Cambiar a modo claro»; retira `aria-pressed`. |
| `src/components/BotonModo.astro` | Variante de ícono (`DESIGN.md` 5.1): `hover:bg-hover-suave`, `hover:border-primario` (1,5 px), `active:scale-[0.97] active:bg-presionado`, globo CSS debajo del botón en hover y foco, giro de 20° del SVG en hover que se quita al hacer clic (`data-girando` / `:active`) y `motion-reduce:*`. |
| `src/components/Encabezado.astro` | Píldoras sobre `bg-superficie-2` con `hover:bg-hover-suave`, `active:scale-[0.97] active:bg-presionado` y conservación de `bg-primario text-sobre-primario` en `aria-[current=true]`; botón «Menú» con variante de ícono. |
| `src/components/Prompt.astro` | Botón «Copiar» con variante secundaria (`hover:bg-primario hover:text-sobre-primario`, `active:scale-[0.97] active:bg-presionado active:text-texto`). |
| `src/components/TarjetaDescarga.astro` | Enlace «Descargar» con la misma variante secundaria y estado presionado. |
| `src/components/Portada.astro` | Botón principal «Ver la ruta» con `active:scale-[0.97] active:bg-presionado active:text-texto` y `motion-reduce:active:scale-100`. |
| `src/pages/404.astro` | Botón principal «Volver a la portada» alineado con el estado presionado de la variante principal. |
| `src/components/BloqueUnidad.astro` | Tarjetas de la ruta suben 4 px en hover (`hover:-translate-y-1`, `transition-transform duration-200`, `motion-reduce:hover:translate-y-0`), sin sombras. |
| `_planificacion/00_producto/propuestas-documentos-protegidos.md` | Registra `P-013` (`Pendiente`) para `DESIGN.md` (secciones 2.1, 2.3 y 5). |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/iteracion-05-01-afordancias-estados.md` | Estado `En revisión`, criterios marcados con evidencia y sección «Evidencia del desarrollador». |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/definicion-epica-05.md` | Épica `En curso` y fila `05-01` en `En revisión`. |
| `_planificacion/00_producto/registro-pendientes.md` | Iteración activa, fila `05-01` y prioridad `19` en `En revisión`, decisión de `P-013` e historial. |

## Verificación

- `pnpm astro check`: `0 errors`, `0 warnings`, `0 hints` (27 archivos).
- `pnpm build`: `Complete!`, 0 advertencias, 6 SVG sin referencia limpiados y `Guardia de marcadores: 0 marcadores en dist/`.
- `pnpm prettier --check`: código formateado sin advertencias.
- **JavaScript propio** (4 etiquetas `<script>` en `dist/index.html`, sin contar el beacon de Cloudflare): **2801 B** sin comprimir y **1119 B gzip** (nivel 9), frente a 2583 B / 1051 B gzip antes de la iteración (**+68 B gzip**, bajo el límite de +150 B gzip y dentro del presupuesto total de 3 KB gzip).
- **Verificación de `aria-pressed` en el repositorio:** buscado en `src/`; solo existía en `src/components/BotonModo.astro` (l. 8) y `src/scripts/modo.ts` (l. 29). Ninguna regla CSS ni otro script dependía de él, por lo que se retiró al pasar a un nombre accesible dinámico.

### Fragmento de consola del cursor (`pnpm preview`)

Ejecutado en Chrome headless (CDP) sobre `pnpm preview`:

```js
Object.fromEntries([
  ["modo", "[data-boton-modo]"],
  ["menu", "[data-boton-menu]"],
  ["pildoras", "#menu-principal a"],
  ["copiar", "[data-copiar]"],
  ["descargar", "a[download]"],
  ["summary", "summary"],
  ["tarjetasRuta", "#ruta ol a"],
  ["ctaPortada", "#inicio a[href='#ruta']"],
].map(([k, sel]) => {
  const els = [...document.querySelectorAll(sel)];
  return [k, { total: els.length, pointer: els.filter(el => getComputedStyle(el).cursor === "pointer").length }];
}))
// Resultado:
// {
//   modo: { total: 1, pointer: 1 },
//   menu: { total: 1, pointer: 1 },
//   pildoras: { total: 6, pointer: 6 },
//   copiar: { total: 24, pointer: 24 },
//   descargar: { total: 6, pointer: 6 },
//   summary: { total: 16, pointer: 16 },
//   tarjetasRuta: { total: 4, pointer: 4 },
//   ctaPortada: { total: 1, pointer: 1 }
// }
```

### Luminancia relativa y razón de cambio reposo → hover (fórmula WCAG 2.2)

Luminancias relativas $L$:
- **Claro:** `#FFFFFF` = 1,0000 · `#E4F3FF` (`superficie`) = 0,8782 · `#ECF0FF` (`superficie-2`) = 0,8737 · `#B1D4E9` (`hover-suave`) = 0,6232 · `#99C8E0` (`presionado`) = 0,5346 · `#007EA7` (`primario`) = 0,1771 · `#00678A` (`primario-hover`) = 0,1154 · `#00131D` (`texto`) = 0,0055.
- **Oscuro:** `#00131D` (`fondo` / `sobre-primario`) = 0,0055 · `#00212F` (`superficie`) = 0,0129 · `#003B51` (`superficie-2`) = 0,0372 · `#005877` (`hover-suave`) = 0,0831 · `#006486` (`presionado`) = 0,1084 · `#00B0E8` (`primario`) = 0,3688 · `#5DC9FF` (`primario-hover`) = 0,5132 · `#FFFFFF` (`texto`) = 1,0000.

| Control | Modo | Antes (reposo → hover) | Ratio antes | Ahora (reposo → hover) | Cálculo $(L_1+0{,}05)/(L_2+0{,}05)$ | Ratio ahora (mín. 1,3:1) |
| :------ | :--- | :--------------------- | :---------- | :--------------------- | :---------------------------------- | :----------------------- |
| Botón de modo, «Menú» y píldoras | Claro | `#ECF0FF` → `#E4F3FF` | 1,00:1 | `#ECF0FF` → `#B1D4E9` | $(0{,}8737+0{,}05)/(0{,}6232+0{,}05)$ | **1,37:1** |
| Botón de modo, «Menú» y píldoras | Oscuro | `#003B51` → `#00212F` | 1,39:1 | `#003B51` → `#005877` | $(0{,}0831+0{,}05)/(0{,}0372+0{,}05)$ | **1,53:1** |
| «Copiar» (`Prompt.astro`) | Claro | `#ECF0FF` → `#E4F3FF` | 1,00:1 | `#ECF0FF` → `#007EA7` | $(0{,}8737+0{,}05)/(0{,}1771+0{,}05)$ | **4,07:1** |
| «Copiar» (`Prompt.astro`) | Oscuro | `#003B51` → `#00212F` | 1,39:1 | `#003B51` → `#00B0E8` | $(0{,}3688+0{,}05)/(0{,}0372+0{,}05)$ | **4,80:1** |
| «Descargar» (`TarjetaDescarga.astro`) | Claro | `#E4F3FF` → `#FFFFFF` | 1,13:1 | `#E4F3FF` → `#007EA7` | $(0{,}8782+0{,}05)/(0{,}1771+0{,}05)$ | **4,09:1** |
| «Descargar» (`TarjetaDescarga.astro`) | Oscuro | `#00212F` → `#00131D` | 1,13:1 | `#00212F` → `#00B0E8` | $(0{,}3688+0{,}05)/(0{,}0129+0{,}05)$ | **6,65:1** |
| Principal («Ver la ruta») | Claro | `#007EA7` → `#00678A` | 1,37:1 | `#007EA7` → `#00678A` | $(0{,}1771+0{,}05)/(0{,}1154+0{,}05)$ | **1,37:1** |
| Principal («Ver la ruta») | Oscuro | `#00B0E8` → `#5DC9FF` | 1,34:1 | `#00B0E8` → `#5DC9FF` | $(0{,}5132+0{,}05)/(0{,}3688+0{,}05)$ | **1,34:1** |

### Contraste WCAG 2.2 AA del texto en hover y presionado

| Estado y control | Modo | Texto | Fondo | Ratio | Nivel WCAG |
| :--------------- | :--- | :---- | :---- | :---- | :--------- |
| Hover: modo (globo e ícono), «Menú» y píldoras (`hover-suave`) | Claro | `#00131D` | `#B1D4E9` | **12,12:1** | AAA |
| Hover: modo (globo e ícono), «Menú» y píldoras (`hover-suave`) | Oscuro | `#FFFFFF` | `#005877` | **7,89:1** | AAA |
| Hover: «Copiar» y «Descargar» (`primario`) | Claro | `#FFFFFF` | `#007EA7` | **4,62:1** | AA (16 px, `font-medium`) |
| Hover: «Copiar» y «Descargar» (`primario`) | Oscuro | `#00131D` | `#00B0E8` | **7,54:1** | AAA |
| Hover: botón principal (`primario-hover`) | Claro | `#FFFFFF` | `#00678A` | **6,35:1** | AA |
| Hover: botón principal (`primario-hover`) | Oscuro | `#00131D` | `#5DC9FF` | **10,14:1** | AAA |
| Presionado (`:active`, `presionado`) en botones y píldoras | Claro | `#00131D` | `#99C8E0` | **10,53:1** | AAA |
| Presionado (`:active`, `presionado`) en botones y píldoras | Oscuro | `#FFFFFF` | `#006486` | **6,63:1** | AA |

## Criterios de aceptación

- [x] `getComputedStyle(el).cursor === "pointer"` en `pnpm preview` para modo (1/1), «Menú» (1/1), píldoras (6/6), «Copiar» (24/24), «Descargar» (6/6), `<summary>` (16/16), tarjetas de la ruta (4/4) y CTA de portada (1/1).
- [x] Diferencia de luminancia entre reposo y hover ≥ 1,3:1 en todos los controles y en ambos modos (mínimo: 1,34:1 en botón principal oscuro y 1,37:1 en `superficie-2` → `hover-suave` claro).
- [x] Botón de modo con globo visible en hover y foco (`visibility: "visible"`, `opacity: "1"`), posicionado debajo del botón en 1024 px sin solapar `#menu-principal` (`solapaNav: false`), y nombre accesible en el árbol AX de DevTools (`role: "button"`, `name: "Cambiar a modo oscuro"` en claro y `"Cambiar a modo claro"` en oscuro).
- [x] Con `prefers-reduced-motion: reduce` emulado en Chrome CDP: `transitionProperty: "none"`, `rotate: "0deg"` en hover del ícono de modo, `scale: "1"` en `:active` y `translate: "0px"` en hover de las tarjetas de la ruta.
- [x] Contraste AA en todos los textos en hover y presionado (mínimo: 4,62:1 en `#FFFFFF` sobre `#007EA7`).
- [x] Regresiones: `pnpm build` sin advertencias y guardia en 0; `pnpm astro check` 0/0/0; JS propio +68 B gzip (≤ 150 B gzip); 1 `h1`.

## Revisión manual del desarrollador

- Revisar visualmente en `pnpm preview` (360 px, 1024 px y escritorio, en claro y oscuro, con mouse y teclado) la sensación del hover, el globo del botón de modo, el quiebre del giro al hacer clic antes del revelado circular y la elevación de 4 px de las tarjetas de la ruta (registrado en «Evidencia del desarrollador» de la iteración).

## Decisiones tomadas

- Los tokens `--color-hover-suave` (`#B1D4E9` / `#005877`) y `--color-presionado` (`#99C8E0` / `#006486`) cumplen sin ajuste el umbral ≥ 1,3:1 frente a `--color-superficie-2` (1,37:1 en claro y 1,53:1 en oscuro) y el contraste AA/AAA con `--color-texto`.
- En el estado `:active` de los botones que en hover usan texto `--color-sobre-primario` (principal, «Copiar» y «Descargar»), se fuerza `active:text-texto` para mantener contraste AA/AAA (10,53:1 en claro y 6,63:1 en oscuro) sobre `--color-presionado`.
- Al hacer clic en `BotonModo`, el atributo `data-girando` (que se limpia en `mouseleave`) junto con `group-active/modo:rotate-0` lleva el ícono a `0deg` antes de capturar la transición circular de View Transitions.
- Se registra la propuesta [P-013](../../../00_producto/propuestas-documentos-protegidos.md) (`Pendiente`) para incorporar `--color-hover-suave`, `--color-presionado`, sus contrastes y el hover de las píldoras en `DESIGN.md`.

## Pendientes y riesgos

- Revisión visual del desarrollador en navegador real (`pnpm preview`) y decisión sobre la propuesta `P-013` en `DESIGN.md`.

## Revisión

- **Resultado frente al objetivo:** todos los controles interactivos tienen `cursor: pointer`, estados de hover con razón de luminancia ≥ 1,34:1, respuesta `:active` con `scale(0.97)` y `--color-presionado`, y el botón de modo anuncia y muestra su acción en un globo CSS debajo del botón.
- **Qué aprendimos:** las utilidades `scale-*`, `rotate-*` y `translate-*` de Tailwind v4 escriben sobre las propiedades individuales de CSS (`scale`, `rotate`, `translate`) y no sobre `transform`; por eso las listas `transition-[...]` deben incluir `scale` (o usar `transition-transform`) para animar el estado presionado.
- **Qué cambia para lo que sigue:** los tokens `--color-hover-suave` y `--color-presionado` y las tres variantes de botón de `DESIGN.md` 5.1 quedan listos para reutilizarse en los botones de apertura y cierre de modales (`05-04`) y en las tarjetas de unidad (`05-05` y `05-06`).
- Terminada el 2026-11-19 tras la confirmación visual del desarrollador.

## Commit sugerido

`Épica 5 - Iteración 05-01: agrega tokens y estados de hover y presionado, cursor pointer, globo y giro en el botón de modo, elevación en la ruta y propuesta P-013`
