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
function getComposedPath(element) {
  const path = [];
  let currentElement = element;
  while (currentElement) {
    if (currentElement instanceof Element) {
      path.push(currentElement);
      const rootNode = currentElement.getRootNode();
      if (rootNode instanceof ShadowRoot) {
        currentElement = rootNode.host;
        continue;
      }
      currentElement = currentElement.parentElement;
    } else if (currentElement instanceof Document) {
      break;
    } else {
      currentElement = currentElement.parentNode;
    }
  }
  return path;
}
export {
  getSlottedElements as a,
  closestElement as b,
  closestPassShadow as c,
  getComposedPath as g,
  hasSlottedElements as h
};
