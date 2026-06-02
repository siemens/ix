/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { vi } from 'vitest';

vi.mock('animejs', () => {
  const mockAnimate = vi.fn(() => ({
    finished: Promise.resolve(),
    play: vi.fn(),
    pause: vi.fn(),
    restart: vi.fn(),
  }));

  return {
    __esModule: true,
    default: mockAnimate,
    animate: mockAnimate,
    timeline: vi.fn(() => ({
      add: vi.fn().mockReturnThis(),
      finished: Promise.resolve(),
    })),
  };
});
