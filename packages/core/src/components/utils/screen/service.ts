/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { TypedEvent } from '../typed-event';
import { createModeListener, Mode, setSupportedModes } from './mode';

class ScreenMode {
  #modeChangeListener = new TypedEvent<Mode>();
  #mode: Mode = 'large';

  #isDetectionEnabled = true;

  constructor() {
    createModeListener((mode) => {
      if (!this.#isDetectionEnabled) {
        return;
      }

      this.#modeChangeListener.emit(mode);
      this.#mode = mode;
    });
  }

  get mode() {
    return this.#mode;
  }

  get onChange() {
    return this.#modeChangeListener;
  }

  get isDetectionEnabled() {
    return this.#isDetectionEnabled;
  }

  public disableModeDetection() {
    this.#isDetectionEnabled = false;
  }

  public enableModeDetection() {
    this.#isDetectionEnabled = true;
  }

  public setMode(mode: Mode) {
    this.#mode = mode;
    this.#modeChangeListener.emit(mode);
  }

  public setSupportedMods(mode: Mode[]) {
    setSupportedModes(mode);
  }
}

export const screenMode = new ScreenMode();
