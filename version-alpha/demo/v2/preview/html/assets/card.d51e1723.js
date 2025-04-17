import "./global.1f5cc68d.js";
import { a as addIcons } from "./icon-1f00a566.21c66130.js";
import "./init.d2f0b7c3.js";
import { h as iconCapacity } from "./index.8ef77ba3.js";
const card = "";
addIcons({
  iconCapacity
});
(async () => {
  await window.customElements.whenDefined("ix-card");
  const cardElement = document.querySelector("ix-card");
  cardElement.addEventListener("click", console.log);
})();
