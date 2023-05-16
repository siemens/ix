/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxEmptyState } from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <IxEmptyState
      header="No elements available"
      subHeader="Create an element first"
      icon="add"
      action="Create element"
      onActionClick={console.log}
    ></IxEmptyState>
  );
};
