var modules = {};
var timer = {};
var consts = {};
var hasRequiredConsts;
function requireConsts() {
  if (hasRequiredConsts) return consts;
  hasRequiredConsts = 1;
  const isBrowser = typeof window !== "undefined";
  const win = isBrowser ? (
    /** @type {AnimeJSWindow} */
    /** @type {unknown} */
    window
  ) : null;
  const doc = isBrowser ? document : null;
  const tweenTypes = {
    OBJECT: 0,
    ATTRIBUTE: 1,
    CSS: 2,
    TRANSFORM: 3,
    CSS_VAR: 4
  };
  const valueTypes = {
    NUMBER: 0,
    UNIT: 1,
    COLOR: 2,
    COMPLEX: 3
  };
  const tickModes = {
    NONE: 0,
    AUTO: 1,
    FORCE: 2
  };
  const compositionTypes = {
    replace: 0,
    none: 1,
    blend: 2
  };
  const isRegisteredTargetSymbol = /* @__PURE__ */ Symbol();
  const isDomSymbol = /* @__PURE__ */ Symbol();
  const isSvgSymbol = /* @__PURE__ */ Symbol();
  const transformsSymbol = /* @__PURE__ */ Symbol();
  const proxyTargetSymbol = /* @__PURE__ */ Symbol();
  const minValue = 1e-11;
  const maxValue = 1e12;
  const K = 1e3;
  const maxFps = 240;
  const emptyString = "";
  const cssVarPrefix = "var(";
  const emptyArray = [];
  const shortTransforms = /* @__PURE__ */ (() => {
    const map = /* @__PURE__ */ new Map();
    map.set("x", "translateX");
    map.set("y", "translateY");
    map.set("z", "translateZ");
    return map;
  })();
  const validTransforms = [
    "perspective",
    "translateX",
    "translateY",
    "translateZ",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY"
  ];
  const transformsFragmentStrings = /* @__PURE__ */ validTransforms.reduce((a, v) => ({ ...a, [v]: v + "(" }), {});
  const noop = () => {
  };
  const noopModifier = (v) => v;
  const validRgbHslRgx = /\)\s*[-.\d]/;
  const hexTestRgx = /(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i;
  const rgbExecRgx = /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i;
  const rgbaExecRgx = /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i;
  const hslExecRgx = /hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i;
  const hslaExecRgx = /hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i;
  const digitWithExponentRgx = /[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi;
  const unitsExecRgx = /^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i;
  const lowerCaseRgx = /([a-z])([A-Z])/g;
  const relativeValuesExecRgx = /(\*=|\+=|-=)/;
  const cssVariableMatchRgx = /var\(\s*(--[\w-]+)(?:\s*,\s*([^)]+))?\s*\)/;
  consts.K = K;
  consts.compositionTypes = compositionTypes;
  consts.cssVarPrefix = cssVarPrefix;
  consts.cssVariableMatchRgx = cssVariableMatchRgx;
  consts.digitWithExponentRgx = digitWithExponentRgx;
  consts.doc = doc;
  consts.emptyArray = emptyArray;
  consts.emptyString = emptyString;
  consts.hexTestRgx = hexTestRgx;
  consts.hslExecRgx = hslExecRgx;
  consts.hslaExecRgx = hslaExecRgx;
  consts.isBrowser = isBrowser;
  consts.isDomSymbol = isDomSymbol;
  consts.isRegisteredTargetSymbol = isRegisteredTargetSymbol;
  consts.isSvgSymbol = isSvgSymbol;
  consts.lowerCaseRgx = lowerCaseRgx;
  consts.maxFps = maxFps;
  consts.maxValue = maxValue;
  consts.minValue = minValue;
  consts.noop = noop;
  consts.noopModifier = noopModifier;
  consts.proxyTargetSymbol = proxyTargetSymbol;
  consts.relativeValuesExecRgx = relativeValuesExecRgx;
  consts.rgbExecRgx = rgbExecRgx;
  consts.rgbaExecRgx = rgbaExecRgx;
  consts.shortTransforms = shortTransforms;
  consts.tickModes = tickModes;
  consts.transformsFragmentStrings = transformsFragmentStrings;
  consts.transformsSymbol = transformsSymbol;
  consts.tweenTypes = tweenTypes;
  consts.unitsExecRgx = unitsExecRgx;
  consts.validRgbHslRgx = validRgbHslRgx;
  consts.validTransforms = validTransforms;
  consts.valueTypes = valueTypes;
  consts.win = win;
  return consts;
}
var helpers$1 = {};
var globals = {};
var hasRequiredGlobals;
function requireGlobals() {
  if (hasRequiredGlobals) return globals;
  hasRequiredGlobals = 1;
  var consts2 = /* @__PURE__ */ requireConsts();
  const defaults = {
    id: null,
    keyframes: null,
    playbackEase: null,
    playbackRate: 1,
    frameRate: consts2.maxFps,
    loop: 0,
    reversed: false,
    alternate: false,
    autoplay: true,
    persist: false,
    duration: consts2.K,
    delay: 0,
    loopDelay: 0,
    ease: "out(2)",
    composition: consts2.compositionTypes.replace,
    modifier: consts2.noopModifier,
    onBegin: consts2.noop,
    onBeforeUpdate: consts2.noop,
    onUpdate: consts2.noop,
    onLoop: consts2.noop,
    onPause: consts2.noop,
    onComplete: consts2.noop,
    onRender: consts2.noop
  };
  const scope2 = {
    /** @type {Scope} */
    current: null,
    /** @type {Document|DOMTarget} */
    root: consts2.doc
  };
  const globals$1 = {
    /** @type {DefaultsParams} */
    defaults,
    /** @type {Number} */
    precision: 4,
    /** @type {Number} equals 1 in ms mode, 0.001 in s mode */
    timeScale: 1,
    /** @type {Number} */
    tickThreshold: 200,
    /** @type {EditorGlobals|null} */
    editor: null
  };
  const globalVersions = { version: "4.5.0", engine: null };
  if (consts2.isBrowser) {
    if (!consts2.win.AnimeJS) consts2.win.AnimeJS = [];
    consts2.win.AnimeJS.push(globalVersions);
  }
  globals.defaults = defaults;
  globals.globalVersions = globalVersions;
  globals.globals = globals$1;
  globals.scope = scope2;
  return globals;
}
var hasRequiredHelpers$1;
function requireHelpers$1() {
  if (hasRequiredHelpers$1) return helpers$1;
  hasRequiredHelpers$1 = 1;
  var consts2 = /* @__PURE__ */ requireConsts();
  var globals2 = /* @__PURE__ */ requireGlobals();
  const toLowerCase = (str) => str.replace(consts2.lowerCaseRgx, "$1-$2").toLowerCase();
  const stringStartsWith = (str, sub) => str.indexOf(sub) === 0;
  const now = Date.now;
  const isArr = Array.isArray;
  const isObj = (a) => a && a.constructor === Object;
  const isNum = (a) => typeof a === "number" && !isNaN(a);
  const isStr = (a) => typeof a === "string";
  const isFnc = (a) => typeof a === "function";
  const isUnd = (a) => typeof a === "undefined";
  const isNil = (a) => isUnd(a) || a === null;
  const isSvg = (a) => consts2.isBrowser && a instanceof SVGElement;
  const isHex = (a) => consts2.hexTestRgx.test(a);
  const isRgb = (a) => stringStartsWith(a, "rgb");
  const isHsl = (a) => stringStartsWith(a, "hsl");
  const isCol = (a) => isHex(a) || (isRgb(a) || isHsl(a)) && (a[a.length - 1] === ")" || !consts2.validRgbHslRgx.test(a));
  const isKey = (a) => !globals2.globals.defaults.hasOwnProperty(a);
  const svgCssReservedProperties = ["opacity", "rotate", "overflow", "color"];
  const isValidSVGAttribute = (el, propertyName) => {
    if (svgCssReservedProperties.includes(propertyName)) return false;
    if (el.getAttribute(propertyName) || propertyName in el) {
      if (propertyName === "scale") {
        const elParentNode = (
          /** @type {SVGGeometryElement} */
          /** @type {DOMTarget} */
          el.parentNode
        );
        return elParentNode && elParentNode.tagName === "filter";
      }
      return true;
    }
  };
  const parseNumber = (str) => isStr(str) ? parseFloat(
    /** @type {String} */
    str
  ) : (
    /** @type {Number} */
    str
  );
  const pow = Math.pow;
  const sqrt = Math.sqrt;
  const sin = Math.sin;
  const cos = Math.cos;
  const abs = Math.abs;
  const exp = Math.exp;
  const ceil = Math.ceil;
  const floor = Math.floor;
  const asin = Math.asin;
  const max = Math.max;
  const atan2 = Math.atan2;
  const PI = Math.PI;
  const _round = Math.round;
  const clamp = (v, min, max2) => v < min ? min : v > max2 ? max2 : v;
  const round = (v, decimalLength) => {
    if (decimalLength < 0) return v;
    if (!decimalLength) return _round(v);
    const p = 10 ** decimalLength;
    return _round(v * p) / p;
  };
  const snap = (v, increment) => isArr(increment) ? increment.reduce((closest, cv) => abs(cv - v) < abs(closest - v) ? cv : closest) : increment ? _round(v / increment) * increment : v;
  const lerp = (start, end, factor) => factor === 1 ? end : factor === 0 ? start : start + (end - start) * factor;
  const clampInfinity = (v) => v === Infinity ? consts2.maxValue : v === -Infinity ? -consts2.maxValue : v;
  const normalizeTime = (v) => v <= consts2.minValue ? consts2.minValue : clampInfinity(round(v, 11));
  const cloneArray = (a) => isArr(a) ? [...a] : a;
  const mergeObjects = (o1, o2) => {
    const merged = (
      /** @type {T & U} */
      { ...o1 }
    );
    for (let p in o2) {
      const o1p = (
        /** @type {T & U} */
        o1[p]
      );
      merged[p] = isUnd(o1p) ? (
        /** @type {T & U} */
        o2[p]
      ) : o1p;
    }
    return merged;
  };
  const forEachChildren = (parent, callback, reverse, prevProp = "_prev", nextProp = "_next") => {
    let next = parent._head;
    let adjustedNextProp = nextProp;
    if (reverse) {
      next = parent._tail;
      adjustedNextProp = prevProp;
    }
    while (next) {
      const currentNext = next[adjustedNextProp];
      callback(next);
      next = currentNext;
    }
  };
  const removeChild = (parent, child, prevProp = "_prev", nextProp = "_next") => {
    const prev = child[prevProp];
    const next = child[nextProp];
    prev ? prev[nextProp] = next : parent._head = next;
    next ? next[prevProp] = prev : parent._tail = prev;
    child[prevProp] = null;
    child[nextProp] = null;
  };
  const addChild = (parent, child, sortMethod, prevProp = "_prev", nextProp = "_next") => {
    let prev = parent._tail;
    while (prev && sortMethod && sortMethod(prev, child)) prev = prev[prevProp];
    const next = prev ? prev[nextProp] : parent._head;
    prev ? prev[nextProp] = child : parent._head = child;
    next ? next[prevProp] = child : parent._tail = child;
    child[prevProp] = prev;
    child[nextProp] = next;
  };
  helpers$1.PI = PI;
  helpers$1._round = _round;
  helpers$1.abs = abs;
  helpers$1.addChild = addChild;
  helpers$1.asin = asin;
  helpers$1.atan2 = atan2;
  helpers$1.ceil = ceil;
  helpers$1.clamp = clamp;
  helpers$1.clampInfinity = clampInfinity;
  helpers$1.cloneArray = cloneArray;
  helpers$1.cos = cos;
  helpers$1.exp = exp;
  helpers$1.floor = floor;
  helpers$1.forEachChildren = forEachChildren;
  helpers$1.isArr = isArr;
  helpers$1.isCol = isCol;
  helpers$1.isFnc = isFnc;
  helpers$1.isHex = isHex;
  helpers$1.isHsl = isHsl;
  helpers$1.isKey = isKey;
  helpers$1.isNil = isNil;
  helpers$1.isNum = isNum;
  helpers$1.isObj = isObj;
  helpers$1.isRgb = isRgb;
  helpers$1.isStr = isStr;
  helpers$1.isSvg = isSvg;
  helpers$1.isUnd = isUnd;
  helpers$1.isValidSVGAttribute = isValidSVGAttribute;
  helpers$1.lerp = lerp;
  helpers$1.max = max;
  helpers$1.mergeObjects = mergeObjects;
  helpers$1.normalizeTime = normalizeTime;
  helpers$1.now = now;
  helpers$1.parseNumber = parseNumber;
  helpers$1.pow = pow;
  helpers$1.removeChild = removeChild;
  helpers$1.round = round;
  helpers$1.sin = sin;
  helpers$1.snap = snap;
  helpers$1.sqrt = sqrt;
  helpers$1.stringStartsWith = stringStartsWith;
  helpers$1.toLowerCase = toLowerCase;
  return helpers$1;
}
var values = {};
var transforms = {};
var hasRequiredTransforms;
function requireTransforms() {
  if (hasRequiredTransforms) return transforms;
  hasRequiredTransforms = 1;
  var consts2 = /* @__PURE__ */ requireConsts();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  const parseInlineTransforms = (target2, propName, animationInlineStyles) => {
    const inlineTransforms = target2.style.transform;
    if (inlineTransforms) {
      const cachedTransforms = target2[consts2.transformsSymbol];
      let pos = 0;
      const len = inlineTransforms.length;
      let fullTranslateValue;
      while (pos < len) {
        while (pos < len && inlineTransforms.charCodeAt(pos) === 32) pos++;
        if (pos >= len) break;
        const nameStart = pos;
        while (pos < len && inlineTransforms.charCodeAt(pos) !== 40) pos++;
        if (pos >= len) break;
        const name = inlineTransforms.substring(nameStart, pos);
        let depth = 1;
        const valueStart = pos + 1;
        let c1 = -1, c2 = -1;
        pos++;
        while (pos < len && depth > 0) {
          const c = inlineTransforms.charCodeAt(pos);
          if (c === 40) depth++;
          else if (c === 41) depth--;
          else if (c === 44 && depth === 1) {
            if (c1 === -1) c1 = pos;
            else if (c2 === -1) c2 = pos;
          }
          pos++;
        }
        const valueEnd = pos - 1;
        if (name === "translate" || name === "translate3d") {
          if (c1 === -1) {
            cachedTransforms.translateX = inlineTransforms.substring(valueStart, valueEnd).trim();
          } else {
            cachedTransforms.translateX = inlineTransforms.substring(valueStart, c1).trim();
            if (c2 === -1) {
              cachedTransforms.translateY = inlineTransforms.substring(c1 + 1, valueEnd).trim();
            } else {
              cachedTransforms.translateY = inlineTransforms.substring(c1 + 1, c2).trim();
              cachedTransforms.translateZ = inlineTransforms.substring(c2 + 1, valueEnd).trim();
            }
          }
          fullTranslateValue = inlineTransforms.substring(valueStart, valueEnd);
        } else if (name === "scale" || name === "scale3d") {
          if (c1 === -1) {
            cachedTransforms.scale = inlineTransforms.substring(valueStart, valueEnd).trim();
          } else {
            cachedTransforms.scaleX = inlineTransforms.substring(valueStart, c1).trim();
            if (c2 === -1) {
              cachedTransforms.scaleY = inlineTransforms.substring(c1 + 1, valueEnd).trim();
            } else {
              cachedTransforms.scaleY = inlineTransforms.substring(c1 + 1, c2).trim();
              cachedTransforms.scaleZ = inlineTransforms.substring(c2 + 1, valueEnd).trim();
            }
          }
        } else {
          cachedTransforms[name] = inlineTransforms.substring(valueStart, valueEnd);
        }
      }
      if (propName === "translate3d" && fullTranslateValue) {
        if (animationInlineStyles) animationInlineStyles[propName] = fullTranslateValue;
        return fullTranslateValue;
      }
      const cached = cachedTransforms[propName];
      if (!helpers2.isUnd(cached)) {
        if (animationInlineStyles) animationInlineStyles[propName] = cached;
        return cached;
      }
    }
    return propName === "translate3d" ? "0px, 0px, 0px" : propName === "rotate3d" ? "0, 0, 0, 0deg" : helpers2.stringStartsWith(propName, "scale") ? "1" : helpers2.stringStartsWith(propName, "rotate") || helpers2.stringStartsWith(propName, "skew") ? "0deg" : "0px";
  };
  const buildTransformString = (props) => {
    let str = consts2.emptyString;
    for (let i = 0, l = consts2.validTransforms.length; i < l; i++) {
      const key = consts2.validTransforms[i];
      const val = props[key];
      if (val !== void 0) {
        if (key === "translateX") {
          const next = props.translateY;
          if (next !== void 0) {
            const next2 = props.translateZ;
            if (next2 !== void 0) {
              str += `translate3d(${val},${next},${next2}) `;
              i += 2;
            } else {
              str += `translate(${val},${next}) `;
              i += 1;
            }
            continue;
          }
        }
        if (key === "scaleX" && props.scale === void 0) {
          const next = props.scaleY;
          if (next !== void 0) {
            const next2 = props.scaleZ;
            if (next2 !== void 0) {
              str += `scale3d(${val},${next},${next2}) `;
              i += 2;
            } else {
              str += `scale(${val},${next}) `;
              i += 1;
            }
            continue;
          }
        }
        str += `${consts2.transformsFragmentStrings[key]}${val}) `;
      }
      if (key === "rotateZ") {
        if (props.rotate3d !== void 0) str += `rotate3d(${props.rotate3d}) `;
      }
    }
    if (props.matrix !== void 0) str += `matrix(${props.matrix}) `;
    if (props.matrix3d !== void 0) str += `matrix3d(${props.matrix3d}) `;
    return str;
  };
  transforms.buildTransformString = buildTransformString;
  transforms.parseInlineTransforms = parseInlineTransforms;
  return transforms;
}
var registry = {};
var hasRequiredRegistry;
function requireRegistry() {
  if (hasRequiredRegistry) return registry;
  hasRequiredRegistry = 1;
  const alwaysTrue = () => true;
  class TargetAdapter {
    /**
     * @param {(t: any) => boolean} detect
     */
    constructor(detect) {
      this.detect = detect;
      this.props = {};
    }
    /**
     * Registers a property the adapter handles. `setter` receives `(target, value, tween)`. For color and complex tweens `value` is `undefined`, read `tween._numbers` instead. `gate(target)` scopes the prop to a subset of matching targets.
     *
     * @param {string} name
     * @param {(t: any) => any} getter
     * @param {(target: any, value: number, tween: any) => void} setter
     * @param {(t: any) => boolean} [gate]
     */
    registerProperty(name, getter, setter, gate) {
      this.props[name] = {
        get: getter,
        set: setter,
        gate: gate || alwaysTrue
      };
    }
  }
  class Adapter {
    /**
     * @param {((t: any) => boolean) | null} [detect]
     *   Optional gate. When provided, every lookup against this Adapter's target adapters and resolvers is skipped if `detect(target)` returns falsy. Lets the Adapter as a whole short-circuit on unrelated targets.
     */
    constructor(detect) {
      this.detect = detect || null;
      this.targetAdapters = [];
      this.propertyResolvers = [];
    }
    /**
     * Creates and registers a `TargetAdapter` scoped to this Adapter.
     *
     * @param {(t: any) => boolean} detect
     * @return {TargetAdapter}
     */
    registerTargetAdapter(detect) {
      const ta = new TargetAdapter(detect);
      this.targetAdapters.push(ta);
      return ta;
    }
    /**
     * Registers a property resolver scoped to this Adapter. Resolvers are functions invoked at tween creation when no target adapter has claimed the name; the function returns an entry for names it handles or `null` to defer. Use for runtime-matched patterns (Color / Vector axis detection, name-prefix conventions, etc.).
     *
     * @param {(target: any, name: string) => TargetAdapterEntry | null} resolver
     */
    registerPropertyResolver(resolver) {
      if (this.propertyResolvers.indexOf(resolver) === -1) this.propertyResolvers.push(resolver);
    }
  }
  const adapters = (
    /** @type {Adapter[]} */
    []
  );
  function registerAdapter(detect) {
    const a = new Adapter(detect);
    adapters.push(a);
    return a;
  }
  function resolveAdapterEntry(target2, name) {
    if (!target2) return null;
    const al = adapters.length;
    outer: for (let i = 0; i < al; i++) {
      const a = adapters[i];
      if (a.detect && !a.detect(target2)) continue;
      const tas = a.targetAdapters;
      for (let j = 0, m = tas.length; j < m; j++) {
        const ta = tas[j];
        if (ta.detect(target2)) {
          const entry = ta.props[name];
          if (entry && (!entry.gate || entry.gate(target2))) return entry;
          break outer;
        }
      }
    }
    for (let i = 0; i < al; i++) {
      const a = adapters[i];
      if (a.detect && !a.detect(target2)) continue;
      const rs = a.propertyResolvers;
      for (let j = 0, m = rs.length; j < m; j++) {
        const entry = rs[j](target2, name);
        if (entry) return entry;
      }
    }
    return null;
  }
  registry.registerAdapter = registerAdapter;
  registry.resolveAdapterEntry = resolveAdapterEntry;
  return registry;
}
var colors = {};
var hasRequiredColors;
function requireColors() {
  if (hasRequiredColors) return colors;
  hasRequiredColors = 1;
  var consts2 = /* @__PURE__ */ requireConsts();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  const rgbToRgba = (rgbValue) => {
    const rgba = consts2.rgbExecRgx.exec(rgbValue) || consts2.rgbaExecRgx.exec(rgbValue);
    const a = !helpers2.isUnd(rgba[4]) ? +rgba[4] : 1;
    return [
      +rgba[1],
      +rgba[2],
      +rgba[3],
      a
    ];
  };
  const hexToRgba = (hexValue) => {
    const hexLength = hexValue.length;
    const isShort = hexLength === 4 || hexLength === 5;
    return [
      +("0x" + hexValue[1] + hexValue[isShort ? 1 : 2]),
      +("0x" + hexValue[isShort ? 2 : 3] + hexValue[isShort ? 2 : 4]),
      +("0x" + hexValue[isShort ? 3 : 5] + hexValue[isShort ? 3 : 6]),
      hexLength === 5 || hexLength === 9 ? +(+("0x" + hexValue[isShort ? 4 : 7] + hexValue[isShort ? 4 : 8]) / 255).toFixed(3) : 1
    ];
  };
  const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    return t < 1 / 6 ? p + (q - p) * 6 * t : t < 1 / 2 ? q : t < 2 / 3 ? p + (q - p) * (2 / 3 - t) * 6 : p;
  };
  const hslToRgba = (hslValue) => {
    const hsla = consts2.hslExecRgx.exec(hslValue) || consts2.hslaExecRgx.exec(hslValue);
    const h = +hsla[1] / 360;
    const s = +hsla[2] / 100;
    const l = +hsla[3] / 100;
    const a = !helpers2.isUnd(hsla[4]) ? +hsla[4] : 1;
    let r, g, b;
    if (s === 0) {
      r = g = b = l;
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = helpers2.round(hue2rgb(p, q, h + 1 / 3) * 255, 0);
      g = helpers2.round(hue2rgb(p, q, h) * 255, 0);
      b = helpers2.round(hue2rgb(p, q, h - 1 / 3) * 255, 0);
    }
    return [r, g, b, a];
  };
  const convertColorStringValuesToRgbaArray = (colorString) => {
    return helpers2.isRgb(colorString) ? rgbToRgba(colorString) : helpers2.isHex(colorString) ? hexToRgba(colorString) : helpers2.isHsl(colorString) ? hslToRgba(colorString) : [0, 0, 0, 1];
  };
  colors.convertColorStringValuesToRgbaArray = convertColorStringValuesToRgbaArray;
  return colors;
}
var hasRequiredValues;
function requireValues() {
  if (hasRequiredValues) return values;
  hasRequiredValues = 1;
  var consts2 = /* @__PURE__ */ requireConsts();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var transforms2 = /* @__PURE__ */ requireTransforms();
  var registry2 = requireRegistry();
  var colors2 = /* @__PURE__ */ requireColors();
  const setValue = (targetValue, defaultValue) => {
    return helpers2.isUnd(targetValue) ? defaultValue : targetValue;
  };
  const resolveCssVar = (value, target2) => {
    const match = value.match(consts2.cssVariableMatchRgx);
    const el = target2[consts2.isDomSymbol] ? target2 : document.documentElement;
    let computed = getComputedStyle(
      /** @type {HTMLElement} */
      el
    )?.getPropertyValue(match[1]);
    if ((!computed || computed.trim() === consts2.emptyString) && match[2]) computed = match[2].trim();
    return computed || 0;
  };
  const getFunctionValue = (value, target2, index, targets2, store, prevTween) => {
    if (helpers2.isFnc(value)) {
      if (!store) {
        const computed = (
          /** @type {Function} */
          value(target2, index, targets2, prevTween)
        );
        return !isNaN(+computed) ? +computed : computed || 0;
      }
      const func = () => {
        const computed = (
          /** @type {Function} */
          value(target2, index, targets2, prevTween)
        );
        return !isNaN(+computed) ? +computed : computed || 0;
      };
      store.func = func;
      return func();
    }
    if (helpers2.isStr(value) && helpers2.stringStartsWith(value, consts2.cssVarPrefix)) {
      if (!store) return resolveCssVar(
        /** @type {String} */
        value,
        target2
      );
      const func = () => resolveCssVar(
        /** @type {String} */
        value,
        target2
      );
      store.func = func;
      return func();
    }
    return value;
  };
  const getTweenType = (target2, prop) => {
    return !target2[consts2.isDomSymbol] ? consts2.tweenTypes.OBJECT : (
      // Handle SVG attributes
      target2[consts2.isSvgSymbol] && helpers2.isValidSVGAttribute(target2, prop) ? consts2.tweenTypes.ATTRIBUTE : (
        // Handle CSS Transform properties differently than CSS to allow individual animations
        consts2.validTransforms.includes(prop) || consts2.shortTransforms.get(prop) ? consts2.tweenTypes.TRANSFORM : (
          // CSS variables
          helpers2.stringStartsWith(prop, "--") ? consts2.tweenTypes.CSS_VAR : (
            // All other CSS properties
            prop in /** @type {DOMTarget} */
            target2.style ? consts2.tweenTypes.CSS : (
              // Handle other DOM Attributes
              prop in target2 ? consts2.tweenTypes.OBJECT : consts2.tweenTypes.ATTRIBUTE
            )
          )
        )
      )
    );
  };
  const getCSSValue = (target2, propName, animationInlineStyles) => {
    const inlineStyles = target2.style[propName];
    if (inlineStyles && animationInlineStyles) {
      animationInlineStyles[propName] = inlineStyles;
    }
    const value = inlineStyles || getComputedStyle(target2[consts2.proxyTargetSymbol] || target2).getPropertyValue(propName);
    return value === "auto" ? "0" : value;
  };
  const getOriginalAnimatableValue = (target2, propName, tweenType, animationInlineStyles) => {
    const type = !helpers2.isUnd(tweenType) ? tweenType : getTweenType(target2, propName);
    const adapterProp = registry2.resolveAdapterEntry(target2, propName);
    if (adapterProp) {
      const value = adapterProp.get(target2);
      if (value && animationInlineStyles) animationInlineStyles[propName] = value;
      return value == null ? 0 : value;
    }
    if (type === consts2.tweenTypes.OBJECT) {
      const value = target2[propName];
      if (value && animationInlineStyles) animationInlineStyles[propName] = value;
      return value || 0;
    }
    if (type === consts2.tweenTypes.ATTRIBUTE) {
      const value = (
        /** @type {DOMTarget} */
        target2.getAttribute(propName)
      );
      if (value && animationInlineStyles) animationInlineStyles[propName] = value;
      return value;
    }
    return type === consts2.tweenTypes.TRANSFORM ? transforms2.parseInlineTransforms(
      /** @type {DOMTarget} */
      target2,
      propName,
      animationInlineStyles
    ) : type === consts2.tweenTypes.CSS_VAR ? getCSSValue(
      /** @type {DOMTarget} */
      target2,
      propName,
      animationInlineStyles
    ).trimStart() : getCSSValue(
      /** @type {DOMTarget} */
      target2,
      propName,
      animationInlineStyles
    );
  };
  const getRelativeValue = (x, y, operator) => {
    return operator === "-" ? x - y : operator === "+" ? x + y : x * y;
  };
  const createDecomposedValueTargetObject = () => {
    return {
      /** @type {valueTypes} */
      t: consts2.valueTypes.NUMBER,
      n: 0,
      u: null,
      o: null,
      d: null,
      s: null
    };
  };
  const decomposeRawValue = (rawValue, targetObject) => {
    targetObject.t = consts2.valueTypes.NUMBER;
    targetObject.n = 0;
    targetObject.u = null;
    targetObject.o = null;
    targetObject.d = null;
    targetObject.s = null;
    if (!rawValue) return targetObject;
    const num = +rawValue;
    if (!isNaN(num)) {
      targetObject.n = num;
      return targetObject;
    }
    let str = (
      /** @type {String} */
      rawValue
    );
    if (str[1] === "=") {
      targetObject.o = str[0];
      str = str.slice(2);
    }
    const unitMatch = str.includes(" ") ? false : consts2.unitsExecRgx.exec(str);
    if (unitMatch) {
      targetObject.t = consts2.valueTypes.UNIT;
      targetObject.n = +unitMatch[1];
      targetObject.u = unitMatch[2];
      return targetObject;
    } else if (targetObject.o) {
      targetObject.n = +str;
      return targetObject;
    } else if (helpers2.isCol(str)) {
      targetObject.t = consts2.valueTypes.COLOR;
      targetObject.d = colors2.convertColorStringValuesToRgbaArray(str);
      return targetObject;
    } else {
      const matchedNumbers = str.match(consts2.digitWithExponentRgx);
      targetObject.t = consts2.valueTypes.COMPLEX;
      targetObject.d = matchedNumbers ? matchedNumbers.map(Number) : [];
      targetObject.s = str.split(consts2.digitWithExponentRgx) || [];
      return targetObject;
    }
  };
  const decomposeTweenValue = (tween, targetObject) => {
    targetObject.t = tween._valueType;
    targetObject.n = tween._toNumber;
    targetObject.u = tween._unit;
    targetObject.o = null;
    targetObject.d = helpers2.cloneArray(tween._toNumbers);
    targetObject.s = helpers2.cloneArray(tween._strings);
    return targetObject;
  };
  const decomposedOriginalValue = createDecomposedValueTargetObject();
  const composeComplexValue = (tween, progress, precision) => {
    const mod = tween._modifier;
    const fn = tween._fromNumbers;
    const tn = tween._toNumbers;
    const ts = tween._strings;
    let v = ts[0];
    for (let j = 0, l = tn.length; j < l; j++) {
      const n = (
        /** @type {Number} */
        mod(helpers2.round(helpers2.lerp(fn[j], tn[j], progress), precision))
      );
      const s = ts[j + 1];
      v += `${s ? n + s : n}`;
      tween._numbers[j] = n;
    }
    return v;
  };
  values.composeComplexValue = composeComplexValue;
  values.createDecomposedValueTargetObject = createDecomposedValueTargetObject;
  values.decomposeRawValue = decomposeRawValue;
  values.decomposeTweenValue = decomposeTweenValue;
  values.decomposedOriginalValue = decomposedOriginalValue;
  values.getFunctionValue = getFunctionValue;
  values.getOriginalAnimatableValue = getOriginalAnimatableValue;
  values.getRelativeValue = getRelativeValue;
  values.getTweenType = getTweenType;
  values.setValue = setValue;
  return values;
}
var render = {};
var hasRequiredRender;
function requireRender() {
  if (hasRequiredRender) return render;
  hasRequiredRender = 1;
  var globals2 = /* @__PURE__ */ requireGlobals();
  var consts2 = /* @__PURE__ */ requireConsts();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var transforms2 = /* @__PURE__ */ requireTransforms();
  var values2 = /* @__PURE__ */ requireValues();
  const render$1 = (tickable, time2, muteCallbacks, internalRender, tickMode) => {
    const parent = tickable.parent;
    const duration = tickable.duration;
    const completed = tickable.completed;
    const iterationDuration = tickable.iterationDuration;
    const iterationCount = tickable.iterationCount;
    const _currentIteration = tickable._currentIteration;
    const _loopDelay = tickable._loopDelay;
    const _reversed = tickable._reversed;
    const _alternate = tickable._alternate;
    const _hasChildren = tickable._hasChildren;
    const tickableDelay = tickable._delay;
    const tickablePrevAbsoluteTime = tickable._currentTime;
    const tickableEndTime = tickableDelay + iterationDuration;
    const tickableAbsoluteTime = time2 - tickableDelay;
    const tickablePrevTime = helpers2.clamp(tickablePrevAbsoluteTime, -tickableDelay, duration);
    const tickableCurrentTime = helpers2.clamp(tickableAbsoluteTime, -tickableDelay, duration);
    const deltaTime = tickableAbsoluteTime - tickablePrevAbsoluteTime;
    const isCurrentTimeAboveZero = tickableCurrentTime > 0;
    const isCurrentTimeEqualOrAboveDuration = tickableCurrentTime >= duration;
    const isSetter = duration <= consts2.minValue;
    const forcedTick = tickMode === consts2.tickModes.FORCE;
    let isOdd = 0;
    let iterationElapsedTime = tickableAbsoluteTime;
    let hasRendered = 0;
    if (iterationCount > 1) {
      const period = iterationDuration + (isCurrentTimeEqualOrAboveDuration ? 0 : _loopDelay);
      const currentIteration = ~~(tickableCurrentTime / period);
      tickable._currentIteration = helpers2.clamp(currentIteration, 0, iterationCount);
      if (isCurrentTimeEqualOrAboveDuration) tickable._currentIteration--;
      isOdd = tickable._currentIteration % 2;
      iterationElapsedTime = tickableCurrentTime - currentIteration * period || 0;
    }
    const isReversed = _reversed ^ (_alternate && isOdd);
    const _ease = (
      /** @type {Renderable} */
      tickable._ease
    );
    let iterationTime = isCurrentTimeEqualOrAboveDuration ? isReversed ? 0 : duration : isReversed ? iterationDuration - iterationElapsedTime : iterationElapsedTime;
    if (_ease) iterationTime = iterationDuration * _ease(iterationTime / iterationDuration) || 0;
    const isRunningBackwards = (parent ? parent.backwards : tickableAbsoluteTime < tickablePrevAbsoluteTime) ? !isReversed : !!isReversed;
    tickable._currentTime = tickableAbsoluteTime;
    tickable._iterationTime = iterationTime;
    tickable.backwards = isRunningBackwards;
    if (isCurrentTimeAboveZero && !tickable.began) {
      tickable.began = true;
      if (!muteCallbacks && !(parent && (isRunningBackwards || !parent.began))) {
        tickable.onBegin(
          /** @type {CallbackArgument} */
          tickable
        );
      }
    } else if (tickableAbsoluteTime <= 0) {
      tickable.began = false;
    }
    if (!muteCallbacks && !_hasChildren && isCurrentTimeAboveZero && tickable._currentIteration !== _currentIteration) {
      tickable.onLoop(
        /** @type {CallbackArgument} */
        tickable
      );
    }
    if (forcedTick || tickMode === consts2.tickModes.AUTO && // Timeline children render from their offset instead of their delay so the gap left by a truncated sibling is covered on seek.
    (time2 >= (parent && tickableDelay > 0 ? 0 : tickableDelay) && time2 <= tickableEndTime || // Normal render
    time2 <= tickableDelay && tickablePrevTime > tickableDelay || // Playhead is before the animation start time so make sure the animation is at its initial state
    time2 >= tickableEndTime && tickablePrevTime !== duration) || iterationTime >= tickableEndTime && tickablePrevTime !== duration || // iterationTime is per-iteration, compared to the delay to catch a backward seek into a looped iteration's delay region. Exclude the final settled end, where iterationTime clamps to duration and would falsely match the delay region when the delay exceeds the duration.
    iterationTime <= tickableDelay && tickablePrevTime > 0 && !isCurrentTimeEqualOrAboveDuration || time2 <= tickablePrevTime && tickablePrevTime === duration && completed || // Force a render if a seek occurs on an completed animation
    isCurrentTimeEqualOrAboveDuration && !completed && isSetter) {
      if (isCurrentTimeAboveZero) {
        tickable.computeDeltaTime(tickablePrevTime);
        if (!muteCallbacks) tickable.onBeforeUpdate(
          /** @type {CallbackArgument} */
          tickable
        );
      }
      if (!_hasChildren) {
        const forcedRender = forcedTick || (isRunningBackwards ? deltaTime * -1 : deltaTime) >= globals2.globals.tickThreshold;
        const absoluteTime = helpers2.round(tickable._offset + (parent ? parent._offset : 0) + tickableDelay + iterationTime, 12);
        let tween = (
          /** @type {Tween} */
          /** @type {JSAnimation} */
          tickable._head
        );
        let tweenTarget;
        let tweenStyle;
        let tweenTargetTransforms;
        let tweenTargetTransformsProperties;
        let tweenTransformsNeedUpdate = 0;
        while (tween) {
          const tweenComposition = tween._composition;
          const tweenCurrentTime = tween._currentTime;
          const tweenChangeDuration = tween._changeDuration;
          const tweenAbsEndTime = tween._absoluteStartTime + tween._changeDuration;
          const tweenNextRep = tween._nextRep;
          const tweenPrevRep = tween._prevRep;
          const tweenHasComposition = tweenComposition !== consts2.compositionTypes.none;
          const tweenPrevRepEndTime = tweenPrevRep ? tweenPrevRep._absoluteStartTime + tweenPrevRep._changeDuration : 0;
          const tweenPrevRepIsCrossParent = tweenPrevRep && tweenPrevRep.parent !== tween.parent;
          const tweenNextRepTakeover = !tweenNextRep || tweenNextRep._isOverridden ? tweenAbsEndTime : tweenNextRep.parent === tween.parent ? tweenAbsEndTime + tweenNextRep._delay : tweenNextRep._absoluteStartTime < tweenNextRep._absoluteUpdateStartTime ? tweenNextRep._absoluteStartTime : tweenNextRep._absoluteUpdateStartTime;
          if ((forcedRender || // Tail keyframes always re-evaluate the gate so an earlier keyframe cannot leave the target stale by writing past its own range after a backward seek.
          (tweenCurrentTime !== tweenChangeDuration || absoluteTime <= tweenNextRepTakeover || tweenPrevRep && !tweenPrevRepIsCrossParent && (!tweenNextRep || tweenNextRep.parent !== tween.parent)) && // A cross parent tween re-renders its from value from the previous sibling truncated end so the handoff gap holds.
          // A keyframe re-renders its from revert while the next keyframe time is stale so a backward jump over its range cannot leave the next value in place.
          (tweenCurrentTime !== 0 || absoluteTime >= tween._absoluteStartTime || tweenPrevRepIsCrossParent && !tween._hasFromValue && !tweenPrevRep._isOverridden && absoluteTime >= tweenPrevRepEndTime || tweenNextRep && !tweenNextRep._isOverridden && tweenNextRep.parent === tween.parent && tweenNextRep._currentTime !== 0 && iterationTime < tweenNextRep._startTime)) && // Non-first keyframes wait until the iteration reaches their own start before rendering, so the previous keyframe can handle the from-revert when scrubbed backward past this tween's range.
          (!tweenPrevRep || tweenPrevRepIsCrossParent || iterationTime >= tween._startTime) && (!tweenHasComposition || !tween._isOverridden && (!tween._isOverlapped || absoluteTime <= tweenAbsEndTime) && // The next sibling owns the value past its takeover point, so yielding there keeps writes single owner in both directions.
          (!tweenNextRep || tweenNextRep._isOverridden || absoluteTime <= tweenNextRepTakeover) && // The previous sibling owns the value up to its truncated end.
          // Cross parent tweens take over the hold from that point, explicit from values wait for their own start.
          (!tweenPrevRep || (tweenPrevRep._isOverridden || (!tweenPrevRepIsCrossParent ? absoluteTime >= tweenPrevRepEndTime + tween._delay : absoluteTime >= tween._absoluteStartTime || !tween._hasFromValue && absoluteTime >= tweenPrevRepEndTime))))) {
            const tweenNewTime = tween._currentTime = helpers2.clamp(iterationTime - tween._startTime, 0, tweenChangeDuration);
            const tweenProgress = tween._ease(tweenNewTime / tween._updateDuration);
            const tweenModifier = tween._modifier;
            const tweenValueType = tween._valueType;
            const tweenType = tween._tweenType;
            const tweenIsObject = tweenType === consts2.tweenTypes.OBJECT;
            const tweenIsNumber = tweenValueType === consts2.valueTypes.NUMBER;
            const tweenPrecision = tweenIsNumber && tweenIsObject || tweenProgress === 0 || tweenProgress === 1 ? -1 : globals2.globals.precision;
            let value;
            let number2;
            if (tweenIsNumber) {
              value = number2 = /** @type {Number} */
              tweenModifier(helpers2.round(helpers2.lerp(tween._fromNumber, tween._toNumber, tweenProgress), tweenPrecision));
            } else if (tweenValueType === consts2.valueTypes.UNIT) {
              number2 = /** @type {Number} */
              tweenModifier(helpers2.round(helpers2.lerp(tween._fromNumber, tween._toNumber, tweenProgress), tweenPrecision));
              value = `${number2}${tween._unit}`;
            } else if (tweenValueType === consts2.valueTypes.COLOR) {
              const ns = tween._numbers;
              const fn = tween._fromNumbers;
              const tn = tween._toNumbers;
              const omt = 1 - tweenProgress;
              const fr = fn[0], fg = fn[1], fb = fn[2];
              const tr = tn[0], tg = tn[1], tb = tn[2];
              ns[0] = /** @type {Number} */
              tweenModifier(Math.sqrt(fr * fr * omt + tr * tr * tweenProgress));
              ns[1] = /** @type {Number} */
              tweenModifier(Math.sqrt(fg * fg * omt + tg * tg * tweenProgress));
              ns[2] = /** @type {Number} */
              tweenModifier(Math.sqrt(fb * fb * omt + tb * tb * tweenProgress));
              ns[3] = /** @type {Number} */
              tweenModifier(helpers2.lerp(fn[3], tn[3], tweenProgress));
              if (!tween._setter || internalRender) {
                value = `rgba(${helpers2.round(ns[0], 0)},${helpers2.round(ns[1], 0)},${helpers2.round(ns[2], 0)},${ns[3]})`;
              }
            } else if (tweenValueType === consts2.valueTypes.COMPLEX) {
              value = values2.composeComplexValue(tween, tweenProgress, tweenPrecision);
            }
            if (tweenHasComposition) {
              tween._number = number2;
            }
            if (!internalRender && tweenComposition !== consts2.compositionTypes.blend) {
              const tweenProperty = tween.property;
              tweenTarget = tween.target;
              if (tween._setter) {
                tween._setter(tweenTarget, number2, tween);
              } else if (tweenIsObject) {
                tweenTarget[tweenProperty] = value;
              } else if (tweenType === consts2.tweenTypes.ATTRIBUTE) {
                tweenTarget.setAttribute(
                  tweenProperty,
                  /** @type {String} */
                  value
                );
              } else {
                tweenStyle = /** @type {DOMTarget} */
                tweenTarget.style;
                if (tweenType === consts2.tweenTypes.TRANSFORM) {
                  if (tweenTarget !== tweenTargetTransforms) {
                    tweenTargetTransforms = tweenTarget;
                    tweenTargetTransformsProperties = tweenTarget[consts2.transformsSymbol];
                  }
                  tweenTargetTransformsProperties[tweenProperty] = value;
                  tweenTransformsNeedUpdate = 1;
                } else if (tweenType === consts2.tweenTypes.CSS) {
                  tweenStyle[tweenProperty] = value;
                } else if (tweenType === consts2.tweenTypes.CSS_VAR) {
                  tweenStyle.setProperty(
                    tweenProperty,
                    /** @type {String} */
                    value
                  );
                }
              }
              if (isCurrentTimeAboveZero) hasRendered = 1;
            } else {
              tween._value = value;
            }
          } else if (tweenCurrentTime && tweenPrevRep && !tweenPrevRepIsCrossParent && iterationTime < tween._startTime) {
            tween._currentTime = 0;
          }
          if (tweenTransformsNeedUpdate && tween._renderTransforms) {
            tweenStyle.transform = transforms2.buildTransformString(tweenTargetTransformsProperties);
            tweenTransformsNeedUpdate = 0;
          }
          tween = tween._next;
        }
        if (!muteCallbacks && hasRendered) {
          tickable.onRender(
            /** @type {JSAnimation} */
            tickable
          );
        }
      }
      if (!muteCallbacks && isCurrentTimeAboveZero) {
        tickable.onUpdate(
          /** @type {CallbackArgument} */
          tickable
        );
      }
    }
    if (parent && isSetter) {
      if (!muteCallbacks && // (tickableAbsoluteTime > 0 instead) of (tickableAbsoluteTime >= duration) to prevent floating point precision issues
      // see: https://github.com/juliangarnier/anime/issues/1088
      (parent.began && !isRunningBackwards && tickableAbsoluteTime > 0 && !completed || isRunningBackwards && tickableAbsoluteTime <= consts2.minValue && completed)) {
        tickable.onComplete(
          /** @type {CallbackArgument} */
          tickable
        );
        tickable.completed = !isRunningBackwards;
      }
    } else if (isCurrentTimeAboveZero && isCurrentTimeEqualOrAboveDuration) {
      if (iterationCount === Infinity) {
        tickable._startTime += tickable.duration;
      } else if (tickable._currentIteration >= iterationCount - 1) {
        tickable.paused = true;
        if (!completed && !_hasChildren) {
          tickable.completed = true;
          if (!muteCallbacks && !(parent && (isRunningBackwards || !parent.began))) {
            tickable.onComplete(
              /** @type {CallbackArgument} */
              tickable
            );
            tickable._resolve(
              /** @type {CallbackArgument} */
              tickable
            );
          }
        }
      }
    } else {
      tickable.completed = false;
    }
    return hasRendered;
  };
  const tick = (tickable, time2, muteCallbacks, internalRender, tickMode) => {
    const _currentIteration = tickable._currentIteration;
    render$1(tickable, time2, muteCallbacks, internalRender, tickMode);
    if (tickable._hasChildren) {
      const tl = (
        /** @type {Timeline} */
        tickable
      );
      const tlIsRunningBackwards = tl.backwards;
      const tlChildrenTime = internalRender ? time2 : tl._iterationTime;
      const tlCildrenTickTime = helpers2.now();
      let tlChildrenHasRendered = 0;
      let tlChildrenHaveCompleted = true;
      if (!internalRender && tl._currentIteration !== _currentIteration) {
        const tlIterationDuration = tl.iterationDuration;
        helpers2.forEachChildren(tl, (child) => {
          if (!tlIsRunningBackwards) {
            if (!child.completed && !child.backwards && child._currentTime < child.iterationDuration) {
              render$1(child, tlIterationDuration, muteCallbacks, 1, consts2.tickModes.FORCE);
            }
            child.began = false;
            child.completed = false;
          } else {
            const childDuration = child.duration;
            const childStartTime = child._offset + child._delay;
            const childEndTime = childStartTime + childDuration;
            if (!muteCallbacks && childDuration <= consts2.minValue && (!childStartTime || childEndTime === tlIterationDuration)) {
              child.onComplete(child);
            }
          }
        });
        if (!muteCallbacks) tl.onLoop(
          /** @type {CallbackArgument} */
          tl
        );
      }
      helpers2.forEachChildren(tl, (child) => {
        const childTime = helpers2.round((tlChildrenTime - child._offset) * child._speed, 12);
        if (tlIsRunningBackwards && childTime > child._delay + child.duration) return;
        const childTickMode = child._fps < tl._fps ? child.requestTick(tlCildrenTickTime) : tickMode;
        tlChildrenHasRendered += render$1(child, childTime, muteCallbacks, internalRender, childTickMode);
        if (!child.completed && tlChildrenHaveCompleted) tlChildrenHaveCompleted = false;
      }, tlIsRunningBackwards);
      if (!muteCallbacks && tlChildrenHasRendered) tl.onRender(
        /** @type {CallbackArgument} */
        tl
      );
      if ((tlChildrenHaveCompleted || tlIsRunningBackwards) && tl._currentTime >= tl.duration) {
        tl.paused = true;
        if (!tl.completed) {
          tl.completed = true;
          if (!muteCallbacks) {
            tl.onComplete(
              /** @type {CallbackArgument} */
              tl
            );
            tl._resolve(
              /** @type {CallbackArgument} */
              tl
            );
          }
        }
      }
    }
  };
  render.render = render$1;
  render.tick = tick;
  return render;
}
var composition$1 = {};
var styles = {};
var hasRequiredStyles;
function requireStyles() {
  if (hasRequiredStyles) return styles;
  hasRequiredStyles = 1;
  var consts2 = /* @__PURE__ */ requireConsts();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var transforms2 = /* @__PURE__ */ requireTransforms();
  var values2 = /* @__PURE__ */ requireValues();
  const propertyNamesCache = {};
  const sanitizePropertyName = (propertyName, target2, tweenType) => {
    if (tweenType === consts2.tweenTypes.TRANSFORM) {
      const t = consts2.shortTransforms.get(propertyName);
      return t ? t : propertyName;
    } else if (tweenType === consts2.tweenTypes.CSS || // Handle special cases where properties like "strokeDashoffset" needs to be set as "stroke-dashoffset"
    // but properties like "baseFrequency" should stay in lowerCamelCase
    tweenType === consts2.tweenTypes.ATTRIBUTE && (helpers2.isSvg(target2) && propertyName in /** @type {DOMTarget} */
    target2.style)) {
      const cachedPropertyName = propertyNamesCache[propertyName];
      if (cachedPropertyName) {
        return cachedPropertyName;
      } else {
        const lowerCaseName = propertyName ? helpers2.toLowerCase(propertyName) : propertyName;
        propertyNamesCache[propertyName] = lowerCaseName;
        return lowerCaseName;
      }
    } else {
      return propertyName;
    }
  };
  const revertValues = (renderable, inlineStylesOnly = false) => {
    if (renderable._hasChildren) {
      helpers2.forEachChildren(renderable, (child) => revertValues(child, inlineStylesOnly), true);
    } else {
      const animation2 = (
        /** @type {JSAnimation} */
        renderable
      );
      animation2.pause();
      helpers2.forEachChildren(animation2, (tween) => {
        const tweenProperty = tween.property;
        const tweenTarget = tween.target;
        const tweenType = tween._tweenType;
        const originalInlinedValue = tween._inlineValue;
        const tweenHadNoInlineValue = helpers2.isNil(originalInlinedValue) || originalInlinedValue === consts2.emptyString;
        if (tween._setter) {
          if (!inlineStylesOnly && !tweenHadNoInlineValue) {
            values2.decomposeRawValue(originalInlinedValue, values2.decomposedOriginalValue);
            if (values2.decomposedOriginalValue.d) {
              const src = values2.decomposedOriginalValue.d;
              const dst = tween._numbers;
              for (let i = 0, l = src.length; i < l; i++) dst[i] = src[i];
            } else {
              tween._number = values2.decomposedOriginalValue.n;
            }
            tween._setter(tween.target, tween._number, tween);
          }
        } else if (tweenType === consts2.tweenTypes.OBJECT) {
          if (!inlineStylesOnly && !tweenHadNoInlineValue) {
            tweenTarget[tweenProperty] = originalInlinedValue;
          }
        } else if (tweenTarget[consts2.isDomSymbol]) {
          if (tweenType === consts2.tweenTypes.ATTRIBUTE) {
            if (!inlineStylesOnly) {
              if (tweenHadNoInlineValue) {
                tweenTarget.removeAttribute(tweenProperty);
              } else {
                tweenTarget.setAttribute(
                  tweenProperty,
                  /** @type {String} */
                  originalInlinedValue
                );
              }
            }
          } else {
            const targetStyle = (
              /** @type {DOMTarget} */
              tweenTarget.style
            );
            if (tweenType === consts2.tweenTypes.TRANSFORM) {
              const cachedTransforms = tweenTarget[consts2.transformsSymbol];
              if (tweenHadNoInlineValue) {
                delete cachedTransforms[tweenProperty];
              } else {
                cachedTransforms[tweenProperty] = originalInlinedValue;
              }
              if (tween._renderTransforms) {
                if (!Object.keys(cachedTransforms).length) {
                  targetStyle.removeProperty("transform");
                } else {
                  targetStyle.transform = transforms2.buildTransformString(cachedTransforms);
                }
              }
            } else {
              if (tweenHadNoInlineValue) {
                targetStyle.removeProperty(helpers2.toLowerCase(tweenProperty));
              } else {
                targetStyle[tweenProperty] = originalInlinedValue;
              }
            }
          }
        }
        if (tweenTarget[consts2.isDomSymbol] && animation2._tail === tween) {
          animation2.targets.forEach((t) => {
            if (t.getAttribute && t.getAttribute("style") === consts2.emptyString) {
              t.removeAttribute("style");
            }
          });
        }
      });
    }
    return renderable;
  };
  const cleanInlineStyles = (renderable) => revertValues(renderable, true);
  styles.cleanInlineStyles = cleanInlineStyles;
  styles.revertValues = revertValues;
  styles.sanitizePropertyName = sanitizePropertyName;
  return styles;
}
var engine = {};
var clock = {};
var hasRequiredClock;
function requireClock() {
  if (hasRequiredClock) return clock;
  hasRequiredClock = 1;
  var consts2 = /* @__PURE__ */ requireConsts();
  var globals2 = /* @__PURE__ */ requireGlobals();
  class Clock {
    /** @param {Number} [initTime] */
    constructor(initTime = 0) {
      this.deltaTime = 0;
      this._currentTime = initTime;
      this._lastTickTime = initTime;
      this._startTime = initTime;
      this._lastTime = initTime;
      this._frameDuration = consts2.K / consts2.maxFps;
      this._fps = consts2.maxFps;
      this._speed = 1;
      this._hasChildren = false;
      this._head = null;
      this._tail = null;
    }
    get fps() {
      return this._fps;
    }
    set fps(frameRate) {
      const fr = +frameRate;
      const fps = fr < consts2.minValue ? consts2.minValue : fr;
      const frameDuration = consts2.K / fps;
      if (fps > globals2.defaults.frameRate) globals2.defaults.frameRate = fps;
      this._fps = fps;
      this._frameDuration = frameDuration;
    }
    get speed() {
      return this._speed;
    }
    set speed(playbackRate) {
      const pbr = +playbackRate;
      this._speed = pbr < consts2.minValue ? consts2.minValue : pbr;
    }
    /**
     * @param  {Number} time
     * @return {tickModes}
     */
    requestTick(time2) {
      const frameDuration = this._frameDuration;
      const elapsed = time2 - this._lastTickTime;
      const scaled = frameDuration * 0.25;
      const tolerance = scaled < 4 ? scaled : 4;
      if (elapsed + tolerance < frameDuration) return consts2.tickModes.NONE;
      this._lastTickTime = elapsed >= frameDuration ? time2 - elapsed % frameDuration : time2;
      return consts2.tickModes.AUTO;
    }
    /**
     * @param  {Number} time
     * @return {Number}
     */
    computeDeltaTime(time2) {
      const delta = time2 - this._lastTime;
      this.deltaTime = delta;
      this._lastTime = time2;
      return delta;
    }
  }
  clock.Clock = Clock;
  return clock;
}
var additive = {};
var hasRequiredAdditive;
function requireAdditive() {
  if (hasRequiredAdditive) return additive;
  hasRequiredAdditive = 1;
  var consts2 = /* @__PURE__ */ requireConsts();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var render2 = /* @__PURE__ */ requireRender();
  const additive$1 = {
    animation: null,
    update: consts2.noop
  };
  const addAdditiveAnimation = (lookups) => {
    let animation2 = additive$1.animation;
    if (!animation2) {
      animation2 = {
        duration: consts2.minValue,
        computeDeltaTime: consts2.noop,
        _offset: 0,
        _delay: 0,
        _head: null,
        _tail: null
      };
      additive$1.animation = animation2;
      additive$1.update = () => {
        lookups.forEach((propertyAnimation) => {
          for (let propertyName in propertyAnimation) {
            const tweens = propertyAnimation[propertyName];
            const lookupTween = tweens._head;
            if (lookupTween) {
              const valueType = lookupTween._valueType;
              const additiveValues = valueType === consts2.valueTypes.COMPLEX || valueType === consts2.valueTypes.COLOR ? helpers2.cloneArray(lookupTween._fromNumbers) : null;
              let additiveValue = lookupTween._fromNumber;
              let tween = tweens._tail;
              while (tween && tween !== lookupTween) {
                if (additiveValues) {
                  for (let i = 0, l = tween._numbers.length; i < l; i++) additiveValues[i] += tween._numbers[i];
                } else {
                  additiveValue += tween._number;
                }
                tween = tween._prevAdd;
              }
              lookupTween._toNumber = additiveValue;
              lookupTween._toNumbers = additiveValues;
            }
          }
        });
        render2.render(animation2, 1, 1, 0, consts2.tickModes.FORCE);
      };
    }
    return animation2;
  };
  additive.addAdditiveAnimation = addAdditiveAnimation;
  additive.additive = additive$1;
  return additive;
}
var hasRequiredEngine;
function requireEngine() {
  if (hasRequiredEngine) return engine;
  hasRequiredEngine = 1;
  var globals2 = /* @__PURE__ */ requireGlobals();
  var consts2 = /* @__PURE__ */ requireConsts();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var clock2 = /* @__PURE__ */ requireClock();
  var render2 = /* @__PURE__ */ requireRender();
  var additive2 = /* @__PURE__ */ requireAdditive();
  const engineTickMethod = /* @__PURE__ */ (() => consts2.isBrowser ? requestAnimationFrame : setImmediate)();
  const engineCancelMethod = /* @__PURE__ */ (() => consts2.isBrowser ? cancelAnimationFrame : clearImmediate)();
  class Engine extends clock2.Clock {
    /** @param {Number} [initTime] */
    constructor(initTime) {
      super(initTime);
      this.useDefaultMainLoop = true;
      this.pauseOnDocumentHidden = true;
      this.defaults = globals2.defaults;
      this.paused = true;
      this.reqId = 0;
    }
    update() {
      const time2 = this._currentTime = helpers2.now();
      if (this.requestTick(time2)) {
        this.computeDeltaTime(time2);
        const engineSpeed = this._speed;
        const engineFps = this._fps;
        let activeTickable = (
          /** @type {Tickable} */
          this._head
        );
        while (activeTickable) {
          const nextTickable = activeTickable._next;
          if (!activeTickable.paused) {
            render2.tick(
              activeTickable,
              (time2 - activeTickable._startTime) * activeTickable._speed * engineSpeed,
              0,
              // !muteCallbacks
              0,
              // !internalRender
              activeTickable._fps < engineFps ? activeTickable.requestTick(time2) : consts2.tickModes.AUTO
            );
          } else {
            helpers2.removeChild(this, activeTickable);
            this._hasChildren = !!this._tail;
            activeTickable._running = false;
            if (activeTickable.completed && !activeTickable._cancelled) {
              activeTickable.cancel();
            }
          }
          activeTickable = nextTickable;
        }
        additive2.additive.update();
      }
    }
    wake() {
      if (this.useDefaultMainLoop && !this.reqId) {
        this.requestTick(helpers2.now());
        this.reqId = engineTickMethod(tickEngine);
      }
      return this;
    }
    pause() {
      if (!this.reqId) return;
      this.paused = true;
      return killEngine();
    }
    resume() {
      if (!this.paused) return;
      this.paused = false;
      helpers2.forEachChildren(this, (child) => child.resetTime());
      return this.wake();
    }
    // Getter and setter for speed
    get speed() {
      return this._speed * (globals2.globals.timeScale === 1 ? 1 : consts2.K);
    }
    set speed(playbackRate) {
      const speed = playbackRate * globals2.globals.timeScale;
      if (this._speed === speed) return;
      this._speed = speed;
      helpers2.forEachChildren(this, (child) => child.speed = child._speed);
    }
    // Getter and setter for timeUnit
    get timeUnit() {
      return globals2.globals.timeScale === 1 ? "ms" : "s";
    }
    set timeUnit(unit) {
      const secondsScale = 1e-3;
      const isSecond = unit === "s";
      const newScale = isSecond ? secondsScale : 1;
      if (globals2.globals.timeScale !== newScale) {
        globals2.globals.timeScale = newScale;
        globals2.globals.tickThreshold = 200 * newScale;
        const scaleFactor = isSecond ? secondsScale : consts2.K;
        this.defaults.duration *= scaleFactor;
        this._speed *= scaleFactor;
      }
    }
    // Getter and setter for precision
    get precision() {
      return globals2.globals.precision;
    }
    set precision(precision) {
      globals2.globals.precision = precision;
    }
  }
  const engine$1 = /* @__PURE__ */ (() => {
    const engine2 = new Engine(helpers2.now());
    if (consts2.isBrowser) {
      globals2.globalVersions.engine = engine2;
      consts2.doc.addEventListener("visibilitychange", () => {
        if (!engine2.pauseOnDocumentHidden) return;
        consts2.doc.hidden ? engine2.pause() : engine2.resume();
      });
    }
    return engine2;
  })();
  const tickEngine = () => {
    if (engine$1._head) {
      engine$1.reqId = engineTickMethod(tickEngine);
      engine$1.update();
    } else {
      engine$1.reqId = 0;
    }
  };
  const killEngine = () => {
    engineCancelMethod(
      /** @type {NodeJS.Immediate & Number} */
      engine$1.reqId
    );
    engine$1.reqId = 0;
    return engine$1;
  };
  engine.engine = engine$1;
  return engine;
}
var hasRequiredComposition$1;
function requireComposition$1() {
  if (hasRequiredComposition$1) return composition$1;
  hasRequiredComposition$1 = 1;
  var consts2 = /* @__PURE__ */ requireConsts();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var styles2 = /* @__PURE__ */ requireStyles();
  var engine2 = /* @__PURE__ */ requireEngine();
  var additive2 = /* @__PURE__ */ requireAdditive();
  const lookups = {
    /** @type {TweenReplaceLookups} */
    _rep: /* @__PURE__ */ new WeakMap(),
    /** @type {TweenAdditiveLookups} */
    _add: /* @__PURE__ */ new Map()
  };
  const getTweenSiblings = (target2, property, lookup = "_rep") => {
    const lookupMap = lookups[lookup];
    let targetLookup = lookupMap.get(target2);
    if (!targetLookup) {
      targetLookup = {};
      lookupMap.set(target2, targetLookup);
    }
    return targetLookup[property] ? targetLookup[property] : targetLookup[property] = {
      _head: null,
      _tail: null
    };
  };
  const addTweenSortMethod = (p, c) => {
    return p._isOverridden || p._absoluteStartTime > c._absoluteStartTime;
  };
  const overrideTween = (tween) => {
    tween._isOverlapped = 1;
    tween._isOverridden = 1;
    tween._changeDuration = consts2.minValue;
    tween._currentTime = consts2.minValue;
  };
  const composeTween = (tween, siblings) => {
    const tweenCompositionType = tween._composition;
    if (tweenCompositionType === consts2.compositionTypes.replace) {
      const tweenAbsStartTime = tween._absoluteStartTime;
      helpers2.addChild(siblings, tween, addTweenSortMethod, "_prevRep", "_nextRep");
      const prevSibling = tween._prevRep;
      if (prevSibling) {
        const prevParent = prevSibling.parent;
        const prevAbsEndTime = prevSibling._absoluteEndTime;
        if (
          // Check if the previous tween is from a different animation
          tween.parent.id !== prevParent.id && // Check if the animation has loops
          prevParent.iterationCount > 1 && // Check if _absoluteChangeEndTime of last loop overlaps the current tween
          prevAbsEndTime + (prevParent.duration - prevParent.iterationDuration) > tweenAbsStartTime
        ) {
          overrideTween(prevSibling);
          let prevPrevSibling = prevSibling._prevRep;
          while (prevPrevSibling && prevPrevSibling.parent.id === prevParent.id) {
            overrideTween(prevPrevSibling);
            prevPrevSibling = prevPrevSibling._prevRep;
          }
        }
        const absoluteUpdateStartTime = tween._absoluteUpdateStartTime;
        if (prevAbsEndTime > absoluteUpdateStartTime) {
          const prevChangeStartTime = prevSibling._startTime;
          const prevTLOffset = prevAbsEndTime - (prevChangeStartTime + prevSibling._updateDuration);
          const updatedPrevChangeDuration = helpers2.round(absoluteUpdateStartTime - prevTLOffset - prevChangeStartTime, 12);
          prevSibling._changeDuration = updatedPrevChangeDuration;
          prevSibling._currentTime = updatedPrevChangeDuration;
          prevSibling._isOverlapped = 1;
          if (updatedPrevChangeDuration < consts2.minValue) {
            overrideTween(prevSibling);
          }
        }
        const tweenParentTL = tween.parent.parent;
        if (!tweenParentTL || tweenParentTL !== prevParent.parent) {
          let pausePrevParentAnimation = true;
          helpers2.forEachChildren(prevParent, (t) => {
            if (!t._isOverlapped) pausePrevParentAnimation = false;
          });
          if (pausePrevParentAnimation) {
            const prevParentTL = prevParent.parent;
            if (prevParentTL) {
              let pausePrevParentTL = true;
              helpers2.forEachChildren(prevParentTL, (a) => {
                if (a !== prevParent) {
                  helpers2.forEachChildren(a, (t) => {
                    if (!t._isOverlapped) pausePrevParentTL = false;
                  });
                }
              });
              if (pausePrevParentTL) {
                prevParentTL.cancel();
              }
            } else {
              prevParent.cancel();
            }
          }
        }
      }
    } else if (tweenCompositionType === consts2.compositionTypes.blend) {
      const additiveTweenSiblings = getTweenSiblings(tween.target, tween.property, "_add");
      const additiveAnimation = additive2.addAdditiveAnimation(lookups._add);
      let lookupTween = additiveTweenSiblings._head;
      if (!lookupTween) {
        lookupTween = { ...tween };
        lookupTween._composition = consts2.compositionTypes.replace;
        lookupTween._updateDuration = consts2.minValue;
        lookupTween._startTime = 0;
        lookupTween._numbers = helpers2.cloneArray(tween._fromNumbers);
        lookupTween._number = 0;
        lookupTween._next = null;
        lookupTween._prev = null;
        helpers2.addChild(additiveTweenSiblings, lookupTween);
        helpers2.addChild(additiveAnimation, lookupTween);
      }
      const toNumber = tween._toNumber;
      tween._fromNumber = lookupTween._fromNumber - toNumber;
      tween._toNumber = 0;
      tween._numbers = helpers2.cloneArray(tween._fromNumbers);
      tween._number = 0;
      lookupTween._fromNumber = toNumber;
      if (tween._toNumbers.length) {
        const toNumbers = helpers2.cloneArray(tween._toNumbers);
        toNumbers.forEach((value, i) => {
          tween._fromNumbers[i] = lookupTween._fromNumbers[i] - value;
          tween._toNumbers[i] = 0;
        });
        lookupTween._fromNumbers = toNumbers;
      }
      helpers2.addChild(additiveTweenSiblings, tween, null, "_prevAdd", "_nextAdd");
    }
    return tween;
  };
  const removeTweenSliblings = (tween) => {
    const tweenComposition = tween._composition;
    if (tweenComposition !== consts2.compositionTypes.none) {
      const tweenTarget = tween.target;
      const tweenProperty = tween.property;
      const replaceTweensLookup = lookups._rep;
      const replaceTargetProps = replaceTweensLookup.get(tweenTarget);
      const tweenReplaceSiblings = replaceTargetProps[tweenProperty];
      helpers2.removeChild(tweenReplaceSiblings, tween, "_prevRep", "_nextRep");
      if (tweenComposition === consts2.compositionTypes.blend) {
        const addTweensLookup = lookups._add;
        const addTargetProps = addTweensLookup.get(tweenTarget);
        if (!addTargetProps) return;
        const additiveTweenSiblings = addTargetProps[tweenProperty];
        const additiveAnimation = additive2.additive.animation;
        helpers2.removeChild(additiveTweenSiblings, tween, "_prevAdd", "_nextAdd");
        const lookupTween = additiveTweenSiblings._head;
        if (lookupTween && lookupTween === additiveTweenSiblings._tail) {
          helpers2.removeChild(additiveTweenSiblings, lookupTween, "_prevAdd", "_nextAdd");
          helpers2.removeChild(additiveAnimation, lookupTween);
          let shouldClean = true;
          for (let prop in addTargetProps) {
            if (addTargetProps[prop]._head) {
              shouldClean = false;
              break;
            }
          }
          if (shouldClean) {
            addTweensLookup.delete(tweenTarget);
          }
        }
      }
    }
    return tween;
  };
  const removeTargetsFromJSAnimation = (targetsArray, animation2, propertyName) => {
    let tweensMatchesTargets = false;
    helpers2.forEachChildren(animation2, (tween) => {
      const tweenTarget = tween.target;
      if (targetsArray.includes(tweenTarget)) {
        const tweenName = tween.property;
        const tweenType = tween._tweenType;
        const normalizePropName = styles2.sanitizePropertyName(propertyName, tweenTarget, tweenType);
        if (!normalizePropName || normalizePropName && normalizePropName === tweenName) {
          if (tween.parent._tail === tween && tween._tweenType === consts2.tweenTypes.TRANSFORM && tween._prev && tween._prev._tweenType === consts2.tweenTypes.TRANSFORM) {
            tween._prev._renderTransforms = 1;
          }
          helpers2.removeChild(animation2, tween);
          removeTweenSliblings(tween);
          tweensMatchesTargets = true;
        }
      }
    }, true);
    return tweensMatchesTargets;
  };
  const removeTargetsFromRenderable = (targetsArray, renderable, propertyName) => {
    const parent = (
      /** @type {Renderable|typeof engine} **/
      renderable ? renderable : engine2.engine
    );
    let removeMatches;
    if (parent._hasChildren) {
      let iterationDuration = 0;
      helpers2.forEachChildren(parent, (child) => {
        if (!child._hasChildren) {
          removeMatches = removeTargetsFromJSAnimation(
            targetsArray,
            /** @type {JSAnimation} */
            child,
            propertyName
          );
          if (removeMatches && !child._head) {
            child.cancel();
            helpers2.removeChild(parent, child);
          } else {
            const childTLOffset = child._offset + child._delay;
            const childDur = childTLOffset + child.duration;
            if (childDur > iterationDuration) {
              iterationDuration = childDur;
            }
          }
        }
        if (child._head) {
          removeTargetsFromRenderable(targetsArray, child, propertyName);
        } else {
          child._hasChildren = false;
        }
      }, true);
      if (!helpers2.isUnd(
        /** @type {Renderable} */
        parent.iterationDuration
      )) {
        parent.iterationDuration = iterationDuration;
      }
    } else {
      removeMatches = removeTargetsFromJSAnimation(
        targetsArray,
        /** @type {JSAnimation} */
        parent,
        propertyName
      );
    }
    if (removeMatches && !parent._head) {
      parent._hasChildren = false;
      if (
        /** @type {Renderable} */
        parent.cancel
      ) parent.cancel();
    }
  };
  composition$1.composeTween = composeTween;
  composition$1.getTweenSiblings = getTweenSiblings;
  composition$1.overrideTween = overrideTween;
  composition$1.removeTargetsFromRenderable = removeTargetsFromRenderable;
  composition$1.removeTweenSliblings = removeTweenSliblings;
  return composition$1;
}
var hasRequiredTimer;
function requireTimer() {
  if (hasRequiredTimer) return timer;
  hasRequiredTimer = 1;
  var consts2 = /* @__PURE__ */ requireConsts();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var globals2 = /* @__PURE__ */ requireGlobals();
  var values2 = /* @__PURE__ */ requireValues();
  var render2 = /* @__PURE__ */ requireRender();
  var composition2 = /* @__PURE__ */ requireComposition$1();
  var clock2 = /* @__PURE__ */ requireClock();
  var engine2 = /* @__PURE__ */ requireEngine();
  const resetTimerProperties = (timer2) => {
    timer2.paused = true;
    timer2.began = false;
    timer2.completed = false;
    return timer2;
  };
  const reviveTimer = (timer2) => {
    if (!timer2._cancelled) return timer2;
    if (timer2._hasChildren) {
      helpers2.forEachChildren(timer2, reviveTimer);
    } else {
      helpers2.forEachChildren(timer2, (tween) => {
        if (tween._composition !== consts2.compositionTypes.none) {
          composition2.composeTween(tween, composition2.getTweenSiblings(tween.target, tween.property));
        }
      });
    }
    timer2._cancelled = 0;
    return timer2;
  };
  let timerId = 0;
  const sortByPriority = (prev, child) => prev._priority > child._priority;
  class Timer extends clock2.Clock {
    /**
     * @param {TimerParams} [parameters]
     * @param {Timeline} [parent]
     * @param {Number} [parentPosition]
     */
    constructor(parameters = {}, parent = null, parentPosition = 0) {
      super(0);
      ++timerId;
      const {
        id,
        delay,
        duration,
        reversed,
        alternate,
        loop,
        loopDelay,
        autoplay,
        frameRate,
        playbackRate,
        priority,
        onComplete,
        onLoop,
        onPause,
        onBegin,
        onBeforeUpdate,
        onUpdate
      } = parameters;
      if (globals2.scope.current) globals2.scope.current.register(this);
      const timerInitTime = parent ? 0 : engine2.engine._lastTickTime;
      const timerDefaults = parent ? parent.defaults : globals2.globals.defaults;
      const timerDelay = (
        /** @type {Number} */
        helpers2.isFnc(delay) || helpers2.isUnd(delay) ? timerDefaults.delay : +delay
      );
      const timerDuration = helpers2.isFnc(duration) || helpers2.isUnd(duration) ? Infinity : +duration;
      const timerLoop = values2.setValue(loop, timerDefaults.loop);
      const timerLoopDelay = values2.setValue(loopDelay, timerDefaults.loopDelay);
      let timerIterationCount = timerLoop === true || timerLoop === Infinity || /** @type {Number} */
      timerLoop < 0 ? Infinity : (
        /** @type {Number} */
        timerLoop + 1
      );
      let offsetPosition = 0;
      if (parent) {
        offsetPosition = parentPosition;
      } else {
        if (!engine2.engine.reqId) engine2.engine.requestTick(helpers2.now());
        offsetPosition = (engine2.engine._lastTickTime - engine2.engine._startTime) * globals2.globals.timeScale;
      }
      this.id = !helpers2.isUnd(id) ? id : timerId;
      this.parent = parent;
      this.duration = helpers2.clampInfinity((timerDuration + timerLoopDelay) * timerIterationCount - timerLoopDelay) || consts2.minValue;
      this.backwards = false;
      this.paused = true;
      this.began = false;
      this.completed = false;
      this.onBegin = onBegin || timerDefaults.onBegin;
      this.onBeforeUpdate = onBeforeUpdate || timerDefaults.onBeforeUpdate;
      this.onUpdate = onUpdate || timerDefaults.onUpdate;
      this.onLoop = onLoop || timerDefaults.onLoop;
      this.onPause = onPause || timerDefaults.onPause;
      this.onComplete = onComplete || timerDefaults.onComplete;
      this.iterationDuration = timerDuration;
      this.iterationCount = timerIterationCount;
      this._autoplay = parent ? false : values2.setValue(autoplay, timerDefaults.autoplay);
      this._offset = offsetPosition;
      this._delay = timerDelay;
      this._loopDelay = timerLoopDelay;
      this._iterationTime = 0;
      this._currentIteration = 0;
      this._resolve = consts2.noop;
      this._running = false;
      this._reversed = +values2.setValue(reversed, timerDefaults.reversed);
      this._reverse = this._reversed;
      this._cancelled = 0;
      this._alternate = values2.setValue(alternate, timerDefaults.alternate);
      this._prev = null;
      this._next = null;
      this._lastTickTime = timerInitTime;
      this._startTime = timerInitTime;
      this._lastTime = timerInitTime;
      this._fps = values2.setValue(frameRate, timerDefaults.frameRate);
      this._speed = values2.setValue(playbackRate, timerDefaults.playbackRate);
      this._priority = +values2.setValue(priority, 1);
    }
    get cancelled() {
      return !!this._cancelled;
    }
    set cancelled(cancelled) {
      cancelled ? this.cancel() : this.reset(true).play();
    }
    get currentTime() {
      return helpers2.clamp(helpers2.round(this._currentTime, globals2.globals.precision), -this._delay, this.duration);
    }
    set currentTime(time2) {
      const paused = this.paused;
      this.pause().seek(+time2);
      if (!paused) this.resume();
    }
    get iterationCurrentTime() {
      return helpers2.clamp(helpers2.round(this._iterationTime, globals2.globals.precision), 0, this.iterationDuration);
    }
    set iterationCurrentTime(time2) {
      this.currentTime = this.iterationDuration * this._currentIteration + time2;
    }
    get progress() {
      return helpers2.clamp(helpers2.round(this._currentTime / this.duration, 10), 0, 1);
    }
    set progress(progress) {
      this.currentTime = this.duration * progress;
    }
    get iterationProgress() {
      return helpers2.clamp(helpers2.round(this._iterationTime / this.iterationDuration, 10), 0, 1);
    }
    set iterationProgress(progress) {
      const iterationDuration = this.iterationDuration;
      this.currentTime = iterationDuration * this._currentIteration + iterationDuration * progress;
    }
    get currentIteration() {
      return this._currentIteration;
    }
    set currentIteration(iterationCount) {
      this.currentTime = this.iterationDuration * helpers2.clamp(+iterationCount, 0, this.iterationCount - 1);
    }
    get reversed() {
      return !!this._reversed;
    }
    set reversed(reverse) {
      reverse ? this.reverse() : this.play();
    }
    get speed() {
      return super.speed;
    }
    set speed(playbackRate) {
      super.speed = playbackRate;
      this.resetTime();
    }
    /**
     * @param  {Boolean} [softReset]
     * @return {this}
     */
    reset(softReset = false) {
      reviveTimer(this);
      if (this._reversed && !this._reverse) this.reversed = false;
      this._iterationTime = this.iterationDuration;
      render2.tick(this, 0, 1, ~~softReset, consts2.tickModes.FORCE);
      resetTimerProperties(this);
      if (this._hasChildren) {
        helpers2.forEachChildren(this, resetTimerProperties);
      }
      return this;
    }
    /**
     * @param  {Boolean} internalRender
     * @return {this}
     */
    init(internalRender = false) {
      this.fps = this._fps;
      this.speed = this._speed;
      if (!internalRender && this._hasChildren) {
        render2.tick(this, this.duration, 1, ~~internalRender, consts2.tickModes.FORCE);
      }
      this.reset(internalRender);
      const autoplay = this._autoplay;
      if (autoplay === true) {
        this.resume();
      } else if (autoplay && !helpers2.isUnd(
        /** @type {ScrollObserver} */
        autoplay.linked
      )) {
        autoplay.link(this);
      }
      return this;
    }
    /** @return {this} */
    resetTime() {
      const timeScale = 1 / (this._speed * engine2.engine._speed);
      this._startTime = helpers2.now() - (this._currentTime + this._delay) * timeScale;
      return this;
    }
    /** @return {this} */
    pause() {
      if (this.paused) return this;
      this.paused = true;
      this.onPause(this);
      return this;
    }
    /** @return {this} */
    resume() {
      if (!this.paused) return this;
      this.paused = false;
      if (this.duration <= consts2.minValue && !this._hasChildren) {
        render2.tick(this, consts2.minValue, 0, 0, consts2.tickModes.FORCE);
      } else {
        if (!this._running) {
          helpers2.addChild(engine2.engine, this, sortByPriority);
          engine2.engine._hasChildren = true;
          this._running = true;
        }
        this.resetTime();
        this._startTime -= 12;
        engine2.engine.wake();
      }
      return this;
    }
    /** @return {this} */
    restart() {
      return this.reset().resume();
    }
    /**
     * @param  {Number} time
     * @param  {Boolean|Number} [muteCallbacks]
     * @param  {Boolean|Number} [internalRender]
     * @return {this}
     */
    seek(time2, muteCallbacks = 0, internalRender = 0) {
      reviveTimer(this);
      this.completed = false;
      const isPaused = this.paused;
      this.paused = true;
      render2.tick(this, time2 + this._delay, ~~muteCallbacks, ~~internalRender, consts2.tickModes.AUTO);
      return isPaused ? this : this.resume();
    }
    /** @return {this} */
    alternate() {
      const reversed = this._reversed;
      const count = this.iterationCount;
      const duration = this.iterationDuration;
      const iterations = count === Infinity ? helpers2.floor(consts2.maxValue / duration) : count;
      this._reversed = +(this._alternate && !(iterations % 2) ? reversed : !reversed);
      if (count === Infinity) {
        this.iterationProgress = this._reversed ? 1 - this.iterationProgress : this.iterationProgress;
      } else {
        this.seek(duration * iterations - this._currentTime);
      }
      this.resetTime();
      return this;
    }
    /** @return {this} */
    play() {
      if (this._reversed) this.alternate();
      return this.resume();
    }
    /** @return {this} */
    reverse() {
      if (!this._reversed) this.alternate();
      return this.resume();
    }
    // TODO: Move all the animation / tweens / children related code to Animation / Timeline
    /** @return {this} */
    cancel() {
      if (this._hasChildren) {
        helpers2.forEachChildren(this, (child) => child.cancel(), true);
      } else {
        helpers2.forEachChildren(this, composition2.removeTweenSliblings);
      }
      this._cancelled = 1;
      return this.pause();
    }
    /**
     * @param  {Number} newDuration
     * @return {this}
     */
    stretch(newDuration) {
      const currentDuration = this.duration;
      const normlizedDuration = helpers2.normalizeTime(newDuration);
      if (currentDuration === normlizedDuration) return this;
      const timeScale = newDuration / currentDuration;
      const isSetter = newDuration <= consts2.minValue;
      this.duration = isSetter ? consts2.minValue : normlizedDuration;
      this.iterationDuration = isSetter ? consts2.minValue : helpers2.normalizeTime(this.iterationDuration * timeScale);
      this._offset *= timeScale;
      this._delay *= timeScale;
      this._loopDelay *= timeScale;
      return this;
    }
    /**
      * Cancels the timer by seeking it back to 0 and reverting the attached scroller if necessary
      * @return {this}
      */
    revert() {
      render2.tick(this, 0, 1, 0, consts2.tickModes.AUTO);
      const ap = (
        /** @type {ScrollObserver} */
        this._autoplay
      );
      if (ap && ap.linked && ap.linked === this) ap.revert();
      return this.cancel();
    }
    /**
      * Imediatly completes the timer, cancels it and triggers the onComplete callback
      * @param  {Boolean|Number} [muteCallbacks]
      * @return {this}
      */
    complete(muteCallbacks = 0) {
      return this.seek(this.duration, muteCallbacks).cancel();
    }
    /**
     * @typedef {this & {then: null}} ResolvedTimer
     */
    /**
     * @param  {Callback<ResolvedTimer>} [callback]
     * @return Promise<this>
     */
    then(callback = consts2.noop) {
      const then = this.then;
      const onResolve = () => {
        this.then = null;
        callback(
          /** @type {ResolvedTimer} */
          this
        );
        this.then = then;
        this._resolve = consts2.noop;
      };
      return new Promise((r) => {
        this._resolve = () => r(onResolve());
        if (this.completed) this._resolve();
        return this;
      });
    }
  }
  const createTimer = (parameters) => new Timer(parameters, null, 0).init();
  timer.Timer = Timer;
  timer.createTimer = createTimer;
  return timer;
}
var animation = {};
var targets = {};
var hasRequiredTargets;
function requireTargets() {
  if (hasRequiredTargets) return targets;
  hasRequiredTargets = 1;
  var globals2 = /* @__PURE__ */ requireGlobals();
  var consts2 = /* @__PURE__ */ requireConsts();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  function getNodeList(v) {
    const n = helpers2.isStr(v) ? globals2.scope.root.querySelectorAll(v) : v;
    if (n instanceof NodeList || n instanceof HTMLCollection) return n;
  }
  function parseTargets(targets2) {
    if (helpers2.isNil(targets2)) return (
      /** @type {TargetsArray} */
      []
    );
    if (!consts2.isBrowser) return (
      /** @type {JSTargetsArray} */
      helpers2.isArr(targets2) && targets2.flat(Infinity) || [targets2]
    );
    if (helpers2.isArr(targets2)) {
      const flattened = targets2.flat(Infinity);
      const parsed = [];
      for (let i = 0, l = flattened.length; i < l; i++) {
        const item = flattened[i];
        if (!helpers2.isNil(item)) {
          const nodeList2 = getNodeList(item);
          if (nodeList2) {
            for (let j = 0, jl = nodeList2.length; j < jl; j++) {
              const subItem = nodeList2[j];
              if (!helpers2.isNil(subItem)) {
                let isDuplicate = false;
                for (let k = 0, kl = parsed.length; k < kl; k++) {
                  if (parsed[k] === subItem) {
                    isDuplicate = true;
                    break;
                  }
                }
                if (!isDuplicate) {
                  parsed.push(subItem);
                }
              }
            }
          } else {
            let isDuplicate = false;
            for (let j = 0, jl = parsed.length; j < jl; j++) {
              if (parsed[j] === item) {
                isDuplicate = true;
                break;
              }
            }
            if (!isDuplicate) {
              parsed.push(item);
            }
          }
        }
      }
      return parsed;
    }
    const nodeList = getNodeList(targets2);
    if (nodeList) return (
      /** @type {DOMTargetsArray} */
      Array.from(nodeList)
    );
    return (
      /** @type {TargetsArray} */
      [targets2]
    );
  }
  function registerTargets(targets2) {
    const parsedTargetsArray = parseTargets(targets2);
    const parsedTargetsLength = parsedTargetsArray.length;
    for (let i = 0; i < parsedTargetsLength; i++) {
      const target2 = parsedTargetsArray[i];
      if (!target2[consts2.isRegisteredTargetSymbol]) {
        target2[consts2.isRegisteredTargetSymbol] = true;
        const isSvgType = helpers2.isSvg(target2);
        const isDom = (
          /** @type {DOMTarget} */
          target2.nodeType || isSvgType
        );
        if (isDom) {
          target2[consts2.isDomSymbol] = true;
          target2[consts2.isSvgSymbol] = isSvgType;
          target2[consts2.transformsSymbol] = {};
        }
      }
    }
    return parsedTargetsArray;
  }
  targets.getNodeList = getNodeList;
  targets.parseTargets = parseTargets;
  targets.registerTargets = registerTargets;
  return targets;
}
var units = {};
var hasRequiredUnits;
function requireUnits() {
  if (hasRequiredUnits) return units;
  hasRequiredUnits = 1;
  var consts2 = /* @__PURE__ */ requireConsts();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  const angleUnitsMap = { "deg": 1, "rad": 180 / helpers2.PI, "turn": 360 };
  const convertedValuesCache = {};
  const convertValueUnit = (el, decomposedValue, unit, force = false) => {
    const currentUnit = decomposedValue.u;
    const currentNumber = decomposedValue.n;
    if (decomposedValue.t === consts2.valueTypes.UNIT && currentUnit === unit) {
      return decomposedValue;
    }
    const cachedKey = currentNumber + currentUnit + unit;
    const cached = convertedValuesCache[cachedKey];
    if (!helpers2.isUnd(cached) && !force) {
      decomposedValue.n = cached;
    } else {
      let convertedValue;
      if (currentUnit in angleUnitsMap) {
        convertedValue = currentNumber * angleUnitsMap[currentUnit] / angleUnitsMap[unit];
      } else {
        const baseline = 100;
        const tempEl = (
          /** @type {DOMTarget} */
          el.cloneNode()
        );
        const parentNode = el.parentNode;
        const parentEl = parentNode && parentNode !== consts2.doc ? parentNode : consts2.doc.body;
        parentEl.appendChild(tempEl);
        const elStyle = tempEl.style;
        elStyle.width = baseline + currentUnit;
        const currentUnitWidth = (
          /** @type {HTMLElement} */
          tempEl.offsetWidth || baseline
        );
        elStyle.width = baseline + unit;
        const newUnitWidth = (
          /** @type {HTMLElement} */
          tempEl.offsetWidth || baseline
        );
        const factor = currentUnitWidth / newUnitWidth;
        parentEl.removeChild(tempEl);
        convertedValue = factor * currentNumber;
      }
      decomposedValue.n = convertedValue;
      convertedValuesCache[cachedKey] = convertedValue;
    }
    decomposedValue.u = unit;
    return decomposedValue;
  };
  units.convertValueUnit = convertValueUnit;
  return units;
}
var parser = {};
var none = {};
var hasRequiredNone;
function requireNone() {
  if (hasRequiredNone) return none;
  hasRequiredNone = 1;
  const none$1 = (t) => t;
  none.none = none$1;
  return none;
}
var hasRequiredParser;
function requireParser() {
  if (hasRequiredParser) return parser;
  hasRequiredParser = 1;
  var consts2 = /* @__PURE__ */ requireConsts();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var none2 = /* @__PURE__ */ requireNone();
  const easeInPower = (p = 1.68) => (t) => helpers2.pow(t, +p);
  const easeTypes = {
    in: (easeIn) => (t) => easeIn(t),
    out: (easeIn) => (t) => 1 - easeIn(1 - t),
    inOut: (easeIn) => (t) => t < 0.5 ? easeIn(t * 2) / 2 : 1 - easeIn(t * -2 + 2) / 2,
    outIn: (easeIn) => (t) => t < 0.5 ? (1 - easeIn(1 - t * 2)) / 2 : (easeIn(t * 2 - 1) + 1) / 2
  };
  const halfPI = helpers2.PI / 2;
  const doublePI = helpers2.PI * 2;
  const easeInFunctions = {
    [consts2.emptyString]: easeInPower,
    Quad: easeInPower(2),
    Cubic: easeInPower(3),
    Quart: easeInPower(4),
    Quint: easeInPower(5),
    /** @type {EasingFunction} */
    Sine: (t) => 1 - helpers2.cos(t * halfPI),
    /** @type {EasingFunction} */
    Circ: (t) => 1 - helpers2.sqrt(1 - t * t),
    /** @type {EasingFunction} */
    Expo: (t) => t ? helpers2.pow(2, 10 * t - 10) : 0,
    /** @type {EasingFunction} */
    Bounce: (t) => {
      let pow2, b = 4;
      while (t < ((pow2 = helpers2.pow(2, --b)) - 1) / 11) ;
      return 1 / helpers2.pow(4, 3 - b) - 7.5625 * helpers2.pow((pow2 * 3 - 2) / 22 - t, 2);
    },
    /** @type {BackEasing} */
    Back: (overshoot = 1.7) => (t) => (+overshoot + 1) * t * t * t - +overshoot * t * t,
    /** @type {ElasticEasing} */
    Elastic: (amplitude = 1, period = 0.3) => {
      const a = helpers2.clamp(+amplitude, 1, 10);
      const p = helpers2.clamp(+period, consts2.minValue, 2);
      const s = p / doublePI * helpers2.asin(1 / a);
      const e = doublePI / p;
      return (t) => t === 0 || t === 1 ? t : -a * helpers2.pow(2, -10 * (1 - t)) * helpers2.sin((1 - t - s) * e);
    }
  };
  const eases = /* @__PURE__ */ (() => {
    const list = { linear: none2.none, none: none2.none };
    for (let type in easeTypes) {
      for (let name in easeInFunctions) {
        const easeIn = easeInFunctions[name];
        const easeType = easeTypes[type];
        list[type + name] = /** @type {EasingFunctionWithParams|EasingFunction} */
        name === consts2.emptyString || name === "Back" || name === "Elastic" ? (a, b) => easeType(
          /** @type {EasingFunctionWithParams} */
          easeIn(a, b)
        ) : easeType(
          /** @type {EasingFunction} */
          easeIn
        );
      }
    }
    return (
      /** @type {EasesFunctions} */
      list
    );
  })();
  const easesLookups = { linear: none2.none, none: none2.none };
  const parseEaseString = (string) => {
    if (easesLookups[string]) return easesLookups[string];
    if (string.indexOf("(") <= -1) {
      const hasParams = easeTypes[string] || string.includes("Back") || string.includes("Elastic");
      const parsedFn = (
        /** @type {EasingFunction} */
        hasParams ? (
          /** @type {EasingFunctionWithParams} */
          eases[string]()
        ) : eases[string]
      );
      return parsedFn ? easesLookups[string] = parsedFn : none2.none;
    } else {
      const split2 = string.slice(0, -1).split("(");
      const parsedFn = (
        /** @type {EasingFunctionWithParams} */
        eases[split2[0]]
      );
      return parsedFn ? easesLookups[string] = parsedFn(...split2[1].split(",")) : none2.none;
    }
  };
  const deprecated = ["steps(", "irregular(", "linear(", "cubicBezier("];
  const parseEase = (ease) => {
    if (helpers2.isStr(ease)) {
      for (let i = 0, l = deprecated.length; i < l; i++) {
        if (helpers2.stringStartsWith(ease, deprecated[i])) {
          console.warn(`String syntax for \`ease: "${ease}"\` has been removed from the core and replaced by importing and passing the easing function directly: \`ease: ${ease}\``);
          return none2.none;
        }
      }
    }
    const easeFunc = helpers2.isFnc(ease) ? ease : helpers2.isStr(ease) ? parseEaseString(
      /** @type {String} */
      ease
    ) : none2.none;
    return easeFunc;
  };
  parser.easeInPower = easeInPower;
  parser.easeTypes = easeTypes;
  parser.eases = eases;
  parser.parseEase = parseEase;
  parser.parseEaseString = parseEaseString;
  return parser;
}
var hasRequiredAnimation;
function requireAnimation() {
  if (hasRequiredAnimation) return animation;
  hasRequiredAnimation = 1;
  var consts2 = /* @__PURE__ */ requireConsts();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var globals2 = /* @__PURE__ */ requireGlobals();
  var targets2 = /* @__PURE__ */ requireTargets();
  var registry2 = requireRegistry();
  var values2 = /* @__PURE__ */ requireValues();
  var styles2 = /* @__PURE__ */ requireStyles();
  var units2 = /* @__PURE__ */ requireUnits();
  var parser2 = /* @__PURE__ */ requireParser();
  var timer2 = /* @__PURE__ */ requireTimer();
  var composition2 = /* @__PURE__ */ requireComposition$1();
  var additive2 = /* @__PURE__ */ requireAdditive();
  const fromTargetObject = values2.createDecomposedValueTargetObject();
  const toTargetObject = values2.createDecomposedValueTargetObject();
  const inlineStylesStore = {};
  const toFunctionStore = { func: null };
  const fromFunctionStore = { func: null };
  const keyframesTargetArray = [null];
  const fastSetValuesArray = [null, null];
  const keyObjectTarget = { to: null };
  let tweenId = 0;
  let JSAnimationId = 0;
  let keyframes;
  let key;
  const generateKeyframes = (keyframes2, parameters) => {
    const properties = {};
    if (helpers2.isArr(keyframes2)) {
      const propertyNames = [].concat(.../** @type {DurationKeyframes} */
      keyframes2.map((key2) => Object.keys(key2))).filter(helpers2.isKey);
      for (let i = 0, l = propertyNames.length; i < l; i++) {
        const propName = propertyNames[i];
        const propArray = (
          /** @type {DurationKeyframes} */
          keyframes2.map((key2) => {
            const newKey = {};
            for (let p in key2) {
              const keyValue = (
                /** @type {TweenPropValue} */
                key2[p]
              );
              if (helpers2.isKey(p)) {
                if (p === propName) {
                  newKey.to = keyValue;
                }
              } else {
                newKey[p] = keyValue;
              }
            }
            return newKey;
          })
        );
        properties[propName] = /** @type {ArraySyntaxValue} */
        propArray;
      }
    } else {
      const totalDuration = (
        /** @type {Number} */
        values2.setValue(parameters.duration, globals2.globals.defaults.duration)
      );
      const keys = Object.keys(keyframes2).map((key2) => {
        return { o: parseFloat(key2) / 100, p: keyframes2[key2] };
      }).sort((a, b) => a.o - b.o);
      keys.forEach((key2) => {
        const offset = key2.o;
        const prop = key2.p;
        for (let name in prop) {
          if (helpers2.isKey(name)) {
            let propArray = (
              /** @type {Array} */
              properties[name]
            );
            if (!propArray) propArray = properties[name] = [];
            const duration = offset * totalDuration;
            let length = propArray.length;
            let prevKey = propArray[length - 1];
            const keyObj = { to: prop[name] };
            let durProgress = 0;
            for (let i = 0; i < length; i++) {
              durProgress += propArray[i].duration;
            }
            if (length === 1) {
              keyObj.from = prevKey.to;
            }
            if (prop.ease) {
              keyObj.ease = prop.ease;
            }
            keyObj.duration = duration - (length ? durProgress : 0);
            propArray.push(keyObj);
          }
        }
        return key2;
      });
      for (let name in properties) {
        const propArray = (
          /** @type {Array} */
          properties[name]
        );
        let prevEase;
        for (let i = 0, l = propArray.length; i < l; i++) {
          const prop = propArray[i];
          const currentEase = prop.ease;
          prop.ease = prevEase ? prevEase : void 0;
          prevEase = currentEase;
        }
        if (!propArray[0].duration) {
          propArray.shift();
        }
      }
    }
    return properties;
  };
  class JSAnimation extends timer2.Timer {
    /**
     * @param {TargetsParam} targets
     * @param {AnimationParams} parameters
     * @param {Timeline} [parent]
     * @param {Number} [parentPosition]
     * @param {Boolean} [fastSet=false]
     * @param {Number} [index=0]
     * @param {TargetsArray} [allTargets]
     */
    constructor(targets$1, parameters, parent, parentPosition, fastSet = false, index = 0, allTargets) {
      super(
        /** @type {TimerParams & AnimationParams} */
        parameters,
        parent,
        parentPosition
      );
      ++JSAnimationId;
      const parsedTargets = targets2.registerTargets(targets$1);
      const targetsLength = parsedTargets.length;
      const kfParams = (
        /** @type {AnimationParams} */
        parameters.keyframes
      );
      const params = (
        /** @type {AnimationParams} */
        kfParams ? helpers2.mergeObjects(generateKeyframes(
          /** @type {DurationKeyframes} */
          kfParams,
          parameters
        ), parameters) : parameters
      );
      const {
        id,
        delay,
        duration,
        ease,
        playbackEase,
        modifier,
        composition: composition$12,
        onRender
      } = params;
      const animDefaults = parent ? parent.defaults : globals2.globals.defaults;
      const animEase = values2.setValue(ease, animDefaults.ease);
      const animPlaybackEase = values2.setValue(playbackEase, animDefaults.playbackEase);
      const parsedAnimPlaybackEase = animPlaybackEase ? parser2.parseEase(animPlaybackEase) : null;
      const hasSpring = !helpers2.isUnd(
        /** @type {Spring} */
        animEase.ease
      );
      const tEasing = hasSpring ? (
        /** @type {Spring} */
        animEase.ease
      ) : values2.setValue(ease, parsedAnimPlaybackEase ? "linear" : animDefaults.ease);
      const tDuration = hasSpring ? (
        /** @type {Spring} */
        animEase.settlingDuration
      ) : values2.setValue(duration, animDefaults.duration);
      const tDelay = values2.setValue(delay, animDefaults.delay);
      const tModifier = modifier || animDefaults.modifier;
      const tComposition = helpers2.isUnd(composition$12) && targetsLength >= consts2.K ? consts2.compositionTypes.none : !helpers2.isUnd(composition$12) ? composition$12 : animDefaults.composition;
      const absoluteOffsetTime = this._offset + (parent ? parent._offset : 0);
      if (hasSpring) animEase.parent = this;
      let iterationDuration = NaN;
      let iterationDelay = NaN;
      let animationAnimationLength = 0;
      let shouldTriggerRender = 0;
      for (let targetIndex = 0; targetIndex < targetsLength; targetIndex++) {
        const target2 = parsedTargets[targetIndex];
        const ti = index || targetIndex;
        const tl = allTargets || parsedTargets;
        let lastTransformGroupIndex = NaN;
        let lastTransformGroupLength = NaN;
        for (let p in params) {
          if (helpers2.isKey(p)) {
            const tweenType = values2.getTweenType(target2, p);
            const adapterProp = registry2.resolveAdapterEntry(target2, p);
            const propName = styles2.sanitizePropertyName(p, target2, tweenType);
            let propValue = params[p];
            const isPropValueArray = helpers2.isArr(propValue);
            if (fastSet && !isPropValueArray) {
              fastSetValuesArray[0] = propValue;
              fastSetValuesArray[1] = propValue;
              propValue = fastSetValuesArray;
            }
            if (isPropValueArray) {
              const arrayLength = (
                /** @type {Array} */
                propValue.length
              );
              const isNotObjectValue = !helpers2.isObj(propValue[0]);
              if (arrayLength === 2 && isNotObjectValue) {
                keyObjectTarget.to = /** @type {TweenParamValue} */
                /** @type {unknown} */
                propValue;
                keyframesTargetArray[0] = keyObjectTarget;
                keyframes = keyframesTargetArray;
              } else if (arrayLength > 2 && isNotObjectValue) {
                keyframes = [];
                propValue.forEach((v, i) => {
                  if (!i) {
                    fastSetValuesArray[0] = v;
                  } else if (i === 1) {
                    fastSetValuesArray[1] = v;
                    keyframes.push(fastSetValuesArray);
                  } else {
                    keyframes.push(v);
                  }
                });
              } else {
                keyframes = /** @type {Array.<TweenKeyValue>} */
                propValue;
              }
            } else {
              keyframesTargetArray[0] = propValue;
              keyframes = keyframesTargetArray;
            }
            let siblings = null;
            let prevTween = null;
            let firstTweenChangeStartTime = NaN;
            let lastTweenChangeEndTime = 0;
            let tweenIndex = 0;
            for (let l = keyframes.length; tweenIndex < l; tweenIndex++) {
              const keyframe = keyframes[tweenIndex];
              if (helpers2.isObj(keyframe)) {
                key = keyframe;
              } else {
                keyObjectTarget.to = /** @type {TweenParamValue} */
                keyframe;
                key = keyObjectTarget;
              }
              toFunctionStore.func = null;
              fromFunctionStore.func = null;
              const computedComposition = values2.getFunctionValue(values2.setValue(key.composition, tComposition), target2, ti, tl, null, null);
              const tweenComposition = helpers2.isNum(computedComposition) ? computedComposition : consts2.compositionTypes[computedComposition];
              if (!siblings && tweenComposition !== consts2.compositionTypes.none) siblings = composition2.getTweenSiblings(target2, propName);
              const tailTween = siblings ? siblings._tail : null;
              const prevSiblingTween = parent && tailTween && tailTween.parent.parent === parent ? tailTween : prevTween;
              const computedToValue = values2.getFunctionValue(key.to, target2, ti, tl, toFunctionStore, prevSiblingTween);
              let tweenToValue;
              if (helpers2.isObj(computedToValue) && !helpers2.isUnd(computedToValue.to)) {
                key = computedToValue;
                tweenToValue = computedToValue.to;
              } else {
                tweenToValue = computedToValue;
              }
              const tweenFromValue = values2.getFunctionValue(key.from, target2, ti, tl, fromFunctionStore, prevSiblingTween);
              const easeToParse = key.ease || tEasing;
              const easeFunctionResult = values2.getFunctionValue(easeToParse, target2, ti, tl, null, prevSiblingTween);
              const keyEasing = helpers2.isFnc(easeFunctionResult) || helpers2.isStr(easeFunctionResult) ? easeFunctionResult : easeToParse;
              const hasSpring2 = !helpers2.isUnd(keyEasing) && !helpers2.isUnd(
                /** @type {Spring} */
                keyEasing.ease
              );
              const tweenEasing = hasSpring2 ? (
                /** @type {Spring} */
                keyEasing.ease
              ) : keyEasing;
              const tweenDuration = hasSpring2 ? (
                /** @type {Spring} */
                keyEasing.settlingDuration
              ) : values2.getFunctionValue(values2.setValue(key.duration, l > 1 ? values2.getFunctionValue(tDuration, target2, ti, tl, null, prevSiblingTween) / l : tDuration), target2, ti, tl, null, prevSiblingTween);
              const tweenDelay = values2.getFunctionValue(values2.setValue(key.delay, !tweenIndex ? tDelay : 0), target2, ti, tl, null, prevSiblingTween);
              const tweenModifier = key.modifier || tModifier;
              const hasFromvalue = !helpers2.isUnd(tweenFromValue);
              const hasToValue = !helpers2.isUnd(tweenToValue);
              const isFromToArray = helpers2.isArr(tweenToValue);
              const isFromToValue = isFromToArray || hasFromvalue && hasToValue;
              const tweenUpdateStartLocal = prevTween ? lastTweenChangeEndTime : 0;
              const tweenStartTime = prevTween ? lastTweenChangeEndTime + tweenDelay : tweenDelay;
              const absoluteStartTime = helpers2.round(absoluteOffsetTime + tweenStartTime, 12);
              const absoluteUpdateStartTime = helpers2.round(absoluteOffsetTime + tweenUpdateStartLocal, 12);
              if (!shouldTriggerRender && (hasFromvalue || isFromToArray)) shouldTriggerRender = 1;
              let prevSibling = prevTween;
              if (tweenComposition !== consts2.compositionTypes.none) {
                let nextSibling = siblings._head;
                while (nextSibling && nextSibling._absoluteStartTime <= absoluteStartTime) {
                  if (!nextSibling._isOverridden) prevSibling = nextSibling;
                  nextSibling = nextSibling._nextRep;
                  if (nextSibling && nextSibling._absoluteStartTime >= absoluteStartTime) {
                    while (nextSibling) {
                      composition2.overrideTween(nextSibling);
                      nextSibling = nextSibling._nextRep;
                    }
                  }
                }
              }
              if (isFromToValue) {
                values2.decomposeRawValue(isFromToArray ? values2.getFunctionValue(tweenToValue[0], target2, ti, tl, fromFunctionStore, prevSiblingTween) : tweenFromValue, fromTargetObject);
                values2.decomposeRawValue(isFromToArray ? values2.getFunctionValue(tweenToValue[1], target2, ti, tl, toFunctionStore, prevSiblingTween) : tweenToValue, toTargetObject);
                const originalValue = values2.getOriginalAnimatableValue(target2, propName, tweenType, inlineStylesStore);
                if (fromTargetObject.t === consts2.valueTypes.NUMBER) {
                  if (prevSibling) {
                    if (prevSibling._valueType === consts2.valueTypes.UNIT) {
                      fromTargetObject.t = consts2.valueTypes.UNIT;
                      fromTargetObject.u = prevSibling._unit;
                    }
                  } else {
                    values2.decomposeRawValue(
                      originalValue,
                      values2.decomposedOriginalValue
                    );
                    if (values2.decomposedOriginalValue.t === consts2.valueTypes.UNIT) {
                      fromTargetObject.t = consts2.valueTypes.UNIT;
                      fromTargetObject.u = values2.decomposedOriginalValue.u;
                    }
                  }
                }
              } else {
                if (hasToValue) {
                  values2.decomposeRawValue(tweenToValue, toTargetObject);
                } else {
                  if (prevTween) {
                    values2.decomposeTweenValue(prevTween, toTargetObject);
                  } else {
                    values2.decomposeRawValue(parent && prevSibling && prevSibling.parent.parent === parent ? prevSibling._value : values2.getOriginalAnimatableValue(target2, propName, tweenType, inlineStylesStore), toTargetObject);
                  }
                }
                if (hasFromvalue) {
                  values2.decomposeRawValue(tweenFromValue, fromTargetObject);
                } else {
                  if (prevTween) {
                    values2.decomposeTweenValue(prevTween, fromTargetObject);
                  } else {
                    values2.decomposeRawValue(parent && prevSibling && prevSibling.parent.parent === parent ? prevSibling._value : values2.getOriginalAnimatableValue(target2, propName, tweenType, inlineStylesStore), fromTargetObject);
                  }
                }
              }
              if (fromTargetObject.o) {
                fromTargetObject.n = values2.getRelativeValue(
                  !prevSibling ? values2.decomposeRawValue(
                    values2.getOriginalAnimatableValue(target2, propName, tweenType, inlineStylesStore),
                    values2.decomposedOriginalValue
                  ).n : prevSibling._toNumber,
                  fromTargetObject.n,
                  fromTargetObject.o
                );
              }
              if (toTargetObject.o) {
                toTargetObject.n = values2.getRelativeValue(fromTargetObject.n, toTargetObject.n, toTargetObject.o);
              }
              if (fromTargetObject.t !== toTargetObject.t) {
                if (fromTargetObject.t === consts2.valueTypes.COMPLEX || toTargetObject.t === consts2.valueTypes.COMPLEX) {
                  const complexValue = fromTargetObject.t === consts2.valueTypes.COMPLEX ? fromTargetObject : toTargetObject;
                  const notComplexValue = fromTargetObject.t === consts2.valueTypes.COMPLEX ? toTargetObject : fromTargetObject;
                  notComplexValue.t = consts2.valueTypes.COMPLEX;
                  notComplexValue.s = helpers2.cloneArray(complexValue.s);
                  notComplexValue.d = complexValue.d.map(() => notComplexValue.n);
                } else if (fromTargetObject.t === consts2.valueTypes.UNIT || toTargetObject.t === consts2.valueTypes.UNIT) {
                  const unitValue = fromTargetObject.t === consts2.valueTypes.UNIT ? fromTargetObject : toTargetObject;
                  const notUnitValue = fromTargetObject.t === consts2.valueTypes.UNIT ? toTargetObject : fromTargetObject;
                  notUnitValue.t = consts2.valueTypes.UNIT;
                  notUnitValue.u = unitValue.u;
                } else if (fromTargetObject.t === consts2.valueTypes.COLOR || toTargetObject.t === consts2.valueTypes.COLOR) {
                  const colorValue = fromTargetObject.t === consts2.valueTypes.COLOR ? fromTargetObject : toTargetObject;
                  const notColorValue = fromTargetObject.t === consts2.valueTypes.COLOR ? toTargetObject : fromTargetObject;
                  notColorValue.t = consts2.valueTypes.COLOR;
                  notColorValue.d = colorValue.d.map(() => 0);
                }
              }
              if (fromTargetObject.u !== toTargetObject.u) {
                let valueToConvert = toTargetObject.u ? fromTargetObject : toTargetObject;
                valueToConvert = units2.convertValueUnit(
                  /** @type {DOMTarget} */
                  target2,
                  valueToConvert,
                  toTargetObject.u ? toTargetObject.u : fromTargetObject.u,
                  false
                );
              }
              if (toTargetObject.d && fromTargetObject.d && toTargetObject.d.length !== fromTargetObject.d.length) {
                const longestValue = fromTargetObject.d.length > toTargetObject.d.length ? fromTargetObject : toTargetObject;
                const shortestValue = longestValue === fromTargetObject ? toTargetObject : fromTargetObject;
                shortestValue.d = longestValue.d.map((_, i) => helpers2.isUnd(shortestValue.d[i]) ? 0 : shortestValue.d[i]);
                shortestValue.s = helpers2.cloneArray(longestValue.s);
              }
              const tweenUpdateDuration = helpers2.round(+tweenDuration || consts2.minValue, 12);
              let inlineValue = inlineStylesStore[propName];
              if (!helpers2.isNil(inlineValue)) inlineStylesStore[propName] = null;
              const tweenSetter = adapterProp ? adapterProp.set : null;
              lastTweenChangeEndTime = helpers2.round(tweenStartTime + tweenUpdateDuration, 12);
              const fromD = fromTargetObject.d;
              const toD = toTargetObject.d;
              const toS = toTargetObject.s;
              const tween = {
                parent: this,
                id: tweenId++,
                property: propName,
                target: target2,
                _value: null,
                _toFunc: toFunctionStore.func,
                _fromFunc: fromFunctionStore.func,
                _ease: parser2.parseEase(tweenEasing),
                _fromNumbers: fromD ? helpers2.cloneArray(fromD) : consts2.emptyArray,
                _toNumbers: toD ? helpers2.cloneArray(toD) : consts2.emptyArray,
                _strings: toS ? helpers2.cloneArray(toS) : consts2.emptyArray,
                _fromNumber: fromTargetObject.n,
                _toNumber: toTargetObject.n,
                _numbers: fromD ? helpers2.cloneArray(fromD) : consts2.emptyArray,
                // For additive tween and animatables
                _number: fromTargetObject.n,
                // For additive tween and animatables
                _unit: toTargetObject.u,
                _modifier: tweenModifier,
                _currentTime: 0,
                _startTime: tweenStartTime,
                _delay: +tweenDelay,
                _updateDuration: tweenUpdateDuration,
                _changeDuration: tweenUpdateDuration,
                _absoluteStartTime: absoluteStartTime,
                _absoluteUpdateStartTime: absoluteUpdateStartTime,
                _absoluteEndTime: helpers2.round(absoluteOffsetTime + lastTweenChangeEndTime, 12),
                _hasFromValue: hasFromvalue || isFromToArray ? 1 : 0,
                // NOTE: Investigate bit packing to stores ENUM / BOOL
                _tweenType: tweenType,
                _setter: tweenSetter,
                _valueType: toTargetObject.t,
                _composition: tweenComposition,
                _isOverlapped: 0,
                _isOverridden: 0,
                _renderTransforms: 0,
                _inlineValue: inlineValue,
                _prevRep: null,
                // For replaced tween
                _nextRep: null,
                // For replaced tween
                _prevAdd: null,
                // For additive tween
                _nextAdd: null,
                // For additive tween
                _prev: null,
                _next: null
              };
              if (tweenComposition !== consts2.compositionTypes.none) {
                composition2.composeTween(tween, siblings);
              }
              const vt = tween._valueType;
              if (vt === consts2.valueTypes.COMPLEX) {
                tween._value = values2.composeComplexValue(tween, 1, -1);
              } else if (vt === consts2.valueTypes.UNIT) {
                tween._value = `${tweenModifier(tween._toNumber)}${tween._unit}`;
              } else if (vt === consts2.valueTypes.COLOR) {
                const d = toTargetObject.d;
                tween._value = `rgba(${helpers2.round(d[0], 0)},${helpers2.round(d[1], 0)},${helpers2.round(d[2], 0)},${d[3]})`;
              } else {
                tween._value = tweenModifier(tween._toNumber);
              }
              if (isNaN(firstTweenChangeStartTime)) {
                firstTweenChangeStartTime = tween._startTime;
              }
              prevTween = tween;
              animationAnimationLength++;
              helpers2.addChild(this, tween);
            }
            if (isNaN(iterationDelay) || firstTweenChangeStartTime < iterationDelay) {
              iterationDelay = firstTweenChangeStartTime;
            }
            if (isNaN(iterationDuration) || lastTweenChangeEndTime > iterationDuration) {
              iterationDuration = lastTweenChangeEndTime;
            }
            if (tweenType === consts2.tweenTypes.TRANSFORM) {
              lastTransformGroupIndex = animationAnimationLength - tweenIndex;
              lastTransformGroupLength = animationAnimationLength;
            }
          }
        }
        if (!isNaN(lastTransformGroupIndex)) {
          let i = 0;
          helpers2.forEachChildren(this, (tween) => {
            if (i >= lastTransformGroupIndex && i < lastTransformGroupLength) {
              tween._renderTransforms = 1;
              if (tween._composition === consts2.compositionTypes.blend) {
                helpers2.forEachChildren(additive2.additive.animation, (additiveTween) => {
                  if (additiveTween.id === tween.id) {
                    additiveTween._renderTransforms = 1;
                  }
                });
              }
            }
            i++;
          });
        }
      }
      if (!targetsLength) {
        console.warn(`No target found. Make sure the element you're trying to animate is accessible before creating your animation.`);
      }
      if (iterationDelay) {
        helpers2.forEachChildren(this, (tween) => {
          if (!(tween._startTime - tween._delay)) {
            tween._delay -= iterationDelay;
          }
          tween._startTime -= iterationDelay;
        });
        iterationDuration -= iterationDelay;
      } else {
        iterationDelay = 0;
      }
      if (!iterationDuration) {
        iterationDuration = consts2.minValue;
        this.iterationCount = 0;
      }
      this.targets = parsedTargets;
      this.id = !helpers2.isUnd(id) ? id : JSAnimationId;
      this.duration = iterationDuration === consts2.minValue ? consts2.minValue : helpers2.clampInfinity((iterationDuration + this._loopDelay) * this.iterationCount - this._loopDelay) || consts2.minValue;
      this.onRender = onRender || animDefaults.onRender;
      this._ease = parsedAnimPlaybackEase;
      this._delay = iterationDelay;
      this.iterationDuration = iterationDuration;
      if (!this._autoplay && shouldTriggerRender) this.onRender(this);
    }
    /**
     * @param  {Number} newDuration
     * @return {this}
     */
    stretch(newDuration) {
      const currentDuration = this.duration;
      if (currentDuration === helpers2.normalizeTime(newDuration)) return this;
      const timeScale = newDuration / currentDuration;
      helpers2.forEachChildren(this, (tween) => {
        tween._updateDuration = helpers2.normalizeTime(tween._updateDuration * timeScale);
        tween._changeDuration = helpers2.normalizeTime(tween._changeDuration * timeScale);
        tween._currentTime *= timeScale;
        tween._delay *= timeScale;
        tween._startTime *= timeScale;
        tween._absoluteStartTime *= timeScale;
        tween._absoluteUpdateStartTime *= timeScale;
        tween._absoluteEndTime *= timeScale;
      });
      return super.stretch(newDuration);
    }
    /**
     * @return {this}
     */
    refresh() {
      helpers2.forEachChildren(this, (tween) => {
        const toFunc = tween._toFunc;
        const fromFunc = tween._fromFunc;
        if (toFunc || fromFunc) {
          if (fromFunc) {
            values2.decomposeRawValue(fromFunc(), fromTargetObject);
            if (fromTargetObject.u !== tween._unit && tween.target[consts2.isDomSymbol]) {
              units2.convertValueUnit(
                /** @type {DOMTarget} */
                tween.target,
                fromTargetObject,
                tween._unit,
                true
              );
            }
            tween._fromNumbers = helpers2.cloneArray(fromTargetObject.d);
            tween._fromNumber = fromTargetObject.n;
          } else if (toFunc) {
            values2.decomposeRawValue(values2.getOriginalAnimatableValue(tween.target, tween.property, tween._tweenType), values2.decomposedOriginalValue);
            tween._fromNumbers = helpers2.cloneArray(values2.decomposedOriginalValue.d);
            tween._fromNumber = values2.decomposedOriginalValue.n;
          }
          if (toFunc) {
            values2.decomposeRawValue(toFunc(), toTargetObject);
            tween._toNumbers = helpers2.cloneArray(toTargetObject.d);
            tween._strings = helpers2.cloneArray(toTargetObject.s);
            tween._toNumber = toTargetObject.o ? values2.getRelativeValue(tween._fromNumber, toTargetObject.n, toTargetObject.o) : toTargetObject.n;
          }
        }
      });
      if (this.duration === consts2.minValue) this.restart();
      return this;
    }
    /**
     * Cancel the animation and revert all the values affected by this animation to their original state
     * @return {this}
     */
    revert() {
      super.revert();
      return styles2.revertValues(this);
    }
    /**
     * @typedef {this & {then: null}} ResolvedJSAnimation
     */
    /**
     * @param  {Callback<ResolvedJSAnimation>} [callback]
     * @return Promise<this>
     */
    then(callback) {
      return super.then(callback);
    }
  }
  const animate = (targets3, parameters) => {
    if (globals2.globals.editor) {
      return globals2.globals.editor.addAnimation(targets3, parameters);
    } else {
      return new JSAnimation(targets3, parameters, null, 0, false).init();
    }
  };
  animation.JSAnimation = JSAnimation;
  animation.animate = animate;
  return animation;
}
var timeline = {};
var position = {};
var hasRequiredPosition;
function requirePosition() {
  if (hasRequiredPosition) return position;
  hasRequiredPosition = 1;
  var consts2 = /* @__PURE__ */ requireConsts();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var values2 = /* @__PURE__ */ requireValues();
  const getPrevChildOffset = (timeline2, timePosition) => {
    if (helpers2.stringStartsWith(timePosition, "<")) {
      const goToPrevAnimationOffset = timePosition[1] === "<";
      const prevAnimation = (
        /** @type {Tickable} */
        timeline2._tail
      );
      const prevOffset = prevAnimation ? prevAnimation._offset + prevAnimation._delay : 0;
      return goToPrevAnimationOffset ? prevOffset : prevOffset + prevAnimation.duration;
    }
  };
  const parseTimelinePosition = (timeline2, timePosition) => {
    let tlDuration = timeline2.iterationDuration;
    if (tlDuration === consts2.minValue) tlDuration = 0;
    if (helpers2.isUnd(timePosition)) return tlDuration;
    if (helpers2.isNum(+timePosition)) return +timePosition;
    const timePosStr = (
      /** @type {String} */
      timePosition
    );
    const tlLabels = timeline2 ? timeline2.labels : null;
    const hasLabels = !helpers2.isNil(tlLabels);
    const prevOffset = getPrevChildOffset(timeline2, timePosStr);
    const hasSibling = !helpers2.isUnd(prevOffset);
    const matchedRelativeOperator = consts2.relativeValuesExecRgx.exec(timePosStr);
    if (matchedRelativeOperator) {
      const fullOperator = matchedRelativeOperator[0];
      const split2 = timePosStr.split(fullOperator);
      const labelOffset = hasLabels && split2[0] ? tlLabels[split2[0]] : tlDuration;
      const parsedOffset = hasSibling ? prevOffset : hasLabels ? labelOffset : tlDuration;
      const parsedNumericalOffset = +split2[1];
      return values2.getRelativeValue(parsedOffset, parsedNumericalOffset, fullOperator[0]);
    } else {
      return hasSibling ? prevOffset : hasLabels ? !helpers2.isUnd(tlLabels[timePosStr]) ? tlLabels[timePosStr] : tlDuration : tlDuration;
    }
  };
  position.parseTimelinePosition = parseTimelinePosition;
  return position;
}
var hasRequiredTimeline;
function requireTimeline() {
  if (hasRequiredTimeline) return timeline;
  hasRequiredTimeline = 1;
  var globals2 = /* @__PURE__ */ requireGlobals();
  var consts2 = /* @__PURE__ */ requireConsts();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var values2 = /* @__PURE__ */ requireValues();
  var targets2 = /* @__PURE__ */ requireTargets();
  var render2 = /* @__PURE__ */ requireRender();
  var styles2 = /* @__PURE__ */ requireStyles();
  var timer2 = /* @__PURE__ */ requireTimer();
  var composition2 = /* @__PURE__ */ requireComposition$1();
  var animation2 = /* @__PURE__ */ requireAnimation();
  var parser2 = /* @__PURE__ */ requireParser();
  var position2 = /* @__PURE__ */ requirePosition();
  function getTimelineTotalDuration(tl) {
    return helpers2.clampInfinity((tl.iterationDuration + tl._loopDelay) * tl.iterationCount - tl._loopDelay) || consts2.minValue;
  }
  function addTlChild(childParams, tl, timePosition, targets3, index, allTargets) {
    const isSetter = helpers2.isNum(childParams.duration) && /** @type {Number} */
    childParams.duration <= consts2.minValue;
    const adjustedPosition = isSetter ? timePosition - consts2.minValue : timePosition;
    if (tl.composition) render2.tick(tl, adjustedPosition, 1, 1, consts2.tickModes.AUTO);
    const tlChild = targets3 ? new animation2.JSAnimation(
      targets3,
      /** @type {AnimationParams} */
      childParams,
      tl,
      adjustedPosition,
      false,
      index,
      allTargets
    ) : new timer2.Timer(
      /** @type {TimerParams} */
      childParams,
      tl,
      adjustedPosition
    );
    if (tl.composition) tlChild.init(true);
    helpers2.addChild(tl, tlChild);
    helpers2.forEachChildren(tl, (child) => {
      const childTLOffset = child._offset + child._delay;
      const childDur = childTLOffset + child.duration;
      if (childDur > tl.iterationDuration) tl.iterationDuration = childDur;
    });
    tl.duration = getTimelineTotalDuration(tl);
    return tl;
  }
  let TLId = 0;
  class Timeline extends timer2.Timer {
    /**
     * @param {TimelineParams} [parameters]
     */
    constructor(parameters = {}) {
      super(
        /** @type {TimerParams&TimelineParams} */
        parameters,
        null,
        0
      );
      ++TLId;
      this.id = !helpers2.isUnd(parameters.id) ? parameters.id : TLId;
      this.duration = 0;
      this.labels = {};
      const defaultsParams = parameters.defaults;
      const globalDefaults = globals2.globals.defaults;
      this.defaults = defaultsParams ? helpers2.mergeObjects(defaultsParams, globalDefaults) : globalDefaults;
      this.composition = values2.setValue(parameters.composition, true);
      this.onRender = parameters.onRender || globalDefaults.onRender;
      const tlPlaybackEase = values2.setValue(parameters.playbackEase, globalDefaults.playbackEase);
      this._ease = tlPlaybackEase ? parser2.parseEase(tlPlaybackEase) : null;
      this.iterationDuration = 0;
    }
    /**
     * @overload
     * @param {TargetsParam} a1
     * @param {AnimationParams} a2
     * @param {TimelinePosition|StaggerFunction<Number|String>|TweakRegister} [a3]
     * @return {this}
     *
     * @overload
     * @param {TimerParams} a1
     * @param {TimelinePosition} [a2]
     * @return {this}
     *
     * @param {TargetsParam|TimerParams} a1
     * @param {TimelinePosition|AnimationParams} a2
     * @param {TimelinePosition|StaggerFunction<Number|String>|TweakRegister} [a3]
     */
    add(a1, a2, a3) {
      const isAnim = helpers2.isObj(a2);
      const isTimer = helpers2.isObj(a1);
      if (isAnim || isTimer) {
        this._hasChildren = true;
        if (isAnim) {
          const childParams = (
            /** @type {AnimationParams} */
            a2
          );
          const editorHook = globals2.globals.editor && globals2.globals.editor.addTimelineChild;
          const isStaggerType = a3 && /** @type {TweakRegister} */
          a3.type === "Stagger" && globals2.globals.editor;
          const staggeredPosition = helpers2.isFnc(a3) ? a3 : null;
          if (staggeredPosition || isStaggerType) {
            const parsedTargetsArray = targets2.parseTargets(
              /** @type {TargetsParam} */
              a1
            );
            const tlDuration = this.duration;
            const tlIterationDuration = this.iterationDuration;
            const id = childParams.id;
            let i = 0;
            const parsedLength = parsedTargetsArray.length;
            const resolvedParams = editorHook ? editorHook(
              /** @type {TargetsParam} */
              a1,
              childParams,
              this.id,
              a3,
              parsedLength
            ) : null;
            const staggerFn = staggeredPosition || globals2.globals.editor.resolveStagger(
              /** @type {TweakRegister} */
              a3.defaultValue
            );
            parsedTargetsArray.forEach((target2) => {
              const staggeredChildParams = { ...resolvedParams || childParams };
              this.duration = tlDuration;
              this.iterationDuration = tlIterationDuration;
              if (!helpers2.isUnd(id)) staggeredChildParams.id = id + "-" + i;
              const staggeredTimePosition = position2.parseTimelinePosition(this, staggerFn(target2, i, parsedTargetsArray, null, this));
              addTlChild(
                staggeredChildParams,
                this,
                staggeredTimePosition,
                target2,
                i,
                parsedTargetsArray
              );
              i++;
            });
          } else {
            const resolvedChildParams = editorHook ? editorHook(
              /** @type {TargetsParam} */
              a1,
              childParams,
              this.id,
              a3
            ) : childParams;
            const resolvedPosition = a3 && /** @type {*} */
            a3.type ? (
              /** @type {*} */
              a3.defaultValue
            ) : a3;
            addTlChild(
              resolvedChildParams,
              this,
              position2.parseTimelinePosition(this, resolvedPosition),
              /** @type {TargetsParam} */
              a1
            );
          }
        } else {
          addTlChild(
            /** @type TimerParams */
            a1,
            this,
            position2.parseTimelinePosition(this, a2)
          );
        }
        if (this.composition) this.init(true);
        return this;
      }
    }
    /**
     * @overload
     * @param {Tickable} [synced]
     * @param {TimelinePosition} [position]
     * @return {this}
     *
     * @overload
     * @param {globalThis.Animation} [synced]
     * @param {TimelinePosition} [position]
     * @return {this}
     *
     * @overload
     * @param {WAAPIAnimation} [synced]
     * @param {TimelinePosition} [position]
     * @return {this}
     *
     * @param {Tickable|WAAPIAnimation|globalThis.Animation} [synced]
     * @param {TimelinePosition} [position]
     */
    sync(synced, position3) {
      if (helpers2.isUnd(synced) || synced && helpers2.isUnd(synced.pause)) return this;
      synced.pause();
      const duration = +/** @type {globalThis.Animation} */
      (synced.effect ? (
        /** @type {globalThis.Animation} */
        synced.effect.getTiming().duration
      ) : (
        /** @type {Tickable} */
        synced.duration
      ));
      if (!helpers2.isUnd(synced) && !helpers2.isUnd(
        /** @type {WAAPIAnimation} */
        synced.persist
      )) {
        synced.persist = true;
      }
      const editor = globals2.globals.editor;
      const childHook = editor && editor.addTimelineChild;
      if (editor && editor.addTimelineSync) {
        position3 = editor.addTimelineSync(synced, position3, this.id);
        editor.addTimelineChild = null;
      }
      const result = this.add(synced, { currentTime: [0, duration], duration, delay: 0, ease: "linear", playbackEase: "linear" }, position3);
      if (editor) editor.addTimelineChild = childHook;
      return result;
    }
    /**
     * @param  {TargetsParam} targets
     * @param  {AnimationParams} parameters
     * @param  {TimelinePosition|StaggerFunction<Number|String>|TweakRegister} [position]
     * @return {this}
     */
    set(targets3, parameters, position3) {
      if (helpers2.isUnd(parameters)) return this;
      parameters.duration = consts2.minValue;
      parameters.composition = consts2.compositionTypes.replace;
      return this.add(targets3, parameters, position3);
    }
    /**
     * @param {Callback<Timer>} callback
     * @param {TimelinePosition} [position]
     * @return {this}
     */
    call(callback, position3) {
      if (helpers2.isUnd(callback) || callback && !helpers2.isFnc(callback)) return this;
      if (globals2.globals.editor && globals2.globals.editor.addTimelineCall) position3 = globals2.globals.editor.addTimelineCall(callback, position3, this.id);
      return this.add({ duration: 0, delay: 0, onComplete: () => callback(this) }, position3);
    }
    /**
     * @param {String} labelName
     * @param {TimelinePosition} [position]
     * @return {this}
     *
     */
    label(labelName, position$1) {
      if (helpers2.isUnd(labelName) || labelName && !helpers2.isStr(labelName)) return this;
      if (globals2.globals.editor && globals2.globals.editor.addTimelineLabel) position$1 = globals2.globals.editor.addTimelineLabel(labelName, position$1, this.id);
      this.labels[labelName] = position2.parseTimelinePosition(this, position$1);
      return this;
    }
    /**
     * @param  {TargetsParam} targets
     * @param  {String} [propertyName]
     * @return {this}
     */
    remove(targets$1, propertyName) {
      composition2.removeTargetsFromRenderable(targets2.parseTargets(targets$1), this, propertyName);
      return this;
    }
    /**
     * @param  {Number} newDuration
     * @return {this}
     */
    stretch(newDuration) {
      const currentDuration = this.duration;
      if (currentDuration === helpers2.normalizeTime(newDuration)) return this;
      const timeScale = newDuration / currentDuration;
      const labels = this.labels;
      helpers2.forEachChildren(this, (child) => child.stretch(child.duration * timeScale));
      for (let labelName in labels) labels[labelName] *= timeScale;
      return super.stretch(newDuration);
    }
    /**
     * @return {this}
     */
    refresh() {
      helpers2.forEachChildren(this, (child) => {
        if (
          /** @type {JSAnimation} */
          child.refresh
        ) child.refresh();
      });
      return this;
    }
    /**
     * @return {this}
     */
    revert() {
      super.revert();
      helpers2.forEachChildren(this, (child) => child.revert, true);
      return styles2.revertValues(this);
    }
    /**
     * @typedef {this & {then: null}} ResolvedTimeline
     */
    /**
     * @param  {Callback<ResolvedTimeline>} [callback]
     * @return Promise<this>
     */
    then(callback) {
      return super.then(callback);
    }
  }
  const createTimeline = (parameters) => {
    if (globals2.globals.editor) {
      return (
        /** @type {Timeline} */
        /** @type {unknown} */
        globals2.globals.editor.addTimeline(parameters)
      );
    }
    return new Timeline(parameters).init();
  };
  timeline.Timeline = Timeline;
  timeline.createTimeline = createTimeline;
  return timeline;
}
var animatable = {};
var hasRequiredAnimatable;
function requireAnimatable() {
  if (hasRequiredAnimatable) return animatable;
  hasRequiredAnimatable = 1;
  var consts2 = /* @__PURE__ */ requireConsts();
  var globals2 = /* @__PURE__ */ requireGlobals();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var animation2 = /* @__PURE__ */ requireAnimation();
  var parser2 = /* @__PURE__ */ requireParser();
  class Animatable {
    /**
     * @param {TargetsParam} targets
     * @param {AnimatableParams} parameters
     */
    constructor(targets2, parameters) {
      if (globals2.scope.current) globals2.scope.current.register(this);
      const beginHandler = () => {
        if (this.callbacks.completed) this.callbacks.reset();
        this.callbacks.play();
      };
      const pauseHandler = () => {
        if (this.callbacks.completed) return;
        let paused = true;
        for (let name in this.animations) {
          const anim = this.animations[name];
          if (!anim.paused && paused) {
            paused = false;
            break;
          }
        }
        if (paused) {
          this.callbacks.complete();
        }
      };
      const globalParams = {
        onBegin: beginHandler,
        onComplete: pauseHandler,
        onPause: pauseHandler
      };
      const callbacksAnimationParams = { v: 1, autoplay: false };
      const properties = {};
      this.targets = [];
      this.animations = {};
      this.callbacks = null;
      if (helpers2.isUnd(targets2) || helpers2.isUnd(parameters)) return;
      for (let propName in parameters) {
        const paramValue = parameters[propName];
        if (helpers2.isKey(propName)) {
          properties[propName] = paramValue;
        } else if (helpers2.stringStartsWith(propName, "on")) {
          callbacksAnimationParams[propName] = paramValue;
        } else {
          globalParams[propName] = paramValue;
        }
      }
      this.callbacks = new animation2.JSAnimation({ v: 0 }, callbacksAnimationParams);
      for (let propName in properties) {
        const propValue = properties[propName];
        const isObjValue = helpers2.isObj(propValue);
        let propParams = {};
        let to = "+=0";
        if (isObjValue) {
          const unit = propValue.unit;
          if (helpers2.isStr(unit)) to += unit;
        } else {
          propParams.duration = propValue;
        }
        propParams[propName] = isObjValue ? helpers2.mergeObjects({ to }, propValue) : to;
        const animParams = helpers2.mergeObjects(globalParams, propParams);
        animParams.composition = consts2.compositionTypes.replace;
        animParams.autoplay = false;
        const animation$1 = this.animations[propName] = new animation2.JSAnimation(targets2, animParams, null, 0, false).init();
        if (!this.targets.length) this.targets.push(...animation$1.targets);
        this[propName] = (to2, duration, ease) => {
          const tween = (
            /** @type {Tween} */
            animation$1._head
          );
          if (helpers2.isUnd(to2) && tween) {
            const numbers = tween._numbers;
            if (numbers && numbers.length) {
              return numbers;
            } else {
              return tween._modifier(tween._number);
            }
          } else {
            helpers2.forEachChildren(animation$1, (tween2) => {
              if (helpers2.isArr(to2)) {
                for (let i = 0, l = (
                  /** @type {Array} */
                  to2.length
                ); i < l; i++) {
                  if (!helpers2.isUnd(tween2._numbers[i])) {
                    tween2._fromNumbers[i] = /** @type {Number} */
                    tween2._modifier(tween2._numbers[i]);
                    tween2._toNumbers[i] = to2[i];
                  }
                }
              } else {
                tween2._fromNumber = /** @type {Number} */
                tween2._modifier(tween2._number);
                tween2._toNumber = /** @type {Number} */
                to2;
              }
              if (!helpers2.isUnd(ease)) tween2._ease = parser2.parseEase(ease);
              tween2._currentTime = 0;
            });
            if (!helpers2.isUnd(duration)) animation$1.stretch(duration);
            animation$1.reset(true).resume();
            return this;
          }
        };
      }
    }
    revert() {
      for (let propName in this.animations) {
        this[propName] = consts2.noop;
        this.animations[propName].revert();
      }
      this.animations = {};
      this.targets.length = 0;
      if (this.callbacks) this.callbacks.revert();
      return this;
    }
  }
  const createAnimatable = (targets2, parameters) => (
    /** @type {AnimatableObject} */
    new Animatable(targets2, parameters)
  );
  animatable.Animatable = Animatable;
  animatable.createAnimatable = createAnimatable;
  return animatable;
}
var draggable = {};
var number = {};
var hasRequiredNumber;
function requireNumber() {
  if (hasRequiredNumber) return number;
  hasRequiredNumber = 1;
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  const roundPad = (v, decimalLength) => (+v).toFixed(decimalLength);
  const padStart = (v, totalLength, padString) => `${v}`.padStart(totalLength, padString);
  const padEnd = (v, totalLength, padString) => `${v}`.padEnd(totalLength, padString);
  const wrap = (v, min, max) => ((v - min) % (max - min) + (max - min)) % (max - min) + min;
  const mapRange = (value, inLow, inHigh, outLow, outHigh) => outLow + (value - inLow) / (inHigh - inLow) * (outHigh - outLow);
  const degToRad = (degrees) => degrees * Math.PI / 180;
  const radToDeg = (radians) => radians * 180 / Math.PI;
  const damp = (start, end, deltaTime, factor) => {
    return !factor ? start : factor === 1 ? end : helpers2.lerp(start, end, 1 - Math.exp(-factor * deltaTime * 0.1));
  };
  number.clamp = helpers2.clamp;
  number.lerp = helpers2.lerp;
  number.round = helpers2.round;
  number.snap = helpers2.snap;
  number.damp = damp;
  number.degToRad = degToRad;
  number.mapRange = mapRange;
  number.padEnd = padEnd;
  number.padStart = padStart;
  number.radToDeg = radToDeg;
  number.roundPad = roundPad;
  number.wrap = wrap;
  return number;
}
var spring = {};
var hasRequiredSpring;
function requireSpring() {
  if (hasRequiredSpring) return spring;
  hasRequiredSpring = 1;
  var consts2 = /* @__PURE__ */ requireConsts();
  var globals2 = /* @__PURE__ */ requireGlobals();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var values2 = /* @__PURE__ */ requireValues();
  const maxSpringParamValue = consts2.K * 10;
  class Spring {
    /**
     * @param {SpringParams} [parameters]
     */
    constructor(parameters = {}) {
      const hasBounceOrDuration = !helpers2.isUnd(parameters.bounce) || !helpers2.isUnd(parameters.duration);
      this.timeStep = 0.02;
      this.restThreshold = 5e-4;
      this.restDuration = 200;
      this.maxDuration = 6e4;
      this.maxRestSteps = this.restDuration / this.timeStep / consts2.K;
      this.maxIterations = this.maxDuration / this.timeStep / consts2.K;
      this.bn = helpers2.clamp(values2.setValue(parameters.bounce, 0.5), -1, 1);
      this.pd = helpers2.clamp(values2.setValue(parameters.duration, 628), 10 * globals2.globals.timeScale, maxSpringParamValue * globals2.globals.timeScale);
      this.m = helpers2.clamp(values2.setValue(parameters.mass, 1), 1, maxSpringParamValue);
      this.s = helpers2.clamp(values2.setValue(parameters.stiffness, 100), consts2.minValue, maxSpringParamValue);
      this.d = helpers2.clamp(values2.setValue(parameters.damping, 10), consts2.minValue, maxSpringParamValue);
      this.v = helpers2.clamp(values2.setValue(parameters.velocity, 0), -maxSpringParamValue, maxSpringParamValue);
      this.w0 = 0;
      this.zeta = 0;
      this.wd = 0;
      this.b = 0;
      this.completed = false;
      this.solverDuration = 0;
      this.settlingDuration = 0;
      this.parent = null;
      this.onComplete = parameters.onComplete || consts2.noop;
      if (hasBounceOrDuration) this.calculateSDFromBD();
      this.compute();
      this.ease = (t) => {
        const currentTime = t * this.settlingDuration;
        const completed = this.completed;
        const perceivedTime = this.pd;
        if (currentTime >= perceivedTime && !completed) {
          this.completed = true;
          this.onComplete(this.parent);
        }
        if (currentTime < perceivedTime && completed) {
          this.completed = false;
        }
        return t === 0 || t === 1 ? t : this.solve(t * this.solverDuration);
      };
    }
    /** @type {EasingFunction} */
    solve(time2) {
      const { zeta, w0, wd, b } = this;
      let t = time2;
      if (zeta < 1) {
        t = helpers2.exp(-t * zeta * w0) * (1 * helpers2.cos(wd * t) + b * helpers2.sin(wd * t));
      } else if (zeta === 1) {
        t = (1 + b * t) * helpers2.exp(-t * w0);
      } else {
        t = ((1 + b) * helpers2.exp((-zeta * w0 + wd) * t) + (1 - b) * helpers2.exp((-zeta * w0 - wd) * t)) / 2;
      }
      return 1 - t;
    }
    calculateSDFromBD() {
      const pds = globals2.globals.timeScale === 1 ? this.pd / consts2.K : this.pd;
      this.m = 1;
      this.v = 0;
      this.s = helpers2.pow(2 * helpers2.PI / pds, 2);
      if (this.bn >= 0) {
        this.d = (1 - this.bn) * 4 * helpers2.PI / pds;
      } else {
        this.d = 4 * helpers2.PI / (pds * (1 + this.bn));
      }
      this.s = helpers2.round(helpers2.clamp(this.s, consts2.minValue, maxSpringParamValue), 3);
      this.d = helpers2.round(helpers2.clamp(this.d, consts2.minValue, 300), 3);
    }
    calculateBDFromSD() {
      const pds = 2 * helpers2.PI / helpers2.sqrt(this.s);
      this.pd = pds * (globals2.globals.timeScale === 1 ? consts2.K : 1);
      const zeta = this.d / (2 * helpers2.sqrt(this.s));
      if (zeta <= 1) {
        this.bn = 1 - this.d * pds / (4 * helpers2.PI);
      } else {
        this.bn = 4 * helpers2.PI / (this.d * pds) - 1;
      }
      this.bn = helpers2.round(helpers2.clamp(this.bn, -1, 1), 3);
      this.pd = helpers2.round(helpers2.clamp(this.pd, 10 * globals2.globals.timeScale, maxSpringParamValue * globals2.globals.timeScale), 3);
    }
    compute() {
      const { maxRestSteps, maxIterations, restThreshold, timeStep, m, d, s, v } = this;
      const w0 = this.w0 = helpers2.clamp(helpers2.sqrt(s / m), consts2.minValue, consts2.K);
      const bouncedZeta = this.zeta = d / (2 * helpers2.sqrt(s * m));
      if (bouncedZeta < 1) {
        this.wd = w0 * helpers2.sqrt(1 - bouncedZeta * bouncedZeta);
        this.b = (bouncedZeta * w0 + -v) / this.wd;
      } else if (bouncedZeta === 1) {
        this.wd = 0;
        this.b = -v + w0;
      } else {
        this.wd = w0 * helpers2.sqrt(bouncedZeta * bouncedZeta - 1);
        this.b = (bouncedZeta * w0 + -v) / this.wd;
      }
      let solverTime = 0;
      let restSteps = 0;
      let iterations = 0;
      while (restSteps <= maxRestSteps && iterations <= maxIterations) {
        if (helpers2.abs(1 - this.solve(solverTime)) < restThreshold) {
          restSteps++;
        } else {
          restSteps = 0;
        }
        this.solverDuration = solverTime;
        solverTime += timeStep;
        iterations++;
      }
      this.settlingDuration = helpers2.round(this.solverDuration * consts2.K, 0) * globals2.globals.timeScale;
    }
    get bounce() {
      return this.bn;
    }
    set bounce(v) {
      this.bn = helpers2.clamp(values2.setValue(v, 1), -1, 1);
      this.calculateSDFromBD();
      this.compute();
    }
    get duration() {
      return this.pd;
    }
    set duration(v) {
      this.pd = helpers2.clamp(values2.setValue(v, 1), 10 * globals2.globals.timeScale, maxSpringParamValue * globals2.globals.timeScale);
      this.calculateSDFromBD();
      this.compute();
    }
    get stiffness() {
      return this.s;
    }
    set stiffness(v) {
      this.s = helpers2.clamp(values2.setValue(v, 100), consts2.minValue, maxSpringParamValue);
      this.calculateBDFromSD();
      this.compute();
    }
    get damping() {
      return this.d;
    }
    set damping(v) {
      this.d = helpers2.clamp(values2.setValue(v, 10), consts2.minValue, maxSpringParamValue);
      this.calculateBDFromSD();
      this.compute();
    }
    get mass() {
      return this.m;
    }
    set mass(v) {
      this.m = helpers2.clamp(values2.setValue(v, 1), 1, maxSpringParamValue);
      this.compute();
    }
    get velocity() {
      return this.v;
    }
    set velocity(v) {
      this.v = helpers2.clamp(values2.setValue(v, 0), -maxSpringParamValue, maxSpringParamValue);
      this.compute();
    }
  }
  const spring$1 = (parameters) => new Spring(parameters);
  const createSpring = (parameters) => {
    console.warn("createSpring() is deprecated use spring() instead");
    return new Spring(parameters);
  };
  spring.Spring = Spring;
  spring.createSpring = createSpring;
  spring.spring = spring$1;
  return spring;
}
var target = {};
var composition = {};
var hasRequiredComposition;
function requireComposition() {
  if (hasRequiredComposition) return composition;
  hasRequiredComposition = 1;
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  const WAAPIAnimationsLookups = {
    _head: null,
    _tail: null
  };
  const removeWAAPIAnimation = ($el, property, parent) => {
    let nextLookup = WAAPIAnimationsLookups._head;
    let anim;
    while (nextLookup) {
      const next = nextLookup._next;
      const matchTarget = nextLookup.$el === $el;
      const matchProperty = !property || nextLookup.property === property;
      const matchParent = !parent || nextLookup.parent === parent;
      if (matchTarget && matchProperty && matchParent) {
        anim = nextLookup.animation;
        try {
          anim.commitStyles();
        } catch {
        }
        anim.cancel();
        helpers2.removeChild(WAAPIAnimationsLookups, nextLookup);
        const lookupParent = nextLookup.parent;
        if (lookupParent) {
          lookupParent._completed++;
          if (lookupParent.animations.length === lookupParent._completed) {
            lookupParent.completed = true;
            lookupParent.paused = true;
            if (!lookupParent.muteCallbacks) {
              lookupParent.onComplete(lookupParent);
              lookupParent._resolve(lookupParent);
            }
          }
        }
      }
      nextLookup = next;
    }
    return anim;
  };
  const addWAAPIAnimation = (parent, $el, property, keyframes, params) => {
    const animation2 = $el.animate(keyframes, params);
    const animTotalDuration = params.delay + +params.duration * params.iterations;
    animation2.playbackRate = parent._speed;
    if (parent.paused) animation2.pause();
    if (parent.duration < animTotalDuration) {
      parent.duration = animTotalDuration;
      parent.controlAnimation = animation2;
    }
    parent.animations.push(animation2);
    removeWAAPIAnimation($el, property);
    helpers2.addChild(WAAPIAnimationsLookups, { parent, animation: animation2, $el, property, _next: null, _prev: null });
    const handleRemove = () => removeWAAPIAnimation($el, property, parent);
    animation2.oncancel = handleRemove;
    animation2.onremove = handleRemove;
    if (!parent.persist) {
      animation2.onfinish = handleRemove;
    }
    return animation2;
  };
  composition.addWAAPIAnimation = addWAAPIAnimation;
  composition.removeWAAPIAnimation = removeWAAPIAnimation;
  return composition;
}
var hasRequiredTarget;
function requireTarget() {
  if (hasRequiredTarget) return target;
  hasRequiredTarget = 1;
  var globals2 = /* @__PURE__ */ requireGlobals();
  var consts2 = /* @__PURE__ */ requireConsts();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var targets2 = /* @__PURE__ */ requireTargets();
  var styles2 = /* @__PURE__ */ requireStyles();
  var values2 = /* @__PURE__ */ requireValues();
  var units2 = /* @__PURE__ */ requireUnits();
  var composition2 = /* @__PURE__ */ requireComposition();
  var composition$12 = /* @__PURE__ */ requireComposition$1();
  var animation2 = /* @__PURE__ */ requireAnimation();
  function get(targetSelector, propName, unit) {
    const targets$1 = targets2.registerTargets(targetSelector);
    if (!targets$1.length) return;
    const [target2] = targets$1;
    const tweenType = values2.getTweenType(target2, propName);
    const normalizePropName = styles2.sanitizePropertyName(propName, target2, tweenType);
    let originalValue = values2.getOriginalAnimatableValue(target2, normalizePropName);
    if (helpers2.isUnd(unit)) {
      return originalValue;
    } else {
      values2.decomposeRawValue(originalValue, values2.decomposedOriginalValue);
      if (values2.decomposedOriginalValue.t === consts2.valueTypes.NUMBER || values2.decomposedOriginalValue.t === consts2.valueTypes.UNIT) {
        if (unit === false) {
          return values2.decomposedOriginalValue.n;
        } else {
          const convertedValue = units2.convertValueUnit(
            /** @type {DOMTarget} */
            target2,
            values2.decomposedOriginalValue,
            /** @type {String} */
            unit,
            false
          );
          return `${helpers2.round(convertedValue.n, globals2.globals.precision)}${convertedValue.u}`;
        }
      }
    }
  }
  const set = (targets3, parameters) => {
    if (helpers2.isUnd(parameters)) return;
    if (globals2.globals.editor && globals2.globals.editor.addSet) {
      return globals2.globals.editor.addSet(targets3, parameters);
    }
    parameters.duration = consts2.minValue;
    parameters.composition = values2.setValue(parameters.composition, consts2.compositionTypes.none);
    return new animation2.JSAnimation(targets3, parameters, null, 0, true).resume();
  };
  const remove = (targets$1, renderable, propertyName) => {
    const targetsArray = targets2.parseTargets(targets$1);
    for (let i = 0, l = targetsArray.length; i < l; i++) {
      composition2.removeWAAPIAnimation(
        /** @type {DOMTarget}  */
        targetsArray[i],
        propertyName,
        renderable && /** @type {WAAPIAnimation} */
        renderable.controlAnimation && /** @type {WAAPIAnimation} */
        renderable
      );
    }
    composition$12.removeTargetsFromRenderable(
      targetsArray,
      /** @type {Renderable} */
      renderable,
      propertyName
    );
    return targetsArray;
  };
  target.$ = targets2.registerTargets;
  target.cleanInlineStyles = styles2.cleanInlineStyles;
  target.get = get;
  target.remove = remove;
  target.set = set;
  return target;
}
var hasRequiredDraggable;
function requireDraggable() {
  if (hasRequiredDraggable) return draggable;
  hasRequiredDraggable = 1;
  var globals2 = /* @__PURE__ */ requireGlobals();
  var consts2 = /* @__PURE__ */ requireConsts();
  var targets2 = /* @__PURE__ */ requireTargets();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var values2 = /* @__PURE__ */ requireValues();
  var number2 = /* @__PURE__ */ requireNumber();
  var timer2 = /* @__PURE__ */ requireTimer();
  var animation2 = /* @__PURE__ */ requireAnimation();
  var composition2 = /* @__PURE__ */ requireComposition$1();
  var animatable2 = /* @__PURE__ */ requireAnimatable();
  var parser2 = /* @__PURE__ */ requireParser();
  var index = /* @__PURE__ */ requireSpring();
  var target2 = /* @__PURE__ */ requireTarget();
  const preventDefault = (e) => {
    if (e.cancelable) e.preventDefault();
  };
  class DOMProxy {
    /** @param {Object} el */
    constructor(el) {
      this.el = el;
      this.zIndex = 0;
      this.parentElement = null;
      this.classList = {
        add: consts2.noop,
        remove: consts2.noop
      };
    }
    get x() {
      return this.el.x || 0;
    }
    set x(v) {
      this.el.x = v;
    }
    get y() {
      return this.el.y || 0;
    }
    set y(v) {
      this.el.y = v;
    }
    get width() {
      return this.el.width || 0;
    }
    set width(v) {
      this.el.width = v;
    }
    get height() {
      return this.el.height || 0;
    }
    set height(v) {
      this.el.height = v;
    }
    getBoundingClientRect() {
      return {
        top: this.y,
        right: this.x,
        bottom: this.y + this.height,
        left: this.x + this.width
      };
    }
  }
  class Transforms {
    /**
     * @param {DOMTarget|DOMProxy} $el
     */
    constructor($el) {
      this.$el = $el;
      this.inlineTransforms = [];
      this.point = new DOMPoint();
      this.inversedMatrix = this.getMatrix().inverse();
    }
    /**
     * @param {Number} x
     * @param {Number} y
     * @return {DOMPoint}
     */
    normalizePoint(x, y) {
      this.point.x = x;
      this.point.y = y;
      return this.point.matrixTransform(this.inversedMatrix);
    }
    /**
     * @callback TraverseParentsCallback
     * @param {DOMTarget} $el
     * @param {Number} i
     */
    /**
     * @param {TraverseParentsCallback} cb
     */
    traverseUp(cb) {
      let $el = (
        /** @type {DOMTarget|Document} */
        this.$el.parentElement
      ), i = 0;
      while ($el && $el !== consts2.doc) {
        cb(
          /** @type {DOMTarget} */
          $el,
          i
        );
        $el = /** @type {DOMTarget} */
        $el.parentElement;
        i++;
      }
    }
    getMatrix() {
      const matrix = new DOMMatrix();
      this.traverseUp(($el) => {
        const transformValue = getComputedStyle($el).transform;
        if (transformValue) {
          const elMatrix = new DOMMatrix(transformValue);
          matrix.preMultiplySelf(elMatrix);
        }
      });
      return matrix;
    }
    remove() {
      this.traverseUp(($el, i) => {
        this.inlineTransforms[i] = $el.style.transform;
        $el.style.transform = "none";
      });
    }
    revert() {
      this.traverseUp(($el, i) => {
        const ct = this.inlineTransforms[i];
        if (ct === "") {
          $el.style.removeProperty("transform");
        } else {
          $el.style.transform = ct;
        }
      });
    }
  }
  const parseDraggableFunctionParameter = (value, draggable2) => value && helpers2.isFnc(value) ? (
    /** @type {Function} */
    value(draggable2)
  ) : (
    /** @type {T} */
    value
  );
  let zIndex = 0;
  class Draggable {
    /**
     * @param {TargetsParam} target
     * @param {DraggableParams} [parameters]
     */
    constructor(target$1, parameters = {}) {
      if (!target$1) return;
      if (globals2.scope.current) globals2.scope.current.register(this);
      const paramX = parameters.x;
      const paramY = parameters.y;
      const trigger = parameters.trigger;
      const modifier = parameters.modifier;
      const ease = parameters.releaseEase;
      const customEase = ease && parser2.parseEase(ease);
      const hasSpring = !helpers2.isUnd(ease) && !helpers2.isUnd(
        /** @type {Spring} */
        ease.ease
      );
      const xProp = (
        /** @type {String} */
        helpers2.isObj(paramX) && !helpers2.isUnd(
          /** @type {Object} */
          paramX.mapTo
        ) ? (
          /** @type {Object} */
          paramX.mapTo
        ) : "translateX"
      );
      const yProp = (
        /** @type {String} */
        helpers2.isObj(paramY) && !helpers2.isUnd(
          /** @type {Object} */
          paramY.mapTo
        ) ? (
          /** @type {Object} */
          paramY.mapTo
        ) : "translateY"
      );
      const container = parseDraggableFunctionParameter(parameters.container, this);
      this.containerArray = helpers2.isArr(container) ? container : null;
      this.$container = /** @type {HTMLElement} */
      container && !this.containerArray ? targets2.parseTargets(
        /** @type {DOMTarget} */
        container
      )[0] : consts2.doc.body;
      this.useWin = this.$container === consts2.doc.body;
      this.$scrollContainer = this.useWin ? consts2.win : this.$container;
      this.$target = /** @type {HTMLElement} */
      helpers2.isObj(target$1) ? new DOMProxy(target$1) : targets2.parseTargets(target$1)[0];
      this.$trigger = /** @type {HTMLElement} */
      targets2.parseTargets(trigger ? trigger : target$1)[0];
      this.fixed = target2.get(this.$target, "position") === "fixed";
      this.isFinePointer = true;
      this.containerPadding = [0, 0, 0, 0];
      this.containerFriction = 0;
      this.releaseContainerFriction = 0;
      this.snapX = 0;
      this.snapY = 0;
      this.scrollSpeed = 0;
      this.scrollThreshold = 0;
      this.dragSpeed = 0;
      this.dragThreshold = 3;
      this.maxVelocity = 0;
      this.minVelocity = 0;
      this.velocityMultiplier = 0;
      this.cursor = false;
      this.releaseXSpring = hasSpring ? (
        /** @type {Spring} */
        ease
      ) : index.spring({
        mass: values2.setValue(parameters.releaseMass, 1),
        stiffness: values2.setValue(parameters.releaseStiffness, 80),
        damping: values2.setValue(parameters.releaseDamping, 20)
      });
      this.releaseYSpring = hasSpring ? (
        /** @type {Spring} */
        ease
      ) : index.spring({
        mass: values2.setValue(parameters.releaseMass, 1),
        stiffness: values2.setValue(parameters.releaseStiffness, 80),
        damping: values2.setValue(parameters.releaseDamping, 20)
      });
      this.releaseEase = customEase || parser2.eases.outQuint;
      this.hasReleaseSpring = hasSpring;
      this.onGrab = parameters.onGrab || consts2.noop;
      this.onDrag = parameters.onDrag || consts2.noop;
      this.onRelease = parameters.onRelease || consts2.noop;
      this.onUpdate = parameters.onUpdate || consts2.noop;
      this.onSettle = parameters.onSettle || consts2.noop;
      this.onSnap = parameters.onSnap || consts2.noop;
      this.onResize = parameters.onResize || consts2.noop;
      this.onAfterResize = parameters.onAfterResize || consts2.noop;
      this.disabled = [0, 0];
      const animatableParams = {};
      if (modifier) animatableParams.modifier = modifier;
      if (helpers2.isUnd(paramX) || paramX === true) {
        animatableParams[xProp] = 0;
      } else if (helpers2.isObj(paramX)) {
        const paramXObject = (
          /** @type {DraggableAxisParam} */
          paramX
        );
        const animatableXParams = {};
        if (paramXObject.modifier) animatableXParams.modifier = paramXObject.modifier;
        if (paramXObject.composition) animatableXParams.composition = paramXObject.composition;
        animatableParams[xProp] = animatableXParams;
      } else if (paramX === false) {
        animatableParams[xProp] = 0;
        this.disabled[0] = 1;
      }
      if (helpers2.isUnd(paramY) || paramY === true) {
        animatableParams[yProp] = 0;
      } else if (helpers2.isObj(paramY)) {
        const paramYObject = (
          /** @type {DraggableAxisParam} */
          paramY
        );
        const animatableYParams = {};
        if (paramYObject.modifier) animatableYParams.modifier = paramYObject.modifier;
        if (paramYObject.composition) animatableYParams.composition = paramYObject.composition;
        animatableParams[yProp] = animatableYParams;
      } else if (paramY === false) {
        animatableParams[yProp] = 0;
        this.disabled[1] = 1;
      }
      this.animate = /** @type {AnimatableObject} */
      new animatable2.Animatable(this.$target, animatableParams);
      this.xProp = xProp;
      this.yProp = yProp;
      this.destX = 0;
      this.destY = 0;
      this.deltaX = 0;
      this.deltaY = 0;
      this.scroll = { x: 0, y: 0 };
      this.coords = [this.x, this.y, 0, 0];
      this.snapped = [0, 0];
      this.pointer = [0, 0, 0, 0, 0, 0, 0, 0];
      this.scrollView = [0, 0];
      this.dragArea = [0, 0, 0, 0];
      this.containerBounds = [-consts2.maxValue, consts2.maxValue, consts2.maxValue, -consts2.maxValue];
      this.scrollBounds = [0, 0, 0, 0];
      this.targetBounds = [0, 0, 0, 0];
      this.window = [0, 0];
      this.velocityStack = [0, 0, 0];
      this.velocityStackIndex = 0;
      this.velocityTime = helpers2.now();
      this.velocity = 0;
      this.angle = 0;
      this.cursorStyles = null;
      this.triggerStyles = null;
      this.bodyStyles = null;
      this.targetStyles = null;
      this.touchActionStyles = null;
      this.transforms = new Transforms(this.$target);
      this.overshootCoords = { x: 0, y: 0 };
      this.overshootTicker = new timer2.Timer({
        autoplay: false,
        onUpdate: () => {
          this.updated = true;
          this.manual = true;
          if (!this.disabled[0]) this.animate[this.xProp](this.overshootCoords.x, 1);
          if (!this.disabled[1]) this.animate[this.yProp](this.overshootCoords.y, 1);
        },
        onComplete: () => {
          this.manual = false;
          if (!this.disabled[0]) this.animate[this.xProp](this.overshootCoords.x, 0);
          if (!this.disabled[1]) this.animate[this.yProp](this.overshootCoords.y, 0);
        }
      }, null, 0).init();
      this.updateTicker = new timer2.Timer({ autoplay: false, onUpdate: () => this.update() }, null, 0).init();
      this.contained = !helpers2.isUnd(container);
      this.manual = false;
      this.grabbed = false;
      this.dragged = false;
      this.updated = false;
      this.released = false;
      this.canScroll = false;
      this.enabled = false;
      this.initialized = false;
      this.activeProp = this.disabled[1] ? xProp : yProp;
      this.animate.callbacks.onRender = () => {
        const hasUpdated = this.updated;
        const hasMoved = this.grabbed && hasUpdated;
        const hasReleased = !hasMoved && this.released;
        const x = this.x;
        const y = this.y;
        const dx = x - this.coords[2];
        const dy = y - this.coords[3];
        this.deltaX = dx;
        this.deltaY = dy;
        this.coords[2] = x;
        this.coords[3] = y;
        if (hasUpdated && (dx || dy)) {
          this.onUpdate(this);
        }
        if (!hasReleased) {
          this.updated = false;
        } else {
          this.computeVelocity(dx, dy);
          this.angle = helpers2.atan2(dy, dx);
        }
      };
      this.animate.callbacks.onComplete = () => {
        if (!this.grabbed && this.released) {
          this.released = false;
        }
        if (!this.manual) {
          this.deltaX = 0;
          this.deltaY = 0;
          this.velocity = 0;
          this.velocityStack[0] = 0;
          this.velocityStack[1] = 0;
          this.velocityStack[2] = 0;
          this.velocityStackIndex = 0;
          this.onSettle(this);
        }
      };
      this.resizeTicker = new timer2.Timer({
        autoplay: false,
        duration: 150 * globals2.globals.timeScale,
        onComplete: () => {
          this.onResize(this);
          this.refresh();
          this.onAfterResize(this);
        }
      }).init();
      this.parameters = parameters;
      this.resizeObserver = new ResizeObserver(() => {
        if (this.initialized) {
          this.resizeTicker.restart();
        } else {
          this.initialized = true;
        }
      });
      this.enable();
      this.refresh();
      this.resizeObserver.observe(this.$container);
      if (!helpers2.isObj(target$1)) this.resizeObserver.observe(this.$target);
    }
    /**
     * @param  {Number} dx
     * @param  {Number} dy
     * @return {Number}
     */
    computeVelocity(dx, dy) {
      const prevTime = this.velocityTime;
      const curTime = helpers2.now();
      const elapsed = curTime - prevTime;
      if (elapsed < 17) return this.velocity;
      this.velocityTime = curTime;
      const velocityStack = this.velocityStack;
      const vMul = this.velocityMultiplier;
      const minV = this.minVelocity;
      const maxV = this.maxVelocity;
      const vi = this.velocityStackIndex;
      velocityStack[vi] = helpers2.round(helpers2.clamp(helpers2.sqrt(dx * dx + dy * dy) / elapsed * vMul, minV, maxV), 5);
      const velocity = helpers2.max(velocityStack[0], velocityStack[1], velocityStack[2]);
      this.velocity = velocity;
      this.velocityStackIndex = (vi + 1) % 3;
      return velocity;
    }
    /**
     * @param {Number}  x
     * @param {Boolean} [muteUpdateCallback]
     * @return {this}
     */
    setX(x, muteUpdateCallback = false) {
      if (this.disabled[0]) return;
      const v = helpers2.round(x, 5);
      this.overshootTicker.pause();
      this.manual = true;
      this.updated = !muteUpdateCallback;
      this.destX = v;
      this.snapped[0] = helpers2.snap(v, this.snapX);
      this.animate[this.xProp](v, 0);
      this.manual = false;
      return this;
    }
    /**
     * @param {Number}  y
     * @param {Boolean} [muteUpdateCallback]
     * @return {this}
     */
    setY(y, muteUpdateCallback = false) {
      if (this.disabled[1]) return;
      const v = helpers2.round(y, 5);
      this.overshootTicker.pause();
      this.manual = true;
      this.updated = !muteUpdateCallback;
      this.destY = v;
      this.snapped[1] = helpers2.snap(v, this.snapY);
      this.animate[this.yProp](v, 0);
      this.manual = false;
      return this;
    }
    get x() {
      return helpers2.round(
        /** @type {Number} */
        this.animate[this.xProp](),
        globals2.globals.precision
      );
    }
    set x(x) {
      this.setX(x, false);
    }
    get y() {
      return helpers2.round(
        /** @type {Number} */
        this.animate[this.yProp](),
        globals2.globals.precision
      );
    }
    set y(y) {
      this.setY(y, false);
    }
    get progressX() {
      return number2.mapRange(this.x, this.containerBounds[3], this.containerBounds[1], 0, 1);
    }
    set progressX(x) {
      this.setX(number2.mapRange(x, 0, 1, this.containerBounds[3], this.containerBounds[1]), false);
    }
    get progressY() {
      return number2.mapRange(this.y, this.containerBounds[0], this.containerBounds[2], 0, 1);
    }
    set progressY(y) {
      this.setY(number2.mapRange(y, 0, 1, this.containerBounds[0], this.containerBounds[2]), false);
    }
    updateScrollCoords() {
      const sx = helpers2.round(this.useWin ? consts2.win.scrollX : this.$container.scrollLeft, 0);
      const sy = helpers2.round(this.useWin ? consts2.win.scrollY : this.$container.scrollTop, 0);
      const [cpt, cpr, cpb, cpl] = this.containerPadding;
      const threshold = this.scrollThreshold;
      this.scroll.x = sx;
      this.scroll.y = sy;
      this.scrollBounds[0] = sy - this.targetBounds[0] + cpt - threshold;
      this.scrollBounds[1] = sx - this.targetBounds[1] - cpr + threshold;
      this.scrollBounds[2] = sy - this.targetBounds[2] - cpb + threshold;
      this.scrollBounds[3] = sx - this.targetBounds[3] + cpl - threshold;
    }
    updateBoundingValues() {
      const $container = this.$container;
      if (!$container) return;
      const cx = this.x;
      const cy = this.y;
      const cx2 = this.coords[2];
      const cy2 = this.coords[3];
      this.coords[2] = 0;
      this.coords[3] = 0;
      this.setX(0, true);
      this.setY(0, true);
      this.transforms.remove();
      const iw = this.window[0] = consts2.win.innerWidth;
      const ih = this.window[1] = consts2.win.innerHeight;
      const uw = this.useWin;
      const sw = $container.scrollWidth;
      const sh = $container.scrollHeight;
      const fx = this.fixed;
      const transformContainerRect = $container.getBoundingClientRect();
      const [cpt, cpr, cpb, cpl] = this.containerPadding;
      this.dragArea[0] = uw ? 0 : transformContainerRect.left;
      this.dragArea[1] = uw ? 0 : transformContainerRect.top;
      this.scrollView[0] = uw ? helpers2.clamp(sw, iw, sw) : sw;
      this.scrollView[1] = uw ? helpers2.clamp(sh, ih, sh) : sh;
      this.updateScrollCoords();
      const { width, height, left, top, right, bottom } = $container.getBoundingClientRect();
      this.dragArea[2] = helpers2.round(uw ? helpers2.clamp(width, iw, iw) : width, 0);
      this.dragArea[3] = helpers2.round(uw ? helpers2.clamp(height, ih, ih) : height, 0);
      const containerOverflow = target2.get($container, "overflow");
      const visibleOverflow = containerOverflow === "visible";
      const hiddenOverflow = containerOverflow === "hidden";
      this.canScroll = fx ? false : this.contained && ($container === consts2.doc.body && visibleOverflow || !hiddenOverflow && !visibleOverflow) && (sw > this.dragArea[2] + cpl - cpr || sh > this.dragArea[3] + cpt - cpb) && (!this.containerArray || this.containerArray && !helpers2.isArr(this.containerArray));
      if (this.contained) {
        const sx = this.scroll.x;
        const sy = this.scroll.y;
        const canScroll = this.canScroll;
        const targetRect = this.$target.getBoundingClientRect();
        const hiddenLeft = canScroll ? uw ? 0 : $container.scrollLeft : 0;
        const hiddenTop = canScroll ? uw ? 0 : $container.scrollTop : 0;
        const hiddenRight = canScroll ? this.scrollView[0] - hiddenLeft - width : 0;
        const hiddenBottom = canScroll ? this.scrollView[1] - hiddenTop - height : 0;
        this.targetBounds[0] = helpers2.round(targetRect.top + sy - (uw ? 0 : top), 0);
        this.targetBounds[1] = helpers2.round(targetRect.right + sx - (uw ? iw : right), 0);
        this.targetBounds[2] = helpers2.round(targetRect.bottom + sy - (uw ? ih : bottom), 0);
        this.targetBounds[3] = helpers2.round(targetRect.left + sx - (uw ? 0 : left), 0);
        if (this.containerArray) {
          this.containerBounds[0] = this.containerArray[0] + cpt;
          this.containerBounds[1] = this.containerArray[1] - cpr;
          this.containerBounds[2] = this.containerArray[2] - cpb;
          this.containerBounds[3] = this.containerArray[3] + cpl;
        } else {
          this.containerBounds[0] = -helpers2.round(targetRect.top - (fx ? helpers2.clamp(top, 0, ih) : top) + hiddenTop - cpt, 0);
          this.containerBounds[1] = -helpers2.round(targetRect.right - (fx ? helpers2.clamp(right, 0, iw) : right) - hiddenRight + cpr, 0);
          this.containerBounds[2] = -helpers2.round(targetRect.bottom - (fx ? helpers2.clamp(bottom, 0, ih) : bottom) - hiddenBottom + cpb, 0);
          this.containerBounds[3] = -helpers2.round(targetRect.left - (fx ? helpers2.clamp(left, 0, iw) : left) + hiddenLeft - cpl, 0);
        }
      }
      this.transforms.revert();
      this.coords[2] = cx2;
      this.coords[3] = cy2;
      this.setX(cx, true);
      this.setY(cy, true);
    }
    /**
     * @param  {Array} bounds
     * @param  {Number} x
     * @param  {Number} y
     * @return {Number}
     */
    isOutOfBounds(bounds, x, y) {
      if (!this.contained) return 0;
      const [bt, br, bb, bl] = bounds;
      const [dx, dy] = this.disabled;
      const obx = !dx && x < bl || !dx && x > br;
      const oby = !dy && y < bt || !dy && y > bb;
      return obx && !oby ? 1 : !obx && oby ? 2 : obx && oby ? 3 : 0;
    }
    refresh() {
      const params = this.parameters;
      const paramX = params.x;
      const paramY = params.y;
      const container = parseDraggableFunctionParameter(params.container, this);
      const cp = parseDraggableFunctionParameter(params.containerPadding, this) || 0;
      const containerPadding = (
        /** @type {[Number, Number, Number, Number]} */
        helpers2.isArr(cp) ? cp : [cp, cp, cp, cp]
      );
      const cx = this.x;
      const cy = this.y;
      const parsedCursorStyles = parseDraggableFunctionParameter(params.cursor, this);
      const cursorStyles = { onHover: "grab", onGrab: "grabbing" };
      if (parsedCursorStyles) {
        const { onHover, onGrab } = (
          /** @type {DraggableCursorParams} */
          parsedCursorStyles
        );
        if (onHover) cursorStyles.onHover = onHover;
        if (onGrab) cursorStyles.onGrab = onGrab;
      }
      const parsedDragThreshold = parseDraggableFunctionParameter(params.dragThreshold, this);
      const dragThreshold = { mouse: 3, touch: 7 };
      if (helpers2.isNum(parsedDragThreshold)) {
        dragThreshold.mouse = parsedDragThreshold;
        dragThreshold.touch = parsedDragThreshold;
      } else if (parsedDragThreshold) {
        const { mouse, touch } = parsedDragThreshold;
        if (!helpers2.isUnd(mouse)) dragThreshold.mouse = mouse;
        if (!helpers2.isUnd(touch)) dragThreshold.touch = touch;
      }
      this.containerArray = helpers2.isArr(container) ? container : null;
      this.$container = /** @type {HTMLElement} */
      container && !this.containerArray ? targets2.parseTargets(
        /** @type {DOMTarget} */
        container
      )[0] : consts2.doc.body;
      this.useWin = this.$container === consts2.doc.body;
      this.$scrollContainer = this.useWin ? consts2.win : this.$container;
      this.isFinePointer = matchMedia("(pointer:fine)").matches;
      this.containerPadding = values2.setValue(containerPadding, [0, 0, 0, 0]);
      this.containerFriction = helpers2.clamp(values2.setValue(parseDraggableFunctionParameter(params.containerFriction, this), 0.8), 0, 1);
      this.releaseContainerFriction = helpers2.clamp(values2.setValue(parseDraggableFunctionParameter(params.releaseContainerFriction, this), this.containerFriction), 0, 1);
      this.snapX = parseDraggableFunctionParameter(helpers2.isObj(paramX) && !helpers2.isUnd(paramX.snap) ? paramX.snap : params.snap, this);
      this.snapY = parseDraggableFunctionParameter(helpers2.isObj(paramY) && !helpers2.isUnd(paramY.snap) ? paramY.snap : params.snap, this);
      this.scrollSpeed = values2.setValue(parseDraggableFunctionParameter(params.scrollSpeed, this), 1.5);
      this.scrollThreshold = values2.setValue(parseDraggableFunctionParameter(params.scrollThreshold, this), 20);
      this.dragSpeed = values2.setValue(parseDraggableFunctionParameter(params.dragSpeed, this), 1);
      this.dragThreshold = this.isFinePointer ? dragThreshold.mouse : dragThreshold.touch;
      this.minVelocity = values2.setValue(parseDraggableFunctionParameter(params.minVelocity, this), 0);
      this.maxVelocity = values2.setValue(parseDraggableFunctionParameter(params.maxVelocity, this), 50);
      this.velocityMultiplier = values2.setValue(parseDraggableFunctionParameter(params.velocityMultiplier, this), 1);
      this.cursor = parsedCursorStyles === false ? false : cursorStyles;
      this.updateBoundingValues();
      const [bt, br, bb, bl] = this.containerBounds;
      this.setX(helpers2.clamp(cx, bl, br), true);
      this.setY(helpers2.clamp(cy, bt, bb), true);
    }
    update() {
      this.updateScrollCoords();
      if (this.canScroll) {
        const [cpt, cpr, cpb, cpl] = this.containerPadding;
        const [sw, sh] = this.scrollView;
        const daw = this.dragArea[2];
        const dah = this.dragArea[3];
        const csx = this.scroll.x;
        const csy = this.scroll.y;
        const nsw = this.$container.scrollWidth;
        const nsh = this.$container.scrollHeight;
        const csw = this.useWin ? helpers2.clamp(nsw, this.window[0], nsw) : nsw;
        const csh = this.useWin ? helpers2.clamp(nsh, this.window[1], nsh) : nsh;
        const swd = sw - csw;
        const shd = sh - csh;
        if (this.dragged && swd > 0) {
          this.coords[0] -= swd;
          this.scrollView[0] = csw;
        }
        if (this.dragged && shd > 0) {
          this.coords[1] -= shd;
          this.scrollView[1] = csh;
        }
        const s = this.scrollSpeed * 10;
        const threshold = this.scrollThreshold;
        const [x, y] = this.coords;
        const [st, sr, sb, sl] = this.scrollBounds;
        const t = helpers2.round(helpers2.clamp((y - st + cpt) / threshold, -1, 0) * s, 0);
        const r = helpers2.round(helpers2.clamp((x - sr - cpr) / threshold, 0, 1) * s, 0);
        const b = helpers2.round(helpers2.clamp((y - sb - cpb) / threshold, 0, 1) * s, 0);
        const l = helpers2.round(helpers2.clamp((x - sl + cpl) / threshold, -1, 0) * s, 0);
        if (t || b || l || r) {
          const [nx, ny] = this.disabled;
          let scrollX = csx;
          let scrollY = csy;
          if (!nx) {
            scrollX = helpers2.round(helpers2.clamp(csx + (l || r), 0, sw - daw), 0);
            this.coords[0] -= csx - scrollX;
          }
          if (!ny) {
            scrollY = helpers2.round(helpers2.clamp(csy + (t || b), 0, sh - dah), 0);
            this.coords[1] -= csy - scrollY;
          }
          if (this.useWin) {
            this.$scrollContainer.scrollBy(-(csx - scrollX), -(csy - scrollY));
          } else {
            this.$scrollContainer.scrollTo(scrollX, scrollY);
          }
        }
      }
      const [ct, cr, cb, cl] = this.containerBounds;
      const [px1, py1, px2, py2, px3, py3] = this.pointer;
      this.coords[0] += (px1 - px3) * this.dragSpeed;
      this.coords[1] += (py1 - py3) * this.dragSpeed;
      this.pointer[4] = px1;
      this.pointer[5] = py1;
      const [cx, cy] = this.coords;
      const [sx, sy] = this.snapped;
      const cf = (1 - this.containerFriction) * this.dragSpeed;
      this.setX(cx > cr ? cr + (cx - cr) * cf : cx < cl ? cl + (cx - cl) * cf : cx, false);
      this.setY(cy > cb ? cb + (cy - cb) * cf : cy < ct ? ct + (cy - ct) * cf : cy, false);
      this.computeVelocity(px1 - px3, py1 - py3);
      this.angle = helpers2.atan2(py1 - py2, px1 - px2);
      const [nsx, nsy] = this.snapped;
      if (nsx !== sx && this.snapX || nsy !== sy && this.snapY) {
        this.onSnap(this);
      }
    }
    stop() {
      this.updateTicker.pause();
      this.overshootTicker.pause();
      for (let prop in this.animate.animations) this.animate.animations[prop].pause();
      composition2.removeTargetsFromRenderable([this], null, "x");
      composition2.removeTargetsFromRenderable([this], null, "y");
      composition2.removeTargetsFromRenderable([this], null, "progressX");
      composition2.removeTargetsFromRenderable([this], null, "progressY");
      composition2.removeTargetsFromRenderable([this.scroll]);
      composition2.removeTargetsFromRenderable([this.overshootCoords]);
      return this;
    }
    /**
     * @param {Number} [duration]
     * @param {Number} [gap]
     * @param {EasingParam} [ease]
     * @return {this}
     */
    scrollInView(duration, gap = 0, ease = parser2.eases.inOutQuad) {
      this.updateScrollCoords();
      const x = this.destX;
      const y = this.destY;
      const scroll2 = this.scroll;
      const scrollBounds = this.scrollBounds;
      const canScroll = this.canScroll;
      if (!this.containerArray && this.isOutOfBounds(scrollBounds, x, y)) {
        const [st, sr, sb, sl] = scrollBounds;
        const t = helpers2.round(helpers2.clamp(y - st, -consts2.maxValue, 0), 0);
        const r = helpers2.round(helpers2.clamp(x - sr, 0, consts2.maxValue), 0);
        const b = helpers2.round(helpers2.clamp(y - sb, 0, consts2.maxValue), 0);
        const l = helpers2.round(helpers2.clamp(x - sl, -consts2.maxValue, 0), 0);
        new animation2.JSAnimation(scroll2, {
          x: helpers2.round(scroll2.x + (l ? l - gap : r ? r + gap : 0), 0),
          y: helpers2.round(scroll2.y + (t ? t - gap : b ? b + gap : 0), 0),
          duration: helpers2.isUnd(duration) ? 350 * globals2.globals.timeScale : duration,
          ease,
          onUpdate: () => {
            this.canScroll = false;
            this.$scrollContainer.scrollTo(scroll2.x, scroll2.y);
          }
        }).init().then(() => {
          this.canScroll = canScroll;
        });
      }
      return this;
    }
    handleHover() {
      if (this.isFinePointer && this.cursor && !this.cursorStyles) {
        this.cursorStyles = target2.set(this.$trigger, {
          cursor: (
            /** @type {DraggableCursorParams} */
            this.cursor.onHover
          )
        });
      }
    }
    /**
     * @param  {Number} [duration]
     * @param  {Number} [gap]
     * @param  {EasingParam} [ease]
     * @return {this}
     */
    animateInView(duration, gap = 0, ease = parser2.eases.inOutQuad) {
      this.stop();
      this.updateBoundingValues();
      const x = this.x;
      const y = this.y;
      const [cpt, cpr, cpb, cpl] = this.containerPadding;
      const bt = this.scroll.y - this.targetBounds[0] + cpt + gap;
      const br = this.scroll.x - this.targetBounds[1] - cpr - gap;
      const bb = this.scroll.y - this.targetBounds[2] - cpb - gap;
      const bl = this.scroll.x - this.targetBounds[3] + cpl + gap;
      const ob = this.isOutOfBounds([bt, br, bb, bl], x, y);
      if (ob) {
        const [disabledX, disabledY] = this.disabled;
        const destX = helpers2.clamp(helpers2.snap(x, this.snapX), bl, br);
        const destY = helpers2.clamp(helpers2.snap(y, this.snapY), bt, bb);
        const dur = helpers2.isUnd(duration) ? 350 * globals2.globals.timeScale : duration;
        if (!disabledX && (ob === 1 || ob === 3)) this.animate[this.xProp](destX, dur, ease);
        if (!disabledY && (ob === 2 || ob === 3)) this.animate[this.yProp](destY, dur, ease);
      }
      return this;
    }
    /**
     * @param {MouseEvent|TouchEvent} e
     */
    handleDown(e) {
      const $eTarget = (
        /** @type {HTMLElement} */
        e.target
      );
      if (this.grabbed || /** @type {HTMLInputElement} */
      $eTarget.type === "range") return;
      e.stopPropagation();
      this.grabbed = true;
      this.released = false;
      this.stop();
      this.updateBoundingValues();
      const touches = (
        /** @type {TouchEvent} */
        e.changedTouches
      );
      const eventX = touches ? touches[0].clientX : (
        /** @type {MouseEvent} */
        e.clientX
      );
      const eventY = touches ? touches[0].clientY : (
        /** @type {MouseEvent} */
        e.clientY
      );
      const { x, y } = this.transforms.normalizePoint(eventX, eventY);
      const [ct, cr, cb, cl] = this.containerBounds;
      const cf = (1 - this.containerFriction) * this.dragSpeed;
      const cx = this.x;
      const cy = this.y;
      this.coords[0] = this.coords[2] = !cf ? cx : cx > cr ? cr + (cx - cr) / cf : cx < cl ? cl + (cx - cl) / cf : cx;
      this.coords[1] = this.coords[3] = !cf ? cy : cy > cb ? cb + (cy - cb) / cf : cy < ct ? ct + (cy - ct) / cf : cy;
      this.pointer[0] = x;
      this.pointer[1] = y;
      this.pointer[2] = x;
      this.pointer[3] = y;
      this.pointer[4] = x;
      this.pointer[5] = y;
      this.pointer[6] = x;
      this.pointer[7] = y;
      this.deltaX = 0;
      this.deltaY = 0;
      this.velocity = 0;
      this.velocityStack[0] = 0;
      this.velocityStack[1] = 0;
      this.velocityStack[2] = 0;
      this.velocityStackIndex = 0;
      this.angle = 0;
      if (this.targetStyles) {
        this.targetStyles.revert();
        this.targetStyles = null;
      }
      const z = (
        /** @type {Number} */
        target2.get(this.$target, "zIndex", false)
      );
      zIndex = (z > zIndex ? z : zIndex) + 1;
      this.targetStyles = target2.set(this.$target, { zIndex });
      if (this.triggerStyles) {
        this.triggerStyles.revert();
        this.triggerStyles = null;
      }
      if (this.cursorStyles) {
        this.cursorStyles.revert();
        this.cursorStyles = null;
      }
      if (this.isFinePointer && this.cursor) {
        this.bodyStyles = target2.set(consts2.doc.body, {
          cursor: (
            /** @type {DraggableCursorParams} */
            this.cursor.onGrab
          )
        });
      }
      this.scrollInView(100, 0, parser2.eases.out(3));
      this.onGrab(this);
      consts2.doc.addEventListener("touchmove", this);
      consts2.doc.addEventListener("touchend", this);
      consts2.doc.addEventListener("touchcancel", this);
      consts2.doc.addEventListener("mousemove", this);
      consts2.doc.addEventListener("mouseup", this);
      consts2.doc.addEventListener("selectstart", this);
    }
    /**
     * @param {MouseEvent|TouchEvent} e
     */
    handleMove(e) {
      if (!this.grabbed) return;
      const touches = (
        /** @type {TouchEvent} */
        e.changedTouches
      );
      const eventX = touches ? touches[0].clientX : (
        /** @type {MouseEvent} */
        e.clientX
      );
      const eventY = touches ? touches[0].clientY : (
        /** @type {MouseEvent} */
        e.clientY
      );
      const { x, y } = this.transforms.normalizePoint(eventX, eventY);
      const movedX = x - this.pointer[6];
      const movedY = y - this.pointer[7];
      let $parent = (
        /** @type {HTMLElement} */
        e.target
      );
      let isAtTop = false;
      let isAtBottom = false;
      let canTouchScroll = false;
      while (touches && $parent && $parent !== this.$trigger) {
        const overflowY = target2.get($parent, "overflow-y");
        if (overflowY !== "hidden" && overflowY !== "visible") {
          const { scrollTop, scrollHeight, clientHeight } = $parent;
          if (scrollHeight > clientHeight) {
            canTouchScroll = true;
            isAtTop = scrollTop <= 3;
            isAtBottom = scrollTop >= scrollHeight - clientHeight - 3;
            break;
          }
        }
        $parent = $parent.parentElement;
      }
      if (canTouchScroll && (!isAtTop && !isAtBottom || isAtTop && movedY < 0 || isAtBottom && movedY > 0)) {
        this.pointer[0] = x;
        this.pointer[1] = y;
        this.pointer[2] = x;
        this.pointer[3] = y;
        this.pointer[4] = x;
        this.pointer[5] = y;
        this.pointer[6] = x;
        this.pointer[7] = y;
      } else {
        preventDefault(e);
        if (!this.triggerStyles) this.triggerStyles = target2.set(this.$trigger, { pointerEvents: "none" });
        this.$trigger.addEventListener("touchstart", preventDefault, { passive: false });
        this.$trigger.addEventListener("touchmove", preventDefault, { passive: false });
        this.$trigger.addEventListener("touchend", preventDefault);
        if (this.dragged || !this.disabled[0] && helpers2.abs(movedX) > this.dragThreshold || !this.disabled[1] && helpers2.abs(movedY) > this.dragThreshold) {
          this.updateTicker.resume();
          this.pointer[2] = this.pointer[0];
          this.pointer[3] = this.pointer[1];
          this.pointer[0] = x;
          this.pointer[1] = y;
          this.dragged = true;
          this.released = false;
          this.onDrag(this);
        }
      }
    }
    handleUp() {
      if (!this.grabbed) return;
      this.updateTicker.pause();
      if (this.triggerStyles) {
        this.triggerStyles.revert();
        this.triggerStyles = null;
      }
      if (this.bodyStyles) {
        this.bodyStyles.revert();
        this.bodyStyles = null;
      }
      const [disabledX, disabledY] = this.disabled;
      const [px1, py1, px2, py2, px3, py3] = this.pointer;
      const [ct, cr, cb, cl] = this.containerBounds;
      const [sx, sy] = this.snapped;
      const springX = this.releaseXSpring;
      const springY = this.releaseYSpring;
      const releaseEase = this.releaseEase;
      const hasReleaseSpring = this.hasReleaseSpring;
      const overshootCoords = this.overshootCoords;
      const cx = this.x;
      const cy = this.y;
      const pv = this.computeVelocity(px1 - px3, py1 - py3);
      const pa = this.angle = helpers2.atan2(py1 - py2, px1 - px2);
      const ds = pv * 150;
      const cf = (1 - this.releaseContainerFriction) * this.dragSpeed;
      const nx = cx + helpers2.cos(pa) * ds;
      const ny = cy + helpers2.sin(pa) * ds;
      const bx = nx > cr ? cr + (nx - cr) * cf : nx < cl ? cl + (nx - cl) * cf : nx;
      const by = ny > cb ? cb + (ny - cb) * cf : ny < ct ? ct + (ny - ct) * cf : ny;
      const dx = this.destX = helpers2.clamp(helpers2.round(helpers2.snap(bx, this.snapX), 5), cl, cr);
      const dy = this.destY = helpers2.clamp(helpers2.round(helpers2.snap(by, this.snapY), 5), ct, cb);
      const ob = this.isOutOfBounds(this.containerBounds, nx, ny);
      let durationX = 0;
      let durationY = 0;
      let easeX = releaseEase;
      let easeY = releaseEase;
      let longestReleaseDuration = 0;
      overshootCoords.x = cx;
      overshootCoords.y = cy;
      if (!disabledX) {
        const directionX = dx === cr ? cx > cr ? -1 : 1 : cx < cl ? -1 : 1;
        const distanceX = helpers2.round(cx - dx, 0);
        springX.velocity = disabledY && hasReleaseSpring ? distanceX ? ds * directionX / helpers2.abs(distanceX) : 0 : pv;
        const { ease, settlingDuration, restDuration } = springX;
        durationX = cx === dx ? 0 : hasReleaseSpring ? settlingDuration : settlingDuration - restDuration * globals2.globals.timeScale;
        if (hasReleaseSpring) easeX = ease;
        if (durationX > longestReleaseDuration) longestReleaseDuration = durationX;
      }
      if (!disabledY) {
        const directionY = dy === cb ? cy > cb ? -1 : 1 : cy < ct ? -1 : 1;
        const distanceY = helpers2.round(cy - dy, 0);
        springY.velocity = disabledX && hasReleaseSpring ? distanceY ? ds * directionY / helpers2.abs(distanceY) : 0 : pv;
        const { ease, settlingDuration, restDuration } = springY;
        durationY = cy === dy ? 0 : hasReleaseSpring ? settlingDuration : settlingDuration - restDuration * globals2.globals.timeScale;
        if (hasReleaseSpring) easeY = ease;
        if (durationY > longestReleaseDuration) longestReleaseDuration = durationY;
      }
      if (!hasReleaseSpring && ob && cf && (durationX || durationY)) {
        const composition3 = consts2.compositionTypes.blend;
        new animation2.JSAnimation(overshootCoords, {
          x: { to: bx, duration: durationX * 0.65 },
          y: { to: by, duration: durationY * 0.65 },
          ease: releaseEase,
          composition: composition3
        }).init();
        new animation2.JSAnimation(overshootCoords, {
          x: { to: dx, duration: durationX },
          y: { to: dy, duration: durationY },
          ease: releaseEase,
          composition: composition3
        }).init();
        this.overshootTicker.stretch(helpers2.max(durationX, durationY)).restart();
      } else {
        if (!disabledX) this.animate[this.xProp](dx, durationX, easeX);
        if (!disabledY) this.animate[this.yProp](dy, durationY, easeY);
      }
      this.scrollInView(longestReleaseDuration, this.scrollThreshold, releaseEase);
      let hasSnapped = false;
      if (dx !== sx) {
        this.snapped[0] = dx;
        if (this.snapX) hasSnapped = true;
      }
      if (dy !== sy && this.snapY) {
        this.snapped[1] = dy;
        if (this.snapY) hasSnapped = true;
      }
      if (hasSnapped) this.onSnap(this);
      this.grabbed = false;
      this.dragged = false;
      this.updated = true;
      this.released = true;
      this.onRelease(this);
      this.$trigger.removeEventListener("touchstart", preventDefault);
      this.$trigger.removeEventListener("touchmove", preventDefault);
      this.$trigger.removeEventListener("touchend", preventDefault);
      consts2.doc.removeEventListener("touchmove", this);
      consts2.doc.removeEventListener("touchend", this);
      consts2.doc.removeEventListener("touchcancel", this);
      consts2.doc.removeEventListener("mousemove", this);
      consts2.doc.removeEventListener("mouseup", this);
      consts2.doc.removeEventListener("selectstart", this);
    }
    reset() {
      this.stop();
      this.resizeTicker.pause();
      this.grabbed = false;
      this.dragged = false;
      this.updated = false;
      this.released = false;
      this.canScroll = false;
      this.setX(0, true);
      this.setY(0, true);
      this.coords[0] = 0;
      this.coords[1] = 0;
      this.pointer[0] = 0;
      this.pointer[1] = 0;
      this.pointer[2] = 0;
      this.pointer[3] = 0;
      this.pointer[4] = 0;
      this.pointer[5] = 0;
      this.pointer[6] = 0;
      this.pointer[7] = 0;
      this.velocity = 0;
      this.velocityStack[0] = 0;
      this.velocityStack[1] = 0;
      this.velocityStack[2] = 0;
      this.velocityStackIndex = 0;
      this.angle = 0;
      return this;
    }
    enable() {
      if (!this.enabled) {
        this.enabled = true;
        this.$target.classList.remove("is-disabled");
        this.touchActionStyles = target2.set(this.$trigger, {
          touchAction: this.disabled[0] ? "pan-x" : this.disabled[1] ? "pan-y" : "none"
        });
        this.$trigger.addEventListener("touchstart", this, { passive: true });
        this.$trigger.addEventListener("mousedown", this, { passive: true });
        this.$trigger.addEventListener("mouseenter", this);
      }
      return this;
    }
    disable() {
      this.enabled = false;
      this.grabbed = false;
      this.dragged = false;
      this.updated = false;
      this.released = false;
      this.canScroll = false;
      this.touchActionStyles.revert();
      if (this.cursorStyles) {
        this.cursorStyles.revert();
        this.cursorStyles = null;
      }
      if (this.triggerStyles) {
        this.triggerStyles.revert();
        this.triggerStyles = null;
      }
      if (this.bodyStyles) {
        this.bodyStyles.revert();
        this.bodyStyles = null;
      }
      if (this.targetStyles) {
        this.targetStyles.revert();
        this.targetStyles = null;
      }
      this.$target.classList.add("is-disabled");
      this.$trigger.removeEventListener("touchstart", this);
      this.$trigger.removeEventListener("mousedown", this);
      this.$trigger.removeEventListener("mouseenter", this);
      consts2.doc.removeEventListener("touchmove", this);
      consts2.doc.removeEventListener("touchend", this);
      consts2.doc.removeEventListener("touchcancel", this);
      consts2.doc.removeEventListener("mousemove", this);
      consts2.doc.removeEventListener("mouseup", this);
      consts2.doc.removeEventListener("selectstart", this);
      return this;
    }
    revert() {
      this.reset();
      this.disable();
      this.$target.classList.remove("is-disabled");
      this.updateTicker.revert();
      this.overshootTicker.revert();
      this.resizeTicker.revert();
      this.animate.revert();
      this.resizeObserver.disconnect();
      return this;
    }
    /**
     * @param {Event} e
     */
    handleEvent(e) {
      switch (e.type) {
        case "mousedown":
          this.handleDown(
            /** @type {MouseEvent} */
            e
          );
          break;
        case "touchstart":
          this.handleDown(
            /** @type {TouchEvent} */
            e
          );
          break;
        case "mousemove":
          this.handleMove(
            /** @type {MouseEvent} */
            e
          );
          break;
        case "touchmove":
          this.handleMove(
            /** @type {TouchEvent} */
            e
          );
          break;
        case "mouseup":
          this.handleUp();
          break;
        case "touchend":
          this.handleUp();
          break;
        case "touchcancel":
          this.handleUp();
          break;
        case "mouseenter":
          this.handleHover();
          break;
        case "selectstart":
          preventDefault(e);
          break;
      }
    }
  }
  const createDraggable = (target3, parameters) => new Draggable(target3, parameters);
  draggable.Draggable = Draggable;
  draggable.createDraggable = createDraggable;
  return draggable;
}
var scope = {};
var time = {};
var hasRequiredTime;
function requireTime() {
  if (hasRequiredTime) return time;
  hasRequiredTime = 1;
  var consts2 = /* @__PURE__ */ requireConsts();
  var globals2 = /* @__PURE__ */ requireGlobals();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var timer2 = /* @__PURE__ */ requireTimer();
  const sync = (callback = consts2.noop) => {
    return new timer2.Timer({ duration: 1 * globals2.globals.timeScale, onComplete: callback }, null, 0).resume();
  };
  const keepTime = (constructor) => {
    let tracked;
    return (
      /** @type {(...args: any[]) => T extends void ? () => void : T} */
      /** @type {*} */
      ((...args) => {
        let currentIteration, currentIterationProgress, reversed, alternate, startTime;
        if (tracked) {
          currentIteration = tracked.currentIteration;
          currentIterationProgress = tracked.iterationProgress;
          reversed = tracked.reversed;
          alternate = tracked._alternate;
          startTime = tracked._startTime;
          tracked.revert();
        }
        const cleanup = constructor(...args);
        if (cleanup && !helpers2.isFnc(cleanup) && cleanup.revert) tracked = cleanup;
        if (!helpers2.isUnd(currentIterationProgress)) {
          tracked.currentIteration = currentIteration;
          tracked.iterationProgress = (alternate ? !(currentIteration % 2) ? reversed : !reversed : reversed) ? 1 - currentIterationProgress : currentIterationProgress;
          tracked._startTime = startTime;
        }
        return cleanup || consts2.noop;
      })
    );
  };
  time.keepTime = keepTime;
  time.sync = sync;
  return time;
}
var hasRequiredScope;
function requireScope() {
  if (hasRequiredScope) return scope;
  hasRequiredScope = 1;
  var consts2 = /* @__PURE__ */ requireConsts();
  var globals2 = /* @__PURE__ */ requireGlobals();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var targets2 = /* @__PURE__ */ requireTargets();
  var time2 = /* @__PURE__ */ requireTime();
  class Scope {
    /** @param {ScopeParams} [parameters] */
    constructor(parameters = {}) {
      if (globals2.scope.current) globals2.scope.current.register(this);
      const rootParam = parameters.root;
      let root = consts2.doc;
      if (rootParam) {
        root = /** @type {ReactRef} */
        rootParam.current || /** @type {AngularRef} */
        rootParam.nativeElement || targets2.parseTargets(
          /** @type {DOMTargetSelector} */
          rootParam
        )[0] || consts2.doc;
      }
      const scopeDefaults = parameters.defaults;
      const globalDefault = globals2.globals.defaults;
      const mediaQueries = parameters.mediaQueries;
      this.defaults = scopeDefaults ? helpers2.mergeObjects(scopeDefaults, globalDefault) : globalDefault;
      this.root = root;
      this.constructors = [];
      this.revertConstructors = [];
      this.revertibles = [];
      this.constructorsOnce = [];
      this.revertConstructorsOnce = [];
      this.revertiblesOnce = [];
      this.once = false;
      this.onceIndex = 0;
      this.methods = {};
      this.matches = {};
      this.mediaQueryLists = {};
      this.data = {};
      if (mediaQueries) {
        for (let mq in mediaQueries) {
          const _mq = consts2.win.matchMedia(mediaQueries[mq]);
          this.mediaQueryLists[mq] = _mq;
          _mq.addEventListener("change", this);
        }
      }
    }
    /**
     * @param {Revertible} revertible
     */
    register(revertible) {
      const store = this.once ? this.revertiblesOnce : this.revertibles;
      store.push(revertible);
    }
    /**
     * @template T
     * @param {ScopedCallback<T>} cb
     * @return {T}
     */
    execute(cb) {
      let activeScope = globals2.scope.current;
      let activeRoot = globals2.scope.root;
      let activeDefaults = globals2.globals.defaults;
      globals2.scope.current = this;
      globals2.scope.root = this.root;
      globals2.globals.defaults = this.defaults;
      const mqs = this.mediaQueryLists;
      for (let mq in mqs) this.matches[mq] = mqs[mq].matches;
      const returned = cb(this);
      globals2.scope.current = activeScope;
      globals2.scope.root = activeRoot;
      globals2.globals.defaults = activeDefaults;
      return returned;
    }
    /**
     * @return {this}
     */
    refresh() {
      this.onceIndex = 0;
      this.execute(() => {
        let i = this.revertibles.length;
        let y = this.revertConstructors.length;
        while (i--) this.revertibles[i].revert();
        while (y--) this.revertConstructors[y](this);
        this.revertibles.length = 0;
        this.revertConstructors.length = 0;
        this.constructors.forEach((constructor) => {
          const revertConstructor = constructor(this);
          if (helpers2.isFnc(revertConstructor)) {
            this.revertConstructors.push(revertConstructor);
          }
        });
      });
      return this;
    }
    /**
     * @overload
     * @param {String} a1
     * @param {ScopeMethod} a2
     * @return {this}
     *
     * @overload
     * @param {ScopeConstructorCallback} a1
     * @return {this}
     *
     * @param {String|ScopeConstructorCallback} a1
     * @param {ScopeMethod} [a2]
     */
    add(a1, a2) {
      this.once = false;
      if (helpers2.isFnc(a1)) {
        const constructor = (
          /** @type {ScopeConstructorCallback} */
          a1
        );
        this.constructors.push(constructor);
        this.execute(() => {
          const revertConstructor = constructor(this);
          if (helpers2.isFnc(revertConstructor)) {
            this.revertConstructors.push(revertConstructor);
          }
        });
      } else {
        this.methods[
          /** @type {String} */
          a1
        ] = (...args) => this.execute(() => a2(...args));
      }
      return this;
    }
    /**
     * @param {ScopeConstructorCallback} scopeConstructorCallback
     * @return {this}
     */
    addOnce(scopeConstructorCallback) {
      this.once = true;
      if (helpers2.isFnc(scopeConstructorCallback)) {
        const currentIndex = this.onceIndex++;
        const tracked = this.constructorsOnce[currentIndex];
        if (tracked) return this;
        const constructor = (
          /** @type {ScopeConstructorCallback} */
          scopeConstructorCallback
        );
        this.constructorsOnce[currentIndex] = constructor;
        this.execute(() => {
          const revertConstructor = constructor(this);
          if (helpers2.isFnc(revertConstructor)) {
            this.revertConstructorsOnce.push(revertConstructor);
          }
        });
      }
      return this;
    }
    /**
     * @param  {(scope: this) => Tickable} cb
     * @return {Tickable}
     */
    keepTime(cb) {
      this.once = true;
      const currentIndex = this.onceIndex++;
      const tracked = (
        /** @type {(scope: this) => Tickable} */
        this.constructorsOnce[currentIndex]
      );
      if (helpers2.isFnc(tracked)) return tracked(this);
      const constructor = (
        /** @type {(scope: this) => Tickable} */
        time2.keepTime(cb)
      );
      this.constructorsOnce[currentIndex] = constructor;
      let trackedTickable;
      this.execute(() => {
        trackedTickable = constructor(this);
      });
      return trackedTickable;
    }
    /**
     * @param {Event} e
     */
    handleEvent(e) {
      switch (e.type) {
        case "change":
          this.refresh();
          break;
      }
    }
    revert() {
      const revertibles = this.revertibles;
      const revertConstructors = this.revertConstructors;
      const revertiblesOnce = this.revertiblesOnce;
      const revertConstructorsOnce = this.revertConstructorsOnce;
      const mqs = this.mediaQueryLists;
      let i = revertibles.length;
      let j = revertConstructors.length;
      let k = revertiblesOnce.length;
      let l = revertConstructorsOnce.length;
      while (i--) revertibles[i].revert();
      while (j--) revertConstructors[j](this);
      while (k--) revertiblesOnce[k].revert();
      while (l--) revertConstructorsOnce[l](this);
      for (let mq in mqs) mqs[mq].removeEventListener("change", this);
      revertibles.length = 0;
      revertConstructors.length = 0;
      this.constructors.length = 0;
      revertiblesOnce.length = 0;
      revertConstructorsOnce.length = 0;
      this.constructorsOnce.length = 0;
      this.onceIndex = 0;
      this.matches = {};
      this.methods = {};
      this.mediaQueryLists = {};
      this.data = {};
    }
  }
  const createScope = (params) => new Scope(params);
  scope.Scope = Scope;
  scope.createScope = createScope;
  return scope;
}
var scroll = {};
var hasRequiredScroll;
function requireScroll() {
  if (hasRequiredScroll) return scroll;
  hasRequiredScroll = 1;
  var consts2 = /* @__PURE__ */ requireConsts();
  var globals2 = /* @__PURE__ */ requireGlobals();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var targets2 = /* @__PURE__ */ requireTargets();
  var values2 = /* @__PURE__ */ requireValues();
  var units2 = /* @__PURE__ */ requireUnits();
  var timer2 = /* @__PURE__ */ requireTimer();
  var target2 = /* @__PURE__ */ requireTarget();
  var time2 = /* @__PURE__ */ requireTime();
  var none2 = /* @__PURE__ */ requireNone();
  var parser2 = /* @__PURE__ */ requireParser();
  const getMaxViewHeight = () => {
    const $el = consts2.doc.createElement("div");
    consts2.doc.body.appendChild($el);
    $el.style.height = "100lvh";
    const height = $el.offsetHeight;
    consts2.doc.body.removeChild($el);
    return height;
  };
  const parseScrollObserverFunctionParameter = (value, scroller) => value && helpers2.isFnc(value) ? (
    /** @type {Function} */
    value(scroller)
  ) : (
    /** @type {T} */
    value
  );
  const scrollContainers = /* @__PURE__ */ new Map();
  class ScrollContainer {
    /**
     * @param {HTMLElement} $el
     */
    constructor($el) {
      this.element = $el;
      this.useWin = this.element === consts2.doc.body;
      this.winWidth = 0;
      this.winHeight = 0;
      this.width = 0;
      this.height = 0;
      this.left = 0;
      this.top = 0;
      this.scale = 1;
      this.zIndex = 0;
      this.scrollX = 0;
      this.scrollY = 0;
      this.prevScrollX = 0;
      this.prevScrollY = 0;
      this.scrollWidth = 0;
      this.scrollHeight = 0;
      this.velocity = 0;
      this.backwardX = false;
      this.backwardY = false;
      this.scrollTicker = new timer2.Timer({
        autoplay: false,
        onBegin: () => this.dataTimer.resume(),
        onUpdate: () => {
          const backwards = this.backwardX || this.backwardY;
          helpers2.forEachChildren(this, (child) => child.handleScroll(), backwards);
        },
        onComplete: () => this.dataTimer.pause()
      }).init();
      this.dataTimer = new timer2.Timer({
        autoplay: false,
        frameRate: 30,
        onUpdate: (self) => {
          const dt = self.deltaTime;
          const px = this.prevScrollX;
          const py = this.prevScrollY;
          const nx = this.scrollX;
          const ny = this.scrollY;
          const dx = px - nx;
          const dy = py - ny;
          this.prevScrollX = nx;
          this.prevScrollY = ny;
          if (dx) this.backwardX = px > nx;
          if (dy) this.backwardY = py > ny;
          this.velocity = helpers2.round(dt > 0 ? Math.sqrt(dx * dx + dy * dy) / dt : 0, 5);
        }
      }).init();
      this.resizeTicker = new timer2.Timer({
        autoplay: false,
        duration: 250 * globals2.globals.timeScale,
        onComplete: () => {
          this.updateWindowBounds();
          this.refreshScrollObservers();
          this.handleScroll();
        }
      }).init();
      this.wakeTicker = new timer2.Timer({
        autoplay: false,
        duration: 500 * globals2.globals.timeScale,
        onBegin: () => {
          this.scrollTicker.resume();
        },
        onComplete: () => {
          this.scrollTicker.pause();
        }
      }).init();
      this._head = null;
      this._tail = null;
      this.updateScrollCoords();
      this.updateWindowBounds();
      this.updateBounds();
      this.refreshScrollObservers();
      this.handleScroll();
      this.resizeObserver = new ResizeObserver(() => this.resizeTicker.restart());
      this.resizeObserver.observe(this.element);
      (this.useWin ? consts2.win : this.element).addEventListener("scroll", this, false);
    }
    updateScrollCoords() {
      const useWin = this.useWin;
      const $el = this.element;
      this.scrollX = helpers2.round(useWin ? consts2.win.scrollX : $el.scrollLeft, 0);
      this.scrollY = helpers2.round(useWin ? consts2.win.scrollY : $el.scrollTop, 0);
    }
    updateWindowBounds() {
      this.winWidth = consts2.win.innerWidth;
      this.winHeight = getMaxViewHeight();
    }
    updateBounds() {
      const style = getComputedStyle(this.element);
      const $el = this.element;
      this.scrollWidth = $el.scrollWidth + parseFloat(style.marginLeft) + parseFloat(style.marginRight);
      this.scrollHeight = $el.scrollHeight + parseFloat(style.marginTop) + parseFloat(style.marginBottom);
      this.updateWindowBounds();
      let width, height;
      if (this.useWin) {
        width = this.winWidth;
        height = this.winHeight;
      } else {
        const elRect = $el.getBoundingClientRect();
        width = $el.clientWidth;
        height = $el.clientHeight;
        this.top = elRect.top;
        this.left = elRect.left;
        this.scale = elRect.width ? width / elRect.width : elRect.height ? height / elRect.height : 1;
      }
      this.width = width;
      this.height = height;
    }
    refreshScrollObservers() {
      helpers2.forEachChildren(this, (child) => {
        if (!child.ready) return;
        if (child._debug) {
          child.removeDebug();
        }
      });
      this.updateBounds();
      helpers2.forEachChildren(this, (child) => {
        if (!child.ready) return;
        child.refresh();
        child.onResize(child);
        if (child._debug) {
          child.debug();
        }
      });
    }
    refresh() {
      this.updateWindowBounds();
      this.updateBounds();
      this.refreshScrollObservers();
      this.handleScroll();
    }
    handleScroll() {
      this.updateScrollCoords();
      this.wakeTicker.restart();
    }
    /**
     * @param {Event} e
     */
    handleEvent(e) {
      switch (e.type) {
        case "scroll":
          this.handleScroll();
          break;
      }
    }
    revert() {
      this.scrollTicker.cancel();
      this.dataTimer.cancel();
      this.resizeTicker.cancel();
      this.wakeTicker.cancel();
      this.resizeObserver.disconnect();
      (this.useWin ? consts2.win : this.element).removeEventListener("scroll", this);
      scrollContainers.delete(this.element);
    }
  }
  const registerAndGetScrollContainer = (target3) => {
    const $el = (
      /** @type {HTMLElement} */
      target3 ? targets2.parseTargets(target3)[0] || consts2.doc.body : consts2.doc.body
    );
    let scrollContainer = scrollContainers.get($el);
    if (!scrollContainer) {
      scrollContainer = new ScrollContainer($el);
      scrollContainers.set($el, scrollContainer);
    }
    return scrollContainer;
  };
  const convertValueToPx = ($el, v, size, under, over) => {
    const clampMin = v === "min";
    const clampMax = v === "max";
    const value = v === "top" || v === "left" || v === "start" || clampMin ? 0 : v === "bottom" || v === "right" || v === "end" || clampMax ? "100%" : v === "center" ? "50%" : v;
    const { n, u } = values2.decomposeRawValue(value, values2.decomposedOriginalValue);
    let px = n;
    if (u === "%") {
      px = n / 100 * size;
    } else if (u) {
      px = units2.convertValueUnit($el, values2.decomposedOriginalValue, "px", true).n;
    }
    if (clampMax && under < 0) px += under;
    if (clampMin && over > 0) px += over;
    return px;
  };
  const parseBoundValue = ($el, v, size, under, over) => {
    let value;
    if (helpers2.isStr(v)) {
      const matchedOperator = consts2.relativeValuesExecRgx.exec(
        /** @type {String} */
        v
      );
      if (matchedOperator) {
        const splitter = matchedOperator[0];
        const operator = splitter[0];
        const splitted = (
          /** @type {String} */
          v.split(splitter)
        );
        const clampMin = splitted[0] === "min";
        const clampMax = splitted[0] === "max";
        const valueAPx = convertValueToPx($el, splitted[0], size, under, over);
        const valueBPx = convertValueToPx($el, splitted[1], size, under, over);
        if (clampMin) {
          const min = values2.getRelativeValue(convertValueToPx($el, "min", size), valueBPx, operator);
          value = min < valueAPx ? valueAPx : min;
        } else if (clampMax) {
          const max = values2.getRelativeValue(convertValueToPx($el, "max", size), valueBPx, operator);
          value = max > valueAPx ? valueAPx : max;
        } else {
          value = values2.getRelativeValue(valueAPx, valueBPx, operator);
        }
      } else {
        value = convertValueToPx($el, v, size, under, over);
      }
    } else {
      value = /** @type {Number} */
      v;
    }
    return helpers2.round(value, 0);
  };
  const getAnimationDomTarget = (linked) => {
    let $linkedTarget;
    const linkedTargets = linked.targets;
    for (let i = 0, l = linkedTargets.length; i < l; i++) {
      const target3 = linkedTargets[i];
      if (target3[consts2.isDomSymbol]) {
        $linkedTarget = /** @type {HTMLElement} */
        target3;
        break;
      }
    }
    return $linkedTarget;
  };
  let scrollerIndex = 0;
  const debugColors = ["#FF4B4B", "#FF971B", "#FFC730", "#F9F640", "#7AFF5A", "#18FF74", "#17E09B", "#3CFFEC", "#05DBE9", "#33B3F1", "#638CF9", "#C563FE", "#FF4FCF", "#F93F8A"];
  class ScrollObserver {
    /**
     * @param {ScrollObserverParams} parameters
     */
    constructor(parameters = {}) {
      if (globals2.scope.current) globals2.scope.current.register(this);
      const syncMode = values2.setValue(parameters.sync, "play pause");
      const ease = syncMode ? parser2.parseEase(
        /** @type {EasingParam} */
        syncMode
      ) : null;
      const isLinear = syncMode && (syncMode === "linear" || syncMode === none2.none);
      const isEase = syncMode && !(ease === none2.none && !isLinear);
      const isSmooth = syncMode && (helpers2.isNum(syncMode) || syncMode === true || isLinear);
      const isMethods = syncMode && (helpers2.isStr(syncMode) && !isEase && !isSmooth);
      const syncMethods = isMethods ? (
        /** @type {String} */
        syncMode.split(" ").map(
          (m) => () => {
            const linked = this.linked;
            return linked && linked[m] ? linked[m]() : null;
          }
        )
      ) : null;
      const biDirSync = isMethods && syncMethods.length > 2;
      this.index = scrollerIndex++;
      this.id = !helpers2.isUnd(parameters.id) ? parameters.id : this.index;
      this.container = registerAndGetScrollContainer(parameters.container);
      this.target = null;
      this.linked = null;
      this.repeat = null;
      this.horizontal = null;
      this.enter = null;
      this.leave = null;
      this.sync = isEase || isSmooth || !!syncMethods;
      this.syncEase = isEase ? ease : null;
      this.syncSmooth = isSmooth ? syncMode === true || isLinear ? 1 : (
        /** @type {Number} */
        syncMode
      ) : null;
      this.onSyncEnter = syncMethods && !biDirSync && syncMethods[0] ? syncMethods[0] : consts2.noop;
      this.onSyncLeave = syncMethods && !biDirSync && syncMethods[1] ? syncMethods[1] : consts2.noop;
      this.onSyncEnterForward = syncMethods && biDirSync && syncMethods[0] ? syncMethods[0] : consts2.noop;
      this.onSyncLeaveForward = syncMethods && biDirSync && syncMethods[1] ? syncMethods[1] : consts2.noop;
      this.onSyncEnterBackward = syncMethods && biDirSync && syncMethods[2] ? syncMethods[2] : consts2.noop;
      this.onSyncLeaveBackward = syncMethods && biDirSync && syncMethods[3] ? syncMethods[3] : consts2.noop;
      this.onEnter = parameters.onEnter || consts2.noop;
      this.onLeave = parameters.onLeave || consts2.noop;
      this.onEnterForward = parameters.onEnterForward || consts2.noop;
      this.onLeaveForward = parameters.onLeaveForward || consts2.noop;
      this.onEnterBackward = parameters.onEnterBackward || consts2.noop;
      this.onLeaveBackward = parameters.onLeaveBackward || consts2.noop;
      this.onUpdate = parameters.onUpdate || consts2.noop;
      this.onResize = parameters.onResize || consts2.noop;
      this.onSyncComplete = parameters.onSyncComplete || consts2.noop;
      this.reverted = false;
      this.ready = false;
      this.completed = false;
      this.began = false;
      this.isInView = false;
      this.forceEnter = false;
      this.hasEntered = false;
      this.offset = 0;
      this.offsetStart = 0;
      this.offsetEnd = 0;
      this.distance = 0;
      this.prevProgress = 0;
      this.thresholds = ["start", "end", "end", "start"];
      this.coords = [0, 0, 0, 0];
      this.debugStyles = null;
      this.$debug = null;
      this._params = parameters;
      this._debug = values2.setValue(parameters.debug, false);
      this._next = null;
      this._prev = null;
      helpers2.addChild(this.container, this);
      time2.sync(() => {
        if (this.reverted) return;
        if (!this.target) {
          const target3 = (
            /** @type {HTMLElement} */
            targets2.parseTargets(parameters.target)[0]
          );
          this.target = target3 || consts2.doc.body;
          this.refresh();
        }
        if (this._debug) this.debug();
      });
    }
    /**
     * @param {Tickable|WAAPIAnimation} linked
     */
    link(linked) {
      if (linked) {
        linked.pause();
        this.linked = linked;
        if (!helpers2.isUnd(linked) && !helpers2.isUnd(
          /** @type {WAAPIAnimation} */
          linked.persist
        )) {
          linked.persist = true;
        }
        if (!this._params.target) {
          let $linkedTarget;
          if (!helpers2.isUnd(
            /** @type {JSAnimation} */
            linked.targets
          )) {
            $linkedTarget = getAnimationDomTarget(
              /** @type {JSAnimation} */
              linked
            );
          } else {
            helpers2.forEachChildren(
              /** @type {Timeline} */
              linked,
              (child) => {
                if (child.targets && !$linkedTarget) {
                  $linkedTarget = getAnimationDomTarget(
                    /** @type {JSAnimation} */
                    child
                  );
                }
              }
            );
          }
          this.target = $linkedTarget || consts2.doc.body;
          this.refresh();
        }
      }
      return this;
    }
    get velocity() {
      return this.container.velocity;
    }
    get backward() {
      return this.horizontal ? this.container.backwardX : this.container.backwardY;
    }
    get scroll() {
      return this.horizontal ? this.container.scrollX : this.container.scrollY;
    }
    get progress() {
      const p = (this.scroll - this.offsetStart) / this.distance;
      return p === Infinity || isNaN(p) ? 0 : helpers2.round(helpers2.clamp(p, 0, 1), 6);
    }
    refresh() {
      this.ready = true;
      this.reverted = false;
      const params = this._params;
      this.repeat = values2.setValue(parseScrollObserverFunctionParameter(params.repeat, this), true);
      this.horizontal = values2.setValue(parseScrollObserverFunctionParameter(params.axis, this), "y") === "x";
      this.enter = values2.setValue(parseScrollObserverFunctionParameter(params.enter, this), "end start");
      this.leave = values2.setValue(parseScrollObserverFunctionParameter(params.leave, this), "start end");
      this.updateBounds();
      this.handleScroll();
      return this;
    }
    removeDebug() {
      if (this.$debug) {
        this.$debug.parentNode.removeChild(this.$debug);
        this.$debug = null;
      }
      if (this.debugStyles) {
        this.debugStyles.revert();
        this.$debug = null;
      }
      return this;
    }
    debug() {
      this.removeDebug();
      const container = this.container;
      const isHori = this.horizontal;
      const $existingDebug = container.element.querySelector(":scope > .animejs-onscroll-debug");
      const $debug = consts2.doc.createElement("div");
      const $thresholds = consts2.doc.createElement("div");
      const $triggers = consts2.doc.createElement("div");
      const color = debugColors[this.index % debugColors.length];
      const useWin = container.useWin;
      const containerWidth = useWin ? container.winWidth : container.width;
      const containerHeight = useWin ? container.winHeight : container.height;
      const scrollWidth = container.scrollWidth;
      const scrollHeight = container.scrollHeight;
      const size = this.container.width > 360 ? 320 : 260;
      const offLeft = isHori ? 0 : 10;
      const offTop = isHori ? 10 : 0;
      const half = isHori ? 24 : size / 2;
      const labelHeight = isHori ? half : 15;
      const labelWidth = isHori ? 60 : half;
      const labelSize = isHori ? labelWidth : labelHeight;
      const repeat = isHori ? "repeat-x" : "repeat-y";
      const gradientOffset = (v) => isHori ? "0px " + v + "px" : v + "px 2px";
      const lineCSS = (c) => `linear-gradient(${isHori ? 90 : 0}deg, ${c} 2px, transparent 1px)`;
      const baseCSS = (p, l, t, w, h) => `position:${p};left:${l}px;top:${t}px;width:${w}px;height:${h}px;`;
      $debug.style.cssText = `${baseCSS("absolute", offLeft, offTop, isHori ? scrollWidth : size, isHori ? size : scrollHeight)}
      pointer-events: none;
      z-index: ${this.container.zIndex++};
      display: flex;
      flex-direction: ${isHori ? "column" : "row"};
      filter: drop-shadow(0px 1px 0px rgba(0,0,0,.75));
    `;
      $thresholds.style.cssText = `${baseCSS("sticky", 0, 0, isHori ? containerWidth : half, isHori ? half : containerHeight)}`;
      if (!$existingDebug) {
        $thresholds.style.cssText += `background:
        ${lineCSS("#FFFF")}${gradientOffset(half - 10)} / ${isHori ? "100px 100px" : "100px 100px"} ${repeat},
        ${lineCSS("#FFF8")}${gradientOffset(half - 10)} / ${isHori ? "10px 10px" : "10px 10px"} ${repeat};
      `;
      }
      $triggers.style.cssText = `${baseCSS("relative", 0, 0, isHori ? scrollWidth : half, isHori ? half : scrollHeight)}`;
      if (!$existingDebug) {
        $triggers.style.cssText += `background:
        ${lineCSS("#FFFF")}${gradientOffset(0)} / ${isHori ? "100px 10px" : "10px 100px"} ${repeat},
        ${lineCSS("#FFF8")}${gradientOffset(0)} / ${isHori ? "10px 0px" : "0px 10px"} ${repeat};
      `;
      }
      const labels = [" enter: ", " leave: "];
      this.coords.forEach((v, i) => {
        const isView = i > 1;
        const value = (isView ? 0 : this.offset) + v;
        const isTail = i % 2;
        const isFirst = value < labelSize;
        const isOver = value > (isView ? isHori ? containerWidth : containerHeight : isHori ? scrollWidth : scrollHeight) - labelSize;
        const isFlip = (isView ? isTail && !isFirst : !isTail && !isFirst) || isOver;
        const $label = consts2.doc.createElement("div");
        const $text = consts2.doc.createElement("div");
        const dirProp = isHori ? isFlip ? "right" : "left" : isFlip ? "bottom" : "top";
        const flipOffset = isFlip ? (isHori ? labelWidth : labelHeight) + (!isView ? isHori ? -1 : -2 : isHori ? -1 : isOver ? 0 : -2) : !isView ? isHori ? 1 : 0 : isHori ? 1 : 0;
        $text.innerHTML = `${this.id}${labels[isTail]}${this.thresholds[i]}`;
        $label.style.cssText = `${baseCSS("absolute", 0, 0, labelWidth, labelHeight)}
        display: flex;
        flex-direction: ${isHori ? "column" : "row"};
        justify-content: flex-${isView ? "start" : "end"};
        align-items: flex-${isFlip ? "end" : "start"};
        border-${dirProp}: 2px ${isTail ? "solid" : "solid"} ${color};
      `;
        $text.style.cssText = `
        overflow: hidden;
        max-width: ${size / 2 - 10}px;
        height: ${labelHeight};
        margin-${isHori ? isFlip ? "right" : "left" : isFlip ? "bottom" : "top"}: -2px;
        padding: 1px;
        font-family: ui-monospace, monospace;
        font-size: 10px;
        letter-spacing: -.025em;
        line-height: 9px;
        font-weight: 600;
        text-align: ${isHori && isFlip || !isHori && !isView ? "right" : "left"};
        white-space: pre;
        text-overflow: ellipsis;
        color: ${isTail ? color : "rgba(0,0,0,.75)"};
        background-color: ${isTail ? "rgba(0,0,0,.65)" : color};
        border: 2px solid ${isTail ? color : "transparent"};
        border-${isHori ? isFlip ? "top-left" : "top-right" : isFlip ? "top-left" : "bottom-left"}-radius: 5px;
        border-${isHori ? isFlip ? "bottom-left" : "bottom-right" : isFlip ? "top-right" : "bottom-right"}-radius: 5px;
      `;
        $label.appendChild($text);
        let position2 = value - flipOffset + (isHori ? 1 : 0);
        $label.style[isHori ? "left" : "top"] = `${position2}px`;
        (isView ? $thresholds : $triggers).appendChild($label);
      });
      $debug.appendChild($thresholds);
      $debug.appendChild($triggers);
      container.element.appendChild($debug);
      if (!$existingDebug) $debug.classList.add("animejs-onscroll-debug");
      this.$debug = $debug;
      const containerPosition = target2.get(container.element, "position");
      if (containerPosition === "static") {
        this.debugStyles = target2.set(container.element, { position: "relative " });
      }
    }
    updateBounds() {
      if (this._debug) {
        this.removeDebug();
      }
      let stickys;
      const $target = this.target;
      const container = this.container;
      const isHori = this.horizontal;
      const linked = this.linked;
      let linkedTime;
      let $el = $target;
      if (linked) {
        linkedTime = linked.currentTime;
        linked.seek(0, true);
      }
      while ($el && $el !== container.element && $el !== consts2.doc.body) {
        const isSticky = target2.get($el, "position") === "sticky" ? target2.set($el, { position: "static" }) : false;
        $el = $el.parentElement;
        if (isSticky) {
          if (!stickys) stickys = [];
          stickys.push(isSticky);
        }
      }
      const rect = $target.getBoundingClientRect();
      const scale = container.scale;
      const offset = (isHori ? rect.left + container.scrollX - container.left : rect.top + container.scrollY - container.top) * scale;
      const targetSize = (isHori ? rect.width : rect.height) * scale;
      const containerSize = isHori ? container.width : container.height;
      const scrollSize = isHori ? container.scrollWidth : container.scrollHeight;
      const maxScroll = scrollSize - containerSize;
      const enter = this.enter;
      const leave = this.leave;
      let enterTarget = "start";
      let leaveTarget = "end";
      let enterContainer = "end";
      let leaveContainer = "start";
      if (helpers2.isStr(enter)) {
        const splitted = (
          /** @type {String} */
          enter.split(" ")
        );
        enterContainer = splitted[0];
        enterTarget = splitted.length > 1 ? splitted[1] : enterTarget;
      } else if (helpers2.isObj(enter)) {
        const e = (
          /** @type {ScrollThresholdParam} */
          enter
        );
        if (!helpers2.isUnd(e.container)) enterContainer = e.container;
        if (!helpers2.isUnd(e.target)) enterTarget = e.target;
      } else if (helpers2.isNum(enter)) {
        enterContainer = /** @type {Number} */
        enter;
      }
      if (helpers2.isStr(leave)) {
        const splitted = (
          /** @type {String} */
          leave.split(" ")
        );
        leaveContainer = splitted[0];
        leaveTarget = splitted.length > 1 ? splitted[1] : leaveTarget;
      } else if (helpers2.isObj(leave)) {
        const t = (
          /** @type {ScrollThresholdParam} */
          leave
        );
        if (!helpers2.isUnd(t.container)) leaveContainer = t.container;
        if (!helpers2.isUnd(t.target)) leaveTarget = t.target;
      } else if (helpers2.isNum(leave)) {
        leaveContainer = /** @type {Number} */
        leave;
      }
      const parsedEnterTarget = parseBoundValue($target, enterTarget, targetSize);
      const parsedLeaveTarget = parseBoundValue($target, leaveTarget, targetSize);
      const under = parsedEnterTarget + offset - containerSize;
      const over = parsedLeaveTarget + offset - maxScroll;
      const parsedEnterContainer = parseBoundValue($target, enterContainer, containerSize, under, over);
      const parsedLeaveContainer = parseBoundValue($target, leaveContainer, containerSize, under, over);
      const offsetStart = parsedEnterTarget + offset - parsedEnterContainer;
      const offsetEnd = parsedLeaveTarget + offset - parsedLeaveContainer;
      const scrollDelta = offsetEnd - offsetStart;
      this.offset = offset;
      this.offsetStart = offsetStart;
      this.offsetEnd = offsetEnd;
      this.distance = scrollDelta <= 0 ? 0 : scrollDelta;
      this.thresholds = [enterTarget, leaveTarget, enterContainer, leaveContainer];
      this.coords = [parsedEnterTarget, parsedLeaveTarget, parsedEnterContainer, parsedLeaveContainer];
      if (stickys) {
        stickys.forEach((sticky) => sticky.revert());
      }
      if (linked) {
        linked.seek(linkedTime, true);
      }
      if (this._debug) {
        this.debug();
      }
    }
    handleScroll() {
      if (!this.ready) return;
      const linked = this.linked;
      const sync = this.sync;
      const syncEase = this.syncEase;
      const syncSmooth = this.syncSmooth;
      const shouldSeek = linked && (syncEase || syncSmooth);
      const isHori = this.horizontal;
      const container = this.container;
      const scroll2 = this.scroll;
      const isBefore = scroll2 <= this.offsetStart;
      const isAfter = scroll2 >= this.offsetEnd;
      const isInView = !isBefore && !isAfter;
      const isOnTheEdge = scroll2 === this.offsetStart || scroll2 === this.offsetEnd;
      const forceEnter = !this.hasEntered && isOnTheEdge;
      const $debug = this._debug && this.$debug;
      let hasUpdated = false;
      let syncCompleted = false;
      let p = this.progress;
      if (isBefore && this.began) {
        this.began = false;
      }
      if (p > 0 && !this.began) {
        this.began = true;
      }
      if (shouldSeek) {
        const lp = linked.progress;
        if (syncSmooth && helpers2.isNum(syncSmooth)) {
          if (
            /** @type {Number} */
            syncSmooth < 1
          ) {
            const step = 1e-4;
            const snap = lp < p && p === 1 ? step : lp > p && !p ? -step : 0;
            p = helpers2.round(helpers2.lerp(lp, p, helpers2.lerp(
              0.01,
              0.2,
              /** @type {Number} */
              syncSmooth
            )) + snap, 6);
          }
        } else if (syncEase) {
          p = syncEase(p);
        }
        hasUpdated = p !== this.prevProgress;
        syncCompleted = lp === 1;
        if (hasUpdated && !syncCompleted && (syncSmooth && lp)) {
          container.wakeTicker.restart();
        }
      }
      if ($debug) {
        const sticky = isHori ? container.scrollY : container.scrollX;
        $debug.style[isHori ? "top" : "left"] = sticky + 10 + "px";
      }
      if (isInView && !this.isInView || forceEnter && !this.forceEnter && !this.hasEntered) {
        if (isInView) this.isInView = true;
        if (!this.forceEnter || !this.hasEntered) {
          if ($debug && isInView) $debug.style.zIndex = `${this.container.zIndex++}`;
          this.onSyncEnter(this);
          this.onEnter(this);
          if (this.backward) {
            this.onSyncEnterBackward(this);
            this.onEnterBackward(this);
          } else {
            this.onSyncEnterForward(this);
            this.onEnterForward(this);
          }
          this.hasEntered = true;
          if (forceEnter) this.forceEnter = true;
        } else if (isInView) {
          this.forceEnter = false;
        }
      }
      if (isInView || !isInView && this.isInView) {
        hasUpdated = true;
      }
      if (hasUpdated) {
        if (shouldSeek) linked.seek(linked.duration * p);
        this.onUpdate(this);
      }
      if (!isInView && this.isInView) {
        this.isInView = false;
        this.onSyncLeave(this);
        this.onLeave(this);
        if (this.backward) {
          this.onSyncLeaveBackward(this);
          this.onLeaveBackward(this);
        } else {
          this.onSyncLeaveForward(this);
          this.onLeaveForward(this);
        }
        if (sync && !syncSmooth) {
          syncCompleted = true;
        }
      }
      if (p >= 1 && this.began && !this.completed && (sync && syncCompleted || !sync)) {
        if (sync) {
          this.onSyncComplete(this);
        }
        this.completed = true;
        if (!this.repeat && !linked || !this.repeat && linked && linked.completed) {
          this.revert();
        }
      }
      if (p < 1 && this.completed) {
        this.completed = false;
      }
      this.prevProgress = p;
    }
    revert() {
      if (this.reverted) return;
      const container = this.container;
      helpers2.removeChild(container, this);
      if (!container._head) {
        container.revert();
      }
      if (this._debug) {
        this.removeDebug();
      }
      this.reverted = true;
      this.ready = false;
      return this;
    }
  }
  const onScroll = (parameters = {}) => new ScrollObserver(parameters);
  scroll.ScrollObserver = ScrollObserver;
  scroll.onScroll = onScroll;
  scroll.scrollContainers = scrollContainers;
  return scroll;
}
var easings = {};
var cubicBezier = {};
var hasRequiredCubicBezier;
function requireCubicBezier() {
  if (hasRequiredCubicBezier) return cubicBezier;
  hasRequiredCubicBezier = 1;
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var none2 = /* @__PURE__ */ requireNone();
  const calcBezier = (aT, aA1, aA2) => (((1 - 3 * aA2 + 3 * aA1) * aT + (3 * aA2 - 6 * aA1)) * aT + 3 * aA1) * aT;
  const binarySubdivide = (aX, mX1, mX2) => {
    let aA = 0, aB = 1, currentX, currentT, i = 0;
    do {
      currentT = aA + (aB - aA) / 2;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (helpers2.abs(currentX) > 1e-7 && ++i < 100);
    return currentT;
  };
  const cubicBezier$1 = (mX1 = 0.5, mY1 = 0, mX2 = 0.5, mY2 = 1) => mX1 === mY1 && mX2 === mY2 ? none2.none : (t) => t === 0 || t === 1 ? t : calcBezier(binarySubdivide(t, mX1, mX2), mY1, mY2);
  cubicBezier.cubicBezier = cubicBezier$1;
  return cubicBezier;
}
var steps = {};
var hasRequiredSteps;
function requireSteps() {
  if (hasRequiredSteps) return steps;
  hasRequiredSteps = 1;
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  const steps$1 = (steps2 = 10, fromStart) => {
    const roundMethod = fromStart ? helpers2.ceil : helpers2.floor;
    return (t) => roundMethod(helpers2.clamp(t, 0, 1) * steps2) * (1 / steps2);
  };
  steps.steps = steps$1;
  return steps;
}
var linear = {};
var hasRequiredLinear;
function requireLinear() {
  if (hasRequiredLinear) return linear;
  hasRequiredLinear = 1;
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var none2 = /* @__PURE__ */ requireNone();
  const linear$1 = (...args) => {
    const argsLength = args.length;
    if (!argsLength) return none2.none;
    const totalPoints = argsLength - 1;
    const firstArg = args[0];
    const lastArg = args[totalPoints];
    const xPoints = [0];
    const yPoints = [helpers2.parseNumber(firstArg)];
    for (let i = 1; i < totalPoints; i++) {
      const arg = args[i];
      const splitValue = helpers2.isStr(arg) ? (
        /** @type {String} */
        arg.trim().split(" ")
      ) : [arg];
      const value = splitValue[0];
      const percent = splitValue[1];
      xPoints.push(!helpers2.isUnd(percent) ? helpers2.parseNumber(percent) / 100 : i / totalPoints);
      yPoints.push(helpers2.parseNumber(value));
    }
    yPoints.push(helpers2.parseNumber(lastArg));
    xPoints.push(1);
    return function easeLinear(t) {
      for (let i = 1, l = xPoints.length; i < l; i++) {
        const currentX = xPoints[i];
        if (t <= currentX) {
          const prevX = xPoints[i - 1];
          const prevY = yPoints[i - 1];
          return prevY + (yPoints[i] - prevY) * (t - prevX) / (currentX - prevX);
        }
      }
      return yPoints[yPoints.length - 1];
    };
  };
  linear.linear = linear$1;
  return linear;
}
var irregular = {};
var hasRequiredIrregular;
function requireIrregular() {
  if (hasRequiredIrregular) return irregular;
  hasRequiredIrregular = 1;
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var index = /* @__PURE__ */ requireLinear();
  const irregular$1 = (length = 10, randomness = 1) => {
    const values2 = [0];
    const total = length - 1;
    for (let i = 1; i < total; i++) {
      const previousValue = values2[i - 1];
      const spacing = i / total;
      const segmentEnd = (i + 1) / total;
      const randomVariation = spacing + (segmentEnd - spacing) * Math.random();
      const randomValue = spacing * (1 - randomness) + randomVariation * randomness;
      values2.push(helpers2.clamp(randomValue, previousValue, 1));
    }
    values2.push(1);
    return index.linear(...values2);
  };
  irregular.irregular = irregular$1;
  return irregular;
}
var hasRequiredEasings;
function requireEasings() {
  if (hasRequiredEasings) return easings;
  hasRequiredEasings = 1;
  var index = /* @__PURE__ */ requireCubicBezier();
  var index$1 = /* @__PURE__ */ requireSteps();
  var index$2 = /* @__PURE__ */ requireLinear();
  var index$3 = /* @__PURE__ */ requireIrregular();
  var index$4 = /* @__PURE__ */ requireSpring();
  var parser2 = /* @__PURE__ */ requireParser();
  easings.cubicBezier = index.cubicBezier;
  easings.steps = index$1.steps;
  easings.linear = index$2.linear;
  easings.irregular = index$3.irregular;
  easings.Spring = index$4.Spring;
  easings.createSpring = index$4.createSpring;
  easings.spring = index$4.spring;
  easings.eases = parser2.eases;
  return easings;
}
var layout = {};
var waapi = {};
var hasRequiredWaapi;
function requireWaapi() {
  if (hasRequiredWaapi) return waapi;
  hasRequiredWaapi = 1;
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var globals2 = /* @__PURE__ */ requireGlobals();
  var targets2 = /* @__PURE__ */ requireTargets();
  var values2 = /* @__PURE__ */ requireValues();
  var consts2 = /* @__PURE__ */ requireConsts();
  var none2 = /* @__PURE__ */ requireNone();
  var parser2 = /* @__PURE__ */ requireParser();
  var composition2 = /* @__PURE__ */ requireComposition();
  const easingToLinear = (fn, samples = 100) => {
    const points = [];
    for (let i = 0; i <= samples; i++) points.push(helpers2.round(fn(i / samples), 4));
    return `linear(${points.join(", ")})`;
  };
  const WAAPIEasesLookups = {};
  const parseWAAPIEasing = (ease) => {
    let parsedEase = WAAPIEasesLookups[ease];
    if (parsedEase) return parsedEase;
    parsedEase = "linear";
    if (helpers2.isStr(ease)) {
      if (helpers2.stringStartsWith(ease, "linear") || helpers2.stringStartsWith(ease, "cubic-") || helpers2.stringStartsWith(ease, "steps") || helpers2.stringStartsWith(ease, "ease")) {
        parsedEase = ease;
      } else if (helpers2.stringStartsWith(ease, "cubicB")) {
        parsedEase = helpers2.toLowerCase(ease);
      } else {
        const parsed = parser2.parseEaseString(ease);
        if (helpers2.isFnc(parsed)) parsedEase = parsed === none2.none ? "linear" : easingToLinear(parsed);
      }
      WAAPIEasesLookups[ease] = parsedEase;
    } else if (helpers2.isFnc(ease)) {
      const easing = easingToLinear(ease);
      if (easing) parsedEase = easing;
    } else if (
      /** @type {Spring} */
      ease.ease
    ) {
      parsedEase = easingToLinear(
        /** @type {Spring} */
        ease.ease
      );
    }
    return parsedEase;
  };
  const transformsShorthands = ["x", "y", "z"];
  const commonDefaultPXProperties = [
    "perspective",
    "width",
    "height",
    "margin",
    "padding",
    "top",
    "right",
    "bottom",
    "left",
    "borderWidth",
    "fontSize",
    "borderRadius",
    ...transformsShorthands
  ];
  const validIndividualTransforms = /* @__PURE__ */ (() => [...transformsShorthands, ...consts2.validTransforms.filter((t) => ["X", "Y", "Z"].some((axis) => t.endsWith(axis)))])();
  let transformsPropertiesRegistered = null;
  const normalizeTweenValue = (propName, value, $el, i, parsedTargets) => {
    let v = helpers2.isStr(value) ? value : values2.getFunctionValue(
      /** @type {any} */
      value,
      $el,
      i,
      parsedTargets,
      null,
      null
    );
    if (!helpers2.isNum(v)) return v;
    if (commonDefaultPXProperties.includes(propName) || helpers2.stringStartsWith(propName, "translate")) return `${v}px`;
    if (helpers2.stringStartsWith(propName, "rotate") || helpers2.stringStartsWith(propName, "skew")) return `${v}deg`;
    return `${v}`;
  };
  const parseIndividualTweenValue = ($el, propName, from, to, i, parsedTargets) => {
    let tweenValue = "0";
    const computedTo = !helpers2.isUnd(to) ? normalizeTweenValue(propName, to, $el, i, parsedTargets) : getComputedStyle($el)[propName];
    if (!helpers2.isUnd(from)) {
      const computedFrom = normalizeTweenValue(propName, from, $el, i, parsedTargets);
      tweenValue = [computedFrom, computedTo];
    } else {
      tweenValue = helpers2.isArr(to) ? to.map((v) => normalizeTweenValue(propName, v, $el, i, parsedTargets)) : computedTo;
    }
    return tweenValue;
  };
  class WAAPIAnimation {
    /**
     * @param {DOMTargetsParam} targets
     * @param {WAAPIAnimationParams} params
     */
    constructor(targets$1, params) {
      if (globals2.scope.current) globals2.scope.current.register(this);
      if (helpers2.isNil(transformsPropertiesRegistered)) {
        if (consts2.isBrowser && (helpers2.isUnd(CSS) || !Object.hasOwnProperty.call(CSS, "registerProperty"))) {
          transformsPropertiesRegistered = false;
        } else {
          consts2.validTransforms.forEach((t) => {
            const isSkew = helpers2.stringStartsWith(t, "skew");
            const isScale = helpers2.stringStartsWith(t, "scale");
            const isRotate = helpers2.stringStartsWith(t, "rotate");
            const isTranslate = helpers2.stringStartsWith(t, "translate");
            const isAngle = isRotate || isSkew;
            const syntax = isAngle ? "<angle>" : isScale ? "<number>" : isTranslate ? "<length-percentage>" : "*";
            try {
              CSS.registerProperty({
                name: "--" + t,
                syntax,
                inherits: false,
                initialValue: isTranslate ? "0px" : isAngle ? "0deg" : isScale ? "1" : "0"
              });
            } catch {
            }
          });
          transformsPropertiesRegistered = true;
        }
      }
      const parsedTargets = targets2.registerTargets(targets$1);
      if (!parsedTargets.length) {
        console.warn(`No target found. Make sure the element you're trying to animate is accessible before creating your animation.`);
      }
      const autoplay = values2.setValue(params.autoplay, globals2.globals.defaults.autoplay);
      const scroll2 = autoplay && /** @type {ScrollObserver} */
      autoplay.link ? autoplay : false;
      const alternate = params.alternate && /** @type {Boolean} */
      params.alternate === true;
      const reversed = params.reversed && /** @type {Boolean} */
      params.reversed === true;
      const loop = values2.setValue(params.loop, globals2.globals.defaults.loop);
      const iterations = (
        /** @type {Number} */
        loop === true || loop === Infinity ? Infinity : helpers2.isNum(loop) ? loop + 1 : 1
      );
      const direction = alternate ? reversed ? "alternate-reverse" : "alternate" : reversed ? "reverse" : "normal";
      const fill = "both";
      const timeScale = globals2.globals.timeScale === 1 ? 1 : consts2.K;
      this.targets = parsedTargets;
      this.animations = [];
      this.controlAnimation = null;
      this.onComplete = params.onComplete || /** @type {Callback<WAAPIAnimation>} */
      /** @type {unknown} */
      globals2.globals.defaults.onComplete;
      this.duration = 0;
      this.muteCallbacks = false;
      this.completed = false;
      this.paused = !autoplay || scroll2 !== false;
      this.reversed = reversed;
      this.persist = values2.setValue(params.persist, globals2.globals.defaults.persist);
      this.autoplay = autoplay;
      this._speed = values2.setValue(params.playbackRate, globals2.globals.defaults.playbackRate);
      this._resolve = consts2.noop;
      this._completed = 0;
      this._inlineStyles = [];
      parsedTargets.forEach(($el, i) => {
        const cachedTransforms = $el[consts2.transformsSymbol];
        const hasIndividualTransforms = validIndividualTransforms.some((t) => params.hasOwnProperty(t));
        const elStyle = $el.style;
        const inlineStyles = this._inlineStyles[i] = {};
        const easeToParse = values2.setValue(params.ease, globals2.globals.defaults.ease);
        const easeFunctionResult = values2.getFunctionValue(easeToParse, $el, i, parsedTargets, null, null);
        const keyEasing = helpers2.isFnc(easeFunctionResult) || helpers2.isStr(easeFunctionResult) ? easeFunctionResult : easeToParse;
        const spring2 = (
          /** @type {Spring} */
          easeToParse.ease && easeToParse
        );
        const easing = parseWAAPIEasing(keyEasing);
        const duration = (spring2 ? (
          /** @type {Spring} */
          spring2.settlingDuration
        ) : values2.getFunctionValue(values2.setValue(params.duration, globals2.globals.defaults.duration), $el, i, parsedTargets, null, null)) * timeScale;
        const delay = values2.getFunctionValue(values2.setValue(params.delay, globals2.globals.defaults.delay), $el, i, parsedTargets, null, null) * timeScale;
        const composite = (
          /** @type {CompositeOperation} */
          values2.setValue(params.composition, "replace")
        );
        for (let name in params) {
          if (!helpers2.isKey(name)) continue;
          const keyframes = {};
          const tweenParams = { iterations, direction, fill, easing, duration, delay, composite };
          const propertyValue = params[name];
          const individualTransformProperty = hasIndividualTransforms ? consts2.validTransforms.includes(name) ? name : consts2.shortTransforms.get(name) : false;
          const styleName = individualTransformProperty ? "transform" : name;
          if (!inlineStyles[styleName]) {
            inlineStyles[styleName] = elStyle[styleName];
          }
          let parsedPropertyValue;
          if (helpers2.isObj(propertyValue)) {
            const tweenOptions = (
              /** @type {WAAPITweenOptions} */
              propertyValue
            );
            const tweenOptionsEase = values2.setValue(tweenOptions.ease, easing);
            const tweenOptionsSpring = (
              /** @type {Spring} */
              tweenOptionsEase.ease && tweenOptionsEase
            );
            const to = (
              /** @type {WAAPITweenOptions} */
              tweenOptions.to
            );
            const from = (
              /** @type {WAAPITweenOptions} */
              tweenOptions.from
            );
            tweenParams.duration = (tweenOptionsSpring ? (
              /** @type {Spring} */
              tweenOptionsSpring.settlingDuration
            ) : values2.getFunctionValue(values2.setValue(tweenOptions.duration, duration), $el, i, parsedTargets, null, null)) * timeScale;
            tweenParams.delay = values2.getFunctionValue(values2.setValue(tweenOptions.delay, delay), $el, i, parsedTargets, null, null) * timeScale;
            tweenParams.composite = /** @type {CompositeOperation} */
            values2.setValue(tweenOptions.composition, composite);
            tweenParams.easing = parseWAAPIEasing(tweenOptionsEase);
            parsedPropertyValue = parseIndividualTweenValue($el, name, from, to, i, parsedTargets);
            if (individualTransformProperty) {
              keyframes[`--${individualTransformProperty}`] = parsedPropertyValue;
              cachedTransforms[individualTransformProperty] = parsedPropertyValue;
            } else {
              keyframes[name] = parseIndividualTweenValue($el, name, from, to, i, parsedTargets);
            }
            composition2.addWAAPIAnimation(this, $el, name, keyframes, tweenParams);
            if (!helpers2.isUnd(from)) {
              if (!individualTransformProperty) {
                elStyle[name] = keyframes[name][0];
              } else {
                const key = `--${individualTransformProperty}`;
                elStyle.setProperty(key, keyframes[key][0]);
              }
            }
          } else {
            parsedPropertyValue = helpers2.isArr(propertyValue) ? propertyValue.map((v) => normalizeTweenValue(name, v, $el, i, parsedTargets)) : normalizeTweenValue(
              name,
              /** @type {any} */
              propertyValue,
              $el,
              i,
              parsedTargets
            );
            if (individualTransformProperty) {
              keyframes[`--${individualTransformProperty}`] = parsedPropertyValue;
              cachedTransforms[individualTransformProperty] = parsedPropertyValue;
            } else {
              keyframes[name] = parsedPropertyValue;
            }
            composition2.addWAAPIAnimation(this, $el, name, keyframes, tweenParams);
          }
        }
        if (hasIndividualTransforms) {
          let transforms2 = consts2.emptyString;
          for (let t in cachedTransforms) {
            transforms2 += `${consts2.transformsFragmentStrings[t]}var(--${t})) `;
          }
          elStyle.transform = transforms2;
        }
      });
      if (scroll2) {
        this.autoplay.link(this);
      }
    }
    /**
     * @callback forEachCallback
     * @param {globalThis.Animation} animation
     */
    /**
     * @param  {forEachCallback|String} callback
     * @return {this}
     */
    forEach(callback) {
      try {
        const cb = helpers2.isStr(callback) ? (a) => a[callback]() : callback;
        this.animations.forEach(cb);
      } catch {
      }
      return this;
    }
    get speed() {
      return this._speed;
    }
    set speed(speed) {
      this._speed = +speed;
      this.forEach((anim) => anim.playbackRate = speed);
    }
    get currentTime() {
      const controlAnimation = this.controlAnimation;
      const timeScale = globals2.globals.timeScale;
      return this.completed ? this.duration : controlAnimation ? +controlAnimation.currentTime * (timeScale === 1 ? 1 : timeScale) : 0;
    }
    set currentTime(time2) {
      const t = time2 * (globals2.globals.timeScale === 1 ? 1 : consts2.K);
      this.forEach((anim) => {
        if (!this.persist && t >= this.duration) anim.play();
        anim.currentTime = t;
      });
    }
    get progress() {
      return this.currentTime / this.duration;
    }
    set progress(progress) {
      this.forEach((anim) => anim.currentTime = progress * this.duration || 0);
    }
    resume() {
      if (!this.paused) return this;
      this.paused = false;
      return this.forEach("play");
    }
    pause() {
      if (this.paused) return this;
      this.paused = true;
      return this.forEach("pause");
    }
    alternate() {
      this.reversed = !this.reversed;
      this.forEach("reverse");
      if (this.paused) this.forEach("pause");
      return this;
    }
    play() {
      if (this.reversed) this.alternate();
      return this.resume();
    }
    reverse() {
      if (!this.reversed) this.alternate();
      return this.resume();
    }
    /**
     * @param {Number} time
     * @param {Boolean} muteCallbacks
     */
    seek(time2, muteCallbacks = false) {
      if (muteCallbacks) this.muteCallbacks = true;
      if (time2 < this.duration) this.completed = false;
      this.currentTime = time2;
      this.muteCallbacks = false;
      if (this.paused) this.pause();
      return this;
    }
    restart() {
      this.completed = false;
      return this.seek(0, true).resume();
    }
    commitStyles() {
      return this.forEach("commitStyles");
    }
    complete() {
      return this.seek(this.duration);
    }
    cancel() {
      this.muteCallbacks = true;
      this.commitStyles().forEach("cancel");
      this.animations.length = 0;
      requestAnimationFrame(() => {
        this.targets.forEach(($el) => {
          if ($el.style.transform === "none") $el.style.removeProperty("transform");
        });
      });
      return this;
    }
    revert() {
      this.cancel().targets.forEach(($el, i) => {
        const targetStyle = $el.style;
        const targetInlineStyles = this._inlineStyles[i];
        for (let name in targetInlineStyles) {
          const originalInlinedValue = targetInlineStyles[name];
          if (helpers2.isUnd(originalInlinedValue) || originalInlinedValue === consts2.emptyString) {
            targetStyle.removeProperty(helpers2.toLowerCase(name));
          } else {
            $el.style[name] = originalInlinedValue;
          }
        }
        if ($el.getAttribute("style") === consts2.emptyString) $el.removeAttribute("style");
      });
      return this;
    }
    /**
     * @typedef {this & {then: null}} ResolvedWAAPIAnimation
     */
    /**
     * @param  {Callback<ResolvedWAAPIAnimation>} [callback]
     * @return Promise<this>
     */
    then(callback = consts2.noop) {
      const then = this.then;
      const onResolve = () => {
        this.then = null;
        callback(
          /** @type {ResolvedWAAPIAnimation} */
          this
        );
        this.then = then;
        this._resolve = consts2.noop;
      };
      return new Promise((r) => {
        this._resolve = () => r(onResolve());
        if (this.completed) this._resolve();
        return this;
      });
    }
  }
  const waapi$1 = {
    /**
     * @param {DOMTargetsParam} targets
     * @param {WAAPIAnimationParams} params
     * @return {WAAPIAnimation}
     */
    animate: (targets3, params) => new WAAPIAnimation(targets3, params),
    convertEase: easingToLinear
  };
  waapi.WAAPIAnimation = WAAPIAnimation;
  waapi.waapi = waapi$1;
  return waapi;
}
var hasRequiredLayout;
function requireLayout() {
  if (hasRequiredLayout) return layout;
  hasRequiredLayout = 1;
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var targets2 = /* @__PURE__ */ requireTargets();
  var parser2 = /* @__PURE__ */ requireParser();
  var values2 = /* @__PURE__ */ requireValues();
  var timeline2 = /* @__PURE__ */ requireTimeline();
  var waapi2 = /* @__PURE__ */ requireWaapi();
  var globals2 = /* @__PURE__ */ requireGlobals();
  let layoutId = 0;
  let nodeId = 0;
  const isElementInRoot = (root, $el) => {
    if (!root || !$el) return false;
    return root === $el || root.contains($el);
  };
  const muteElementTransition = ($el) => {
    if (!$el) return null;
    const style = $el.style;
    const transition = style.transition || "";
    style.setProperty("transition", "none", "important");
    return transition;
  };
  const restoreElementTransition = ($el, transition) => {
    if (!$el) return;
    const style = $el.style;
    if (transition) {
      style.transition = transition;
    } else {
      style.removeProperty("transition");
    }
  };
  const muteNodeTransition = (node) => {
    const store = node.layout.transitionMuteStore;
    const $el = node.$el;
    const $measure = node.$measure;
    if ($el && !store.has($el)) store.set($el, muteElementTransition($el));
    if ($measure && !store.has($measure)) store.set($measure, muteElementTransition($measure));
  };
  const restoreLayoutTransition = (store) => {
    store.forEach((value, $el) => restoreElementTransition($el, value));
    store.clear();
  };
  const hiddenComputedStyle = (
    /** @type {CSSStyleDeclaration} */
    {
      display: "none",
      visibility: "hidden",
      opacity: "0",
      transform: "none",
      position: "static"
    }
  );
  const detachNode = (node) => {
    if (!node) return;
    const parent = node.parentNode;
    if (!parent) return;
    if (parent._head === node) parent._head = node._next;
    if (parent._tail === node) parent._tail = node._prev;
    if (node._prev) node._prev._next = node._next;
    if (node._next) node._next._prev = node._prev;
    node._prev = null;
    node._next = null;
    node.parentNode = null;
  };
  const createNode = ($el, parentNode, state, recycledNode) => {
    let dataId = $el.dataset.layoutId;
    if (!dataId) dataId = $el.dataset.layoutId = `node-${nodeId++}`;
    const node = recycledNode ? recycledNode : (
      /** @type {LayoutNode} */
      {}
    );
    node.$el = $el;
    node.$measure = $el;
    node.id = dataId;
    node.index = 0;
    node.targets = null;
    node.delay = 0;
    node.duration = 0;
    node.ease = null;
    node.state = state;
    node.layout = state.layout;
    node.parentNode = parentNode || null;
    node.isTarget = false;
    node.isEntering = false;
    node.isLeaving = false;
    node.isInlined = false;
    node.hasTransform = false;
    node.inlineStyles = [];
    node.inlineTransforms = null;
    node.inlineTransition = null;
    node.branchAdded = false;
    node.branchRemoved = false;
    node.branchNotRendered = false;
    node.sizeChanged = false;
    node.hasVisibilitySwap = false;
    node.hasDisplayNone = false;
    node.hasVisibilityHidden = false;
    node.measuredInlineTransform = null;
    node.measuredInlineTransition = null;
    node.measuredDisplay = null;
    node.measuredVisibility = null;
    node.measuredPosition = null;
    node.measuredHasDisplayNone = false;
    node.measuredHasVisibilityHidden = false;
    node.measuredIsVisible = false;
    node.measuredIsRemoved = false;
    node.measuredIsInsideRoot = false;
    node.properties = /** @type {LayoutNodeProperties} */
    {
      transform: "none",
      x: 0,
      y: 0,
      left: 0,
      top: 0,
      clientLeft: 0,
      clientTop: 0,
      width: 0,
      height: 0
    };
    node.layout.properties.forEach((prop) => node.properties[prop] = 0);
    node._head = null;
    node._tail = null;
    node._prev = null;
    node._next = null;
    return node;
  };
  const recordNodeState = (node, $measure, computedStyle, skipMeasurements) => {
    const $el = node.$el;
    const root = node.layout.root;
    const isRoot = root === $el;
    const properties = node.properties;
    const rootNode = node.state.rootNode;
    const parentNode = node.parentNode;
    const computedTransforms = computedStyle.transform;
    const inlineTransforms = $el.style.transform;
    const parentNotRendered = parentNode ? parentNode.measuredIsRemoved : false;
    const position2 = computedStyle.position;
    if (isRoot) node.layout.absoluteCoords = position2 === "fixed" || position2 === "absolute";
    node.$measure = $measure;
    node.inlineTransforms = inlineTransforms;
    node.hasTransform = computedTransforms && computedTransforms !== "none";
    node.measuredIsInsideRoot = isElementInRoot(root, $measure);
    node.measuredInlineTransform = null;
    node.measuredDisplay = computedStyle.display;
    node.measuredVisibility = computedStyle.visibility;
    node.measuredPosition = position2;
    node.measuredHasDisplayNone = computedStyle.display === "none";
    node.measuredHasVisibilityHidden = computedStyle.visibility === "hidden";
    node.measuredIsVisible = !(node.measuredHasDisplayNone || node.measuredHasVisibilityHidden);
    node.measuredIsRemoved = node.measuredHasDisplayNone || node.measuredHasVisibilityHidden || parentNotRendered;
    let hasAdjacentText = false;
    let s = $el.previousSibling;
    while (s && (s.nodeType === Node.COMMENT_NODE || s.nodeType === Node.TEXT_NODE && !s.textContent.trim())) s = s.previousSibling;
    if (s && s.nodeType === Node.TEXT_NODE) {
      hasAdjacentText = true;
    } else {
      s = $el.nextSibling;
      while (s && (s.nodeType === Node.COMMENT_NODE || s.nodeType === Node.TEXT_NODE && !s.textContent.trim())) s = s.nextSibling;
      hasAdjacentText = s !== null && s.nodeType === Node.TEXT_NODE;
    }
    node.isInlined = hasAdjacentText;
    if (node.hasTransform && !skipMeasurements) {
      const transitionMuteStore = node.layout.transitionMuteStore;
      if (!transitionMuteStore.get($el)) node.inlineTransition = muteElementTransition($el);
      if ($measure === $el) {
        $el.style.transform = "none";
      } else {
        if (!transitionMuteStore.get($measure)) node.measuredInlineTransition = muteElementTransition($measure);
        node.measuredInlineTransform = $measure.style.transform;
        $measure.style.transform = "none";
      }
    }
    let left = 0;
    let top = 0;
    let width = 0;
    let height = 0;
    if (!skipMeasurements) {
      const rect = $measure.getBoundingClientRect();
      left = rect.left;
      top = rect.top;
      width = rect.width;
      height = rect.height;
    }
    for (let name in properties) {
      const computedProp = name === "transform" ? computedTransforms : computedStyle[name] || computedStyle.getPropertyValue && computedStyle.getPropertyValue(name);
      if (!helpers2.isUnd(computedProp)) properties[name] = computedProp;
    }
    properties.left = left;
    properties.top = top;
    properties.clientLeft = skipMeasurements ? 0 : $measure.clientLeft;
    properties.clientTop = skipMeasurements ? 0 : $measure.clientTop;
    let absoluteLeft, absoluteTop;
    if (isRoot) {
      if (!node.layout.absoluteCoords) {
        absoluteLeft = 0;
        absoluteTop = 0;
      } else {
        absoluteLeft = left;
        absoluteTop = top;
      }
    } else {
      const p = parentNode || rootNode;
      const parentLeft = p.properties.left;
      const parentTop = p.properties.top;
      const borderLeft = p.properties.clientLeft;
      const borderTop = p.properties.clientTop;
      if (!node.layout.absoluteCoords) {
        if (p === rootNode) {
          const rootLeft = rootNode.properties.left;
          const rootTop = rootNode.properties.top;
          const rootBorderLeft = rootNode.properties.clientLeft;
          const rootBorderTop = rootNode.properties.clientTop;
          absoluteLeft = left - rootLeft - rootBorderLeft;
          absoluteTop = top - rootTop - rootBorderTop;
        } else {
          absoluteLeft = left - parentLeft - borderLeft;
          absoluteTop = top - parentTop - borderTop;
        }
      } else {
        absoluteLeft = left - parentLeft - borderLeft;
        absoluteTop = top - parentTop - borderTop;
      }
    }
    properties.x = absoluteLeft;
    properties.y = absoluteTop;
    properties.width = width;
    properties.height = height;
    return node;
  };
  const updateNodeProperties = (node, props) => {
    if (!props) return;
    for (let name in props) {
      node.properties[name] = props[name];
    }
  };
  const updateNodeTimingParams = (node, params) => {
    const easeFunctionResult = values2.getFunctionValue(params.ease, node.$el, node.index, node.targets, null, null);
    const keyEasing = helpers2.isFnc(easeFunctionResult) ? easeFunctionResult : params.ease;
    const hasSpring = !helpers2.isUnd(keyEasing) && !helpers2.isUnd(
      /** @type {Spring} */
      keyEasing.ease
    );
    node.ease = hasSpring ? (
      /** @type {Spring} */
      keyEasing.ease
    ) : keyEasing;
    node.duration = hasSpring ? (
      /** @type {Spring} */
      keyEasing.settlingDuration
    ) : values2.getFunctionValue(params.duration, node.$el, node.index, node.targets, null, null);
    node.delay = values2.getFunctionValue(params.delay, node.$el, node.index, node.targets, null, null);
  };
  const recordNodeInlineStyles = (node) => {
    const style = node.$el.style;
    const stylesStore = node.inlineStyles;
    stylesStore.length = 0;
    node.layout.recordedProperties.forEach((prop) => {
      stylesStore.push(prop, style[prop] || "");
    });
  };
  const restoreNodeInlineStyles = (node) => {
    const style = node.$el.style;
    const stylesStore = node.inlineStyles;
    for (let i = 0, l = stylesStore.length; i < l; i += 2) {
      const property = stylesStore[i];
      const styleValue = stylesStore[i + 1];
      if (styleValue && styleValue !== "") {
        style[property] = styleValue;
      } else {
        style[property] = "";
        style.removeProperty(property);
      }
    }
  };
  const restoreNodeTransform = (node) => {
    const inlineTransforms = node.inlineTransforms;
    const nodeStyle = node.$el.style;
    if (!node.hasTransform || !inlineTransforms || node.hasTransform && nodeStyle.transform === "none" || inlineTransforms && inlineTransforms === "none") {
      nodeStyle.removeProperty("transform");
    } else if (inlineTransforms) {
      nodeStyle.transform = inlineTransforms;
    }
    const $measure = node.$measure;
    if (node.hasTransform && $measure !== node.$el) {
      const measuredStyle = $measure.style;
      const measuredInline = node.measuredInlineTransform;
      if (measuredInline && measuredInline !== "") {
        measuredStyle.transform = measuredInline;
      } else {
        measuredStyle.removeProperty("transform");
      }
    }
    node.measuredInlineTransform = null;
    if (node.inlineTransition !== null) {
      restoreElementTransition(node.$el, node.inlineTransition);
      node.inlineTransition = null;
    }
    if ($measure !== node.$el && node.measuredInlineTransition !== null) {
      restoreElementTransition($measure, node.measuredInlineTransition);
      node.measuredInlineTransition = null;
    }
  };
  const restoreNodeVisualState = (node) => {
    if (node.measuredIsRemoved || node.hasVisibilitySwap) {
      node.$el.style.removeProperty("display");
      node.$el.style.removeProperty("visibility");
      if (node.hasVisibilitySwap) {
        node.$measure.style.removeProperty("display");
        node.$measure.style.removeProperty("visibility");
      }
    }
    node.layout.pendingRemoval.delete(node.$el);
  };
  const cloneNodeProperties = (node, targetNode, newState) => {
    targetNode.properties = /** @type {LayoutNodeProperties} */
    { ...node.properties };
    targetNode.state = newState;
    targetNode.isTarget = node.isTarget;
    targetNode.hasTransform = node.hasTransform;
    targetNode.inlineTransforms = node.inlineTransforms;
    targetNode.measuredIsVisible = node.measuredIsVisible;
    targetNode.measuredDisplay = node.measuredDisplay;
    targetNode.measuredIsRemoved = node.measuredIsRemoved;
    targetNode.measuredHasDisplayNone = node.measuredHasDisplayNone;
    targetNode.measuredHasVisibilityHidden = node.measuredHasVisibilityHidden;
    targetNode.hasDisplayNone = node.hasDisplayNone;
    targetNode.isInlined = node.isInlined;
    targetNode.hasVisibilityHidden = node.hasVisibilityHidden;
    return targetNode;
  };
  class LayoutSnapshot {
    /**
     * @param {AutoLayout} layout
     */
    constructor(layout2) {
      this.layout = layout2;
      this.rootNode = null;
      this.rootNodes = /* @__PURE__ */ new Set();
      this.nodes = /* @__PURE__ */ new Map();
      this.scrollX = 0;
      this.scrollY = 0;
    }
    /**
     * @return {this}
     */
    revert() {
      this.forEachNode((node) => {
        this.layout.pendingRemoval.delete(node.$el);
        node.$el.removeAttribute("data-layout-id");
        node.$measure.removeAttribute("data-layout-id");
      });
      this.rootNode = null;
      this.rootNodes.clear();
      this.nodes.clear();
      return this;
    }
    /**
     * @param {DOMTarget} $el
     * @return {LayoutNode}
     */
    getNode($el) {
      if (!$el || !$el.dataset) return;
      return this.nodes.get($el.dataset.layoutId);
    }
    /**
     * @param {DOMTarget} $el
     * @param {String} prop
     * @return {Number|String}
     */
    getComputedValue($el, prop) {
      const node = this.getNode($el);
      if (!node) return;
      return (
        /** @type {Number|String} */
        node.properties[prop]
      );
    }
    /**
     * @param {LayoutNode|null} rootNode
     * @param {LayoutNodeIterator} cb
     */
    forEach(rootNode, cb) {
      let node = rootNode;
      let i = 0;
      while (node) {
        cb(node, i++);
        if (node._head) {
          node = node._head;
        } else if (node._next) {
          node = node._next;
        } else {
          while (node && !node._next) {
            node = node.parentNode;
          }
          if (node) node = node._next;
        }
      }
    }
    /**
     * @param {LayoutNodeIterator} cb
     */
    forEachRootNode(cb) {
      this.forEach(this.rootNode, cb);
    }
    /**
     * @param {LayoutNodeIterator} cb
     */
    forEachNode(cb) {
      for (const rootNode of this.rootNodes) {
        this.forEach(rootNode, cb);
      }
    }
    /**
     * @param {DOMTarget} $el
     * @param {LayoutNode|null} parentNode
     * @return {LayoutNode|null}
     */
    registerElement($el, parentNode) {
      if (!$el || $el.nodeType !== 1) return null;
      if (!this.layout.transitionMuteStore.has($el)) this.layout.transitionMuteStore.set($el, muteElementTransition($el));
      const stack = [$el, parentNode];
      const root = this.layout.root;
      let firstNode = null;
      while (stack.length) {
        const $parent = (
          /** @type {LayoutNode|null} */
          stack.pop()
        );
        const $current = (
          /** @type {DOMTarget|null} */
          stack.pop()
        );
        if (!$current || $current.nodeType !== 1 || helpers2.isSvg($current)) continue;
        const skipMeasurements = $parent ? $parent.measuredIsRemoved : false;
        const computedStyle = skipMeasurements ? hiddenComputedStyle : getComputedStyle($current);
        const hasDisplayNone = skipMeasurements ? true : computedStyle.display === "none";
        const hasVisibilityHidden = skipMeasurements ? true : computedStyle.visibility === "hidden";
        const isVisible = !hasDisplayNone && !hasVisibilityHidden;
        const existingId = $current.dataset.layoutId;
        const isInsideRoot = isElementInRoot(root, $current);
        let node = existingId ? this.nodes.get(existingId) : null;
        if (node && node.$el !== $current) {
          const nodeInsideRoot = isElementInRoot(root, node.$el);
          const measuredVisible = node.measuredIsVisible;
          const shouldReassignNode = !nodeInsideRoot && (isInsideRoot || !isInsideRoot && !measuredVisible && isVisible);
          const shouldReuseMeasurements = nodeInsideRoot && !measuredVisible && isVisible;
          if (shouldReassignNode) {
            detachNode(node);
            node = createNode($current, $parent, this, node);
          } else if (shouldReuseMeasurements) {
            recordNodeState(node, $current, computedStyle, skipMeasurements);
            let $child2 = $current.lastElementChild;
            while ($child2) {
              stack.push(
                /** @type {DOMTarget} */
                $child2,
                node
              );
              $child2 = $child2.previousElementSibling;
            }
            if (!firstNode) firstNode = node;
            continue;
          } else {
            let $child2 = $current.lastElementChild;
            while ($child2) {
              stack.push(
                /** @type {DOMTarget} */
                $child2,
                $parent
              );
              $child2 = $child2.previousElementSibling;
            }
            if (!firstNode) firstNode = node;
            continue;
          }
        } else {
          node = createNode($current, $parent, this, node);
        }
        node.branchAdded = false;
        node.branchRemoved = false;
        node.branchNotRendered = false;
        node.isTarget = false;
        node.sizeChanged = false;
        node.hasVisibilityHidden = hasVisibilityHidden;
        node.hasDisplayNone = hasDisplayNone;
        node.hasVisibilitySwap = hasVisibilityHidden && !node.measuredHasVisibilityHidden || hasDisplayNone && !node.measuredHasDisplayNone;
        this.nodes.set(node.id, node);
        node.parentNode = $parent || null;
        node._prev = null;
        node._next = null;
        if ($parent) {
          this.rootNodes.delete(node);
          if (!$parent._head) {
            $parent._head = node;
            $parent._tail = node;
          } else {
            $parent._tail._next = node;
            node._prev = $parent._tail;
            $parent._tail = node;
          }
        } else {
          this.rootNodes.add(node);
        }
        recordNodeState(node, node.$el, computedStyle, skipMeasurements);
        let $child = $current.lastElementChild;
        while ($child) {
          stack.push(
            /** @type {DOMTarget} */
            $child,
            node
          );
          $child = $child.previousElementSibling;
        }
        if (!firstNode) firstNode = node;
      }
      return firstNode;
    }
    /**
     * @param {DOMTarget} $el
     * @param {Set<DOMTarget>} candidates
     * @return {LayoutNode|null}
     */
    ensureDetachedNode($el, candidates) {
      if (!$el || $el === this.layout.root) return null;
      const existingId = $el.dataset.layoutId;
      const existingNode = existingId ? this.nodes.get(existingId) : null;
      if (existingNode && existingNode.$el === $el) return existingNode;
      let parentNode = null;
      let $ancestor = $el.parentElement;
      while ($ancestor && $ancestor !== this.layout.root) {
        if (candidates.has($ancestor)) {
          parentNode = this.ensureDetachedNode($ancestor, candidates);
          break;
        }
        $ancestor = $ancestor.parentElement;
      }
      return this.registerElement($el, parentNode);
    }
    /**
     * @return {this}
     */
    record() {
      const layout2 = this.layout;
      const children = layout2.children;
      const root = layout2.root;
      const toParse = helpers2.isArr(children) ? children : [children];
      const scoped = [];
      const scopeRoot = children === "*" ? root : globals2.scope.root;
      const rootAncestorTransformStore = [];
      let $ancestor = root.parentElement;
      while ($ancestor && $ancestor.nodeType === 1) {
        const computedStyle = getComputedStyle($ancestor);
        if (computedStyle.transform && computedStyle.transform !== "none") {
          const inlineTransform = $ancestor.style.transform || "";
          const inlineTransition = muteElementTransition($ancestor);
          rootAncestorTransformStore.push($ancestor, inlineTransform, inlineTransition);
          $ancestor.style.transform = "none";
        }
        $ancestor = $ancestor.parentElement;
      }
      for (let i = 0, l = toParse.length; i < l; i++) {
        const child = toParse[i];
        scoped[i] = helpers2.isStr(child) ? scopeRoot.querySelectorAll(child) : child;
      }
      const parsedChildren = targets2.registerTargets(scoped);
      this.nodes.clear();
      this.rootNodes.clear();
      const rootNode = this.registerElement(root, null);
      rootNode.isTarget = true;
      this.rootNode = rootNode;
      const inRootNodeIds = /* @__PURE__ */ new Set();
      let index = 0;
      const allNodeTargets = [];
      this.nodes.forEach((node) => {
        allNodeTargets.push(node.$el);
      });
      this.nodes.forEach((node, id) => {
        node.index = index++;
        node.targets = allNodeTargets;
        if (node && node.measuredIsInsideRoot) {
          inRootNodeIds.add(id);
        }
      });
      const detachedElementsLookup = /* @__PURE__ */ new Set();
      const orderedDetachedElements = [];
      for (let i = 0, l = parsedChildren.length; i < l; i++) {
        const $el = parsedChildren[i];
        if (!$el || $el.nodeType !== 1 || $el === root) continue;
        const insideRoot = isElementInRoot(root, $el);
        if (!insideRoot) {
          const layoutNodeId = $el.dataset.layoutId;
          if (!layoutNodeId || !inRootNodeIds.has(layoutNodeId)) continue;
        }
        if (!detachedElementsLookup.has($el)) {
          detachedElementsLookup.add($el);
          orderedDetachedElements.push($el);
        }
      }
      for (let i = 0, l = orderedDetachedElements.length; i < l; i++) {
        this.ensureDetachedNode(orderedDetachedElements[i], detachedElementsLookup);
      }
      for (let i = 0, l = parsedChildren.length; i < l; i++) {
        const $el = parsedChildren[i];
        const node = this.getNode($el);
        if (node) {
          let cur = node;
          while (cur) {
            if (cur.isTarget) break;
            cur.isTarget = true;
            cur = cur.parentNode;
          }
        }
      }
      this.scrollX = window.scrollX;
      this.scrollY = window.scrollY;
      this.forEachNode(restoreNodeTransform);
      for (let i = 0, l = rootAncestorTransformStore.length; i < l; i += 3) {
        const $el = (
          /** @type {DOMTarget} */
          rootAncestorTransformStore[i]
        );
        const inlineTransform = (
          /** @type {String} */
          rootAncestorTransformStore[i + 1]
        );
        const inlineTransition = (
          /** @type {String|null} */
          rootAncestorTransformStore[i + 2]
        );
        if (inlineTransform && inlineTransform !== "") {
          $el.style.transform = inlineTransform;
        } else {
          $el.style.removeProperty("transform");
        }
        restoreElementTransition($el, inlineTransition);
      }
      return this;
    }
  }
  function splitPropertiesFromParams(params) {
    const properties = {};
    const parameters = {};
    for (let name in params) {
      const value = params[name];
      const isEase = name === "ease";
      const isTiming = name === "duration" || name === "delay";
      if (isTiming || isEase) {
        if (isEase) {
          parameters[name] = /** @type {EasingParam} */
          value;
        } else {
          parameters[name] = /** @type {Number|FunctionValue} */
          value;
        }
      } else {
        properties[name] = /** @type {Number|String} */
        value;
      }
    }
    return [properties, parameters];
  }
  class AutoLayout {
    /**
     * @param {DOMTargetSelector} root
     * @param {AutoLayoutParams} [params]
     */
    constructor(root, params = {}) {
      if (globals2.scope.current) globals2.scope.current.register(this);
      const swapAtSplitParams = splitPropertiesFromParams(params.swapAt);
      const enterFromSplitParams = splitPropertiesFromParams(params.enterFrom);
      const leaveToSplitParams = splitPropertiesFromParams(params.leaveTo);
      const transitionProperties = params.properties;
      params.duration = values2.setValue(params.duration, 350);
      params.delay = values2.setValue(params.delay, 0);
      params.ease = values2.setValue(params.ease, "inOut(3.5)");
      this.params = params;
      this.root = /** @type {DOMTarget} */
      targets2.registerTargets(root)[0];
      this.id = params.id || layoutId++;
      this.children = params.children || "*";
      this.absoluteCoords = false;
      this.swapAtParams = helpers2.mergeObjects(params.swapAt || { opacity: 0 }, { ease: "inOut(1.75)" });
      this.enterFromParams = params.enterFrom || { opacity: 0 };
      this.leaveToParams = params.leaveTo || { opacity: 0 };
      this.properties = /* @__PURE__ */ new Set([
        "opacity",
        "fontSize",
        "color",
        "backgroundColor",
        "borderRadius",
        "border",
        "filter",
        "clipPath"
      ]);
      if (swapAtSplitParams[0]) for (let name in swapAtSplitParams[0]) this.properties.add(name);
      if (enterFromSplitParams[0]) for (let name in enterFromSplitParams[0]) this.properties.add(name);
      if (leaveToSplitParams[0]) for (let name in leaveToSplitParams[0]) this.properties.add(name);
      if (transitionProperties) for (let i = 0, l = transitionProperties.length; i < l; i++) this.properties.add(transitionProperties[i]);
      this.recordedProperties = /* @__PURE__ */ new Set([
        "display",
        "visibility",
        "translate",
        "position",
        "left",
        "top",
        "marginLeft",
        "marginTop",
        "width",
        "height",
        "maxWidth",
        "maxHeight",
        "minWidth",
        "minHeight"
      ]);
      this.properties.forEach((prop) => this.recordedProperties.add(prop));
      this.pendingRemoval = /* @__PURE__ */ new WeakSet();
      this.transitionMuteStore = /* @__PURE__ */ new Map();
      this.oldState = new LayoutSnapshot(this);
      this.newState = new LayoutSnapshot(this);
      this.timeline = null;
      this.transformAnimation = null;
      this.animating = [];
      this.swapping = [];
      this.leaving = [];
      this.entering = [];
      this.oldState.record();
      restoreLayoutTransition(this.transitionMuteStore);
    }
    /**
     * @return {this}
     */
    revert() {
      this.root.classList.remove("is-animated");
      if (this.timeline) {
        this.timeline.complete();
        this.timeline = null;
      }
      if (this.transformAnimation) {
        this.transformAnimation.complete();
        this.transformAnimation = null;
      }
      this.animating.length = this.swapping.length = this.leaving.length = this.entering.length = 0;
      this.oldState.revert();
      this.newState.revert();
      requestAnimationFrame(() => restoreLayoutTransition(this.transitionMuteStore));
      return this;
    }
    /**
     * @return {this}
     */
    record() {
      if (this.transformAnimation) {
        this.transformAnimation.cancel();
        this.transformAnimation = null;
      }
      this.oldState.record();
      if (this.timeline) {
        this.timeline.cancel();
        this.timeline = null;
      }
      this.newState.forEachRootNode(restoreNodeInlineStyles);
      return this;
    }
    /**
     * @param {LayoutAnimationParams} [params]
     * @return {Timeline}
     */
    animate(params = {}) {
      const animationTimings = {
        ease: values2.setValue(params.ease, this.params.ease),
        delay: values2.setValue(params.delay, this.params.delay),
        duration: values2.setValue(params.duration, this.params.duration)
      };
      const tlParams = {
        id: this.id
      };
      const onComplete = values2.setValue(params.onComplete, this.params.onComplete);
      const onPause = values2.setValue(params.onPause, this.params.onPause);
      for (let name in globals2.defaults) {
        if (name !== "ease" && name !== "duration" && name !== "delay") {
          if (!helpers2.isUnd(params[name])) {
            tlParams[name] = params[name];
          } else if (!helpers2.isUnd(this.params[name])) {
            tlParams[name] = this.params[name];
          }
        }
      }
      tlParams.onComplete = () => {
        const ap = (
          /** @type {ScrollObserver} */
          params.autoplay
        );
        const ed = globals2.globals.editor;
        const isScrollControled = ap && ap.linked || ed && ed.showPanel;
        if (isScrollControled) {
          if (onComplete) onComplete(this.timeline);
          return;
        }
        if (this.transformAnimation) this.transformAnimation.cancel();
        newState.forEachRootNode((node) => {
          restoreNodeVisualState(node);
          restoreNodeInlineStyles(node);
        });
        for (let i = 0, l = transformed.length; i < l; i++) {
          const $el = transformed[i];
          $el.style.transform = newState.getComputedValue($el, "transform");
        }
        if (this.root.classList.contains("is-animated")) {
          this.root.classList.remove("is-animated");
          if (onComplete) onComplete(this.timeline);
        }
        requestAnimationFrame(() => {
          if (this.root.classList.contains("is-animated")) return;
          restoreLayoutTransition(this.transitionMuteStore);
        });
      };
      tlParams.onPause = () => {
        const ap = (
          /** @type {ScrollObserver} */
          params.autoplay
        );
        const isScrollControled = ap && ap.linked;
        if (isScrollControled) {
          if (onComplete) onComplete(this.timeline);
          if (onPause) onPause(this.timeline);
          return;
        }
        if (!this.root.classList.contains("is-animated")) return;
        if (this.transformAnimation) this.transformAnimation.cancel();
        newState.forEachRootNode(restoreNodeVisualState);
        this.root.classList.remove("is-animated");
        if (onComplete) onComplete(this.timeline);
        if (onPause) onPause(this.timeline);
      };
      tlParams.composition = false;
      const swapAtParams = helpers2.mergeObjects(helpers2.mergeObjects(params.swapAt || {}, this.swapAtParams), animationTimings);
      const enterFromParams = helpers2.mergeObjects(helpers2.mergeObjects(params.enterFrom || {}, this.enterFromParams), animationTimings);
      const leaveToParams = helpers2.mergeObjects(helpers2.mergeObjects(params.leaveTo || {}, this.leaveToParams), animationTimings);
      const [swapAtProps, swapAtTimings] = splitPropertiesFromParams(swapAtParams);
      const [enterFromProps, enterFromTimings] = splitPropertiesFromParams(enterFromParams);
      const [leaveToProps, leaveToTimings] = splitPropertiesFromParams(leaveToParams);
      const oldState = this.oldState;
      const newState = this.newState;
      const animating = this.animating;
      const swapping = this.swapping;
      const entering = this.entering;
      const leaving = this.leaving;
      const pendingRemoval = this.pendingRemoval;
      animating.length = swapping.length = entering.length = leaving.length = 0;
      oldState.forEachRootNode(muteNodeTransition);
      newState.record();
      newState.forEachRootNode(recordNodeInlineStyles);
      const targets3 = [];
      const animated = [];
      const transformed = [];
      const animatedSwap = [];
      const rootNode = newState.rootNode;
      const $root = rootNode.$el;
      newState.forEachRootNode((node) => {
        const $el = node.$el;
        const id = node.id;
        const parent = node.parentNode;
        const parentAdded = parent ? parent.branchAdded : false;
        const parentRemoved = parent ? parent.branchRemoved : false;
        const parentNotRendered = parent ? parent.branchNotRendered : false;
        let oldStateNode = oldState.nodes.get(id);
        const hasNoOldState = !oldStateNode;
        if (hasNoOldState) {
          oldStateNode = cloneNodeProperties(
            node,
            /** @type {LayoutNode} */
            {},
            oldState
          );
          oldState.nodes.set(id, oldStateNode);
          oldStateNode.measuredIsRemoved = true;
        } else if (oldStateNode.measuredIsRemoved && !node.measuredIsRemoved) {
          cloneNodeProperties(node, oldStateNode, oldState);
          oldStateNode.measuredIsRemoved = true;
        }
        const oldParentNode = oldStateNode.parentNode;
        const oldParentId = oldParentNode ? oldParentNode.id : null;
        const newParentId = parent ? parent.id : null;
        const parentChanged = oldParentId !== newParentId;
        const elementChanged = oldStateNode.$el !== node.$el;
        const wasRemovedBefore = oldStateNode.measuredIsRemoved;
        const isRemovedNow = node.measuredIsRemoved;
        if (!oldStateNode.measuredIsRemoved && !isRemovedNow && !hasNoOldState && (parentChanged || elementChanged)) {
          const oldAbsoluteLeft = oldStateNode.properties.left;
          const oldAbsoluteTop = oldStateNode.properties.top;
          const newParent = parent || newState.rootNode;
          const oldParent = newParent.id ? oldState.nodes.get(newParent.id) : null;
          const parentLeft = oldParent ? oldParent.properties.left : newParent.properties.left;
          const parentTop = oldParent ? oldParent.properties.top : newParent.properties.top;
          const borderLeft = oldParent ? oldParent.properties.clientLeft : newParent.properties.clientLeft;
          const borderTop = oldParent ? oldParent.properties.clientTop : newParent.properties.clientTop;
          oldStateNode.properties.x = oldAbsoluteLeft - parentLeft - borderLeft;
          oldStateNode.properties.y = oldAbsoluteTop - parentTop - borderTop;
        }
        if (node.hasVisibilitySwap) {
          if (node.hasVisibilityHidden) {
            node.$el.style.visibility = "visible";
            node.$measure.style.visibility = "hidden";
          }
          if (node.hasDisplayNone) {
            node.$el.style.display = oldStateNode.measuredDisplay || node.measuredDisplay || "";
            node.$measure.style.visibility = "hidden";
          }
        }
        const wasPendingRemoval = pendingRemoval.has($el);
        const wasVisibleBefore = oldStateNode.measuredIsVisible;
        const isVisibleNow = node.measuredIsVisible;
        const becomeVisible = !wasVisibleBefore && isVisibleNow && !parentNotRendered;
        const topLevelAdded = !isRemovedNow && (wasRemovedBefore || wasPendingRemoval) && !parentAdded;
        const newlyRemoved = isRemovedNow && !wasRemovedBefore && !parentRemoved;
        const topLevelRemoved = newlyRemoved || isRemovedNow && wasPendingRemoval && !parentRemoved;
        node.branchAdded = parentAdded || topLevelAdded;
        node.branchRemoved = parentRemoved || topLevelRemoved;
        node.branchNotRendered = parentNotRendered || isRemovedNow;
        if (isRemovedNow && wasVisibleBefore) {
          node.$el.style.display = oldStateNode.measuredDisplay;
          node.$el.style.visibility = "visible";
          cloneNodeProperties(oldStateNode, node, newState);
        }
        if (newlyRemoved) {
          if (node.isTarget) {
            leaving.push($el);
            node.isLeaving = true;
          }
          pendingRemoval.add($el);
        } else if (!isRemovedNow && wasPendingRemoval) {
          pendingRemoval.delete($el);
        }
        if (topLevelAdded && !parentNotRendered || becomeVisible) {
          updateNodeProperties(oldStateNode, enterFromProps);
          if (node.isTarget) {
            entering.push($el);
            node.isEntering = true;
          }
        } else if (topLevelRemoved && !parentNotRendered) {
          updateNodeProperties(node, leaveToProps);
        }
        if (node !== rootNode && node.isTarget && !node.isEntering && !node.isLeaving) {
          animating.push($el);
        }
        targets3.push($el);
      });
      let enteringIndex = 0;
      let leavingIndex = 0;
      let animatingIndex = 0;
      newState.forEachRootNode((node) => {
        const $el = node.$el;
        const parent = node.parentNode;
        const oldStateNode = oldState.nodes.get(node.id);
        const nodeProperties = node.properties;
        const oldStateNodeProperties = oldStateNode.properties;
        let animatedParent = parent !== rootNode && parent;
        while (animatedParent && !animatedParent.isTarget && animatedParent !== rootNode) {
          animatedParent = animatedParent.parentNode;
        }
        if (node === rootNode) {
          node.index = 0;
          node.targets = animating;
          updateNodeTimingParams(node, animationTimings);
        } else if (node.isEntering) {
          node.index = animatedParent ? animatedParent.index : enteringIndex;
          node.targets = animatedParent ? animating : entering;
          updateNodeTimingParams(node, enterFromTimings);
          enteringIndex++;
        } else if (node.isLeaving) {
          node.index = animatedParent ? animatedParent.index : leavingIndex;
          node.targets = animatedParent ? animating : leaving;
          leavingIndex++;
          updateNodeTimingParams(node, leaveToTimings);
        } else if (node.isTarget) {
          node.index = animatingIndex++;
          node.targets = animating;
          updateNodeTimingParams(node, animationTimings);
        } else {
          node.index = animatedParent ? animatedParent.index : 0;
          node.targets = animating;
          updateNodeTimingParams(node, swapAtTimings);
        }
        oldStateNode.index = node.index;
        oldStateNode.targets = node.targets;
        for (let prop in nodeProperties) {
          nodeProperties[prop] = values2.getFunctionValue(nodeProperties[prop], $el, node.index, node.targets, null, null);
          oldStateNodeProperties[prop] = values2.getFunctionValue(oldStateNodeProperties[prop], $el, oldStateNode.index, oldStateNode.targets, null, null);
        }
        const sizeTolerance = 1;
        const widthChanged = Math.abs(nodeProperties.width - oldStateNodeProperties.width) > sizeTolerance;
        const heightChanged = Math.abs(nodeProperties.height - oldStateNodeProperties.height) > sizeTolerance;
        node.sizeChanged = widthChanged || heightChanged;
        if (node.isTarget && (!node.measuredIsRemoved && oldStateNode.measuredIsVisible || node.measuredIsRemoved && node.measuredIsVisible)) {
          if (nodeProperties.transform !== "none" || oldStateNodeProperties.transform !== "none") {
            node.hasTransform = true;
            transformed.push($el);
          }
          for (let prop in nodeProperties) {
            if (prop !== "transform" && nodeProperties[prop] !== oldStateNodeProperties[prop]) {
              animated.push($el);
              break;
            }
          }
        }
        if (!node.isTarget) {
          swapping.push($el);
          if (node.sizeChanged && parent && parent.isTarget && parent.sizeChanged) {
            if (swapAtProps.transform) {
              node.hasTransform = true;
              transformed.push($el);
            }
            animatedSwap.push($el);
          }
        }
      });
      const timingParams = {
        delay: ($el) => newState.getNode($el).delay,
        duration: ($el) => newState.getNode($el).duration,
        ease: ($el) => newState.getNode($el).ease
      };
      tlParams.defaults = timingParams;
      this.timeline = timeline2.createTimeline(tlParams);
      if (!animated.length && !transformed.length && !swapping.length) {
        restoreLayoutTransition(this.transitionMuteStore);
        return this.timeline.complete();
      }
      if (targets3.length) {
        this.root.classList.add("is-animated");
        for (let i = 0, l = targets3.length; i < l; i++) {
          const $el = targets3[i];
          const id = $el.dataset.layoutId;
          const oldNode = oldState.nodes.get(id);
          const newNode = newState.nodes.get(id);
          const oldNodeState = oldNode.properties;
          if (!newNode.isInlined) {
            if (oldNode.measuredDisplay === "grid" || newNode.measuredDisplay === "grid") $el.style.setProperty("display", "block", "important");
            if ($el !== $root || this.absoluteCoords) {
              $el.style.position = this.absoluteCoords ? "fixed" : "absolute";
              $el.style.left = "0px";
              $el.style.top = "0px";
              $el.style.marginLeft = "0px";
              $el.style.marginTop = "0px";
              $el.style.translate = `${oldNodeState.x}px ${oldNodeState.y}px`;
            }
            if ($el === $root && newNode.measuredPosition === "static") {
              $el.style.position = "relative";
              $el.style.left = "0px";
              $el.style.top = "0px";
            }
          }
          $el.style.width = `${oldNodeState.width}px`;
          $el.style.height = `${oldNodeState.height}px`;
          $el.style.minWidth = `auto`;
          $el.style.minHeight = `auto`;
          $el.style.maxWidth = `none`;
          $el.style.maxHeight = `none`;
        }
        if (oldState.scrollX !== window.scrollX || oldState.scrollY !== window.scrollY) {
          requestAnimationFrame(() => window.scrollTo(oldState.scrollX, oldState.scrollY));
        }
        for (let i = 0, l = animated.length; i < l; i++) {
          const $el = animated[i];
          const id = $el.dataset.layoutId;
          const oldNode = oldState.nodes.get(id);
          const newNode = newState.nodes.get(id);
          const oldNodeState = oldNode.properties;
          const newNodeState = newNode.properties;
          let nodeHasChanged = false;
          const animatedProps = {
            composition: "none"
          };
          if (oldNodeState.width !== newNodeState.width) {
            animatedProps.width = [oldNodeState.width, newNodeState.width];
            nodeHasChanged = true;
          }
          if (oldNodeState.height !== newNodeState.height) {
            animatedProps.height = [oldNodeState.height, newNodeState.height];
            nodeHasChanged = true;
          }
          if (!newNode.hasTransform && !newNode.isInlined) {
            animatedProps.translate = [`${oldNodeState.x}px ${oldNodeState.y}px`, `${newNodeState.x}px ${newNodeState.y}px`];
            nodeHasChanged = true;
          }
          this.properties.forEach((prop) => {
            const oldVal = oldNodeState[prop];
            const newVal = newNodeState[prop];
            if (prop !== "transform" && oldVal !== newVal) {
              animatedProps[prop] = [oldVal, newVal];
              nodeHasChanged = true;
            }
          });
          if (nodeHasChanged) {
            this.timeline.add($el, animatedProps, 0);
          }
        }
      }
      if (swapping.length) {
        for (let i = 0, l = swapping.length; i < l; i++) {
          const $el = swapping[i];
          const oldNode = oldState.getNode($el);
          const oldNodeProps = oldNode.properties;
          $el.style.width = `${oldNodeProps.width}px`;
          $el.style.height = `${oldNodeProps.height}px`;
          $el.style.minWidth = `auto`;
          $el.style.minHeight = `auto`;
          $el.style.maxWidth = `none`;
          $el.style.maxHeight = `none`;
          if (!oldNode.isInlined) {
            $el.style.translate = `${oldNodeProps.x}px ${oldNodeProps.y}px`;
          }
          this.properties.forEach((prop) => {
            if (prop !== "transform") {
              $el.style[prop] = `${oldState.getComputedValue($el, prop)}`;
            }
          });
        }
        for (let i = 0, l = swapping.length; i < l; i++) {
          const $el = swapping[i];
          const newNode = newState.getNode($el);
          const newNodeProps = newNode.properties;
          this.timeline.call(() => {
            $el.style.width = `${newNodeProps.width}px`;
            $el.style.height = `${newNodeProps.height}px`;
            $el.style.minWidth = `auto`;
            $el.style.minHeight = `auto`;
            $el.style.maxWidth = `none`;
            $el.style.maxHeight = `none`;
            if (!newNode.isInlined) {
              $el.style.translate = `${newNodeProps.x}px ${newNodeProps.y}px`;
            }
            this.properties.forEach((prop) => {
              if (prop !== "transform") {
                $el.style[prop] = `${newState.getComputedValue($el, prop)}`;
              }
            });
          }, newNode.delay + newNode.duration / 2);
        }
        if (animatedSwap.length) {
          const ease = parser2.parseEase(newState.nodes.get(animatedSwap[0].dataset.layoutId).ease);
          const inverseEased = (t) => 1 - ease(1 - t);
          const animatedSwapParams = (
            /** @type {AnimationParams} */
            {}
          );
          if (swapAtProps) {
            for (let prop in swapAtProps) {
              if (prop !== "transform") {
                animatedSwapParams[prop] = [
                  { from: ($el) => oldState.getComputedValue($el, prop), to: swapAtProps[prop] },
                  { from: swapAtProps[prop], to: ($el) => newState.getComputedValue($el, prop), ease: inverseEased }
                ];
              }
            }
          }
          this.timeline.add(animatedSwap, animatedSwapParams, 0);
        }
      }
      const transformedLength = transformed.length;
      if (transformedLength) {
        for (let i = 0; i < transformedLength; i++) {
          const $el = transformed[i];
          const node = newState.getNode($el);
          if (!node.isInlined) {
            $el.style.translate = `${oldState.getComputedValue($el, "x")}px ${oldState.getComputedValue($el, "y")}px`;
          }
          $el.style.transform = oldState.getComputedValue($el, "transform");
          if (animatedSwap.includes($el)) {
            node.ease = values2.getFunctionValue(swapAtParams.ease, $el, node.index, node.targets, null, null);
            node.duration = values2.getFunctionValue(swapAtParams.duration, $el, node.index, node.targets, null, null);
          }
        }
        this.transformAnimation = waapi2.waapi.animate(transformed, {
          translate: ($el) => {
            const node = newState.getNode($el);
            if (node.isInlined) return "0px 0px";
            return `${newState.getComputedValue($el, "x")}px ${newState.getComputedValue($el, "y")}px`;
          },
          transform: ($el) => {
            const newValue = newState.getComputedValue($el, "transform");
            if (!animatedSwap.includes($el)) return newValue;
            const oldValue = oldState.getComputedValue($el, "transform");
            const node = newState.getNode($el);
            return [oldValue, values2.getFunctionValue(swapAtProps.transform, $el, node.index, node.targets, null, null), newValue];
          },
          autoplay: false,
          // persist: true,
          ...timingParams
        });
        this.timeline.sync(this.transformAnimation, 0);
      }
      return this.timeline.init();
    }
    /**
     * @param {(layout: this) => void} callback
     * @param {LayoutAnimationParams} [params]
     * @return {Timeline}
     */
    update(callback, params = {}) {
      this.record();
      callback(this);
      return this.animate(params);
    }
  }
  const createLayout = (root, params) => new AutoLayout(root, params);
  layout.AutoLayout = AutoLayout;
  layout.createLayout = createLayout;
  return layout;
}
var utils = {};
var chainable = {};
var hasRequiredChainable;
function requireChainable() {
  if (hasRequiredChainable) return chainable;
  hasRequiredChainable = 1;
  var consts2 = /* @__PURE__ */ requireConsts();
  var number2 = /* @__PURE__ */ requireNumber();
  const numberUtils = number2;
  const chainables = {};
  const curry = (fn, last = 0) => (...args) => last ? (v) => fn(...args, v) : (v) => fn(v, ...args);
  const chain = (fn) => {
    return (...args) => {
      const result = fn(...args);
      return new Proxy(consts2.noop, {
        apply: (_, __, [v]) => result(v),
        get: (_, prop) => {
          if (!chainables[prop]) return void 0;
          return chain(
            /**@param {...Number|String} nextArgs */
            (...nextArgs) => {
              const nextResult = chainables[prop](...nextArgs);
              return (v) => nextResult(result(v));
            }
          );
        }
      });
    };
  };
  const makeChainable = (name, fn, right = 0) => {
    const chained = (...args) => (args.length < fn.length ? chain(curry(fn, right)) : fn)(...args);
    if (!chainables[name]) chainables[name] = chained;
    return chained;
  };
  const roundPad = (
    /** @type {typeof numberUtils.roundPad & ChainedRoundPad} */
    makeChainable("roundPad", numberUtils.roundPad)
  );
  const padStart = (
    /** @type {typeof numberUtils.padStart & ChainedPadStart} */
    makeChainable("padStart", numberUtils.padStart)
  );
  const padEnd = (
    /** @type {typeof numberUtils.padEnd & ChainedPadEnd} */
    makeChainable("padEnd", numberUtils.padEnd)
  );
  const wrap = (
    /** @type {typeof numberUtils.wrap & ChainedWrap} */
    makeChainable("wrap", numberUtils.wrap)
  );
  const mapRange = (
    /** @type {typeof numberUtils.mapRange & ChainedMapRange} */
    makeChainable("mapRange", numberUtils.mapRange)
  );
  const degToRad = (
    /** @type {typeof numberUtils.degToRad & ChainedDegToRad} */
    makeChainable("degToRad", numberUtils.degToRad)
  );
  const radToDeg = (
    /** @type {typeof numberUtils.radToDeg & ChainedRadToDeg} */
    makeChainable("radToDeg", numberUtils.radToDeg)
  );
  const snap = (
    /** @type {typeof numberUtils.snap & ChainedSnap} */
    makeChainable("snap", numberUtils.snap)
  );
  const clamp = (
    /** @type {typeof numberUtils.clamp & ChainedClamp} */
    makeChainable("clamp", numberUtils.clamp)
  );
  const round = (
    /** @type {typeof numberUtils.round & ChainedRound} */
    makeChainable("round", numberUtils.round)
  );
  const lerp = (
    /** @type {typeof numberUtils.lerp & ChainedLerp} */
    makeChainable("lerp", numberUtils.lerp, 1)
  );
  const damp = (
    /** @type {typeof numberUtils.damp & ChainedDamp} */
    makeChainable("damp", numberUtils.damp, 1)
  );
  chainable.clamp = clamp;
  chainable.damp = damp;
  chainable.degToRad = degToRad;
  chainable.lerp = lerp;
  chainable.mapRange = mapRange;
  chainable.padEnd = padEnd;
  chainable.padStart = padStart;
  chainable.radToDeg = radToDeg;
  chainable.round = round;
  chainable.roundPad = roundPad;
  chainable.snap = snap;
  chainable.wrap = wrap;
  return chainable;
}
var random = {};
var hasRequiredRandom;
function requireRandom() {
  if (hasRequiredRandom) return random;
  hasRequiredRandom = 1;
  const random$1 = (min = 0, max = 1, decimalLength = 0) => {
    const m = 10 ** decimalLength;
    return Math.floor((Math.random() * (max - min + 1 / m) + min) * m) / m;
  };
  let _seed = 0;
  const createSeededRandom = (seed, seededMin = 0, seededMax = 1, seededDecimalLength = 0) => {
    let t = seed === void 0 ? _seed++ : seed;
    return (min = seededMin, max = seededMax, decimalLength = seededDecimalLength) => {
      t += 1831565813;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      const m = 10 ** decimalLength;
      return Math.floor((((t ^ t >>> 14) >>> 0) / 4294967296 * (max - min + 1 / m) + min) * m) / m;
    };
  };
  const randomPick = (items) => items[random$1(0, items.length - 1)];
  const shuffle = (items, rnd = random$1) => {
    let m = items.length, t, i;
    while (m) {
      i = rnd(0, --m);
      t = items[m];
      items[m] = items[i];
      items[i] = t;
    }
    return items;
  };
  random.createSeededRandom = createSeededRandom;
  random.random = random$1;
  random.randomPick = randomPick;
  random.shuffle = shuffle;
  return random;
}
var stagger = {};
var hasRequiredStagger;
function requireStagger() {
  if (hasRequiredStagger) return stagger;
  hasRequiredStagger = 1;
  var consts2 = /* @__PURE__ */ requireConsts();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var parser2 = /* @__PURE__ */ requireParser();
  var position2 = /* @__PURE__ */ requirePosition();
  var values2 = /* @__PURE__ */ requireValues();
  var targets2 = /* @__PURE__ */ requireTargets();
  var random2 = /* @__PURE__ */ requireRandom();
  const stagger$1 = (val, params = {}) => {
    let values$1 = [];
    let maxValue = 0;
    let cachedOffset;
    let jitterSamples = null;
    const from = params.from;
    const reversed = params.reversed;
    const ease = params.ease;
    const hasEasing = !helpers2.isUnd(ease);
    const hasSpring = hasEasing && !helpers2.isUnd(
      /** @type {Spring} */
      ease.ease
    );
    const staggerEase = hasSpring ? (
      /** @type {Spring} */
      ease.ease
    ) : hasEasing ? parser2.parseEase(ease) : null;
    const grid = params.grid;
    const autoGrid = grid === true;
    const axis = params.axis;
    const customTotal = params.total;
    const fromFirst = helpers2.isUnd(from) || from === 0 || from === "first";
    const fromCenter = from === "center";
    const fromLast = from === "last";
    const fromRandom = from === "random";
    const fromArr = helpers2.isArr(from);
    const isRange = helpers2.isArr(val);
    const useProp = params.use;
    const val1 = isRange ? helpers2.parseNumber(val[0]) : helpers2.parseNumber(val);
    const val2 = isRange ? helpers2.parseNumber(val[1]) : 0;
    const unitMatch = consts2.unitsExecRgx.exec((isRange ? val[1] : val) + consts2.emptyString);
    const start = params.start || 0 + (isRange ? val1 : 0);
    const seed = params.seed;
    const hasSeed = !helpers2.isUnd(seed) && seed !== false;
    const rng = hasSeed ? random2.createSeededRandom(seed === true ? 0 : (
      /** @type {Number} */
      seed
    )) : random2.random;
    const jitter = params.jitter;
    const hasJitter = !helpers2.isUnd(jitter);
    const jitterIsArr = helpers2.isArr(jitter);
    const jitterStart = jitterIsArr ? (
      /** @type {[Number,Number]} */
      jitter[0]
    ) : (
      /** @type {Number} */
      jitter || 0
    );
    const jitterEnd = jitterIsArr ? (
      /** @type {[Number,Number]} */
      jitter[1]
    ) : (
      /** @type {Number} */
      jitter || 0
    );
    let fromIndex = fromFirst ? 0 : helpers2.isNum(from) ? from : 0;
    return (target2, i, t, _, tl) => {
      const [registeredTarget] = targets2.registerTargets(target2);
      const total = helpers2.isUnd(customTotal) ? t.length : customTotal;
      const customIndex = !helpers2.isUnd(useProp) ? helpers2.isFnc(useProp) ? useProp(registeredTarget, i, total) : values2.getOriginalAnimatableValue(registeredTarget, useProp) : false;
      const customIdx = helpers2.isNum(customIndex) || helpers2.isStr(customIndex) && helpers2.isNum(+customIndex) ? +customIndex : i;
      const staggerIndex = customIdx >= 0 && customIdx < total ? customIdx : i;
      if (fromCenter) fromIndex = (total - 1) / 2;
      if (fromLast) fromIndex = total - 1;
      if (!values$1.length) {
        if (autoGrid) {
          let hasPositions = true;
          let has3D = false;
          let minPosX = Infinity;
          let minPosY = Infinity;
          let minPosZ = Infinity;
          let maxPosX = -Infinity;
          let maxPosY = -Infinity;
          let maxPosZ = -Infinity;
          const pxArr = [];
          const pyArr = [];
          const pzArr = [];
          for (let index = 0; index < total; index++) {
            const el = t[index];
            let px = 0;
            let py = 0;
            let pz = 0;
            let found = false;
            if (el && helpers2.isFnc(el.getBoundingClientRect)) {
              const rect = el.getBoundingClientRect();
              px = rect.left + rect.width / 2;
              py = rect.top + rect.height / 2;
              found = true;
            } else {
              const obj = (
                /** @type {JSTarget} */
                el
              );
              if (obj && helpers2.isNum(obj.x) && helpers2.isNum(obj.y)) {
                px = obj.x;
                py = obj.y;
                if (helpers2.isNum(obj.z)) {
                  pz = obj.z;
                  has3D = true;
                }
                found = true;
              }
            }
            if (!found) {
              hasPositions = false;
              break;
            }
            pxArr.push(px);
            pyArr.push(py);
            pzArr.push(pz);
            if (px < minPosX) minPosX = px;
            if (py < minPosY) minPosY = py;
            if (pz < minPosZ) minPosZ = pz;
            if (px > maxPosX) maxPosX = px;
            if (py > maxPosY) maxPosY = py;
            if (pz > maxPosZ) maxPosZ = pz;
          }
          if (hasPositions) {
            let fX = pxArr[0];
            let fY = pyArr[0];
            let fZ = pzArr[0];
            if (fromArr) {
              fX = minPosX + from[0] * (maxPosX - minPosX);
              fY = minPosY + from[1] * (maxPosY - minPosY);
              fZ = has3D ? minPosZ + (from.length >= 3 ? from[2] : 0.5) * (maxPosZ - minPosZ) : 0;
            } else if (fromCenter) {
              fX = (minPosX + maxPosX) / 2;
              fY = (minPosY + maxPosY) / 2;
              fZ = (minPosZ + maxPosZ) / 2;
            } else if (fromLast) {
              fX = pxArr[total - 1];
              fY = pyArr[total - 1];
              fZ = pzArr[total - 1];
            } else if (helpers2.isNum(from)) {
              fX = pxArr[from];
              fY = pyArr[from];
              fZ = pzArr[from];
            }
            for (let index = 0; index < total; index++) {
              const distanceX = fX - pxArr[index];
              const distanceY = fY - pyArr[index];
              const distanceZ = fZ - pzArr[index];
              let value = helpers2.sqrt(distanceX * distanceX + distanceY * distanceY + (has3D ? distanceZ * distanceZ : 0));
              if (axis === "x") value = -distanceX;
              if (axis === "y") value = -distanceY;
              if (axis === "z") value = -distanceZ;
              values$1.push(value);
            }
            let minDist = Infinity;
            for (let index = 0; index < total; index++) {
              const absVal = helpers2.abs(values$1[index]);
              if (absVal > 0 && absVal < minDist) minDist = absVal;
            }
            if (minDist > 0 && minDist < Infinity) {
              for (let index = 0; index < total; index++) {
                values$1[index] = values$1[index] / minDist;
              }
            }
          } else {
            for (let index = 0; index < total; index++) {
              values$1.push(helpers2.abs(fromIndex - index));
            }
          }
        } else {
          for (let index = 0; index < total; index++) {
            if (!grid) {
              values$1.push(helpers2.abs(fromIndex - index));
            } else {
              const dims = grid.length;
              const wh = grid[0] * grid[1];
              let fromX, fromY, fromZ;
              if (fromArr) {
                fromX = from[0] * (grid[0] - 1);
                fromY = from[1] * (grid[1] - 1);
                fromZ = dims === 3 ? (from.length >= 3 ? from[2] : 0.5) * (grid[2] - 1) : 0;
              } else if (fromCenter) {
                fromX = (grid[0] - 1) / 2;
                fromY = (grid[1] - 1) / 2;
                fromZ = dims === 3 ? (grid[2] - 1) / 2 : 0;
              } else {
                fromX = fromIndex % grid[0];
                fromY = helpers2.floor(fromIndex / grid[0]) % grid[1];
                fromZ = dims === 3 ? helpers2.floor(fromIndex / wh) : 0;
              }
              const toX = index % grid[0];
              const toY = helpers2.floor(index / grid[0]) % grid[1];
              const toZ = dims === 3 ? helpers2.floor(index / wh) : 0;
              const distanceX = fromX - toX;
              const distanceY = fromY - toY;
              const distanceZ = fromZ - toZ;
              let value = helpers2.sqrt(distanceX * distanceX + distanceY * distanceY + (dims === 3 ? distanceZ * distanceZ : 0));
              if (axis === "x") value = -distanceX;
              if (axis === "y") value = -distanceY;
              if (axis === "z") value = -distanceZ;
              values$1.push(value);
            }
          }
        }
        maxValue = values$1[0];
        for (let k = 1; k < total; k++) if (values$1[k] > maxValue) maxValue = values$1[k];
        if (staggerEase || reversed) {
          for (let k = 0; k < total; k++) {
            let v = values$1[k];
            if (staggerEase) v = staggerEase(v / maxValue) * maxValue;
            if (reversed) v = axis ? -v : helpers2.abs(maxValue - v);
            values$1[k] = v;
          }
        }
        if (hasJitter) {
          jitterSamples = new Array(total);
          for (let k = 0; k < total; k++) jitterSamples[k] = rng(-1, 1, 4);
        }
        if (fromRandom) values$1 = random2.shuffle(values$1, rng);
      }
      const spacing = isRange ? (val2 - val1) / maxValue : val1;
      if (helpers2.isUnd(cachedOffset)) {
        cachedOffset = tl ? position2.parseTimelinePosition(tl, helpers2.isUnd(params.start) ? tl.iterationDuration : start) : (
          /** @type {Number} */
          start
        );
      }
      let output = cachedOffset + (spacing * helpers2.round(values$1[staggerIndex], 2) || 0);
      if (hasJitter) {
        const progress = maxValue ? values$1[staggerIndex] / maxValue : 0;
        const mag = jitterStart + (jitterEnd - jitterStart) * progress;
        output = /** @type {Number} */
        output + jitterSamples[staggerIndex] * mag;
      }
      if (params.modifier) output = params.modifier(
        /** @type {Number} */
        output
      );
      if (unitMatch) output = `${output}${unitMatch[2]}`;
      return output;
    };
  };
  stagger.stagger = stagger$1;
  return stagger;
}
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils) return utils;
  hasRequiredUtils = 1;
  var chainable2 = /* @__PURE__ */ requireChainable();
  var random2 = /* @__PURE__ */ requireRandom();
  var time2 = /* @__PURE__ */ requireTime();
  var target2 = /* @__PURE__ */ requireTarget();
  var stagger2 = /* @__PURE__ */ requireStagger();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var styles2 = /* @__PURE__ */ requireStyles();
  var targets2 = /* @__PURE__ */ requireTargets();
  utils.clamp = chainable2.clamp;
  utils.damp = chainable2.damp;
  utils.degToRad = chainable2.degToRad;
  utils.lerp = chainable2.lerp;
  utils.mapRange = chainable2.mapRange;
  utils.padEnd = chainable2.padEnd;
  utils.padStart = chainable2.padStart;
  utils.radToDeg = chainable2.radToDeg;
  utils.round = chainable2.round;
  utils.roundPad = chainable2.roundPad;
  utils.snap = chainable2.snap;
  utils.wrap = chainable2.wrap;
  utils.createSeededRandom = random2.createSeededRandom;
  utils.random = random2.random;
  utils.randomPick = random2.randomPick;
  utils.shuffle = random2.shuffle;
  utils.keepTime = time2.keepTime;
  utils.sync = time2.sync;
  utils.get = target2.get;
  utils.remove = target2.remove;
  utils.set = target2.set;
  utils.stagger = stagger2.stagger;
  utils.addChild = helpers2.addChild;
  utils.forEachChildren = helpers2.forEachChildren;
  utils.removeChild = helpers2.removeChild;
  utils.cleanInlineStyles = styles2.cleanInlineStyles;
  utils.$ = targets2.registerTargets;
  return utils;
}
var svg = {};
var motionpath = {};
var helpers = {};
var hasRequiredHelpers;
function requireHelpers() {
  if (hasRequiredHelpers) return helpers;
  hasRequiredHelpers = 1;
  var helpers$12 = /* @__PURE__ */ requireHelpers$1();
  var targets2 = /* @__PURE__ */ requireTargets();
  const getPath = (path) => {
    const parsedTargets = targets2.parseTargets(path);
    const $parsedSvg = (
      /** @type {SVGGeometryElement} */
      parsedTargets[0]
    );
    if (!$parsedSvg || !helpers$12.isSvg($parsedSvg)) return console.warn(`${path} is not a valid SVGGeometryElement`);
    return $parsedSvg;
  };
  helpers.getPath = getPath;
  return helpers;
}
var hasRequiredMotionpath;
function requireMotionpath() {
  if (hasRequiredMotionpath) return motionpath;
  hasRequiredMotionpath = 1;
  var consts2 = /* @__PURE__ */ requireConsts();
  var helpers$12 = /* @__PURE__ */ requireHelpers$1();
  var helpers2 = /* @__PURE__ */ requireHelpers();
  const getPathPoint = ($path, totalLength, progress, lookup, shouldClamp) => {
    const point = progress + lookup;
    const pointOnPath = shouldClamp ? Math.max(0, Math.min(point, totalLength)) : (point % totalLength + totalLength) % totalLength;
    return $path.getPointAtLength(pointOnPath);
  };
  const getPathProgess = ($path, pathProperty, offset = 0) => {
    return ($el) => {
      const totalLength = +$path.getTotalLength();
      const inSvg = $el[consts2.isSvgSymbol];
      const ctm = $path.getCTM();
      const shouldClamp = offset === 0;
      return {
        from: 0,
        to: totalLength,
        /** @type {TweenModifier} */
        modifier: (progress) => {
          const offsetLength = offset * totalLength;
          const newProgress = progress + offsetLength;
          if (pathProperty === "a") {
            const p0 = getPathPoint($path, totalLength, newProgress, -1, shouldClamp);
            const p1 = getPathPoint($path, totalLength, newProgress, 1, shouldClamp);
            return helpers$12.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / helpers$12.PI;
          } else {
            const p = getPathPoint($path, totalLength, newProgress, 0, shouldClamp);
            return pathProperty === "x" ? inSvg || !ctm ? p.x : p.x * ctm.a + p.y * ctm.c + ctm.e : inSvg || !ctm ? p.y : p.x * ctm.b + p.y * ctm.d + ctm.f;
          }
        }
      };
    };
  };
  const createMotionPath = (path, offset = 0) => {
    const $path = helpers2.getPath(path);
    if (!$path) return;
    return {
      translateX: getPathProgess($path, "x", offset),
      translateY: getPathProgess($path, "y", offset),
      rotate: getPathProgess($path, "a", offset)
    };
  };
  motionpath.createMotionPath = createMotionPath;
  return motionpath;
}
var drawable = {};
var hasRequiredDrawable;
function requireDrawable() {
  if (hasRequiredDrawable) return drawable;
  hasRequiredDrawable = 1;
  var consts2 = /* @__PURE__ */ requireConsts();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var targets2 = /* @__PURE__ */ requireTargets();
  const getScaleFactor = ($el) => {
    let scaleFactor = 1;
    if ($el && $el.getCTM) {
      const ctm = $el.getCTM();
      if (ctm) {
        const scaleX = helpers2.sqrt(ctm.a * ctm.a + ctm.b * ctm.b);
        const scaleY = helpers2.sqrt(ctm.c * ctm.c + ctm.d * ctm.d);
        scaleFactor = (scaleX + scaleY) / 2;
      }
    }
    return scaleFactor;
  };
  const createDrawableProxy = ($el, start, end) => {
    const pathLength = consts2.K;
    const computedStyles = getComputedStyle($el);
    const strokeLineCap = computedStyles.strokeLinecap;
    const $scalled = computedStyles.vectorEffect === "non-scaling-stroke" ? $el : null;
    let currentCap = strokeLineCap;
    const proxy = new Proxy($el, {
      get(target2, property) {
        const value = target2[property];
        if (property === consts2.proxyTargetSymbol) return target2;
        if (property === "setAttribute") {
          return (...args) => {
            if (args[0] === "draw") {
              const value2 = args[1];
              const values2 = value2.split(" ");
              const v1 = +values2[0];
              const v2 = +values2[1];
              const scaleFactor = getScaleFactor($scalled);
              const os = v1 * -pathLength * scaleFactor;
              const d1 = v2 * pathLength * scaleFactor + os;
              const d2 = pathLength * scaleFactor + (v1 === 0 && v2 === 1 || v1 === 1 && v2 === 0 ? 0 : 10 * scaleFactor) - d1;
              if (strokeLineCap !== "butt") {
                const newCap = v1 === v2 ? "butt" : strokeLineCap;
                if (currentCap !== newCap) {
                  target2.style.strokeLinecap = `${newCap}`;
                  currentCap = newCap;
                }
              }
              target2.setAttribute("stroke-dashoffset", `${os}`);
              target2.setAttribute("stroke-dasharray", `${d1} ${d2}`);
            }
            return Reflect.apply(value, target2, args);
          };
        }
        if (helpers2.isFnc(value)) {
          return (...args) => Reflect.apply(value, target2, args);
        } else {
          return value;
        }
      }
    });
    if ($el.getAttribute("pathLength") !== `${pathLength}`) {
      $el.setAttribute("pathLength", `${pathLength}`);
      proxy.setAttribute("draw", `${start} ${end}`);
    }
    return (
      /** @type {DrawableSVGGeometry} */
      proxy
    );
  };
  const createDrawable = (selector, start = 0, end = 0) => {
    const els = targets2.parseTargets(selector);
    return els.map(($el) => createDrawableProxy(
      /** @type {SVGGeometryElement} */
      $el,
      start,
      end
    ));
  };
  drawable.createDrawable = createDrawable;
  return drawable;
}
var morphto = {};
var hasRequiredMorphto;
function requireMorphto() {
  if (hasRequiredMorphto) return morphto;
  hasRequiredMorphto = 1;
  var helpers$12 = /* @__PURE__ */ requireHelpers$1();
  var helpers2 = /* @__PURE__ */ requireHelpers();
  const morphTo = (path2, precision = 0.33) => ($path1, index, total, prevTween) => {
    const tagName1 = ($path1.tagName || "").toLowerCase();
    if (!tagName1.match(/^(path|polygon|polyline)$/)) {
      throw new Error(`Can't morph a <${$path1.tagName}> SVG element. Use <path>, <polygon> or <polyline>.`);
    }
    const $path2 = (
      /** @type {SVGGeometryElement} */
      helpers2.getPath(path2)
    );
    if (!$path2) {
      throw new Error("Can't morph to an invalid target. 'path2' must resolve to an existing <path>, <polygon> or <polyline> SVG element.");
    }
    const tagName2 = ($path2.tagName || "").toLowerCase();
    if (!tagName2.match(/^(path|polygon|polyline)$/)) {
      throw new Error(`Can't morph a <${$path2.tagName}> SVG element. Use <path>, <polygon> or <polyline>.`);
    }
    const isPath = $path1.tagName === "path";
    const separator = isPath ? " " : ",";
    const previousPoints = prevTween ? prevTween._value : null;
    if (previousPoints) $path1.setAttribute(isPath ? "d" : "points", previousPoints);
    let v1 = "", v2 = "";
    if (!precision) {
      v1 = $path1.getAttribute(isPath ? "d" : "points");
      v2 = $path2.getAttribute(isPath ? "d" : "points");
    } else {
      const length1 = (
        /** @type {SVGGeometryElement} */
        $path1.getTotalLength()
      );
      const length2 = $path2.getTotalLength();
      const maxPoints = Math.max(Math.ceil(length1 * precision), Math.ceil(length2 * precision));
      for (let i = 0; i < maxPoints; i++) {
        const t = i / (maxPoints - 1);
        const pointOnPath1 = (
          /** @type {SVGGeometryElement} */
          $path1.getPointAtLength(length1 * t)
        );
        const pointOnPath2 = $path2.getPointAtLength(length2 * t);
        const prefix = isPath ? i === 0 ? "M" : "L" : "";
        v1 += prefix + helpers$12.round(pointOnPath1.x, 3) + separator + pointOnPath1.y + " ";
        v2 += prefix + helpers$12.round(pointOnPath2.x, 3) + separator + pointOnPath2.y + " ";
      }
    }
    return [v1, v2];
  };
  morphto.morphTo = morphTo;
  return morphto;
}
var hasRequiredSvg;
function requireSvg() {
  if (hasRequiredSvg) return svg;
  hasRequiredSvg = 1;
  var motionpath2 = /* @__PURE__ */ requireMotionpath();
  var drawable2 = /* @__PURE__ */ requireDrawable();
  var morphto2 = /* @__PURE__ */ requireMorphto();
  svg.createMotionPath = motionpath2.createMotionPath;
  svg.createDrawable = drawable2.createDrawable;
  svg.morphTo = morphto2.morphTo;
  return svg;
}
var text = {};
var split = {};
var hasRequiredSplit;
function requireSplit() {
  if (hasRequiredSplit) return split;
  hasRequiredSplit = 1;
  var consts2 = /* @__PURE__ */ requireConsts();
  var globals2 = /* @__PURE__ */ requireGlobals();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var targets2 = /* @__PURE__ */ requireTargets();
  var values2 = /* @__PURE__ */ requireValues();
  var time2 = /* @__PURE__ */ requireTime();
  const segmenter = typeof Intl !== "undefined" && Intl.Segmenter;
  const valueRgx = /\{value\}/g;
  const indexRgx = /\{i\}/g;
  const whiteSpaceGroupRgx = /(\s+)/;
  const whiteSpaceRgx = /^\s+$/;
  const lineType = "line";
  const wordType = "word";
  const charType = "char";
  const dataLine = `data-line`;
  let wordSegmenter = null;
  let graphemeSegmenter = null;
  let $splitTemplate = null;
  const isSegmentWordLike = (seg) => {
    return seg.isWordLike || seg.segment === " " || // Consider spaces as words first, then handle them diffrently later
    helpers2.isNum(+seg.segment);
  };
  const setAriaHidden = ($el) => $el.setAttribute("aria-hidden", "true");
  const getAllTopLevelElements = ($el, type) => [.../** @type {*} */
  $el.querySelectorAll(`[data-${type}]:not([data-${type}] [data-${type}])`)];
  const debugColors = { line: "#00D672", word: "#FF4B4B", char: "#5A87FF" };
  const filterEmptyElements = ($el) => {
    if (!$el.childElementCount && !$el.textContent.trim()) {
      const $parent = $el.parentElement;
      $el.remove();
      if ($parent) filterEmptyElements($parent);
    }
  };
  const filterLineElements = ($el, lineIndex, bin) => {
    const dataLineAttr = $el.getAttribute(dataLine);
    if (dataLineAttr !== null && +dataLineAttr !== lineIndex || $el.tagName === "BR") {
      bin.add($el);
      const prev = $el.previousSibling;
      const next = $el.nextSibling;
      if (prev && prev.nodeType === 3 && whiteSpaceRgx.test(prev.textContent)) {
        bin.add(prev);
      }
      if (next && next.nodeType === 3 && whiteSpaceRgx.test(next.textContent)) {
        bin.add(next);
      }
    }
    let i = $el.childElementCount;
    while (i--) filterLineElements(
      /** @type {HTMLElement} */
      $el.children[i],
      lineIndex,
      bin
    );
    return bin;
  };
  const generateTemplate = (type, params = {}) => {
    let template = ``;
    if (!params) params = {};
    const classString = helpers2.isStr(params.class) ? ` class="${params.class}"` : "";
    const cloneType = values2.setValue(params.clone, false);
    const wrapType = values2.setValue(params.wrap, false);
    const overflow = wrapType ? wrapType === true ? "clip" : wrapType : cloneType ? "clip" : false;
    if (wrapType) template += `<span${overflow ? ` style="overflow:${overflow};"` : ""}>`;
    template += `<span${classString}${cloneType ? ` style="position:relative;"` : ""} data-${type}="{i}">`;
    if (cloneType) {
      const left = cloneType === "left" ? "-100%" : cloneType === "right" ? "100%" : "0";
      const top = cloneType === "top" ? "-100%" : cloneType === "bottom" ? "100%" : "0";
      template += `<span>{value}</span>`;
      template += `<span inert style="position:absolute;top:${top};left:${left};white-space:nowrap;">{value}</span>`;
    } else {
      template += `{value}`;
    }
    template += `</span>`;
    if (wrapType) template += `</span>`;
    return template;
  };
  const processHTMLTemplate = (htmlTemplate, store, node, $parentFragment, type, debug, lineIndex, wordIndex, charIndex) => {
    const isLine = type === lineType;
    const isChar = type === charType;
    const className = `_${type}_`;
    const template = helpers2.isFnc(htmlTemplate) ? htmlTemplate(node) : htmlTemplate;
    const displayStyle = isLine ? "block" : "inline-block";
    $splitTemplate.innerHTML = template.replace(valueRgx, `<i class="${className}"></i>`).replace(indexRgx, `${isChar ? charIndex : isLine ? lineIndex : wordIndex}`);
    const $content = $splitTemplate.content;
    const $highestParent = (
      /** @type {HTMLElement} */
      $content.firstElementChild
    );
    const $split = (
      /** @type {HTMLElement} */
      $content.querySelector(`[data-${type}]`) || $highestParent
    );
    const $replacables = (
      /** @type {NodeListOf<HTMLElement>} */
      $content.querySelectorAll(`i.${className}`)
    );
    const replacablesLength = $replacables.length;
    if (replacablesLength) {
      $highestParent.style.display = displayStyle;
      $split.style.display = displayStyle;
      $split.setAttribute(dataLine, `${lineIndex}`);
      if (!isLine) {
        $split.setAttribute("data-word", `${wordIndex}`);
        if (isChar) $split.setAttribute("data-char", `${charIndex}`);
      }
      let i = replacablesLength;
      while (i--) {
        const $replace = $replacables[i];
        const $closestParent = $replace.parentElement;
        $closestParent.style.display = displayStyle;
        if (isLine) {
          $closestParent.innerHTML = /** @type {HTMLElement} */
          node.innerHTML;
        } else {
          $closestParent.replaceChild(node.cloneNode(true), $replace);
        }
      }
      store.push($split);
      $parentFragment.appendChild($content);
    } else {
      console.warn(`The expression "{value}" is missing from the provided template.`);
    }
    if (debug) $highestParent.style.outline = `1px dotted ${debugColors[type]}`;
    return $highestParent;
  };
  class TextSplitter {
    /**
     * @param  {Element|NodeList|String|Array<Element>} target
     * @param  {TextSplitterParams} [parameters]
     */
    constructor(target2, parameters = {}) {
      if (!wordSegmenter) wordSegmenter = segmenter ? new segmenter([], { granularity: wordType }) : {
        segment: (text2) => {
          const segments = [];
          const words2 = text2.split(whiteSpaceGroupRgx);
          for (let i = 0, l = words2.length; i < l; i++) {
            const segment = words2[i];
            segments.push({
              segment,
              isWordLike: !whiteSpaceRgx.test(segment)
              // Consider non-whitespace as word-like
            });
          }
          return segments;
        }
      };
      if (!graphemeSegmenter) graphemeSegmenter = segmenter ? new segmenter([], { granularity: "grapheme" }) : {
        segment: (text2) => [...text2].map((char) => ({ segment: char }))
      };
      if (!$splitTemplate && consts2.isBrowser) $splitTemplate = consts2.doc.createElement("template");
      if (globals2.scope.current) globals2.scope.current.register(this);
      const { words, chars, lines, accessible, includeSpaces, debug } = parameters;
      const $target = (
        /** @type {HTMLElement} */
        (target2 = helpers2.isArr(target2) ? target2[0] : target2) && /** @type {Node} */
        target2.nodeType ? target2 : (targets2.getNodeList(target2) || [])[0]
      );
      const lineParams = lines === true ? {} : lines;
      const wordParams = words === true || helpers2.isUnd(words) ? {} : words;
      const charParams = chars === true ? {} : chars;
      this.debug = values2.setValue(debug, false);
      this.includeSpaces = values2.setValue(includeSpaces, false);
      this.accessible = values2.setValue(accessible, true);
      this.linesOnly = lineParams && (!wordParams && !charParams);
      this.lineTemplate = helpers2.isObj(lineParams) ? generateTemplate(
        lineType,
        /** @type {SplitTemplateParams} */
        lineParams
      ) : lineParams;
      this.wordTemplate = helpers2.isObj(wordParams) || this.linesOnly ? generateTemplate(
        wordType,
        /** @type {SplitTemplateParams} */
        wordParams
      ) : wordParams;
      this.charTemplate = helpers2.isObj(charParams) ? generateTemplate(
        charType,
        /** @type {SplitTemplateParams} */
        charParams
      ) : charParams;
      this.$target = $target;
      this.html = $target && $target.innerHTML;
      this.lines = [];
      this.words = [];
      this.chars = [];
      this.effects = [];
      this.effectsCleanups = [];
      this.cache = null;
      this.ready = false;
      this.width = 0;
      this.resizeTimeout = null;
      const handleSplit = () => this.html && (lineParams || wordParams || charParams) && this.split();
      this.resizeObserver = new ResizeObserver(() => {
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
          const currentWidth = (
            /** @type {HTMLElement} */
            $target.offsetWidth
          );
          if (currentWidth === this.width) return;
          this.width = currentWidth;
          handleSplit();
        }, 150);
      });
      if (this.lineTemplate && !this.ready) {
        consts2.doc.fonts.ready.then(handleSplit);
      } else {
        handleSplit();
      }
      $target ? this.resizeObserver.observe($target) : console.warn("No Text Splitter target found.");
    }
    /**
     * @param  {(...args: any[]) => Tickable | (() => void) | void} effect
     * @return this
     */
    addEffect(effect) {
      if (!helpers2.isFnc(effect)) {
        console.warn("Effect must return a function.");
        return this;
      }
      const refreshableEffect = time2.keepTime(effect);
      this.effects.push(refreshableEffect);
      if (this.ready) this.effectsCleanups[this.effects.length - 1] = refreshableEffect(this);
      return this;
    }
    revert() {
      clearTimeout(this.resizeTimeout);
      this.lines.length = this.words.length = this.chars.length = 0;
      this.resizeObserver.disconnect();
      this.effectsCleanups.forEach((cleanup) => helpers2.isFnc(cleanup) ? cleanup(this) : cleanup.revert && cleanup.revert());
      this.$target.innerHTML = this.html;
      return this;
    }
    /**
     * Recursively processes a node and its children
     * @param {Node} node
     */
    splitNode(node) {
      const wordTemplate = this.wordTemplate;
      const charTemplate = this.charTemplate;
      const includeSpaces = this.includeSpaces;
      const debug = this.debug;
      const nodeType = node.nodeType;
      if (nodeType === 3) {
        const nodeText = node.nodeValue;
        if (nodeText.trim()) {
          const tempWords = [];
          const words = this.words;
          const chars = this.chars;
          const wordSegments = wordSegmenter.segment(nodeText);
          const $wordsFragment = consts2.doc.createDocumentFragment();
          let prevSeg = null;
          for (const wordSegment of wordSegments) {
            const segment = wordSegment.segment;
            const isWordLike = isSegmentWordLike(wordSegment);
            if (!prevSeg || isWordLike && (prevSeg && isSegmentWordLike(prevSeg))) {
              tempWords.push(segment);
            } else {
              const lastWordIndex = tempWords.length - 1;
              const lastWord = tempWords[lastWordIndex];
              if (!whiteSpaceGroupRgx.test(lastWord) && !whiteSpaceGroupRgx.test(segment)) {
                tempWords[lastWordIndex] += segment;
              } else {
                tempWords.push(segment);
              }
            }
            prevSeg = wordSegment;
          }
          for (let i = 0, l = tempWords.length; i < l; i++) {
            const word = tempWords[i];
            if (!word.trim()) {
              if (i && includeSpaces) continue;
              $wordsFragment.appendChild(consts2.doc.createTextNode(word));
            } else {
              const nextWord = tempWords[i + 1];
              const hasWordFollowingSpace = includeSpaces && nextWord && !nextWord.trim();
              const wordToProcess = word;
              const charSegments = charTemplate ? graphemeSegmenter.segment(wordToProcess) : null;
              const $charsFragment = charTemplate ? consts2.doc.createDocumentFragment() : consts2.doc.createTextNode(hasWordFollowingSpace ? word + " " : word);
              if (charTemplate) {
                const charSegmentsArray = [...charSegments];
                for (let j = 0, jl = charSegmentsArray.length; j < jl; j++) {
                  const charSegment = charSegmentsArray[j];
                  const isLastChar = j === jl - 1;
                  const charText = isLastChar && hasWordFollowingSpace ? charSegment.segment + " " : charSegment.segment;
                  const $charNode = consts2.doc.createTextNode(charText);
                  processHTMLTemplate(
                    charTemplate,
                    chars,
                    $charNode,
                    /** @type {DocumentFragment} */
                    $charsFragment,
                    charType,
                    debug,
                    -1,
                    words.length,
                    chars.length
                  );
                }
              }
              if (wordTemplate) {
                processHTMLTemplate(wordTemplate, words, $charsFragment, $wordsFragment, wordType, debug, -1, words.length, chars.length);
              } else if (charTemplate) {
                $wordsFragment.appendChild($charsFragment);
              } else {
                $wordsFragment.appendChild(consts2.doc.createTextNode(word));
              }
              if (hasWordFollowingSpace) i++;
            }
          }
          node.parentNode.replaceChild($wordsFragment, node);
        }
      } else if (nodeType === 1) {
        const childNodes = (
          /** @type {Array<Node>} */
          [.../** @type {*} */
          node.childNodes]
        );
        for (let i = 0, l = childNodes.length; i < l; i++) this.splitNode(childNodes[i]);
      }
    }
    /**
     * @param {Boolean} clearCache
     * @return {this}
     */
    split(clearCache = false) {
      const $el = this.$target;
      const isCached = !!this.cache && !clearCache;
      const lineTemplate = this.lineTemplate;
      const wordTemplate = this.wordTemplate;
      const charTemplate = this.charTemplate;
      const fontsReady = consts2.doc.fonts.status !== "loading";
      const canSplitLines = lineTemplate && fontsReady;
      this.ready = !lineTemplate || fontsReady;
      if (canSplitLines || clearCache) {
        this.effectsCleanups.forEach((cleanup) => helpers2.isFnc(cleanup) && cleanup(this));
      }
      if (!isCached) {
        if (clearCache) {
          $el.innerHTML = this.html;
          this.words.length = this.chars.length = 0;
        }
        this.splitNode($el);
        this.cache = $el.innerHTML;
      }
      if (canSplitLines) {
        if (isCached) $el.innerHTML = this.cache;
        this.lines.length = 0;
        if (wordTemplate) this.words = getAllTopLevelElements($el, wordType);
      }
      if (charTemplate && (canSplitLines || wordTemplate)) {
        this.chars = getAllTopLevelElements($el, charType);
      }
      const elementsArray = this.words.length ? this.words : this.chars;
      let y, linesCount = 0;
      for (let i = 0, l = elementsArray.length; i < l; i++) {
        const $el2 = elementsArray[i];
        const { top, height } = $el2.getBoundingClientRect();
        if (!helpers2.isUnd(y) && top - y > height * 0.5) linesCount++;
        $el2.setAttribute(dataLine, `${linesCount}`);
        const nested = $el2.querySelectorAll(`[${dataLine}]`);
        let c = nested.length;
        while (c--) nested[c].setAttribute(dataLine, `${linesCount}`);
        y = top;
      }
      if (canSplitLines) {
        const linesFragment = consts2.doc.createDocumentFragment();
        const parents = /* @__PURE__ */ new Set();
        const clones = [];
        for (let lineIndex = 0; lineIndex < linesCount + 1; lineIndex++) {
          const $clone = (
            /** @type {HTMLElement} */
            $el.cloneNode(true)
          );
          filterLineElements($clone, lineIndex, /* @__PURE__ */ new Set()).forEach(($el2) => {
            const $parent = $el2.parentNode;
            if ($parent) {
              if ($el2.nodeType === 1) parents.add(
                /** @type {HTMLElement} */
                $parent
              );
              $parent.removeChild($el2);
            }
          });
          clones.push($clone);
        }
        parents.forEach(filterEmptyElements);
        for (let cloneIndex = 0, clonesLength = clones.length; cloneIndex < clonesLength; cloneIndex++) {
          processHTMLTemplate(lineTemplate, this.lines, clones[cloneIndex], linesFragment, lineType, this.debug, cloneIndex);
        }
        $el.innerHTML = "";
        $el.appendChild(linesFragment);
        if (wordTemplate) this.words = getAllTopLevelElements($el, wordType);
        if (charTemplate) this.chars = getAllTopLevelElements($el, charType);
      }
      if (this.linesOnly) {
        const words = this.words;
        let w = words.length;
        while (w--) {
          const $word = words[w];
          $word.replaceWith($word.textContent);
        }
        words.length = 0;
      }
      if (this.accessible && (canSplitLines || !isCached)) {
        const $accessible = consts2.doc.createElement("span");
        $accessible.style.cssText = `position:absolute;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;white-space:nowrap;`;
        $accessible.innerHTML = this.html;
        $el.insertBefore($accessible, $el.firstChild);
        this.lines.forEach(setAriaHidden);
        this.words.forEach(setAriaHidden);
        this.chars.forEach(setAriaHidden);
      }
      this.width = /** @type {HTMLElement} */
      $el.offsetWidth;
      if (canSplitLines || clearCache) {
        this.effects.forEach((effect, i) => this.effectsCleanups[i] = effect(this));
      }
      return this;
    }
    refresh() {
      this.split(true);
    }
  }
  const splitText = (target2, parameters) => new TextSplitter(target2, parameters);
  const split$1 = (target2, parameters) => {
    console.warn("text.split() is deprecated, import splitText() directly, or text.splitText()");
    return new TextSplitter(target2, parameters);
  };
  split.TextSplitter = TextSplitter;
  split.split = split$1;
  split.splitText = splitText;
  return split;
}
var scramble = {};
var hasRequiredScramble;
function requireScramble() {
  if (hasRequiredScramble) return scramble;
  hasRequiredScramble = 1;
  var random2 = /* @__PURE__ */ requireRandom();
  var globals2 = /* @__PURE__ */ requireGlobals();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var parser2 = /* @__PURE__ */ requireParser();
  var consts2 = /* @__PURE__ */ requireConsts();
  const expandCharRanges = (str) => {
    let result = "";
    for (let i = 0, l = str.length; i < l; i++) {
      if (i + 2 < l && str[i + 1] === "-" && str.charCodeAt(i) < str.charCodeAt(i + 2)) {
        const start = str.charCodeAt(i);
        const end = str.charCodeAt(i + 2);
        for (let c = start; c <= end; c++) result += String.fromCharCode(c);
        i += 2;
      } else {
        result += str[i];
      }
    }
    return result;
  };
  const charSets = {
    lowercase: "a-z",
    uppercase: "A-Z",
    numbers: "0-9",
    symbols: "!%#_|*+=",
    braille: "⠀-⣿",
    blocks: "▀-▟",
    shades: "░-▓"
  };
  const originalTexts = /* @__PURE__ */ new WeakMap();
  const scrambleText = (params = {}) => {
    if (!params) params = {};
    const charsParam = params.chars;
    const easeFn = parser2.parseEase(params.ease || "linear");
    const text2 = params.text;
    const fromParam = params.from;
    const reversed = params.reversed || false;
    const perturbation = params.perturbation || 0;
    const cursorParam = params.cursor;
    const cursorChars = cursorParam === true ? "_" : typeof cursorParam === "number" ? String.fromCharCode(cursorParam) : typeof cursorParam === "string" ? cursorParam : "";
    const cursorLen = cursorChars.length;
    const seed = params.seed || 0;
    const override = params.override !== void 0 ? params.override : true;
    const revealRate = params.revealRate || 60;
    const interval = 1e3 * globals2.globals.timeScale / revealRate;
    const settleDuration = params.settleDuration || 300 * globals2.globals.timeScale;
    const settleRate = params.settleRate || 30;
    const durationParam = params.duration;
    const revealDelayParam = params.revealDelay;
    const delayParam = params.delay;
    const onChange = params.onChange || consts2.noop;
    return (target2, index, targets2, prevTween) => {
      const rawChars = typeof charsParam === "function" ? charsParam(target2, index, targets2) : charsParam || "a-zA-Z0-9!%#_";
      const characters = expandCharRanges(charSets[rawChars] || rawChars);
      const totalChars = characters.length - 1;
      const duration = typeof durationParam === "function" ? durationParam(target2, index, targets2) : durationParam;
      const revealDelay = typeof revealDelayParam === "function" ? revealDelayParam(target2, index, targets2) : revealDelayParam || 0;
      const delay = typeof delayParam === "function" ? delayParam(target2, index, targets2) : delayParam || 0;
      const rng = seed ? random2.createSeededRandom(seed) : random2.createSeededRandom();
      if (!originalTexts.has(target2)) originalTexts.set(target2, target2.textContent);
      const startingText = prevTween ? prevTween._value : target2.textContent;
      const targetText = text2 !== void 0 ? typeof text2 === "function" ? text2(target2, index, targets2) : text2 : prevTween ? prevTween._value : originalTexts.get(target2);
      const settledText = targetText === " " || targetText === "&nbsp;" ? " " : targetText;
      const startLength = startingText === " " ? 0 : startingText.length;
      const endLength = settledText.length;
      const overrideChars = override === true ? characters : typeof override === "string" && override.length > 0 ? expandCharRanges(charSets[
        /** @type {String} */
        override
      ] || /** @type {String} */
      override) : null;
      const totalOverrideChars = overrideChars ? overrideChars.length - 1 : 0;
      const overrideChar = override === " " ? " " : null;
      const animLength = override === "" ? endLength : Math.max(startLength, endLength);
      const animDuration = duration > 0 ? duration : (animLength - 1) * interval + settleDuration;
      const computedDuration = helpers2.round((animDuration + revealDelay) / globals2.globals.timeScale, 0) * globals2.globals.timeScale;
      const revealDelayRatio = revealDelay > 0 ? helpers2.round(revealDelay / computedDuration, 12) : 0;
      const resolvedFrom = fromParam === void 0 || fromParam === "auto" ? endLength < startLength ? "right" : "left" : fromParam;
      const charOrder = new Int32Array(animLength);
      if (resolvedFrom === "random") {
        for (let i = 0; i < animLength; i++) charOrder[i] = i;
        for (let i = animLength - 1; i > 0; i--) {
          const j = rng(0, i);
          const t = charOrder[i];
          charOrder[i] = charOrder[j];
          charOrder[j] = t;
        }
      } else {
        const ref = resolvedFrom === "right" ? (override === "" || !startLength ? animLength : startLength) - 1 : resolvedFrom === "center" ? ((override === "" || !startLength ? animLength : startLength) - 1) / 2 : typeof resolvedFrom === "number" ? resolvedFrom : 0;
        const abs = Math.abs;
        const indices = new Array(animLength);
        for (let i = 0; i < animLength; i++) indices[i] = i;
        indices.sort((a, b) => abs(a - ref) - abs(b - ref));
        for (let i = 0; i < animLength; i++) charOrder[indices[i]] = i;
      }
      if (reversed) {
        const last = animLength - 1;
        for (let i = 0; i < animLength; i++) charOrder[i] = last - charOrder[i];
      }
      const settleRatio = helpers2.round(settleDuration / animDuration, 12);
      const settleSpacing = helpers2.round((1 - settleRatio) / animLength, 12);
      const cursorZone = cursorLen * settleSpacing;
      const stepRatio = helpers2.round(1e3 * globals2.globals.timeScale / (settleRate * computedDuration), 12);
      const charStarts = new Float32Array(animLength);
      const charEnds = new Float32Array(animLength);
      const scale = perturbation > 0 ? perturbation * settleRatio : 0;
      for (let c = 0; c < animLength; c++) {
        const so = scale > 0 ? (rng(0, 2e3) - 1e3) / 1e3 * scale : 0;
        const eo = scale > 0 ? (rng(0, 2e3) - 1e3) / 1e3 * scale : 0;
        charStarts[c] = charOrder[c] * settleSpacing + so;
        charEnds[c] = Math.ceil((charStarts[c] + settleRatio + eo) / stepRatio) * stepRatio;
      }
      if (endLength < animLength && resolvedFrom !== "left" && resolvedFrom !== "right" && resolvedFrom !== "random") {
        let maxExtraEnd = 0;
        for (let c = endLength; c < animLength; c++) {
          if (charEnds[c] > maxExtraEnd) maxExtraEnd = charEnds[c];
        }
        const targets3 = new Array(endLength);
        for (let c = 0; c < endLength; c++) targets3[c] = c;
        targets3.sort((a, b) => charOrder[a] - charOrder[b]);
        const targetSpacing = (1 - maxExtraEnd) / endLength;
        for (let i = 0; i < endLength; i++) {
          const revealTime = maxExtraEnd + i * targetSpacing;
          if (revealTime > charEnds[targets3[i]]) {
            charEnds[targets3[i]] = revealTime;
          }
        }
      }
      const charCache = new Array(animLength);
      for (let c = 0; c < animLength; c++) {
        charCache[c] = characters[rng(0, totalChars)];
      }
      const overrideCache = overrideChars ? overrideChars === characters ? charCache : new Array(animLength) : null;
      if (overrideCache && overrideCache !== charCache) {
        for (let c = 0; c < animLength; c++) {
          overrideCache[c] = overrideChar || /** @type {String} */
          overrideChars[rng(0, overrideChars.length - 1)];
        }
      }
      let fillStartText = startingText;
      if (!prevTween) {
        if (override === "") {
          fillStartText = "";
        } else if (overrideChars) {
          fillStartText = "";
          for (let c = 0; c < startLength; c++) {
            fillStartText += startingText[c] === " " ? " " : (
              /** @type {Array<String>} */
              overrideCache[c]
            );
          }
        }
      }
      let lastValue = -1;
      let lastStep = -1;
      let scrambled = "";
      const hasOverride = override !== "";
      const hasOverrideChars = !!overrideChars;
      const hasCursor = cursorLen > 0;
      return {
        from: 0,
        to: 1,
        duration: computedDuration,
        delay,
        ease: "linear",
        modifier: (v) => {
          if (v === lastValue) return scrambled;
          lastValue = v;
          if (delay > 0 && v <= 0) {
            scrambled = startingText;
            return startingText;
          }
          if (v <= 0) {
            scrambled = fillStartText;
            return fillStartText;
          }
          if (v >= 1) {
            scrambled = settledText;
            return settledText;
          }
          scrambled = "";
          const currentStep = v / stepRatio | 0;
          const refreshChars = currentStep !== lastStep;
          if (refreshChars) lastStep = currentStep;
          const linear2 = revealDelayRatio > 0 ? (v - revealDelayRatio) / (1 - revealDelayRatio) : v;
          const t = linear2 > 0 ? easeFn(linear2) : 0;
          for (let c = 0; c < animLength; c++) {
            const charStart = charStarts[c];
            const charEnd = charEnds[c];
            if (t >= charEnd) {
              if (c < endLength) scrambled += settledText[c];
              continue;
            }
            if (t <= 0 || t < charStart) {
              if (hasOverride && c < startLength) {
                if (hasOverrideChars) {
                  if (startingText[c] === " ") {
                    scrambled += " ";
                  } else {
                    if (refreshChars) overrideCache[c] = overrideChar || /** @type {String} */
                    overrideChars[rng(0, totalOverrideChars)];
                    scrambled += /** @type {Array<String>} */
                    overrideCache[c];
                  }
                } else {
                  scrambled += startingText[c];
                }
              }
              continue;
            }
            const isSpace = c < endLength && settledText[c] === " " || c < startLength && startingText[c] === " ";
            if (isSpace) {
              scrambled += " ";
            } else if (hasCursor && t - charStart < cursorZone) {
              scrambled += cursorChars[cursorLen - 1 - ((t - charStart) / settleSpacing | 0)];
            } else {
              if (refreshChars) charCache[c] = characters[rng(0, totalChars)];
              scrambled += charCache[c];
            }
          }
          if (refreshChars) onChange(scrambled, t);
          return scrambled;
        }
      };
    };
  };
  scramble.scrambleText = scrambleText;
  return scramble;
}
var hasRequiredText;
function requireText() {
  if (hasRequiredText) return text;
  hasRequiredText = 1;
  var split2 = /* @__PURE__ */ requireSplit();
  var scramble2 = /* @__PURE__ */ requireScramble();
  text.TextSplitter = split2.TextSplitter;
  text.split = split2.split;
  text.splitText = split2.splitText;
  text.scrambleText = scramble2.scrambleText;
  return text;
}
var hasRequiredModules;
function requireModules() {
  if (hasRequiredModules) return modules;
  hasRequiredModules = 1;
  var timer2 = /* @__PURE__ */ requireTimer();
  var animation2 = /* @__PURE__ */ requireAnimation();
  var timeline2 = /* @__PURE__ */ requireTimeline();
  var animatable2 = /* @__PURE__ */ requireAnimatable();
  var draggable2 = /* @__PURE__ */ requireDraggable();
  var scope2 = /* @__PURE__ */ requireScope();
  var scroll2 = /* @__PURE__ */ requireScroll();
  var engine2 = /* @__PURE__ */ requireEngine();
  var index = /* @__PURE__ */ requireEasings();
  var layout2 = /* @__PURE__ */ requireLayout();
  var index$1 = /* @__PURE__ */ requireUtils();
  var index$2 = /* @__PURE__ */ requireSvg();
  var index$3 = /* @__PURE__ */ requireText();
  var waapi2 = /* @__PURE__ */ requireWaapi();
  var globals2 = /* @__PURE__ */ requireGlobals();
  var index$4 = /* @__PURE__ */ requireCubicBezier();
  var index$5 = /* @__PURE__ */ requireSteps();
  var index$6 = /* @__PURE__ */ requireLinear();
  var index$7 = /* @__PURE__ */ requireIrregular();
  var index$8 = /* @__PURE__ */ requireSpring();
  var parser2 = /* @__PURE__ */ requireParser();
  var helpers2 = /* @__PURE__ */ requireHelpers$1();
  var chainable2 = /* @__PURE__ */ requireChainable();
  var random2 = /* @__PURE__ */ requireRandom();
  var time2 = /* @__PURE__ */ requireTime();
  var styles2 = /* @__PURE__ */ requireStyles();
  var targets2 = /* @__PURE__ */ requireTargets();
  var target2 = /* @__PURE__ */ requireTarget();
  var stagger2 = /* @__PURE__ */ requireStagger();
  var motionpath2 = /* @__PURE__ */ requireMotionpath();
  var drawable2 = /* @__PURE__ */ requireDrawable();
  var morphto2 = /* @__PURE__ */ requireMorphto();
  var split2 = /* @__PURE__ */ requireSplit();
  var scramble2 = /* @__PURE__ */ requireScramble();
  modules.Timer = timer2.Timer;
  modules.createTimer = timer2.createTimer;
  modules.JSAnimation = animation2.JSAnimation;
  modules.animate = animation2.animate;
  modules.Timeline = timeline2.Timeline;
  modules.createTimeline = timeline2.createTimeline;
  modules.Animatable = animatable2.Animatable;
  modules.createAnimatable = animatable2.createAnimatable;
  modules.Draggable = draggable2.Draggable;
  modules.createDraggable = draggable2.createDraggable;
  modules.Scope = scope2.Scope;
  modules.createScope = scope2.createScope;
  modules.ScrollObserver = scroll2.ScrollObserver;
  modules.onScroll = scroll2.onScroll;
  modules.scrollContainers = scroll2.scrollContainers;
  modules.engine = engine2.engine;
  modules.easings = index;
  modules.AutoLayout = layout2.AutoLayout;
  modules.createLayout = layout2.createLayout;
  modules.utils = index$1;
  modules.svg = index$2;
  modules.text = index$3;
  modules.WAAPIAnimation = waapi2.WAAPIAnimation;
  modules.waapi = waapi2.waapi;
  modules.globals = globals2.globals;
  modules.cubicBezier = index$4.cubicBezier;
  modules.steps = index$5.steps;
  modules.linear = index$6.linear;
  modules.irregular = index$7.irregular;
  modules.Spring = index$8.Spring;
  modules.createSpring = index$8.createSpring;
  modules.spring = index$8.spring;
  modules.eases = parser2.eases;
  modules.addChild = helpers2.addChild;
  modules.forEachChildren = helpers2.forEachChildren;
  modules.removeChild = helpers2.removeChild;
  modules.clamp = chainable2.clamp;
  modules.damp = chainable2.damp;
  modules.degToRad = chainable2.degToRad;
  modules.lerp = chainable2.lerp;
  modules.mapRange = chainable2.mapRange;
  modules.padEnd = chainable2.padEnd;
  modules.padStart = chainable2.padStart;
  modules.radToDeg = chainable2.radToDeg;
  modules.round = chainable2.round;
  modules.roundPad = chainable2.roundPad;
  modules.snap = chainable2.snap;
  modules.wrap = chainable2.wrap;
  modules.createSeededRandom = random2.createSeededRandom;
  modules.random = random2.random;
  modules.randomPick = random2.randomPick;
  modules.shuffle = random2.shuffle;
  modules.keepTime = time2.keepTime;
  modules.sync = time2.sync;
  modules.cleanInlineStyles = styles2.cleanInlineStyles;
  modules.$ = targets2.registerTargets;
  modules.get = target2.get;
  modules.remove = target2.remove;
  modules.set = target2.set;
  modules.stagger = stagger2.stagger;
  modules.createMotionPath = motionpath2.createMotionPath;
  modules.createDrawable = drawable2.createDrawable;
  modules.morphTo = morphto2.morphTo;
  modules.TextSplitter = split2.TextSplitter;
  modules.split = split2.split;
  modules.splitText = split2.splitText;
  modules.scrambleText = scramble2.scrambleText;
  return modules;
}
var modulesExports = /* @__PURE__ */ requireModules();
export {
  modulesExports as m
};
