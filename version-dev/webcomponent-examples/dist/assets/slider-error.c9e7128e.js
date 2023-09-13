import "./index.50306e0d.js";
import "./init.61a95642.js";
(async () => {
  await window.customElements.whenDefined("ix-slider");
  const slider = document.querySelector("ix-slider:nth-child(1)");
  slider.marker = [0, 25, 50, 75, 100];
  const slider2 = document.querySelector("ix-slider:nth-child(2)");
  slider2.marker = [0, 10, 20, 30, 40, 50];
})();
