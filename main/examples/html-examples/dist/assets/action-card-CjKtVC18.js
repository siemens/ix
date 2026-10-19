import "./global-DWZvlbOg.js";
import { a as addIcons } from "./ix-icon.entry-C4X8vXbs.js";
import { y as iconRefresh } from "./index-lQqpelqO.js";
import "./init-Cc2rtCga.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
