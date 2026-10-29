import "./global-DV2yP7rM.js";
import { b as setToastPosition, t as toast } from "./index-BvwWjVSW.js";
import "./init-DYci_Ip3.js";
import "./modal-CT9wuOLE-HnuYCO1-.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-C2bTHF7D-HeOCyL6m.js";
import "./index-Bj5Kmzp6-B1fOSLOf.js";
(async function() {
  await window.customElements.whenDefined("ix-toast-container");
  setToastPosition("top-right");
  document.getElementById("toastButton").addEventListener("click", () => {
    toast({
      message: "My toast message!"
    });
  });
})();
