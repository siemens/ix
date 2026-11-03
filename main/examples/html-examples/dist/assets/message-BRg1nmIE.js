import "./global-CFt3Lh3W.js";
import { a as showMessage } from "./index-BvwWjVSW.js";
import "./init-0MVmv6RF.js";
import "./index-CgUi6DzV-D9U7VN9L.js";
import "./preload-helper-UZRgTS1n.js";
import "./modal-CT9wuOLE-HnuYCO1-.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-C2bTHF7D-HeOCyL6m.js";
import "./index-Bj5Kmzp6-B1fOSLOf.js";
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
