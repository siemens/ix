import "./global-Cx3A0XQN.js";
import { s as showModalLoading } from "./index-8iGKQYNS.js";
import "./init-BOE_ye2V.js";
import "./modal-DaGSr1j4-BA-0pEIr.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
import "./index-DgUGsIlh-CLxQRaVd.js";
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
