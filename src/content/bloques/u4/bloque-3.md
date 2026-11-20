---
unidad: u4
numero: 3
titulo: "Skill 2: gtd-visual (archivos de referencia y flujos guiados)"
minutos: 25
microcharlaMin: 3
practicaMin: 22
sintesis:
  resumen: "Instala gtd-visual, que pregunta, muestra cuatro estilos en vista previa y produce la pieza con la marca GTD, y verifica el resultado."
  haras: "Genera una presentación y un dashboard con la marca GTD."
  claves:
    - "Los archivos de referencia viajan dentro de la skill."
    - "Verifica logo, contraste y tres cifras contra el CSV."
prompts:
  - id: presentacion-gtd-visual
    titulo: "Presentación"
    descripcion: "Pide a gtd-visual una presentación para la gerencia con los hallazgos del dataset del trimestre, con la marca GTD."
    texto: "crea una presentación para la gerencia con los hallazgos del dataset del trimestre, con la marca GTD"
---

**Conceptos clave:** esta skill aplica la misma lógica de una skill de marca profesional:
- primero **pregunta** (modo claro u oscuro, presentación o dashboard, y contenido);
- luego **muestra 4 estilos** en una vista previa en Canvas;
- el usuario **elige**;
- y Gemini **produce** la pieza final con la paleta GTD y el logotipo oficial.

Lo nuevo frente al optimizador son los **archivos de referencia**: la paleta, los estilos y el SVG del logo viajan dentro de la skill. Así se usan siempre igual y el logo nunca se redibuja.

**Práctica**
1. **Instalar:** Crear → Subir → elegir `gtd-visual.zip` → revisar que se cargaron los archivos de referencia → Crear.
2. **Presentación:** pedir «crea una presentación para la gerencia con los hallazgos del dataset del trimestre, con la marca GTD» y adjuntar el CSV de la U2. Responder las preguntas, revisar las 4 vistas previas, elegir un estilo y generar.
3. **Dashboard:** repetir con modo oscuro y producto dashboard.
4. **Verificar:** el logo intacto, el contraste, 3 cifras contra el CSV y que los filtros funcionen.

**Carril extra:** pedir el mismo contenido en otro estilo y comparar cuál comunica mejor a la gerencia.
