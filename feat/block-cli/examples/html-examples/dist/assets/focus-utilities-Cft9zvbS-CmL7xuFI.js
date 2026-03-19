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
function queryElements(dropdownElement, query) {
  if (!dropdownElement) {
    return [];
  }
  let items = [];
  if (dropdownElement.querySelectorAll("slot").length > 0) {
    const slotElements = Array.from(dropdownElement.querySelectorAll("slot"));
    items = slotElements.flatMap((slot) => Array.from(slot.assignedElements({ flatten: true })).flatMap((el) => {
      if (el?.matches(query)) {
        return [el];
      }
      return Array.from(el.querySelectorAll(query));
    }));
  }
  items = [
    ...items,
    ...Array.from(dropdownElement.querySelectorAll(query))
  ];
  return items;
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
const focusElement = (element) => {
  if (!element) {
    return;
  }
  element.focus();
};
const focusableBase = ':not([tabindex^="-"]):not([hidden]):not([disabled])';
const customTags = ["ix-dropdown-item", "ix-select-item"];
const buildCustom = (additionalSelector) => customTags.map((tag) => `${tag}${focusableBase}${additionalSelector}`).join(", ");
const focusableQueryString = `[tabindex]${focusableBase}, ${buildCustom("")}`;
const buildFocusableQueryString = (additionalSelector = "") => `[tabindex]${focusableBase}${additionalSelector}, ${buildCustom(additionalSelector)}`;
export {
  FOCUS_KEYS as F,
  IX_FOCUS_VISIBLE_ACTIVE as I,
  IX_FOCUS_VISIBLE as a,
  focusFirstDescendant as b,
  focusLastDescendant as c,
  focusElementInContext as d,
  focusElement as e,
  focusableQueryString as f,
  queryElements as q
};
