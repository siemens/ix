import "./global-Ba1Wm6ph.js";
import { a as addIcons } from "./ix-icon.entry-Vy75WqqV.js";
import { y as iconRefresh } from "./index-vnsUAEMY.js";
import "./init-Ds7NGRa2.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
