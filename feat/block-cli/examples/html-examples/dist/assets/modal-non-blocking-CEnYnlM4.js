import "./global-C8IWpzMv.js";
import { d as dismissModal, a as closeModal, s as showModal } from "./modal-DaGSr1j4-BA-0pEIr.js";
import "./init-CVkHVy98.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
document.getElementById("open").addEventListener("click", async () => {
  const modal = document.createElement("ix-modal");
  modal.isNonBlocking = true;
  modal.innerHTML = `
      <ix-modal-header>Message headline</ix-modal-header>
      <ix-modal-content>Message text lorem ipsum</ix-modal-content>
      <ix-modal-footer>
        <ix-button variant="subtle-primary" data-cancel>Cancel</ix-button>
        <ix-button data-okay autofocus>OK</ix-button>
      </ix-modal-footer>
    `;
  const header = modal.querySelector("ix-modal-header");
  header.addEventListener(
    "closeClick",
    () => dismissModal(header, "dismiss payload")
  );
  const cancelButton = modal.querySelector("[data-cancel]");
  const okayButton = modal.querySelector("[data-okay]");
  cancelButton.addEventListener(
    "click",
    () => dismissModal(cancelButton, "dismiss payload")
  );
  okayButton.addEventListener(
    "click",
    () => closeModal(okayButton, "close payload!")
  );
  await showModal({ content: modal });
});
