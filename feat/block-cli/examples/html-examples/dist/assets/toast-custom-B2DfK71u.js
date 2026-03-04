import "./global-BRURWDG-.js";
import { a as addIcons } from "./ix-icon.entry-Ue8yTpyi.js";
import { K as iconUndo } from "./index-BWsIQ1EH.js";
import { t as toast } from "./index-K465dHgl.js";
import "./init-De25JMbJ.js";
import "./logical-filter-operator-BH3f5fa3-983MLV_l.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-BJAcx3Qd-CMIZ8YSL.js";
import "./index-BBzEV-f4-ChQfUIyc.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
import "./animation-C5MWUgDN-BXCJNYHu.js";
import "./theme-switcher-DRqJGlG2-DVSIP9tc.js";
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
