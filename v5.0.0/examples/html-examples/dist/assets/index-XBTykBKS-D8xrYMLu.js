function isIxInputFieldComponent(obj) {
  return obj && "getAssociatedFormElement" in obj && typeof obj.getAssociatedFormElement === "function" && "getNativeInputElement" in obj && typeof obj.getNativeInputElement === "function";
}
function isIxInputFieldWithPickerComponent(obj) {
  return isIxInputFieldComponent(obj) && "openPicker" in obj && typeof obj.openPicker === "function";
}
export {
  isIxInputFieldWithPickerComponent as a,
  isIxInputFieldComponent as i
};
