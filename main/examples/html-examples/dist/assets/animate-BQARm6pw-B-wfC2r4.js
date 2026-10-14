import { A as Animation } from "./animation-C2bTHF7D-HeOCyL6m.js";
const Easing = {
  linear: "linear",
  /** Matches the previous anime.js default easing `out(2)`. */
  easeOutQuad: "cubic-bezier(0.33, 0.67, 0.67, 1)",
  easeInOutSine: "cubic-bezier(0.37, 0, 0.63, 1)"
};
const NON_STYLE_KEYS = /* @__PURE__ */ new Set(["offset", "easing", "composite"]);
const runningAnimations = /* @__PURE__ */ new WeakMap();
const toCssProperty = (property) => property.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`);
function getFinalStyles(keyframes) {
  const finalStyles = /* @__PURE__ */ new Map();
  keyframes.forEach((keyframe) => {
    Object.entries(keyframe).forEach(([property, value]) => {
      if (NON_STYLE_KEYS.has(property) || value === null || value === void 0) {
        return;
      }
      finalStyles.set(property, String(value));
    });
  });
  return finalStyles;
}
function applyStyles(element, styles) {
  styles.forEach((value, property) => element.style.setProperty(toCssProperty(property), value));
}
function stopOverlappingAnimations(element, properties) {
  runningAnimations.get(element)?.forEach((running) => {
    const overlaps = [...properties].some((property) => running.properties.has(property));
    if (overlaps) {
      running.stop();
    }
  });
}
function register(element, running) {
  let animations = runningAnimations.get(element);
  if (!animations) {
    animations = /* @__PURE__ */ new Set();
    runningAnimations.set(element, animations);
  }
  animations.add(running);
}
function unregister(element, running) {
  runningAnimations.get(element)?.delete(running);
}
function animate(element, keyframes, options) {
  const reducedMotion = Animation.prefersReducedMotion();
  const { duration: requestedDuration, delay: requestedDelay = 0, easing = Easing.linear, iterations = 1, persist = true, onBegin, onComplete } = options;
  const duration = reducedMotion ? 0 : requestedDuration;
  const delay = reducedMotion ? 0 : requestedDelay;
  const finalStyles = getFinalStyles(keyframes);
  const properties = new Set(finalStyles.keys());
  stopOverlappingAnimations(element, properties);
  onBegin?.();
  let done = false;
  if (typeof element.animate !== "function") {
    const running2 = {
      properties,
      stop: () => {
        done = true;
        unregister(element, running2);
      }
    };
    register(element, running2);
    if (persist) {
      applyStyles(element, finalStyles);
    }
    Promise.resolve().then(() => {
      if (done) {
        return;
      }
      done = true;
      unregister(element, running2);
      onComplete?.();
    });
    return { stop: running2.stop };
  }
  const animation = element.animate(keyframes, {
    duration,
    delay,
    easing,
    iterations,
    fill: "both"
  });
  const running = {
    properties,
    stop: () => {
      if (done) {
        return;
      }
      done = true;
      unregister(element, running);
      try {
        animation.commitStyles();
      } catch {
      }
      animation.cancel();
    }
  };
  register(element, running);
  animation.onfinish = () => {
    if (done) {
      return;
    }
    done = true;
    unregister(element, running);
    if (persist) {
      applyStyles(element, finalStyles);
    }
    animation.cancel();
    onComplete?.();
  };
  return { stop: running.stop };
}
export {
  Easing as E,
  animate as a
};
