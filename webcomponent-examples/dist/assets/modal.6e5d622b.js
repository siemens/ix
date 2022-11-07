import "./index.b8b4baf0.js";
import "./index.3f5d7b4d.js";
import { c as closeModal, d as dismissModal, m as modal } from "./modal-utils-ec39c1bc.bde1d171.js";
import "./init.19b00cda.js";
import "./logical-filter-operator-1bf83315.1b3b3530.js";
import "./flip-tile-state-28a1f8ce.23318fa9.js";
import "./modal-8ed87a6c.27ce8718.js";
import "./typed-event-dd6c83dd.77656892.js";
import "./anime.es-185e9087.87a18bcc.js";
import "./animation-b667a4c4.18fe34bf.js";
import "./upload-file-state-631bb8a2.5434751f.js";
(async function() {
  await window.customElements.whenDefined("ix-button");
  const customModal = document.createElement("div");
  const template = document.getElementById("custom-modal");
  const templateContent = template.content;
  customModal.appendChild(templateContent);
  customModal.querySelector(".close-modal").addEventListener("click", () => {
    closeModal(customModal, "Done!");
  });
  customModal.querySelectorAll(".dismiss-modal").forEach(
    (item) => item.addEventListener("click", () => {
      dismissModal(customModal, "canceled!");
    })
  );
  const button = document.querySelector("ix-button");
  button.addEventListener("click", () => {
    modal({
      content: customModal
    });
  });
})();
