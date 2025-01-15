/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxTextValueAccessorDirective } from '../directives/control-value-accessors/text-value-accessor';
import { DOCUMENT } from '@angular/common';
import {
  APP_INITIALIZER,
  ModuleWithProviders,
  NgModule,
  NgZone,
} from '@angular/core';
import { appInitialize } from '../utils/app-initialize';
import { DIRECTIVES } from '../declare-components';
import { IxIcon } from '../ix-icon';
import { ModalService } from '../providers/modal';
import { ThemeService } from '../providers/theme';
import { ToastService } from '../providers/toast';
import * as tree from '../tree';
import { IxDropdownTriggerDirective } from '../directives/dropdown-trigger';
import { IxSelectValueAccessorDirective } from '../directives/control-value-accessors/select-value-accessor';
import { IxRadioValueAccessorDirective } from '../directives/control-value-accessors/radio-value-accessor';
import { IxBooleanValueAccessorDirective } from '../directives/control-value-accessors/boolean-value-accessor';
import { IxDateValueAccessorDirective } from '../directives/control-value-accessors';

const DECLARATIONS = [
  ...DIRECTIVES,
  tree.IxTree,
  IxIcon,
  IxDropdownTriggerDirective,
  IxTextValueAccessorDirective,
  IxSelectValueAccessorDirective,
  IxRadioValueAccessorDirective,
  IxBooleanValueAccessorDirective,
  IxDateValueAccessorDirective,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
})
export class IxModule {
  static forRoot(options?: {
    preloadIcons?: () => void;
  }): ModuleWithProviders<IxModule> {
    return {
      ngModule: IxModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: appInitialize(options?.preloadIcons),
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
