async function resolveSelector(selector, hostElement) {
  const elements = Array.from(document.querySelectorAll(selector));
  if (elements.length > 0) {
    return Promise.resolve(elements);
  }
  if (hostElement === void 0) {
    return Promise.resolve(void 0);
  }
  const shadowRoot = getRootFor(hostElement);
  if (shadowRoot === void 0 || !(shadowRoot instanceof ShadowRoot)) {
    return Promise.resolve(void 0);
  }
  const elementsInShadowRoot = Array.from(shadowRoot.querySelectorAll(selector));
  const elementsInHost = Array.from(shadowRoot.host.querySelectorAll(selector));
  const elementsInComponent = [
    ...elementsInHost,
    ...elementsInShadowRoot
  ];
  if (elementsInComponent.length > 0) {
    return Promise.resolve(elementsInComponent);
  }
  return Promise.resolve(void 0);
}
function getRootFor(element, parent = document.body) {
  if (!element.parentElement && !element.parentNode) {
    return void 0;
  }
  if (element.parentNode instanceof ShadowRoot) {
    return element.parentNode;
  }
  let currentNode = element.parentElement;
  while (currentNode) {
    if (currentNode.shadowRoot) {
      return currentNode.shadowRoot;
    } else if (currentNode.parentNode instanceof ShadowRoot) {
      return currentNode.parentNode;
    }
    currentNode = currentNode.parentElement;
  }
  return parent;
}
function waitForSelector(selector, node = document, hostElement) {
  return new Promise((resolve) => {
    const waitForElements = () => {
      resolveSelector(selector, hostElement).then((elements) => {
        if (elements && elements.length > 0) {
          resolve(elements[0]);
          observer === null || observer === void 0 ? void 0 : observer.disconnect();
        }
      });
    };
    waitForElements();
    const observer = new MutationObserver(() => {
      waitForElements();
    });
    observer.observe(node.body, {
      childList: true,
      subtree: true
    });
  });
}
function findElement(element, hostElement) {
  if (element instanceof Promise) {
    return element;
  }
  if (typeof element === "object") {
    return Promise.resolve(element);
  }
  const selector = `#${element}`;
  return waitForSelector(selector, document, hostElement);
}
export {
  findElement as f,
  resolveSelector as r
};
