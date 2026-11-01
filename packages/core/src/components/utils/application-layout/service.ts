/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Breakpoint, matchBreakpoint } from '../breakpoints';
import { debounce } from '../debounce';
import { TypedEvent } from '../typed-event';

class ApplicationLayoutService {
  // Keep order of breakpoints
  #supportedBreakpoints: Breakpoint[] = ['sm', 'md', 'lg'];
  #breakpointChangeListener = new TypedEvent<Breakpoint>();
  #breakpoint: Breakpoint = 'lg';

  #isDetectionEnabled = true;
  debouncedOnResize = debounce(this.onResize.bind(this), 50);

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.debouncedOnResize.bind(this));
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

  private onResize() {
    if (!this.#isDetectionEnabled) {
      return;
    }
    if (!this.#supportedBreakpoints) {
      return;
    }
    const matchBreakpoints: [Breakpoint, boolean][] = [];

    const breakpoints = this.#supportedBreakpoints;

    breakpoints.forEach((breakpoint) => {
      const match = matchBreakpoint(breakpoint);
      matchBreakpoints.push([breakpoint, match]);
    });

    if (matchBreakpoints.every(([, match]) => match === false)) {
      let breakPointIndex = 0;
      if (!this.#supportedBreakpoints.includes('lg')) {
        breakPointIndex = matchBreakpoints.length - 1;
      }

      const [breakpoint] = matchBreakpoints[breakPointIndex];
      this.emitDetectedBreakpoint(breakpoint);
      this.#breakpoint = breakpoint;
      return;
    }

    for (const [breakpoint, match] of matchBreakpoints.reverse()) {
      if (match) {
        this.emitDetectedBreakpoint(breakpoint);
        this.#breakpoint = breakpoint;
        break;
      }
    }
  }

  private emitDetectedBreakpoint(breakpoint: Breakpoint) {
    requestAnimationFrame(() => {
      // Detection may have been disabled (e.g. pinned menu or forced breakpoint)
      // while this emission was pending.
      if (!this.#isDetectionEnabled) {
        return;
      }
      this.#breakpointChangeListener.emit(breakpoint);
    });
  }

  public disableBreakpointDetection() {
    this.#isDetectionEnabled = false;
  }

  public enableBreakpointDetection() {
    this.#isDetectionEnabled = true;
  }

  public setBreakpoint(breakpoint: Breakpoint) {
    this.#breakpoint = breakpoint;
    this.#breakpointChangeListener.emit(breakpoint);
  }

  public setBreakpoints(breakpoints: Breakpoint[]) {
    this.#supportedBreakpoints = breakpoints;
    this.onResize();
  }
}

export const applicationLayoutService = new ApplicationLayoutService();
