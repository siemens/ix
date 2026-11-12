import "./global-BzKBmmPj.js";
import { a as addIcons } from "./ix-icon.entry-CGiLGChb.js";
import { g as iconRocket, H as iconGlobe, d as iconHome } from "./index-MpHERktc.js";
import "./init-BicQImck.js";
import "./index-CgUi6DzV-BfsU3hSZ.js";
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
