import { r as registerInstance } from "./global-C_dy4gBz.js";
import { a as a11yBoolean } from "./a11y-B5k8YVR0-BOSd6BQK.js";
const FocusVisibleMixin = (Base) => {
  const FocusVisibleMixinCtor = class extends Base {
    /**
     * @internal
     */
    ixFocusVisible = false;
    /**
     * @internal
     */
    disableAriaSelectHandling = false;
    constructor(hostRef, ...args) {
      super(...args);
      registerInstance(this, hostRef);
    }
    componentDidLoad() {
      if (super.componentDidLoad) {
        super.componentDidLoad();
      }
    }
    $internal_checkAriaSelected(focusVisible) {
      if (!this.hostElement) {
        return;
      }
      this.hostElement.ariaSelected = a11yBoolean(focusVisible);
    }
  };
  return FocusVisibleMixinCtor;
};
export {
  FocusVisibleMixin as F
};
