import "./index.45e13eee.js";
import "./init.703c61f1.js";
(async () => {
  await window.customElements.whenDefined("ix-application");
  const nav = document.querySelector("ix-application");
  nav.breakpoints = ["md"];
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(
    (rb) => rb.addEventListener("change", (event) => {
      nav.breakpoints = [event.target.value];
    })
  );
})();
