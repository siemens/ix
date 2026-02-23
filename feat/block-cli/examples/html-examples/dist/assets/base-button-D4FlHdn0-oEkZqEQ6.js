import { h } from "./global-BlVZeLef.js";
const getButtonClasses = (variant, iconOnly = false, iconOval = false, selected, disabled) => {
  return {
    btn: true,
    [`btn-${variant}`]: true,
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
const handleOnClick = (e, props) => {
  if (props.disabled || props.loading) {
    e.preventDefault();
    e.stopPropagation();
    return;
  }
  if (props.onClick) {
    props.onClick(e);
  }
};
const isIconDecorative = (ariaAttributes, children) => {
  const hasTextContent = children && children.length > 0;
  const hasAriaLabel = !!(ariaAttributes["aria-label"] || ariaAttributes["aria-labelledby"]);
  return hasTextContent || hasAriaLabel;
};
const BaseButton = (props, children) => {
  var _a, _b, _c;
  const extraClasses = (_a = props.extraClasses) !== null && _a !== void 0 ? _a : {};
  const ariaAttributes = (_b = props.ariaAttributes) !== null && _b !== void 0 ? _b : {};
  if (!ariaAttributes["aria-disabled"] && props.disabled) {
    ariaAttributes["aria-disabled"] = "true";
  }
  const iconIsDecorative = isIconDecorative(ariaAttributes, children);
  const commonAttributes = Object.assign(Object.assign({}, ariaAttributes), { tabindex: props.disabled ? -1 : (_c = props.tabIndex) !== null && _c !== void 0 ? _c : 0, class: Object.assign(Object.assign({}, getButtonClasses(props.variant, props.iconOnly, props.iconOval, props.selected, props.disabled || props.loading)), extraClasses) });
  const buttonContent = [
    props.loading ? h("ix-spinner", { size: getSpinnerSize(props), hideTrack: true }) : null,
    props.icon && !props.loading ? h("ix-icon", { class: "icon", name: props.icon, size: props.iconSize, color: props.iconColor, "aria-hidden": iconIsDecorative ? "true" : void 0 }) : null,
    h("div", { class: {
      content: true,
      [`content-${props.alignment}`]: !!props.alignment
    } }, children),
    props.iconRight ? h("ix-icon", { class: "icon-right", name: props.iconRight, size: props.iconSize, color: props.iconColor, "aria-hidden": iconIsDecorative ? "true" : void 0 }) : null,
    props.afterContent ? props.afterContent : null
  ];
  if (props.href) {
    return h("a", Object.assign({}, commonAttributes, { href: props.disabled ? void 0 : props.href, target: props.target, role: "button", rel: props.rel, onClick: (e) => handleOnClick(e, props) }), buttonContent);
  }
  return h("button", Object.assign({}, commonAttributes, { onClick: (e) => handleOnClick(e, props), type: props.type }), buttonContent);
};
export {
  BaseButton as B,
  getButtonClasses as g
};
