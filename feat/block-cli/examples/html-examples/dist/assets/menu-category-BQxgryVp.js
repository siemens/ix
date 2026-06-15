import "./global-B8nXsUf-.js";
import { a as addIcons } from "./ix-icon.entry-iguB3m6A.js";
import { z as iconRocket, l as iconGlobe, n as iconHome } from "./index-vnsUAEMY.js";
import "./init-DAI7i65D.js";
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
