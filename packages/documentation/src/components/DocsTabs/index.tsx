/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import React, { useState } from 'react';
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

  const Markdown = props[tabSelection];
  return (
    <>
      <div className="Docs__Tabs">
        <DocTab
          name="UX guidelines"
          active={tabSelection === 'styleguide'}
          onClick={() => onTabChange('styleguide')}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5 2C18.0228 2 22.5 6.47715 22.5 12C22.5 17.5228 18.0228 22 12.5 22C6.97715 22 2.5 17.5228 2.5 12C2.5 6.47715 6.97715 2 12.5 2ZM4.56189 11C5.01314 7.38128 7.88128 4.51314 11.5 4.06189V6H13.5V4.06189C17.1187 4.51314 19.9869 7.38128 20.4381 11H18.5V13H20.4381C19.9869 16.6187 17.1187 19.4869 13.5 19.9381V18H11.5V19.9381C7.88128 19.4869 5.01314 16.6187 4.56189 13H6.5V11H4.56189ZM11 10.5L17.5 7L14 13.5L7.5 17L11 10.5ZM13.5 12C13.5 12.5523 13.0523 13 12.5 13C11.9477 13 11.5 12.5523 11.5 12C11.5 11.4477 11.9477 11 12.5 11C13.0523 11 13.5 11.4477 13.5 12Z"
            />
          </svg>
        </DocTab>
        <DocTab
          name="Development"
          active={tabSelection === 'code'}
          onClick={() => onTabChange('code')}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.0168 6.52423L13.0849 6.00659L9.97911 17.5977L11.911 18.1153L15.0168 6.52423ZM7.45711 6.79042L8.87132 8.20463L5.07921 11.9975L8.87132 15.7904L7.45711 17.2046L2.25 11.9975L7.45711 6.79042ZM17.5342 6.79216L16.12 8.20637L19.9121 11.9993L16.12 15.7922L17.5342 17.2064L22.7413 11.9993L17.5342 6.79216Z"
              fill="inherit"
            />
          </svg>
        </DocTab>
      </div>
      <div className="Docs__Tabs__Content">
        <Markdown />
      </div>
    </>
  );
};

export default (props) => {
  return <BrowserOnly>{() => <DocsTabs {...props} />}</BrowserOnly>;
};

export function DocTab(
  props: React.PropsWithChildren<{
    name: string;
    active: boolean;
    onClick: (event: React.MouseEvent) => void;
  }>
) {
  return (
    <div
      onClick={props.onClick}
      className={clsx('Doc_Tab', {
        active: props.active,
      })}
    >
      {props.children}
      {props.name}
    </div>
  );
}
