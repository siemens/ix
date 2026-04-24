import "./global-B1t25MFd.js";
import "./index-2vJwyO0t.js";
import { s as showModal, d as dismissModal, c as closeModal } from "./modal-1XS3_9yD-CROtOmyT.js";
import "./init-D7MT-x0x.js";
import "./logical-filter-operator-C9HBQRMb-BOZGh-G7.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
import "./message-KsI1kigJ-CqWh--pY.js";
import "./index-CwfZ4aN6-mXhHymhu.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./theme-switcher-CRVG13AN-OnrBiSI3.js";
function createFormModal() {
  const name = "modal-form-example";
  window.customElements.define(
    name,
    class extends HTMLElement {
      isInitalRender = false;
      connectedCallback() {
        if (this.isInitalRender) {
          return;
        }
        this.isInitalRender = true;
        this.firstRender();
      }
      firstRender() {
        const modalTemplate = document.getElementById(
          "modal-form-template"
        );
        const template = modalTemplate.content.cloneNode(true);
        const cancelButton = template.querySelector("[data-cancel]");
        const form = template.querySelector("#create-resource-form");
        cancelButton.addEventListener("click", () => {
          dismissModal(this);
        });
        form.addEventListener("submit", (event) => {
          event.preventDefault();
          closeModal(this);
        });
        this.append(template);
      }
    }
  );
  return name;
}
(async function() {
  const formModalName = createFormModal();
  await window.customElements.whenDefined("ix-button");
  const button = document.querySelector("ix-button");
  button.addEventListener("click", async () => {
    const customModal = document.createElement(formModalName);
    await showModal({
      content: customModal
    });
  });
})();
