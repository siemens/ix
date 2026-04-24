import "./global-B1t25MFd.js";
import { s as showModalLoading } from "./index-2vJwyO0t.js";
import "./init-D7MT-x0x.js";
import "./logical-filter-operator-C9HBQRMb-BOZGh-G7.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-1XS3_9yD-CROtOmyT.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
import "./message-KsI1kigJ-CqWh--pY.js";
import "./index-CwfZ4aN6-mXhHymhu.js";
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
