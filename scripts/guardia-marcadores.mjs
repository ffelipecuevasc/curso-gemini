// Guardia de marcadores (AGENTS.md, regla de contenido 3): recorre dist/ después
// de `astro build` y termina con código 1 si algún archivo de texto contiene
// `PENDIENTE_` o `VERIFICAR`. Distingue mayúsculas: «verificar» en un texto del
// curso no es un marcador. Solo usa módulos de Node.
import { readdirSync, readFileSync } from "node:fs";
import { extname, join, relative } from "node:path";

const DIST = "dist";
const MARCADORES = ["PENDIENTE_", "VERIFICAR"];
// Todo lo que no es binario: incluye las descargas .md y .csv.
const BINARIOS = new Set([
  ".woff2",
  ".woff",
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".avif",
  ".gif",
  ".ico",
  ".zip",
  ".pdf",
]);

function archivos(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? archivos(join(dir, e.name)) : [join(dir, e.name)],
  );
}

const hallazgos = [];
for (const archivo of archivos(DIST)) {
  if (BINARIOS.has(extname(archivo).toLowerCase())) continue;
  const lineas = readFileSync(archivo, "utf8").split("\n");
  lineas.forEach((linea, i) => {
    for (const marcador of MARCADORES) {
      if (linea.includes(marcador)) {
        hallazgos.push(`${relative(".", archivo)}:${i + 1} · ${marcador}`);
      }
    }
  });
}

if (hallazgos.length > 0) {
  console.error(
    `Guardia de marcadores: ${hallazgos.length} marcador(es) en dist/`,
  );
  for (const h of hallazgos) console.error(`  ${h}`);
  process.exit(1);
}
console.log("Guardia de marcadores: 0 marcadores en dist/");
