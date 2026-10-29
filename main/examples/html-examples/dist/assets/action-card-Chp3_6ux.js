import "./global-DV2yP7rM.js";
import { a as addIcons } from "./ix-icon.entry-BEBIJU1a.js";
import { y as iconRefresh } from "./index-_MTu4qkX.js";
import "./init-DYci_Ip3.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
