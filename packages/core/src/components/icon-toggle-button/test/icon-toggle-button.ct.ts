/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { test } from '@utils/test';
import { expect } from '@playwright/test';
import { iconStar } from '@siemens/ix-icons/icons';

test.describe('Icon toggle button', () => {
  test('should not have class btn-oval when the oval attribute is not set', async ({
    mount,
    page,
  }) => {
    await mount(`<ix-icon-toggle-button icon="star"></ix-icon-toggle-button>`, {
      icons: { iconStar },
    });
    await expect(page.getByRole('button')).not.toHaveClass(/btn-oval/);
  });

  test('should have class btn-oval when the oval attribute is set', async ({
    mount,
    page,
  }) => {
    await mount(
      `<ix-icon-toggle-button icon="star" oval></ix-icon-toggle-button>`,
      {
        icons: { iconStar },
      }
    );
    await expect(page.getByRole('button')).toHaveClass(/btn-oval/);
  });
});
