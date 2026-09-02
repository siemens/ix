import { g as getElement } from "./global-Do6maBom.js";
import { i as isIxInputFieldComponent } from "./index-XBTykBKS-D8xrYMLu.js";
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
    subtree: options?.includeChildren,
    childList: options?.includeChildren,
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
class NativeInputNotFoundError extends Error {
  constructor(message = "Input element not found") {
    super(message);
    this.name = "NativeInputNotFoundError";
  }
}
function isMissingNativeInputError(error) {
  return error instanceof NativeInputNotFoundError || // Cross-bundle / duplicated class copies still carry the stable name.
  error instanceof Error && error.name === "NativeInputNotFoundError";
}
function HookValidationLifecycle(options) {
  return (proto, methodName) => {
    let checkIfRequiredFunction;
    let classMutationObserver;
    let checkTimeoutId = null;
    const { componentWillLoad, disconnectedCallback, connectedCallback } = proto;
    proto.connectedCallback = function() {
      const host = getElement(this);
      if (checkTimeoutId != null) {
        clearTimeout(checkTimeoutId);
        checkTimeoutId = null;
      }
      checkIfRequiredFunction = async () => {
        const skipValidation = await shouldSuppressInternalValidation(host);
        if (skipValidation || !host.isConnected) {
          return;
        }
        if (!isIxInputFieldComponent(host)) {
          return;
        }
        let validationElement;
        try {
          validationElement = await host.getNativeInputElement?.();
        } catch (error) {
          if (!isMissingNativeInputError(error)) {
            throw error;
          }
          validationElement = void 0;
        }
        if (!host.isConnected) {
          return;
        }
        if (host.hasValidValue && typeof host.hasValidValue === "function") {
          const hasValue = await host.hasValidValue();
          const touched = await isTouched(host);
          if (!host.isConnected) {
            return;
          }
          if (host.required) {
            host.classList.toggle("ix-invalid--required", !hasValue && touched);
          } else {
            host.classList.remove("ix-invalid--required");
          }
        }
        if (host.getValidityState && typeof host.getValidityState === "function") {
          const validityState = await host.getValidityState();
          const touched = await isTouched(host);
          if (!host.isConnected) {
            return;
          }
          host.classList.toggle(`ix-invalid--validity-patternMismatch`, validityState.patternMismatch);
          host.classList.toggle("ix-invalid--validity-invalid", !validityState.valid && touched);
          const fieldWrapper = host.shadowRoot?.querySelector("ix-field-wrapper");
          if (validationElement && fieldWrapper) {
            const ariaErrorMessageElement = await fieldWrapper.getAriaErrorMessageElement();
            const ariaHelperMessageElement = await fieldWrapper.getAriaHelperMessageElement();
            if (!host.isConnected) {
              return;
            }
            if (ariaHelperMessageElement) {
              validationElement.setAttribute("aria-describedby", `${ariaHelperMessageElement.id}`);
            }
            if (!validityState.valid) {
              validationElement?.setAttribute("aria-invalid", "true");
              if (ariaErrorMessageElement && !validityState.valid) {
                validationElement.setAttribute("aria-errormessage", `${ariaErrorMessageElement.id}`);
                validationElement.setAttribute("aria-describedby", `${ariaErrorMessageElement.id}`);
              }
            } else {
              validationElement?.removeAttribute("aria-invalid");
            }
          }
        }
      };
      host.addEventListener("checkedChange", checkIfRequiredFunction);
      host.addEventListener("valueChange", checkIfRequiredFunction);
      host.addEventListener("ixBlur", checkIfRequiredFunction);
      checkTimeoutId = setTimeout(() => {
        checkTimeoutId = null;
        if (checkIfRequiredFunction) {
          void checkIfRequiredFunction().catch((error) => {
            if (isMissingNativeInputError(error)) {
              return;
            }
            console.error(error);
          });
        }
      });
      return connectedCallback?.call(this);
    };
    proto.componentWillLoad = function() {
      const host = getElement(this);
      classMutationObserver = createClassMutationObserver(host, () => {
        const result2 = checkFieldClasses(host, options?.includeChildren);
        proto[methodName].call(this, result2);
      }, options);
      const result = checkFieldClasses(host, options?.includeChildren);
      proto[methodName].call(this, result);
      return componentWillLoad?.call(this);
    };
    proto.disconnectedCallback = function() {
      const host = getElement(this);
      if (checkTimeoutId != null) {
        clearTimeout(checkTimeoutId);
        checkTimeoutId = null;
      }
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
      return disconnectedCallback?.call(this);
    };
  };
}
function getValidationText(isInputInvalid, customInvalidText, i18nFallbackText) {
  if (isInputInvalid) {
    return customInvalidText ?? i18nFallbackText;
  }
  return customInvalidText;
}
export {
  HookValidationLifecycle as H,
  NativeInputNotFoundError as N,
  checkFieldClasses as a,
  createClassMutationObserver as c,
  getValidationText as g,
  shouldSuppressInternalValidation as s
};
