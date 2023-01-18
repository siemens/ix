/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton, IxTooltip } from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <div style={{ padding: '4rem' }}>
      <IxButton data-tooltip="myTooltip">Hover me</IxButton>
      <IxTooltip
        for="[data-tooltip='myTooltip']"
        titleIcon="rocket"
        titleContent="My Tooltip"
      >
        Some example content
      </IxTooltip>
    </div>
  );
};
