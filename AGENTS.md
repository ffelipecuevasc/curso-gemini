# AGENTS.md · Mini-LMS «Gemini & Google Suite en el Entorno Laboral»

Instrucciones de trabajo para cualquier agente de IA (Claude Code, Antigravity, Codex u otro) que colabore en este repositorio. Este archivo es la entrada principal.

---

## 1. Contexto en 30 segundos

- **Cliente:** Capacita Tu Futuro SpA (OTEC), para trabajadores de GTD Telsur (Chile). El curso y el sitio son de Felipe Cuevas.
- **Objetivo:** un mini-LMS de una sola página donde cada participante del curso encuentra la ruta completa, el detalle de cada unidad, los prompts listos para copiar, las descargas y los enlaces a la documentación y los videos oficiales de Google.
- **Alcance:** una página estática con portada (hero), ruta del curso, instructor y una sección por cada una de las 4 unidades. Sin cuentas de usuario, sin backend y sin datos personales: lo que no esté en `_planificacion/00_producto/producto.md` queda fuera.
- **Dominio:** URL gratuita de Cloudflare (`*.workers.dev`).
- **Desarrollador responsable:** Felipe Cuevas · [felipecuevas.dev](https://felipecuevas.dev/).

## 2. Documentos protegidos

`AGENTS.md`, `DESIGN.md`, `README.md` (raíz), `_planificacion/README.md`, `_planificacion/plantillas/` y `.claude/` son la referencia estable del proyecto y **no los edites**.

Si crees que alguno debería cambiar, registra la propuesta en `_planificacion/00_producto/propuestas-documentos-protegidos.md` (créalo con su plantilla si no existe), con:

1. El archivo y la sección.
2. El texto actual, copiado literalmente, y el texto que propones.
3. Por qué conviene el cambio y qué pasa si no se hace.

El desarrollador decide y hace la edición. Mientras tanto, sigue el documento tal como está.

## 3. Documentos permitidos

En las zonas de documentación (la raíz, `_planificacion/`, `docs/` y `.claude/`) solo existen estos archivos `.md`. **No crees ningún otro**: ni registros de prompts, ni notas de sesión, ni borradores, ni resúmenes, ni copias de trabajo. Un documento nuevo siempre parte de su plantilla en `_planificacion/plantillas/`.

| Zona | Documentos permitidos |
| :--- | :-------------------- |
| Raíz | `AGENTS.md` · `DESIGN.md` · `README.md` |
| .claude/ | `.claude/README.md` · `.claude/commands/*.md` · `.claude/hooks/documentos-permitidos.md` |
| _planificacion/ | `_planificacion/README.md` · `_planificacion/plantillas/*.md` · `_planificacion/00_producto/producto.md` · `_planificacion/00_producto/unidades-del-curso.md` · `_planificacion/00_producto/registro-pendientes.md` · `_planificacion/00_producto/registro-archivo.md` · `_planificacion/00_producto/decisiones.md` · `_planificacion/00_producto/propuestas-documentos-protegidos.md` · `_planificacion/10_epicas/epica-*/definicion-epica-*.md` · `_planificacion/10_epicas/epica-*/iteracion-*.md` · `_planificacion/10_epicas/epica-*/bitacoras/bitacora-*.md` |

`*` reemplaza cualquier texto dentro de un mismo nivel de carpeta. La lista completa vive en `.claude/hooks/documentos-permitidos.md`. Si crees que falta un documento, propónlo en «Propuestas fuera de alcance» de `registro-pendientes.md`; nunca lo crees. El contenido del curso en `src/content/` es contenido del sitio, no documentación: ahí sí se crean los `.md` que definan los esquemas de las colecciones.

## 4. Orden de lectura obligatorio antes de trabajar

1. `_planificacion/00_producto/registro-pendientes.md`: backlog, qué está pendiente y cuál es la iteración activa. Es la fuente única de verdad del trabajo.
2. El archivo de la iteración activa en `_planificacion/10_epicas/<epica>/`.
3. `_planificacion/00_producto/decisiones.md`: RDA vigentes. No contradigas una RDA aceptada.
4. `DESIGN.md`: fuente de verdad del diseño. Léelo siempre que la tarea toque la interfaz.
5. `README.md` (raíz): descripción del proyecto y de su arquitectura.
6. `_planificacion/README.md`: estructura de la planificación, ciclos de trabajo, convenciones y reglas de mantenimiento. Las plantillas están en `_planificacion/plantillas/`.
7. El resto de `_planificacion/` según la tarea: `producto.md` ante dudas de alcance o tono, y las bitácoras anteriores de la misma épica, en su carpeta `bitacoras/`.

Si algo de lo anterior está en conflicto, detente y pregunta.

## 5. Stack y versiones

- Astro con salida estática (`output: 'static'`), TypeScript estricto y Tailwind CSS v4 (tokens en `@theme`, sin `tailwind.config`). Las versiones exactas son las fijadas en `package.json`; no actualices una versión mayor sin consulta.
- PNPM en modo estricto (`engine-strict`, sin `shamefully-hoist`) y Node.js en la versión indicada en `package.json` (`engines`).
- Hosting: Cloudflare Workers con recursos estáticos (`assets.directory` apuntando a `dist/`), configurado en `wrangler.jsonc`, y Cloudflare Web Analytics con su script de medición.

## 6. Comandos

```bash
pnpm install          # instala dependencias según pnpm-lock.yaml
pnpm dev              # servidor de desarrollo de Astro
pnpm build            # compila el sitio estático en dist/
pnpm preview          # sirve dist/ localmente para revisar la compilación
pnpm astro check      # revisa tipos y plantillas de Astro
pnpm format           # da formato con Prettier (si el script existe en package.json)
```

Usa siempre PNPM. Nunca otro gestor de paquetes. No dejes servidores de desarrollo corriendo al terminar. `wrangler deploy` no lo ejecutas tú: lo ejecuta el desarrollador.

## 7. Límites de actuación

**Prohibido (lo hace solo el desarrollador):**

- `git commit`, `git push`, `git merge`, `git pull`, `git rebase`, `git reset`, `git tag` y cualquier operación que reescriba o publique historial, también desde PowerShell.
- Desplegar o modificar la configuración del hosting, del DNS o de servicios externos (Cloudflare Workers, `wrangler deploy`, Cloudflare Web Analytics, Google Search Console).
- Editar los documentos protegidos (sección 2), `.git/`, o crear `CLAUDE.md` o `CLAUDE.local.md`.
- Leer, buscar o editar archivos con secretos: `.env` y sus variantes, `.dev.vars`, llaves privadas y archivos de credenciales. Excluye siempre esos archivos de tus búsquedas. `.env.example` sí se puede leer.
- Crear archivos `.md` que no estén en la lista de documentos permitidos (sección 3).

**Requiere consulta previa:**

- Crear o cambiar de rama. Propón el nombre con el formato `iteracion/XX-YY-descripcion-corta` (o `correccion/descripcion-corta` para una corrección fuera de iteración) y espera aprobación.
- Editar archivos de configuración de la raíz (`package.json`, `pnpm-lock.yaml`, `.npmrc`, `astro.config.mjs`, `tsconfig.json`, `wrangler.jsonc`, `.prettierrc`) y `.env.example`.
- Instalar, actualizar o eliminar dependencias. Cada dependencia nueva requiere justificar su peso, la alternativa sin dependencia y, si es estructural, una RDA.
- Eliminar o mover archivos, incluidos los de `public/descargas/`.

**Permitido sin consulta:** editar `src/` y `public/` (salvo eliminar o mover) y los documentos vivos de `_planificacion/` de la sección 3 (salvo `_planificacion/README.md` y `plantillas/`); ejecutar los comandos de la sección 6; leer el repositorio, salvo los archivos con secretos.

En Claude Code, `.claude/settings.json` y sus hooks aplican estos límites; `.claude/README.md` explica cada regla.

## 8. Reglas de contenido

1. Todo el texto visible y toda la documentación están en **español de Chile**, trato de **tú**, lenguaje simple y directo, sin anglicismos innecesarios. Los nombres de productos de Google se escriben como Google los nombra (Gemini, Gemini Notebook, Canvas, Deep Research).
2. **No inventes datos.** El contenido del curso (bloques, minutos, prompts, rúbricas, entregables, enlaces oficiales) viene solo del documento de unidades del curso que entrega el desarrollador; la trayectoria del instructor, solo de ese mismo documento. Ninguna cifra, certificación, fecha ni enlace se completa por cuenta propia.
3. Si falta un dato, usa un marcador explícito: `PENDIENTE_CLIENTE` para datos del cliente (Capacita Tu Futuro) o de la empresa de los participantes (GTD Telsur), y `PENDIENTE_DESARROLLADOR` para decisiones técnicas, de diseño o de contenido del curso. Regístralo en `registro-pendientes.md`. Nunca publiques un dato de relleno que parezca real. Antes de publicar, ningún marcador puede quedar visible en el sitio: `pnpm build` falla si encuentra `PENDIENTE_` o `VERIFICAR` en cualquier archivo de texto de `dist/`, incluidas las descargas.
4. **No inventes resultados.** Una prueba que no ejecutaste, una medición que no hiciste o un estado que no comprobaste no se escriben como hechos.
5. Nombres de archivo y carpeta en ASCII: minúsculas, guiones, sin tildes ni ñ. Única excepción: los archivos `SKILL.md` de `public/descargas/` (`optimizador-prompts/SKILL.md` y `plantillas-alumnos/<plantilla>/SKILL.md`), porque el formato de skills exige ese nombre.
6. El sitio nunca afirma ni sugiere respaldo de Google, GTD o Capacita Tu Futuro más allá de la redacción que entregue el cliente. Los logotipos de Google y Gemini identifican las herramientas que se enseñan; no se modifican, no se recolorean y no se presentan como sello o alianza.

## 9. Reglas técnicas

1. HTML semántico, un solo `h1` en la página, cada `section` con `aria-labelledby` y un enlace «Saltar al contenido principal» como primer elemento enfocable.
2. Cero JavaScript por defecto. Solo hay tres comportamientos con script: cambio de modo claro/oscuro, botón de copiar y menú de navegación móvil. Se escriben como scripts pequeños sin framework, empaquetados por Astro; ninguno es necesario para leer el contenido.
3. Sin recursos de terceros en tiempo de ejecución: fuentes autoalojadas en `woff2`, íconos SVG en línea y videos de YouTube solo como enlaces, nunca incrustados. La única excepción es el script de Cloudflare Web Analytics, que no usa cookies.
4. Accesibilidad WCAG 2.2 AA: contrastes de `DESIGN.md`, foco visible, objetivos táctiles de 44 × 44 px como mínimo, todo operable con teclado y `prefers-reduced-motion` respetado.
5. Metas de rendimiento en móvil: Lighthouse con 95 o más en Rendimiento y 100 en Accesibilidad, Buenas prácticas y SEO; LCP menor a 2,5 s, CLS menor a 0,1 e INP menor a 200 ms.
6. El contenido de las unidades vive en colecciones de contenido de Astro (`src/content/`) con esquema validado; los componentes no llevan textos del curso escritos a mano.
7. Las descargas viven en `public/descargas/` con nombres en ASCII, y cada enlace de descarga muestra el formato y el peso del archivo.
8. Los enlaces externos abren en una pestaña nueva con `rel="noopener noreferrer"` y lo anuncian al lector de pantalla.
9. Componentes en PascalCase (`TarjetaUnidad.astro`), un componente por archivo, en `src/components/`.

## 10. Estándares de calidad

Trabaja como un **desarrollador senior experto en Astro, Tailwind CSS v4 y TypeScript**: el código que entregas debe resistir la revisión de alguien que domina el ecosistema. Aplica estos estándares al planificar, al implementar y al revisar.

**Generales:**

1. Cada módulo, clase o función tiene una sola responsabilidad clara; los nombres dicen qué hacen.
2. Sin duplicación: lo que se repite se extrae, salvo que extraerlo complique más de lo que ahorra.
3. Toda entrada externa se valida, todo error se maneja con el formato del proyecto y ningún secreto queda en el código.
4. Cada cambio de comportamiento lleva su prueba o su verificación reproducible, según la definición de terminado.
5. **Sin sobreingeniería.** Un patrón de diseño, una capa o una dependencia nueva se usan solo si resuelven un problema real de este proyecto, en proporción a su tamaño. Si dudas, elige la solución más simple que cumpla los criterios y explica la alternativa en la bitácora.

**Del stack:**

1. HTML semántico y un solo `h1` por página.
2. Componentes `.astro` pequeños con props tipadas en TypeScript.
3. Contenido repetido (unidades, bloques, prompts, recursos) en colecciones con esquema Zod; si el esquema no valida, la compilación falla.
4. Tokens de `DESIGN.md` en `@theme` de Tailwind v4; nunca valores sueltos de color, tipografía o radio en las clases.
5. Imágenes con el componente de imagen de Astro y dimensiones explícitas; SVG decorativos con `aria-hidden="true"`.
6. Presupuesto de rendimiento: sin fuentes ni scripts que bloqueen el renderizado, fuentes precargadas solo las del primer pantallazo.

## 11. Flujo de trabajo por iteración

1. Lee el registro y la iteración activa (sección 4).
2. Comprueba la definición de preparada (sección 13.1). Si no se cumple, no implementes: avisa al desarrollador qué falta.
3. Propón el nombre de la rama de la iteración y espera aprobación antes de crearla.
4. Sigue las tareas de la iteración, aplicando los estándares de calidad (sección 10). Implementa solo lo descrito en los criterios de aceptación. Si detectas trabajo fuera de alcance, anótalo como propuesta en `registro-pendientes.md`; no lo hagas.
5. Ejecuta la iteración completa. Resuelve por tu cuenta todo lo que puedas, incluidas las verificaciones contra producción con las herramientas que tengas permitidas. Pide datos al desarrollador solo si, después de intentarlo por todos los medios, no puedes obtenerlos: en ese caso completa la sección «Evidencia del desarrollador» de la iteración, según `_planificacion/README.md`.
6. Verifica según la definición de terminado (sección 13.2).
7. Escribe la bitácora en `_planificacion/10_epicas/<epica>/bitacoras/` con `_planificacion/plantillas/bitacora.md`, incluida su revisión: resultado frente al objetivo, qué se aprendió y qué cambia para lo que sigue.
8. Actualiza en la misma pasada `registro-pendientes.md` (estado de la iteración, filas del backlog que cubrió, historial de una línea con enlace a la bitácora) y, si corresponde, `decisiones.md`. No toques documentos que el trabajo no afectó.
9. Deja la iteración en `En revisión` y entrega al desarrollador un resumen con los archivos modificados y un mensaje de commit sugerido con el formato `Épica N - Iteración NN-NN: descripción`, en una sola línea de máximo 200 caracteres y en español de Chile; cuenta los caracteres antes de entregarlo. Por ejemplo: `Épica 1 - Iteración 01-02: agrega los tokens de color, tipografía y radios`. El commit lo hace el desarrollador.
10. Si era la última iteración de su épica, en la misma entrega cierra la épica y propón las iteraciones de la siguiente, según la sección 4.4 de `_planificacion/README.md`: bitácora de cierre, revisión como experto en el stack, propuesta con nombre y objetivo de cada iteración, y espera de aprobación. Con la aprobación, genera todas las iteraciones de la épica siguiente de una vez. El desarrollador también puede pedirlo en cualquier momento («planifica la siguiente épica» o `/siguiente-epica`).

En Claude Code, `/iteracion XX-YY` recorre estos pasos.

## 12. Cambios y correcciones

Cuando te pidan corregir un error o cambiar algo que ya existe:

1. Entiende el pedido. Si es un error, reprodúcelo antes de corregirlo.
2. Identifica qué secciones, componentes y documentos afecta.
3. Clasifícalo con una pregunta: **¿después del cambio, las iteraciones, `DESIGN.md` y las RDA siguen describiendo bien el sitio?**
   - **Sí, es menor** (el código no cumplía lo planificado, un texto, un ajuste dentro de `DESIGN.md`): agrega una fila de tipo `Corrección` al backlog, implementa, verifica contra los criterios existentes y registra una línea de historial. Escribe una bitácora breve solo si hubo mediciones o decisiones que conviene conservar.
   - **No, es significativo** (cambia el alcance, la estructura de la página, el modelo de contenido o la arquitectura): propone una RDA; si afecta un documento protegido, registra la propuesta (sección 2). Espera la aprobación del desarrollador y trabaja el cambio como una iteración con tareas y bitácora.
   - **Si dudas**, pregunta antes de tocar el código.
4. Actualiza solo los documentos que el cambio afectó.
5. Si la corrección no pertenece a la iteración activa, el commit sugerido es `Corrección: descripción`, con las mismas reglas de largo e idioma.

Los detalles están en `_planificacion/README.md`, sección 4.3.

## 13. Definición de preparada y de terminado

### 13.1 Preparada: antes de empezar una iteración

Una iteración está lista para empezar solo cuando:

1. Su objetivo cabe en una o dos frases.
2. Sus criterios de aceptación se pueden comprobar con un comando o una medición.
3. Las iteraciones de las que depende están `Terminada`.
4. Los datos que necesita están confirmados, o está acordado trabajar con `PENDIENTE_CLIENTE` o `PENDIENTE_DESARROLLADOR` mientras llegan.
5. Cabe en el tamaño máximo: un objetivo, revisable en unos 30 minutos y 8 tareas como máximo. Si no cabe, propón partirla antes de empezar.

Si falla alguna, no empieces: di qué falta y propón cómo resolverlo. Esta lista también se usa al generar las iteraciones de una épica, para que nazcan preparadas.

### 13.2 Terminado: antes de dejarla en revisión

Un trabajo queda listo para revisión (`En revisión`) solo cuando:

1. `pnpm build` termina sin errores ni advertencias nuevas y `pnpm astro check` sin errores.
2. Revisaste la página con `pnpm preview` en 360 px y en escritorio, en modo claro y oscuro, y comprobaste con teclado lo que tocaste.
3. Cada criterio de aceptación que marcas tiene su evidencia escrita: el comando, la medición o la comprobación que hiciste y su resultado.
4. Los documentos afectados están al día, y solo esos.
5. Escribiste la bitácora (o la línea de historial, si es una corrección menor).

**Verificaciones recomendadas** (no son requisito; propónlas cuando el cambio lo justifique y dilo como recomendación): Lighthouse móvil sobre `pnpm preview` cuando la iteración cambia el primer pantallazo, las fuentes o los scripts; revisión con lector de pantalla (NVDA o VoiceOver) cuando cambia la navegación o los botones de copiar.

## 14. Cuándo detenerse y preguntar

- La iteración no cumple la definición de preparada (sección 13.1).
- Falta un dato del curso o del cliente que bloquea la tarea.
- La tarea contradice una RDA, `DESIGN.md` o el alcance.
- Hay que agregar una dependencia, cambiar configuración o crear una rama.
- Conviene cambiar un documento protegido (sección 2) o crear un documento que no está en la lista (sección 3).
- La tarea introduce un factor que cambia la complejidad del proyecto (cuentas de usuario, guardar avance en un servidor, formularios, datos personales, una integración nueva): propón revisar el nivel de proceso.
- Un cambio empeoraría las metas de rendimiento o accesibilidad de la sección 9.
