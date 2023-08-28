import "./index.8d0788b8.js";
import { t as toast } from "./index.359533a2.js";
import "./init.813dced2.js";
import "./icon-f54a8bc4.4b13768c.js";
import "./logical-filter-operator-92531263.182856a9.js";
import "./flip-tile-state-db31345f.fa15ac0c.js";
import "./upload-file-state-532a36d3.458c962a.js";
import "./modal-68c6d3f6.b6b54fe0.js";
import "./typed-event-a230184a.ccfb44d2.js";
import "./animation-268dce50.df0d8da4.js";
import "./theme-switcher-7498e4f2.143499f1.js";
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
