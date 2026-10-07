/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { describe, expect, it, vi } from 'vitest';
import { animate } from '../animate';

type FakeAnimation = {
  onfinish: (() => void) | null;
  cancel: ReturnType<typeof vi.fn>;
  commitStyles: ReturnType<typeof vi.fn>;
};

function withFakeAnimate(element: HTMLElement) {
  const animations: FakeAnimation[] = [];
  const animateSpy = vi.fn(() => {
    const animation: FakeAnimation = {
      onfinish: null,
      cancel: vi.fn(),
      commitStyles: vi.fn(),
    };
    animations.push(animation);
    return animation as unknown as Animation;
  });

  element.animate = animateSpy as unknown as HTMLElement['animate'];

  return { animateSpy, animations };
}

describe('animate', () => {
  it('passes keyframes and timing options to the Web Animations API', () => {
    const element = document.createElement('div');
    const { animateSpy } = withFakeAnimate(element);
    const keyframes = [{ opacity: 0 }, { opacity: 1 }];

    animate(element, keyframes, {
      duration: 100,
      delay: 20,
      easing: 'ease-in',
      iterations: 2,
    });

    expect(animateSpy).toHaveBeenCalledWith(keyframes, {
      duration: 100,
      delay: 20,
      easing: 'ease-in',
      iterations: 2,
      fill: 'both',
    });
  });

  it('calls onBegin synchronously and onComplete after finish', () => {
    const element = document.createElement('div');
    const { animations } = withFakeAnimate(element);
    const onBegin = vi.fn();
    const onComplete = vi.fn();

    animate(element, [{ opacity: 1 }], {
      duration: 100,
      onBegin,
      onComplete,
    });

    expect(onBegin).toHaveBeenCalledTimes(1);
    expect(onComplete).not.toHaveBeenCalled();

    animations[0].onfinish?.();

    expect(onComplete).toHaveBeenCalledTimes(1);
    expect(animations[0].cancel).toHaveBeenCalled();
  });

  it('persists the final keyframe values as inline styles', () => {
    const element = document.createElement('div');
    const { animations } = withFakeAnimate(element);

    animate(
      element,
      [
        { opacity: 0, maxHeight: '100px' },
        { opacity: 1, maxHeight: '0px', offset: 1 },
      ],
      { duration: 100 }
    );

    animations[0].onfinish?.();

    expect(element.style.opacity).toBe('1');
    expect(element.style.maxHeight).toBe('0px');
  });

  it('does not persist styles when persist is false', () => {
    const element = document.createElement('div');
    const { animations } = withFakeAnimate(element);

    animate(element, [{ opacity: 0 }, { opacity: 1 }], {
      duration: 100,
      persist: false,
    });

    animations[0].onfinish?.();

    expect(element.style.opacity).toBe('');
  });

  it('stops a running animation without calling onComplete', () => {
    const element = document.createElement('div');
    const { animations } = withFakeAnimate(element);
    const onComplete = vi.fn();

    const control = animate(element, [{ opacity: 1 }], {
      duration: 100,
      onComplete,
    });

    control.stop();
    animations[0].onfinish?.();

    expect(animations[0].commitStyles).toHaveBeenCalled();
    expect(animations[0].cancel).toHaveBeenCalled();
    expect(onComplete).not.toHaveBeenCalled();
  });

  it('replaces running animations with overlapping properties', () => {
    const element = document.createElement('div');
    const { animations } = withFakeAnimate(element);
    const firstComplete = vi.fn();
    const unrelatedComplete = vi.fn();

    animate(element, [{ opacity: 0 }], {
      duration: 100,
      onComplete: firstComplete,
    });
    animate(element, [{ width: '10px' }], {
      duration: 100,
      onComplete: unrelatedComplete,
    });
    animate(element, [{ opacity: 1 }], { duration: 100 });

    expect(animations[0].cancel).toHaveBeenCalled();
    expect(animations[1].cancel).not.toHaveBeenCalled();

    animations[0].onfinish?.();
    animations[1].onfinish?.();

    expect(firstComplete).not.toHaveBeenCalled();
    expect(unrelatedComplete).toHaveBeenCalledTimes(1);
  });

  it('applies final styles and completes asynchronously without Web Animations API support', async () => {
    const element = document.createElement('div');
    Object.defineProperty(element, 'animate', { value: undefined });
    const onComplete = vi.fn();

    animate(element, [{ opacity: 0 }, { opacity: 1 }], {
      duration: 100,
      onComplete,
    });

    expect(element.style.opacity).toBe('1');
    expect(onComplete).not.toHaveBeenCalled();

    await Promise.resolve();

    expect(onComplete).toHaveBeenCalledTimes(1);
  });
});
