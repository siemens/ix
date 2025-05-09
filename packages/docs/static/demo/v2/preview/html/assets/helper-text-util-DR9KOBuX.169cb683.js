import { h } from "./global.e92797ea.js";
import { p as iconError, q as iconWarning, r as iconInfo, s as iconSuccess } from "./index-CrTP-icT.451e0ae2.js";
function hasAnyText({ invalidText, warningText, infoText, validText, helperText }) {
  return invalidText || warningText || infoText || validText || helperText;
}
function renderHelperText({ isInvalid, invalidText, isWarning, warningText, isInfo, infoText, isValid, validText, helperText }) {
  if (isInvalid && invalidText !== void 0) {
    return h(
      "ix-typography",
      { textColor: "alarm", class: "bottom-text" },
      h("ix-icon", { class: "text-icon invalid", name: iconError, size: "16" }),
      invalidText
    );
  }
  if (isWarning && warningText !== void 0) {
    return h(
      "ix-typography",
      { textColor: "std", class: "bottom-text" },
      h("ix-icon", { class: "text-icon warning", name: iconWarning, size: "16" }),
      warningText
    );
  }
  if (isInfo && infoText !== void 0) {
    return h(
      "ix-typography",
      { textColor: "std", class: "bottom-text" },
      h("ix-icon", { class: "text-icon info", name: iconInfo, size: "16" }),
      infoText
    );
  }
  if (isValid && validText !== void 0) {
    return h(
      "ix-typography",
      { textColor: "std", class: "bottom-text" },
      h("ix-icon", { class: "text-icon valid", name: iconSuccess, size: "16" }),
      validText
    );
  }
  return helperText && h("ix-typography", { class: "bottom-text", textColor: "soft" }, helperText);
}
export {
  hasAnyText as h,
  renderHelperText as r
};
