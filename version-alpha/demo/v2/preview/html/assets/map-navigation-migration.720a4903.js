import "./global.aa474cf6.js";
import { a as addIcons } from "./icon-1f00a566.d85e1cdb.js";
import "./init.8fde940e.js";
import { f as iconBulb } from "./index.d8c24d78.js";
const mapNavigationMigration = "";
addIcons({
  iconBulb
});
const overlay = document.getElementById("overlay");
const buttonOpenOverlay = document.getElementById("btn-open-overlay");
let expanded = overlay.getAttribute("expanded") === "true";
overlay.addEventListener("expandedChanged", (e) => {
  expanded = e.detail.expanded;
});
buttonOpenOverlay.addEventListener("click", () => {
  expanded = !expanded;
  overlay.setAttribute("expanded", expanded);
});
