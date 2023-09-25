var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import "./index.de3a8f1f.js";
import "./index.48367bdf.js";
import { a as showModal, d as dismissModal, c as closeModal } from "./modal-68c6d3f6.b6b54fe0.js";
import "./init.65f29b04.js";
import "./logical-filter-operator-92531263.182856a9.js";
import "./flip-tile-state-db31345f.fa15ac0c.js";
import "./upload-file-state-532a36d3.458c962a.js";
import "./animation-268dce50.df0d8da4.js";
import "./theme-switcher-9ede3823.43047733.js";
import "./typed-event-a230184a.ccfb44d2.js";
function createExampleModal() {
  const name = "modal-example";
  window.customElements.define(
    name,
    class extends HTMLElement {
      constructor() {
        super();
        __publicField(this, "isInitalRender", false);
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
