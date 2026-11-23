// Clases por unidad (DESIGN.md, secciones 2.2 y 5). Van escritas completas
// para que Tailwind las detecte. La U3 lleva el borde de 1 px del token
// `borde-u3` (transparente en claro y #00B0E8 en oscuro). Los bloques de color
// publican `--bloque` y `--sobre-bloque` para que sus botones (global.css,
// `.boton-sobre-color`) inviertan los colores de su unidad al pasar el puntero.

// Las tarjetas (05-07) publican además `--sombra` y `--halo` (tokens de
// global.css) para su profundidad teñida; las de bloque, `--tinte`, el color de
// su brillo (en oscuro, la U3 usa su borde claro, porque #003B51 no se ve).

/** Bloque de color de la unidad (cabecera y tarjeta de la ruta). */
export const bloqueUnidad: Record<number, string> = {
  1: "bg-u1 text-sobre-u1 [--bloque:var(--color-u1)] [--sobre-bloque:var(--color-sobre-u1)] [--sombra:var(--sombra-u1)] [--halo:var(--halo-u1)]",
  2: "bg-u2 text-sobre-u2 [--bloque:var(--color-u2)] [--sobre-bloque:var(--color-sobre-u2)] [--sombra:var(--sombra-u2)] [--halo:var(--halo-u2)]",
  3: "bg-u3 text-sobre-u3 border border-borde-u3 [--bloque:var(--color-u3)] [--sobre-bloque:var(--color-sobre-u3)] [--sombra:var(--sombra-u3)] [--halo:var(--halo-u3)]",
  4: "bg-u4 text-sobre-u4 [--bloque:var(--color-u4)] [--sobre-bloque:var(--color-sobre-u4)] [--sombra:var(--sombra-u4)] [--halo:var(--halo-u4)]",
};

/** Franja de 10 px de la cabecera de un modal. */
export const franjaModal: Record<number, string> = {
  1: "border-u1",
  2: "border-u2",
  3: "border-u3",
  4: "border-u4",
};

/** Color de una tarjeta de bloque: `--tinte` pinta su marca de 40 × 6 px y su
 * brillo (06-04). En modo oscuro, la U3 usa su borde claro. */
export const franjaTarjeta: Record<number, string> = {
  1: "[--tinte:var(--color-u1)] [--sombra:var(--sombra-u1)] [--halo:var(--halo-u1)]",
  2: "[--tinte:var(--color-u2)] [--sombra:var(--sombra-u2)] [--halo:var(--halo-u2)]",
  3: "[--tinte:var(--color-u3)] oscuro:[--tinte:var(--color-borde-u3)] [--sombra:var(--sombra-u3)] [--halo:var(--halo-u3)]",
  4: "[--tinte:var(--color-u4)] [--sombra:var(--sombra-u4)] [--halo:var(--halo-u4)]",
};
