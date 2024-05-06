/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
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
import type { Components } from '@siemens/ix';
import { ProxyCmp } from './angular-component-lib/utils';

export declare interface IxIcon extends Components.IxIcon {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'name', 'size'],
})
@Component({
  selector: 'ix-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'name', 'size'],
})
export class IxIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
