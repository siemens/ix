/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { iconChevronDownSmall, iconShield } from '@siemens/ix-icons/icons';
import { IxDropdown, IxDropdownItem } from '@siemens/ix-react';
import {
  FrameworkTypes,
  getDisplayNameFrameworkTypes,
  useFramework,
} from '@site/src/hooks/use-framework';
import React, { useEffect, useRef } from 'react';
import Button from '../Button';

export default function (props: {
  onFrameworkChange: (framework: FrameworkTypes) => void;
}) {
  const { framework, setFramework } = useFramework();
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    props.onFrameworkChange(framework);
  }, [framework]);
  return (
    <>
      <Button ref={ref}>
        {React.createElement('ix-icon', {
          name: iconShield,
        })}
        {getDisplayNameFrameworkTypes(framework)}{' '}
        {React.createElement('ix-icon', {
          name: iconChevronDownSmall,
        })}
      </Button>
      {ref.current && (
        <IxDropdown trigger={ref.current}>
          <IxDropdownItem onClick={() => setFramework('angular')}>
            Angular
          </IxDropdownItem>
          <IxDropdownItem onClick={() => setFramework('react')}>
            React
          </IxDropdownItem>
          <IxDropdownItem onClick={() => setFramework('vue')}>
            Vue
          </IxDropdownItem>
          <IxDropdownItem onClick={() => setFramework('html')}>
            HTML
          </IxDropdownItem>
        </IxDropdown>
      )}
    </>
  );
}
