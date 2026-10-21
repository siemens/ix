import "./global-DZv3C4wT.js";
import { a as addIcons } from "./ix-icon.entry-Bev3vIRL.js";
import { y as iconRefresh } from "./index-lQqpelqO.js";
import "./init-Cytlwji-.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
