import "./global-CU4RCWGK.js";
import { a as addIcons } from "./ix-icon.entry-9GmWRslu.js";
import { y as iconRefresh } from "./index-lQqpelqO.js";
import "./init-DmY6AD04.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
