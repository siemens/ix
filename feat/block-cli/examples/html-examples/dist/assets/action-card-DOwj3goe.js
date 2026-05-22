import "./global-DX2OdaCL.js";
import { a as addIcons } from "./ix-icon.entry-_0Fdvtev.js";
import { y as iconRefresh } from "./index-vnsUAEMY.js";
import "./init-DRfhtWcZ.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
