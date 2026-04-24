import "./global-B1t25MFd.js";
import { a as addIcons } from "./ix-icon.entry-CHGGo5Rf.js";
import { y as iconRefresh } from "./index-BWsIQ1EH.js";
import "./init-D7MT-x0x.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
