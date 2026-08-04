/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { render, screen, waitFor } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import ApplicationBreakpoints from '../preview-examples/application-breakpoints.vue';

describe('ApplicationBreakpoints - Radio Interaction', () => {
  it('should update application breakpoint to sm when small radio is selected', async () => {
    const { container } = render(ApplicationBreakpoints);
    const application = container.querySelector('ix-application');

    expect(application).toBeDefined();
    await waitFor(() => {
      expect(application?.classList.contains('breakpoint-md')).toBe(true);
    });

    const smRadio = await screen.findByRole('radio', { name: 'Small' });
    smRadio.click();

    await waitFor(() => {
      expect(application?.classList.contains('breakpoint-sm')).toBe(true);
    });
    expect(application?.classList.contains('breakpoint-md')).toBe(false);
  });
});
