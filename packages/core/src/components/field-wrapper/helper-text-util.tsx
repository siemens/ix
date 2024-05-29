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

export function renderHelperText({
  isInvalid,
  errorText,
  isWarning,
  warningText,
  isInfo,
  infoText,
  isValid,
  validText,
  helperText,
}: {
  isInvalid: boolean;
  errorText: string;
  isWarning: boolean;
  warningText: string;
  isInfo: boolean;
  infoText: string;
  isValid: boolean;
  validText: string;
  helperText: string;
}) {
  if (isInvalid && errorText) {
    return (
      <ix-typography color="alarm" class="bottom-text">
        <ix-icon class="text-icon" name={iconError} size="16"></ix-icon>

        {errorText}
      </ix-typography>
    );
  }

  if (isWarning && warningText) {
    return (
      <ix-typography color="std" class="bottom-text">
        <ix-icon
          class="text-icon warning"
          name={iconWarning}
          size="16"
        ></ix-icon>
        {warningText}
      </ix-typography>
    );
  }

  if (isInfo && infoText) {
    return (
      <ix-typography color="std" class="bottom-text">
        <ix-icon class="text-icon info" name={iconInfo} size="16"></ix-icon>
        {infoText}
      </ix-typography>
    );
  }

  if (isValid && validText) {
    return (
      <ix-typography color="std" class="bottom-text">
        <ix-icon class="text-icon valid" name={iconSuccess} size="16"></ix-icon>
        {validText}
      </ix-typography>
    );
  }

  return (
    helperText && (
      <ix-typography class="bottom-text">{helperText}</ix-typography>
    )
  );
}
