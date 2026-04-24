import "./global-B1t25MFd.js";
import "./index-2vJwyO0t.js";
import { d as dismissModal, c as closeModal, s as showModal } from "./modal-1XS3_9yD-CROtOmyT.js";
import "./init-D7MT-x0x.js";
import "./logical-filter-operator-C9HBQRMb-BOZGh-G7.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
import "./message-KsI1kigJ-CqWh--pY.js";
import "./index-CwfZ4aN6-mXhHymhu.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./theme-switcher-CRVG13AN-OnrBiSI3.js";
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
