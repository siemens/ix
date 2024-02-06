import "./index.691fb79b.js";
import "./init.f44ed0b3.js";
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
