import "./global-B8nXsUf-.js";
import { b as showModalLoading } from "./index-CS2QwezA.js";
import "./init-DAI7i65D.js";
import "./modal-DaGSr1j4-DDLDpRwP.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
import "./index-DgUGsIlh-FNhczk6p.js";
const btn = document.querySelector("ix-button");
btn.addEventListener("click", () => {
  let count = 0;
  const progress$ = showModalLoading({ message: "Loading 0/2" });
  progress$.then((progress) => {
    const interval = setInterval(() => {
      count++;
      progress.update(`Loading ${count}/2`);
      if (count === 2) {
        progress.finish("Done");
        clearInterval(interval);
      }
    }, 1e3);
  });
});
