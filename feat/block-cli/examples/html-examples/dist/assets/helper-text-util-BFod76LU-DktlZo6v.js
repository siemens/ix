import { h } from "./global-DUJ9DtiD.js";
import { A as iconError, S as iconWarning, E as iconInfo, Q as iconSuccess } from "./index-Cl7fhG1I-C77BCFLW.js";
import { a as a11yBoolean } from "./a11y-C21npbUc-CU_Bg8RX.js";
function hasAnyText({ invalidText, isInvalid, warningText, isWarning, infoText, isInfo, validText, isValid, helperText }) {
  return !!(isInvalid && invalidText?.trim() || isWarning && warningText?.trim() || isInfo && infoText?.trim() || isValid && validText?.trim() || helperText?.trim());
}
function resolveTextFromValidationState(props) {
  if (!hasAnyText(props))
    return "";
  if (props.isInvalid && props.invalidText && props.invalidText.trim() !== "") {
    return props.invalidText;
  }
  if (props.isWarning && props.warningText && props.warningText.trim() !== "") {
    return props.warningText;
  }
  if (props.isInfo && props.infoText && props.infoText.trim() !== "") {
    return props.infoText;
  }
  if (props.isValid && props.validText && props.validText.trim() !== "") {
    return props.validText;
  }
  return props.helperText || "";
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
  hasAnyText as h,
  resolveTextFromValidationState as r
};
