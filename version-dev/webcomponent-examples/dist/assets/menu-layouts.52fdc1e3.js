import "./index.f1cc59d7.js";
import "./init.ec18ea20.js";
(async () => {
  await window.customElements.whenDefined("ix-menu");
  const menu = document.querySelector("ix-menu");
  menu.breakpoints = ["medium"];
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(
    (rb) => rb.addEventListener("change", (event) => {
      menu.breakpoints = [event.target.value];
    })
  );
})();
