# Iteración 04-04 · Rendimiento, accesibilidad y verificación final

- **Épica:** 04 · Publicación, medición y calidad
- **Estado:** Pendiente
- **Rama sugerida:** iteracion/04-04-verificacion-final
- **Depende de:** 04-03
- **Especificación:** —
- **RDA relacionadas:** RDA-002, RDA-005

## Objetivo

Comprobar con Lighthouse móvil, en local y en la URL publicada, que el sitio cumple 95 en Rendimiento y 100 en Accesibilidad, Buenas prácticas y SEO, y ajustar el peso o la jerarquía de títulos solo si la medición lo exige.

## Punto de partida

- La épica 03 midió `dist/index.html` en 249 160 B (50 748 B gzip), frente a 61 892 B antes de la épica; no hay medición de Lighthouse.
- Las fichas saltan de `h2` a `h4` (decisión aceptada en la 03-01), lo que puede restar en la auditoría de accesibilidad.

## Alcance y entregables

- Lighthouse móvil sobre `pnpm preview` y sobre la URL publicada, con las 4 notas y LCP, CLS y TBT.
- Decisión sobre el peso del HTML y el salto de `h2` a `h4`, tomada con esa medición.
- Cierre de la épica 04.

## Tareas

1. Medir Lighthouse móvil sobre `pnpm preview` (3 corridas, se anota la mediana) y el peso de `dist/index.html` y su gzip.
2. Si Rendimiento baja de 95, proponer en el chat el ajuste con menos impacto (por ejemplo, plegar contenido o dividir la carga) y esperar la decisión; si no, registrar que el peso actual cumple.
3. Si Accesibilidad baja de 100 por el salto de `h2` a `h4`, proponer el ajuste de niveles y esperar la decisión; si no, registrar que la jerarquía actual pasa.
4. Aplicar los ajustes aprobados y volver a medir.
5. Medir Lighthouse móvil sobre la URL publicada que entregue el desarrollador.
6. Ejecutar `pnpm build`, `pnpm astro check` y las regresiones.
7. Escribir la bitácora y actualizar el registro.
8. Cerrar la épica 04 (`_planificacion/README.md`, sección 4.4) y revisar el backlog restante.

## Tareas del desarrollador

1. Publicar la versión con los ajustes y entregar la URL publicada.
2. Entregar las fechas de las clases, para fijar el hito de publicación.

## Criterios de aceptación

- [ ] Lighthouse móvil en local: Rendimiento ≥ 95, Accesibilidad 100, Buenas prácticas 100 y SEO 100; LCP < 2,5 s y CLS < 0,1 (mediana de 3 corridas).
- [ ] Lighthouse móvil sobre la URL publicada con las mismas metas.
- [ ] Peso de `dist/index.html` y su gzip medidos y comparados con 249 160 B y 50 748 B, con la decisión anotada en la bitácora.
- [ ] Salto de `h2` a `h4` evaluado con el resultado de Accesibilidad, con la decisión anotada.
- [ ] Regresiones: `pnpm build` sin advertencias con la guardia; `pnpm astro check` 0/0/0; 24 de 24 prompts; 1 `h1`; 360 px y ambos modos.
- [ ] Criterio de término de la épica 04 comprobado en la bitácora de cierre.

## Riesgos

- Que las notas varíen entre corridas: se usa la mediana de 3 y se anota el equipo y el navegador.
- Que el script de Web Analytics baje Rendimiento o Buenas prácticas: se mide con y sin él en local.
- INP no se mide en Lighthouse de laboratorio: se anota TBT como referencia.

## Fuera de alcance

- Cambios de diseño que no exija la medición.
- Dominio propio.

## Datos requeridos

### Del cliente

- Fechas de las 4 clases (definen el hito de publicación).

### Del desarrollador

- URL publicada.
- Aprobación de los ajustes de peso o jerarquía, si la medición los exige.
