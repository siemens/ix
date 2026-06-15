import "./global-B8nXsUf-.js";
import { a as addIcons } from "./ix-icon.entry-iguB3m6A.js";
import { y as iconRefresh } from "./index-vnsUAEMY.js";
import "./init-DAI7i65D.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
