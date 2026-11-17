# Mini-LMS · Gemini & Google Suite en el Entorno Laboral

Sitio de una sola página que acompaña al mini-bootcamp «Gemini & Google Suite en el Entorno Laboral»: la ruta del curso, el detalle de cada unidad, los prompts listos para copiar, las descargas y los enlaces a la documentación y los videos oficiales de Google.

🔹 **Sitio:** URL gratuita de Cloudflare Workers (`*.workers.dev`)
🔹 **Repositorio:** [github.com/ffelipecuevasc/curso-gemini](https://github.com/ffelipecuevasc/curso-gemini)
🔹 **Desarrollo:** [Felipe Cuevas](https://felipecuevas.dev/)

---

## 1. De qué trata el proyecto

El curso tiene cuatro clases de dos horas y unos 50 participantes que trabajan cada uno por su cuenta. Con tanta gente, nadie puede atrasarse por tener que escribir un prompt desde cero ni por buscar un archivo. Este sitio reúne en un solo lugar todo lo que cada participante necesita durante la clase y después de ella, en un formato que carga rápido en cualquier computador y se puede usar solo con el teclado o con un lector de pantalla.

La página tiene estas secciones:

- **Portada:** el curso en una frase y el acceso a la ruta.
- **Ruta del curso:** las cuatro unidades como un recorrido de 0 % a 100 %, con el mini-proyecto de cada una.
- **Una sección por unidad:** Fundamentos de IA generativa e ingeniería de prompts; Gemini; Gemini Notebook; Gemini Skills y proyecto integrador. Cada una con sus bloques, tiempos, prompts copiables, descargas, la teoría ampliada («Profundiza en tu tiempo») y la lista de terminado.
- **Instructor:** la trayectoria de Felipe Cuevas.

## 2. Tecnologías y para qué sirve cada una

🔸 **Astro:** genera la página como HTML estático al compilar, así que el navegador recibe contenido listo y casi nada de JavaScript.
🔸 **Colecciones de contenido de Astro:** guardan el contenido de cada unidad separado del diseño y validan su estructura, para que agregar o corregir un prompt no obligue a tocar los componentes.
🔸 **TypeScript:** revisa los tipos de los componentes y del contenido antes de publicar.
🔸 **Tailwind CSS v4:** aplica los colores, la tipografía y las formas definidos en `DESIGN.md` desde un solo lugar.
🔸 **PNPM:** instala las dependencias de forma estricta y reproducible.
🔸 **Cloudflare Workers:** sirve la página desde la red de Cloudflare con una URL gratuita.
🔸 **Cloudflare Web Analytics:** mide las visitas sin cookies ni datos personales.

## 3. Cómo está construido

Todo el contenido del curso vive como datos estructurados dentro del repositorio. Al compilar, Astro lee esos datos, los valida y arma una sola página con sus secciones. El resultado es un conjunto de archivos estáticos (HTML, CSS, fuentes, íconos y las descargas) que Cloudflare Workers entrega tal cual, sin servidor de aplicación ni base de datos.

La página funciona completa sin JavaScript. Solo tres cosas usan un script pequeño: cambiar entre modo claro y oscuro, copiar un prompt con un botón y abrir el menú en el celular.

## 4. Organización del repositorio

```text
curso-gemini/
├── src/
│   ├── content/        Contenido del curso: unidades, bloques, prompts y recursos
│   ├── components/     Componentes de la página (portada, ruta, unidad, prompt…)
│   ├── layouts/        Estructura HTML común
│   ├── pages/          La página única del sitio
│   └── styles/         Tokens de diseño y estilos globales
├── public/
│   ├── descargas/      Archivos que descargan los participantes
│   └── fuentes/        Tipografías autoalojadas
├── _planificacion/     Producto, backlog, decisiones, épicas, iteraciones y bitácoras
├── .claude/            Permisos y reglas para los agentes de IA en Claude Code
├── AGENTS.md           Reglas de trabajo para agentes de IA y comandos
├── DESIGN.md           Sistema de diseño
└── README.md           Este archivo
```

## 5. Qué necesitas para trabajar con el proyecto

Node.js en la versión indicada en `package.json` y PNPM. Para publicar, una cuenta de Cloudflare con la herramienta Wrangler. Los comandos de desarrollo y compilación están en `AGENTS.md`.

## 6. Cómo se publica

El sitio se compila en archivos estáticos y se publica en Cloudflare Workers como recursos estáticos, con una dirección gratuita `workers.dev`. Cloudflare Web Analytics se activa con su script de medición, que no usa cookies. Las publicaciones las hace solo el desarrollador.

## 7. Metodología de trabajo

El desarrollo se organiza en épicas e iteraciones documentadas en `_planificacion/`, a partir de un backlog priorizado. Cada iteración trae su objetivo y sus criterios de aceptación verificables, y deja una bitácora con lo que se hizo, cómo se verificó y qué se aprendió. Las decisiones técnicas se registran como RDA (Registro de Decisión Arquitectónica). El detalle está en `_planificacion/README.md`.

Los agentes de IA que colaboran en el proyecto siguen las reglas de `AGENTS.md`. Los commits, pushes y merges los hace exclusivamente el desarrollador.

## 8. Autoría y licencia

Desarrollado por **[Felipe Cuevas](https://felipecuevas.dev/)** para **Capacita Tu Futuro SpA**, en un curso dirigido a trabajadores de GTD Telsur.

Todos los derechos reservados. Gemini, Google y sus logotipos son marcas de Google LLC; se usan solo para identificar las herramientas que enseña el curso. El sitio no representa un respaldo de Google.
