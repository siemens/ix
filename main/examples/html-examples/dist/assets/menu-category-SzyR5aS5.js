import "./global-LeD-4cgd.js";
import { a as addIcons } from "./ix-icon.entry-CGiLGChb.js";
import { g as iconRocket, H as iconGlobe, d as iconHome } from "./index-MpHERktc.js";
import "./init-KhgKEqK9.js";
import "./index-CgUi6DzV-Di_jL84z.js";
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
