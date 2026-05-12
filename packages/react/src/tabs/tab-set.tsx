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
import InternalIxTabSet from './internal-tab-set';

const TabSetContext = createContext<string | undefined | null>(null);

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

export type IxTabSetProps = PropsWithChildren<
  React.ComponentProps<typeof InternalIxTabSet>
>;

export const IxTabSet = forwardRef<HTMLIxTabSetElement, IxTabSetProps>(
  ({ children, ...props }, ref) => {
    const tabSetRef = useRef<HTMLIxTabSetElement | null>(null);
    const [activeTabKey, setActiveTabKey] = useState(() =>
      findActiveTabKey(children)
    );

    useLayoutEffect(() => {
      const tabSetElement = tabSetRef.current;

      const syncActiveTabKey = () => {
        setActiveTabKey(
          tabSetElement?.querySelector('ix-tabs')?.activeTabKey ??
            findActiveTabKey(children)
        );
      };

      syncActiveTabKey();

      if (!tabSetElement) {
        return;
      }

      const handleTabChange = (event: Event) => {
        setActiveTabKey((event as CustomEvent<string | undefined>).detail);
      };

      tabSetElement.addEventListener('tabChange', handleTabChange);

      return () => {
        tabSetElement.removeEventListener('tabChange', handleTabChange);
      };
    }, [children]);

    return (
      <TabSetContext.Provider value={activeTabKey}>
        <InternalIxTabSet
          ref={(element) => {
            tabSetRef.current = element;
            assignRef(ref, element);
          }}
          {...props}
        >
          {children}
        </InternalIxTabSet>
      </TabSetContext.Provider>
    );
  }
);

IxTabSet.displayName = 'IxTabSet';

export type IxTabPanelProps = PropsWithChildren<
  React.ComponentProps<typeof InternalIxTabPanel>
>;

export const IxTabPanel = forwardRef<HTMLIxTabPanelElement, IxTabPanelProps>(
  ({ children, tabKey, ...props }, ref) => {
    const activeTabKey = useContext(TabSetContext);
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
