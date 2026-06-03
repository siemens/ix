import "./global-DUJ9DtiD.js";
import { a as addIcons } from "./ix-icon.entry-SZMEU8OL.js";
import { y as iconRefresh } from "./index-vnsUAEMY.js";
import "./init-DphxZyE4.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
