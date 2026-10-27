import "./global-BRajFsjN.js";
import { b as setToastPosition, t as toast } from "./index-Ge_sQVmW.js";
import "./init-UuCsUrVQ.js";
import "./modal-CT9wuOLE-HnuYCO1-.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-C2bTHF7D-HeOCyL6m.js";
import "./index-DwLtFbui-Caa0eG-T.js";
(async function() {
  await window.customElements.whenDefined("ix-toast-container");
  setToastPosition("top-right");
  document.getElementById("toastButton").addEventListener("click", () => {
    toast({
      message: "My toast message!"
    });
  });
})();
