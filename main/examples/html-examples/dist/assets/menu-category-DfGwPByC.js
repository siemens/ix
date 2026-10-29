import "./global-DV2yP7rM.js";
import { a as addIcons } from "./ix-icon.entry-BEBIJU1a.js";
import { g as iconRocket, F as iconGlobe, d as iconHome } from "./index-_MTu4qkX.js";
import "./init-DYci_Ip3.js";
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
