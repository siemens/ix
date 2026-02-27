import "./global-DXu0UsM0.js";
import "./index-BKpsL_0v.js";
import { s as showModal, d as dismissModal } from "./modal-DCXtePY2-Cy6rmdf-.js";
import "./init-TB4LlJu9.js";
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
