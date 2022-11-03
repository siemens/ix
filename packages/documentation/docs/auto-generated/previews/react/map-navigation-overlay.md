<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!-- Auto generated! Please edit here: packages/react-test-app/src/preview-examples/map-navigation-overlay.tsx -->
```tsx
/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxMapNavigationOverlay, IxMapNavigation, IxMenu, IxMenuItem } from '@siemens/ix-react';
import React from 'react';

export const MapNavigationOverlay: React.FC = () => {
  return (
    <IxMapNavigationOverlay>
      <IxMapNavigation>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 184.567 138">
          <defs>
            <linearGradient id="x05mhzd7ga" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox">
              <stop offset="0" stop-color="#00ffb9" />
              <stop offset="1" stop-color="#0cc" />
            </linearGradient>
          </defs>
          <path data-name="Vereinigungsmenge 41"
            d="M0 126c0-.337.014-.67.041-1H0V60a12 12 0 1 1 24 0v65h-.042c.027.329.042.663.042 1a12 12 0 0 1-24 0zm50.944 8.052a12 12 0 0 1 0-16.969L99.027 69 50.944 20.919A12 12 0 0 1 67.915 3.947L116 52.03l48.083-48.084a12 12 0 0 1 16.969 16.971L132.969 69l48.084 48.084a12 12 0 0 1-16.969 16.971L116 85.971l-48.085 48.082a12 12 0 0 1-16.971 0zM0 12a12 12 0 1 1 12 12A12 12 0 0 1 0 12z"
            style={{ fill: "url(#x05mhzd7ga)" }} />
        </svg>
        <IxMenu>
          <IxMenuItem>Item 1</IxMenuItem>
          <IxMenuItem>Item 2</IxMenuItem>
          <IxMenuItem>Item 3</IxMenuItem>
        </IxMenu>
        <div slot="sidebar-content">Sidebar content</div>
        <div>Sidebar content</div>
      </IxMapNavigation>
    </IxMapNavigationOverlay>
  );
};
```
