const mediaQueries = {
  sm: "(min-width: 36em)",
  md: "(min-width: 48em)",
  lg: "(min-width: 62em)"
};
const matchBreakpoint = (breakpoint) => {
  if (typeof window !== "undefined" && window.matchMedia) {
    const mediaQuery = mediaQueries[breakpoint];
    return window.matchMedia(mediaQuery).matches;
  }
  return false;
};
export {
  matchBreakpoint as m
};
