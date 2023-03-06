var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import "./index.352cb90e.js";
import "./index.c9bc42d6.js";
import { m as modal, c as closeModal, d as dismissModal } from "./modal-utils-aecbcba5.95724bc3.js";
import "./init.2f521542.js";
import "./logical-filter-operator-15696001.d3e8ce6a.js";
import "./flip-tile-state-051bb2fd.b2524409.js";
import "./modal-64e18970.5a849811.js";
import "./typed-event-a230184a.ccfb44d2.js";
import "./anime.es-185e9087.87a18bcc.js";
import "./animation-268dce50.df0d8da4.js";
import "./upload-file-state-532a36d3.458c962a.js";
import "./theme-switcher-4b9e5cc2.7e06ab13.js";
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
        const modalTemplate = document.createElement("template");
        modalTemplate.innerHTML = `
              <div>
                <div class="modal-header">
                Message headline
                <ix-icon-button
                  data-button-close
                  ghost
                  icon="close"
                  class="dismiss-modal"
                ></ix-icon-button>
                </div>
                <div class="modal-body">Message text lorem ipsum</div>
                <div class="modal-footer">
                  <ix-button outline class="dismiss-modal"> Cancel </ix-button>
                  <ix-button class="close-modal">OK</ix-button>
                </div>
              </div>
              `;
        const template = modalTemplate.content.cloneNode(true);
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
    const m = await modal({
      content: customModal
    });
    m.htmlElement.querySelector(".close-modal").addEventListener("click", () => {
      closeModal(customModal, "Done!");
    });
    m.htmlElement.querySelectorAll(".dismiss-modal").forEach(
      (item) => item.addEventListener("click", () => {
        dismissModal(customModal, "cancelled!");
      })
    );
    m.htmlElement.addEventListener("keydown", (keyEvent) => {
      console.log(keyEvent.key);
    });
  });
})();
