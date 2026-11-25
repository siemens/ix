import "./global-at_Qxdd1.js";
import { a as addIcons } from "./ix-icon.entry-DLz_2po8.js";
import { g as iconRocket, H as iconGlobe, d as iconHome } from "./index-MpHERktc.js";
import "./init-CPXgC43W.js";
import "./index-CgUi6DzV-CSMVgu78.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DCCkv1ZQ-lVo38FW7.js";
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
