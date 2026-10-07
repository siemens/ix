/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { animate, Easing } from '../utils/animate';
import Animation from '../utils/animation';

export function shakeInput(input: HTMLInputElement) {
  const xMax = 5;
  const translateX = [0, -xMax, xMax, -xMax / 2, xMax / 2, 0];

  animate(
    input,
    translateX.map((x) => ({ transform: `translateX(${x}px)` })),
    {
      duration: Animation.defaultTime,
      easing: Easing.easeInOutSine,
      iterations: 3,
      persist: false,
    }
  );
}
