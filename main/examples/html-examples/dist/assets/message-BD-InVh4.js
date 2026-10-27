import "./global-CiP_aNzx.js";
import { a as showMessage } from "./index-Ge_sQVmW.js";
import "./init-DFJe9861.js";
import "./modal-CT9wuOLE-HnuYCO1-.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-C2bTHF7D-HeOCyL6m.js";
import "./index-DwLtFbui-Caa0eG-T.js";
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
