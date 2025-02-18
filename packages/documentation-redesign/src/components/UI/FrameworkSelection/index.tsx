/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  iconChevronDownSmall,
  iconCode,
  iconShield,
} from '@siemens/ix-icons/icons';
import {
  FrameworkTypes,
  getDisplayNameFrameworkTypes,
  useFramework,
} from '@site/src/hooks/use-framework';
import React, { useEffect, useRef } from 'react';
import Button from '../Button';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function (props: {
  onFrameworkChange?: (framework: FrameworkTypes) => void;
}) {
  return <BrowserOnly>{() => <FrameworkSelection {...props} />}</BrowserOnly>;
}

function FrameworkSelection(props: {
  onFrameworkChange?: (framework: FrameworkTypes) => void;
}) {
  const { framework, setFramework } = useFramework();
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    props.onFrameworkChange && props.onFrameworkChange(framework);
  }, [framework]);
  return (
    <>
      <Button ref={ref}>
        {React.createElement('ix-icon', {
          name: iconCode,
        })}
        {getDisplayNameFrameworkTypes(framework)}{' '}
        {React.createElement('ix-icon', {
          name: iconChevronDownSmall,
        })}
      </Button>
      {ref.current &&
        React.createElement('ix-dropdown', {
          trigger: ref.current,
          children: [
            React.createElement('ix-dropdown-item', {
              onClick: () => setFramework('angular'),
              children: 'Angular',
            }),
            React.createElement('ix-dropdown-item', {
              onClick: () => setFramework('react'),
              children: 'React',
            }),
            React.createElement('ix-dropdown-item', {
              onClick: () => setFramework('vue'),
              children: 'Vue',
            }),
            React.createElement('ix-dropdown-item', {
              onClick: () => setFramework('html'),
              children: 'HTML',
            }),
          ],
        })}
    </>
  );
}
