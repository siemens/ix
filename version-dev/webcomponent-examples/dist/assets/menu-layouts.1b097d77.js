import "./index.e92ff327.js";
import "./init.562fb774.js";
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
