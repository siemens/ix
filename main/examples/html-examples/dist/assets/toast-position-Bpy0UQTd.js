import "./global-DPf-m4l1.js";
import { b as setToastPosition, t as toast } from "./index-DIS2QZTb.js";
import "./init-C5A0cxxu.js";
import "./modal-DaGSr1j4-BA-0pEIr.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-C2bTHF7D-HeOCyL6m.js";
import "./index-BeX6RWvV-CXzUIwMU.js";
(async function() {
  await window.customElements.whenDefined("ix-toast-container");
  setToastPosition("top-right");
  document.getElementById("toastButton").addEventListener("click", () => {
    toast({
      message: "My toast message!"
    });
  });
})();
