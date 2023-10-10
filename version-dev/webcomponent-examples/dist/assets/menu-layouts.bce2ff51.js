import "./index.375e3289.js";
import "./init.866e7df0.js";
(async () => {
  await window.customElements.whenDefined("ix-basic-navigation");
  const nav = document.querySelector("ix-basic-navigation");
  nav.breakpoints = ["md"];
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(
    (rb) => rb.addEventListener("change", (event) => {
      nav.breakpoints = [event.target.value];
    })
  );
})();
