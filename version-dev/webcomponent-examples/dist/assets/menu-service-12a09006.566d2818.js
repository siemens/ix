import { m as matchBreakpoint } from "./breakpoints-b8d59fd9.085d9a48.js";
import { T as TypedEvent } from "./typed-event-a230184a.ccfb44d2.js";
var __classPrivateFieldGet$1 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet$1 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _ApplicationLayoutService_supportedBreakpoints, _ApplicationLayoutService_breakpointChangeListener, _ApplicationLayoutService_breakpoint, _ApplicationLayoutService_isDetectionEnabled;
class ApplicationLayoutService {
  constructor() {
    _ApplicationLayoutService_supportedBreakpoints.set(this, ["sm", "md", "lg"]);
    _ApplicationLayoutService_breakpointChangeListener.set(this, new TypedEvent());
    _ApplicationLayoutService_breakpoint.set(this, "lg");
    _ApplicationLayoutService_isDetectionEnabled.set(this, true);
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.onResize.bind(this));
      this.onResize();
    }
  }
  get breakpoint() {
    return __classPrivateFieldGet$1(this, _ApplicationLayoutService_breakpoint, "f");
  }
  get onChange() {
    return __classPrivateFieldGet$1(this, _ApplicationLayoutService_breakpointChangeListener, "f");
  }
  get isDetectionEnabled() {
    return __classPrivateFieldGet$1(this, _ApplicationLayoutService_isDetectionEnabled, "f");
  }
  onResize() {
    if (!__classPrivateFieldGet$1(this, _ApplicationLayoutService_isDetectionEnabled, "f")) {
      return;
    }
    if (!__classPrivateFieldGet$1(this, _ApplicationLayoutService_supportedBreakpoints, "f")) {
      return;
    }
    const matchBreakpoints = [];
    const breakpoints = __classPrivateFieldGet$1(this, _ApplicationLayoutService_supportedBreakpoints, "f");
    breakpoints.forEach((breakpoint) => {
      const match = matchBreakpoint(breakpoint);
      matchBreakpoints.push([breakpoint, match]);
    });
    if (matchBreakpoints.every(([_, match]) => match === false)) {
      __classPrivateFieldGet$1(this, _ApplicationLayoutService_breakpointChangeListener, "f").emit(breakpoints[0]);
      __classPrivateFieldSet$1(this, _ApplicationLayoutService_breakpoint, breakpoints[0], "f");
      return;
    }
    for (const [breakpoint, match] of matchBreakpoints.reverse()) {
      if (match) {
        __classPrivateFieldGet$1(this, _ApplicationLayoutService_breakpointChangeListener, "f").emit(breakpoint);
        __classPrivateFieldSet$1(this, _ApplicationLayoutService_breakpoint, breakpoint, "f");
        break;
      }
    }
  }
  disableBreakpointDetection() {
    __classPrivateFieldSet$1(this, _ApplicationLayoutService_isDetectionEnabled, false, "f");
  }
  enableBreakpointDetection() {
    __classPrivateFieldSet$1(this, _ApplicationLayoutService_isDetectionEnabled, true, "f");
  }
  setBreakpoint(breakpoint) {
    __classPrivateFieldSet$1(this, _ApplicationLayoutService_breakpoint, breakpoint, "f");
    __classPrivateFieldGet$1(this, _ApplicationLayoutService_breakpointChangeListener, "f").emit(breakpoint);
  }
  setBreakpoints(breakpoints) {
    __classPrivateFieldSet$1(this, _ApplicationLayoutService_supportedBreakpoints, breakpoints, "f");
    this.onResize();
  }
}
_ApplicationLayoutService_supportedBreakpoints = /* @__PURE__ */ new WeakMap(), _ApplicationLayoutService_breakpointChangeListener = /* @__PURE__ */ new WeakMap(), _ApplicationLayoutService_breakpoint = /* @__PURE__ */ new WeakMap(), _ApplicationLayoutService_isDetectionEnabled = /* @__PURE__ */ new WeakMap();
const applicationLayoutService = new ApplicationLayoutService();
var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MenuService_isPinned;
class MenuService {
  constructor() {
    this.menuElement = null;
    this.menuExpandChange = new TypedEvent();
    _MenuService_isPinned.set(this, false);
  }
  register(menuElement) {
    if (this.menuElement) {
      console.warn("Menu already defined");
      return;
    }
    this.menuElement = menuElement;
    this.menuElement.addEventListener("expandChange", (event) => {
      this.menuExpandChange.emit(event.detail);
    });
  }
  setIsPinned(pinned) {
    __classPrivateFieldSet(this, _MenuService_isPinned, pinned, "f");
  }
  async open() {
    if (this.menuElement) {
      this.menuElement.toggleMenu(true);
      return true;
    }
    return false;
  }
  async close() {
    if (this.menuElement) {
      this.menuElement.toggleMenu(false);
      return true;
    }
    return false;
  }
  async toggle() {
    if (this.menuElement) {
      this.menuElement.toggleMenu();
      return true;
    }
    return false;
  }
  get nativeElement() {
    return this.menuElement;
  }
  get expandChange() {
    return this.menuExpandChange;
  }
  get isPinned() {
    return __classPrivateFieldGet(this, _MenuService_isPinned, "f");
  }
}
_MenuService_isPinned = /* @__PURE__ */ new WeakMap();
const menuController = new MenuService();
export {
  applicationLayoutService as a,
  menuController as m
};
