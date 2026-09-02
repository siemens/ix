import "./global-Do6maBom.js";
import { a as addIcons } from "./ix-icon.entry-BdQBfvO9.js";
import { g as iconRocket, F as iconGlobe, d as iconHome } from "./index-lQqpelqO.js";
import "./init-BB6hGSJy.js";
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
