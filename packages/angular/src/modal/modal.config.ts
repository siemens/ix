/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TemplateRef } from '@angular/core';

export interface ModalConfig<TDATA = any> {
  content: TemplateRef<any>;
  data?: TDATA;
}
