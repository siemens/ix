import "./global-BFmC_PbI.js";
import "./init-C5YnK6N4.js";
import "./index-CgUi6DzV-fQJuTF8s.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DCCkv1ZQ-DZnlOMEt.js";
const items = [
  { text: "Text 1", color: "--si-sys-color-background-accent" },
  { text: "Text 2", color: "--si-sys-color-background-accent" },
  { text: "Text 3", color: "--si-sys-color-background-danger" },
  { text: "Text 4", color: "--si-sys-color-background-success" }
];
const eventList = document.getElementById("event-list");
if (eventList) {
  for (const item of items) {
    const listItem = document.createElement("ix-event-list-item");
    listItem.setAttribute("variant", "filled");
    listItem.setAttribute("item-color", item.color);
    listItem.textContent = item.text;
    eventList.appendChild(listItem);
  }
}
