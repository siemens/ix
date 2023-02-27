/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { toast } from '@siemens/ix';
import { IxIcon, IxIconButton, IxInputGroup } from '@siemens/ix-react';
import React, { useState } from 'react';
import { themeBorders } from './borders';
import './ThemeBorders.css';

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

function BorderPreview(props: { border: string }) {
  return (
    <div className="col-2 Border__Preview">
      <div
        style={{
          borderTop: `var(${props.border})`,
        }}
      ></div>
    </div>
  );
}

function ThemeBorders() {
  const [borders, setBorders] = useState(themeBorders);

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
      <div className="container-fluid">
        {borders.map((border) => {
          return (
            <div key={border} className={'Section row'}>
              <BorderPreview border={border} />
              <IxIconButton
                icon="copy"
                ghost
                style={{ marginRight: '1rem' }}
                className="col-1 Copy__Icon"
                oval
                onClick={() => copyToClipboard(border)}
              />
              <div className="col-7 Border__Name">{border}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ThemeBorders;
