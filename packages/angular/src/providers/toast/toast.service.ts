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

  /**
   * Gets the current toast position
   */
  public getPosition(): ToastPosition {
    return super.getPosition();
  }

  /**
   * Sets the current toast position
   */
  public setPosition(position: ToastPosition): void {
    super.setPosition(position);
  }

  /**
   * Shows the toast
   */
  public show(config: ToastConfig): Promise<ShowToastResult> {
    return super.show(config);
  }
}
