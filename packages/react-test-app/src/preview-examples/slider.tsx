/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxSlider } from '@siemens/ix-react';
import './slider.scoped.css';

export default () => {
  return (
    <div className="slider-container">
      <IxSlider trace value={25} step={10} marker={[0, 20, 40, 50, 75, 100]}>
        <span slot="label-start">0</span>
        <span slot="label-end">100</span>
      </IxSlider>
    </div>
  );
};
