import "./global-wi9VneMU.js";
import { a as addIcons } from "./ix-icon.entry-Dt6CQqjX.js";
import { y as iconRefresh } from "./index-CtK4JYCE.js";
import "./init-Bt8gb6Dd.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
