import "./index.6063163d.js";
import { t as toast } from "./index.2030fa35.js";
import "./init.95304eb0.js";
import "./logical-filter-operator-15696001.d3e8ce6a.js";
import "./flip-tile-state-051bb2fd.b2524409.js";
import "./modal-64e18970.3942052f.js";
import "./typed-event-a230184a.ccfb44d2.js";
import "./anime.es-185e9087.87a18bcc.js";
import "./animation-268dce50.df0d8da4.js";
import "./upload-file-state-532a36d3.458c962a.js";
import "./theme-switcher-4b9e5cc2.7e06ab13.js";
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
