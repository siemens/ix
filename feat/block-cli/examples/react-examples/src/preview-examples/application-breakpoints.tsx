/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Breakpoint } from '@siemens/ix';
import {
  IxApplication,
  IxApplicationHeader,
  IxAvatar,
  IxContent,
  IxContentHeader,
  IxDropdownButton,
  IxDropdownItem,
  IxMenu,
  IxMenuItem,
  IxRadio,
  IxRadioGroup,
} from '@siemens/ix-react';

import { useState } from 'react';

const validBreakpoints = new Set<Breakpoint>(['sm', 'md', 'lg']);

export default () => {
  const [breakpoints, setBreakpoints] = useState<Breakpoint[]>(['md']);

  const handleBreakpointChange = (event: CustomEvent<string>) => {
    const value = event.detail;

    if (validBreakpoints.has(value as Breakpoint)) {
      setBreakpoints([value as Breakpoint]);
    }
  };

  return (
    <IxApplication breakpoints={breakpoints}>
      <IxApplicationHeader name="My Application">
        <div className="placeholder-logo" slot="logo"></div>

        <IxDropdownButton variant="subtle-tertiary" label="Select config">
          <IxDropdownItem label="Config 1"></IxDropdownItem>
          <IxDropdownItem label="Config 2"></IxDropdownItem>
          <IxDropdownItem label="Config 3"></IxDropdownItem>
        </IxDropdownButton>

        <IxAvatar>
          <IxDropdownItem label="Action 1"></IxDropdownItem>
          <IxDropdownItem label="Action 2"></IxDropdownItem>
          <IxDropdownItem label="Action 3"></IxDropdownItem>
        </IxAvatar>
      </IxApplicationHeader>

      <IxMenu>
        <IxMenuItem>Item 1</IxMenuItem>
        <IxMenuItem>Item 2</IxMenuItem>
      </IxMenu>

      <IxContent>
        <IxContentHeader
          slot="header"
          headerTitle="Choose breakpoint"
        ></IxContentHeader>
        <IxRadioGroup
          value={breakpoints[0]}
          onValueChange={handleBreakpointChange}
        >
          <IxRadio value="sm" label="Small"></IxRadio>
          <IxRadio value="md" label="Medium"></IxRadio>
          <IxRadio value="lg" label="Large"></IxRadio>
        </IxRadioGroup>
      </IxContent>
    </IxApplication>
  );
};
