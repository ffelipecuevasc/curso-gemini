// Marcadores de prompt dentro del cuerpo de un bloque (iteración 03-02).
// Un `<div data-prompt="id"></div>` en el Markdown indica dónde va un prompt
// del mismo bloque. Es la única excepción a la copia literal (RDA-009) y hoy
// solo la usa U2 · 3. Un marcador sin prompt, o repetido, hace fallar el build.

export type Tramo =
  { tipo: "html"; html: string } | { tipo: "prompt"; id: string };

const MARCADOR = /<div data-prompt="([a-z0-9-]+)"><\/div>/g;

export function partirEnMarcadores(
  html: string,
  idsPrompts: readonly string[],
  bloqueId: string,
): Tramo[] {
  const tramos: Tramo[] = [];
  const vistos = new Set<string>();
  let desde = 0;
  for (const marca of html.matchAll(MARCADOR)) {
    const id = marca[1]!;
    if (!idsPrompts.includes(id)) {
      throw new Error(
        `El bloque «${bloqueId}» tiene el marcador data-prompt="${id}", pero no tiene un prompt con ese id`,
      );
    }
    if (vistos.has(id)) {
      throw new Error(
        `El bloque «${bloqueId}» repite el marcador data-prompt="${id}"`,
      );
    }
    vistos.add(id);
    tramos.push({ tipo: "html", html: html.slice(desde, marca.index) });
    tramos.push({ tipo: "prompt", id });
    desde = marca.index + marca[0].length;
  }
  tramos.push({ tipo: "html", html: html.slice(desde) });
  return tramos;
}
