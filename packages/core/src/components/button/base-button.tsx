/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import { A11yAttributes } from '../utils/a11y';
import { ButtonVariant } from './button';

const isPrimary = (variant: string) => {
  return variant.toUpperCase() === 'Primary'.toUpperCase();
};

const isSecondary = (variant: string) => {
  return variant.toUpperCase() === 'Secondary'.toUpperCase();
};

export const getButtonClasses = (
  variant: ButtonVariant,
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
    selected: selected,
    disabled: disabled,
  };
};

export type BaseButtonProps = {
  type: string;
  variant: ButtonVariant;
  outline: boolean;
  ghost: boolean;
  iconOnly: boolean;
  iconOval: boolean;
  selected: boolean;
  disabled: boolean;
  loading: boolean;
  icon: string;
  onClick?: Function;
  ariaAttributes?: A11yAttributes;
  extraClasses?: { [key: string]: boolean };
  iconSize?: string;
  iconColor?: string;
};

export function BaseButton(props: BaseButtonProps, children) {
  const extraClasses = props.extraClasses ?? {};

  return (
    <button
      {...props.ariaAttributes}
      onClick={() => props.onClick()}
      tabindex={props.disabled ? -1 : 0}
      type={props.type}
      class={{
        ...getButtonClasses(
          props.variant,
          props.outline,
          props.ghost,
          props.iconOnly,
          props.iconOval,
          props.selected,
          props.disabled || props.loading
        ),
        ...extraClasses,
      }}
    >
      {props.loading ? <ix-spinner size="small" hideTrack></ix-spinner> : null}
      {props.icon && !props.loading ? (
        <ix-icon
          name={props.icon}
          size={props.iconSize as any}
          color={props.iconColor}
        ></ix-icon>
      ) : null}
      <div class={'content'}>{children}</div>
    </button>
  );
}
