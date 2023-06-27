import "./index.c87d935b.js";
import { t as toast } from "./index.1486dff4.js";
import "./init.c2e061d0.js";
import "./icon-c659fc0f.a670d01b.js";
import "./logical-filter-operator-92531263.182856a9.js";
import "./flip-tile-state-051bb2fd.b2524409.js";
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
