import "./global-n2K_x-mG.js";
import { a as addIcons } from "./ix-icon.entry-CGiLGChb.js";
import { A as iconRefresh } from "./index-MpHERktc.js";
import "./init-CS3svfrS.js";
import "./index-CgUi6DzV-DeDFYQ_b.js";
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
