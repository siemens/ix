import "./global-DXu0UsM0.js";
import { a as addIcons } from "./ix-icon.entry-DMd4DiuI.js";
import { z as iconNetworkDevice, A as iconPlant, B as iconPiechart, d as iconHome, C as iconAlarmBell } from "./index-CtK4JYCE.js";
import "./init-TB4LlJu9.js";
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
