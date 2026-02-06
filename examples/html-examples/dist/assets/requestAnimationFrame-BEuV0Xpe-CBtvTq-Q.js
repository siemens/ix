const requestAnimationFrameNoNgZone = (callback) => {
  if (typeof __zone_symbol__requestAnimationFrame === "function") {
    return __zone_symbol__requestAnimationFrame(callback);
  }
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame(callback);
  }
  return setTimeout(callback);
};
export {
  requestAnimationFrameNoNgZone as r
};
