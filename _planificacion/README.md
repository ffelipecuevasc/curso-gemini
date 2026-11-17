# _planificacion · Guía de la documentación del proyecto

Esta carpeta contiene todo lo que un agente de IA o una persona necesita para saber **qué se construye, por qué, en qué orden y qué se hizo**. No contiene código ni se publica.

> Si este archivo discrepa con `00_producto/registro-pendientes.md` sobre el estado del trabajo, prevalece el registro. Sobre las reglas de la carpeta, prevalece este archivo.

---

## 1. Estructura

```text
_planificacion/
├── README.md                              Esta guía y sus reglas
├── plantillas/                            Plantillas de los documentos que se repiten
├── 00_producto/
│   ├── producto.md                        Qué es el producto, para quién y qué no es
│   ├── registro-pendientes.md             Backlog y fuente única de verdad del trabajo pendiente
│   ├── registro-archivo.md                Filas antiguas del registro (épicas cerradas, historial)
│   ├── decisiones.md                      Registro de Decisiones Arquitectónicas (RDA)
│   └── propuestas-documentos-protegidos.md   Cambios propuestos a los documentos protegidos
└── 10_epicas/
    └── epica-XX-nombre/
        ├── definicion-epica-XX.md
        ├── iteracion-XX-YY-descripcion.md
        └── bitacoras/
            ├── bitacora-XX-YY.md
            ├── bitacora-XX-YY-sufijo.md   Bitácoras adicionales de la misma iteración
            └── bitacora-XX-cierre.md      Cierre de la épica
```

`registro-archivo.md` y `propuestas-documentos-protegidos.md` se crean recién cuando hacen falta, con su plantilla.

## 2. Contenido de cada carpeta

### 2.1 `00_producto/`

Documentos vivos que describen el producto completo.

1. **`producto.md`:** propósito, qué es, qué no es, público, idioma y tono, indicadores de éxito e hitos. Cambia poco; se consulta ante dudas de alcance.
2. **`registro-pendientes.md`:** estado de las épicas abiertas y sus iteraciones, épicas cerradas, backlog priorizado, datos pendientes del cliente, decisiones por tomar, propuestas fuera de alcance e historial. Es lo primero que se lee y lo último que se actualiza en cada trabajo.
3. **`registro-archivo.md`:** las filas que salen del registro para que no crezca sin control (sección 5.2). No se edita lo archivado.
4. **`decisiones.md`:** cada decisión técnica relevante como RDA numerada. `RDA-001` registra el nivel de proceso del proyecto.
5. **`propuestas-documentos-protegidos.md`:** los cambios que los agentes proponen a los documentos protegidos y su estado (sección 4.5).

### 2.2 `10_epicas/`

Una subcarpeta por épica, con nombre descriptivo en ASCII (`epica-01-fundacion/`). Cada una contiene su definición, sus iteraciones y la carpeta `bitacoras/` con las bitácoras de sus iteraciones y la de cierre. Todo lo de una épica queda junto.


### 2.3 `plantillas/`

Las plantillas de los documentos que se crean durante el proyecto (sección 6). Son protegidas, como este archivo: ningún agente las edita, y un documento nuevo siempre parte de su plantilla.

## 3. Convenciones

- **Numeración:** épicas `01`–`99`; iteraciones `XX-YY`, donde `XX` es la épica e `YY` el correlativo.
- **Nombres de archivo y carpeta:** minúsculas, guiones y solo caracteres ASCII, sin tildes ni ñ (`epica-02-sistema-diseno/`). El contenido sí lleva tildes y ñ.
- **Documentos permitidos:** solo existen los archivos `.md` de `.claude/hooks/documentos-permitidos.md` (sección 5.1).
- **Iteraciones:** `iteracion-XX-YY-descripcion-corta.md`.
- **Tamaño máximo de una iteración:** un solo objetivo, un resultado que el desarrollador revisa en unos 30 minutos y **8 tareas como máximo**. Una iteración que se pasa se parte en dos o más antes de empezar, cada una con su propio objetivo y sus criterios.
- **Detalle de las iteraciones:** al arrancar el proyecto se escriben en detalle solo las iteraciones de la primera épica; las de las demás épicas quedan nombradas en la tabla de su definición. Las iteraciones de cada épica siguiente se generan todas juntas al cerrar la anterior (sección 4.4).
- **Sin especificaciones:** por el nivel del proyecto, cada iteración trae su objetivo y sus propios criterios de aceptación.
- **Bitácoras:** en `10_epicas/epica-XX-nombre/bitacoras/`. `bitacora-XX-YY.md` para la primera de la iteración; las siguientes llevan un sufijo descriptivo (`bitacora-XX-YY-correccion.md`, `bitacora-XX-YY-produccion.md`) y, si el sufijo se repite, un número (`bitacora-XX-YY-ajustes-2.md`). La de cierre es `bitacora-XX-cierre.md`. La fecha va dentro del archivo, no en el nombre.
- **Estados de trabajo:** `Pendiente`, `En curso`, `Bloqueada`, `En revisión`, `Terminada`, `Descartada`.
- **Fechas:** formato ISO `AAAA-MM-DD`, hora de Chile continental (America/Santiago).
- **Idioma:** Español de Chile, trato de tú, en toda la documentación.
- **Ramas:** `iteracion/XX-YY-descripcion-corta`, o `correccion/descripcion-corta` para una corrección fuera de iteración. Su creación requiere aprobación del desarrollador; `main` solo recibe lo revisado.
- **Commits:** `Épica N - Iteración NN-NN: descripción`, `Épica N - Cierre: descripción` al cerrar una épica, o `Corrección: descripción` fuera de iteración; una línea de máximo 200 caracteres. Los hace solo el desarrollador.
- **Marcadores de datos faltantes:** `PENDIENTE_CLIENTE` (datos del negocio) y `PENDIENTE_DESARROLLADOR` (decisiones técnicas o de diseño). Todo marcador se registra en `registro-pendientes.md`.

## 4. Ciclos de trabajo

### 4.1 Una iteración

Una iteración es una unidad de trabajo que se puede revisar de una vez: una sesión, un hito o un bloque funcional. No tiene duración fija. En Claude Code, el atajo es `/iteracion XX-YY`.

1. El desarrollador marca la iteración como `En curso` en `registro-pendientes.md` (o pide al agente que lo haga).
2. El agente lee `AGENTS.md`, el registro, la iteración, `DESIGN.md` si toca la interfaz y las RDA relacionadas.
3. El agente comprueba la **definición de preparada** de `AGENTS.md`: objetivo claro, criterios verificables, dependencias terminadas, datos del cliente disponibles y tamaño dentro del máximo. Si algo falla, no empieza: avisa qué falta y propone cómo resolverlo (registrar el dato pendiente, partir la iteración).
4. El agente ejecuta **la iteración completa**: sigue las tareas aplicando los estándares de calidad de `AGENTS.md`, implementa, verifica según la definición de terminado, incluso contra producción si tiene cómo, y escribe la bitácora con su revisión en la carpeta `bitacoras/` de la épica.
5. Solo si no pudo obtener un dato de producción después de intentarlo por todos los medios, completa la sección «Evidencia del desarrollador» de la iteración (sección 5.5).
6. El agente actualiza el registro (estado, backlog, historial) y, si corresponde, las RDA.
7. El agente deja la iteración en `En revisión` y propone el mensaje de commit.
8. Si es la última iteración de su épica, el agente sigue con el cierre de la épica y la propuesta de la siguiente (sección 4.4), en la misma entrega.
9. El desarrollador revisa, hace commit y push, y marca la iteración como `Terminada`.

### 4.2 Una funcionalidad nueva

1. Se agrega al backlog con su prioridad.
2. Cuando se acerca su turno, se crea la iteración que la implementa, con su objetivo, tareas y criterios de aceptación propios.
3. Se sigue el ciclo de la sección 4.1.

### 4.3 Un cambio o una corrección

1. **Entender** el pedido. Si es un error, reproducirlo antes de corregirlo.
2. **Identificar** las funcionalidades, componentes y documentos afectados.
3. **Clasificar** con una pregunta: ¿después del cambio, las iteraciones, `DESIGN.md` y las RDA siguen describiendo bien el sitio?
   - **Menor (sí):** el código no cumplía lo planificado, un texto, un ajuste dentro de `DESIGN.md`. Fila de tipo `Corrección` en el backlog, implementación, verificación contra los criterios existentes y una línea de historial. Bitácora breve solo si hubo mediciones o decisiones que conviene conservar.
   - **Significativo (no):** cambia el alcance, la estructura de la página, el modelo de contenido o la arquitectura. Primero se propone una RDA; si afecta un documento protegido, se registra la propuesta (sección 4.5). Después se trabaja como una iteración, con tareas y bitácora.
   - **Ante la duda,** se pregunta antes de tocar el código.
4. **Actualizar** solo los documentos afectados.
5. **Implementar, verificar y registrar.** Una corrección que no pertenece a la iteración activa usa la rama `correccion/descripcion-corta` (si el proyecto trabaja con ramas) y el commit `Corrección: descripción`.

### 4.4 Cierre de una épica y planificación de la siguiente

Se activa en dos casos: como paso final de la última iteración de una épica, o cuando el desarrollador lo pide («planifica la siguiente épica», o el comando `/siguiente-epica` en Claude Code). Si la épica todavía tiene iteraciones sin terminar, el agente lo dice y no la cierra.

1. **Bitácora de cierre.** El agente escribe `bitacoras/bitacora-XX-cierre.md` con la plantilla `plantillas/bitacora-cierre.md`: criterio de término comprobado con evidencia, hallazgos abiertos, decisiones del desarrollador y revisión al cierre (resultado, qué se aprendió y qué cambia en el backlog o en las épicas siguientes). En la definición de la épica solo enlaza ese archivo. Si la revisión cambia algo, lo aplica en el registro en la misma pasada; si justifica cambiar un documento protegido, registra la propuesta (sección 4.5).
2. **Lectura.** Lee `AGENTS.md`, `README.md`, `DESIGN.md` si existe, la definición de la épica siguiente, el backlog y las RDA vigentes.
3. **Revisión como experto.** Antes de proponer, revisa cada iteración como un desarrollador senior experto en el stack de `AGENTS.md`, contra sus «Estándares de calidad»: responsabilidades y patrones adecuados, pruebas, seguridad, deuda técnica heredada y **sin sobreingeniería** (un patrón, una capa o una dependencia solo si resuelven un problema real del proyecto).
4. **Propuesta.** Presenta en el chat las iteraciones de la épica siguiente: número, nombre y objetivo en una línea, elementos del backlog que cubre y qué dato del cliente o del desarrollador necesita cada una, más una sección «Revisión técnica del experto» con lo que ajustó y por qué. Toda iteración respeta el tamaño máximo (sección 3); la que no cabe ya viene partida en la propuesta.
5. **Iteraciones que ya existen.** Si la épica siguiente ya tiene iteraciones escritas en detalle, no se rehacen: el agente las revisa contra la revisión al cierre y propone ajustes solo si algo cambió. Si nada cambió, lo dice.
6. **Aprobación.** El agente espera la aprobación del desarrollador. Si este ajusta la lista, el agente la corrige.
7. **Generación.** Con la aprobación, el agente genera de una vez todos los archivos de iteración de la épica siguiente con `plantillas/iteracion.md`, y en la misma pasada actualiza la tabla de iteraciones de la definición de la épica, el registro (las filas de la épica cerrada pasan a `registro-archivo.md` y la épica queda en «Épicas cerradas»; las iteraciones nuevas entran a la tabla de estado y al backlog) y una línea de historial.
8. **Preparación.** El agente revisa cada iteración generada contra la definición de preparada de `AGENTS.md`. Lo que falta por causas externas (un dato del cliente, un archivo del desarrollador) se registra en «Decisiones por tomar» o «Datos pendientes del cliente», y la iteración queda `Pendiente` hasta que se resuelva.

Si no hay épica siguiente, el agente revisa el backlog: si quedan elementos comprometidos, propone una épica nueva con su definición; si no, lo dice para que el desarrollador cierre el proyecto o lo pase a mantenimiento.

### 4.5 Una propuesta de cambio a un documento protegido

Los documentos protegidos (`AGENTS.md`, `DESIGN.md`, `README.md`, este archivo, `plantillas/` y `.claude/`) no los edita ningún agente.

1. Si el archivo no existe, el agente crea `00_producto/propuestas-documentos-protegidos.md` con su plantilla.
2. Agrega la propuesta con el siguiente número (`P-001`, `P-002`…): documento, sección, por qué, el texto actual copiado literalmente y el texto propuesto, y su fila `Pendiente` en la tabla de estado.
3. Avisa al desarrollador en la entrega. Las bitácoras enlazan la propuesta; no la repiten.
4. El desarrollador la aplica o la descarta y cambia su estado con la fecha.

## 5. Reglas de mantenimiento

### 5.1 Documentos permitidos

- Solo existen los archivos `.md` de `.claude/hooks/documentos-permitidos.md`, resumidos en la sección «Documentos permitidos» de `AGENTS.md`. Ningún agente crea otro: ni registros de prompts, ni notas de sesión, ni borradores, ni resúmenes.
- Si un agente cree que falta un documento, lo propone en «Propuestas fuera de alcance» del registro. Para aprobarlo, el desarrollador agrega su patrón a la lista y a `AGENTS.md`.
- Un documento nuevo siempre parte de su plantilla de `plantillas/`.

### 5.2 Registro de pendientes y backlog

- El backlog dice **qué** falta y en qué orden; la tabla de estado dice **cómo va** cada iteración. Un elemento asignado a una iteración muestra su número, y al cerrar la iteración se actualizan en la misma pasada su fila y las del backlog que cubrió.
- Los elementos del backlog no llevan IDs, puntos ni estimaciones. Los terminados se quedan al final de la tabla con estado `Terminada` hasta que su épica se cierra.
- Una propuesta fuera de alcance que se aprueba se mueve al backlog, con una fila de historial.
- El historial lleva **una fila por cambio y una sola línea**, con enlace a la bitácora que tiene el detalle. Las mediciones, decisiones y salvedades van en la bitácora, no en el historial.
- Cada campo del encabezado ocupa una sola línea.
- Nada se borra. Si un cambio anterior queda sin efecto, se agrega una fila nueva que lo dice.
- La tabla de estado enlaza todas las bitácoras de cada iteración.
- **Para que no crezca sin control:** al cerrar una épica, sus filas de la tabla de estado y sus elementos terminados del backlog pasan a `registro-archivo.md` (creado con un encabezado y las mismas tablas), y la épica queda resumida en «Épicas cerradas». Cuando el historial pasa de 50 filas, las más antiguas también pasan al archivo. Lo archivado no se edita.

### 5.3 Decisiones (RDA)

- Numeración correlativa: `RDA-001`, `RDA-002`… Antes de crear una, revisa el último número usado.
- Una RDA aceptada no se contradice: se reemplaza con una nueva que la declare «Reemplazada por RDA-XXX» (o «Reemplazada parcialmente»), y la antigua recibe una línea que remite a la nueva.
- Las actualizaciones van al final de la RDA como «**Actualización AAAA-MM-DD:** …», breves. Si una RDA acumula varias actualizaciones de fondo, se reemplaza con una nueva.
- La tabla índice del inicio del archivo se mantiene al día.
- Un cambio de nivel de proceso se registra como una RDA nueva que reemplaza a `RDA-001` (o a la que la haya reemplazado).

### 5.4 Bitácoras

- Se escriben al terminar cada tramo de trabajo, con `plantillas/bitacora.md`, en la carpeta `bitacoras/` de la épica.
- No se editan después de entregadas: las correcciones van en una bitácora nueva con sufijo.
- Registran mediciones reales. «Verificado» sin decir cómo y dónde no cuenta.
- Una casilla de criterio se marca solo si se midió.
- Las secciones opcionales de la plantilla (migraciones, diferencias con lo planificado, lo que no se pudo verificar, revisión manual, despliegue) se usan cuando aplican y se borran cuando no.
- Terminan con una revisión breve: resultado frente al objetivo, qué se aprendió y qué cambia para lo que sigue. Si cambia algo (el backlog, el orden de las iteraciones), se aplica en la misma pasada.
- Son breves: las salidas largas de comandos no se pegan, se resume la medición que importa.

### 5.5 Evidencia del desarrollador

**Por defecto, una iteración se ejecuta completa.** El agente resuelve todo por su cuenta, incluidas las verificaciones en producción que pueda hacer con las herramientas que tiene permitidas.

Pedir datos al desarrollador es **la excepción**, porque cada pedido le suma trabajo. Solo corresponde cuando se cumplen las dos condiciones:

1. El trabajo exige contrastar lo hecho en local con información de producción (un panel de un servicio externo, una medición en un dispositivo real, una cuenta a la que el agente no tiene acceso).
2. El agente intentó obtener esa información por todos los medios a su alcance y no pudo.

En ese caso, el agente:

1. Termina y registra en la bitácora todo lo que sí pudo hacer.
2. Completa la sección **«Evidencia del desarrollador»** del archivo de la iteración: fecha y hora de las pruebas, commit desplegado, **qué intentó y por qué no pudo** (sin eso el pedido no es válido), qué dato necesita, para qué criterio y los pasos exactos para obtenerlo con el menor esfuerzo.
3. Deja la iteración en `En revisión` y avisa.
4. Cuando el desarrollador responde en esa sección, consolida en una bitácora nueva (`bitacora-XX-YY-produccion.md`).

No se crean archivos de evidencia aparte.

## 6. Plantillas

Todo documento que se repite parte de su plantilla en `plantillas/`. Las notas en bloque de cita (`>`) de cada plantilla explican cuándo usar una sección opcional y se borran al escribir el documento.

| Plantilla | Para qué | Dónde se guarda |
| :-------- | :------- | :-------------- |
| `iteracion.md` | Una iteración | `10_epicas/epica-XX-nombre/iteracion-XX-YY-descripcion.md` |
| `definicion-epica.md` | Una épica nueva | `10_epicas/epica-XX-nombre/definicion-epica-XX.md` |
| `bitacora.md` | Lo que pasó en un tramo de trabajo | `10_epicas/epica-XX-nombre/bitacoras/bitacora-XX-YY.md` |
| `bitacora-cierre.md` | El cierre de una épica | `10_epicas/epica-XX-nombre/bitacoras/bitacora-XX-cierre.md` |
| `rda.md` | Una decisión técnica | Al final de `00_producto/decisiones.md` |
| `propuestas-documentos-protegidos.md` | El archivo de propuestas, al crear la primera | `00_producto/propuestas-documentos-protegidos.md` |
