import "./global-DqdWS2Ng.js";
import { a as addIcons } from "./ix-icon.entry-BqYMCKUe.js";
import { y as iconRefresh } from "./index-lQqpelqO.js";
import "./init-QEVqbUH_.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
