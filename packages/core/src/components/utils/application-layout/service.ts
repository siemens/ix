/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Breakpoint, matchBreakpoint } from '../breakpoints';
import { TypedEvent } from '../typed-event';

class ApplicationLayoutService {
  // Keep order of breakpoints
  #supportedBreakpoints: Breakpoint[] = ['sm', 'md', 'lg'];
  #breakpointChangeListener = new TypedEvent<Breakpoint>();
  #breakpoint: Breakpoint = 'lg';

  #isDetectionEnabled = true;

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.onResize.bind(this));
      this.onResize();
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
    this.#supportedBreakpoints.forEach((breakpoint) => {
      const match = matchBreakpoint(breakpoint);
      matchBreakpoints.push([breakpoint, match]);
    });

    if (matchBreakpoints.every(([_, match]) => match === false)) {
      this.#breakpointChangeListener.emit(this.#supportedBreakpoints[0]);
      this.#breakpoint = this.#supportedBreakpoints[0];
      return;
    }

    for (const [breakpoint, match] of matchBreakpoints.reverse()) {
      if (match) {
        this.#breakpointChangeListener.emit(breakpoint);
        this.#breakpoint = breakpoint;
        break;
      }
    }
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
