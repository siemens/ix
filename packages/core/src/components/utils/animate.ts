/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const Easing = {
  linear: 'linear',
  easeInSine: 'cubic-bezier(0.12, 0, 0.39, 0)',
  easeOutSine: 'cubic-bezier(0.61, 1, 0.88, 1)',
  easeInOutSine: 'cubic-bezier(0.37, 0, 0.63, 1)',
} as const;

export interface AnimateOptions {
  duration: number;
  delay?: number;
  easing?: string;
  iterations?: number;
  /**
   * Write the final keyframe values as inline styles once the animation
   * finished. Defaults to `true`.
   */
  persist?: boolean;
  /** Called synchronously before the animation starts. */
  onBegin?: () => void;
  /** Called after the animation finished. Not called if it was stopped. */
  onComplete?: () => void;
}

export interface AnimationControl {
  /**
   * Stop the animation at its current state. The current values are kept as
   * inline styles and `onComplete` is not called.
   */
  stop(): void;
}

interface RunningAnimation {
  properties: Set<string>;
  stop(): void;
}

const NON_STYLE_KEYS = new Set(['offset', 'easing', 'composite']);
const runningAnimations = new WeakMap<HTMLElement, Set<RunningAnimation>>();

const toCssProperty = (property: string) =>
  property.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`);

function getFinalStyles(keyframes: Keyframe[]) {
  const finalStyles = new Map<string, string>();

  keyframes.forEach((keyframe) => {
    Object.entries(keyframe).forEach(([property, value]) => {
      if (
        NON_STYLE_KEYS.has(property) ||
        value === null ||
        value === undefined
      ) {
        return;
      }

      finalStyles.set(property, String(value));
    });
  });

  return finalStyles;
}

function applyStyles(element: HTMLElement, styles: Map<string, string>) {
  styles.forEach((value, property) =>
    element.style.setProperty(toCssProperty(property), value)
  );
}

function stopOverlappingAnimations(
  element: HTMLElement,
  properties: Set<string>
) {
  runningAnimations.get(element)?.forEach((running) => {
    const overlaps = [...properties].some((property) =>
      running.properties.has(property)
    );

    if (overlaps) {
      running.stop();
    }
  });
}

function register(element: HTMLElement, running: RunningAnimation) {
  let animations = runningAnimations.get(element);

  if (!animations) {
    animations = new Set();
    runningAnimations.set(element, animations);
  }

  animations.add(running);
}

function unregister(element: HTMLElement, running: RunningAnimation) {
  runningAnimations.get(element)?.delete(running);
}

/**
 * Animate an element with the Web Animations API.
 *
 * Starting an animation stops all running animations of the same element
 * that animate at least one of the same properties.
 */
export function animate(
  element: HTMLElement,
  keyframes: Keyframe[],
  options: AnimateOptions
): AnimationControl {
  const {
    duration,
    delay = 0,
    easing = Easing.linear,
    iterations = 1,
    persist = true,
    onBegin,
    onComplete,
  } = options;

  const finalStyles = getFinalStyles(keyframes);
  const properties = new Set(finalStyles.keys());

  stopOverlappingAnimations(element, properties);

  onBegin?.();

  let done = false;

  if (typeof element.animate !== 'function') {
    const running: RunningAnimation = {
      properties,
      stop: () => {
        done = true;
        unregister(element, running);
      },
    };

    register(element, running);

    if (persist) {
      applyStyles(element, finalStyles);
    }

    Promise.resolve().then(() => {
      if (done) {
        return;
      }

      done = true;
      unregister(element, running);
      onComplete?.();
    });

    return { stop: running.stop };
  }

  const animation = element.animate(keyframes, {
    duration,
    delay,
    easing,
    iterations,
    fill: 'both',
  });

  const running: RunningAnimation = {
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
        // `commitStyles` throws if the element is not rendered
      }

      animation.cancel();
    },
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
