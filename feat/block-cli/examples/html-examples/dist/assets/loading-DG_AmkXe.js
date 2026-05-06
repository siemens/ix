import "./global-Dfa5QLOG.js";
import { s as showModalLoading } from "./index-D4fdm_sf.js";
import "./init-BUCeZmFF.js";
import "./logical-filter-operator-C9HBQRMb-BOZGh-G7.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-1XS3_9yD-CROtOmyT.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
import "./message-BItjjwRI-B-kajtah.js";
import "./index-DLhpBBEI-C3tPjcQ4.js";
import "./theme-switcher-CRVG13AN-OnrBiSI3.js";
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
