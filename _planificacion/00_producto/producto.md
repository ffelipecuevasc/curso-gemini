# Producto · Mini-LMS «Gemini & Google Suite en el Entorno Laboral»

- **Cliente:** Capacita Tu Futuro SpA (OTEC), para trabajadores de GTD Telsur (Chile)
- **Desarrollador:** Felipe Cuevas · [felipecuevas.dev](https://felipecuevas.dev/)
- **Documento base:** `unidades-del-curso.md` (versión 5, 2026-11-17), en el proyecto de Claude «Mini-LMS · Gemini & Google Suite»
- **Última revisión:** 2026-11-17

---

## 1. Propósito

Darles a los participantes del mini-bootcamp un solo lugar, rápido y accesible, con todo lo que necesitan para seguir cada clase y repasarla después: la ruta del curso, lo que se hace en cada bloque, los prompts y plantillas listos para copiar, los archivos de trabajo y la teoría ampliada con fuentes oficiales de Google. Con unos 50 participantes trabajando de forma individual, el sitio evita que alguien se atrase por escribir desde cero o por buscar un archivo.

## 2. Qué es

1. Una página web estática única, en español de Chile, con modo claro y oscuro.
2. Una portada, una vista general de la ruta (4 unidades, de 0 % a 100 %), una sección por unidad y una sección del instructor.
3. Por unidad: objetivo, mini-proyecto, bloques con sus minutos, prompts copiables, descargas, «Profundiza en tu tiempo» con enlaces a documentación y videos oficiales de Google, y la lista «Terminado cuando…».
4. Un material de apoyo que sigue disponible después del curso.

## 3. Qué no es

1. No es una plataforma con cuentas, inscripción, notas, foros ni seguimiento del avance de cada participante.
2. No recibe ni guarda datos de los participantes: no tiene formularios.
3. No reemplaza las clases ni la demostración en vivo del instructor.
4. No es material oficial de Google, GTD ni Capacita Tu Futuro.
5. No contiene información real de GTD ni de sus clientes: todo ejemplo usa datos ficticios o públicos.

Cualquier funcionalidad que implique cuentas, guardar datos en un servidor o formularios queda fuera de alcance y obliga a revisar el nivel de proceso (RDA-001).

## 4. Público objetivo

| Perfil | Situación | Qué necesita del producto |
| :----- | :-------- | :------------------------ |
| Participante del curso (trabajador de GTD, mayor de 18 años, nivel principiante a intermedio en IA) | En clase, con la videollamada y Gemini abiertos en el mismo computador; trabaja solo y a contrarreloj | Encontrar el bloque actual en segundos y copiar el prompt o descargar el archivo con un clic |
| Participante después del curso | Repasa una unidad o retoma un ejercicio en su tiempo | La teoría ampliada y los enlaces oficiales, ordenados por bloque |
| Instructor (Felipe Cuevas) | Proyecta la página durante la clase | Un recorrido claro por unidad y bloque, legible al proyectarse |

Condiciones de uso a considerar en todo diseño:

- Computador como dispositivo principal (Gemini y Canvas se usan en la web), con la pantalla compartida entre el sitio, Gemini y la videollamada: la página debe funcionar bien en media pantalla (unos 640 px de ancho).
- También se abre en el celular para repasar.
- Conexiones corporativas o domésticas variadas: la página debe cargar rápido aunque la red esté cargada por la videollamada.
- Participantes con distintos niveles de manejo digital: textos claros y navegación evidente.

## 5. Idioma y tono

- Todo el producto está en **español de Chile**: ortografía, vocabulario y formato de números de esa variante (`1.234,5`; `CLP 4.690`; fechas `17-11-2026` en el texto visible).
- Trato de **tú**, frases cortas y directas, sin tecnicismos innecesarios.
- Los nombres de los productos de Google se escriben como los escribe Google; las rutas de menú, tal como aparecen en la interfaz en español.

## 6. Indicadores de éxito

1. **Rendimiento:** Lighthouse móvil de 95 o más en Rendimiento y 100 en Accesibilidad, Buenas prácticas y SEO, medido sobre la URL publicada.
2. **Accesibilidad:** sin errores en una revisión automática (Lighthouse o axe) y la página completa recorrible solo con el teclado.
3. **Uso en clase:** el participante llega a cualquier prompt de la unidad actual en dos clics o menos desde la portada.
4. **Visitas:** visitas y páginas vistas por clase en Cloudflare Web Analytics, revisadas por el desarrollador después de cada clase.

## 7. Hitos comprometidos

| Semana o fecha | Hito | Referencia |
| :------------- | :--- | :--------- |
| `PENDIENTE_CLIENTE` (antes de la clase 1) | Sitio publicado con la ruta, el instructor y la Unidad 1 completa | Épicas 01 a 04 |
| `PENDIENTE_CLIENTE` (antes de cada clase) | Unidad de la clase siguiente publicada y revisada | Épica 03 |

La fecha de cada clase la confirma Capacita Tu Futuro. Si la clase 1 llega antes de terminar todas las unidades, se publica con las unidades listas y las demás se suman antes de su clase.
