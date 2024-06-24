/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { DOCUMENT } from '@angular/common';
import {
  APP_INITIALIZER,
  ModuleWithProviders,
  NgModule,
  NgZone,
} from '@angular/core';
import { appInitialize } from './app-initialize';
import { DIRECTIVES } from './declare-components';
import { IxDropdownTriggerDirective } from './dropdown/trigger.directive';
import { IxIcon } from './ix-icon';
import { ModalService } from './modal';
import { SelectValueAccessor } from './select-value-accessor';
import { BooleanValueAccessor } from './boolean-value-accessor';
import { ThemeService } from './theme';
import { ToastService } from './toast';
import * as tree from './tree';

const DECLARATIONS = [
  ...DIRECTIVES,
  tree.IxTree,
  IxDropdownTriggerDirective,
  IxIcon,
  SelectValueAccessor,
  BooleanValueAccessor,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
})
export class IxModule {
  static forRoot(): ModuleWithProviders<IxModule> {
    return {
      ngModule: IxModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: appInitialize,
          multi: true,
          deps: [DOCUMENT, NgZone],
        },
        ModalService,
        ThemeService,
        ToastService,
      ],
    };
  }
}
