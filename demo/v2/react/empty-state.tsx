/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconAdd } from '@siemens/ix-icons/icons';
import { IxEmptyState } from '@siemens/ix-react';

export default () => {
  return (
    <IxEmptyState
      header="No elements available"
      subHeader="Create an element first"
      icon={iconAdd}
      action="Create element"
      onActionClick={console.log}
    ></IxEmptyState>
  );
};
