import "./global-D_olgeRE.js";
import { a as addIcons } from "./ix-icon.entry-2PIdb4KT.js";
import { y as iconRefresh } from "./index-lQqpelqO.js";
import "./init-BcKRYEMY.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
