import "./global-Ba1Wm6ph.js";
import { a as addIcons } from "./ix-icon.entry-Vy75WqqV.js";
import { d as iconCapacity } from "./index-vnsUAEMY.js";
import "./init-Ds7NGRa2.js";
addIcons({
  iconCapacity
});
(async () => {
  await window.customElements.whenDefined("ix-card");
  const cardElement = document.querySelector("ix-card");
  cardElement.addEventListener("click", console.log);
})();
