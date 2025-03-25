/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconBulb } from '@siemens/ix-icons/icons';
import './map-navigation-migration.scoped.css';

import {
  IxApplication,
  IxApplicationHeader,
  IxButton,
  IxContent,
  IxContentHeader,
  IxDropdownButton,
  IxDropdownItem,
  IxMenu,
  IxMenuItem,
  IxPane,
  IxPaneLayout,
} from '@siemens/ix-react';

import { useState } from 'react';

export default () => {
  const [expanded, setExpanded] = useState(false);

  const initialExpanded = true;

  function resetExpanded(value: boolean) {
    setExpanded(value);
  }

  return (
    <IxApplication className="application">
      <IxApplicationHeader name="My Application">
        <div className="placeholder-logo" slot="logo"></div>

        {/*{KEEP} Compare context menu */}
        <IxDropdownButton variant="secondary" label="Select config" ghost>
          <IxDropdownItem label="Config 1"></IxDropdownItem>
          <IxDropdownItem label="Config 2"></IxDropdownItem>
          <IxDropdownItem label="Config 3"></IxDropdownItem>
        </IxDropdownButton>
      </IxApplicationHeader>

      <IxMenu>
        <IxMenuItem>Item 1</IxMenuItem>
        <IxMenuItem>Item 2</IxMenuItem>
      </IxMenu>

      {/*{KEEP} Compare overlay */}
      <IxPane
        className="overlay"
        composition="right"
        heading="Custom overlay"
        icon={iconBulb}
        size="320px"
        variant="floating"
        hideOnCollapse
        expanded={expanded}
        onExpandedChanged={(e) => resetExpanded(e.detail.expanded)}
      >
        Overlay content
      </IxPane>

      <IxPaneLayout>
        {/*{KEEP} Compare sidebar */}
        <IxPane
          slot="left"
          heading="Navigation title"
          size="320px"
          expanded={initialExpanded}
        >
          Sidebar content
        </IxPane>

        <IxContent className="content">
          <IxContentHeader
            slot="header"
            headerTitle="My Content Page"
          ></IxContentHeader>

          <IxButton onClick={() => setExpanded(!expanded)}>
            Open overlay
          </IxButton>
        </IxContent>
      </IxPaneLayout>
    </IxApplication>
  );
};
