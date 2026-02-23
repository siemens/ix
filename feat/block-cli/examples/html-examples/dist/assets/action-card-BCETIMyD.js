import "./global-BlVZeLef.js";
import { a as addIcons } from "./ix-icon.entry-D_OWXmMu.js";
import { y as iconRefresh } from "./index-CtK4JYCE.js";
import "./init-DI8ZEhG0.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
