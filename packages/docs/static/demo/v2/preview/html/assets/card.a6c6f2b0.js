import "./global.e92797ea.js";
import { a as addIcons } from "./icon-1ecd1404.598f6189.js";
import "./init.14c20cd8.js";
import { h as iconCapacity } from "./index.4b950771.js";
const card = "";
addIcons({
  iconCapacity
});
(async () => {
  await window.customElements.whenDefined("ix-card");
  const cardElement = document.querySelector("ix-card");
  cardElement.addEventListener("click", console.log);
})();
