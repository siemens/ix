import "./global.aa474cf6.js";
import { a as addIcons } from "./icon-1f00a566.d85e1cdb.js";
import "./init.8fde940e.js";
import { u as iconHome, v as iconGlobe, g as iconRocket } from "./index.d8c24d78.js";
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
