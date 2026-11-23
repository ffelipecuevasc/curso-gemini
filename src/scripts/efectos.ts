// Brillo que sigue al cursor en las tarjetas (DESIGN.md sección 7; mejora
// decorativa de AGENTS.md, regla técnica 2). Un oyente delegado guarda la
// posición del puntero y, una vez por cuadro, la escribe como --x e --y en la
// tarjeta; global.css dibuja el degradado. Sale temprano con puntero grueso,
// sin hover o con reducir movimiento. Se puede quitar sin perder contenido.
if (
  matchMedia(
    "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
  ).matches
) {
  let tarjeta: HTMLElement | null = null;
  let x = 0;
  let y = 0;
  let pendiente = false;

  document.addEventListener(
    "pointermove",
    (e) => {
      tarjeta = (e.target as Element).closest<HTMLElement>(".tarjeta");
      x = e.clientX;
      y = e.clientY;
      if (!tarjeta || pendiente) return;
      pendiente = true;
      requestAnimationFrame(() => {
        pendiente = false;
        if (!tarjeta) return;
        const caja = tarjeta.getBoundingClientRect();
        tarjeta.style.setProperty("--x", `${x - caja.left}px`);
        tarjeta.style.setProperty("--y", `${y - caja.top}px`);
      });
    },
    { passive: true },
  );
}
