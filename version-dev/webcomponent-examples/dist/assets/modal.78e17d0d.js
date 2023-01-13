var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import "./index.bb42fc32.js";
import "./index.deeedf6e.js";
import { m as modal, c as closeModal, d as dismissModal } from "./modal-utils-df50b35a.2734970f.js";
import "./init.db6fa4b1.js";
import "./logical-filter-operator-1bf83315.1b3b3530.js";
import "./flip-tile-state-28a1f8ce.23318fa9.js";
import "./modal-df0a62f2.270036c8.js";
import "./typed-event-ab58c27e.6340cd97.js";
import "./anime.es-185e9087.87a18bcc.js";
import "./animation-b667a4c4.18fe34bf.js";
import "./upload-file-state-631bb8a2.5434751f.js";
import "./theme-switcher-dce1aaec.5d2d5855.js";
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
