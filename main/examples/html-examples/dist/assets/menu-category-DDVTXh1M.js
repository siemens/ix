import "./global-B9zaqCXZ.js";
import { a as addIcons } from "./ix-icon.entry-C7zALPkJ.js";
import { g as iconRocket, F as iconGlobe, d as iconHome } from "./index-lQqpelqO.js";
import "./init-C4tU1g7Y.js";
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
