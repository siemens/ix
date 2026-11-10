import "./global-6cXsYRw9.js";
import { a as addIcons } from "./ix-icon.entry-CGiLGChb.js";
import { A as iconRefresh } from "./index-MpHERktc.js";
import "./init-RFUYR9Fx.js";
import "./index-CgUi6DzV-Bt-yb_YL.js";
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
