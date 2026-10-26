import "./global-CqiPKlnE.js";
import { a as addIcons } from "./ix-icon.entry-DLzNQODA.js";
import { y as iconRefresh } from "./index-_MTu4qkX.js";
import "./init-Bm1z0zqs.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
