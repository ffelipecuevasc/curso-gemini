---
unidad: u4
numero: 1
titulo: "De Gems a Skills: qué son, por qué cambian y cómo se usan"
minutos: 12
microcharlaMin: 3
practicaMin: 9
profundiza:
  recursos:
    - crear-administrar-skills
    - transicion-gems-skills
    - skills-app-gemini-workspace
    - anuncio-skills
---

**Microcharla (3 min)**
- **Qué es una skill:** instrucciones personalizadas reutilizables, con archivos opcionales, que Gemini aplica en los chats. Se usan de forma automática cuando encajan con la tarea, o cuando el usuario las elige.
- **Por qué Google reemplaza los Gems:**
  - **Se usan dentro del mismo chat**, sin abrir otra ventana como pasaba con los Gems.
  - **Se combinan:** varias skills en un mismo pedido (por ejemplo, un estilo de escritura más lineamientos de marca), y una skill puede llamar a otra.
  - **Formato abierto `SKILL.md`** (Markdown), portable entre herramientas compatibles con el estándar.
  - **Funcionan en más lugares:** la app de Gemini, las apps de Workspace y Gemini Enterprise. Ojo: no se sincronizan entre esos lugares.
- **Calendario:** los Gems pasaron a Configuración el 17-nov-2026 y se pueden seguir usando. En cuentas personales se migran automáticamente a skills en borrador. En cuentas Business y Enterprise desaparecen no antes del 1-mar-2027.
- **Anatomía de una skill:** un archivo `SKILL.md` con un encabezado (nombre en minúsculas con guiones y una **descripción**) y luego las instrucciones en Markdown. Opcionalmente lleva archivos de referencia (texto, PDF, planillas, imágenes, SVG) o scripts sin acceso a internet. **La descripción es la clave:** con ella Gemini decide cuándo activar la skill.

**Práctica (9 min)**
1. Abrir **Personalizar → Skills** y recorrer la página: Recomendadas, Crear, Activar y Desactivar.
2. Crear una skill desde una **plantilla recomendada** y usarla escribiendo `/` en el chat.
3. Probar la activación automática: escribir un pedido que calce con la descripción, sin usar `/`.
4. Desactivarla y comprobar que deja de activarse sola.

**Para llevarte:** si repites una instrucción más de dos veces, es candidata a skill.
