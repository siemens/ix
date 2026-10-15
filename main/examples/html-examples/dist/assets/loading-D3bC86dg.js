import "./global-Dj1TfEHu.js";
import { s as showModalLoading } from "./index-DIS2QZTb.js";
import "./init-vUl47gmN.js";
import "./modal-DaGSr1j4-BA-0pEIr.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-C2bTHF7D-HeOCyL6m.js";
import "./index-BeX6RWvV-CXzUIwMU.js";
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
