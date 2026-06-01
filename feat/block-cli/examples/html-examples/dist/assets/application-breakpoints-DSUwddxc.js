import "./global-Ba1Wm6ph.js";
import "./init-Ds7NGRa2.js";
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
