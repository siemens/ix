import "./global-C1RmXIDt.js";
import { a as addIcons } from "./ix-icon.entry-DLz_2po8.js";
import { A as iconRefresh } from "./index-MpHERktc.js";
import "./init-BEYt0nO1.js";
import "./index-CgUi6DzV-CWpkMnfL.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DCCkv1ZQ-lVo38FW7.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
