import "./global-BlVZeLef.js";
import { a as addIcons } from "./ix-icon.entry-D_OWXmMu.js";
import { g as iconRocket, D as iconGlobe, d as iconHome } from "./index-CtK4JYCE.js";
import "./init-DI8ZEhG0.js";
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
