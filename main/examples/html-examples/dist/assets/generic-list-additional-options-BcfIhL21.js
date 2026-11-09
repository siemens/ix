import "./global-B_ZDmngA.js";
import { a as addIcons } from "./ix-icon.entry-CGiLGChb.js";
import { j as iconTrashcan, p as iconEditDocument, q as iconProject } from "./index-MpHERktc.js";
import "./init-AGifA223.js";
import "./index-CgUi6DzV-DZ2FK0OH.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DCCkv1ZQ-DZnlOMEt.js";
addIcons({
  iconProject,
  iconEditDocument,
  iconTrashcan
});
document.querySelectorAll("ix-list-item").forEach((item) => {
  item.addEventListener("selectedChange", (event) => {
    item.selected = event.detail;
  });
});
