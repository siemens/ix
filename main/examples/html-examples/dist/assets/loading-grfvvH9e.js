import "./global-Bs2gnYtf.js";
import { s as showModalLoading } from "./index-BvwWjVSW.js";
import "./init-D-m7DTfL.js";
import "./modal-CT9wuOLE-HnuYCO1-.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-C2bTHF7D-HeOCyL6m.js";
import "./index-Bj5Kmzp6-B1fOSLOf.js";
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
