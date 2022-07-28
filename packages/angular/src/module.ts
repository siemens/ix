/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { DOCUMENT } from '@angular/common';
import { APP_INITIALIZER, ModuleWithProviders, NgModule, NgZone } from '@angular/core';
import { appInitialize } from './app-initialize';
import { DIRECTIVES } from './declare-components';
const DECLARATIONS = [...DIRECTIVES];

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
      ],
    };
  }
}
