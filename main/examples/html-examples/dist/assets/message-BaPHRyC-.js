import "./global-CU4RCWGK.js";
import { a as showMessage } from "./index-CbvK1W8i.js";
import "./init-DmY6AD04.js";
import "./modal-DaGSr1j4-BA-0pEIr.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-BqeSHO6C-CazTJry4.js";
import "./index-BeX6RWvV-CXzUIwMU.js";
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
