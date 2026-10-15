import "./global-D3pEBlWT.js";
import { a as addIcons } from "./ix-icon.entry-Cga5vDaY.js";
import { y as iconRefresh } from "./index-lQqpelqO.js";
import "./init-CFTWau4M.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
