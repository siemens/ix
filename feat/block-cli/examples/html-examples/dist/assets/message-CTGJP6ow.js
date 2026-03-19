import "./global-C_dy4gBz.js";
import "./index-OaqJ8Udo.js";
import { a as showMessage } from "./modal-DJRSsubD-CRBh3lJr.js";
import "./init-BbGiJe2Q.js";
import "./logical-filter-operator-C9HBQRMb-BOZGh-G7.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./animation-CZUo7Z4G-DSUp_D74.js";
import "./theme-switcher-CeIh1wFd-CqevnQ5w.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./index-DFdo1y_u-D_8X33yw.js";
const btn = document.querySelector("ix-button");
btn.addEventListener("click", async () => {
  (await showMessage.success(
    "Example title",
    "message",
    "Save",
    "Cancel",
    "payload:save",
    "payload:cancel"
  )).once(console.log);
});
