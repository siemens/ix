import "./global-Cr1KQvOo.js";
import "./index-CoWPLQ06.js";
import { a as showMessage } from "./modal-uPRyVbMt-Brti2DgW.js";
import "./init-DBI3EHNp.js";
import "./logical-filter-operator-C9HBQRMb-BOZGh-G7.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
import "./theme-switcher-JLPGWWvy-Dx1a6sv8.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./index-ClV1Tffv-Cwm_ckfF.js";
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
