import "./global-DX2OdaCL.js";
import { a as addIcons } from "./ix-icon.entry-_0Fdvtev.js";
import { z as iconRocket, l as iconGlobe, n as iconHome } from "./index-vnsUAEMY.js";
import "./init-DRfhtWcZ.js";
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
