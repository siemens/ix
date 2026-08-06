import { m as matchBreakpoint } from "./breakpoints-D_Hmobxf-DBbixPq4.js";
import { T as TypedEvent } from "./typed-event-CWshStHZ-DBYwEilm.js";
function debounce(func, delay) {
  let timeoutId;
  return function debounced(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
class ApplicationLayoutService {
  // Keep order of breakpoints
  #supportedBreakpoints = ["sm", "md", "lg"];
  #breakpointChangeListener = new TypedEvent();
  #breakpoint = "lg";
  #isDetectionEnabled = true;
  debouncedOnResize = debounce(this.onResize.bind(this), 50);
  constructor() {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.debouncedOnResize.bind(this));
      this.debouncedOnResize();
    }
  }
  get breakpoint() {
    return this.#breakpoint;
  }
  get onChange() {
    return this.#breakpointChangeListener;
  }
  get isDetectionEnabled() {
    return this.#isDetectionEnabled;
  }
  onResize() {
    if (!this.#isDetectionEnabled) {
      return;
    }
    if (!this.#supportedBreakpoints) {
      return;
    }
    const matchBreakpoints = [];
    const breakpoints = this.#supportedBreakpoints;
    breakpoints.forEach((breakpoint) => {
      const match = matchBreakpoint(breakpoint);
      matchBreakpoints.push([breakpoint, match]);
    });
    if (matchBreakpoints.every(([, match]) => match === false)) {
      let breakPointIndex = 0;
      if (!this.#supportedBreakpoints.includes("lg")) {
        breakPointIndex = matchBreakpoints.length - 1;
      }
      const [breakpoint] = matchBreakpoints[breakPointIndex];
      requestAnimationFrame(() => this.#breakpointChangeListener.emit(breakpoint));
      this.#breakpoint = breakpoint;
      return;
    }
    for (const [breakpoint, match] of matchBreakpoints.reverse()) {
      if (match) {
        requestAnimationFrame(() => this.#breakpointChangeListener.emit(breakpoint));
        this.#breakpoint = breakpoint;
        break;
      }
    }
  }
  disableBreakpointDetection() {
    this.#isDetectionEnabled = false;
  }
  enableBreakpointDetection() {
    this.#isDetectionEnabled = true;
  }
  setBreakpoint(breakpoint) {
    this.#breakpoint = breakpoint;
    this.#breakpointChangeListener.emit(breakpoint);
  }
  setBreakpoints(breakpoints) {
    this.#supportedBreakpoints = breakpoints;
    this.onResize();
  }
}
const applicationLayoutService = new ApplicationLayoutService();
export {
  applicationLayoutService as a
};
