/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
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
