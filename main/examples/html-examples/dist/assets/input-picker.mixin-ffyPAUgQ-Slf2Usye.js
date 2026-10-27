import { d as dropdownController } from "./dropdown-controller-BoOU7EDq-2DXchfIX.js";
import { i as isValidationSuppressedByForm } from "./validation-DDxO7z7S-ByYNKBsZ.js";
import { r as registerInstance } from "./global-DtRSe4QO.js";
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
function shouldShowInputInvalid(isInputInvalid, formInternals) {
  return isInputInvalid && !isValidationSuppressedByForm(formInternals.form);
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
function createPickerInputBlur(options) {
  let isDeferred = false;
  return {
    onFocus: () => {
      isDeferred = false;
    },
    onBlur: () => {
      if (options.isPickerOpen()) {
        isDeferred = true;
        return;
      }
      options.onLeave();
    },
    onPickerClosed: () => {
      if (isDeferred) {
        isDeferred = false;
        options.onLeave();
      }
    }
  };
}
const InputPickerMixin = (Base) => {
  const InputPickerMixinCtor = class extends Base {
    constructor(hostRef) {
      super();
      registerInstance(this, hostRef);
    }
    /** @internal */
    async openPicker() {
      const pickerRef = this.getPickerElement();
      const pickerElement = await pickerRef?.waitForCurrent();
      if (!pickerElement) {
        return;
      }
      dropdownController.dismissAll();
      requestAnimationFrame(() => {
        pickerElement.show = true;
      });
    }
  };
  return InputPickerMixinCtor;
};
export {
  InputPickerMixin as I,
  closeDropdown as a,
  createValidityState as b,
  createPickerInputBlur as c,
  handleIconClick as h,
  openDropdown as o,
  shouldShowInputInvalid as s
};
