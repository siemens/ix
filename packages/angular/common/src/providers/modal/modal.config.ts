/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TemplateRef, Type } from '@angular/core';
import { ModalConfig as IxModalConfig } from '@siemens/ix';

export type ModalConfig<TDATA = any> = Omit<IxModalConfig, 'content'> & {
  content: TemplateRef<unknown> | Type<unknown>;
  data?: TDATA;
};
