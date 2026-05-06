import { r as registerInstance } from "./global-Dfa5QLOG.js";
import { d as dropdownController } from "./dropdown-controller-D6Wm2E-0-B2aMR2tH.js";
const InputPickerMixin = (Base) => {
  const InputPickerMixinCtor = class extends Base {
    constructor(hostRef) {
      super();
      registerInstance(this, hostRef);
    }
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
  InputPickerMixin as I
};
