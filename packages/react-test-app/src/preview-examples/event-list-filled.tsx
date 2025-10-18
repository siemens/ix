/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxEventList, IxEventListItem } from '@siemens/ix-react';

export default function EventListFilled() {
  return (
    <IxEventList>
      <IxEventListItem variant="filled" itemColor="color-primary">
        Text 1
      </IxEventListItem>
      <IxEventListItem variant="filled" itemColor="color-primary">
        Text 2
      </IxEventListItem>
      <IxEventListItem variant="filled" itemColor="color-alarm">
        Text 3
      </IxEventListItem>
      <IxEventListItem variant="filled" itemColor="color-success">
        Text 4
      </IxEventListItem>
    </IxEventList>
  );
}
