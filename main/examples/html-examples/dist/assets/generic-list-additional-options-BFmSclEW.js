import "./global-pZT9R4JO.js";
import { a as addIcons } from "./ix-icon.entry-CGiLGChb.js";
import { j as iconTrashcan, p as iconEditDocument, q as iconProject } from "./index-MpHERktc.js";
import "./init-DH_6qL5T.js";
import "./index-CgUi6DzV-C15cBwMn.js";
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
