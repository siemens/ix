import "./index.2b5e1098.js";
import "./init.5f6f11d5.js";
(async () => {
  await window.customElements.whenDefined("ix-card");
  const cardElement = document.querySelector("ix-card");
  cardElement.addEventListener("click", console.log);
})();
