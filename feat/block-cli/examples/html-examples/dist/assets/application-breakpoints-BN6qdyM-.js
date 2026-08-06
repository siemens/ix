import "./global-DSse0xVy.js";
import "./init-De6GZVCf.js";
(async () => {
  const validBreakpoints = /* @__PURE__ */ new Set(["sm", "md", "lg"]);
  await globalThis.customElements.whenDefined("ix-application");
  await globalThis.customElements.whenDefined("ix-radio-group");
  const nav = document.querySelector("ix-application");
  nav.breakpoints = ["md"];
  const radioGroup = document.getElementById("radio-group");
  radioGroup.addEventListener("valueChange", ({ detail }) => {
    if (validBreakpoints.has(detail)) {
      nav.breakpoints = [detail];
    }
  });
})();
