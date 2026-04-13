import "./global-CtBDOAVb.js";
import "./index-Bxr9lWwd.js";
import { s as showModal, c as closeModal, d as dismissModal } from "./modal-C4Qfy2jB-BDz70pVv.js";
import "./init-BauzXIH0.js";
import "./logical-filter-operator-C9HBQRMb-BOZGh-G7.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
import "./theme-switcher-CRVG13AN-OnrBiSI3.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./index-Dn2eQInl-mXhHymhu.js";
function createExampleModal() {
  const name = "modal-example";
  window.customElements.define(
    name,
    class extends HTMLElement {
      isInitialRender = false;
      constructor() {
        super();
      }
      connectedCallback() {
        if (this.isInitialRender) {
          return;
        }
        this.isInitialRender = true;
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
    setTimeout(() => {
      closeModal(customModal, "closed after 5 seconds");
    }, 5e3);
  });
})();
