import "./global.e92797ea.js";
import { a as addIcons } from "./icon-1ecd1404.598f6189.js";
import "./init.14c20cd8.js";
import { i as iconRefresh } from "./index.4b950771.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
