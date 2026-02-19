import "./global-Cn4dOqNA.js";
import { a as addIcons } from "./ix-icon.entry-Bz-5pS6W.js";
import { y as iconRefresh } from "./index-CtK4JYCE.js";
import "./init-BUqBgp9y.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
