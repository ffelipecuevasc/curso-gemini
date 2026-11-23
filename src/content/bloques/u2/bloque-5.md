---
unidad: u2
numero: 5
titulo: "Dashboard interactivo con marca en Canvas"
minutos: 20
microcharlaMin: 9
practicaMin: 11
sintesis:
  resumen: "Construye en Canvas un dashboard web de una página con el CSV, indicadores, gráficos y filtros interactivos, comprueba una cifra y aplica la marca GTD."
  haras: "Construirás un dashboard interactivo en Canvas con filtros y marca GTD."
  claves:
    - "Incluye el rótulo de datos ficticios y comprueba una cifra."
    - "No cargues datos reales en una app con enlace público."
prompts:
  - id: dashboard
    titulo: "Dashboard interactivo"
    descripcion: "Pide en Canvas un dashboard de una página con el CSV: cuatro indicadores, tres gráficos, filtros, tabla con buscador, marca GTD y rótulo de datos ficticios."
    texto: |-
      Crea en Canvas un dashboard interactivo de una sola página (HTML, CSS y JavaScript) con los datos del archivo CSV adjunto. Debe incluir:
      - 4 indicadores clave arriba: total de solicitudes, tiempo promedio de resolución en horas, porcentaje resuelto en el primer contacto y NPS promedio;
      - 3 gráficos: evolución por mes, comparación por región y distribución por tipo de servicio;
      - filtros por mes, región y tipo de servicio que actualicen los indicadores y los gráficos;
      - una tabla con buscador.
      Diseño que se adapte a pantallas pequeñas. Rótulo visible: «Datos ficticios — material de capacitación».
      [pega aquí el bloque de marca]
  - id: corregir-dashboard
    titulo: "Corregir un error del dashboard"
    descripcion: "Plantilla para describir en lenguaje natural un filtro o gráfico que falla y pedir su corrección sin tocar el resto."
    texto: |-
      Cuando elijo [filtro y valor], [qué no cambia o qué se ve mal]. Corrígelo sin cambiar lo demás.
profundiza:
  recursos:
    - canvas
---

- Canvas puede crear **apps web** de una sola página (HTML, CSS y JavaScript) que se ejecutan en la misma ventana. Esto reemplaza dashboards estáticos de planilla por tableros con filtros e interactividad.
- **Precaución al compartir:** cualquiera con el enlace público de una app puede ver y editar los datos asociados a ella. Con los datos ficticios del curso no hay riesgo, pero en el trabajo real la regla es cuidar qué datos se cargan en una app que se va a compartir.
- **En esta clase nadie comparte el enlace de Canvas:** entregas una captura de pantalla.

**Práctica (Actividad 6 del Cuaderno):** pega el prompt con el CSV adjunto; prueba cada filtro; corrige un error describiéndolo; comprueba una cifra contra el CSV; toma una captura.

<div data-prompt="dashboard"></div>

<div data-prompt="corregir-dashboard"></div>

**Mínimo viable:** 4 indicadores, 1 filtro que funciona y 1 cifra comprobada.

**Carril extra:** modo claro/oscuro con los colores de la marca, o una pestaña de «Mercado» con 3 datos del informe de Deep Research.
