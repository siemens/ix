import "./global-DX2OdaCL.js";
import { s as setToastPosition, t as toast } from "./index-DqvKMZeA.js";
import "./init-DRfhtWcZ.js";
import "./modal-DaGSr1j4-DDLDpRwP.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
import "./index-Cl7fhG1I-C77BCFLW.js";
(async function() {
  await window.customElements.whenDefined("ix-toast-container");
  setToastPosition("top-right");
  document.getElementById("toastButton").addEventListener("click", () => {
    toast({
      message: "My toast message!"
    });
  });
})();
