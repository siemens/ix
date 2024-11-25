var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import "./global.2bfd6008.js";
import "./index.50971e87.js";
import { a as showModal, d as dismissModal } from "./modal-101eef04.04114a11.js";
import "./init.aa12a02f.js";
import "./logical-filter-operator-d793d1c3.ce417adc.js";
import "./flip-tile-state-76dd224a.ffe63233.js";
import "./upload-file-state-de676cd5.96d9c6b3.js";
import "./animation-4a73b1c3.59b7eda0.js";
import "./theme-switcher-5fcf712d.42146bb7.js";
import "./typed-event-ad6484c5.eb731a3b.js";
const modalSizes = "";
function createExampleModal() {
  const name = "modal-example";
  window.customElements.define(
    name,
    class extends HTMLElement {
      constructor() {
        super();
        __publicField(this, "isInitalRender", false);
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
