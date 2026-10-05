/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { TRAP_FOCUS_INCLUDE_ATTRIBUTE } from '../utils/focus/focus-trap';
import type { ConfirmationFooterLayout } from './confirmation-footer.types';

/**
 * Footer of the date and time pickers. Shows a single done button, or cancel
 * and confirm buttons when `requireConfirmation` is enabled.
 *
 * @internal
 */
@Component({
  tag: 'ix-confirmation-footer',
  styleUrl: 'confirmation-footer.scss',
  shadow: true,
})
export class ConfirmationFooter {
  /**
   * Show cancel and confirm buttons instead of the single done button.
   */
  @Prop() requireConfirmation = false;

  /**
   * Text of the done button shown when `requireConfirmation` is disabled.
   */
  @Prop({ attribute: 'i18n-done' }) i18nDone = 'Done';

  /**
   * Text of the confirm button shown when `requireConfirmation` is enabled.
   */
  @Prop({ attribute: 'i18n-confirm' }) i18nConfirm = 'Confirm';

  /**
   * Text of the cancel button shown when `requireConfirmation` is enabled.
   */
  @Prop({ attribute: 'i18n-cancel' }) i18nCancel = 'Cancel';

  /**
   * Disable the done or confirm button.
   */
  @Prop() primaryActionDisabled = false;

  /**
   * Button layout:
   * - `end`: buttons aligned to the end
   * - `center`: buttons stacked and centered
   * - `full-width`: buttons stretched across the full width
   * - `responsive`: `end`, switching to `full-width` on small screens
   */
  @Prop() layout: ConfirmationFooterLayout = 'end';

  /**
   * Emitted when the done button is clicked (`requireConfirmation` disabled). Does not bubble outside parent's shadow root.
   */
  @Event({ bubbles: false, composed: false }) doneClick!: EventEmitter<void>;

  /**
   * Emitted when the confirm button is clicked (`requireConfirmation` enabled). Does not bubble outside parent's shadow root.
   */
  @Event({ bubbles: false, composed: false }) confirmClick!: EventEmitter<void>;

  /**
   * Emitted when the cancel button is clicked. Does not bubble outside parent's shadow root.
   */
  @Event({ bubbles: false, composed: false }) cancelClick!: EventEmitter<void>;

  render() {
    return (
      <Host
        class={`layout-${this.layout}`}
        {...{ [TRAP_FOCUS_INCLUDE_ATTRIBUTE]: true }}
      >
        {this.requireConfirmation && (
          <ix-button
            data-testid="cancel"
            variant="subtle-primary"
            onClick={() => this.cancelClick.emit()}
          >
            {this.i18nCancel}
          </ix-button>
        )}
        <ix-button
          data-testid="confirm"
          disabled={this.primaryActionDisabled}
          onClick={() =>
            this.requireConfirmation
              ? this.confirmClick.emit()
              : this.doneClick.emit()
          }
        >
          {this.requireConfirmation ? this.i18nConfirm : this.i18nDone}
        </ix-button>
      </Host>
    );
  }
}
