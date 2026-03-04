import "./global-BRURWDG-.js";
import { a as addIcons } from "./ix-icon.entry-Ue8yTpyi.js";
import { y as iconRefresh } from "./index-BWsIQ1EH.js";
import "./init-De25JMbJ.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
