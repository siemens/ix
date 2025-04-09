import "./global.bff64ac3.js";
import { a as addIcons } from "./icon-1f00a566.e1293380.js";
import "./init.d54797f5.js";
import { i as iconRefresh } from "./index.8ef77ba3.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
