import "./index.eca5b8a3.js";
import "./init.647ab6c1.js";
(async () => {
  await window.customElements.whenDefined("ix-menu");
  const menu = document.querySelector("ix-menu");
  menu.supportedModes = ["medium"];
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(
    (rb) => rb.addEventListener("change", (event) => {
      menu.supportedModes = [event.target.value];
    })
  );
})();
