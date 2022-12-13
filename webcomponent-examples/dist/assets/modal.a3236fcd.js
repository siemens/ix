import "./index.948d9746.js";
import "./index.03bf2750.js";
import { c as closeModal, d as dismissModal, m as modal } from "./modal-utils-df50b35a.2734970f.js";
import "./init.daa12a47.js";
import "./logical-filter-operator-1bf83315.1b3b3530.js";
import "./flip-tile-state-28a1f8ce.23318fa9.js";
import "./modal-e7343756.dec5c63c.js";
import "./typed-event-ab58c27e.6340cd97.js";
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
      dismissModal(customModal, "cancelled!");
    })
  );
  const button = document.querySelector("ix-button");
  button.addEventListener("click", async () => {
    const m = await modal({
      content: customModal
    });
    m.htmlElement.addEventListener("keydown", (keyEvent) => {
      console.log(keyEvent.key);
    });
  });
})();
