import "./global.23f98c2e.js";
import { a as addIcons } from "./icon-1f00a566.0101a9c3.js";
import "./init.c292510a.js";
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
