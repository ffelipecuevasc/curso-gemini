// Colecciones de contenido del curso (RDA-003). Todo objeto es estricto:
// un campo faltante, desconocido o con formato inválido hace fallar
// `pnpm build` con un mensaje que nombra la ruta del campo.
import { defineCollection, reference } from "astro:content";
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

const descarga = z.strictObject({
  id: idEntrada,
  archivo: z
    .string()
    .regex(/^\/descargas\/[a-z0-9-]+(\/[a-z0-9-]+)*\.[a-z0-9]+$/, {
      error:
        "El archivo debe vivir en /descargas/ con nombre en ASCII, minúsculas y guiones",
    }),
  formato: textoNoVacio,
  pesoKB: z.number().positive(),
});

const profundiza = z.strictObject({
  texto: textoNoVacio.optional(),
  recursos: z.array(reference("recursos")).default([]),
});

// U1 declara un «tipo» por bloque; U2 a U4 separan los minutos en
// microcharla y práctica. Cada bloque debe traer una de las dos formas.
const bloque = z
  .strictObject({
    numero: z.number().int().min(0),
    titulo: textoNoVacio,
    minutos: enteroPositivo,
    tipo: textoNoVacio.optional(),
    microcharlaMin: z.number().int().min(0).optional(),
    practicaMin: z.number().int().min(0).optional(),
    profundiza: profundiza.optional(),
  })
  .superRefine((b, ctx) => {
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

const prompt = z.strictObject({
  id: idEntrada,
  titulo: textoNoVacio,
  bloque: z.number().int().min(0),
  // Texto literal: se copia tal cual, sin recortar espacios ni saltos.
  texto: z.string().min(1),
});

const unidad = z
  .strictObject({
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
    bloques: z.array(bloque).min(1),
    prompts: z.array(prompt).default([]),
    terminadoCuando: z.array(textoNoVacio).min(1),
    recursos: z.array(reference("recursos")).default([]),
    descargas: z.array(reference("descargas")).default([]),
  })
  .superRefine((u, ctx) => {
    const numeros = new Set(u.bloques.map((b) => b.numero));
    u.prompts.forEach((p, i) => {
      if (!numeros.has(p.bloque)) {
        ctx.addIssue({
          code: "custom",
          path: ["prompts", i, "bloque"],
          message: `El prompt «${p.id}» apunta al bloque ${p.bloque}, que no existe en la unidad`,
        });
      }
    });
  });

const curso = z.strictObject({
  id: idEntrada,
  titulo: textoNoVacio,
  lema: textoNoVacio,
  clases: enteroPositivo,
  duracionTotalMin: enteroPositivo,
});

export const collections = {
  unidades: defineCollection({
    loader: glob({ pattern: "*.yaml", base: "./src/content/unidades" }),
    schema: unidad,
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
};
