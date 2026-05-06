import "./global-Dfa5QLOG.js";
import "./index-D4fdm_sf.js";
import { s as showModal, d as dismissModal, c as closeModal } from "./modal-1XS3_9yD-CROtOmyT.js";
import "./init-BUCeZmFF.js";
import "./logical-filter-operator-C9HBQRMb-BOZGh-G7.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
import "./message-BItjjwRI-B-kajtah.js";
import "./index-DLhpBBEI-C3tPjcQ4.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./theme-switcher-CRVG13AN-OnrBiSI3.js";
function createExampleModal() {
  const name = "modal-example";
  window.customElements.define(
    name,
    class extends HTMLElement {
      isInitalRender = false;
      constructor() {
        super();
      }
      connectedCallback() {
        if (this.isInitalRender) {
          return;
        }
        this.isInitalRender = true;
        this.firstRender();
      }
      firstRender() {
        const modalTemplate = document.getElementById(
          "modal-example-template"
        );
        const template = modalTemplate.content.cloneNode(true);
        const cancelButton = template.querySelector("[data-cancel]");
        const okayButton = template.querySelector("[data-okay]");
        cancelButton.addEventListener("click", () => {
          dismissModal(this);
        });
        okayButton.addEventListener("click", () => {
          closeModal(this);
        });
        this.append(template);
      }
    }
  );
  return name;
}
(async function() {
  const exampleModalName = createExampleModal();
  await window.customElements.whenDefined("ix-button");
  const button = document.querySelector("ix-button");
  button.addEventListener("click", async () => {
    const customModal = document.createElement(exampleModalName);
    await showModal({
      content: customModal
    });
  });
})();
