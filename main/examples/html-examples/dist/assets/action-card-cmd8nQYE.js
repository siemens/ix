import "./global-DzKOIL47.js";
import { a as addIcons } from "./ix-icon.entry-OW86KVQl.js";
import { y as iconRefresh } from "./index-lQqpelqO.js";
import "./init-Bvr_6WsO.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
