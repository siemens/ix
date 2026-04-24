import "./global-B1t25MFd.js";
import { a as addIcons } from "./ix-icon.entry-CHGGo5Rf.js";
import { g as iconRocket, D as iconGlobe, d as iconHome } from "./index-BWsIQ1EH.js";
import "./init-D7MT-x0x.js";
addIcons({
  iconHome,
  iconGlobe,
  iconRocket
});
(async () => {
  await window.customElements.whenDefined("ix-menu");
  const menu = document.querySelector("ix-menu");
  menu.breakpoints = ["medium"];
})();
