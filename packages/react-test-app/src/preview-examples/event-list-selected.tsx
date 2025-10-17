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
  const [selectedIndex, setSelectedIndex] = useState(1);

  const items = ['Text 1', 'Text 2', 'Text 3', 'Text 4'];

  return (
    <IxEventList>
      {items.map((text, index) => (
        <IxEventListItem
          key={index}
          itemColor="color-primary"
          selected={selectedIndex === index}
          onClick={() => setSelectedIndex(index)}
        >
          {text}
        </IxEventListItem>
      ))}
    </IxEventList>
  );
};
