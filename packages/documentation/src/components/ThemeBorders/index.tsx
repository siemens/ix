/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { toast } from '@siemens/ix';
import {
  IxCol,
  IxIcon,
  IxIconButton,
  IxInputGroup,
  IxLayoutGrid,
  IxRow,
} from '@siemens/ix-react';
import React, { useState } from 'react';
import { themeBorders } from './borders';
import './ThemeBorders.css';
import { useTheme } from '@site/src/utils/hooks/useTheme';

function Search(props: { onChange: (value: string) => void }) {
  return (
    <IxInputGroup style={{ marginBottom: '2rem' }}>
      <IxIcon
        name="search"
        slot="input-start"
        size="16"
        color="color-primary"
      ></IxIcon>

      <input
        type={'text'}
        className={'ix-form-control'}
        placeholder="Search"
        onChange={(input) => {
          const value = input.target.value;
          props.onChange(value);
        }}
      />
    </IxInputGroup>
  );
}

function BorderPreview(props: { border: string }) {
  return (
    <div className={`Border__Preview`}>
      <div
        style={{
          borderTop: `var(${props.border})`,
        }}
      ></div>
    </div>
  );
}

const ThemeBorders: React.FC = () => {
  const [borders, setBorders] = useState(themeBorders);
  useTheme();

  const updateFilter = (filter) => {
    setBorders([
      ...themeBorders.filter((color) => {
        if (!filter) {
          return true;
        }

        return color.toLowerCase().includes(filter.toLowerCase());
      }),
    ]);
  };

  const copyToClipboard = async (value: string) => {
    await navigator.clipboard.writeText(value);
    toast.success({
      message: 'Copied to clipboard!',
      autoCloseDelay: 800,
    });
  };

  return (
    <div className="Theme__Borders">
      <Search onChange={(value) => updateFilter(value)} />
      <IxLayoutGrid>
        {borders.map((border) => {
          return (
            <IxRow key={border} className={'Section'}>
              <IxCol size="3">
                <BorderPreview border={border} />
              </IxCol>
              <IxCol size="8" className="Border__Name">
                {border}
              </IxCol>
              <IxCol size="1">
                <IxIconButton
                  icon="copy"
                  ghost
                  style={{ marginRight: '1rem' }}
                  className="Copy__Icon"
                  oval
                  onClick={() => copyToClipboard(border)}
                />
              </IxCol>
            </IxRow>
          );
        })}
      </IxLayoutGrid>
    </div>
  );
};

export default ThemeBorders;
