import { T as TypedEvent } from "./typed-event-a230184a.ccfb44d2.js";
let supportedModes = ["small", "medium", "large"];
const smallMediaQuery = `only screen and (max-width: 40em)`;
const mediumMediaQuery = `only screen and (min-width: 40.063em) and (max-width: 64em)`;
const largeMediaQuery = `only screen and (min-width: 64.063em)`;
const setSupportedModes = (modes) => supportedModes = modes;
const createMediaQueryListener = (query, callback) => {
  const listener = window.matchMedia(query);
  const fn = (event) => {
    callback(event);
  };
  listener.addEventListener("change", fn);
  return {
    matchMedia: listener,
    dispose: () => {
      listener.removeEventListener("change", fn);
    }
  };
};
const getFallbackMode = (modes, detectedMode) => {
  if (modes.length === 1) {
    return modes[0];
  }
  if (detectedMode === "large" && !modes.includes(detectedMode)) {
    return getFallbackMode(modes, "medium");
  }
  if (detectedMode === "medium" && !modes.includes(detectedMode)) {
    return getFallbackMode(modes, "large");
  }
  if (detectedMode === "small" && !modes.includes(detectedMode)) {
    return getFallbackMode(modes, "medium");
  }
  return detectedMode;
};
const createModeListener = (modeChangeCallback) => {
  const smallListener = createMediaQueryListener(smallMediaQuery, ({ matches }) => {
    if (!matches) {
      return;
    }
    modeChangeCallback(getFallbackMode(supportedModes, "small"));
  });
  const mediumListener = createMediaQueryListener(mediumMediaQuery, ({ matches }) => {
    if (!matches) {
      return;
    }
    modeChangeCallback(getFallbackMode(supportedModes, "medium"));
  });
  const largeListener = createMediaQueryListener(largeMediaQuery, ({ matches }) => {
    if (!matches) {
      return;
    }
    modeChangeCallback(getFallbackMode(supportedModes, "large"));
  });
  const matchSmall = smallListener.matchMedia.matches;
  const matchMedium = mediumListener.matchMedia.matches;
  if (matchSmall) {
    modeChangeCallback(getFallbackMode(supportedModes, "small"));
  } else if (matchMedium) {
    modeChangeCallback(getFallbackMode(supportedModes, "medium"));
  } else {
    modeChangeCallback(getFallbackMode(supportedModes, "large"));
  }
  return {
    dispose: () => {
      smallListener.dispose();
      mediumListener.dispose();
      largeListener.dispose();
    },
    matchMedia: [
      smallListener.matchMedia,
      mediumListener.matchMedia,
      largeListener.matchMedia
    ]
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
var _ScreenMode_modeChangeListener, _ScreenMode_mode, _ScreenMode_isDetectionEnabled;
class ScreenMode {
  constructor() {
    _ScreenMode_modeChangeListener.set(this, new TypedEvent());
    _ScreenMode_mode.set(this, "large");
    _ScreenMode_isDetectionEnabled.set(this, true);
    createModeListener((mode) => {
      if (!__classPrivateFieldGet(this, _ScreenMode_isDetectionEnabled, "f")) {
        return;
      }
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
  get isDetectionEnabled() {
    return __classPrivateFieldGet(this, _ScreenMode_isDetectionEnabled, "f");
  }
  disableModeDetection() {
    __classPrivateFieldSet(this, _ScreenMode_isDetectionEnabled, false, "f");
  }
  enableModeDetection() {
    __classPrivateFieldSet(this, _ScreenMode_isDetectionEnabled, true, "f");
  }
  setMode(mode) {
    __classPrivateFieldSet(this, _ScreenMode_mode, mode, "f");
    __classPrivateFieldGet(this, _ScreenMode_modeChangeListener, "f").emit(mode);
  }
  setSupportedMods(modes) {
    setSupportedModes(modes);
    const mode = getFallbackMode(modes, __classPrivateFieldGet(this, _ScreenMode_mode, "f"));
    this.setMode(mode);
  }
}
_ScreenMode_modeChangeListener = /* @__PURE__ */ new WeakMap(), _ScreenMode_mode = /* @__PURE__ */ new WeakMap(), _ScreenMode_isDetectionEnabled = /* @__PURE__ */ new WeakMap();
const screenMode = new ScreenMode();
export {
  screenMode as s
};
