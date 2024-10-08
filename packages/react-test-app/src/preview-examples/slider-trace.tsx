/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxSlider } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxSlider
        trace
        trace-reference={50}
        marker={[0, 25, 50, 75, 100]}
        value={25}
      >
        <span slot="label-start">0</span>
        <span slot="label-end">100</span>
      </IxSlider>

      <IxSlider
        min={0}
        max={50}
        value={20}
        step={10}
        trace
        trace-reference={10}
        marker={[0, 10, 20, 30, 40, 50]}
      >
        <span slot="label-start">0</span>
        <span slot="label-end">50</span>
      </IxSlider>
    </>
  );
};
