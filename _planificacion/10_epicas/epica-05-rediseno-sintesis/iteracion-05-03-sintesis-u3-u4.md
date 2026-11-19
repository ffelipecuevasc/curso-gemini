# Iteración 05-03 · Síntesis de U3 y U4

- **Épica:** 05 · Rediseño visual y síntesis del contenido
- **Estado:** Pendiente
- **Rama sugerida:** iteracion/05-03-sintesis-u3-u4
- **Depende de:** 05-02
- **Especificación:** —
- **RDA relacionadas:** RDA-009, RDA-012

## Objetivo

Completar la síntesis aprobada de los 14 bloques de U3 y U4, retirar su material de conducción de la clase y dejar los campos de síntesis como obligatorios, para que ningún bloque futuro llegue a la página sin su versión corta.

## Punto de partida

- Esquema con `sintesis`, `descripcion` y `objetivoBreve` opcionales, y el validador `maxPalabras` (05-02).
- U3 tiene 7 bloques (`bloque-0` a `bloque-5` y `cierre`; ≈ 2.628 palabras con la ficha) y U4 tiene 7 (≈ 1.912 palabras).
- Material de conducción detectado (lista para revisar con el desarrollador):
  - U3 · cierre: «3 participantes al azar muestran su kit…».
  - U4 · 5: «Demo Day (10 min): 5 participantes elegidos al azar presentan…»; «Construcción (13 min)».
  - U3 · 1 a 5 y U4 · 2, 4 y 5: «Microcharla (N min)» y «Práctica (N min)» como encabezados de minutos.

## Alcance y entregables

- Síntesis de los 14 bloques de U3 y U4, `descripcion` de sus prompts y `objetivoBreve` de U3 y U4, redactadas por el agente y aprobadas por el desarrollador.
- Cuerpo de los bloques de U3 y U4 sin el material de conducción aprobado.
- `bloque.sintesis` y `unidad.objetivoBreve` pasan a ser obligatorios; `prompt.descripcion` también, salvo que el desarrollador decida dejarlo opcional para algún prompt (anotado en la bitácora).

## Contenido aprobado (copiar tal cual)

> Se completa durante la iteración con el texto que apruebe el desarrollador, bloque por bloque.

- …

## Tareas

1. Redactar el borrador de síntesis de los 7 bloques de U3, sus prompts y `objetivoBreve`, con la frase de origen de cada síntesis.
2. Hacer lo mismo para los 7 bloques de U4.
3. Presentar la lista de material de conducción de U3 y U4 con la propuesta de retiro o de reescritura, y esperar la aprobación ítem por ítem.
4. Cargar solo lo aprobado y copiarlo en «Contenido aprobado».
5. Retirar del cuerpo el material de conducción aprobado.
6. Volver obligatorios los campos de síntesis y comprobar que el build pasa con las 4 unidades y falla si se borra la `sintesis` de un bloque (prueba revertida).
7. Ejecutar `pnpm build`, `pnpm astro check` y las regresiones; anotar en la bitácora el conteo de palabras por unidad antes y después, separando síntesis y detalle.
8. Escribir la bitácora y actualizar el registro.

## Tareas del desarrollador

1. Aprobar o corregir cada síntesis y cada retiro de material de conducción.

## Criterios de aceptación

- [ ] Los 26 bloques tienen `sintesis` y las 4 unidades tienen `objetivoBreve` (búsqueda con un comando); quitar uno hace fallar `pnpm build` (prueba revertida).
- [ ] Cada texto cargado coincide con «Contenido aprobado».
- [ ] Las palabras que verá la tarjeta por unidad (objetivo breve + títulos de bloque + «Qué harás» + claves) suman como máximo 300 (conteo con un comando sobre el contenido, anotado en la bitácora). El `resumen` no cuenta: vive en el modal.
- [ ] `dist/index.html` no contiene «al azar», «Pregunta para el grupo» ni «semáforo», salvo lo que el desarrollador decidió conservar.
- [ ] Los 24 prompts siguen idénticos a su fuente y los minutos de cada unidad siguen sumando 120.
- [ ] Regresiones: `pnpm build` sin advertencias con la guardia; `pnpm astro check` 0/0/0; 0 B de JavaScript nuevo.

## Riesgos

- La U3 es la unidad más larga: si no cabe en 300 palabras, se deja una sola clave en los bloques más cortos antes de acortar los títulos o «Qué harás».

## Fuera de alcance

- Mostrar la síntesis en la página (05-05).

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Aprobación de cada síntesis y de cada retiro.
