/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './application-breakpoints.scoped.css';

import { Breakpoint } from '@siemens/ix';
import {
  IxApplication,
  IxApplicationHeader,
  IxAvatar,
  IxContent,
  IxContentHeader,
  IxDropdownButton,
  IxDropdownItem,
  IxIconButton,
  IxMenu,
  IxMenuItem,
} from '@siemens/ix-react';

import { useState } from 'react';

export default () => {
  const [breakpoints, setBreakpoints] = useState<Breakpoint[]>(['md']);

  return (
    <IxApplication breakpoints={breakpoints}>
      <IxApplicationHeader name="My Application">
        <div className="placeholder-logo" slot="logo"></div>

        <IxIconButton ghost icon="checkboxes"></IxIconButton>
        <IxIconButton ghost icon="checkboxes"></IxIconButton>
        <IxIconButton ghost icon="checkboxes"></IxIconButton>

        <IxDropdownButton variant="secondary" label="Select config" ghost>
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
          header-title="Choose breakpoint"
        ></IxContentHeader>
        <input
          id="small"
          type="radio"
          name="layout"
          value="sm"
          checked={breakpoints[0] === 'sm'}
          onChange={() => setBreakpoints(['sm'])}
        />
        <label htmlFor="small">Small</label>

        <input
          id="medium"
          type="radio"
          name="layout"
          value="md"
          checked={breakpoints[0] === 'md'}
          onChange={() => setBreakpoints(['md'])}
        />
        <label htmlFor="medium">Medium</label>

        <input
          id="large"
          type="radio"
          name="layout"
          value="lg"
          checked={breakpoints[0] === 'lg'}
          onChange={() => setBreakpoints(['lg'])}
        />
        <label htmlFor="large">Large</label>
      </IxContent>
    </IxApplication>
  );
};
