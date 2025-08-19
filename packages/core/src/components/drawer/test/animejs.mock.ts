/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
jest.mock('animejs', () => {
  const mockAnimate = jest.fn(() => ({
    finished: Promise.resolve(),
    play: jest.fn(),
    pause: jest.fn(),
    restart: jest.fn(),
  }));

  return {
    __esModule: true,
    default: mockAnimate,
    animate: mockAnimate,
    timeline: jest.fn(() => ({
      add: jest.fn().mockReturnThis(),
      finished: Promise.resolve(),
    })),
  };
});
