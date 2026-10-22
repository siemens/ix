import "./global-iK340jgP.js";
import { a as addIcons } from "./ix-icon.entry-E034oXXe.js";
import { y as iconRefresh } from "./index-lQqpelqO.js";
import "./init-CpXNrizY.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
