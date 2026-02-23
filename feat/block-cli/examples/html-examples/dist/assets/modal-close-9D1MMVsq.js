import "./global-BlVZeLef.js";
import "./index-Clh-rS1I.js";
import { s as showModal, c as closeModal, d as dismissModal } from "./modal-DCXtePY2-Cy6rmdf-.js";
import "./init-DI8ZEhG0.js";
import "./logical-filter-operator-BH3f5fa3-983MLV_l.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./animation-C5MWUgDN-BXCJNYHu.js";
import "./theme-switcher-DRqJGlG2-DVSIP9tc.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
import "./index-8HpPmDK_-DinFJk0z.js";
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
