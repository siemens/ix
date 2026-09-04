/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxTimeInput, IxIcon, IxTypography } from '@siemens/ix-react';
import { iconBulb } from '@siemens/ix-icons/icons';

export default () => {
  return (
    <IxTimeInput>
      <IxIcon name={iconBulb} slot="start" size="16"></IxIcon>
      <IxTypography slot="end">Slot</IxTypography>
    </IxTimeInput>
  );
};
