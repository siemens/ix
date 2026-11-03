import "./global-CFt3Lh3W.js";
import { a as addIcons } from "./ix-icon.entry-CGiLGChb.js";
import { U as iconUndo } from "./index-_MTu4qkX.js";
import { t as toast } from "./index-BvwWjVSW.js";
import "./init-0MVmv6RF.js";
import "./index-CgUi6DzV-D9U7VN9L.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DCCkv1ZQ-DZnlOMEt.js";
import "./modal-CT9wuOLE-HnuYCO1-.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-C2bTHF7D-HeOCyL6m.js";
import "./index-Bj5Kmzp6-B1fOSLOf.js";
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
