/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
    <ix-select
      ref={ref}
      default-value={framework}
      style={{
        width: '100%',
      }}
    >
      <ix-select-item
        value="webcomponent"
        label="Webcomponent"
      ></ix-select-item>
      <ix-select-item value="angular" label="Angular"></ix-select-item>
    </ix-select>
  );
}
