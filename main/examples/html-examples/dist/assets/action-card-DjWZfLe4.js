import "./global-43rhC1fd.js";
import { a as addIcons } from "./ix-icon.entry-M3WXBi9P.js";
import { y as iconRefresh } from "./index-lQqpelqO.js";
import "./init-DTq97SR9.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
