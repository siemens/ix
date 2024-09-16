/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton, IxPane, IxPaneLayout } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [variant, setVariant] = useState<'inline' | 'floating'>('floating');
  const [layout, setLayout] = useState<'full-horizontal' | 'full-vertical'>(
    'full-horizontal'
  );

  return (
    <IxPaneLayout
      variant={variant}
      layout={layout}
      borderless={variant === 'floating'}
    >
      <IxPane heading="Pane Left" slot="left" size="33%">
        <p>This is the left pane.</p>
      </IxPane>
      <IxPane heading="Pane Top" slot="top" size="33%">
        <p>This is the top pane.</p>
      </IxPane>
      <IxPane heading="Pane Right" slot="right" size="33%">
        <p>This is the right pane.</p>
      </IxPane>
      <IxPane heading="Pane Bottom" slot="bottom" size="33%">
        <p>This is the bottom pane.</p>
      </IxPane>

      <div slot="content">
        <IxButton
          onClick={() =>
            setVariant(variant === 'inline' ? 'floating' : 'inline')
          }
          style={{ margin: '2.5rem' }}
        >
          Toggle Variant
        </IxButton>
        <IxButton
          onClick={() =>
            setLayout(
              layout === 'full-horizontal' ? 'full-vertical' : 'full-horizontal'
            )
          }
          style={{ margin: '2.5rem' }}
        >
          Toggle Layout
        </IxButton>
      </div>
    </IxPaneLayout>
  );
};
