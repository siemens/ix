function closestElement(selector, el) {
  if (!el) {
    return null;
  }
  return el.closest(selector) || closestElement(selector, el.getRootNode().host);
}
function getSlottedElements(slot) {
  return slot.assignedElements({ flatten: true });
}
function hasSlottedElements(slot) {
  if (!slot) {
    return false;
  }
  return slot.assignedElements({ flatten: true }).length !== 0;
}
function closestPassShadow(node, selector) {
  if (!node) {
    return null;
  }
  if (node instanceof ShadowRoot) {
    return closestPassShadow(node.host, selector);
  }
  if (node instanceof HTMLElement) {
    if (node.matches(selector)) {
      return node;
    } else {
      return closestPassShadow(node.parentNode, selector);
    }
  }
  return closestPassShadow(node.parentNode, selector);
}
export {
  closestPassShadow as a,
  closestElement as c,
  getSlottedElements as g,
  hasSlottedElements as h
};
