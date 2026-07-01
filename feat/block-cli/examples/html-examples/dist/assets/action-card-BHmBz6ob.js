import "./global-C8IWpzMv.js";
import { a as addIcons } from "./ix-icon.entry-BTisorGV.js";
import { y as iconRefresh } from "./index-BWsIQ1EH.js";
import "./init-CVkHVy98.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
