import "./global.78f61b49.js";
import "./index.1a6c2bf1.js";
import { s as showMessage } from "./modal-DUew4SCE.40a294ca.js";
import "./init.d5e03d48.js";
import "./logical-filter-operator-BH3f5fa3.777c0249.js";
import "./flip-tile-state-BQ6999e5.70579bb3.js";
import "./upload-file-state-BGzrnl_l.166f4809.js";
import "./animation-Dp15M30K.7b5f0f8a.js";
import "./theme-switcher-CA3k28fo.db6435f7.js";
import "./typed-event-BdCnOrqW.51d2f30a.js";
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
