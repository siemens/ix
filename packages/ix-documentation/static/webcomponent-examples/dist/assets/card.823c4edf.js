import "./global.7dd975c7.js";
import "./init.918cefbc.js";
const card = "";
(async () => {
  await window.customElements.whenDefined("ix-card");
  const cardElement = document.querySelector("ix-card");
  cardElement.addEventListener("click", console.log);
})();
