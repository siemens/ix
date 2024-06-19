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

export type ButtonAlignment = 'center' | 'start';

const isDanger = (variant: string) => {
  return variant.toUpperCase() === 'Danger'.toUpperCase();
};

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
    'btn-danger': isDanger(variant) && !outline && !ghost,
    'btn-outline-danger': isDanger(variant) && outline && !ghost,
    'btn-invisible-danger': isDanger(variant) && !outline && ghost,
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
  alignment?: ButtonAlignment;
  tabIndex?: number;
  afterContent?: any;
};

const getSpinnerSize = (btnProps: BaseButtonProps) => {
  if (!btnProps.icon) {
    return 'small';
  }

  switch (btnProps.iconSize) {
    case '12':
      return 'xx-small';
    case '16':
      return 'x-small';
    default:
      return 'small';
  }
};

export function BaseButton(props: BaseButtonProps, children) {
  const extraClasses = props.extraClasses ?? {};

  const ariaAttributes = props.ariaAttributes ?? {};
  if (!ariaAttributes['aria-disabled'] && props.disabled) {
    ariaAttributes['aria-disabled'] = 'true';
  }

  return (
    <button
      {...ariaAttributes}
      onClick={(e: Event) => (props.onClick ? props.onClick(e) : undefined)}
      tabindex={props.disabled ? -1 : props.tabIndex ?? 0}
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
      {props.loading ? (
        <ix-spinner size={getSpinnerSize(props)} hideTrack></ix-spinner>
      ) : null}
      {props.icon && !props.loading ? (
        <ix-icon
          class="icon"
          name={props.icon}
          size={props.iconSize as any}
          color={props.iconColor}
        ></ix-icon>
      ) : null}
      <div
        class={{
          content: true,
          [`content-${props.alignment}`]: !!props.alignment,
        }}
      >
        {children}
      </div>
      {props.afterContent ? props.afterContent : null}
    </button>
  );
}
