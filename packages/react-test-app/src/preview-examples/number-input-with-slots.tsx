/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxIcon, IxNumberInput, IxTypography } from '@siemens/ix-react';

export default () => {
  return (
    <IxNumberInput>
      <IxIcon name="bulb" slot="start"></IxIcon>
      <IxTypography slot="end">unit</IxTypography>
    </IxNumberInput>
  );
};
