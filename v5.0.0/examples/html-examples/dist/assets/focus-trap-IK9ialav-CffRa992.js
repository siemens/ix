import { i as isMakeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { q as queryElements, f as focusableQueryString, t as tryFocusElement, b as focusElementInContext } from "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
const TRAP_FOCUS_EXCLUDE_ATTRIBUTE = "data-ix-focus-trap-exclude";
const TRAP_FOCUS_INCLUDE_ATTRIBUTE = "data-ix-focus-trap-include";
const POPOVER_TAG = "IX-POPOVER";
const POPOVER_HEADER_TAG = "IX-POPOVER-HEADER";
const focusTrapQuery = `${focusableQueryString}, [${TRAP_FOCUS_INCLUDE_ATTRIBUTE}]`;
const mergeUniqueInDocumentOrder = (...lists) => {
  const unique = [];
  const seen = /* @__PURE__ */ new Set();
  for (const list of lists) {
    for (const element of list) {
      if (!seen.has(element)) {
        seen.add(element);
        unique.push(element);
      }
    }
  }
  return unique.sort((a, b) => {
    const position = a.compareDocumentPosition(b);
    if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
      return -1;
    }
    if (position & Node.DOCUMENT_POSITION_PRECEDING) {
      return 1;
    }
    return 0;
  });
};
const getDeepActiveElement = () => {
  let active = document.activeElement;
  while (active) {
    if (active instanceof HTMLElement && active.shadowRoot?.activeElement) {
      const shadowActive = active.shadowRoot.activeElement;
      if (shadowActive !== active) {
        active = shadowActive;
        continue;
      }
    }
    const root = active.getRootNode();
    if (root instanceof ShadowRoot && root.activeElement && root.activeElement !== active) {
      active = root.activeElement;
      continue;
    }
    break;
  }
  return active;
};
const resolveFocusTrapActiveElement = (trapHost, focusableElements) => {
  let activeElement = getDeepActiveElement();
  if (findActiveFocusableIndex(activeElement, focusableElements) !== -1) {
    if (activeElement instanceof HTMLElement && activeElement.hasAttribute(TRAP_FOCUS_INCLUDE_ATTRIBUTE) && activeElement.shadowRoot?.activeElement) {
      const includedActive = activeElement.shadowRoot.activeElement;
      if (findActiveFocusableIndex(includedActive, focusableElements) !== -1) {
        return includedActive;
      }
    }
    return activeElement;
  }
  const shadowActive = trapHost.shadowRoot?.activeElement;
  if (shadowActive instanceof HTMLElement && findActiveFocusableIndex(shadowActive, focusableElements) !== -1) {
    return shadowActive;
  }
  return activeElement;
};
function findActiveFocusableIndex(active, focusableElements) {
  if (!(active instanceof HTMLElement)) {
    return -1;
  }
  const directIndex = focusableElements.indexOf(active);
  if (directIndex !== -1) {
    return directIndex;
  }
  for (let index = 0; index < focusableElements.length; index++) {
    const candidate = focusableElements[index];
    if (candidate.shadowRoot?.contains(active)) {
      return index;
    }
    const activeRoot = active.getRootNode();
    if (activeRoot instanceof ShadowRoot && activeRoot.host === candidate) {
      return index;
    }
    if (candidate.contains(active)) {
      return index;
    }
  }
  return -1;
}
const isOpenPopoverHost = (host) => {
  if (host.classList.contains("visible")) {
    return true;
  }
  const dialog = host.shadowRoot?.querySelector("dialog");
  return dialog?.matches(":popover-open") ?? false;
};
const isNestedOpenPopoverLayer = (element, trapHost) => {
  const ownerPopover = getPopoverHostForElement(element);
  return ownerPopover !== void 0 && ownerPopover !== trapHost && isOpenPopoverHost(ownerPopover);
};
function getPopoverHostForElement(element) {
  let current = element;
  while (current) {
    if (current instanceof HTMLElement && current.tagName === POPOVER_TAG) {
      return current;
    }
    const root = current.getRootNode();
    if (root instanceof ShadowRoot) {
      current = root.host;
      continue;
    }
    current = current.parentElement;
  }
  return void 0;
}
function isWithinInertSubtree(element) {
  let current = element;
  while (current) {
    if (current instanceof HTMLElement && current.inert) {
      return true;
    }
    if (current instanceof ShadowRoot) {
      current = current.host;
      continue;
    }
    current = current.parentNode;
  }
  return false;
}
function shouldExcludeFromFocusTrap(element, trapHost) {
  if (isWithinInertSubtree(element)) {
    return true;
  }
  const ownerPopover = getPopoverHostForElement(element);
  if (!ownerPopover || ownerPopover === trapHost) {
    return false;
  }
  return true;
}
function isHiddenFromTabOrder(element) {
  const { display, visibility } = getComputedStyle(element);
  return display === "none" || visibility === "hidden";
}
function filterFocusTrapFocusables(focusableElements, trapHost) {
  return focusableElements.filter((element) => !shouldExcludeFromFocusTrap(element, trapHost));
}
function expandFocusTrapIncludes(focusableElements, options) {
  const useBoth = options?.trapFocusInShadowDom === "both";
  for (let index = 0; index < focusableElements.length; index++) {
    const includeElement = focusableElements[index];
    if (!includeElement.hasAttribute(TRAP_FOCUS_INCLUDE_ATTRIBUTE)) {
      continue;
    }
    const includedFocusableElements = queryElements(useBoth || options?.trapFocusInShadowDom === true && includeElement.shadowRoot ? includeElement.shadowRoot ?? includeElement : includeElement, focusableQueryString, useBoth).filter((element) => element !== includeElement && !isHiddenFromTabOrder(element));
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
}
function getFocusTrapFocusables(ref, options) {
  const useBoth = options?.trapFocusInShadowDom === "both";
  let focusableElements;
  if (useBoth) {
    const fromShadow = ref.shadowRoot ? queryElements(ref.shadowRoot, focusTrapQuery, false) : [];
    const fromLight = queryElements(ref, focusTrapQuery, false);
    focusableElements = mergeUniqueInDocumentOrder(fromShadow, fromLight);
  } else {
    const focusTrapRoot = options?.trapFocusInShadowDom === true ? ref.shadowRoot : ref;
    focusableElements = queryElements(focusTrapRoot, focusTrapQuery, useBoth);
  }
  expandFocusTrapIncludes(focusableElements, options);
  const filtered = filterFocusTrapFocusables(focusableElements, ref).filter((element) => !isHiddenFromTabOrder(element));
  if (!options?.excludeElements) {
    return filtered;
  }
  return filtered.filter((element) => !element.hasAttribute(TRAP_FOCUS_EXCLUDE_ATTRIBUTE));
}
function isHeaderFocusable(element, trapHost) {
  let current = element;
  while (current && current !== trapHost) {
    if (current instanceof HTMLElement && current.tagName === POPOVER_HEADER_TAG) {
      return true;
    }
    const root = current.getRootNode();
    if (root instanceof ShadowRoot) {
      current = root.host;
      continue;
    }
    current = current.parentElement;
  }
  return false;
}
function focusFirstFocusTrapElement(ref, options, focusOptions) {
  const focusableElements = getFocusTrapFocusables(ref, options);
  const contentFirst = focusableElements.find((element) => !isHeaderFocusable(element, ref));
  const target = contentFirst ?? focusableElements[0];
  focusElementInContext(target ?? null, ref, focusOptions);
}
const resolveFocusTrapElement = async (target) => {
  if (target instanceof HTMLElement) {
    return target;
  }
  if (isMakeRef(target)) {
    return target.waitForCurrent();
  }
  throw new Error("Invalid focus trap element reference");
};
const addFocusTrap = async (element, options) => {
  const trapHost = options?.targetElement ? await resolveFocusTrapElement(options.targetElement) : element;
  let listenerTarget = element;
  if (options?.listenOnDocument) {
    listenerTarget = document;
  } else if (options?.targetElement) {
    listenerTarget = trapHost;
  }
  const onKeydown = (event) => {
    const keyboardEvent = event;
    if (keyboardEvent.key !== "Tab") {
      return;
    }
    if (options?.listenOnDocument) {
      if (options.shouldDeferTabTrap?.(trapHost)) {
        return;
      }
      const deepActive = getDeepActiveElement();
      if (deepActive instanceof HTMLElement && isNestedOpenPopoverLayer(deepActive, trapHost)) {
        return;
      }
    }
    const focusableElements = getFocusTrapFocusables(trapHost, options);
    if (focusableElements.length === 0) {
      return;
    }
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    const activeElement = resolveFocusTrapActiveElement(trapHost, focusableElements);
    const activeIndex = findActiveFocusableIndex(activeElement, focusableElements);
    let handled = false;
    if (activeIndex === -1) {
      return;
    }
    if (keyboardEvent.shiftKey) {
      if (activeIndex === 0) {
        keyboardEvent.preventDefault();
        tryFocusElement(lastElement);
        handled = true;
      }
    } else if (activeIndex === focusableElements.length - 1) {
      keyboardEvent.preventDefault();
      tryFocusElement(firstElement);
      handled = true;
    }
    if (handled) {
      event.stopImmediatePropagation();
    }
  };
  listenerTarget.addEventListener("keydown", onKeydown);
  const destroy = () => {
    listenerTarget.removeEventListener("keydown", onKeydown);
  };
  return {
    destroy
  };
};
export {
  TRAP_FOCUS_EXCLUDE_ATTRIBUTE as T,
  addFocusTrap as a,
  TRAP_FOCUS_INCLUDE_ATTRIBUTE as b,
  focusFirstFocusTrapElement as f,
  getFocusTrapFocusables as g
};
