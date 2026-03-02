import "./global-CfZV-boF.js";
import { a as addIcons } from "./ix-icon.entry-CB7Zf5hS.js";
import { y as iconRefresh } from "./index-BWsIQ1EH.js";
import "./init-CqwyY_D7.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
