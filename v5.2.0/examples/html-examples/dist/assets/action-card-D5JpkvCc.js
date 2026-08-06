import "./global-CSIWS5Ku.js";
import { a as addIcons } from "./ix-icon.entry-D-CGG_QO.js";
import { y as iconRefresh } from "./index-lQqpelqO.js";
import "./init-D6cKia4a.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
