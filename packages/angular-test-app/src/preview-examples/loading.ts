/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { showModalLoading } from '@siemens/ix';

@Component({
  selector: 'app-example',
  template: ` <ix-button (click)="startLoading()">Start loading</ix-button> `,
})
export default class Loading {
  startLoading = () => {
    let count = 0;
    const progress = showModalLoading('Loading 0/2');
    const interval = setInterval(() => {
      count++;
      progress.update(`Loading ${count}/2`);

      if (count === 2) {
        progress.finish('Done');
        clearInterval(interval);
      }
    }, 1000);
  };
}
