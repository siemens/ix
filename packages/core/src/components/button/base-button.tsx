/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent, h } from '@stencil/core';
import { A11yAttributes } from '../utils/a11y';
import { ButtonVariant } from './button';

export type ButtonAlignment = 'center' | 'start';

export const getButtonClasses = (
  variant: ButtonVariant,
  iconOnly = false,
  iconOval = false,
  selected: boolean,
  disabled: boolean
) => {
  return {
    btn: true,

    'btn-primary': variant === 'primary',
    'btn-outline-primary': variant === 'secondary',
    'btn-invisible-primary': variant === 'tertiary',

    'btn-secondary': variant === 'subtle-primary',
    'btn-outline-secondary': variant === 'subtle-secondary',
    'btn-invisible-secondary': variant === 'subtle-tertiary',

    'btn-danger': variant === 'danger-primary',
    'btn-outline-danger': variant === 'danger-secondary',
    'btn-invisible-danger': variant === 'danger-tertiary',

    'btn-icon': iconOnly,
    'btn-oval': iconOval,
    selected: selected,
    disabled: disabled,
  };
};

export type BaseButtonProps = {
  type: string;
  variant: ButtonVariant;
  iconOnly: boolean;
  iconOval: boolean;
  selected: boolean;
  disabled: boolean;
  loading: boolean;
  icon?: string;
  iconRight?: string;
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

export const BaseButton: FunctionalComponent<BaseButtonProps> = (
  props: BaseButtonProps,
  children
) => {
  const extraClasses = props.extraClasses ?? {};

  const ariaAttributes = props.ariaAttributes ?? {};
  if (!ariaAttributes['aria-disabled'] && props.disabled) {
    ariaAttributes['aria-disabled'] = 'true';
  }

  return (
    <button
      {...ariaAttributes}
      onClick={(e: Event) => (props.onClick ? props.onClick(e) : undefined)}
      tabindex={props.disabled ? -1 : (props.tabIndex ?? 0)}
      type={props.type}
      class={{
        ...getButtonClasses(
          props.variant,
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
      {props.iconRight ? (
        <ix-icon
          class="icon-right"
          name={props.iconRight}
          size={props.iconSize as any}
          color={props.iconColor}
        ></ix-icon>
      ) : null}
      {props.afterContent ? props.afterContent : null}
    </button>
  );
};
