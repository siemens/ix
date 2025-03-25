import "./global.23f98c2e.js";
import { a as addIcons } from "./icon-1f00a566.0101a9c3.js";
import "./init.c292510a.js";
import { i as iconRefresh } from "./index.8ef77ba3.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
