/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton } from '@siemens/ix-react';
import React from 'react';

export default () => {
  function loading() {
    var btn = document.getElementById('btn');
    btn!.innerHTML =
      'Loading... <ix-spinner variant="secondary" size="small"></ix-spinner>';

    setTimeout(() => {
      btn!.innerHTML = 'Button';
    }, 2500);
  }
  return (
    <IxButton id="btn" onClick={loading} class="m-1" variant="Secondary">
      Button
    </IxButton>
  );
};
