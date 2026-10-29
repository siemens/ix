import { g as getElement } from "./global-B0StzMye.js";
import { i as isIxInputFieldComponent } from "./index-XBTykBKS-D8xrYMLu.js";
async function isTouched(host) {
  if (typeof host.isTouched === "function") {
    return host.isTouched();
  }
}
function isValidationSuppressedByForm(form) {
  return !!form?.noValidate;
}
async function shouldSuppressInternalValidation(host) {
  if (host.getAssociatedFormElement && typeof host.getAssociatedFormElement === "function") {
    return isValidationSuppressedByForm(await host.getAssociatedFormElement());
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
const internalValidationClasses = [
  "ix-invalid--required",
  "ix-invalid--validity-invalid",
  "ix-invalid--validity-patternMismatch"
];
function clearInternalValidationClasses(host) {
  if (internalValidationClasses.some((c) => host.classList.contains(c))) {
    host.classList.remove(...internalValidationClasses);
  }
}
function consumerValidityCheck(host) {
  return !host.classList.contains("ix-invalid");
}
const validityErrorsBesideValueMissing = [
  "badInput",
  "customError",
  "patternMismatch",
  "rangeOverflow",
  "rangeUnderflow",
  "stepMismatch",
  "tooLong",
  "tooShort",
  "typeMismatch"
];
function isOnlyValueMissing(validityState) {
  return validityState.valueMissing && !validityErrorsBesideValueMissing.some((error) => validityState[error]);
}
function syncAriaInvalid(validationElement, valid) {
  if (valid) {
    validationElement.removeAttribute("aria-invalid");
  } else {
    validationElement.setAttribute("aria-invalid", "true");
  }
}
function setAriaReference(element, attribute, id, present) {
  const ids = element.getAttribute(attribute)?.split(/\s+/).filter((existingId) => existingId.length > 0 && existingId !== id) ?? [];
  if (present) {
    ids.push(id);
  }
  if (ids.length > 0) {
    element.setAttribute(attribute, ids.join(" "));
  } else {
    element.removeAttribute(attribute);
  }
}
async function getFieldWrapperMessageElements(host) {
  const fieldWrapper = host.shadowRoot?.querySelector("ix-field-wrapper");
  if (!fieldWrapper) {
    return void 0;
  }
  const [errorMessageElement, helperMessageElement] = await Promise.all([
    fieldWrapper.getAriaErrorMessageElement(),
    fieldWrapper.getAriaHelperMessageElement()
  ]);
  return { errorMessageElement, helperMessageElement };
}
function syncAriaMessageReferences(validationElement, showError, messageElements) {
  const { errorMessageElement, helperMessageElement } = messageElements;
  const linkError = showError && !!errorMessageElement;
  if (errorMessageElement) {
    setAriaReference(validationElement, "aria-errormessage", errorMessageElement.id, linkError);
    setAriaReference(validationElement, "aria-describedby", errorMessageElement.id, linkError);
  }
  if (helperMessageElement) {
    setAriaReference(validationElement, "aria-describedby", helperMessageElement.id, !linkError);
  }
}
const validationLifecycleStates = /* @__PURE__ */ new WeakMap();
function getValidationLifecycleState(instance) {
  let state = validationLifecycleStates.get(instance);
  if (!state) {
    state = {
      checkIfRequiredFunction: null,
      classMutationObserver: null,
      checkTimeoutId: null,
      hasLoaded: false
    };
    validationLifecycleStates.set(instance, state);
  }
  return state;
}
async function revalidate(instance) {
  const checkIfRequiredFunction = validationLifecycleStates.get(instance)?.checkIfRequiredFunction;
  if (!checkIfRequiredFunction) {
    return;
  }
  try {
    await checkIfRequiredFunction();
  } catch (error) {
    if (!isMissingNativeInputError(error)) {
      console.error(error);
    }
  }
}
function HookValidationLifecycle(options) {
  return (proto, methodName) => {
    const { componentWillLoad, disconnectedCallback, connectedCallback } = proto;
    const observeFieldClasses = function(host) {
      getValidationLifecycleState(this).classMutationObserver = createClassMutationObserver(host, () => {
        const result2 = checkFieldClasses(host, options?.includeChildren);
        proto[methodName].call(this, result2);
      }, options);
      const result = checkFieldClasses(host, options?.includeChildren);
      proto[methodName].call(this, result);
    };
    proto.connectedCallback = function() {
      const host = getElement(this);
      const state = getValidationLifecycleState(this);
      if (state.checkTimeoutId != null) {
        clearTimeout(state.checkTimeoutId);
        state.checkTimeoutId = null;
      }
      const checkIfRequiredFunction = async () => {
        const skipValidation = await shouldSuppressInternalValidation(host);
        if (!host.isConnected) {
          return;
        }
        if (skipValidation) {
          clearInternalValidationClasses(host);
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
        if (skipValidation) {
          if (validationElement && host.getValidityState && typeof host.getValidityState === "function") {
            const { valid } = await host.getValidityState();
            const messageElements = await getFieldWrapperMessageElements(host);
            if (host.isConnected) {
              const consumerValid = consumerValidityCheck(host);
              syncAriaInvalid(validationElement, valid && consumerValid);
              if (messageElements) {
                syncAriaMessageReferences(validationElement, !consumerValid, messageElements);
              }
            }
          }
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
          const messageElements = validationElement ? await getFieldWrapperMessageElements(host) : void 0;
          if (validationElement && messageElements) {
            if (!host.isConnected) {
              return;
            }
            const validByValidity = validityState.valid || !touched && isOnlyValueMissing(validityState);
            const consumerValid = consumerValidityCheck(host);
            syncAriaInvalid(validationElement, validByValidity && consumerValid);
            syncAriaMessageReferences(validationElement, !validByValidity || !consumerValid, messageElements);
          }
        }
      };
      state.checkIfRequiredFunction = checkIfRequiredFunction;
      host.addEventListener("checkedChange", checkIfRequiredFunction);
      host.addEventListener("valueChange", checkIfRequiredFunction);
      host.addEventListener("ixBlur", checkIfRequiredFunction);
      state.checkTimeoutId = setTimeout(() => {
        state.checkTimeoutId = null;
        void revalidate(this);
      });
      const result = connectedCallback?.call(this);
      if (state.hasLoaded && !state.classMutationObserver) {
        observeFieldClasses.call(this, host);
      }
      return result;
    };
    proto.componentWillLoad = function() {
      const host = getElement(this);
      observeFieldClasses.call(this, host);
      getValidationLifecycleState(this).hasLoaded = true;
      return componentWillLoad?.call(this);
    };
    proto.disconnectedCallback = function() {
      const host = getElement(this);
      const state = getValidationLifecycleState(this);
      if (state.checkTimeoutId != null) {
        clearTimeout(state.checkTimeoutId);
        state.checkTimeoutId = null;
      }
      if (host && state.classMutationObserver) {
        state.classMutationObserver.destroy();
        state.classMutationObserver = null;
      }
      if (host && state.checkIfRequiredFunction) {
        host.removeEventListener("checkedChange", state.checkIfRequiredFunction);
        host.removeEventListener("valueChange", state.checkIfRequiredFunction);
        host.removeEventListener("ixBlur", state.checkIfRequiredFunction);
        state.checkIfRequiredFunction = null;
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
  clearInternalValidationClasses as a,
  checkFieldClasses as b,
  createClassMutationObserver as c,
  getValidationText as g,
  isValidationSuppressedByForm as i,
  revalidate as r,
  shouldSuppressInternalValidation as s
};
