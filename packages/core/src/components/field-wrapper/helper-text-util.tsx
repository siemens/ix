/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import {
  iconError,
  iconInfo,
  iconSuccess,
  iconWarning,
} from '@siemens/ix-icons/icons';

export function hasAnyText({
  invalidText,
  warningText,
  infoText,
  validText,
  helperText,
}: {
  invalidText?: string;
  warningText?: string;
  infoText?: string;
  validText?: string;
  helperText?: string;
}) {
  return invalidText || warningText || infoText || validText || helperText;
}

export function HelperText({
  isInvalid,
  invalidText,
  isWarning,
  warningText,
  isInfo,
  infoText,
  isValid,
  validText,
  helperText,
}: {
  isInvalid: boolean;
  invalidText?: string;
  isWarning: boolean;
  warningText?: string;
  isInfo: boolean;
  infoText?: string;
  isValid: boolean;
  validText?: string;
  helperText?: string;
}) {
  if (isInvalid && invalidText !== undefined) {
    return (
      <ix-typography textColor="alarm" class="bottom-text">
        <ix-icon class="text-icon invalid" name={iconError} size="16"></ix-icon>

        {invalidText}
      </ix-typography>
    );
  }

  if (isWarning && warningText !== undefined) {
    return (
      <ix-typography textColor="std" class="bottom-text">
        <ix-icon
          class="text-icon warning"
          name={iconWarning}
          size="16"
        ></ix-icon>
        {warningText}
      </ix-typography>
    );
  }

  if (isInfo && infoText !== undefined) {
    return (
      <ix-typography textColor="std" class="bottom-text">
        <ix-icon class="text-icon info" name={iconInfo} size="16"></ix-icon>
        {infoText}
      </ix-typography>
    );
  }

  if (isValid && validText !== undefined) {
    return (
      <ix-typography textColor="std" class="bottom-text">
        <ix-icon class="text-icon valid" name={iconSuccess} size="16"></ix-icon>
        {validText}
      </ix-typography>
    );
  }

  return (
    helperText && (
      <ix-typography class="bottom-text" textColor="soft">
        {helperText}
      </ix-typography>
    )
  );
}
