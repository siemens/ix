/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { h } from '@stencil/core';
import { BaseButton, BaseButtonProps } from '../button/base-button';

export function BaseIconButton(props: Omit<BaseButtonProps, 'type'>) {
  return <BaseButton {...props} type="button"></BaseButton>;
}
