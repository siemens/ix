import "./global-CtBDOAVb.js";
import "./index-Bxr9lWwd.js";
import { a as showMessage } from "./modal-C4Qfy2jB-BDz70pVv.js";
import "./init-BauzXIH0.js";
import "./logical-filter-operator-C9HBQRMb-BOZGh-G7.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
import "./theme-switcher-CRVG13AN-OnrBiSI3.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./index-Dn2eQInl-mXhHymhu.js";
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
