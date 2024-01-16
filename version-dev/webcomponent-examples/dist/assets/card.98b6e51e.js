import "./index.ff5c8c71.js";
import "./init.eef3dd69.js";
(async () => {
  await window.customElements.whenDefined("ix-card");
  const cardElement = document.querySelector("ix-card");
  cardElement.addEventListener("click", console.log);
})();
