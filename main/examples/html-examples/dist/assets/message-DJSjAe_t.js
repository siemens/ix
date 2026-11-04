import "./global-Y0L6aT10.js";
import { a as showMessage } from "./index-CilWOSh1.js";
import "./init-Q8EsSH6V.js";
import "./index-CgUi6DzV-n6i3Eibg.js";
import "./preload-helper-UZRgTS1n.js";
import "./modal-CT9wuOLE-HnuYCO1-.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-C2bTHF7D-HeOCyL6m.js";
import "./index-CYGHrGrm-D-7vpgvu.js";
import "./index-DCCkv1ZQ-DZnlOMEt.js";
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
