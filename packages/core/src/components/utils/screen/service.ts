/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { TypedEvent } from '../typed-event';
import { createModeListener, Mode } from './mode';

class ScreenMode {
  #modeChangeListener = new TypedEvent<Mode>();
  #mode: Mode = 'large';

  constructor() {
    createModeListener((mode) => {
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
}

export const screenMode = new ScreenMode();
