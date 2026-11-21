// Modales sobre <dialog> nativo (RDA-011, DESIGN.md sección 5, «Modal»).
// Un solo oyente delegado abre el modal del botón [data-abrir-modal]. El
// navegador aporta el foco atrapado, el fondo inerte y el cierre con Esc; aquí
// solo se agrega el cierre al hacer clic en el fondo (donde no exista
// `closedby`), la devolución del foco al botón que abrió y la transición de
// vista entre el origen y el modal (05-07, DESIGN.md sección 7, P-017).
// Sin `showModal`, la página no usa modales: se marca <html data-sin-dialogo>
// y el CSS muestra el contenido de cada <dialog> en su lugar, como sin JS.
if (
  typeof HTMLDialogElement !== "function" ||
  !("showModal" in HTMLDialogElement.prototype)
) {
  document.documentElement.dataset.sinDialogo = "";
} else {
  const raiz = document.documentElement;
  const cierraSolo = "closedBy" in HTMLDialogElement.prototype;
  // Botón que abrió (recibe el foco al cerrar) y origen de la transición: la
  // tarjeta que lo contiene o, si no hay (cabecera, instructor), el botón.
  let boton: HTMLElement | null = null;
  let origen: HTMLElement | null = null;

  // Transforma `de` en `a` mientras ocurre `cambio`. No se inicia si no hay
  // API, si se reduce el movimiento o si hay otra transición en curso (la del
  // cambio de modo): entonces el cambio ocurre al instante.
  const transicion = (de: HTMLElement, a: HTMLElement, cambio: () => void) => {
    if (
      !document.startViewTransition ||
      matchMedia("(prefers-reduced-motion: reduce)").matches ||
      raiz.dataset.transicion ||
      (document as { activeViewTransition?: unknown }).activeViewTransition
    ) {
      cambio();
      return;
    }
    raiz.dataset.transicion = "modal";
    de.style.viewTransitionName = "modal";
    document
      .startViewTransition(() => {
        de.style.viewTransitionName = "";
        a.style.viewTransitionName = "modal";
        cambio();
      })
      .finished.finally(() => {
        a.style.viewTransitionName = "";
        delete raiz.dataset.transicion;
      });
  };

  const cerrar = (modal: HTMLDialogElement) =>
    origen?.isConnected
      ? transicion(modal, origen, () => modal.close())
      : modal.close();

  document.addEventListener("click", (e) => {
    const destino = e.target as Element;
    const abre = destino.closest<HTMLElement>("[data-abrir-modal]");
    const modal = abre
      ? document.getElementById(abre.dataset.abrirModal ?? "")
      : null;
    if (abre && modal instanceof HTMLDialogElement) {
      boton = abre;
      origen = abre.closest<HTMLElement>(".tarjeta") ?? abre;
      transicion(origen, modal, () => modal.showModal());
    } else if (!cierraSolo && destino instanceof HTMLDialogElement) {
      // El <dialog> no tiene relleno: un clic sobre él mismo es un clic en el fondo.
      cerrar(destino);
    }
  });

  // «Cerrar» (formulario method="dialog") y Esc o clic fuera (`cancel`) se
  // interceptan para cerrar con la transición. Si `cancel` no se puede
  // cancelar, el navegador cierra sin animación.
  document.addEventListener("submit", (e) => {
    const modal = (e.target as Element).closest("dialog");
    if (modal && (e.target as HTMLFormElement).method === "dialog") {
      e.preventDefault();
      cerrar(modal);
    }
  });
  document.addEventListener(
    "cancel",
    (e) => {
      if (e.target instanceof HTMLDialogElement && e.cancelable) {
        e.preventDefault();
        cerrar(e.target);
      }
    },
    true,
  );

  // `close` no burbujea: se escucha en captura.
  document.addEventListener("close", () => boton?.focus(), true);
}
