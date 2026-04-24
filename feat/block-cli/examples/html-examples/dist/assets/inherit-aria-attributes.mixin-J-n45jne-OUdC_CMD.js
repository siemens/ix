import { r as registerInstance } from "./global-B1t25MFd.js";
import { b as a11yHostAttributes } from "./a11y-B5k8YVR0-BOSd6BQK.js";
const InheritAriaAttributesMixin = (Base) => {
  const InheritAriaAttributesMixinCtor = class extends Base {
    inheritAriaAttributes = {};
    constructor(hostRef, ...args) {
      super(...args);
      registerInstance(this, hostRef);
    }
    getIgnoredAriaAttributes() {
      return [];
    }
    componentWillLoad() {
      this.inheritAriaAttributes = a11yHostAttributes(this.hostElement, this.getIgnoredAriaAttributes ? this.getIgnoredAriaAttributes() : []);
    }
    ariaAttributeChanged(newValue, _, propName) {
      const ignoredAttributes = this.getIgnoredAriaAttributes();
      if (ignoredAttributes.includes(propName)) {
        return;
      }
      const updateAttribute = {
        [propName]: newValue
      };
      this.inheritAriaAttributes = {
        ...this.inheritAriaAttributes,
        ...updateAttribute
      };
    }
  };
  return InheritAriaAttributesMixinCtor;
};
export {
  InheritAriaAttributesMixin as I
};
