import { i as isHttpUrl, a as isSvgDataUrl } from "./condition-checks-B3dDrNFs-BiqvZF_l.js";
const a11yBoolean = (value) => value ? "true" : "false";
const kebabCaseToUpperCaseSentence = (kebabCase) => {
  const withoutFilledSuffix = kebabCase.replace("-filled", "");
  const words = withoutFilledSuffix.split("-");
  const sentence = words.map((word) => {
    const trimWord = word.trim();
    const digitLessWord = trimWord.replace(/\d+/g, "");
    if (digitLessWord.length === 0) {
      return trimWord;
    }
    return digitLessWord;
  }).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  return sentence;
};
const SVG_DESC_OPEN = "<desc>";
const SVG_DESC_CLOSE = "</desc>";
const getSvgDescription = (svg) => {
  const end = svg.lastIndexOf(SVG_DESC_CLOSE);
  if (end < 0) {
    return void 0;
  }
  const start = svg.lastIndexOf(SVG_DESC_OPEN, end - SVG_DESC_OPEN.length);
  if (start < 0) {
    return void 0;
  }
  return svg.slice(start + SVG_DESC_OPEN.length, end);
};
const getFallbackLabelFromIconName = (iconName) => {
  if (!iconName) {
    return "Unknown";
  }
  if (isHttpUrl(iconName)) {
    return "Unknown";
  }
  if (isSvgDataUrl(iconName)) {
    const fallbackName = getSvgDescription(iconName);
    if (fallbackName !== void 0) {
      return kebabCaseToUpperCaseSentence(fallbackName);
    }
    return "Unknown";
  }
  const label = kebabCaseToUpperCaseSentence(iconName);
  if (label.length === 0) {
    return "Unknown";
  }
  return label;
};
const a11yHostAttributes = (hostElement, ignoreAttributes = []) => {
  const attributeObject = {};
  a11yAttributes.forEach((attr) => {
    if (hostElement.hasAttribute(attr)) {
      const value = hostElement.getAttribute(attr);
      if (value !== null && !ignoreAttributes.includes(attr)) {
        attributeObject[attr] = hostElement.getAttribute(attr) ?? "";
        hostElement.removeAttribute(attr);
      }
    }
  });
  return attributeObject;
};
const a11yAttributes = [
  "role",
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-braillelabel",
  "aria-brailleroledescription",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colindextext",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-description",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowindextext",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext"
];
const forceTabIndex = (element, tabIndex) => {
  if (element) {
    element.tabIndex = tabIndex;
  }
};
export {
  a11yBoolean as a,
  a11yAttributes as b,
  a11yHostAttributes as c,
  forceTabIndex as f,
  getFallbackLabelFromIconName as g
};
