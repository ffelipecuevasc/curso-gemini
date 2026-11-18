// Colecciones de contenido del curso (RDA-003). Todo objeto es estricto:
// un campo faltante, desconocido o con formato inválido hace fallar
// `pnpm build` con un mensaje que nombra la ruta del campo.
import { defineCollection, reference, type SchemaContext } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const textoNoVacio = z.string().trim().min(1);
// El cargador `file` deja el `id` de cada entrada dentro de sus datos.
const idEntrada = z.string().regex(/^[a-z0-9-]+$/, {
  error: "El id va en minúsculas, números y guiones",
});
const enteroPositivo = z.number().int().positive();
const porcentaje = z.number().int().min(0).max(100);

const urlSegura = z.url({
  protocol: /^https$/,
  error: "La URL debe empezar con https://",
});

const recurso = z.strictObject({
  id: idEntrada,
  tipo: z.enum(["documento", "video"]),
  titulo: textoNoVacio,
  sitio: textoNoVacio,
  url: urlSegura,
});

// Rutas de descarga: ASCII, minúsculas y guiones (AGENTS.md, regla de
// contenido 5). Única excepción (P-007): SKILL.md en mayúsculas, solo en
// /descargas/optimizador-prompts/ y /descargas/plantillas-alumnos/<carpeta>/.
const rutaDescarga =
  /^\/descargas\/(?:[a-z0-9-]+(?:\/[a-z0-9-]+)*\.[a-z0-9]+|(?:optimizador-prompts|plantillas-alumnos\/[a-z0-9-]+)\/SKILL\.md)$/;

const descarga = z.strictObject({
  id: idEntrada,
  archivo: z.string().regex(rutaDescarga, {
    error:
      "El archivo debe vivir en /descargas/ con nombre en ASCII, minúsculas y guiones (solo SKILL.md de optimizador-prompts/ y plantillas-alumnos/<carpeta>/ va en mayúsculas)",
  }),
  // Formato y peso no se escriben: se miden del archivo al compilar (RDA-010,
  // src/lib/descargas.ts).
  titulo: textoNoVacio,
});

const profundiza = z.strictObject({
  texto: textoNoVacio.optional(),
  recursos: z.array(reference("recursos")).default([]),
});

const prompt = z.strictObject({
  id: idEntrada,
  titulo: textoNoVacio,
  // Texto literal: se copia tal cual, sin recortar espacios ni saltos.
  texto: z.string().min(1),
});

// Un archivo `.md` por bloque (RDA-009): los datos van en el frontmatter y
// el texto «Para la clase» en el cuerpo. U1 declara un «tipo» por bloque;
// U2 a U4 separan los minutos en microcharla y práctica. La fila de cierre
// de cada unidad («Vitrina y cierre», «Cierre del bootcamp») lleva
// `cierre: true` y no tiene número, porque el documento no se lo da.
const bloque = z
  .strictObject({
    unidad: reference("unidades"),
    numero: z.number().int().min(0).optional(),
    cierre: z.literal(true).optional(),
    titulo: textoNoVacio,
    minutos: enteroPositivo,
    tipo: textoNoVacio.optional(),
    microcharlaMin: z.number().int().min(0).optional(),
    practicaMin: z.number().int().min(0).optional(),
    prompts: z.array(prompt).default([]),
    profundiza: profundiza.optional(),
  })
  .superRefine((b, ctx) => {
    if ((b.numero === undefined) === (b.cierre === undefined)) {
      ctx.addIssue({
        code: "custom",
        path: ["numero"],
        message: "Cada bloque lleva «numero» o «cierre: true», no ambos",
      });
    }
    const tieneReparto =
      b.microcharlaMin !== undefined || b.practicaMin !== undefined;
    if (b.tipo === undefined && !tieneReparto) {
      ctx.addIssue({
        code: "custom",
        path: ["tipo"],
        message:
          "Cada bloque necesita «tipo» o «microcharlaMin» y «practicaMin»",
      });
    }
    if (tieneReparto) {
      const suma = (b.microcharlaMin ?? 0) + (b.practicaMin ?? 0);
      if (suma !== b.minutos) {
        ctx.addIssue({
          code: "custom",
          path: ["minutos"],
          message: `«microcharlaMin» + «practicaMin» (${suma}) debe ser igual a «minutos» (${b.minutos})`,
        });
      }
    }
  });

// Los bloques viven en su propia colección; la unidad solo trae su ficha.
// La suma de minutos (bloques + holgura = duracionMin) y los números de
// bloque se comprueban en `src/lib/unidades.ts`, que ve ambas colecciones.
const unidad = z.strictObject({
  numero: z.number().int().min(1).max(4),
  titulo: textoNoVacio,
  clase: z.number().int().min(1).max(4),
  duracionMin: enteroPositivo,
  nivel: textoNoVacio,
  avance: z
    .strictObject({ desde: porcentaje, hasta: porcentaje })
    .refine((a) => a.desde < a.hasta, {
      error: "«avance.desde» debe ser menor que «avance.hasta»",
    }),
  objetivo: textoNoVacio,
  miniProyecto: z.strictObject({
    titulo: textoNoVacio,
    descripcion: textoNoVacio,
  }),
  entregable: textoNoVacio,
  // Minutos de reserva del instructor; no son un bloque (RDA-009).
  holguraMin: enteroPositivo.optional(),
  terminadoCuando: z.array(textoNoVacio).min(1),
  recursos: z.array(reference("recursos")).default([]),
  descargas: z.array(reference("descargas")).default([]),
  // Indicación para los participantes antes de las tarjetas de descarga.
  // Lo que va entre comillas invertidas se muestra como código.
  notaDescargas: textoNoVacio.optional(),
});

const curso = z.strictObject({
  id: idEntrada,
  titulo: textoNoVacio,
  lema: textoNoVacio,
  clases: enteroPositivo,
  duracionTotalMin: enteroPositivo,
});

// Presentación del instructor (Unidad 1, bloque 1, del documento del curso).
// Las fechas se guardan como texto literal del documento. La insignia es
// opcional: si falta, la sección se arma sin imagen.
const instructor = ({ image }: SchemaContext) =>
  z.strictObject({
    id: idEntrada,
    nombre: textoNoVacio,
    formacion: textoNoVacio,
    certificacion: z.strictObject({
      nombre: textoNoVacio,
      nombreIngles: textoNoVacio,
      emisor: textoNoVacio,
      descripcion: textoNoVacio,
      emision: textoNoVacio,
      vigencia: textoNoVacio,
      enlace: z.strictObject({ titulo: textoNoVacio, url: urlSegura }),
      insignia: image().optional(),
    }),
    trayectoria: z.array(textoNoVacio).min(1),
    comunidad: textoNoVacio,
  });

export const collections = {
  unidades: defineCollection({
    loader: glob({ pattern: "*.yaml", base: "./src/content/unidades" }),
    schema: unidad,
  }),
  bloques: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/bloques" }),
    schema: bloque,
  }),
  recursos: defineCollection({
    loader: file("./src/content/recursos.yaml"),
    schema: recurso,
  }),
  descargas: defineCollection({
    loader: file("./src/content/descargas.yaml"),
    schema: descarga,
  }),
  curso: defineCollection({
    loader: file("./src/content/curso.yaml"),
    schema: curso,
  }),
  instructor: defineCollection({
    loader: file("./src/content/instructor.yaml"),
    schema: instructor,
  }),
};
