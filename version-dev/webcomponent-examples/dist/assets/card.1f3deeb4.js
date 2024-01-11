import "./index.ed9c6cc1.js";
import "./init.49c39740.js";
(async () => {
  await window.customElements.whenDefined("ix-card");
  const cardElement = document.querySelector("ix-card");
  cardElement.addEventListener("click", console.log);
})();
