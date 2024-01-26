/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  IxBasicNavigation,
  IxButton,
  IxMenu,
  IxMenuCategory,
  IxMenuItem,
  IxPane,
  IxPaneLayout,
} from '@siemens/ix-react';
import React, { useState } from 'react';

export default () => {
  const [variant, setVariant] = useState('floating');
  const [layout, setLayout] = useState('full-width-top-bottom');
  const [slot, setSlot] = useState('right');

  return (
    <>
      <IxBasicNavigation>
        <IxMenu>
          <IxMenuItem home icon="home">
            Home
          </IxMenuItem>
          <IxMenuItem icon="globe">Normal Tab</IxMenuItem>
          <IxMenuCategory icon="rocket" label="Top level Category">
            <IxMenuItem icon="globe">Nested Tab</IxMenuItem>
            <IxMenuItem icon="globe">Nested Tab</IxMenuItem>
          </IxMenuCategory>
        </IxMenu>
        <IxPaneLayout
          variant="floating"
          layout={layout as any}
          borderless={true}
        >
          <IxPane heading="0" slot="left">
            <p>This is a text content.</p>
          </IxPane>
          <IxPane heading="1" slot="top">
            <p>This is a text content.</p>
          </IxPane>
          <IxPane
            heading="2"
            variant={variant as any}
            slot={slot}
            borderless={true}
          >
            <p>This is a text content.</p>
          </IxPane>

          <div
            slot="content"
            style={{
              width: '10000px',
              height: '10000px',
              backgroundColor: 'white',
            }}
          >
            <IxButton
              onClick={() => setSlot('bottom')}
              style={{ margin: '2.5rem' }}
            >
              Toggle Slot
            </IxButton>
            <IxButton
              onClick={() => setVariant('inline')}
              style={{ margin: '2.5rem' }}
            >
              Toggle Variant
            </IxButton>
            <IxButton
              onClick={() => setLayout('full-height-left-right')}
              style={{ margin: '2.5rem' }}
            >
              Toggle Layout
            </IxButton>
          </div>
        </IxPaneLayout>
      </IxBasicNavigation>
    </>
  );
};
