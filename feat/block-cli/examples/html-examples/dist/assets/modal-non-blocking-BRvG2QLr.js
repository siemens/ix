import "./global-Dfa5QLOG.js";
import "./index-D4fdm_sf.js";
import { d as dismissModal, c as closeModal, s as showModal } from "./modal-1XS3_9yD-CROtOmyT.js";
import "./init-BUCeZmFF.js";
import "./logical-filter-operator-C9HBQRMb-BOZGh-G7.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
import "./message-BItjjwRI-B-kajtah.js";
import "./index-DLhpBBEI-C3tPjcQ4.js";
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
