import "./global-BzKBmmPj.js";
import { s as showModal, e as dismissModal } from "./modal-CT9wuOLE-HnuYCO1-.js";
import "./init-BicQImck.js";
import "./index-CgUi6DzV-BfsU3hSZ.js";
import "./preload-helper-UZRgTS1n.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./index-DCCkv1ZQ-DZnlOMEt.js";
function createExampleModal() {
  const name = "modal-example";
  window.customElements.define(
    name,
    class extends HTMLElement {
      isInitalRender = false;
      constructor() {
        super();
        this.size = "360";
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
        const button = template.querySelector("ix-button");
        button.innerText = `Modal with size ${this.size}`;
        button.addEventListener("click", () => dismissModal(this));
        this.append(template);
      }
    }
  );
  return name;
}
(async function() {
  const exampleModalName = createExampleModal();
  await window.customElements.whenDefined("ix-button");
  const buttons = document.querySelectorAll("ix-button");
  buttons.forEach(
    (button) => button.addEventListener("click", async () => {
      const customModal = document.createElement(exampleModalName);
      customModal.size = button.getAttribute("data-modal-size");
      await showModal({
        content: customModal,
        size: customModal.size
      });
    })
  );
})();
