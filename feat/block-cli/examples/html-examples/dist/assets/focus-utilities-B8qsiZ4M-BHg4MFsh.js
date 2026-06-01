const IX_FOCUS_VISIBLE_ACTIVE = "ix-focused";
const IX_FOCUS_VISIBLE = "ix-focusable";
const FOCUS_KEYS = /* @__PURE__ */ new Set([
  "Tab",
  "ArrowDown",
  "Space",
  "Escape",
  " ",
  "Shift",
  "Enter",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "Home",
  "End"
]);
const getQueryRoot = (dropdownElement, includeShadowDom) => includeShadowDom && dropdownElement instanceof HTMLElement ? dropdownElement.shadowRoot ?? dropdownElement : dropdownElement;
const collectSlotMatches = (slot, query) => {
  const slotted = [];
  for (const assigned of slot.assignedElements({
    flatten: true
  })) {
    if (assigned.matches(query)) {
      slotted.push(assigned);
      continue;
    }
    slotted.push(...Array.from(assigned.querySelectorAll(query)));
  }
  return slotted;
};
const findInsertIndex = (slot, elements) => {
  for (let i = 0; i < elements.length; i++) {
    if (slot.compareDocumentPosition(elements[i]) & Node.DOCUMENT_POSITION_FOLLOWING) {
      return i;
    }
  }
  return elements.length;
};
function queryElements(dropdownElement, query, includeShadowDom = false) {
  if (!dropdownElement) {
    return [];
  }
  const root = getQueryRoot(dropdownElement, includeShadowDom);
  const fromRoot = Array.from(root.querySelectorAll(query));
  const slots = Array.from(root.querySelectorAll("slot"));
  if (slots.length === 0) {
    return fromRoot;
  }
  const result = [...fromRoot];
  for (let i = slots.length - 1; i >= 0; i--) {
    const slot = slots[i];
    const slotted = collectSlotMatches(slot, query);
    if (slotted.length === 0) {
      continue;
    }
    const insertAt = findInsertIndex(slot, result);
    result.splice(insertAt, 0, ...slotted);
  }
  return result;
}
function tryFocusElement(element, options) {
  if (!(element instanceof HTMLElement)) {
    return;
  }
  try {
    element.focus(options);
  } catch {
  }
}
const focusFirstDescendant = (ref, fallbackElement, options) => {
  if (options?.focusCheckedItem) {
    const checkedQueryString = buildFocusableQueryString("[checked]");
    const checkedElements = queryElements(ref, checkedQueryString);
    if (checkedElements.length > 0) {
      focusElementInContext(checkedElements[0], ref);
      return;
    }
  }
  const inputs = queryElements(ref, focusableQueryString);
  const firstInput = inputs.length > 0 ? inputs[0] : null;
  focusElementInContext(firstInput, ref);
};
const focusLastDescendant = (ref, fallbackElement) => {
  const inputs = queryElements(ref, focusableQueryString);
  const lastInput = inputs.length > 0 ? inputs[inputs.length - 1] : null;
  focusElementInContext(lastInput, ref);
};
const focusElementInContext = (hostToFocus, fallbackElement) => {
  let elementToFocus = hostToFocus;
  const shadowRoot = hostToFocus?.shadowRoot;
  if (shadowRoot) {
    elementToFocus = shadowRoot.querySelector(focusableQueryString) || hostToFocus;
  }
  if (elementToFocus) {
    focusElement(elementToFocus);
  } else {
    focusElement(fallbackElement);
  }
};
const focusElement = (element, options) => {
  if (!element) {
    return;
  }
  element.focus(options);
};
const focusableBase = ':not([tabindex^="-"]):not([hidden]):not([disabled])';
const customTags = ["ix-dropdown-item", "ix-select-item"];
const focusableNativeHtml = [
  "button",
  "a[href]",
  "area[href]",
  "audio",
  "input",
  "select",
  "textarea",
  "iframe",
  "object",
  "embed",
  "video",
  "[contenteditable]"
];
const buildCustom = (additionalSelector) => customTags.map((tag) => `${tag}${focusableBase}${additionalSelector}`).join(", ");
const buildNative = (additionalSelector) => focusableNativeHtml.map((tag) => `${tag}${focusableBase}${additionalSelector}`).join(", ");
const focusableQueryString = `[tabindex]${focusableBase}, ${buildCustom("")}, ${buildNative("")}`;
const buildFocusableQueryString = (additionalSelector = "") => `[tabindex]${focusableBase}${additionalSelector}, ${buildCustom(additionalSelector)}, ${buildNative(additionalSelector)}`;
export {
  FOCUS_KEYS as F,
  IX_FOCUS_VISIBLE as I,
  IX_FOCUS_VISIBLE_ACTIVE as a,
  focusElementInContext as b,
  focusFirstDescendant as c,
  focusLastDescendant as d,
  focusableQueryString as e,
  focusElement as f,
  queryElements as q,
  tryFocusElement as t
};
