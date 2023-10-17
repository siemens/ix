import "./index.00fbfe17.js";
import "./index.48367bdf.js";
import { s as showMessage } from "./modal-68c6d3f6.b6b54fe0.js";
import "./init.2e9f9cc9.js";
import "./logical-filter-operator-92531263.182856a9.js";
import "./flip-tile-state-db31345f.fa15ac0c.js";
import "./upload-file-state-532a36d3.458c962a.js";
import "./animation-268dce50.df0d8da4.js";
import "./theme-switcher-9ede3823.43047733.js";
import "./typed-event-a230184a.ccfb44d2.js";
const btn = document.querySelector("ix-button");
btn.addEventListener("click", async () => {
  (await showMessage.success(
    "Example title",
    "message",
    "Save",
    "Cancel",
    "payload:save",
    "payload:cancel"
  )).once(console.log);
});
