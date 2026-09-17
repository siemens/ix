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
  { text: 'Text 1', color: '--si-sys-background-accent' },
  { text: 'Text 2', color: '--si-sys-background-accent' },
  { text: 'Text 3', color: '--si-sys-background-danger' },
  { text: 'Text 4', color: '--si-sys-background-success' },
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
