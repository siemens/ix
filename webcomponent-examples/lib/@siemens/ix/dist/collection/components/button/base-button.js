/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const isPrimary = (variant) => {
  return variant.toUpperCase() === 'Primary'.toUpperCase();
};
const isSecondary = (variant) => {
  return variant.toUpperCase() === 'Secondary'.toUpperCase();
};
export const getButtonClasses = (variant, outline, ghost, iconOnly = false, iconOval = false, selected, disabled) => {
  return {
    'btn': true,
    'btn-primary': isPrimary(variant) && !outline && !ghost,
    'btn-outline-primary': isPrimary(variant) && outline && !ghost,
    'btn-invisible-primary': isPrimary(variant) && !outline && ghost,
    'btn-secondary': isSecondary(variant) && !outline && !ghost,
    'btn-outline-secondary': isSecondary(variant) && outline && !ghost,
    'btn-invisible-secondary': isSecondary(variant) && !outline && ghost,
    'btn-icon': iconOnly,
    'btn-oval': iconOval,
    'selected': isSecondary(variant) && (outline || ghost) && selected,
    'disabled': disabled,
  };
};
