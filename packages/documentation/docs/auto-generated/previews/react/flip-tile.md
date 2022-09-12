<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!--
* COPYRIGHT (c) Siemens AG
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
-->
  
<!-- Auto generated! Please edit here: siemens-ix/packages/react-test-app/src/preview-examples/flip-tile.tsx -->
```tsx
import { FlipTileState } from '@siemens/ix';
import { IxFlipTile, IxFlipTileContent, IxIcon } from '@siemens/ix-react';
import React from 'react';

export const FlipTile: React.FC = () => {
  return (
    <div className="example">
      <IxFlipTile>
        <div slot="header">Flip header</div>

        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div className="d-flex align-items-center">
            <IxIcon name="info" size="16"></IxIcon>2021-06-22
          </div>
        </div>

        <IxFlipTileContent> Example 1 </IxFlipTileContent>
        <IxFlipTileContent> Example 2 </IxFlipTileContent>
      </IxFlipTile>

      <IxFlipTile state={FlipTileState.Primary}>
        <div slot="header">Flip header</div>
        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div className="d-flex align-items-center">
            <IxIcon name="info" size="16"></IxIcon>2021-06-22
          </div>
        </div>
        <IxFlipTileContent> Example 1 </IxFlipTileContent>
        <IxFlipTileContent> Example 2 </IxFlipTileContent>
      </IxFlipTile>

      <IxFlipTile state={FlipTileState.Info}>
        <div slot="header">Flip header</div>
        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div className="d-flex align-items-center">
            <IxIcon name="info" size="16"></IxIcon>2021-06-22
          </div>
        </div>
        <IxFlipTileContent> Example 1 </IxFlipTileContent>
        <IxFlipTileContent> Example 2 </IxFlipTileContent>
      </IxFlipTile>

      <IxFlipTile state={FlipTileState.Warning}>
        <div slot="header">Flip header</div>
        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div className="d-flex align-items-center">
            <IxIcon name="info" size="16"></IxIcon>2021-06-22
          </div>
        </div>
        <IxFlipTileContent> Example 1 </IxFlipTileContent>
        <IxFlipTileContent> Example 2 </IxFlipTileContent>
      </IxFlipTile>

      <IxFlipTile state={FlipTileState.Alarm}>
        <div slot="header">Flip header</div>
        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div className="d-flex align-items-center">
            <IxIcon name="info" size="16"></IxIcon>2021-06-22
          </div>
        </div>
        <IxFlipTileContent> Example 1 </IxFlipTileContent>
        <IxFlipTileContent> Example 2 </IxFlipTileContent>
      </IxFlipTile>
    </div>
  );
};
```
