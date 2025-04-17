import "./global.1f5cc68d.js";
import { a as addIcons } from "./icon-1f00a566.21c66130.js";
import "./init.d2f0b7c3.js";
import { u as iconHome, v as iconGlobe, g as iconRocket } from "./index.8ef77ba3.js";
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
