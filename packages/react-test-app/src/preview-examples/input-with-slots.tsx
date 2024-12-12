/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxIcon, IxInput, IxTypography } from '@siemens/ix-react';

export default () => {
  return (
    <IxInput>
      <IxIcon name="bulb" slot="start"></IxIcon>
      <IxTypography slot="end">unit</IxTypography>
    </IxInput>
  );
};
