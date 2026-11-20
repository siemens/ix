import "./global-w2gTeu65.js";
import { b as setToastPosition, t as toast } from "./index-Elt_M3Sw.js";
import "./init-Dh7tZ8QL.js";
import "./index-CgUi6DzV-5qI4MrWA.js";
import "./preload-helper-UZRgTS1n.js";
import "./modal-CT9wuOLE-HnuYCO1-.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-C2bTHF7D-HeOCyL6m.js";
import "./index-CZ_u3Y0s-B1dE3kOK.js";
import "./index-DCCkv1ZQ-DZnlOMEt.js";
(async function() {
  await window.customElements.whenDefined("ix-toast-container");
  setToastPosition("top-right");
  document.getElementById("toastButton").addEventListener("click", () => {
    toast({
      message: "My toast message!"
    });
  });
})();
