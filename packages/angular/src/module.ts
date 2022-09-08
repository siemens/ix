/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
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
export class CoreUIModule {
  static forRoot(): ModuleWithProviders<CoreUIModule> {
    return {
      ngModule: CoreUIModule,
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
