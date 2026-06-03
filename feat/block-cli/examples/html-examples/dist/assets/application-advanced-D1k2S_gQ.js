import "./global-DUJ9DtiD.js";
import { a as addIcons } from "./ix-icon.entry-SZMEU8OL.js";
import { r as iconNetworkDevice, w as iconPlant, v as iconPiechart, n as iconHome, a as iconAlarmBell } from "./index-vnsUAEMY.js";
import "./init-DphxZyE4.js";
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
