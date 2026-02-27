import "./global-DXu0UsM0.js";
import { a as addIcons } from "./ix-icon.entry-DMd4DiuI.js";
import { y as iconRefresh } from "./index-CtK4JYCE.js";
import "./init-TB4LlJu9.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
