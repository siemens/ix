import "./global-Dfa5QLOG.js";
import { a as addIcons } from "./ix-icon.entry-Tb6zX7EO.js";
import { y as iconRefresh } from "./index-BWsIQ1EH.js";
import "./init-BUCeZmFF.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
