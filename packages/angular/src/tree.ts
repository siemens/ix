/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
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
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';
import { TreeBaseDirective } from '@siemens/ix-angular/common';

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['context', 'model', 'root'],
})
@Component({
  selector: 'ix-tree',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['context', 'model', 'root'],
})
export class IxTree extends TreeBaseDirective {
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    super(c, r, z, proxyOutputs);
  }
}
