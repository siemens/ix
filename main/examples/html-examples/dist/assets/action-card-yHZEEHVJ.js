import "./global-DPf-m4l1.js";
import { a as addIcons } from "./ix-icon.entry-1rPzGIFm.js";
import { y as iconRefresh } from "./index-lQqpelqO.js";
import "./init-C5A0cxxu.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
