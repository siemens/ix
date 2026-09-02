import "./global-Do6maBom.js";
import { a as addIcons } from "./ix-icon.entry-BdQBfvO9.js";
import { y as iconRefresh } from "./index-lQqpelqO.js";
import "./init-BB6hGSJy.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
