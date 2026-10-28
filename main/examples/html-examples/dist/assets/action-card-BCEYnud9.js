import "./global-EB1NlL0D.js";
import { a as addIcons } from "./ix-icon.entry-CussUVvU.js";
import { y as iconRefresh } from "./index-_MTu4qkX.js";
import "./init-BUp9w8W6.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
