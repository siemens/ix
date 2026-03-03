import { d as dropdownController } from "./dropdown-controller-D3K9vmFp-CeqyAJWH.js";
async function openDropdown(dropdownElementRef) {
  const dropdownElement = await dropdownElementRef.waitForCurrent();
  const id = dropdownElement.getAttribute("data-ix-dropdown");
  dropdownController.dismissAll();
  if (!id) {
    return;
  }
  const dropdown = dropdownController.getDropdownById(id);
  if (!dropdown) {
    return;
  }
  dropdownController.present(dropdown);
}
async function closeDropdown(dropdownElementRef) {
  const dropdownElement = await dropdownElementRef.waitForCurrent();
  const id = dropdownElement.getAttribute("data-ix-dropdown");
  if (!id) {
    return;
  }
  const dropdown = dropdownController.getDropdownById(id);
  if (!dropdown) {
    return;
  }
  dropdownController.dismiss(dropdown);
}
function handleIconClick(event, show, openDropdownFn, inputElementRef) {
  if (!show) {
    event.stopPropagation();
    event.preventDefault();
    openDropdownFn();
  }
  if (inputElementRef.current) {
    inputElementRef.current.focus();
  }
}
function createValidityState(isInputInvalid, required, value) {
  return {
    badInput: false,
    customError: false,
    patternMismatch: isInputInvalid,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valid: !isInputInvalid,
    valueMissing: !!required && !value
  };
}
export {
  createValidityState as a,
  closeDropdown as c,
  handleIconClick as h,
  openDropdown as o
};
