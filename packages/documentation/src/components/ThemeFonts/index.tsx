/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  IxEmptyState,
  IxIcon,
  IxInputGroup,
  IxTabItem,
  IxTabs,
  IxTypography,
} from '@siemens/ix-react';
import CodeBlock from '@theme/CodeBlock';
import React, { useCallback, useState } from 'react';
import { CodeSelection, getCodeExample, getPreview, themeFonts } from './fonts';
import './ThemeFonts.css';
import { useTheme } from '@site/src/utils/hooks/useTheme';

function Search(props: { onChange: (value: string) => void }) {
  return (
    <IxInputGroup style={{ margin: '1rem 0 ' }}>
      <IxIcon
        name="search"
        slot="input-start"
        size="16"
        color="color-primary"
      ></IxIcon>

      <input
        type={'text'}
        className={'form-control'}
        placeholder="Search"
        onChange={(input) => {
          const value = input.target.value;
          props.onChange(value);
        }}
      />
    </IxInputGroup>
  );
}

const ThemeFonts: React.FunctionComponent = () => {
  useTheme();
  const [fonts] = useState(themeFonts);
  const [filter, setFilter] = useState('');
  const [framework, setFramework] = useState<CodeSelection>('react');
  const updateFilter = (newFilterValue: string) => {
    setFilter(newFilterValue);
  };

  const onFilter = useCallback(
    (font: string) => {
      if (!filter) {
        {
          return true;
        }
      }

      return font.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
    },
    [fonts, filter]
  );

  const items = fonts.filter(onFilter);

  return (
    <div className="Theme__Fonts">
      <IxTabs layout={'stretched'}>
        <IxTabItem onTabClick={() => setFramework('react')}>
          React / Vue
        </IxTabItem>
        <IxTabItem onTabClick={() => setFramework('angular')}>
          Angular / Web Components
        </IxTabItem>
        <IxTabItem onTabClick={() => setFramework('class')}>CSS</IxTabItem>
      </IxTabs>
      <Search onChange={(value) => updateFilter(value)} />
      <div className="container-fluid">
        <div className="Section row">
          <IxTypography className="col-sm-2" format={'h3'}>
            Name
          </IxTypography>
          <IxTypography className="col-sm-4" format={'h3'}>
            Preview
          </IxTypography>
          <IxTypography className="col-sm-3" format={'h3'}>
            Code
          </IxTypography>
        </div>
        {items.map((font) => {
          return (
            <div key={font} className={'Section row'}>
              <div className="col-sm-2 Fonts__Name">{font}</div>
              <IxTypography className="col-sm-4" format={font}>
                {getPreview(font)}
              </IxTypography>
              <div className="col-sm-6">
                <CodeBlock language="jsx" className="Code">
                  {getCodeExample(font, framework)}
                </CodeBlock>
              </div>
            </div>
          );
        })}
        {items.length === 0 ? (
          <IxEmptyState
            className="Empty"
            header={`No font found with name "${filter}"`}
            icon="search"
          ></IxEmptyState>
        ) : null}
      </div>
    </div>
  );
};

export default ThemeFonts;
