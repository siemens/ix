/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxEventList, IxEventListItem } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [items] = useState([1, 2, 3]);

  return (
    <IxEventList itemHeight={60}>
      {items.map((item) => (
        <div key={item}>
          <IxEventListItem itemColor="color-primary">
            Text {item}
          </IxEventListItem>
        </div>
      ))}
    </IxEventList>
  );
};
