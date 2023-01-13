import "./index.bb42fc32.js";
import { t as toast } from "./index.deeedf6e.js";
import "./init.db6fa4b1.js";
import "./logical-filter-operator-1bf83315.1b3b3530.js";
import "./flip-tile-state-28a1f8ce.23318fa9.js";
import "./modal-df0a62f2.270036c8.js";
import "./typed-event-ab58c27e.6340cd97.js";
import "./anime.es-185e9087.87a18bcc.js";
import "./animation-b667a4c4.18fe34bf.js";
import "./upload-file-state-631bb8a2.5434751f.js";
import "./theme-switcher-dce1aaec.5d2d5855.js";
(async function() {
  await window.customElements.whenDefined("ix-toast-container");
  document.getElementById("toastButton").addEventListener("click", async () => {
    const customModal = document.createElement("div");
    const template = document.getElementById("custom-toast");
    const templateContent = template.content;
    customModal.appendChild(templateContent);
    const instance = await toast({
      message: customModal
    });
    customModal.querySelector("ix-button").addEventListener("click", () => {
      instance.close();
    });
  });
})();
