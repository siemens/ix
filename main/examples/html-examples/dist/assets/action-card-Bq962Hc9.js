import "./global-D8caMIU9.js";
import { a as addIcons } from "./ix-icon.entry-BwiquMVG.js";
import { y as iconRefresh } from "./index-_MTu4qkX.js";
import "./init-C7WLpj5V.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
