import "./global-DUJ9DtiD.js";
import { a as addIcons } from "./ix-icon.entry-SZMEU8OL.js";
import { d as iconCapacity } from "./index-vnsUAEMY.js";
import "./init-DphxZyE4.js";
addIcons({
  iconCapacity
});
(async () => {
  await window.customElements.whenDefined("ix-card");
  const cardElement = document.querySelector("ix-card");
  cardElement.addEventListener("click", console.log);
})();
