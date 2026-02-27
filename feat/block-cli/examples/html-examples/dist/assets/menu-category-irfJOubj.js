import "./global-DXu0UsM0.js";
import { a as addIcons } from "./ix-icon.entry-DMd4DiuI.js";
import { g as iconRocket, D as iconGlobe, d as iconHome } from "./index-CtK4JYCE.js";
import "./init-TB4LlJu9.js";
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
