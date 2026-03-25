import "./global-Cr1KQvOo.js";
import { a as addIcons } from "./ix-icon.entry-B1yyMmqe.js";
import { y as iconRefresh } from "./index-BWsIQ1EH.js";
import "./init-DBI3EHNp.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
