import "./global-C_dy4gBz.js";
import { a as setToastPosition, t as toast } from "./index-OaqJ8Udo.js";
import "./init-BbGiJe2Q.js";
import "./logical-filter-operator-C9HBQRMb-BOZGh-G7.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-DJRSsubD-CRBh3lJr.js";
import "./index-DFdo1y_u-D_8X33yw.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-CZUo7Z4G-DSUp_D74.js";
import "./theme-switcher-CeIh1wFd-CqevnQ5w.js";
(async function() {
  await window.customElements.whenDefined("ix-toast-container");
  setToastPosition("top-right");
  document.getElementById("toastButton").addEventListener("click", () => {
    toast({
      message: "My toast message!"
    });
  });
})();
