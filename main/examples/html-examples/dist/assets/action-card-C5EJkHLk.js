import "./global-J3MXEG4q.js";
import { a as addIcons } from "./ix-icon.entry-DLz_2po8.js";
import { A as iconRefresh } from "./index-MpHERktc.js";
import "./init-0SuWNs5o.js";
import "./index-CgUi6DzV-DmPVhzFD.js";
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
