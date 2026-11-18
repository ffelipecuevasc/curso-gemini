# Iteración 05-02 · Modelo de síntesis y síntesis de U1 y U2

- **Épica:** 05 · Rediseño visual y síntesis del contenido
- **Estado:** Pendiente
- **Rama sugerida:** iteracion/05-02-sintesis-u1-u2
- **Depende de:** 05-01 y RDA-012 aceptada
- **Especificación:** —
- **RDA relacionadas:** RDA-003, RDA-009, RDA-012 (propuesta)

## Objetivo

Que cada bloque y cada unidad tengan una versión corta validada al compilar, y que los 12 bloques de U1 y U2 la tengan escrita y aprobada, sin material de conducción de la clase en el texto publicado.

## Punto de partida

- `src/content.config.ts`: el esquema `bloque` tiene `titulo`, `minutos`, `tipo` o `microcharlaMin` + `practicaMin`, `prompts` (`id`, `titulo`, `texto`) y `profundiza`; el cuerpo Markdown es el texto «Para la clase». El esquema `unidad` tiene `objetivo` (unas 45 palabras en la U1) y `miniProyecto.descripcion`.
- U1 tiene 5 bloques (`bloque-1` a `bloque-5`); U2 tiene 7 (`bloque-0` a `bloque-5` y `cierre`).
- Conteo actual: U1 ≈ 1.991 palabras y U2 ≈ 2.046 palabras (`cat src/content/bloques/uN/*.md src/content/unidades/uN.yaml | wc -w`).
- Material de conducción detectado en U1 y U2 (lista para revisar con el desarrollador, no para borrar sin aprobación):
  - U1 · 2: columna «Pregunta para el grupo» de la tabla de uso responsable; «Mini-prueba (2 min)»; minutos de cada subpunto («2.1 … (4 min)»).
  - U1 · 3: «Los rojos del semáforo se resuelven aquí»; «(5 min, ejercicio E1)».
  - U1 · 4: «(6 min)», «(12 min, individuales)».
  - U1 · 5: fila «Cierre · Vitrina: 3 personas al azar…»; minutos de cada tramo.
  - U2 · cierre: «3 participantes al azar muestran…».
  - U2 · 1 a 5: «Microcharla (3 min)» y «Práctica (17 min)» como encabezados de minutos.

## Alcance y entregables

- Esquema (RDA-012), en `src/content.config.ts`:
  - `bloque.sintesis` (opcional en esta iteración): `resumen` (máximo 25 palabras), `haras` (verbo en segunda persona + producto, máximo 12 palabras) y `claves` (1 o 2 frases de máximo 10 palabras cada una). En la tarjeta del bloque se ven «Qué harás» y las claves; el `resumen` abre el modal «Ver detalle».
  - `prompt.descripcion` (opcional): para qué sirve el prompt y cuándo usarlo, máximo 30 palabras.
  - `unidad.objetivoBreve` (opcional en esta iteración): máximo 20 palabras.
  - Un validador `maxPalabras(n)` reutilizable que cuenta palabras separadas por espacios y hace fallar `pnpm build` con un mensaje en español que dice el campo, el límite y el conteo.
- Síntesis de los 12 bloques de U1 y U2, de los prompts de esas unidades (`descripcion`) y de `objetivoBreve` de U1 y U2, redactada por el agente y aprobada por el desarrollador.
- Cuerpo Markdown de los bloques de U1 y U2 sin el material de conducción que el desarrollador apruebe retirar. El resto del cuerpo se conserva tal cual: pasa a ser el «detalle» que mostrará el modal (05-04).

## Contenido aprobado (copiar tal cual)

> Se completa durante la iteración con el texto que apruebe el desarrollador, bloque por bloque, antes de publicarlo. Mientras falte la aprobación, el campo queda vacío: nunca se publica un borrador.

- …

## Decisiones del desarrollador

- 2026-11-18: síntesis «resumen visible + detalle en modal», redactada por el agente y aprobada por el desarrollador; el texto completo se conserva.

## Tareas

1. Agregar `maxPalabras`, `sintesis`, `descripcion` y `objetivoBreve` al esquema como campos opcionales; comprobar con 3 pruebas (un campo dentro del límite y dos fuera) que el build pasa o falla con el mensaje esperado, y revertir las pruebas.
2. Redactar el borrador de síntesis de los 5 bloques de U1, de sus prompts y de `objetivoBreve`, solo con información que ya está en el bloque o en la ficha, y presentarlo al desarrollador en una tabla (bloque · resumen · «Qué harás» · claves).
3. Hacer lo mismo para los 7 bloques de U2.
4. Presentar la lista de material de conducción de U1 y U2 (punto de partida) con la propuesta de retiro o de reescritura para participantes, y esperar la aprobación ítem por ítem.
5. Cargar en los `.md` y `.yaml` solo lo aprobado, y copiarlo en «Contenido aprobado».
6. Retirar del cuerpo el material de conducción aprobado; comprobar que los minutos del frontmatter no cambian (las sumas de la RDA-009 siguen pasando).
7. Ejecutar `pnpm build`, `pnpm astro check` y las regresiones; contar palabras antes y después.
8. Escribir la bitácora y actualizar el registro.

## Tareas del desarrollador

1. Aceptar la RDA-012 antes de empezar.
2. Aprobar o corregir cada síntesis y cada retiro de material de conducción.

## Criterios de aceptación

- [ ] `pnpm build` falla con un mensaje en español cuando un `resumen` pasa de 25 palabras, una clave de 10 o un `objetivoBreve` de 20 (3 pruebas anotadas en la bitácora y revertidas).
- [ ] Los 12 bloques de U1 y U2 tienen `sintesis` completa, y U1 y U2 tienen `objetivoBreve` (búsqueda con un comando).
- [ ] Cada texto cargado coincide con «Contenido aprobado» (comparación literal).
- [ ] `dist/index.html` no contiene «al azar», «Pregunta para el grupo» ni «semáforo» en U1 y U2, salvo los que el desarrollador decidió conservar (anotados en la bitácora).
- [ ] Los 24 prompts del sitio siguen idénticos a su fuente (comparación de la 03-02) y los minutos de cada unidad siguen sumando 120.
- [ ] Regresiones: `pnpm build` sin advertencias con la guardia; `pnpm astro check` 0/0/0; 0 B de JavaScript nuevo; la página se ve igual que antes salvo el texto retirado (la síntesis todavía no se muestra).

## Riesgos

- Que un resumen agregue un dato que no estaba en la fuente: cada síntesis cita en la tabla de borrador la frase del bloque de la que sale.
- Que la revisión de 12 síntesis no quepa en 30 minutos: se presentan por unidad, en dos entregas dentro de la misma iteración.

## Fuera de alcance

- Mostrar la síntesis en la página (05-05) y los modales (05-04).
- U3 y U4 (05-03).

## Datos requeridos

### Del cliente

- Ninguno.

### Del desarrollador

- Aceptación de la RDA-012.
- Aprobación de cada síntesis y de cada retiro.
