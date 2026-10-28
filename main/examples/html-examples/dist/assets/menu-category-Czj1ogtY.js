import "./global-EB1NlL0D.js";
import { a as addIcons } from "./ix-icon.entry-CussUVvU.js";
import { g as iconRocket, F as iconGlobe, d as iconHome } from "./index-_MTu4qkX.js";
import "./init-BUp9w8W6.js";
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
