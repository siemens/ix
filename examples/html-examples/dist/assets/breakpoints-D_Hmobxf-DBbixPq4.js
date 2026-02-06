const mediaQueries = {
  sm: "(max-width: 48em)",
  md: "(min-width: 48.0625em) and (max-width: 80em)",
  lg: "(min-width: 80.0625em)"
};
const matchBreakpoint = (breakpoint) => {
  if (typeof window !== "undefined" && window.matchMedia) {
    const mediaQuery = mediaQueries[breakpoint];
    return window.matchMedia(mediaQuery).matches;
  }
  return false;
};
const getCurrentBreakpoint = () => {
  if (typeof window === "undefined" || !window.matchMedia) {
    return "lg";
  }
  if (matchBreakpoint("lg")) {
    return "lg";
  }
  if (matchBreakpoint("md")) {
    return "md";
  }
  if (matchBreakpoint("sm")) {
    return "sm";
  }
  return "lg";
};
export {
  getCurrentBreakpoint as g,
  matchBreakpoint as m
};
