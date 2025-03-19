import "./global.aa474cf6.js";
import "./init.8fde940e.js";
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
