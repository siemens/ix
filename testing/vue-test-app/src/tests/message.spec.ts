/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { render, waitFor } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import MessageComponent from '../preview-examples/message.vue';

describe('Message Events', () => {
  it('should remove message modal from DOM after close (validates camelCase event handling)', async () => {
    const { getByText } = render(MessageComponent);
    const button = getByText("Show 'success' message");
    button.click();

    await customElements.whenDefined('ix-modal');
    await waitFor(() => {
      const modal = document.querySelector('ix-modal');
      expect(modal).toBeDefined();
    });

    const cancelButton = getByText('Cancel');
    cancelButton.click();

    await waitFor(() => {
      const modal = document.querySelector('ix-modal');
      expect(modal).toBeNull();
    });
  });
});
