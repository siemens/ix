import "./global-CtBDOAVb.js";
import { a as addIcons } from "./ix-icon.entry-d_uyGuVH.js";
import { K as iconUndo } from "./index-BWsIQ1EH.js";
import { t as toast } from "./index-Bxr9lWwd.js";
import "./init-BauzXIH0.js";
import "./logical-filter-operator-C9HBQRMb-BOZGh-G7.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-C4Qfy2jB-BDz70pVv.js";
import "./index-Dn2eQInl-mXhHymhu.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
import "./theme-switcher-CRVG13AN-OnrBiSI3.js";
addIcons({
  iconUndo
});
(async function() {
  await window.customElements.whenDefined("ix-toast-container");
  document.getElementById("toastMessageButton").addEventListener("click", async () => {
    const customModal = document.createElement("div");
    const template = document.getElementById("custom-toast-message");
    const templateContent = template.content.cloneNode(true);
    customModal.appendChild(templateContent);
    const customModalAction = document.createElement("div");
    const templateAction = document.getElementById("custom-toast-action");
    const templateContentAction = templateAction.content.cloneNode(true);
    customModalAction.appendChild(templateContentAction);
    await toast({
      title: "Toast headline",
      message: customModal,
      type: "success"
    });
  });
  document.getElementById("toastActionButton").addEventListener("click", async () => {
    const customModal = document.createElement("div");
    const template = document.getElementById("custom-toast-message");
    const templateContent = template.content.cloneNode(true);
    customModal.appendChild(templateContent);
    const customModalAction = document.createElement("div");
    const templateAction = document.getElementById("custom-toast-action");
    const templateContentAction = templateAction.content.cloneNode(true);
    customModalAction.appendChild(templateContentAction);
    const instance = await toast({
      title: "Toast headline",
      message: customModal,
      action: customModalAction
    });
    customModal.querySelector("ix-button").addEventListener("click", () => {
      instance.close();
    });
  });
})();
