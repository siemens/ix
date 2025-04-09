import "./global.bff64ac3.js";
import { a as addIcons } from "./icon-1f00a566.e1293380.js";
import "./init.d54797f5.js";
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
