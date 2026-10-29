import "./global-B0StzMye.js";
import { a as addIcons } from "./ix-icon.entry-CuvMH_KO.js";
import { y as iconRefresh } from "./index-_MTu4qkX.js";
import "./init-D-VJbYZf.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
