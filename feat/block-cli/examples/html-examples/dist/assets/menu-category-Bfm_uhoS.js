import "./global-DUJ9DtiD.js";
import { a as addIcons } from "./ix-icon.entry-SZMEU8OL.js";
import { z as iconRocket, l as iconGlobe, n as iconHome } from "./index-vnsUAEMY.js";
import "./init-DphxZyE4.js";
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
