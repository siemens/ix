import "./index.1d428522.js";
import "./init.f0139b70.js";
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
