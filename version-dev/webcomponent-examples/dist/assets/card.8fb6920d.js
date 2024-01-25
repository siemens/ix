import "./index.b5e9a656.js";
import "./init.bceb13b0.js";
(async () => {
  await window.customElements.whenDefined("ix-card");
  const cardElement = document.querySelector("ix-card");
  cardElement.addEventListener("click", console.log);
})();
