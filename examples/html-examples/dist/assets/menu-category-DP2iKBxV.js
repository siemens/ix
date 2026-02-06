import "./global-wi9VneMU.js";
import { a as addIcons } from "./ix-icon.entry-Dt6CQqjX.js";
import { g as iconRocket, D as iconGlobe, d as iconHome } from "./index-CtK4JYCE.js";
import "./init-Bt8gb6Dd.js";
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
