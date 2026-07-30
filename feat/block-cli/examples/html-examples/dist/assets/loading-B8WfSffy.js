import "./global-J1r-v9CX.js";
import { s as showModalLoading } from "./index-D70MctRt.js";
import "./init-DcXu-ene.js";
import "./modal-DaGSr1j4-BA-0pEIr.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
import "./index-BcWSlcx_-DijX28Uj.js";
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
