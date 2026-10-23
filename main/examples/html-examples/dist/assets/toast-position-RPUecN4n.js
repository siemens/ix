import "./global-D3FU0h8K.js";
import { b as setToastPosition, t as toast } from "./index-BJA_u9IB.js";
import "./init-BCJ8-AOK.js";
import "./modal-DaGSr1j4-BA-0pEIr.js";
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
