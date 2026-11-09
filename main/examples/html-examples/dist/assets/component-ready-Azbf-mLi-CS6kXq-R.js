async function waitForComponentReady(element) {
  const stencilComponent = element;
  if (typeof stencilComponent?.componentOnReady === "function") {
    await stencilComponent.componentOnReady();
  }
}
export {
  waitForComponentReady as w
};
