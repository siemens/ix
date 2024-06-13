/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton, IxIcon, IxTooltip } from '@siemens/ix-react';

export default () => {
  return (
    <div style={{ padding: '4rem' }}>
      <IxButton data-tooltip="myTooltip">Hover me</IxButton>
      <IxTooltip for="[data-tooltip='myTooltip']" titleContent="My Tooltip">
        <IxIcon slot="title-icon" name="rocket" />
        Some example content
      </IxTooltip>
    </div>
  );
};
