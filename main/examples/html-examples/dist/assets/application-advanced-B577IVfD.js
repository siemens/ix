import "./global-BFmC_PbI.js";
import { a as addIcons } from "./ix-icon.entry-CGiLGChb.js";
import { B as iconNetworkDevice, C as iconPlant, D as iconPiechart, d as iconHome, E as iconAlarmBell } from "./index-MpHERktc.js";
import "./init-C5YnK6N4.js";
import "./index-CgUi6DzV-fQJuTF8s.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DCCkv1ZQ-DZnlOMEt.js";
addIcons({
  iconAlarmBell,
  iconHome,
  iconPiechart,
  iconPlant,
  iconNetworkDevice
});
(async function() {
  await window.customElements.whenDefined("ix-menu");
  const menuItems = document.querySelectorAll("ix-menu-item");
  function registerClickListener(itemElement) {
    itemElement.addEventListener("click", () => {
      for (const item of menuItems) {
        item.removeAttribute("active");
      }
      itemElement.setAttribute("active", "");
      document.getElementById("contentHeaderId").setAttribute(
        "header-title",
        `Example ${itemElement.innerText.toLowerCase()} content`
      );
    });
  }
  for (const element of menuItems) {
    registerClickListener(element);
  }
})();
