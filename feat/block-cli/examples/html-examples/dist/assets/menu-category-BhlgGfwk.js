import "./global-Cn4dOqNA.js";
import { a as addIcons } from "./ix-icon.entry-Bz-5pS6W.js";
import { g as iconRocket, D as iconGlobe, d as iconHome } from "./index-CtK4JYCE.js";
import "./init-BUqBgp9y.js";
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
