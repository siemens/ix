/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FrameworkDelegate, registerFrameworkDelegate } from '@siemens/ix';

let viewInstance = 0;

function createViewInstance() {
  return `ix-react-view-${viewInstance++}`;
}

export class ReactFrameworkDelegate implements FrameworkDelegate {
  attachViewToPortal?: (id: string, view: any) => Promise<Element>;
  removeViewFromPortal?: (id: string) => void;

  async attachView(view: any): Promise<any> {
    if (!this.attachViewToPortal) {
      throw Error('No IxApplicationContext provided!');
    }
    const id = createViewInstance();
    const refElement = await this.attachViewToPortal(id, view);
    return refElement;
  }
}

export const reactFrameworkDelegate = new ReactFrameworkDelegate();
registerFrameworkDelegate(reactFrameworkDelegate);
