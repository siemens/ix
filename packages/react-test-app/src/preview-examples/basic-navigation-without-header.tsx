/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxBasicNavigation, IxMenu, IxMenuItem } from '@siemens/ix-react';

export default () => {
  return (
    <IxBasicNavigation hideHeader>
      <IxMenu>
        <IxMenuItem>Item 1</IxMenuItem>
        <IxMenuItem>Item 2</IxMenuItem>
      </IxMenu>
    </IxBasicNavigation>
  );
};
