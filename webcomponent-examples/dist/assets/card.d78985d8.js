import "./global.00f6d77e.js";
import "./init.48ede379.js";
const card = "";
(async () => {
  await window.customElements.whenDefined("ix-card");
  const cardElement = document.querySelector("ix-card");
  cardElement.addEventListener("click", console.log);
})();
