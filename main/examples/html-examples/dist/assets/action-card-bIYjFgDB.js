import "./global-BxNSnRpR.js";
import { a as addIcons } from "./ix-icon.entry-BT_wQAc8.js";
import { y as iconRefresh } from "./index-_MTu4qkX.js";
import "./init-DYjPXEev.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
