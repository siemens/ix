import "./global-D3pEBlWT.js";
import { a as addIcons } from "./ix-icon.entry-Cga5vDaY.js";
import { g as iconRocket, F as iconGlobe, d as iconHome } from "./index-lQqpelqO.js";
import "./init-CFTWau4M.js";
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
