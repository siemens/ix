import "./global.78f61b49.js";
import { a as addIcons } from "./icon-1f00a566.c138dee3.js";
import "./init.d5e03d48.js";
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
