import "./global-X6m21_-k.js";
import { s as showModalLoading } from "./index-B7XIDU4C.js";
import "./init-Bj9jZK19.js";
import "./logical-filter-operator-C9HBQRMb-BOZGh-G7.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-C4Qfy2jB-BDz70pVv.js";
import "./index-Dn2eQInl-mXhHymhu.js";
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
