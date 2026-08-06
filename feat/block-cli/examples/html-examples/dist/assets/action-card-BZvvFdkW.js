import "./global-DSse0xVy.js";
import { a as addIcons } from "./ix-icon.entry-BXHlWaLT.js";
import { y as iconRefresh } from "./index-lQqpelqO.js";
import "./init-De6GZVCf.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
