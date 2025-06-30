/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonVariant } from './button';

export interface IxButtonComponent {
  /**
   * Annotate with @Prop() decorator
   */
  variant: ButtonVariant;

  /**
   * Annotate with @Prop() decorator
   */
  outline: boolean;

  /**
   * Annotate with @Prop() decorator
   */
  ghost: boolean;

  /**
   * Annotate with @Prop({ reflect: true }) decorator
   */
  disabled: boolean;

  /**
   * Annotate with @Prop() decorator
   */
  type: 'button' | 'submit';

  /**
   * Annotate with @Prop() decorator
   */
  loading: boolean;

  /**
   * Annotate with @Prop() decorator
   */
  icon?: string;

  /**
   * Annotate with @Prop() decorator
   */
  ariaLabel?: string;
}
