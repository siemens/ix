import { g as getElement } from "./global-Cn4dOqNA.js";
async function isTouched(host) {
  if (typeof host.isTouched === "function") {
    return host.isTouched();
  }
}
async function shouldSuppressInternalValidation(host) {
  if (host.getAssociatedFormElement && typeof host.getAssociatedFormElement === "function") {
    const form = await host.getAssociatedFormElement();
    if (!form) {
      return false;
    }
    return form.noValidate;
  }
  return false;
}
function createClassMutationObserver(element, callback, options) {
  const observer = new MutationObserver(callback);
  observer.observe(element, {
    subtree: options === null || options === void 0 ? void 0 : options.includeChildren,
    childList: options === null || options === void 0 ? void 0 : options.includeChildren,
    attributes: true,
    attributeFilter: ["class"]
  });
  return {
    destroy() {
      observer.disconnect();
    }
  };
}
function classListContains(hostElement, className, includeChildren) {
  return hostElement.classList.contains(`${className}`) || (includeChildren ? !!hostElement.querySelector(`.${className}`) : false);
}
function checkFieldClasses(hostElement, includeChildren = false) {
  return {
    isInvalid: classListContains(hostElement, "ix-invalid", includeChildren) || classListContains(hostElement, "ix-invalid--validity-invalid", includeChildren),
    isInvalidByRequired: classListContains(hostElement, "ix-invalid--required", includeChildren),
    isValid: classListContains(hostElement, "ix-valid", includeChildren),
    isInfo: classListContains(hostElement, "ix-info", includeChildren),
    isWarning: classListContains(hostElement, "ix-warning", includeChildren)
  };
}
function HookValidationLifecycle(options) {
  return (proto, methodName) => {
    let checkIfRequiredFunction;
    let classMutationObserver;
    const { componentWillLoad, disconnectedCallback, connectedCallback } = proto;
    proto.connectedCallback = function() {
      const host = getElement(this);
      checkIfRequiredFunction = async () => {
        const skipValidation = await shouldSuppressInternalValidation(host);
        if (skipValidation) {
          return;
        }
        if (host.hasValidValue && typeof host.hasValidValue === "function") {
          const hasValue = await host.hasValidValue();
          const touched = await isTouched(host);
          if (host.required) {
            host.classList.toggle("ix-invalid--required", !hasValue && touched);
          } else {
            host.classList.remove("ix-invalid--required");
          }
        }
        if (host.getValidityState && typeof host.getValidityState === "function") {
          const validityState = await host.getValidityState();
          const touched = await isTouched(host);
          host.classList.toggle(`ix-invalid--validity-patternMismatch`, validityState.patternMismatch);
          host.classList.toggle("ix-invalid--validity-invalid", !validityState.valid && touched);
        }
      };
      host.addEventListener("checkedChange", checkIfRequiredFunction);
      host.addEventListener("valueChange", checkIfRequiredFunction);
      host.addEventListener("ixBlur", checkIfRequiredFunction);
      setTimeout(checkIfRequiredFunction);
      return connectedCallback === null || connectedCallback === void 0 ? void 0 : connectedCallback.call(this);
    };
    proto.componentWillLoad = function() {
      const host = getElement(this);
      classMutationObserver = createClassMutationObserver(host, () => {
        const result2 = checkFieldClasses(host, options === null || options === void 0 ? void 0 : options.includeChildren);
        proto[methodName].call(this, result2);
      }, options);
      const result = checkFieldClasses(host, options === null || options === void 0 ? void 0 : options.includeChildren);
      proto[methodName].call(this, result);
      return componentWillLoad === null || componentWillLoad === void 0 ? void 0 : componentWillLoad.call(this);
    };
    proto.disconnectedCallback = function() {
      const host = getElement(this);
      if (host && classMutationObserver) {
        classMutationObserver.destroy();
        classMutationObserver = null;
      }
      if (host && checkIfRequiredFunction) {
        host.removeEventListener("checkedChange", checkIfRequiredFunction);
        host.removeEventListener("valueChange", checkIfRequiredFunction);
        host.removeEventListener("ixBlur", checkIfRequiredFunction);
        checkIfRequiredFunction = null;
      }
      return disconnectedCallback === null || disconnectedCallback === void 0 ? void 0 : disconnectedCallback.call(this);
    };
  };
}
function getValidationText(isInputInvalid, customInvalidText, i18nFallbackText) {
  if (isInputInvalid) {
    return customInvalidText !== null && customInvalidText !== void 0 ? customInvalidText : i18nFallbackText;
  }
  return customInvalidText;
}
export {
  HookValidationLifecycle as H,
  checkFieldClasses as a,
  createClassMutationObserver as c,
  getValidationText as g,
  shouldSuppressInternalValidation as s
};
