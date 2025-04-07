/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import BrowserOnly from '@docusaurus/BrowserOnly';
import { iconChevronDownSmall, iconCode } from '@siemens/ix-icons/icons';
import { IxDropdown, IxDropdownItem } from '@siemens/ix-react';
import {
  FrameworkTypes,
  getDisplayNameFrameworkTypes,
  useFramework,
} from '@site/src/hooks/use-framework';
import React, { useEffect, useState } from 'react';
import Button from '../Button';

export default function (props: {
  onFrameworkChange?: (framework: FrameworkTypes) => void;
}) {
  return <BrowserOnly>{() => <FrameworkSelection {...props} />}</BrowserOnly>;
}

function FrameworkSelection(
  props: Readonly<{
    onFrameworkChange?: (framework: FrameworkTypes) => void;
  }>
) {
  const { framework, setFramework } = useFramework();
  const [ref, setRef] = useState<HTMLButtonElement>(null);

  useEffect(() => {
    props.onFrameworkChange && props.onFrameworkChange(framework);
  }, [framework]);
  return (
    <>
      <Button ref={setRef} className={'dropdown-button'}>
        {React.createElement('ix-icon', {
          name: iconCode,
        })}
        <span className="ButtonText">
          {getDisplayNameFrameworkTypes(framework)}
        </span>
        {React.createElement('ix-icon', {
          name: iconChevronDownSmall,
        })}
      </Button>
      {ref && (
        <IxDropdown trigger={ref}>
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
