import "./global-CRrZCTD3.js";
import { a as addIcons } from "./ix-icon.entry-DI27yKmA.js";
import { y as iconRefresh } from "./index-BWsIQ1EH.js";
import "./init-mK86bvOr.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
