import "./global-J3MXEG4q.js";
import "./init-0SuWNs5o.js";
import "./index-CgUi6DzV-DmPVhzFD.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DCCkv1ZQ-lVo38FW7.js";
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
