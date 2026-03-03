/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Injectable } from '@angular/core';
import { showModalLoading, ModalLoadingContext } from '@siemens/ix';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  /**
   * Displays a loading modal with a message
   */
  public showModalLoading(message: string): ModalLoadingContext {
    return showModalLoading(message);
  }
}
