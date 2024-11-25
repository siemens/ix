import { h } from "./global.2bfd6008.js";
import { a as iconError, b as iconWarning, c as iconInfo, d as iconSuccess } from "./index-ad2af369.9c13b45b.js";
function hasAnyText({ invalidText, warningText, infoText, validText, helperText }) {
  return invalidText || warningText || infoText || validText || helperText;
}
function renderHelperText({ isInvalid, invalidText, isWarning, warningText, isInfo, infoText, isValid, validText, helperText }) {
  if (isInvalid && invalidText !== void 0) {
    return h(
      "ix-typography",
      { color: "alarm", class: "bottom-text" },
      h("ix-icon", { class: "text-icon invalid", name: iconError, size: "16" }),
      invalidText
    );
  }
  if (isWarning && warningText !== void 0) {
    return h(
      "ix-typography",
      { color: "std", class: "bottom-text" },
      h("ix-icon", { class: "text-icon warning", name: iconWarning, size: "16" }),
      warningText
    );
  }
  if (isInfo && infoText !== void 0) {
    return h(
      "ix-typography",
      { color: "std", class: "bottom-text" },
      h("ix-icon", { class: "text-icon info", name: iconInfo, size: "16" }),
      infoText
    );
  }
  if (isValid && validText !== void 0) {
    return h(
      "ix-typography",
      { color: "std", class: "bottom-text" },
      h("ix-icon", { class: "text-icon valid", name: iconSuccess, size: "16" }),
      validText
    );
  }
  return helperText && h("ix-typography", { class: "bottom-text", color: "soft" }, helperText);
}
export {
  hasAnyText as h,
  renderHelperText as r
};
