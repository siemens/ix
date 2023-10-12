import "./index.1d89de2c.js";
import "./init.473fe710.js";
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
