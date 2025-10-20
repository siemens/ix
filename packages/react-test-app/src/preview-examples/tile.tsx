/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './tile.scoped.css';

import { IxButton, IxIconButton, IxTile } from '@siemens/ix-react';
import {
  iconChevronRightSmall,
  iconContextMenu,
} from '@siemens/ix-icons/icons';

export default () => {
  return (
    <div className="example">
      <IxTile size="small">92.8 °C</IxTile>

      <IxTile size="medium">
        <div slot="header">Tile header</div>
        <div className="text-l">92.8 °C</div>
      </IxTile>

      <IxTile size="big">
        <div className="tile-header" slot="header">
          Tile header
          <IxIconButton ghost icon={iconContextMenu}></IxIconButton>
        </div>
        <div slot="subheader">Temperature</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          <span>92.8 °C</span>
        </div>
        <div className="tile-footer" slot="footer">
        <IxButton icon={iconChevronRightSmall} ghost slot="footer">
            Details
        </IxButton>
        </div>
      </IxTile>
    </div>
  );
};
