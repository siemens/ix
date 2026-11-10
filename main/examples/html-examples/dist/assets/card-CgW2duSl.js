import "./global-LeD-4cgd.js";
import { a as addIcons } from "./ix-icon.entry-CGiLGChb.js";
import { U as iconCapacity } from "./index-MpHERktc.js";
import "./init-KhgKEqK9.js";
import "./index-CgUi6DzV-Di_jL84z.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DCCkv1ZQ-DZnlOMEt.js";
addIcons({
  iconCapacity
});
(async () => {
  await window.customElements.whenDefined("ix-card");
  const cardElement = document.querySelector("ix-card");
  cardElement.addEventListener("click", console.log);
})();
