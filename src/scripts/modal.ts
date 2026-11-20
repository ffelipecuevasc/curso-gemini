// Modales sobre <dialog> nativo (RDA-011, DESIGN.md sección 5, «Modal»).
// Un solo oyente delegado abre el modal del botón [data-abrir-modal]. El
// navegador aporta el foco atrapado, el fondo inerte y el cierre con Esc; aquí
// solo se agrega el cierre al hacer clic en el fondo (donde no exista
// `closedby`) y la devolución del foco al botón que abrió.
// Sin `showModal`, la página no usa modales: se marca <html data-sin-dialogo>
// y el CSS muestra el contenido de cada <dialog> en su lugar, como sin JS.
if (
  typeof HTMLDialogElement !== "function" ||
  !("showModal" in HTMLDialogElement.prototype)
) {
  document.documentElement.dataset.sinDialogo = "";
} else {
  const cierraSolo = "closedBy" in HTMLDialogElement.prototype;
  let origen: HTMLElement | null = null;

  document.addEventListener("click", (e) => {
    const destino = e.target as Element;
    const boton = destino.closest<HTMLElement>("[data-abrir-modal]");
    const modal = boton
      ? document.getElementById(boton.dataset.abrirModal ?? "")
      : null;
    if (boton && modal instanceof HTMLDialogElement) {
      origen = boton;
      modal.showModal();
    } else if (!cierraSolo && destino instanceof HTMLDialogElement) {
      // El <dialog> no tiene relleno: un clic sobre él mismo es un clic en el fondo.
      destino.close();
    }
  });

  // `close` no burbujea: se escucha en captura.
  document.addEventListener("close", () => origen?.focus(), true);
}
