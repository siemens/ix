import "./global-BTJSiofB.js";
import { a as addIcons } from "./ix-icon.entry-CvjBVH79.js";
import { y as iconRefresh } from "./index-lQqpelqO.js";
import "./init-CjC4TZPO.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
