import "./global-DtRSe4QO.js";
import { a as addIcons } from "./ix-icon.entry-D7WLqve0.js";
import { y as iconRefresh } from "./index-_MTu4qkX.js";
import "./init-CwSYQNgV.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
