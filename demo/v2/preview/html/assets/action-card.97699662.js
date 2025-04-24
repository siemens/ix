import "./global.1f5cc68d.js";
import { a as addIcons } from "./icon-1ecd1404.5b53651d.js";
import "./init.7333a9d9.js";
import { i as iconRefresh } from "./index.4b950771.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
