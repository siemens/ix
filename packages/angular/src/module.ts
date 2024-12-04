/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { TextValueAccessorDirective } from './control-value-accessors/text-value-accessor';
import { DOCUMENT } from '@angular/common';
import {
  APP_INITIALIZER,
  ModuleWithProviders,
  NgModule,
  NgZone,
} from '@angular/core';
import { appInitialize } from './app-initialize';
import { DIRECTIVES } from './declare-components';
import { IxIcon } from './ix-icon';
import { ModalService } from './modal';
import { ThemeService } from './theme';
import { ToastService } from './toast';
import * as tree from './tree';
import { IxDropdownTriggerDirective } from './directives/dropdown/trigger.directive';
import { SelectValueAccessorDirective } from './control-value-accessors/select-value-accessor';
import { RadioValueAccessorDirective } from './control-value-accessors/radio-value-accessor';
import { BooleanValueAccessorDirective } from './control-value-accessors/boolean-value-accessor';
import { DateValueAccessorDirective } from './control-value-accessors';
const DECLARATIONS = [
  ...DIRECTIVES,
  tree.IxTree,
  IxIcon,
  IxDropdownTriggerDirective,
  TextValueAccessorDirective,
  SelectValueAccessorDirective,
  RadioValueAccessorDirective,
  BooleanValueAccessorDirective,
  DateValueAccessorDirective,
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
