/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import anime from 'animejs';

export function shakeInput(input: HTMLInputElement) {
  const xMax = 5;
  anime({
    targets: input,
    duration: 200,
    easing: 'easeInOutSine',
    loop: 2,
    translateX: [
      {
        value: xMax * -1,
      },
      {
        value: xMax,
      },
      {
        value: xMax / -2,
      },
      {
        value: xMax / 2,
      },
      {
        value: 0,
      },
    ],
  });
}
