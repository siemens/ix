/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { TabsContextController } from '@siemens/ix';
import {
  IxTabsContext as InternalIxTabsContext,
  IxTabPanel,
} from '@siemens/ix-react';
import React, { useEffect, useState } from 'react';
import { useMemo, useRef } from 'react';

class ReactTabsContextController extends TabsContextController {}

export function IxTabsContext(
  props: React.PropsWithChildren<{ value: string }>
): React.JSX.Element {
  const [selectedTab, setSelectedTab] = useState(props.value);

  const controllerRef = useRef<ReactTabsContextController>(
    new ReactTabsContextController()
  );

  useEffect(() => {
    const controller = controllerRef.current;
    const off = controller.selectedValueChange.on((tabValue) => {
      console.log('Selected value changed', tabValue);
      setSelectedTab(tabValue);
    });

    return () => off.dispose();
  }, []);

  useEffect(() => {
    // TODO Changing the selected tab does not change the selected index of ix-tabs
    setSelectedTab(props.value);
  }, [props.value]);

  const children = useMemo(() => {
    const other: any[] = [];
    let selectedTabPanel: React.ReactElement | null = null;

    React.Children.forEach(props.children, (child) => {
      if (
        React.isValidElement<{ value: string }>(child) &&
        child.type === IxTabPanel
      ) {
        if (child.props.value === selectedTab) {
          selectedTabPanel = child;
        }
      } else {
        other.push(child);
      }
    });

    return [other, selectedTabPanel];
  }, [props.children, selectedTab]);

  return (
    <InternalIxTabsContext tabsController={controllerRef.current}>
      {children}
    </InternalIxTabsContext>
  );
}
