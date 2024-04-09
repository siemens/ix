/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxActionCard } from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <IxActionCard
      icon="refresh"
      heading="Scan for new devices"
      subheading="Secondary text"
      variant="insight"
      onClick={console.log}
    ></IxActionCard>
  );
};
