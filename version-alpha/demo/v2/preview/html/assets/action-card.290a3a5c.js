import "./global.78f61b49.js";
import { a as addIcons } from "./icon-1f00a566.c138dee3.js";
import "./init.d5e03d48.js";
import { i as iconRefresh } from "./index.d8c24d78.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
