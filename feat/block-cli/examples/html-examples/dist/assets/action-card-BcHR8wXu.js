import "./global-J1r-v9CX.js";
import { a as addIcons } from "./ix-icon.entry-C4kmM9k7.js";
import { y as iconRefresh } from "./index-lQqpelqO.js";
import "./init-DcXu-ene.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
