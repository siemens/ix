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
import { themeShadows } from './shadows';
import './ThemeShadows.css';

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

function ShadowPreview(props: { border: string }) {
  return (
    <div className="col-2 Shadow__Preview">
      <div
        style={{
          boxShadow: `var(${props.border})`,
        }}
      ></div>
    </div>
  );
}

function ThemeShadows() {
  const [borders, setBorders] = useState(themeShadows);

  const updateFilter = (filter) => {
    setBorders([
      ...themeShadows.filter((color) => {
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
    <div className="Theme__Shadows">
      <Search onChange={(value) => updateFilter(value)} />
      <div className="container-fluid">
        {borders.map((border) => {
          return (
            <div key={border} className={'Section row'}>
              <ShadowPreview border={border} />
              <IxIconButton
                icon="copy"
                ghost
                style={{ marginRight: '1rem' }}
                className="col-1 Copy__Icon"
                oval
                onClick={() => copyToClipboard(border)}
              />
              <div className="col-7 Shadow__Name">{border}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ThemeShadows;
