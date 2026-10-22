/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxCategoryFilter } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [suggestions] = useState(['Item 1', 'Item 2']);

  return (
    <IxCategoryFilter
      placeholder="Filter by"
      suggestions={suggestions}
    ></IxCategoryFilter>
  );
};
