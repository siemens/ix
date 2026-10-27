import "./global-CiP_aNzx.js";
import { a as addIcons } from "./ix-icon.entry-Dn1mV-Km.js";
import { y as iconRefresh } from "./index-_MTu4qkX.js";
import "./init-DFJe9861.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
