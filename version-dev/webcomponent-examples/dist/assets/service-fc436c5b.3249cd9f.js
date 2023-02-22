import { T as TypedEvent } from "./typed-event-a230184a.ccfb44d2.js";
const mobileMediaQuery = `only screen and (max-width: 767px)`;
const createMediaQueryListener = (query, callback) => {
  const fn = (event) => {
    callback(event);
  };
  const listener = window.matchMedia(query);
  listener.addEventListener("change", fn);
  return {
    matchMedia: listener,
    dispose: () => {
      listener.removeEventListener("change", fn);
    }
  };
};
const createModeListener = (modeChangeCallback) => {
  const listener = createMediaQueryListener(mobileMediaQuery, ({ matches }) => {
    if (matches) {
      modeChangeCallback("mobile");
      return;
    }
    modeChangeCallback("desktop");
  });
  modeChangeCallback(listener.matchMedia.matches ? "mobile" : "desktop");
  return {
    dispose: listener.dispose,
    matchMedia: listener.matchMedia
  };
};
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _ScreenMode_modeChangeListener, _ScreenMode_mode;
class ScreenMode {
  constructor() {
    _ScreenMode_modeChangeListener.set(this, new TypedEvent());
    _ScreenMode_mode.set(this, "desktop");
    createModeListener((mode) => {
      __classPrivateFieldGet(this, _ScreenMode_modeChangeListener, "f").emit(mode);
      __classPrivateFieldSet(this, _ScreenMode_mode, mode, "f");
    });
  }
  get mode() {
    return __classPrivateFieldGet(this, _ScreenMode_mode, "f");
  }
  get onChange() {
    return __classPrivateFieldGet(this, _ScreenMode_modeChangeListener, "f");
  }
}
_ScreenMode_modeChangeListener = /* @__PURE__ */ new WeakMap(), _ScreenMode_mode = /* @__PURE__ */ new WeakMap();
const screenMode = new ScreenMode();
export {
  screenMode as s
};
