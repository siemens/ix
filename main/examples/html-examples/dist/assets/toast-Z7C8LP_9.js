import "./global-at_Qxdd1.js";
import { t as toast } from "./index-Elt_M3Sw.js";
import "./init-CPXgC43W.js";
import "./index-CgUi6DzV-CSMVgu78.js";
import "./preload-helper-UZRgTS1n.js";
import "./modal-CT9wuOLE-HnuYCO1-.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-C2bTHF7D-HeOCyL6m.js";
import "./index-CZ_u3Y0s-B1dE3kOK.js";
import "./index-DCCkv1ZQ-lVo38FW7.js";
(async function() {
  await window.customElements.whenDefined("ix-toast-container");
  document.getElementById("toastButton").addEventListener("click", async () => {
    const toastTypes = [
      "information",
      "success",
      "caution",
      "warning",
      "danger",
      "critical",
      "error",
      "base"
    ];
    for (const type of toastTypes) {
      await toast({
        type,
        title: "Toast headline",
        message: "This is a toast test message!",
        autoClose: false
      });
    }
  });
})();
