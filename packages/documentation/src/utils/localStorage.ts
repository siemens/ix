/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SupportedFrameworks } from './useFramework';

export function getFrameworkSelection(): 'angular' | 'webcomponents' {
  const framework = localStorage.getItem('framework') as
    | 'angular'
    | 'webcomponents';
  if (framework === undefined) {
    localStorage.setItem('framework', 'angular');
    return 'angular';
  }

  return framework;
}

export function setFrameworkSelection(framework: SupportedFrameworks) {
  localStorage.setItem('framework', framework);
  window.dispatchEvent(new Event('storage'));
}
