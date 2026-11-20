# Bitácora 05-00 · Corrección documental previa a la 05-04

- **Fecha:** 2026-11-19
- **Agente:** Claude Code (Sonnet 5.5)
- **Rama:** correccion/epica-05-previa-05-04
- **Estado final:** En revisión

## Resumen

Corrección 18.3, solo documental (sin cambios en `src/` ni en documentos protegidos). Parte de `main` con el commit `c3fe114` (05-03). Cierra la 05-03 como `Terminada`, registra la P-013 como `Aplicada` tras comprobar `DESIGN.md`, retira las menciones obsoletas de `(propuesta)` de la RDA-011 y la RDA-012 y las tareas de la 05-04, 05-05 y 05-07 que ya se cumplieron, y deja escrita la decisión de publicar el estado intermedio austero entre la 05-04 y la 05-05.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/definicion-epica-05.md` | Fila 05-03 en `Terminada`; quita «(propuesta)» de la RDA-011 (l. 21 y l. 70). |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/iteracion-05-03-sintesis-u3-u4.md` | `Estado`: `Terminada`. |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/bitacoras/bitacora-05-03.md` | `Estado final`: `Terminada`. |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/iteracion-05-04-modales.md` | «RDA relacionadas» sin «(propuesta)»; «Depende de»: 05-01, 05-03 y P-013 aplicada; borra la tarea del desarrollador «Aceptar la RDA-011 y aplicar P-009, P-010 y P-011» (la otra tarea pasa a ser la 1) y su línea en «Datos requeridos» (queda «Ninguno»); agrega la decisión del 2026-11-19. |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/iteracion-05-05-unidad-una-pantalla.md` | «RDA relacionadas» sin «(propuesta)»; quita «Aplicación de la P-009» de «Datos requeridos» (queda «Ninguno»). |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/iteracion-05-07-efectos.md` | «RDA relacionadas» sin «(propuesta)»; quita «Aplicación de P-009 y P-010» de «Datos requeridos» (queda «Ninguno»). |
| `_planificacion/10_epicas/epica-05-rediseno-sintesis/iteracion-05-08-verificacion.md` | «RDA relacionadas» sin «(propuesta)». |
| `_planificacion/00_producto/propuestas-documentos-protegidos.md` | P-013 `Aplicada` (tabla y línea «Estado»); quita «(propuesta)» de la RDA-011 en el «Por qué» de la P-010. |
| `_planificacion/00_producto/registro-pendientes.md` | Filas 05-03 y 21 en `Terminada`; «Depende de» de la 05-04: `05-03`; fila 18.3 `En revisión`; sale la P-013 de «Decisiones por tomar»; `Iteración activa`; una fila de historial. |
| `_planificacion/00_producto/registro-archivo.md` | Recibe la fila más antigua del historial (2026-11-17, ajuste de la 02-01). |

## Verificación

- `git branch --contains c3fe114`: la rama de trabajo y `main` lo contienen (precondición cumplida).
- `grep -n "hover-suave\|presionado" DESIGN.md`: ambos tokens con sus HEX en 2.1 (l. 29–30), cuatro contrastes en 2.3 (l. 73–76) y el hover de las píldoras en la fila «Encabezado» (l. 107); coincide con el «Texto propuesto» de la P-013.
- `grep -rnE "RDA-01[12] \(propuesta" _planificacion/10_epicas/epica-05-*/*.md _planificacion/00_producto/*.md`: 0 coincidencias. Solo quedan en las citas históricas «Antes» y «Después» de `bitacora-05-00-correccion-documental.md`, `bitacora-05-02.md` y `bitacora-05-03.md`, que no se editan.
- Filas del historial en `registro-pendientes.md`: 50.
- `pnpm build`: sin errores ni advertencias; guardia de marcadores con 0 marcadores en `dist/`.
- `pnpm astro check`: 0 errores, 0 advertencias, 0 sugerencias.
- `git diff --name-only`: solo `DESIGN.md` (cambio del desarrollador, sin tocar) y archivos de `_planificacion/`.

## Criterios de aceptación

- [x] Cierre de la 05-03 en el registro (filas 05-03 y 21), la definición de la épica, la iteración y la bitácora.
- [x] P-013 marcada `Aplicada` con `DESIGN.md` verificado y fuera de «Decisiones por tomar».
- [x] Menciones obsoletas y tareas ya cumplidas corregidas (grep sin coincidencias en los documentos vivos).
- [x] Decisión del estado intermedio austero escrita en la 05-04.
- [x] Corrección 18.3 en el backlog y una fila de historial, con 50 filas.

## Decisiones tomadas

- En las secciones «Del desarrollador» de la 05-04, 05-05 y 05-07, que quedaron vacías al borrar su única línea, se escribe «Ninguno.» para que la plantilla siga completa.
- Las citas históricas con «(propuesta)» dentro de bitácoras ya entregadas no se reescriben.

## Pendientes y riesgos

- Sin pendientes nuevos: la 05-04 puede partir una vez aprobada esta corrección.
- La definición de la épica (l. 85) y la 05-07 («Depende de») siguen nombrando las propuestas P-009/P-010 como precondición ya cumplida; se dejan por ser descriptivas y no contradictorias.

## Revisión

- **Resultado frente al objetivo:** los documentos de la épica 05 describen el estado real (RDA-011 y RDA-012 aceptadas, P-009 a P-013 aplicadas, 05-03 terminada) y la 05-04 no exige tareas ya cumplidas.
- **Qué aprendimos:** revisar las menciones obsoletas en cada cierre evita arrastrarlas hasta la iteración que las usa.
- **Qué cambia para lo que sigue:** nada en el orden de las iteraciones; la 05-04 depende solo de la 05-01, la 05-03 y la P-013.

## Commit sugerido

`Corrección: cierra la 05-03, marca la P-013 como aplicada, retira menciones obsoletas de RDA-011 y RDA-012 y tareas cumplidas de la 05-04 y registra el estado intermedio austero`
