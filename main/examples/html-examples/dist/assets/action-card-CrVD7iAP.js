import "./global-B9zaqCXZ.js";
import { a as addIcons } from "./ix-icon.entry-C7zALPkJ.js";
import { y as iconRefresh } from "./index-lQqpelqO.js";
import "./init-C4tU1g7Y.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
