// Une cada unidad con sus bloques (RDA-009) y comprueba lo que el esquema
// de una sola entrada no puede ver. Cualquier error se lanza durante el
// prerenderizado, así que hace fallar `pnpm build` con un mensaje claro.
// Hallazgo de la 01-04: `reference()` no falla si la entrada no existe;
// por eso cada unidad se resuelve con `getEntry`.
import { getCollection, getEntry, type CollectionEntry } from "astro:content";

export type Bloque = CollectionEntry<"bloques">;
export type UnidadConBloques = CollectionEntry<"unidades"> & {
  bloques: Bloque[];
};

// Los bloques numerados van en orden y el de cierre siempre al final.
function compararBloques(a: Bloque, b: Bloque): number {
  return (a.data.numero ?? Infinity) - (b.data.numero ?? Infinity);
}

export async function obtenerUnidadesConBloques(): Promise<UnidadConBloques[]> {
  const unidades = await getCollection("unidades");
  const bloques = await getCollection("bloques");
  const porUnidad = new Map<string, Bloque[]>(unidades.map((u) => [u.id, []]));

  for (const bloque of bloques) {
    const unidad = await getEntry(bloque.data.unidad);
    if (unidad === undefined) {
      throw new Error(
        `El bloque «${bloque.id}» apunta a la unidad «${bloque.data.unidad.id}», que no existe en src/content/unidades/`,
      );
    }
    porUnidad.get(unidad.id)!.push(bloque);
  }

  return unidades
    .map((unidad) => {
      const propios = porUnidad.get(unidad.id)!.sort(compararBloques);
      comprobarBloques(unidad, propios);
      return { ...unidad, bloques: propios };
    })
    .sort((a, b) => a.data.numero - b.data.numero);
}

function comprobarBloques(
  unidad: CollectionEntry<"unidades">,
  bloques: Bloque[],
): void {
  if (bloques.length === 0) {
    throw new Error(
      `La unidad «${unidad.id}» no tiene bloques en src/content/bloques/`,
    );
  }

  const vistos = new Set<number>();
  let cierres = 0;
  for (const bloque of bloques) {
    const { numero } = bloque.data;
    if (numero === undefined) {
      cierres += 1;
    } else if (vistos.has(numero)) {
      throw new Error(
        `La unidad «${unidad.id}» repite el número de bloque ${numero} (en «${bloque.id}»)`,
      );
    } else {
      vistos.add(numero);
    }
  }
  if (cierres > 1) {
    throw new Error(
      `La unidad «${unidad.id}» tiene ${cierres} bloques de cierre; se permite uno`,
    );
  }

  const suma =
    bloques.reduce((total, b) => total + b.data.minutos, 0) +
    (unidad.data.holguraMin ?? 0);
  if (suma !== unidad.data.duracionMin) {
    throw new Error(
      `La unidad «${unidad.id}» suma ${suma} min entre bloques y holgura, pero «duracionMin» es ${unidad.data.duracionMin}`,
    );
  }
}
