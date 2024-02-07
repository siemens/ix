function makeRef(currentChangedCallback) {
  let resolve = null;
  let currentPromise = new Promise((res) => resolve = res);
  let current = null;
  const setRefFunction = (ref) => {
    current = ref;
    currentChangedCallback === null || currentChangedCallback === void 0 ? void 0 : currentChangedCallback(ref);
    resolve();
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
