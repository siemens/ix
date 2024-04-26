import "./index.918151cc.js";
import "./init.59b0ab29.js";
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
