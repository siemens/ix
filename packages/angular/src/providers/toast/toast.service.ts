/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Injectable } from '@angular/core';
import { ShowToastResult, ToastPosition } from '@siemens/ix';
import {
  ToastService as BaseToastService,
  ToastConfig,
} from '@siemens/ix-angular/common';

@Injectable({
  providedIn: 'root',
})
export class ToastService extends BaseToastService {
  constructor() {
    super();
  }

  public getPosition(): ToastPosition {
    return super.getPosition();
  }

  public setPosition(position: ToastPosition): void {
    super.setPosition(position);
  }

  public show(config: ToastConfig): Promise<ShowToastResult> {
    return super.show(config);
  }
}
