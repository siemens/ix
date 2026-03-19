import { i as isMakeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { q as queryElements, f as focusableQueryString } from "./focus-utilities-Cft9zvbS-CmL7xuFI.js";
const TRAP_FOCUS_EXCLUDE_ATTRIBUTE = "data-ix-focus-trap-exclude";
const TRAP_FOCUS_INCLUDE_ATTRIBUTE = "data-ix-focus-trap-include";
const addFocusTrap = async (element, options) => {
  let ref = element;
  if (options?.targetElement) {
    if (options.targetElement instanceof HTMLElement) {
      ref = options.targetElement;
    } else if (isMakeRef(options.targetElement)) {
      ref = await options.targetElement.waitForCurrent();
    }
  }
  const onKeydown = (event) => {
    const keyboardEvent = event;
    if (keyboardEvent.key === "Tab") {
      const focusTrapRoot = options?.trapFocusInShadowDom ? ref.shadowRoot : ref;
      const focusableElements = queryElements(focusTrapRoot, `${focusableQueryString}, [${TRAP_FOCUS_INCLUDE_ATTRIBUTE}]`);
      for (let index = 0; index < focusableElements.length; index++) {
        const includeElement = focusableElements[index];
        if (!includeElement.hasAttribute(TRAP_FOCUS_INCLUDE_ATTRIBUTE)) {
          continue;
        }
        const includedFocusableElements = queryElements(options?.trapFocusInShadowDom && includeElement.shadowRoot ? includeElement.shadowRoot : includeElement, focusableQueryString).filter((element2) => element2 !== includeElement);
        for (const includedElement of includedFocusableElements) {
          const duplicateIndex = focusableElements.indexOf(includedElement);
          if (duplicateIndex !== -1) {
            focusableElements.splice(duplicateIndex, 1);
            if (duplicateIndex < index) {
              index--;
            }
          }
        }
        focusableElements.splice(index, 1, ...includedFocusableElements);
        index += includedFocusableElements.length - 1;
      }
      if (focusableElements.length === 0) {
        return;
      }
      if (options?.excludeElements) {
        focusableElements.forEach((element2) => {
          if (element2.hasAttribute(TRAP_FOCUS_EXCLUDE_ATTRIBUTE)) {
            const index = focusableElements.indexOf(element2);
            if (index !== -1) {
              focusableElements.splice(index, 1);
            }
          }
        });
      }
      if (focusableElements.length === 0) {
        return;
      }
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      let activeElement = document.activeElement;
      if (ref instanceof HTMLElement && ref.shadowRoot) {
        activeElement = ref.shadowRoot.activeElement || activeElement;
      }
      if (activeElement?.hasAttribute(TRAP_FOCUS_INCLUDE_ATTRIBUTE) && activeElement?.shadowRoot && activeElement.shadowRoot.activeElement) {
        activeElement = activeElement.shadowRoot.activeElement;
      }
      if (keyboardEvent.shiftKey) {
        if (activeElement === firstElement) {
          keyboardEvent.preventDefault();
          lastElement.focus();
        }
      } else {
        if (activeElement === lastElement) {
          keyboardEvent.preventDefault();
          firstElement.focus();
        }
      }
      event.stopImmediatePropagation();
    }
  };
  ref.addEventListener("keydown", onKeydown);
  const destroy = () => {
    ref.removeEventListener("keydown", onKeydown);
  };
  return {
    destroy
  };
};
export {
  TRAP_FOCUS_EXCLUDE_ATTRIBUTE as T,
  TRAP_FOCUS_INCLUDE_ATTRIBUTE as a,
  addFocusTrap as b
};
