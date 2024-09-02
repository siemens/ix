/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxEventList, IxEventListItem } from '@siemens/ix-react';

export default () => {
  return (
    <IxEventList>
      <IxEventListItem color="color-primary">Text 1</IxEventListItem>
      <IxEventListItem color="color-primary" selected>
        Text 2
      </IxEventListItem>
      <IxEventListItem color="color-primary">Text 3</IxEventListItem>
      <IxEventListItem color="color-primary">Text 4</IxEventListItem>
    </IxEventList>
  );
};
