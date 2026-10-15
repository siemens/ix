/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { h } from '@stencil/core';
import type { ConfirmationFooterLayout } from './confirmation-footer.types';

type ConfirmationFooterProps = {
  /**
   * Show cancel and confirm buttons instead of the single done button.
   */
  requireConfirmation?: boolean;

  /**
   * Text of the done button shown when `requireConfirmation` is disabled.
   */
  i18nDone?: string;

  /**
   * Text of the confirm button shown when `requireConfirmation` is enabled.
   */
  i18nConfirm?: string;

  /**
   * Text of the cancel button shown when `requireConfirmation` is enabled.
   */
  i18nCancel?: string;

  /**
   * Disable the done or confirm button.
   */
  primaryActionDisabled?: boolean;

  /**
   * Button layout:
   * - `end`: buttons aligned to the end
   * - `center`: buttons stacked and centered
   * - `full-width`: buttons stretched across the full width
   * - `responsive`: `end`, switching to `full-width` on small screens
   */
  layout?: ConfirmationFooterLayout;

  /**
   * Slot the footer is rendered into.
   */
  slot?: string;

  /**
   * Additional classes of the footer container.
   */
  class?: string;

  /**
   * Called when the done button is clicked (`requireConfirmation` disabled).
   */
  onDone?: () => void;

  /**
   * Called when the confirm button is clicked (`requireConfirmation` enabled).
   */
  onConfirm?: () => void;

  /**
   * Called when the cancel button is clicked.
   */
  onCancel?: () => void;
};

/**
 * Footer with a single done button, or cancel and confirm buttons when
 * `requireConfirmation` is enabled.
 *
 * Important: Also include the confirmation footer mixin in the host component's scss file.
 */
export const ConfirmationFooter = ({
  requireConfirmation = false,
  i18nDone = 'Done',
  i18nConfirm = 'Confirm',
  i18nCancel = 'Cancel',
  primaryActionDisabled = false,
  layout = 'end',
  slot,
  class: className,
  onDone,
  onConfirm,
  onCancel,
}: ConfirmationFooterProps) => {
  return (
    <div
      slot={slot}
      class={{
        'confirmation-footer': true,
        [`layout-${layout}`]: true,
        ...(className ? { [className]: true } : {}),
      }}
    >
      {requireConfirmation && (
        <ix-button
          data-testid="cancel"
          variant="subtle-primary"
          onClick={() => onCancel?.()}
        >
          {i18nCancel}
        </ix-button>
      )}
      <ix-button
        data-testid="confirm"
        disabled={primaryActionDisabled}
        onClick={() => (requireConfirmation ? onConfirm?.() : onDone?.())}
      >
        {requireConfirmation ? i18nConfirm : i18nDone}
      </ix-button>
    </div>
  );
};
