import "./global-CtBDOAVb.js";
import { a as addIcons } from "./ix-icon.entry-d_uyGuVH.js";
import { y as iconRefresh } from "./index-BWsIQ1EH.js";
import "./init-BauzXIH0.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
