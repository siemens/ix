import "./global-B8nXsUf-.js";
import { a as showMessage } from "./index-CS2QwezA.js";
import "./init-DAI7i65D.js";
import "./modal-DaGSr1j4-DDLDpRwP.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
import "./index-DgUGsIlh-FNhczk6p.js";
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
