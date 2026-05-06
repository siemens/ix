/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
} from '@angular/core';
import {
  TabPanelBaseDirective,
  TabPanelsBaseDirective,
} from '@siemens/ix-angular/common';
import type { Components } from '@siemens/ix';
import { defineCustomElement as defineIxTabPanel } from '@siemens/ix/components/ix-tab-panel.js';
import { defineCustomElement as defineIxTabPanels } from '@siemens/ix/components/ix-tab-panels.js';
import { ProxyCmp } from './angular-component-lib/utils';

@ProxyCmp({
  defineCustomElementFn: defineIxTabPanel,
  inputs: ['tabKey'],
})
@Component({
  selector: 'ix-tab-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-template #contentTemplate>
      <ng-content></ng-content>
    </ng-template>
    <ng-container #contentOutlet></ng-container>
  `,
  inputs: [{ name: 'tabKey', required: true }],
})
export class IxTabPanel extends TabPanelBaseDirective {
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    super(c, r, z);
  }
}

export declare interface IxTabPanel extends Components.IxTabPanel {}

@ProxyCmp({
  defineCustomElementFn: defineIxTabPanels,
})
@Component({
  selector: 'ix-tab-panels',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: [],
})
export class IxTabPanels extends TabPanelsBaseDirective {
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    super(c, r, z);
  }
}

export declare interface IxTabPanels extends Components.IxTabPanels {}
