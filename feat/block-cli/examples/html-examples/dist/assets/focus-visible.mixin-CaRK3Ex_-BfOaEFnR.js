import { r as registerInstance } from "./global-F68Qu5y3.js";
import { a as a11yBoolean } from "./a11y-C21npbUc-CU_Bg8RX.js";
const FocusVisibleMixin = (Base) => {
  const FocusVisibleMixinCtor = class extends Base {
    /**
     * @internal
     */
    ixFocusVisible = false;
    /**
     * When `true`, do not map keyboard focus visibility to `aria-selected` on the host.
     * Use when selection state must not mirror roving focus (e.g. `ix-select-item`).
     *
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
      if (this.disableAriaSelectHandling) {
        this.hostElement.removeAttribute("aria-selected");
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
