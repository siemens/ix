/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const isPrimary = (variant: string) => {
  return variant.toUpperCase() === 'Primary'.toUpperCase();
};

const isSecondary = (variant: string) => {
  return variant.toUpperCase() === 'Secondary'.toUpperCase();
};

export const getButtonClasses = (
  variant: 'Primary' | 'Secondary',
  outline: boolean,
  ghost: boolean,
  iconOnly = false,
  iconOval = false,
  selected: boolean,
  disabled: boolean
) => {
  return {
    btn: true,
    'btn-primary': isPrimary(variant) && !outline && !ghost,
    'btn-outline-primary': isPrimary(variant) && outline && !ghost,
    'btn-invisible-primary': isPrimary(variant) && !outline && ghost,
    'btn-secondary': isSecondary(variant) && !outline && !ghost,
    'btn-outline-secondary': isSecondary(variant) && outline && !ghost,
    'btn-invisible-secondary': isSecondary(variant) && !outline && ghost,
    'btn-icon': iconOnly,
    'btn-oval': iconOval,
    selected: isSecondary(variant) && (outline || ghost) && selected,
    disabled: disabled,
    'btn-slot-gap': true,
  };
};
