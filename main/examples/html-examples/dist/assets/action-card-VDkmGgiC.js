import "./global-D1OZtFWM.js";
import { a as addIcons } from "./ix-icon.entry-CfgUIRPK.js";
import { y as iconRefresh } from "./index-lQqpelqO.js";
import "./init-CScOV8WW.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
