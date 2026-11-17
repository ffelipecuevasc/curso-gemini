// Modo claro/oscuro (DESIGN.md, secciones 7 y 8).
// La clave debe coincidir con la del script en línea de Base.astro.
export type Modo = "claro" | "oscuro";

const CLAVE = "modo";

export function modoActual(): Modo {
  return document.documentElement.dataset.modo === "oscuro"
    ? "oscuro"
    : "claro";
}

export function hayEleccionGuardada(): boolean {
  try {
    return localStorage.getItem(CLAVE) !== null;
  } catch {
    return false;
  }
}

/**
 * Aplica un modo a la página y sincroniza los botones de modo.
 * Con `guardar`, la elección del participante queda en localStorage.
 * BotonModo.astro lo envuelve en una transición de vista (01-05).
 */
export function switchTheme(modo: Modo, guardar = true): void {
  document.documentElement.dataset.modo = modo;
  for (const boton of document.querySelectorAll("[data-boton-modo]")) {
    boton.setAttribute("aria-pressed", String(modo === "oscuro"));
  }
  if (!guardar) return;
  try {
    localStorage.setItem(CLAVE, modo);
  } catch {
    // Sin almacenamiento (modo privado, bloqueo): el modo dura esta visita.
  }
}
