// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { TemplateRef } from '@angular/core';
import { ToastConfig as IxToastConfig } from '@siemens/ix';

export type ToastConfig = Omit<IxToastConfig, 'message'> & {
  message: string | TemplateRef<any>;
};
