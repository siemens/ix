function makeRef(currentChangedCallback) {
  let resolve = void 0;
  let currentPromise = new Promise((res) => resolve = res);
  let current = void 0;
  const setRefFunction = (ref) => {
    if (ref === void 0) {
      return;
    }
    current = setRefFunction.current = ref;
    currentChangedCallback?.(ref);
    resolve?.(ref);
  };
  setRefFunction.current = current;
  setRefFunction.waitForCurrent = async () => {
    await currentPromise;
    return current;
  };
  return setRefFunction;
}
function isMakeRef(ref) {
  return typeof ref === "function" && "current" in ref && "waitForCurrent" in ref;
}
export {
  isMakeRef as i,
  makeRef as m
};
