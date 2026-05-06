import "./global-Dfa5QLOG.js";
import "./index-D4fdm_sf.js";
import { s as showMessage } from "./message-BItjjwRI-B-kajtah.js";
import "./init-BUCeZmFF.js";
import "./logical-filter-operator-C9HBQRMb-BOZGh-G7.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-1XS3_9yD-CROtOmyT.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
import "./theme-switcher-CRVG13AN-OnrBiSI3.js";
import "./index-DLhpBBEI-C3tPjcQ4.js";
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
