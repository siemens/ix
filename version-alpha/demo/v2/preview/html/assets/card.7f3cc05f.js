import "./global.23f98c2e.js";
import { a as addIcons } from "./icon-1f00a566.0101a9c3.js";
import "./init.c292510a.js";
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
