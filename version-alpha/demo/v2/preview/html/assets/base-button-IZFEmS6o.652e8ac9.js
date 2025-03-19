import { h } from "./global.aa474cf6.js";
const isDanger = (variant) => {
  return variant.toUpperCase() === "Danger".toUpperCase();
};
const isPrimary = (variant) => {
  return variant.toUpperCase() === "Primary".toUpperCase();
};
const isSecondary = (variant) => {
  return variant.toUpperCase() === "Secondary".toUpperCase();
};
const getButtonClasses = (variant, outline, ghost, iconOnly = false, iconOval = false, selected, disabled) => {
  return {
    btn: true,
    "btn-danger": isDanger(variant) && !outline && !ghost,
    "btn-outline-danger": isDanger(variant) && outline && !ghost,
    "btn-invisible-danger": isDanger(variant) && !outline && ghost,
    "btn-primary": isPrimary(variant) && !outline && !ghost,
    "btn-outline-primary": isPrimary(variant) && outline && !ghost,
    "btn-invisible-primary": isPrimary(variant) && !outline && ghost,
    "btn-secondary": isSecondary(variant) && !outline && !ghost,
    "btn-outline-secondary": isSecondary(variant) && outline && !ghost,
    "btn-invisible-secondary": isSecondary(variant) && !outline && ghost,
    "btn-icon": iconOnly,
    "btn-oval": iconOval,
    selected,
    disabled
  };
};
const getSpinnerSize = (btnProps) => {
  if (!btnProps.icon) {
    return "small";
  }
  switch (btnProps.iconSize) {
    case "12":
      return "xx-small";
    case "16":
      return "x-small";
    default:
      return "small";
  }
};
const BaseButton = (props, children) => {
  var _a, _b, _c;
  const extraClasses = (_a = props.extraClasses) !== null && _a !== void 0 ? _a : {};
  const ariaAttributes = (_b = props.ariaAttributes) !== null && _b !== void 0 ? _b : {};
  if (!ariaAttributes["aria-disabled"] && props.disabled) {
    ariaAttributes["aria-disabled"] = "true";
  }
  return h(
    "button",
    Object.assign({}, ariaAttributes, { onClick: (e) => props.onClick ? props.onClick(e) : void 0, tabindex: props.disabled ? -1 : (_c = props.tabIndex) !== null && _c !== void 0 ? _c : 0, type: props.type, class: Object.assign(Object.assign({}, getButtonClasses(props.variant, props.outline, props.ghost, props.iconOnly, props.iconOval, props.selected, props.disabled || props.loading)), extraClasses) }),
    props.loading ? h("ix-spinner", { size: getSpinnerSize(props), hideTrack: true }) : null,
    props.icon && !props.loading ? h("ix-icon", { class: "icon", name: props.icon, size: props.iconSize, color: props.iconColor }) : null,
    h("div", { class: {
      content: true,
      [`content-${props.alignment}`]: !!props.alignment
    } }, children),
    props.afterContent ? props.afterContent : null
  );
};
export {
  BaseButton as B,
  getButtonClasses as g
};
