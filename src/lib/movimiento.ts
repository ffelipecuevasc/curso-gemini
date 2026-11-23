// Entrada escalonada de la portada (DESIGN.md, sección 7.1; iteración 06-08).
// La utilidad `animate-entrada` vive en el @theme de global.css; el desfase
// sale de `--orden` (lo pone cada elemento) por `--escalonado`. Con reducir
// movimiento, `motion-safe:` no genera la animación y todo se ve quieto.

/** Clases de la entrada escalonada; el elemento declara `--orden`. */
export const claseEntrada =
  "motion-safe:animate-entrada motion-safe:[animation-delay:calc(var(--orden)*var(--escalonado))]";

/** Estilo en línea con la posición del elemento en la secuencia. */
export const ordenEntrada = (orden: number) => `--orden: ${orden}`;
