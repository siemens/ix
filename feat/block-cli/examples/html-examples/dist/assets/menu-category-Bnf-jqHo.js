import "./global-Ba1Wm6ph.js";
import { a as addIcons } from "./ix-icon.entry-Vy75WqqV.js";
import { z as iconRocket, l as iconGlobe, n as iconHome } from "./index-vnsUAEMY.js";
import "./init-Ds7NGRa2.js";
addIcons({
  iconHome,
  iconGlobe,
  iconRocket
});
(async () => {
  await window.customElements.whenDefined("ix-application");
  const app = document.querySelector("ix-application");
  if (app) {
    app.breakpoints = ["md"];
  }
})();
