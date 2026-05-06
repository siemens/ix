'use client';
/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  Children,
  type ForwardedRef,
  type PropsWithChildren,
  type ReactNode,
  createContext,
  forwardRef,
  isValidElement,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import InternalIxTabPanel from './internal-tab-panel';
import InternalIxTabPanels from './internal-tab-panels';

const TabPanelsContext = createContext<string | undefined | null>(null);

function assignRef<T>(ref: ForwardedRef<T>, value: T | null) {
  if (typeof ref === 'function') {
    ref(value);
    return;
  }

  if (ref) {
    ref.current = value;
  }
}

function findActiveTabKey(children: ReactNode): string | undefined {
  for (const child of Children.toArray(children)) {
    if (!isValidElement(child)) {
      continue;
    }

    const props = child.props as {
      activeTabKey?: string;
      children?: ReactNode;
    };

    if (Object.prototype.hasOwnProperty.call(props, 'activeTabKey')) {
      return props.activeTabKey;
    }

    const nestedActiveTabKey = findActiveTabKey(props.children);

    if (nestedActiveTabKey !== undefined) {
      return nestedActiveTabKey;
    }
  }

  return undefined;
}

export type IxTabPanelsProps = PropsWithChildren<
  React.ComponentProps<typeof InternalIxTabPanels>
>;

export const IxTabPanels = forwardRef<HTMLIxTabPanelsElement, IxTabPanelsProps>(
  ({ children, ...props }, ref) => {
    const panelsRef = useRef<HTMLIxTabPanelsElement | null>(null);
    const [activeTabKey, setActiveTabKey] = useState(() =>
      findActiveTabKey(children)
    );

    useLayoutEffect(() => {
      const panelsElement = panelsRef.current;

      const syncActiveTabKey = () => {
        setActiveTabKey(
          panelsElement?.querySelector('ix-tabs')?.activeTabKey ??
            findActiveTabKey(children)
        );
      };

      syncActiveTabKey();

      if (!panelsElement) {
        return;
      }

      const handleTabChange = (event: Event) => {
        setActiveTabKey((event as CustomEvent<string | undefined>).detail);
      };

      panelsElement.addEventListener('tabChange', handleTabChange);

      return () => {
        panelsElement.removeEventListener('tabChange', handleTabChange);
      };
    }, [children]);

    return (
      <TabPanelsContext.Provider value={activeTabKey}>
        <InternalIxTabPanels
          ref={(element) => {
            panelsRef.current = element;
            assignRef(ref, element);
          }}
          {...props}
        >
          {children}
        </InternalIxTabPanels>
      </TabPanelsContext.Provider>
    );
  }
);

IxTabPanels.displayName = 'IxTabPanels';

export type IxTabPanelProps = PropsWithChildren<
  React.ComponentProps<typeof InternalIxTabPanel>
>;

export const IxTabPanel = forwardRef<HTMLIxTabPanelElement, IxTabPanelProps>(
  ({ children, tabKey, ...props }, ref) => {
    const activeTabKey = useContext(TabPanelsContext);
    const shouldRenderChildren =
      activeTabKey === null ? true : activeTabKey === tabKey;

    return (
      <InternalIxTabPanel
        ref={(element) => {
          assignRef(ref, element);
        }}
        tabKey={tabKey}
        {...props}
      >
        {shouldRenderChildren ? children : null}
      </InternalIxTabPanel>
    );
  }
);

IxTabPanel.displayName = 'IxTabPanel';
