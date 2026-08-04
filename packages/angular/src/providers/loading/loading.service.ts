/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Injectable } from '@angular/core';
import { LoadingService as BaseLoadingService } from '@siemens/ix-angular/common';

@Injectable({
  providedIn: 'root',
})
export class LoadingService extends BaseLoadingService {}
