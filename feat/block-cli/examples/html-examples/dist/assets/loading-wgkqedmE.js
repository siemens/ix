import "./global-Cr1KQvOo.js";
import { s as showModalLoading } from "./index-CoWPLQ06.js";
import "./init-DBI3EHNp.js";
import "./logical-filter-operator-C9HBQRMb-BOZGh-G7.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-uPRyVbMt-Brti2DgW.js";
import "./index-ClV1Tffv-Cwm_ckfF.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
import "./theme-switcher-JLPGWWvy-Dx1a6sv8.js";
const btn = document.querySelector("ix-button");
btn.addEventListener("click", () => {
  let count = 0;
  const progress = showModalLoading({ message: "Loading 0/2" });
  const interval = setInterval(() => {
    count++;
    progress.update(`Loading ${count}/2`);
    if (count === 2) {
      progress.finish("Done");
      clearInterval(interval);
    }
  }, 1e3);
});
