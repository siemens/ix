import "./global-BT4Hjefg.js";
import "./init-D6epeDxh.js";
import "./index-CgUi6DzV-DyezZTMJ.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DCCkv1ZQ-DZnlOMEt.js";
(async () => {
  const items = ["Text 1", "Text 2", "Text 3", "Text 4"];
  const selectedIndex = 1;
  await globalThis.customElements.whenDefined("ix-event-list-item");
  const eventList = document.getElementById("event-list");
  if (!eventList) return;
  let selectedItem = null;
  for (const [index, text] of items.entries()) {
    const listItem = document.createElement("ix-event-list-item");
    listItem.setAttribute(
      "item-color",
      "--si-sys-color-background-accent"
    );
    listItem.textContent = text;
    if (index === selectedIndex) {
      listItem.selected = true;
      selectedItem = listItem;
    }
    listItem.addEventListener("click", () => {
      if (selectedItem) {
        selectedItem.selected = false;
      }
      listItem.selected = true;
      selectedItem = listItem;
    });
    eventList.appendChild(listItem);
  }
})();
