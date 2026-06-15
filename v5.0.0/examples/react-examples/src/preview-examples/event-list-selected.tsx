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

const items = ['Text 1', 'Text 2', 'Text 3', 'Text 4'];

export default function EventListSelected() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <IxEventList>
      {items.map((text, index) => (
        <IxEventListItem
          key={text}
          itemColor="color-primary"
          selected={selectedIndex === index}
          onClick={() => setSelectedIndex(index)}
        >
          {text}
        </IxEventListItem>
      ))}
    </IxEventList>
  );
}
