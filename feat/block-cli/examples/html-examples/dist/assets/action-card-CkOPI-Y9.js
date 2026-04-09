import "./global-X6m21_-k.js";
import { a as addIcons } from "./ix-icon.entry-D-cRIpHh.js";
import { y as iconRefresh } from "./index-BWsIQ1EH.js";
import "./init-Bj9jZK19.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
