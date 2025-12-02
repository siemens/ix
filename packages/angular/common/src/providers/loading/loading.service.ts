/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Injectable } from '@angular/core';
import { showModalLoading } from '@siemens/ix';

export type ModalLoadingContext = {
  update: (text: string) => string;
  finish: (text?: string, timeout?: number) => void;
};

@Injectable({ providedIn: 'root' })
export class LoadingService {
  public showModalLoading(message: string): ModalLoadingContext {
    return showModalLoading(message);
  }
}
