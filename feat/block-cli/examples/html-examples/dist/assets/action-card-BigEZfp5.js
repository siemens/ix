import "./global-F68Qu5y3.js";
import { a as addIcons } from "./ix-icon.entry-CJHUpQ2M.js";
import { y as iconRefresh } from "./index-BWsIQ1EH.js";
import "./init-BMJ5iqbY.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
