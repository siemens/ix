import "./global-B_YQYPOl.js";
import { a as addIcons } from "./ix-icon.entry-CGiLGChb.js";
import { A as iconRefresh } from "./index-MpHERktc.js";
import "./init-deLc5Nz8.js";
import "./index-CgUi6DzV-DZ2FK0OH.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DCCkv1ZQ-DZnlOMEt.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
