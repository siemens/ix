import "./global-pZT9R4JO.js";
import { a as addIcons } from "./ix-icon.entry-CGiLGChb.js";
import { g as iconRocket, H as iconGlobe, d as iconHome } from "./index-MpHERktc.js";
import "./init-DH_6qL5T.js";
import "./index-CgUi6DzV-C15cBwMn.js";
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
