import "./global-BFmC_PbI.js";
import { s as showModal, f as closeModal, e as dismissModal } from "./modal-CT9wuOLE-HnuYCO1-.js";
import "./init-C5YnK6N4.js";
import "./index-CgUi6DzV-fQJuTF8s.js";
import "./preload-helper-UZRgTS1n.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./index-DCCkv1ZQ-DZnlOMEt.js";
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
