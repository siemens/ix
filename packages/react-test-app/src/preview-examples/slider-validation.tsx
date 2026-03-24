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
      <div>
        <IxSlider
          label="Info"
          value={10}
          infoText="Info text"
          className="ix-info"
        >
          <span slot="label-start">0</span>
          <span slot="label-end">100</span>
        </IxSlider>
      </div>

      <div>
        <IxSlider
          label="Warning"
          value={90}
          warningText="Warning text"
          className="ix-warning"
        >
          <span slot="label-start">0</span>
          <span slot="label-end">100</span>
        </IxSlider>
      </div>

      <div>
        <IxSlider
          label="Valid"
          value={10}
          validText="Valid text"
          className="ix-valid"
        >
          <span slot="label-start">0</span>
          <span slot="label-end">100</span>
        </IxSlider>
      </div>

      <div>
        <IxSlider
          label="Invalid"
          value={100}
          invalidText="Invalid text"
          className="ix-invalid"
        >
          <span slot="label-start">0</span>
          <span slot="label-end">100</span>
        </IxSlider>
      </div>
    </>
  );
};
