const AriaActiveDescendantMixin = (Base) => {
  class AriaActiveDescendantMixinCtor extends Base {
    constructor() {
      super();
    }
    suppressAriaActiveDescendant = false;
    isAriaActiveDescendantActive() {
      return false;
    }
    getControllingAriaElement() {
      return null;
    }
    getAriaActiveDescendantProxyItemId() {
      return false;
    }
    async clearActiveDescendant() {
      if (this.suppressAriaActiveDescendant) {
        return;
      }
      const controllingElement = await this.getControllingAriaElement();
      if (!controllingElement) {
        return;
      }
      if ("ariaActiveDescendantElement" in Element.prototype) {
        controllingElement.ariaActiveDescendantElement = null;
      }
      controllingElement.removeAttribute("aria-activedescendant");
    }
    async $internal_onActiveDescendantChange(event) {
      if (this.suppressAriaActiveDescendant) {
        return;
      }
      if (!this.isAriaActiveDescendantActive()) {
        this.clearActiveDescendant();
        return;
      }
      const controllingElement = await this.getControllingAriaElement();
      if (!controllingElement) {
        return;
      }
      if (event.detail.currentFocus.length > 0) {
        const item = event.detail.currentFocus[event.detail.currentFocus.length - 1];
        if (!item.id) {
          return;
        }
        if ("ariaActiveDescendantElement" in Element.prototype) {
          controllingElement.ariaActiveDescendantElement = item;
        }
        const proxyId = this.getAriaActiveDescendantProxyItemId();
        if (typeof proxyId === "string" && proxyId) {
          controllingElement.setAttribute("aria-activedescendant", item.id + "-" + proxyId);
        } else {
          controllingElement.setAttribute("aria-activedescendant", item.id);
        }
        event.preventDefault();
        event.stopPropagation();
      }
    }
    static get listeners() {
      return [{
        "name": "ixFocusVisibleChange",
        "method": "$internal_onActiveDescendantChange",
        "target": "document",
        "capture": false,
        "passive": false
      }];
    }
  }
  return AriaActiveDescendantMixinCtor;
};
export {
  AriaActiveDescendantMixin as A
};
