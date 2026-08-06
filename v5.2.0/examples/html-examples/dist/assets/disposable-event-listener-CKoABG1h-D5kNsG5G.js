const addDisposableEventListener = (element, eventType, callback) => {
  element.addEventListener(eventType, callback);
  return () => {
    element.removeEventListener(eventType, callback);
  };
};
const addDisposableEventListenerAsArray = (listener) => {
  const disposables = listener.map(({ callback, element, eventType }) => addDisposableEventListener(element, eventType, callback));
  return () => disposables.forEach((dispose) => dispose());
};
export {
  addDisposableEventListener as a,
  addDisposableEventListenerAsArray as b
};
