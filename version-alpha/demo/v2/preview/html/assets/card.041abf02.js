import "./global.aa474cf6.js";
import { a as addIcons } from "./icon-1f00a566.d85e1cdb.js";
import "./init.8fde940e.js";
import { h as iconCapacity } from "./index.d8c24d78.js";
const card = "";
addIcons({
  iconCapacity
});
(async () => {
  await window.customElements.whenDefined("ix-card");
  const cardElement = document.querySelector("ix-card");
  cardElement.addEventListener("click", console.log);
})();
