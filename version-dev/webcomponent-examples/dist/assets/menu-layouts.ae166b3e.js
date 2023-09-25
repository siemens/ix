import "./index.f81d923f.js";
import "./init.fc28bbad.js";
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
