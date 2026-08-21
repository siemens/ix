/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IxButton, showMessage } from '@siemens/ix-vue';
import { render, waitFor } from '@testing-library/vue';
import { defineComponent } from 'vue';
import { describe, expect, it } from 'vitest';

const MessageComponent = defineComponent({
  components: {
    IxButton,
  },
  setup() {
    const triggerMessage = async () => {
      (
        await showMessage.success(
          'Example title',
          'message',
          'Save',
          'Cancel',
          'payload:save',
          'payload:cancel'
        )
      ).once(() => {});
    };

    return {
      triggerMessage,
    };
  },
  template: `
    <IxButton @click="triggerMessage">Show 'success' message</IxButton>
  `,
});

describe('Message Events', () => {
  it('should remove message modal from DOM after close (validates camelCase event handling)', async () => {
    const { findByText, getByText } = render(MessageComponent);
    const button = getByText("Show 'success' message");
    button.click();

    await customElements.whenDefined('ix-modal');
    await waitFor(() => {
      const modal = document.querySelector('ix-modal');
      expect(modal).not.toBeNull();
    });

    const cancelButton = await findByText('Cancel');
    cancelButton.click();

    await waitFor(() => {
      const modal = document.querySelector('ix-modal');
      expect(modal).toBeNull();
    });
  });
});
