/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IxTabItem, IxTabs } from '@siemens/ix-react';
import React, { useMemo, useState } from 'react';
import './DocsTabs.scss';

export type DocsTabsProps = {
  styleguide: any;
  code: any;
};

const STORAGE_KEY = 'docusaurus.ix.general.tab';

type DocsTabSelection = 'styleguide' | 'code';

function isDocsTabSelection(value: string): value is DocsTabSelection {
  return value === 'styleguide' || value === 'code';
}

function getCurrentDocsTabSelection(): DocsTabSelection {
  const defaultSelection = window.localStorage.getItem(STORAGE_KEY);
  if (!defaultSelection) {
    return 'styleguide';
  }

  if (isDocsTabSelection(defaultSelection)) {
    return defaultSelection;
  }

  return 'styleguide';
}

function setCurrentDocsTabSelection(selection: DocsTabSelection) {
  window.localStorage.setItem(STORAGE_KEY, selection);
}

const DocsTabs = (props: DocsTabsProps) => {
  const [tabSelection, setTabSelection] = useState<DocsTabSelection>(
    getCurrentDocsTabSelection()
  );

  const onTabChange = (selection: DocsTabSelection) => {
    setTabSelection(selection);
    setCurrentDocsTabSelection(selection);
  };

  const selected = useMemo(() => {
    if (tabSelection === 'code') {
      return 1;
    }
    if (tabSelection === 'styleguide') {
      return 0;
    }
  }, [tabSelection]);

  const Markdown = props[tabSelection];
  return (
    <>
      <IxTabs layout="stretched" className="Docs__Tabs" selected={selected}>
        <IxTabItem onClick={() => onTabChange('styleguide')}>
          Styleguide
        </IxTabItem>
        <IxTabItem onClick={() => onTabChange('code')}>Code</IxTabItem>
      </IxTabs>
      <div className="Docs__Tabs__Content">
        <Markdown />
      </div>
    </>
  );
};

export default DocsTabs;
