import "./index.eca5b8a3.js";
import { t as toast } from "./index.9fc97e6d.js";
import "./init.647ab6c1.js";
import "./icon-8ee43566.33b23426.js";
import "./logical-filter-operator-92531263.182856a9.js";
import "./flip-tile-state-db31345f.fa15ac0c.js";
import "./upload-file-state-532a36d3.458c962a.js";
import "./theme-switcher-7498e4f2.143499f1.js";
import "./typed-event-a230184a.ccfb44d2.js";
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
