// Identificadores y etiquetas de los modales de una unidad (RDA-011). Los usan
// quien dibuja el botón (tarjetas y cabecera) y quien dibuja el <dialog>
// (SeccionUnidad y ModalesBloque): un solo origen evita que se desalineen.
// Todo `id` debe ser único en la página (DESIGN.md, sección 5, «Modal»).
import type { Bloque } from "./unidades";

/** «u2-bloque-3» o «u2-cierre»: el id del bloque con la barra convertida en guion. */
const baseBloque = (bloque: Bloque) => bloque.id.replace("/", "-");

export const idModalDetalle = (bloque: Bloque) =>
  `modal-${baseBloque(bloque)}-detalle`;

export const idModalPrompts = (bloque: Bloque) =>
  `modal-${baseBloque(bloque)}-prompts`;

export const idPrompt = (bloque: Bloque, idPromptBloque: string) =>
  `prompt-${baseBloque(bloque)}-${idPromptBloque}`;

export type TipoModalUnidad = "sobre" | "recursos" | "descargas" | "terminado";

export const idModalUnidad = (numero: number, tipo: TipoModalUnidad) =>
  `modal-u${numero}-${tipo}`;

/** «Ver prompt» si el bloque tiene uno; «Prompts (n)» si tiene más. */
export const etiquetaPrompts = (cantidad: number) =>
  cantidad === 1 ? "Ver prompt" : `Prompts (${cantidad})`;
