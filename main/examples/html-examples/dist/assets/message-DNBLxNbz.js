import "./global-Xvppo2lv.js";
import { a as showMessage } from "./index-Cer-lSYc.js";
import "./init-Ci5NqT6B.js";
import "./index-CgUi6DzV-vubC4vyH.js";
import "./preload-helper-UZRgTS1n.js";
import "./modal-CT9wuOLE-HnuYCO1-.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-C2bTHF7D-HeOCyL6m.js";
import "./index-CZ_u3Y0s-B1dE3kOK.js";
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
