import "./global-wi9VneMU.js";
import "./init-Bt8gb6Dd.js";
const items = [
  { text: "Text 1", color: "color-primary" },
  { text: "Text 2", color: "color-primary" },
  { text: "Text 3", color: "color-alarm" },
  { text: "Text 4", color: "color-success" }
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
