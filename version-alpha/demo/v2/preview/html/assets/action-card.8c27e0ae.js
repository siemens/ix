import "./global.aa474cf6.js";
import { a as addIcons } from "./icon-1f00a566.d85e1cdb.js";
import "./init.8fde940e.js";
import { i as iconRefresh } from "./index.d8c24d78.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
