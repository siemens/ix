import "./global.78f61b49.js";
import { a as addIcons } from "./icon-1f00a566.c138dee3.js";
import "./init.d5e03d48.js";
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
