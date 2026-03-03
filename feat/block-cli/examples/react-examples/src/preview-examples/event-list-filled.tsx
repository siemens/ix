/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxEventList, IxEventListItem } from '@siemens/ix-react';

const items = [
  { text: 'Text 1', color: 'color-primary' },
  { text: 'Text 2', color: 'color-primary' },
  { text: 'Text 3', color: 'color-alarm' },
  { text: 'Text 4', color: 'color-success' },
];

export default function EventListFilled() {
  return (
    <IxEventList>
      {items.map((item) => (
        <IxEventListItem
          key={item.text}
          variant="filled"
          itemColor={item.color}
        >
          {item.text}
        </IxEventListItem>
      ))}
    </IxEventList>
  );
}
