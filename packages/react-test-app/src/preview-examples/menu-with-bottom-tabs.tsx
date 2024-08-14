/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import 'example-styles/dist/application.css';

import { IxMenu, IxMenuItem } from '@siemens/ix-react';

export default () => {
  return (
    <IxMenu>
      <IxMenuItem home tab-icon="home">
        Home
      </IxMenuItem>
      <IxMenuItem tab-icon="globe" slot="bottom">
        {' '}
        Bottom Tab{' '}
      </IxMenuItem>
    </IxMenu>
  );
};
