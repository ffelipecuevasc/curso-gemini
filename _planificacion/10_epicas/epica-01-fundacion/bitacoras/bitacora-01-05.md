# Bitácora 01-05 · Transición animada del cambio de modo

- **Fecha:** 2026-11-17
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** iteracion/01-05-transicion-cambio-modo
- **Estado final:** Terminada

## Resumen

Al pulsar el botón de modo, el modo nuevo se revela con un círculo difuminado que crece desde el centro en 1 s, con `document.startViewTransition` y la curva `--ease-expo-out`; el modo anterior queda quieto debajo. Sin la API, o con «reducir movimiento», el cambio es instantáneo. Se reutiliza `switchTheme` de la 01-03 y no cambian los tokens ni el aspecto del sitio. Antes de empezar se comprobó: rama correcta, P-001 «Aplicada» y el token `--ease-expo-out` ya presente en `@theme` desde la 01-02 (no se agregó de nuevo).

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `src/components/BotonModo.astro` | El clic envuelve `switchTheme` en `startViewTransition`; respaldo con `return` sin la API o con `prefers-reduced-motion: reduce` |
| `src/styles/global.css` | Reglas `::view-transition-group/new/old(root)` y `@keyframes revelar-modo`, fuera de `@layer` |
| `src/scripts/modo.ts` | Solo el comentario de `switchTheme` (ya no dice «la 01-05 envolverá») |
| `iteracion-01-05-transicion-cambio-modo.md` | Estado y criterios con evidencia |
| `iteracion-01-04-modelo-contenido.md`, `bitacora-01-04.md` | Estado «Terminada» |
| `decisiones.md` | RDA-008: avance de las unidades en cuatro tramos iguales |
| `propuestas-documentos-protegidos.md` | P-004: `unidades-del-curso.md` a la lista de documentos permitidos |
| `definicion-epica-01.md`, `definicion-epica-02.md`, `definicion-epica-03.md` | Enlace al cierre; RDA-008 y la comprobación de referencias anotadas donde se cargan |
| `registro-pendientes.md` | Estados, backlog, decisión resuelta, propuesta e historial |

## Verificación

- `pnpm format`: sin errores.
- `pnpm astro check`: 0 errores, 0 advertencias, 0 sugerencias.
- `pnpm build`: «Complete!», sin advertencias; ningún `PENDIENTE_` en `dist/index.html`. El CSS compilado trae `@keyframes revelar-modo` y la máscara con prefijo `-webkit-mask`.
- **JavaScript medido** con Python (`gzip` nivel 9) sobre los 3 `<script>` en línea del HTML compilado: 2022 B sin comprimir, **852 B con gzip**. Con el mismo método sobre `main` antes del cambio: 1890 B y 802 B (+50 B). La 01-03 informó 806 B midiendo con Node; la diferencia es del compresor. Límite: 3 KB.
- Peticiones: la máscara es un `data:` dentro del CSS, así que no agrega URL externas (comprobado en el CSS compilado).

## Criterios de aceptación

- [x] Revelado circular de 1 s en Chrome, con mouse y teclado, en ambos sentidos. Evidencia: comprobado por el desarrollador el 2026-11-17.
- [x] Sin `startViewTransition`: cambio al instante y consola sin errores. Evidencia: comprobado por el desarrollador el 2026-11-17.
- [x] Con «reducir movimiento» emulado: cambio al instante. Evidencia: comprobado por el desarrollador el 2026-11-17.
- [x] `aria-pressed`, `data-modo`, `localStorage` y foco coinciden después del efecto. Evidencia: comprobado por el desarrollador el 2026-11-17.
- [x] JS bajo 3 KB y sin peticiones nuevas: tamaño medido por el agente (852 B); pestaña Red comprobado por el desarrollador el 2026-11-17.
- [x] `pnpm build` y `pnpm astro check` sin errores.

## Diferencias entre lo planificado y lo encontrado

- El `url(%23blur)` del filtro dentro del SVG hacía fallar el build: Vite intentaba resolverlo como recurso y Lightning CSS no aceptaba el `%`. Se escribió `url%28%23blur%29` (paréntesis codificados); el SVG es el mismo.
- `animation` y `animation-fill-mode` se juntaron en `revelar-modo 1s var(--ease-expo-out) both`. La curva va también en la animación de `new(root)`, porque la de `group(root)` no se hereda a ese pseudoelemento.
- Las reglas `.dark::view-transition-*` se quitaron (ajuste 3): repetían las generales.

## No se pudo verificar

El agente no tenía navegador. El desarrollador ejecutó estos pasos el 2026-11-17 y todos salieron bien (informado por el desarrollador, no medido por el agente), con `pnpm build` y `pnpm preview`:

1. Chrome: pulsa el botón con el mouse y luego con `Tab` + `Enter`; el círculo debe crecer desde el centro en 1 s, de claro a oscuro y de vuelta.
2. Pulsa varias veces seguidas: el modo final debe coincidir con el último clic.
3. En la consola: `document.startViewTransition = undefined`, pulsa el botón: cambio instantáneo y sin errores.
4. Recarga, abre Rendering y emula `prefers-reduced-motion: reduce`: cambio instantáneo, sin círculo.
5. Después de cada caso: `aria-pressed` del botón, `data-modo` de `<html>` y `localStorage.modo` coinciden; el foco sigue en el botón.
6. Pestaña Red: al pulsar no aparece ninguna petición.
7. Firefox o Safari: el cambio funciona (con o sin animación, según su soporte).

## Decisiones tomadas

- El respaldo comprueba la API y «reducir movimiento» en el momento del clic, así respeta un cambio de preferencia sin recargar.
- RDA-008 y P-004 se registraron según lo decidido por el desarrollador en el pedido de esta iteración.

## Pendientes y riesgos

- Referencias rotas a recursos y descargas: siguen pendientes para la 03-01 (anotado en el backlog y en la definición de la épica 03).
- P-004 la aplica el desarrollador.

## Revisión

- **Resultado frente al objetivo:** cumplido en código y en lo que se puede medir sin navegador; los criterios visuales quedan para la revisión del desarrollador.
- **Qué aprendimos:** un `url()` dentro de un SVG en `data:` choca con Vite y Lightning CSS; hay que codificar sus paréntesis.
- **Qué cambia para lo que sigue:** nada en el backlog. Es la última iteración de la épica 01: ver [bitacora-01-cierre](bitacora-01-cierre.md).

## Commit sugerido

`Épica 1 - Iteración 01-05: agrega el revelado circular al cambiar de modo con View Transitions; cierra la 01-04, registra la RDA-008 y la P-004 y prepara el cierre de la épica 01`
