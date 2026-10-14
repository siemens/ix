import "./global-B9zaqCXZ.js";
import { a as addIcons } from "./ix-icon.entry-C7zALPkJ.js";
import { Q as iconCapacity } from "./index-lQqpelqO.js";
import "./init-C4tU1g7Y.js";
addIcons({
  iconCapacity
});
(async () => {
  await window.customElements.whenDefined("ix-card");
  const cardElement = document.querySelector("ix-card");
  cardElement.addEventListener("click", console.log);
})();
