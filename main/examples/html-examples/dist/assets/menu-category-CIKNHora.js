import "./global-CFt3Lh3W.js";
import { a as addIcons } from "./ix-icon.entry-CGiLGChb.js";
import { g as iconRocket, F as iconGlobe, d as iconHome } from "./index-_MTu4qkX.js";
import "./init-0MVmv6RF.js";
import "./index-CgUi6DzV-D9U7VN9L.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DCCkv1ZQ-DZnlOMEt.js";
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
