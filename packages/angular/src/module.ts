// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { DOCUMENT } from '@angular/common';
import {
    APP_INITIALIZER,
    ModuleWithProviders,
    NgModule,
    NgZone
} from '@angular/core';
import { appInitialize } from './app-initialize';
import { DIRECTIVES } from './declare-components';
import { ModalService } from './modal';
import { ToastService } from './toast';
import * as tree from './tree';
const DECLARATIONS = [...DIRECTIVES, tree.IxTree];

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
        ToastService,
      ],
    };
  }
}
