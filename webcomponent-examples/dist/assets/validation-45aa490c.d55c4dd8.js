import { g as getElement } from "./global.2bfd6008.js";
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
function containsClass(hostElement, className, includeChildren) {
  return hostElement.classList.contains(`${className}`) || (includeChildren ? !!hostElement.querySelector(`.${className}`) : false);
}
function checkFieldClasses(hostElement, includeChildren = false) {
  return {
    isInvalid: containsClass(hostElement, "ix-invalid", includeChildren),
    isInvalidByRequired: containsClass(hostElement, "ix-invalid--required", includeChildren),
    isValid: containsClass(hostElement, "ix-valid", includeChildren),
    isInfo: containsClass(hostElement, "ix-info", includeChildren),
    isWarning: containsClass(hostElement, "ix-warning", includeChildren)
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
          if (host.required) {
            host.classList.toggle("ix-invalid--required", !hasValue);
          } else {
            host.classList.remove("ix-invalid--required");
          }
        }
        if (host.getValidityState && typeof host.getValidityState === "function") {
          const validityState = await host.getValidityState();
          Object.keys(validityState).filter((key) => ["patternMismatch"].includes(key)).forEach((key) => {
            host.classList.toggle(`ix-invalid--${key}`, validityState[key]);
          });
        }
      };
      host.addEventListener("valueChange", checkIfRequiredFunction);
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
        host.removeEventListener("valueChange", checkIfRequiredFunction);
      }
      return disconnectedCallback === null || disconnectedCallback === void 0 ? void 0 : disconnectedCallback.call(this);
    };
  };
}
export {
  HookValidationLifecycle as H,
  checkFieldClasses as a,
  createClassMutationObserver as c,
  shouldSuppressInternalValidation as s
};
