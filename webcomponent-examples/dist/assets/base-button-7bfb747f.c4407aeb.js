const isPrimary = (variant) => {
  return variant.toUpperCase() === "Primary".toUpperCase();
};
const isSecondary = (variant) => {
  return variant.toUpperCase() === "Secondary".toUpperCase();
};
const getButtonClasses = (variant, outline, ghost, iconOnly = false, iconOval = false, selected, disabled) => {
  return {
    "btn": true,
    "btn-primary": isPrimary(variant) && !outline && !ghost,
    "btn-outline-primary": isPrimary(variant) && outline && !ghost,
    "btn-invisible-primary": isPrimary(variant) && !outline && ghost,
    "btn-secondary": isSecondary(variant) && !outline && !ghost,
    "btn-outline-secondary": isSecondary(variant) && outline && !ghost,
    "btn-invisible-secondary": isSecondary(variant) && !outline && ghost,
    "btn-icon": iconOnly,
    "btn-oval": iconOval,
    "selected": isSecondary(variant) && (outline || ghost) && selected,
    "disabled": disabled
  };
};
export {
  getButtonClasses as g
};
