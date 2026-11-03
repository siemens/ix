import "./global-3vOHWtr1.js";
import { b as setToastPosition, t as toast } from "./index-CilWOSh1.js";
import "./init-DcLwhulc.js";
import "./index-CgUi6DzV-DNhYiKCd.js";
import "./preload-helper-UZRgTS1n.js";
import "./modal-CT9wuOLE-HnuYCO1-.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-C2bTHF7D-HeOCyL6m.js";
import "./index-CYGHrGrm-D-7vpgvu.js";
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
