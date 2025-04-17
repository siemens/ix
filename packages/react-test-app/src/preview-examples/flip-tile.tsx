/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './flip-tile.scoped.css';

import { FlipTileState } from '@siemens/ix';
import { IxFlipTile, IxFlipTileContent, IxIcon } from '@siemens/ix-react';
import { iconInfo } from '@siemens/ix-icons/icons';

export default () => {
  return (
    <div className="flip-tile">
      <IxFlipTile>
        <div slot="header">Flip header</div>

        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div className="footer-date">
            <IxIcon name={iconInfo} size="16"></IxIcon>2021-06-22
          </div>
        </div>

        <IxFlipTileContent> Example 1 </IxFlipTileContent>
        <IxFlipTileContent> Example 2 </IxFlipTileContent>
      </IxFlipTile>

      <IxFlipTile state={FlipTileState.Primary}>
        <div slot="header">Flip header</div>
        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div className="footer-date">
            <IxIcon name={iconInfo} size="16"></IxIcon>2021-06-22
          </div>
        </div>
        <IxFlipTileContent> Example 1 </IxFlipTileContent>
        <IxFlipTileContent> Example 2 </IxFlipTileContent>
      </IxFlipTile>

      <IxFlipTile state={FlipTileState.Info}>
        <div slot="header">Flip header</div>
        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div className="footer-date">
            <IxIcon name={iconInfo} size="16"></IxIcon>2021-06-22
          </div>
        </div>
        <IxFlipTileContent> Example 1 </IxFlipTileContent>
        <IxFlipTileContent> Example 2 </IxFlipTileContent>
      </IxFlipTile>

      <IxFlipTile state={FlipTileState.Warning}>
        <div slot="header">Flip header</div>
        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div className="footer-date">
            <IxIcon name={iconInfo} size="16"></IxIcon>2021-06-22
          </div>
        </div>
        <IxFlipTileContent> Example 1 </IxFlipTileContent>
        <IxFlipTileContent> Example 2 </IxFlipTileContent>
      </IxFlipTile>

      <IxFlipTile state={FlipTileState.Alarm}>
        <div slot="header">Flip header</div>
        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div className="footer-date">
            <IxIcon name={iconInfo} size="16"></IxIcon>2021-06-22
          </div>
        </div>
        <IxFlipTileContent> Example 1 </IxFlipTileContent>
        <IxFlipTileContent> Example 2 </IxFlipTileContent>
      </IxFlipTile>
    </div>
  );
};
