import "./global-CqiPKlnE.js";
import { a as addIcons } from "./ix-icon.entry-DLzNQODA.js";
import { g as iconRocket, F as iconGlobe, d as iconHome } from "./index-_MTu4qkX.js";
import "./init-Bm1z0zqs.js";
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
