import "./global-uYf8zSPS.js";
import { a as addIcons } from "./ix-icon.entry-Dq9fUXAl.js";
import { y as iconRefresh } from "./index-lQqpelqO.js";
import "./init-DVDUOHuB.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
