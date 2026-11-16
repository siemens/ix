import "./global-pZT9R4JO.js";
import "./init-DH_6qL5T.js";
import "./index-CgUi6DzV-C15cBwMn.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DCCkv1ZQ-DZnlOMEt.js";
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
