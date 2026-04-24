import "./global-B1t25MFd.js";
import { a as addIcons } from "./ix-icon.entry-CHGGo5Rf.js";
import { z as iconNetworkDevice, A as iconPlant, B as iconPiechart, d as iconHome, C as iconAlarmBell } from "./index-BWsIQ1EH.js";
import "./init-D7MT-x0x.js";
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
