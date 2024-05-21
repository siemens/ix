/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxSelect, IxSelectItem } from '@siemens/ix-react';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

export default function FrameworkSelection(): JSX.Element {
  const ref = useRef<HTMLIxSelectElement>();

  const [framework, setFramework] = useState<'angular' | 'webcomponent'>(
    'angular'
  );

  useEffect(() => {
    setFramework(localStorage.getItem('framework') as any);
  }, []);

  useLayoutEffect(() => {
    const { current } = ref;
    if (current) {
      current.addEventListener(
        'itemSelectionChange',
        (event: CustomEvent<string[]>) => {
          const [value] = event.detail as ('angular' | 'webcomponent')[];
          localStorage.setItem('framework', value);
          window.dispatchEvent(new Event('storage'));
        }
      );
    }
  }, [ref]);

  return (
    <IxSelect
      ref={ref}
      default-value={framework}
      style={{
        width: '100%',
      }}
    >
      <IxSelectItem
        value="webcomponent"
        label="Webcomponent"
      ></IxSelectItem>
      <IxSelectItem value="angular" label="Angular"></IxSelectItem>
    </IxSelect>
  );
}
