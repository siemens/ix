import "./global-CjySz0jA.js";
import "./init-EA7uvoWd.js";
import "./index-CgUi6DzV-B0SX_BHQ.js";
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
