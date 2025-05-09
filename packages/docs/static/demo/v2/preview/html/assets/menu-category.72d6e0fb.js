import "./global.e92797ea.js";
import { a as addIcons } from "./icon-1ecd1404.598f6189.js";
import "./init.14c20cd8.js";
import { u as iconHome, v as iconGlobe, g as iconRocket } from "./index.4b950771.js";
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
