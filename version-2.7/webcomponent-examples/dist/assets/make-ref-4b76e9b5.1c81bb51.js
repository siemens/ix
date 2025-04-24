function makeRef(currentChangedCallback) {
  let resolve = void 0;
  let currentPromise = new Promise((res) => resolve = res);
  let current = void 0;
  const setRefFunction = (ref) => {
    if (ref === void 0) {
      return;
    }
    current = setRefFunction.current = ref;
    currentChangedCallback === null || currentChangedCallback === void 0 ? void 0 : currentChangedCallback(ref);
    resolve === null || resolve === void 0 ? void 0 : resolve(ref);
  };
  setRefFunction.current = current;
  setRefFunction.waitForCurrent = async () => {
    await currentPromise;
    return current;
  };
  return setRefFunction;
}
export {
  makeRef as m
};
