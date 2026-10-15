import "./global-Dj1TfEHu.js";
import { a as addIcons } from "./ix-icon.entry-JsNIddEL.js";
import { y as iconRefresh } from "./index-lQqpelqO.js";
import "./init-vUl47gmN.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
