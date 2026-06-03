import "./global-DUJ9DtiD.js";
import { a as showMessage } from "./index-DqvKMZeA.js";
import "./init-DphxZyE4.js";
import "./modal-DaGSr1j4-DDLDpRwP.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
import "./index-Cl7fhG1I-C77BCFLW.js";
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
