import "./global-OgymIuXM.js";
import { a as addIcons } from "./ix-icon.entry-CAsvly3W.js";
import { g as iconRocket, F as iconGlobe, d as iconHome } from "./index-lQqpelqO.js";
import "./init-CX-nmMQk.js";
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
