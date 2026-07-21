import "./global-CRrZCTD3.js";
import { a as addIcons } from "./ix-icon.entry-DI27yKmA.js";
import { g as iconRocket, D as iconGlobe, d as iconHome } from "./index-BWsIQ1EH.js";
import "./init-mK86bvOr.js";
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
