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
var _a, _Animation_FALLBACKS, _Animation_cache;
class Animation {
  static ensureCache() {
    if (__classPrivateFieldGet(this, _a, "f", _Animation_cache) !== null)
      return;
    if (typeof window === "undefined") {
      __classPrivateFieldSet(this, _a, Object.assign({}, __classPrivateFieldGet(this, _a, "f", _Animation_FALLBACKS)), "f", _Animation_cache);
      return;
    }
    const root = document.documentElement || document.body;
    const styles = window.getComputedStyle(root);
    const read = (varName, fallback) => {
      var _b;
      const raw = (_b = styles.getPropertyValue(varName)) === null || _b === void 0 ? void 0 : _b.trim();
      if (!raw)
        return fallback;
      return Number.isFinite(raw) ? Number(raw) : fallback;
    };
    __classPrivateFieldSet(this, _a, {
      short: read("--theme-short-time", __classPrivateFieldGet(this, _a, "f", _Animation_FALLBACKS).short),
      default: read("--theme-default-time", __classPrivateFieldGet(this, _a, "f", _Animation_FALLBACKS).default),
      medium: read("--theme-medium-time", __classPrivateFieldGet(this, _a, "f", _Animation_FALLBACKS).medium),
      slow: read("--theme-slow-time", __classPrivateFieldGet(this, _a, "f", _Animation_FALLBACKS).slow),
      xslow: read("--theme-xslow-time", __classPrivateFieldGet(this, _a, "f", _Animation_FALLBACKS).xslow)
    }, "f", _Animation_cache);
  }
  static prefersReducedMotion() {
    if (typeof window === "undefined" || !window.matchMedia)
      return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  static get shortTime() {
    this.ensureCache();
    const t = __classPrivateFieldGet(this, _a, "f", _Animation_cache).short;
    return this.prefersReducedMotion() ? 0 : t;
  }
  static get defaultTime() {
    this.ensureCache();
    const t = __classPrivateFieldGet(this, _a, "f", _Animation_cache).default;
    return this.prefersReducedMotion() ? 0 : t;
  }
  static get mediumTime() {
    this.ensureCache();
    const t = __classPrivateFieldGet(this, _a, "f", _Animation_cache).medium;
    return this.prefersReducedMotion() ? 0 : t;
  }
  static get slowTime() {
    this.ensureCache();
    const t = __classPrivateFieldGet(this, _a, "f", _Animation_cache).slow;
    return this.prefersReducedMotion() ? 0 : t;
  }
  static get xSlowTime() {
    this.ensureCache();
    const t = __classPrivateFieldGet(this, _a, "f", _Animation_cache).xslow;
    return this.prefersReducedMotion() ? 0 : t;
  }
}
_a = Animation;
_Animation_FALLBACKS = { value: {
  short: 0,
  default: 150,
  medium: 300,
  slow: 500,
  xslow: 1e3
} };
_Animation_cache = { value: null };
export {
  Animation as A
};
