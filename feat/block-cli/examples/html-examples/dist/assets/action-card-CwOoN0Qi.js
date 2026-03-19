import "./global-C_dy4gBz.js";
import { a as addIcons } from "./ix-icon.entry-BW6Xf6ZI.js";
import { y as iconRefresh } from "./index-BWsIQ1EH.js";
import "./init-BbGiJe2Q.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
