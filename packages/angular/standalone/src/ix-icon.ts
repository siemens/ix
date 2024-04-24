/* tslint:disable */
/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ElementRef,
  NgZone,
} from '@angular/core';
import { defineCustomElements } from '@siemens/ix-icons/loader';
import { ProxyCmp } from './directives/angular-component-lib/utils';

defineCustomElements();

@ProxyCmp({
  inputs: ['color', 'size', 'name', 'lazyLoading'],
})
@Component({
  selector: 'ix-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'size', 'name', 'lazyLoading'],
  standalone: true,
})
export class IxIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
