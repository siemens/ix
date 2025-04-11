/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton } from '@siemens/ix-react';

export default () => (
  <div className="ix-button-group">
    <IxButton outline>Left</IxButton>
    <IxButton>Middle</IxButton>
    <IxButton outline>Right</IxButton>
  </div>
);
