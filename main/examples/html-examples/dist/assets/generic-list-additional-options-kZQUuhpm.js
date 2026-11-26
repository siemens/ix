import "./global-J3MXEG4q.js";
import { a as addIcons } from "./ix-icon.entry-DLz_2po8.js";
import { j as iconTrashcan, p as iconEditDocument, q as iconProject } from "./index-MpHERktc.js";
import "./init-0SuWNs5o.js";
import "./index-CgUi6DzV-DmPVhzFD.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DCCkv1ZQ-lVo38FW7.js";
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
