import "./global-DtRSe4QO.js";
import { s as showModal, e as dismissModal, f as closeModal } from "./modal-CT9wuOLE-HnuYCO1-.js";
import "./init-CwSYQNgV.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
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
