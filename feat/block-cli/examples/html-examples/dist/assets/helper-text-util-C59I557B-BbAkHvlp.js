import { h } from "./global-Cn4dOqNA.js";
import { b as iconError, a as iconWarning, i as iconInfo, c as iconSuccess } from "./index-8HpPmDK_-DinFJk0z.js";
import { a as a11yBoolean } from "./a11y-DAzBNVe7-CO1Uj69l.js";
function hasAnyText({ invalidText, isInvalid, warningText, isWarning, infoText, isInfo, validText, isValid, helperText }) {
  return !!(isInvalid && (invalidText === null || invalidText === void 0 ? void 0 : invalidText.trim()) || isWarning && (warningText === null || warningText === void 0 ? void 0 : warningText.trim()) || isInfo && (infoText === null || infoText === void 0 ? void 0 : infoText.trim()) || isValid && (validText === null || validText === void 0 ? void 0 : validText.trim()) || (helperText === null || helperText === void 0 ? void 0 : helperText.trim()));
}
function HelperText$1(props) {
  if (!hasAnyText(props))
    return null;
  if (props.isInvalid && props.invalidText && props.invalidText.trim() !== "") {
    return h("ix-typography", { textColor: "alarm", class: "bottom-text" }, h("ix-icon", { "aria-hidden": a11yBoolean(!!props.invalidText), class: "text-icon invalid", name: iconError, size: "16" }), props.invalidText);
  }
  if (props.isWarning && props.warningText && props.warningText.trim() !== "") {
    return h("ix-typography", { textColor: "std", class: "bottom-text" }, h("ix-icon", { "aria-hidden": a11yBoolean(!!props.warningText), class: "text-icon warning", name: iconWarning, size: "16" }), props.warningText);
  }
  if (props.isInfo && props.infoText && props.infoText.trim() !== "") {
    return h("ix-typography", { textColor: "std", class: "bottom-text" }, h("ix-icon", { "aria-hidden": a11yBoolean(!!props.infoText), class: "text-icon info", name: iconInfo, size: "16" }), props.infoText);
  }
  if (props.isValid && props.validText && props.validText.trim() !== "") {
    return h("ix-typography", { textColor: "std", class: "bottom-text" }, h("ix-icon", { "aria-hidden": a11yBoolean(!!props.validText), class: "text-icon valid", name: iconSuccess, size: "16" }), props.validText);
  }
  return props.helperText && props.helperText.trim() !== "" && h("ix-typography", { class: "bottom-text", textColor: "soft" }, props.helperText);
}
export {
  HelperText$1 as H,
  hasAnyText as h
};
