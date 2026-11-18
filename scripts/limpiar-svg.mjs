// Borra de dist/_astro/ los SVG que ningún archivo de texto de dist/ referencia.
// Astro dibuja en línea los SVG importados como componente y Vite emite además
// el archivo, que ninguna página pide. Corre después de `astro build`.
import { readdirSync, readFileSync, rmSync, statSync } from "node:fs";
import { extname, join } from "node:path";

const DIST = "dist";
const ASTRO = join(DIST, "_astro");
const TEXTO = new Set([
  ".html",
  ".css",
  ".js",
  ".json",
  ".xml",
  ".txt",
  ".webmanifest",
]);

function archivos(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? archivos(join(dir, e.name)) : [join(dir, e.name)],
  );
}

const textos = archivos(DIST)
  .filter((f) => TEXTO.has(extname(f)))
  .map((f) => readFileSync(f, "utf8"))
  .join("\n");

let borrados = 0;
let bytes = 0;
for (const nombre of readdirSync(ASTRO)) {
  if (extname(nombre) !== ".svg" || textos.includes(nombre)) continue;
  const ruta = join(ASTRO, nombre);
  bytes += statSync(ruta).size;
  rmSync(ruta);
  borrados++;
}
console.log(
  `Limpieza de SVG: ${borrados} sin referencia borrados (${bytes} B)`,
);
