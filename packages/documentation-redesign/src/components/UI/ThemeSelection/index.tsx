/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useRef, useState } from 'react';
import { IxDropdown, IxDropdownItem } from '@siemens/ix-react';
import Button from '../Button';
import { iconChevronDownSmall, iconPen } from '@siemens/ix-icons/icons';
import React from 'react';

export default function () {
  const [theme, setTheme] = useState('Brand');
  const ref = useRef<HTMLButtonElement>(null);
  return (
    <>
      <Button ref={ref}>
        {React.createElement('ix-icon', {
          name: iconPen,
        })}
        {theme}{' '}
        {React.createElement('ix-icon', {
          name: iconChevronDownSmall,
        })}
      </Button>
      {ref.current && (
        <IxDropdown trigger={ref.current}>
          <IxDropdownItem>Brand</IxDropdownItem>
          <IxDropdownItem>Classic</IxDropdownItem>
        </IxDropdown>
      )}
    </>
  );
}
