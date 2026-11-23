// Formato y peso de cada descarga, medidos del archivo real al compilar
// (RDA-010). Se ejecuta solo en el build: lee public/, que Astro copia tal
// cual a dist/, así que el peso mostrado es el del archivo publicado.
import { statSync } from "node:fs";
import { extname, join } from "node:path";

// Extensiones aceptadas y su nombre visible. Una extensión que no está aquí
// hace fallar el build: se agrega a propósito, no por omisión.
const FORMATOS: Readonly<Record<string, string>> = {
  ".csv": "CSV",
  ".zip": "ZIP",
  ".pdf": "PDF",
  ".md": "Markdown",
  ".txt": "TXT",
  ".xlsx": "XLSX",
  ".docx": "DOCX",
  ".png": "PNG",
};

const numero = (valor: number) =>
  valor.toLocaleString("es-CL", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

/** Peso legible con coma decimal: 1 KB = 1024 B (por ejemplo «25,4 KB»). */
export function formatearPeso(bytes: number): string {
  const kb = bytes / 1024;
  return kb < 1024 ? `${numero(kb)} KB` : `${numero(kb / 1024)} MB`;
}

export interface DatosDescarga {
  formato: string;
  peso: string;
  bytes: number;
}

/** `archivo` es la ruta pública validada por el esquema (/descargas/…). */
export function datosDescarga(archivo: string): DatosDescarga {
  const extension = extname(archivo).toLowerCase();
  const formato = FORMATOS[extension];
  if (formato === undefined) {
    throw new Error(
      `La descarga «${archivo}» tiene la extensión «${extension}», que no está en el mapa de formatos de src/lib/descargas.ts`,
    );
  }
  const ruta = join(process.cwd(), "public", archivo);
  let bytes: number;
  try {
    bytes = statSync(ruta).size;
  } catch {
    throw new Error(`La descarga «${archivo}» no existe en public${archivo}`);
  }
  return { formato, peso: formatearPeso(bytes), bytes };
}
