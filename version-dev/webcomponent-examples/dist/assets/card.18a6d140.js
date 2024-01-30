import "./index.e8613f8b.js";
import "./init.0b92ef4e.js";
(async () => {
  await window.customElements.whenDefined("ix-card");
  const cardElement = document.querySelector("ix-card");
  cardElement.addEventListener("click", console.log);
})();
