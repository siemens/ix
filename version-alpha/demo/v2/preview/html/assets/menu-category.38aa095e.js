import "./global.bff64ac3.js";
import { a as addIcons } from "./icon-1f00a566.e1293380.js";
import "./init.d54797f5.js";
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
