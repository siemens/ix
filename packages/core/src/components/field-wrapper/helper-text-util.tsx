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
  return [invalidText, warningText, infoText, validText, helperText].some(
    (text) => text?.trim()
  );
}

export function HelperText(
  props: Readonly<{
    isInvalid: boolean;
    invalidText?: string;
    isWarning: boolean;
    warningText?: string;
    isInfo: boolean;
    infoText?: string;
    isValid: boolean;
    validText?: string;
    helperText?: string;
  }>
) {
  if (!hasAnyText(props)) return null;
  if (props.isInvalid && props.invalidText && props.invalidText.trim() !== '') {
    return (
      <ix-typography textColor="alarm" class="bottom-text">
        <ix-icon class="text-icon invalid" name={iconError} size="16"></ix-icon>
        {props.invalidText}
      </ix-typography>
    );
  }

  if (props.isWarning && props.warningText && props.warningText.trim() !== '') {
    return (
      <ix-typography textColor="std" class="bottom-text">
        <ix-icon
          class="text-icon warning"
          name={iconWarning}
          size="16"
        ></ix-icon>
        {props.warningText}
      </ix-typography>
    );
  }

  if (props.isInfo && props.infoText && props.infoText.trim() !== '') {
    return (
      <ix-typography textColor="std" class="bottom-text">
        <ix-icon class="text-icon info" name={iconInfo} size="16"></ix-icon>
        {props.infoText}
      </ix-typography>
    );
  }

  if (props.isValid && props.validText && props.validText.trim() !== '') {
    return (
      <ix-typography textColor="std" class="bottom-text">
        <ix-icon class="text-icon valid" name={iconSuccess} size="16"></ix-icon>
        {props.validText}
      </ix-typography>
    );
  }

  return (
    props.helperText &&
    props.helperText.trim() !== '' && (
      <ix-typography class="bottom-text" textColor="soft">
        {props.helperText}
      </ix-typography>
    )
  );
}
