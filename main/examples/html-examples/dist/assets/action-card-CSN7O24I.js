import "./global-OgymIuXM.js";
import { a as addIcons } from "./ix-icon.entry-CAsvly3W.js";
import { y as iconRefresh } from "./index-lQqpelqO.js";
import "./init-CX-nmMQk.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
